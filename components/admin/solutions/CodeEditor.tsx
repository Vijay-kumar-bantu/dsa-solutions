"use client";

interface CodeEditorProps {
	value: string;
	onChange: (value: string) => void;
	language: string;
}

export const CodeEditor = ({ value, onChange }: CodeEditorProps) => {
	return (
		<textarea
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className="w-full h-48 px-3 py-2 font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
			spellCheck={false}
		/>
	);
};
