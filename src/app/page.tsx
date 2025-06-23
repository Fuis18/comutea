import Link from "next/link";
import Image from "next/image";
import { mod } from "../data/bigdata";

export default function HomePage() {
	return (
		<main className="p-4">
			<h2 className="text-xl font-bold mb-4">NeuroCubo Sensorial</h2>
			<p className="mb-6">
				Selecciona un módulo para trabajar una habilidad específica con
				el niño.
			</p>
			<div className="game-container">
				{mod.map((game, index) => (
					<div key={index} className="games">
						<Image
							src={game.img}
							alt={game.name}
							width={130}
							height={150}
						/>
						<h3 className="text-center mt-2 font-semibold">
							{game.name}
						</h3>
						<Link
							href={`/${game.link}`}
							className="block text-center mt-2 text-blue-600"
						>
							Jugar
						</Link>
					</div>
				))}
			</div>
		</main>
	);
}
