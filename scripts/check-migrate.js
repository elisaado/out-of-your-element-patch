#!/usr/bin/env node
// @ts-check

// Trigger the database migration flow and exit after committing.
// You can use this to run migrations locally and check the result using sqlitebrowser.

const passthrough = require("../src/passthrough")
const {getDatabase} = require("../src/db/database")
const db = getDatabase()
const migrate = require("../src/db/migrate")

Object.assign(passthrough, {db})

migrate.migrate(db)
