"use client";

import addUser from "@/actions/addUser";
import checkUser from "@/actions/checkUser";
import decodToken from "@/actions/decodToken";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface User {
	id: string;
	username: string;
	email: string;
	isAdmin: boolean;
	completedProblems?: string[];
}

interface AuthContextType {
	user: User | null;
	login: (email: string, password: string) => Promise<void>;
	register: (
		username: string,
		email: string,
		password: string
	) => Promise<void>;
	logout: () => void;
	isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);
	const token = global.document?.cookie?.split("token=")[1];

	//setting user data after refresh
	const gettingData = async () => {
		if (!!token) {
			const user: any = await decodToken(token);
			if (!!user?.id) {
				setUser({
					id: user?.id,
					username: user?.username,
					email: user?.email,
					isAdmin: user?.role === "admin",
					completedProblems: user?.completedProblems?.map(
						(problem: any) => problem.id
					),
				});
			}
		}
	};

	useEffect(() => {
		gettingData();
	}, []);

	const login = async (email: string, password: string) => {
		const data = await checkUser(email, password);

		if (typeof data == "string") {
			throw new Error(data);
		} else {
			const { user, token } = data;
			global.document.cookie = `token=${token};`;
			setUser({
				id: user.id,
				username: user.username,
				email: user.email,
				isAdmin: user.role === "admin",
				completedProblems: user.completedProblems.map((problem) => problem.id),
			});
		}
	};

	const register = async (
		username: string,
		email: string,
		password: string
	) => {
		if (await addUser(username, email, password)) {
			alert("User profile created successfully");
		} else {
			throw new Error("something went wrong,Please try again later");
		}
	};

	const logout = () => {
		global.document.cookie = "token=;";
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				register,
				logout,
				isAuthenticated: !!user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
