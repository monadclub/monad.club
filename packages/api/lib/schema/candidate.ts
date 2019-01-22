import gql from "graphql-tag";

const typeDefs = gql`
  type Candidate {
    id: ID!
    firstName: String!
    lastName: String!
    bio: String
    availibility: String!
    # dateOfBirth: Date!
    remoteOption: RemoteOptions!
    # employmentType: EmploymentTypes!
    salaryExpectation: Float
    dayRateExpectation: Float
    githubId: String
    avatar: Image
    # skills: [CandidateSkill]!
    # blockedCompanies: [Company]
    # experiences: [Experience]
    # sideProjects: [SideProject]
    # contentLinks: [ContentLink]
  }

  extend type Query {
    candidates(pagination: PaginationInput): [Candidate]!
    candidate(id: ID!): Candidate!
  }
`;

const resolvers = {
  Candidate: {
    // ...
  },
  Query: {
    candidates: () => [],
    candidate: () => null
  }
};

export { resolvers, typeDefs };
