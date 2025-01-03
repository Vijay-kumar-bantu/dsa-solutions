import React from "react";
import { Code2 } from "lucide-react";
import { UserMenu } from "./UserMenu";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<Link href="/" className="flex items-center space-x-2">
					<Code2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
					<span className="text-xl font-bold text-gray-900 dark:text-white">
						DSA Solutions
					</span>
				</Link>
				<nav className="flex items-center space-x-6">
					<UserMenu />
				</nav>
			</div>
		</header>
	);
};
