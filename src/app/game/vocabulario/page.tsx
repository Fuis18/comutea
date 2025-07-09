// src/app/juego/vocabulario/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { vocabulario } from "@/data/vocabulario";

const STORAGE_KEY = "vocabLevel";

export default function VocabularioGame() {
	const [level, setLevel] = useState(0);
	const [index, setIndex] = useState(0);
	const [mensaje, setMensaje] = useState("");

	useEffect(() => {
		const stored = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
		setLevel(stored);
	}, []);

	const partidaActual = vocabulario[level] || [];
	const palabraActual = partidaActual[index] || {
		palabra: "",
		imagen: "",
		opciones: [],
	};

	const verificar = (opcion: string) => {
		if (opcion === palabraActual.palabra) {
			setMensaje("¡Muy bien!");
			setTimeout(() => {
				if (index + 1 < partidaActual.length) {
					setIndex(index + 1);
					setMensaje("");
				} else {
					const siguienteNivel = level + 1;
					localStorage.setItem(
						STORAGE_KEY,
						siguienteNivel.toString()
					);
					if (siguienteNivel < vocabulario.length) {
						setLevel(siguienteNivel);
						setIndex(0);
						setMensaje("");
					} else {
						setMensaje("juego_completado");
					}
				}
			}, 1000);
		} else {
			setMensaje("Intenta otra vez");
		}
	};

	const reiniciar = () => {
		localStorage.setItem(STORAGE_KEY, "0");
		setLevel(0);
		setIndex(0);
		setMensaje("");
	};

	if (mensaje === "juego_completado" || level >= vocabulario.length) {
		return (
			<main className="p-4 max-w-md mx-auto text-center">
				<h2 className="text-2xl font-bold text-green-700 mb-4">
					¡Felicidades!
				</h2>
				<p className="mb-6 text-lg">
					Has completado todos los niveles.
				</p>
				<div className="grid gap-4 grid-cols-2">
					<button
						className="inline-block bg-gray-300 py-2 text-gray-800 rounded hover:bg-gray-400 cursor-pointer"
						onClick={() => reiniciar()}
					>
						Reinciar
					</button>
					<Link
						href="/"
						className="inline-block bg-blue-500 py-2 text-white rounded hover:bg-blue-600"
					>
						Volver al inicio
					</Link>
				</div>
			</main>
		);
	}

	return (
		<main className="p-4 max-w-md mx-auto text-center">
			<h2 className="text-xl font-bold mb-2">Nivel {level + 1}</h2>
			<Image
				src={palabraActual.imagen}
				alt={palabraActual.palabra}
				width={200}
				height={200}
				className="mx-auto mb-4"
			/>
			<div className="grid grid-cols-1 gap-2">
				{palabraActual.opciones.map((op, i) => (
					<button
						key={i}
						onClick={() => verificar(op)}
						className="py-2 bg-blue-200 rounded hover:bg-blue-400 transition cursor-pointer"
					>
						{op}
					</button>
				))}
			</div>
			{mensaje === "¡Muy bien!" && (
				<p className="game-mensaje success">{mensaje}</p>
			)}
			{mensaje === "Intenta otra vez" && (
				<p className="game-mensaje error">{mensaje}</p>
			)}
			<Link
				href="/"
				className="inline-block mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
			>
				Volver al inicio
			</Link>
		</main>
	);
}
