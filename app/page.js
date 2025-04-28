'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [cuisine, setCuisine] = useState('');
  const [price, setPrice] = useState('');
  const [waitTime, setWaitTime] = useState('');

  const fetchRestaurants = async () => {
    try {
      let url = '/api/restaurants';

      const params = new URLSearchParams();
      if (cuisine) params.append('cuisine', cuisine);
      if (price) params.append('price', price);
      if (waitTime) params.append('waitTime', waitTime);

      if ([...params].length > 0) {
        url += `?${params.toString()}`;
      }

      const res = await fetch(url);
      let data = await res.json();

      // Проверяем, если data — это не массив (а один объект ресторана)
      if (!Array.isArray(data)) {
          data = [data];
      }

      setRestaurants(data);

      } catch (error) {
      console.error('Ошибка при загрузке ресторанов', error);
    }
  };

  const handleFilter = (e) => {
    e.preventDefault();
    fetchRestaurants();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Lunch Roulette</h1>

        {/* Фильтры */}
        <form onSubmit={handleFilter} className="bg-black p-6 rounded-lg shadow mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select 
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="">Выберите кухню</option>
              <option value="азиатская">Азиатская</option>
              <option value="итальянская">Итальянская</option>
              <option value="узбекская">Узбекская</option>
              <option value="корейская">Корейская</option>
              <option value="японская">Японская</option>
              <option value="восточная">Восточная</option>
              <option value="казахская">Казахская</option>
              <option value="европейская">Европейская</option>
            </select>

            <input
              type="number"
              placeholder="Максимальная цена"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border p-2 rounded w-full"
            />

            <input
              type="number"
              placeholder="Макс. время ожидания (мин)"
              value={waitTime}
              onChange={(e) => setWaitTime(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
          >
            Применить фильтры
          </button>
        </form>

        {/* Список ресторанов */}
        {!Array.isArray(restaurants) || restaurants.length === 0 ? (
          <div className="text-center text-gray-500 text-xl mt-12">
            Ресторанов не найдено.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{restaurant.name}</h2>
                <p className="text-gray-600 mb-1">🍽 Кухня: {restaurant.cuisine?.split(',').map(c => c.trim()).join(', ')}</p>
                <p className="text-gray-600 mb-1">⭐ Рейтинг: {restaurant.rating}</p>
                <p className="text-gray-600 mb-1">📍 Адрес: {restaurant.address}</p>
                <p className="text-gray-600 mb-1">💵 Цена: {restaurant.price}₸</p>
                <p className="text-gray-600">⏳ Время ожидания: {restaurant.waitTime} мин</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
