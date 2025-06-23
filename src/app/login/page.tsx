import Link from "next/link";

export default function LoginPage() {
	return (
		<div className="flex items-center justify-center h-screen">
			<form className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
				<h1 className="text-xl font-bold mb-4">Iniciar Sesión</h1>
				<input
					type="email"
					placeholder="Correo"
					className="w-full p-2 border rounded mb-3"
				/>
				<input
					type="password"
					placeholder="Contraseña"
					className="w-full p-2 border rounded mb-3"
				/>
				<Link
					href="/"
					className="block text-center bg-blue-500 text-white p-2 rounded"
				>
					Entrar
				</Link>
			</form>
		</div>
	);
}
