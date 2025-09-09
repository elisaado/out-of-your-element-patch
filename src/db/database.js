// @ts-check

const sqlite = require("better-sqlite3")
const path = require("path")

/**
 * Create a new SQLite database instance
 * @param {import("better-sqlite3").Options} [options] - SQLite options
 * @returns {import("better-sqlite3").Database} Database instance
 */
function getDatabase(options = {}) {
	const dataDir = process.env.OOYE_DATA_DIR || process.cwd()
	return new sqlite(path.join(dataDir, "ooye.db"), options)
}

module.exports = {getDatabase}