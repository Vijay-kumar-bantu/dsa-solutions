import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { CompletionProvider } from "@/contexts/CompletionContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
	title: "DSA solutions",
	description: "A website for DSA problems",
	applicationName: "DSA solutions",
	authors: {
		name: "Vijay Kumar Bantu",
		url: "https://www.linkedin.com/in/vijay-kumar-bantu/",
	},
	keywords: [
		"DSA",
		"solutions",
		"problems",
		"data structures",
		"algorithms",
		"Blind75",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="min-h-screen bg-gray-50 dark:bg-gray-900">
				<AuthProvider>
					<CompletionProvider>
						<Header />
						<main>{children}</main>
						<Footer />
					</CompletionProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
