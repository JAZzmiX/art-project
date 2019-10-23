import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {onError} from 'apollo-link-error';
import {ApolloLink} from 'apollo-link';
import { environment } from 'src/environments/environment';

const uri = `${environment.APIEndpoint}/graphql`; // <-- add the URL of the GraphQL server here

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});



const authLink = new ApolloLink((operation, forward) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('accessToken');
  // console.log(operation);
  // Use the setContext method to set the HTTP headers.
  operation.setContext({
      headers: {
          'Access-Control-Allow-Origin': uri,
          'Access-Control-Allow-Methods': 'GET, POST',
          'Authorization': token ? `Bearer ${token}` : ''
      }
  });
  // Call the next link in the middleware chain.
  return forward(operation);
});

export function createApollo(httpLink: HttpLink) {
  return {
      ssrMode: true,
      link: ApolloLink.from([
      errorLink,
      authLink,
      httpLink.create({
        uri,
        withCredentials: true
      }),
    ]),
    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
