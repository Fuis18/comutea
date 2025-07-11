// src/app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getModulos, Modulo } from "@/data/bigdata";

export default function HomePage() {
	const [mods, setMods] = useState<Modulo[]>([]);

	useEffect(() => {
		setMods(getModulos());
	}, []);

	return (
		<main className="p-6 max-w-3xl mx-auto">
			<h1 className="text-2xl font-extrabold mb-4">COMUNIKIDS</h1>
			<section>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{mods.map((game, idx) => (
						<Link href={`/${game.link}`} key={idx}>
							<div className="bg-white p-4 rounded-2xl shadow flex justify-center items-center flex-col hover:bg-gray-50">
								<Image
									src={game.img}
									alt={game.name}
									width={120}
									height={120}
								/>
								<h3 className="text-lg font-medium mt-3">
									{game.name}
								</h3>
							</div>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}
