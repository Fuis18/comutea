import "./globals.css";
import Header from "../components/Header";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className="min-h-screen bg-gray-100 text-gray-900">
				<Header />
				{children}
			</body>
		</html>
	);
}
