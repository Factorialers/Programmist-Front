import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  deleteUser: User;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  findUserById?: Maybe<User>;
  findUsers: Array<User>;
  getAllUsers: Array<User>;
  getAuthorizationHeader: Scalars['String'];
};


export type QueryFindUserByIdArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  avatarURL: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UserCreateInput = {
  avatarURL: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserOrderByWithRelationInput = {
  avatarURL?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  AvatarUrl = 'avatarURL',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name'
}

export type UserUpdateInput = {
  avatarURL?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatarURL?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', createdAt: any, id: string, name: string } };

export type DeleteUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', createdAt: any, id: string, name: string } };

export type UpdateUserMutationVariables = Exact<{
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', createdAt: any, id: string, name: string } };

export type FindUserByIdQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type FindUserByIdQuery = { __typename?: 'Query', findUserById?: { __typename?: 'User', createdAt: any, id: string, name: string } | null };

export type FindUsersQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type FindUsersQuery = { __typename?: 'Query', findUsers: Array<{ __typename?: 'User', createdAt: any, id: string, name: string }> };


export const CreateUserDocument = gql`
    mutation CreateUser($data: UserCreateInput!) {
  createUser(data: $data) {
    createdAt
    id
    name
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const DeleteUserDocument = gql`
    mutation DeleteUser($where: UserWhereUniqueInput!) {
  deleteUser(where: $where) {
    createdAt
    id
    name
  }
}
    `;

export function useDeleteUserMutation() {
  return Urql.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument);
};
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    createdAt
    id
    name
  }
}
    `;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument);
};
export const FindUserByIdDocument = gql`
    query FindUserById($where: UserWhereUniqueInput!) {
  findUserById(where: $where) {
    createdAt
    id
    name
  }
}
    `;

export function useFindUserByIdQuery(options: Omit<Urql.UseQueryArgs<FindUserByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<FindUserByIdQuery>({ query: FindUserByIdDocument, ...options });
};
export const FindUsersDocument = gql`
    query FindUsers($where: UserWhereInput, $take: Int) {
  findUsers(where: $where, take: $take) {
    createdAt
    id
    name
  }
}
    `;

export function useFindUsersQuery(options?: Omit<Urql.UseQueryArgs<FindUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<FindUsersQuery>({ query: FindUsersDocument, ...options });
};