import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _supabase: SupabaseClient | null = null;

export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
  return Boolean(url && key);
}

export function getSupabase(): SupabaseClient | null {
  if (!isSupabaseConfigured()) return null;
  if (_supabase) return _supabase;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;
  _supabase = createClient(url, key);
  return _supabase;
}

/** @deprecated use getSupabase() which now returns null when not configured */
export const supabase = new Proxy({} as SupabaseClient, {
  get(_t, prop) {
    const client = getSupabase();
    if (!client) return undefined;
    return (client as unknown as Record<string | symbol, unknown>)[prop];
  },
});

/**
 * Types matching the Supabase `posts` table schema.
 * See the SQL setup at the bottom of this file for the migration.
 */
export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image?: string;
  /** "project" | "findings" */
  category: "project" | "findings";
  tags: string[];
  published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
};

/*
──────────────────────────────────────────────────────────────────────
SUPABASE SQL MIGRATION — run once in the Supabase SQL Editor:
──────────────────────────────────────────────────────────────────────

create table if not exists posts (
  id            uuid primary key default gen_random_uuid(),
  title         text not null,
  slug          text not null unique,
  excerpt       text not null default '',
  content       text not null default '',
  cover_image   text,
  category      text not null check (category in ('project', 'findings')),
  tags          text[] not null default '{}',
  published     boolean not null default false,
  published_at  timestamptz,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Row-level security: public read for published posts only
alter table posts enable row level security;

create policy "Public can read published posts"
  on posts for select
  using (published = true);

-- (Optional) Full access for authenticated users (you as admin)
create policy "Authenticated full access"
  on posts for all
  using (auth.role() = 'authenticated');

──────────────────────────────────────────────────────────────────────
*/
