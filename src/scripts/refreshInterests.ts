const refreshButton = document.getElementById("interests-btn");
const refreshSVG = document.getElementById("refresh-interest-svg");
const thinkingInterest = document.getElementById("thinking-interest");
const listeningInterest = document.getElementById("listening-interest");
const tinkeringInterest = document.getElementById("tinkering-interest");

type TechInterest = {
	name: string;
	url: string;
};

const thoughts: string[] = [
	"minimalist shoes",
	"stoicism",
	"homebrewing",
	"the impact of ai",
	"late-stage capitalism",
	"indie game development",
	"efficient urban design",
	"yoga routines",
	"baking bread",
	"traveling",
	"permaculture",
	"erasable pens",
	"cold-brewing tea",
	"cornmeal pancakes",
];
const music: string[] = [
	"joji",
	"chappell roan",
	"ashnikko",
	"lilyisthatyou",
	"jae stephens",
	"foo fighters",
	"blink 182",
	"nirvana",
	"ac/dc",
	"sabrina carpenter",
	"heilung",
	"san holo",
	"droeloe",
	"ookay",
];
const tech: TechInterest[] = [
	{
		name: "deno fresh",
		url: "https://fresh.deno.dev/",
	},
	{
		name: "deno lume",
		url: "https://lume.land/",
	},
	{
		name: "deno",
		url: "https://deno.com",
	},
	{
		name: "htmx",
		url: "https://htmx.org/",
	},
	{
		name: "affinity designer",
		url: "https://affinity.serif.com/en-us/designer/ipad/",
	},
	{ name: "aseprite", url: "https://www.aseprite.org" },
	{ name: "blender", url: "https://www.blender.org" },
	{
		name: "svelte",
		url: "https://svelte.dev/",
	},
	{
		name: "supabase",
		url: "https://supabase.com",
	},
	{
		name: "godot",
		url: "https://godotengine.org",
	},
];

const randomIntFromInterval = (min: number, max: number) => {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const pickRandomFromArray = <T>(arr: T[]) => {
	const ind = randomIntFromInterval(0, arr.length - 1);
	return arr[ind];
};

refreshButton?.addEventListener("click", () => {
	refreshSVG?.classList.add("spin-svg");

	applyInterests();
	removeAnimationFromElement(thinkingInterest);
	removeAnimationFromElement(listeningInterest);
	removeAnimationFromElement(tinkeringInterest);

	setTimeout(() => {
		if (refreshSVG?.classList.contains("spin-svg")) {
			refreshSVG?.classList.remove("spin-svg");
		}
	}, 400);
});

const applyInterests = () => {
	if (thinkingInterest) {
		thinkingInterest.innerText = pickRandomFromArray(thoughts);
		thinkingInterest.classList.add("animate-slideIn");
		thinkingInterest.classList.add("opacity-0");
	}
	if (listeningInterest) {
		listeningInterest.innerText = pickRandomFromArray(music);
		listeningInterest.classList.add("animate-slideIn");
		listeningInterest.classList.add("opacity-0");
	}
	if (tinkeringInterest) {
		const { name, url } = pickRandomFromArray(tech);
		tinkeringInterest.classList.add("animate-slideIn");
		tinkeringInterest.classList.add("opacity-0");
		tinkeringInterest.innerHTML = `
      <a target="_blank" rel="noreferrer" class="hover:text-secondary underline decoration-secondary group-hover:decoration-2 underline-offset-4" href="${url}">${name}</a>
      <svg class="inline group-hover:translate-x-1 group-hover:scale-125 duration-200 ease-linear transition-transform" width="14" height="14" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 15.25V6.75H8.75">
        </path>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 7L6.75 17.25">
        </path>
      </svg>`;
	}
};

const removeAnimationFromElement = (ele: HTMLElement | null) => {
	setTimeout(() => {
		if (
			ele?.classList.contains("animate-slideIn") ||
			ele?.classList.contains("opacity-0")
		) {
			ele.classList.remove("opacity-0");
			ele.classList.remove("animate-slideIn");
			ele.classList.add("opacity-1");
		}
	}, 250);
};
