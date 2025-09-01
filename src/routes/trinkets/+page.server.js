import { json } from "@sveltejs/kit";
import trinketData from "../../../data/trinket-tier-list-2025-09-01T23-08-05-520Z.json";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    trinketData,
  };
}
