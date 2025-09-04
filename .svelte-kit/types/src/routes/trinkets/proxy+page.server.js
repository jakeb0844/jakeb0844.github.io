// @ts-nocheck
import { json } from "@sveltejs/kit";
import trinketData from "../../../data/trinket-data.json";

/** */
export async function load() {
  return {
    trinketData,
  };
}
