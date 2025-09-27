import React from "react";
import Link from "next/link";
import capitalizeString from "@/utils/capitalizeSring";

function BreadCrumbs({ links }: { links: { name: string; href: string }[] }) {
	return (
		<div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
			{links.map((link, index) => {
				const isLast = index === links.length - 1;

				if (isLast) {
					return (
						<span
							key={index}
							className="text-gray-700 dark:text-gray-300 font-medium"
						>
							{capitalizeString(link.name)}
						</span>
					);
				}

				return (
					<span key={index}>
						<Link href={link.href} className="text-blue-500 hover:underline">
							{capitalizeString(link.name)}
						</Link>
						{" / "}
					</span>
				);
			})}
		</div>
	);
}

export default BreadCrumbs;
