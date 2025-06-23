import Image from "next/image";
import { mod } from "../../data/bigdata";

export default function ReportesPage() {
	return (
		<main className="p-4">
			<h2 className="text-xl font-bold mb-4">Reportes</h2>
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
						<p className="text-center text-gray-600">
							Puntuación: {game.score}
						</p>
					</div>
				))}
			</div>
		</main>
	);
}
