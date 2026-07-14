import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const hashedPassword = await bcrypt.hash('123456', 10)
    const hashedAdminPassword = await bcrypt.hash('Admin@123', 10)

    // 1. مسح القديم
    await prisma.user.deleteMany({})

    // 2. انشاء مدير
    await prisma.user.create({
      data: {
        email: 'admin@khabeer.iq',
        phone: '07700000000',
        password: hashedAdminPassword,
        name: 'المدير العام',
        role: 'ADMIN'
      }
    })

    // 3. انشاء عميل
    await prisma.user.create({
      data: {
        email: 'client@khabeer.iq',
        phone: '07700000000',
        password: hashedPassword,
        name: 'عميل تجريبي',
        role: 'CLIENT'
      }
    })

    // 4. انشاء فني
    await prisma.user.create({
      data: {
        email: 'tech@khabeer.iq',
        phone: '07700000001',
        password: hashedPassword,
        name: 'فني تجريبي',
        role: 'TECH',
        techCode: 'TECH-2026-01'
      }
    })

    return Response.json({ success: true, message: 'تم انشاء 3 مستخدمين بنجاح' })
  } catch (e) {
    return Response.json({ success: false, error: e.message }, { status: 500 })
  }
}
