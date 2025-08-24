import "../../../chunks/index.js";
const trinketData = [
  {
    name: "Blood",
    tierList: {
      s: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/item=242402/arazs_ritual_forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/item=242396/unyielding_netherprism?bonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        },
        {
          id: "219309",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_7xp_inscription_talenttome01.jpg",
          href: "https://www.wowhead.com/item=219309/tome_of_lights_devotion?bonus=657:12052:5877:10390:12361:12053",
          name: "Tome of Light's Devotion"
        }
      ],
      a: [
        {
          id: "242394",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_obliterationcannon.jpg",
          href: "https://www.wowhead.com/item=242394/eradicating_arcanocore?bonus=7981:12052:5877:12361:12053",
          name: "Eradicating Arcanocore"
        },
        {
          id: "242401",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_manaforgetanktrinket3.jpg",
          href: "https://www.wowhead.com/item=242401/brand_of_ceaseless_ire?bonus=7981:12052:5877:12361:12053",
          name: "Brand of Ceaseless Ire"
        },
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=190958/soleahs_secret_technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/item=219314/arakara_sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "246344",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_qirajidol_onyx.jpg",
          href: "https://www.wowhead.com/item=246344/cursed_stone_idol?bonus=657:12052:5877:10390:12361:12053",
          name: "Cursed Stone Idol"
        }
      ],
      b: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/item=242395/astral_antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/item=242403/perfidious_projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/item=242399/screams_of_a_forgotten_sky?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "219311",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=219311/void_pactstone?bonus=657:12052:5877:10390:12361:12053",
          name: "Void Pactstone"
        },
        {
          id: "232541",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_blackhand_attachedslagbombs.jpg",
          href: "https://www.wowhead.com/item=232541/improvised_seaforium_pacemaker?bonus=657:12052:5877:10390:12361:12053",
          name: "Improvised Seaforium Pacemaker"
        },
        {
          id: "190652",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/item=190652/ticking_sack_of_terror?bonus=657:12052:5877:10390:12361:12053",
          name: "Ticking Sack of Terror"
        },
        {
          id: "242495",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_nightsaberclaw_mana.jpg",
          href: "https://www.wowhead.com/item=242495/incorporeal_warpclaw?bonus=657:12052:5877:10390:12361:12053",
          name: "Incorporeal Warpclaw"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/item=246945/incorporeal_essence_gorger?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/item=238390/soulbreakers_sigil?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "185846",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_paperpackage01b.jpg",
          href: "https://www.wowhead.com/item=185846/minuscule_mailemental?bonus=657:12052:5877:10390:12361:12053",
          name: "Miniscule Mailemental in an Envelope"
        }
      ],
      c: [
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/item=242867/automatic_footbomb_dispenser?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/item=238386/voidtouched_remnant?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        },
        {
          id: "240213",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/item=240213/inv_misc_ancient_mana?bonus=657:12042:5910:12355",
          name: "Veiling Mana Shroud"
        },
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/item=246939/essence_hunters_eyeglass?bonus=657:12042:5910:12355",
          name: "Essence-Hunter's Eyeglass"
        }
      ],
      d: [
        {
          id: "219316",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_organmass_color2.jpg",
          href: "https://www.wowhead.com/item=219316/ceaseless_swarmgland?bonus=657:12052:5877:10390:12361:12053",
          name: "Ceaseless Swarmgland"
        },
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/item=246825/chaotic_nethergate?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        },
        {
          id: "246944",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/item=246944/odium?bonus=657:12042:5910:12355",
          name: "Mind-Fracturing Odium"
        }
      ],
      e: [],
      f: [
        {
          id: "246824",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/item_icecrownnecklaceb.jpg",
          href: "https://www.wowhead.com/item=246824/harvester?bonus=657:12042:5910:12355",
          name: "Shadowguard's Twisted Harvester"
        }
      ]
    }
  },
  {
    name: "Frost",
    tierList: {
      s: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "246344",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_qirajidol_onyx.jpg",
          href: "https://www.wowhead.com/item=246344/cursed-stone-idol?bonus=657:12052:5877:10390:12361:12053",
          name: "Cursed Stone Idol"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/item=242396/unyielding-netherprism?bonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        }
      ],
      a: [
        {
          id: "232541",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_blackhand_attachedslagbombs.jpg",
          href: "https://www.wowhead.com/item=232541/improvised-seaforium-pacemaker?bonus=657:12052:5877:10390:12361:12053",
          name: "Improvised Seaforium Pacemaker"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/item=242399/screams-of-a-forgotten-sky?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "242394",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_obliterationcannon.jpg",
          href: "https://www.wowhead.com/item=242394/eradicating-arcanocore?bonus=7981:12052:5877:12361:12053",
          name: "Eradicating Arcanocore"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/item=219314/ara-kara-sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=190958/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        }
      ],
      b: [
        {
          id: "219311",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=219311/void-pactstone?bonus=657:12052:5877:10390:12361:12053",
          name: "Void Pactstone"
        },
        {
          id: "190652",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/item=190652/ticking-sack-of-terror?bonus=657:12052:5877:10390:12361:12053",
          name: "Ticking Sack of Terror"
        },
        {
          id: "242495",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_nightsaberclaw_mana.jpg",
          href: "https://www.wowhead.com/item=242495/incorporeal-warpclaw?bonus=657:12052:5877:10390:12361:12053",
          name: "Incorporeal Warpclaw"
        }
      ],
      c: [
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/item=242403/perfidious-projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/item=238386/void-touched-fragment?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/item=238390/soulbreakers-sigil?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/item=246945/incorporeal-essence-gorger?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/algari-alchemist-stone?bonus=9627:12053:12050:12053",
          name: "Algari Alchemist Stone"
        }
      ],
      d: [
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/item=246825/chaotic-nethergate?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        },
        {
          id: "246944",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/item=246944/mind-fracturing-odium?bonus=657:12042:5910:12355",
          name: "Mind-Fracturing Odium"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/item=242867/automatic-footbomb-dispenser?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        }
      ],
      e: [],
      f: []
    }
  },
  {
    name: "Unholy",
    tierList: {
      s: [
        {
          id: "246344",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_qirajidol_onyx.jpg",
          href: "https://www.wowhead.com/item=246344?bonus=657:12052:5877:10390:12361:12053",
          name: "Cursed Stone Idol"
        }
      ],
      a: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/item=242402?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/item=242395?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/item=238386?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        },
        {
          id: "232541",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_blackhand_attachedslagbombs.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232541/improvised-seaforium-pacemaker?bonus=657:12052:5877:10390:12361:12053",
          name: "Improvised Seaforium Pacemaker"
        },
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=190958?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/item=242396?bonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/item=219314?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        }
      ],
      b: [
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/item=242399?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "242495",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_nightsaberclaw_mana.jpg",
          href: "https://www.wowhead.com/item=242495?bonus=657:12052:5877:10390:12361:12053",
          name: "Incorporeal Warpclaw"
        },
        {
          id: "219311",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=219311?bonus=657:12052:5877:10390:12361:12053",
          name: "Void Pactstone"
        },
        {
          id: "242394",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_obliterationcannon.jpg",
          href: "https://www.wowhead.com/item=242394?bonus=7981:12052:5877:12361:12053",
          name: "Eradicating Arcanocore"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/item=246945?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        }
      ],
      c: [
        {
          id: "190652",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/item=190652?bonus=657:12052:5877:10390:12361:12053",
          name: "Ticking Sack of Terror"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/item=238390?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/algari-alchemist-stone?bonus=9627:12053:12050:12053",
          name: "Algari Alchemist Stone"
        }
      ],
      d: [
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/item=242403?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/item=242867?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        }
      ],
      e: [],
      f: [
        {
          id: "219672",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_inscriptions_darkmoondeckshine_0.jpg",
          href: "https://www.wowhead.com/item=219672/darkmoon-deck-radiance?bonus=9627:12053:12050:12053",
          name: "Darkmoon Deck: Radiance"
        },
        {
          id: "222680",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_inscriptions_darkmoondeckevolution_0.jpg",
          href: "https://www.wowhead.com/item=222680/darkmoon-deck-ascension?bonus=9627:12053:12050:12053",
          name: "Darkmoon Deck: Ascension"
        },
        {
          id: "222653",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_inscription_darkmooncards_spore_blank.jpg",
          href: "https://www.wowhead.com/item=222653/darkmoon-deck-symbiosis?bonus=9627:12053:12050:12053",
          name: "Darkmoon Deck: Symbiosis"
        },
        {
          id: "222671",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_inscriptions_darkmoondeckvivacity_0.jpg",
          href: "https://www.wowhead.com/item=222671/darkmoon-deck-vivacity?bonus=9627:12053:12050:12053",
          name: "Darkmoon Deck: Vivacity"
        },
        {
          id: "246944",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/item=246944?bonus=657:12042:5910:12355",
          name: "Mind-Fracturing Odium"
        },
        {
          id: "240213",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ancient_mana.jpg",
          href: "https://www.wowhead.com/item=240213?bonus=657:12042:5910:12355",
          name: "Veiling Mana Shroud"
        },
        {
          id: "246824",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/item_icecrownnecklaceb.jpg",
          href: "https://www.wowhead.com/item=246824?bonus=657:12042:5910:12355",
          name: "Shadowguard's Twisted Harvester"
        }
      ]
    }
  },
  {
    name: "Havoc",
    tierList: {
      s: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-sky?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        }
      ],
      a: [
        {
          id: "246344",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_qirajidol_onyx.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246344/cursed-stone-idol?bonus=657:12052:5877:10390:12361:12053",
          name: "Cursed Stone Idol"
        },
        {
          id: "185818",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185818/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "242397",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_agidpsancientkareshirelic.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242397/sigil-of-the-cosmic-hunt?bonus=7981:12052:5877:12361:12053",
          name: "Sigil of the Cosmic Hunt"
        },
        {
          id: "232541",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_blackhand_attachedslagbombs.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232541/improvised-seaforium-pacemaker?bonus=657:12052:5877:10390:12361:12053",
          name: "Improvised Seaforium Pacemaker"
        }
      ],
      b: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "190652",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/ptr-2/item=190652/ticking-sack-of-terror?bonus=657:12052:5877:10390:12361:12053",
          name: "Ticking Sack of Terror"
        },
        {
          id: "242495",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_nightsaberclaw_mana.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242495/incorporeal-warpclaw?bonus=657:12052:5877:10390:12361:12053",
          name: "Incorporeal Warpclaw"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242494/lily-of-the-eternal-weave?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        }
      ],
      c: [
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242867/automatic-footbomb-dispenser?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246945/incorporeal-essence-gorger?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219317/harvesters-edict?bonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238390/soulbreakers-sigil?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        }
      ],
      d: [
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        }
      ],
      e: [],
      f: [
        {
          id: "246944",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246944/mind-fracturing-odium?bonus=657:12042:5910:12355",
          name: "Mind-Fracturing Odium"
        }
      ]
    }
  },
  {
    name: "Vengeance",
    tierList: {
      s: [
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=190958/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "242401",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_manaforgetanktrinket3.jpg",
          href: "https://www.wowhead.com/item=242401/brand-of-ceaseless-ire?bonus=7981:12052:5877:12361:12053",
          name: "Brand of Ceaseless Ire"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        }
      ],
      a: [
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "242391",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_manaforge_tanktrinket1.jpg",
          href: "https://www.wowhead.com/item=242391/soulbinders-embrace?bonus=7981:12052:5877:12361:12053",
          name: "Soulbinder's Embrace"
        },
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/item=242396/unyielding-netherprism?bonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        }
      ],
      b: [
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/item=242403/perfidious-projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "190652",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/item=190652/ticking-sack-of-terror?bonus=657:12052:5877:10390:12361:12053",
          name: "Ticking Sack of Terror"
        }
      ],
      c: [
        {
          id: "240213",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ancient_mana.jpg",
          href: "https://www.wowhead.com/item=240213/veiling-mana-shroud?bonus=657:12042:5910:12355",
          name: "Veiling Mana Shroud"
        },
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/item=219317/harvesters-edict?bonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "240172",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enggizmos_16.jpg",
          href: "https://www.wowhead.com/item=240172/depleted-kareshi-battery?bonus=657:12042:5910:12355",
          name: "Depleted K'areshi Battery"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/item=246945/incorporeal-essence-gorger?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/item=238390/soulbreakers-sigil?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/item=238386/void-touched-fragment?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        }
      ],
      d: [
        {
          id: "242404",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_omnidpstrinket.jpg",
          href: "https://www.wowhead.com/item=242404/all-devouring-nucleus?bonus=7981:12052:5877:12361:12053",
          name: "All-Devouring Nucleus"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/item=242399/screams-of-a-forgotten-sky?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "219316",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_organmass_color2.jpg",
          href: "https://www.wowhead.com/item=219316/ceaseless-swarmgland?bonus=657:12052:5877:10390:12361:12053",
          name: "Ceaseless Swarmgland"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/item=242494/lily-of-the-eternal-weave?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/item=242867/automatic-footbomb-dispenser?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/item=246825/chaotic-nethergate?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        }
      ],
      e: [],
      f: [
        {
          id: "185836",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_profession_book_enchanting.jpg",
          href: "https://www.wowhead.com/item=185836/codex-of-the-first-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "Codex of the First Technique"
        },
        {
          id: "246941",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_arcane_buff.jpg",
          href: "https://www.wowhead.com/item=246941/symbiotic-ethergauze?bonus=657:12042:5910:12355",
          name: "Symbiotic Ethergauze"
        },
        {
          id: "246824",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/item_icecrownnecklaceb.jpg",
          href: "https://www.wowhead.com/item=246824/shadowguards-twisted-harvester?bonus=657:12042:5910:12355",
          name: "Shadowguard's Twisted Harvester"
        }
      ]
    }
  },
  {
    name: "Balance",
    tierList: {
      s: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antennabonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forgebonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242497",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_devourersmallmount_light.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242497/azhiccaran-parapodiabonus=657:12052:5877:10390:12361:12053",
          name: "Azhiccaran Parapodia"
        }
      ],
      a: [
        {
          id: "242392",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_intdps_ancientkareshirelic.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242392/diamantine-voidcorebonus=7981:12052:5877:12361:12053",
          name: "Diamantine Voidcore"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219312/empowering-crystal-of-anubikkajbonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219314/ara-kara-sacbroodbonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242494/lily-of-the-eternal-weavebonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        }
      ],
      b: [
        {
          id: "185818",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=185818/soleahs-secret-techniquebonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory?bonus=11996:10390:6652:3170:10255&class=9&ilvl=678&spec=266bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        }
      ],
      c: [
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219317/harvesters-edictbonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "232545",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_engineering_90_lightningbox.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232545/gigazaps-zap-capbonus=657:12052:5877:10390:12361:12053",
          name: "Gigazap's Zap-Cap"
        }
      ],
      d: [
        {
          id: "219313",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_bell_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219313/mereldars-tollbonus=657:12052:5877:10390:12361:12053",
          name: "Mereldar's Toll"
        },
        {
          id: "242398",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_soulbinderbossinttrinket.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242398/naazindhris-mystic-lashbonus=7981:12052:5877:12361:12053",
          name: "Naazindhri's Mystic Lash"
        }
      ],
      e: [],
      f: [
        {
          id: "219310",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219310/bursting-lightshardbonus=657:12052:5877:10390:12361:12053",
          name: "Bursting Lightshard"
        },
        {
          id: "178826",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_nightseye_01.jpg",
          href: "https://www.wowhead.com/ptr-2/item=178826/sunblood-amethystbonus=657:12052:5877:10390:12361:12053",
          name: "Sunblood Amethyst"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projectorbonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-skybonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        }
      ]
    }
  },
  {
    name: "Feral",
    tierList: {
      s: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forge?bonus=6652:10356:12361:1533:10255&hero=21&ilvl=723&spec=103bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        }
      ],
      a: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antenna?class=11&hero=21&ilvl=723&spec=103bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219314/ara-kara-sacbrood?hero=21&ilvl=723&spec=103bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "185818",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185818/soleahs-secret-technique?class=11&hero=21&ilvl=723&spec=103bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory?class=11&hero=21&ilvl=723&spec=103bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        }
      ],
      b: [
        {
          id: "242397",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_agidpsancientkareshirelic.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242397/sigil-of-the-cosmic-hunt?class=11&hero=21&ilvl=723&spec=103bonus=7981:12052:5877:12361:12053",
          name: "Sigil of the Cosmic Hunt"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219312/empowering-crystal-of-anubikkaj?class=11&hero=21&ilvl=723&spec=103bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "242495",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_nightsaberclaw_mana.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242495/incorporeal-warpclaw?class=11&hero=21&ilvl=723&spec=103bonus=657:12052:5877:10390:12361:12053",
          name: "Incorporeal Warpclaw"
        },
        {
          id: "232541",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_blackhand_attachedslagbombs.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232541/improvised-seaforium-pacemaker?bonus=12361:10390:40:1559:10255&class=11&hero=21&ilvl=723&spec=103bonus=657:12052:5877:10390:12361:12053",
          name: "Improvised Seaforium Pacemaker"
        }
      ],
      c: [
        {
          id: "190652",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/ptr-2/item=190652/ticking-sack-of-terror?hero=21&ilvl=723&spec=103bonus=657:12052:5877:10390:12361:12053",
          name: "Ticking Sack of Terror"
        },
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219317/harvesters-edict?class=11&hero=21&ilvl=723&spec=103bonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242494/lily-of-the-eternal-weave?class=11&hero=21&ilvl=723&spec=103bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242396/unyielding-netherprism?hero=21&ilvl=723&spec=103bonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        }
      ],
      d: [
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projector?hero=21&ilvl=723&spec=103bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-sky?hero=21&ilvl=723&spec=103bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        }
      ],
      e: [],
      f: []
    }
  },
  {
    name: "Guardian",
    tierList: {
      s: [
        {
          id: "232541",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_blackhand_attachedslagbombs.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232541/improvised-seaforium-pacemaker?bonus=657:12052:5877:10390:12361:12053",
          name: "Improvised Seaforium Pacemaker"
        },
        {
          id: "232543",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_legion_goomolasses_pool.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232543/ringing-ritual-mud?bonus=657:12052:5877:10390:12361:12053",
          name: "Ringing Ritual Mud"
        },
        {
          id: "219309",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_7xp_inscription_talenttome01.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219309/tome-of-lights-devotion?bonus=657:12052:5877:10390:12361:12053",
          name: "Tome of Light's Devotion"
        },
        {
          id: "242401",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_manaforgetanktrinket3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242401/brand-of-ceaseless-ire?bonus=7981:12052:5877:12361:12053",
          name: "Brand of Ceaseless Ire"
        },
        {
          id: "185844",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185844/ticking-sack-of-terror?bonus=657:12052:5877:10390:12361:12053",
          name: "Ticking Sack of Terror"
        }
      ],
      a: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219314/ara-kara-sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-sky?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "242397",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_agidpsancientkareshirelic.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242397/sigil-of-the-cosmic-hunt?bonus=7981:12052:5877:12361:12053",
          name: "Sigil of the Cosmic Hunt"
        },
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242396/unyielding-netherprism?bonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        }
      ],
      b: [
        {
          id: "242404",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_omnidpstrinket.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242404/all-devouring-nucleus?bonus=7981:12052:5877:12361:12053",
          name: "All-Devouring Nucleus"
        },
        {
          id: "219316",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_organmass_color2.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219316/ceaseless-swarmgland?bonus=657:12052:5877:10390:12361:12053",
          name: "Ceaseless Swarmgland"
        },
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219317/harvesters-edict?bonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219312/empowering-crystal-of-anubikkaj?bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "242495",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_nightsaberclaw_mana.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242495/incorporeal-warpclaw?bonus=657:12052:5877:10390:12361:12053",
          name: "Incorporeal Warpclaw"
        },
        {
          id: "246344",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_qirajidol_onyx.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246344/cursed-stone-idol?bonus=657:12052:5877:10390:12361:12053",
          name: "Cursed Stone Idol"
        },
        {
          id: "185846",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_paperpackage01b.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185846/miniscule-mailemental-in-an-envelope?bonus=657:12052:5877:10390:12361:12053",
          name: "Miniscule Mailemental in an Envelope"
        }
      ],
      c: [
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242494/lily-of-the-eternal-weave?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "185836",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_profession_book_enchanting.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185836/codex-of-the-first-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "Codex of the First Technique"
        },
        {
          id: "185818",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185818/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238386/void-touched-fragment?bonus=6652:11990:1537:10255&class=9&ilvl=681&bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242867/automatic-footbomb-dispenser?bonus=6652:11990:1537:10255&class=9&ilvl=681&bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246939/essence-hunters-eyeglass?bonus=6652:11990:1537:10255&class=9&ilvl=681&bonus=657:12042:5910:12355",
          name: "Essence-Hunter's Eyeglass"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246945/incorporeal-essence-gorger?bonus=6652:11990:1537:10255&class=9&ilvl=681&bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "246944",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246944/mind-fracturing-odium?bonus=6652:11990:1537:10255&class=9&ilvl=681&bonus=657:12042:5910:12355",
          name: "Mind-Fracturing Odium"
        },
        {
          id: "246824",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/item_icecrownnecklaceb.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246824/shadowguards-twisted-harvester?bonus=6652:11990:1537:10255&class=9&ilvl=681&bonus=657:12042:5910:12355",
          name: "Shadowguard's Twisted Harvester"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238390/soulbreakers-sigil?bonus=6652:11990:1537:10255&class=9&ilvl=681&bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "246941",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_arcane_buff.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246941/symbiotic-ethergauze?bonus=6652:11990:1537:10255&class=9&ilvl=681&bonus=657:12042:5910:12355",
          name: "Symbiotic Ethergauze"
        },
        {
          id: "240213",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ancient_mana.jpg",
          href: "https://www.wowhead.com/ptr-2/item=240213/veiling-mana-shroud?bonus=6652:11990:1537:10255&class=9&ilvl=681&bonus=657:12042:5910:12355",
          name: "Veiling Mana Shroud"
        }
      ],
      d: [],
      e: [],
      f: []
    }
  },
  {
    name: "Restoration",
    tierList: {
      s: [],
      a: [
        {
          id: "242400",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_oathbindersauthority.jpg",
          href: "https://www.wowhead.com/item=242400/?bonus=7981:12052:5877:12361:12053",
          name: "Nexus-King's Command"
        },
        {
          id: "242392",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_intdps_ancientkareshirelic.jpg",
          href: "https://www.wowhead.com/item=242392/?bonus=7981:12052:5877:12361:12053",
          name: "Diamantine Voidcore"
        },
        {
          id: "242393",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_astralspinneret.jpg",
          href: "https://www.wowhead.com/item=242393/?bonus=7981:12052:5877:12361:12053",
          name: "Loom'ithar's Living Silk"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/item=242402/?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/item=219314/?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/item=219312/?bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=190958/?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        }
      ],
      b: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/item=242395/?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "185845",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_7_0raid_trinket_09a.jpg",
          href: "https://www.wowhead.com/item=185845/?bonus=657:12052:5877:10390:12361:12053",
          name: "First Class Healing Distributor"
        },
        {
          id: "246940",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_mechagnome_powercell_full.jpg",
          href: "https://www.wowhead.com/item=246940/?bonus=657:12042:5910:12355",
          name: "Manaforged Aethercell"
        },
        {
          id: "246947",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_trinket6oih_lanternb3.jpg",
          href: "https://www.wowhead.com/item=246947/?bonus=657:12042:5910:12355",
          name: "Twisted Mana Sprite"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/?bonus=[=gv-crafting",
          name: "Algari Alchemist Stone"
        }
      ],
      c: [
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/item=242494/?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "232542",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_111_healraydrone_blackwater.jpg",
          href: "https://www.wowhead.com/item=232542/?bonus=657:12052:5877:10390:12361:12053",
          name: "Darkfuse Medichopper"
        },
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/item=246939/?bonus=657:12042:5910:12355",
          name: "Essence-Hunter's Eyeglass"
        }
      ],
      d: [],
      e: [],
      f: [
        {
          id: "178826",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_nightseye_01.jpg",
          href: "https://www.wowhead.com/item=178826/?bonus=657:12052:5877:10390:12361:12053",
          name: "Sunblood Amethyst"
        },
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/item=246825/?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        }
      ]
    }
  },
  {
    name: "Devastation",
    tierList: {
      s: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forgebonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242497",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_devourersmallmount_light.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242497/azhiccaran-parapodiabonus=657:12052:5877:10390:12361:12053",
          name: "Azhiccaran Parapodia"
        },
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antennabonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        }
      ],
      a: [
        {
          id: "185818",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=185818/soleahs-secret-techniquebonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory?bonus=11996:10390:6652:3170:10255&class=9&ilvl=678&spec=266bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        }
      ],
      b: [
        {
          id: "242398",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_soulbinderbossinttrinket.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242398/naazindhris-mystic-lashbonus=7981:12052:5877:12361:12053",
          name: "Naazindhri's Mystic Lash"
        },
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219317/harvesters-edictbonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "232545",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_engineering_90_lightningbox.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232545/gigazaps-zap-capbonus=657:12052:5877:10390:12361:12053",
          name: "Gigazap's Zap-Cap"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238390/soulbreakers-sigil",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-skybonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        }
      ],
      c: [
        {
          id: "219313",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_bell_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219313/mereldars-tollbonus=657:12052:5877:10390:12361:12053",
          name: "Mereldar's Toll"
        },
        {
          id: "178826",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_nightseye_01.jpg",
          href: "https://www.wowhead.com/ptr-2/item=178826/sunblood-amethystbonus=657:12052:5877:10390:12361:12053",
          name: "Sunblood Amethyst"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246945/incorporeal-essencegorger",
          name: "Incorporeal Essence-Gorger"
        }
      ],
      d: [
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projectorbonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "240172",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enggizmos_16.jpg",
          href: "https://www.wowhead.com/item=240172/depleted-kareshi-battery",
          name: "Depleted K'areshi Battery"
        },
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/item=246939/essencehunters-eyeglass",
          name: "Essence-Hunter's Eyeglass"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/algari-alchemist-stone",
          name: "Algari Alchemist Stone"
        }
      ],
      e: [],
      f: [
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/item=238386/ptr-2/voidtouched-fragment",
          name: "Void-Touched Fragment"
        },
        {
          id: "246824",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/item_icecrownnecklaceb.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246824/shadowguards-twisted-harvester",
          name: "Shadowguard's Twisted Harvester"
        },
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246825/chaotic-nethergate",
          name: "Chaotic Nethergate"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242867/automatic-footbomb-dispenser",
          name: "Automatic Footbomb Dispenser"
        }
      ]
    }
  },
  {
    name: "Preservation",
    tierList: {
      s: [
        {
          id: "242400",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_oathbindersauthority.jpg",
          href: "https://www.wowhead.com/item=242400/?bonus=7981:12052:5877:12361:12053",
          name: "Nexus-King's Command"
        }
      ],
      a: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/item=242395/?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242392",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_intdps_ancientkareshirelic.jpg",
          href: "https://www.wowhead.com/item=242392/?bonus=7981:12052:5877:12361:12053",
          name: "Diamantine Voidcore"
        },
        {
          id: "242393",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_astralspinneret.jpg",
          href: "https://www.wowhead.com/item=242393/?bonus=7981:12052:5877:12361:12053",
          name: "Loom'ithar's Living Silk"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/item=242494/?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/item=219312/?bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=190958/?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        }
      ],
      b: [
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/item=219314/?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "185845",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_7_0raid_trinket_09a.jpg",
          href: "https://www.wowhead.com/item=185845/?bonus=657:12052:5877:10390:12361:12053",
          name: "First Class Healing Distributor"
        },
        {
          id: "246940",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_mechagnome_powercell_full.jpg",
          href: "https://www.wowhead.com/item=246940/?bonus=657:12042:5910:12355",
          name: "Manaforged Aethercell"
        },
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/item=246939/?bonus=657:12042:5910:12355",
          name: "Essence-Hunter's Eyeglass"
        },
        {
          id: "246947",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_trinket6oih_lanternb3.jpg",
          href: "https://www.wowhead.com/item=246947/?bonus=657:12042:5910:12355",
          name: "Twisted Mana Sprite"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/?bonus=[=gv-crafting",
          name: "Algari Alchemist Stone"
        }
      ],
      c: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/item=242402/?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "232542",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_111_healraydrone_blackwater.jpg",
          href: "https://www.wowhead.com/item=232542/?bonus=657:12052:5877:10390:12361:12053",
          name: "Darkfuse Medichopper"
        }
      ],
      d: [],
      e: [],
      f: [
        {
          id: "178826",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_nightseye_01.jpg",
          href: "https://www.wowhead.com/item=178826/?bonus=657:12052:5877:10390:12361:12053",
          name: "Sunblood Amethyst"
        },
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/item=246825/?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        }
      ]
    }
  },
  {
    name: "Augmentation",
    tierList: {
      s: [
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242494/lily-of-the-eternal-weave?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-sky?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242497",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_devourersmallmount_light.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242497/azhiccaran-parapodia?bonus=657:12052:5877:10390:12361:12053",
          name: "Azhiccaran Parapodia"
        },
        {
          id: "242392",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_intdps_ancientkareshirelic.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242392/diamantine-voidcore?bonus=7981:12052:5877:12361:12053",
          name: "Diamantine Voidcore"
        }
      ],
      a: [
        {
          id: "242398",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_soulbinderbossinttrinket.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242398/naazindhris-mystic-lash?bonus=7981:12052:5877:12361:12053",
          name: "Naazindhri's Mystic Lash"
        },
        {
          id: "219313",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_bell_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219313/mereldars-toll?bonus=657:12052:5877:10390:12361:12053",
          name: "Mereldar's Toll"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246945/incorporeal-essence-gorger?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219312/empowering-crystal-of-anubikkaj?bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/ptr-2/item=190958/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://wowhead.com/ptr-2/item=246939/essence-hunters-eyeglass?bonus=657:12042:5910:12355",
          name: "Essence-Hunter's Eyeglass"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219314/ara-kara-sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        }
      ],
      b: [
        {
          id: "232545",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_engineering_90_lightningbox.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232545/gigazaps-zap-cap?bonus=657:12052:5877:10390:12361:12053",
          name: "Gigazap's Zap-Cap"
        },
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219317/harvesters-edict?bonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238386/void-touched-fragment?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        }
      ],
      c: [
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238390/soulbreakers-sigil?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "185846",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_paperpackage01b.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185846/miniscule-mailemental-in-an-envelope?bonus=657:12052:5877:10390:12361:12053",
          name: "Miniscule Mailemental in an Envelope"
        },
        {
          id: "240172",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enggizmos_16.jpg",
          href: "https://www.wowhead.com/ptr-2/item=240172/depleted-kareshi-battery?bonus=657:12042:5910:12355",
          name: "Depleted K'areshi Battery"
        }
      ],
      d: [
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242867/automatic-footbomb-dispenser?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "178826",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_nightseye_01.jpg",
          href: "https://www.wowhead.com/ptr-2/item=178826/sunblood-amethyst?bonus=657:12052:5877:10390:12361:12053",
          name: "Sunblood Amethyst"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        }
      ],
      e: [],
      f: [
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246825/chaotic-nethergate?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        },
        {
          id: "246824",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/item_icecrownnecklaceb.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246824/shadowguards-twisted-harvester?bonus=657:12042:5910:12355",
          name: "Shadowguard's Twisted Harvester"
        }
      ]
    }
  },
  {
    name: "Beast Mastery",
    tierList: {
      s: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        }
      ],
      a: [
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242397",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_agidpsancientkareshirelic.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242397/sigil-of-the-cosmic-hunt?bonus=7981:12052:5877:12361:12053",
          name: "Sigil of the Cosmic Hunt"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242494/lily-of-the-eternal-weave?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        }
      ],
      b: [
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/algari-alchemist-stone?bonus=9627:12053:12050:12053",
          name: "Algari Alchemist Stone"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246945/incorporeal-essence-gorger?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        }
      ],
      c: [
        {
          id: "185846",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_paperpackage01b.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185846/miniscule-mailemental-in-an-envelope?bonus=657:12052:5877:10390:12361:12053",
          name: "Miniscule Mailemental in an Envelope"
        },
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219317/harvesters-edict?bonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238386/void-touched-fragment?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        },
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242396/unyielding-netherprism?bonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        }
      ],
      d: [
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238390/soulbreakers-sigil?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246939/essence-hunters-eyeglass?bonus=657:12042:5910:12355",
          name: "Essence-Hunter's Eyeglass"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242867/automatic-footbomb-dispenser?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        }
      ],
      e: [],
      f: [
        {
          id: "246944",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246944/mind-fracturing-odium?bonus=657:12042:5910:12355",
          name: "Mind-Fracturing Odium"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-sky?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246825/chaotic-nethergate?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        }
      ]
    }
  },
  {
    name: "Marksmanship",
    tierList: {
      s: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242396/unyielding-netherprism?bonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        }
      ],
      a: [
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "246344",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_qirajidol_onyx.jpg",
          href: "https://www.wowhead.com/item=246344/cursed-stone-idol?bonus=657:12052:5877:10390:12361:12053",
          name: "Cursed Stone Idol"
        }
      ],
      b: [
        {
          id: "232541",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_blackhand_attachedslagbombs.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232541/improvised-seaforium-pacemaker?bonus=657:12052:5877:10390:12361:12053",
          name: "Improvised Seaforium Pacemaker"
        },
        {
          id: "185818",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185818/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        }
      ],
      c: [
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219314/ara-kara-sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242494/lily-of-the-eternal-weave?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "242397",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_agidpsancientkareshirelic.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242397/sigil-of-the-cosmic-hunt?bonus=7981:12052:5877:12361:12053",
          name: "Sigil of the Cosmic Hunt"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219312/empowering-crystal-of-anubikkaj?bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/algari-alchemist-stone?bonus=9627:12053:12050:12053",
          name: "Algari Alchemist Stone"
        }
      ],
      d: [
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246945/incorporeal-essence-gorger?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219317/harvesters-edict?bonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-sky?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        }
      ],
      e: [
        {
          id: "185846",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_paperpackage01b.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185846/miniscule-mailemental-in-an-envelope?bonus=657:12052:5877:10390:12361:12053",
          name: "Miniscule Mailemental in an Envelope"
        },
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246939/essence-hunters-eyeglass?bonus=657:12042:5910:12355",
          name: "Essence-Hunter's Eyeglass"
        }
      ],
      f: [
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238386/void-touched-fragment?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242867/automatic-footbomb-dispenser?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "246944",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246944/mind-fracturing-odium?bonus=657:12042:5910:12355",
          name: "Mind-Fracturing Odium"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246825/chaotic-nethergate?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        }
      ]
    }
  },
  {
    name: "Survival",
    tierList: {
      s: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        }
      ],
      a: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "232541",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_blackhand_attachedslagbombs.jpg",
          href: "https://www.wowhead.com/item=232541/improvised-seaforium-pacemaker?bonus=657:12052:5877:10390:12361:12053",
          name: "Improvised Seaforium Pacemaker"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/item=242494/lily-of-the-eternal-weave?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        }
      ],
      b: [
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/item=219312/empowering-crystal-of-anubikkaj?bonus=7981:12052:5877:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "242495",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_nightsaberclaw_mana.jpg",
          href: "https://www.wowhead.com/item=242495/incorporeal-warpclaw?bonus=7981:12052:5877:12361:12053",
          name: "Incorporeal Warpclaw"
        },
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=190958/soleahs-secret-technique?bonus=7981:12052:5877:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/item=219314/ara-kara-sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/item=246945/incorporeal-essence-gorger?bonus=7981:12052:5877:12361:12053",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "242397",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_agidpsancientkareshirelic.jpg",
          href: "https://www.wowhead.com/item=242397/sigil-of-the-cosmic-hunt?bonus=657:12052:5877:10390:12361:12053",
          name: "Sigil of the Cosmic Hunt"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/algari-alchemist-stone?bonus=9627:12053:12050:12053",
          name: "Algari Alchemist Stone"
        },
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/item=242396/unyielding-netherprism?bonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/item=242403/perfidious-projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/item=219317/harvesters-edict?bonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "246344",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_qirajidol_onyx.jpg",
          href: "https://www.wowhead.com/item=246344/cursed-stone-idol?bonus=657:12052:5877:10390:12361:12053",
          name: "Cursed Stone Idol"
        }
      ],
      c: [
        {
          id: "190652",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/item=190652/ticking-sack-of-terror?bonus=7981:12052:5877:12361:12053",
          name: "Ticking Sack of Terror"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/item=238386/void-touched-fragment?bonus=7981:12052:5877:12361:12053",
          name: "Void-Touched Fragment"
        },
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/item=246939/essence-hunters-eyeglass?bonus=7981:12052:5877:12361:12053",
          name: "Essence-Hunter's Eyeglass"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/item=238390/soulbreakers-sigil?bonus=7981:12052:5877:12361:12053",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/item=242867/automatic-footbomb-dispenser?bonus=7981:12052:5877:12361:12053",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "246944",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/item=246944/mind-fracturing-odium?bonus=7981:12052:5877:12361:12053",
          name: "Mind-Fracturing Odium"
        },
        {
          id: "240213",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ancient_mana.jpg",
          href: "https://www.wowhead.com/item=240213/veiling-mana-shroud?bonus=7981:12052:5877:12361:12053",
          name: "Veiling Mana Shroud"
        },
        {
          id: "246824",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/item_icecrownnecklaceb.jpg",
          href: "https://www.wowhead.com/item=246824/shadowguards-twisted-harvester?bonus=7981:12052:5877:12361:12053",
          name: "Shadowguard's Twisted Harvester"
        }
      ],
      d: [
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/item=242399/screams-of-a-forgotten-sky?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        }
      ],
      e: [],
      f: []
    }
  },
  {
    name: "Arcane",
    tierList: {
      s: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242497",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_devourersmallmount_light.jpg",
          href: "https://www.wowhead.com/item=242497/azhiccaran-parapodia?bonus=657:12052:5877:10390:12361:12053",
          name: "Azhiccaran Parapodia"
        }
      ],
      a: [
        {
          id: "242398",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_soulbinderbossinttrinket.jpg",
          href: "https://www.wowhead.com/item=242398/naazindhris-mystic-lash?bonus=7981:12052:5877:12361:12053",
          name: "Naazindhri's Mystic Lash"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "232545",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_engineering_90_lightningbox.jpg",
          href: "https://www.wowhead.com/item=232545/gigazaps-zap-cap?bonus=657:12052:5877:10390:12361:12053",
          name: "Gigazap's Zap-Cap"
        }
      ],
      b: [
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/item=219317/harvesters-edict?bonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/item=238390/soulbreakers-sigil?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        }
      ],
      c: [
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/item=238386/void-touched-fragment?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        },
        {
          id: "219313",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_bell_color1.jpg",
          href: "https://www.wowhead.com/item=219313/mereldars-toll?bonus=657:12052:5877:10390:12361:12053",
          name: "Mereldar's Toll"
        },
        {
          id: "178826",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_nightseye_01.jpg",
          href: "https://www.wowhead.com/item=178826/sunblood-amethyst?bonus=657:12052:5877:10390:12361:12053",
          name: "Sunblood Amethyst"
        }
      ],
      d: [
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/item=242867/automatic-footbomb-dispenser?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "240172",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enggizmos_16.jpg",
          href: "https://www.wowhead.com/item=240172/depleted-kareshi-battery?bonus=657:12042:5910:12355",
          name: "Depleted K'areshi Battery"
        }
      ],
      e: [],
      f: [
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/item=242403/perfidious-projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/item=246939/essence-hunters-eyeglass?bonus=657:12042:5910:12355",
          name: "Essence-Hunter's Eyeglass"
        },
        {
          id: "246824",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/item_icecrownnecklaceb.jpg",
          href: "https://www.wowhead.com/item=246824/shadowguards-twisted-harvester?bonus=657:12042:5910:12355",
          name: "Shadowguard's Twisted Harvester"
        }
      ]
    }
  },
  {
    name: "Fire",
    tierList: {
      s: [
        {
          id: "242392",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_intdps_ancientkareshirelic.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242392/diamantine-voidcorebonus=7981:12052:5877:12361:12053",
          name: "Diamantine Voidcore"
        },
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antennabonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-skybonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        }
      ],
      a: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forgebonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242494/lily-of-the-eternal-weavebonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory?bonus=11996:10390:6652:3170:10255&class=9&ilvl=678&spec=266bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219312/empowering-crystal-of-anubikkajbonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        }
      ],
      b: [
        {
          id: "185846",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_paperpackage01b.jpg",
          href: "https://www.wowhead.com/item=185846/miniscule-mailemental-in-an-envelope",
          name: "Miniscule Mailemental in an Envelope"
        },
        {
          id: "178826",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_nightseye_01.jpg",
          href: "https://www.wowhead.com/ptr-2/item=178826/sunblood-amethystbonus=657:12052:5877:10390:12361:12053",
          name: "Sunblood Amethyst"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/item=238390/soulbreakers-sigil",
          name: "Soulbreaker's Sigil"
        }
      ],
      c: [
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219317/harvesters-edictbonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "232545",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_engineering_90_lightningbox.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232545/gigazaps-zap-capbonus=657:12052:5877:10390:12361:12053",
          name: "Gigazap's Zap-Cap"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/item=246945/incorporeal-essencegorger",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "240172",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enggizmos_16.jpg",
          href: "https://www.wowhead.com/item=240172/depleted-kareshi-battery",
          name: "Depleted K'areshi Battery"
        },
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/item=246939/essencehunters-eyeglass",
          name: "Essence-Hunter's Eyeglass"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/algari-alchemist-stone",
          name: "Algari Alchemist Stone"
        }
      ],
      d: [
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/item=238386/voidtouched-fragment",
          name: "Void-Touched Fragment"
        },
        {
          id: "219313",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_bell_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219313/mereldars-tollbonus=657:12052:5877:10390:12361:12053",
          name: "Mereldar's Toll"
        },
        {
          id: "242398",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_soulbinderbossinttrinket.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242398/naazindhris-mystic-lashbonus=7981:12052:5877:12361:12053",
          name: "Naazindhri's Mystic Lash"
        }
      ],
      e: [],
      f: [
        {
          id: "219310",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219310/bursting-lightshardbonus=657:12052:5877:10390:12361:12053",
          name: "Bursting Lightshard"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projectorbonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "246824",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/item_icecrownnecklaceb.jpg",
          href: "https://www.wowhead.com/item=246824/shadowguards-twisted-harvester",
          name: "Shadowguard's Twisted Harvester"
        },
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/item=246825/chaotic-nethergate",
          name: "Chaotic Nethergate"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/item=242867/automatic-footbomb-dispenser",
          name: "Automatic Footbomb Dispenser"
        }
      ]
    }
  },
  {
    name: "Frost",
    tierList: {
      s: [],
      a: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/item=242395/astral-antenna",
          name: "Astral Antenna"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/item=242402/arazs-ritual-forge",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242392",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_intdps_ancientkareshirelic.jpg",
          href: "https://www.wowhead.com/item=242392/diamantine-voidcore",
          name: "Diamantine Voidcore"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/item=242399/screams-of-a-forgotten-sky",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/item=242494/lily-of-the-eternal-weave",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "242497",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_devourersmallmount_light.jpg",
          href: "https://www.wowhead.com/item=242497/azhiccaran-parapodia",
          name: "Azhiccaran Parapodia"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/item=219314/arakara-sacbrood",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/item=219312/empowering-crystal-of-anubikkaj",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=190958/soleahs-secret-technique",
          name: "So'leah's Secret Technique"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/item=238390/soulbreakers-sigil",
          name: "Soulbreaker's Sigil"
        }
      ],
      b: [
        {
          id: "242398",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_soulbinderbossinttrinket.jpg",
          href: "https://www.wowhead.com/item=242398/naazindhris-mystic-lash",
          name: "Naazindhri's Mystic Lash"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/signet-of-the-priory",
          name: "Signet of the Priory"
        },
        {
          id: "232545",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_engineering_90_lightningbox.jpg",
          href: "https://www.wowhead.com/item=232545/gigazaps-zapcap",
          name: "Gigazap's Zap-Cap"
        },
        {
          id: "185846",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_paperpackage01b.jpg",
          href: "https://www.wowhead.com/item=185846/miniscule-mailemental-in-an-envelope",
          name: "Miniscule Mailemental in an Envelope"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/item=246945/incorporeal-essencegorger",
          name: "Incorporeal Essence-Gorger"
        }
      ],
      c: [
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/item=219317/harvesters-edict",
          name: "Harvester's Edict"
        },
        {
          id: "219313",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_bell_color1.jpg",
          href: "https://www.wowhead.com/item=219313/mereldars-toll",
          name: "Mereldar's Toll"
        },
        {
          id: "178826",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_nightseye_01.jpg",
          href: "https://www.wowhead.com/item=178826/sunblood-amethyst",
          name: "Sunblood Amethyst"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/item=238386/voidtouched-fragment",
          name: "Void-Touched Fragment"
        },
        {
          id: "240172",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enggizmos_16.jpg",
          href: "https://www.wowhead.com/item=240172/depleted-kareshi-battery",
          name: "Depleted K'areshi Battery"
        },
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/item=246939/essencehunters-eyeglass",
          name: "Essence-Hunter's Eyeglass"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/algari-alchemist-stone",
          name: "Algari Alchemist Stone"
        }
      ],
      d: [
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/item=242403/perfidious-projector",
          name: "Perfidious Projector"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/item=242867/automatic-footbomb-dispenser",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "246824",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/item_icecrownnecklaceb.jpg",
          href: "https://www.wowhead.com/item=246824/shadowguards-twisted-harvester",
          name: "Shadowguard's Twisted Harvester"
        },
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/item=246825/chaotic-nethergate",
          name: "Chaotic Nethergate"
        }
      ],
      e: [],
      f: []
    }
  },
  {
    name: "Brewmaster",
    tierList: {
      s: [
        {
          id: "242401",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_manaforgetanktrinket3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242401/brand-of-ceaseless-ire?bonus=7981:12052:5877:12361:12053",
          name: "Brand of Ceaseless Ire"
        },
        {
          id: "219309",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_7xp_inscription_talenttome01.jpg",
          href: "https://www.wowhead.com/item=219309/tome-of-lights-devotion?bonus=657:12052:5877:10390:12361:12053",
          name: "Tome of Light's Devotion"
        }
      ],
      a: [
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242396/unyielding-netherprism?bonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "246344",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_qirajidol_onyx.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246344/cursed-stone-idol?bonus=657:12052:5877:10390:12361:12053",
          name: "Cursed Stone Idol"
        },
        {
          id: "242397",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_agidpsancientkareshirelic.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242397/sigil-of-the-cosmic-hunt?bonus=7981:12052:5877:12361:12053",
          name: "Sigil of the Cosmic Hunt"
        },
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242391",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_manaforge_tanktrinket1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242391/soulbinders-embrace?bonus=7981:12052:5877:12361:12053",
          name: "Soulbinder's Embrace"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        }
      ],
      b: [
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219312/empowering-crystal-of-anubikkaj?bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219317/harvesters-edict?bonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-sky?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219314/ara-kara-sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "242404",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_omnidpstrinket.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242404/all-devouring-nucleus?bonus=7981:12052:5877:12361:12053",
          name: "All-Devouring Nucleus"
        },
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/ptr-2/item=190958/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "240213",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ancient_mana.jpg",
          href: "https://www.wowhead.com/ptr-2/item=240213/veiling-mana-shroud?bonus=657:12042:5910:12355",
          name: "Veiling Mana Shroud"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238386/void-touched-fragment?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        }
      ],
      c: [
        {
          id: "185836",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_profession_book_enchanting.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185836/codex-of-the-first-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "Codex of the First Technique"
        },
        {
          id: "219316",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_organmass_color2.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219316/ceaseless-swarmgland?bonus=657:12052:5877:10390:12361:12053",
          name: "Ceaseless Swarmgland"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238390/soulbreakers-sigil?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242867/automatic-footbomb-dispenser?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/algari-alchemist-stone?bonus=9627:12053:12050:12053",
          name: "Algari Alchemist Stone"
        },
        {
          id: "246824",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/item_icecrownnecklaceb.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246824/shadowguards-twisted-harvester?bonus=657:12042:5910:12355",
          name: "Shadowguard's Twisted Harvester"
        },
        {
          id: "246941",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_arcane_buff.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246941/symbiotic-ethergauze?bonus=657:12042:5910:12355",
          name: "Symbiotic Ethergauze"
        },
        {
          id: "246944",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246944/mind-fracturing-odium?bonus=657:12042:5910:12355",
          name: "Mind-Fracturing Odium"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246945/incorporeal-essence-gorger?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        }
      ],
      d: [],
      e: [],
      f: []
    }
  },
  {
    name: "Mistweaver",
    tierList: {
      s: [
        {
          id: "242392",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_intdps_ancientkareshirelic.jpg",
          href: "https://www.wowhead.com/item=242392/diamantine-voidcore?bonus=7981:12052:5877:12361:12053",
          name: "Diamantine Voidcore"
        },
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        }
      ],
      a: [
        {
          id: "242393",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_astralspinneret.jpg",
          href: "https://www.wowhead.com/item=242393/loomithars-living-silk?bonus=7981:12052:5877:12361:12053",
          name: "Loom'ithar's Living Silk"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/item=219314/ara-kara-sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/item=219312/empowering-crystal-of-anubikkaj?bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        }
      ],
      b: [
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/algari-alchemist-stone?bonus=9627:12053:12050:12053",
          name: "Algari Alchemist Stone"
        },
        {
          id: "230186",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_111_healraydrone_bilgewater.jpg",
          href: "https://www.wowhead.com/item=230186/mister-pick-me-up?bonus=1533",
          name: "Mister Pick-Me-Up"
        },
        {
          id: "185845",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_7_0raid_trinket_09a.jpg",
          href: "https://www.wowhead.com/item=185845/first-class-healing-distributor?bonus=657:12052:5877:10390:12361:12053",
          name: "First Class Healing Distributor"
        },
        {
          id: "246947",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_trinket6oih_lanternb3.jpg",
          href: "https://www.wowhead.com/item=246947/twisted-mana-sprite?bonus=657:12042:5910:12355",
          name: "Twisted Mana Sprite"
        },
        {
          id: "230192",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_111_blackbloodfueledcontainer.jpg",
          href: "https://www.wowhead.com/item=230192/mugs-moxie-jug?bonus=1533",
          name: "Mug's Moxie Jug"
        },
        {
          id: "232542",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_111_healraydrone_blackwater.jpg",
          href: "https://www.wowhead.com/item=232542/darkfuse-medichopper?bonus=657:12052:5877:10390:12361:12053",
          name: "Darkfuse Medichopper"
        }
      ],
      c: [
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/item=242494/lily-of-the-eternal-weave?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "246940",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_mechagnome_powercell_full.jpg",
          href: "https://www.wowhead.com/item=246940/manaforged-aethercell?bonus=657:12042:5910:12355",
          name: "Manaforged Aethercell"
        }
      ],
      d: [
        {
          id: "230198",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_azerite_essence08.jpg",
          href: "https://www.wowhead.com/item=230198/eye-of-kezan?bonus=1533",
          name: "Eye of Kezan"
        },
        {
          id: "230194",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_111_statsoundwaveemitter_blackwater.jpg",
          href: "https://www.wowhead.com/item=230194/reverb-radio?bonus=1533",
          name: "Reverb Radio"
        }
      ],
      e: [],
      f: []
    }
  },
  {
    name: "Windwalker",
    tierList: {
      s: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/item=242402/arazs-ritual-forgebonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/item=242395/astral-antennabonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/item=246945/incorporeal-essence-gorgerbonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/item=242399/screams-of-a-forgotten-skybonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/item=242396/unyielding-netherprismbonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        }
      ],
      a: [
        {
          id: "246344",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_qirajidol_onyx.jpg",
          href: "https://www.wowhead.com/item=246344/cursed-stone-idolbonus=657:12052:5877:10390:12361:12053",
          name: "Cursed Stone Idol"
        },
        {
          id: "232541",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_blackhand_attachedslagbombs.jpg",
          href: "https://www.wowhead.com/item=232541/improvised-seaforium-pacemaker?bonus=4786:1514:11996&class=10&ilvl=678&spec=269bonus=657:12052:5877:10390:12361:12053",
          name: "Improvised Seaforium Pacemaker"
        },
        {
          id: "242397",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_agidpsancientkareshirelic.jpg",
          href: "https://www.wowhead.com/item=242397/sigil-of-the-cosmic-huntbonus=7981:12052:5877:12361:12053",
          name: "Sigil of the Cosmic Hunt"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/signet-of-the-priory?bonus=7244:1615:10294&class=10&ilvl=580&spec=269bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        }
      ],
      b: [
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/item=219312/empowering-crystal-of-anubikkajbonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "242495",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_nightsaberclaw_mana.jpg",
          href: "https://www.wowhead.com/item=242495/incorporeal-warpclawbonus=657:12052:5877:10390:12361:12053",
          name: "Incorporeal Warpclaw"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/item=242494/lily-of-the-eternal-weavebonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "190652",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/item=190652/ticking-sack-of-terror?bonus=4786:10019:12356&ilvl=707&spec=269bonus=657:12052:5877:10390:12361:12053",
          name: "Ticking Sack of Terror"
        }
      ],
      c: [
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/item=219317/harvesters-edictbonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/item=238390/soulbreakers-sigilbonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        }
      ],
      d: [
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/item=219314/ara-kara-sacbroodbonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=190958/soleahs-secret-techniquebonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/item=238386/void-touched-fragmentbonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        }
      ],
      e: [],
      f: [
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/item=246939/essence-hunters-eyeglassbonus=657:12042:5910:12355",
          name: "Essence-Hunter's Eyeglass"
        },
        {
          id: "246944",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/item=246944/mind-fracturing-odiumbonus=657:12042:5910:12355",
          name: "Mind-Fracturing Odium"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/item=242403/perfidious-projectorbonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "246824",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/item_icecrownnecklaceb.jpg",
          href: "https://www.wowhead.com/item=246824/shadowguards-twisted-harvesterbonus=657:12042:5910:12355",
          name: "Shadowguard's Twisted Harvester"
        },
        {
          id: "240213",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ancient_mana.jpg",
          href: "https://www.wowhead.com/item=240213/veiling-mana-shroudbonus=657:12042:5910:12355",
          name: "Veiling Mana Shroud"
        }
      ]
    }
  },
  {
    name: "Protection",
    tierList: {
      s: [
        {
          id: "219309",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_7xp_inscription_talenttome01.jpg",
          href: "https://www.wowhead.com/item=219309/tome-of-lights-devotion?bonus=657:12052:5877:10390:12361:12053",
          name: "Tome of Light's Devotion"
        },
        {
          id: "242401",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_manaforgetanktrinket3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242401/brand-of-ceaseless-ire?bonus=7981:12052:5877:12361:12053",
          name: "Brand of Ceaseless Ire"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "190652",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/item=190652/ticking-sack-of-terror?bonus=657:12052:5877:10390:12361:12053",
          name: "Ticking Sack of Terror"
        },
        {
          id: "185818",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185818/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219314/ara-kara-sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        }
      ],
      a: [
        {
          id: "232541",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_blackhand_attachedslagbombs.jpg",
          href: "https://www.wowhead.com/item=232541/improvised-seaforium-pacemaker?bonus=657:12052:5877:10390:12361:12053",
          name: "Improvised Seaforium Pacemaker"
        },
        {
          id: "232543",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_legion_goomolasses_pool.jpg",
          href: "https://www.wowhead.com/item=232543/ringing-ritual-mud?bonus=657:12052:5877:10390:12361:12053",
          name: "Ringing Ritual Mud"
        },
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242396/unyielding-netherprism?bonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        }
      ],
      b: [
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-sky?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "242394",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_obliterationcannon.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242394/eradicating-arcanocore?bonus=7981:12052:5877:12361:12053",
          name: "Eradicating Arcanocore"
        },
        {
          id: "246344",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_qirajidol_onyx.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246344/cursed-stone-idol?bonus=657:12052:5877:10390:12361:12053",
          name: "Cursed Stone Idol"
        },
        {
          id: "219311",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219311/void-pactstone?bonus=657:12052:5877:10390:12361:12053",
          name: "Void Pactstone"
        },
        {
          id: "185836",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_profession_book_enchanting.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185836/codex-of-the-first-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "Codex of the First Technique"
        },
        {
          id: "242404",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_omnidpstrinket.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242404/all-devouring-nucleus?bonus=7981:12052:5877:12361:12053",
          name: "All-Devouring Nucleus"
        },
        {
          id: "242391",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_manaforge_tanktrinket1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242391/soulbinders-embrace?bonus=7981:12052:5877:12361:12053",
          name: "Soulbinder's Embrace"
        },
        {
          id: "246941",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_arcane_buff.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246941/symbiotic-ethergauze?bonus=657:12042:5910:12355",
          name: "Symbiotic Ethergauze"
        }
      ],
      c: [
        {
          id: "219316",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_organmass_color2.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219316/ceaseless-swarmgland?bonus=657:12052:5877:10390:12361:12053",
          name: "Ceaseless Swarmgland"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246945/incorporeal-essence-gorger?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "246944",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246944/mind-fracturing-odium?bonus=657:12042:5910:12355",
          name: "Mind-Fracturing Odium"
        },
        {
          id: "246824",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/item_icecrownnecklaceb.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246824/shadowguards-twisted-harvester?bonus=657:12042:5910:12355",
          name: "Shadowguard's Twisted Harvester"
        },
        {
          id: "240213",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ancient_mana.jpg",
          href: "https://www.wowhead.com/ptr-2/item=240213/veiling-mana-shroud?bonus=657:12042:5910:12355",
          name: "Veiling Mana Shroud"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/algari-alchemist-stone?bonus=7981:12052:5877:12361:12053",
          name: "Algari Alchemist Stone"
        },
        {
          id: "242495",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_nightsaberclaw_mana.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242495/incorporeal-warpclaw?bonus=657:12052:5877:10390:12361:12053",
          name: "Incorporeal Warpclaw"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238386/void-touched-fragment?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        }
      ],
      d: [
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242867/automatic-footbomb-dispenser?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238390/soulbreakers-sigil?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        }
      ],
      e: [],
      f: [
        {
          id: "246947",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_trinket6oih_lanternb3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246947/twisted-mana-sprite?bonus=657:12042:5910:12355",
          name: "Twisted Mana Sprite"
        },
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246825/chaotic-nethergate?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        }
      ]
    }
  },
  {
    name: "Retribution",
    tierList: {
      s: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/item=242395/?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/item=242399/?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        }
      ],
      a: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/item=242402/?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "232541",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_blackhand_attachedslagbombs.jpg",
          href: "https://www.wowhead.com/item=232541/?bonus=657:12052:5877:10390:12361:12053",
          name: "Improvised Seaforium Pacemaker"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/item=219314/?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        }
      ],
      b: [
        {
          id: "242394",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_obliterationcannon.jpg",
          href: "https://www.wowhead.com/item=242394/?bonus=7981:12052:5877:12361:12053",
          name: "Eradicating Arcanocore"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/item=246945/?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=190958/?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "246344",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_qirajidol_onyx.jpg",
          href: "https://www.wowhead.com/item=246344/?bonus=657:12052:5877:10390:12361:12053",
          name: "Cursed Stone Idol"
        }
      ],
      c: [
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/item=242396/?bonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/item=238390/?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "242495",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_nightsaberclaw_mana.jpg",
          href: "https://www.wowhead.com/item=242495/?bonus=657:12052:5877:10390:12361:12053",
          name: "Incorporeal Warpclaw"
        },
        {
          id: "219311",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=219311/?bonus=657:12052:5877:10390:12361:12053",
          name: "Void Pactstone"
        },
        {
          id: "190652",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/item=190652/?bonus=657:12052:5877:10390:12361:12053",
          name: "Ticking Sack of Terror"
        },
        {
          id: "185846",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_paperpackage01b.jpg",
          href: "https://www.wowhead.com/item=185846/?bonus=657:12052:5877:10390:12361:12053",
          name: "Miniscule Mailemental in an Envelope"
        }
      ],
      d: [
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/item=242403/?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/item=238386/?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/item=242867/?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "246944",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/item=246944/?bonus=657:12042:5910:12355",
          name: "Mind-Fracturing Odium"
        },
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/item=246825/?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/?bonus=9627:12053:12050:12053",
          name: "Algari Alchemist Stone"
        }
      ],
      e: [],
      f: []
    }
  },
  {
    name: "Holy",
    tierList: {
      s: [
        {
          id: "242400",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_oathbindersauthority.jpg",
          href: "https://www.wowhead.com/item=242400/nexus-kings-command?bonus=7981:12052:5877:12361:12053",
          name: "Nexus-King's Command"
        },
        {
          id: "242392",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_intdps_ancientkareshirelic.jpg",
          href: "https://www.wowhead.com/item=242392/diamantine-voidcore?bonus=7981:12052:5877:12361:12053",
          name: "Diamantine Voidcore"
        }
      ],
      a: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=190958/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/item=219312/empowering-crystal-of-anubikkaj?bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/item=219314/ara-kara-sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "242393",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_astralspinneret.jpg",
          href: "https://www.wowhead.com/item=242393/loomithars-living-silk?bonus=7981:12052:5877:12361:12053",
          name: "Loom'ithar's Living Silk"
        }
      ],
      b: [
        {
          id: "242497",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_devourersmallmount_light.jpg",
          href: "https://www.wowhead.com/item=242497/azhiccaran-parapodia?bonus=657:12052:5877:10390:12361:12053",
          name: "Azhiccaran Parapodia"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/item=242494/lily-of-the-eternal-weave?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/algari-alchemist-stone?bonus=9627:12053:12050:12053",
          name: "Algari Alchemist Stone"
        },
        {
          id: "185845",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_7_0raid_trinket_09a.jpg",
          href: "https://www.wowhead.com/item=185845/first-class-healing-distributor?bonus=657:12052:5877:10390:12361:12053",
          name: "First Class Healing Distributor"
        },
        {
          id: "246940",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_mechagnome_powercell_full.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246940/manaforged-aethercell?bonus=657:12042:5910:12355",
          name: "Manaforged Aethercell"
        }
      ],
      c: [
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246939/essence-hunters-eyeglass?bonus=657:12042:5910:12355",
          name: "Essence-Hunter's Eyeglass"
        },
        {
          id: "246947",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_trinket6oih_lanternb3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246947/twisted-mana-sprite?bonus=657:12042:5910:12355",
          name: "Twisted Mana Sprite"
        },
        {
          id: "232542",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_111_healraydrone_blackwater.jpg",
          href: "https://www.wowhead.com/item=232542/darkfuse-medichopper?bonus=657:12052:5877:10390:12361:12053",
          name: "Darkfuse Medichopper"
        },
        {
          id: "235283",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_book_05.jpg",
          href: "https://www.wowhead.com/item=235283/bashful-book?bonus=657:12042:5910:12355",
          name: "Bashful Book"
        }
      ],
      d: [],
      e: [],
      f: [
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246825/chaotic-nethergate?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        },
        {
          id: "178826",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_nightseye_01.jpg",
          href: "https://www.wowhead.com/item=178826/sunblood-amethyst?bonus=657:12052:5877:10390:12361:12053",
          name: "Sunblood Amethyst"
        }
      ]
    }
  },
  {
    name: "Discipline",
    tierList: {
      s: [
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242494/lily-of-the-eternal-weave?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "242497",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_devourersmallmount_light.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242497/azhiccaran-parapodia?bonus=657:12052:5877:10390:12361:12053",
          name: "Azhiccaran Parapodia"
        },
        {
          id: "242392",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_intdps_ancientkareshirelic.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242392/diamantine-voidcore?bonus=7981:12052:5877:12361:12053",
          name: "Diamantine Voidcore"
        },
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242393",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_astralspinneret.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242393/loomithars-living-silk?bonus=7981:12052:5877:12361:12053",
          name: "Loom'ithar's Living Silk"
        }
      ],
      a: [
        {
          id: "185818",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185818/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        }
      ],
      b: [
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219312/empowering-crystal-of-anubikkaj?bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219314/ara-kara-sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238386/void-touched-fragment?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        }
      ],
      c: [
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "242400",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_oathbindersauthority.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242400/nexus-kings-command?bonus=7981:12052:5877:12361:12053",
          name: "Nexus-King's Command"
        },
        {
          id: "246940",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_mechagnome_powercell_full.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246940/manaforged-aethercell?bonus=657:12042:5910:12355",
          name: "Manaforged Aethercell"
        }
      ],
      d: [
        {
          id: "246947",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_trinket6oih_lanternb3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246947/twisted-mana-sprite?bonus=657:12042:5910:12355",
          name: "Twisted Mana Sprite"
        }
      ],
      e: [],
      f: []
    }
  },
  {
    name: "Shadow",
    tierList: {
      s: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forgebonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antennabonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        }
      ],
      a: [
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory?bonus=11996:10390:6652:3170:10255&class=9&ilvl=678&spec=266bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242494/lily-of-the-eternal-weavebonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "242497",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_devourersmallmount_light.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242497/azhiccaran-parapodiabonus=657:12052:5877:10390:12361:12053",
          name: "Azhiccaran Parapodia"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219312/empowering-crystal-of-anubikkajbonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219314/ara-kara-sacbroodbonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        }
      ],
      b: [
        {
          id: "185818",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=185818/soleahs-secret-techniquebonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        }
      ],
      c: [
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219317/harvesters-edictbonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "232545",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_engineering_90_lightningbox.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232545/gigazaps-zap-capbonus=657:12052:5877:10390:12361:12053",
          name: "Gigazap's Zap-Cap"
        }
      ],
      d: [
        {
          id: "219313",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_bell_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219313/mereldars-tollbonus=657:12052:5877:10390:12361:12053",
          name: "Mereldar's Toll"
        },
        {
          id: "242398",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_soulbinderbossinttrinket.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242398/naazindhris-mystic-lashbonus=7981:12052:5877:12361:12053",
          name: "Naazindhri's Mystic Lash"
        }
      ],
      e: [],
      f: [
        {
          id: "219310",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219310/bursting-lightshardbonus=657:12052:5877:10390:12361:12053",
          name: "Bursting Lightshard"
        },
        {
          id: "178826",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_nightseye_01.jpg",
          href: "https://www.wowhead.com/ptr-2/item=178826/sunblood-amethystbonus=657:12052:5877:10390:12361:12053",
          name: "Sunblood Amethyst"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projectorbonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-skybonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        }
      ]
    }
  },
  {
    name: "Holy",
    tierList: {
      s: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "185818",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185818/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "242392",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_intdps_ancientkareshirelic.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242392/diamantine-voidcore?bonus=7981:12052:5877:12361:12053",
          name: "Diamantine Voidcore"
        },
        {
          id: "242393",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_astralspinneret.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242393/loomithars-living-silk?bonus=7981:12052:5877:12361:12053",
          name: "Loom'ithar's Living Silk"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219312/empowering-crystal-of-anubikkaj?bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        }
      ],
      a: [
        {
          id: "242400",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_oathbindersauthority.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242400/nexus-kings-command?bonus=7981:12052:5877:12361:12053",
          name: "Nexus-King's Command"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219314/ara-kara-sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242494/lily-of-the-eternal-weave?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        }
      ],
      b: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        }
      ],
      c: [
        {
          id: "246947",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_trinket6oih_lanternb3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246947/twisted-mana-sprite?bonus=657:12042:5910:12355",
          name: "Twisted Mana Sprite"
        },
        {
          id: "246940",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_mechagnome_powercell_full.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246940/manaforged-aethercell?bonus=657:12042:5910:12355",
          name: "Manaforged Aethercell"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238386/void-touched-fragment?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        }
      ],
      d: [
        {
          id: "242497",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_devourersmallmount_light.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242497/azhiccaran-parapodia?bonus=657:12052:5877:10390:12361:12053",
          name: "Azhiccaran Parapodia"
        }
      ],
      e: [],
      f: []
    }
  },
  {
    name: "Assassination",
    tierList: {
      s: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/item=242396/unyielding-netherprism?bonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        }
      ],
      a: [
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/item=242494/lily-of-the-eternal-weave?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/item=219314/ara-kara-sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/item=219312/empowering-crystal-of-anubikkaj?bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "232541",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_blackhand_attachedslagbombs.jpg",
          href: "https://www.wowhead.com/item=232541/improvised-seaforium-pacemaker?bonus=657:12052:5877:10390:12361:12053",
          name: "Improvised Seaforium Pacemaker"
        }
      ],
      b: [
        {
          id: "242397",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_agidpsancientkareshirelic.jpg",
          href: "https://www.wowhead.com/item=242397/sigil-of-the-cosmic-hunt?bonus=7981:12052:5877:12361:12053",
          name: "Sigil of the Cosmic Hunt"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/algari-alchemist-stone?bonus=9627:12053:12050:12053",
          name: "Algari Alchemist Stone"
        },
        {
          id: "242495",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_nightsaberclaw_mana.jpg",
          href: "https://www.wowhead.com/item=242495/incorporeal-warpclaw?bonus=657:12052:5877:10390:12361:12053",
          name: "Incorporeal Warpclaw"
        },
        {
          id: "190652",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/item=190652/ticking-sack-of-terror?bonus=657:12052:5877:10390:12361:12053",
          name: "Ticking Sack of Terror"
        },
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=190958/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "246344",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_qirajidol_onyx.jpg",
          href: "https://www.wowhead.com/item=246344/cursed-stone-idol?bonus=657:12052:5877:10390:12361:12053",
          name: "Cursed Stone Idol"
        }
      ],
      c: [
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/item=242403/perfidious-projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "246944",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/item=246944/mind-fracturing-odium?bonus=657:12042:5910:12355",
          name: "Mind-Fracturing Odium"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/item=246945/incorporeal-essence-gorger?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/item=242867/automatic-footbomb-dispenser?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/item=238386/void-touched-fragment?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        },
        {
          id: "240213",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ancient_mana.jpg",
          href: "https://www.wowhead.com/item=240213/veiling-mana-shroud?bonus=657:12042:5910:12355",
          name: "Veiling Mana Shroud"
        },
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/item=219317/harvesters-edict?bonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        }
      ],
      d: [
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/item=246825/chaotic-nethergate?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        },
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/item=246939/essence-hunters-eyeglass?bonus=657:12042:5910:12355",
          name: "Essence-Hunter's Eyeglass"
        },
        {
          id: "246940",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_mechagnome_powercell_full.jpg",
          href: "https://www.wowhead.com/item=246940/manaforged-aethercell?bonus=657:12042:5910:12355",
          name: "Manaforged Aethercell"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/item=238390/soulbreakers-sigil?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "246824",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/item_icecrownnecklaceb.jpg",
          href: "https://www.wowhead.com/item=246824/shadowguards-twisted-harvester?bonus=657:12042:5910:12355",
          name: "Shadowguard's Twisted Harvester"
        },
        {
          id: "246941",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_arcane_buff.jpg",
          href: "https://www.wowhead.com/item=246941/symbiotic-ethergauze?bonus=657:12042:5910:12355",
          name: "Symbiotic Ethergauze"
        },
        {
          id: "246947",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_trinket6oih_lanternb3.jpg",
          href: "https://www.wowhead.com/item=246947/twisted-mana-sprite?bonus=657:12042:5910:12355",
          name: "Twisted Mana Sprite"
        }
      ],
      e: [],
      f: []
    }
  },
  {
    name: "Outlaw",
    tierList: {
      s: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antenna?class=4&hero=52&ilvl=723&spec=260",
          name: "Astral Antenna"
        },
        {
          id: "242397",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_agidpsancientkareshirelic.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242397/sigil-of-the-cosmic-hunt?class=4&hero=52&ilvl=723&spec=260",
          name: "Sigil of the Cosmic Hunt"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219314/ara-kara-sacbrood?hero=52&ilvl=723&spec=260",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "242495",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_nightsaberclaw_mana.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242495/incorporeal-warpclaw?class=4&hero=52&ilvl=723&spec=260",
          name: "Incorporeal Warpclaw"
        }
      ],
      a: [
        {
          id: "232541",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_blackhand_attachedslagbombs.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232541/improvised-seaforium-pacemaker?class=4&hero=52&ilvl=723&spec=260",
          name: "Improvised Seaforium Pacemaker"
        },
        {
          id: "190652",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/ptr-2/item=190652/ticking-sack-of-terror?hero=52&ilvl=723&spec=260",
          name: "Ticking Sack of Terror"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory?class=4&hero=52&ilvl=723&spec=260",
          name: "Signet of the Priory"
        },
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242396/unyielding-netherprism?hero=52&ilvl=723&spec=260",
          name: "Unyielding Netherprism"
        }
      ],
      b: [
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238390/soulbreakers-sigil?class=4&hero=52&ilvl=710&spec=260",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forge?hero=52&ilvl=723&spec=260",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/item=242494/lily-of-the-eternal-weave?hero=52&ilvl=723&spec=260",
          name: "Lily of the Eternal Weave"
        }
      ],
      c: [
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projector?hero=52&ilvl=723&spec=260",
          name: "Perfidious Projector"
        },
        {
          id: "246344",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_qirajidol_onyx.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246344/cursed-stone-idol?class=4&hero=52&ilvl=723&spec=260",
          name: "Cursed Stone Idol"
        }
      ],
      d: [
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238386/void-touched-fragment?class=4&hero=52&ilvl=710&spec=260",
          name: "Void-Touched Fragment"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/item=242399/screams-of-a-forgotten-sky?hero=52&ilvl=723&spec=260",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246945/incorporeal-essence-gorger?class=4&hero=52&ilvl=710&spec=260",
          name: "Incorporeal Essence-Gorger"
        }
      ],
      e: [],
      f: []
    }
  },
  {
    name: "Subtlety",
    tierList: {
      s: [
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/item=242396/unyielding-netherprism?bonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/item=242494/lily-of-the-eternal-weave?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        }
      ],
      a: [
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/item=219312/empowering-crystal-of-anubikkaj?bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "242495",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_nightsaberclaw_mana.jpg",
          href: "https://www.wowhead.com/item=242495/incorporeal-warpclaw?bonus=657:12052:5877:10390:12361:12053",
          name: "Incorporeal Warpclaw"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/algari-alchemist-stone?bonus=9627:12053:12050:12053",
          name: "Algari Alchemist Stone"
        }
      ],
      b: [
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=190958/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/item=219314/ara-kara-sacbrood=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/item=219317/harvesters-edict?bonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/item=238386/void-touched-fragment?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        }
      ],
      c: [
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/item=238390/soulbreakers-sigil?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "190652",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/item=190652/ticking-sack-of-terror?bonus=657:12052:5877:10390:12361:12053",
          name: "Ticking Sack of Terror"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/item=242867/automatic-footbomb-dispenser0?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        }
      ],
      d: [
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/item=246945/incorporeal-essence-gorger?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/item=246825/chaotic-nethergate?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        },
        {
          id: "246344",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_qirajidol_onyx.jpg",
          href: "https://www.wowhead.com/item=246344/cursed-stone-idol=657:12052:5877:10390:12361:12053",
          name: "Cursed Stone Idol"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/item=242399/screams-of-a-forgotten-sky?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/item=242403/perfidious-projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        }
      ],
      e: [],
      f: []
    }
  },
  {
    name: "Elemental",
    tierList: {
      s: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/item=242402?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242392",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_intdps_ancientkareshirelic.jpg",
          href: "https://www.wowhead.com/item=242392?bonus=7981:12052:5877:12361:12053",
          name: "Diamantine Voidcore"
        },
        {
          id: "242497",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_devourersmallmount_light.jpg",
          href: "https://www.wowhead.com/item=242497?bonus=657:12052:5877:10390:12361:12053",
          name: "Azhiccaran Parapodia"
        }
      ],
      a: [
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=190958?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/item=242494?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/item=219312?bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/item=219314?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        }
      ],
      b: [
        {
          id: "178826",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_nightseye_01.jpg",
          href: "https://www.wowhead.com/item=178826?bonus=657:12052:5877:10390:12361:12053",
          name: "Sunblood Amethyst"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/item=242395?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/item=242403?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816?bonus=9627:12053:12050:12053",
          name: "Algari Alchemist Stone"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/item=238390?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/item=246945?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        }
      ],
      c: [],
      d: [
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/item=242399?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/item=246939?bonus=657:12042:5910:12355",
          name: "Essence-Hunter's Eyeglass"
        }
      ],
      e: [],
      f: [
        {
          id: "242398",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_soulbinderbossinttrinket.jpg",
          href: "https://www.wowhead.com/item=242398?bonus=7981:12052:5877:12361:12053",
          name: "Naazindhri's Mystic Lash"
        },
        {
          id: "185846",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_paperpackage01b.jpg",
          href: "https://www.wowhead.com/item=185846?bonus=657:12052:5877:10390:12361:12053",
          name: "Miniscule Mailemental in an Envelope"
        }
      ]
    }
  },
  {
    name: "Enhancement",
    tierList: {
      s: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "232541",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_blackhand_attachedslagbombs.jpg",
          href: "https://www.wowhead.com/item=232541/improvised-seaforium-pacemaker?bonus=657:12052:5877:10390:12361:12053",
          name: "Improvised Seaforium Pacemaker"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        }
      ],
      a: [
        {
          id: "185818",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185818/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242396/unyielding-netherprism?bonus=657:12052:5877:10390:12361:12053",
          name: "Unyielding Netherprism"
        },
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219314/ara-kara-sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219312/empowering-crystal-of-anubikkaj?bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        }
      ],
      b: [
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246945/incorporeal-essence-gorger?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-sky=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "242495",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_nightsaberclaw_mana.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242495/incorporeal-warpclaw?bonus=657:12052:5877:10390:12361:12053",
          name: "Incorporeal Warpclaw"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238386/void-touched-fragment?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        }
      ],
      c: [
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219317/harvesters-edict?bonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238390/soulbreakers-sigil?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "240172",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_enggizmos_16.jpg",
          href: "https://www.wowhead.com/ptr-2/item=240172/depleted-kareshi-battery?bonus=657:12042:5910:12355",
          name: "Depleted K'areshi Battery"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242867/automatic-footbomb-dispenser?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        }
      ],
      d: [
        {
          id: "190652",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/ptr-2/item=190652/ticking-sack-of-terror?bonus=657:12052:5877:10390:12361:12053",
          name: "Ticking Sack of Terror"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "246944",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246944/mind-fracturing-odium?bonus=7981:12052:5877:12361:12053",
          name: "Mind-Fracturing Odium"
        },
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246825/chaotic-nethergate?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        }
      ],
      e: [],
      f: []
    }
  },
  {
    name: "Restoration",
    tierList: {
      s: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "190958",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/ptr-2/item=190958/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        }
      ],
      a: [
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219314/ara-kara-sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219312/empowering-crystal-of-anubikkaj?bonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "242392",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_intdps_ancientkareshirelic.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242392/diamantine-voidcore?bonus=7981:12052:5877:12361:12053",
          name: "Diamantine Voidcore"
        },
        {
          id: "242393",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_astralspinneret.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242393/loomithars-living-silk?bonus=7981:12052:5877:12361:12053",
          name: "Loom'ithar's Living Silk"
        }
      ],
      b: [
        {
          id: "246947",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_trinket6oih_lanternb3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246947/twisted-mana-sprite?bonus=657:12042:5910:12355",
          name: "Twisted Mana Sprite"
        },
        {
          id: "185845",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_7_0raid_trinket_09a.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185845/first-class-healing-distributor?bonus=657:12052:5877:10390:12361:12053",
          name: "First Class Healing Distributor"
        },
        {
          id: "232542",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_111_healraydrone_blackwater.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232542/darkfuse-medichopper?bonus=657:12052:5877:10390:12361:12053",
          name: "Darkfuse Medichopper"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242494/lily-of-the-eternal-weave?bonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        },
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=210816/algari-alchemist-stone?bonus=9627:12053:12050:12053",
          name: "Algari Alchemist Stone"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        }
      ],
      c: [
        {
          id: "246939",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/creatureportrait_sc_eyeofacherus_02.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246939/essence-hunters-eyeglass?bonus=657:12042:5910:12355",
          name: "Essence-Hunter's Eyeglass"
        },
        {
          id: "246940",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_mechagnome_powercell_full.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246940/manaforged-aethercell?bonus=657:12042:5910:12355",
          name: "Manaforged Aethercell"
        }
      ],
      d: [],
      e: [],
      f: [
        {
          id: "178826",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_nightseye_01.jpg",
          href: "https://www.wowhead.com/ptr-2/item=178826/sunblood-amethyst?bonus=657:12052:5877:10390:12361:12053",
          name: "Sunblood Amethyst"
        },
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246825/chaotic-nethergate?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        }
      ]
    }
  },
  {
    name: "Affliction",
    tierList: {
      s: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forgebonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antennabonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242497",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_devourersmallmount_light.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242497/azhiccaran-parapodiabonus=657:12052:5877:10390:12361:12053",
          name: "Azhiccaran Parapodia"
        }
      ],
      a: [
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory?bonus=11996:10390:6652:3170:10255&class=9&ilvl=678&spec=266bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219312/empowering-crystal-of-anubikkajbonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        }
      ],
      b: [
        {
          id: "185818",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=185818/soleahs-secret-techniquebonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242494/lily-of-the-eternal-weavebonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        }
      ],
      c: [
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219317/harvesters-edictbonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "232545",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_engineering_90_lightningbox.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232545/gigazaps-zap-capbonus=657:12052:5877:10390:12361:12053",
          name: "Gigazap's Zap-Cap"
        }
      ],
      d: [
        {
          id: "219313",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_bell_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219313/mereldars-tollbonus=657:12052:5877:10390:12361:12053",
          name: "Mereldar's Toll"
        },
        {
          id: "242398",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_soulbinderbossinttrinket.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242398/naazindhris-mystic-lashbonus=7981:12052:5877:12361:12053",
          name: "Naazindhri's Mystic Lash"
        }
      ],
      e: [],
      f: [
        {
          id: "219310",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219310/bursting-lightshardbonus=657:12052:5877:10390:12361:12053",
          name: "Bursting Lightshard"
        },
        {
          id: "178826",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_nightseye_01.jpg",
          href: "https://www.wowhead.com/ptr-2/item=178826/sunblood-amethystbonus=657:12052:5877:10390:12361:12053",
          name: "Sunblood Amethyst"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projectorbonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-skybonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        }
      ]
    }
  },
  {
    name: "Demonology",
    tierList: {
      s: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antennabonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242392",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_intdps_ancientkareshirelic.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242392/diamantine-voidcorebonus=7981:12052:5877:12361:12053",
          name: "Diamantine Voidcore"
        }
      ],
      a: [
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forgebonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242497",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_devourersmallmount_light.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242497/azhiccaran-parapodiabonus=657:12052:5877:10390:12361:12053",
          name: "Azhiccaran Parapodia"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory?bonus=11996:10390:6652:3170:10255&class=9&ilvl=678&spec=266bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        }
      ],
      b: [
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219314/ara-kara-sacbroodbonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242494/lily-of-the-eternal-weavebonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        }
      ],
      c: [
        {
          id: "219312",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color5.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219312/empowering-crystal-of-anubikkajbonus=657:12052:5877:10390:12361:12053",
          name: "Empowering Crystal of Anub'ikkaj"
        },
        {
          id: "232545",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_engineering_90_lightningbox.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232545/gigazaps-zap-capbonus=657:12052:5877:10390:12361:12053",
          name: "Gigazap's Zap-Cap"
        },
        {
          id: "178826",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_nightseye_01.jpg",
          href: "https://www.wowhead.com/ptr-2/item=178826/sunblood-amethystbonus=657:12052:5877:10390:12361:12053",
          name: "Sunblood Amethyst"
        }
      ],
      d: [
        {
          id: "185818",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=185818/soleahs-secret-techniquebonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219317/harvesters-edictbonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "242398",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_soulbinderbossinttrinket.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242398/naazindhris-mystic-lashbonus=7981:12052:5877:12361:12053",
          name: "Naazindhri's Mystic Lash"
        }
      ],
      e: [],
      f: [
        {
          id: "219313",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_bell_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219313/mereldars-tollbonus=657:12052:5877:10390:12361:12053",
          name: "Mereldar's Toll"
        },
        {
          id: "219310",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219310/bursting-lightshardbonus=657:12052:5877:10390:12361:12053",
          name: "Bursting Lightshard"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projectorbonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-skybonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        }
      ]
    }
  },
  {
    name: "Destruction",
    tierList: {
      s: [
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antennabonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forgebonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242497",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_devourersmallmount_light.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242497/azhiccaran-parapodiabonus=657:12052:5877:10390:12361:12053",
          name: "Azhiccaran Parapodia"
        }
      ],
      a: [
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory?bonus=11996:10390:6652:3170:10255&class=9&ilvl=678&spec=266bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        }
      ],
      b: [
        {
          id: "185818",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/item=185818/soleahs-secret-techniquebonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "242494",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_herb_karesh.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242494/lily-of-the-eternal-weavebonus=657:12052:5877:10390:12361:12053",
          name: "Lily of the Eternal Weave"
        }
      ],
      c: [
        {
          id: "219317",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_dungeon_oldgodstatuepiece_purple.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219317/harvesters-edictbonus=657:12052:5877:10390:12361:12053",
          name: "Harvester's Edict"
        },
        {
          id: "232545",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_engineering_90_lightningbox.jpg",
          href: "https://www.wowhead.com/ptr-2/item=232545/gigazaps-zap-capbonus=657:12052:5877:10390:12361:12053",
          name: "Gigazap's Zap-Cap"
        }
      ],
      d: [
        {
          id: "219313",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_bell_color1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219313/mereldars-tollbonus=657:12052:5877:10390:12361:12053",
          name: "Mereldar's Toll"
        },
        {
          id: "242398",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_soulbinderbossinttrinket.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242398/naazindhris-mystic-lashbonus=7981:12052:5877:12361:12053",
          name: "Naazindhri's Mystic Lash"
        }
      ],
      e: [],
      f: [
        {
          id: "219310",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_fragment_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219310/bursting-lightshardbonus=657:12052:5877:10390:12361:12053",
          name: "Bursting Lightshard"
        },
        {
          id: "178826",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelcrafting_nightseye_01.jpg",
          href: "https://www.wowhead.com/ptr-2/item=178826/sunblood-amethystbonus=657:12052:5877:10390:12361:12053",
          name: "Sunblood Amethyst"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projectorbonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-skybonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        }
      ]
    }
  },
  {
    name: "Arms",
    tierList: {
      s: [],
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
      f: []
    }
  },
  {
    name: "Fury",
    tierList: {
      s: [],
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
      f: []
    }
  },
  {
    name: "Protection",
    tierList: {
      s: [
        {
          id: "219309",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_7xp_inscription_talenttome01.jpg",
          href: "https://www.wowhead.com/item=219309/tome-of-lights-devotion?bonus=657:12052:5877:10390:12361:12053",
          name: "Tome of Light's Devotion"
        },
        {
          id: "242401",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_manaforgetanktrinket3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242401/brand-of-ceaseless-ire?bonus=7981:12052:5877:12361:12053",
          name: "Brand of Ceaseless Ire"
        },
        {
          id: "232541",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/ability_blackhand_attachedslagbombs.jpg",
          href: "https://www.wowhead.com/item=232541/improvised-seaforium-pacemaker?bonus=657:12052:5877:10390:12361:12053",
          name: "Improvised Seaforium Pacemaker"
        }
      ],
      a: [
        {
          id: "219314",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_raid_mercurialegg_red.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219314/ara-kara-sacbrood?bonus=657:12052:5877:10390:12361:12053",
          name: "Ara-Kara Sacbrood"
        },
        {
          id: "242395",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_silkwormsantenna.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242395/astral-antenna?bonus=7981:12052:5877:12361:12053",
          name: "Astral Antenna"
        },
        {
          id: "242396",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_voidprism.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242396/unyielding-netherprism?bonus=7981:12052:5877:12361:12053",
          name: "Unyielding Netherprism"
        },
        {
          id: "185818",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_60pvp_trinket1d.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185818/soleahs-secret-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "So'leah's Secret Technique"
        },
        {
          id: "246344",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_qirajidol_onyx.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246344/cursed-stone-idol?bonus=657:12052:5877:10390:12361:12053",
          name: "Cursed Stone Idol"
        },
        {
          id: "246945",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_throwingknife_06.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246945/incorporeal-essence-gorger?bonus=657:12042:5910:12355",
          name: "Incorporeal Essence-Gorger"
        },
        {
          id: "242394",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_obliterationcannon.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242394/eradicating-arcanocore?bonus=7981:12052:5877:12361:12053",
          name: "Eradicating Arcanocore"
        }
      ],
      b: [
        {
          id: "242404",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_omnidpstrinket.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242404/all-devouring-nucleus?bonus=7981:12052:5877:12361:12053",
          name: "All-Devouring Nucleus"
        },
        {
          id: "232543",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_legion_goomolasses_pool.jpg",
          href: "https://www.wowhead.com/item=232543/ringing-ritual-mud?bonus=657:12052:5877:10390:12361:12053",
          name: "Ringing Ritual Mud"
        },
        {
          id: "242399",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_blobofswirlingvoid_terra.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242399/screams-of-a-forgotten-sky?bonus=7981:12052:5877:12361:12053",
          name: "Screams of a Forgotten Sky"
        },
        {
          id: "219308",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_arathordungeon_signet_color1.jpg",
          href: "https://www.wowhead.com/item=219308/signet-of-the-priory?bonus=657:12052:5877:10390:12361:12053",
          name: "Signet of the Priory"
        },
        {
          id: "242402",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_trinkettechnomancer_ritualengine.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242402/arazs-ritual-forge?bonus=7981:12052:5877:12361:12053",
          name: "Araz's Ritual Forge"
        },
        {
          id: "242391",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_raidtrinkets_manaforge_tanktrinket1.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242391/soulbinders-embrace?bonus=7981:12052:5877:12361:12053",
          name: "Soulbinder's Embrace"
        },
        {
          id: "242403",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_11_0_etherealraid_communicator_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242403/perfidious-projector?bonus=7981:12052:5877:12361:12053",
          name: "Perfidious Projector"
        },
        {
          id: "246941",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_112_arcane_buff.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246941/symbiotic-ethergauze?bonus=657:12042:5910:12355",
          name: "Symbiotic Ethergauze"
        }
      ],
      c: [
        {
          id: "210816",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/item=210816/algari-alchemist-stone?bonus=7981:12052:5877:12361:12053",
          name: "Algari Alchemist Stone"
        },
        {
          id: "219316",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_organmass_color2.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219316/ceaseless-swarmgland?bonus=657:12052:5877:10390:12361:12053",
          name: "Ceaseless Swarmgland"
        },
        {
          id: "190652",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bag_felclothbag.jpg",
          href: "https://www.wowhead.com/item=190652/ticking-sack-of-terror?bonus=657:12052:5877:10390:12361:12053",
          name: "Ticking Sack of Terror"
        },
        {
          id: "246944",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/spell_nzinsanity_panicattack.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246944/mind-fracturing-odium?bonus=657:12042:5910:12355",
          name: "Mind-Fracturing Odium"
        },
        {
          id: "219311",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color4.jpg",
          href: "https://www.wowhead.com/ptr-2/item=219311/void-pactstone?bonus=657:12052:5877:10390:12361:12053",
          name: "Void Pactstone"
        },
        {
          id: "246824",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/item_icecrownnecklaceb.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246824/shadowguards-twisted-harvester?bonus=657:12042:5910:12355",
          name: "Shadowguard's Twisted Harvester"
        },
        {
          id: "240213",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_ancient_mana.jpg",
          href: "https://www.wowhead.com/ptr-2/item=240213/veiling-mana-shroud?bonus=657:12042:5910:12355",
          name: "Veiling Mana Shroud"
        },
        {
          id: "242495",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_nightsaberclaw_mana.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242495/incorporeal-warpclaw?bonus=657:12052:5877:10390:12361:12053",
          name: "Incorporeal Warpclaw"
        },
        {
          id: "238386",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_enchant_voidcrystal.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238386/void-touched-fragment?bonus=657:12042:5910:12355",
          name: "Void-Touched Fragment"
        }
      ],
      d: [
        {
          id: "238390",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg",
          href: "https://www.wowhead.com/ptr-2/item=238390/soulbreakers-sigil?bonus=657:12042:5910:12355",
          name: "Soulbreaker's Sigil"
        },
        {
          id: "185836",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_profession_book_enchanting.jpg",
          href: "https://www.wowhead.com/ptr-2/item=185836/codex-of-the-first-technique?bonus=657:12052:5877:10390:12361:12053",
          name: "Codex of the First Technique"
        }
      ],
      e: [],
      f: [
        {
          id: "246825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_nullstone_void.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246825/chaotic-nethergate?bonus=657:12042:5910:12355",
          name: "Chaotic Nethergate"
        },
        {
          id: "246947",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_trinket6oih_lanternb3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=246947/twisted-mana-sprite?bonus=657:12042:5910:12355",
          name: "Twisted Mana Sprite"
        },
        {
          id: "242867",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_10_engineering2_boxofbombs_dangerous_color3.jpg",
          href: "https://www.wowhead.com/ptr-2/item=242867/automatic-footbomb-dispenser?bonus=657:12042:5910:12355",
          name: "Automatic Footbomb Dispenser"
        },
        {
          id: "178825",
          iconUrl: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_gem_bloodstone_01.jpg",
          href: "https://www.wowhead.com/ptr-2/item=178825/pulsating-stoneheart?bonus=657:12052:5877:10390:12361:12053",
          name: "Pulsating Stoneheart"
        }
      ]
    }
  }
];
async function load() {
  return {
    trinketData
  };
}
export {
  load
};
