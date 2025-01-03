import { useState, useEffect } from "react";

export const useTheme = () => {
	const [theme, setTheme] = useState<"light" | "dark">(
		global.localStorage?.getItem("theme") === "dark" ||
			(global.window?.matchMedia("(prefers-color-scheme: dark)").matches &&
				global.localStorage?.getItem("theme") === null)
			? "dark"
			: "light"
	);

	useEffect(() => {
		const root = global.window.document.documentElement;
		if (theme === "dark") {
			root.classList.add("dark");
			global.localStorage.setItem("theme", "dark");
		} else {
			root.classList.remove("dark");
			global.localStorage.setItem("theme", "light");
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return { theme, toggleTheme };
};
