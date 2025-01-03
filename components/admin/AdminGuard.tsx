"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AdminGuardProps {
	children: React.ReactNode;
}

export const AdminGuard = ({ children }: AdminGuardProps) => {
	const { user, isAuthenticated } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated) {
			router.push("/");
		}

		if (isAuthenticated && !user?.isAdmin) {
			router.push("/");
		}
	}, [isAuthenticated, router, user?.isAdmin]);

	if (!isAuthenticated) {
		return null;
	}

	return <>{children}</>;
};
