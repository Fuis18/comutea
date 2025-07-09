// src/app/reportes/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getModulos, Modulo } from "@/data/bigdata";

export default function ReportesPage() {
	const [mods, setMods] = useState<Modulo[]>([]);

	useEffect(() => {
		setMods(getModulos());
	}, []);

	return (
		<main className="p-4">
			<h2 className="text-xl font-bold mb-4">Reportes</h2>
			<div className="game-container">
				{mods.map((m, i) => (
					<div key={i} className="games">
						<Image
							src={m.img}
							alt={m.name}
							width={130}
							height={150}
						/>
						<h3 className="text-center mt-2 font-semibold">
							{m.name}
						</h3>
						<p className="text-center text-gray-600 text-2xl">
							{m.score}%
						</p>
					</div>
				))}
			</div>
		</main>
	);
}
