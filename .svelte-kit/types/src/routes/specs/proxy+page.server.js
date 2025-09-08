// @ts-nocheck
import bisTabs from "../../../data/bis-tabs.json";
import stats from "../../../data/stats.json";
import trinketData from "../../../data/trinket-data.json";

/** */
export async function load() {
  return {
    trinketData,
    bisTabs,
    stats,
  };
}


