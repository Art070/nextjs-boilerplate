import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Лазерная резка металла для юридических лиц
      </h1>
      <p className="mb-6 text-lg text-gray-700 text-center">
        Создавайте 3D модели прямо на сайте или загружайте свои чертежи (DXF, STL).
        Мы адаптируем ваш заказ под производство.
      </p>
      <Link href="/constructor">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700">
          Перейти в конструктор
        </button>
      </Link>
    </main>
  );
}
