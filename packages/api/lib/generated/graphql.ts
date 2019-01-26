export type Maybe<T> = T | null;

/** Pagination input variable structure */
export interface PageInput {
  limit: number;

  offset?: Maybe<number>;
}

export interface UpdateCandidateProfileInput {
  blockedCompanies?: Maybe<(Maybe<string>)[]>;

  bio?: Maybe<string>;
}

export interface UpdateCompanyInput {
  id: string;

  name?: Maybe<string>;
}

export interface UpdateUserInput {
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

export type Date = any;

export type DateTime = any;

export type Time = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  candidateProfile?: Maybe<CandidateProfile>;

  candidateProfiles: PaginatedCandidateProfiles;

  company: Company;

  companies: PaginatedCompanies;

  contentLink?: Maybe<ContentLink>;

  contentLinks: PaginatedContentLinks;

  experience?: Maybe<Experience>;

  experiences: PaginatedExperiences;

  _empty?: Maybe<string>;

  jobSpec?: Maybe<JobSpec>;

  jobSpecs: PaginatedJobSpecs;

  sideProject?: Maybe<SideProject>;

  sideProjects: PaginatedSideProjects;

  skill?: Maybe<Skill>;

  skills: PaginatedSkills;

  user?: Maybe<User>;

  users?: Maybe<PaginatedUsers>;
}

export interface CandidateProfile {
  id: string;

  bio?: Maybe<string>;

  availibility: string;

  dateOfBirth: Date;

  remoteOption: RemoteOptions;

  employmentType: EmploymentTypes;

  salaryExpectation?: Maybe<number>;

  dayRateExpectation?: Maybe<number>;

  githubId?: Maybe<string>;

  avatarImage?: Maybe<CloudinaryImage>;
  /** avatar(transform: CloudinaryTransform): String TODO: Returns a cloudinary string based on transformation */
  skills?: Maybe<PaginatedSkills>;

  blockedCompanies?: Maybe<PaginatedCompanies>;

  experiences?: Maybe<PaginatedExperiences>;

  sideProjects?: Maybe<PaginatedSideProjects>;

  contentLinks?: Maybe<PaginatedContentLinks>;

  user: User;
}

/** Raw cloudinary image - maps one-to-one with table */
export interface CloudinaryImage {
  id: string;

  format: string;

  height: number;

  width: number;

  publicId: string;

  version: number;

  secureUrl: string;
}

export interface PaginatedSkills {
  pageInfo: PageInfo;

  edges: (Maybe<Skill>)[];
}

/** Pagination page data */
export interface PageInfo {
  limit: number;

  offset: number;

  total: number;
}

export interface Skill {
  id: string;
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
  /** logo(transform: CloudinaryTransform): String TODO: Returns a cloudinary string based on transformation */
  url?: Maybe<string>;

  isVerified?: Maybe<boolean>;

  jobSpecs?: Maybe<PaginatedJobSpecs>;
}

export interface PaginatedJobSpecs {
  pageInfo: PageInfo;

  edges: (Maybe<JobSpec>)[];
}

export interface JobSpec {
  id: string;
}

export interface PaginatedExperiences {
  pageInfo: PageInfo;

  edges: (Maybe<Experience>)[];
}

export interface Experience {
  id: string;
}

export interface PaginatedSideProjects {
  pageInfo: PageInfo;

  edges: (Maybe<SideProject>)[];
}

export interface SideProject {
  id: string;

  title: string;

  url: string;

  startDate: Date;

  endDate?: Maybe<Date>;

  description: string;
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

export interface User {
  id: string;

  firstName?: Maybe<string>;

  lastName?: Maybe<string>;

  company?: Maybe<Company>;

  candidateProfile?: Maybe<CandidateProfile>;
}

export interface PaginatedCandidateProfiles {
  pageInfo: PageInfo;

  edges: (Maybe<CandidateProfile>)[];
}

export interface PaginatedUsers {
  pageInfo: PageInfo;

  edges: (Maybe<User>)[];
}

export interface Mutation {
  updateCandidateProfile: CandidateProfile;

  updateCompany: Company;

  _empty?: Maybe<string>;

