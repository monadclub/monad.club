const addTimestamps = require("./helpers/timestamps");

exports.up = knex =>
  knex.schema
    .createTable("images", table => {
      table
        .increments("id")
        .index()
        .primary();
      table.string("format").notNullable();
      table.string("publicId").notNullable();
      table.integer("version").notNullable();
      table.integer("height").notNullable();
      table.integer("width").notNullable();
      table.string("secureUrl").notNullable();
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      table.timestamp("updatedAt").defaultTo(knex.fn.now());
    })
    .createTable("candidates", table => {
      table
        .increments("id")
        .index()
        .primary();
      table
        .string("email")
        .unique()
        .notNullable();
      table.string("firstName").notNullable();
      table.string("lastName").notNullable();
      table.string("encryptedPassword").notNullable();
      table.string("bio");
      table.date("dateOfBirth");
      table.string("remoteOption");
      table.string("employmentType");
      table.float("salaryExpectation");
      table.float("dayRateExpectation");
      table.integer("avatarImageId").references("images.id");

      table.timestamp("createdAt").defaultTo(knex.fn.now());
      table.timestamp("updatedAt").defaultTo(knex.fn.now());
    })
    .createTable("companies", table => {
      table
        .increments("id")
        .index()
        .primary();
      table.string("name");
      table.string("summary");
      table.string("description");
      table.string("bio");
      table.integer("logoImageId").references("images.id");
      table.string("url");
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      table.timestamp("updatedAt").defaultTo(knex.fn.now());
    })
    .createTable("companyUsers", table => {
      table
        .increments("id")
        .index()
        .primary();
      table.string("email").notNullable();
      table.string("firstName").notNullable();
      table.string("lastName").notNullable();
      table.string("encryptedPassword").notNullable();
      table.integer("avatarImageId").references("images.id");
      table.integer("companyId").references("companies.id");
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      table.timestamp("updatedAt").defaultTo(knex.fn.now());
    })
    .raw(addTimestamps, { table_name: "companyUsers" })
    .raw(addTimestamps, { table_name: "candidates" })
    .raw(addTimestamps, { table_name: "companies" })
    .raw(addTimestamps, { table_name: "images" });

exports.down = knex =>
  knex.schema
    .dropTable("companies")
    .dropTable("candidates")
    .dropTable("images");
