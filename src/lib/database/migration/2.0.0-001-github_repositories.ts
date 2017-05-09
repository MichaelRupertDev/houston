/**
 * houston/src/lib/database/migration/2.0.0-001-github_repositories.ts
 * The inital houston 2.0.0 migration for GitHub repositories table
 *
 * @exports {Function} up - Database information for upgrading to version 2.0.0
 * @exports {Function} down - Database information for downgrading version 2.0.0
 */

/**
 * up
 * Database information for upgrading to version 2.0.0
 *
 * @param {Object} knex - An initalized Knex package
 * @return {Promise} - A promise of database migration
 */
export function up (knex) {
  return knex.schema.createTable('github_repositories', (table) => {
    table.integer('id').primary()

    table.string('owner').notNullable()
    table.string('name').notNullable()

    table.boolean('is_private').notNullable()

    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('deleted_at').nullable()
  })
}

/**
 * down
 * Database information for downgrading version 2.0.0
 *
 * @param {Object} knex - An initalized Knex package
 * @return {Promise} - A promise of successful database migration
 */
export function down (knex) {
  return knex.schema.dropTable('github_repositories')
}