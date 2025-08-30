import { json } from "@sveltejs/kit";
import trinketData from "../../../data/trinket-tier-list-2025-08-28T14-50-56-717Z.json";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    trinketData,
  };
}
