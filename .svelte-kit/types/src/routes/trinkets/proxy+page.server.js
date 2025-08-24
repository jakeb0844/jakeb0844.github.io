// @ts-nocheck
import { json } from '@sveltejs/kit';
import trinketData from '../../../data/trinket-tier-list-2025-08-23T17-56-29-855Z.json';

/** */
export async function load() {
    return {
        trinketData
    };
}
