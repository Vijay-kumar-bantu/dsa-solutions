import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-600 dark:text-gray-400">
						© {new Date().getFullYear()} DSA Solutions. All rights reserved.
					</p>
					<div className="flex space-x-4 mt-4 md:mt-0">
						<a
							href="https://github.com"
							className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
						>
							<Github className="w-5 h-5" />
						</a>
						<a
							href="https://twitter.com"
							className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
						>
							<Linkedin className="w-5 h-5" />
						</a>
						<a
							href="https://twitter.com"
							className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
						>
							<Twitter className="w-5 h-5" />
						</a>
					</div>
				</div>
				<div>
					<p className="text-gray-600 dark:text-gray-400 text-center">
						<Link href={"/admin"}>Developed By Vijay Kumar Bantu</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};