import { json } from "@sveltejs/kit";
import trinketData from "../../../data/trinket-data.json";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    trinketData,
  };
}
