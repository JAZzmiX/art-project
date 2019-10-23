/* tslint:disable */
import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
  timestamptz: any;
  smallint: any;
  navigation_float_enum: any;
  translation_page_enum: any;
  jsonb: any;
  numeric: any;
  order_paymenttype_enum: any;
  payment_service_enum: any;
  payment_status_enum: any;
  user_role_enum: any;
  _text: any;
  Upload: any;
  Date: any;
};

/** expression to compare columns of type _text. All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: Maybe<Scalars["_text"]>;
  _gt?: Maybe<Scalars["_text"]>;
  _gte?: Maybe<Scalars["_text"]>;
  _in?: Maybe<Array<Scalars["_text"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["_text"]>;
  _lte?: Maybe<Scalars["_text"]>;
  _neq?: Maybe<Scalars["_text"]>;
  _nin?: Maybe<Array<Scalars["_text"]>>;
};

export type AddSocialNetworkInput = {
  link: Scalars["String"];
  className: Scalars["String"];
};

export type AddSocialNetworkResult = {
  __typename?: "AddSocialNetworkResult";
  ok: Scalars["Boolean"];
};

/** columns and relationships of "artist" */
export type Artist = {
  __typename?: "artist";
  /** An array relationship */
  artistCategories: Array<ArtistCategory>;
  /** An aggregated array relationship */
  artistCategories_aggregate: ArtistCategory_Aggregate;
  createdAt: Scalars["timestamptz"];
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An array relationship */
  links: Array<Link>;
  /** An aggregated array relationship */
  links_aggregate: Link_Aggregate;
  photo: Scalars["jsonb"];
  /** An array relationship */
  translations: Array<ArtistI18n>;
  /** An aggregated array relationship */
  translations_aggregate: ArtistI18n_Aggregate;
  /** An array relationship */
  works: Array<Work>;
  /** An aggregated array relationship */
  works_aggregate: Work_Aggregate;
};

/** columns and relationships of "artist" */
export type ArtistArtistCategoriesArgs = {
  distinct_on?: Maybe<Array<ArtistCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistCategory_Order_By>>;
  where?: Maybe<ArtistCategory_Bool_Exp>;
};

/** columns and relationships of "artist" */
export type ArtistArtistCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<ArtistCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistCategory_Order_By>>;
  where?: Maybe<ArtistCategory_Bool_Exp>;
};

/** columns and relationships of "artist" */
export type ArtistLinksArgs = {
  distinct_on?: Maybe<Array<Link_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Link_Order_By>>;
  where?: Maybe<Link_Bool_Exp>;
};

/** columns and relationships of "artist" */
export type ArtistLinks_AggregateArgs = {
  distinct_on?: Maybe<Array<Link_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Link_Order_By>>;
  where?: Maybe<Link_Bool_Exp>;
};

/** columns and relationships of "artist" */
export type ArtistPhotoArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "artist" */
export type ArtistTranslationsArgs = {
  distinct_on?: Maybe<Array<ArtistI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistI18n_Order_By>>;
  where?: Maybe<ArtistI18n_Bool_Exp>;
};

/** columns and relationships of "artist" */
export type ArtistTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<ArtistI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistI18n_Order_By>>;
  where?: Maybe<ArtistI18n_Bool_Exp>;
};

/** columns and relationships of "artist" */
export type ArtistWorksArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};

/** columns and relationships of "artist" */
export type ArtistWorks_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};

/** aggregated selection of "artist" */
export type Artist_Aggregate = {
  __typename?: "artist_aggregate";
  aggregate?: Maybe<Artist_Aggregate_Fields>;
  nodes: Array<Artist>;
};

/** aggregate fields of "artist" */
export type Artist_Aggregate_Fields = {
  __typename?: "artist_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Artist_Max_Fields>;
  min?: Maybe<Artist_Min_Fields>;
};

/** aggregate fields of "artist" */
export type Artist_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Artist_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "artist" */
export type Artist_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Artist_Max_Order_By>;
  min?: Maybe<Artist_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Artist_Append_Input = {
  photo?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "artist" */
export type Artist_Arr_Rel_Insert_Input = {
  data: Array<Artist_Insert_Input>;
  on_conflict?: Maybe<Artist_On_Conflict>;
};

/** Boolean expression to filter rows from the table "artist". All fields are combined with a logical 'AND'. */
export type Artist_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Artist_Bool_Exp>>>;
  _not?: Maybe<Artist_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Artist_Bool_Exp>>>;
  artistCategories?: Maybe<ArtistCategory_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  links?: Maybe<Link_Bool_Exp>;
  photo?: Maybe<Jsonb_Comparison_Exp>;
  translations?: Maybe<ArtistI18n_Bool_Exp>;
  works?: Maybe<Work_Bool_Exp>;
};

/** unique or primary key constraints on table "artist" */
export enum Artist_Constraint {
  /** unique or primary key constraint */
  Pk_55b76e71568b5db4d01d3e394ed = "PK_55b76e71568b5db4d01d3e394ed"
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Artist_Delete_At_Path_Input = {
  photo?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Artist_Delete_Elem_Input = {
  photo?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Artist_Delete_Key_Input = {
  photo?: Maybe<Scalars["String"]>;
};

/** input type for inserting data into table "artist" */
export type Artist_Insert_Input = {
  artistCategories?: Maybe<ArtistCategory_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  links?: Maybe<Link_Arr_Rel_Insert_Input>;
  photo?: Maybe<Scalars["jsonb"]>;
  translations?: Maybe<ArtistI18n_Arr_Rel_Insert_Input>;
  works?: Maybe<Work_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Artist_Max_Fields = {
  __typename?: "artist_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "artist" */
export type Artist_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Artist_Min_Fields = {
  __typename?: "artist_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "artist" */
export type Artist_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "artist" */
export type Artist_Mutation_Response = {
  __typename?: "artist_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Artist>;
};

/** input type for inserting object relation for remote table "artist" */
export type Artist_Obj_Rel_Insert_Input = {
  data: Artist_Insert_Input;
  on_conflict?: Maybe<Artist_On_Conflict>;
};

/** on conflict condition type for table "artist" */
export type Artist_On_Conflict = {
  constraint: Artist_Constraint;
  update_columns: Array<Artist_Update_Column>;
};

/** ordering options when selecting data from "artist" */
export type Artist_Order_By = {
  artistCategories_aggregate?: Maybe<ArtistCategory_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  links_aggregate?: Maybe<Link_Aggregate_Order_By>;
  photo?: Maybe<Order_By>;
  translations_aggregate?: Maybe<ArtistI18n_Aggregate_Order_By>;
  works_aggregate?: Maybe<Work_Aggregate_Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Artist_Prepend_Input = {
  photo?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "artist" */
export enum Artist_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  Photo = "photo"
}

/** input type for updating data in table "artist" */
export type Artist_Set_Input = {
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  photo?: Maybe<Scalars["jsonb"]>;
};

/** update columns of table "artist" */
export enum Artist_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  Photo = "photo"
}

/** columns and relationships of "artistCategory" */
export type ArtistCategory = {
  __typename?: "artistCategory";
  /** An object relationship */
  artist: Artist;
  artistId: Scalars["uuid"];
  breadcrumb: Scalars["Boolean"];
  /** An object relationship */
  category: Category;
  categoryId: Scalars["uuid"];
};

/** aggregated selection of "artistCategory" */
export type ArtistCategory_Aggregate = {
  __typename?: "artistCategory_aggregate";
  aggregate?: Maybe<ArtistCategory_Aggregate_Fields>;
  nodes: Array<ArtistCategory>;
};

/** aggregate fields of "artistCategory" */
export type ArtistCategory_Aggregate_Fields = {
  __typename?: "artistCategory_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
};

/** aggregate fields of "artistCategory" */
export type ArtistCategory_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ArtistCategory_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "artistCategory" */
export type ArtistCategory_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "artistCategory" */
export type ArtistCategory_Arr_Rel_Insert_Input = {
  data: Array<ArtistCategory_Insert_Input>;
  on_conflict?: Maybe<ArtistCategory_On_Conflict>;
};

/** Boolean expression to filter rows from the table "artistCategory". All fields are combined with a logical 'AND'. */
export type ArtistCategory_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ArtistCategory_Bool_Exp>>>;
  _not?: Maybe<ArtistCategory_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ArtistCategory_Bool_Exp>>>;
  artist?: Maybe<Artist_Bool_Exp>;
  artistId?: Maybe<Uuid_Comparison_Exp>;
  breadcrumb?: Maybe<Boolean_Comparison_Exp>;
  category?: Maybe<Category_Bool_Exp>;
  categoryId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "artistCategory" */
export enum ArtistCategory_Constraint {
  /** unique or primary key constraint */
  Pk_3fc4782ed5ef8959e993d8481fe = "PK_3fc4782ed5ef8959e993d8481fe"
}

/** input type for inserting data into table "artistCategory" */
export type ArtistCategory_Insert_Input = {
  artist?: Maybe<Artist_Obj_Rel_Insert_Input>;
  artistId?: Maybe<Scalars["uuid"]>;
  breadcrumb?: Maybe<Scalars["Boolean"]>;
  category?: Maybe<Category_Obj_Rel_Insert_Input>;
  categoryId?: Maybe<Scalars["uuid"]>;
};

/** response of any mutation on the table "artistCategory" */
export type ArtistCategory_Mutation_Response = {
  __typename?: "artistCategory_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<ArtistCategory>;
};

/** input type for inserting object relation for remote table "artistCategory" */
export type ArtistCategory_Obj_Rel_Insert_Input = {
  data: ArtistCategory_Insert_Input;
  on_conflict?: Maybe<ArtistCategory_On_Conflict>;
};

/** on conflict condition type for table "artistCategory" */
export type ArtistCategory_On_Conflict = {
  constraint: ArtistCategory_Constraint;
  update_columns: Array<ArtistCategory_Update_Column>;
};

/** ordering options when selecting data from "artistCategory" */
export type ArtistCategory_Order_By = {
  artist?: Maybe<Artist_Order_By>;
  artistId?: Maybe<Order_By>;
  breadcrumb?: Maybe<Order_By>;
  category?: Maybe<Category_Order_By>;
  categoryId?: Maybe<Order_By>;
};

/** select columns of table "artistCategory" */
export enum ArtistCategory_Select_Column {
  /** column name */
  ArtistId = "artistId",
  /** column name */
  Breadcrumb = "breadcrumb",
  /** column name */
  CategoryId = "categoryId"
}

/** input type for updating data in table "artistCategory" */
export type ArtistCategory_Set_Input = {
  artistId?: Maybe<Scalars["uuid"]>;
  breadcrumb?: Maybe<Scalars["Boolean"]>;
  categoryId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "artistCategory" */
export enum ArtistCategory_Update_Column {
  /** column name */
  ArtistId = "artistId",
  /** column name */
  Breadcrumb = "breadcrumb",
  /** column name */
  CategoryId = "categoryId"
}

/** columns and relationships of "artistI18n" */
export type ArtistI18n = {
  __typename?: "artistI18n";
  /** An object relationship */
  artist: Artist;
  artistId: Scalars["uuid"];
  date?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  metaDescription: Scalars["String"];
  metaTitle: Scalars["String"];
  name: Scalars["String"];
  slug: Scalars["String"];
};

/** aggregated selection of "artistI18n" */
export type ArtistI18n_Aggregate = {
  __typename?: "artistI18n_aggregate";
  aggregate?: Maybe<ArtistI18n_Aggregate_Fields>;
  nodes: Array<ArtistI18n>;
};

/** aggregate fields of "artistI18n" */
export type ArtistI18n_Aggregate_Fields = {
  __typename?: "artistI18n_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<ArtistI18n_Max_Fields>;
  min?: Maybe<ArtistI18n_Min_Fields>;
};

/** aggregate fields of "artistI18n" */
export type ArtistI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ArtistI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "artistI18n" */
export type ArtistI18n_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<ArtistI18n_Max_Order_By>;
  min?: Maybe<ArtistI18n_Min_Order_By>;
};

/** input type for inserting array relation for remote table "artistI18n" */
export type ArtistI18n_Arr_Rel_Insert_Input = {
  data: Array<ArtistI18n_Insert_Input>;
  on_conflict?: Maybe<ArtistI18n_On_Conflict>;
};

/** Boolean expression to filter rows from the table "artistI18n". All fields are combined with a logical 'AND'. */
export type ArtistI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ArtistI18n_Bool_Exp>>>;
  _not?: Maybe<ArtistI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ArtistI18n_Bool_Exp>>>;
  artist?: Maybe<Artist_Bool_Exp>;
  artistId?: Maybe<Uuid_Comparison_Exp>;
  date?: Maybe<Varchar_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<Text_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  metaDescription?: Maybe<Varchar_Comparison_Exp>;
  metaTitle?: Maybe<Varchar_Comparison_Exp>;
  name?: Maybe<Varchar_Comparison_Exp>;
  slug?: Maybe<Varchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "artistI18n" */
export enum ArtistI18n_Constraint {
  /** unique or primary key constraint */
  PkBb7af4874b4bbd24df76e2c8db3 = "PK_bb7af4874b4bbd24df76e2c8db3",
  /** unique or primary key constraint */
  UqE3b4071ce5f2f9f17c1b950c873 = "UQ_e3b4071ce5f2f9f17c1b950c873"
}

/** input type for inserting data into table "artistI18n" */
export type ArtistI18n_Insert_Input = {
  artist?: Maybe<Artist_Obj_Rel_Insert_Input>;
  artistId?: Maybe<Scalars["uuid"]>;
  date?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type ArtistI18n_Max_Fields = {
  __typename?: "artistI18n_max_fields";
  date?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "artistI18n" */
export type ArtistI18n_Max_Order_By = {
  date?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ArtistI18n_Min_Fields = {
  __typename?: "artistI18n_min_fields";
  date?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "artistI18n" */
export type ArtistI18n_Min_Order_By = {
  date?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
};

/** response of any mutation on the table "artistI18n" */
export type ArtistI18n_Mutation_Response = {
  __typename?: "artistI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<ArtistI18n>;
};

/** input type for inserting object relation for remote table "artistI18n" */
export type ArtistI18n_Obj_Rel_Insert_Input = {
  data: ArtistI18n_Insert_Input;
  on_conflict?: Maybe<ArtistI18n_On_Conflict>;
};

/** on conflict condition type for table "artistI18n" */
export type ArtistI18n_On_Conflict = {
  constraint: ArtistI18n_Constraint;
  update_columns: Array<ArtistI18n_Update_Column>;
};

/** ordering options when selecting data from "artistI18n" */
export type ArtistI18n_Order_By = {
  artist?: Maybe<Artist_Order_By>;
  artistId?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
};

/** select columns of table "artistI18n" */
export enum ArtistI18n_Select_Column {
  /** column name */
  ArtistId = "artistId",
  /** column name */
  Date = "date",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  MetaDescription = "metaDescription",
  /** column name */
  MetaTitle = "metaTitle",
  /** column name */
  Name = "name",
  /** column name */
  Slug = "slug"
}

/** input type for updating data in table "artistI18n" */
export type ArtistI18n_Set_Input = {
  artistId?: Maybe<Scalars["uuid"]>;
  date?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

/** update columns of table "artistI18n" */
export enum ArtistI18n_Update_Column {
  /** column name */
  ArtistId = "artistId",
  /** column name */
  Date = "date",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  MetaDescription = "metaDescription",
  /** column name */
  MetaTitle = "metaTitle",
  /** column name */
  Name = "name",
  /** column name */
  Slug = "slug"
}

export type ArtistPhoto = {
  __typename?: "ArtistPhoto";
  thumbnail: Scalars["String"];
  full: Scalars["String"];
};

/** columns and relationships of "basis" */
export type Basis = {
  __typename?: "basis";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An array relationship */
  translations: Array<BasisI18n>;
  /** An aggregated array relationship */
  translations_aggregate: BasisI18n_Aggregate;
  /** An array relationship */
  works: Array<Work>;
  /** An aggregated array relationship */
  works_aggregate: Work_Aggregate;
};

/** columns and relationships of "basis" */
export type BasisTranslationsArgs = {
  distinct_on?: Maybe<Array<BasisI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BasisI18n_Order_By>>;
  where?: Maybe<BasisI18n_Bool_Exp>;
};

/** columns and relationships of "basis" */
export type BasisTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<BasisI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BasisI18n_Order_By>>;
  where?: Maybe<BasisI18n_Bool_Exp>;
};

/** columns and relationships of "basis" */
export type BasisWorksArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};

/** columns and relationships of "basis" */
export type BasisWorks_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};

/** aggregated selection of "basis" */
export type Basis_Aggregate = {
  __typename?: "basis_aggregate";
  aggregate?: Maybe<Basis_Aggregate_Fields>;
  nodes: Array<Basis>;
};

/** aggregate fields of "basis" */
export type Basis_Aggregate_Fields = {
  __typename?: "basis_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Basis_Max_Fields>;
  min?: Maybe<Basis_Min_Fields>;
};

/** aggregate fields of "basis" */
export type Basis_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Basis_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "basis" */
export type Basis_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Basis_Max_Order_By>;
  min?: Maybe<Basis_Min_Order_By>;
};

/** input type for inserting array relation for remote table "basis" */
export type Basis_Arr_Rel_Insert_Input = {
  data: Array<Basis_Insert_Input>;
  on_conflict?: Maybe<Basis_On_Conflict>;
};

/** Boolean expression to filter rows from the table "basis". All fields are combined with a logical 'AND'. */
export type Basis_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Basis_Bool_Exp>>>;
  _not?: Maybe<Basis_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Basis_Bool_Exp>>>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  translations?: Maybe<BasisI18n_Bool_Exp>;
  works?: Maybe<Work_Bool_Exp>;
};

/** unique or primary key constraints on table "basis" */
export enum Basis_Constraint {
  /** unique or primary key constraint */
  Pk_794d2f4dbab3c1cf4abaa43981e = "PK_794d2f4dbab3c1cf4abaa43981e"
}

/** input type for inserting data into table "basis" */
export type Basis_Insert_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  translations?: Maybe<BasisI18n_Arr_Rel_Insert_Input>;
  works?: Maybe<Work_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Basis_Max_Fields = {
  __typename?: "basis_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "basis" */
export type Basis_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Basis_Min_Fields = {
  __typename?: "basis_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "basis" */
export type Basis_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "basis" */
export type Basis_Mutation_Response = {
  __typename?: "basis_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Basis>;
};

/** input type for inserting object relation for remote table "basis" */
export type Basis_Obj_Rel_Insert_Input = {
  data: Basis_Insert_Input;
  on_conflict?: Maybe<Basis_On_Conflict>;
};

/** on conflict condition type for table "basis" */
export type Basis_On_Conflict = {
  constraint: Basis_Constraint;
  update_columns: Array<Basis_Update_Column>;
};

/** ordering options when selecting data from "basis" */
export type Basis_Order_By = {
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  translations_aggregate?: Maybe<BasisI18n_Aggregate_Order_By>;
  works_aggregate?: Maybe<Work_Aggregate_Order_By>;
};

/** select columns of table "basis" */
export enum Basis_Select_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id"
}

/** input type for updating data in table "basis" */
export type Basis_Set_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "basis" */
export enum Basis_Update_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id"
}

/** columns and relationships of "basisI18n" */
export type BasisI18n = {
  __typename?: "basisI18n";
  /** An object relationship */
  basis: Basis;
  basisId: Scalars["uuid"];
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  name: Scalars["String"];
};

/** aggregated selection of "basisI18n" */
export type BasisI18n_Aggregate = {
  __typename?: "basisI18n_aggregate";
  aggregate?: Maybe<BasisI18n_Aggregate_Fields>;
  nodes: Array<BasisI18n>;
};

/** aggregate fields of "basisI18n" */
export type BasisI18n_Aggregate_Fields = {
  __typename?: "basisI18n_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<BasisI18n_Max_Fields>;
  min?: Maybe<BasisI18n_Min_Fields>;
};

/** aggregate fields of "basisI18n" */
export type BasisI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<BasisI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "basisI18n" */
export type BasisI18n_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<BasisI18n_Max_Order_By>;
  min?: Maybe<BasisI18n_Min_Order_By>;
};

/** input type for inserting array relation for remote table "basisI18n" */
export type BasisI18n_Arr_Rel_Insert_Input = {
  data: Array<BasisI18n_Insert_Input>;
  on_conflict?: Maybe<BasisI18n_On_Conflict>;
};

/** Boolean expression to filter rows from the table "basisI18n". All fields are combined with a logical 'AND'. */
export type BasisI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<BasisI18n_Bool_Exp>>>;
  _not?: Maybe<BasisI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<BasisI18n_Bool_Exp>>>;
  basis?: Maybe<Basis_Bool_Exp>;
  basisId?: Maybe<Uuid_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<Varchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "basisI18n" */
export enum BasisI18n_Constraint {
  /** unique or primary key constraint */
  Pk_20e17c4e061fb7e6bfcd1f42355 = "PK_20e17c4e061fb7e6bfcd1f42355"
}

/** input type for inserting data into table "basisI18n" */
export type BasisI18n_Insert_Input = {
  basis?: Maybe<Basis_Obj_Rel_Insert_Input>;
  basisId?: Maybe<Scalars["uuid"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type BasisI18n_Max_Fields = {
  __typename?: "basisI18n_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "basisI18n" */
export type BasisI18n_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type BasisI18n_Min_Fields = {
  __typename?: "basisI18n_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "basisI18n" */
export type BasisI18n_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "basisI18n" */
export type BasisI18n_Mutation_Response = {
  __typename?: "basisI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<BasisI18n>;
};

/** input type for inserting object relation for remote table "basisI18n" */
export type BasisI18n_Obj_Rel_Insert_Input = {
  data: BasisI18n_Insert_Input;
  on_conflict?: Maybe<BasisI18n_On_Conflict>;
};

/** on conflict condition type for table "basisI18n" */
export type BasisI18n_On_Conflict = {
  constraint: BasisI18n_Constraint;
  update_columns: Array<BasisI18n_Update_Column>;
};

/** ordering options when selecting data from "basisI18n" */
export type BasisI18n_Order_By = {
  basis?: Maybe<Basis_Order_By>;
  basisId?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** select columns of table "basisI18n" */
export enum BasisI18n_Select_Column {
  /** column name */
  BasisId = "basisId",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Name = "name"
}

/** input type for updating data in table "basisI18n" */
export type BasisI18n_Set_Input = {
  basisId?: Maybe<Scalars["uuid"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** update columns of table "basisI18n" */
export enum BasisI18n_Update_Column {
  /** column name */
  BasisId = "basisId",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Name = "name"
}

/** expression to compare columns of type boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars["Boolean"]>;
  _gt?: Maybe<Scalars["Boolean"]>;
  _gte?: Maybe<Scalars["Boolean"]>;
  _in?: Maybe<Array<Scalars["Boolean"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Boolean"]>;
  _lte?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Scalars["Boolean"]>;
  _nin?: Maybe<Array<Scalars["Boolean"]>>;
};

export type Breadcrumb = {
  __typename?: "Breadcrumb";
  slug: Scalars["String"];
  name: Scalars["String"];
};

/** columns and relationships of "cart" */
export type Cart = {
  __typename?: "cart";
  createdAt: Scalars["timestamptz"];
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  guid?: Maybe<Scalars["uuid"]>;
  id: Scalars["uuid"];
  quantity: Scalars["smallint"];
  updatedAt: Scalars["timestamptz"];
  /** An object relationship */
  user?: Maybe<User>;
  userId?: Maybe<Scalars["uuid"]>;
  /** An object relationship */
  work: Work;
  workId: Scalars["uuid"];
};

/** aggregated selection of "cart" */
export type Cart_Aggregate = {
  __typename?: "cart_aggregate";
  aggregate?: Maybe<Cart_Aggregate_Fields>;
  nodes: Array<Cart>;
};

/** aggregate fields of "cart" */
export type Cart_Aggregate_Fields = {
  __typename?: "cart_aggregate_fields";
  avg?: Maybe<Cart_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Cart_Max_Fields>;
  min?: Maybe<Cart_Min_Fields>;
  stddev?: Maybe<Cart_Stddev_Fields>;
  stddev_pop?: Maybe<Cart_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cart_Stddev_Samp_Fields>;
  sum?: Maybe<Cart_Sum_Fields>;
  var_pop?: Maybe<Cart_Var_Pop_Fields>;
  var_samp?: Maybe<Cart_Var_Samp_Fields>;
  variance?: Maybe<Cart_Variance_Fields>;
};

/** aggregate fields of "cart" */
export type Cart_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Cart_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "cart" */
export type Cart_Aggregate_Order_By = {
  avg?: Maybe<Cart_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Cart_Max_Order_By>;
  min?: Maybe<Cart_Min_Order_By>;
  stddev?: Maybe<Cart_Stddev_Order_By>;
  stddev_pop?: Maybe<Cart_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Cart_Stddev_Samp_Order_By>;
  sum?: Maybe<Cart_Sum_Order_By>;
  var_pop?: Maybe<Cart_Var_Pop_Order_By>;
  var_samp?: Maybe<Cart_Var_Samp_Order_By>;
  variance?: Maybe<Cart_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "cart" */
export type Cart_Arr_Rel_Insert_Input = {
  data: Array<Cart_Insert_Input>;
  on_conflict?: Maybe<Cart_On_Conflict>;
};

/** aggregate avg on columns */
export type Cart_Avg_Fields = {
  __typename?: "cart_avg_fields";
  quantity?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "cart" */
export type Cart_Avg_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "cart". All fields are combined with a logical 'AND'. */
export type Cart_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Cart_Bool_Exp>>>;
  _not?: Maybe<Cart_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Cart_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  guid?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  quantity?: Maybe<Smallint_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
  work?: Maybe<Work_Bool_Exp>;
  workId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "cart" */
export enum Cart_Constraint {
  /** unique or primary key constraint */
  PkC524ec48751b9b5bcfbf6e59be7 = "PK_c524ec48751b9b5bcfbf6e59be7"
}

/** input type for incrementing integer columne in table "cart" */
export type Cart_Inc_Input = {
  quantity?: Maybe<Scalars["smallint"]>;
};

/** input type for inserting data into table "cart" */
export type Cart_Insert_Input = {
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  guid?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  quantity?: Maybe<Scalars["smallint"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars["uuid"]>;
  work?: Maybe<Work_Obj_Rel_Insert_Input>;
  workId?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Cart_Max_Fields = {
  __typename?: "cart_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  quantity?: Maybe<Scalars["smallint"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "cart" */
export type Cart_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Cart_Min_Fields = {
  __typename?: "cart_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  quantity?: Maybe<Scalars["smallint"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "cart" */
export type Cart_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "cart" */
export type Cart_Mutation_Response = {
  __typename?: "cart_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Cart>;
};

/** input type for inserting object relation for remote table "cart" */
export type Cart_Obj_Rel_Insert_Input = {
  data: Cart_Insert_Input;
  on_conflict?: Maybe<Cart_On_Conflict>;
};

/** on conflict condition type for table "cart" */
export type Cart_On_Conflict = {
  constraint: Cart_Constraint;
  update_columns: Array<Cart_Update_Column>;
};

/** ordering options when selecting data from "cart" */
export type Cart_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  guid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
  work?: Maybe<Work_Order_By>;
  workId?: Maybe<Order_By>;
};

/** select columns of table "cart" */
export enum Cart_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Guid = "guid",
  /** column name */
  Id = "id",
  /** column name */
  Quantity = "quantity",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserId = "userId",
  /** column name */
  WorkId = "workId"
}

/** input type for updating data in table "cart" */
export type Cart_Set_Input = {
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  guid?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  quantity?: Maybe<Scalars["smallint"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
  userId?: Maybe<Scalars["uuid"]>;
  workId?: Maybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type Cart_Stddev_Fields = {
  __typename?: "cart_stddev_fields";
  quantity?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "cart" */
export type Cart_Stddev_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Cart_Stddev_Pop_Fields = {
  __typename?: "cart_stddev_pop_fields";
  quantity?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "cart" */
export type Cart_Stddev_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Cart_Stddev_Samp_Fields = {
  __typename?: "cart_stddev_samp_fields";
  quantity?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "cart" */
export type Cart_Stddev_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Cart_Sum_Fields = {
  __typename?: "cart_sum_fields";
  quantity?: Maybe<Scalars["smallint"]>;
};

/** order by sum() on columns of table "cart" */
export type Cart_Sum_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** update columns of table "cart" */
export enum Cart_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Guid = "guid",
  /** column name */
  Id = "id",
  /** column name */
  Quantity = "quantity",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserId = "userId",
  /** column name */
  WorkId = "workId"
}

/** aggregate var_pop on columns */
export type Cart_Var_Pop_Fields = {
  __typename?: "cart_var_pop_fields";
  quantity?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "cart" */
export type Cart_Var_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Cart_Var_Samp_Fields = {
  __typename?: "cart_var_samp_fields";
  quantity?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "cart" */
export type Cart_Var_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Cart_Variance_Fields = {
  __typename?: "cart_variance_fields";
  quantity?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "cart" */
export type Cart_Variance_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** columns and relationships of "category" */
export type Category = {
  __typename?: "category";
  /** An array relationship */
  ancestors: Array<Category_Closure>;
  /** An aggregated array relationship */
  ancestors_aggregate: Category_Closure_Aggregate;
  /** An array relationship */
  artistCategories: Array<ArtistCategory>;
  /** An aggregated array relationship */
  artistCategories_aggregate: ArtistCategory_Aggregate;
  /** An array relationship */
  categoryWorks: Array<WorkCategory>;
  /** An aggregated array relationship */
  categoryWorks_aggregate: WorkCategory_Aggregate;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  /** An array relationship */
  descendants: Array<Category_Closure>;
  /** An aggregated array relationship */
  descendants_aggregate: Category_Closure_Aggregate;
  /** An array relationship */
  exhibitionCategories: Array<ExhibitionCategory>;
  /** An aggregated array relationship */
  exhibitionCategories_aggregate: ExhibitionCategory_Aggregate;
  id: Scalars["uuid"];
  /** An array relationship */
  newsCategories: Array<NewsCategory>;
  /** An aggregated array relationship */
  newsCategories_aggregate: NewsCategory_Aggregate;
  /** An array relationship */
  pageCategories: Array<PageCategory>;
  /** An aggregated array relationship */
  pageCategories_aggregate: PageCategory_Aggregate;
  photo?: Maybe<Scalars["String"]>;
  showInCollection: Scalars["Boolean"];
  showInShop: Scalars["Boolean"];
  /** An array relationship */
  translations: Array<CategoryI18n>;
  /** An aggregated array relationship */
  translations_aggregate: CategoryI18n_Aggregate;
};

/** columns and relationships of "category" */
export type CategoryAncestorsArgs = {
  distinct_on?: Maybe<Array<Category_Closure_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Category_Closure_Order_By>>;
  where?: Maybe<Category_Closure_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryAncestors_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Closure_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Category_Closure_Order_By>>;
  where?: Maybe<Category_Closure_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryArtistCategoriesArgs = {
  distinct_on?: Maybe<Array<ArtistCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistCategory_Order_By>>;
  where?: Maybe<ArtistCategory_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryArtistCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<ArtistCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistCategory_Order_By>>;
  where?: Maybe<ArtistCategory_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryCategoryWorksArgs = {
  distinct_on?: Maybe<Array<WorkCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkCategory_Order_By>>;
  where?: Maybe<WorkCategory_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryCategoryWorks_AggregateArgs = {
  distinct_on?: Maybe<Array<WorkCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkCategory_Order_By>>;
  where?: Maybe<WorkCategory_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryDescendantsArgs = {
  distinct_on?: Maybe<Array<Category_Closure_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Category_Closure_Order_By>>;
  where?: Maybe<Category_Closure_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryDescendants_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Closure_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Category_Closure_Order_By>>;
  where?: Maybe<Category_Closure_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryExhibitionCategoriesArgs = {
  distinct_on?: Maybe<Array<ExhibitionCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionCategory_Order_By>>;
  where?: Maybe<ExhibitionCategory_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryExhibitionCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<ExhibitionCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionCategory_Order_By>>;
  where?: Maybe<ExhibitionCategory_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryNewsCategoriesArgs = {
  distinct_on?: Maybe<Array<NewsCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsCategory_Order_By>>;
  where?: Maybe<NewsCategory_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryNewsCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<NewsCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsCategory_Order_By>>;
  where?: Maybe<NewsCategory_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryPageCategoriesArgs = {
  distinct_on?: Maybe<Array<PageCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageCategory_Order_By>>;
  where?: Maybe<PageCategory_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryPageCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<PageCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageCategory_Order_By>>;
  where?: Maybe<PageCategory_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryTranslationsArgs = {
  distinct_on?: Maybe<Array<CategoryI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CategoryI18n_Order_By>>;
  where?: Maybe<CategoryI18n_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<CategoryI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CategoryI18n_Order_By>>;
  where?: Maybe<CategoryI18n_Bool_Exp>;
};

/** aggregated selection of "category" */
export type Category_Aggregate = {
  __typename?: "category_aggregate";
  aggregate?: Maybe<Category_Aggregate_Fields>;
  nodes: Array<Category>;
};

/** aggregate fields of "category" */
export type Category_Aggregate_Fields = {
  __typename?: "category_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Category_Max_Fields>;
  min?: Maybe<Category_Min_Fields>;
};

/** aggregate fields of "category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Category_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "category" */
export type Category_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Category_Max_Order_By>;
  min?: Maybe<Category_Min_Order_By>;
};

/** input type for inserting array relation for remote table "category" */
export type Category_Arr_Rel_Insert_Input = {
  data: Array<Category_Insert_Input>;
  on_conflict?: Maybe<Category_On_Conflict>;
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Category_Bool_Exp>>>;
  _not?: Maybe<Category_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Category_Bool_Exp>>>;
  ancestors?: Maybe<Category_Closure_Bool_Exp>;
  artistCategories?: Maybe<ArtistCategory_Bool_Exp>;
  categoryWorks?: Maybe<WorkCategory_Bool_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  descendants?: Maybe<Category_Closure_Bool_Exp>;
  exhibitionCategories?: Maybe<ExhibitionCategory_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  newsCategories?: Maybe<NewsCategory_Bool_Exp>;
  pageCategories?: Maybe<PageCategory_Bool_Exp>;
  photo?: Maybe<Varchar_Comparison_Exp>;
  showInCollection?: Maybe<Boolean_Comparison_Exp>;
  showInShop?: Maybe<Boolean_Comparison_Exp>;
  translations?: Maybe<CategoryI18n_Bool_Exp>;
};

/** columns and relationships of "category_closure" */
export type Category_Closure = {
  __typename?: "category_closure";
  /** An object relationship */
  ancestor: Category;
  /** An object relationship */
  descendant: Category;
  id_ancestor: Scalars["uuid"];
  id_descendant: Scalars["uuid"];
};

/** aggregated selection of "category_closure" */
export type Category_Closure_Aggregate = {
  __typename?: "category_closure_aggregate";
  aggregate?: Maybe<Category_Closure_Aggregate_Fields>;
  nodes: Array<Category_Closure>;
};

/** aggregate fields of "category_closure" */
export type Category_Closure_Aggregate_Fields = {
  __typename?: "category_closure_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
};

/** aggregate fields of "category_closure" */
export type Category_Closure_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Category_Closure_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "category_closure" */
export type Category_Closure_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "category_closure" */
export type Category_Closure_Arr_Rel_Insert_Input = {
  data: Array<Category_Closure_Insert_Input>;
  on_conflict?: Maybe<Category_Closure_On_Conflict>;
};

/** Boolean expression to filter rows from the table "category_closure". All fields are combined with a logical 'AND'. */
export type Category_Closure_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Category_Closure_Bool_Exp>>>;
  _not?: Maybe<Category_Closure_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Category_Closure_Bool_Exp>>>;
  ancestor?: Maybe<Category_Bool_Exp>;
  descendant?: Maybe<Category_Bool_Exp>;
  id_ancestor?: Maybe<Uuid_Comparison_Exp>;
  id_descendant?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "category_closure" */
export enum Category_Closure_Constraint {
  /** unique or primary key constraint */
  Pk_8da8666fc72217687e9b4f4c7e9 = "PK_8da8666fc72217687e9b4f4c7e9"
}

/** input type for inserting data into table "category_closure" */
export type Category_Closure_Insert_Input = {
  ancestor?: Maybe<Category_Obj_Rel_Insert_Input>;
  descendant?: Maybe<Category_Obj_Rel_Insert_Input>;
  id_ancestor?: Maybe<Scalars["uuid"]>;
  id_descendant?: Maybe<Scalars["uuid"]>;
};

/** response of any mutation on the table "category_closure" */
export type Category_Closure_Mutation_Response = {
  __typename?: "category_closure_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Category_Closure>;
};

/** input type for inserting object relation for remote table "category_closure" */
export type Category_Closure_Obj_Rel_Insert_Input = {
  data: Category_Closure_Insert_Input;
  on_conflict?: Maybe<Category_Closure_On_Conflict>;
};

/** on conflict condition type for table "category_closure" */
export type Category_Closure_On_Conflict = {
  constraint: Category_Closure_Constraint;
  update_columns: Array<Category_Closure_Update_Column>;
};

/** ordering options when selecting data from "category_closure" */
export type Category_Closure_Order_By = {
  ancestor?: Maybe<Category_Order_By>;
  descendant?: Maybe<Category_Order_By>;
  id_ancestor?: Maybe<Order_By>;
  id_descendant?: Maybe<Order_By>;
};

/** select columns of table "category_closure" */
export enum Category_Closure_Select_Column {
  /** column name */
  IdAncestor = "id_ancestor",
  /** column name */
  IdDescendant = "id_descendant"
}

/** input type for updating data in table "category_closure" */
export type Category_Closure_Set_Input = {
  id_ancestor?: Maybe<Scalars["uuid"]>;
  id_descendant?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "category_closure" */
export enum Category_Closure_Update_Column {
  /** column name */
  IdAncestor = "id_ancestor",
  /** column name */
  IdDescendant = "id_descendant"
}

/** unique or primary key constraints on table "category" */
export enum Category_Constraint {
  /** unique or primary key constraint */
  Pk_9c4e4a89e3674fc9f382d733f03 = "PK_9c4e4a89e3674fc9f382d733f03"
}

/** input type for inserting data into table "category" */
export type Category_Insert_Input = {
  ancestors?: Maybe<Category_Closure_Arr_Rel_Insert_Input>;
  artistCategories?: Maybe<ArtistCategory_Arr_Rel_Insert_Input>;
  categoryWorks?: Maybe<WorkCategory_Arr_Rel_Insert_Input>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  descendants?: Maybe<Category_Closure_Arr_Rel_Insert_Input>;
  exhibitionCategories?: Maybe<ExhibitionCategory_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["uuid"]>;
  newsCategories?: Maybe<NewsCategory_Arr_Rel_Insert_Input>;
  pageCategories?: Maybe<PageCategory_Arr_Rel_Insert_Input>;
  photo?: Maybe<Scalars["String"]>;
  showInCollection?: Maybe<Scalars["Boolean"]>;
  showInShop?: Maybe<Scalars["Boolean"]>;
  translations?: Maybe<CategoryI18n_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: "category_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  photo?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "category" */
export type Category_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
  photo?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: "category_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  photo?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "category" */
export type Category_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
  photo?: Maybe<Order_By>;
};

/** response of any mutation on the table "category" */
export type Category_Mutation_Response = {
  __typename?: "category_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "category" */
export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input;
  on_conflict?: Maybe<Category_On_Conflict>;
};

/** on conflict condition type for table "category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns: Array<Category_Update_Column>;
};

/** ordering options when selecting data from "category" */
export type Category_Order_By = {
  ancestors_aggregate?: Maybe<Category_Closure_Aggregate_Order_By>;
  artistCategories_aggregate?: Maybe<ArtistCategory_Aggregate_Order_By>;
  categoryWorks_aggregate?: Maybe<WorkCategory_Aggregate_Order_By>;
  deletedAt?: Maybe<Order_By>;
  descendants_aggregate?: Maybe<Category_Closure_Aggregate_Order_By>;
  exhibitionCategories_aggregate?: Maybe<ExhibitionCategory_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  newsCategories_aggregate?: Maybe<NewsCategory_Aggregate_Order_By>;
  pageCategories_aggregate?: Maybe<PageCategory_Aggregate_Order_By>;
  photo?: Maybe<Order_By>;
  showInCollection?: Maybe<Order_By>;
  showInShop?: Maybe<Order_By>;
  translations_aggregate?: Maybe<CategoryI18n_Aggregate_Order_By>;
};

/** select columns of table "category" */
export enum Category_Select_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  Photo = "photo",
  /** column name */
  ShowInCollection = "showInCollection",
  /** column name */
  ShowInShop = "showInShop"
}

/** input type for updating data in table "category" */
export type Category_Set_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  photo?: Maybe<Scalars["String"]>;
  showInCollection?: Maybe<Scalars["Boolean"]>;
  showInShop?: Maybe<Scalars["Boolean"]>;
};

/** update columns of table "category" */
export enum Category_Update_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  Photo = "photo",
  /** column name */
  ShowInCollection = "showInCollection",
  /** column name */
  ShowInShop = "showInShop"
}

/** columns and relationships of "categoryI18n" */
export type CategoryI18n = {
  __typename?: "categoryI18n";
  /** An object relationship */
  category: Category;
  categoryId: Scalars["uuid"];
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  metaDescription: Scalars["String"];
  metaTitle: Scalars["String"];
  name: Scalars["String"];
  slug: Scalars["String"];
};

/** aggregated selection of "categoryI18n" */
export type CategoryI18n_Aggregate = {
  __typename?: "categoryI18n_aggregate";
  aggregate?: Maybe<CategoryI18n_Aggregate_Fields>;
  nodes: Array<CategoryI18n>;
};

/** aggregate fields of "categoryI18n" */
export type CategoryI18n_Aggregate_Fields = {
  __typename?: "categoryI18n_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<CategoryI18n_Max_Fields>;
  min?: Maybe<CategoryI18n_Min_Fields>;
};

/** aggregate fields of "categoryI18n" */
export type CategoryI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<CategoryI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "categoryI18n" */
export type CategoryI18n_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<CategoryI18n_Max_Order_By>;
  min?: Maybe<CategoryI18n_Min_Order_By>;
};

/** input type for inserting array relation for remote table "categoryI18n" */
export type CategoryI18n_Arr_Rel_Insert_Input = {
  data: Array<CategoryI18n_Insert_Input>;
  on_conflict?: Maybe<CategoryI18n_On_Conflict>;
};

/** Boolean expression to filter rows from the table "categoryI18n". All fields are combined with a logical 'AND'. */
export type CategoryI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<CategoryI18n_Bool_Exp>>>;
  _not?: Maybe<CategoryI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<CategoryI18n_Bool_Exp>>>;
  category?: Maybe<Category_Bool_Exp>;
  categoryId?: Maybe<Uuid_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<Varchar_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  metaDescription?: Maybe<Varchar_Comparison_Exp>;
  metaTitle?: Maybe<Varchar_Comparison_Exp>;
  name?: Maybe<Varchar_Comparison_Exp>;
  slug?: Maybe<Varchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "categoryI18n" */
export enum CategoryI18n_Constraint {
  /** unique or primary key constraint */
  Pk_7d9da56b439dffc5c0c2191cb6e = "PK_7d9da56b439dffc5c0c2191cb6e",
  /** unique or primary key constraint */
  UqA12ea863d490c7d4e945542a19e = "UQ_a12ea863d490c7d4e945542a19e"
}

/** input type for inserting data into table "categoryI18n" */
export type CategoryI18n_Insert_Input = {
  category?: Maybe<Category_Obj_Rel_Insert_Input>;
  categoryId?: Maybe<Scalars["uuid"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type CategoryI18n_Max_Fields = {
  __typename?: "categoryI18n_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "categoryI18n" */
export type CategoryI18n_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type CategoryI18n_Min_Fields = {
  __typename?: "categoryI18n_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "categoryI18n" */
export type CategoryI18n_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
};

/** response of any mutation on the table "categoryI18n" */
export type CategoryI18n_Mutation_Response = {
  __typename?: "categoryI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<CategoryI18n>;
};

/** input type for inserting object relation for remote table "categoryI18n" */
export type CategoryI18n_Obj_Rel_Insert_Input = {
  data: CategoryI18n_Insert_Input;
  on_conflict?: Maybe<CategoryI18n_On_Conflict>;
};

/** on conflict condition type for table "categoryI18n" */
export type CategoryI18n_On_Conflict = {
  constraint: CategoryI18n_Constraint;
  update_columns: Array<CategoryI18n_Update_Column>;
};

/** ordering options when selecting data from "categoryI18n" */
export type CategoryI18n_Order_By = {
  category?: Maybe<Category_Order_By>;
  categoryId?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
};

/** select columns of table "categoryI18n" */
export enum CategoryI18n_Select_Column {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  MetaDescription = "metaDescription",
  /** column name */
  MetaTitle = "metaTitle",
  /** column name */
  Name = "name",
  /** column name */
  Slug = "slug"
}

/** input type for updating data in table "categoryI18n" */
export type CategoryI18n_Set_Input = {
  categoryId?: Maybe<Scalars["uuid"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

/** update columns of table "categoryI18n" */
export enum CategoryI18n_Update_Column {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  MetaDescription = "metaDescription",
  /** column name */
  MetaTitle = "metaTitle",
  /** column name */
  Name = "name",
  /** column name */
  Slug = "slug"
}

/** columns and relationships of "config" */
export type Config = {
  __typename?: "config";
  id: Scalars["uuid"];
  socialList: Scalars["jsonb"];
};

/** columns and relationships of "config" */
export type ConfigSocialListArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "config" */
export type Config_Aggregate = {
  __typename?: "config_aggregate";
  aggregate?: Maybe<Config_Aggregate_Fields>;
  nodes: Array<Config>;
};

/** aggregate fields of "config" */
export type Config_Aggregate_Fields = {
  __typename?: "config_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
};

/** aggregate fields of "config" */
export type Config_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Config_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "config" */
export type Config_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Config_Append_Input = {
  socialList?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "config" */
export type Config_Arr_Rel_Insert_Input = {
  data: Array<Config_Insert_Input>;
  on_conflict?: Maybe<Config_On_Conflict>;
};

/** Boolean expression to filter rows from the table "config". All fields are combined with a logical 'AND'. */
export type Config_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Config_Bool_Exp>>>;
  _not?: Maybe<Config_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Config_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  socialList?: Maybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "config" */
export enum Config_Constraint {
  /** unique or primary key constraint */
  PkD0ee79a681413d50b0a4f98cf7b = "PK_d0ee79a681413d50b0a4f98cf7b"
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Config_Delete_At_Path_Input = {
  socialList?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Config_Delete_Elem_Input = {
  socialList?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Config_Delete_Key_Input = {
  socialList?: Maybe<Scalars["String"]>;
};

/** input type for inserting data into table "config" */
export type Config_Insert_Input = {
  id?: Maybe<Scalars["uuid"]>;
  socialList?: Maybe<Scalars["jsonb"]>;
};

/** response of any mutation on the table "config" */
export type Config_Mutation_Response = {
  __typename?: "config_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Config>;
};

/** input type for inserting object relation for remote table "config" */
export type Config_Obj_Rel_Insert_Input = {
  data: Config_Insert_Input;
  on_conflict?: Maybe<Config_On_Conflict>;
};

/** on conflict condition type for table "config" */
export type Config_On_Conflict = {
  constraint: Config_Constraint;
  update_columns: Array<Config_Update_Column>;
};

/** ordering options when selecting data from "config" */
export type Config_Order_By = {
  id?: Maybe<Order_By>;
  socialList?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Config_Prepend_Input = {
  socialList?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "config" */
export enum Config_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  SocialList = "socialList"
}

/** input type for updating data in table "config" */
export type Config_Set_Input = {
  id?: Maybe<Scalars["uuid"]>;
  socialList?: Maybe<Scalars["jsonb"]>;
};

/** update columns of table "config" */
export enum Config_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  SocialList = "socialList"
}

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = "ignore",
  /** update the row with the given values */
  Update = "update"
}

export type CreateArtistResult = {
  __typename?: "createArtistResult";
  id: Scalars["String"];
  photo?: Maybe<ArtistPhoto>;
};

export type CreateArtistTranslationInput = {
  slug?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  date?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type CreateArtistTranslationResponse = {
  __typename?: "createArtistTranslationResponse";
  id: Scalars["String"];
};

export type CreateBasisResult = {
  __typename?: "createBasisResult";
  id: Scalars["String"];
};

export type CreateBasisTranslationData = {
  name: Scalars["String"];
};

export type CreateBasisTranslationResult = {
  __typename?: "createBasisTranslationResult";
  id: Scalars["String"];
};

export type CreateCartData = {
  quantity: Scalars["Int"];
  productId?: Maybe<Scalars["String"]>;
};

export type CreateCartResponse = {
  __typename?: "createCartResponse";
  id: Scalars["String"];
  quantity: Scalars["Int"];
  createdAt: Scalars["String"];
  workId: Scalars["String"];
};

export type CreateCategoryData = {
  showInCollection?: Maybe<Scalars["Boolean"]>;
  showInShop?: Maybe<Scalars["Boolean"]>;
  parentId?: Maybe<Scalars["String"]>;
};

export type CreateCategoryResponse = {
  __typename?: "createCategoryResponse";
  id: Scalars["String"];
  photo?: Maybe<Scalars["String"]>;
};

export type CreateCategoryTranslationData = {
  name: Scalars["String"];
  slug?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type CreateCategoryTranslationResponse = {
  __typename?: "createCategoryTranslationResponse";
  id: Scalars["String"];
  slug?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type CreateCustomFieldData = {
  value: Scalars["String"];
};

export type CreateCustomFieldResult = {
  __typename?: "createCustomFieldResult";
  id: Scalars["String"];
};

export type CreateCustomFieldTranslationData = {
  title: Scalars["String"];
};

export type CreateCustomFieldTranslationResult = {
  __typename?: "createCustomFieldTranslationResult";
  id: Scalars["String"];
};

export type CreateExhibitionData = {
  showInMainPage?: Maybe<Scalars["Boolean"]>;
  startDate: Scalars["Date"];
  endDate?: Maybe<Scalars["Date"]>;
  works?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type CreateExhibitionResult = {
  __typename?: "createExhibitionResult";
  id: Scalars["String"];
  image?: Maybe<Scalars["String"]>;
};

export type CreateExhibitionTranslationData = {
  title: Scalars["String"];
  body?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type CreateExhibitionTranslationResponse = {
  __typename?: "createExhibitionTranslationResponse";
  id: Scalars["String"];
  slug: Scalars["String"];
  metaTitle: Scalars["String"];
  metaDescription: Scalars["String"];
};

export type CreateFileData = {
  title?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  exhibitionId?: Maybe<Scalars["String"]>;
  localeId: Scalars["String"];
};

export type CreateFileResult = {
  __typename?: "createFileResult";
  id: Scalars["String"];
  slug: Scalars["String"];
  file: Scalars["String"];
};

export type CreateLinkData = {
  url: Scalars["String"];
  artistId?: Maybe<Scalars["String"]>;
};

export type CreateLinkResult = {
  __typename?: "createLinkResult";
  id: Scalars["String"];
};

export type CreateLinkTranslationData = {
  title: Scalars["String"];
};

export type CreateLinkTranslationResult = {
  __typename?: "createLinkTranslationResult";
  id: Scalars["String"];
};

export type CreateLocaleInput = {
  name: Scalars["String"];
  icon: Scalars["String"];
  currencyCode?: Maybe<Scalars["String"]>;
  isEnabled?: Maybe<Scalars["Boolean"]>;
  isDefault?: Maybe<Scalars["Boolean"]>;
};

export type CreateLocaleResponse = {
  __typename?: "createLocaleResponse";
  id: Scalars["String"];
};

export type CreateNavigationData = {
  parentId?: Maybe<Scalars["String"]>;
  isEnabled?: Maybe<Scalars["Boolean"]>;
  showInHeader?: Maybe<Scalars["Boolean"]>;
  showInFooter?: Maybe<Scalars["Boolean"]>;
  float?: Maybe<Navigation_Floats>;
};

export type CreateNavigationResult = {
  __typename?: "createNavigationResult";
  id: Scalars["String"];
};

export type CreateNavigationTranslationData = {
  name: Scalars["String"];
  link?: Maybe<Scalars["String"]>;
};

export type CreateNavigationTranslationResult = {
  __typename?: "createNavigationTranslationResult";
  id: Scalars["String"];
};

export type CreateNewsData = {
  publicationDate?: Maybe<Scalars["String"]>;
};

export type CreateNewsResult = {
  __typename?: "createNewsResult";
  id: Scalars["String"];
  publicationDate: Scalars["String"];
};

export type CreateNewsTranslationData = {
  title: Scalars["String"];
  slug?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type CreateNewsTranslationResult = {
  __typename?: "createNewsTranslationResult";
  id: Scalars["String"];
  slug: Scalars["String"];
  metaTitle: Scalars["String"];
  metaDescription: Scalars["String"];
};

export type CreateOrderData = {
  surname: Scalars["String"];
  name: Scalars["String"];
  patronymic: Scalars["String"];
  city: Scalars["String"];
  address: Scalars["String"];
  note?: Maybe<Scalars["String"]>;
  paymentType?: Maybe<PaymentTypes>;
  email: Scalars["String"];
  phone: Scalars["String"];
};

export type CreateOrderResult = {
  __typename?: "createOrderResult";
  ok: Scalars["Boolean"];
  data?: Maybe<Scalars["String"]>;
  signature?: Maybe<Scalars["String"]>;
  paymentLink?: Maybe<Scalars["String"]>;
};

export type CreatePageResult = {
  __typename?: "createPageResult";
  id: Scalars["String"];
};

export type CreatePageTranslationData = {
  slug?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  body?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type CreatePageTranslationResult = {
  __typename?: "createPageTranslationResult";
  id: Scalars["String"];
  slug: Scalars["String"];
  metaTitle: Scalars["String"];
  metaDescription: Scalars["String"];
};

export type CreateProvenanceResult = {
  __typename?: "createProvenanceResult";
  id: Scalars["String"];
};

export type CreateProvenanceTranslationData = {
  name: Scalars["String"];
};

export type CreateProvenanceTranslationResult = {
  __typename?: "createProvenanceTranslationResult";
  id: Scalars["String"];
};

export type CreateSchoolResult = {
  __typename?: "createSchoolResult";
  id: Scalars["String"];
};

export type CreateSchoolTranslationData = {
  name: Scalars["String"];
};

export type CreateSchoolTranslationResult = {
  __typename?: "createSchoolTranslationResult";
  id: Scalars["String"];
};

export type CreateSliderInput = {
  video?: Maybe<Scalars["Upload"]>;
  image: Scalars["Upload"];
};

export type CreateSliderResult = {
  __typename?: "createSliderResult";
  id: Scalars["String"];
  image: Scalars["String"];
  video?: Maybe<Scalars["String"]>;
};

export type CreateSliderTranslationData = {
  title: Scalars["String"];
  body?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

export type CreateSliderTranslationResult = {
  __typename?: "createSliderTranslationResult";
  id: Scalars["String"];
};

export type CreateTagResult = {
  __typename?: "createTagResult";
  id: Scalars["String"];
};

export type CreateTagTranslationData = {
  title: Scalars["String"];
};

export type CreateTagTranslationResult = {
  __typename?: "createTagTranslationResult";
  id: Scalars["String"];
};

export type CreateTechniqueResult = {
  __typename?: "createTechniqueResult";
  id: Scalars["String"];
};

export type CreateTechniqueTranslationData = {
  name: Scalars["String"];
};

export type CreateTechniqueTranslationResult = {
  __typename?: "createTechniqueTranslationResult";
  id: Scalars["String"];
};

export type CreateTranslationInput = {
  key: Scalars["String"];
  value: Scalars["String"];
  page: Pages;
  localeId: Scalars["String"];
};

export type CreateTranslationResponse = {
  __typename?: "createTranslationResponse";
  id: Scalars["String"];
};

export type CreateWorkData = {
  artistId?: Maybe<Scalars["String"]>;
  techniqueId?: Maybe<Scalars["String"]>;
  basisId?: Maybe<Scalars["String"]>;
  schoolId?: Maybe<Scalars["String"]>;
  provenanceId?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Float"]>;
  forSale?: Maybe<Scalars["Boolean"]>;
  quantity?: Maybe<Scalars["Int"]>;
  showInMainPage?: Maybe<Scalars["Boolean"]>;
  size?: Maybe<WorkSize>;
};

export type CreateWorkResult = {
  __typename?: "CreateWorkResult";
  id?: Maybe<Scalars["String"]>;
  images?: Maybe<Array<Maybe<WorkPhoto>>>;
};

export type CreateWorkTranslationData = {
  slug?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  body?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  creationDate?: Maybe<Scalars["String"]>;
};

export type CreateWorkTranslationResponse = {
  __typename?: "createWorkTranslationResponse";
  id: Scalars["String"];
};

/** columns and relationships of "customField" */
export type CustomField = {
  __typename?: "customField";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  translation?: Maybe<CustomFieldI18n>;
  /** An array relationship */
  translations: Array<CustomFieldI18n>;
  /** An aggregated array relationship */
  translations_aggregate: CustomFieldI18n_Aggregate;
  value: Scalars["String"];
  /** An array relationship */
  works: Array<CustomFieldWork>;
  /** An aggregated array relationship */
  works_aggregate: CustomFieldWork_Aggregate;
};

/** columns and relationships of "customField" */
export type CustomFieldTranslationsArgs = {
  distinct_on?: Maybe<Array<CustomFieldI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldI18n_Order_By>>;
  where?: Maybe<CustomFieldI18n_Bool_Exp>;
};

/** columns and relationships of "customField" */
export type CustomFieldTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<CustomFieldI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldI18n_Order_By>>;
  where?: Maybe<CustomFieldI18n_Bool_Exp>;
};

/** columns and relationships of "customField" */
export type CustomFieldWorksArgs = {
  distinct_on?: Maybe<Array<CustomFieldWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldWork_Order_By>>;
  where?: Maybe<CustomFieldWork_Bool_Exp>;
};

/** columns and relationships of "customField" */
export type CustomFieldWorks_AggregateArgs = {
  distinct_on?: Maybe<Array<CustomFieldWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldWork_Order_By>>;
  where?: Maybe<CustomFieldWork_Bool_Exp>;
};

/** aggregated selection of "customField" */
export type CustomField_Aggregate = {
  __typename?: "customField_aggregate";
  aggregate?: Maybe<CustomField_Aggregate_Fields>;
  nodes: Array<CustomField>;
};

/** aggregate fields of "customField" */
export type CustomField_Aggregate_Fields = {
  __typename?: "customField_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<CustomField_Max_Fields>;
  min?: Maybe<CustomField_Min_Fields>;
};

/** aggregate fields of "customField" */
export type CustomField_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<CustomField_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "customField" */
export type CustomField_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<CustomField_Max_Order_By>;
  min?: Maybe<CustomField_Min_Order_By>;
};

/** input type for inserting array relation for remote table "customField" */
export type CustomField_Arr_Rel_Insert_Input = {
  data: Array<CustomField_Insert_Input>;
  on_conflict?: Maybe<CustomField_On_Conflict>;
};

/** Boolean expression to filter rows from the table "customField". All fields are combined with a logical 'AND'. */
export type CustomField_Bool_Exp = {
  _and?: Maybe<Array<Maybe<CustomField_Bool_Exp>>>;
  _not?: Maybe<CustomField_Bool_Exp>;
  _or?: Maybe<Array<Maybe<CustomField_Bool_Exp>>>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  translation?: Maybe<CustomFieldI18n_Bool_Exp>;
  translations?: Maybe<CustomFieldI18n_Bool_Exp>;
  value?: Maybe<Varchar_Comparison_Exp>;
  works?: Maybe<CustomFieldWork_Bool_Exp>;
};

/** unique or primary key constraints on table "customField" */
export enum CustomField_Constraint {
  /** unique or primary key constraint */
  PkEf5b63164d6cba14056f91382d7 = "PK_ef5b63164d6cba14056f91382d7"
}

/** input type for inserting data into table "customField" */
export type CustomField_Insert_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  translation?: Maybe<CustomFieldI18n_Obj_Rel_Insert_Input>;
  translations?: Maybe<CustomFieldI18n_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars["String"]>;
  works?: Maybe<CustomFieldWork_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type CustomField_Max_Fields = {
  __typename?: "customField_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  value?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "customField" */
export type CustomField_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type CustomField_Min_Fields = {
  __typename?: "customField_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  value?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "customField" */
export type CustomField_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "customField" */
export type CustomField_Mutation_Response = {
  __typename?: "customField_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<CustomField>;
};

/** input type for inserting object relation for remote table "customField" */
export type CustomField_Obj_Rel_Insert_Input = {
  data: CustomField_Insert_Input;
  on_conflict?: Maybe<CustomField_On_Conflict>;
};

/** on conflict condition type for table "customField" */
export type CustomField_On_Conflict = {
  constraint: CustomField_Constraint;
  update_columns: Array<CustomField_Update_Column>;
};

/** ordering options when selecting data from "customField" */
export type CustomField_Order_By = {
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  translation?: Maybe<CustomFieldI18n_Order_By>;
  translations_aggregate?: Maybe<CustomFieldI18n_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
  works_aggregate?: Maybe<CustomFieldWork_Aggregate_Order_By>;
};

/** select columns of table "customField" */
export enum CustomField_Select_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  Value = "value"
}

/** input type for updating data in table "customField" */
export type CustomField_Set_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  value?: Maybe<Scalars["String"]>;
};

/** update columns of table "customField" */
export enum CustomField_Update_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  Value = "value"
}

/** columns and relationships of "customFieldI18n" */
export type CustomFieldI18n = {
  __typename?: "customFieldI18n";
  /** An object relationship */
  customField: CustomField;
  customFieldId: Scalars["uuid"];
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  title: Scalars["String"];
};

/** aggregated selection of "customFieldI18n" */
export type CustomFieldI18n_Aggregate = {
  __typename?: "customFieldI18n_aggregate";
  aggregate?: Maybe<CustomFieldI18n_Aggregate_Fields>;
  nodes: Array<CustomFieldI18n>;
};

/** aggregate fields of "customFieldI18n" */
export type CustomFieldI18n_Aggregate_Fields = {
  __typename?: "customFieldI18n_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<CustomFieldI18n_Max_Fields>;
  min?: Maybe<CustomFieldI18n_Min_Fields>;
};

/** aggregate fields of "customFieldI18n" */
export type CustomFieldI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<CustomFieldI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "customFieldI18n" */
export type CustomFieldI18n_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<CustomFieldI18n_Max_Order_By>;
  min?: Maybe<CustomFieldI18n_Min_Order_By>;
};

/** input type for inserting array relation for remote table "customFieldI18n" */
export type CustomFieldI18n_Arr_Rel_Insert_Input = {
  data: Array<CustomFieldI18n_Insert_Input>;
  on_conflict?: Maybe<CustomFieldI18n_On_Conflict>;
};

/** Boolean expression to filter rows from the table "customFieldI18n". All fields are combined with a logical 'AND'. */
export type CustomFieldI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<CustomFieldI18n_Bool_Exp>>>;
  _not?: Maybe<CustomFieldI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<CustomFieldI18n_Bool_Exp>>>;
  customField?: Maybe<CustomField_Bool_Exp>;
  customFieldId?: Maybe<Uuid_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  title?: Maybe<Varchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "customFieldI18n" */
export enum CustomFieldI18n_Constraint {
  /** unique or primary key constraint */
  Pk_2336bbbb8165877a7a3f13cc567 = "PK_2336bbbb8165877a7a3f13cc567"
}

/** input type for inserting data into table "customFieldI18n" */
export type CustomFieldI18n_Insert_Input = {
  customField?: Maybe<CustomField_Obj_Rel_Insert_Input>;
  customFieldId?: Maybe<Scalars["uuid"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type CustomFieldI18n_Max_Fields = {
  __typename?: "customFieldI18n_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "customFieldI18n" */
export type CustomFieldI18n_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type CustomFieldI18n_Min_Fields = {
  __typename?: "customFieldI18n_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "customFieldI18n" */
export type CustomFieldI18n_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "customFieldI18n" */
export type CustomFieldI18n_Mutation_Response = {
  __typename?: "customFieldI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<CustomFieldI18n>;
};

/** input type for inserting object relation for remote table "customFieldI18n" */
export type CustomFieldI18n_Obj_Rel_Insert_Input = {
  data: CustomFieldI18n_Insert_Input;
  on_conflict?: Maybe<CustomFieldI18n_On_Conflict>;
};

/** on conflict condition type for table "customFieldI18n" */
export type CustomFieldI18n_On_Conflict = {
  constraint: CustomFieldI18n_Constraint;
  update_columns: Array<CustomFieldI18n_Update_Column>;
};

/** ordering options when selecting data from "customFieldI18n" */
export type CustomFieldI18n_Order_By = {
  customField?: Maybe<CustomField_Order_By>;
  customFieldId?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** select columns of table "customFieldI18n" */
export enum CustomFieldI18n_Select_Column {
  /** column name */
  CustomFieldId = "customFieldId",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Title = "title"
}

/** input type for updating data in table "customFieldI18n" */
export type CustomFieldI18n_Set_Input = {
  customFieldId?: Maybe<Scalars["uuid"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
};

/** update columns of table "customFieldI18n" */
export enum CustomFieldI18n_Update_Column {
  /** column name */
  CustomFieldId = "customFieldId",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Title = "title"
}

/** columns and relationships of "customFieldWork" */
export type CustomFieldWork = {
  __typename?: "customFieldWork";
  /** An object relationship */
  customField: CustomField;
  customFieldId: Scalars["uuid"];
  /** An object relationship */
  work: Work;
  workId: Scalars["uuid"];
};

/** aggregated selection of "customFieldWork" */
export type CustomFieldWork_Aggregate = {
  __typename?: "customFieldWork_aggregate";
  aggregate?: Maybe<CustomFieldWork_Aggregate_Fields>;
  nodes: Array<CustomFieldWork>;
};

/** aggregate fields of "customFieldWork" */
export type CustomFieldWork_Aggregate_Fields = {
  __typename?: "customFieldWork_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
};

/** aggregate fields of "customFieldWork" */
export type CustomFieldWork_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<CustomFieldWork_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "customFieldWork" */
export type CustomFieldWork_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "customFieldWork" */
export type CustomFieldWork_Arr_Rel_Insert_Input = {
  data: Array<CustomFieldWork_Insert_Input>;
  on_conflict?: Maybe<CustomFieldWork_On_Conflict>;
};

/** Boolean expression to filter rows from the table "customFieldWork". All fields are combined with a logical 'AND'. */
export type CustomFieldWork_Bool_Exp = {
  _and?: Maybe<Array<Maybe<CustomFieldWork_Bool_Exp>>>;
  _not?: Maybe<CustomFieldWork_Bool_Exp>;
  _or?: Maybe<Array<Maybe<CustomFieldWork_Bool_Exp>>>;
  customField?: Maybe<CustomField_Bool_Exp>;
  customFieldId?: Maybe<Uuid_Comparison_Exp>;
  work?: Maybe<Work_Bool_Exp>;
  workId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "customFieldWork" */
export enum CustomFieldWork_Constraint {
  /** unique or primary key constraint */
  Pk_36f3f55fdf7e26723b6a145ba98 = "PK_36f3f55fdf7e26723b6a145ba98"
}

/** input type for inserting data into table "customFieldWork" */
export type CustomFieldWork_Insert_Input = {
  customField?: Maybe<CustomField_Obj_Rel_Insert_Input>;
  customFieldId?: Maybe<Scalars["uuid"]>;
  work?: Maybe<Work_Obj_Rel_Insert_Input>;
  workId?: Maybe<Scalars["uuid"]>;
};

/** response of any mutation on the table "customFieldWork" */
export type CustomFieldWork_Mutation_Response = {
  __typename?: "customFieldWork_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<CustomFieldWork>;
};

/** input type for inserting object relation for remote table "customFieldWork" */
export type CustomFieldWork_Obj_Rel_Insert_Input = {
  data: CustomFieldWork_Insert_Input;
  on_conflict?: Maybe<CustomFieldWork_On_Conflict>;
};

/** on conflict condition type for table "customFieldWork" */
export type CustomFieldWork_On_Conflict = {
  constraint: CustomFieldWork_Constraint;
  update_columns: Array<CustomFieldWork_Update_Column>;
};

/** ordering options when selecting data from "customFieldWork" */
export type CustomFieldWork_Order_By = {
  customField?: Maybe<CustomField_Order_By>;
  customFieldId?: Maybe<Order_By>;
  work?: Maybe<Work_Order_By>;
  workId?: Maybe<Order_By>;
};

/** select columns of table "customFieldWork" */
export enum CustomFieldWork_Select_Column {
  /** column name */
  CustomFieldId = "customFieldId",
  /** column name */
  WorkId = "workId"
}

/** input type for updating data in table "customFieldWork" */
export type CustomFieldWork_Set_Input = {
  customFieldId?: Maybe<Scalars["uuid"]>;
  workId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "customFieldWork" */
export enum CustomFieldWork_Update_Column {
  /** column name */
  CustomFieldId = "customFieldId",
  /** column name */
  WorkId = "workId"
}

export type Data = {
  __typename?: "Data";
  field?: Maybe<Scalars["String"]>;
};

export type DeleteArtistResult = {
  __typename?: "deleteArtistResult";
  deleted?: Maybe<Scalars["Boolean"]>;
};

export type DeleteArtistTranslationResult = {
  __typename?: "deleteArtistTranslationResult";
  deleted?: Maybe<Scalars["Boolean"]>;
};

export type DeleteBasisResult = {
  __typename?: "deleteBasisResult";
  deleted: Scalars["Boolean"];
};

export type DeleteBasisTranslationResult = {
  __typename?: "deleteBasisTranslationResult";
  deleted: Scalars["Boolean"];
};

export type DeleteCartResponse = {
  __typename?: "deleteCartResponse";
  deleted: Scalars["Boolean"];
};

export type DeleteCategoryResponse = {
  __typename?: "deleteCategoryResponse";
  deleted: Scalars["Boolean"];
};

export type DeleteCategoryTranslationResponse = {
  __typename?: "deleteCategoryTranslationResponse";
  deleted: Scalars["Boolean"];
};

export type DeleteCustomFieldResult = {
  __typename?: "deleteCustomFieldResult";
  deleted: Scalars["Boolean"];
};

export type DeleteCustomFieldTranslationResult = {
  __typename?: "deleteCustomFieldTranslationResult";
  deleted: Scalars["Boolean"];
};

export type DeleteExhibitionResult = {
  __typename?: "deleteExhibitionResult";
  deleted: Scalars["Boolean"];
};

export type DeleteExhibitionTranslationResponse = {
  __typename?: "deleteExhibitionTranslationResponse";
  deleted: Scalars["Boolean"];
};

export type DeleteFileResult = {
  __typename?: "deleteFileResult";
  deleted: Scalars["Boolean"];
};

export type DeleteLinkResult = {
  __typename?: "deleteLinkResult";
  deleted: Scalars["Boolean"];
};

export type DeleteLinkTranslationResult = {
  __typename?: "deleteLinkTranslationResult";
  deleted: Scalars["Boolean"];
};

export type DeleteLocaleResponse = {
  __typename?: "deleteLocaleResponse";
  deleted: Scalars["Boolean"];
};

export type DeleteNavigationResult = {
  __typename?: "deleteNavigationResult";
  deleted: Scalars["Boolean"];
};

export type DeleteNavigationTranslationResult = {
  __typename?: "deleteNavigationTranslationResult";
  deleted: Scalars["Boolean"];
};

export type DeleteNewsResult = {
  __typename?: "deleteNewsResult";
  deleted: Scalars["Boolean"];
};

export type DeleteNewsTranslationResult = {
  __typename?: "deleteNewsTranslationResult";
  deleted: Scalars["Boolean"];
};

export type DeleteOrderResult = {
  __typename?: "deleteOrderResult";
  deleted: Scalars["Boolean"];
};

export type DeletePageResult = {
  __typename?: "deletePageResult";
  deleted: Scalars["Boolean"];
};

export type DeletePageTranslationResult = {
  __typename?: "deletePageTranslationResult";
  deleted: Scalars["Boolean"];
};

export type DeleteProvenanceResult = {
  __typename?: "deleteProvenanceResult";
  deleted: Scalars["Boolean"];
};

export type DeleteProvenanceTranslationResult = {
  __typename?: "deleteProvenanceTranslationResult";
  deleted: Scalars["Boolean"];
};

export type DeleteSchoolResult = {
  __typename?: "deleteSchoolResult";
  deleted: Scalars["Boolean"];
};

export type DeleteSchoolTranslationResult = {
  __typename?: "deleteSchoolTranslationResult";
  deleted: Scalars["Boolean"];
};

export type DeleteSliderResult = {
  __typename?: "deleteSliderResult";
  deleted: Scalars["Boolean"];
};

export type DeleteSliderTranslationResult = {
  __typename?: "deleteSliderTranslationResult";
  deleted: Scalars["Boolean"];
};

export type DeleteSocialNetworkResult = {
  __typename?: "DeleteSocialNetworkResult";
  deleted: Scalars["Boolean"];
};

export type DeleteTagResult = {
  __typename?: "deleteTagResult";
  deleted: Scalars["Boolean"];
};

export type DeleteTagTranslationResult = {
  __typename?: "deleteTagTranslationResult";
  deleted: Scalars["Boolean"];
};

export type DeleteTechniqueResult = {
  __typename?: "deleteTechniqueResult";
  deleted: Scalars["Boolean"];
};

export type DeleteTechniqueTranslationResult = {
  __typename?: "deleteTechniqueTranslationResult";
  deleted: Scalars["Boolean"];
};

export type DeleteTranslationResponse = {
  __typename?: "deleteTranslationResponse";
  deleted: Scalars["Boolean"];
};

export type DeleteWorkResult = {
  __typename?: "DeleteWorkResult";
  deleted?: Maybe<Scalars["Boolean"]>;
};

export type DeleteWorkTranslationResponse = {
  __typename?: "deleteWorkTranslationResponse";
  deleted: Scalars["Boolean"];
};

/** columns and relationships of "exhibition" */
export type Exhibition = {
  __typename?: "exhibition";
  createdAt: Scalars["timestamptz"];
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  endDate?: Maybe<Scalars["timestamptz"]>;
  /** An array relationship */
  exhibitionCategories: Array<ExhibitionCategory>;
  /** An aggregated array relationship */
  exhibitionCategories_aggregate: ExhibitionCategory_Aggregate;
  /** An array relationship */
  exhibitionWorks: Array<ExhibitionWork>;
  /** An aggregated array relationship */
  exhibitionWorks_aggregate: ExhibitionWork_Aggregate;
  /** An array relationship */
  files: Array<FileI18n>;
  /** An aggregated array relationship */
  files_aggregate: FileI18n_Aggregate;
  id: Scalars["uuid"];
  image?: Maybe<Scalars["String"]>;
  positionOnMainPage: Scalars["smallint"];
  showInMainPage: Scalars["Boolean"];
  startDate: Scalars["timestamptz"];
  /** An object relationship */
  translation?: Maybe<ExhibitionI18n>;
  /** An array relationship */
  translations: Array<ExhibitionI18n>;
  /** An aggregated array relationship */
  translations_aggregate: ExhibitionI18n_Aggregate;
  updatedAt: Scalars["timestamptz"];
};

/** columns and relationships of "exhibition" */
export type ExhibitionExhibitionCategoriesArgs = {
  distinct_on?: Maybe<Array<ExhibitionCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionCategory_Order_By>>;
  where?: Maybe<ExhibitionCategory_Bool_Exp>;
};

/** columns and relationships of "exhibition" */
export type ExhibitionExhibitionCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<ExhibitionCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionCategory_Order_By>>;
  where?: Maybe<ExhibitionCategory_Bool_Exp>;
};

/** columns and relationships of "exhibition" */
export type ExhibitionExhibitionWorksArgs = {
  distinct_on?: Maybe<Array<ExhibitionWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionWork_Order_By>>;
  where?: Maybe<ExhibitionWork_Bool_Exp>;
};

/** columns and relationships of "exhibition" */
export type ExhibitionExhibitionWorks_AggregateArgs = {
  distinct_on?: Maybe<Array<ExhibitionWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionWork_Order_By>>;
  where?: Maybe<ExhibitionWork_Bool_Exp>;
};

/** columns and relationships of "exhibition" */
export type ExhibitionFilesArgs = {
  distinct_on?: Maybe<Array<FileI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<FileI18n_Order_By>>;
  where?: Maybe<FileI18n_Bool_Exp>;
};

/** columns and relationships of "exhibition" */
export type ExhibitionFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<FileI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<FileI18n_Order_By>>;
  where?: Maybe<FileI18n_Bool_Exp>;
};

/** columns and relationships of "exhibition" */
export type ExhibitionTranslationsArgs = {
  distinct_on?: Maybe<Array<ExhibitionI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionI18n_Order_By>>;
  where?: Maybe<ExhibitionI18n_Bool_Exp>;
};

/** columns and relationships of "exhibition" */
export type ExhibitionTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<ExhibitionI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionI18n_Order_By>>;
  where?: Maybe<ExhibitionI18n_Bool_Exp>;
};

/** aggregated selection of "exhibition" */
export type Exhibition_Aggregate = {
  __typename?: "exhibition_aggregate";
  aggregate?: Maybe<Exhibition_Aggregate_Fields>;
  nodes: Array<Exhibition>;
};

/** aggregate fields of "exhibition" */
export type Exhibition_Aggregate_Fields = {
  __typename?: "exhibition_aggregate_fields";
  avg?: Maybe<Exhibition_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Exhibition_Max_Fields>;
  min?: Maybe<Exhibition_Min_Fields>;
  stddev?: Maybe<Exhibition_Stddev_Fields>;
  stddev_pop?: Maybe<Exhibition_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Exhibition_Stddev_Samp_Fields>;
  sum?: Maybe<Exhibition_Sum_Fields>;
  var_pop?: Maybe<Exhibition_Var_Pop_Fields>;
  var_samp?: Maybe<Exhibition_Var_Samp_Fields>;
  variance?: Maybe<Exhibition_Variance_Fields>;
};

/** aggregate fields of "exhibition" */
export type Exhibition_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Exhibition_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "exhibition" */
export type Exhibition_Aggregate_Order_By = {
  avg?: Maybe<Exhibition_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Exhibition_Max_Order_By>;
  min?: Maybe<Exhibition_Min_Order_By>;
  stddev?: Maybe<Exhibition_Stddev_Order_By>;
  stddev_pop?: Maybe<Exhibition_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Exhibition_Stddev_Samp_Order_By>;
  sum?: Maybe<Exhibition_Sum_Order_By>;
  var_pop?: Maybe<Exhibition_Var_Pop_Order_By>;
  var_samp?: Maybe<Exhibition_Var_Samp_Order_By>;
  variance?: Maybe<Exhibition_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "exhibition" */
export type Exhibition_Arr_Rel_Insert_Input = {
  data: Array<Exhibition_Insert_Input>;
  on_conflict?: Maybe<Exhibition_On_Conflict>;
};

/** aggregate avg on columns */
export type Exhibition_Avg_Fields = {
  __typename?: "exhibition_avg_fields";
  positionOnMainPage?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "exhibition" */
export type Exhibition_Avg_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "exhibition". All fields are combined with a logical 'AND'. */
export type Exhibition_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Exhibition_Bool_Exp>>>;
  _not?: Maybe<Exhibition_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Exhibition_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  endDate?: Maybe<Timestamptz_Comparison_Exp>;
  exhibitionCategories?: Maybe<ExhibitionCategory_Bool_Exp>;
  exhibitionWorks?: Maybe<ExhibitionWork_Bool_Exp>;
  files?: Maybe<FileI18n_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<Varchar_Comparison_Exp>;
  positionOnMainPage?: Maybe<Smallint_Comparison_Exp>;
  showInMainPage?: Maybe<Boolean_Comparison_Exp>;
  startDate?: Maybe<Timestamptz_Comparison_Exp>;
  translation?: Maybe<ExhibitionI18n_Bool_Exp>;
  translations?: Maybe<ExhibitionI18n_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "exhibition" */
export enum Exhibition_Constraint {
  /** unique or primary key constraint */
  PkDdc3afc8e0b4daf3b68d51c31f4 = "PK_ddc3afc8e0b4daf3b68d51c31f4"
}

/** input type for incrementing integer columne in table "exhibition" */
export type Exhibition_Inc_Input = {
  positionOnMainPage?: Maybe<Scalars["smallint"]>;
};

/** input type for inserting data into table "exhibition" */
export type Exhibition_Insert_Input = {
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  endDate?: Maybe<Scalars["timestamptz"]>;
  exhibitionCategories?: Maybe<ExhibitionCategory_Arr_Rel_Insert_Input>;
  exhibitionWorks?: Maybe<ExhibitionWork_Arr_Rel_Insert_Input>;
  files?: Maybe<FileI18n_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  positionOnMainPage?: Maybe<Scalars["smallint"]>;
  showInMainPage?: Maybe<Scalars["Boolean"]>;
  startDate?: Maybe<Scalars["timestamptz"]>;
  translation?: Maybe<ExhibitionI18n_Obj_Rel_Insert_Input>;
  translations?: Maybe<ExhibitionI18n_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Exhibition_Max_Fields = {
  __typename?: "exhibition_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  endDate?: Maybe<Scalars["timestamptz"]>;
  image?: Maybe<Scalars["String"]>;
  positionOnMainPage?: Maybe<Scalars["smallint"]>;
  startDate?: Maybe<Scalars["timestamptz"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "exhibition" */
export type Exhibition_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  endDate?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  positionOnMainPage?: Maybe<Order_By>;
  startDate?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Exhibition_Min_Fields = {
  __typename?: "exhibition_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  endDate?: Maybe<Scalars["timestamptz"]>;
  image?: Maybe<Scalars["String"]>;
  positionOnMainPage?: Maybe<Scalars["smallint"]>;
  startDate?: Maybe<Scalars["timestamptz"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "exhibition" */
export type Exhibition_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  endDate?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  positionOnMainPage?: Maybe<Order_By>;
  startDate?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "exhibition" */
export type Exhibition_Mutation_Response = {
  __typename?: "exhibition_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Exhibition>;
};

/** input type for inserting object relation for remote table "exhibition" */
export type Exhibition_Obj_Rel_Insert_Input = {
  data: Exhibition_Insert_Input;
  on_conflict?: Maybe<Exhibition_On_Conflict>;
};

/** on conflict condition type for table "exhibition" */
export type Exhibition_On_Conflict = {
  constraint: Exhibition_Constraint;
  update_columns: Array<Exhibition_Update_Column>;
};

/** ordering options when selecting data from "exhibition" */
export type Exhibition_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  endDate?: Maybe<Order_By>;
  exhibitionCategories_aggregate?: Maybe<ExhibitionCategory_Aggregate_Order_By>;
  exhibitionWorks_aggregate?: Maybe<ExhibitionWork_Aggregate_Order_By>;
  files_aggregate?: Maybe<FileI18n_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  positionOnMainPage?: Maybe<Order_By>;
  showInMainPage?: Maybe<Order_By>;
  startDate?: Maybe<Order_By>;
  translation?: Maybe<ExhibitionI18n_Order_By>;
  translations_aggregate?: Maybe<ExhibitionI18n_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** select columns of table "exhibition" */
export enum Exhibition_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  EndDate = "endDate",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  PositionOnMainPage = "positionOnMainPage",
  /** column name */
  ShowInMainPage = "showInMainPage",
  /** column name */
  StartDate = "startDate",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "exhibition" */
export type Exhibition_Set_Input = {
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  endDate?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  positionOnMainPage?: Maybe<Scalars["smallint"]>;
  showInMainPage?: Maybe<Scalars["Boolean"]>;
  startDate?: Maybe<Scalars["timestamptz"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Exhibition_Stddev_Fields = {
  __typename?: "exhibition_stddev_fields";
  positionOnMainPage?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "exhibition" */
export type Exhibition_Stddev_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Exhibition_Stddev_Pop_Fields = {
  __typename?: "exhibition_stddev_pop_fields";
  positionOnMainPage?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "exhibition" */
export type Exhibition_Stddev_Pop_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Exhibition_Stddev_Samp_Fields = {
  __typename?: "exhibition_stddev_samp_fields";
  positionOnMainPage?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "exhibition" */
export type Exhibition_Stddev_Samp_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Exhibition_Sum_Fields = {
  __typename?: "exhibition_sum_fields";
  positionOnMainPage?: Maybe<Scalars["smallint"]>;
};

/** order by sum() on columns of table "exhibition" */
export type Exhibition_Sum_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
};

/** update columns of table "exhibition" */
export enum Exhibition_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  EndDate = "endDate",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  PositionOnMainPage = "positionOnMainPage",
  /** column name */
  ShowInMainPage = "showInMainPage",
  /** column name */
  StartDate = "startDate",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** aggregate var_pop on columns */
export type Exhibition_Var_Pop_Fields = {
  __typename?: "exhibition_var_pop_fields";
  positionOnMainPage?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "exhibition" */
export type Exhibition_Var_Pop_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Exhibition_Var_Samp_Fields = {
  __typename?: "exhibition_var_samp_fields";
  positionOnMainPage?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "exhibition" */
export type Exhibition_Var_Samp_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Exhibition_Variance_Fields = {
  __typename?: "exhibition_variance_fields";
  positionOnMainPage?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "exhibition" */
export type Exhibition_Variance_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
};

/** columns and relationships of "exhibitionCategory" */
export type ExhibitionCategory = {
  __typename?: "exhibitionCategory";
  breadcrumb: Scalars["Boolean"];
  /** An object relationship */
  category: Category;
  categoryId: Scalars["uuid"];
  /** An object relationship */
  exhibition: Exhibition;
  exhibitionId: Scalars["uuid"];
};

/** aggregated selection of "exhibitionCategory" */
export type ExhibitionCategory_Aggregate = {
  __typename?: "exhibitionCategory_aggregate";
  aggregate?: Maybe<ExhibitionCategory_Aggregate_Fields>;
  nodes: Array<ExhibitionCategory>;
};

/** aggregate fields of "exhibitionCategory" */
export type ExhibitionCategory_Aggregate_Fields = {
  __typename?: "exhibitionCategory_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
};

/** aggregate fields of "exhibitionCategory" */
export type ExhibitionCategory_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ExhibitionCategory_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "exhibitionCategory" */
export type ExhibitionCategory_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "exhibitionCategory" */
export type ExhibitionCategory_Arr_Rel_Insert_Input = {
  data: Array<ExhibitionCategory_Insert_Input>;
  on_conflict?: Maybe<ExhibitionCategory_On_Conflict>;
};

/** Boolean expression to filter rows from the table "exhibitionCategory". All fields are combined with a logical 'AND'. */
export type ExhibitionCategory_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ExhibitionCategory_Bool_Exp>>>;
  _not?: Maybe<ExhibitionCategory_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ExhibitionCategory_Bool_Exp>>>;
  breadcrumb?: Maybe<Boolean_Comparison_Exp>;
  category?: Maybe<Category_Bool_Exp>;
  categoryId?: Maybe<Uuid_Comparison_Exp>;
  exhibition?: Maybe<Exhibition_Bool_Exp>;
  exhibitionId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "exhibitionCategory" */
export enum ExhibitionCategory_Constraint {
  /** unique or primary key constraint */
  PkDb1481dd3e837a35b352a22d0e7 = "PK_db1481dd3e837a35b352a22d0e7"
}

/** input type for inserting data into table "exhibitionCategory" */
export type ExhibitionCategory_Insert_Input = {
  breadcrumb?: Maybe<Scalars["Boolean"]>;
  category?: Maybe<Category_Obj_Rel_Insert_Input>;
  categoryId?: Maybe<Scalars["uuid"]>;
  exhibition?: Maybe<Exhibition_Obj_Rel_Insert_Input>;
  exhibitionId?: Maybe<Scalars["uuid"]>;
};

/** response of any mutation on the table "exhibitionCategory" */
export type ExhibitionCategory_Mutation_Response = {
  __typename?: "exhibitionCategory_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<ExhibitionCategory>;
};

/** input type for inserting object relation for remote table "exhibitionCategory" */
export type ExhibitionCategory_Obj_Rel_Insert_Input = {
  data: ExhibitionCategory_Insert_Input;
  on_conflict?: Maybe<ExhibitionCategory_On_Conflict>;
};

/** on conflict condition type for table "exhibitionCategory" */
export type ExhibitionCategory_On_Conflict = {
  constraint: ExhibitionCategory_Constraint;
  update_columns: Array<ExhibitionCategory_Update_Column>;
};

/** ordering options when selecting data from "exhibitionCategory" */
export type ExhibitionCategory_Order_By = {
  breadcrumb?: Maybe<Order_By>;
  category?: Maybe<Category_Order_By>;
  categoryId?: Maybe<Order_By>;
  exhibition?: Maybe<Exhibition_Order_By>;
  exhibitionId?: Maybe<Order_By>;
};

/** select columns of table "exhibitionCategory" */
export enum ExhibitionCategory_Select_Column {
  /** column name */
  Breadcrumb = "breadcrumb",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  ExhibitionId = "exhibitionId"
}

/** input type for updating data in table "exhibitionCategory" */
export type ExhibitionCategory_Set_Input = {
  breadcrumb?: Maybe<Scalars["Boolean"]>;
  categoryId?: Maybe<Scalars["uuid"]>;
  exhibitionId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "exhibitionCategory" */
export enum ExhibitionCategory_Update_Column {
  /** column name */
  Breadcrumb = "breadcrumb",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  ExhibitionId = "exhibitionId"
}

/** columns and relationships of "exhibitionI18n" */
export type ExhibitionI18n = {
  __typename?: "exhibitionI18n";
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  exhibition: Exhibition;
  exhibitionId: Scalars["uuid"];
  id: Scalars["uuid"];
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  metaDescription: Scalars["String"];
  metaTitle: Scalars["String"];
  slug: Scalars["String"];
  title: Scalars["String"];
};

/** aggregated selection of "exhibitionI18n" */
export type ExhibitionI18n_Aggregate = {
  __typename?: "exhibitionI18n_aggregate";
  aggregate?: Maybe<ExhibitionI18n_Aggregate_Fields>;
  nodes: Array<ExhibitionI18n>;
};

/** aggregate fields of "exhibitionI18n" */
export type ExhibitionI18n_Aggregate_Fields = {
  __typename?: "exhibitionI18n_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<ExhibitionI18n_Max_Fields>;
  min?: Maybe<ExhibitionI18n_Min_Fields>;
};

/** aggregate fields of "exhibitionI18n" */
export type ExhibitionI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ExhibitionI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "exhibitionI18n" */
export type ExhibitionI18n_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<ExhibitionI18n_Max_Order_By>;
  min?: Maybe<ExhibitionI18n_Min_Order_By>;
};

/** input type for inserting array relation for remote table "exhibitionI18n" */
export type ExhibitionI18n_Arr_Rel_Insert_Input = {
  data: Array<ExhibitionI18n_Insert_Input>;
  on_conflict?: Maybe<ExhibitionI18n_On_Conflict>;
};

/** Boolean expression to filter rows from the table "exhibitionI18n". All fields are combined with a logical 'AND'. */
export type ExhibitionI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ExhibitionI18n_Bool_Exp>>>;
  _not?: Maybe<ExhibitionI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ExhibitionI18n_Bool_Exp>>>;
  body?: Maybe<Text_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  exhibition?: Maybe<Exhibition_Bool_Exp>;
  exhibitionId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  metaDescription?: Maybe<Varchar_Comparison_Exp>;
  metaTitle?: Maybe<Varchar_Comparison_Exp>;
  slug?: Maybe<Varchar_Comparison_Exp>;
  title?: Maybe<Varchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "exhibitionI18n" */
export enum ExhibitionI18n_Constraint {
  /** unique or primary key constraint */
  Pk_8920747e651d33f2848e69c6e6c = "PK_8920747e651d33f2848e69c6e6c",
  /** unique or primary key constraint */
  Uq_1cfbae4a65eefa5dc40109a6442 = "UQ_1cfbae4a65eefa5dc40109a6442"
}

/** input type for inserting data into table "exhibitionI18n" */
export type ExhibitionI18n_Insert_Input = {
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  exhibition?: Maybe<Exhibition_Obj_Rel_Insert_Input>;
  exhibitionId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type ExhibitionI18n_Max_Fields = {
  __typename?: "exhibitionI18n_max_fields";
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "exhibitionI18n" */
export type ExhibitionI18n_Max_Order_By = {
  body?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ExhibitionI18n_Min_Fields = {
  __typename?: "exhibitionI18n_min_fields";
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "exhibitionI18n" */
export type ExhibitionI18n_Min_Order_By = {
  body?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "exhibitionI18n" */
export type ExhibitionI18n_Mutation_Response = {
  __typename?: "exhibitionI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<ExhibitionI18n>;
};

/** input type for inserting object relation for remote table "exhibitionI18n" */
export type ExhibitionI18n_Obj_Rel_Insert_Input = {
  data: ExhibitionI18n_Insert_Input;
  on_conflict?: Maybe<ExhibitionI18n_On_Conflict>;
};

/** on conflict condition type for table "exhibitionI18n" */
export type ExhibitionI18n_On_Conflict = {
  constraint: ExhibitionI18n_Constraint;
  update_columns: Array<ExhibitionI18n_Update_Column>;
};

/** ordering options when selecting data from "exhibitionI18n" */
export type ExhibitionI18n_Order_By = {
  body?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  exhibition?: Maybe<Exhibition_Order_By>;
  exhibitionId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** select columns of table "exhibitionI18n" */
export enum ExhibitionI18n_Select_Column {
  /** column name */
  Body = "body",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  ExhibitionId = "exhibitionId",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  MetaDescription = "metaDescription",
  /** column name */
  MetaTitle = "metaTitle",
  /** column name */
  Slug = "slug",
  /** column name */
  Title = "title"
}

/** input type for updating data in table "exhibitionI18n" */
export type ExhibitionI18n_Set_Input = {
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  exhibitionId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** update columns of table "exhibitionI18n" */
export enum ExhibitionI18n_Update_Column {
  /** column name */
  Body = "body",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  ExhibitionId = "exhibitionId",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  MetaDescription = "metaDescription",
  /** column name */
  MetaTitle = "metaTitle",
  /** column name */
  Slug = "slug",
  /** column name */
  Title = "title"
}

/** columns and relationships of "exhibitionWork" */
export type ExhibitionWork = {
  __typename?: "exhibitionWork";
  /** An object relationship */
  exhibition: Exhibition;
  exhibitionId: Scalars["uuid"];
  /** An object relationship */
  work: Work;
  workId: Scalars["uuid"];
};

/** aggregated selection of "exhibitionWork" */
export type ExhibitionWork_Aggregate = {
  __typename?: "exhibitionWork_aggregate";
  aggregate?: Maybe<ExhibitionWork_Aggregate_Fields>;
  nodes: Array<ExhibitionWork>;
};

/** aggregate fields of "exhibitionWork" */
export type ExhibitionWork_Aggregate_Fields = {
  __typename?: "exhibitionWork_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
};

/** aggregate fields of "exhibitionWork" */
export type ExhibitionWork_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ExhibitionWork_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "exhibitionWork" */
export type ExhibitionWork_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "exhibitionWork" */
export type ExhibitionWork_Arr_Rel_Insert_Input = {
  data: Array<ExhibitionWork_Insert_Input>;
  on_conflict?: Maybe<ExhibitionWork_On_Conflict>;
};

/** Boolean expression to filter rows from the table "exhibitionWork". All fields are combined with a logical 'AND'. */
export type ExhibitionWork_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ExhibitionWork_Bool_Exp>>>;
  _not?: Maybe<ExhibitionWork_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ExhibitionWork_Bool_Exp>>>;
  exhibition?: Maybe<Exhibition_Bool_Exp>;
  exhibitionId?: Maybe<Uuid_Comparison_Exp>;
  work?: Maybe<Work_Bool_Exp>;
  workId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "exhibitionWork" */
export enum ExhibitionWork_Constraint {
  /** unique or primary key constraint */
  PkC8b738fe37480818a528abfeb6a = "PK_c8b738fe37480818a528abfeb6a"
}

/** input type for inserting data into table "exhibitionWork" */
export type ExhibitionWork_Insert_Input = {
  exhibition?: Maybe<Exhibition_Obj_Rel_Insert_Input>;
  exhibitionId?: Maybe<Scalars["uuid"]>;
  work?: Maybe<Work_Obj_Rel_Insert_Input>;
  workId?: Maybe<Scalars["uuid"]>;
};

/** response of any mutation on the table "exhibitionWork" */
export type ExhibitionWork_Mutation_Response = {
  __typename?: "exhibitionWork_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<ExhibitionWork>;
};

/** input type for inserting object relation for remote table "exhibitionWork" */
export type ExhibitionWork_Obj_Rel_Insert_Input = {
  data: ExhibitionWork_Insert_Input;
  on_conflict?: Maybe<ExhibitionWork_On_Conflict>;
};

/** on conflict condition type for table "exhibitionWork" */
export type ExhibitionWork_On_Conflict = {
  constraint: ExhibitionWork_Constraint;
  update_columns: Array<ExhibitionWork_Update_Column>;
};

/** ordering options when selecting data from "exhibitionWork" */
export type ExhibitionWork_Order_By = {
  exhibition?: Maybe<Exhibition_Order_By>;
  exhibitionId?: Maybe<Order_By>;
  work?: Maybe<Work_Order_By>;
  workId?: Maybe<Order_By>;
};

/** select columns of table "exhibitionWork" */
export enum ExhibitionWork_Select_Column {
  /** column name */
  ExhibitionId = "exhibitionId",
  /** column name */
  WorkId = "workId"
}

/** input type for updating data in table "exhibitionWork" */
export type ExhibitionWork_Set_Input = {
  exhibitionId?: Maybe<Scalars["uuid"]>;
  workId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "exhibitionWork" */
export enum ExhibitionWork_Update_Column {
  /** column name */
  ExhibitionId = "exhibitionId",
  /** column name */
  WorkId = "workId"
}

/** columns and relationships of "fileI18n" */
export type FileI18n = {
  __typename?: "fileI18n";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  exhibition?: Maybe<Exhibition>;
  exhibitionId?: Maybe<Scalars["uuid"]>;
  fileName: Scalars["String"];
  id: Scalars["uuid"];
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  numberOfDownloads: Scalars["smallint"];
  slug: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "fileI18n" */
export type FileI18n_Aggregate = {
  __typename?: "fileI18n_aggregate";
  aggregate?: Maybe<FileI18n_Aggregate_Fields>;
  nodes: Array<FileI18n>;
};

/** aggregate fields of "fileI18n" */
export type FileI18n_Aggregate_Fields = {
  __typename?: "fileI18n_aggregate_fields";
  avg?: Maybe<FileI18n_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<FileI18n_Max_Fields>;
  min?: Maybe<FileI18n_Min_Fields>;
  stddev?: Maybe<FileI18n_Stddev_Fields>;
  stddev_pop?: Maybe<FileI18n_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<FileI18n_Stddev_Samp_Fields>;
  sum?: Maybe<FileI18n_Sum_Fields>;
  var_pop?: Maybe<FileI18n_Var_Pop_Fields>;
  var_samp?: Maybe<FileI18n_Var_Samp_Fields>;
  variance?: Maybe<FileI18n_Variance_Fields>;
};

/** aggregate fields of "fileI18n" */
export type FileI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<FileI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "fileI18n" */
export type FileI18n_Aggregate_Order_By = {
  avg?: Maybe<FileI18n_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<FileI18n_Max_Order_By>;
  min?: Maybe<FileI18n_Min_Order_By>;
  stddev?: Maybe<FileI18n_Stddev_Order_By>;
  stddev_pop?: Maybe<FileI18n_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<FileI18n_Stddev_Samp_Order_By>;
  sum?: Maybe<FileI18n_Sum_Order_By>;
  var_pop?: Maybe<FileI18n_Var_Pop_Order_By>;
  var_samp?: Maybe<FileI18n_Var_Samp_Order_By>;
  variance?: Maybe<FileI18n_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "fileI18n" */
export type FileI18n_Arr_Rel_Insert_Input = {
  data: Array<FileI18n_Insert_Input>;
  on_conflict?: Maybe<FileI18n_On_Conflict>;
};

/** aggregate avg on columns */
export type FileI18n_Avg_Fields = {
  __typename?: "fileI18n_avg_fields";
  numberOfDownloads?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "fileI18n" */
export type FileI18n_Avg_Order_By = {
  numberOfDownloads?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "fileI18n". All fields are combined with a logical 'AND'. */
export type FileI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<FileI18n_Bool_Exp>>>;
  _not?: Maybe<FileI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<FileI18n_Bool_Exp>>>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  exhibition?: Maybe<Exhibition_Bool_Exp>;
  exhibitionId?: Maybe<Uuid_Comparison_Exp>;
  fileName?: Maybe<Varchar_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  numberOfDownloads?: Maybe<Smallint_Comparison_Exp>;
  slug?: Maybe<Varchar_Comparison_Exp>;
  title?: Maybe<Varchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "fileI18n" */
export enum FileI18n_Constraint {
  /** unique or primary key constraint */
  Pk_3a40d233c5f05805dc2b1f1ab51 = "PK_3a40d233c5f05805dc2b1f1ab51",
  /** unique or primary key constraint */
  Uq_0519316f53573301bd7ad01e4be = "UQ_0519316f53573301bd7ad01e4be"
}

/** input type for incrementing integer columne in table "fileI18n" */
export type FileI18n_Inc_Input = {
  numberOfDownloads?: Maybe<Scalars["smallint"]>;
};

/** input type for inserting data into table "fileI18n" */
export type FileI18n_Insert_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  exhibition?: Maybe<Exhibition_Obj_Rel_Insert_Input>;
  exhibitionId?: Maybe<Scalars["uuid"]>;
  fileName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  numberOfDownloads?: Maybe<Scalars["smallint"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type FileI18n_Max_Fields = {
  __typename?: "fileI18n_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  fileName?: Maybe<Scalars["String"]>;
  numberOfDownloads?: Maybe<Scalars["smallint"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "fileI18n" */
export type FileI18n_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
  fileName?: Maybe<Order_By>;
  numberOfDownloads?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type FileI18n_Min_Fields = {
  __typename?: "fileI18n_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  fileName?: Maybe<Scalars["String"]>;
  numberOfDownloads?: Maybe<Scalars["smallint"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "fileI18n" */
export type FileI18n_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
  fileName?: Maybe<Order_By>;
  numberOfDownloads?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "fileI18n" */
export type FileI18n_Mutation_Response = {
  __typename?: "fileI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<FileI18n>;
};

/** input type for inserting object relation for remote table "fileI18n" */
export type FileI18n_Obj_Rel_Insert_Input = {
  data: FileI18n_Insert_Input;
  on_conflict?: Maybe<FileI18n_On_Conflict>;
};

/** on conflict condition type for table "fileI18n" */
export type FileI18n_On_Conflict = {
  constraint: FileI18n_Constraint;
  update_columns: Array<FileI18n_Update_Column>;
};

/** ordering options when selecting data from "fileI18n" */
export type FileI18n_Order_By = {
  deletedAt?: Maybe<Order_By>;
  exhibition?: Maybe<Exhibition_Order_By>;
  exhibitionId?: Maybe<Order_By>;
  fileName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  numberOfDownloads?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** select columns of table "fileI18n" */
export enum FileI18n_Select_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  ExhibitionId = "exhibitionId",
  /** column name */
  FileName = "fileName",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  NumberOfDownloads = "numberOfDownloads",
  /** column name */
  Slug = "slug",
  /** column name */
  Title = "title"
}

/** input type for updating data in table "fileI18n" */
export type FileI18n_Set_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  exhibitionId?: Maybe<Scalars["uuid"]>;
  fileName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  numberOfDownloads?: Maybe<Scalars["smallint"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type FileI18n_Stddev_Fields = {
  __typename?: "fileI18n_stddev_fields";
  numberOfDownloads?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "fileI18n" */
export type FileI18n_Stddev_Order_By = {
  numberOfDownloads?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type FileI18n_Stddev_Pop_Fields = {
  __typename?: "fileI18n_stddev_pop_fields";
  numberOfDownloads?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "fileI18n" */
export type FileI18n_Stddev_Pop_Order_By = {
  numberOfDownloads?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type FileI18n_Stddev_Samp_Fields = {
  __typename?: "fileI18n_stddev_samp_fields";
  numberOfDownloads?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "fileI18n" */
export type FileI18n_Stddev_Samp_Order_By = {
  numberOfDownloads?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type FileI18n_Sum_Fields = {
  __typename?: "fileI18n_sum_fields";
  numberOfDownloads?: Maybe<Scalars["smallint"]>;
};

/** order by sum() on columns of table "fileI18n" */
export type FileI18n_Sum_Order_By = {
  numberOfDownloads?: Maybe<Order_By>;
};

/** update columns of table "fileI18n" */
export enum FileI18n_Update_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  ExhibitionId = "exhibitionId",
  /** column name */
  FileName = "fileName",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  NumberOfDownloads = "numberOfDownloads",
  /** column name */
  Slug = "slug",
  /** column name */
  Title = "title"
}

/** aggregate var_pop on columns */
export type FileI18n_Var_Pop_Fields = {
  __typename?: "fileI18n_var_pop_fields";
  numberOfDownloads?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "fileI18n" */
export type FileI18n_Var_Pop_Order_By = {
  numberOfDownloads?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type FileI18n_Var_Samp_Fields = {
  __typename?: "fileI18n_var_samp_fields";
  numberOfDownloads?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "fileI18n" */
export type FileI18n_Var_Samp_Order_By = {
  numberOfDownloads?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type FileI18n_Variance_Fields = {
  __typename?: "fileI18n_variance_fields";
  numberOfDownloads?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "fileI18n" */
export type FileI18n_Variance_Order_By = {
  numberOfDownloads?: Maybe<Order_By>;
};

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars["jsonb"]>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars["jsonb"]>;
  _eq?: Maybe<Scalars["jsonb"]>;
  _gt?: Maybe<Scalars["jsonb"]>;
  _gte?: Maybe<Scalars["jsonb"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars["String"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars["String"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars["String"]>>;
  _in?: Maybe<Array<Scalars["jsonb"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["jsonb"]>;
  _lte?: Maybe<Scalars["jsonb"]>;
  _neq?: Maybe<Scalars["jsonb"]>;
  _nin?: Maybe<Array<Scalars["jsonb"]>>;
};

/** columns and relationships of "link" */
export type Link = {
  __typename?: "link";
  /** An object relationship */
  artist?: Maybe<Artist>;
  artistId?: Maybe<Scalars["uuid"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An array relationship */
  translations: Array<LinkI18n>;
  /** An aggregated array relationship */
  translations_aggregate: LinkI18n_Aggregate;
  url: Scalars["String"];
};

/** columns and relationships of "link" */
export type LinkTranslationsArgs = {
  distinct_on?: Maybe<Array<LinkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LinkI18n_Order_By>>;
  where?: Maybe<LinkI18n_Bool_Exp>;
};

/** columns and relationships of "link" */
export type LinkTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<LinkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LinkI18n_Order_By>>;
  where?: Maybe<LinkI18n_Bool_Exp>;
};

/** aggregated selection of "link" */
export type Link_Aggregate = {
  __typename?: "link_aggregate";
  aggregate?: Maybe<Link_Aggregate_Fields>;
  nodes: Array<Link>;
};

/** aggregate fields of "link" */
export type Link_Aggregate_Fields = {
  __typename?: "link_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Link_Max_Fields>;
  min?: Maybe<Link_Min_Fields>;
};

/** aggregate fields of "link" */
export type Link_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Link_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "link" */
export type Link_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Link_Max_Order_By>;
  min?: Maybe<Link_Min_Order_By>;
};

/** input type for inserting array relation for remote table "link" */
export type Link_Arr_Rel_Insert_Input = {
  data: Array<Link_Insert_Input>;
  on_conflict?: Maybe<Link_On_Conflict>;
};

/** Boolean expression to filter rows from the table "link". All fields are combined with a logical 'AND'. */
export type Link_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Link_Bool_Exp>>>;
  _not?: Maybe<Link_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Link_Bool_Exp>>>;
  artist?: Maybe<Artist_Bool_Exp>;
  artistId?: Maybe<Uuid_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  translations?: Maybe<LinkI18n_Bool_Exp>;
  url?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "link" */
export enum Link_Constraint {
  /** unique or primary key constraint */
  Pk_26206fb7186da72fbb9eaa3fac9 = "PK_26206fb7186da72fbb9eaa3fac9"
}

/** input type for inserting data into table "link" */
export type Link_Insert_Input = {
  artist?: Maybe<Artist_Obj_Rel_Insert_Input>;
  artistId?: Maybe<Scalars["uuid"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  translations?: Maybe<LinkI18n_Arr_Rel_Insert_Input>;
  url?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Link_Max_Fields = {
  __typename?: "link_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  url?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "link" */
export type Link_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Link_Min_Fields = {
  __typename?: "link_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  url?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "link" */
export type Link_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "link" */
export type Link_Mutation_Response = {
  __typename?: "link_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Link>;
};

/** input type for inserting object relation for remote table "link" */
export type Link_Obj_Rel_Insert_Input = {
  data: Link_Insert_Input;
  on_conflict?: Maybe<Link_On_Conflict>;
};

/** on conflict condition type for table "link" */
export type Link_On_Conflict = {
  constraint: Link_Constraint;
  update_columns: Array<Link_Update_Column>;
};

/** ordering options when selecting data from "link" */
export type Link_Order_By = {
  artist?: Maybe<Artist_Order_By>;
  artistId?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  translations_aggregate?: Maybe<LinkI18n_Aggregate_Order_By>;
  url?: Maybe<Order_By>;
};

/** select columns of table "link" */
export enum Link_Select_Column {
  /** column name */
  ArtistId = "artistId",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  Url = "url"
}

/** input type for updating data in table "link" */
export type Link_Set_Input = {
  artistId?: Maybe<Scalars["uuid"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  url?: Maybe<Scalars["String"]>;
};

/** update columns of table "link" */
export enum Link_Update_Column {
  /** column name */
  ArtistId = "artistId",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  Url = "url"
}

/** columns and relationships of "linkI18n" */
export type LinkI18n = {
  __typename?: "linkI18n";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  link: Locale;
  linkId: Scalars["uuid"];
  /** An object relationship */
  locale: Link;
  localeId: Scalars["uuid"];
  title?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "linkI18n" */
export type LinkI18n_Aggregate = {
  __typename?: "linkI18n_aggregate";
  aggregate?: Maybe<LinkI18n_Aggregate_Fields>;
  nodes: Array<LinkI18n>;
};

/** aggregate fields of "linkI18n" */
export type LinkI18n_Aggregate_Fields = {
  __typename?: "linkI18n_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<LinkI18n_Max_Fields>;
  min?: Maybe<LinkI18n_Min_Fields>;
};

/** aggregate fields of "linkI18n" */
export type LinkI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<LinkI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "linkI18n" */
export type LinkI18n_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<LinkI18n_Max_Order_By>;
  min?: Maybe<LinkI18n_Min_Order_By>;
};

/** input type for inserting array relation for remote table "linkI18n" */
export type LinkI18n_Arr_Rel_Insert_Input = {
  data: Array<LinkI18n_Insert_Input>;
  on_conflict?: Maybe<LinkI18n_On_Conflict>;
};

/** Boolean expression to filter rows from the table "linkI18n". All fields are combined with a logical 'AND'. */
export type LinkI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<LinkI18n_Bool_Exp>>>;
  _not?: Maybe<LinkI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<LinkI18n_Bool_Exp>>>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  link?: Maybe<Locale_Bool_Exp>;
  linkId?: Maybe<Uuid_Comparison_Exp>;
  locale?: Maybe<Link_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  title?: Maybe<Varchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "linkI18n" */
export enum LinkI18n_Constraint {
  /** unique or primary key constraint */
  PkD01ddd67a5c6aa51df5af8e1702 = "PK_d01ddd67a5c6aa51df5af8e1702"
}

/** input type for inserting data into table "linkI18n" */
export type LinkI18n_Insert_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  link?: Maybe<Locale_Obj_Rel_Insert_Input>;
  linkId?: Maybe<Scalars["uuid"]>;
  locale?: Maybe<Link_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type LinkI18n_Max_Fields = {
  __typename?: "linkI18n_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "linkI18n" */
export type LinkI18n_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type LinkI18n_Min_Fields = {
  __typename?: "linkI18n_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "linkI18n" */
export type LinkI18n_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "linkI18n" */
export type LinkI18n_Mutation_Response = {
  __typename?: "linkI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<LinkI18n>;
};

/** input type for inserting object relation for remote table "linkI18n" */
export type LinkI18n_Obj_Rel_Insert_Input = {
  data: LinkI18n_Insert_Input;
  on_conflict?: Maybe<LinkI18n_On_Conflict>;
};

/** on conflict condition type for table "linkI18n" */
export type LinkI18n_On_Conflict = {
  constraint: LinkI18n_Constraint;
  update_columns: Array<LinkI18n_Update_Column>;
};

/** ordering options when selecting data from "linkI18n" */
export type LinkI18n_Order_By = {
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Locale_Order_By>;
  linkId?: Maybe<Order_By>;
  locale?: Maybe<Link_Order_By>;
  localeId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** select columns of table "linkI18n" */
export enum LinkI18n_Select_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LinkId = "linkId",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Title = "title"
}

/** input type for updating data in table "linkI18n" */
export type LinkI18n_Set_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  linkId?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
};

/** update columns of table "linkI18n" */
export enum LinkI18n_Update_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LinkId = "linkId",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Title = "title"
}

/** columns and relationships of "locale" */
export type Locale = {
  __typename?: "locale";
  /** An array relationship */
  artistTranslations: Array<ArtistI18n>;
  /** An aggregated array relationship */
  artistTranslations_aggregate: ArtistI18n_Aggregate;
  /** An array relationship */
  basisTranslations: Array<BasisI18n>;
  /** An aggregated array relationship */
  basisTranslations_aggregate: BasisI18n_Aggregate;
  /** An array relationship */
  categoryTranslations: Array<CategoryI18n>;
  /** An aggregated array relationship */
  categoryTranslations_aggregate: CategoryI18n_Aggregate;
  code: Scalars["String"];
  currencyCode: Scalars["String"];
  /** An array relationship */
  customFieldTranslations: Array<CustomFieldI18n>;
  /** An aggregated array relationship */
  customFieldTranslations_aggregate: CustomFieldI18n_Aggregate;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  /** An array relationship */
  exhibitionTranslations: Array<ExhibitionI18n>;
  /** An aggregated array relationship */
  exhibitionTranslations_aggregate: ExhibitionI18n_Aggregate;
  /** An array relationship */
  fileTranslations: Array<FileI18n>;
  /** An aggregated array relationship */
  fileTranslations_aggregate: FileI18n_Aggregate;
  icon: Scalars["String"];
  id: Scalars["uuid"];
  isDefault: Scalars["Boolean"];
  isEnabled: Scalars["Boolean"];
  /** An array relationship */
  linkTranslations: Array<LinkI18n>;
  /** An aggregated array relationship */
  linkTranslations_aggregate: LinkI18n_Aggregate;
  name: Scalars["String"];
  /** An array relationship */
  navigationTranslations: Array<NavigationI18n>;
  /** An aggregated array relationship */
  navigationTranslations_aggregate: NavigationI18n_Aggregate;
  /** An array relationship */
  newsTranslations: Array<NewsI18n>;
  /** An aggregated array relationship */
  newsTranslations_aggregate: NewsI18n_Aggregate;
  /** An array relationship */
  pageTranslations: Array<PageI18n>;
  /** An aggregated array relationship */
  pageTranslations_aggregate: PageI18n_Aggregate;
  /** An array relationship */
  provenanceTranslations: Array<ProvenanceI18n>;
  /** An aggregated array relationship */
  provenanceTranslations_aggregate: ProvenanceI18n_Aggregate;
  /** An array relationship */
  schoolTranslations: Array<SchoolI18n>;
  /** An aggregated array relationship */
  schoolTranslations_aggregate: SchoolI18n_Aggregate;
  /** An array relationship */
  siteTranslations: Array<Translation>;
  /** An aggregated array relationship */
  siteTranslations_aggregate: Translation_Aggregate;
  /** An array relationship */
  sliderTranslations: Array<SliderI18n>;
  /** An aggregated array relationship */
  sliderTranslations_aggregate: SliderI18n_Aggregate;
  /** An array relationship */
  tagTranslations: Array<TagI18n>;
  /** An aggregated array relationship */
  tagTranslations_aggregate: TagI18n_Aggregate;
  /** An array relationship */
  techniqueTranslations: Array<TechniqueI18n>;
  /** An aggregated array relationship */
  techniqueTranslations_aggregate: TechniqueI18n_Aggregate;
  /** An array relationship */
  workTranslations: Array<WorkI18n>;
  /** An aggregated array relationship */
  workTranslations_aggregate: WorkI18n_Aggregate;
};

/** columns and relationships of "locale" */
export type LocaleArtistTranslationsArgs = {
  distinct_on?: Maybe<Array<ArtistI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistI18n_Order_By>>;
  where?: Maybe<ArtistI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleArtistTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<ArtistI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistI18n_Order_By>>;
  where?: Maybe<ArtistI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleBasisTranslationsArgs = {
  distinct_on?: Maybe<Array<BasisI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BasisI18n_Order_By>>;
  where?: Maybe<BasisI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleBasisTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<BasisI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BasisI18n_Order_By>>;
  where?: Maybe<BasisI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleCategoryTranslationsArgs = {
  distinct_on?: Maybe<Array<CategoryI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CategoryI18n_Order_By>>;
  where?: Maybe<CategoryI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleCategoryTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<CategoryI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CategoryI18n_Order_By>>;
  where?: Maybe<CategoryI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleCustomFieldTranslationsArgs = {
  distinct_on?: Maybe<Array<CustomFieldI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldI18n_Order_By>>;
  where?: Maybe<CustomFieldI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleCustomFieldTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<CustomFieldI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldI18n_Order_By>>;
  where?: Maybe<CustomFieldI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleExhibitionTranslationsArgs = {
  distinct_on?: Maybe<Array<ExhibitionI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionI18n_Order_By>>;
  where?: Maybe<ExhibitionI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleExhibitionTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<ExhibitionI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionI18n_Order_By>>;
  where?: Maybe<ExhibitionI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleFileTranslationsArgs = {
  distinct_on?: Maybe<Array<FileI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<FileI18n_Order_By>>;
  where?: Maybe<FileI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleFileTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<FileI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<FileI18n_Order_By>>;
  where?: Maybe<FileI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleLinkTranslationsArgs = {
  distinct_on?: Maybe<Array<LinkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LinkI18n_Order_By>>;
  where?: Maybe<LinkI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleLinkTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<LinkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LinkI18n_Order_By>>;
  where?: Maybe<LinkI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleNavigationTranslationsArgs = {
  distinct_on?: Maybe<Array<NavigationI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NavigationI18n_Order_By>>;
  where?: Maybe<NavigationI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleNavigationTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<NavigationI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NavigationI18n_Order_By>>;
  where?: Maybe<NavigationI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleNewsTranslationsArgs = {
  distinct_on?: Maybe<Array<NewsI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsI18n_Order_By>>;
  where?: Maybe<NewsI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleNewsTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<NewsI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsI18n_Order_By>>;
  where?: Maybe<NewsI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocalePageTranslationsArgs = {
  distinct_on?: Maybe<Array<PageI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageI18n_Order_By>>;
  where?: Maybe<PageI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocalePageTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<PageI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageI18n_Order_By>>;
  where?: Maybe<PageI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleProvenanceTranslationsArgs = {
  distinct_on?: Maybe<Array<ProvenanceI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ProvenanceI18n_Order_By>>;
  where?: Maybe<ProvenanceI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleProvenanceTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<ProvenanceI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ProvenanceI18n_Order_By>>;
  where?: Maybe<ProvenanceI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleSchoolTranslationsArgs = {
  distinct_on?: Maybe<Array<SchoolI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SchoolI18n_Order_By>>;
  where?: Maybe<SchoolI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleSchoolTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<SchoolI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SchoolI18n_Order_By>>;
  where?: Maybe<SchoolI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleSiteTranslationsArgs = {
  distinct_on?: Maybe<Array<Translation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Translation_Order_By>>;
  where?: Maybe<Translation_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleSiteTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<Translation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Translation_Order_By>>;
  where?: Maybe<Translation_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleSliderTranslationsArgs = {
  distinct_on?: Maybe<Array<SliderI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SliderI18n_Order_By>>;
  where?: Maybe<SliderI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleSliderTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<SliderI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SliderI18n_Order_By>>;
  where?: Maybe<SliderI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleTagTranslationsArgs = {
  distinct_on?: Maybe<Array<TagI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TagI18n_Order_By>>;
  where?: Maybe<TagI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleTagTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<TagI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TagI18n_Order_By>>;
  where?: Maybe<TagI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleTechniqueTranslationsArgs = {
  distinct_on?: Maybe<Array<TechniqueI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TechniqueI18n_Order_By>>;
  where?: Maybe<TechniqueI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleTechniqueTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<TechniqueI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TechniqueI18n_Order_By>>;
  where?: Maybe<TechniqueI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleWorkTranslationsArgs = {
  distinct_on?: Maybe<Array<WorkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkI18n_Order_By>>;
  where?: Maybe<WorkI18n_Bool_Exp>;
};

/** columns and relationships of "locale" */
export type LocaleWorkTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<WorkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkI18n_Order_By>>;
  where?: Maybe<WorkI18n_Bool_Exp>;
};

/** aggregated selection of "locale" */
export type Locale_Aggregate = {
  __typename?: "locale_aggregate";
  aggregate?: Maybe<Locale_Aggregate_Fields>;
  nodes: Array<Locale>;
};

/** aggregate fields of "locale" */
export type Locale_Aggregate_Fields = {
  __typename?: "locale_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Locale_Max_Fields>;
  min?: Maybe<Locale_Min_Fields>;
};

/** aggregate fields of "locale" */
export type Locale_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Locale_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "locale" */
export type Locale_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Locale_Max_Order_By>;
  min?: Maybe<Locale_Min_Order_By>;
};

/** input type for inserting array relation for remote table "locale" */
export type Locale_Arr_Rel_Insert_Input = {
  data: Array<Locale_Insert_Input>;
  on_conflict?: Maybe<Locale_On_Conflict>;
};

/** Boolean expression to filter rows from the table "locale". All fields are combined with a logical 'AND'. */
export type Locale_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Locale_Bool_Exp>>>;
  _not?: Maybe<Locale_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Locale_Bool_Exp>>>;
  artistTranslations?: Maybe<ArtistI18n_Bool_Exp>;
  basisTranslations?: Maybe<BasisI18n_Bool_Exp>;
  categoryTranslations?: Maybe<CategoryI18n_Bool_Exp>;
  code?: Maybe<Varchar_Comparison_Exp>;
  currencyCode?: Maybe<Varchar_Comparison_Exp>;
  customFieldTranslations?: Maybe<CustomFieldI18n_Bool_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  exhibitionTranslations?: Maybe<ExhibitionI18n_Bool_Exp>;
  fileTranslations?: Maybe<FileI18n_Bool_Exp>;
  icon?: Maybe<Varchar_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  isDefault?: Maybe<Boolean_Comparison_Exp>;
  isEnabled?: Maybe<Boolean_Comparison_Exp>;
  linkTranslations?: Maybe<LinkI18n_Bool_Exp>;
  name?: Maybe<Varchar_Comparison_Exp>;
  navigationTranslations?: Maybe<NavigationI18n_Bool_Exp>;
  newsTranslations?: Maybe<NewsI18n_Bool_Exp>;
  pageTranslations?: Maybe<PageI18n_Bool_Exp>;
  provenanceTranslations?: Maybe<ProvenanceI18n_Bool_Exp>;
  schoolTranslations?: Maybe<SchoolI18n_Bool_Exp>;
  siteTranslations?: Maybe<Translation_Bool_Exp>;
  sliderTranslations?: Maybe<SliderI18n_Bool_Exp>;
  tagTranslations?: Maybe<TagI18n_Bool_Exp>;
  techniqueTranslations?: Maybe<TechniqueI18n_Bool_Exp>;
  workTranslations?: Maybe<WorkI18n_Bool_Exp>;
};

/** unique or primary key constraints on table "locale" */
export enum Locale_Constraint {
  /** unique or primary key constraint */
  Pk_4b7a3ebe8ec48f1bb2c4b80e349 = "PK_4b7a3ebe8ec48f1bb2c4b80e349"
}

/** input type for inserting data into table "locale" */
export type Locale_Insert_Input = {
  artistTranslations?: Maybe<ArtistI18n_Arr_Rel_Insert_Input>;
  basisTranslations?: Maybe<BasisI18n_Arr_Rel_Insert_Input>;
  categoryTranslations?: Maybe<CategoryI18n_Arr_Rel_Insert_Input>;
  code?: Maybe<Scalars["String"]>;
  currencyCode?: Maybe<Scalars["String"]>;
  customFieldTranslations?: Maybe<CustomFieldI18n_Arr_Rel_Insert_Input>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  exhibitionTranslations?: Maybe<ExhibitionI18n_Arr_Rel_Insert_Input>;
  fileTranslations?: Maybe<FileI18n_Arr_Rel_Insert_Input>;
  icon?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  isDefault?: Maybe<Scalars["Boolean"]>;
  isEnabled?: Maybe<Scalars["Boolean"]>;
  linkTranslations?: Maybe<LinkI18n_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars["String"]>;
  navigationTranslations?: Maybe<NavigationI18n_Arr_Rel_Insert_Input>;
  newsTranslations?: Maybe<NewsI18n_Arr_Rel_Insert_Input>;
  pageTranslations?: Maybe<PageI18n_Arr_Rel_Insert_Input>;
  provenanceTranslations?: Maybe<ProvenanceI18n_Arr_Rel_Insert_Input>;
  schoolTranslations?: Maybe<SchoolI18n_Arr_Rel_Insert_Input>;
  siteTranslations?: Maybe<Translation_Arr_Rel_Insert_Input>;
  sliderTranslations?: Maybe<SliderI18n_Arr_Rel_Insert_Input>;
  tagTranslations?: Maybe<TagI18n_Arr_Rel_Insert_Input>;
  techniqueTranslations?: Maybe<TechniqueI18n_Arr_Rel_Insert_Input>;
  workTranslations?: Maybe<WorkI18n_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Locale_Max_Fields = {
  __typename?: "locale_max_fields";
  code?: Maybe<Scalars["String"]>;
  currencyCode?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  icon?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "locale" */
export type Locale_Max_Order_By = {
  code?: Maybe<Order_By>;
  currencyCode?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  icon?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Locale_Min_Fields = {
  __typename?: "locale_min_fields";
  code?: Maybe<Scalars["String"]>;
  currencyCode?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  icon?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "locale" */
export type Locale_Min_Order_By = {
  code?: Maybe<Order_By>;
  currencyCode?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  icon?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "locale" */
export type Locale_Mutation_Response = {
  __typename?: "locale_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Locale>;
};

/** input type for inserting object relation for remote table "locale" */
export type Locale_Obj_Rel_Insert_Input = {
  data: Locale_Insert_Input;
  on_conflict?: Maybe<Locale_On_Conflict>;
};

/** on conflict condition type for table "locale" */
export type Locale_On_Conflict = {
  constraint: Locale_Constraint;
  update_columns: Array<Locale_Update_Column>;
};

/** ordering options when selecting data from "locale" */
export type Locale_Order_By = {
  artistTranslations_aggregate?: Maybe<ArtistI18n_Aggregate_Order_By>;
  basisTranslations_aggregate?: Maybe<BasisI18n_Aggregate_Order_By>;
  categoryTranslations_aggregate?: Maybe<CategoryI18n_Aggregate_Order_By>;
  code?: Maybe<Order_By>;
  currencyCode?: Maybe<Order_By>;
  customFieldTranslations_aggregate?: Maybe<CustomFieldI18n_Aggregate_Order_By>;
  deletedAt?: Maybe<Order_By>;
  exhibitionTranslations_aggregate?: Maybe<ExhibitionI18n_Aggregate_Order_By>;
  fileTranslations_aggregate?: Maybe<FileI18n_Aggregate_Order_By>;
  icon?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isDefault?: Maybe<Order_By>;
  isEnabled?: Maybe<Order_By>;
  linkTranslations_aggregate?: Maybe<LinkI18n_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  navigationTranslations_aggregate?: Maybe<NavigationI18n_Aggregate_Order_By>;
  newsTranslations_aggregate?: Maybe<NewsI18n_Aggregate_Order_By>;
  pageTranslations_aggregate?: Maybe<PageI18n_Aggregate_Order_By>;
  provenanceTranslations_aggregate?: Maybe<ProvenanceI18n_Aggregate_Order_By>;
  schoolTranslations_aggregate?: Maybe<SchoolI18n_Aggregate_Order_By>;
  siteTranslations_aggregate?: Maybe<Translation_Aggregate_Order_By>;
  sliderTranslations_aggregate?: Maybe<SliderI18n_Aggregate_Order_By>;
  tagTranslations_aggregate?: Maybe<TagI18n_Aggregate_Order_By>;
  techniqueTranslations_aggregate?: Maybe<TechniqueI18n_Aggregate_Order_By>;
  workTranslations_aggregate?: Maybe<WorkI18n_Aggregate_Order_By>;
};

/** select columns of table "locale" */
export enum Locale_Select_Column {
  /** column name */
  Code = "code",
  /** column name */
  CurrencyCode = "currencyCode",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Icon = "icon",
  /** column name */
  Id = "id",
  /** column name */
  IsDefault = "isDefault",
  /** column name */
  IsEnabled = "isEnabled",
  /** column name */
  Name = "name"
}

/** input type for updating data in table "locale" */
export type Locale_Set_Input = {
  code?: Maybe<Scalars["String"]>;
  currencyCode?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  icon?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  isDefault?: Maybe<Scalars["Boolean"]>;
  isEnabled?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
};

/** update columns of table "locale" */
export enum Locale_Update_Column {
  /** column name */
  Code = "code",
  /** column name */
  CurrencyCode = "currencyCode",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Icon = "icon",
  /** column name */
  Id = "id",
  /** column name */
  IsDefault = "isDefault",
  /** column name */
  IsEnabled = "isEnabled",
  /** column name */
  Name = "name"
}

export type Mutation = {
  __typename?: "Mutation";
  createWork?: Maybe<CreateWorkResult>;
  updateWork?: Maybe<UpdateWorkResult>;
  deleteWork?: Maybe<DeleteWorkResult>;
  updatePositionsOfWorks?: Maybe<UpdatePositionsOfWorksResult>;
  createArtist?: Maybe<CreateArtistResult>;
  updateArtist?: Maybe<UpdateArtistResult>;
  deleteArtist?: Maybe<DeleteArtistResult>;
  createArtistTranslation?: Maybe<CreateArtistTranslationResponse>;
  updateArtistTranslation?: Maybe<UpdateArtistTranslationResponse>;
  deleteArtistTranslation?: Maybe<DeleteArtistTranslationResult>;
  createLocale?: Maybe<CreateLocaleResponse>;
  updateLocale?: Maybe<UpdateLocaleResponse>;
  deleteLocale?: Maybe<DeleteLocaleResponse>;
  createTranslation?: Maybe<CreateTranslationResponse>;
  updateTranslation?: Maybe<UpdateTranslationResponse>;
  deleteTranslation?: Maybe<DeleteTranslationResponse>;
  createCategory?: Maybe<CreateCategoryResponse>;
  updateCategory?: Maybe<UpdateCategoryResponse>;
  deleteCategory?: Maybe<DeleteCategoryResponse>;
  createExhibition?: Maybe<CreateExhibitionResult>;
  updateExhibition?: Maybe<UpdateExhibitionResult>;
  deleteExhibition?: Maybe<DeleteExhibitionResult>;
  updatePositionsOfExhibitions?: Maybe<UpdatePositionsOfExhibitionsResult>;
  createWorkTranslation?: Maybe<CreateWorkTranslationResponse>;
  updateWorkTranslation?: Maybe<UpdateWorkTranslationResponse>;
  deleteWorkTranslation?: Maybe<DeleteWorkTranslationResponse>;
  createCategoryTranslation?: Maybe<CreateCategoryTranslationResponse>;
  updateCategoryTranslation?: Maybe<UpdateCategoryTranslationResponse>;
  deleteCategoryTranslation?: Maybe<DeleteCategoryTranslationResponse>;
  createExhibitionTranslation?: Maybe<CreateExhibitionTranslationResponse>;
  updateExhibitionTranslation?: Maybe<UpdateExhibitionTranslationResponse>;
  deleteExhibitionTranslation?: Maybe<DeleteExhibitionTranslationResponse>;
  addProductToCart?: Maybe<CreateCartResponse>;
  updateProductInCart?: Maybe<UpdateCartResponse>;
  deleteProductFromCart?: Maybe<DeleteCartResponse>;
  createNews?: Maybe<CreateNewsResult>;
  updateNews?: Maybe<UpdateNewsResult>;
  deleteNews?: Maybe<DeleteNewsResult>;
  createNewsTranslation?: Maybe<CreateNewsTranslationResult>;
  updateNewsTranslation?: Maybe<UpdateNewsTranslationResult>;
  deleteNewsTranslation?: Maybe<DeleteNewsTranslationResult>;
  createTag?: Maybe<CreateTagResult>;
  deleteTag?: Maybe<DeleteTagResult>;
  createTagTranslation?: Maybe<CreateTagTranslationResult>;
  updateTagTranslation?: Maybe<UpdateTagTranslationResult>;
  deleteTagTranslation?: Maybe<DeleteTagTranslationResult>;
  createPage?: Maybe<CreatePageResult>;
  deletePage?: Maybe<DeletePageResult>;
  createPageTranslation?: Maybe<CreatePageTranslationResult>;
  updatePageTranslation?: Maybe<UpdatePageTranslationResult>;
  deletePageTranslation?: Maybe<DeletePageTranslationResult>;
  createCustomField?: Maybe<CreateCustomFieldResult>;
  updateCustomField?: Maybe<UpdateCustomFieldResult>;
  deleteCustomField?: Maybe<DeleteCustomFieldResult>;
  createCustomFieldTranslation?: Maybe<CreateCustomFieldTranslationResult>;
  updateCustomFieldTranslation?: Maybe<UpdateCustomFieldTranslationResult>;
  deleteCustomFieldTranslation?: Maybe<DeleteCustomFieldTranslationResult>;
  createOrder?: Maybe<CreateOrderResult>;
  deleteOrder?: Maybe<DeleteOrderResult>;
  createTechnique?: Maybe<CreateTechniqueResult>;
  deleteTechnique?: Maybe<DeleteTechniqueResult>;
  createTechniqueTranslation?: Maybe<CreateTechniqueTranslationResult>;
  updateTechniqueTranslation?: Maybe<UpdateTechniqueTranslationResult>;
  deleteTechniqueTranslation?: Maybe<DeleteTechniqueTranslationResult>;
  createSchool?: Maybe<CreateSchoolResult>;
  deleteSchool?: Maybe<DeleteSchoolResult>;
  createBasis?: Maybe<CreateBasisResult>;
  deleteBasis?: Maybe<DeleteBasisResult>;
  createSlider?: Maybe<CreateSliderResult>;
  updateSlider?: Maybe<UpdateSliderResult>;
  deleteSlider?: Maybe<DeleteSliderResult>;
  updatePositionsOfSliders?: Maybe<UpdatePositionsOfSlidersResult>;
  createSliderTranslation?: Maybe<CreateSliderTranslationResult>;
  updateSliderTranslation?: Maybe<UpdateSliderTranslationResult>;
  deleteSliderTranslation?: Maybe<DeleteSliderTranslationResult>;
  createProvenance?: Maybe<CreateProvenanceResult>;
  deleteProvenance?: Maybe<DeleteProvenanceResult>;
  createProvenanceTranslation?: Maybe<CreateProvenanceTranslationResult>;
  updateProvenanceTranslation?: Maybe<UpdateProvenanceTranslationResult>;
  deleteProvenanceTranslation?: Maybe<DeleteProvenanceTranslationResult>;
  createNavigation?: Maybe<CreateNavigationResult>;
  updateNavigation?: Maybe<UpdateNavigationResult>;
  deleteNavigation?: Maybe<DeleteNavigationResult>;
  updatePositionsOfNavigations?: Maybe<UpdatePositionsOfNavigationsResult>;
  createNavigationTranslation?: Maybe<CreateNavigationTranslationResult>;
  updateNavigationTranslation?: Maybe<UpdateNavigationTranslationResult>;
  deleteNavigationTranslation?: Maybe<DeleteNavigationTranslationResult>;
  createSchoolTranslation?: Maybe<CreateSchoolTranslationResult>;
  updateSchoolTranslation?: Maybe<UpdateSchoolTranslationResult>;
  deleteSchoolTranslation?: Maybe<DeleteSchoolTranslationResult>;
  createBasisTranslation?: Maybe<CreateBasisTranslationResult>;
  updateBasisTranslation?: Maybe<UpdateBasisTranslationResult>;
  deleteBasisTranslation?: Maybe<DeleteBasisTranslationResult>;
  createFile?: Maybe<CreateFileResult>;
  updateFile?: Maybe<UpdateFileResult>;
  deleteFile?: Maybe<DeleteFileResult>;
  createLink: CreateLinkResult;
  updateLink: UpdateLinkResult;
  deleteLink: DeleteLinkResult;
  createLinkTranslation: CreateLinkTranslationResult;
  updateLinkTranslation: UpdateLinkTranslationResult;
  deleteLinkTranslation: DeleteLinkTranslationResult;
  addSocialNetwork: AddSocialNetworkResult;
  updateSocialNetwork: UpdateSocialNetworkResult;
  deleteSocialNetwork: DeleteSocialNetworkResult;
};

export type MutationCreateWorkArgs = {
  data?: Maybe<CreateWorkData>;
  images: Array<Scalars["Upload"]>;
};

export type MutationUpdateWorkArgs = {
  data?: Maybe<UpdateWorkData>;
  id: Scalars["String"];
  imagesForInsert?: Maybe<Array<Scalars["Upload"]>>;
};

export type MutationDeleteWorkArgs = {
  id: Scalars["String"];
};

export type MutationUpdatePositionsOfWorksArgs = {
  data?: Maybe<Array<UpdatePositionsOfWorksData>>;
};

export type MutationCreateArtistArgs = {
  photo?: Maybe<Scalars["Upload"]>;
};

export type MutationUpdateArtistArgs = {
  id: Scalars["String"];
  photo?: Maybe<Scalars["Upload"]>;
};

export type MutationDeleteArtistArgs = {
  id: Scalars["String"];
};

export type MutationCreateArtistTranslationArgs = {
  data: CreateArtistTranslationInput;
  artistId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationUpdateArtistTranslationArgs = {
  data: UpdateArtistTranslationInput;
  artistId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteArtistTranslationArgs = {
  artistId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationCreateLocaleArgs = {
  data: CreateLocaleInput;
};

export type MutationUpdateLocaleArgs = {
  data: UpdateLocaleInput;
  id: Scalars["String"];
};

export type MutationDeleteLocaleArgs = {
  id: Scalars["String"];
};

export type MutationCreateTranslationArgs = {
  data: CreateTranslationInput;
};

export type MutationUpdateTranslationArgs = {
  data: UpdateTranslationInput;
  id: Scalars["String"];
};

export type MutationDeleteTranslationArgs = {
  id: Scalars["String"];
};

export type MutationCreateCategoryArgs = {
  data: CreateCategoryData;
  photo?: Maybe<Scalars["Upload"]>;
};

export type MutationUpdateCategoryArgs = {
  data: UpdateCategoryData;
  photo?: Maybe<Scalars["Upload"]>;
  id: Scalars["String"];
};

export type MutationDeleteCategoryArgs = {
  id: Scalars["String"];
};

export type MutationCreateExhibitionArgs = {
  data: CreateExhibitionData;
  image?: Maybe<Scalars["Upload"]>;
};

export type MutationUpdateExhibitionArgs = {
  data: UpdateExhibitionData;
  image?: Maybe<Scalars["Upload"]>;
  id: Scalars["String"];
};

export type MutationDeleteExhibitionArgs = {
  id: Scalars["String"];
};

export type MutationUpdatePositionsOfExhibitionsArgs = {
  data?: Maybe<Array<Maybe<UpdatePositionsOfExhibitionsData>>>;
};

export type MutationCreateWorkTranslationArgs = {
  data: CreateWorkTranslationData;
  workId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationUpdateWorkTranslationArgs = {
  data: UpdateWorkTranslationData;
  workId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteWorkTranslationArgs = {
  workId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationCreateCategoryTranslationArgs = {
  data?: Maybe<CreateCategoryTranslationData>;
  categoryId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationUpdateCategoryTranslationArgs = {
  data?: Maybe<UpdateCategoryTranslationData>;
  categoryId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteCategoryTranslationArgs = {
  categoryId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationCreateExhibitionTranslationArgs = {
  data: CreateExhibitionTranslationData;
  exhibitionId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationUpdateExhibitionTranslationArgs = {
  data: UpdateExhibitionTranslationData;
  exhibitionId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteExhibitionTranslationArgs = {
  exhibitionId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationAddProductToCartArgs = {
  data: CreateCartData;
};

export type MutationUpdateProductInCartArgs = {
  data: UpdateCartData;
  id: Scalars["String"];
};

export type MutationDeleteProductFromCartArgs = {
  id: Scalars["String"];
};

export type MutationCreateNewsArgs = {
  data: CreateNewsData;
};

export type MutationUpdateNewsArgs = {
  data: UpdateNewsData;
  id: Scalars["String"];
};

export type MutationDeleteNewsArgs = {
  id: Scalars["String"];
};

export type MutationCreateNewsTranslationArgs = {
  data: CreateNewsTranslationData;
  newsId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationUpdateNewsTranslationArgs = {
  data: UpdateNewsTranslationData;
  newsId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteNewsTranslationArgs = {
  newsId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteTagArgs = {
  id: Scalars["String"];
};

export type MutationCreateTagTranslationArgs = {
  data: CreateTagTranslationData;
  tagId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationUpdateTagTranslationArgs = {
  data: UpdateTagTranslationData;
  tagId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteTagTranslationArgs = {
  tagId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeletePageArgs = {
  id: Scalars["String"];
};

export type MutationCreatePageTranslationArgs = {
  data: CreatePageTranslationData;
  pageId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationUpdatePageTranslationArgs = {
  data: UpdatePageTranslationData;
  pageId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeletePageTranslationArgs = {
  pageId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationCreateCustomFieldArgs = {
  data: CreateCustomFieldData;
};

export type MutationUpdateCustomFieldArgs = {
  data: UpdateCustomFieldData;
  id: Scalars["String"];
};

export type MutationDeleteCustomFieldArgs = {
  id: Scalars["String"];
};

export type MutationCreateCustomFieldTranslationArgs = {
  data: CreateCustomFieldTranslationData;
  customFieldId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationUpdateCustomFieldTranslationArgs = {
  data: UpdateCustomFieldTranslationData;
  customFieldId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteCustomFieldTranslationArgs = {
  customFieldId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationCreateOrderArgs = {
  data: CreateOrderData;
};

export type MutationDeleteOrderArgs = {
  id: Scalars["String"];
};

export type MutationDeleteTechniqueArgs = {
  id: Scalars["String"];
};

export type MutationCreateTechniqueTranslationArgs = {
  techniqueId: Scalars["String"];
  localeId: Scalars["String"];
  data: CreateTechniqueTranslationData;
};

export type MutationUpdateTechniqueTranslationArgs = {
  techniqueId: Scalars["String"];
  localeId: Scalars["String"];
  data: UpdateTechniqueTranslationData;
};

export type MutationDeleteTechniqueTranslationArgs = {
  techniqueId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteSchoolArgs = {
  id: Scalars["String"];
};

export type MutationDeleteBasisArgs = {
  id: Scalars["String"];
};

export type MutationCreateSliderArgs = {
  input: CreateSliderInput;
};

export type MutationUpdateSliderArgs = {
  id: Scalars["String"];
  input?: Maybe<UpdateSliderInput>;
};

export type MutationDeleteSliderArgs = {
  id: Scalars["String"];
};

export type MutationUpdatePositionsOfSlidersArgs = {
  data?: Maybe<Array<UpdatePositionsOfSlidersData>>;
};

export type MutationCreateSliderTranslationArgs = {
  data?: Maybe<CreateSliderTranslationData>;
  sliderId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationUpdateSliderTranslationArgs = {
  data?: Maybe<CreateSliderTranslationData>;
  sliderId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteSliderTranslationArgs = {
  sliderId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteProvenanceArgs = {
  id: Scalars["String"];
};

export type MutationCreateProvenanceTranslationArgs = {
  data: CreateProvenanceTranslationData;
  provenanceId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationUpdateProvenanceTranslationArgs = {
  data: UpdateProvenanceTranslationData;
  provenanceId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteProvenanceTranslationArgs = {
  provenanceId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationCreateNavigationArgs = {
  data: CreateNavigationData;
};

export type MutationUpdateNavigationArgs = {
  data: UpdateNavigationData;
  id: Scalars["String"];
};

export type MutationDeleteNavigationArgs = {
  id: Scalars["String"];
};

export type MutationUpdatePositionsOfNavigationsArgs = {
  data?: Maybe<Array<UpdatePositionsOfNavigationsData>>;
};

export type MutationCreateNavigationTranslationArgs = {
  data: CreateNavigationTranslationData;
  navigationId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationUpdateNavigationTranslationArgs = {
  data: UpdateNavigationTranslationData;
  navigationId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteNavigationTranslationArgs = {
  navigationId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationCreateSchoolTranslationArgs = {
  data?: Maybe<CreateSchoolTranslationData>;
  schoolId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationUpdateSchoolTranslationArgs = {
  data?: Maybe<UpdateSchoolTranslationData>;
  schoolId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteSchoolTranslationArgs = {
  schoolId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationCreateBasisTranslationArgs = {
  data?: Maybe<CreateBasisTranslationData>;
  basisId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationUpdateBasisTranslationArgs = {
  data?: Maybe<UpdateBasisTranslationData>;
  basisId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteBasisTranslationArgs = {
  basisId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationCreateFileArgs = {
  data: CreateFileData;
  file: Scalars["Upload"];
};

export type MutationUpdateFileArgs = {
  data?: Maybe<UpdateFileData>;
  id: Scalars["String"];
  file: Scalars["Upload"];
};

export type MutationDeleteFileArgs = {
  id: Scalars["String"];
};

export type MutationCreateLinkArgs = {
  data: CreateLinkData;
};

export type MutationUpdateLinkArgs = {
  data: UpdateLinkData;
  id: Scalars["String"];
};

export type MutationDeleteLinkArgs = {
  id: Scalars["String"];
};

export type MutationCreateLinkTranslationArgs = {
  data: CreateLinkTranslationData;
  linkId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationUpdateLinkTranslationArgs = {
  data: UpdateLinkTranslationData;
  linkId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationDeleteLinkTranslationArgs = {
  linkId: Scalars["String"];
  localeId: Scalars["String"];
};

export type MutationAddSocialNetworkArgs = {
  input: AddSocialNetworkInput;
};

export type MutationUpdateSocialNetworkArgs = {
  input: UpdateSocialNetworkInput;
  index: Scalars["Int"];
};

export type MutationDeleteSocialNetworkArgs = {
  index: Scalars["Int"];
};

/** columns and relationships of "navigation" */
export type Navigation = {
  __typename?: "navigation";
  createdAt: Scalars["timestamptz"];
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  /** An array relationship */
  descendants: Array<Navigation>;
  /** An aggregated array relationship */
  descendants_aggregate: Navigation_Aggregate;
  float?: Maybe<Scalars["navigation_float_enum"]>;
  id: Scalars["uuid"];
  isEnabled: Scalars["Boolean"];
  /** An object relationship */
  parent?: Maybe<Navigation>;
  parentId?: Maybe<Scalars["uuid"]>;
  position: Scalars["smallint"];
  showInFooter: Scalars["Boolean"];
  showInHeader: Scalars["Boolean"];
  /** An array relationship */
  translations: Array<NavigationI18n>;
  /** An aggregated array relationship */
  translations_aggregate: NavigationI18n_Aggregate;
  updatedAt: Scalars["timestamptz"];
};

/** columns and relationships of "navigation" */
export type NavigationDescendantsArgs = {
  distinct_on?: Maybe<Array<Navigation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Navigation_Order_By>>;
  where?: Maybe<Navigation_Bool_Exp>;
};

/** columns and relationships of "navigation" */
export type NavigationDescendants_AggregateArgs = {
  distinct_on?: Maybe<Array<Navigation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Navigation_Order_By>>;
  where?: Maybe<Navigation_Bool_Exp>;
};

/** columns and relationships of "navigation" */
export type NavigationTranslationsArgs = {
  distinct_on?: Maybe<Array<NavigationI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NavigationI18n_Order_By>>;
  where?: Maybe<NavigationI18n_Bool_Exp>;
};

/** columns and relationships of "navigation" */
export type NavigationTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<NavigationI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NavigationI18n_Order_By>>;
  where?: Maybe<NavigationI18n_Bool_Exp>;
};

/** aggregated selection of "navigation" */
export type Navigation_Aggregate = {
  __typename?: "navigation_aggregate";
  aggregate?: Maybe<Navigation_Aggregate_Fields>;
  nodes: Array<Navigation>;
};

/** aggregate fields of "navigation" */
export type Navigation_Aggregate_Fields = {
  __typename?: "navigation_aggregate_fields";
  avg?: Maybe<Navigation_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Navigation_Max_Fields>;
  min?: Maybe<Navigation_Min_Fields>;
  stddev?: Maybe<Navigation_Stddev_Fields>;
  stddev_pop?: Maybe<Navigation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Navigation_Stddev_Samp_Fields>;
  sum?: Maybe<Navigation_Sum_Fields>;
  var_pop?: Maybe<Navigation_Var_Pop_Fields>;
  var_samp?: Maybe<Navigation_Var_Samp_Fields>;
  variance?: Maybe<Navigation_Variance_Fields>;
};

/** aggregate fields of "navigation" */
export type Navigation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Navigation_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "navigation" */
export type Navigation_Aggregate_Order_By = {
  avg?: Maybe<Navigation_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Navigation_Max_Order_By>;
  min?: Maybe<Navigation_Min_Order_By>;
  stddev?: Maybe<Navigation_Stddev_Order_By>;
  stddev_pop?: Maybe<Navigation_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Navigation_Stddev_Samp_Order_By>;
  sum?: Maybe<Navigation_Sum_Order_By>;
  var_pop?: Maybe<Navigation_Var_Pop_Order_By>;
  var_samp?: Maybe<Navigation_Var_Samp_Order_By>;
  variance?: Maybe<Navigation_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "navigation" */
export type Navigation_Arr_Rel_Insert_Input = {
  data: Array<Navigation_Insert_Input>;
  on_conflict?: Maybe<Navigation_On_Conflict>;
};

/** aggregate avg on columns */
export type Navigation_Avg_Fields = {
  __typename?: "navigation_avg_fields";
  position?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "navigation" */
export type Navigation_Avg_Order_By = {
  position?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "navigation". All fields are combined with a logical 'AND'. */
export type Navigation_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Navigation_Bool_Exp>>>;
  _not?: Maybe<Navigation_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Navigation_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  descendants?: Maybe<Navigation_Bool_Exp>;
  float?: Maybe<Navigation_Float_Enum_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  isEnabled?: Maybe<Boolean_Comparison_Exp>;
  parent?: Maybe<Navigation_Bool_Exp>;
  parentId?: Maybe<Uuid_Comparison_Exp>;
  position?: Maybe<Smallint_Comparison_Exp>;
  showInFooter?: Maybe<Boolean_Comparison_Exp>;
  showInHeader?: Maybe<Boolean_Comparison_Exp>;
  translations?: Maybe<NavigationI18n_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "navigation" */
export enum Navigation_Constraint {
  /** unique or primary key constraint */
  PkA7c90881db5205ad8d6b86ffef7 = "PK_a7c90881db5205ad8d6b86ffef7"
}

/** expression to compare columns of type navigation_float_enum. All fields are combined with logical 'AND'. */
export type Navigation_Float_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars["navigation_float_enum"]>;
  _gt?: Maybe<Scalars["navigation_float_enum"]>;
  _gte?: Maybe<Scalars["navigation_float_enum"]>;
  _in?: Maybe<Array<Scalars["navigation_float_enum"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["navigation_float_enum"]>;
  _lte?: Maybe<Scalars["navigation_float_enum"]>;
  _neq?: Maybe<Scalars["navigation_float_enum"]>;
  _nin?: Maybe<Array<Scalars["navigation_float_enum"]>>;
};

export enum Navigation_Floats {
  Left = "left",
  Right = "right"
}

/** input type for incrementing integer columne in table "navigation" */
export type Navigation_Inc_Input = {
  position?: Maybe<Scalars["smallint"]>;
};

/** input type for inserting data into table "navigation" */
export type Navigation_Insert_Input = {
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  descendants?: Maybe<Navigation_Arr_Rel_Insert_Input>;
  float?: Maybe<Scalars["navigation_float_enum"]>;
  id?: Maybe<Scalars["uuid"]>;
  isEnabled?: Maybe<Scalars["Boolean"]>;
  parent?: Maybe<Navigation_Obj_Rel_Insert_Input>;
  parentId?: Maybe<Scalars["uuid"]>;
  position?: Maybe<Scalars["smallint"]>;
  showInFooter?: Maybe<Scalars["Boolean"]>;
  showInHeader?: Maybe<Scalars["Boolean"]>;
  translations?: Maybe<NavigationI18n_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Navigation_Max_Fields = {
  __typename?: "navigation_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  position?: Maybe<Scalars["smallint"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "navigation" */
export type Navigation_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Navigation_Min_Fields = {
  __typename?: "navigation_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  position?: Maybe<Scalars["smallint"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "navigation" */
export type Navigation_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "navigation" */
export type Navigation_Mutation_Response = {
  __typename?: "navigation_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Navigation>;
};

/** input type for inserting object relation for remote table "navigation" */
export type Navigation_Obj_Rel_Insert_Input = {
  data: Navigation_Insert_Input;
  on_conflict?: Maybe<Navigation_On_Conflict>;
};

/** on conflict condition type for table "navigation" */
export type Navigation_On_Conflict = {
  constraint: Navigation_Constraint;
  update_columns: Array<Navigation_Update_Column>;
};

/** ordering options when selecting data from "navigation" */
export type Navigation_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  descendants_aggregate?: Maybe<Navigation_Aggregate_Order_By>;
  float?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isEnabled?: Maybe<Order_By>;
  parent?: Maybe<Navigation_Order_By>;
  parentId?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  showInFooter?: Maybe<Order_By>;
  showInHeader?: Maybe<Order_By>;
  translations_aggregate?: Maybe<NavigationI18n_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** select columns of table "navigation" */
export enum Navigation_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Float = "float",
  /** column name */
  Id = "id",
  /** column name */
  IsEnabled = "isEnabled",
  /** column name */
  ParentId = "parentId",
  /** column name */
  Position = "position",
  /** column name */
  ShowInFooter = "showInFooter",
  /** column name */
  ShowInHeader = "showInHeader",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "navigation" */
export type Navigation_Set_Input = {
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  float?: Maybe<Scalars["navigation_float_enum"]>;
  id?: Maybe<Scalars["uuid"]>;
  isEnabled?: Maybe<Scalars["Boolean"]>;
  parentId?: Maybe<Scalars["uuid"]>;
  position?: Maybe<Scalars["smallint"]>;
  showInFooter?: Maybe<Scalars["Boolean"]>;
  showInHeader?: Maybe<Scalars["Boolean"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Navigation_Stddev_Fields = {
  __typename?: "navigation_stddev_fields";
  position?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "navigation" */
export type Navigation_Stddev_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Navigation_Stddev_Pop_Fields = {
  __typename?: "navigation_stddev_pop_fields";
  position?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "navigation" */
export type Navigation_Stddev_Pop_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Navigation_Stddev_Samp_Fields = {
  __typename?: "navigation_stddev_samp_fields";
  position?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "navigation" */
export type Navigation_Stddev_Samp_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Navigation_Sum_Fields = {
  __typename?: "navigation_sum_fields";
  position?: Maybe<Scalars["smallint"]>;
};

/** order by sum() on columns of table "navigation" */
export type Navigation_Sum_Order_By = {
  position?: Maybe<Order_By>;
};

/** update columns of table "navigation" */
export enum Navigation_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Float = "float",
  /** column name */
  Id = "id",
  /** column name */
  IsEnabled = "isEnabled",
  /** column name */
  ParentId = "parentId",
  /** column name */
  Position = "position",
  /** column name */
  ShowInFooter = "showInFooter",
  /** column name */
  ShowInHeader = "showInHeader",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** aggregate var_pop on columns */
export type Navigation_Var_Pop_Fields = {
  __typename?: "navigation_var_pop_fields";
  position?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "navigation" */
export type Navigation_Var_Pop_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Navigation_Var_Samp_Fields = {
  __typename?: "navigation_var_samp_fields";
  position?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "navigation" */
export type Navigation_Var_Samp_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Navigation_Variance_Fields = {
  __typename?: "navigation_variance_fields";
  position?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "navigation" */
export type Navigation_Variance_Order_By = {
  position?: Maybe<Order_By>;
};

/** columns and relationships of "navigationI18n" */
export type NavigationI18n = {
  __typename?: "navigationI18n";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  link?: Maybe<Scalars["String"]>;
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  name: Scalars["String"];
  /** An object relationship */
  navigation: Navigation;
  navigationId: Scalars["uuid"];
};

/** aggregated selection of "navigationI18n" */
export type NavigationI18n_Aggregate = {
  __typename?: "navigationI18n_aggregate";
  aggregate?: Maybe<NavigationI18n_Aggregate_Fields>;
  nodes: Array<NavigationI18n>;
};

/** aggregate fields of "navigationI18n" */
export type NavigationI18n_Aggregate_Fields = {
  __typename?: "navigationI18n_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<NavigationI18n_Max_Fields>;
  min?: Maybe<NavigationI18n_Min_Fields>;
};

/** aggregate fields of "navigationI18n" */
export type NavigationI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<NavigationI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "navigationI18n" */
export type NavigationI18n_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<NavigationI18n_Max_Order_By>;
  min?: Maybe<NavigationI18n_Min_Order_By>;
};

/** input type for inserting array relation for remote table "navigationI18n" */
export type NavigationI18n_Arr_Rel_Insert_Input = {
  data: Array<NavigationI18n_Insert_Input>;
  on_conflict?: Maybe<NavigationI18n_On_Conflict>;
};

/** Boolean expression to filter rows from the table "navigationI18n". All fields are combined with a logical 'AND'. */
export type NavigationI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<NavigationI18n_Bool_Exp>>>;
  _not?: Maybe<NavigationI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<NavigationI18n_Bool_Exp>>>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  link?: Maybe<Text_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<Varchar_Comparison_Exp>;
  navigation?: Maybe<Navigation_Bool_Exp>;
  navigationId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "navigationI18n" */
export enum NavigationI18n_Constraint {
  /** unique or primary key constraint */
  PkA8d41a5ad2f8505e77b4426f62b = "PK_a8d41a5ad2f8505e77b4426f62b"
}

/** input type for inserting data into table "navigationI18n" */
export type NavigationI18n_Insert_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  link?: Maybe<Scalars["String"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  navigation?: Maybe<Navigation_Obj_Rel_Insert_Input>;
  navigationId?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type NavigationI18n_Max_Fields = {
  __typename?: "navigationI18n_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  link?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "navigationI18n" */
export type NavigationI18n_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type NavigationI18n_Min_Fields = {
  __typename?: "navigationI18n_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  link?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "navigationI18n" */
export type NavigationI18n_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "navigationI18n" */
export type NavigationI18n_Mutation_Response = {
  __typename?: "navigationI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<NavigationI18n>;
};

/** input type for inserting object relation for remote table "navigationI18n" */
export type NavigationI18n_Obj_Rel_Insert_Input = {
  data: NavigationI18n_Insert_Input;
  on_conflict?: Maybe<NavigationI18n_On_Conflict>;
};

/** on conflict condition type for table "navigationI18n" */
export type NavigationI18n_On_Conflict = {
  constraint: NavigationI18n_Constraint;
  update_columns: Array<NavigationI18n_Update_Column>;
};

/** ordering options when selecting data from "navigationI18n" */
export type NavigationI18n_Order_By = {
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  navigation?: Maybe<Navigation_Order_By>;
  navigationId?: Maybe<Order_By>;
};

/** select columns of table "navigationI18n" */
export enum NavigationI18n_Select_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  Link = "link",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Name = "name",
  /** column name */
  NavigationId = "navigationId"
}

/** input type for updating data in table "navigationI18n" */
export type NavigationI18n_Set_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  link?: Maybe<Scalars["String"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  navigationId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "navigationI18n" */
export enum NavigationI18n_Update_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  Link = "link",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Name = "name",
  /** column name */
  NavigationId = "navigationId"
}

/** columns and relationships of "news" */
export type News = {
  __typename?: "news";
  createdAt: Scalars["timestamptz"];
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An array relationship */
  newsCategories: Array<NewsCategory>;
  /** An aggregated array relationship */
  newsCategories_aggregate: NewsCategory_Aggregate;
  publicationDate: Scalars["timestamptz"];
  /** An array relationship */
  translations: Array<NewsI18n>;
  /** An aggregated array relationship */
  translations_aggregate: NewsI18n_Aggregate;
  updatedAt: Scalars["timestamptz"];
};

/** columns and relationships of "news" */
export type NewsNewsCategoriesArgs = {
  distinct_on?: Maybe<Array<NewsCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsCategory_Order_By>>;
  where?: Maybe<NewsCategory_Bool_Exp>;
};

/** columns and relationships of "news" */
export type NewsNewsCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<NewsCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsCategory_Order_By>>;
  where?: Maybe<NewsCategory_Bool_Exp>;
};

/** columns and relationships of "news" */
export type NewsTranslationsArgs = {
  distinct_on?: Maybe<Array<NewsI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsI18n_Order_By>>;
  where?: Maybe<NewsI18n_Bool_Exp>;
};

/** columns and relationships of "news" */
export type NewsTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<NewsI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsI18n_Order_By>>;
  where?: Maybe<NewsI18n_Bool_Exp>;
};

/** aggregated selection of "news" */
export type News_Aggregate = {
  __typename?: "news_aggregate";
  aggregate?: Maybe<News_Aggregate_Fields>;
  nodes: Array<News>;
};

/** aggregate fields of "news" */
export type News_Aggregate_Fields = {
  __typename?: "news_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<News_Max_Fields>;
  min?: Maybe<News_Min_Fields>;
};

/** aggregate fields of "news" */
export type News_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<News_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "news" */
export type News_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<News_Max_Order_By>;
  min?: Maybe<News_Min_Order_By>;
};

/** input type for inserting array relation for remote table "news" */
export type News_Arr_Rel_Insert_Input = {
  data: Array<News_Insert_Input>;
  on_conflict?: Maybe<News_On_Conflict>;
};

/** Boolean expression to filter rows from the table "news". All fields are combined with a logical 'AND'. */
export type News_Bool_Exp = {
  _and?: Maybe<Array<Maybe<News_Bool_Exp>>>;
  _not?: Maybe<News_Bool_Exp>;
  _or?: Maybe<Array<Maybe<News_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  newsCategories?: Maybe<NewsCategory_Bool_Exp>;
  publicationDate?: Maybe<Timestamptz_Comparison_Exp>;
  translations?: Maybe<NewsI18n_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "news" */
export enum News_Constraint {
  /** unique or primary key constraint */
  Pk_39a43dfcb6007180f04aff2357e = "PK_39a43dfcb6007180f04aff2357e"
}

/** input type for inserting data into table "news" */
export type News_Insert_Input = {
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  newsCategories?: Maybe<NewsCategory_Arr_Rel_Insert_Input>;
  publicationDate?: Maybe<Scalars["timestamptz"]>;
  translations?: Maybe<NewsI18n_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type News_Max_Fields = {
  __typename?: "news_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  publicationDate?: Maybe<Scalars["timestamptz"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "news" */
export type News_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  publicationDate?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type News_Min_Fields = {
  __typename?: "news_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  publicationDate?: Maybe<Scalars["timestamptz"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "news" */
export type News_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  publicationDate?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "news" */
export type News_Mutation_Response = {
  __typename?: "news_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<News>;
};

/** input type for inserting object relation for remote table "news" */
export type News_Obj_Rel_Insert_Input = {
  data: News_Insert_Input;
  on_conflict?: Maybe<News_On_Conflict>;
};

/** on conflict condition type for table "news" */
export type News_On_Conflict = {
  constraint: News_Constraint;
  update_columns: Array<News_Update_Column>;
};

/** ordering options when selecting data from "news" */
export type News_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  newsCategories_aggregate?: Maybe<NewsCategory_Aggregate_Order_By>;
  publicationDate?: Maybe<Order_By>;
  translations_aggregate?: Maybe<NewsI18n_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** select columns of table "news" */
export enum News_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  PublicationDate = "publicationDate",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "news" */
export type News_Set_Input = {
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  publicationDate?: Maybe<Scalars["timestamptz"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** update columns of table "news" */
export enum News_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  PublicationDate = "publicationDate",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** columns and relationships of "newsCategory" */
export type NewsCategory = {
  __typename?: "newsCategory";
  breadcrumb: Scalars["Boolean"];
  /** An object relationship */
  category: Category;
  categoryId: Scalars["uuid"];
  /** An object relationship */
  news: News;
  newsId: Scalars["uuid"];
};

/** aggregated selection of "newsCategory" */
export type NewsCategory_Aggregate = {
  __typename?: "newsCategory_aggregate";
  aggregate?: Maybe<NewsCategory_Aggregate_Fields>;
  nodes: Array<NewsCategory>;
};

/** aggregate fields of "newsCategory" */
export type NewsCategory_Aggregate_Fields = {
  __typename?: "newsCategory_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
};

/** aggregate fields of "newsCategory" */
export type NewsCategory_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<NewsCategory_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "newsCategory" */
export type NewsCategory_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "newsCategory" */
export type NewsCategory_Arr_Rel_Insert_Input = {
  data: Array<NewsCategory_Insert_Input>;
  on_conflict?: Maybe<NewsCategory_On_Conflict>;
};

/** Boolean expression to filter rows from the table "newsCategory". All fields are combined with a logical 'AND'. */
export type NewsCategory_Bool_Exp = {
  _and?: Maybe<Array<Maybe<NewsCategory_Bool_Exp>>>;
  _not?: Maybe<NewsCategory_Bool_Exp>;
  _or?: Maybe<Array<Maybe<NewsCategory_Bool_Exp>>>;
  breadcrumb?: Maybe<Boolean_Comparison_Exp>;
  category?: Maybe<Category_Bool_Exp>;
  categoryId?: Maybe<Uuid_Comparison_Exp>;
  news?: Maybe<News_Bool_Exp>;
  newsId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "newsCategory" */
export enum NewsCategory_Constraint {
  /** unique or primary key constraint */
  Pk_3caebe965767975a67fca4d5e4b = "PK_3caebe965767975a67fca4d5e4b"
}

/** input type for inserting data into table "newsCategory" */
export type NewsCategory_Insert_Input = {
  breadcrumb?: Maybe<Scalars["Boolean"]>;
  category?: Maybe<Category_Obj_Rel_Insert_Input>;
  categoryId?: Maybe<Scalars["uuid"]>;
  news?: Maybe<News_Obj_Rel_Insert_Input>;
  newsId?: Maybe<Scalars["uuid"]>;
};

/** response of any mutation on the table "newsCategory" */
export type NewsCategory_Mutation_Response = {
  __typename?: "newsCategory_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<NewsCategory>;
};

/** input type for inserting object relation for remote table "newsCategory" */
export type NewsCategory_Obj_Rel_Insert_Input = {
  data: NewsCategory_Insert_Input;
  on_conflict?: Maybe<NewsCategory_On_Conflict>;
};

/** on conflict condition type for table "newsCategory" */
export type NewsCategory_On_Conflict = {
  constraint: NewsCategory_Constraint;
  update_columns: Array<NewsCategory_Update_Column>;
};

/** ordering options when selecting data from "newsCategory" */
export type NewsCategory_Order_By = {
  breadcrumb?: Maybe<Order_By>;
  category?: Maybe<Category_Order_By>;
  categoryId?: Maybe<Order_By>;
  news?: Maybe<News_Order_By>;
  newsId?: Maybe<Order_By>;
};

/** select columns of table "newsCategory" */
export enum NewsCategory_Select_Column {
  /** column name */
  Breadcrumb = "breadcrumb",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  NewsId = "newsId"
}

/** input type for updating data in table "newsCategory" */
export type NewsCategory_Set_Input = {
  breadcrumb?: Maybe<Scalars["Boolean"]>;
  categoryId?: Maybe<Scalars["uuid"]>;
  newsId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "newsCategory" */
export enum NewsCategory_Update_Column {
  /** column name */
  Breadcrumb = "breadcrumb",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  NewsId = "newsId"
}

/** columns and relationships of "newsI18n" */
export type NewsI18n = {
  __typename?: "newsI18n";
  body: Scalars["String"];
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  metaDescription: Scalars["String"];
  metaTitle: Scalars["String"];
  /** An object relationship */
  news: News;
  newsId: Scalars["uuid"];
  slug: Scalars["String"];
  title: Scalars["String"];
};

/** aggregated selection of "newsI18n" */
export type NewsI18n_Aggregate = {
  __typename?: "newsI18n_aggregate";
  aggregate?: Maybe<NewsI18n_Aggregate_Fields>;
  nodes: Array<NewsI18n>;
};

/** aggregate fields of "newsI18n" */
export type NewsI18n_Aggregate_Fields = {
  __typename?: "newsI18n_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<NewsI18n_Max_Fields>;
  min?: Maybe<NewsI18n_Min_Fields>;
};

/** aggregate fields of "newsI18n" */
export type NewsI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<NewsI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "newsI18n" */
export type NewsI18n_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<NewsI18n_Max_Order_By>;
  min?: Maybe<NewsI18n_Min_Order_By>;
};

/** input type for inserting array relation for remote table "newsI18n" */
export type NewsI18n_Arr_Rel_Insert_Input = {
  data: Array<NewsI18n_Insert_Input>;
  on_conflict?: Maybe<NewsI18n_On_Conflict>;
};

/** Boolean expression to filter rows from the table "newsI18n". All fields are combined with a logical 'AND'. */
export type NewsI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<NewsI18n_Bool_Exp>>>;
  _not?: Maybe<NewsI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<NewsI18n_Bool_Exp>>>;
  body?: Maybe<Text_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  metaDescription?: Maybe<Varchar_Comparison_Exp>;
  metaTitle?: Maybe<Varchar_Comparison_Exp>;
  news?: Maybe<News_Bool_Exp>;
  newsId?: Maybe<Uuid_Comparison_Exp>;
  slug?: Maybe<Varchar_Comparison_Exp>;
  title?: Maybe<Varchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "newsI18n" */
export enum NewsI18n_Constraint {
  /** unique or primary key constraint */
  Pk_1ec233b9656a71eb02a60009274 = "PK_1ec233b9656a71eb02a60009274",
  /** unique or primary key constraint */
  Uq_9fb648ffe24ccf830aaa0ce96a9 = "UQ_9fb648ffe24ccf830aaa0ce96a9"
}

/** input type for inserting data into table "newsI18n" */
export type NewsI18n_Insert_Input = {
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  news?: Maybe<News_Obj_Rel_Insert_Input>;
  newsId?: Maybe<Scalars["uuid"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type NewsI18n_Max_Fields = {
  __typename?: "newsI18n_max_fields";
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "newsI18n" */
export type NewsI18n_Max_Order_By = {
  body?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type NewsI18n_Min_Fields = {
  __typename?: "newsI18n_min_fields";
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "newsI18n" */
export type NewsI18n_Min_Order_By = {
  body?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "newsI18n" */
export type NewsI18n_Mutation_Response = {
  __typename?: "newsI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<NewsI18n>;
};

/** input type for inserting object relation for remote table "newsI18n" */
export type NewsI18n_Obj_Rel_Insert_Input = {
  data: NewsI18n_Insert_Input;
  on_conflict?: Maybe<NewsI18n_On_Conflict>;
};

/** on conflict condition type for table "newsI18n" */
export type NewsI18n_On_Conflict = {
  constraint: NewsI18n_Constraint;
  update_columns: Array<NewsI18n_Update_Column>;
};

/** ordering options when selecting data from "newsI18n" */
export type NewsI18n_Order_By = {
  body?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  news?: Maybe<News_Order_By>;
  newsId?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** select columns of table "newsI18n" */
export enum NewsI18n_Select_Column {
  /** column name */
  Body = "body",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  MetaDescription = "metaDescription",
  /** column name */
  MetaTitle = "metaTitle",
  /** column name */
  NewsId = "newsId",
  /** column name */
  Slug = "slug",
  /** column name */
  Title = "title"
}

/** input type for updating data in table "newsI18n" */
export type NewsI18n_Set_Input = {
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  newsId?: Maybe<Scalars["uuid"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** update columns of table "newsI18n" */
export enum NewsI18n_Update_Column {
  /** column name */
  Body = "body",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  MetaDescription = "metaDescription",
  /** column name */
  MetaTitle = "metaTitle",
  /** column name */
  NewsId = "newsId",
  /** column name */
  Slug = "slug",
  /** column name */
  Title = "title"
}

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars["numeric"]>;
  _gt?: Maybe<Scalars["numeric"]>;
  _gte?: Maybe<Scalars["numeric"]>;
  _in?: Maybe<Array<Scalars["numeric"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["numeric"]>;
  _lte?: Maybe<Scalars["numeric"]>;
  _neq?: Maybe<Scalars["numeric"]>;
  _nin?: Maybe<Array<Scalars["numeric"]>>;
};

/** columns and relationships of "order" */
export type Order = {
  __typename?: "order";
  address: Scalars["String"];
  city: Scalars["String"];
  cost: Scalars["numeric"];
  createdAt: Scalars["timestamptz"];
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  email: Scalars["String"];
  id: Scalars["uuid"];
  isPaid: Scalars["Boolean"];
  name: Scalars["String"];
  note?: Maybe<Scalars["String"]>;
  /** An array relationship */
  orderProducts: Array<OrderProduct>;
  /** An aggregated array relationship */
  orderProducts_aggregate: OrderProduct_Aggregate;
  patronymic: Scalars["String"];
  paymentType: Scalars["order_paymenttype_enum"];
  /** An array relationship */
  payments: Array<Payment>;
  /** An aggregated array relationship */
  payments_aggregate: Payment_Aggregate;
  phone: Scalars["String"];
  surname: Scalars["String"];
  updatedAt: Scalars["timestamptz"];
  /** An object relationship */
  user?: Maybe<User>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** columns and relationships of "order" */
export type OrderOrderProductsArgs = {
  distinct_on?: Maybe<Array<OrderProduct_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<OrderProduct_Order_By>>;
  where?: Maybe<OrderProduct_Bool_Exp>;
};

/** columns and relationships of "order" */
export type OrderOrderProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<OrderProduct_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<OrderProduct_Order_By>>;
  where?: Maybe<OrderProduct_Bool_Exp>;
};

/** columns and relationships of "order" */
export type OrderPaymentsArgs = {
  distinct_on?: Maybe<Array<Payment_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Order_By>>;
  where?: Maybe<Payment_Bool_Exp>;
};

/** columns and relationships of "order" */
export type OrderPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Order_By>>;
  where?: Maybe<Payment_Bool_Exp>;
};

/** aggregated selection of "order" */
export type Order_Aggregate = {
  __typename?: "order_aggregate";
  aggregate?: Maybe<Order_Aggregate_Fields>;
  nodes: Array<Order>;
};

/** aggregate fields of "order" */
export type Order_Aggregate_Fields = {
  __typename?: "order_aggregate_fields";
  avg?: Maybe<Order_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Order_Max_Fields>;
  min?: Maybe<Order_Min_Fields>;
  stddev?: Maybe<Order_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Sum_Fields>;
  var_pop?: Maybe<Order_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Var_Samp_Fields>;
  variance?: Maybe<Order_Variance_Fields>;
};

/** aggregate fields of "order" */
export type Order_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Order_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "order" */
export type Order_Aggregate_Order_By = {
  avg?: Maybe<Order_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Order_Max_Order_By>;
  min?: Maybe<Order_Min_Order_By>;
  stddev?: Maybe<Order_Stddev_Order_By>;
  stddev_pop?: Maybe<Order_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Order_Stddev_Samp_Order_By>;
  sum?: Maybe<Order_Sum_Order_By>;
  var_pop?: Maybe<Order_Var_Pop_Order_By>;
  var_samp?: Maybe<Order_Var_Samp_Order_By>;
  variance?: Maybe<Order_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order" */
export type Order_Arr_Rel_Insert_Input = {
  data: Array<Order_Insert_Input>;
  on_conflict?: Maybe<Order_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Avg_Fields = {
  __typename?: "order_avg_fields";
  cost?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "order" */
export type Order_Avg_Order_By = {
  cost?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Order_Bool_Exp>>>;
  _not?: Maybe<Order_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Order_Bool_Exp>>>;
  address?: Maybe<Varchar_Comparison_Exp>;
  city?: Maybe<Varchar_Comparison_Exp>;
  cost?: Maybe<Numeric_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<Text_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  isPaid?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<Varchar_Comparison_Exp>;
  note?: Maybe<Varchar_Comparison_Exp>;
  orderProducts?: Maybe<OrderProduct_Bool_Exp>;
  patronymic?: Maybe<Varchar_Comparison_Exp>;
  paymentType?: Maybe<Order_Paymenttype_Enum_Comparison_Exp>;
  payments?: Maybe<Payment_Bool_Exp>;
  phone?: Maybe<Varchar_Comparison_Exp>;
  surname?: Maybe<Varchar_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last"
}

/** unique or primary key constraints on table "order" */
export enum Order_Constraint {
  /** unique or primary key constraint */
  Pk_1031171c13130102495201e3e20 = "PK_1031171c13130102495201e3e20"
}

/** input type for inserting data into table "order" */
export type Order_Insert_Input = {
  address?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  cost?: Maybe<Scalars["numeric"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  isPaid?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  note?: Maybe<Scalars["String"]>;
  orderProducts?: Maybe<OrderProduct_Arr_Rel_Insert_Input>;
  patronymic?: Maybe<Scalars["String"]>;
  paymentType?: Maybe<Scalars["order_paymenttype_enum"]>;
  payments?: Maybe<Payment_Arr_Rel_Insert_Input>;
  phone?: Maybe<Scalars["String"]>;
  surname?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Order_Max_Fields = {
  __typename?: "order_max_fields";
  address?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  cost?: Maybe<Scalars["numeric"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  note?: Maybe<Scalars["String"]>;
  patronymic?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  surname?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "order" */
export type Order_Max_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  cost?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  patronymic?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
  __typename?: "order_min_fields";
  address?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  cost?: Maybe<Scalars["numeric"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  note?: Maybe<Scalars["String"]>;
  patronymic?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  surname?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "order" */
export type Order_Min_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  cost?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  patronymic?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "order" */
export type Order_Mutation_Response = {
  __typename?: "order_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Order>;
};

/** input type for inserting object relation for remote table "order" */
export type Order_Obj_Rel_Insert_Input = {
  data: Order_Insert_Input;
  on_conflict?: Maybe<Order_On_Conflict>;
};

/** on conflict condition type for table "order" */
export type Order_On_Conflict = {
  constraint: Order_Constraint;
  update_columns: Array<Order_Update_Column>;
};

/** ordering options when selecting data from "order" */
export type Order_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  cost?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isPaid?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  orderProducts_aggregate?: Maybe<OrderProduct_Aggregate_Order_By>;
  patronymic?: Maybe<Order_By>;
  paymentType?: Maybe<Order_By>;
  payments_aggregate?: Maybe<Payment_Aggregate_Order_By>;
  phone?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

/** expression to compare columns of type order_paymenttype_enum. All fields are combined with logical 'AND'. */
export type Order_Paymenttype_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars["order_paymenttype_enum"]>;
  _gt?: Maybe<Scalars["order_paymenttype_enum"]>;
  _gte?: Maybe<Scalars["order_paymenttype_enum"]>;
  _in?: Maybe<Array<Scalars["order_paymenttype_enum"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["order_paymenttype_enum"]>;
  _lte?: Maybe<Scalars["order_paymenttype_enum"]>;
  _neq?: Maybe<Scalars["order_paymenttype_enum"]>;
  _nin?: Maybe<Array<Scalars["order_paymenttype_enum"]>>;
};

/** select columns of table "order" */
export enum Order_Select_Column {
  /** column name */
  Address = "address",
  /** column name */
  City = "city",
  /** column name */
  Cost = "cost",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  IsPaid = "isPaid",
  /** column name */
  Name = "name",
  /** column name */
  Note = "note",
  /** column name */
  Patronymic = "patronymic",
  /** column name */
  PaymentType = "paymentType",
  /** column name */
  Phone = "phone",
  /** column name */
  Surname = "surname",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserId = "userId"
}

/** input type for updating data in table "order" */
export type Order_Set_Input = {
  address?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  cost?: Maybe<Scalars["numeric"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  isPaid?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  note?: Maybe<Scalars["String"]>;
  patronymic?: Maybe<Scalars["String"]>;
  paymentType?: Maybe<Scalars["order_paymenttype_enum"]>;
  phone?: Maybe<Scalars["String"]>;
  surname?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
  __typename?: "order_stddev_fields";
  cost?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "order" */
export type Order_Stddev_Order_By = {
  cost?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
  __typename?: "order_stddev_pop_fields";
  cost?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "order" */
export type Order_Stddev_Pop_Order_By = {
  cost?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
  __typename?: "order_stddev_samp_fields";
  cost?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "order" */
export type Order_Stddev_Samp_Order_By = {
  cost?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Sum_Fields = {
  __typename?: "order_sum_fields";
  cost?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "order" */
export type Order_Sum_Order_By = {
  cost?: Maybe<Order_By>;
};

/** update columns of table "order" */
export enum Order_Update_Column {
  /** column name */
  Address = "address",
  /** column name */
  City = "city",
  /** column name */
  Cost = "cost",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  IsPaid = "isPaid",
  /** column name */
  Name = "name",
  /** column name */
  Note = "note",
  /** column name */
  Patronymic = "patronymic",
  /** column name */
  PaymentType = "paymentType",
  /** column name */
  Phone = "phone",
  /** column name */
  Surname = "surname",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserId = "userId"
}

/** aggregate var_pop on columns */
export type Order_Var_Pop_Fields = {
  __typename?: "order_var_pop_fields";
  cost?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "order" */
export type Order_Var_Pop_Order_By = {
  cost?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
  __typename?: "order_var_samp_fields";
  cost?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "order" */
export type Order_Var_Samp_Order_By = {
  cost?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Variance_Fields = {
  __typename?: "order_variance_fields";
  cost?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "order" */
export type Order_Variance_Order_By = {
  cost?: Maybe<Order_By>;
};

/** columns and relationships of "orderProduct" */
export type OrderProduct = {
  __typename?: "orderProduct";
  cost: Scalars["numeric"];
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  order: Order;
  orderId: Scalars["uuid"];
  /** An object relationship */
  work: Work;
  workId: Scalars["uuid"];
};

/** aggregated selection of "orderProduct" */
export type OrderProduct_Aggregate = {
  __typename?: "orderProduct_aggregate";
  aggregate?: Maybe<OrderProduct_Aggregate_Fields>;
  nodes: Array<OrderProduct>;
};

/** aggregate fields of "orderProduct" */
export type OrderProduct_Aggregate_Fields = {
  __typename?: "orderProduct_aggregate_fields";
  avg?: Maybe<OrderProduct_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<OrderProduct_Max_Fields>;
  min?: Maybe<OrderProduct_Min_Fields>;
  stddev?: Maybe<OrderProduct_Stddev_Fields>;
  stddev_pop?: Maybe<OrderProduct_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<OrderProduct_Stddev_Samp_Fields>;
  sum?: Maybe<OrderProduct_Sum_Fields>;
  var_pop?: Maybe<OrderProduct_Var_Pop_Fields>;
  var_samp?: Maybe<OrderProduct_Var_Samp_Fields>;
  variance?: Maybe<OrderProduct_Variance_Fields>;
};

/** aggregate fields of "orderProduct" */
export type OrderProduct_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<OrderProduct_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "orderProduct" */
export type OrderProduct_Aggregate_Order_By = {
  avg?: Maybe<OrderProduct_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<OrderProduct_Max_Order_By>;
  min?: Maybe<OrderProduct_Min_Order_By>;
  stddev?: Maybe<OrderProduct_Stddev_Order_By>;
  stddev_pop?: Maybe<OrderProduct_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<OrderProduct_Stddev_Samp_Order_By>;
  sum?: Maybe<OrderProduct_Sum_Order_By>;
  var_pop?: Maybe<OrderProduct_Var_Pop_Order_By>;
  var_samp?: Maybe<OrderProduct_Var_Samp_Order_By>;
  variance?: Maybe<OrderProduct_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orderProduct" */
export type OrderProduct_Arr_Rel_Insert_Input = {
  data: Array<OrderProduct_Insert_Input>;
  on_conflict?: Maybe<OrderProduct_On_Conflict>;
};

/** aggregate avg on columns */
export type OrderProduct_Avg_Fields = {
  __typename?: "orderProduct_avg_fields";
  cost?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "orderProduct" */
export type OrderProduct_Avg_Order_By = {
  cost?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orderProduct". All fields are combined with a logical 'AND'. */
export type OrderProduct_Bool_Exp = {
  _and?: Maybe<Array<Maybe<OrderProduct_Bool_Exp>>>;
  _not?: Maybe<OrderProduct_Bool_Exp>;
  _or?: Maybe<Array<Maybe<OrderProduct_Bool_Exp>>>;
  cost?: Maybe<Numeric_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  order?: Maybe<Order_Bool_Exp>;
  orderId?: Maybe<Uuid_Comparison_Exp>;
  work?: Maybe<Work_Bool_Exp>;
  workId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "orderProduct" */
export enum OrderProduct_Constraint {
  /** unique or primary key constraint */
  Pk_8c89300e91ad0ff68f67e7037a9 = "PK_8c89300e91ad0ff68f67e7037a9"
}

/** input type for inserting data into table "orderProduct" */
export type OrderProduct_Insert_Input = {
  cost?: Maybe<Scalars["numeric"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  order?: Maybe<Order_Obj_Rel_Insert_Input>;
  orderId?: Maybe<Scalars["uuid"]>;
  work?: Maybe<Work_Obj_Rel_Insert_Input>;
  workId?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type OrderProduct_Max_Fields = {
  __typename?: "orderProduct_max_fields";
  cost?: Maybe<Scalars["numeric"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "orderProduct" */
export type OrderProduct_Max_Order_By = {
  cost?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type OrderProduct_Min_Fields = {
  __typename?: "orderProduct_min_fields";
  cost?: Maybe<Scalars["numeric"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "orderProduct" */
export type OrderProduct_Min_Order_By = {
  cost?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "orderProduct" */
export type OrderProduct_Mutation_Response = {
  __typename?: "orderProduct_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<OrderProduct>;
};

/** input type for inserting object relation for remote table "orderProduct" */
export type OrderProduct_Obj_Rel_Insert_Input = {
  data: OrderProduct_Insert_Input;
  on_conflict?: Maybe<OrderProduct_On_Conflict>;
};

/** on conflict condition type for table "orderProduct" */
export type OrderProduct_On_Conflict = {
  constraint: OrderProduct_Constraint;
  update_columns: Array<OrderProduct_Update_Column>;
};

/** ordering options when selecting data from "orderProduct" */
export type OrderProduct_Order_By = {
  cost?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_Order_By>;
  orderId?: Maybe<Order_By>;
  work?: Maybe<Work_Order_By>;
  workId?: Maybe<Order_By>;
};

/** select columns of table "orderProduct" */
export enum OrderProduct_Select_Column {
  /** column name */
  Cost = "cost",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  WorkId = "workId"
}

/** input type for updating data in table "orderProduct" */
export type OrderProduct_Set_Input = {
  cost?: Maybe<Scalars["numeric"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  orderId?: Maybe<Scalars["uuid"]>;
  workId?: Maybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type OrderProduct_Stddev_Fields = {
  __typename?: "orderProduct_stddev_fields";
  cost?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "orderProduct" */
export type OrderProduct_Stddev_Order_By = {
  cost?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type OrderProduct_Stddev_Pop_Fields = {
  __typename?: "orderProduct_stddev_pop_fields";
  cost?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "orderProduct" */
export type OrderProduct_Stddev_Pop_Order_By = {
  cost?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type OrderProduct_Stddev_Samp_Fields = {
  __typename?: "orderProduct_stddev_samp_fields";
  cost?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "orderProduct" */
export type OrderProduct_Stddev_Samp_Order_By = {
  cost?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type OrderProduct_Sum_Fields = {
  __typename?: "orderProduct_sum_fields";
  cost?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "orderProduct" */
export type OrderProduct_Sum_Order_By = {
  cost?: Maybe<Order_By>;
};

/** update columns of table "orderProduct" */
export enum OrderProduct_Update_Column {
  /** column name */
  Cost = "cost",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  WorkId = "workId"
}

/** aggregate var_pop on columns */
export type OrderProduct_Var_Pop_Fields = {
  __typename?: "orderProduct_var_pop_fields";
  cost?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "orderProduct" */
export type OrderProduct_Var_Pop_Order_By = {
  cost?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type OrderProduct_Var_Samp_Fields = {
  __typename?: "orderProduct_var_samp_fields";
  cost?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "orderProduct" */
export type OrderProduct_Var_Samp_Order_By = {
  cost?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type OrderProduct_Variance_Fields = {
  __typename?: "orderProduct_variance_fields";
  cost?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "orderProduct" */
export type OrderProduct_Variance_Order_By = {
  cost?: Maybe<Order_By>;
};

/** columns and relationships of "page" */
export type Page = {
  __typename?: "page";
  /** An array relationship */
  categories: Array<PageCategory>;
  /** An aggregated array relationship */
  categories_aggregate: PageCategory_Aggregate;
  createdAt: Scalars["timestamptz"];
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  translation?: Maybe<PageI18n>;
  /** An array relationship */
  translations: Array<PageI18n>;
  /** An aggregated array relationship */
  translations_aggregate: PageI18n_Aggregate;
  updatedAt: Scalars["timestamptz"];
};

/** columns and relationships of "page" */
export type PageCategoriesArgs = {
  distinct_on?: Maybe<Array<PageCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageCategory_Order_By>>;
  where?: Maybe<PageCategory_Bool_Exp>;
};

/** columns and relationships of "page" */
export type PageCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<PageCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageCategory_Order_By>>;
  where?: Maybe<PageCategory_Bool_Exp>;
};

/** columns and relationships of "page" */
export type PageTranslationsArgs = {
  distinct_on?: Maybe<Array<PageI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageI18n_Order_By>>;
  where?: Maybe<PageI18n_Bool_Exp>;
};

/** columns and relationships of "page" */
export type PageTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<PageI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageI18n_Order_By>>;
  where?: Maybe<PageI18n_Bool_Exp>;
};

/** aggregated selection of "page" */
export type Page_Aggregate = {
  __typename?: "page_aggregate";
  aggregate?: Maybe<Page_Aggregate_Fields>;
  nodes: Array<Page>;
};

/** aggregate fields of "page" */
export type Page_Aggregate_Fields = {
  __typename?: "page_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Page_Max_Fields>;
  min?: Maybe<Page_Min_Fields>;
};

/** aggregate fields of "page" */
export type Page_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Page_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "page" */
export type Page_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Page_Max_Order_By>;
  min?: Maybe<Page_Min_Order_By>;
};

/** input type for inserting array relation for remote table "page" */
export type Page_Arr_Rel_Insert_Input = {
  data: Array<Page_Insert_Input>;
  on_conflict?: Maybe<Page_On_Conflict>;
};

/** Boolean expression to filter rows from the table "page". All fields are combined with a logical 'AND'. */
export type Page_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Page_Bool_Exp>>>;
  _not?: Maybe<Page_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Page_Bool_Exp>>>;
  categories?: Maybe<PageCategory_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  translation?: Maybe<PageI18n_Bool_Exp>;
  translations?: Maybe<PageI18n_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "page" */
export enum Page_Constraint {
  /** unique or primary key constraint */
  Pk_742f4117e065c5b6ad21b37ba1f = "PK_742f4117e065c5b6ad21b37ba1f"
}

/** input type for inserting data into table "page" */
export type Page_Insert_Input = {
  categories?: Maybe<PageCategory_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  translation?: Maybe<PageI18n_Obj_Rel_Insert_Input>;
  translations?: Maybe<PageI18n_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Page_Max_Fields = {
  __typename?: "page_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "page" */
export type Page_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Page_Min_Fields = {
  __typename?: "page_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "page" */
export type Page_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "page" */
export type Page_Mutation_Response = {
  __typename?: "page_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Page>;
};

/** input type for inserting object relation for remote table "page" */
export type Page_Obj_Rel_Insert_Input = {
  data: Page_Insert_Input;
  on_conflict?: Maybe<Page_On_Conflict>;
};

/** on conflict condition type for table "page" */
export type Page_On_Conflict = {
  constraint: Page_Constraint;
  update_columns: Array<Page_Update_Column>;
};

/** ordering options when selecting data from "page" */
export type Page_Order_By = {
  categories_aggregate?: Maybe<PageCategory_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  translation?: Maybe<PageI18n_Order_By>;
  translations_aggregate?: Maybe<PageI18n_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** select columns of table "page" */
export enum Page_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "page" */
export type Page_Set_Input = {
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** update columns of table "page" */
export enum Page_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** columns and relationships of "pageCategory" */
export type PageCategory = {
  __typename?: "pageCategory";
  breadcrumb: Scalars["Boolean"];
  /** An object relationship */
  category: Category;
  categoryId: Scalars["uuid"];
  /** An object relationship */
  page: Page;
  pageId: Scalars["uuid"];
};

/** aggregated selection of "pageCategory" */
export type PageCategory_Aggregate = {
  __typename?: "pageCategory_aggregate";
  aggregate?: Maybe<PageCategory_Aggregate_Fields>;
  nodes: Array<PageCategory>;
};

/** aggregate fields of "pageCategory" */
export type PageCategory_Aggregate_Fields = {
  __typename?: "pageCategory_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
};

/** aggregate fields of "pageCategory" */
export type PageCategory_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<PageCategory_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "pageCategory" */
export type PageCategory_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "pageCategory" */
export type PageCategory_Arr_Rel_Insert_Input = {
  data: Array<PageCategory_Insert_Input>;
  on_conflict?: Maybe<PageCategory_On_Conflict>;
};

/** Boolean expression to filter rows from the table "pageCategory". All fields are combined with a logical 'AND'. */
export type PageCategory_Bool_Exp = {
  _and?: Maybe<Array<Maybe<PageCategory_Bool_Exp>>>;
  _not?: Maybe<PageCategory_Bool_Exp>;
  _or?: Maybe<Array<Maybe<PageCategory_Bool_Exp>>>;
  breadcrumb?: Maybe<Boolean_Comparison_Exp>;
  category?: Maybe<Category_Bool_Exp>;
  categoryId?: Maybe<Uuid_Comparison_Exp>;
  page?: Maybe<Page_Bool_Exp>;
  pageId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "pageCategory" */
export enum PageCategory_Constraint {
  /** unique or primary key constraint */
  PkA65d2ce0ff3e45e41ddf0ae8cdc = "PK_a65d2ce0ff3e45e41ddf0ae8cdc"
}

/** input type for inserting data into table "pageCategory" */
export type PageCategory_Insert_Input = {
  breadcrumb?: Maybe<Scalars["Boolean"]>;
  category?: Maybe<Category_Obj_Rel_Insert_Input>;
  categoryId?: Maybe<Scalars["uuid"]>;
  page?: Maybe<Page_Obj_Rel_Insert_Input>;
  pageId?: Maybe<Scalars["uuid"]>;
};

/** response of any mutation on the table "pageCategory" */
export type PageCategory_Mutation_Response = {
  __typename?: "pageCategory_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<PageCategory>;
};

/** input type for inserting object relation for remote table "pageCategory" */
export type PageCategory_Obj_Rel_Insert_Input = {
  data: PageCategory_Insert_Input;
  on_conflict?: Maybe<PageCategory_On_Conflict>;
};

/** on conflict condition type for table "pageCategory" */
export type PageCategory_On_Conflict = {
  constraint: PageCategory_Constraint;
  update_columns: Array<PageCategory_Update_Column>;
};

/** ordering options when selecting data from "pageCategory" */
export type PageCategory_Order_By = {
  breadcrumb?: Maybe<Order_By>;
  category?: Maybe<Category_Order_By>;
  categoryId?: Maybe<Order_By>;
  page?: Maybe<Page_Order_By>;
  pageId?: Maybe<Order_By>;
};

/** select columns of table "pageCategory" */
export enum PageCategory_Select_Column {
  /** column name */
  Breadcrumb = "breadcrumb",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  PageId = "pageId"
}

/** input type for updating data in table "pageCategory" */
export type PageCategory_Set_Input = {
  breadcrumb?: Maybe<Scalars["Boolean"]>;
  categoryId?: Maybe<Scalars["uuid"]>;
  pageId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "pageCategory" */
export enum PageCategory_Update_Column {
  /** column name */
  Breadcrumb = "breadcrumb",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  PageId = "pageId"
}

/** columns and relationships of "pageI18n" */
export type PageI18n = {
  __typename?: "pageI18n";
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  metaDescription: Scalars["String"];
  metaTitle: Scalars["String"];
  /** An object relationship */
  page: Page;
  pageId: Scalars["uuid"];
  slug: Scalars["String"];
  title: Scalars["String"];
};

/** aggregated selection of "pageI18n" */
export type PageI18n_Aggregate = {
  __typename?: "pageI18n_aggregate";
  aggregate?: Maybe<PageI18n_Aggregate_Fields>;
  nodes: Array<PageI18n>;
};

/** aggregate fields of "pageI18n" */
export type PageI18n_Aggregate_Fields = {
  __typename?: "pageI18n_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<PageI18n_Max_Fields>;
  min?: Maybe<PageI18n_Min_Fields>;
};

/** aggregate fields of "pageI18n" */
export type PageI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<PageI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "pageI18n" */
export type PageI18n_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<PageI18n_Max_Order_By>;
  min?: Maybe<PageI18n_Min_Order_By>;
};

/** input type for inserting array relation for remote table "pageI18n" */
export type PageI18n_Arr_Rel_Insert_Input = {
  data: Array<PageI18n_Insert_Input>;
  on_conflict?: Maybe<PageI18n_On_Conflict>;
};

/** Boolean expression to filter rows from the table "pageI18n". All fields are combined with a logical 'AND'. */
export type PageI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<PageI18n_Bool_Exp>>>;
  _not?: Maybe<PageI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<PageI18n_Bool_Exp>>>;
  body?: Maybe<Text_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  metaDescription?: Maybe<Varchar_Comparison_Exp>;
  metaTitle?: Maybe<Varchar_Comparison_Exp>;
  page?: Maybe<Page_Bool_Exp>;
  pageId?: Maybe<Uuid_Comparison_Exp>;
  slug?: Maybe<Varchar_Comparison_Exp>;
  title?: Maybe<Varchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "pageI18n" */
export enum PageI18n_Constraint {
  /** unique or primary key constraint */
  Pk_46a51c4f213544566b06fc9f49a = "PK_46a51c4f213544566b06fc9f49a",
  /** unique or primary key constraint */
  UqA23b2e7199b116af85053eb6dfa = "UQ_a23b2e7199b116af85053eb6dfa"
}

/** input type for inserting data into table "pageI18n" */
export type PageI18n_Insert_Input = {
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  page?: Maybe<Page_Obj_Rel_Insert_Input>;
  pageId?: Maybe<Scalars["uuid"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type PageI18n_Max_Fields = {
  __typename?: "pageI18n_max_fields";
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "pageI18n" */
export type PageI18n_Max_Order_By = {
  body?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type PageI18n_Min_Fields = {
  __typename?: "pageI18n_min_fields";
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "pageI18n" */
export type PageI18n_Min_Order_By = {
  body?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "pageI18n" */
export type PageI18n_Mutation_Response = {
  __typename?: "pageI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<PageI18n>;
};

/** input type for inserting object relation for remote table "pageI18n" */
export type PageI18n_Obj_Rel_Insert_Input = {
  data: PageI18n_Insert_Input;
  on_conflict?: Maybe<PageI18n_On_Conflict>;
};

/** on conflict condition type for table "pageI18n" */
export type PageI18n_On_Conflict = {
  constraint: PageI18n_Constraint;
  update_columns: Array<PageI18n_Update_Column>;
};

/** ordering options when selecting data from "pageI18n" */
export type PageI18n_Order_By = {
  body?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  page?: Maybe<Page_Order_By>;
  pageId?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** select columns of table "pageI18n" */
export enum PageI18n_Select_Column {
  /** column name */
  Body = "body",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  MetaDescription = "metaDescription",
  /** column name */
  MetaTitle = "metaTitle",
  /** column name */
  PageId = "pageId",
  /** column name */
  Slug = "slug",
  /** column name */
  Title = "title"
}

/** input type for updating data in table "pageI18n" */
export type PageI18n_Set_Input = {
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  pageId?: Maybe<Scalars["uuid"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** update columns of table "pageI18n" */
export enum PageI18n_Update_Column {
  /** column name */
  Body = "body",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  MetaDescription = "metaDescription",
  /** column name */
  MetaTitle = "metaTitle",
  /** column name */
  PageId = "pageId",
  /** column name */
  Slug = "slug",
  /** column name */
  Title = "title"
}

export enum Pages {
  Main = "main",
  Exhibitions = "exhibitions",
  Exhibition = "exhibition",
  Works = "works",
  Work = "work",
  Artists = "artists",
  Artist = "artist",
  News = "news",
  Footer = "footer",
  Header = "header"
}

/** columns and relationships of "payment" */
export type Payment = {
  __typename?: "payment";
  createdAt: Scalars["timestamptz"];
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  order: Order;
  orderId: Scalars["uuid"];
  paymentDate?: Maybe<Scalars["timestamptz"]>;
  paymentId?: Maybe<Scalars["String"]>;
  paytype?: Maybe<Scalars["String"]>;
  service: Scalars["payment_service_enum"];
  status: Scalars["payment_status_enum"];
  transactionId?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["timestamptz"];
};

/** aggregated selection of "payment" */
export type Payment_Aggregate = {
  __typename?: "payment_aggregate";
  aggregate?: Maybe<Payment_Aggregate_Fields>;
  nodes: Array<Payment>;
};

/** aggregate fields of "payment" */
export type Payment_Aggregate_Fields = {
  __typename?: "payment_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Payment_Max_Fields>;
  min?: Maybe<Payment_Min_Fields>;
};

/** aggregate fields of "payment" */
export type Payment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payment_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "payment" */
export type Payment_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Payment_Max_Order_By>;
  min?: Maybe<Payment_Min_Order_By>;
};

/** input type for inserting array relation for remote table "payment" */
export type Payment_Arr_Rel_Insert_Input = {
  data: Array<Payment_Insert_Input>;
  on_conflict?: Maybe<Payment_On_Conflict>;
};

/** Boolean expression to filter rows from the table "payment". All fields are combined with a logical 'AND'. */
export type Payment_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Payment_Bool_Exp>>>;
  _not?: Maybe<Payment_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Payment_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  order?: Maybe<Order_Bool_Exp>;
  orderId?: Maybe<Uuid_Comparison_Exp>;
  paymentDate?: Maybe<Timestamptz_Comparison_Exp>;
  paymentId?: Maybe<Varchar_Comparison_Exp>;
  paytype?: Maybe<Varchar_Comparison_Exp>;
  service?: Maybe<Payment_Service_Enum_Comparison_Exp>;
  status?: Maybe<Payment_Status_Enum_Comparison_Exp>;
  transactionId?: Maybe<Varchar_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment" */
export enum Payment_Constraint {
  /** unique or primary key constraint */
  PkFcaec7df5adf9cac408c686b2ab = "PK_fcaec7df5adf9cac408c686b2ab"
}

/** input type for inserting data into table "payment" */
export type Payment_Insert_Input = {
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  order?: Maybe<Order_Obj_Rel_Insert_Input>;
  orderId?: Maybe<Scalars["uuid"]>;
  paymentDate?: Maybe<Scalars["timestamptz"]>;
  paymentId?: Maybe<Scalars["String"]>;
  paytype?: Maybe<Scalars["String"]>;
  service?: Maybe<Scalars["payment_service_enum"]>;
  status?: Maybe<Scalars["payment_status_enum"]>;
  transactionId?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Payment_Max_Fields = {
  __typename?: "payment_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  paymentDate?: Maybe<Scalars["timestamptz"]>;
  paymentId?: Maybe<Scalars["String"]>;
  paytype?: Maybe<Scalars["String"]>;
  transactionId?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "payment" */
export type Payment_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  paymentDate?: Maybe<Order_By>;
  paymentId?: Maybe<Order_By>;
  paytype?: Maybe<Order_By>;
  transactionId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Payment_Min_Fields = {
  __typename?: "payment_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  paymentDate?: Maybe<Scalars["timestamptz"]>;
  paymentId?: Maybe<Scalars["String"]>;
  paytype?: Maybe<Scalars["String"]>;
  transactionId?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "payment" */
export type Payment_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  paymentDate?: Maybe<Order_By>;
  paymentId?: Maybe<Order_By>;
  paytype?: Maybe<Order_By>;
  transactionId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "payment" */
export type Payment_Mutation_Response = {
  __typename?: "payment_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Payment>;
};

/** input type for inserting object relation for remote table "payment" */
export type Payment_Obj_Rel_Insert_Input = {
  data: Payment_Insert_Input;
  on_conflict?: Maybe<Payment_On_Conflict>;
};

/** on conflict condition type for table "payment" */
export type Payment_On_Conflict = {
  constraint: Payment_Constraint;
  update_columns: Array<Payment_Update_Column>;
};

/** ordering options when selecting data from "payment" */
export type Payment_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_Order_By>;
  orderId?: Maybe<Order_By>;
  paymentDate?: Maybe<Order_By>;
  paymentId?: Maybe<Order_By>;
  paytype?: Maybe<Order_By>;
  service?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  transactionId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** select columns of table "payment" */
export enum Payment_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  PaymentDate = "paymentDate",
  /** column name */
  PaymentId = "paymentId",
  /** column name */
  Paytype = "paytype",
  /** column name */
  Service = "service",
  /** column name */
  Status = "status",
  /** column name */
  TransactionId = "transactionId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** expression to compare columns of type payment_service_enum. All fields are combined with logical 'AND'. */
export type Payment_Service_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars["payment_service_enum"]>;
  _gt?: Maybe<Scalars["payment_service_enum"]>;
  _gte?: Maybe<Scalars["payment_service_enum"]>;
  _in?: Maybe<Array<Scalars["payment_service_enum"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["payment_service_enum"]>;
  _lte?: Maybe<Scalars["payment_service_enum"]>;
  _neq?: Maybe<Scalars["payment_service_enum"]>;
  _nin?: Maybe<Array<Scalars["payment_service_enum"]>>;
};

/** input type for updating data in table "payment" */
export type Payment_Set_Input = {
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  orderId?: Maybe<Scalars["uuid"]>;
  paymentDate?: Maybe<Scalars["timestamptz"]>;
  paymentId?: Maybe<Scalars["String"]>;
  paytype?: Maybe<Scalars["String"]>;
  service?: Maybe<Scalars["payment_service_enum"]>;
  status?: Maybe<Scalars["payment_status_enum"]>;
  transactionId?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** expression to compare columns of type payment_status_enum. All fields are combined with logical 'AND'. */
export type Payment_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars["payment_status_enum"]>;
  _gt?: Maybe<Scalars["payment_status_enum"]>;
  _gte?: Maybe<Scalars["payment_status_enum"]>;
  _in?: Maybe<Array<Scalars["payment_status_enum"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["payment_status_enum"]>;
  _lte?: Maybe<Scalars["payment_status_enum"]>;
  _neq?: Maybe<Scalars["payment_status_enum"]>;
  _nin?: Maybe<Array<Scalars["payment_status_enum"]>>;
};

/** update columns of table "payment" */
export enum Payment_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "orderId",
  /** column name */
  PaymentDate = "paymentDate",
  /** column name */
  PaymentId = "paymentId",
  /** column name */
  Paytype = "paytype",
  /** column name */
  Service = "service",
  /** column name */
  Status = "status",
  /** column name */
  TransactionId = "transactionId",
  /** column name */
  UpdatedAt = "updatedAt"
}

export enum PaymentTypes {
  Cod = "cod",
  Cashless = "cashless"
}

/** columns and relationships of "provenance" */
export type Provenance = {
  __typename?: "provenance";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An array relationship */
  translations: Array<ProvenanceI18n>;
  /** An aggregated array relationship */
  translations_aggregate: ProvenanceI18n_Aggregate;
  /** An array relationship */
  works: Array<Work>;
  /** An aggregated array relationship */
  works_aggregate: Work_Aggregate;
};

/** columns and relationships of "provenance" */
export type ProvenanceTranslationsArgs = {
  distinct_on?: Maybe<Array<ProvenanceI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ProvenanceI18n_Order_By>>;
  where?: Maybe<ProvenanceI18n_Bool_Exp>;
};

/** columns and relationships of "provenance" */
export type ProvenanceTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<ProvenanceI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ProvenanceI18n_Order_By>>;
  where?: Maybe<ProvenanceI18n_Bool_Exp>;
};

/** columns and relationships of "provenance" */
export type ProvenanceWorksArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};

/** columns and relationships of "provenance" */
export type ProvenanceWorks_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};

/** aggregated selection of "provenance" */
export type Provenance_Aggregate = {
  __typename?: "provenance_aggregate";
  aggregate?: Maybe<Provenance_Aggregate_Fields>;
  nodes: Array<Provenance>;
};

/** aggregate fields of "provenance" */
export type Provenance_Aggregate_Fields = {
  __typename?: "provenance_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Provenance_Max_Fields>;
  min?: Maybe<Provenance_Min_Fields>;
};

/** aggregate fields of "provenance" */
export type Provenance_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Provenance_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "provenance" */
export type Provenance_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Provenance_Max_Order_By>;
  min?: Maybe<Provenance_Min_Order_By>;
};

/** input type for inserting array relation for remote table "provenance" */
export type Provenance_Arr_Rel_Insert_Input = {
  data: Array<Provenance_Insert_Input>;
  on_conflict?: Maybe<Provenance_On_Conflict>;
};

/** Boolean expression to filter rows from the table "provenance". All fields are combined with a logical 'AND'. */
export type Provenance_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Provenance_Bool_Exp>>>;
  _not?: Maybe<Provenance_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Provenance_Bool_Exp>>>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  translations?: Maybe<ProvenanceI18n_Bool_Exp>;
  works?: Maybe<Work_Bool_Exp>;
};

/** unique or primary key constraints on table "provenance" */
export enum Provenance_Constraint {
  /** unique or primary key constraint */
  Pk_8dd83ca431623c344a0cbdb5543 = "PK_8dd83ca431623c344a0cbdb5543"
}

/** input type for inserting data into table "provenance" */
export type Provenance_Insert_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  translations?: Maybe<ProvenanceI18n_Arr_Rel_Insert_Input>;
  works?: Maybe<Work_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Provenance_Max_Fields = {
  __typename?: "provenance_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "provenance" */
export type Provenance_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Provenance_Min_Fields = {
  __typename?: "provenance_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "provenance" */
export type Provenance_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "provenance" */
export type Provenance_Mutation_Response = {
  __typename?: "provenance_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Provenance>;
};

/** input type for inserting object relation for remote table "provenance" */
export type Provenance_Obj_Rel_Insert_Input = {
  data: Provenance_Insert_Input;
  on_conflict?: Maybe<Provenance_On_Conflict>;
};

/** on conflict condition type for table "provenance" */
export type Provenance_On_Conflict = {
  constraint: Provenance_Constraint;
  update_columns: Array<Provenance_Update_Column>;
};

/** ordering options when selecting data from "provenance" */
export type Provenance_Order_By = {
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  translations_aggregate?: Maybe<ProvenanceI18n_Aggregate_Order_By>;
  works_aggregate?: Maybe<Work_Aggregate_Order_By>;
};

/** select columns of table "provenance" */
export enum Provenance_Select_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id"
}

/** input type for updating data in table "provenance" */
export type Provenance_Set_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "provenance" */
export enum Provenance_Update_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id"
}

/** columns and relationships of "provenanceI18n" */
export type ProvenanceI18n = {
  __typename?: "provenanceI18n";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  name: Scalars["String"];
  /** An object relationship */
  provenance: Provenance;
  provenanceId: Scalars["uuid"];
};

/** aggregated selection of "provenanceI18n" */
export type ProvenanceI18n_Aggregate = {
  __typename?: "provenanceI18n_aggregate";
  aggregate?: Maybe<ProvenanceI18n_Aggregate_Fields>;
  nodes: Array<ProvenanceI18n>;
};

/** aggregate fields of "provenanceI18n" */
export type ProvenanceI18n_Aggregate_Fields = {
  __typename?: "provenanceI18n_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<ProvenanceI18n_Max_Fields>;
  min?: Maybe<ProvenanceI18n_Min_Fields>;
};

/** aggregate fields of "provenanceI18n" */
export type ProvenanceI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ProvenanceI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "provenanceI18n" */
export type ProvenanceI18n_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<ProvenanceI18n_Max_Order_By>;
  min?: Maybe<ProvenanceI18n_Min_Order_By>;
};

/** input type for inserting array relation for remote table "provenanceI18n" */
export type ProvenanceI18n_Arr_Rel_Insert_Input = {
  data: Array<ProvenanceI18n_Insert_Input>;
  on_conflict?: Maybe<ProvenanceI18n_On_Conflict>;
};

/** Boolean expression to filter rows from the table "provenanceI18n". All fields are combined with a logical 'AND'. */
export type ProvenanceI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ProvenanceI18n_Bool_Exp>>>;
  _not?: Maybe<ProvenanceI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ProvenanceI18n_Bool_Exp>>>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<Varchar_Comparison_Exp>;
  provenance?: Maybe<Provenance_Bool_Exp>;
  provenanceId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "provenanceI18n" */
export enum ProvenanceI18n_Constraint {
  /** unique or primary key constraint */
  PkD452a185f01f1cebea331d3cd28 = "PK_d452a185f01f1cebea331d3cd28"
}

/** input type for inserting data into table "provenanceI18n" */
export type ProvenanceI18n_Insert_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  provenance?: Maybe<Provenance_Obj_Rel_Insert_Input>;
  provenanceId?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type ProvenanceI18n_Max_Fields = {
  __typename?: "provenanceI18n_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "provenanceI18n" */
export type ProvenanceI18n_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ProvenanceI18n_Min_Fields = {
  __typename?: "provenanceI18n_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "provenanceI18n" */
export type ProvenanceI18n_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "provenanceI18n" */
export type ProvenanceI18n_Mutation_Response = {
  __typename?: "provenanceI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<ProvenanceI18n>;
};

/** input type for inserting object relation for remote table "provenanceI18n" */
export type ProvenanceI18n_Obj_Rel_Insert_Input = {
  data: ProvenanceI18n_Insert_Input;
  on_conflict?: Maybe<ProvenanceI18n_On_Conflict>;
};

/** on conflict condition type for table "provenanceI18n" */
export type ProvenanceI18n_On_Conflict = {
  constraint: ProvenanceI18n_Constraint;
  update_columns: Array<ProvenanceI18n_Update_Column>;
};

/** ordering options when selecting data from "provenanceI18n" */
export type ProvenanceI18n_Order_By = {
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  provenance?: Maybe<Provenance_Order_By>;
  provenanceId?: Maybe<Order_By>;
};

/** select columns of table "provenanceI18n" */
export enum ProvenanceI18n_Select_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Name = "name",
  /** column name */
  ProvenanceId = "provenanceId"
}

/** input type for updating data in table "provenanceI18n" */
export type ProvenanceI18n_Set_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  provenanceId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "provenanceI18n" */
export enum ProvenanceI18n_Update_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Name = "name",
  /** column name */
  ProvenanceId = "provenanceId"
}

export type Query = {
  __typename?: "Query";
  /** fetch data from the table: "artist" */
  artist: Array<Artist>;
  /** fetch data from the table: "artistCategory" */
  artistCategory: Array<ArtistCategory>;
  /** fetch aggregated fields from the table: "artistCategory" */
  artistCategory_aggregate: ArtistCategory_Aggregate;
  /** fetch data from the table: "artistCategory" using primary key columns */
  artistCategory_by_pk?: Maybe<ArtistCategory>;
  /** fetch data from the table: "artistI18n" */
  artistI18n: Array<ArtistI18n>;
  /** fetch aggregated fields from the table: "artistI18n" */
  artistI18n_aggregate: ArtistI18n_Aggregate;
  /** fetch data from the table: "artistI18n" using primary key columns */
  artistI18n_by_pk?: Maybe<ArtistI18n>;
  /** fetch aggregated fields from the table: "artist" */
  artist_aggregate: Artist_Aggregate;
  /** fetch data from the table: "artist" using primary key columns */
  artist_by_pk?: Maybe<Artist>;
  /** fetch data from the table: "basis" */
  basis: Array<Basis>;
  /** fetch data from the table: "basisI18n" */
  basisI18n: Array<BasisI18n>;
  /** fetch aggregated fields from the table: "basisI18n" */
  basisI18n_aggregate: BasisI18n_Aggregate;
  /** fetch data from the table: "basisI18n" using primary key columns */
  basisI18n_by_pk?: Maybe<BasisI18n>;
  /** fetch aggregated fields from the table: "basis" */
  basis_aggregate: Basis_Aggregate;
  /** fetch data from the table: "basis" using primary key columns */
  basis_by_pk?: Maybe<Basis>;
  /** fetch data from the table: "cart" */
  cart: Array<Cart>;
  /** fetch aggregated fields from the table: "cart" */
  cart_aggregate: Cart_Aggregate;
  /** fetch data from the table: "cart" using primary key columns */
  cart_by_pk?: Maybe<Cart>;
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch data from the table: "categoryI18n" */
  categoryI18n: Array<CategoryI18n>;
  /** fetch aggregated fields from the table: "categoryI18n" */
  categoryI18n_aggregate: CategoryI18n_Aggregate;
  /** fetch data from the table: "categoryI18n" using primary key columns */
  categoryI18n_by_pk?: Maybe<CategoryI18n>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "category_closure" */
  category_closure: Array<Category_Closure>;
  /** fetch aggregated fields from the table: "category_closure" */
  category_closure_aggregate: Category_Closure_Aggregate;
  /** fetch data from the table: "category_closure" using primary key columns */
  category_closure_by_pk?: Maybe<Category_Closure>;
  /** fetch data from the table: "config" */
  config: Array<Config>;
  /** fetch aggregated fields from the table: "config" */
  config_aggregate: Config_Aggregate;
  /** fetch data from the table: "config" using primary key columns */
  config_by_pk?: Maybe<Config>;
  /** fetch data from the table: "customField" */
  customField: Array<CustomField>;
  /** fetch data from the table: "customFieldI18n" */
  customFieldI18n: Array<CustomFieldI18n>;
  /** fetch aggregated fields from the table: "customFieldI18n" */
  customFieldI18n_aggregate: CustomFieldI18n_Aggregate;
  /** fetch data from the table: "customFieldI18n" using primary key columns */
  customFieldI18n_by_pk?: Maybe<CustomFieldI18n>;
  /** fetch data from the table: "customFieldWork" */
  customFieldWork: Array<CustomFieldWork>;
  /** fetch aggregated fields from the table: "customFieldWork" */
  customFieldWork_aggregate: CustomFieldWork_Aggregate;
  /** fetch data from the table: "customFieldWork" using primary key columns */
  customFieldWork_by_pk?: Maybe<CustomFieldWork>;
  /** fetch aggregated fields from the table: "customField" */
  customField_aggregate: CustomField_Aggregate;
  /** fetch data from the table: "customField" using primary key columns */
  customField_by_pk?: Maybe<CustomField>;
  /** fetch data from the table: "exhibition" */
  exhibition: Array<Exhibition>;
  /** fetch data from the table: "exhibitionCategory" */
  exhibitionCategory: Array<ExhibitionCategory>;
  /** fetch aggregated fields from the table: "exhibitionCategory" */
  exhibitionCategory_aggregate: ExhibitionCategory_Aggregate;
  /** fetch data from the table: "exhibitionCategory" using primary key columns */
  exhibitionCategory_by_pk?: Maybe<ExhibitionCategory>;
  /** fetch data from the table: "exhibitionI18n" */
  exhibitionI18n: Array<ExhibitionI18n>;
  /** fetch aggregated fields from the table: "exhibitionI18n" */
  exhibitionI18n_aggregate: ExhibitionI18n_Aggregate;
  /** fetch data from the table: "exhibitionI18n" using primary key columns */
  exhibitionI18n_by_pk?: Maybe<ExhibitionI18n>;
  /** fetch data from the table: "exhibitionWork" */
  exhibitionWork: Array<ExhibitionWork>;
  /** fetch aggregated fields from the table: "exhibitionWork" */
  exhibitionWork_aggregate: ExhibitionWork_Aggregate;
  /** fetch data from the table: "exhibitionWork" using primary key columns */
  exhibitionWork_by_pk?: Maybe<ExhibitionWork>;
  /** fetch aggregated fields from the table: "exhibition" */
  exhibition_aggregate: Exhibition_Aggregate;
  /** fetch data from the table: "exhibition" using primary key columns */
  exhibition_by_pk?: Maybe<Exhibition>;
  /** fetch data from the table: "fileI18n" */
  fileI18n: Array<FileI18n>;
  /** fetch aggregated fields from the table: "fileI18n" */
  fileI18n_aggregate: FileI18n_Aggregate;
  /** fetch data from the table: "fileI18n" using primary key columns */
  fileI18n_by_pk?: Maybe<FileI18n>;
  /** fetch data from the table: "link" */
  link: Array<Link>;
  /** fetch data from the table: "linkI18n" */
  linkI18n: Array<LinkI18n>;
  /** fetch aggregated fields from the table: "linkI18n" */
  linkI18n_aggregate: LinkI18n_Aggregate;
  /** fetch data from the table: "linkI18n" using primary key columns */
  linkI18n_by_pk?: Maybe<LinkI18n>;
  /** fetch aggregated fields from the table: "link" */
  link_aggregate: Link_Aggregate;
  /** fetch data from the table: "link" using primary key columns */
  link_by_pk?: Maybe<Link>;
  /** fetch data from the table: "locale" */
  locale: Array<Locale>;
  /** fetch aggregated fields from the table: "locale" */
  locale_aggregate: Locale_Aggregate;
  /** fetch data from the table: "locale" using primary key columns */
  locale_by_pk?: Maybe<Locale>;
  /** fetch data from the table: "navigation" */
  navigation: Array<Navigation>;
  /** fetch data from the table: "navigationI18n" */
  navigationI18n: Array<NavigationI18n>;
  /** fetch aggregated fields from the table: "navigationI18n" */
  navigationI18n_aggregate: NavigationI18n_Aggregate;
  /** fetch data from the table: "navigationI18n" using primary key columns */
  navigationI18n_by_pk?: Maybe<NavigationI18n>;
  /** fetch aggregated fields from the table: "navigation" */
  navigation_aggregate: Navigation_Aggregate;
  /** fetch data from the table: "navigation" using primary key columns */
  navigation_by_pk?: Maybe<Navigation>;
  /** fetch data from the table: "news" */
  news: Array<News>;
  /** fetch data from the table: "newsCategory" */
  newsCategory: Array<NewsCategory>;
  /** fetch aggregated fields from the table: "newsCategory" */
  newsCategory_aggregate: NewsCategory_Aggregate;
  /** fetch data from the table: "newsCategory" using primary key columns */
  newsCategory_by_pk?: Maybe<NewsCategory>;
  /** fetch data from the table: "newsI18n" */
  newsI18n: Array<NewsI18n>;
  /** fetch aggregated fields from the table: "newsI18n" */
  newsI18n_aggregate: NewsI18n_Aggregate;
  /** fetch data from the table: "newsI18n" using primary key columns */
  newsI18n_by_pk?: Maybe<NewsI18n>;
  /** fetch aggregated fields from the table: "news" */
  news_aggregate: News_Aggregate;
  /** fetch data from the table: "news" using primary key columns */
  news_by_pk?: Maybe<News>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch data from the table: "orderProduct" */
  orderProduct: Array<OrderProduct>;
  /** fetch aggregated fields from the table: "orderProduct" */
  orderProduct_aggregate: OrderProduct_Aggregate;
  /** fetch data from the table: "orderProduct" using primary key columns */
  orderProduct_by_pk?: Maybe<OrderProduct>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "page" */
  page: Array<Page>;
  /** fetch data from the table: "pageCategory" */
  pageCategory: Array<PageCategory>;
  /** fetch aggregated fields from the table: "pageCategory" */
  pageCategory_aggregate: PageCategory_Aggregate;
  /** fetch data from the table: "pageCategory" using primary key columns */
  pageCategory_by_pk?: Maybe<PageCategory>;
  /** fetch data from the table: "pageI18n" */
  pageI18n: Array<PageI18n>;
  /** fetch aggregated fields from the table: "pageI18n" */
  pageI18n_aggregate: PageI18n_Aggregate;
  /** fetch data from the table: "pageI18n" using primary key columns */
  pageI18n_by_pk?: Maybe<PageI18n>;
  /** fetch aggregated fields from the table: "page" */
  page_aggregate: Page_Aggregate;
  /** fetch data from the table: "page" using primary key columns */
  page_by_pk?: Maybe<Page>;
  /** fetch data from the table: "payment" */
  payment: Array<Payment>;
  /** fetch aggregated fields from the table: "payment" */
  payment_aggregate: Payment_Aggregate;
  /** fetch data from the table: "payment" using primary key columns */
  payment_by_pk?: Maybe<Payment>;
  /** fetch data from the table: "provenance" */
  provenance: Array<Provenance>;
  /** fetch data from the table: "provenanceI18n" */
  provenanceI18n: Array<ProvenanceI18n>;
  /** fetch aggregated fields from the table: "provenanceI18n" */
  provenanceI18n_aggregate: ProvenanceI18n_Aggregate;
  /** fetch data from the table: "provenanceI18n" using primary key columns */
  provenanceI18n_by_pk?: Maybe<ProvenanceI18n>;
  /** fetch aggregated fields from the table: "provenance" */
  provenance_aggregate: Provenance_Aggregate;
  /** fetch data from the table: "provenance" using primary key columns */
  provenance_by_pk?: Maybe<Provenance>;
  /** fetch data from the table: "school" */
  school: Array<School>;
  /** fetch data from the table: "schoolI18n" */
  schoolI18n: Array<SchoolI18n>;
  /** fetch aggregated fields from the table: "schoolI18n" */
  schoolI18n_aggregate: SchoolI18n_Aggregate;
  /** fetch data from the table: "schoolI18n" using primary key columns */
  schoolI18n_by_pk?: Maybe<SchoolI18n>;
  /** fetch aggregated fields from the table: "school" */
  school_aggregate: School_Aggregate;
  /** fetch data from the table: "school" using primary key columns */
  school_by_pk?: Maybe<School>;
  /** fetch data from the table: "slider" */
  slider: Array<Slider>;
  /** fetch data from the table: "sliderI18n" */
  sliderI18n: Array<SliderI18n>;
  /** fetch aggregated fields from the table: "sliderI18n" */
  sliderI18n_aggregate: SliderI18n_Aggregate;
  /** fetch data from the table: "sliderI18n" using primary key columns */
  sliderI18n_by_pk?: Maybe<SliderI18n>;
  /** fetch aggregated fields from the table: "slider" */
  slider_aggregate: Slider_Aggregate;
  /** fetch data from the table: "slider" using primary key columns */
  slider_by_pk?: Maybe<Slider>;
  /** fetch data from the table: "tag" */
  tag: Array<Tag>;
  /** fetch data from the table: "tagI18n" */
  tagI18n: Array<TagI18n>;
  /** fetch aggregated fields from the table: "tagI18n" */
  tagI18n_aggregate: TagI18n_Aggregate;
  /** fetch data from the table: "tagI18n" using primary key columns */
  tagI18n_by_pk?: Maybe<TagI18n>;
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: Tag_Aggregate;
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table: "technique" */
  technique: Array<Technique>;
  /** fetch data from the table: "techniqueI18n" */
  techniqueI18n: Array<TechniqueI18n>;
  /** fetch aggregated fields from the table: "techniqueI18n" */
  techniqueI18n_aggregate: TechniqueI18n_Aggregate;
  /** fetch data from the table: "techniqueI18n" using primary key columns */
  techniqueI18n_by_pk?: Maybe<TechniqueI18n>;
  /** fetch aggregated fields from the table: "technique" */
  technique_aggregate: Technique_Aggregate;
  /** fetch data from the table: "technique" using primary key columns */
  technique_by_pk?: Maybe<Technique>;
  /** fetch data from the table: "translation" */
  translation: Array<Translation>;
  /** fetch aggregated fields from the table: "translation" */
  translation_aggregate: Translation_Aggregate;
  /** fetch data from the table: "translation" using primary key columns */
  translation_by_pk?: Maybe<Translation>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "work" */
  work: Array<Work>;
  /** fetch data from the table: "workCategory" */
  workCategory: Array<WorkCategory>;
  /** fetch aggregated fields from the table: "workCategory" */
  workCategory_aggregate: WorkCategory_Aggregate;
  /** fetch data from the table: "workCategory" using primary key columns */
  workCategory_by_pk?: Maybe<WorkCategory>;
  /** fetch data from the table: "workI18n" */
  workI18n: Array<WorkI18n>;
  /** fetch aggregated fields from the table: "workI18n" */
  workI18n_aggregate: WorkI18n_Aggregate;
  /** fetch data from the table: "workI18n" using primary key columns */
  workI18n_by_pk?: Maybe<WorkI18n>;
  /** fetch aggregated fields from the table: "work" */
  work_aggregate: Work_Aggregate;
  /** fetch data from the table: "work" using primary key columns */
  work_by_pk?: Maybe<Work>;
  search: Array<Maybe<SearchResultData>>;
  breadcrumbs: Array<Maybe<Breadcrumb>>;
  myData?: Maybe<Data>;
};

export type QueryArtistArgs = {
  distinct_on?: Maybe<Array<Artist_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Artist_Order_By>>;
  where?: Maybe<Artist_Bool_Exp>;
};

export type QueryArtistCategoryArgs = {
  distinct_on?: Maybe<Array<ArtistCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistCategory_Order_By>>;
  where?: Maybe<ArtistCategory_Bool_Exp>;
};

export type QueryArtistCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<ArtistCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistCategory_Order_By>>;
  where?: Maybe<ArtistCategory_Bool_Exp>;
};

export type QueryArtistCategory_By_PkArgs = {
  artistId: Scalars["uuid"];
  categoryId: Scalars["uuid"];
};

export type QueryArtistI18nArgs = {
  distinct_on?: Maybe<Array<ArtistI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistI18n_Order_By>>;
  where?: Maybe<ArtistI18n_Bool_Exp>;
};

export type QueryArtistI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<ArtistI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistI18n_Order_By>>;
  where?: Maybe<ArtistI18n_Bool_Exp>;
};

export type QueryArtistI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryArtist_AggregateArgs = {
  distinct_on?: Maybe<Array<Artist_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Artist_Order_By>>;
  where?: Maybe<Artist_Bool_Exp>;
};

export type QueryArtist_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryBasisArgs = {
  distinct_on?: Maybe<Array<Basis_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Basis_Order_By>>;
  where?: Maybe<Basis_Bool_Exp>;
};

export type QueryBasisI18nArgs = {
  distinct_on?: Maybe<Array<BasisI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BasisI18n_Order_By>>;
  where?: Maybe<BasisI18n_Bool_Exp>;
};

export type QueryBasisI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<BasisI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BasisI18n_Order_By>>;
  where?: Maybe<BasisI18n_Bool_Exp>;
};

export type QueryBasisI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryBasis_AggregateArgs = {
  distinct_on?: Maybe<Array<Basis_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Basis_Order_By>>;
  where?: Maybe<Basis_Bool_Exp>;
};

export type QueryBasis_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryCartArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};

export type QueryCart_AggregateArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};

export type QueryCart_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryCategoryArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};

export type QueryCategoryI18nArgs = {
  distinct_on?: Maybe<Array<CategoryI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CategoryI18n_Order_By>>;
  where?: Maybe<CategoryI18n_Bool_Exp>;
};

export type QueryCategoryI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<CategoryI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CategoryI18n_Order_By>>;
  where?: Maybe<CategoryI18n_Bool_Exp>;
};

export type QueryCategoryI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};

export type QueryCategory_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryCategory_ClosureArgs = {
  distinct_on?: Maybe<Array<Category_Closure_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Category_Closure_Order_By>>;
  where?: Maybe<Category_Closure_Bool_Exp>;
};

export type QueryCategory_Closure_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Closure_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Category_Closure_Order_By>>;
  where?: Maybe<Category_Closure_Bool_Exp>;
};

export type QueryCategory_Closure_By_PkArgs = {
  id_ancestor: Scalars["uuid"];
  id_descendant: Scalars["uuid"];
};

export type QueryConfigArgs = {
  distinct_on?: Maybe<Array<Config_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Config_Order_By>>;
  where?: Maybe<Config_Bool_Exp>;
};

export type QueryConfig_AggregateArgs = {
  distinct_on?: Maybe<Array<Config_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Config_Order_By>>;
  where?: Maybe<Config_Bool_Exp>;
};

export type QueryConfig_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryCustomFieldArgs = {
  distinct_on?: Maybe<Array<CustomField_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomField_Order_By>>;
  where?: Maybe<CustomField_Bool_Exp>;
};

export type QueryCustomFieldI18nArgs = {
  distinct_on?: Maybe<Array<CustomFieldI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldI18n_Order_By>>;
  where?: Maybe<CustomFieldI18n_Bool_Exp>;
};

export type QueryCustomFieldI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<CustomFieldI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldI18n_Order_By>>;
  where?: Maybe<CustomFieldI18n_Bool_Exp>;
};

export type QueryCustomFieldI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryCustomFieldWorkArgs = {
  distinct_on?: Maybe<Array<CustomFieldWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldWork_Order_By>>;
  where?: Maybe<CustomFieldWork_Bool_Exp>;
};

export type QueryCustomFieldWork_AggregateArgs = {
  distinct_on?: Maybe<Array<CustomFieldWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldWork_Order_By>>;
  where?: Maybe<CustomFieldWork_Bool_Exp>;
};

export type QueryCustomFieldWork_By_PkArgs = {
  customFieldId: Scalars["uuid"];
  workId: Scalars["uuid"];
};

export type QueryCustomField_AggregateArgs = {
  distinct_on?: Maybe<Array<CustomField_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomField_Order_By>>;
  where?: Maybe<CustomField_Bool_Exp>;
};

export type QueryCustomField_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryExhibitionArgs = {
  distinct_on?: Maybe<Array<Exhibition_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Exhibition_Order_By>>;
  where?: Maybe<Exhibition_Bool_Exp>;
};

export type QueryExhibitionCategoryArgs = {
  distinct_on?: Maybe<Array<ExhibitionCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionCategory_Order_By>>;
  where?: Maybe<ExhibitionCategory_Bool_Exp>;
};

export type QueryExhibitionCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<ExhibitionCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionCategory_Order_By>>;
  where?: Maybe<ExhibitionCategory_Bool_Exp>;
};

export type QueryExhibitionCategory_By_PkArgs = {
  categoryId: Scalars["uuid"];
  exhibitionId: Scalars["uuid"];
};

export type QueryExhibitionI18nArgs = {
  distinct_on?: Maybe<Array<ExhibitionI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionI18n_Order_By>>;
  where?: Maybe<ExhibitionI18n_Bool_Exp>;
};

export type QueryExhibitionI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<ExhibitionI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionI18n_Order_By>>;
  where?: Maybe<ExhibitionI18n_Bool_Exp>;
};

export type QueryExhibitionI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryExhibitionWorkArgs = {
  distinct_on?: Maybe<Array<ExhibitionWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionWork_Order_By>>;
  where?: Maybe<ExhibitionWork_Bool_Exp>;
};

export type QueryExhibitionWork_AggregateArgs = {
  distinct_on?: Maybe<Array<ExhibitionWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionWork_Order_By>>;
  where?: Maybe<ExhibitionWork_Bool_Exp>;
};

export type QueryExhibitionWork_By_PkArgs = {
  exhibitionId: Scalars["uuid"];
  workId: Scalars["uuid"];
};

export type QueryExhibition_AggregateArgs = {
  distinct_on?: Maybe<Array<Exhibition_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Exhibition_Order_By>>;
  where?: Maybe<Exhibition_Bool_Exp>;
};

export type QueryExhibition_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryFileI18nArgs = {
  distinct_on?: Maybe<Array<FileI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<FileI18n_Order_By>>;
  where?: Maybe<FileI18n_Bool_Exp>;
};

export type QueryFileI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<FileI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<FileI18n_Order_By>>;
  where?: Maybe<FileI18n_Bool_Exp>;
};

export type QueryFileI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryLinkArgs = {
  distinct_on?: Maybe<Array<Link_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Link_Order_By>>;
  where?: Maybe<Link_Bool_Exp>;
};

export type QueryLinkI18nArgs = {
  distinct_on?: Maybe<Array<LinkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LinkI18n_Order_By>>;
  where?: Maybe<LinkI18n_Bool_Exp>;
};

export type QueryLinkI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<LinkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LinkI18n_Order_By>>;
  where?: Maybe<LinkI18n_Bool_Exp>;
};

export type QueryLinkI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryLink_AggregateArgs = {
  distinct_on?: Maybe<Array<Link_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Link_Order_By>>;
  where?: Maybe<Link_Bool_Exp>;
};

export type QueryLink_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryLocaleArgs = {
  distinct_on?: Maybe<Array<Locale_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Locale_Order_By>>;
  where?: Maybe<Locale_Bool_Exp>;
};

export type QueryLocale_AggregateArgs = {
  distinct_on?: Maybe<Array<Locale_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Locale_Order_By>>;
  where?: Maybe<Locale_Bool_Exp>;
};

export type QueryLocale_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryNavigationArgs = {
  distinct_on?: Maybe<Array<Navigation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Navigation_Order_By>>;
  where?: Maybe<Navigation_Bool_Exp>;
};

export type QueryNavigationI18nArgs = {
  distinct_on?: Maybe<Array<NavigationI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NavigationI18n_Order_By>>;
  where?: Maybe<NavigationI18n_Bool_Exp>;
};

export type QueryNavigationI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<NavigationI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NavigationI18n_Order_By>>;
  where?: Maybe<NavigationI18n_Bool_Exp>;
};

export type QueryNavigationI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryNavigation_AggregateArgs = {
  distinct_on?: Maybe<Array<Navigation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Navigation_Order_By>>;
  where?: Maybe<Navigation_Bool_Exp>;
};

export type QueryNavigation_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryNewsArgs = {
  distinct_on?: Maybe<Array<News_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<News_Order_By>>;
  where?: Maybe<News_Bool_Exp>;
};

export type QueryNewsCategoryArgs = {
  distinct_on?: Maybe<Array<NewsCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsCategory_Order_By>>;
  where?: Maybe<NewsCategory_Bool_Exp>;
};

export type QueryNewsCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<NewsCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsCategory_Order_By>>;
  where?: Maybe<NewsCategory_Bool_Exp>;
};

export type QueryNewsCategory_By_PkArgs = {
  categoryId: Scalars["uuid"];
  newsId: Scalars["uuid"];
};

export type QueryNewsI18nArgs = {
  distinct_on?: Maybe<Array<NewsI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsI18n_Order_By>>;
  where?: Maybe<NewsI18n_Bool_Exp>;
};

export type QueryNewsI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<NewsI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsI18n_Order_By>>;
  where?: Maybe<NewsI18n_Bool_Exp>;
};

export type QueryNewsI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryNews_AggregateArgs = {
  distinct_on?: Maybe<Array<News_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<News_Order_By>>;
  where?: Maybe<News_Bool_Exp>;
};

export type QueryNews_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryOrderArgs = {
  distinct_on?: Maybe<Array<Order_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Order_Order_By>>;
  where?: Maybe<Order_Bool_Exp>;
};

export type QueryOrderProductArgs = {
  distinct_on?: Maybe<Array<OrderProduct_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<OrderProduct_Order_By>>;
  where?: Maybe<OrderProduct_Bool_Exp>;
};

export type QueryOrderProduct_AggregateArgs = {
  distinct_on?: Maybe<Array<OrderProduct_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<OrderProduct_Order_By>>;
  where?: Maybe<OrderProduct_Bool_Exp>;
};

export type QueryOrderProduct_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryOrder_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Order_Order_By>>;
  where?: Maybe<Order_Bool_Exp>;
};

export type QueryOrder_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryPageArgs = {
  distinct_on?: Maybe<Array<Page_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Page_Order_By>>;
  where?: Maybe<Page_Bool_Exp>;
};

export type QueryPageCategoryArgs = {
  distinct_on?: Maybe<Array<PageCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageCategory_Order_By>>;
  where?: Maybe<PageCategory_Bool_Exp>;
};

export type QueryPageCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<PageCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageCategory_Order_By>>;
  where?: Maybe<PageCategory_Bool_Exp>;
};

export type QueryPageCategory_By_PkArgs = {
  categoryId: Scalars["uuid"];
  pageId: Scalars["uuid"];
};

export type QueryPageI18nArgs = {
  distinct_on?: Maybe<Array<PageI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageI18n_Order_By>>;
  where?: Maybe<PageI18n_Bool_Exp>;
};

export type QueryPageI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<PageI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageI18n_Order_By>>;
  where?: Maybe<PageI18n_Bool_Exp>;
};

export type QueryPageI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryPage_AggregateArgs = {
  distinct_on?: Maybe<Array<Page_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Page_Order_By>>;
  where?: Maybe<Page_Bool_Exp>;
};

export type QueryPage_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryPaymentArgs = {
  distinct_on?: Maybe<Array<Payment_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Order_By>>;
  where?: Maybe<Payment_Bool_Exp>;
};

export type QueryPayment_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Order_By>>;
  where?: Maybe<Payment_Bool_Exp>;
};

export type QueryPayment_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryProvenanceArgs = {
  distinct_on?: Maybe<Array<Provenance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Provenance_Order_By>>;
  where?: Maybe<Provenance_Bool_Exp>;
};

export type QueryProvenanceI18nArgs = {
  distinct_on?: Maybe<Array<ProvenanceI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ProvenanceI18n_Order_By>>;
  where?: Maybe<ProvenanceI18n_Bool_Exp>;
};

export type QueryProvenanceI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<ProvenanceI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ProvenanceI18n_Order_By>>;
  where?: Maybe<ProvenanceI18n_Bool_Exp>;
};

export type QueryProvenanceI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryProvenance_AggregateArgs = {
  distinct_on?: Maybe<Array<Provenance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Provenance_Order_By>>;
  where?: Maybe<Provenance_Bool_Exp>;
};

export type QueryProvenance_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QuerySchoolArgs = {
  distinct_on?: Maybe<Array<School_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<School_Order_By>>;
  where?: Maybe<School_Bool_Exp>;
};

export type QuerySchoolI18nArgs = {
  distinct_on?: Maybe<Array<SchoolI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SchoolI18n_Order_By>>;
  where?: Maybe<SchoolI18n_Bool_Exp>;
};

export type QuerySchoolI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<SchoolI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SchoolI18n_Order_By>>;
  where?: Maybe<SchoolI18n_Bool_Exp>;
};

export type QuerySchoolI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QuerySchool_AggregateArgs = {
  distinct_on?: Maybe<Array<School_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<School_Order_By>>;
  where?: Maybe<School_Bool_Exp>;
};

export type QuerySchool_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QuerySliderArgs = {
  distinct_on?: Maybe<Array<Slider_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Slider_Order_By>>;
  where?: Maybe<Slider_Bool_Exp>;
};

export type QuerySliderI18nArgs = {
  distinct_on?: Maybe<Array<SliderI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SliderI18n_Order_By>>;
  where?: Maybe<SliderI18n_Bool_Exp>;
};

export type QuerySliderI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<SliderI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SliderI18n_Order_By>>;
  where?: Maybe<SliderI18n_Bool_Exp>;
};

export type QuerySliderI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QuerySlider_AggregateArgs = {
  distinct_on?: Maybe<Array<Slider_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Slider_Order_By>>;
  where?: Maybe<Slider_Bool_Exp>;
};

export type QuerySlider_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};

export type QueryTagI18nArgs = {
  distinct_on?: Maybe<Array<TagI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TagI18n_Order_By>>;
  where?: Maybe<TagI18n_Bool_Exp>;
};

export type QueryTagI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<TagI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TagI18n_Order_By>>;
  where?: Maybe<TagI18n_Bool_Exp>;
};

export type QueryTagI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryTag_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};

export type QueryTag_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryTechniqueArgs = {
  distinct_on?: Maybe<Array<Technique_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Technique_Order_By>>;
  where?: Maybe<Technique_Bool_Exp>;
};

export type QueryTechniqueI18nArgs = {
  distinct_on?: Maybe<Array<TechniqueI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TechniqueI18n_Order_By>>;
  where?: Maybe<TechniqueI18n_Bool_Exp>;
};

export type QueryTechniqueI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<TechniqueI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TechniqueI18n_Order_By>>;
  where?: Maybe<TechniqueI18n_Bool_Exp>;
};

export type QueryTechniqueI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryTechnique_AggregateArgs = {
  distinct_on?: Maybe<Array<Technique_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Technique_Order_By>>;
  where?: Maybe<Technique_Bool_Exp>;
};

export type QueryTechnique_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryTranslationArgs = {
  distinct_on?: Maybe<Array<Translation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Translation_Order_By>>;
  where?: Maybe<Translation_Bool_Exp>;
};

export type QueryTranslation_AggregateArgs = {
  distinct_on?: Maybe<Array<Translation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Translation_Order_By>>;
  where?: Maybe<Translation_Bool_Exp>;
};

export type QueryTranslation_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type QueryUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type QueryUser_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryWorkArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};

export type QueryWorkCategoryArgs = {
  distinct_on?: Maybe<Array<WorkCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkCategory_Order_By>>;
  where?: Maybe<WorkCategory_Bool_Exp>;
};

export type QueryWorkCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<WorkCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkCategory_Order_By>>;
  where?: Maybe<WorkCategory_Bool_Exp>;
};

export type QueryWorkCategory_By_PkArgs = {
  categoryId: Scalars["uuid"];
  workId: Scalars["uuid"];
};

export type QueryWorkI18nArgs = {
  distinct_on?: Maybe<Array<WorkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkI18n_Order_By>>;
  where?: Maybe<WorkI18n_Bool_Exp>;
};

export type QueryWorkI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<WorkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkI18n_Order_By>>;
  where?: Maybe<WorkI18n_Bool_Exp>;
};

export type QueryWorkI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QueryWork_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};

export type QueryWork_By_PkArgs = {
  id: Scalars["uuid"];
};

export type QuerySearchArgs = {
  where: SearchWhereExp;
};

export type QueryBreadcrumbsArgs = {
  slug: Scalars["String"];
};

/** columns and relationships of "school" */
export type School = {
  __typename?: "school";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An array relationship */
  translations: Array<SchoolI18n>;
  /** An aggregated array relationship */
  translations_aggregate: SchoolI18n_Aggregate;
  /** An array relationship */
  works: Array<Work>;
  /** An aggregated array relationship */
  works_aggregate: Work_Aggregate;
};

/** columns and relationships of "school" */
export type SchoolTranslationsArgs = {
  distinct_on?: Maybe<Array<SchoolI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SchoolI18n_Order_By>>;
  where?: Maybe<SchoolI18n_Bool_Exp>;
};

/** columns and relationships of "school" */
export type SchoolTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<SchoolI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SchoolI18n_Order_By>>;
  where?: Maybe<SchoolI18n_Bool_Exp>;
};

/** columns and relationships of "school" */
export type SchoolWorksArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};

/** columns and relationships of "school" */
export type SchoolWorks_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};

/** aggregated selection of "school" */
export type School_Aggregate = {
  __typename?: "school_aggregate";
  aggregate?: Maybe<School_Aggregate_Fields>;
  nodes: Array<School>;
};

/** aggregate fields of "school" */
export type School_Aggregate_Fields = {
  __typename?: "school_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<School_Max_Fields>;
  min?: Maybe<School_Min_Fields>;
};

/** aggregate fields of "school" */
export type School_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<School_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "school" */
export type School_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<School_Max_Order_By>;
  min?: Maybe<School_Min_Order_By>;
};

/** input type for inserting array relation for remote table "school" */
export type School_Arr_Rel_Insert_Input = {
  data: Array<School_Insert_Input>;
  on_conflict?: Maybe<School_On_Conflict>;
};

/** Boolean expression to filter rows from the table "school". All fields are combined with a logical 'AND'. */
export type School_Bool_Exp = {
  _and?: Maybe<Array<Maybe<School_Bool_Exp>>>;
  _not?: Maybe<School_Bool_Exp>;
  _or?: Maybe<Array<Maybe<School_Bool_Exp>>>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  translations?: Maybe<SchoolI18n_Bool_Exp>;
  works?: Maybe<Work_Bool_Exp>;
};

/** unique or primary key constraints on table "school" */
export enum School_Constraint {
  /** unique or primary key constraint */
  Pk_57836c3fe2f2c7734b20911755e = "PK_57836c3fe2f2c7734b20911755e"
}

/** input type for inserting data into table "school" */
export type School_Insert_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  translations?: Maybe<SchoolI18n_Arr_Rel_Insert_Input>;
  works?: Maybe<Work_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type School_Max_Fields = {
  __typename?: "school_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "school" */
export type School_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type School_Min_Fields = {
  __typename?: "school_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "school" */
export type School_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "school" */
export type School_Mutation_Response = {
  __typename?: "school_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<School>;
};

/** input type for inserting object relation for remote table "school" */
export type School_Obj_Rel_Insert_Input = {
  data: School_Insert_Input;
  on_conflict?: Maybe<School_On_Conflict>;
};

/** on conflict condition type for table "school" */
export type School_On_Conflict = {
  constraint: School_Constraint;
  update_columns: Array<School_Update_Column>;
};

/** ordering options when selecting data from "school" */
export type School_Order_By = {
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  translations_aggregate?: Maybe<SchoolI18n_Aggregate_Order_By>;
  works_aggregate?: Maybe<Work_Aggregate_Order_By>;
};

/** select columns of table "school" */
export enum School_Select_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id"
}

/** input type for updating data in table "school" */
export type School_Set_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "school" */
export enum School_Update_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id"
}

/** columns and relationships of "schoolI18n" */
export type SchoolI18n = {
  __typename?: "schoolI18n";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  name: Scalars["String"];
  /** An object relationship */
  school: School;
  schoolId: Scalars["uuid"];
};

/** aggregated selection of "schoolI18n" */
export type SchoolI18n_Aggregate = {
  __typename?: "schoolI18n_aggregate";
  aggregate?: Maybe<SchoolI18n_Aggregate_Fields>;
  nodes: Array<SchoolI18n>;
};

/** aggregate fields of "schoolI18n" */
export type SchoolI18n_Aggregate_Fields = {
  __typename?: "schoolI18n_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<SchoolI18n_Max_Fields>;
  min?: Maybe<SchoolI18n_Min_Fields>;
};

/** aggregate fields of "schoolI18n" */
export type SchoolI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<SchoolI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "schoolI18n" */
export type SchoolI18n_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<SchoolI18n_Max_Order_By>;
  min?: Maybe<SchoolI18n_Min_Order_By>;
};

/** input type for inserting array relation for remote table "schoolI18n" */
export type SchoolI18n_Arr_Rel_Insert_Input = {
  data: Array<SchoolI18n_Insert_Input>;
  on_conflict?: Maybe<SchoolI18n_On_Conflict>;
};

/** Boolean expression to filter rows from the table "schoolI18n". All fields are combined with a logical 'AND'. */
export type SchoolI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<SchoolI18n_Bool_Exp>>>;
  _not?: Maybe<SchoolI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<SchoolI18n_Bool_Exp>>>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<Varchar_Comparison_Exp>;
  school?: Maybe<School_Bool_Exp>;
  schoolId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "schoolI18n" */
export enum SchoolI18n_Constraint {
  /** unique or primary key constraint */
  PkE437fa79e5b91d15647aec92d4e = "PK_e437fa79e5b91d15647aec92d4e"
}

/** input type for inserting data into table "schoolI18n" */
export type SchoolI18n_Insert_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  school?: Maybe<School_Obj_Rel_Insert_Input>;
  schoolId?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type SchoolI18n_Max_Fields = {
  __typename?: "schoolI18n_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "schoolI18n" */
export type SchoolI18n_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type SchoolI18n_Min_Fields = {
  __typename?: "schoolI18n_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "schoolI18n" */
export type SchoolI18n_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "schoolI18n" */
export type SchoolI18n_Mutation_Response = {
  __typename?: "schoolI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<SchoolI18n>;
};

/** input type for inserting object relation for remote table "schoolI18n" */
export type SchoolI18n_Obj_Rel_Insert_Input = {
  data: SchoolI18n_Insert_Input;
  on_conflict?: Maybe<SchoolI18n_On_Conflict>;
};

/** on conflict condition type for table "schoolI18n" */
export type SchoolI18n_On_Conflict = {
  constraint: SchoolI18n_Constraint;
  update_columns: Array<SchoolI18n_Update_Column>;
};

/** ordering options when selecting data from "schoolI18n" */
export type SchoolI18n_Order_By = {
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  school?: Maybe<School_Order_By>;
  schoolId?: Maybe<Order_By>;
};

/** select columns of table "schoolI18n" */
export enum SchoolI18n_Select_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Name = "name",
  /** column name */
  SchoolId = "schoolId"
}

/** input type for updating data in table "schoolI18n" */
export type SchoolI18n_Set_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  schoolId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "schoolI18n" */
export enum SchoolI18n_Update_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Name = "name",
  /** column name */
  SchoolId = "schoolId"
}

export type SearchResultData = {
  __typename?: "SearchResultData";
  slug: Scalars["String"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type SearchWhereExp = {
  value: Scalars["String"];
  localeId: Scalars["String"];
  offset?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

/** columns and relationships of "slider" */
export type Slider = {
  __typename?: "slider";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  files: Scalars["jsonb"];
  id: Scalars["uuid"];
  position?: Maybe<Scalars["smallint"]>;
  /** An array relationship */
  translations: Array<SliderI18n>;
  /** An aggregated array relationship */
  translations_aggregate: SliderI18n_Aggregate;
};

/** columns and relationships of "slider" */
export type SliderFilesArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "slider" */
export type SliderTranslationsArgs = {
  distinct_on?: Maybe<Array<SliderI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SliderI18n_Order_By>>;
  where?: Maybe<SliderI18n_Bool_Exp>;
};

/** columns and relationships of "slider" */
export type SliderTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<SliderI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SliderI18n_Order_By>>;
  where?: Maybe<SliderI18n_Bool_Exp>;
};

/** aggregated selection of "slider" */
export type Slider_Aggregate = {
  __typename?: "slider_aggregate";
  aggregate?: Maybe<Slider_Aggregate_Fields>;
  nodes: Array<Slider>;
};

/** aggregate fields of "slider" */
export type Slider_Aggregate_Fields = {
  __typename?: "slider_aggregate_fields";
  avg?: Maybe<Slider_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Slider_Max_Fields>;
  min?: Maybe<Slider_Min_Fields>;
  stddev?: Maybe<Slider_Stddev_Fields>;
  stddev_pop?: Maybe<Slider_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Slider_Stddev_Samp_Fields>;
  sum?: Maybe<Slider_Sum_Fields>;
  var_pop?: Maybe<Slider_Var_Pop_Fields>;
  var_samp?: Maybe<Slider_Var_Samp_Fields>;
  variance?: Maybe<Slider_Variance_Fields>;
};

/** aggregate fields of "slider" */
export type Slider_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Slider_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "slider" */
export type Slider_Aggregate_Order_By = {
  avg?: Maybe<Slider_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Slider_Max_Order_By>;
  min?: Maybe<Slider_Min_Order_By>;
  stddev?: Maybe<Slider_Stddev_Order_By>;
  stddev_pop?: Maybe<Slider_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Slider_Stddev_Samp_Order_By>;
  sum?: Maybe<Slider_Sum_Order_By>;
  var_pop?: Maybe<Slider_Var_Pop_Order_By>;
  var_samp?: Maybe<Slider_Var_Samp_Order_By>;
  variance?: Maybe<Slider_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Slider_Append_Input = {
  files?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "slider" */
export type Slider_Arr_Rel_Insert_Input = {
  data: Array<Slider_Insert_Input>;
  on_conflict?: Maybe<Slider_On_Conflict>;
};

/** aggregate avg on columns */
export type Slider_Avg_Fields = {
  __typename?: "slider_avg_fields";
  position?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "slider" */
export type Slider_Avg_Order_By = {
  position?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slider". All fields are combined with a logical 'AND'. */
export type Slider_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Slider_Bool_Exp>>>;
  _not?: Maybe<Slider_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Slider_Bool_Exp>>>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  files?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  position?: Maybe<Smallint_Comparison_Exp>;
  translations?: Maybe<SliderI18n_Bool_Exp>;
};

/** unique or primary key constraints on table "slider" */
export enum Slider_Constraint {
  /** unique or primary key constraint */
  PkAe59f1b572454f8251212e2d3dc = "PK_ae59f1b572454f8251212e2d3dc"
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Slider_Delete_At_Path_Input = {
  files?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Slider_Delete_Elem_Input = {
  files?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Slider_Delete_Key_Input = {
  files?: Maybe<Scalars["String"]>;
};

/** input type for incrementing integer columne in table "slider" */
export type Slider_Inc_Input = {
  position?: Maybe<Scalars["smallint"]>;
};

/** input type for inserting data into table "slider" */
export type Slider_Insert_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  files?: Maybe<Scalars["jsonb"]>;
  id?: Maybe<Scalars["uuid"]>;
  position?: Maybe<Scalars["smallint"]>;
  translations?: Maybe<SliderI18n_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Slider_Max_Fields = {
  __typename?: "slider_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  position?: Maybe<Scalars["smallint"]>;
};

/** order by max() on columns of table "slider" */
export type Slider_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Slider_Min_Fields = {
  __typename?: "slider_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  position?: Maybe<Scalars["smallint"]>;
};

/** order by min() on columns of table "slider" */
export type Slider_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** response of any mutation on the table "slider" */
export type Slider_Mutation_Response = {
  __typename?: "slider_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Slider>;
};

/** input type for inserting object relation for remote table "slider" */
export type Slider_Obj_Rel_Insert_Input = {
  data: Slider_Insert_Input;
  on_conflict?: Maybe<Slider_On_Conflict>;
};

/** on conflict condition type for table "slider" */
export type Slider_On_Conflict = {
  constraint: Slider_Constraint;
  update_columns: Array<Slider_Update_Column>;
};

/** ordering options when selecting data from "slider" */
export type Slider_Order_By = {
  deletedAt?: Maybe<Order_By>;
  files?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  translations_aggregate?: Maybe<SliderI18n_Aggregate_Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Slider_Prepend_Input = {
  files?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "slider" */
export enum Slider_Select_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Files = "files",
  /** column name */
  Id = "id",
  /** column name */
  Position = "position"
}

/** input type for updating data in table "slider" */
export type Slider_Set_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  files?: Maybe<Scalars["jsonb"]>;
  id?: Maybe<Scalars["uuid"]>;
  position?: Maybe<Scalars["smallint"]>;
};

/** aggregate stddev on columns */
export type Slider_Stddev_Fields = {
  __typename?: "slider_stddev_fields";
  position?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "slider" */
export type Slider_Stddev_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Slider_Stddev_Pop_Fields = {
  __typename?: "slider_stddev_pop_fields";
  position?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "slider" */
export type Slider_Stddev_Pop_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Slider_Stddev_Samp_Fields = {
  __typename?: "slider_stddev_samp_fields";
  position?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "slider" */
export type Slider_Stddev_Samp_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Slider_Sum_Fields = {
  __typename?: "slider_sum_fields";
  position?: Maybe<Scalars["smallint"]>;
};

/** order by sum() on columns of table "slider" */
export type Slider_Sum_Order_By = {
  position?: Maybe<Order_By>;
};

/** update columns of table "slider" */
export enum Slider_Update_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Files = "files",
  /** column name */
  Id = "id",
  /** column name */
  Position = "position"
}

/** aggregate var_pop on columns */
export type Slider_Var_Pop_Fields = {
  __typename?: "slider_var_pop_fields";
  position?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "slider" */
export type Slider_Var_Pop_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Slider_Var_Samp_Fields = {
  __typename?: "slider_var_samp_fields";
  position?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "slider" */
export type Slider_Var_Samp_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Slider_Variance_Fields = {
  __typename?: "slider_variance_fields";
  position?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "slider" */
export type Slider_Variance_Order_By = {
  position?: Maybe<Order_By>;
};

/** columns and relationships of "sliderI18n" */
export type SliderI18n = {
  __typename?: "sliderI18n";
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  /** An object relationship */
  slider: Slider;
  sliderId: Scalars["uuid"];
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "sliderI18n" */
export type SliderI18n_Aggregate = {
  __typename?: "sliderI18n_aggregate";
  aggregate?: Maybe<SliderI18n_Aggregate_Fields>;
  nodes: Array<SliderI18n>;
};

/** aggregate fields of "sliderI18n" */
export type SliderI18n_Aggregate_Fields = {
  __typename?: "sliderI18n_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<SliderI18n_Max_Fields>;
  min?: Maybe<SliderI18n_Min_Fields>;
};

/** aggregate fields of "sliderI18n" */
export type SliderI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<SliderI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "sliderI18n" */
export type SliderI18n_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<SliderI18n_Max_Order_By>;
  min?: Maybe<SliderI18n_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sliderI18n" */
export type SliderI18n_Arr_Rel_Insert_Input = {
  data: Array<SliderI18n_Insert_Input>;
  on_conflict?: Maybe<SliderI18n_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sliderI18n". All fields are combined with a logical 'AND'. */
export type SliderI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<SliderI18n_Bool_Exp>>>;
  _not?: Maybe<SliderI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<SliderI18n_Bool_Exp>>>;
  body?: Maybe<Varchar_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  slider?: Maybe<Slider_Bool_Exp>;
  sliderId?: Maybe<Uuid_Comparison_Exp>;
  slug?: Maybe<Varchar_Comparison_Exp>;
  title?: Maybe<Varchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "sliderI18n" */
export enum SliderI18n_Constraint {
  /** unique or primary key constraint */
  Pk_3d799504c4015463943f0ff4a08 = "PK_3d799504c4015463943f0ff4a08",
  /** unique or primary key constraint */
  Uq_839e449b94adcc2f4cdadaf8911 = "UQ_839e449b94adcc2f4cdadaf8911"
}

/** input type for inserting data into table "sliderI18n" */
export type SliderI18n_Insert_Input = {
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  slider?: Maybe<Slider_Obj_Rel_Insert_Input>;
  sliderId?: Maybe<Scalars["uuid"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type SliderI18n_Max_Fields = {
  __typename?: "sliderI18n_max_fields";
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "sliderI18n" */
export type SliderI18n_Max_Order_By = {
  body?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type SliderI18n_Min_Fields = {
  __typename?: "sliderI18n_min_fields";
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "sliderI18n" */
export type SliderI18n_Min_Order_By = {
  body?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "sliderI18n" */
export type SliderI18n_Mutation_Response = {
  __typename?: "sliderI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<SliderI18n>;
};

/** input type for inserting object relation for remote table "sliderI18n" */
export type SliderI18n_Obj_Rel_Insert_Input = {
  data: SliderI18n_Insert_Input;
  on_conflict?: Maybe<SliderI18n_On_Conflict>;
};

/** on conflict condition type for table "sliderI18n" */
export type SliderI18n_On_Conflict = {
  constraint: SliderI18n_Constraint;
  update_columns: Array<SliderI18n_Update_Column>;
};

/** ordering options when selecting data from "sliderI18n" */
export type SliderI18n_Order_By = {
  body?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  slider?: Maybe<Slider_Order_By>;
  sliderId?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** select columns of table "sliderI18n" */
export enum SliderI18n_Select_Column {
  /** column name */
  Body = "body",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  SliderId = "sliderId",
  /** column name */
  Slug = "slug",
  /** column name */
  Title = "title"
}

/** input type for updating data in table "sliderI18n" */
export type SliderI18n_Set_Input = {
  body?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  sliderId?: Maybe<Scalars["uuid"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** update columns of table "sliderI18n" */
export enum SliderI18n_Update_Column {
  /** column name */
  Body = "body",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  SliderId = "sliderId",
  /** column name */
  Slug = "slug",
  /** column name */
  Title = "title"
}

/** expression to compare columns of type smallint. All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars["smallint"]>;
  _gt?: Maybe<Scalars["smallint"]>;
  _gte?: Maybe<Scalars["smallint"]>;
  _in?: Maybe<Array<Scalars["smallint"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["smallint"]>;
  _lte?: Maybe<Scalars["smallint"]>;
  _neq?: Maybe<Scalars["smallint"]>;
  _nin?: Maybe<Array<Scalars["smallint"]>>;
};

export type Subscription = {
  __typename?: "Subscription";
  /** fetch data from the table: "artist" */
  artist: Array<Artist>;
  /** fetch data from the table: "artistCategory" */
  artistCategory: Array<ArtistCategory>;
  /** fetch aggregated fields from the table: "artistCategory" */
  artistCategory_aggregate: ArtistCategory_Aggregate;
  /** fetch data from the table: "artistCategory" using primary key columns */
  artistCategory_by_pk?: Maybe<ArtistCategory>;
  /** fetch data from the table: "artistI18n" */
  artistI18n: Array<ArtistI18n>;
  /** fetch aggregated fields from the table: "artistI18n" */
  artistI18n_aggregate: ArtistI18n_Aggregate;
  /** fetch data from the table: "artistI18n" using primary key columns */
  artistI18n_by_pk?: Maybe<ArtistI18n>;
  /** fetch aggregated fields from the table: "artist" */
  artist_aggregate: Artist_Aggregate;
  /** fetch data from the table: "artist" using primary key columns */
  artist_by_pk?: Maybe<Artist>;
  /** fetch data from the table: "basis" */
  basis: Array<Basis>;
  /** fetch data from the table: "basisI18n" */
  basisI18n: Array<BasisI18n>;
  /** fetch aggregated fields from the table: "basisI18n" */
  basisI18n_aggregate: BasisI18n_Aggregate;
  /** fetch data from the table: "basisI18n" using primary key columns */
  basisI18n_by_pk?: Maybe<BasisI18n>;
  /** fetch aggregated fields from the table: "basis" */
  basis_aggregate: Basis_Aggregate;
  /** fetch data from the table: "basis" using primary key columns */
  basis_by_pk?: Maybe<Basis>;
  /** fetch data from the table: "cart" */
  cart: Array<Cart>;
  /** fetch aggregated fields from the table: "cart" */
  cart_aggregate: Cart_Aggregate;
  /** fetch data from the table: "cart" using primary key columns */
  cart_by_pk?: Maybe<Cart>;
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch data from the table: "categoryI18n" */
  categoryI18n: Array<CategoryI18n>;
  /** fetch aggregated fields from the table: "categoryI18n" */
  categoryI18n_aggregate: CategoryI18n_Aggregate;
  /** fetch data from the table: "categoryI18n" using primary key columns */
  categoryI18n_by_pk?: Maybe<CategoryI18n>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "category_closure" */
  category_closure: Array<Category_Closure>;
  /** fetch aggregated fields from the table: "category_closure" */
  category_closure_aggregate: Category_Closure_Aggregate;
  /** fetch data from the table: "category_closure" using primary key columns */
  category_closure_by_pk?: Maybe<Category_Closure>;
  /** fetch data from the table: "config" */
  config: Array<Config>;
  /** fetch aggregated fields from the table: "config" */
  config_aggregate: Config_Aggregate;
  /** fetch data from the table: "config" using primary key columns */
  config_by_pk?: Maybe<Config>;
  /** fetch data from the table: "customField" */
  customField: Array<CustomField>;
  /** fetch data from the table: "customFieldI18n" */
  customFieldI18n: Array<CustomFieldI18n>;
  /** fetch aggregated fields from the table: "customFieldI18n" */
  customFieldI18n_aggregate: CustomFieldI18n_Aggregate;
  /** fetch data from the table: "customFieldI18n" using primary key columns */
  customFieldI18n_by_pk?: Maybe<CustomFieldI18n>;
  /** fetch data from the table: "customFieldWork" */
  customFieldWork: Array<CustomFieldWork>;
  /** fetch aggregated fields from the table: "customFieldWork" */
  customFieldWork_aggregate: CustomFieldWork_Aggregate;
  /** fetch data from the table: "customFieldWork" using primary key columns */
  customFieldWork_by_pk?: Maybe<CustomFieldWork>;
  /** fetch aggregated fields from the table: "customField" */
  customField_aggregate: CustomField_Aggregate;
  /** fetch data from the table: "customField" using primary key columns */
  customField_by_pk?: Maybe<CustomField>;
  /** fetch data from the table: "exhibition" */
  exhibition: Array<Exhibition>;
  /** fetch data from the table: "exhibitionCategory" */
  exhibitionCategory: Array<ExhibitionCategory>;
  /** fetch aggregated fields from the table: "exhibitionCategory" */
  exhibitionCategory_aggregate: ExhibitionCategory_Aggregate;
  /** fetch data from the table: "exhibitionCategory" using primary key columns */
  exhibitionCategory_by_pk?: Maybe<ExhibitionCategory>;
  /** fetch data from the table: "exhibitionI18n" */
  exhibitionI18n: Array<ExhibitionI18n>;
  /** fetch aggregated fields from the table: "exhibitionI18n" */
  exhibitionI18n_aggregate: ExhibitionI18n_Aggregate;
  /** fetch data from the table: "exhibitionI18n" using primary key columns */
  exhibitionI18n_by_pk?: Maybe<ExhibitionI18n>;
  /** fetch data from the table: "exhibitionWork" */
  exhibitionWork: Array<ExhibitionWork>;
  /** fetch aggregated fields from the table: "exhibitionWork" */
  exhibitionWork_aggregate: ExhibitionWork_Aggregate;
  /** fetch data from the table: "exhibitionWork" using primary key columns */
  exhibitionWork_by_pk?: Maybe<ExhibitionWork>;
  /** fetch aggregated fields from the table: "exhibition" */
  exhibition_aggregate: Exhibition_Aggregate;
  /** fetch data from the table: "exhibition" using primary key columns */
  exhibition_by_pk?: Maybe<Exhibition>;
  /** fetch data from the table: "fileI18n" */
  fileI18n: Array<FileI18n>;
  /** fetch aggregated fields from the table: "fileI18n" */
  fileI18n_aggregate: FileI18n_Aggregate;
  /** fetch data from the table: "fileI18n" using primary key columns */
  fileI18n_by_pk?: Maybe<FileI18n>;
  /** fetch data from the table: "link" */
  link: Array<Link>;
  /** fetch data from the table: "linkI18n" */
  linkI18n: Array<LinkI18n>;
  /** fetch aggregated fields from the table: "linkI18n" */
  linkI18n_aggregate: LinkI18n_Aggregate;
  /** fetch data from the table: "linkI18n" using primary key columns */
  linkI18n_by_pk?: Maybe<LinkI18n>;
  /** fetch aggregated fields from the table: "link" */
  link_aggregate: Link_Aggregate;
  /** fetch data from the table: "link" using primary key columns */
  link_by_pk?: Maybe<Link>;
  /** fetch data from the table: "locale" */
  locale: Array<Locale>;
  /** fetch aggregated fields from the table: "locale" */
  locale_aggregate: Locale_Aggregate;
  /** fetch data from the table: "locale" using primary key columns */
  locale_by_pk?: Maybe<Locale>;
  /** fetch data from the table: "navigation" */
  navigation: Array<Navigation>;
  /** fetch data from the table: "navigationI18n" */
  navigationI18n: Array<NavigationI18n>;
  /** fetch aggregated fields from the table: "navigationI18n" */
  navigationI18n_aggregate: NavigationI18n_Aggregate;
  /** fetch data from the table: "navigationI18n" using primary key columns */
  navigationI18n_by_pk?: Maybe<NavigationI18n>;
  /** fetch aggregated fields from the table: "navigation" */
  navigation_aggregate: Navigation_Aggregate;
  /** fetch data from the table: "navigation" using primary key columns */
  navigation_by_pk?: Maybe<Navigation>;
  /** fetch data from the table: "news" */
  news: Array<News>;
  /** fetch data from the table: "newsCategory" */
  newsCategory: Array<NewsCategory>;
  /** fetch aggregated fields from the table: "newsCategory" */
  newsCategory_aggregate: NewsCategory_Aggregate;
  /** fetch data from the table: "newsCategory" using primary key columns */
  newsCategory_by_pk?: Maybe<NewsCategory>;
  /** fetch data from the table: "newsI18n" */
  newsI18n: Array<NewsI18n>;
  /** fetch aggregated fields from the table: "newsI18n" */
  newsI18n_aggregate: NewsI18n_Aggregate;
  /** fetch data from the table: "newsI18n" using primary key columns */
  newsI18n_by_pk?: Maybe<NewsI18n>;
  /** fetch aggregated fields from the table: "news" */
  news_aggregate: News_Aggregate;
  /** fetch data from the table: "news" using primary key columns */
  news_by_pk?: Maybe<News>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch data from the table: "orderProduct" */
  orderProduct: Array<OrderProduct>;
  /** fetch aggregated fields from the table: "orderProduct" */
  orderProduct_aggregate: OrderProduct_Aggregate;
  /** fetch data from the table: "orderProduct" using primary key columns */
  orderProduct_by_pk?: Maybe<OrderProduct>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "page" */
  page: Array<Page>;
  /** fetch data from the table: "pageCategory" */
  pageCategory: Array<PageCategory>;
  /** fetch aggregated fields from the table: "pageCategory" */
  pageCategory_aggregate: PageCategory_Aggregate;
  /** fetch data from the table: "pageCategory" using primary key columns */
  pageCategory_by_pk?: Maybe<PageCategory>;
  /** fetch data from the table: "pageI18n" */
  pageI18n: Array<PageI18n>;
  /** fetch aggregated fields from the table: "pageI18n" */
  pageI18n_aggregate: PageI18n_Aggregate;
  /** fetch data from the table: "pageI18n" using primary key columns */
  pageI18n_by_pk?: Maybe<PageI18n>;
  /** fetch aggregated fields from the table: "page" */
  page_aggregate: Page_Aggregate;
  /** fetch data from the table: "page" using primary key columns */
  page_by_pk?: Maybe<Page>;
  /** fetch data from the table: "payment" */
  payment: Array<Payment>;
  /** fetch aggregated fields from the table: "payment" */
  payment_aggregate: Payment_Aggregate;
  /** fetch data from the table: "payment" using primary key columns */
  payment_by_pk?: Maybe<Payment>;
  /** fetch data from the table: "provenance" */
  provenance: Array<Provenance>;
  /** fetch data from the table: "provenanceI18n" */
  provenanceI18n: Array<ProvenanceI18n>;
  /** fetch aggregated fields from the table: "provenanceI18n" */
  provenanceI18n_aggregate: ProvenanceI18n_Aggregate;
  /** fetch data from the table: "provenanceI18n" using primary key columns */
  provenanceI18n_by_pk?: Maybe<ProvenanceI18n>;
  /** fetch aggregated fields from the table: "provenance" */
  provenance_aggregate: Provenance_Aggregate;
  /** fetch data from the table: "provenance" using primary key columns */
  provenance_by_pk?: Maybe<Provenance>;
  /** fetch data from the table: "school" */
  school: Array<School>;
  /** fetch data from the table: "schoolI18n" */
  schoolI18n: Array<SchoolI18n>;
  /** fetch aggregated fields from the table: "schoolI18n" */
  schoolI18n_aggregate: SchoolI18n_Aggregate;
  /** fetch data from the table: "schoolI18n" using primary key columns */
  schoolI18n_by_pk?: Maybe<SchoolI18n>;
  /** fetch aggregated fields from the table: "school" */
  school_aggregate: School_Aggregate;
  /** fetch data from the table: "school" using primary key columns */
  school_by_pk?: Maybe<School>;
  /** fetch data from the table: "slider" */
  slider: Array<Slider>;
  /** fetch data from the table: "sliderI18n" */
  sliderI18n: Array<SliderI18n>;
  /** fetch aggregated fields from the table: "sliderI18n" */
  sliderI18n_aggregate: SliderI18n_Aggregate;
  /** fetch data from the table: "sliderI18n" using primary key columns */
  sliderI18n_by_pk?: Maybe<SliderI18n>;
  /** fetch aggregated fields from the table: "slider" */
  slider_aggregate: Slider_Aggregate;
  /** fetch data from the table: "slider" using primary key columns */
  slider_by_pk?: Maybe<Slider>;
  /** fetch data from the table: "tag" */
  tag: Array<Tag>;
  /** fetch data from the table: "tagI18n" */
  tagI18n: Array<TagI18n>;
  /** fetch aggregated fields from the table: "tagI18n" */
  tagI18n_aggregate: TagI18n_Aggregate;
  /** fetch data from the table: "tagI18n" using primary key columns */
  tagI18n_by_pk?: Maybe<TagI18n>;
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: Tag_Aggregate;
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table: "technique" */
  technique: Array<Technique>;
  /** fetch data from the table: "techniqueI18n" */
  techniqueI18n: Array<TechniqueI18n>;
  /** fetch aggregated fields from the table: "techniqueI18n" */
  techniqueI18n_aggregate: TechniqueI18n_Aggregate;
  /** fetch data from the table: "techniqueI18n" using primary key columns */
  techniqueI18n_by_pk?: Maybe<TechniqueI18n>;
  /** fetch aggregated fields from the table: "technique" */
  technique_aggregate: Technique_Aggregate;
  /** fetch data from the table: "technique" using primary key columns */
  technique_by_pk?: Maybe<Technique>;
  /** fetch data from the table: "translation" */
  translation: Array<Translation>;
  /** fetch aggregated fields from the table: "translation" */
  translation_aggregate: Translation_Aggregate;
  /** fetch data from the table: "translation" using primary key columns */
  translation_by_pk?: Maybe<Translation>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "work" */
  work: Array<Work>;
  /** fetch data from the table: "workCategory" */
  workCategory: Array<WorkCategory>;
  /** fetch aggregated fields from the table: "workCategory" */
  workCategory_aggregate: WorkCategory_Aggregate;
  /** fetch data from the table: "workCategory" using primary key columns */
  workCategory_by_pk?: Maybe<WorkCategory>;
  /** fetch data from the table: "workI18n" */
  workI18n: Array<WorkI18n>;
  /** fetch aggregated fields from the table: "workI18n" */
  workI18n_aggregate: WorkI18n_Aggregate;
  /** fetch data from the table: "workI18n" using primary key columns */
  workI18n_by_pk?: Maybe<WorkI18n>;
  /** fetch aggregated fields from the table: "work" */
  work_aggregate: Work_Aggregate;
  /** fetch data from the table: "work" using primary key columns */
  work_by_pk?: Maybe<Work>;
};

export type SubscriptionArtistArgs = {
  distinct_on?: Maybe<Array<Artist_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Artist_Order_By>>;
  where?: Maybe<Artist_Bool_Exp>;
};

export type SubscriptionArtistCategoryArgs = {
  distinct_on?: Maybe<Array<ArtistCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistCategory_Order_By>>;
  where?: Maybe<ArtistCategory_Bool_Exp>;
};

export type SubscriptionArtistCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<ArtistCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistCategory_Order_By>>;
  where?: Maybe<ArtistCategory_Bool_Exp>;
};

export type SubscriptionArtistCategory_By_PkArgs = {
  artistId: Scalars["uuid"];
  categoryId: Scalars["uuid"];
};

export type SubscriptionArtistI18nArgs = {
  distinct_on?: Maybe<Array<ArtistI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistI18n_Order_By>>;
  where?: Maybe<ArtistI18n_Bool_Exp>;
};

export type SubscriptionArtistI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<ArtistI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ArtistI18n_Order_By>>;
  where?: Maybe<ArtistI18n_Bool_Exp>;
};

export type SubscriptionArtistI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionArtist_AggregateArgs = {
  distinct_on?: Maybe<Array<Artist_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Artist_Order_By>>;
  where?: Maybe<Artist_Bool_Exp>;
};

export type SubscriptionArtist_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionBasisArgs = {
  distinct_on?: Maybe<Array<Basis_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Basis_Order_By>>;
  where?: Maybe<Basis_Bool_Exp>;
};

export type SubscriptionBasisI18nArgs = {
  distinct_on?: Maybe<Array<BasisI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BasisI18n_Order_By>>;
  where?: Maybe<BasisI18n_Bool_Exp>;
};

export type SubscriptionBasisI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<BasisI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<BasisI18n_Order_By>>;
  where?: Maybe<BasisI18n_Bool_Exp>;
};

export type SubscriptionBasisI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionBasis_AggregateArgs = {
  distinct_on?: Maybe<Array<Basis_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Basis_Order_By>>;
  where?: Maybe<Basis_Bool_Exp>;
};

export type SubscriptionBasis_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionCartArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};

export type SubscriptionCart_AggregateArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};

export type SubscriptionCart_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionCategoryArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};

export type SubscriptionCategoryI18nArgs = {
  distinct_on?: Maybe<Array<CategoryI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CategoryI18n_Order_By>>;
  where?: Maybe<CategoryI18n_Bool_Exp>;
};

export type SubscriptionCategoryI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<CategoryI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CategoryI18n_Order_By>>;
  where?: Maybe<CategoryI18n_Bool_Exp>;
};

export type SubscriptionCategoryI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};

export type SubscriptionCategory_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionCategory_ClosureArgs = {
  distinct_on?: Maybe<Array<Category_Closure_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Category_Closure_Order_By>>;
  where?: Maybe<Category_Closure_Bool_Exp>;
};

export type SubscriptionCategory_Closure_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Closure_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Category_Closure_Order_By>>;
  where?: Maybe<Category_Closure_Bool_Exp>;
};

export type SubscriptionCategory_Closure_By_PkArgs = {
  id_ancestor: Scalars["uuid"];
  id_descendant: Scalars["uuid"];
};

export type SubscriptionConfigArgs = {
  distinct_on?: Maybe<Array<Config_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Config_Order_By>>;
  where?: Maybe<Config_Bool_Exp>;
};

export type SubscriptionConfig_AggregateArgs = {
  distinct_on?: Maybe<Array<Config_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Config_Order_By>>;
  where?: Maybe<Config_Bool_Exp>;
};

export type SubscriptionConfig_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionCustomFieldArgs = {
  distinct_on?: Maybe<Array<CustomField_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomField_Order_By>>;
  where?: Maybe<CustomField_Bool_Exp>;
};

export type SubscriptionCustomFieldI18nArgs = {
  distinct_on?: Maybe<Array<CustomFieldI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldI18n_Order_By>>;
  where?: Maybe<CustomFieldI18n_Bool_Exp>;
};

export type SubscriptionCustomFieldI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<CustomFieldI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldI18n_Order_By>>;
  where?: Maybe<CustomFieldI18n_Bool_Exp>;
};

export type SubscriptionCustomFieldI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionCustomFieldWorkArgs = {
  distinct_on?: Maybe<Array<CustomFieldWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldWork_Order_By>>;
  where?: Maybe<CustomFieldWork_Bool_Exp>;
};

export type SubscriptionCustomFieldWork_AggregateArgs = {
  distinct_on?: Maybe<Array<CustomFieldWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldWork_Order_By>>;
  where?: Maybe<CustomFieldWork_Bool_Exp>;
};

export type SubscriptionCustomFieldWork_By_PkArgs = {
  customFieldId: Scalars["uuid"];
  workId: Scalars["uuid"];
};

export type SubscriptionCustomField_AggregateArgs = {
  distinct_on?: Maybe<Array<CustomField_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomField_Order_By>>;
  where?: Maybe<CustomField_Bool_Exp>;
};

export type SubscriptionCustomField_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionExhibitionArgs = {
  distinct_on?: Maybe<Array<Exhibition_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Exhibition_Order_By>>;
  where?: Maybe<Exhibition_Bool_Exp>;
};

export type SubscriptionExhibitionCategoryArgs = {
  distinct_on?: Maybe<Array<ExhibitionCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionCategory_Order_By>>;
  where?: Maybe<ExhibitionCategory_Bool_Exp>;
};

export type SubscriptionExhibitionCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<ExhibitionCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionCategory_Order_By>>;
  where?: Maybe<ExhibitionCategory_Bool_Exp>;
};

export type SubscriptionExhibitionCategory_By_PkArgs = {
  categoryId: Scalars["uuid"];
  exhibitionId: Scalars["uuid"];
};

export type SubscriptionExhibitionI18nArgs = {
  distinct_on?: Maybe<Array<ExhibitionI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionI18n_Order_By>>;
  where?: Maybe<ExhibitionI18n_Bool_Exp>;
};

export type SubscriptionExhibitionI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<ExhibitionI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionI18n_Order_By>>;
  where?: Maybe<ExhibitionI18n_Bool_Exp>;
};

export type SubscriptionExhibitionI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionExhibitionWorkArgs = {
  distinct_on?: Maybe<Array<ExhibitionWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionWork_Order_By>>;
  where?: Maybe<ExhibitionWork_Bool_Exp>;
};

export type SubscriptionExhibitionWork_AggregateArgs = {
  distinct_on?: Maybe<Array<ExhibitionWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionWork_Order_By>>;
  where?: Maybe<ExhibitionWork_Bool_Exp>;
};

export type SubscriptionExhibitionWork_By_PkArgs = {
  exhibitionId: Scalars["uuid"];
  workId: Scalars["uuid"];
};

export type SubscriptionExhibition_AggregateArgs = {
  distinct_on?: Maybe<Array<Exhibition_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Exhibition_Order_By>>;
  where?: Maybe<Exhibition_Bool_Exp>;
};

export type SubscriptionExhibition_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionFileI18nArgs = {
  distinct_on?: Maybe<Array<FileI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<FileI18n_Order_By>>;
  where?: Maybe<FileI18n_Bool_Exp>;
};

export type SubscriptionFileI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<FileI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<FileI18n_Order_By>>;
  where?: Maybe<FileI18n_Bool_Exp>;
};

export type SubscriptionFileI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionLinkArgs = {
  distinct_on?: Maybe<Array<Link_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Link_Order_By>>;
  where?: Maybe<Link_Bool_Exp>;
};

export type SubscriptionLinkI18nArgs = {
  distinct_on?: Maybe<Array<LinkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LinkI18n_Order_By>>;
  where?: Maybe<LinkI18n_Bool_Exp>;
};

export type SubscriptionLinkI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<LinkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<LinkI18n_Order_By>>;
  where?: Maybe<LinkI18n_Bool_Exp>;
};

export type SubscriptionLinkI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionLink_AggregateArgs = {
  distinct_on?: Maybe<Array<Link_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Link_Order_By>>;
  where?: Maybe<Link_Bool_Exp>;
};

export type SubscriptionLink_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionLocaleArgs = {
  distinct_on?: Maybe<Array<Locale_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Locale_Order_By>>;
  where?: Maybe<Locale_Bool_Exp>;
};

export type SubscriptionLocale_AggregateArgs = {
  distinct_on?: Maybe<Array<Locale_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Locale_Order_By>>;
  where?: Maybe<Locale_Bool_Exp>;
};

export type SubscriptionLocale_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionNavigationArgs = {
  distinct_on?: Maybe<Array<Navigation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Navigation_Order_By>>;
  where?: Maybe<Navigation_Bool_Exp>;
};

export type SubscriptionNavigationI18nArgs = {
  distinct_on?: Maybe<Array<NavigationI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NavigationI18n_Order_By>>;
  where?: Maybe<NavigationI18n_Bool_Exp>;
};

export type SubscriptionNavigationI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<NavigationI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NavigationI18n_Order_By>>;
  where?: Maybe<NavigationI18n_Bool_Exp>;
};

export type SubscriptionNavigationI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionNavigation_AggregateArgs = {
  distinct_on?: Maybe<Array<Navigation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Navigation_Order_By>>;
  where?: Maybe<Navigation_Bool_Exp>;
};

export type SubscriptionNavigation_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionNewsArgs = {
  distinct_on?: Maybe<Array<News_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<News_Order_By>>;
  where?: Maybe<News_Bool_Exp>;
};

export type SubscriptionNewsCategoryArgs = {
  distinct_on?: Maybe<Array<NewsCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsCategory_Order_By>>;
  where?: Maybe<NewsCategory_Bool_Exp>;
};

export type SubscriptionNewsCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<NewsCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsCategory_Order_By>>;
  where?: Maybe<NewsCategory_Bool_Exp>;
};

export type SubscriptionNewsCategory_By_PkArgs = {
  categoryId: Scalars["uuid"];
  newsId: Scalars["uuid"];
};

export type SubscriptionNewsI18nArgs = {
  distinct_on?: Maybe<Array<NewsI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsI18n_Order_By>>;
  where?: Maybe<NewsI18n_Bool_Exp>;
};

export type SubscriptionNewsI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<NewsI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<NewsI18n_Order_By>>;
  where?: Maybe<NewsI18n_Bool_Exp>;
};

export type SubscriptionNewsI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionNews_AggregateArgs = {
  distinct_on?: Maybe<Array<News_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<News_Order_By>>;
  where?: Maybe<News_Bool_Exp>;
};

export type SubscriptionNews_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionOrderArgs = {
  distinct_on?: Maybe<Array<Order_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Order_Order_By>>;
  where?: Maybe<Order_Bool_Exp>;
};

export type SubscriptionOrderProductArgs = {
  distinct_on?: Maybe<Array<OrderProduct_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<OrderProduct_Order_By>>;
  where?: Maybe<OrderProduct_Bool_Exp>;
};

export type SubscriptionOrderProduct_AggregateArgs = {
  distinct_on?: Maybe<Array<OrderProduct_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<OrderProduct_Order_By>>;
  where?: Maybe<OrderProduct_Bool_Exp>;
};

export type SubscriptionOrderProduct_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionOrder_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Order_Order_By>>;
  where?: Maybe<Order_Bool_Exp>;
};

export type SubscriptionOrder_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionPageArgs = {
  distinct_on?: Maybe<Array<Page_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Page_Order_By>>;
  where?: Maybe<Page_Bool_Exp>;
};

export type SubscriptionPageCategoryArgs = {
  distinct_on?: Maybe<Array<PageCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageCategory_Order_By>>;
  where?: Maybe<PageCategory_Bool_Exp>;
};

export type SubscriptionPageCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<PageCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageCategory_Order_By>>;
  where?: Maybe<PageCategory_Bool_Exp>;
};

export type SubscriptionPageCategory_By_PkArgs = {
  categoryId: Scalars["uuid"];
  pageId: Scalars["uuid"];
};

export type SubscriptionPageI18nArgs = {
  distinct_on?: Maybe<Array<PageI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageI18n_Order_By>>;
  where?: Maybe<PageI18n_Bool_Exp>;
};

export type SubscriptionPageI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<PageI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<PageI18n_Order_By>>;
  where?: Maybe<PageI18n_Bool_Exp>;
};

export type SubscriptionPageI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionPage_AggregateArgs = {
  distinct_on?: Maybe<Array<Page_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Page_Order_By>>;
  where?: Maybe<Page_Bool_Exp>;
};

export type SubscriptionPage_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionPaymentArgs = {
  distinct_on?: Maybe<Array<Payment_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Order_By>>;
  where?: Maybe<Payment_Bool_Exp>;
};

export type SubscriptionPayment_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Order_By>>;
  where?: Maybe<Payment_Bool_Exp>;
};

export type SubscriptionPayment_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionProvenanceArgs = {
  distinct_on?: Maybe<Array<Provenance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Provenance_Order_By>>;
  where?: Maybe<Provenance_Bool_Exp>;
};

export type SubscriptionProvenanceI18nArgs = {
  distinct_on?: Maybe<Array<ProvenanceI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ProvenanceI18n_Order_By>>;
  where?: Maybe<ProvenanceI18n_Bool_Exp>;
};

export type SubscriptionProvenanceI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<ProvenanceI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ProvenanceI18n_Order_By>>;
  where?: Maybe<ProvenanceI18n_Bool_Exp>;
};

export type SubscriptionProvenanceI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionProvenance_AggregateArgs = {
  distinct_on?: Maybe<Array<Provenance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Provenance_Order_By>>;
  where?: Maybe<Provenance_Bool_Exp>;
};

export type SubscriptionProvenance_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionSchoolArgs = {
  distinct_on?: Maybe<Array<School_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<School_Order_By>>;
  where?: Maybe<School_Bool_Exp>;
};

export type SubscriptionSchoolI18nArgs = {
  distinct_on?: Maybe<Array<SchoolI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SchoolI18n_Order_By>>;
  where?: Maybe<SchoolI18n_Bool_Exp>;
};

export type SubscriptionSchoolI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<SchoolI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SchoolI18n_Order_By>>;
  where?: Maybe<SchoolI18n_Bool_Exp>;
};

export type SubscriptionSchoolI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionSchool_AggregateArgs = {
  distinct_on?: Maybe<Array<School_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<School_Order_By>>;
  where?: Maybe<School_Bool_Exp>;
};

export type SubscriptionSchool_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionSliderArgs = {
  distinct_on?: Maybe<Array<Slider_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Slider_Order_By>>;
  where?: Maybe<Slider_Bool_Exp>;
};

export type SubscriptionSliderI18nArgs = {
  distinct_on?: Maybe<Array<SliderI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SliderI18n_Order_By>>;
  where?: Maybe<SliderI18n_Bool_Exp>;
};

export type SubscriptionSliderI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<SliderI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<SliderI18n_Order_By>>;
  where?: Maybe<SliderI18n_Bool_Exp>;
};

export type SubscriptionSliderI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionSlider_AggregateArgs = {
  distinct_on?: Maybe<Array<Slider_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Slider_Order_By>>;
  where?: Maybe<Slider_Bool_Exp>;
};

export type SubscriptionSlider_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};

export type SubscriptionTagI18nArgs = {
  distinct_on?: Maybe<Array<TagI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TagI18n_Order_By>>;
  where?: Maybe<TagI18n_Bool_Exp>;
};

export type SubscriptionTagI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<TagI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TagI18n_Order_By>>;
  where?: Maybe<TagI18n_Bool_Exp>;
};

export type SubscriptionTagI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionTag_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};

export type SubscriptionTag_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionTechniqueArgs = {
  distinct_on?: Maybe<Array<Technique_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Technique_Order_By>>;
  where?: Maybe<Technique_Bool_Exp>;
};

export type SubscriptionTechniqueI18nArgs = {
  distinct_on?: Maybe<Array<TechniqueI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TechniqueI18n_Order_By>>;
  where?: Maybe<TechniqueI18n_Bool_Exp>;
};

export type SubscriptionTechniqueI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<TechniqueI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TechniqueI18n_Order_By>>;
  where?: Maybe<TechniqueI18n_Bool_Exp>;
};

export type SubscriptionTechniqueI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionTechnique_AggregateArgs = {
  distinct_on?: Maybe<Array<Technique_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Technique_Order_By>>;
  where?: Maybe<Technique_Bool_Exp>;
};

export type SubscriptionTechnique_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionTranslationArgs = {
  distinct_on?: Maybe<Array<Translation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Translation_Order_By>>;
  where?: Maybe<Translation_Bool_Exp>;
};

export type SubscriptionTranslation_AggregateArgs = {
  distinct_on?: Maybe<Array<Translation_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Translation_Order_By>>;
  where?: Maybe<Translation_Bool_Exp>;
};

export type SubscriptionTranslation_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type SubscriptionUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type SubscriptionUser_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionWorkArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};

export type SubscriptionWorkCategoryArgs = {
  distinct_on?: Maybe<Array<WorkCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkCategory_Order_By>>;
  where?: Maybe<WorkCategory_Bool_Exp>;
};

export type SubscriptionWorkCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<WorkCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkCategory_Order_By>>;
  where?: Maybe<WorkCategory_Bool_Exp>;
};

export type SubscriptionWorkCategory_By_PkArgs = {
  categoryId: Scalars["uuid"];
  workId: Scalars["uuid"];
};

export type SubscriptionWorkI18nArgs = {
  distinct_on?: Maybe<Array<WorkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkI18n_Order_By>>;
  where?: Maybe<WorkI18n_Bool_Exp>;
};

export type SubscriptionWorkI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<WorkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkI18n_Order_By>>;
  where?: Maybe<WorkI18n_Bool_Exp>;
};

export type SubscriptionWorkI18n_By_PkArgs = {
  id: Scalars["uuid"];
};

export type SubscriptionWork_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};

export type SubscriptionWork_By_PkArgs = {
  id: Scalars["uuid"];
};

/** columns and relationships of "tag" */
export type Tag = {
  __typename?: "tag";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  translation?: Maybe<TagI18n>;
  /** An array relationship */
  translations: Array<TagI18n>;
  /** An aggregated array relationship */
  translations_aggregate: TagI18n_Aggregate;
};

/** columns and relationships of "tag" */
export type TagTranslationsArgs = {
  distinct_on?: Maybe<Array<TagI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TagI18n_Order_By>>;
  where?: Maybe<TagI18n_Bool_Exp>;
};

/** columns and relationships of "tag" */
export type TagTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<TagI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TagI18n_Order_By>>;
  where?: Maybe<TagI18n_Bool_Exp>;
};

/** aggregated selection of "tag" */
export type Tag_Aggregate = {
  __typename?: "tag_aggregate";
  aggregate?: Maybe<Tag_Aggregate_Fields>;
  nodes: Array<Tag>;
};

/** aggregate fields of "tag" */
export type Tag_Aggregate_Fields = {
  __typename?: "tag_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Tag_Max_Fields>;
  min?: Maybe<Tag_Min_Fields>;
};

/** aggregate fields of "tag" */
export type Tag_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "tag" */
export type Tag_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Tag_Max_Order_By>;
  min?: Maybe<Tag_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tag" */
export type Tag_Arr_Rel_Insert_Input = {
  data: Array<Tag_Insert_Input>;
  on_conflict?: Maybe<Tag_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tag". All fields are combined with a logical 'AND'. */
export type Tag_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tag_Bool_Exp>>>;
  _not?: Maybe<Tag_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tag_Bool_Exp>>>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  translation?: Maybe<TagI18n_Bool_Exp>;
  translations?: Maybe<TagI18n_Bool_Exp>;
};

/** unique or primary key constraints on table "tag" */
export enum Tag_Constraint {
  /** unique or primary key constraint */
  Pk_8e4052373c579afc1471f526760 = "PK_8e4052373c579afc1471f526760"
}

/** input type for inserting data into table "tag" */
export type Tag_Insert_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  translation?: Maybe<TagI18n_Obj_Rel_Insert_Input>;
  translations?: Maybe<TagI18n_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tag_Max_Fields = {
  __typename?: "tag_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "tag" */
export type Tag_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tag_Min_Fields = {
  __typename?: "tag_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "tag" */
export type Tag_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "tag" */
export type Tag_Mutation_Response = {
  __typename?: "tag_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Tag>;
};

/** input type for inserting object relation for remote table "tag" */
export type Tag_Obj_Rel_Insert_Input = {
  data: Tag_Insert_Input;
  on_conflict?: Maybe<Tag_On_Conflict>;
};

/** on conflict condition type for table "tag" */
export type Tag_On_Conflict = {
  constraint: Tag_Constraint;
  update_columns: Array<Tag_Update_Column>;
};

/** ordering options when selecting data from "tag" */
export type Tag_Order_By = {
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  translation?: Maybe<TagI18n_Order_By>;
  translations_aggregate?: Maybe<TagI18n_Aggregate_Order_By>;
};

/** select columns of table "tag" */
export enum Tag_Select_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id"
}

/** input type for updating data in table "tag" */
export type Tag_Set_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "tag" */
export enum Tag_Update_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id"
}

/** columns and relationships of "tagI18n" */
export type TagI18n = {
  __typename?: "tagI18n";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  /** An object relationship */
  tag: Tag;
  tagId: Scalars["uuid"];
  title: Scalars["String"];
};

/** aggregated selection of "tagI18n" */
export type TagI18n_Aggregate = {
  __typename?: "tagI18n_aggregate";
  aggregate?: Maybe<TagI18n_Aggregate_Fields>;
  nodes: Array<TagI18n>;
};

/** aggregate fields of "tagI18n" */
export type TagI18n_Aggregate_Fields = {
  __typename?: "tagI18n_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<TagI18n_Max_Fields>;
  min?: Maybe<TagI18n_Min_Fields>;
};

/** aggregate fields of "tagI18n" */
export type TagI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<TagI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "tagI18n" */
export type TagI18n_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<TagI18n_Max_Order_By>;
  min?: Maybe<TagI18n_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tagI18n" */
export type TagI18n_Arr_Rel_Insert_Input = {
  data: Array<TagI18n_Insert_Input>;
  on_conflict?: Maybe<TagI18n_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tagI18n". All fields are combined with a logical 'AND'. */
export type TagI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<TagI18n_Bool_Exp>>>;
  _not?: Maybe<TagI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<TagI18n_Bool_Exp>>>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  tag?: Maybe<Tag_Bool_Exp>;
  tagId?: Maybe<Uuid_Comparison_Exp>;
  title?: Maybe<Varchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "tagI18n" */
export enum TagI18n_Constraint {
  /** unique or primary key constraint */
  Pk_6d1142c74efbd2f8ff2ee523163 = "PK_6d1142c74efbd2f8ff2ee523163"
}

/** input type for inserting data into table "tagI18n" */
export type TagI18n_Insert_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  tag?: Maybe<Tag_Obj_Rel_Insert_Input>;
  tagId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type TagI18n_Max_Fields = {
  __typename?: "tagI18n_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "tagI18n" */
export type TagI18n_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type TagI18n_Min_Fields = {
  __typename?: "tagI18n_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "tagI18n" */
export type TagI18n_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "tagI18n" */
export type TagI18n_Mutation_Response = {
  __typename?: "tagI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<TagI18n>;
};

/** input type for inserting object relation for remote table "tagI18n" */
export type TagI18n_Obj_Rel_Insert_Input = {
  data: TagI18n_Insert_Input;
  on_conflict?: Maybe<TagI18n_On_Conflict>;
};

/** on conflict condition type for table "tagI18n" */
export type TagI18n_On_Conflict = {
  constraint: TagI18n_Constraint;
  update_columns: Array<TagI18n_Update_Column>;
};

/** ordering options when selecting data from "tagI18n" */
export type TagI18n_Order_By = {
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  tag?: Maybe<Tag_Order_By>;
  tagId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** select columns of table "tagI18n" */
export enum TagI18n_Select_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  TagId = "tagId",
  /** column name */
  Title = "title"
}

/** input type for updating data in table "tagI18n" */
export type TagI18n_Set_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  tagId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
};

/** update columns of table "tagI18n" */
export enum TagI18n_Update_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  TagId = "tagId",
  /** column name */
  Title = "title"
}

/** columns and relationships of "technique" */
export type Technique = {
  __typename?: "technique";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An array relationship */
  translations: Array<TechniqueI18n>;
  /** An aggregated array relationship */
  translations_aggregate: TechniqueI18n_Aggregate;
  /** An array relationship */
  works: Array<Work>;
  /** An aggregated array relationship */
  works_aggregate: Work_Aggregate;
};

/** columns and relationships of "technique" */
export type TechniqueTranslationsArgs = {
  distinct_on?: Maybe<Array<TechniqueI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TechniqueI18n_Order_By>>;
  where?: Maybe<TechniqueI18n_Bool_Exp>;
};

/** columns and relationships of "technique" */
export type TechniqueTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<TechniqueI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TechniqueI18n_Order_By>>;
  where?: Maybe<TechniqueI18n_Bool_Exp>;
};

/** columns and relationships of "technique" */
export type TechniqueWorksArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};

/** columns and relationships of "technique" */
export type TechniqueWorks_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};

/** aggregated selection of "technique" */
export type Technique_Aggregate = {
  __typename?: "technique_aggregate";
  aggregate?: Maybe<Technique_Aggregate_Fields>;
  nodes: Array<Technique>;
};

/** aggregate fields of "technique" */
export type Technique_Aggregate_Fields = {
  __typename?: "technique_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Technique_Max_Fields>;
  min?: Maybe<Technique_Min_Fields>;
};

/** aggregate fields of "technique" */
export type Technique_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Technique_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "technique" */
export type Technique_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Technique_Max_Order_By>;
  min?: Maybe<Technique_Min_Order_By>;
};

/** input type for inserting array relation for remote table "technique" */
export type Technique_Arr_Rel_Insert_Input = {
  data: Array<Technique_Insert_Input>;
  on_conflict?: Maybe<Technique_On_Conflict>;
};

/** Boolean expression to filter rows from the table "technique". All fields are combined with a logical 'AND'. */
export type Technique_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Technique_Bool_Exp>>>;
  _not?: Maybe<Technique_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Technique_Bool_Exp>>>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  translations?: Maybe<TechniqueI18n_Bool_Exp>;
  works?: Maybe<Work_Bool_Exp>;
};

/** unique or primary key constraints on table "technique" */
export enum Technique_Constraint {
  /** unique or primary key constraint */
  PkA149a5ec01b7bf13dbeb2f743b5 = "PK_a149a5ec01b7bf13dbeb2f743b5"
}

/** input type for inserting data into table "technique" */
export type Technique_Insert_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  translations?: Maybe<TechniqueI18n_Arr_Rel_Insert_Input>;
  works?: Maybe<Work_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Technique_Max_Fields = {
  __typename?: "technique_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "technique" */
export type Technique_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Technique_Min_Fields = {
  __typename?: "technique_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "technique" */
export type Technique_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "technique" */
export type Technique_Mutation_Response = {
  __typename?: "technique_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Technique>;
};

/** input type for inserting object relation for remote table "technique" */
export type Technique_Obj_Rel_Insert_Input = {
  data: Technique_Insert_Input;
  on_conflict?: Maybe<Technique_On_Conflict>;
};

/** on conflict condition type for table "technique" */
export type Technique_On_Conflict = {
  constraint: Technique_Constraint;
  update_columns: Array<Technique_Update_Column>;
};

/** ordering options when selecting data from "technique" */
export type Technique_Order_By = {
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  translations_aggregate?: Maybe<TechniqueI18n_Aggregate_Order_By>;
  works_aggregate?: Maybe<Work_Aggregate_Order_By>;
};

/** select columns of table "technique" */
export enum Technique_Select_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id"
}

/** input type for updating data in table "technique" */
export type Technique_Set_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "technique" */
export enum Technique_Update_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id"
}

/** columns and relationships of "techniqueI18n" */
export type TechniqueI18n = {
  __typename?: "techniqueI18n";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  name: Scalars["String"];
  /** An object relationship */
  technique: Technique;
  techniqueId: Scalars["uuid"];
};

/** aggregated selection of "techniqueI18n" */
export type TechniqueI18n_Aggregate = {
  __typename?: "techniqueI18n_aggregate";
  aggregate?: Maybe<TechniqueI18n_Aggregate_Fields>;
  nodes: Array<TechniqueI18n>;
};

/** aggregate fields of "techniqueI18n" */
export type TechniqueI18n_Aggregate_Fields = {
  __typename?: "techniqueI18n_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<TechniqueI18n_Max_Fields>;
  min?: Maybe<TechniqueI18n_Min_Fields>;
};

/** aggregate fields of "techniqueI18n" */
export type TechniqueI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<TechniqueI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "techniqueI18n" */
export type TechniqueI18n_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<TechniqueI18n_Max_Order_By>;
  min?: Maybe<TechniqueI18n_Min_Order_By>;
};

/** input type for inserting array relation for remote table "techniqueI18n" */
export type TechniqueI18n_Arr_Rel_Insert_Input = {
  data: Array<TechniqueI18n_Insert_Input>;
  on_conflict?: Maybe<TechniqueI18n_On_Conflict>;
};

/** Boolean expression to filter rows from the table "techniqueI18n". All fields are combined with a logical 'AND'. */
export type TechniqueI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<TechniqueI18n_Bool_Exp>>>;
  _not?: Maybe<TechniqueI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<TechniqueI18n_Bool_Exp>>>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<Varchar_Comparison_Exp>;
  technique?: Maybe<Technique_Bool_Exp>;
  techniqueId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "techniqueI18n" */
export enum TechniqueI18n_Constraint {
  /** unique or primary key constraint */
  Pk_191ae0cd753e2cdd55986092423 = "PK_191ae0cd753e2cdd55986092423"
}

/** input type for inserting data into table "techniqueI18n" */
export type TechniqueI18n_Insert_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  technique?: Maybe<Technique_Obj_Rel_Insert_Input>;
  techniqueId?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type TechniqueI18n_Max_Fields = {
  __typename?: "techniqueI18n_max_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "techniqueI18n" */
export type TechniqueI18n_Max_Order_By = {
  deletedAt?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type TechniqueI18n_Min_Fields = {
  __typename?: "techniqueI18n_min_fields";
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "techniqueI18n" */
export type TechniqueI18n_Min_Order_By = {
  deletedAt?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "techniqueI18n" */
export type TechniqueI18n_Mutation_Response = {
  __typename?: "techniqueI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<TechniqueI18n>;
};

/** input type for inserting object relation for remote table "techniqueI18n" */
export type TechniqueI18n_Obj_Rel_Insert_Input = {
  data: TechniqueI18n_Insert_Input;
  on_conflict?: Maybe<TechniqueI18n_On_Conflict>;
};

/** on conflict condition type for table "techniqueI18n" */
export type TechniqueI18n_On_Conflict = {
  constraint: TechniqueI18n_Constraint;
  update_columns: Array<TechniqueI18n_Update_Column>;
};

/** ordering options when selecting data from "techniqueI18n" */
export type TechniqueI18n_Order_By = {
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  technique?: Maybe<Technique_Order_By>;
  techniqueId?: Maybe<Order_By>;
};

/** select columns of table "techniqueI18n" */
export enum TechniqueI18n_Select_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Name = "name",
  /** column name */
  TechniqueId = "techniqueId"
}

/** input type for updating data in table "techniqueI18n" */
export type TechniqueI18n_Set_Input = {
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  techniqueId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "techniqueI18n" */
export enum TechniqueI18n_Update_Column {
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Name = "name",
  /** column name */
  TechniqueId = "techniqueId"
}

/** expression to compare columns of type text. All fields are combined with logical 'AND'. */
export type Text_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "translation" */
export type Translation = {
  __typename?: "translation";
  id: Scalars["uuid"];
  key: Scalars["String"];
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  page: Scalars["translation_page_enum"];
  value: Scalars["String"];
};

/** aggregated selection of "translation" */
export type Translation_Aggregate = {
  __typename?: "translation_aggregate";
  aggregate?: Maybe<Translation_Aggregate_Fields>;
  nodes: Array<Translation>;
};

/** aggregate fields of "translation" */
export type Translation_Aggregate_Fields = {
  __typename?: "translation_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Translation_Max_Fields>;
  min?: Maybe<Translation_Min_Fields>;
};

/** aggregate fields of "translation" */
export type Translation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Translation_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "translation" */
export type Translation_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Translation_Max_Order_By>;
  min?: Maybe<Translation_Min_Order_By>;
};

/** input type for inserting array relation for remote table "translation" */
export type Translation_Arr_Rel_Insert_Input = {
  data: Array<Translation_Insert_Input>;
  on_conflict?: Maybe<Translation_On_Conflict>;
};

/** Boolean expression to filter rows from the table "translation". All fields are combined with a logical 'AND'. */
export type Translation_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Translation_Bool_Exp>>>;
  _not?: Maybe<Translation_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Translation_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  key?: Maybe<Varchar_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  page?: Maybe<Translation_Page_Enum_Comparison_Exp>;
  value?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "translation" */
export enum Translation_Constraint {
  /** unique or primary key constraint */
  Pk_7aef875e43ab80d34a0cdd39c70 = "PK_7aef875e43ab80d34a0cdd39c70",
  /** unique or primary key constraint */
  UniqueKeyLocaleId = "unique_key_locale_id"
}

/** input type for inserting data into table "translation" */
export type Translation_Insert_Input = {
  id?: Maybe<Scalars["uuid"]>;
  key?: Maybe<Scalars["String"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  page?: Maybe<Scalars["translation_page_enum"]>;
  value?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Translation_Max_Fields = {
  __typename?: "translation_max_fields";
  key?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "translation" */
export type Translation_Max_Order_By = {
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Translation_Min_Fields = {
  __typename?: "translation_min_fields";
  key?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "translation" */
export type Translation_Min_Order_By = {
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "translation" */
export type Translation_Mutation_Response = {
  __typename?: "translation_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Translation>;
};

/** input type for inserting object relation for remote table "translation" */
export type Translation_Obj_Rel_Insert_Input = {
  data: Translation_Insert_Input;
  on_conflict?: Maybe<Translation_On_Conflict>;
};

/** on conflict condition type for table "translation" */
export type Translation_On_Conflict = {
  constraint: Translation_Constraint;
  update_columns: Array<Translation_Update_Column>;
};

/** ordering options when selecting data from "translation" */
export type Translation_Order_By = {
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  page?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** expression to compare columns of type translation_page_enum. All fields are combined with logical 'AND'. */
export type Translation_Page_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars["translation_page_enum"]>;
  _gt?: Maybe<Scalars["translation_page_enum"]>;
  _gte?: Maybe<Scalars["translation_page_enum"]>;
  _in?: Maybe<Array<Scalars["translation_page_enum"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["translation_page_enum"]>;
  _lte?: Maybe<Scalars["translation_page_enum"]>;
  _neq?: Maybe<Scalars["translation_page_enum"]>;
  _nin?: Maybe<Array<Scalars["translation_page_enum"]>>;
};

/** select columns of table "translation" */
export enum Translation_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Key = "key",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Page = "page",
  /** column name */
  Value = "value"
}

/** input type for updating data in table "translation" */
export type Translation_Set_Input = {
  id?: Maybe<Scalars["uuid"]>;
  key?: Maybe<Scalars["String"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  page?: Maybe<Scalars["translation_page_enum"]>;
  value?: Maybe<Scalars["String"]>;
};

/** update columns of table "translation" */
export enum Translation_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Key = "key",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  Page = "page",
  /** column name */
  Value = "value"
}

export type UpdateArtistResult = {
  __typename?: "updateArtistResult";
  ok: Scalars["Boolean"];
  photo?: Maybe<ArtistPhoto>;
};

export type UpdateArtistTranslationInput = {
  slug?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type UpdateArtistTranslationResponse = {
  __typename?: "updateArtistTranslationResponse";
  ok?: Maybe<Scalars["Boolean"]>;
};

export type UpdateBasisTranslationData = {
  name: Scalars["String"];
};

export type UpdateBasisTranslationResult = {
  __typename?: "updateBasisTranslationResult";
  ok: Scalars["Boolean"];
};

export type UpdateCartData = {
  quantity?: Maybe<Scalars["Int"]>;
};

export type UpdateCartResponse = {
  __typename?: "updateCartResponse";
  id: Scalars["String"];
  quantity: Scalars["Int"];
  createdAt: Scalars["String"];
  workId: Scalars["String"];
};

export type UpdateCategoryData = {
  showInCollection?: Maybe<Scalars["Boolean"]>;
  showInShop?: Maybe<Scalars["Boolean"]>;
  parentId?: Maybe<Scalars["String"]>;
};

export type UpdateCategoryResponse = {
  __typename?: "updateCategoryResponse";
  ok: Scalars["Boolean"];
  photo?: Maybe<Scalars["String"]>;
};

export type UpdateCategoryTranslationData = {
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type UpdateCategoryTranslationResponse = {
  __typename?: "updateCategoryTranslationResponse";
  ok: Scalars["Boolean"];
};

export type UpdateCustomFieldData = {
  value: Scalars["String"];
};

export type UpdateCustomFieldResult = {
  __typename?: "updateCustomFieldResult";
  ok: Scalars["Boolean"];
};

export type UpdateCustomFieldTranslationData = {
  title: Scalars["String"];
};

export type UpdateCustomFieldTranslationResult = {
  __typename?: "updateCustomFieldTranslationResult";
  ok: Scalars["Boolean"];
};

export type UpdateExhibitionData = {
  showInMainPage?: Maybe<Scalars["Boolean"]>;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  worksToInsert?: Maybe<Array<Maybe<Scalars["String"]>>>;
  worksToDelete?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type UpdateExhibitionResult = {
  __typename?: "updateExhibitionResult";
  ok: Scalars["Boolean"];
  image?: Maybe<Scalars["String"]>;
};

export type UpdateExhibitionTranslationData = {
  title?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type UpdateExhibitionTranslationResponse = {
  __typename?: "updateExhibitionTranslationResponse";
  ok: Scalars["Boolean"];
};

export type UpdateFileData = {
  title?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  exhibitionId?: Maybe<Scalars["String"]>;
  localeId?: Maybe<Scalars["String"]>;
};

export type UpdateFileResult = {
  __typename?: "updateFileResult";
  ok: Scalars["Boolean"];
  file?: Maybe<Scalars["String"]>;
};

export type UpdateLinkData = {
  url?: Maybe<Scalars["String"]>;
  artistId?: Maybe<Scalars["String"]>;
};

export type UpdateLinkResult = {
  __typename?: "updateLinkResult";
  ok: Scalars["Boolean"];
};

export type UpdateLinkTranslationData = {
  title: Scalars["String"];
};

export type UpdateLinkTranslationResult = {
  __typename?: "updateLinkTranslationResult";
  ok: Scalars["Boolean"];
};

export type UpdateLocaleInput = {
  name?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  currencyCode?: Maybe<Scalars["String"]>;
  isEnabled?: Maybe<Scalars["Boolean"]>;
  isDefault?: Maybe<Scalars["Boolean"]>;
};

export type UpdateLocaleResponse = {
  __typename?: "updateLocaleResponse";
  ok: Scalars["Boolean"];
};

export type UpdateNavigationData = {
  parentId?: Maybe<Scalars["String"]>;
  isEnabled?: Maybe<Scalars["Boolean"]>;
  showInHeader?: Maybe<Scalars["Boolean"]>;
  showInFooter?: Maybe<Scalars["Boolean"]>;
  float?: Maybe<Navigation_Floats>;
};

export type UpdateNavigationResult = {
  __typename?: "updateNavigationResult";
  ok: Scalars["Boolean"];
};

export type UpdateNavigationTranslationData = {
  name?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
};

export type UpdateNavigationTranslationResult = {
  __typename?: "updateNavigationTranslationResult";
  ok: Scalars["Boolean"];
};

export type UpdateNewsData = {
  publicationDate?: Maybe<Scalars["String"]>;
};

export type UpdateNewsResult = {
  __typename?: "updateNewsResult";
  ok: Scalars["Boolean"];
};

export type UpdateNewsTranslationData = {
  title?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type UpdateNewsTranslationResult = {
  __typename?: "updateNewsTranslationResult";
  ok: Scalars["Boolean"];
};

export type UpdatePageTranslationData = {
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type UpdatePageTranslationResult = {
  __typename?: "updatePageTranslationResult";
  ok: Scalars["Boolean"];
};

export type UpdatePositionsOfExhibitionsData = {
  id: Scalars["String"];
  position: Scalars["Int"];
};

export type UpdatePositionsOfExhibitionsResult = {
  __typename?: "updatePositionsOfExhibitionsResult";
  ok: Scalars["Boolean"];
};

export type UpdatePositionsOfNavigationsData = {
  id: Scalars["String"];
  position: Scalars["Int"];
};

export type UpdatePositionsOfNavigationsResult = {
  __typename?: "updatePositionsOfNavigationsResult";
  ok: Scalars["Boolean"];
};

export type UpdatePositionsOfSlidersData = {
  id: Scalars["String"];
  position: Scalars["Int"];
};

export type UpdatePositionsOfSlidersResult = {
  __typename?: "updatePositionsOfSlidersResult";
  ok: Scalars["Boolean"];
};

export type UpdatePositionsOfWorksData = {
  id: Scalars["String"];
  position: Scalars["Int"];
};

export type UpdatePositionsOfWorksResult = {
  __typename?: "updatePositionsOfWorksResult";
  ok: Scalars["Boolean"];
};

export type UpdateProvenanceTranslationData = {
  name: Scalars["String"];
};

export type UpdateProvenanceTranslationResult = {
  __typename?: "updateProvenanceTranslationResult";
  ok: Scalars["Boolean"];
};

export type UpdateSchoolTranslationData = {
  name: Scalars["String"];
};

export type UpdateSchoolTranslationResult = {
  __typename?: "updateSchoolTranslationResult";
  ok: Scalars["Boolean"];
};

export type UpdateSliderInput = {
  video?: Maybe<Scalars["Upload"]>;
  image?: Maybe<Scalars["Upload"]>;
};

export type UpdateSliderResult = {
  __typename?: "updateSliderResult";
  ok: Scalars["Boolean"];
  image?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["String"]>;
};

export type UpdateSliderTranslationData = {
  title?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

export type UpdateSliderTranslationResult = {
  __typename?: "updateSliderTranslationResult";
  ok: Scalars["Boolean"];
};

export type UpdateSocialNetworkInput = {
  link?: Maybe<Scalars["String"]>;
  className?: Maybe<Scalars["String"]>;
};

export type UpdateSocialNetworkResult = {
  __typename?: "UpdateSocialNetworkResult";
  ok: Scalars["Boolean"];
};

export type UpdateTagTranslationData = {
  title: Scalars["String"];
};

export type UpdateTagTranslationResult = {
  __typename?: "updateTagTranslationResult";
  ok: Scalars["Boolean"];
};

export type UpdateTechniqueTranslationData = {
  name: Scalars["String"];
};

export type UpdateTechniqueTranslationResult = {
  __typename?: "updateTechniqueTranslationResult";
  ok: Scalars["Boolean"];
};

export type UpdateTranslationInput = {
  value?: Maybe<Scalars["String"]>;
  page?: Maybe<Pages>;
};

export type UpdateTranslationResponse = {
  __typename?: "updateTranslationResponse";
  ok: Scalars["Boolean"];
};

export type UpdateWorkData = {
  artistId?: Maybe<Scalars["String"]>;
  imagesForDelete?: Maybe<Array<Scalars["String"]>>;
  techniqueId?: Maybe<Scalars["String"]>;
  basisId?: Maybe<Scalars["String"]>;
  schoolId?: Maybe<Scalars["String"]>;
  provenanceId?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Float"]>;
  forSale?: Maybe<Scalars["Boolean"]>;
  quantity?: Maybe<Scalars["Int"]>;
  showInMainPage?: Maybe<Scalars["Boolean"]>;
  size?: Maybe<WorkSize>;
};

export type UpdateWorkResult = {
  __typename?: "UpdateWorkResult";
  ok: Scalars["Boolean"];
  images?: Maybe<Array<Maybe<WorkPhoto>>>;
};

export type UpdateWorkTranslationData = {
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  creationDate?: Maybe<Scalars["String"]>;
};

export type UpdateWorkTranslationResponse = {
  __typename?: "updateWorkTranslationResponse";
  ok: Scalars["Boolean"];
};

/** columns and relationships of "user" */
export type User = {
  __typename?: "user";
  createdAt: Scalars["timestamptz"];
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  email: Scalars["String"];
  id: Scalars["uuid"];
  isBanned: Scalars["Boolean"];
  isConfirmEmail: Scalars["Boolean"];
  isConfirmPhone: Scalars["Boolean"];
  isSuperAdmin: Scalars["Boolean"];
  name: Scalars["String"];
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregated array relationship */
  orders_aggregate: Order_Aggregate;
  password: Scalars["String"];
  patronymic: Scalars["String"];
  phone: Scalars["String"];
  /** An array relationship */
  productsInCart: Array<Cart>;
  /** An aggregated array relationship */
  productsInCart_aggregate: Cart_Aggregate;
  role: Scalars["user_role_enum"];
  surname: Scalars["String"];
  updatedAt: Scalars["timestamptz"];
};

/** columns and relationships of "user" */
export type UserOrdersArgs = {
  distinct_on?: Maybe<Array<Order_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Order_Order_By>>;
  where?: Maybe<Order_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Order_Order_By>>;
  where?: Maybe<Order_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserProductsInCartArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserProductsInCart_AggregateArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: "user_aggregate";
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: "user_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<Varchar_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  isBanned?: Maybe<Boolean_Comparison_Exp>;
  isConfirmEmail?: Maybe<Boolean_Comparison_Exp>;
  isConfirmPhone?: Maybe<Boolean_Comparison_Exp>;
  isSuperAdmin?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<Varchar_Comparison_Exp>;
  orders?: Maybe<Order_Bool_Exp>;
  password?: Maybe<Varchar_Comparison_Exp>;
  patronymic?: Maybe<Varchar_Comparison_Exp>;
  phone?: Maybe<Varchar_Comparison_Exp>;
  productsInCart?: Maybe<Cart_Bool_Exp>;
  role?: Maybe<User_Role_Enum_Comparison_Exp>;
  surname?: Maybe<Varchar_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  PkCace4a159ff9f2512dd42373760 = "PK_cace4a159ff9f2512dd42373760",
  /** unique or primary key constraint */
  UqE12875dfb3b1d92d7d7c5377e22 = "UQ_e12875dfb3b1d92d7d7c5377e22"
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  isBanned?: Maybe<Scalars["Boolean"]>;
  isConfirmEmail?: Maybe<Scalars["Boolean"]>;
  isConfirmPhone?: Maybe<Scalars["Boolean"]>;
  isSuperAdmin?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  orders?: Maybe<Order_Arr_Rel_Insert_Input>;
  password?: Maybe<Scalars["String"]>;
  patronymic?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  productsInCart?: Maybe<Cart_Arr_Rel_Insert_Input>;
  role?: Maybe<Scalars["user_role_enum"]>;
  surname?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: "user_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  patronymic?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  surname?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  patronymic?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: "user_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  patronymic?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  surname?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  patronymic?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: "user_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  createdAt?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isBanned?: Maybe<Order_By>;
  isConfirmEmail?: Maybe<Order_By>;
  isConfirmPhone?: Maybe<Order_By>;
  isSuperAdmin?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Order_Aggregate_Order_By>;
  password?: Maybe<Order_By>;
  patronymic?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  productsInCart_aggregate?: Maybe<Cart_Aggregate_Order_By>;
  role?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** expression to compare columns of type user_role_enum. All fields are combined with logical 'AND'. */
export type User_Role_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars["user_role_enum"]>;
  _gt?: Maybe<Scalars["user_role_enum"]>;
  _gte?: Maybe<Scalars["user_role_enum"]>;
  _in?: Maybe<Array<Scalars["user_role_enum"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["user_role_enum"]>;
  _lte?: Maybe<Scalars["user_role_enum"]>;
  _neq?: Maybe<Scalars["user_role_enum"]>;
  _nin?: Maybe<Array<Scalars["user_role_enum"]>>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  IsBanned = "isBanned",
  /** column name */
  IsConfirmEmail = "isConfirmEmail",
  /** column name */
  IsConfirmPhone = "isConfirmPhone",
  /** column name */
  IsSuperAdmin = "isSuperAdmin",
  /** column name */
  Name = "name",
  /** column name */
  Password = "password",
  /** column name */
  Patronymic = "patronymic",
  /** column name */
  Phone = "phone",
  /** column name */
  Role = "role",
  /** column name */
  Surname = "surname",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  createdAt?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  isBanned?: Maybe<Scalars["Boolean"]>;
  isConfirmEmail?: Maybe<Scalars["Boolean"]>;
  isConfirmPhone?: Maybe<Scalars["Boolean"]>;
  isSuperAdmin?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  patronymic?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["user_role_enum"]>;
  surname?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  IsBanned = "isBanned",
  /** column name */
  IsConfirmEmail = "isConfirmEmail",
  /** column name */
  IsConfirmPhone = "isConfirmPhone",
  /** column name */
  IsSuperAdmin = "isSuperAdmin",
  /** column name */
  Name = "name",
  /** column name */
  Password = "password",
  /** column name */
  Patronymic = "patronymic",
  /** column name */
  Phone = "phone",
  /** column name */
  Role = "role",
  /** column name */
  Surname = "surname",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
};

/** expression to compare columns of type varchar. All fields are combined with logical 'AND'. */
export type Varchar_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "work" */
export type Work = {
  __typename?: "work";
  appearanceDateInStore?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  artist?: Maybe<Artist>;
  artistId?: Maybe<Scalars["uuid"]>;
  /** An object relationship */
  basis?: Maybe<Basis>;
  basisId?: Maybe<Scalars["uuid"]>;
  /** An array relationship */
  carts: Array<Cart>;
  /** An aggregated array relationship */
  carts_aggregate: Cart_Aggregate;
  /** An array relationship */
  customFields: Array<CustomFieldWork>;
  /** An aggregated array relationship */
  customFields_aggregate: CustomFieldWork_Aggregate;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  forSale: Scalars["Boolean"];
  id: Scalars["uuid"];
  images?: Maybe<Scalars["jsonb"]>;
  /** An array relationship */
  orderProducts: Array<OrderProduct>;
  /** An aggregated array relationship */
  orderProducts_aggregate: OrderProduct_Aggregate;
  positionOnMainPage: Scalars["smallint"];
  price?: Maybe<Scalars["numeric"]>;
  /** An object relationship */
  provenance?: Maybe<Provenance>;
  provenanceId?: Maybe<Scalars["uuid"]>;
  quantity: Scalars["smallint"];
  /** An object relationship */
  school?: Maybe<School>;
  schoolId?: Maybe<Scalars["uuid"]>;
  showInMainPage: Scalars["Boolean"];
  size?: Maybe<Scalars["_text"]>;
  /** An object relationship */
  technique?: Maybe<Technique>;
  techniqueId?: Maybe<Scalars["uuid"]>;
  /** An object relationship */
  translation?: Maybe<WorkI18n>;
  /** An array relationship */
  translations: Array<WorkI18n>;
  /** An aggregated array relationship */
  translations_aggregate: WorkI18n_Aggregate;
  /** An array relationship */
  workCategories: Array<WorkCategory>;
  /** An aggregated array relationship */
  workCategories_aggregate: WorkCategory_Aggregate;
  /** An array relationship */
  workExhibitions: Array<ExhibitionWork>;
  /** An aggregated array relationship */
  workExhibitions_aggregate: ExhibitionWork_Aggregate;
};

/** columns and relationships of "work" */
export type WorkCartsArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};

/** columns and relationships of "work" */
export type WorkCarts_AggregateArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};

/** columns and relationships of "work" */
export type WorkCustomFieldsArgs = {
  distinct_on?: Maybe<Array<CustomFieldWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldWork_Order_By>>;
  where?: Maybe<CustomFieldWork_Bool_Exp>;
};

/** columns and relationships of "work" */
export type WorkCustomFields_AggregateArgs = {
  distinct_on?: Maybe<Array<CustomFieldWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<CustomFieldWork_Order_By>>;
  where?: Maybe<CustomFieldWork_Bool_Exp>;
};

/** columns and relationships of "work" */
export type WorkImagesArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "work" */
export type WorkOrderProductsArgs = {
  distinct_on?: Maybe<Array<OrderProduct_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<OrderProduct_Order_By>>;
  where?: Maybe<OrderProduct_Bool_Exp>;
};

/** columns and relationships of "work" */
export type WorkOrderProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<OrderProduct_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<OrderProduct_Order_By>>;
  where?: Maybe<OrderProduct_Bool_Exp>;
};

/** columns and relationships of "work" */
export type WorkTranslationsArgs = {
  distinct_on?: Maybe<Array<WorkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkI18n_Order_By>>;
  where?: Maybe<WorkI18n_Bool_Exp>;
};

/** columns and relationships of "work" */
export type WorkTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<WorkI18n_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkI18n_Order_By>>;
  where?: Maybe<WorkI18n_Bool_Exp>;
};

/** columns and relationships of "work" */
export type WorkWorkCategoriesArgs = {
  distinct_on?: Maybe<Array<WorkCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkCategory_Order_By>>;
  where?: Maybe<WorkCategory_Bool_Exp>;
};

/** columns and relationships of "work" */
export type WorkWorkCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<WorkCategory_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<WorkCategory_Order_By>>;
  where?: Maybe<WorkCategory_Bool_Exp>;
};

/** columns and relationships of "work" */
export type WorkWorkExhibitionsArgs = {
  distinct_on?: Maybe<Array<ExhibitionWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionWork_Order_By>>;
  where?: Maybe<ExhibitionWork_Bool_Exp>;
};

/** columns and relationships of "work" */
export type WorkWorkExhibitions_AggregateArgs = {
  distinct_on?: Maybe<Array<ExhibitionWork_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ExhibitionWork_Order_By>>;
  where?: Maybe<ExhibitionWork_Bool_Exp>;
};

/** aggregated selection of "work" */
export type Work_Aggregate = {
  __typename?: "work_aggregate";
  aggregate?: Maybe<Work_Aggregate_Fields>;
  nodes: Array<Work>;
};

/** aggregate fields of "work" */
export type Work_Aggregate_Fields = {
  __typename?: "work_aggregate_fields";
  avg?: Maybe<Work_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Work_Max_Fields>;
  min?: Maybe<Work_Min_Fields>;
  stddev?: Maybe<Work_Stddev_Fields>;
  stddev_pop?: Maybe<Work_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Work_Stddev_Samp_Fields>;
  sum?: Maybe<Work_Sum_Fields>;
  var_pop?: Maybe<Work_Var_Pop_Fields>;
  var_samp?: Maybe<Work_Var_Samp_Fields>;
  variance?: Maybe<Work_Variance_Fields>;
};

/** aggregate fields of "work" */
export type Work_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Work_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "work" */
export type Work_Aggregate_Order_By = {
  avg?: Maybe<Work_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Work_Max_Order_By>;
  min?: Maybe<Work_Min_Order_By>;
  stddev?: Maybe<Work_Stddev_Order_By>;
  stddev_pop?: Maybe<Work_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Work_Stddev_Samp_Order_By>;
  sum?: Maybe<Work_Sum_Order_By>;
  var_pop?: Maybe<Work_Var_Pop_Order_By>;
  var_samp?: Maybe<Work_Var_Samp_Order_By>;
  variance?: Maybe<Work_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Work_Append_Input = {
  images?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "work" */
export type Work_Arr_Rel_Insert_Input = {
  data: Array<Work_Insert_Input>;
  on_conflict?: Maybe<Work_On_Conflict>;
};

/** aggregate avg on columns */
export type Work_Avg_Fields = {
  __typename?: "work_avg_fields";
  positionOnMainPage?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  quantity?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "work" */
export type Work_Avg_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "work". All fields are combined with a logical 'AND'. */
export type Work_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Work_Bool_Exp>>>;
  _not?: Maybe<Work_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Work_Bool_Exp>>>;
  appearanceDateInStore?: Maybe<Timestamptz_Comparison_Exp>;
  artist?: Maybe<Artist_Bool_Exp>;
  artistId?: Maybe<Uuid_Comparison_Exp>;
  basis?: Maybe<Basis_Bool_Exp>;
  basisId?: Maybe<Uuid_Comparison_Exp>;
  carts?: Maybe<Cart_Bool_Exp>;
  customFields?: Maybe<CustomFieldWork_Bool_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  forSale?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  images?: Maybe<Jsonb_Comparison_Exp>;
  orderProducts?: Maybe<OrderProduct_Bool_Exp>;
  positionOnMainPage?: Maybe<Smallint_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  provenance?: Maybe<Provenance_Bool_Exp>;
  provenanceId?: Maybe<Uuid_Comparison_Exp>;
  quantity?: Maybe<Smallint_Comparison_Exp>;
  school?: Maybe<School_Bool_Exp>;
  schoolId?: Maybe<Uuid_Comparison_Exp>;
  showInMainPage?: Maybe<Boolean_Comparison_Exp>;
  size?: Maybe<_Text_Comparison_Exp>;
  technique?: Maybe<Technique_Bool_Exp>;
  techniqueId?: Maybe<Uuid_Comparison_Exp>;
  translation?: Maybe<WorkI18n_Bool_Exp>;
  translations?: Maybe<WorkI18n_Bool_Exp>;
  workCategories?: Maybe<WorkCategory_Bool_Exp>;
  workExhibitions?: Maybe<ExhibitionWork_Bool_Exp>;
};

/** unique or primary key constraints on table "work" */
export enum Work_Constraint {
  /** unique or primary key constraint */
  Pk_1ad2a9dfd058d66c37e6d495222 = "PK_1ad2a9dfd058d66c37e6d495222"
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Work_Delete_At_Path_Input = {
  images?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Work_Delete_Elem_Input = {
  images?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Work_Delete_Key_Input = {
  images?: Maybe<Scalars["String"]>;
};

/** input type for incrementing integer columne in table "work" */
export type Work_Inc_Input = {
  positionOnMainPage?: Maybe<Scalars["smallint"]>;
  quantity?: Maybe<Scalars["smallint"]>;
};

/** input type for inserting data into table "work" */
export type Work_Insert_Input = {
  appearanceDateInStore?: Maybe<Scalars["timestamptz"]>;
  artist?: Maybe<Artist_Obj_Rel_Insert_Input>;
  artistId?: Maybe<Scalars["uuid"]>;
  basis?: Maybe<Basis_Obj_Rel_Insert_Input>;
  basisId?: Maybe<Scalars["uuid"]>;
  carts?: Maybe<Cart_Arr_Rel_Insert_Input>;
  customFields?: Maybe<CustomFieldWork_Arr_Rel_Insert_Input>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  forSale?: Maybe<Scalars["Boolean"]>;
  id?: Maybe<Scalars["uuid"]>;
  images?: Maybe<Scalars["jsonb"]>;
  orderProducts?: Maybe<OrderProduct_Arr_Rel_Insert_Input>;
  positionOnMainPage?: Maybe<Scalars["smallint"]>;
  price?: Maybe<Scalars["numeric"]>;
  provenance?: Maybe<Provenance_Obj_Rel_Insert_Input>;
  provenanceId?: Maybe<Scalars["uuid"]>;
  quantity?: Maybe<Scalars["smallint"]>;
  school?: Maybe<School_Obj_Rel_Insert_Input>;
  schoolId?: Maybe<Scalars["uuid"]>;
  showInMainPage?: Maybe<Scalars["Boolean"]>;
  size?: Maybe<Scalars["_text"]>;
  technique?: Maybe<Technique_Obj_Rel_Insert_Input>;
  techniqueId?: Maybe<Scalars["uuid"]>;
  translation?: Maybe<WorkI18n_Obj_Rel_Insert_Input>;
  translations?: Maybe<WorkI18n_Arr_Rel_Insert_Input>;
  workCategories?: Maybe<WorkCategory_Arr_Rel_Insert_Input>;
  workExhibitions?: Maybe<ExhibitionWork_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Work_Max_Fields = {
  __typename?: "work_max_fields";
  appearanceDateInStore?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  positionOnMainPage?: Maybe<Scalars["smallint"]>;
  price?: Maybe<Scalars["numeric"]>;
  quantity?: Maybe<Scalars["smallint"]>;
};

/** order by max() on columns of table "work" */
export type Work_Max_Order_By = {
  appearanceDateInStore?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  positionOnMainPage?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Work_Min_Fields = {
  __typename?: "work_min_fields";
  appearanceDateInStore?: Maybe<Scalars["timestamptz"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  positionOnMainPage?: Maybe<Scalars["smallint"]>;
  price?: Maybe<Scalars["numeric"]>;
  quantity?: Maybe<Scalars["smallint"]>;
};

/** order by min() on columns of table "work" */
export type Work_Min_Order_By = {
  appearanceDateInStore?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  positionOnMainPage?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** response of any mutation on the table "work" */
export type Work_Mutation_Response = {
  __typename?: "work_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Work>;
};

/** input type for inserting object relation for remote table "work" */
export type Work_Obj_Rel_Insert_Input = {
  data: Work_Insert_Input;
  on_conflict?: Maybe<Work_On_Conflict>;
};

/** on conflict condition type for table "work" */
export type Work_On_Conflict = {
  constraint: Work_Constraint;
  update_columns: Array<Work_Update_Column>;
};

/** ordering options when selecting data from "work" */
export type Work_Order_By = {
  appearanceDateInStore?: Maybe<Order_By>;
  artist?: Maybe<Artist_Order_By>;
  artistId?: Maybe<Order_By>;
  basis?: Maybe<Basis_Order_By>;
  basisId?: Maybe<Order_By>;
  carts_aggregate?: Maybe<Cart_Aggregate_Order_By>;
  customFields_aggregate?: Maybe<CustomFieldWork_Aggregate_Order_By>;
  deletedAt?: Maybe<Order_By>;
  forSale?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  images?: Maybe<Order_By>;
  orderProducts_aggregate?: Maybe<OrderProduct_Aggregate_Order_By>;
  positionOnMainPage?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  provenance?: Maybe<Provenance_Order_By>;
  provenanceId?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  school?: Maybe<School_Order_By>;
  schoolId?: Maybe<Order_By>;
  showInMainPage?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  technique?: Maybe<Technique_Order_By>;
  techniqueId?: Maybe<Order_By>;
  translation?: Maybe<WorkI18n_Order_By>;
  translations_aggregate?: Maybe<WorkI18n_Aggregate_Order_By>;
  workCategories_aggregate?: Maybe<WorkCategory_Aggregate_Order_By>;
  workExhibitions_aggregate?: Maybe<ExhibitionWork_Aggregate_Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Work_Prepend_Input = {
  images?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "work" */
export enum Work_Select_Column {
  /** column name */
  AppearanceDateInStore = "appearanceDateInStore",
  /** column name */
  ArtistId = "artistId",
  /** column name */
  BasisId = "basisId",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  ForSale = "forSale",
  /** column name */
  Id = "id",
  /** column name */
  Images = "images",
  /** column name */
  PositionOnMainPage = "positionOnMainPage",
  /** column name */
  Price = "price",
  /** column name */
  ProvenanceId = "provenanceId",
  /** column name */
  Quantity = "quantity",
  /** column name */
  SchoolId = "schoolId",
  /** column name */
  ShowInMainPage = "showInMainPage",
  /** column name */
  Size = "size",
  /** column name */
  TechniqueId = "techniqueId"
}

/** input type for updating data in table "work" */
export type Work_Set_Input = {
  appearanceDateInStore?: Maybe<Scalars["timestamptz"]>;
  artistId?: Maybe<Scalars["uuid"]>;
  basisId?: Maybe<Scalars["uuid"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  forSale?: Maybe<Scalars["Boolean"]>;
  id?: Maybe<Scalars["uuid"]>;
  images?: Maybe<Scalars["jsonb"]>;
  positionOnMainPage?: Maybe<Scalars["smallint"]>;
  price?: Maybe<Scalars["numeric"]>;
  provenanceId?: Maybe<Scalars["uuid"]>;
  quantity?: Maybe<Scalars["smallint"]>;
  schoolId?: Maybe<Scalars["uuid"]>;
  showInMainPage?: Maybe<Scalars["Boolean"]>;
  size?: Maybe<Scalars["_text"]>;
  techniqueId?: Maybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type Work_Stddev_Fields = {
  __typename?: "work_stddev_fields";
  positionOnMainPage?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  quantity?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "work" */
export type Work_Stddev_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Work_Stddev_Pop_Fields = {
  __typename?: "work_stddev_pop_fields";
  positionOnMainPage?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  quantity?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "work" */
export type Work_Stddev_Pop_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Work_Stddev_Samp_Fields = {
  __typename?: "work_stddev_samp_fields";
  positionOnMainPage?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  quantity?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "work" */
export type Work_Stddev_Samp_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Work_Sum_Fields = {
  __typename?: "work_sum_fields";
  positionOnMainPage?: Maybe<Scalars["smallint"]>;
  price?: Maybe<Scalars["numeric"]>;
  quantity?: Maybe<Scalars["smallint"]>;
};

/** order by sum() on columns of table "work" */
export type Work_Sum_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** update columns of table "work" */
export enum Work_Update_Column {
  /** column name */
  AppearanceDateInStore = "appearanceDateInStore",
  /** column name */
  ArtistId = "artistId",
  /** column name */
  BasisId = "basisId",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  ForSale = "forSale",
  /** column name */
  Id = "id",
  /** column name */
  Images = "images",
  /** column name */
  PositionOnMainPage = "positionOnMainPage",
  /** column name */
  Price = "price",
  /** column name */
  ProvenanceId = "provenanceId",
  /** column name */
  Quantity = "quantity",
  /** column name */
  SchoolId = "schoolId",
  /** column name */
  ShowInMainPage = "showInMainPage",
  /** column name */
  Size = "size",
  /** column name */
  TechniqueId = "techniqueId"
}

/** aggregate var_pop on columns */
export type Work_Var_Pop_Fields = {
  __typename?: "work_var_pop_fields";
  positionOnMainPage?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  quantity?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "work" */
export type Work_Var_Pop_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Work_Var_Samp_Fields = {
  __typename?: "work_var_samp_fields";
  positionOnMainPage?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  quantity?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "work" */
export type Work_Var_Samp_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Work_Variance_Fields = {
  __typename?: "work_variance_fields";
  positionOnMainPage?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  quantity?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "work" */
export type Work_Variance_Order_By = {
  positionOnMainPage?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** columns and relationships of "workCategory" */
export type WorkCategory = {
  __typename?: "workCategory";
  breadcrumb: Scalars["Boolean"];
  /** An object relationship */
  category: Category;
  categoryId: Scalars["uuid"];
  createdAt: Scalars["timestamptz"];
  /** An object relationship */
  work: Work;
  workId: Scalars["uuid"];
};

/** aggregated selection of "workCategory" */
export type WorkCategory_Aggregate = {
  __typename?: "workCategory_aggregate";
  aggregate?: Maybe<WorkCategory_Aggregate_Fields>;
  nodes: Array<WorkCategory>;
};

/** aggregate fields of "workCategory" */
export type WorkCategory_Aggregate_Fields = {
  __typename?: "workCategory_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<WorkCategory_Max_Fields>;
  min?: Maybe<WorkCategory_Min_Fields>;
};

/** aggregate fields of "workCategory" */
export type WorkCategory_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<WorkCategory_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "workCategory" */
export type WorkCategory_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<WorkCategory_Max_Order_By>;
  min?: Maybe<WorkCategory_Min_Order_By>;
};

/** input type for inserting array relation for remote table "workCategory" */
export type WorkCategory_Arr_Rel_Insert_Input = {
  data: Array<WorkCategory_Insert_Input>;
  on_conflict?: Maybe<WorkCategory_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workCategory". All fields are combined with a logical 'AND'. */
export type WorkCategory_Bool_Exp = {
  _and?: Maybe<Array<Maybe<WorkCategory_Bool_Exp>>>;
  _not?: Maybe<WorkCategory_Bool_Exp>;
  _or?: Maybe<Array<Maybe<WorkCategory_Bool_Exp>>>;
  breadcrumb?: Maybe<Boolean_Comparison_Exp>;
  category?: Maybe<Category_Bool_Exp>;
  categoryId?: Maybe<Uuid_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  work?: Maybe<Work_Bool_Exp>;
  workId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workCategory" */
export enum WorkCategory_Constraint {
  /** unique or primary key constraint */
  Pk_131304dd9e91441343c20164123 = "PK_131304dd9e91441343c20164123"
}

/** input type for inserting data into table "workCategory" */
export type WorkCategory_Insert_Input = {
  breadcrumb?: Maybe<Scalars["Boolean"]>;
  category?: Maybe<Category_Obj_Rel_Insert_Input>;
  categoryId?: Maybe<Scalars["uuid"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  work?: Maybe<Work_Obj_Rel_Insert_Input>;
  workId?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type WorkCategory_Max_Fields = {
  __typename?: "workCategory_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "workCategory" */
export type WorkCategory_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type WorkCategory_Min_Fields = {
  __typename?: "workCategory_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "workCategory" */
export type WorkCategory_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "workCategory" */
export type WorkCategory_Mutation_Response = {
  __typename?: "workCategory_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<WorkCategory>;
};

/** input type for inserting object relation for remote table "workCategory" */
export type WorkCategory_Obj_Rel_Insert_Input = {
  data: WorkCategory_Insert_Input;
  on_conflict?: Maybe<WorkCategory_On_Conflict>;
};

/** on conflict condition type for table "workCategory" */
export type WorkCategory_On_Conflict = {
  constraint: WorkCategory_Constraint;
  update_columns: Array<WorkCategory_Update_Column>;
};

/** ordering options when selecting data from "workCategory" */
export type WorkCategory_Order_By = {
  breadcrumb?: Maybe<Order_By>;
  category?: Maybe<Category_Order_By>;
  categoryId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  work?: Maybe<Work_Order_By>;
  workId?: Maybe<Order_By>;
};

/** select columns of table "workCategory" */
export enum WorkCategory_Select_Column {
  /** column name */
  Breadcrumb = "breadcrumb",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  WorkId = "workId"
}

/** input type for updating data in table "workCategory" */
export type WorkCategory_Set_Input = {
  breadcrumb?: Maybe<Scalars["Boolean"]>;
  categoryId?: Maybe<Scalars["uuid"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  workId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "workCategory" */
export enum WorkCategory_Update_Column {
  /** column name */
  Breadcrumb = "breadcrumb",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  WorkId = "workId"
}

/** columns and relationships of "workI18n" */
export type WorkI18n = {
  __typename?: "workI18n";
  body?: Maybe<Scalars["String"]>;
  creationDate?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  locale: Locale;
  localeId: Scalars["uuid"];
  metaDescription: Scalars["String"];
  metaTitle: Scalars["String"];
  slug: Scalars["String"];
  title: Scalars["String"];
  /** An object relationship */
  work: Work;
  workId: Scalars["uuid"];
};

/** aggregated selection of "workI18n" */
export type WorkI18n_Aggregate = {
  __typename?: "workI18n_aggregate";
  aggregate?: Maybe<WorkI18n_Aggregate_Fields>;
  nodes: Array<WorkI18n>;
};

/** aggregate fields of "workI18n" */
export type WorkI18n_Aggregate_Fields = {
  __typename?: "workI18n_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<WorkI18n_Max_Fields>;
  min?: Maybe<WorkI18n_Min_Fields>;
};

/** aggregate fields of "workI18n" */
export type WorkI18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<WorkI18n_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "workI18n" */
export type WorkI18n_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<WorkI18n_Max_Order_By>;
  min?: Maybe<WorkI18n_Min_Order_By>;
};

/** input type for inserting array relation for remote table "workI18n" */
export type WorkI18n_Arr_Rel_Insert_Input = {
  data: Array<WorkI18n_Insert_Input>;
  on_conflict?: Maybe<WorkI18n_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workI18n". All fields are combined with a logical 'AND'. */
export type WorkI18n_Bool_Exp = {
  _and?: Maybe<Array<Maybe<WorkI18n_Bool_Exp>>>;
  _not?: Maybe<WorkI18n_Bool_Exp>;
  _or?: Maybe<Array<Maybe<WorkI18n_Bool_Exp>>>;
  body?: Maybe<Text_Comparison_Exp>;
  creationDate?: Maybe<Varchar_Comparison_Exp>;
  deletedAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  locale?: Maybe<Locale_Bool_Exp>;
  localeId?: Maybe<Uuid_Comparison_Exp>;
  metaDescription?: Maybe<Varchar_Comparison_Exp>;
  metaTitle?: Maybe<Varchar_Comparison_Exp>;
  slug?: Maybe<Varchar_Comparison_Exp>;
  title?: Maybe<Varchar_Comparison_Exp>;
  work?: Maybe<Work_Bool_Exp>;
  workId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workI18n" */
export enum WorkI18n_Constraint {
  /** unique or primary key constraint */
  Pk_692aa527444c46169caec207d5f = "PK_692aa527444c46169caec207d5f",
  /** unique or primary key constraint */
  UqF6403f96c54e5b3481008336089 = "UQ_f6403f96c54e5b3481008336089"
}

/** input type for inserting data into table "workI18n" */
export type WorkI18n_Insert_Input = {
  body?: Maybe<Scalars["String"]>;
  creationDate?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  locale?: Maybe<Locale_Obj_Rel_Insert_Input>;
  localeId?: Maybe<Scalars["uuid"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  work?: Maybe<Work_Obj_Rel_Insert_Input>;
  workId?: Maybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type WorkI18n_Max_Fields = {
  __typename?: "workI18n_max_fields";
  body?: Maybe<Scalars["String"]>;
  creationDate?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "workI18n" */
export type WorkI18n_Max_Order_By = {
  body?: Maybe<Order_By>;
  creationDate?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type WorkI18n_Min_Fields = {
  __typename?: "workI18n_min_fields";
  body?: Maybe<Scalars["String"]>;
  creationDate?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "workI18n" */
export type WorkI18n_Min_Order_By = {
  body?: Maybe<Order_By>;
  creationDate?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "workI18n" */
export type WorkI18n_Mutation_Response = {
  __typename?: "workI18n_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<WorkI18n>;
};

/** input type for inserting object relation for remote table "workI18n" */
export type WorkI18n_Obj_Rel_Insert_Input = {
  data: WorkI18n_Insert_Input;
  on_conflict?: Maybe<WorkI18n_On_Conflict>;
};

/** on conflict condition type for table "workI18n" */
export type WorkI18n_On_Conflict = {
  constraint: WorkI18n_Constraint;
  update_columns: Array<WorkI18n_Update_Column>;
};

/** ordering options when selecting data from "workI18n" */
export type WorkI18n_Order_By = {
  body?: Maybe<Order_By>;
  creationDate?: Maybe<Order_By>;
  deletedAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locale_Order_By>;
  localeId?: Maybe<Order_By>;
  metaDescription?: Maybe<Order_By>;
  metaTitle?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  work?: Maybe<Work_Order_By>;
  workId?: Maybe<Order_By>;
};

/** select columns of table "workI18n" */
export enum WorkI18n_Select_Column {
  /** column name */
  Body = "body",
  /** column name */
  CreationDate = "creationDate",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  MetaDescription = "metaDescription",
  /** column name */
  MetaTitle = "metaTitle",
  /** column name */
  Slug = "slug",
  /** column name */
  Title = "title",
  /** column name */
  WorkId = "workId"
}

/** input type for updating data in table "workI18n" */
export type WorkI18n_Set_Input = {
  body?: Maybe<Scalars["String"]>;
  creationDate?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  workId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "workI18n" */
export enum WorkI18n_Update_Column {
  /** column name */
  Body = "body",
  /** column name */
  CreationDate = "creationDate",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Id = "id",
  /** column name */
  LocaleId = "localeId",
  /** column name */
  MetaDescription = "metaDescription",
  /** column name */
  MetaTitle = "metaTitle",
  /** column name */
  Slug = "slug",
  /** column name */
  Title = "title",
  /** column name */
  WorkId = "workId"
}

export type WorkPhoto = {
  __typename?: "WorkPhoto";
  thumbnail: Scalars["String"];
  fullName: Scalars["String"];
};

export type WorkSize = {
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};
export type CreateArtistMutationVariables = {
  artistPhoto?: Maybe<Scalars["Upload"]>;
};

export type CreateArtistMutation = { __typename?: "Mutation" } & {
  createArtist: Maybe<
    { __typename?: "createArtistResult" } & Pick<CreateArtistResult, "id">
  >;
};

export type CreateArtistTranslationMutationVariables = {
  artistId: Scalars["String"];
  localeId: Scalars["String"];
  name: Scalars["String"];
  desc?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDesc?: Maybe<Scalars["String"]>;
};

export type CreateArtistTranslationMutation = { __typename?: "Mutation" } & {
  createArtistTranslation: Maybe<
    { __typename?: "createArtistTranslationResponse" } & Pick<
      CreateArtistTranslationResponse,
      "id"
    >
  >;
};

export type DeleteArtistMutationVariables = {
  artistId: Scalars["String"];
};

export type DeleteArtistMutation = { __typename?: "Mutation" } & {
  deleteArtist: Maybe<
    { __typename?: "deleteArtistResult" } & Pick<DeleteArtistResult, "deleted">
  >;
};

export type UpdateArtistTranslationMutationVariables = {
  artistId: Scalars["String"];
  localeId: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDesc?: Maybe<Scalars["String"]>;
};

export type UpdateArtistTranslationMutation = { __typename?: "Mutation" } & {
  updateArtistTranslation: Maybe<
    { __typename?: "updateArtistTranslationResponse" } & Pick<
      UpdateArtistTranslationResponse,
      "ok"
    >
  >;
};

export type GetArtistQueryVariables = {
  artistId: Scalars["uuid"];
};

export type GetArtistQuery = { __typename?: "Query" } & {
  artist: Array<
    { __typename?: "artist" } & Pick<Artist, "id" | "createdAt"> & {
        translations: Array<
          { __typename?: "artistI18n" } & Pick<
            ArtistI18n,
            | "name"
            | "localeId"
            | "description"
            | "slug"
            | "metaTitle"
            | "metaDescription"
            | "date"
          >
        >;
        works: Array<
          { __typename?: "work" } & Pick<Work, "id" | "images"> & {
              translations: Array<
                { __typename?: "workI18n" } & Pick<WorkI18n, "title" | "slug">
              >;
            }
        >;
      }
  >;
};

export type GetArtistListQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  searchTerm?: Maybe<Scalars["String"]>;
};

export type GetArtistListQuery = { __typename?: "Query" } & {
  artist: Array<
    { __typename?: "artist" } & Pick<Artist, "id" | "createdAt"> & {
        translations: Array<
          { __typename?: "artistI18n" } & Pick<
            ArtistI18n,
            | "name"
            | "description"
            | "slug"
            | "date"
            | "metaTitle"
            | "metaDescription"
            | "date"
          >
        >;
        works: Array<
          { __typename?: "work" } & Pick<Work, "id" | "images"> & {
              translations: Array<
                { __typename?: "workI18n" } & Pick<WorkI18n, "title" | "slug">
              >;
            }
        >;
      }
  >;
};

export type CreateCategoryMutationVariables = {
  photo?: Maybe<Scalars["Upload"]>;
  parentId?: Maybe<Scalars["String"]>;
  showInShop?: Maybe<Scalars["Boolean"]>;
};

export type CreateCategoryMutation = { __typename?: "Mutation" } & {
  createCategory: Maybe<
    { __typename?: "createCategoryResponse" } & Pick<
      CreateCategoryResponse,
      "id" | "photo"
    >
  >;
};

export type CreateCategoryTranslationMutationVariables = {
  id: Scalars["String"];
  localeId: Scalars["String"];
  name: Scalars["String"];
  desc?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type CreateCategoryTranslationMutation = { __typename?: "Mutation" } & {
  createCategoryTranslation: Maybe<
    { __typename?: "createCategoryTranslationResponse" } & Pick<
      CreateCategoryTranslationResponse,
      "id"
    >
  >;
};

export type DeleteCategoryMutationVariables = {
  id: Scalars["String"];
};

export type DeleteCategoryMutation = { __typename?: "Mutation" } & {
  deleteCategory: Maybe<
    { __typename?: "deleteCategoryResponse" } & Pick<
      DeleteCategoryResponse,
      "deleted"
    >
  >;
};

export type UpdateCategoryMutationVariables = {
  id: Scalars["String"];
  photo?: Maybe<Scalars["Upload"]>;
  parentId?: Maybe<Scalars["String"]>;
};

export type UpdateCategoryMutation = { __typename?: "Mutation" } & {
  updateCategory: Maybe<
    { __typename?: "updateCategoryResponse" } & Pick<
      UpdateCategoryResponse,
      "ok" | "photo"
    >
  >;
};

export type UpdateCategoryTranslationMutationVariables = {
  catId: Scalars["String"];
  localeId: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type UpdateCategoryTranslationMutation = { __typename?: "Mutation" } & {
  updateCategoryTranslation: Maybe<
    { __typename?: "updateCategoryTranslationResponse" } & Pick<
      UpdateCategoryTranslationResponse,
      "ok"
    >
  >;
};

export type CategoryitemQueryVariables = {
  categoryId: Scalars["uuid"];
};

export type CategoryitemQuery = { __typename?: "Query" } & {
  category: Array<
    { __typename?: "category" } & Pick<Category, "id"> & {
        translations: Array<
          { __typename?: "categoryI18n" } & Pick<
            CategoryI18n,
            "localeId" | "name" | "slug"
          >
        >;
      }
  >;
};

export type CategoryListQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  searchTerm?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type CategoryListQuery = { __typename?: "Query" } & {
  category: Array<
    { __typename?: "category" } & Pick<Category, "id"> & {
        translations: Array<
          { __typename?: "categoryI18n" } & Pick<CategoryI18n, "name" | "slug">
        >;
      }
  >;
};

export type CreateExhibitionMutationVariables = {
  startDate: Scalars["Date"];
  image?: Maybe<Scalars["Upload"]>;
  showInMainPage?: Maybe<Scalars["Boolean"]>;
  endDate?: Maybe<Scalars["Date"]>;
  works?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type CreateExhibitionMutation = { __typename?: "Mutation" } & {
  createExhibition: Maybe<
    { __typename?: "createExhibitionResult" } & Pick<
      CreateExhibitionResult,
      "id"
    >
  >;
};

export type CreateExhibitionFileMutationVariables = {
  localeId: Scalars["String"];
  file: Scalars["Upload"];
  exhibitionId?: Maybe<Scalars["String"]>;
};

export type CreateExhibitionFileMutation = { __typename?: "Mutation" } & {
  createFile: Maybe<
    { __typename?: "createFileResult" } & Pick<CreateFileResult, "file" | "id">
  >;
};

export type CreateExhibitionTranslationMutationVariables = {
  exhibitionId: Scalars["String"];
  localeId: Scalars["String"];
  title: Scalars["String"];
  desc?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type CreateExhibitionTranslationMutation = {
  __typename?: "Mutation";
} & {
  createExhibitionTranslation: Maybe<
    { __typename?: "createExhibitionTranslationResponse" } & Pick<
      CreateExhibitionTranslationResponse,
      "id" | "slug"
    >
  >;
};

export type DeleteExhibitionMutationVariables = {
  exhibitionId: Scalars["String"];
};

export type DeleteExhibitionMutation = { __typename?: "Mutation" } & {
  deleteExhibition: Maybe<
    { __typename?: "deleteExhibitionResult" } & Pick<
      DeleteExhibitionResult,
      "deleted"
    >
  >;
};

export type DeleteFileMutationVariables = {
  id: Scalars["String"];
};

export type DeleteFileMutation = { __typename?: "Mutation" } & {
  deleteFile: Maybe<
    { __typename?: "deleteFileResult" } & Pick<DeleteFileResult, "deleted">
  >;
};

export type UpdateExhibitionMutationVariables = {
  exhibitionId: Scalars["String"];
  showInMainPage?: Maybe<Scalars["Boolean"]>;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  image?: Maybe<Scalars["Upload"]>;
  worksToInsert?: Maybe<Array<Maybe<Scalars["String"]>>>;
  worksToDelete?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type UpdateExhibitionMutation = { __typename?: "Mutation" } & {
  updateExhibition: Maybe<
    { __typename?: "updateExhibitionResult" } & Pick<
      UpdateExhibitionResult,
      "ok"
    >
  >;
};

export type UpdateExhibitionTranslationMutationVariables = {
  exhibitionId: Scalars["String"];
  localeId: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type UpdateExhibitionTranslationMutation = {
  __typename?: "Mutation";
} & {
  updateExhibitionTranslation: Maybe<
    { __typename?: "updateExhibitionTranslationResponse" } & Pick<
      UpdateExhibitionTranslationResponse,
      "ok"
    >
  >;
};

export type GetExhibitionItemQueryVariables = {
  exhibId?: Maybe<Scalars["uuid"]>;
};

export type GetExhibitionItemQuery = { __typename?: "Query" } & {
  exhibition: Array<
    { __typename?: "exhibition" } & Pick<
      Exhibition,
      "id" | "createdAt" | "image" | "showInMainPage" | "startDate" | "endDate"
    > & {
        files: Array<
          { __typename?: "fileI18n" } & Pick<
            FileI18n,
            "id" | "title" | "slug" | "localeId" | "fileName"
          >
        >;
        translations: Array<
          { __typename?: "exhibitionI18n" } & Pick<
            ExhibitionI18n,
            | "title"
            | "body"
            | "slug"
            | "localeId"
            | "metaTitle"
            | "metaDescription"
          >
        >;
      }
  >;
};

export type GetExhibitionListQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  searchTerm?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type GetExhibitionListQuery = { __typename?: "Query" } & {
  exhibition: Array<
    { __typename?: "exhibition" } & Pick<
      Exhibition,
      "id" | "createdAt" | "image"
    > & {
        translations: Array<
          { __typename?: "exhibitionI18n" } & Pick<
            ExhibitionI18n,
            "title" | "slug" | "metaTitle" | "metaDescription"
          >
        >;
      }
  >;
};

export type WorksForExhibitionQueryVariables = {
  exhibId?: Maybe<Scalars["uuid"]>;
  localeId?: Maybe<Scalars["uuid"]>;
};

export type WorksForExhibitionQuery = { __typename?: "Query" } & {
  work: Array<
    { __typename?: "work" } & Pick<Work, "id" | "images"> & {
        translations: Array<
          { __typename?: "workI18n" } & Pick<WorkI18n, "title" | "localeId">
        >;
        artist: Maybe<
          { __typename?: "artist" } & {
            translations: Array<
              { __typename?: "artistI18n" } & Pick<ArtistI18n, "name">
            >;
          }
        >;
      }
  >;
};

export type GetWorkIdsQueryVariables = {
  searchWork?: Maybe<Scalars["String"]>;
  localeId?: Maybe<Scalars["uuid"]>;
};

export type GetWorkIdsQuery = { __typename?: "Query" } & {
  work: Array<
    { __typename?: "work" } & Pick<Work, "id" | "images"> & {
        translations: Array<
          { __typename?: "workI18n" } & Pick<
            WorkI18n,
            "title" | "slug" | "localeId"
          >
        >;
        artist: Maybe<
          { __typename?: "artist" } & {
            translations: Array<
              { __typename?: "artistI18n" } & Pick<
                ArtistI18n,
                "name" | "localeId" | "slug"
              >
            >;
          }
        >;
      }
  >;
};

export type CreateNavigationIdMutationVariables = {
  showInHeader?: Maybe<Scalars["Boolean"]>;
  showInFooter?: Maybe<Scalars["Boolean"]>;
  floatNav?: Maybe<Navigation_Floats>;
};

export type CreateNavigationIdMutation = { __typename?: "Mutation" } & {
  createNavigation: Maybe<
    { __typename?: "createNavigationResult" } & Pick<
      CreateNavigationResult,
      "id"
    >
  >;
};

export type CreateNavigationTranslationMutationVariables = {
  navId: Scalars["String"];
  localeId: Scalars["String"];
  name: Scalars["String"];
  link?: Maybe<Scalars["String"]>;
};

export type CreateNavigationTranslationMutation = {
  __typename?: "Mutation";
} & {
  createNavigationTranslation: Maybe<
    { __typename?: "createNavigationTranslationResult" } & Pick<
      CreateNavigationTranslationResult,
      "id"
    >
  >;
};

export type DeleteNavigationIdMutationVariables = {
  navId: Scalars["String"];
};

export type DeleteNavigationIdMutation = { __typename?: "Mutation" } & {
  deleteNavigation: Maybe<
    { __typename?: "deleteNavigationResult" } & Pick<
      DeleteNavigationResult,
      "deleted"
    >
  >;
};

export type UpdateNavigationIdMutationVariables = {
  navId: Scalars["String"];
  navItemOn?: Maybe<Scalars["Boolean"]>;
  showInHeader?: Maybe<Scalars["Boolean"]>;
  showInFooter?: Maybe<Scalars["Boolean"]>;
  floatNav?: Maybe<Navigation_Floats>;
  parentId?: Maybe<Scalars["String"]>;
};

export type UpdateNavigationIdMutation = { __typename?: "Mutation" } & {
  updateNavigation: Maybe<
    { __typename?: "updateNavigationResult" } & Pick<
      UpdateNavigationResult,
      "ok"
    >
  >;
};

export type UpdatePositionsOfNavMutationVariables = {
  id: Scalars["String"];
  position: Scalars["Int"];
};

export type UpdatePositionsOfNavMutation = { __typename?: "Mutation" } & {
  updatePositionsOfNavigations: Maybe<
    { __typename?: "updatePositionsOfNavigationsResult" } & Pick<
      UpdatePositionsOfNavigationsResult,
      "ok"
    >
  >;
};

export type UpdateNavigationTranslationMutationVariables = {
  navId: Scalars["String"];
  localeId: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
};

export type UpdateNavigationTranslationMutation = {
  __typename?: "Mutation";
} & {
  updateNavigationTranslation: Maybe<
    { __typename?: "updateNavigationTranslationResult" } & Pick<
      UpdateNavigationTranslationResult,
      "ok"
    >
  >;
};

export type GetNavItemQueryVariables = {
  navId: Scalars["uuid"];
};

export type GetNavItemQuery = { __typename?: "Query" } & {
  navigation: Array<
    { __typename?: "navigation" } & Pick<
      Navigation,
      "position" | "showInFooter" | "showInHeader" | "float" | "id"
    > & {
        translations: Array<
          { __typename?: "navigationI18n" } & Pick<
            NavigationI18n,
            "name" | "id" | "link" | "localeId"
          >
        >;
      }
  >;
};

export type GetNavListQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
};

export type GetNavListQuery = { __typename?: "Query" } & {
  navigation: Array<
    { __typename?: "navigation" } & Pick<
      Navigation,
      "id" | "position" | "showInFooter" | "showInHeader" | "float"
    > & {
        translations: Array<
          { __typename?: "navigationI18n" } & Pick<
            NavigationI18n,
            "name" | "id" | "link" | "localeId"
          >
        >;
      }
  >;
};

export type CreateNewsItemIdMutationVariables = {
  date?: Maybe<Scalars["String"]>;
};

export type CreateNewsItemIdMutation = { __typename?: "Mutation" } & {
  createNews: Maybe<
    { __typename?: "createNewsResult" } & Pick<
      CreateNewsResult,
      "id" | "publicationDate"
    >
  >;
};

export type CreateNewsItemTranslationMutationVariables = {
  newsId: Scalars["String"];
  localeId: Scalars["String"];
  title: Scalars["String"];
  body?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type CreateNewsItemTranslationMutation = { __typename?: "Mutation" } & {
  createNewsTranslation: Maybe<
    { __typename?: "createNewsTranslationResult" } & Pick<
      CreateNewsTranslationResult,
      "id" | "slug" | "metaTitle" | "metaDescription"
    >
  >;
};

export type DeleteNewsMutationVariables = {
  newsId: Scalars["String"];
};

export type DeleteNewsMutation = { __typename?: "Mutation" } & {
  deleteNews: Maybe<
    { __typename?: "deleteNewsResult" } & Pick<DeleteNewsResult, "deleted">
  >;
};

export type UpdateNewsItemDateMutationVariables = {
  newsId: Scalars["String"];
  date?: Maybe<Scalars["String"]>;
};

export type UpdateNewsItemDateMutation = { __typename?: "Mutation" } & {
  updateNews: Maybe<
    { __typename?: "updateNewsResult" } & Pick<UpdateNewsResult, "ok">
  >;
};

export type UpdateNewsItemTranslationMutationVariables = {
  newsId: Scalars["String"];
  localeId: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type UpdateNewsItemTranslationMutation = { __typename?: "Mutation" } & {
  updateNewsTranslation: Maybe<
    { __typename?: "updateNewsTranslationResult" } & Pick<
      UpdateNewsTranslationResult,
      "ok"
    >
  >;
};

export type GetNewsItemQueryVariables = {
  newsId?: Maybe<Scalars["uuid"]>;
};

export type GetNewsItemQuery = { __typename?: "Query" } & {
  news: Array<
    { __typename?: "news" } & Pick<News, "id" | "createdAt"> & {
        translations: Array<
          { __typename?: "newsI18n" } & Pick<
            NewsI18n,
            | "title"
            | "body"
            | "slug"
            | "localeId"
            | "metaTitle"
            | "metaDescription"
          >
        >;
      }
  >;
};

export type GetNewsListQueryVariables = {
  localeId: Scalars["uuid"];
  searchTerm?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type GetNewsListQuery = { __typename?: "Query" } & {
  news: Array<
    { __typename?: "news" } & Pick<News, "id" | "createdAt"> & {
        translations: Array<
          { __typename?: "newsI18n" } & Pick<
            NewsI18n,
            "title" | "body" | "slug" | "metaTitle" | "metaDescription"
          >
        >;
      }
  >;
};

export type CratePageLocaleMutationVariables = {
  localeId: Scalars["String"];
  pageId: Scalars["String"];
  title: Scalars["String"];
  desc?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type CratePageLocaleMutation = { __typename?: "Mutation" } & {
  createPageTranslation: Maybe<
    { __typename?: "createPageTranslationResult" } & Pick<
      CreatePageTranslationResult,
      "id" | "slug" | "metaTitle" | "metaDescription"
    >
  >;
};

export type CratePageIdMutationVariables = {};

export type CratePageIdMutation = { __typename?: "Mutation" } & {
  createPage: Maybe<
    { __typename?: "createPageResult" } & Pick<CreatePageResult, "id">
  >;
};

export type DeletePageIdMutationVariables = {
  pageId: Scalars["String"];
};

export type DeletePageIdMutation = { __typename?: "Mutation" } & {
  deletePage: Maybe<
    { __typename?: "deletePageResult" } & Pick<DeletePageResult, "deleted">
  >;
};

export type UpdatePageMutationMutationVariables = {
  localeId: Scalars["String"];
  pageId: Scalars["String"];
  title: Scalars["String"];
  desc?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type UpdatePageMutationMutation = { __typename?: "Mutation" } & {
  updatePageTranslation: Maybe<
    { __typename?: "updatePageTranslationResult" } & Pick<
      UpdatePageTranslationResult,
      "ok"
    >
  >;
};

export type PagesQueryVariables = {
  localeId: Scalars["uuid"];
  searchTerm?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type PagesQuery = { __typename?: "Query" } & {
  page: Array<
    { __typename?: "page" } & Pick<Page, "id"> & {
        translations: Array<
          { __typename?: "pageI18n" } & Pick<
            PageI18n,
            "title" | "slug" | "body"
          >
        >;
      }
  >;
};

export type UpdatePageQueryQueryVariables = {
  pageId?: Maybe<Scalars["uuid"]>;
};

export type UpdatePageQueryQuery = { __typename?: "Query" } & {
  page: Array<
    { __typename?: "page" } & Pick<Page, "id"> & {
        translations: Array<
          { __typename?: "pageI18n" } & Pick<
            PageI18n,
            | "title"
            | "slug"
            | "body"
            | "localeId"
            | "metaTitle"
            | "metaDescription"
          >
        >;
      }
  >;
};

export type CreateTranslationMutationVariables = {
  key: Scalars["String"];
  value: Scalars["String"];
  localeId: Scalars["String"];
  page: Pages;
};

export type CreateTranslationMutation = { __typename?: "Mutation" } & {
  createTranslation: Maybe<
    { __typename?: "createTranslationResponse" } & Pick<
      CreateTranslationResponse,
      "id"
    >
  >;
};

export type UpdateTranslationMutationVariables = {
  value: Scalars["String"];
  id: Scalars["String"];
};

export type UpdateTranslationMutation = { __typename?: "Mutation" } & {
  updateTranslation: Maybe<
    { __typename?: "updateTranslationResponse" } & Pick<
      UpdateTranslationResponse,
      "ok"
    >
  >;
};

export type GetTranslationKeyQueryVariables = {
  key?: Maybe<Scalars["String"]>;
};

export type GetTranslationKeyQuery = { __typename?: "Query" } & {
  translation: Array<
    { __typename?: "translation" } & Pick<
      Translation,
      "id" | "key" | "value" | "page" | "localeId"
    >
  >;
};

export type GetTranslationsQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  searchTerm?: Maybe<Scalars["String"]>;
};

export type GetTranslationsQuery = { __typename?: "Query" } & {
  translation: Array<
    { __typename?: "translation" } & Pick<Translation, "id" | "key" | "value">
  >;
};

export type CreateBasisMutationVariables = {};

export type CreateBasisMutation = { __typename?: "Mutation" } & {
  createBasis: Maybe<
    { __typename?: "createBasisResult" } & Pick<CreateBasisResult, "id">
  >;
};

export type CreateBasisLocaleMutationVariables = {
  basisId: Scalars["String"];
  localeId: Scalars["String"];
  name: Scalars["String"];
};

export type CreateBasisLocaleMutation = { __typename?: "Mutation" } & {
  createBasisTranslation: Maybe<
    { __typename?: "createBasisTranslationResult" } & Pick<
      CreateBasisTranslationResult,
      "id"
    >
  >;
};

export type CreateProvenanceMutationVariables = {};

export type CreateProvenanceMutation = { __typename?: "Mutation" } & {
  createProvenance: Maybe<
    { __typename?: "createProvenanceResult" } & Pick<
      CreateProvenanceResult,
      "id"
    >
  >;
};

export type CreateProvenanceLocaleMutationVariables = {
  provenanceId: Scalars["String"];
  localeId: Scalars["String"];
  name: Scalars["String"];
};

export type CreateProvenanceLocaleMutation = { __typename?: "Mutation" } & {
  createProvenanceTranslation: Maybe<
    { __typename?: "createProvenanceTranslationResult" } & Pick<
      CreateProvenanceTranslationResult,
      "id"
    >
  >;
};

export type CreateSchoolMutationVariables = {};

export type CreateSchoolMutation = { __typename?: "Mutation" } & {
  createSchool: Maybe<
    { __typename?: "createSchoolResult" } & Pick<CreateSchoolResult, "id">
  >;
};

export type CreateSchoolLocaleMutationVariables = {
  shoolId: Scalars["String"];
  localeId: Scalars["String"];
  name: Scalars["String"];
};

export type CreateSchoolLocaleMutation = { __typename?: "Mutation" } & {
  createSchoolTranslation: Maybe<
    { __typename?: "createSchoolTranslationResult" } & Pick<
      CreateSchoolTranslationResult,
      "id"
    >
  >;
};

export type CreateTechniqueMutationVariables = {};

export type CreateTechniqueMutation = { __typename?: "Mutation" } & {
  createTechnique: Maybe<
    { __typename?: "createTechniqueResult" } & Pick<CreateTechniqueResult, "id">
  >;
};

export type CreateTechniqueLocaleMutationVariables = {
  techniqueId: Scalars["String"];
  localeId: Scalars["String"];
  name: Scalars["String"];
};

export type CreateTechniqueLocaleMutation = { __typename?: "Mutation" } & {
  createTechniqueTranslation: Maybe<
    { __typename?: "createTechniqueTranslationResult" } & Pick<
      CreateTechniqueTranslationResult,
      "id"
    >
  >;
};

export type DeleteBasisMutationVariables = {
  id: Scalars["String"];
};

export type DeleteBasisMutation = { __typename?: "Mutation" } & {
  deleteBasis: Maybe<
    { __typename?: "deleteBasisResult" } & Pick<DeleteBasisResult, "deleted">
  >;
};

export type DeleteProvenanceMutationVariables = {
  id: Scalars["String"];
};

export type DeleteProvenanceMutation = { __typename?: "Mutation" } & {
  deleteSchool: Maybe<
    { __typename?: "deleteSchoolResult" } & Pick<DeleteSchoolResult, "deleted">
  >;
};

export type DeleteSchoolMutationVariables = {
  id: Scalars["String"];
};

export type DeleteSchoolMutation = { __typename?: "Mutation" } & {
  deleteSchool: Maybe<
    { __typename?: "deleteSchoolResult" } & Pick<DeleteSchoolResult, "deleted">
  >;
};

export type DeleteTechniqueMutationVariables = {
  id: Scalars["String"];
};

export type DeleteTechniqueMutation = { __typename?: "Mutation" } & {
  deleteTechnique: Maybe<
    { __typename?: "deleteTechniqueResult" } & Pick<
      DeleteTechniqueResult,
      "deleted"
    >
  >;
};

export type BasisListQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
};

export type BasisListQuery = { __typename?: "Query" } & {
  basis: Array<
    { __typename?: "basis" } & Pick<Basis, "id"> & {
        translations: Array<
          { __typename?: "basisI18n" } & Pick<BasisI18n, "name" | "localeId">
        >;
      }
  >;
};

export type ProvenanceListQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
};

export type ProvenanceListQuery = { __typename?: "Query" } & {
  provenance: Array<
    { __typename?: "provenance" } & Pick<Provenance, "id"> & {
        translations: Array<
          { __typename?: "provenanceI18n" } & Pick<
            ProvenanceI18n,
            "name" | "localeId"
          >
        >;
      }
  >;
};

export type SchoolListQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
};

export type SchoolListQuery = { __typename?: "Query" } & {
  school: Array<
    { __typename?: "school" } & Pick<School, "id"> & {
        translations: Array<
          { __typename?: "schoolI18n" } & Pick<SchoolI18n, "name" | "localeId">
        >;
      }
  >;
};

export type TechniqueListQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
};

export type TechniqueListQuery = { __typename?: "Query" } & {
  technique: Array<
    { __typename?: "technique" } & Pick<Technique, "id"> & {
        translations: Array<
          { __typename?: "techniqueI18n" } & Pick<
            TechniqueI18n,
            "name" | "localeId"
          >
        >;
      }
  >;
};

export type CreateWorkMutationVariables = {
  images: Array<Scalars["Upload"]>;
  artistId?: Maybe<Scalars["String"]>;
  showInMainPage?: Maybe<Scalars["Boolean"]>;
  forSale?: Maybe<Scalars["Boolean"]>;
  price?: Maybe<Scalars["Float"]>;
  techniqueId?: Maybe<Scalars["String"]>;
  basisId?: Maybe<Scalars["String"]>;
  schoolId?: Maybe<Scalars["String"]>;
  provenanceId?: Maybe<Scalars["String"]>;
};

export type CreateWorkMutation = { __typename?: "Mutation" } & {
  createWork: Maybe<
    { __typename?: "CreateWorkResult" } & Pick<CreateWorkResult, "id">
  >;
};

export type CreateWorkLocaleMutationVariables = {
  workId: Scalars["String"];
  localeId: Scalars["String"];
  title: Scalars["String"];
  body?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
};

export type CreateWorkLocaleMutation = { __typename?: "Mutation" } & {
  createWorkTranslation: Maybe<
    { __typename?: "createWorkTranslationResponse" } & Pick<
      CreateWorkTranslationResponse,
      "id"
    >
  >;
};

export type DeleteWorkMutationVariables = {
  workId: Scalars["String"];
};

export type DeleteWorkMutation = { __typename?: "Mutation" } & {
  deleteWork: Maybe<
    { __typename?: "DeleteWorkResult" } & Pick<DeleteWorkResult, "deleted">
  >;
};

export type GetWorkArtistQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
};

export type GetWorkArtistQuery = { __typename?: "Query" } & {
  artist: Array<
    { __typename?: "artist" } & Pick<Artist, "id"> & {
        translations: Array<
          { __typename?: "artistI18n" } & Pick<
            ArtistI18n,
            "name" | "slug" | "localeId"
          >
        >;
      }
  >;
};

export type WorkItemQueryVariables = {
  workId: Scalars["uuid"];
};

export type WorkItemQuery = { __typename?: "Query" } & {
  work: Array<
    { __typename?: "work" } & Pick<
      Work,
      | "id"
      | "price"
      | "images"
      | "forSale"
      | "price"
      | "size"
      | "positionOnMainPage"
      | "showInMainPage"
    > & {
        provenance: Maybe<
          { __typename?: "provenance" } & Pick<Provenance, "id"> & {
              translations: Array<
                { __typename?: "provenanceI18n" } & Pick<
                  ProvenanceI18n,
                  "name" | "localeId"
                >
              >;
            }
        >;
        school: Maybe<
          { __typename?: "school" } & Pick<School, "id"> & {
              translations: Array<
                { __typename?: "schoolI18n" } & Pick<
                  SchoolI18n,
                  "name" | "localeId"
                >
              >;
            }
        >;
        basis: Maybe<
          { __typename?: "basis" } & Pick<Basis, "id"> & {
              translations: Array<
                { __typename?: "basisI18n" } & Pick<
                  BasisI18n,
                  "name" | "localeId"
                >
              >;
            }
        >;
        technique: Maybe<
          { __typename?: "technique" } & Pick<Technique, "id"> & {
              translations: Array<
                { __typename?: "techniqueI18n" } & Pick<
                  TechniqueI18n,
                  "name" | "localeId"
                >
              >;
            }
        >;
        translations: Array<
          { __typename?: "workI18n" } & Pick<
            WorkI18n,
            "title" | "slug" | "localeId"
          >
        >;
        artist: Maybe<
          { __typename?: "artist" } & Pick<Artist, "id"> & {
              translations: Array<
                { __typename?: "artistI18n" } & Pick<
                  ArtistI18n,
                  "name" | "slug" | "localeId"
                >
              >;
            }
        >;
      }
  >;
};

export type WorkListQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  searchTerm?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type WorkListQuery = { __typename?: "Query" } & {
  work: Array<
    { __typename?: "work" } & Pick<
      Work,
      "id" | "price" | "images" | "showInMainPage"
    > & {
        translations: Array<
          { __typename?: "workI18n" } & Pick<WorkI18n, "title" | "slug">
        >;
        artist: Maybe<
          { __typename?: "artist" } & {
            translations: Array<
              { __typename?: "artistI18n" } & Pick<ArtistI18n, "name" | "slug">
            >;
          }
        >;
      }
  >;
};

export type AddProductToCartMutationVariables = {
  productId?: Maybe<Scalars["String"]>;
  quantity?: Maybe<Scalars["Int"]>;
};

export type AddProductToCartMutation = { __typename?: "Mutation" } & {
  addProductToCart: Maybe<
    { __typename?: "createCartResponse" } & Pick<
      CreateCartResponse,
      "quantity" | "id" | "createdAt" | "workId"
    >
  >;
};

export type DeleteProductFromCartMutationVariables = {
  cartProductId: Scalars["String"];
};

export type DeleteProductFromCartMutation = { __typename?: "Mutation" } & {
  deleteProductFromCart: Maybe<
    { __typename?: "deleteCartResponse" } & Pick<DeleteCartResponse, "deleted">
  >;
};

export type CartListQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  workIdCart?: Maybe<Scalars["uuid"]>;
};

export type CartListQuery = { __typename?: "Query" } & {
  cart: Array<
    { __typename?: "cart" } & Pick<Cart, "id" | "quantity"> & {
        work: { __typename?: "work" } & Pick<
          Work,
          "id" | "images" | "price"
        > & {
            translations: Array<
              { __typename?: "workI18n" } & Pick<WorkI18n, "title" | "slug">
            >;
            artist: Maybe<
              { __typename?: "artist" } & {
                translations: Array<
                  { __typename?: "artistI18n" } & Pick<
                    ArtistI18n,
                    "name" | "slug"
                  >
                >;
              }
            >;
          };
      }
  >;
};

export type ArtistsCategoryQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  titleSarch?: Maybe<Scalars["String"]>;
};

export type ArtistsCategoryQuery = { __typename?: "Query" } & {
  artistI18n: Array<
    { __typename?: "artistI18n" } & Pick<
      ArtistI18n,
      "name" | "metaDescription" | "slug" | "id"
    >
  >;
  metadata: { __typename?: "artistI18n_aggregate" } & {
    info: Maybe<
      { __typename?: "artistI18n_aggregate_fields" } & Pick<
        ArtistI18n_Aggregate_Fields,
        "count"
      >
    >;
  };
};

export type CategoryCategoriesQueryVariables = {
  slug?: Maybe<Scalars["String"]>;
  localeId?: Maybe<Scalars["uuid"]>;
};

export type CategoryCategoriesQuery = { __typename?: "Query" } & {
  category: Array<
    { __typename?: "category" } & {
      translations: Array<
        { __typename?: "categoryI18n" } & Pick<
          CategoryI18n,
          "metaTitle" | "metaDescription" | "description"
        > & { title: CategoryI18n["name"] }
      >;
    }
  >;
};

export type CategoryIdListQueryVariables = {
  catId?: Maybe<Scalars["uuid"]>;
};

export type CategoryIdListQuery = { __typename?: "Query" } & {
  category: Array<
    { __typename?: "category" } & Pick<Category, "id"> & {
        artistCategories: Array<
          { __typename?: "artistCategory" } & Pick<ArtistCategory, "categoryId">
        >;
        categoryWorks: Array<
          { __typename?: "workCategory" } & Pick<WorkCategory, "categoryId">
        >;
        exhibitionCategories: Array<
          { __typename?: "exhibitionCategory" } & Pick<
            ExhibitionCategory,
            "categoryId"
          >
        >;
        newsCategories: Array<
          { __typename?: "newsCategory" } & Pick<NewsCategory, "categoryId">
        >;
      }
  >;
};

export type EventCategoryQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type EventCategoryQuery = { __typename?: "Query" } & {
  newsI18n: Array<
    { __typename?: "newsI18n" } & Pick<
      NewsI18n,
      "id" | "title" | "slug" | "metaDescription"
    >
  >;
  metadata: { __typename?: "newsI18n_aggregate" } & {
    info: Maybe<
      { __typename?: "newsI18n_aggregate_fields" } & Pick<
        NewsI18n_Aggregate_Fields,
        "count"
      >
    >;
  };
};

export type ExhibitionCategoryQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  limit?: Maybe<Scalars["Int"]>;
  endLte?: Maybe<Scalars["timestamptz"]>;
  endGte?: Maybe<Scalars["timestamptz"]>;
  startLte?: Maybe<Scalars["timestamptz"]>;
  startGte?: Maybe<Scalars["timestamptz"]>;
  offset?: Maybe<Scalars["Int"]>;
  titleSarch?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<Order_By>;
};

export type ExhibitionCategoryQuery = { __typename?: "Query" } & {
  exhibition: Array<
    { __typename?: "exhibition" } & Pick<
      Exhibition,
      "id" | "image" | "startDate" | "endDate"
    > & {
        translations: Array<
          { __typename?: "exhibitionI18n" } & Pick<
            ExhibitionI18n,
            "title" | "slug" | "id"
          >
        >;
        exhibitionWorks: Array<
          { __typename?: "exhibitionWork" } & {
            work: { __typename?: "work" } & {
              artist: Maybe<
                { __typename?: "artist" } & {
                  translations: Array<
                    { __typename?: "artistI18n" } & Pick<
                      ArtistI18n,
                      "id" | "slug" | "name"
                    >
                  >;
                }
              >;
            };
          }
        >;
      }
  >;
  metadata: { __typename?: "exhibition_aggregate" } & {
    info: Maybe<
      { __typename?: "exhibition_aggregate_fields" } & Pick<
        Exhibition_Aggregate_Fields,
        "count"
      >
    >;
  };
};

export type ShopCategoryQueryVariables = {
  localeId: Scalars["uuid"];
  shopCat?: Maybe<Scalars["uuid"]>;
};

export type ShopCategoryQuery = { __typename?: "Query" } & {
  category: Array<
    { __typename?: "category" } & {
      translations: Array<
        { __typename?: "categoryI18n" } & Pick<CategoryI18n, "name">
      >;
      descendants: Array<
        { __typename?: "category_closure" } & {
          descendant: { __typename?: "category" } & Pick<Category, "id"> & {
              translations: Array<
                { __typename?: "categoryI18n" } & Pick<
                  CategoryI18n,
                  "name" | "slug"
                >
              >;
            };
        }
      >;
    }
  >;
};

export type WorkCategoryQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  catId?: Maybe<Scalars["uuid"]>;
  titleSarch?: Maybe<Scalars["String"]>;
  forSale?: Maybe<Scalars["Boolean"]>;
};

export type WorkCategoryQuery = { __typename?: "Query" } & {
  workCategory: Array<
    { __typename?: "workCategory" } & {
      work: { __typename?: "work" } & Pick<
        Work,
        "id" | "images" | "forSale" | "price"
      > & {
          translations: Array<
            { __typename?: "workI18n" } & Pick<
              WorkI18n,
              "id" | "title" | "slug" | "creationDate"
            >
          >;
          artist: Maybe<
            { __typename?: "artist" } & {
              translations: Array<
                { __typename?: "artistI18n" } & Pick<
                  ArtistI18n,
                  "name" | "slug"
                >
              >;
            }
          >;
        };
    }
  >;
  metadata: { __typename?: "work_aggregate" } & {
    info: Maybe<
      { __typename?: "work_aggregate_fields" } & Pick<
        Work_Aggregate_Fields,
        "count"
      >
    >;
  };
};

export type AllEventsHomeQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type AllEventsHomeQuery = { __typename?: "Query" } & {
  newsI18n: Array<
    { __typename?: "newsI18n" } & Pick<NewsI18n, "title" | "slug">
  >;
};

export type ButtonsSlugsQueryVariables = {
  catEvent: Scalars["uuid"];
  catArtist: Scalars["uuid"];
  catExhib: Scalars["uuid"];
  catShop: Scalars["uuid"];
  localeId: Scalars["uuid"];
};

export type ButtonsSlugsQuery = { __typename?: "Query" } & {
  categoryI18n: Array<
    { __typename?: "categoryI18n" } & Pick<CategoryI18n, "slug">
  >;
};

export type ExhibitionListQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type ExhibitionListQuery = { __typename?: "Query" } & {
  exhibition: Array<
    { __typename?: "exhibition" } & Pick<
      Exhibition,
      "id" | "image" | "startDate" | "endDate"
    > & {
        translations: Array<
          { __typename?: "exhibitionI18n" } & Pick<
            ExhibitionI18n,
            "title" | "slug" | "id"
          >
        >;
        exhibitionWorks: Array<
          { __typename?: "exhibitionWork" } & {
            work: { __typename?: "work" } & {
              artist: Maybe<
                { __typename?: "artist" } & {
                  translations: Array<
                    { __typename?: "artistI18n" } & Pick<
                      ArtistI18n,
                      "id" | "slug" | "name"
                    >
                  >;
                }
              >;
            };
          }
        >;
      }
  >;
};

export type GoodsHomeQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type GoodsHomeQuery = { __typename?: "Query" } & {
  work: Array<
    { __typename?: "work" } & Pick<Work, "images" | "price"> & {
        artist: Maybe<
          { __typename?: "artist" } & {
            translations: Array<
              { __typename?: "artistI18n" } & Pick<ArtistI18n, "name" | "slug">
            >;
          }
        >;
        translations: Array<
          { __typename?: "workI18n" } & Pick<
            WorkI18n,
            "title" | "slug" | "creationDate"
          >
        >;
      }
  >;
};

export type HomePageQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  pageId?: Maybe<Scalars["uuid"]>;
};

export type HomePageQuery = { __typename?: "Query" } & {
  pageI18n: Array<
    { __typename?: "pageI18n" } & Pick<
      PageI18n,
      "title" | "metaTitle" | "metaDescription" | "body" | "pageId"
    >
  >;
};

export type SliderQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
};

export type SliderQuery = { __typename?: "Query" } & {
  slider: Array<
    { __typename?: "slider" } & Pick<Slider, "files"> & {
        translations: Array<
          { __typename?: "sliderI18n" } & Pick<
            SliderI18n,
            "title" | "body" | "slug"
          >
        >;
      }
  >;
};

export type WorksHomePageQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type WorksHomePageQuery = { __typename?: "Query" } & {
  work: Array<
    { __typename?: "work" } & Pick<Work, "id" | "images"> & {
        translations: Array<
          { __typename?: "workI18n" } & Pick<
            WorkI18n,
            "title" | "slug" | "creationDate"
          >
        >;
        artist: Maybe<
          { __typename?: "artist" } & {
            translations: Array<
              { __typename?: "artistI18n" } & Pick<
                ArtistI18n,
                "id" | "slug" | "name"
              >
            >;
          }
        >;
      }
  >;
};

export type LocalesQueryVariables = {};

export type LocalesQuery = { __typename?: "Query" } & {
  locale: Array<
    { __typename?: "locale" } & Pick<
      Locale,
      "id" | "name" | "code" | "isDefault"
    >
  >;
};

export type NavigationQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
};

export type NavigationQuery = { __typename?: "Query" } & {
  navigationI18n: Array<
    { __typename?: "navigationI18n" } & Pick<
      NavigationI18n,
      "link" | "name"
    > & {
        navigation: { __typename?: "navigation" } & Pick<
          Navigation,
          "id" | "position" | "showInFooter" | "showInHeader" | "float"
        > & {
            descendants: Array<
              { __typename?: "navigation" } & Pick<
                Navigation,
                "showInFooter" | "showInHeader" | "position" | "float"
              > & {
                  translations: Array<
                    { __typename?: "navigationI18n" } & Pick<
                      NavigationI18n,
                      "name" | "link"
                    >
                  >;
                }
            >;
          };
      }
  >;
};

export type SearchSlugQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  slug?: Maybe<Scalars["String"]>;
};

export type SearchSlugQuery = { __typename?: "Query" } & {
  category: Array<
    { __typename?: "category" } & {
      translations: Array<
        { __typename?: "categoryI18n" } & Pick<
          CategoryI18n,
          "categoryId" | "slug" | "name"
        >
      >;
    }
  >;
  work: Array<
    { __typename?: "work" } & {
      translations: Array<
        { __typename?: "workI18n" } & Pick<WorkI18n, "id" | "title" | "slug">
      >;
    }
  >;
  exhibition: Array<
    { __typename?: "exhibition" } & {
      translations: Array<
        { __typename?: "exhibitionI18n" } & Pick<
          ExhibitionI18n,
          "id" | "title" | "slug"
        >
      >;
    }
  >;
  artist: Array<
    { __typename?: "artist" } & {
      translations: Array<
        { __typename?: "artistI18n" } & Pick<ArtistI18n, "id" | "name" | "slug">
      >;
    }
  >;
  news: Array<
    { __typename?: "news" } & {
      translations: Array<
        { __typename?: "newsI18n" } & Pick<NewsI18n, "id" | "title" | "slug">
      >;
    }
  >;
  page: Array<
    { __typename?: "page" } & {
      translations: Array<
        { __typename?: "pageI18n" } & Pick<PageI18n, "id" | "title" | "slug">
      >;
    }
  >;
};

export type SocialListQueryVariables = {};

export type SocialListQuery = { __typename?: "Query" } & {
  config: Array<{ __typename?: "config" } & Pick<Config, "socialList">>;
};

export type StaticTranslationQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
};

export type StaticTranslationQuery = { __typename?: "Query" } & {
  translation: Array<
    { __typename?: "translation" } & Pick<Translation, "key" | "value">
  >;
};

export type GetArtistLocaleQueryVariables = {
  slug?: Maybe<Scalars["String"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type GetArtistLocaleQuery = { __typename?: "Query" } & {
  artist: Array<
    { __typename?: "artist" } & Pick<Artist, "id"> & {
        metadata: { __typename?: "work_aggregate" } & {
          info: Maybe<
            { __typename?: "work_aggregate_fields" } & Pick<
              Work_Aggregate_Fields,
              "count"
            >
          >;
        };
        translations: Array<
          { __typename?: "artistI18n" } & Pick<
            ArtistI18n,
            | "id"
            | "slug"
            | "metaTitle"
            | "name"
            | "metaDescription"
            | "description"
            | "localeId"
          >
        >;
        works: Array<
          { __typename?: "work" } & Pick<
            Work,
            "images" | "price" | "forSale"
          > & {
              translations: Array<
                { __typename?: "workI18n" } & Pick<
                  WorkI18n,
                  "title" | "slug" | "creationDate"
                >
              >;
            }
        >;
      }
  >;
};

export type GetExhibitionLocaleQueryVariables = {
  slug: Scalars["String"];
  localeId: Scalars["uuid"];
  limit?: Maybe<Scalars["Int"]>;
  offset: Scalars["Int"];
};

export type GetExhibitionLocaleQuery = { __typename?: "Query" } & {
  exhibition: Array<
    { __typename?: "exhibition" } & Pick<
      Exhibition,
      "id" | "image" | "startDate" | "endDate"
    > & {
        metadata: { __typename?: "exhibitionWork_aggregate" } & {
          info: Maybe<
            { __typename?: "exhibitionWork_aggregate_fields" } & Pick<
              ExhibitionWork_Aggregate_Fields,
              "count"
            >
          >;
        };
        files: Array<
          { __typename?: "fileI18n" } & Pick<
            FileI18n,
            "id" | "title" | "slug" | "localeId" | "fileName"
          >
        >;
        translations: Array<
          { __typename?: "exhibitionI18n" } & Pick<
            ExhibitionI18n,
            | "id"
            | "slug"
            | "metaTitle"
            | "title"
            | "metaDescription"
            | "body"
            | "localeId"
          >
        >;
        exhibitionWorks: Array<
          { __typename?: "exhibitionWork" } & {
            work: { __typename?: "work" } & Pick<
              Work,
              "images" | "price" | "forSale"
            > & {
                translations: Array<
                  { __typename?: "workI18n" } & Pick<
                    WorkI18n,
                    "title" | "localeId" | "slug" | "creationDate"
                  >
                >;
                artist: Maybe<
                  { __typename?: "artist" } & {
                    translations: Array<
                      { __typename?: "artistI18n" } & Pick<
                        ArtistI18n,
                        "name" | "slug"
                      >
                    >;
                  }
                >;
              };
          }
        >;
      }
  >;
};

export type GetEventLocaleQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  slug?: Maybe<Scalars["String"]>;
};

export type GetEventLocaleQuery = { __typename?: "Query" } & {
  news: Array<
    { __typename?: "news" } & {
      translations: Array<
        { __typename?: "newsI18n" } & Pick<
          NewsI18n,
          "metaDescription" | "metaTitle" | "title" | "body"
        >
      >;
    }
  >;
};

export type PageQueryVariables = {
  localeId?: Maybe<Scalars["uuid"]>;
  slug?: Maybe<Scalars["String"]>;
};

export type PageQuery = { __typename?: "Query" } & {
  page: Array<
    { __typename?: "page" } & {
      translations: Array<
        { __typename?: "pageI18n" } & Pick<
          PageI18n,
          "metaDescription" | "metaTitle" | "title" | "body"
        >
      >;
    }
  >;
};

export type SearchQueryVariables = {
  localeId: Scalars["String"];
  searchTerm: Scalars["String"];
  limit?: Maybe<Scalars["Int"]>;
};

export type SearchQuery = { __typename?: "Query" } & {
  search: Array<
    Maybe<
      { __typename?: "SearchResultData" } & Pick<
        SearchResultData,
        "slug" | "name" | "description"
      >
    >
  >;
};

export type GetWorkLocaleQueryVariables = {
  slug?: Maybe<Scalars["String"]>;
  localeId?: Maybe<Scalars["uuid"]>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type GetWorkLocaleQuery = { __typename?: "Query" } & {
  work: Array<
    { __typename?: "work" } & Pick<
      Work,
      "id" | "images" | "price" | "forSale" | "size"
    > & {
        translations: Array<
          { __typename?: "workI18n" } & Pick<
            WorkI18n,
            | "id"
            | "slug"
            | "metaTitle"
            | "title"
            | "metaDescription"
            | "localeId"
            | "creationDate"
          >
        >;
        basis: Maybe<
          { __typename?: "basis" } & {
            translations: Array<
              { __typename?: "basisI18n" } & Pick<BasisI18n, "name">
            >;
          }
        >;
        technique: Maybe<
          { __typename?: "technique" } & {
            translations: Array<
              { __typename?: "techniqueI18n" } & Pick<TechniqueI18n, "name">
            >;
          }
        >;
        school: Maybe<
          { __typename?: "school" } & {
            translations: Array<
              { __typename?: "schoolI18n" } & Pick<SchoolI18n, "name">
            >;
          }
        >;
        provenance: Maybe<
          { __typename?: "provenance" } & {
            translations: Array<
              { __typename?: "provenanceI18n" } & Pick<ProvenanceI18n, "name">
            >;
          }
        >;
        workExhibitions: Array<
          { __typename?: "exhibitionWork" } & {
            exhibition: { __typename?: "exhibition" } & Pick<
              Exhibition,
              "startDate" | "endDate"
            > & {
                translations: Array<
                  { __typename?: "exhibitionI18n" } & Pick<
                    ExhibitionI18n,
                    "title" | "slug"
                  >
                >;
              };
          }
        >;
        artist: Maybe<
          { __typename?: "artist" } & {
            metadata: { __typename?: "work_aggregate" } & {
              info: Maybe<
                { __typename?: "work_aggregate_fields" } & Pick<
                  Work_Aggregate_Fields,
                  "count"
                >
              >;
            };
            translations: Array<
              { __typename?: "artistI18n" } & Pick<
                ArtistI18n,
                "name" | "slug" | "description"
              >
            >;
            works: Array<
              { __typename?: "work" } & Pick<
                Work,
                "images" | "price" | "forSale"
              > & {
                  translations: Array<
                    { __typename?: "workI18n" } & Pick<
                      WorkI18n,
                      "title" | "slug" | "creationDate"
                    >
                  >;
                }
            >;
          }
        >;
      }
  >;
};

export const CreateArtistDocument = gql`
  mutation createArtist($artistPhoto: Upload) {
    createArtist(photo: $artistPhoto) {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateArtistGQL extends Apollo.Mutation<
  CreateArtistMutation,
  CreateArtistMutationVariables
> {
  document = CreateArtistDocument;
}
export const CreateArtistTranslationDocument = gql`
  mutation createArtistTranslation(
    $artistId: String!
    $localeId: String!
    $name: String!
    $desc: String
    $date: String
    $metaTitle: String
    $metaDesc: String
  ) {
    createArtistTranslation(
      artistId: $artistId
      localeId: $localeId
      data: {
        name: $name
        description: $desc
        date: $date
        metaTitle: $metaTitle
        metaDescription: $metaDesc
      }
    ) {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateArtistTranslationGQL extends Apollo.Mutation<
  CreateArtistTranslationMutation,
  CreateArtistTranslationMutationVariables
> {
  document = CreateArtistTranslationDocument;
}
export const DeleteArtistDocument = gql`
  mutation deleteArtist($artistId: String!) {
    deleteArtist(id: $artistId) {
      deleted
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class DeleteArtistGQL extends Apollo.Mutation<
  DeleteArtistMutation,
  DeleteArtistMutationVariables
> {
  document = DeleteArtistDocument;
}
export const UpdateArtistTranslationDocument = gql`
  mutation updateArtistTranslation(
    $artistId: String!
    $localeId: String!
    $name: String
    $desc: String
    $date: String
    $metaTitle: String
    $metaDesc: String
  ) {
    updateArtistTranslation(
      artistId: $artistId
      localeId: $localeId
      data: {
        name: $name
        description: $desc
        date: $date
        metaTitle: $metaTitle
        metaDescription: $metaDesc
      }
    ) {
      ok
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UpdateArtistTranslationGQL extends Apollo.Mutation<
  UpdateArtistTranslationMutation,
  UpdateArtistTranslationMutationVariables
> {
  document = UpdateArtistTranslationDocument;
}
export const GetArtistDocument = gql`
  query getArtist($artistId: uuid!) {
    artist(where: { id: { _eq: $artistId } }) {
      id
      createdAt
      translations(order_by: { localeId: asc }) {
        name
        localeId
        description
        slug
        metaTitle
        metaDescription
        date
      }
      works {
        id
        images
        translations {
          title
          slug
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetArtistGQL extends Apollo.Query<
  GetArtistQuery,
  GetArtistQueryVariables
> {
  document = GetArtistDocument;
}
export const GetArtistListDocument = gql`
  query getArtistList(
    $localeId: uuid
    $limit: Int = 20
    $offset: Int = 0
    $searchTerm: String
  ) {
    artist(
      where: { translations: { name: { _ilike: $searchTerm } } }
      order_by: { createdAt: asc }
      limit: $limit
      offset: $offset
    ) {
      id
      createdAt
      translations(where: { localeId: { _eq: $localeId } }) {
        name
        description
        slug
        date
        metaTitle
        metaDescription
        date
      }
      works {
        id
        images
        translations(where: { localeId: { _eq: $localeId } }) {
          title
          slug
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetArtistListGQL extends Apollo.Query<
  GetArtistListQuery,
  GetArtistListQueryVariables
> {
  document = GetArtistListDocument;
}
export const CreateCategoryDocument = gql`
  mutation createCategory(
    $photo: Upload
    $parentId: String
    $showInShop: Boolean
  ) {
    createCategory(
      photo: $photo
      data: { parentId: $parentId, showInShop: $showInShop }
    ) {
      id
      photo
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateCategoryGQL extends Apollo.Mutation<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
> {
  document = CreateCategoryDocument;
}
export const CreateCategoryTranslationDocument = gql`
  mutation createCategoryTranslation(
    $id: String!
    $localeId: String!
    $name: String!
    $desc: String
    $metaTitle: String
    $metaDescription: String
  ) {
    createCategoryTranslation(
      categoryId: $id
      localeId: $localeId
      data: {
        name: $name
        description: $desc
        metaTitle: $metaTitle
        metaDescription: $metaDescription
      }
    ) {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateCategoryTranslationGQL extends Apollo.Mutation<
  CreateCategoryTranslationMutation,
  CreateCategoryTranslationMutationVariables
> {
  document = CreateCategoryTranslationDocument;
}
export const DeleteCategoryDocument = gql`
  mutation deleteCategory($id: String!) {
    deleteCategory(id: $id) {
      deleted
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class DeleteCategoryGQL extends Apollo.Mutation<
  DeleteCategoryMutation,
  DeleteCategoryMutationVariables
> {
  document = DeleteCategoryDocument;
}
export const UpdateCategoryDocument = gql`
  mutation updateCategory($id: String!, $photo: Upload, $parentId: String) {
    updateCategory(id: $id, photo: $photo, data: { parentId: $parentId }) {
      ok
      photo
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UpdateCategoryGQL extends Apollo.Mutation<
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
> {
  document = UpdateCategoryDocument;
}
export const UpdateCategoryTranslationDocument = gql`
  mutation updateCategoryTranslation(
    $catId: String!
    $localeId: String!
    $name: String
    $desc: String
    $metaTitle: String
    $metaDescription: String
  ) {
    updateCategoryTranslation(
      categoryId: $catId
      localeId: $localeId
      data: {
        name: $name
        description: $desc
        metaTitle: $metaTitle
        metaDescription: $metaDescription
      }
    ) {
      ok
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UpdateCategoryTranslationGQL extends Apollo.Mutation<
  UpdateCategoryTranslationMutation,
  UpdateCategoryTranslationMutationVariables
> {
  document = UpdateCategoryTranslationDocument;
}
export const CategoryitemDocument = gql`
  query categoryitem($categoryId: uuid!) {
    category(where: { id: { _eq: $categoryId } }) {
      id
      translations(order_by: { localeId: asc }) {
        localeId
        name
        slug
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CategoryitemGQL extends Apollo.Query<
  CategoryitemQuery,
  CategoryitemQueryVariables
> {
  document = CategoryitemDocument;
}
export const CategoryListDocument = gql`
  query categoryList(
    $localeId: uuid
    $searchTerm: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    category(
      where: { translations: { name: { _ilike: $searchTerm } } }
      limit: $limit
      offset: $offset
    ) {
      id
      translations(where: { localeId: { _eq: $localeId } }) {
        name
        slug
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CategoryListGQL extends Apollo.Query<
  CategoryListQuery,
  CategoryListQueryVariables
> {
  document = CategoryListDocument;
}
export const CreateExhibitionDocument = gql`
  mutation createExhibition(
    $startDate: Date!
    $image: Upload
    $showInMainPage: Boolean
    $endDate: Date
    $works: [String]
  ) {
    createExhibition(
      image: $image
      data: {
        startDate: $startDate
        endDate: $endDate
        showInMainPage: $showInMainPage
        works: $works
      }
    ) {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateExhibitionGQL extends Apollo.Mutation<
  CreateExhibitionMutation,
  CreateExhibitionMutationVariables
> {
  document = CreateExhibitionDocument;
}
export const CreateExhibitionFileDocument = gql`
  mutation createExhibitionFile(
    $localeId: String!
    $file: Upload!
    $exhibitionId: String
  ) {
    createFile(
      file: $file
      data: { exhibitionId: $exhibitionId, localeId: $localeId }
    ) {
      file
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateExhibitionFileGQL extends Apollo.Mutation<
  CreateExhibitionFileMutation,
  CreateExhibitionFileMutationVariables
> {
  document = CreateExhibitionFileDocument;
}
export const CreateExhibitionTranslationDocument = gql`
  mutation createExhibitionTranslation(
    $exhibitionId: String!
    $localeId: String!
    $title: String!
    $desc: String
    $metaTitle: String
    $metaDescription: String
  ) {
    createExhibitionTranslation(
      exhibitionId: $exhibitionId
      localeId: $localeId
      data: {
        title: $title
        body: $desc
        metaTitle: $metaTitle
        metaDescription: $metaDescription
      }
    ) {
      id
      slug
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateExhibitionTranslationGQL extends Apollo.Mutation<
  CreateExhibitionTranslationMutation,
  CreateExhibitionTranslationMutationVariables
> {
  document = CreateExhibitionTranslationDocument;
}
export const DeleteExhibitionDocument = gql`
  mutation deleteExhibition($exhibitionId: String!) {
    deleteExhibition(id: $exhibitionId) {
      deleted
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class DeleteExhibitionGQL extends Apollo.Mutation<
  DeleteExhibitionMutation,
  DeleteExhibitionMutationVariables
> {
  document = DeleteExhibitionDocument;
}
export const DeleteFileDocument = gql`
  mutation deleteFile($id: String!) {
    deleteFile(id: $id) {
      deleted
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class DeleteFileGQL extends Apollo.Mutation<
  DeleteFileMutation,
  DeleteFileMutationVariables
> {
  document = DeleteFileDocument;
}
export const UpdateExhibitionDocument = gql`
  mutation updateExhibition(
    $exhibitionId: String!
    $showInMainPage: Boolean
    $startDate: Date
    $endDate: Date
    $image: Upload
    $worksToInsert: [String]
    $worksToDelete: [String]
  ) {
    updateExhibition(
      id: $exhibitionId
      image: $image
      data: {
        startDate: $startDate
        endDate: $endDate
        showInMainPage: $showInMainPage
        worksToInsert: $worksToInsert
        worksToDelete: $worksToDelete
      }
    ) {
      ok
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UpdateExhibitionGQL extends Apollo.Mutation<
  UpdateExhibitionMutation,
  UpdateExhibitionMutationVariables
> {
  document = UpdateExhibitionDocument;
}
export const UpdateExhibitionTranslationDocument = gql`
  mutation updateExhibitionTranslation(
    $exhibitionId: String!
    $localeId: String!
    $title: String
    $desc: String
    $metaTitle: String
    $metaDescription: String
  ) {
    updateExhibitionTranslation(
      exhibitionId: $exhibitionId
      localeId: $localeId
      data: {
        title: $title
        body: $desc
        metaTitle: $metaTitle
        metaDescription: $metaDescription
      }
    ) {
      ok
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UpdateExhibitionTranslationGQL extends Apollo.Mutation<
  UpdateExhibitionTranslationMutation,
  UpdateExhibitionTranslationMutationVariables
> {
  document = UpdateExhibitionTranslationDocument;
}
export const GetExhibitionItemDocument = gql`
  query getExhibitionItem($exhibId: uuid) {
    exhibition(where: { id: { _eq: $exhibId } }) {
      id
      createdAt
      image
      showInMainPage
      startDate
      endDate
      files(order_by: { localeId: asc }) {
        id
        title
        slug
        localeId
        fileName
      }
      translations(order_by: { localeId: asc }) {
        title
        body
        slug
        localeId
        metaTitle
        metaDescription
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetExhibitionItemGQL extends Apollo.Query<
  GetExhibitionItemQuery,
  GetExhibitionItemQueryVariables
> {
  document = GetExhibitionItemDocument;
}
export const GetExhibitionListDocument = gql`
  query getExhibitionList(
    $localeId: uuid
    $searchTerm: String
    $limit: Int = 20
    $offset: Int = 0
  ) {
    exhibition(
      where: { translations: { title: { _ilike: $searchTerm } } }
      order_by: { createdAt: asc }
      limit: $limit
      offset: $offset
    ) {
      id
      createdAt
      image
      translations(where: { localeId: { _eq: $localeId } }) {
        title
        slug
        metaTitle
        metaDescription
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetExhibitionListGQL extends Apollo.Query<
  GetExhibitionListQuery,
  GetExhibitionListQueryVariables
> {
  document = GetExhibitionListDocument;
}
export const WorksForExhibitionDocument = gql`
  query worksForExhibition($exhibId: uuid, $localeId: uuid) {
    work(where: { workExhibitions: { exhibitionId: { _eq: $exhibId } } }) {
      id
      images
      translations(where: { localeId: { _eq: $localeId } }) {
        title
        localeId
      }
      artist {
        translations(where: { localeId: { _eq: $localeId } }) {
          name
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class WorksForExhibitionGQL extends Apollo.Query<
  WorksForExhibitionQuery,
  WorksForExhibitionQueryVariables
> {
  document = WorksForExhibitionDocument;
}
export const GetWorkIdsDocument = gql`
  query getWorkIds($searchWork: String, $localeId: uuid) {
    work {
      id
      images
      translations(
        where: { title: { _ilike: $searchWork }, localeId: { _eq: $localeId } }
      ) {
        title
        slug
        localeId
      }
      artist {
        translations(where: { localeId: { _eq: $localeId } }) {
          name
          localeId
          slug
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetWorkIdsGQL extends Apollo.Query<
  GetWorkIdsQuery,
  GetWorkIdsQueryVariables
> {
  document = GetWorkIdsDocument;
}
export const CreateNavigationIdDocument = gql`
  mutation createNavigationId(
    $showInHeader: Boolean
    $showInFooter: Boolean
    $floatNav: NAVIGATION_FLOATS
  ) {
    createNavigation(
      data: {
        showInHeader: $showInHeader
        showInFooter: $showInFooter
        float: $floatNav
      }
    ) {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateNavigationIdGQL extends Apollo.Mutation<
  CreateNavigationIdMutation,
  CreateNavigationIdMutationVariables
> {
  document = CreateNavigationIdDocument;
}
export const CreateNavigationTranslationDocument = gql`
  mutation createNavigationTranslation(
    $navId: String!
    $localeId: String!
    $name: String!
    $link: String
  ) {
    createNavigationTranslation(
      localeId: $localeId
      navigationId: $navId
      data: { name: $name, link: $link }
    ) {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateNavigationTranslationGQL extends Apollo.Mutation<
  CreateNavigationTranslationMutation,
  CreateNavigationTranslationMutationVariables
> {
  document = CreateNavigationTranslationDocument;
}
export const DeleteNavigationIdDocument = gql`
  mutation deleteNavigationId($navId: String!) {
    deleteNavigation(id: $navId) {
      deleted
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class DeleteNavigationIdGQL extends Apollo.Mutation<
  DeleteNavigationIdMutation,
  DeleteNavigationIdMutationVariables
> {
  document = DeleteNavigationIdDocument;
}
export const UpdateNavigationIdDocument = gql`
  mutation updateNavigationId(
    $navId: String!
    $navItemOn: Boolean
    $showInHeader: Boolean
    $showInFooter: Boolean
    $floatNav: NAVIGATION_FLOATS
    $parentId: String
  ) {
    updateNavigation(
      id: $navId
      data: {
        isEnabled: $navItemOn
        showInHeader: $showInHeader
        showInFooter: $showInFooter
        float: $floatNav
        parentId: $parentId
      }
    ) {
      ok
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UpdateNavigationIdGQL extends Apollo.Mutation<
  UpdateNavigationIdMutation,
  UpdateNavigationIdMutationVariables
> {
  document = UpdateNavigationIdDocument;
}
export const UpdatePositionsOfNavDocument = gql`
  mutation updatePositionsOfNav($id: String!, $position: Int!) {
    updatePositionsOfNavigations(data: { id: $id, position: $position }) {
      ok
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UpdatePositionsOfNavGQL extends Apollo.Mutation<
  UpdatePositionsOfNavMutation,
  UpdatePositionsOfNavMutationVariables
> {
  document = UpdatePositionsOfNavDocument;
}
export const UpdateNavigationTranslationDocument = gql`
  mutation updateNavigationTranslation(
    $navId: String!
    $localeId: String!
    $name: String
    $link: String
  ) {
    updateNavigationTranslation(
      localeId: $localeId
      navigationId: $navId
      data: { name: $name, link: $link }
    ) {
      ok
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UpdateNavigationTranslationGQL extends Apollo.Mutation<
  UpdateNavigationTranslationMutation,
  UpdateNavigationTranslationMutationVariables
> {
  document = UpdateNavigationTranslationDocument;
}
export const GetNavItemDocument = gql`
  query getNavItem($navId: uuid!) {
    navigation(where: { id: { _eq: $navId } }) {
      position
      showInFooter
      showInHeader
      float
      id
      translations(order_by: { localeId: asc }) {
        name
        id
        link
        localeId
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetNavItemGQL extends Apollo.Query<
  GetNavItemQuery,
  GetNavItemQueryVariables
> {
  document = GetNavItemDocument;
}
export const GetNavListDocument = gql`
  query getNavList($localeId: uuid) {
    navigation(order_by: { position: asc_nulls_first }) {
      id
      position
      showInFooter
      showInHeader
      float
      translations(where: { localeId: { _eq: $localeId } }) {
        name
        id
        link
        localeId
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetNavListGQL extends Apollo.Query<
  GetNavListQuery,
  GetNavListQueryVariables
> {
  document = GetNavListDocument;
}
export const CreateNewsItemIdDocument = gql`
  mutation createNewsItemId($date: String) {
    createNews(data: { publicationDate: $date }) {
      id
      publicationDate
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateNewsItemIdGQL extends Apollo.Mutation<
  CreateNewsItemIdMutation,
  CreateNewsItemIdMutationVariables
> {
  document = CreateNewsItemIdDocument;
}
export const CreateNewsItemTranslationDocument = gql`
  mutation createNewsItemTranslation(
    $newsId: String!
    $localeId: String!
    $title: String!
    $body: String
    $metaTitle: String
    $metaDescription: String
  ) {
    createNewsTranslation(
      newsId: $newsId
      localeId: $localeId
      data: {
        title: $title
        body: $body
        metaTitle: $metaTitle
        metaDescription: $metaDescription
      }
    ) {
      id
      slug
      metaTitle
      metaDescription
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateNewsItemTranslationGQL extends Apollo.Mutation<
  CreateNewsItemTranslationMutation,
  CreateNewsItemTranslationMutationVariables
> {
  document = CreateNewsItemTranslationDocument;
}
export const DeleteNewsDocument = gql`
  mutation deleteNews($newsId: String!) {
    deleteNews(id: $newsId) {
      deleted
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class DeleteNewsGQL extends Apollo.Mutation<
  DeleteNewsMutation,
  DeleteNewsMutationVariables
> {
  document = DeleteNewsDocument;
}
export const UpdateNewsItemDateDocument = gql`
  mutation updateNewsItemDate($newsId: String!, $date: String) {
    updateNews(id: $newsId, data: { publicationDate: $date }) {
      ok
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UpdateNewsItemDateGQL extends Apollo.Mutation<
  UpdateNewsItemDateMutation,
  UpdateNewsItemDateMutationVariables
> {
  document = UpdateNewsItemDateDocument;
}
export const UpdateNewsItemTranslationDocument = gql`
  mutation updateNewsItemTranslation(
    $newsId: String!
    $localeId: String!
    $title: String
    $body: String
    $metaTitle: String
    $metaDescription: String
  ) {
    updateNewsTranslation(
      newsId: $newsId
      localeId: $localeId
      data: {
        title: $title
        body: $body
        metaTitle: $metaTitle
        metaDescription: $metaDescription
      }
    ) {
      ok
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UpdateNewsItemTranslationGQL extends Apollo.Mutation<
  UpdateNewsItemTranslationMutation,
  UpdateNewsItemTranslationMutationVariables
> {
  document = UpdateNewsItemTranslationDocument;
}
export const GetNewsItemDocument = gql`
  query getNewsItem($newsId: uuid) {
    news(where: { id: { _eq: $newsId } }) {
      id
      createdAt
      translations(order_by: { localeId: asc }) {
        title
        body
        slug
        localeId
        metaTitle
        metaDescription
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetNewsItemGQL extends Apollo.Query<
  GetNewsItemQuery,
  GetNewsItemQueryVariables
> {
  document = GetNewsItemDocument;
}
export const GetNewsListDocument = gql`
  query getNewsList(
    $localeId: uuid!
    $searchTerm: String
    $limit: Int = 50
    $offset: Int
  ) {
    news(where: { translations: { title: { _ilike: $searchTerm } } }) {
      id
      createdAt
      translations(
        limit: $limit
        offset: $offset
        where: { localeId: { _eq: $localeId } }
      ) {
        title
        body
        slug
        metaTitle
        metaDescription
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetNewsListGQL extends Apollo.Query<
  GetNewsListQuery,
  GetNewsListQueryVariables
> {
  document = GetNewsListDocument;
}
export const CratePageLocaleDocument = gql`
  mutation cratePageLocale(
    $localeId: String!
    $pageId: String!
    $title: String!
    $desc: String
    $metaTitle: String
    $metaDescription: String
  ) {
    createPageTranslation(
      pageId: $pageId
      localeId: $localeId
      data: {
        title: $title
        body: $desc
        metaTitle: $metaTitle
        metaDescription: $metaDescription
      }
    ) {
      id
      slug
      metaTitle
      metaDescription
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CratePageLocaleGQL extends Apollo.Mutation<
  CratePageLocaleMutation,
  CratePageLocaleMutationVariables
> {
  document = CratePageLocaleDocument;
}
export const CratePageIdDocument = gql`
  mutation cratePageId {
    createPage {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CratePageIdGQL extends Apollo.Mutation<
  CratePageIdMutation,
  CratePageIdMutationVariables
> {
  document = CratePageIdDocument;
}
export const DeletePageIdDocument = gql`
  mutation deletePageId($pageId: String!) {
    deletePage(id: $pageId) {
      deleted
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class DeletePageIdGQL extends Apollo.Mutation<
  DeletePageIdMutation,
  DeletePageIdMutationVariables
> {
  document = DeletePageIdDocument;
}
export const UpdatePageMutationDocument = gql`
  mutation updatePageMutation(
    $localeId: String!
    $pageId: String!
    $title: String!
    $desc: String
    $metaTitle: String
    $metaDescription: String
  ) {
    updatePageTranslation(
      pageId: $pageId
      localeId: $localeId
      data: {
        title: $title
        body: $desc
        metaTitle: $metaTitle
        metaDescription: $metaDescription
      }
    ) {
      ok
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UpdatePageMutationGQL extends Apollo.Mutation<
  UpdatePageMutationMutation,
  UpdatePageMutationMutationVariables
> {
  document = UpdatePageMutationDocument;
}
export const PagesDocument = gql`
  query pages(
    $localeId: uuid!
    $searchTerm: String
    $limit: Int = 20
    $offset: Int
  ) {
    page(where: { translations: { title: { _ilike: $searchTerm } } }) {
      id
      translations(
        limit: $limit
        offset: $offset
        where: { localeId: { _eq: $localeId } }
      ) {
        title
        slug
        body
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class PagesGQL extends Apollo.Query<PagesQuery, PagesQueryVariables> {
  document = PagesDocument;
}
export const UpdatePageQueryDocument = gql`
  query updatePageQuery($pageId: uuid) {
    page(where: { id: { _eq: $pageId } }) {
      id
      translations(order_by: { localeId: asc }) {
        title
        slug
        body
        localeId
        metaTitle
        metaDescription
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UpdatePageQueryGQL extends Apollo.Query<
  UpdatePageQueryQuery,
  UpdatePageQueryQueryVariables
> {
  document = UpdatePageQueryDocument;
}
export const CreateTranslationDocument = gql`
  mutation createTranslation(
    $key: String!
    $value: String!
    $localeId: String!
    $page: Pages!
  ) {
    createTranslation(
      data: { key: $key, value: $value, localeId: $localeId, page: $page }
    ) {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateTranslationGQL extends Apollo.Mutation<
  CreateTranslationMutation,
  CreateTranslationMutationVariables
> {
  document = CreateTranslationDocument;
}
export const UpdateTranslationDocument = gql`
  mutation updateTranslation($value: String!, $id: String!) {
    updateTranslation(id: $id, data: { value: $value }) {
      ok
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UpdateTranslationGQL extends Apollo.Mutation<
  UpdateTranslationMutation,
  UpdateTranslationMutationVariables
> {
  document = UpdateTranslationDocument;
}
export const GetTranslationKeyDocument = gql`
  query getTranslationKey($key: String) {
    translation(where: { key: { _eq: $key } }, order_by: { localeId: asc }) {
      id
      key
      value
      page
      localeId
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetTranslationKeyGQL extends Apollo.Query<
  GetTranslationKeyQuery,
  GetTranslationKeyQueryVariables
> {
  document = GetTranslationKeyDocument;
}
export const GetTranslationsDocument = gql`
  query getTranslations($localeId: uuid, $searchTerm: String) {
    translation(
      where: { localeId: { _eq: $localeId }, value: { _ilike: $searchTerm } }
    ) {
      id
      key
      value
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetTranslationsGQL extends Apollo.Query<
  GetTranslationsQuery,
  GetTranslationsQueryVariables
> {
  document = GetTranslationsDocument;
}
export const CreateBasisDocument = gql`
  mutation createBasis {
    createBasis {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateBasisGQL extends Apollo.Mutation<
  CreateBasisMutation,
  CreateBasisMutationVariables
> {
  document = CreateBasisDocument;
}
export const CreateBasisLocaleDocument = gql`
  mutation createBasisLocale(
    $basisId: String!
    $localeId: String!
    $name: String!
  ) {
    createBasisTranslation(
      basisId: $basisId
      localeId: $localeId
      data: { name: $name }
    ) {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateBasisLocaleGQL extends Apollo.Mutation<
  CreateBasisLocaleMutation,
  CreateBasisLocaleMutationVariables
> {
  document = CreateBasisLocaleDocument;
}
export const CreateProvenanceDocument = gql`
  mutation createProvenance {
    createProvenance {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateProvenanceGQL extends Apollo.Mutation<
  CreateProvenanceMutation,
  CreateProvenanceMutationVariables
> {
  document = CreateProvenanceDocument;
}
export const CreateProvenanceLocaleDocument = gql`
  mutation createProvenanceLocale(
    $provenanceId: String!
    $localeId: String!
    $name: String!
  ) {
    createProvenanceTranslation(
      provenanceId: $provenanceId
      localeId: $localeId
      data: { name: $name }
    ) {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateProvenanceLocaleGQL extends Apollo.Mutation<
  CreateProvenanceLocaleMutation,
  CreateProvenanceLocaleMutationVariables
> {
  document = CreateProvenanceLocaleDocument;
}
export const CreateSchoolDocument = gql`
  mutation createSchool {
    createSchool {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateSchoolGQL extends Apollo.Mutation<
  CreateSchoolMutation,
  CreateSchoolMutationVariables
> {
  document = CreateSchoolDocument;
}
export const CreateSchoolLocaleDocument = gql`
  mutation createSchoolLocale(
    $shoolId: String!
    $localeId: String!
    $name: String!
  ) {
    createSchoolTranslation(
      schoolId: $shoolId
      localeId: $localeId
      data: { name: $name }
    ) {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateSchoolLocaleGQL extends Apollo.Mutation<
  CreateSchoolLocaleMutation,
  CreateSchoolLocaleMutationVariables
> {
  document = CreateSchoolLocaleDocument;
}
export const CreateTechniqueDocument = gql`
  mutation createTechnique {
    createTechnique {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateTechniqueGQL extends Apollo.Mutation<
  CreateTechniqueMutation,
  CreateTechniqueMutationVariables
> {
  document = CreateTechniqueDocument;
}
export const CreateTechniqueLocaleDocument = gql`
  mutation createTechniqueLocale(
    $techniqueId: String!
    $localeId: String!
    $name: String!
  ) {
    createTechniqueTranslation(
      techniqueId: $techniqueId
      localeId: $localeId
      data: { name: $name }
    ) {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateTechniqueLocaleGQL extends Apollo.Mutation<
  CreateTechniqueLocaleMutation,
  CreateTechniqueLocaleMutationVariables
> {
  document = CreateTechniqueLocaleDocument;
}
export const DeleteBasisDocument = gql`
  mutation deleteBasis($id: String!) {
    deleteBasis(id: $id) {
      deleted
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class DeleteBasisGQL extends Apollo.Mutation<
  DeleteBasisMutation,
  DeleteBasisMutationVariables
> {
  document = DeleteBasisDocument;
}
export const DeleteProvenanceDocument = gql`
  mutation deleteProvenance($id: String!) {
    deleteSchool(id: $id) {
      deleted
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class DeleteProvenanceGQL extends Apollo.Mutation<
  DeleteProvenanceMutation,
  DeleteProvenanceMutationVariables
> {
  document = DeleteProvenanceDocument;
}
export const DeleteSchoolDocument = gql`
  mutation deleteSchool($id: String!) {
    deleteSchool(id: $id) {
      deleted
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class DeleteSchoolGQL extends Apollo.Mutation<
  DeleteSchoolMutation,
  DeleteSchoolMutationVariables
> {
  document = DeleteSchoolDocument;
}
export const DeleteTechniqueDocument = gql`
  mutation deleteTechnique($id: String!) {
    deleteTechnique(id: $id) {
      deleted
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class DeleteTechniqueGQL extends Apollo.Mutation<
  DeleteTechniqueMutation,
  DeleteTechniqueMutationVariables
> {
  document = DeleteTechniqueDocument;
}
export const BasisListDocument = gql`
  query basisList($localeId: uuid) {
    basis {
      id
      translations(where: { localeId: { _eq: $localeId } }) {
        name
        localeId
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class BasisListGQL extends Apollo.Query<
  BasisListQuery,
  BasisListQueryVariables
> {
  document = BasisListDocument;
}
export const ProvenanceListDocument = gql`
  query provenanceList($localeId: uuid) {
    provenance {
      id
      translations(where: { localeId: { _eq: $localeId } }) {
        name
        localeId
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class ProvenanceListGQL extends Apollo.Query<
  ProvenanceListQuery,
  ProvenanceListQueryVariables
> {
  document = ProvenanceListDocument;
}
export const SchoolListDocument = gql`
  query schoolList($localeId: uuid) {
    school {
      id
      translations(where: { localeId: { _eq: $localeId } }) {
        name
        localeId
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class SchoolListGQL extends Apollo.Query<
  SchoolListQuery,
  SchoolListQueryVariables
> {
  document = SchoolListDocument;
}
export const TechniqueListDocument = gql`
  query techniqueList($localeId: uuid) {
    technique {
      id
      translations(where: { localeId: { _eq: $localeId } }) {
        name
        localeId
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class TechniqueListGQL extends Apollo.Query<
  TechniqueListQuery,
  TechniqueListQueryVariables
> {
  document = TechniqueListDocument;
}
export const CreateWorkDocument = gql`
  mutation createWork(
    $images: [Upload!]!
    $artistId: String
    $showInMainPage: Boolean
    $forSale: Boolean
    $price: Float
    $techniqueId: String
    $basisId: String
    $schoolId: String
    $provenanceId: String
  ) {
    createWork(
      images: $images
      data: {
        artistId: $artistId
        showInMainPage: $showInMainPage
        forSale: $forSale
        price: $price
        techniqueId: $techniqueId
        basisId: $basisId
        schoolId: $schoolId
        provenanceId: $provenanceId
      }
    ) {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateWorkGQL extends Apollo.Mutation<
  CreateWorkMutation,
  CreateWorkMutationVariables
> {
  document = CreateWorkDocument;
}
export const CreateWorkLocaleDocument = gql`
  mutation createWorkLocale(
    $workId: String!
    $localeId: String!
    $title: String!
    $body: String
    $metaTitle: String
    $metaDescription: String
  ) {
    createWorkTranslation(
      workId: $workId
      localeId: $localeId
      data: {
        title: $title
        body: $body
        metaTitle: $metaTitle
        metaDescription: $metaDescription
      }
    ) {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateWorkLocaleGQL extends Apollo.Mutation<
  CreateWorkLocaleMutation,
  CreateWorkLocaleMutationVariables
> {
  document = CreateWorkLocaleDocument;
}
export const DeleteWorkDocument = gql`
  mutation deleteWork($workId: String!) {
    deleteWork(id: $workId) {
      deleted
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class DeleteWorkGQL extends Apollo.Mutation<
  DeleteWorkMutation,
  DeleteWorkMutationVariables
> {
  document = DeleteWorkDocument;
}
export const GetWorkArtistDocument = gql`
  query getWorkArtist($localeId: uuid) {
    artist {
      id
      translations(where: { localeId: { _eq: $localeId } }) {
        name
        slug
        localeId
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetWorkArtistGQL extends Apollo.Query<
  GetWorkArtistQuery,
  GetWorkArtistQueryVariables
> {
  document = GetWorkArtistDocument;
}
export const WorkItemDocument = gql`
  query workItem($workId: uuid!) {
    work(where: { id: { _eq: $workId } }) {
      id
      price
      images
      forSale
      price
      size
      positionOnMainPage
      showInMainPage
      provenance {
        id
        translations(order_by: { localeId: asc }) {
          name
          localeId
        }
      }
      school {
        id
        translations(order_by: { localeId: asc }) {
          name
          localeId
        }
      }
      basis {
        id
        translations(order_by: { localeId: asc }) {
          name
          localeId
        }
      }
      technique {
        id
        translations(order_by: { localeId: asc }) {
          name
          localeId
        }
      }
      translations(order_by: { localeId: asc }) {
        title
        slug
        localeId
      }
      artist {
        id
        translations(order_by: { localeId: asc }) {
          name
          slug
          localeId
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class WorkItemGQL extends Apollo.Query<
  WorkItemQuery,
  WorkItemQueryVariables
> {
  document = WorkItemDocument;
}
export const WorkListDocument = gql`
  query workList(
    $localeId: uuid
    $searchTerm: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    work(
      where: { translations: { title: { _ilike: $searchTerm } } }
      limit: $limit
      offset: $offset
    ) {
      id
      price
      images
      showInMainPage
      translations(where: { localeId: { _eq: $localeId } }) {
        title
        slug
      }
      artist {
        translations(where: { localeId: { _eq: $localeId } }) {
          name
          slug
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class WorkListGQL extends Apollo.Query<
  WorkListQuery,
  WorkListQueryVariables
> {
  document = WorkListDocument;
}
export const AddProductToCartDocument = gql`
  mutation addProductToCart($productId: String, $quantity: Int = 1) {
    addProductToCart(data: { productId: $productId, quantity: $quantity }) {
      quantity
      id
      createdAt
      workId
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class AddProductToCartGQL extends Apollo.Mutation<
  AddProductToCartMutation,
  AddProductToCartMutationVariables
> {
  document = AddProductToCartDocument;
}
export const DeleteProductFromCartDocument = gql`
  mutation deleteProductFromCart($cartProductId: String!) {
    deleteProductFromCart(id: $cartProductId) {
      deleted
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class DeleteProductFromCartGQL extends Apollo.Mutation<
  DeleteProductFromCartMutation,
  DeleteProductFromCartMutationVariables
> {
  document = DeleteProductFromCartDocument;
}
export const CartListDocument = gql`
  query cartList($localeId: uuid, $workIdCart: uuid) {
    cart(where: { workId: { _eq: $workIdCart } }) {
      id
      quantity
      work {
        id
        images
        price
        translations(where: { localeId: { _eq: $localeId } }) {
          title
          slug
        }
        artist {
          translations(where: { localeId: { _eq: $localeId } }) {
            name
            slug
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CartListGQL extends Apollo.Query<
  CartListQuery,
  CartListQueryVariables
> {
  document = CartListDocument;
}
export const ArtistsCategoryDocument = gql`
  query artistsCategory(
    $localeId: uuid
    $limit: Int = 1
    $offset: Int = 0
    $titleSarch: String
  ) {
    artistI18n(
      limit: $limit
      offset: $offset
      where: { localeId: { _eq: $localeId }, name: { _ilike: $titleSarch } }
      order_by: { name: asc }
    ) {
      name
      metaDescription
      slug
      id
    }
    metadata: artistI18n_aggregate(where: { localeId: { _eq: $localeId } }) {
      info: aggregate {
        count
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class ArtistsCategoryGQL extends Apollo.Query<
  ArtistsCategoryQuery,
  ArtistsCategoryQueryVariables
> {
  document = ArtistsCategoryDocument;
}
export const CategoryCategoriesDocument = gql`
  query categoryCategories($slug: String, $localeId: uuid) {
    category(where: { translations: { slug: { _eq: $slug } } }) {
      translations(where: { localeId: { _eq: $localeId } }) {
        metaTitle
        metaDescription
        title: name
        description
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CategoryCategoriesGQL extends Apollo.Query<
  CategoryCategoriesQuery,
  CategoryCategoriesQueryVariables
> {
  document = CategoryCategoriesDocument;
}
export const CategoryIdListDocument = gql`
  query categoryIdList($catId: uuid) {
    category(where: { id: { _eq: $catId } }) {
      id
      artistCategories(limit: 1) {
        categoryId
      }
      categoryWorks(limit: 1) {
        categoryId
      }
      exhibitionCategories(limit: 1) {
        categoryId
      }
      newsCategories(limit: 1) {
        categoryId
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CategoryIdListGQL extends Apollo.Query<
  CategoryIdListQuery,
  CategoryIdListQueryVariables
> {
  document = CategoryIdListDocument;
}
export const EventCategoryDocument = gql`
  query eventCategory($localeId: uuid, $limit: Int = 1, $offset: Int) {
    newsI18n(
      limit: $limit
      offset: $offset
      order_by: { news: { createdAt: asc } }
      where: { localeId: { _eq: $localeId } }
    ) {
      id
      title
      slug
      metaDescription
    }
    metadata: newsI18n_aggregate(where: { localeId: { _eq: $localeId } }) {
      info: aggregate {
        count
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class EventCategoryGQL extends Apollo.Query<
  EventCategoryQuery,
  EventCategoryQueryVariables
> {
  document = EventCategoryDocument;
}
export const ExhibitionCategoryDocument = gql`
  query exhibitionCategory(
    $localeId: uuid
    $limit: Int = 1
    $endLte: timestamptz = null
    $endGte: timestamptz = null
    $startLte: timestamptz = null
    $startGte: timestamptz = null
    $offset: Int = 0
    $titleSarch: String
    $orderBy: order_by = desc
  ) {
    exhibition(
      limit: $limit
      offset: $offset
      where: {
        translations: { title: { _ilike: $titleSarch } }
        endDate: { _lte: $endLte, _gte: $endGte }
        startDate: { _gt: $startGte, _lte: $startLte }
      }
      order_by: { startDate: $orderBy }
    ) {
      id
      image
      startDate
      endDate
      translations(where: { localeId: { _eq: $localeId } }) {
        title
        slug
        id
      }
      exhibitionWorks(limit: 1) {
        work {
          artist {
            translations(where: { localeId: { _eq: $localeId } }) {
              id
              slug
              name
            }
          }
        }
      }
    }
    metadata: exhibition_aggregate(
      where: { translations: { localeId: { _eq: $localeId } } }
    ) {
      info: aggregate {
        count
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class ExhibitionCategoryGQL extends Apollo.Query<
  ExhibitionCategoryQuery,
  ExhibitionCategoryQueryVariables
> {
  document = ExhibitionCategoryDocument;
}
export const ShopCategoryDocument = gql`
  query shopCategory($localeId: uuid!, $shopCat: uuid) {
    category(where: { id: { _eq: $shopCat } }) {
      translations(where: { localeId: { _eq: $localeId } }) {
        name
      }
      descendants {
        descendant {
          id
          translations(where: { localeId: { _eq: $localeId } }) {
            name
            slug
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class ShopCategoryGQL extends Apollo.Query<
  ShopCategoryQuery,
  ShopCategoryQueryVariables
> {
  document = ShopCategoryDocument;
}
export const WorkCategoryDocument = gql`
  query workCategory(
    $localeId: uuid
    $limit: Int = 10
    $offset: Int = 0
    $catId: uuid
    $titleSarch: String
    $forSale: Boolean = false
  ) {
    workCategory(
      limit: $limit
      offset: $offset
      order_by: { work: { id: asc } }
      where: {
        categoryId: { _eq: $catId }
        work: {
          translations: { title: { _ilike: $titleSarch } }
          forSale: { _eq: $forSale }
        }
      }
    ) {
      work {
        id
        images
        forSale
        price
        translations(where: { localeId: { _eq: $localeId } }) {
          id
          title
          slug
          creationDate
        }
        artist {
          translations(where: { localeId: { _eq: $localeId } }) {
            name
            slug
          }
        }
      }
    }
    metadata: work_aggregate(
      where: {
        translations: { localeId: { _eq: $localeId } }
        workCategories: { categoryId: { _eq: $catId } }
      }
    ) {
      info: aggregate {
        count
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class WorkCategoryGQL extends Apollo.Query<
  WorkCategoryQuery,
  WorkCategoryQueryVariables
> {
  document = WorkCategoryDocument;
}
export const AllEventsHomeDocument = gql`
  query allEventsHome($localeId: uuid, $limit: Int = 1) {
    newsI18n(
      where: { localeId: { _eq: $localeId } }
      order_by: { news: { createdAt: asc } }
      limit: $limit
    ) {
      title
      slug
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class AllEventsHomeGQL extends Apollo.Query<
  AllEventsHomeQuery,
  AllEventsHomeQueryVariables
> {
  document = AllEventsHomeDocument;
}
export const ButtonsSlugsDocument = gql`
  query ButtonsSlugs(
    $catEvent: uuid!
    $catArtist: uuid!
    $catExhib: uuid!
    $catShop: uuid!
    $localeId: uuid!
  ) {
    categoryI18n(
      where: {
        categoryId: { _in: [$catArtist, $catEvent, $catExhib, $catShop] }
        localeId: { _eq: $localeId }
      }
    ) {
      slug
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class ButtonsSlugsGQL extends Apollo.Query<
  ButtonsSlugsQuery,
  ButtonsSlugsQueryVariables
> {
  document = ButtonsSlugsDocument;
}
export const ExhibitionListDocument = gql`
  query ExhibitionList($localeId: uuid, $limit: Int = 1) {
    exhibition(limit: $limit, where: { showInMainPage: { _eq: true } }) {
      id
      image
      startDate
      endDate
      translations(where: { localeId: { _eq: $localeId } }) {
        title
        slug
        id
      }
      exhibitionWorks(limit: 1) {
        work {
          artist {
            translations(where: { localeId: { _eq: $localeId } }) {
              id
              slug
              name
            }
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class ExhibitionListGQL extends Apollo.Query<
  ExhibitionListQuery,
  ExhibitionListQueryVariables
> {
  document = ExhibitionListDocument;
}
export const GoodsHomeDocument = gql`
  query goodsHome($localeId: uuid, $limit: Int = 1) {
    work(where: { forSale: { _eq: true } }, limit: $limit) {
      images
      price
      artist {
        translations(where: { localeId: { _eq: $localeId } }) {
          name
          slug
        }
      }
      translations(where: { localeId: { _eq: $localeId } }) {
        title
        slug
        creationDate
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GoodsHomeGQL extends Apollo.Query<
  GoodsHomeQuery,
  GoodsHomeQueryVariables
> {
  document = GoodsHomeDocument;
}
export const HomePageDocument = gql`
  query homePage($localeId: uuid, $pageId: uuid) {
    pageI18n(
      where: { localeId: { _eq: $localeId }, pageId: { _eq: $pageId } }
    ) {
      title
      metaTitle
      metaDescription
      body
      pageId
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class HomePageGQL extends Apollo.Query<
  HomePageQuery,
  HomePageQueryVariables
> {
  document = HomePageDocument;
}
export const SliderDocument = gql`
  query Slider($localeId: uuid) {
    slider {
      files
      translations(where: { localeId: { _eq: $localeId } }) {
        title
        body
        slug
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class SliderGQL extends Apollo.Query<SliderQuery, SliderQueryVariables> {
  document = SliderDocument;
}
export const WorksHomePageDocument = gql`
  query WorksHomePage($localeId: uuid, $limit: Int = 1) {
    work(limit: $limit, where: { showInMainPage: { _eq: true } }) {
      id
      images
      translations(where: { localeId: { _eq: $localeId } }) {
        title
        slug
        creationDate
      }
      artist {
        translations(where: { localeId: { _eq: $localeId } }) {
          id
          slug
          name
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class WorksHomePageGQL extends Apollo.Query<
  WorksHomePageQuery,
  WorksHomePageQueryVariables
> {
  document = WorksHomePageDocument;
}
export const LocalesDocument = gql`
  query locales {
    locale(order_by: { id: asc }) {
      id
      name
      code
      isDefault
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class LocalesGQL extends Apollo.Query<
  LocalesQuery,
  LocalesQueryVariables
> {
  document = LocalesDocument;
}
export const NavigationDocument = gql`
  query Navigation($localeId: uuid) {
    navigationI18n(
      where: {
        localeId: { _eq: $localeId }
        navigation: { parentId: { _is_null: true } }
      }
      order_by: { navigation: { position: asc_nulls_first } }
    ) {
      link
      name
      navigation {
        id
        position
        showInFooter
        showInHeader
        float
        descendants {
          showInFooter
          showInHeader
          position
          float
          translations(where: { localeId: { _eq: $localeId } }) {
            name
            link
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class NavigationGQL extends Apollo.Query<
  NavigationQuery,
  NavigationQueryVariables
> {
  document = NavigationDocument;
}
export const SearchSlugDocument = gql`
  query SearchSlug($localeId: uuid, $slug: String) {
    category(where: { translations: { slug: { _eq: $slug } } }) {
      translations(where: { localeId: { _eq: $localeId } }) {
        categoryId
        slug
        name
      }
    }
    work(where: { translations: { slug: { _eq: $slug } } }) {
      translations(where: { localeId: { _eq: $localeId } }) {
        id
        title
        slug
      }
    }
    exhibition(where: { translations: { slug: { _eq: $slug } } }) {
      translations(where: { localeId: { _eq: $localeId } }) {
        id
        title
        slug
      }
    }
    artist(where: { translations: { slug: { _eq: $slug } } }) {
      translations(where: { localeId: { _eq: $localeId } }) {
        id
        name
        slug
      }
    }
    news(where: { translations: { slug: { _eq: $slug } } }) {
      translations(where: { localeId: { _eq: $localeId } }) {
        id
        title
        slug
      }
    }
    page(where: { translations: { slug: { _eq: $slug } } }) {
      translations(where: { localeId: { _eq: $localeId } }) {
        id
        title
        slug
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class SearchSlugGQL extends Apollo.Query<
  SearchSlugQuery,
  SearchSlugQueryVariables
> {
  document = SearchSlugDocument;
}
export const SocialListDocument = gql`
  query socialList {
    config {
      socialList
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class SocialListGQL extends Apollo.Query<
  SocialListQuery,
  SocialListQueryVariables
> {
  document = SocialListDocument;
}
export const StaticTranslationDocument = gql`
  query staticTranslation($localeId: uuid) {
    translation(
      where: {
        _and: [
          { localeId: { _eq: $localeId } }
          { page: { _in: ["main", "footer", "header", "work", "exhibition"] } }
        ]
      }
    ) {
      key
      value
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class StaticTranslationGQL extends Apollo.Query<
  StaticTranslationQuery,
  StaticTranslationQueryVariables
> {
  document = StaticTranslationDocument;
}
export const GetArtistLocaleDocument = gql`
  query getArtistLocale(
    $slug: String
    $localeId: uuid
    $limit: Int = 10
    $offset: Int
  ) {
    artist(where: { translations: { slug: { _eq: $slug } } }) {
      id
      metadata: works_aggregate {
        info: aggregate {
          count
        }
      }
      translations(
        where: { localeId: { _eq: $localeId } }
        order_by: { id: asc }
      ) {
        id
        slug
        metaTitle
        name
        metaDescription
        description
        localeId
      }
      works(limit: $limit, offset: $offset) {
        images
        price
        forSale
        translations(where: { localeId: { _eq: $localeId } }) {
          title
          slug
          creationDate
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetArtistLocaleGQL extends Apollo.Query<
  GetArtistLocaleQuery,
  GetArtistLocaleQueryVariables
> {
  document = GetArtistLocaleDocument;
}
export const GetExhibitionLocaleDocument = gql`
  query getExhibitionLocale(
    $slug: String!
    $localeId: uuid!
    $limit: Int = 10
    $offset: Int!
  ) {
    exhibition(where: { translations: { slug: { _eq: $slug } } }) {
      id
      image
      startDate
      endDate
      metadata: exhibitionWorks_aggregate {
        info: aggregate {
          count
        }
      }
      files(where: { localeId: { _eq: $localeId } }) {
        id
        title
        slug
        localeId
        fileName
      }
      translations(where: { localeId: { _eq: $localeId } }) {
        id
        slug
        metaTitle
        title
        metaDescription
        body
        localeId
      }
      exhibitionWorks(limit: $limit, offset: $offset) {
        work {
          images
          price
          forSale
          translations(
            where: { localeId: { _eq: $localeId } }
            order_by: { title: asc }
          ) {
            title
            localeId
            slug
            creationDate
          }
          artist {
            translations(where: { localeId: { _eq: $localeId } }) {
              name
              slug
            }
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetExhibitionLocaleGQL extends Apollo.Query<
  GetExhibitionLocaleQuery,
  GetExhibitionLocaleQueryVariables
> {
  document = GetExhibitionLocaleDocument;
}
export const GetEventLocaleDocument = gql`
  query getEventLocale($localeId: uuid, $slug: String) {
    news(where: { translations: { slug: { _eq: $slug } } }) {
      translations(where: { localeId: { _eq: $localeId } }) {
        metaDescription
        metaTitle
        title
        body
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetEventLocaleGQL extends Apollo.Query<
  GetEventLocaleQuery,
  GetEventLocaleQueryVariables
> {
  document = GetEventLocaleDocument;
}
export const PageDocument = gql`
  query Page($localeId: uuid, $slug: String) {
    page(where: { translations: { slug: { _eq: $slug } } }) {
      translations(where: { localeId: { _eq: $localeId } }) {
        metaDescription
        metaTitle
        title
        body
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class PageGQL extends Apollo.Query<PageQuery, PageQueryVariables> {
  document = PageDocument;
}
export const SearchDocument = gql`
  query search($localeId: String!, $searchTerm: String!, $limit: Int = 50) {
    search(where: { limit: $limit, localeId: $localeId, value: $searchTerm }) {
      slug
      name
      description
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class SearchGQL extends Apollo.Query<SearchQuery, SearchQueryVariables> {
  document = SearchDocument;
}
export const GetWorkLocaleDocument = gql`
  query getWorkLocale(
    $slug: String
    $localeId: uuid
    $limit: Int = 10
    $offset: Int
  ) {
    work(where: { translations: { slug: { _eq: $slug } } }) {
      id
      images
      translations(
        where: { localeId: { _eq: $localeId } }
        order_by: { id: asc }
      ) {
        id
        slug
        metaTitle
        title
        metaDescription
        localeId
        creationDate
      }
      price
      forSale
      basis {
        translations(where: { localeId: { _eq: $localeId } }) {
          name
        }
      }
      size
      technique {
        translations(where: { localeId: { _eq: $localeId } }) {
          name
        }
      }
      school {
        translations(where: { localeId: { _eq: $localeId } }) {
          name
        }
      }
      provenance {
        translations(where: { localeId: { _eq: $localeId } }) {
          name
        }
      }
      workExhibitions {
        exhibition {
          startDate
          endDate
          translations(where: { localeId: { _eq: $localeId } }) {
            title
            slug
          }
        }
      }
      artist {
        metadata: works_aggregate {
          info: aggregate {
            count
          }
        }
        translations(where: { localeId: { _eq: $localeId } }) {
          name
          slug
          description
        }
        works(limit: $limit, offset: $offset) {
          images
          price
          forSale
          translations(where: { localeId: { _eq: $localeId } }) {
            title
            slug
            creationDate
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetWorkLocaleGQL extends Apollo.Query<
  GetWorkLocaleQuery,
  GetWorkLocaleQueryVariables
> {
  document = GetWorkLocaleDocument;
}
