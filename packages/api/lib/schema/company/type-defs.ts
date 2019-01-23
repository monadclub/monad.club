import gql from "graphql-tag";

const schema = gql`
  type PaginatedCompanies {
    pageInfo: PageInfo!
    edges: [Company]!
  }

  type Company {
    id: ID!
    name: String!
    jobSpecs(page: PageInput!): PaginatedJobSpecs
  }

  input UpdateCompanyInput {
    id: ID!
    name: String
  }

  extend type Query {
    company: Company!
    companies(page: PageInput): PaginatedCompanies!
  }

  extend type Mutation {
    updateCompany(company: UpdateCompanyInput): Company!
  }
`;

export default schema;
