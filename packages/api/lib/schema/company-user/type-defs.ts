import gql from "graphql-tag";

const schema = gql`
  type PaginatedCompanyUsers {
    pageInfo: PageInfo!
    edges: [CompanyUser]!
  }

  type CompanyUser {
    id: ID!
    firstName: String
    lastName: String
    company: Company
  }

  input UpdateCompanyUserInput {
    id: ID!
    firstName: String
    lastName: String
  }

  extend type Query {
    companyUser(id: ID!): CompanyUser
    companyUsers(id: ID!): PaginatedCompanyUsers
  }

  extend type Mutation {
    updateCompanyUser(companyUser: UpdateCompanyUserInput): CompanyUser
  }
`;

export default schema;
