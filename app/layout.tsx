import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Лазерная резка металла",
  description: "Онлайн-сервис для проектирования и заказа лазерной резки металла",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <header className="flex justify-between items-center px-8 py-4 shadow">
          <h1 className="font-bold text-xl">LaserCut</h1>
          <nav className="flex gap-4">
            <Link href="/">Главная</Link>
            <Link href="/constructor">Конструктор</Link>
            <Link href="/services">Услуги</Link>
            <Link href="/contacts">Контакты</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
