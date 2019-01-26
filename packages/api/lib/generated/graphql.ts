export type Maybe<T> = T | null;

export interface PageInput {
  limit: number;

  offset?: Maybe<number>;
}

export interface UpdateCandidateInput {
  firstName: string;

  blockedCompanies?: Maybe<(Maybe<string>)[]>;
}

export interface UpdateCompanyInput {
  id: string;

  name?: Maybe<string>;
}

export interface UpdateCompanyUserInput {
  id: string;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;
}

export enum RemoteOptions {
  RemoteOnly = "REMOTE_ONLY",
  Flexible = "FLEXIBLE",
  OnPremise = "ON_PREMISE"
}

export enum EmploymentTypes {
  Contract = "CONTRACT",
  Permenant = "PERMENANT",
  Both = "BOTH"
}

/** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type Date = any;

/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type DateTime = any;

/** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type Time = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  _empty?: Maybe<string>;

  jobSpec?: Maybe<JobSpec>;

  jobSpecs: PaginatedJobSpecs;

  sideProject?: Maybe<SideProject>;

  sideProjects: PaginatedSideProjects;

  experience?: Maybe<Experience>;

  experiences: PaginatedExperiences;

  skill?: Maybe<Skill>;

  skills: PaginatedSkills;

  candidate?: Maybe<Candidate>;

  candidates: PaginatedCandidates;

  company: Company;

  companies: PaginatedCompanies;

  companyUser?: Maybe<CompanyUser>;

  companyUsers?: Maybe<PaginatedCompanyUsers>;

  contentLink?: Maybe<ContentLink>;

  contentLinks: PaginatedContentLinks;
}

export interface JobSpec {
  id: string;
}

export interface PaginatedJobSpecs {
  pageInfo: PageInfo;

  edges: (Maybe<JobSpec>)[];
}

export interface PageInfo {
  limit: number;

  offset: number;

  total: number;
}

export interface SideProject {
  id: string;

  title: string;

  url: string;

  startDate: Date;

  endDate?: Maybe<Date>;

  description: string;
}

export interface PaginatedSideProjects {
  pageInfo: PageInfo;

  edges: (Maybe<SideProject>)[];
}

export interface Experience {
  id: string;
}

export interface PaginatedExperiences {
  pageInfo: PageInfo;

  edges: (Maybe<Experience>)[];
}

export interface Skill {
  id: string;
}

export interface PaginatedSkills {
  pageInfo: PageInfo;

  edges: (Maybe<Skill>)[];
}

export interface Candidate {
  id: string;

  firstName: string;

  lastName: string;

  email: string;

  bio?: Maybe<string>;

  availibility: string;

  dateOfBirth: Date;

  remoteOption: RemoteOptions;

  employmentType: EmploymentTypes;

  salaryExpectation?: Maybe<number>;

  dayRateExpectation?: Maybe<number>;

  githubId?: Maybe<string>;

  avatarImage?: Maybe<CloudinaryImage>;

  skills?: Maybe<PaginatedSkills>;

  blockedCompanies?: Maybe<PaginatedCompanies>;

  experiences?: Maybe<PaginatedExperiences>;

  sideProjects?: Maybe<PaginatedSideProjects>;

  contentLinks?: Maybe<PaginatedContentLinks>;
}

export interface CloudinaryImage {
  id: string;

  format: string;

  height: number;

  width: number;

  publicId: string;

  version: number;

  secureUrl: string;
}

export interface PaginatedCompanies {
  pageInfo: PageInfo;

  edges: (Maybe<Company>)[];
}

export interface Company {
  id: string;

  name: string;

  summary?: Maybe<string>;

  description?: Maybe<string>;

  logoImage?: Maybe<CloudinaryImage>;

  url?: Maybe<string>;

  isVerified?: Maybe<boolean>;

  jobSpecs?: Maybe<PaginatedJobSpecs>;
}

export interface PaginatedContentLinks {
  pageInfo: PageInfo;

  edges: (Maybe<ContentLink>)[];
}

export interface ContentLink {
  id: string;

  name: string;

  icon: string;

  url: string;
}

export interface PaginatedCandidates {
  pageInfo: PageInfo;

  edges: (Maybe<Candidate>)[];
}

export interface CompanyUser {
  id: string;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  company?: Maybe<Company>;
}

export interface PaginatedCompanyUsers {
  pageInfo: PageInfo;

  edges: (Maybe<CompanyUser>)[];
}

export interface Mutation {
  _empty?: Maybe<string>;

  updateCandidate: Candidate;

  updateCompany: Company;

  updateCompanyUser?: Maybe<CompanyUser>;
}

export interface Chat {
  id: string;
}

export interface Level {
  id: string;
}

export interface Message {
  id: string;
}

export interface Role {
  id: string;
}

// ====================================================
// Arguments
// ====================================================

export interface JobSpecQueryArgs {
  id: string;
}
export interface JobSpecsQueryArgs {
  page?: Maybe<PageInput>;
}
export interface SideProjectQueryArgs {
  id: string;
}
export interface SideProjectsQueryArgs {
  page?: Maybe<PageInput>;
}
export interface ExperienceQueryArgs {
  id: string;
}
export interface ExperiencesQueryArgs {
  page?: Maybe<PageInput>;
}
export interface SkillQueryArgs {
  id: string;
}
export interface SkillsQueryArgs {
  page?: Maybe<PageInput>;
}
export interface CandidateQueryArgs {
  id: string;
}
export interface CandidatesQueryArgs {
  page: PageInput;
}
export interface CompaniesQueryArgs {
  page?: Maybe<PageInput>;
}
export interface CompanyUserQueryArgs {
  id: string;
}
export interface CompanyUsersQueryArgs {
  id: string;
}
export interface ContentLinkQueryArgs {
  id: string;
}
export interface ContentLinksQueryArgs {
  page?: Maybe<PageInput>;
}
export interface SkillsCandidateArgs {
  page: PageInput;
}
export interface BlockedCompaniesCandidateArgs {
  page: PageInput;
}
export interface ExperiencesCandidateArgs {
  page: PageInput;
}
export interface SideProjectsCandidateArgs {
  page: PageInput;
}
export interface ContentLinksCandidateArgs {
  page: PageInput;
}
export interface JobSpecsCompanyArgs {
  page: PageInput;
}
export interface UpdateCandidateMutationArgs {
  candidate: UpdateCandidateInput;
}
export interface UpdateCompanyMutationArgs {
  company?: Maybe<UpdateCompanyInput>;
}
export interface UpdateCompanyUserMutationArgs {
  companyUser?: Maybe<UpdateCompanyUserInput>;
}

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    _empty?: _EmptyResolver<Maybe<string>, TypeParent, Context>;

    jobSpec?: JobSpecResolver<Maybe<JobSpec>, TypeParent, Context>;

    jobSpecs?: JobSpecsResolver<PaginatedJobSpecs, TypeParent, Context>;

    sideProject?: SideProjectResolver<Maybe<SideProject>, TypeParent, Context>;

    sideProjects?: SideProjectsResolver<
      PaginatedSideProjects,
      TypeParent,
      Context
    >;

    experience?: ExperienceResolver<Maybe<Experience>, TypeParent, Context>;

    experiences?: ExperiencesResolver<
      PaginatedExperiences,
      TypeParent,
      Context
    >;

    skill?: SkillResolver<Maybe<Skill>, TypeParent, Context>;

    skills?: SkillsResolver<PaginatedSkills, TypeParent, Context>;

    candidate?: CandidateResolver<Maybe<Candidate>, TypeParent, Context>;

    candidates?: CandidatesResolver<PaginatedCandidates, TypeParent, Context>;

    company?: CompanyResolver<Company, TypeParent, Context>;

    companies?: CompaniesResolver<PaginatedCompanies, TypeParent, Context>;

    companyUser?: CompanyUserResolver<Maybe<CompanyUser>, TypeParent, Context>;

    companyUsers?: CompanyUsersResolver<
      Maybe<PaginatedCompanyUsers>,
      TypeParent,
      Context
    >;

    contentLink?: ContentLinkResolver<Maybe<ContentLink>, TypeParent, Context>;

    contentLinks?: ContentLinksResolver<
      PaginatedContentLinks,
      TypeParent,
      Context
    >;
  }

  export type _EmptyResolver<
    R = Maybe<string>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type JobSpecResolver<
    R = Maybe<JobSpec>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, JobSpecArgs>;
  export interface JobSpecArgs {
    id: string;
  }

  export type JobSpecsResolver<
    R = PaginatedJobSpecs,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, JobSpecsArgs>;
  export interface JobSpecsArgs {
    page?: Maybe<PageInput>;
  }

  export type SideProjectResolver<
    R = Maybe<SideProject>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SideProjectArgs>;
  export interface SideProjectArgs {
    id: string;
  }

  export type SideProjectsResolver<
    R = PaginatedSideProjects,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SideProjectsArgs>;
  export interface SideProjectsArgs {
    page?: Maybe<PageInput>;
  }

  export type ExperienceResolver<
    R = Maybe<Experience>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, ExperienceArgs>;
  export interface ExperienceArgs {
    id: string;
  }

  export type ExperiencesResolver<
    R = PaginatedExperiences,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, ExperiencesArgs>;
  export interface ExperiencesArgs {
    page?: Maybe<PageInput>;
  }

  export type SkillResolver<
    R = Maybe<Skill>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SkillArgs>;
  export interface SkillArgs {
    id: string;
  }

  export type SkillsResolver<
    R = PaginatedSkills,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SkillsArgs>;
  export interface SkillsArgs {
    page?: Maybe<PageInput>;
  }

  export type CandidateResolver<
    R = Maybe<Candidate>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, CandidateArgs>;
  export interface CandidateArgs {
    id: string;
  }

  export type CandidatesResolver<
    R = PaginatedCandidates,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, CandidatesArgs>;
  export interface CandidatesArgs {
    page: PageInput;
  }

  export type CompanyResolver<
    R = Company,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CompaniesResolver<
    R = PaginatedCompanies,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, CompaniesArgs>;
  export interface CompaniesArgs {
    page?: Maybe<PageInput>;
  }

  export type CompanyUserResolver<
    R = Maybe<CompanyUser>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, CompanyUserArgs>;
  export interface CompanyUserArgs {
    id: string;
  }

  export type CompanyUsersResolver<
    R = Maybe<PaginatedCompanyUsers>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, CompanyUsersArgs>;
  export interface CompanyUsersArgs {
    id: string;
  }

  export type ContentLinkResolver<
    R = Maybe<ContentLink>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, ContentLinkArgs>;
  export interface ContentLinkArgs {
    id: string;
  }

  export type ContentLinksResolver<
    R = PaginatedContentLinks,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, ContentLinksArgs>;
  export interface ContentLinksArgs {
    page?: Maybe<PageInput>;
  }
}

export namespace JobSpecResolvers {
  export interface Resolvers<Context = {}, TypeParent = JobSpec> {
    id?: IdResolver<string, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = JobSpec, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace PaginatedJobSpecsResolvers {
  export interface Resolvers<Context = {}, TypeParent = PaginatedJobSpecs> {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>;

    edges?: EdgesResolver<(Maybe<JobSpec>)[], TypeParent, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = PaginatedJobSpecs,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (Maybe<JobSpec>)[],
    Parent = PaginatedJobSpecs,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace PageInfoResolvers {
  export interface Resolvers<Context = {}, TypeParent = PageInfo> {
    limit?: LimitResolver<number, TypeParent, Context>;

    offset?: OffsetResolver<number, TypeParent, Context>;

    total?: TotalResolver<number, TypeParent, Context>;
  }

  export type LimitResolver<
    R = number,
    Parent = PageInfo,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type OffsetResolver<
    R = number,
    Parent = PageInfo,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TotalResolver<
    R = number,
    Parent = PageInfo,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace SideProjectResolvers {
  export interface Resolvers<Context = {}, TypeParent = SideProject> {
    id?: IdResolver<string, TypeParent, Context>;

    title?: TitleResolver<string, TypeParent, Context>;

    url?: UrlResolver<string, TypeParent, Context>;

    startDate?: StartDateResolver<Date, TypeParent, Context>;

    endDate?: EndDateResolver<Maybe<Date>, TypeParent, Context>;

    description?: DescriptionResolver<string, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = SideProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string,
    Parent = SideProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<
    R = string,
    Parent = SideProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type StartDateResolver<
    R = Date,
    Parent = SideProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EndDateResolver<
    R = Maybe<Date>,
    Parent = SideProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = string,
    Parent = SideProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace PaginatedSideProjectsResolvers {
  export interface Resolvers<Context = {}, TypeParent = PaginatedSideProjects> {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>;

    edges?: EdgesResolver<(Maybe<SideProject>)[], TypeParent, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = PaginatedSideProjects,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (Maybe<SideProject>)[],
    Parent = PaginatedSideProjects,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace ExperienceResolvers {
  export interface Resolvers<Context = {}, TypeParent = Experience> {
    id?: IdResolver<string, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = Experience,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace PaginatedExperiencesResolvers {
  export interface Resolvers<Context = {}, TypeParent = PaginatedExperiences> {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>;

    edges?: EdgesResolver<(Maybe<Experience>)[], TypeParent, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = PaginatedExperiences,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (Maybe<Experience>)[],
    Parent = PaginatedExperiences,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace SkillResolvers {
  export interface Resolvers<Context = {}, TypeParent = Skill> {
    id?: IdResolver<string, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = Skill, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace PaginatedSkillsResolvers {
  export interface Resolvers<Context = {}, TypeParent = PaginatedSkills> {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>;

    edges?: EdgesResolver<(Maybe<Skill>)[], TypeParent, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = PaginatedSkills,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (Maybe<Skill>)[],
    Parent = PaginatedSkills,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace CandidateResolvers {
  export interface Resolvers<Context = {}, TypeParent = Candidate> {
    id?: IdResolver<string, TypeParent, Context>;

    firstName?: FirstNameResolver<string, TypeParent, Context>;

    lastName?: LastNameResolver<string, TypeParent, Context>;

    email?: EmailResolver<string, TypeParent, Context>;

    bio?: BioResolver<Maybe<string>, TypeParent, Context>;

    availibility?: AvailibilityResolver<string, TypeParent, Context>;

    dateOfBirth?: DateOfBirthResolver<Date, TypeParent, Context>;

    remoteOption?: RemoteOptionResolver<RemoteOptions, TypeParent, Context>;

    employmentType?: EmploymentTypeResolver<
      EmploymentTypes,
      TypeParent,
      Context
    >;

    salaryExpectation?: SalaryExpectationResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    dayRateExpectation?: DayRateExpectationResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    githubId?: GithubIdResolver<Maybe<string>, TypeParent, Context>;

    avatarImage?: AvatarImageResolver<
      Maybe<CloudinaryImage>,
      TypeParent,
      Context
    >;

    skills?: SkillsResolver<Maybe<PaginatedSkills>, TypeParent, Context>;

    blockedCompanies?: BlockedCompaniesResolver<
      Maybe<PaginatedCompanies>,
      TypeParent,
      Context
    >;

    experiences?: ExperiencesResolver<
      Maybe<PaginatedExperiences>,
      TypeParent,
      Context
    >;

    sideProjects?: SideProjectsResolver<
      Maybe<PaginatedSideProjects>,
      TypeParent,
      Context
    >;

    contentLinks?: ContentLinksResolver<
      Maybe<PaginatedContentLinks>,
      TypeParent,
      Context
    >;
  }

  export type IdResolver<
    R = string,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type FirstNameResolver<
    R = string,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type LastNameResolver<
    R = string,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<
    R = string,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type BioResolver<
    R = Maybe<string>,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type AvailibilityResolver<
    R = string,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DateOfBirthResolver<
    R = Date,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type RemoteOptionResolver<
    R = RemoteOptions,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EmploymentTypeResolver<
    R = EmploymentTypes,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SalaryExpectationResolver<
    R = Maybe<number>,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DayRateExpectationResolver<
    R = Maybe<number>,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type GithubIdResolver<
    R = Maybe<string>,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type AvatarImageResolver<
    R = Maybe<CloudinaryImage>,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SkillsResolver<
    R = Maybe<PaginatedSkills>,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context, SkillsArgs>;
  export interface SkillsArgs {
    page: PageInput;
  }

  export type BlockedCompaniesResolver<
    R = Maybe<PaginatedCompanies>,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context, BlockedCompaniesArgs>;
  export interface BlockedCompaniesArgs {
    page: PageInput;
  }

  export type ExperiencesResolver<
    R = Maybe<PaginatedExperiences>,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context, ExperiencesArgs>;
  export interface ExperiencesArgs {
    page: PageInput;
  }

  export type SideProjectsResolver<
    R = Maybe<PaginatedSideProjects>,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context, SideProjectsArgs>;
  export interface SideProjectsArgs {
    page: PageInput;
  }

  export type ContentLinksResolver<
    R = Maybe<PaginatedContentLinks>,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context, ContentLinksArgs>;
  export interface ContentLinksArgs {
    page: PageInput;
  }
}

export namespace CloudinaryImageResolvers {
  export interface Resolvers<Context = {}, TypeParent = CloudinaryImage> {
    id?: IdResolver<string, TypeParent, Context>;

    format?: FormatResolver<string, TypeParent, Context>;

    height?: HeightResolver<number, TypeParent, Context>;

    width?: WidthResolver<number, TypeParent, Context>;

    publicId?: PublicIdResolver<string, TypeParent, Context>;

    version?: VersionResolver<number, TypeParent, Context>;

    secureUrl?: SecureUrlResolver<string, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = CloudinaryImage,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type FormatResolver<
    R = string,
    Parent = CloudinaryImage,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type HeightResolver<
    R = number,
    Parent = CloudinaryImage,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type WidthResolver<
    R = number,
    Parent = CloudinaryImage,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PublicIdResolver<
    R = string,
    Parent = CloudinaryImage,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type VersionResolver<
    R = number,
    Parent = CloudinaryImage,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SecureUrlResolver<
    R = string,
    Parent = CloudinaryImage,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace PaginatedCompaniesResolvers {
  export interface Resolvers<Context = {}, TypeParent = PaginatedCompanies> {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>;

    edges?: EdgesResolver<(Maybe<Company>)[], TypeParent, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = PaginatedCompanies,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (Maybe<Company>)[],
    Parent = PaginatedCompanies,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace CompanyResolvers {
  export interface Resolvers<Context = {}, TypeParent = Company> {
    id?: IdResolver<string, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    summary?: SummaryResolver<Maybe<string>, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;

    logoImage?: LogoImageResolver<Maybe<CloudinaryImage>, TypeParent, Context>;

    url?: UrlResolver<Maybe<string>, TypeParent, Context>;

    isVerified?: IsVerifiedResolver<Maybe<boolean>, TypeParent, Context>;

    jobSpecs?: JobSpecsResolver<Maybe<PaginatedJobSpecs>, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = Company, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NameResolver<
    R = string,
    Parent = Company,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SummaryResolver<
    R = Maybe<string>,
    Parent = Company,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = Company,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type LogoImageResolver<
    R = Maybe<CloudinaryImage>,
    Parent = Company,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<
    R = Maybe<string>,
    Parent = Company,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type IsVerifiedResolver<
    R = Maybe<boolean>,
    Parent = Company,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type JobSpecsResolver<
    R = Maybe<PaginatedJobSpecs>,
    Parent = Company,
    Context = {}
  > = Resolver<R, Parent, Context, JobSpecsArgs>;
  export interface JobSpecsArgs {
    page: PageInput;
  }
}

export namespace PaginatedContentLinksResolvers {
  export interface Resolvers<Context = {}, TypeParent = PaginatedContentLinks> {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>;

    edges?: EdgesResolver<(Maybe<ContentLink>)[], TypeParent, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = PaginatedContentLinks,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (Maybe<ContentLink>)[],
    Parent = PaginatedContentLinks,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace ContentLinkResolvers {
  export interface Resolvers<Context = {}, TypeParent = ContentLink> {
    id?: IdResolver<string, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    icon?: IconResolver<string, TypeParent, Context>;

    url?: UrlResolver<string, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = ContentLink,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string,
    Parent = ContentLink,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type IconResolver<
    R = string,
    Parent = ContentLink,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UrlResolver<
    R = string,
    Parent = ContentLink,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace PaginatedCandidatesResolvers {
  export interface Resolvers<Context = {}, TypeParent = PaginatedCandidates> {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>;

    edges?: EdgesResolver<(Maybe<Candidate>)[], TypeParent, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = PaginatedCandidates,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (Maybe<Candidate>)[],
    Parent = PaginatedCandidates,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace CompanyUserResolvers {
  export interface Resolvers<Context = {}, TypeParent = CompanyUser> {
    id?: IdResolver<string, TypeParent, Context>;

    firstName?: FirstNameResolver<Maybe<string>, TypeParent, Context>;

    lastName?: LastNameResolver<Maybe<string>, TypeParent, Context>;

    company?: CompanyResolver<Maybe<Company>, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = CompanyUser,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type FirstNameResolver<
    R = Maybe<string>,
    Parent = CompanyUser,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type LastNameResolver<
    R = Maybe<string>,
    Parent = CompanyUser,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CompanyResolver<
    R = Maybe<Company>,
    Parent = CompanyUser,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace PaginatedCompanyUsersResolvers {
  export interface Resolvers<Context = {}, TypeParent = PaginatedCompanyUsers> {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>;

    edges?: EdgesResolver<(Maybe<CompanyUser>)[], TypeParent, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = PaginatedCompanyUsers,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (Maybe<CompanyUser>)[],
    Parent = PaginatedCompanyUsers,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    _empty?: _EmptyResolver<Maybe<string>, TypeParent, Context>;

    updateCandidate?: UpdateCandidateResolver<Candidate, TypeParent, Context>;

    updateCompany?: UpdateCompanyResolver<Company, TypeParent, Context>;

    updateCompanyUser?: UpdateCompanyUserResolver<
      Maybe<CompanyUser>,
      TypeParent,
      Context
    >;
  }

  export type _EmptyResolver<
    R = Maybe<string>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UpdateCandidateResolver<
    R = Candidate,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, UpdateCandidateArgs>;
  export interface UpdateCandidateArgs {
    candidate: UpdateCandidateInput;
  }

  export type UpdateCompanyResolver<
    R = Company,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, UpdateCompanyArgs>;
  export interface UpdateCompanyArgs {
    company?: Maybe<UpdateCompanyInput>;
  }

  export type UpdateCompanyUserResolver<
    R = Maybe<CompanyUser>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, UpdateCompanyUserArgs>;
  export interface UpdateCompanyUserArgs {
    companyUser?: Maybe<UpdateCompanyUserInput>;
  }
}

export namespace ChatResolvers {
  export interface Resolvers<Context = {}, TypeParent = Chat> {
    id?: IdResolver<string, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = Chat, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace LevelResolvers {
  export interface Resolvers<Context = {}, TypeParent = Level> {
    id?: IdResolver<string, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = Level, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace MessageResolvers {
  export interface Resolvers<Context = {}, TypeParent = Message> {
    id?: IdResolver<string, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = Message, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace RoleResolvers {
  export interface Resolvers<Context = {}, TypeParent = Role> {
    id?: IdResolver<string, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = Role, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  {}
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  {}
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  {}
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<Date, any> {
  name: "Date";
}
export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<DateTime, any> {
  name: "DateTime";
}
export interface TimeScalarConfig extends GraphQLScalarTypeConfig<Time, any> {
  name: "Time";
}

export interface IResolvers<Context = {}> {
  Query?: QueryResolvers.Resolvers<Context>;
  JobSpec?: JobSpecResolvers.Resolvers<Context>;
  PaginatedJobSpecs?: PaginatedJobSpecsResolvers.Resolvers<Context>;
  PageInfo?: PageInfoResolvers.Resolvers<Context>;
  SideProject?: SideProjectResolvers.Resolvers<Context>;
  PaginatedSideProjects?: PaginatedSideProjectsResolvers.Resolvers<Context>;
  Experience?: ExperienceResolvers.Resolvers<Context>;
  PaginatedExperiences?: PaginatedExperiencesResolvers.Resolvers<Context>;
  Skill?: SkillResolvers.Resolvers<Context>;
  PaginatedSkills?: PaginatedSkillsResolvers.Resolvers<Context>;
  Candidate?: CandidateResolvers.Resolvers<Context>;
  CloudinaryImage?: CloudinaryImageResolvers.Resolvers<Context>;
  PaginatedCompanies?: PaginatedCompaniesResolvers.Resolvers<Context>;
  Company?: CompanyResolvers.Resolvers<Context>;
  PaginatedContentLinks?: PaginatedContentLinksResolvers.Resolvers<Context>;
  ContentLink?: ContentLinkResolvers.Resolvers<Context>;
  PaginatedCandidates?: PaginatedCandidatesResolvers.Resolvers<Context>;
  CompanyUser?: CompanyUserResolvers.Resolvers<Context>;
  PaginatedCompanyUsers?: PaginatedCompanyUsersResolvers.Resolvers<Context>;
  Mutation?: MutationResolvers.Resolvers<Context>;
  Chat?: ChatResolvers.Resolvers<Context>;
  Level?: LevelResolvers.Resolvers<Context>;
  Message?: MessageResolvers.Resolvers<Context>;
  Role?: RoleResolvers.Resolvers<Context>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Time?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
