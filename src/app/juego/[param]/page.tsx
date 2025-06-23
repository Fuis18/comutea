import { use } from "react";
import { mod } from "../../../data/bigdata";

export default function JuegoPage({
	params,
}: {
	params: Promise<{ param: string }>;
}) {
	const { param } = use(params);

	let game = 0;

	if (param == "visual") game = 1;
	else if (param == "auditiva") game = 2;
	else if (param == "tactil") game = 3;
	else if (param == "emociones") game = 4;

	const play = mod[game];

	return (
		<main className="p-6 max-w-xl mx-auto">
			<h2 className="text-xl font-bold mb-4">{play.name}</h2>

			<div className="bg-white p-4 rounded shadow mb-6">
				<p className="text-gray-700 text-lg">Progreso actual:</p>
				<div className="w-full bg-gray-200 rounded-full h-4 mt-2">
					<div
						className="bg-blue-500 h-4 rounded-full"
						style={{ width: `${play.score}%` }}
					></div>
				</div>
				<p className="text-sm text-gray-600 mt-2">
					Puntuación: {play.score}%
				</p>
			</div>

			<div className="flex justify-between gap-2">
				<button className="flex-1 bg-green-500 text-white py-2 rounded">
					Continuar
				</button>
				<button className="flex-1 bg-yellow-500 text-white py-2 rounded">
					Pausar
				</button>
				<button className="flex-1 bg-red-500 text-white py-2 rounded">
					Terminar
				</button>
			</div>
		</main>
	);
}
