const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export type SupabaseSession = {
  access_token: string
  refresh_token: string
  expires_at: number
  user: {
    id: string
    email: string | null
  }
}

export function isSupabaseConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY)
}

function requireConfig() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("Supabase is not configured.")
  }

  return {
    url: SUPABASE_URL.replace(/\/$/, ""),
    anonKey: SUPABASE_ANON_KEY,
  }
}

async function requestJson<T>(path: string, init?: RequestInit, token?: string): Promise<T> {
  const { url, anonKey } = requireConfig()
  const response = await fetch(`${url}${path}`, {
    ...init,
    headers: {
      apikey: anonKey,
      Authorization: token ? `Bearer ${token}` : `Bearer ${anonKey}`,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || `Supabase request failed (${response.status})`)
  }

  const text = await response.text()
  if (!text) return null as T

  return JSON.parse(text) as T
}

async function requestVoid(path: string, init?: RequestInit, token?: string) {
  const { url, anonKey } = requireConfig()
  const response = await fetch(`${url}${path}`, {
    ...init,
    headers: {
      apikey: anonKey,
      Authorization: token ? `Bearer ${token}` : `Bearer ${anonKey}`,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || `Supabase request failed (${response.status})`)
  }
}

export async function signInWithPassword(email: string, password: string) {
  const { url, anonKey } = requireConfig()
  const response = await fetch(`${url}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || "Sign in failed")
  }

  const data = (await response.json()) as {
    access_token: string
    refresh_token: string
    expires_in: number
    user: { id: string; email: string | null }
  }

  return {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at: Math.floor(Date.now() / 1000) + data.expires_in,
    user: data.user,
  } satisfies SupabaseSession
}

export async function refreshSession(refreshToken: string) {
  const { url, anonKey } = requireConfig()
  const response = await fetch(`${url}/auth/v1/token?grant_type=refresh_token`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh_token: refreshToken }),
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || "Session refresh failed")
  }

  const data = (await response.json()) as {
    access_token: string
    refresh_token: string
    expires_in: number
    user: { id: string; email: string | null }
  }

  return {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at: Math.floor(Date.now() / 1000) + data.expires_in,
    user: data.user,
  } satisfies SupabaseSession
}

export async function loadConfigRow<T>(key: string, token?: string) {
  return requestJson<Array<{ key: string; value: T }>>(
    `/rest/v1/app_config?select=key,value&key=eq.${encodeURIComponent(key)}`,
    { method: "GET" },
    token,
  )
}

export async function loadAllConfigRows(token?: string) {
  return requestJson<Array<{ key: string; value: unknown }>>(
    `/rest/v1/app_config?select=key,value`,
    { method: "GET" },
    token,
  )
}

export async function upsertConfigRow(key: string, value: unknown, token?: string) {
  await requestVoid(
    `/rest/v1/app_config?on_conflict=key`,
    {
      method: "POST",
      headers: {
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify([{ key, value }]),
    },
    token,
  )
}

export function readSupabaseSession(key: string) {
  if (typeof window === "undefined") return null

  const raw = window.localStorage.getItem(key)
  if (!raw) return null

  try {
    return JSON.parse(raw) as SupabaseSession
  } catch {
    return null
  }
}

export function writeSupabaseSession(key: string, session: SupabaseSession | null) {
  if (typeof window === "undefined") return

  if (!session) {
    window.localStorage.removeItem(key)
    return
  }

  window.localStorage.setItem(key, JSON.stringify(session))
}

export function readJson<T>(key: string): T | null {
  if (typeof window === "undefined") return null

  const raw = window.localStorage.getItem(key)
  if (!raw) return null

  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

export function writeJson(key: string, value: unknown) {
  if (typeof window === "undefined") return
  window.localStorage.setItem(key, JSON.stringify(value))
}
