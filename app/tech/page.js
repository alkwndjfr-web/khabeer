'use client';
export const dynamic = 'force-dynamic';
import { useEffect, useState } from 'react';

export default function TechPage() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('/api/orders/assigned')
      .then(res => res.json())
      .then(data => setOrders(Array.isArray(data) ? data : []))
      .catch(() => {});
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">مهام الفني</h1>
      {orders.map(o => <div key={o.id} className="border p-3 mb-2 rounded">{o.service} - {o.address}</div>)}
    </div>
  );
}
