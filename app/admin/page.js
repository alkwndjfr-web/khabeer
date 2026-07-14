'use client';
export const dynamic = 'force-dynamic';
import { useEffect, useState } from 'react';
import { buildWhatsAppLink } from '../../lib/whatsapp';

export default function AdminPage() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('/api/orders')
      .then(res => res.json())
      .then(data => setOrders(Array.isArray(data) ? data : []))
      .catch(() => {});
  }, []);

  const filtered = filter === 'all' ? orders : orders.filter((o) => o.status === filter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">لوحة الإدارة</h1>
      <select value={filter} onChange={e => setFilter(e.target.value)} className="border p-2 mb-4 rounded">
        <option value="all">الكل</option>
        <option value="pending">قيد الانتظار</option>
        <option value="assigned">تم التعيين</option>
        <option value="in_progress">قيد التنفيذ</option>
        <option value="completed">مكتمل</option>
        <option value="cancelled">ملغي</option>
      </select>
      <div className="grid gap-4">
        {filtered.map((order) => (
          <div key={order.id} className="border p-4 rounded">
            <p><b>الخدمة:</b> {order.service}</p>
            <p><b>الهاتف:</b> {order.phone}</p>
            <p><b>الحالة:</b> {order.status}</p>
            <a href={buildWhatsAppLink(order.phone, `طلبك ${order.service}`)} target="_blank" className="text-green-600 underline">فتح واتساب</a>
          </div>
        ))}
      </div>
    </div>
  );
}
