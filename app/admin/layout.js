"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DashboardShell from '../../components/DashboardShell';

export default function AdminLayout({ children }) {
  const sessionResult = useSession();
  const session = sessionResult ? sessionResult.data : null;
  const status = sessionResult ? sessionResult.status : "loading";
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="p-6 text-center">جاري التحميل...</div>;
  }

  return <DashboardShell>{children}</DashboardShell>;
}