  updateUser?: Maybe<User>;
}

/** TODO: These are not global - should have seperate defs. */
export interface Role {
  id: string;
}

export interface Level {
  id: string;
}

export interface Chat {
  id: string;
}

export interface Message {
  id: string;
}

// ====================================================
// Arguments
// ====================================================

export interface CandidateProfileQueryArgs {
  id: string;
}
export interface CandidateProfilesQueryArgs {
  page: PageInput;
}
export interface CompaniesQueryArgs {
  page?: Maybe<PageInput>;
}
export interface ContentLinkQueryArgs {
  id: string;
}
export interface ContentLinksQueryArgs {
  page?: Maybe<PageInput>;
}
export interface ExperienceQueryArgs {
  id: string;
}
export interface ExperiencesQueryArgs {
  page?: Maybe<PageInput>;
}
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
export interface SkillQueryArgs {
  id: string;
}
export interface SkillsQueryArgs {
  page?: Maybe<PageInput>;
}
export interface UserQueryArgs {
  id: string;
}
export interface UsersQueryArgs {
  id: string;
}
export interface SkillsCandidateProfileArgs {
  page: PageInput;
}
export interface BlockedCompaniesCandidateProfileArgs {
  page: PageInput;
}
export interface ExperiencesCandidateProfileArgs {
  page: PageInput;
}
export interface SideProjectsCandidateProfileArgs {
  page: PageInput;
}
export interface ContentLinksCandidateProfileArgs {
  page: PageInput;
}
export interface JobSpecsCompanyArgs {
  page: PageInput;
}
export interface UpdateCandidateProfileMutationArgs {
  candidateProfile: UpdateCandidateProfileInput;
}
export interface UpdateCompanyMutationArgs {
  company?: Maybe<UpdateCompanyInput>;
}
export interface UpdateUserMutationArgs {
  user?: Maybe<UpdateUserInput>;
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
    candidateProfile?: CandidateProfileResolver<
      Maybe<CandidateProfile>,
      TypeParent,
      Context
    >;

    candidateProfiles?: CandidateProfilesResolver<
      PaginatedCandidateProfiles,
      TypeParent,
      Context
    >;

    company?: CompanyResolver<Company, TypeParent, Context>;

    companies?: CompaniesResolver<PaginatedCompanies, TypeParent, Context>;

    contentLink?: ContentLinkResolver<Maybe<ContentLink>, TypeParent, Context>;

    contentLinks?: ContentLinksResolver<
      PaginatedContentLinks,
      TypeParent,
      Context
    >;

    experience?: ExperienceResolver<Maybe<Experience>, TypeParent, Context>;

    experiences?: ExperiencesResolver<
      PaginatedExperiences,
      TypeParent,
      Context
    >;

    _empty?: _EmptyResolver<Maybe<string>, TypeParent, Context>;

    jobSpec?: JobSpecResolver<Maybe<JobSpec>, TypeParent, Context>;

    jobSpecs?: JobSpecsResolver<PaginatedJobSpecs, TypeParent, Context>;

    sideProject?: SideProjectResolver<Maybe<SideProject>, TypeParent, Context>;

    sideProjects?: SideProjectsResolver<
      PaginatedSideProjects,
      TypeParent,
      Context
    >;

    skill?: SkillResolver<Maybe<Skill>, TypeParent, Context>;

    skills?: SkillsResolver<PaginatedSkills, TypeParent, Context>;

    user?: UserResolver<Maybe<User>, TypeParent, Context>;

    users?: UsersResolver<Maybe<PaginatedUsers>, TypeParent, Context>;
  }

  export type CandidateProfileResolver<
    R = Maybe<CandidateProfile>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, CandidateProfileArgs>;
  export interface CandidateProfileArgs {
    id: string;
  }

  export type CandidateProfilesResolver<
    R = PaginatedCandidateProfiles,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, CandidateProfilesArgs>;
  export interface CandidateProfilesArgs {
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

  export type UserResolver<
    R = Maybe<User>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, UserArgs>;
  export interface UserArgs {
    id: string;
  }

  export type UsersResolver<
    R = Maybe<PaginatedUsers>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, UsersArgs>;
  export interface UsersArgs {
    id: string;
  }
}

export namespace CandidateProfileResolvers {
  export interface Resolvers<Context = {}, TypeParent = CandidateProfile> {
    id?: IdResolver<string, TypeParent, Context>;

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
    /** avatar(transform: CloudinaryTransform): String TODO: Returns a cloudinary string based on transformation */
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

    user?: UserResolver<User, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type BioResolver<
    R = Maybe<string>,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type AvailibilityResolver<
    R = string,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DateOfBirthResolver<
    R = Date,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type RemoteOptionResolver<
    R = RemoteOptions,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EmploymentTypeResolver<
    R = EmploymentTypes,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SalaryExpectationResolver<
    R = Maybe<number>,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DayRateExpectationResolver<
    R = Maybe<number>,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type GithubIdResolver<
    R = Maybe<string>,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type AvatarImageResolver<
    R = Maybe<CloudinaryImage>,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SkillsResolver<
    R = Maybe<PaginatedSkills>,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context, SkillsArgs>;
  export interface SkillsArgs {
    page: PageInput;
  }

  export type BlockedCompaniesResolver<
    R = Maybe<PaginatedCompanies>,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context, BlockedCompaniesArgs>;
  export interface BlockedCompaniesArgs {
    page: PageInput;
  }

  export type ExperiencesResolver<
    R = Maybe<PaginatedExperiences>,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context, ExperiencesArgs>;
  export interface ExperiencesArgs {
    page: PageInput;
  }

  export type SideProjectsResolver<
    R = Maybe<PaginatedSideProjects>,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context, SideProjectsArgs>;
  export interface SideProjectsArgs {
    page: PageInput;
  }

