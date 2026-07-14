'use client';
export const dynamic = 'force-dynamic';
import { useEffect, useState } from 'react';

export default function CustomerPage() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('/api/orders/my')
      .then(res => res.json())
      .then(data => setOrders(Array.isArray(data) ? data : []))
      .catch(() => {});
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">طلباتي</h1>
      {orders.map(o => <div key={o.id} className="border p-3 mb-2 rounded">{o.service} - {o.status}</div>)}
    </div>
  );
}
