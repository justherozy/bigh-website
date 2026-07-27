"use client";

// Lightweight client-side store for the wishlist and enquiry bag.
// No backend: persisted to localStorage, shared across components via
// useSyncExternalStore so every open instance (header badge, card
// buttons, menu panels) stays in sync.
import { useSyncExternalStore } from "react";

type State = { wishlist: string[]; bag: string[] };

const STORAGE_KEY = "bigh-store";
const emptyState: State = { wishlist: [], bag: [] };

let state: State = emptyState;
let hydrated = false;
const listeners = new Set<() => void>();

function hydrate() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) state = { ...emptyState, ...JSON.parse(raw) };
  } catch {
    // ignore malformed/blocked storage
  }
}

function persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore write failures (e.g. private browsing quota)
  }
  listeners.forEach((listener) => listener());
}

function toggle(list: "wishlist" | "bag", slug: string) {
  hydrate();
  const current = state[list];
  state = {
    ...state,
    [list]: current.includes(slug)
      ? current.filter((s) => s !== slug)
      : [...current, slug],
  };
  persist();
}

export const toggleWishlist = (slug: string) => toggle("wishlist", slug);
export const toggleBag = (slug: string) => toggle("bag", slug);

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  hydrate();
  return state;
}

function getServerSnapshot() {
  return emptyState;
}

export function useCollectionsStore() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
