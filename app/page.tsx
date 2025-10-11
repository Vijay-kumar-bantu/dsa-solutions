"use client";

import Dashboard from "@/components/pages/Dashboard";
import LandingPage from "@/components/pages/LandingPage";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {

  const { isAuthenticated } = useAuth();


  if (isAuthenticated) {
    return <Dashboard />;
  }

  return <LandingPage />
}
