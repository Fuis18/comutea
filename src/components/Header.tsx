import Link from "next/link";

export default function Header() {
	return (
		<header>
			<nav className="bg-gray-200">
				<Link href="/">Juegos</Link>
				<Link href="/reportes">Reportes</Link>
			</nav>
			<div className="flex justify-end">
				<Link href="/login" className="px-4 py-1 bg-gray-200">
					👤
				</Link>
				<Link href="/configuracion" className="px-4 py-1 bg-gray-200">
					⚙️
				</Link>
			</div>
		</header>
	);
}
