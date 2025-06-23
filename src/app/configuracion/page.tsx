"use client";
import { useState } from "react";

export default function ConfiguracionPage() {
	const [idioma, setIdioma] = useState("es");
	const [volumen, setVolumen] = useState(50);
	const [modoAccesible, setModoAccesible] = useState(true);

	return (
		<main className="p-4 max-w-xl mx-auto">
			<h2 className="text-xl font-bold mb-4">Configuración</h2>

			<section className="mb-6">
				<label className="block font-semibold mb-1">Idioma:</label>
				<select
					value={idioma}
					onChange={(e) => setIdioma(e.target.value)}
					className="w-full border rounded p-2"
				>
					<option value="es">Español</option>
					<option value="en">Inglés</option>
					<option value="pt">Portugués</option>
				</select>
			</section>

			<section className="mb-6">
				<label className="block font-semibold mb-1">
					Volumen de audio:
				</label>
				<input
					type="range"
					min="0"
					max="100"
					value={volumen}
					onChange={(e) => setVolumen(parseInt(e.target.value))}
					className="w-full"
				/>
				<p className="text-sm text-gray-600">{volumen}%</p>
			</section>

			<section className="mb-6">
				<label className="flex items-center">
					<input
						type="checkbox"
						checked={modoAccesible}
						onChange={(e) => setModoAccesible(e.target.checked)}
						className="mr-2"
					/>
					Activar modo accesible (pictogramas grandes y menos
					estímulos)
				</label>
			</section>
		</main>
	);
}
