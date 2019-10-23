// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  APIEndpoint: 'http://157.230.123.137',
  authEndpoint: 'http://157.230.123.137/api/auth/local',
  refreshTokenEndpoint: 'http://157.230.123.137/api/auth/refresh-token',
  // APIEndpoint: 'https://siroshtan.pp.ua',
  homePageId: 'ec3c87d0-bd2e-4f1f-ae8c-2409d92f146c',
  categoryId: {
    events: '2f1afccb-0ffc-4de9-9e12-603736e54dbb',
    exhibitions: '127ae992-7455-4097-a825-49e7959fa9fb',
    shop: 'bab7f8c0-b88b-43f3-9cf0-3616339c1193',
    artists: '104e66aa-3f32-465d-8fa7-1bc2dadb9e20'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
