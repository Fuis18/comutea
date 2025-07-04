// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { mod } from "../data/bigdata";

export default function HomePage() {
	return (
		<main className="p-6 max-w-3xl mx-auto">
			<h1 className="text-2xl font-extrabold mb-4">
				Neurocubo Comunicativo: Desarrollo en Niños con Autismo (3-5
				años)
			</h1>
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-2">
					Resumen del Proyecto
				</h2>
				<p className="text-gray-700 leading-relaxed">
					El objetivo principal es potenciar las capacidades
					comunicativas en preescolares menores de 6 años con autismo
					en un colegio de Castilla, promoviendo inclusión y educación
					de calidad. Se utilizó un enfoque cuantitativo no
					experimental con 27 participantes. Las encuestas midieron
					dimensiones de herramientas digitales y desarrollo
					comunicativo. El 85,2% considera útiles las herramientas
					digitales y el 63% destaca la ampliación del vocabulario
					como habilidad clave.
				</p>
			</section>
			<section>
				<h2 className="text-xl font-semibold mb-2">
					Módulos de Desarrollo
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{mod.map((game, idx) => (
						<div
							key={idx}
							className="bg-white p-4 rounded-2xl shadow flex justify-center items-center flex-col"
						>
							<Image
								src={game.img}
								alt={game.name}
								width={120}
								height={120}
							/>
							<h3 className="text-lg font-medium mt-3">
								{game.name}
							</h3>
							<Link
								href={`/${game.link}`}
								className="block text-center mt-2 py-1 px-4 border rounded-xl hover:bg-gray-100"
							>
								Iniciar
							</Link>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
