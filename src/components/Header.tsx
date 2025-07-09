import Link from "next/link";

export default function Header() {
	return (
		<header>
			<nav className="nav__link">
				<Link className="nav__cell" href="/">
					Juegos
				</Link>
				<Link className="nav__cell" href="/reportes">
					Reportes
				</Link>
			</nav>
			<nav className="nav__icon">
				<Link className="nav__cell" href="/login">
					👤
				</Link>
				<Link className="nav__cell" href="/configuracion">
					⚙️
				</Link>
			</nav>
		</header>
	);
}