  export type ContentLinksResolver<
    R = Maybe<PaginatedContentLinks>,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context, ContentLinksArgs>;
  export interface ContentLinksArgs {
    page: PageInput;
  }

  export type UserResolver<
    R = User,
    Parent = CandidateProfile,
    Context = {}
  > = Resolver<R, Parent, Context>;
}
/** Raw cloudinary image - maps one-to-one with table */
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
/** Pagination page data */
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
    /** logo(transform: CloudinaryTransform): String TODO: Returns a cloudinary string based on transformation */
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

export namespace UserResolvers {
  export interface Resolvers<Context = {}, TypeParent = User> {
    id?: IdResolver<string, TypeParent, Context>;

    firstName?: FirstNameResolver<Maybe<string>, TypeParent, Context>;

    lastName?: LastNameResolver<Maybe<string>, TypeParent, Context>;

    company?: CompanyResolver<Maybe<Company>, TypeParent, Context>;

    candidateProfile?: CandidateProfileResolver<
      Maybe<CandidateProfile>,
      TypeParent,
      Context
    >;
  }

  export type IdResolver<R = string, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type FirstNameResolver<
    R = Maybe<string>,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type LastNameResolver<
    R = Maybe<string>,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CompanyResolver<
    R = Maybe<Company>,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CandidateProfileResolver<
    R = Maybe<CandidateProfile>,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace PaginatedCandidateProfilesResolvers {
  export interface Resolvers<
    Context = {},
    TypeParent = PaginatedCandidateProfiles
  > {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>;

    edges?: EdgesResolver<(Maybe<CandidateProfile>)[], TypeParent, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = PaginatedCandidateProfiles,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (Maybe<CandidateProfile>)[],
    Parent = PaginatedCandidateProfiles,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace PaginatedUsersResolvers {
  export interface Resolvers<Context = {}, TypeParent = PaginatedUsers> {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>;

    edges?: EdgesResolver<(Maybe<User>)[], TypeParent, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = PaginatedUsers,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (Maybe<User>)[],
    Parent = PaginatedUsers,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    updateCandidateProfile?: UpdateCandidateProfileResolver<
      CandidateProfile,
      TypeParent,
      Context
    >;

    updateCompany?: UpdateCompanyResolver<Company, TypeParent, Context>;

    _empty?: _EmptyResolver<Maybe<string>, TypeParent, Context>;

    updateUser?: UpdateUserResolver<Maybe<User>, TypeParent, Context>;
  }

  export type UpdateCandidateProfileResolver<
    R = CandidateProfile,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, UpdateCandidateProfileArgs>;
  export interface UpdateCandidateProfileArgs {
    candidateProfile: UpdateCandidateProfileInput;
  }

  export type UpdateCompanyResolver<
    R = Company,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, UpdateCompanyArgs>;
  export interface UpdateCompanyArgs {
    company?: Maybe<UpdateCompanyInput>;
  }

  export type _EmptyResolver<
    R = Maybe<string>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UpdateUserResolver<
    R = Maybe<User>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, UpdateUserArgs>;
  export interface UpdateUserArgs {
    user?: Maybe<UpdateUserInput>;
  }
}
/** TODO: These are not global - should have seperate defs. */
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
  CandidateProfile?: CandidateProfileResolvers.Resolvers<Context>;
  CloudinaryImage?: CloudinaryImageResolvers.Resolvers<Context>;
  PaginatedSkills?: PaginatedSkillsResolvers.Resolvers<Context>;
  PageInfo?: PageInfoResolvers.Resolvers<Context>;
  Skill?: SkillResolvers.Resolvers<Context>;
  PaginatedCompanies?: PaginatedCompaniesResolvers.Resolvers<Context>;
  Company?: CompanyResolvers.Resolvers<Context>;
  PaginatedJobSpecs?: PaginatedJobSpecsResolvers.Resolvers<Context>;
  JobSpec?: JobSpecResolvers.Resolvers<Context>;
  PaginatedExperiences?: PaginatedExperiencesResolvers.Resolvers<Context>;
  Experience?: ExperienceResolvers.Resolvers<Context>;
  PaginatedSideProjects?: PaginatedSideProjectsResolvers.Resolvers<Context>;
  SideProject?: SideProjectResolvers.Resolvers<Context>;
  PaginatedContentLinks?: PaginatedContentLinksResolvers.Resolvers<Context>;
  ContentLink?: ContentLinkResolvers.Resolvers<Context>;
  User?: UserResolvers.Resolvers<Context>;
  PaginatedCandidateProfiles?: PaginatedCandidateProfilesResolvers.Resolvers<
    Context
  >;
  PaginatedUsers?: PaginatedUsersResolvers.Resolvers<Context>;
  Mutation?: MutationResolvers.Resolvers<Context>;
  Role?: RoleResolvers.Resolvers<Context>;
  Level?: LevelResolvers.Resolvers<Context>;
  Chat?: ChatResolvers.Resolvers<Context>;
  Message?: MessageResolvers.Resolvers<Context>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Time?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
