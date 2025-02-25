

import {pgTable, uuid,time,text } from 'drizzle-orm/pg-core';

export const subscriptions = pgTable('subscriptions', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    createAt: time('created_at').notNull().defaultNow(),
});