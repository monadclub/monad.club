import gql from "graphql-tag";

const schema = gql`
  type PaginatedContentLinks {
    pageInfo: PageInfo!
    edges: [ContentLink]!
  }

  type ContentLink {
    id: ID!
    name: String!
    icon: String!
    url: String!
  }

  extend type Query {
    contentLink(id: ID!): ContentLink
    contentLinks(page: PageInput): PaginatedContentLinks!
  }

  # extend type Mutation {}
`;

export default schema;
