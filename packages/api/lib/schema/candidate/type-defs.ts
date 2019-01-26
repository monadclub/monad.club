import gql from "graphql-tag";

const schema = gql`
  type PaginatedCandidates {
    pageInfo: PageInfo!
    edges: [Candidate]!
  }

  input UpdateCandidateInput {
    firstName: String!
    blockedCompanies: [ID]
  }

  type Candidate {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    bio: String
    availibility: String!
    dateOfBirth: Date!
    remoteOption: RemoteOptions!
    employmentType: EmploymentTypes!
    salaryExpectation: Float
    dayRateExpectation: Float
    githubId: String
    avatarImage: CloudinaryImage
    # avatar(transform: CloudinaryTransform): String TODO: Returns a cloudinary string based on transformation
    skills(page: PageInput!): PaginatedSkills
    blockedCompanies(page: PageInput!): PaginatedCompanies
    experiences(page: PageInput!): PaginatedExperiences
    sideProjects(page: PageInput!): PaginatedSideProjects
    contentLinks(page: PageInput!): PaginatedContentLinks
  }

  extend type Query {
    candidate(id: ID!): Candidate
    candidates(page: PageInput!): PaginatedCandidates!
  }

  extend type Mutation {
    updateCandidate(candidate: UpdateCandidateInput!): Candidate!
  }
`;

export default schema;
