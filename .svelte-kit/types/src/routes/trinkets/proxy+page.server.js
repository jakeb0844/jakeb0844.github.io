// @ts-nocheck
import { json } from "@sveltejs/kit";
import trinketData from "../../../data/trinket-tier-list-2025-09-01T23-08-05-520Z.json";

/** */
export async function load() {
  return {
    trinketData,
  };
}
