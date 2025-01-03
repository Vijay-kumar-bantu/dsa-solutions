import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy, Check } from "lucide-react";
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";

interface CodeBlockProps {
	code: string;
	language: string;
	onCopy: () => void;
	isCopied: boolean;
	onLanguageChange: (language: string) => void;
	availableLanguages: string[];
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
	code,
	language,
	onCopy,
	isCopied,
	onLanguageChange,
	availableLanguages,
}) => {
	return (
		<div className="relative">
			<div className="flex justify-between items-center mb-2">
				<div className="flex space-x-2">
					{availableLanguages.map((lang) => (
						<button
							key={lang}
							onClick={() => onLanguageChange(lang)}
							className={`px-3 py-1 rounded-md text-sm font-medium transition-colors
                ${
									language === lang
										? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
										: "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
								}`}
						>
							{lang}
						</button>
					))}
				</div>
				<CopyToClipboard text={code} onCopy={onCopy}>
					<button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
						{isCopied ? (
							<Check className="w-5 h-5 text-green-500" />
						) : (
							<Copy className="w-5 h-5 text-gray-500" />
						)}
					</button>
				</CopyToClipboard>
			</div>
			<SyntaxHighlighter
				language={language.toLowerCase()}
				style={atomOneDark}
				className="rounded-lg"
			>
				{code}
			</SyntaxHighlighter>
		</div>
	);
};
