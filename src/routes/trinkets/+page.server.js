import { json } from '@sveltejs/kit';
import trinketData from '../../../data/trinket-tier-list-2025-08-23T17-56-29-855Z.json';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        trinketData
    };
}
