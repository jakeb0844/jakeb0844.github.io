<script>
	export let stats;

	/** @type {Record<string, string>} */
	const operatorTooltips = {
		'>': 'Greater than',
		'<': 'Less than',
		'=': 'Equal to',
		'>=': 'Greater than or equal to',
		'<=': 'Less than or equal to',
		'>>': 'Superior than',
	};

	/** @type {Record<string, {text: string, bg: string, glow?: string}>} */
	const opStyles = {
		'>>': { text: 'text-wow-green', bg: 'bg-wow-green/10', glow: 'shadow-glow-green' },
		'>=': { text: 'text-wow-gold', bg: 'bg-wow-gold/10' },
		'>': { text: 'text-wow-gold', bg: 'bg-wow-gold/10' },
		'=': { text: 'text-wow-teal', bg: 'bg-wow-teal/10' },
		'<=': { text: 'text-wow-red', bg: 'bg-wow-red/10', glow: 'shadow-glow-red' },
		'<': { text: 'text-wow-red', bg: 'bg-wow-red/10', glow: 'shadow-glow-red' }
	};

	// Wowhead-inspired stat colors
	/** @type {Record<string, string>} */
	const statColors = {
		Strength: 'text-wow-red',
		Agility: 'text-emerald-500',
		Intellect: 'text-blue-500',
		Stamina: 'text-yellow-500',
		Haste: 'text-emerald-500',
		Mastery: 'text-purple-500',
		Crit: 'text-orange-500',
		'Critical Strike': 'text-orange-500',
		Versatility: 'text-slate-400'
	};

	/** @param {string} name */
	const getStatClass = (name) => {
		return statColors[name] || 'text-wow-lightgold';
	};

	/** @param {string | undefined} op */
	const getOpBadge = (op) => {
		return 'text-xs font-semibold text-slate-400';
	};
</script>

<div>
	<h1 class="text-2xl font-bold text-wow-navy">Stats</h1>
	<div class="flex flex-wrap gap-2 items-center">
		{#each stats as stat}
			<div class="flex gap-2 items-center">
				<h2 class={getStatClass(stat.name)}>{stat.name}</h2>
				{#if stat.op}
					<p class={getOpBadge(stat.op)} title={operatorTooltips[stat.op || '']}>{stat.op}</p>
				{/if}
			</div>
		{/each}
	</div>
</div>
