import { Ubuntu } from "next/font/google";
import "./globals.css";

const inter = Ubuntu({ weight: "300", subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="snap-y snap-mandatory">
			<title>Aditya Kulkarni</title>
			<body className={`${inter.className} overflow-x-hidden`}>{children}</body>
		</html>
	);
}
