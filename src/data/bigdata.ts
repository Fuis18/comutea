// src/data/bigdata.ts
export type Modulo = {
	name: string;
	link: string;
	img: string;
	level: number; // nivel alcanzado
	score: number; // % completado
};

const STORAGE_KEY = "vocabLevel";

function getVocabLevel(): number {
	if (typeof window === "undefined") return 0;
	return parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
}

function getVocabScore(level: number): number {
	const totalLevels = 3; // Ajusta según tus niveles
	return Math.round((level / totalLevels) * 100);
}

export function getModulos(): Modulo[] {
	const lvl = getVocabLevel();
	return [
		{
			name: "Ampliación de Vocabulario",
			link: "game/vocabulario",
			img: "/img/titles/vocabulario.png",
			level: lvl,
			score: getVocabScore(lvl),
		},
		{
			name: "Interacción Social",
			link: "game/interaccion",
			img: "/img/titles/interaccion.png",
			level: 5,
			score: 44,
		},
		{
			name: "Comprensión de Emociones",
			link: "game/emociones",
			img: "/img/titles/emociones.png",
			level: 5,
			score: 34,
		},
		{
			name: "Apoyo Pedagógico",
			link: "game/apoyo",
			img: "/img/titles/apoyo.png",
			level: 5,
			score: 82,
		},
	];
}
