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
	loading: boolean;
	setLoading: (loading: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(false);
	const token = global.document?.cookie?.split("token=")[1];

	//setting user data after refresh
	const gettingData = async () => {
		if (!!token) {
			setLoading(true);
			const user: any = await decodToken(token);
			if (!!user?.id) {
				setUser({
					id: user?.id,
					username: user?.username,
					email: user?.email,
					isAdmin: user?.role === "admin",
					// eslint-disable-next-line  @typescript-eslint/no-explicit-any
					completedProblems: user?.completedProblems?.map(
						(problem: any) => problem.id
					),
				});
			}
			setLoading(false);
		}
	};

	useEffect(() => {
		gettingData();
	}, []);

	const login = async (email: string, password: string) => {
		setLoading(true);
		const data = await checkUser(email, password);

		if (typeof data == "string") {
			setLoading(false);
			throw new Error(data);
		} else {
			const { user, token } = data;
			global.document.cookie = `token=${token};`;
			setUser({
				id: user.id,
				username: user.username,
				email: user.email,
				isAdmin: user.role === "admin",
				// eslint-disable-next-line  @typescript-eslint/no-explicit-any
				completedProblems: user.completedProblems.map((problem) => problem.id),
			});
			setLoading(false);
		}
	};

	const register = async (
		username: string,
		email: string,
		password: string
	) => {
		setLoading(true);
		if (await addUser(username, email, password)) {
			setLoading(false);
			alert("User profile created successfully");
		} else {
			setLoading(false);
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
				loading,
				setLoading,
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
