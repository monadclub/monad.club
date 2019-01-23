import gql from "graphql-tag";

const schema = gql`
  type PaginatedJobSpecs {
    pageInfo: PageInfo!
    edges: [JobSpec]!
  }

  type JobSpec {
    id: ID!
  }

  extend type Query {
    jobSpec(id: ID!): JobSpec
    jobSpecs(page: PageInput): PaginatedJobSpecs!
  }

  # extend type Mutation {}
`;

export default schema;
