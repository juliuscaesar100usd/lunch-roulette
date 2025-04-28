import getRestaurants from '@/db';

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  // Считываем фильтры из URL
  const selectedCuisines = searchParams.getAll('cuisine');
  const minRating = parseFloat(searchParams.get('rating')) || 0;
  const maxPrice = parseInt(searchParams.get('price')) || Infinity;
  const maxWaitTime = parseInt(searchParams.get('waitTime')) || Infinity;

  try {
    let restaurants = await getRestaurants();

    // Фильтрация
    restaurants = restaurants.filter((restaurant) => {
    const matchCuisine =
    selectedCuisines.length === 0 ||
    selectedCuisines.some((selectedCuisine) => {
      // Разделяем строку кухни на массив и проверяем, совпадает ли хотя бы один элемент
      return restaurant.cuisine
        .split(',') // Разделяем по запятой, если несколько кухонь в одной строке
        .some((cuisine) =>
          cuisine.trim().toLowerCase() === selectedCuisine.toLowerCase()
            );
    });
    const matchRating = restaurant.rating >= minRating;
    const matchPrice = restaurant.price <= maxPrice;
    const matchWaitTime = restaurant.waitTime <= maxWaitTime;

    return matchCuisine && matchRating && matchPrice && matchWaitTime;
    });


    // Выбираем случайный ресторан из отфильтрованных
    if (restaurants.length > 0) {
      const randomRestaurant =
        restaurants[Math.floor(Math.random() * restaurants.length)];
      return Response.json(randomRestaurant);
    } else {
      return Response.json({ message: 'Нет подходящих ресторанов' });
    }
  } catch (error) {
    console.error('Ошибка при получении ресторанов:', error);
    return new Response('Ошибка сервера', { status: 500 });
  }
} 