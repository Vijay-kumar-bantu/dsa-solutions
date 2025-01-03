"use client";

import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { useAuth } from "@/contexts/AuthContext";
import { notFound } from "next/navigation";

export default function AdminPage() {
	const { user, isAuthenticated } = useAuth();

	if (!isAuthenticated || (isAuthenticated && !user?.isAdmin)) {
		return notFound();
	}
	return <AdminDashboard />;
}
