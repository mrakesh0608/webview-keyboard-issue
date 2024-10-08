import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Viewport } from "next";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	minimumScale: 1,
};

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("min-h-screen bg-background font-sans antialiased bg-green-300", fontSans.variable)}>{children}</body>
		</html>
	);
}
