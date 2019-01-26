import { migrate, knex, Database } from "@monad.club/databases";
import * as candidateProfileModel from "../candidate-profile";
import { getTestContext, tearDownTest } from "../../utils/test-helpers";

beforeEach(async () => {
  await migrate();
  await knex("users").del();
  await knex("candidateProfiles").del();
  await knex("candidateProfiles").insert([
    {
      id: 1,
      bio: "My bio 1"
    } as Partial<Database.candidateProfiles>,
    {
      id: 2,
      bio: "My bio 2"
    } as Partial<Database.candidateProfiles>,
    {
      id: 3,
      bio: "My bio 3"
    } as Partial<Database.candidateProfiles>
  ]);
  const baseUser = {
    firstName: "Joe",
    lastName: "Bloggs",
    avatarImageId: 1,
    encryptedPassword: "12345678907654321"
  };
  await knex("users").insert([
    {
      id: 1,
      email: "henry@email.com",
      candidateProfileId: 1,
      ...baseUser
    } as Partial<Database.users>,
    {
      id: 2,
      email: "alex@email.com",
      candidateProfileId: 2,
      ...baseUser
    } as Partial<Database.users>,
    {
      id: 3,
      email: "joe@email.com",
      candidateProfileId: 3,
      ...baseUser
    } as Partial<Database.users>
  ]);
});

afterAll(tearDownTest);

test("candidateProfileModel getById should return a candidateProfile", async () => {
  const candidateProfile = await candidateProfileModel.getById(
    1,
    getTestContext("1")
  );
  expect(candidateProfile.id.toString()).toBe("1");
});

test("candidateProfileModel getPage should return a page of candidateProfile", async () => {
  const pagedCandidateProfiles = await candidateProfileModel.getPage({
    page: { limit: 2 }
  });
  expect(pagedCandidateProfiles.pageInfo.limit).toBe(2);
  expect(pagedCandidateProfiles.pageInfo.offset).toBe(0);
  expect(pagedCandidateProfiles.pageInfo.total).toBe(3);
  expect(pagedCandidateProfiles.edges).toHaveLength(2);

  const nextPagedCandidateProfiles = await candidateProfileModel.getPage({
    page: { limit: 2, offset: 2 }
  });
  expect(nextPagedCandidateProfiles.pageInfo.limit).toBe(2);
  expect(nextPagedCandidateProfiles.pageInfo.offset).toBe(2);
  expect(nextPagedCandidateProfiles.pageInfo.total).toBe(3);
  expect(nextPagedCandidateProfiles.edges).toHaveLength(1);
});

test("candidateProfileModel updateCandidateProfile should update a candidate profile", async () => {
  const updateCandidateProfile = await candidateProfileModel.updateCandidateProfile(
    {
      candidateProfile: { bio: "Hello world" }
    },
    // Updates the candidateProfile of user with id '2'
    getTestContext(2)
  );
  const dbCandidate = await knex("candidateProfiles")
    .where({ id: "2" })
    .first();
  expect(updateCandidateProfile && updateCandidateProfile.bio).toBe(
    "Hello world"
  );
  expect(dbCandidate.bio).toBe("Hello world");
});
