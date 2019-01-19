# monad.club

### Project Setup TODO

- [x] Monorepo project with lerna
- [x] Deployment with a single command (`now`) on now v2
  - [ ] Lerna packages should be installable on now - don't know whether its possible yet.
- [x] Shared modules between API + WWW etc.
- [ ] Shared TypeScript config
- [x] Running with a single command
- [x] Next.js Web App
- [x] GraphQL Backend
- [x] All files watched in dev mode even shared libs
- [ ] Postgres
- [ ] Server-side rendered Apollo GraphQL
- [ ] Review apps per commit on now
  - [ ] Every commit/PR should be previewable on `now` with a fresh seeded instance of the database
  - [ ] Seperate Org for monad.club on now

### Local environment

```sh
# Install all workspace dependencies
$ yarn

# Run project in development mode
$ yarn start
```

