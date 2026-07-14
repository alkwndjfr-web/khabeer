'use client';
export const dynamic = 'force-dynamic';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TechPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login');
    if (status === 'authenticated') {
      fetch('/api/orders/assigned')
        .then(res => res.json())
        .then(data => setOrders(Array.isArray(data) ? data : []))
        .catch(() => {});
    }
  }, [status, router]);

  if (status === 'loading') return <p className="p-6">جاري التحميل...</p>;
  if (status === 'unauthenticated') return null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">مهام الفني</h1>
      <p>مرحباً {session?.user?.name}</p>
      <div className="grid gap-3 mt-4">
        {orders.length === 0 ? <p>لا توجد مهام مسندة لك</p> : 
          orders.map(o => (
            <div key={o.id} className="border p-3 rounded">
              <p><b>الخدمة:</b> {o.service}</p>
              <p><b>العنوان:</b> {o.address}</p>
              <p><b>الهاتف:</b> {o.phone}</p>
              <p><b>الحالة:</b> {o.status}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
