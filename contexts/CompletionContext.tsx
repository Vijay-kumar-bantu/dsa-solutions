"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import handleCompletion from "@/actions/handleCompletion";

interface CompletionContextType {
	completedProblems: Set<string>;
	toggleCompletion: (problemId: string) => void;
	isCompleted: (problemId: string) => boolean;
}

const CompletionContext = createContext<CompletionContextType | undefined>(
	undefined
);

export const CompletionProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const { user, setLoading } = useAuth();

	const [completedProblems, setCompletedProblems] = useState<Set<string>>(
		new Set()
	);

	useEffect(() => {
		setCompletedProblems(new Set(user?.completedProblems));
	}, [user?.completedProblems]);

	const toggleCompletion = (problemId: string) => {
		setLoading(true);
		completedProblems.has(problemId)
			? handleCompletion(user?.id || "", problemId, "remove").then(() => {
					setCompletedProblems((prev) => {
						const newSet = new Set(prev);
						newSet.delete(problemId);
						return newSet;
					});
					setLoading(false);
			  })
			: handleCompletion(user?.id || "", problemId, "add").then(() => {
					setCompletedProblems((prev) => {
						const newSet = new Set(prev);
						newSet.add(problemId);
						return newSet;
					});
					setLoading(false);
			  });
	};

	const isCompleted = (problemId: string) => {
		return completedProblems.has(problemId);
	};

	return (
		<CompletionContext.Provider
			value={{ completedProblems, toggleCompletion, isCompleted }}
		>
			{children}
		</CompletionContext.Provider>
	);
};

export const useCompletion = () => {
	const context = useContext(CompletionContext);
	if (context === undefined) {
		throw new Error("useCompletion must be used within a CompletionProvider");
	}
	return context;
};
