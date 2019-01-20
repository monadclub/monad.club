# monad.club

### Project Setup TODO

#### Before we start development

- [x] Monorepo project with lerna
- [x] Deployment with a single command (`now`) on now v2
- [x] Shared modules between API + WWW etc.
- [ ] Shared TypeScript config
- [x] Running with a single command
- [x] Next.js Web App
- [x] GraphQL Backend
- [x] All files watched in dev mode even shared libs
- [ ] Postgres
- [ ] Server-side rendered Apollo GraphQL
- [ ] Testing environment and strategy for each package

#### Whenever possible before release

- [ ] Review apps per commit on now
  - [ ] Every commit/PR should be previewable on `now` with a fresh seeded instance of the database
  - [ ] Seperate Org for monad.club on now
- [ ] Shared lerna packages should be installable on now
  - *Not sure if this is possible to now v2*
- [ ] Job queue with `bull` or similar
  - *Not sure if this is possible to now v2*
- [ ] GraphQL subscriptions for chat (potentially not for MVP?)
  - *Not sure if this is possible to now v2*
- [ ] Add redis for job queue + rate-limiting etc.

### Local environment

```sh
# Install all workspace dependencies
$ yarn

# Run project in development mode
$ yarn start
```

