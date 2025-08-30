import {
  c as create_ssr_component,
  f as escape,
  h as add_attribute,
  k as each,
  v as validate_component,
} from "../../../chunks/ssr.js";
const specIcons = {
  blood_deathknight: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_deathknight_bloodpresence.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_bloodpresence.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_bloodpresence.jpg",
  },
  frost_deathknight: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_deathknight_frostpresence.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_frostpresence.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_frostpresence.jpg",
  },
  unholy_deathknight: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_deathknight_unholypresence.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_unholypresence.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_unholypresence.jpg",
  },
  havoc_demonhunter: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/ability_demonhunter_specdps.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/ability_demonhunter_specdps.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/ability_demonhunter_specdps.jpg",
  },
  vengeance_demonhunter: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/ability_demonhunter_spectank.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/ability_demonhunter_spectank.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/ability_demonhunter_spectank.jpg",
  },
  balance_druid: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_nature_starfall.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_starfall.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg",
  },
  feral_druid: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/ability_druid_catform.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_catform.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/ability_druid_catform.jpg",
  },
  guardian_druid: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/ability_racial_bearform.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/ability_racial_bearform.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/ability_racial_bearform.jpg",
  },
  restoration_druid: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_nature_healingtouch.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_healingtouch.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingtouch.jpg",
  },
  augmentation_evoker: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/classicon_evoker_augmentation.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/classicon_evoker_augmentation.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/classicon_evoker_augmentation.jpg",
  },
  devastation_evoker: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/classicon_evoker_devastation.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/classicon_evoker_devastation.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/classicon_evoker_devastation.jpg",
  },
  preservation_evoker: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/classicon_evoker_preservation.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/classicon_evoker_preservation.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/classicon_evoker_preservation.jpg",
  },
  beast_mastery_hunter: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/ability_hunter_bestialdiscipline.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_bestialdiscipline.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_bestialdiscipline.jpg",
  },
  marksmanship_hunter: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/ability_hunter_focusedaim.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_focusedaim.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_focusedaim.jpg",
  },
  survival_hunter: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/ability_hunter_camouflage.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_camouflage.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_camouflage.jpg",
  },
  arcane_mage: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_magicalsentry.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_magicalsentry.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_holy_magicalsentry.jpg",
  },
  fire_mage: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_fire_firebolt02.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_firebolt02.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_fire_firebolt02.jpg",
  },
  frost_mage: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_frost_frostbolt02.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_frostbolt02.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt02.jpg",
  },
  brewmaster_monk: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/monk_stance_drunkenox.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/monk_stance_drunkenox.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/monk_stance_drunkenox.jpg",
  },
  mistweaver_monk: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/monk_stance_wiseserpent.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/monk_stance_wiseserpent.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/monk_stance_wiseserpent.jpg",
  },
  windwalker_monk: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/monk_stance_whitetiger.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/monk_stance_whitetiger.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/monk_stance_whitetiger.jpg",
  },
  holy_paladin: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_holybolt.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_holybolt.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_holy_holybolt.jpg",
  },
  protection_paladin: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/ability_paladin_shieldofthetemplar.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/ability_paladin_shieldofthetemplar.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/ability_paladin_shieldofthetemplar.jpg",
  },
  retribution_paladin: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_auraoflight.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auraoflight.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_holy_auraoflight.jpg",
  },
  discipline_priest: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_powerwordshield.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_powerwordshield.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg",
  },
  shadow_priest: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_shadow_shadowwordpain.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_shadowwordpain.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowwordpain.jpg",
  },
  holy_priest: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_guardianspirit.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_guardianspirit.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_holy_guardianspirit.jpg",
  },
  assassination_rogue: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/ability_rogue_eviscerate.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_eviscerate.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/ability_rogue_eviscerate.jpg",
  },
  subtlety_rogue: {
    small: "https://wow.zamimg.com/images/wow/icons/small/ability_stealth.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/ability_stealth.jpg",
    large: "https://wow.zamimg.com/images/wow/icons/large/ability_stealth.jpg",
  },
  outlaw_rogue: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/ability_rogue_waylay.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_waylay.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/ability_rogue_waylay.jpg",
  },
  elemental_shaman: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_nature_lightning.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_lightning.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg",
  },
  enhancement_shaman: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_nature_lightningshield.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_lightningshield.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningshield.jpg",
  },
  restoration_shaman: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_nature_magicimmunity.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_magicimmunity.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_nature_magicimmunity.jpg",
  },
  affliction_warlock: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_shadow_deathcoil.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_deathcoil.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathcoil.jpg",
  },
  demonology_warlock: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_shadow_metamorphosis.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_metamorphosis.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_metamorphosis.jpg",
  },
  destruction_warlock: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/spell_shadow_rainoffire.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_rainoffire.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/spell_shadow_rainoffire.jpg",
  },
  arms_warrior: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/ability_warrior_savageblow.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_savageblow.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/ability_warrior_savageblow.jpg",
  },
  fury_warrior: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/ability_warrior_innerrage.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_innerrage.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/ability_warrior_innerrage.jpg",
  },
  protection_warrior: {
    small:
      "https://wow.zamimg.com/images/wow/icons/small/ability_warrior_defensivestance.jpg",
    medium:
      "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_defensivestance.jpg",
    large:
      "https://wow.zamimg.com/images/wow/icons/large/ability_warrior_defensivestance.jpg",
  },
};
const SpecIcon = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let specKey;
    let iconUrl;
    let { className } = $$props;
    let { specName } = $$props;
    let { selected = false } = $$props;
    let { onClick = () => {} } = $$props;
    const getSpecKey = (className2, specName2) => {
      const classSlug = className2.toLowerCase().replace(/\s/g, "");
      const specSlug = specName2.toLowerCase().replace(/\s/g, "_");
      return `${specSlug}_${classSlug}`;
    };
    if (
      $$props.className === void 0 &&
      $$bindings.className &&
      className !== void 0
    )
      $$bindings.className(className);
    if (
      $$props.specName === void 0 &&
      $$bindings.specName &&
      specName !== void 0
    )
      $$bindings.specName(specName);
    if (
      $$props.selected === void 0 &&
      $$bindings.selected &&
      selected !== void 0
    )
      $$bindings.selected(selected);
    if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
      $$bindings.onClick(onClick);
    specKey = getSpecKey(className, specName);
    iconUrl = specIcons[specKey]?.medium;
    return `<button class="${
      "spec-icon-wrapper relative w-12 h-12 rounded-lg overflow-hidden transition-all duration-200 " +
      escape(
        selected
          ? "ring-2 ring-yellow-400 scale-110"
          : "opacity-75 hover:opacity-100",
        true
      )
    }"${add_attribute("title", `${specName} ${className}`, 0)} style="${
      "background-image: url(" +
      escape(iconUrl, true) +
      "); background-size: cover; background-position: center;"
    }">${
      iconUrl
        ? ``
        : `<div class="absolute inset-0 bg-black/30 flex items-center justify-center text-white/50" data-svelte-h="svelte-1n02b2k">?</div>`
    } </button>`;
  }
);
const classes = [
  {
    name: "Death Knight",
    specs: [
      {
        name: "Blood",
        url: "https://www.wowhead.com/guide/classes/death-knight/blood/bis-gear",
      },
      {
        name: "Frost",
        url: "https://www.wowhead.com/guide/classes/death-knight/frost/bis-gear",
      },
      {
        name: "Unholy",
        url: "https://www.wowhead.com/guide/classes/death-knight/unholy/bis-gear",
      },
    ],
  },
  {
    name: "Demon Hunter",
    specs: [
      {
        name: "Havoc",
        url: "https://www.wowhead.com/guide/classes/demon-hunter/havoc/bis-gear",
      },
      {
        name: "Vengeance",
        url: "https://www.wowhead.com/guide/classes/demon-hunter/vengeance/bis-gear",
      },
    ],
  },
  {
    name: "Druid",
    specs: [
      {
        name: "Balance",
        url: "https://www.wowhead.com/guide/classes/druid/balance/bis-gear",
      },
      {
        name: "Feral",
        url: "https://www.wowhead.com/guide/classes/druid/feral/bis-gear",
      },
      {
        name: "Guardian",
        url: "https://www.wowhead.com/guide/classes/druid/guardian/bis-gear",
      },
      {
        name: "Restoration",
        url: "https://www.wowhead.com/guide/classes/druid/restoration/bis-gear",
      },
    ],
  },
  {
    name: "Evoker",
    specs: [
      {
        name: "Devastation",
        url: "https://www.wowhead.com/guide/classes/evoker/devastation/bis-gear",
      },
      {
        name: "Preservation",
        url: "https://www.wowhead.com/guide/classes/evoker/preservation/bis-gear",
      },
      {
        name: "Augmentation",
        url: "https://www.wowhead.com/guide/classes/evoker/augmentation/bis-gear",
      },
    ],
  },
  {
    name: "Hunter",
    specs: [
      {
        name: "Beast Mastery",
        url: "https://www.wowhead.com/guide/classes/hunter/beast-mastery/bis-gear",
      },
      {
        name: "Marksmanship",
        url: "https://www.wowhead.com/guide/classes/hunter/marksmanship/bis-gear",
      },
      {
        name: "Survival",
        url: "https://www.wowhead.com/guide/classes/hunter/survival/bis-gear",
      },
    ],
  },
  {
    name: "Mage",
    specs: [
      {
        name: "Arcane",
        url: "https://www.wowhead.com/guide/classes/mage/arcane/bis-gear",
      },
      {
        name: "Fire",
        url: "https://www.wowhead.com/guide/classes/mage/fire/bis-gear",
      },
      {
        name: "Frost",
        url: "https://www.wowhead.com/guide/classes/mage/frost/bis-gear",
      },
    ],
  },
  {
    name: "Monk",
    specs: [
      {
        name: "Brewmaster",
        url: "https://www.wowhead.com/guide/classes/monk/brewmaster/bis-gear",
      },
      {
        name: "Mistweaver",
        url: "https://www.wowhead.com/guide/classes/monk/mistweaver/bis-gear",
      },
      {
        name: "Windwalker",
        url: "https://www.wowhead.com/guide/classes/monk/windwalker/bis-gear",
      },
    ],
  },
  {
    name: "Paladin",
    specs: [
      {
        name: "Protection",
        url: "https://www.wowhead.com/guide/classes/paladin/protection/bis-gear",
      },
      {
        name: "Retribution",
        url: "https://www.wowhead.com/guide/classes/paladin/retribution/bis-gear",
      },
      {
        name: "Holy",
        url: "https://www.wowhead.com/guide/classes/paladin/holy/bis-gear",
      },
    ],
  },
  {
    name: "Priest",
    specs: [
      {
        name: "Discipline",
        url: "https://www.wowhead.com/guide/classes/priest/discipline/bis-gear",
      },
      {
        name: "Shadow",
        url: "https://www.wowhead.com/guide/classes/priest/shadow/bis-gear",
      },
      {
        name: "Holy",
        url: "https://www.wowhead.com/guide/classes/priest/holy/bis-gear",
      },
    ],
  },
  {
    name: "Rogue",
    specs: [
      {
        name: "Assassination",
        url: "https://www.wowhead.com/guide/classes/rogue/assassination/bis-gear",
      },
      {
        name: "Outlaw",
        url: "https://www.wowhead.com/guide/classes/rogue/outlaw/bis-gear",
      },
      {
        name: "Subtlety",
        url: "https://www.wowhead.com/guide/classes/rogue/subtlety/bis-gear",
      },
    ],
  },
  {
    name: "Shaman",
    specs: [
      {
        name: "Elemental",
        url: "https://www.wowhead.com/guide/classes/shaman/elemental/bis-gear",
      },
      {
        name: "Enhancement",
        url: "https://www.wowhead.com/guide/classes/shaman/enhancement/bis-gear",
      },
      {
        name: "Restoration",
        url: "https://www.wowhead.com/guide/classes/shaman/restoration/bis-gear",
      },
    ],
  },
  {
    name: "Warlock",
    specs: [
      {
        name: "Affliction",
        url: "https://www.wowhead.com/guide/classes/warlock/affliction/bis-gear",
      },
      {
        name: "Demonology",
        url: "https://www.wowhead.com/guide/classes/warlock/demonology/bis-gear",
      },
      {
        name: "Destruction",
        url: "https://www.wowhead.com/guide/classes/warlock/destruction/bis-gear",
      },
    ],
  },
  {
    name: "Warrior",
    specs: [
      {
        name: "Arms",
        url: "https://www.wowhead.com/guide/classes/warrior/arms/bis-gear",
      },
      {
        name: "Fury",
        url: "https://www.wowhead.com/guide/classes/warrior/fury/bis-gear",
      },
      {
        name: "Protection",
        url: "https://www.wowhead.com/guide/classes/warrior/protection/bis-gear",
      },
    ],
  },
];
function refreshWowheadTooltips() {
  if (window && window.$WowheadPower) {
    window.$WowheadPower.refreshLinks();
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredSpecs;
  let hasTierItems;
  let { data } = $$props;
  const trinketData = data.trinketData;
  let selectedSpec = "";
  let currentTierList = null;
  let searchTerm = "";
  const allTrinketsMap = /* @__PURE__ */ new Map();
  for (const spec of trinketData) {
    if (!spec.tierList) continue;
    for (const tierKey of Object.keys(spec.tierList)) {
      for (const t of spec.tierList[tierKey] || []) {
        const key = (t.name || "").toLowerCase();
        if (!allTrinketsMap.has(key)) allTrinketsMap.set(key, t);
      }
    }
  }
  const allTrinkets = Array.from(allTrinketsMap.values());
  const specs = classes.flatMap((c) =>
    c.specs.map((s) => ({
      className: c.name,
      specName: s.name,
      url: s.url,
    }))
  );
  const tiers = ["s", "a", "b", "c", "d", "f"];
  const tierColors = {
    s: "text-yellow-400",
    a: "text-purple-400",
    b: "text-blue-400",
    c: "text-green-400",
    d: "text-orange-400",
    f: "text-red-400",
  };
  function selectSpec(specName) {
    console.log("onclick", specName);
    selectedSpec = selectedSpec === specName ? "" : specName;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  filteredSpecs = specs.filter((spec) =>
    `${spec.className} ${spec.specName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  allTrinkets.filter((t) =>
    (t.name || "").toLowerCase().includes(searchTerm.toLowerCase())
  );
  {
    if (selectedSpec) {
      console.log(selectedSpec);
      currentTierList =
        trinketData.find(
          (spec) => `${spec.class} ${spec.name}` === selectedSpec
        )?.tierList ?? null;
    }
  }
  hasTierItems =
    !!currentTierList &&
    tiers.some((tier) => (currentTierList[tier]?.length || 0) > 0);
  {
    if (currentTierList) {
      setTimeout(refreshWowheadTooltips, 100);
    }
  }
  return `<div class="container mx-auto px-4 py-8"><h1 class="text-4xl font-bold mb-8 text-center" data-svelte-h="svelte-qpmybf">WoW Trinket Tier List</h1> <div class="mb-8"><form style="position:relative;" class="max-w-lg mx-auto" autocomplete="off"><div class="flex"><label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-svelte-h="svelte-okc5tl">Search</label> <div class="relative"><button id="dropdown-button" class="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">${escape(
    "Specs"
  )} <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></button> ${``}</div> <div class="relative w-full"><input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"${add_attribute(
    "placeholder",
    "Search specs...",
    0
  )}${add_attribute(
    "value",
    searchTerm,
    0
  )}> <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-svelte-h="svelte-10luz7"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg> <span class="sr-only">Search</span></button></div></div> ${``} ${``}</form></div> ${`<div class="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">${each(
    filteredSpecs,
    (spec) => {
      return `${validate_component(SpecIcon, "SpecIcon").$$render(
        $$result,
        {
          className: spec.className,
          specName: spec.specName,
          selected: selectedSpec === `${spec.className} ${spec.specName}`,
          onClick: () => selectSpec(`${spec.className} ${spec.specName}`),
        },
        {},
        {}
      )}`;
    }
  )}</div>`} ${``} ${
    hasTierItems
      ? `<div class="space-y-8">${each(tiers, (tier) => {
          return `${
            currentTierList[tier]?.length
              ? `<div class="tier-section"><h2 class="${
                  "text-2xl font-bold mb-4 " + escape(tierColors[tier], true)
                }">${escape(
                  tier.toUpperCase()
                )} Tier</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${each(
                  currentTierList[tier] || [],
                  (trinket) => {
                    return `<div class="trinket-card bg-white/5 backdrop-blur-sm p-4 rounded-lg flex items-center space-x-4 hover:bg-white/10 transition-colors"><img${add_attribute(
                      "src",
                      trinket.iconUrl,
                      0
                    )}${add_attribute(
                      "alt",
                      trinket.name,
                      0
                    )} class="w-12 h-12"> <a${add_attribute(
                      "href",
                      trinket.href,
                      0
                    )}${add_attribute(
                      "data-wowhead",
                      `item=${trinket.id}`,
                      0
                    )} class="text-blue-400 hover:text-blue-300">${escape(
                      trinket.name
                    )}</a> </div>`;
                  }
                )}</div> </div>`
              : ``
          }`;
        })}</div>`
      : `${
          selectedSpec
            ? `<p class="text-center">No tier list data available for ${escape(
                selectedSpec
              )}</p>`
            : ``
        }`
  }</div>`;
});
export { Page as default };
