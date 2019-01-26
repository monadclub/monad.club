import { migrate, knex } from "@monad.club/databases";
import { candidates } from "@monad.club/databases/build/generated/postgres";
import * as candidateModel from "../candidate";
import { getTestContext, tearDownTest } from "../../utils/test-helpers";

beforeEach(async () => {
  await migrate();
  await knex("candidates").del();
  await knex("candidates").insert([
    {
      id: 1,
      firstName: "Henry",
      lastName: "Kirkness",
      avatarImageId: 1,
      email: "henry@email.com",
      encryptedPassword: "1234567890987654321"
    } as Partial<candidates>,
    {
      id: 2,
      firstName: "Alex",
      lastName: "Keliris",
      avatarImageId: 1,
      email: "alex@email.com",
      encryptedPassword: "1234567890987654321"
    } as Partial<candidates>,
    {
      id: 3,
      firstName: "Joe",
      lastName: "Bloggs",
      avatarImageId: 1,
      email: "joe@email.com",
      encryptedPassword: "1234567890987654321"
    } as Partial<candidates>
  ]);
});

afterAll(tearDownTest);

test("candidate getById should return a candidate", async () => {
  const candidate = await candidateModel.getById(1, getTestContext("1"));
  expect(candidate.id.toString()).toBe("1");
});

test("candidate getPage should return a page of candidates", async () => {
  const pagedCandidates = await candidateModel.getPage({ page: { limit: 2 } });
  expect(pagedCandidates.pageInfo.limit).toBe(2);
  expect(pagedCandidates.pageInfo.offset).toBe(0);
  expect(pagedCandidates.pageInfo.total).toBe(3);
  expect(pagedCandidates.edges).toHaveLength(2);

  const nextPagedCandidates = await candidateModel.getPage({
    page: { limit: 2, offset: 2 }
  });
  expect(nextPagedCandidates.pageInfo.limit).toBe(2);
  expect(nextPagedCandidates.pageInfo.offset).toBe(2);
  expect(nextPagedCandidates.pageInfo.total).toBe(3);
  expect(nextPagedCandidates.edges).toHaveLength(1);
});

test("candidate getById should return a candidate", async () => {
  const updateCandidate = await candidateModel.updateCandidate(
    {
      candidate: { firstName: "Alexander" }
    },
    getTestContext("2")
  );
  const dbCandidate = await knex("candidates")
    .where({ id: "2" })
    .first();
  expect(updateCandidate && updateCandidate.firstName).toBe("Alexander");
  expect(dbCandidate.firstName).toBe("Alexander");
});
