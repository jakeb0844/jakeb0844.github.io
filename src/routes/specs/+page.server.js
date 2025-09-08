import bisTabs from "../../../data/bis-tabs.json";
import stats from "../../../data/stats.json";
import trinketData from "../../../data/trinket-data.json";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    trinketData,
    bisTabs,
    stats,
  };
}


