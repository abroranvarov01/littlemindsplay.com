import type React from "react"
import type { Metadata } from "next"
// Import playful fonts - Baloo 2 for headings, Poppins for body
import { Baloo_2, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"

const baloo = Baloo_2({
	subsets: ["latin"],
	variable: "--font-baloo",
	weight: ["400", "500", "600", "700", "800"],
})

const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["400", "500", "600", "700"],
})

// Updated metadata for LittleMindsPlay
export const metadata: Metadata = {
	title: "LittleMindsPlay - Educational Toys for Growing Minds",
	description:
		"Educational toys designed to spark curiosity and joy. Safe, eco-friendly toys that help your child play, grow, and discover.",
	referrer: 'unsafe-url',
	icons: {
		icon: "/favicon.ico",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${baloo.variable} ${poppins.variable} font-sans antialiased`}>
				<Header />
				{children}
				<Analytics />
			</body>
		</html>
	)
}
