import Database from 'better-sqlite3';

const db = new Database('dev.db'); // <-- правильно указываем путь

export default function getRestaurants() {
  const stmt = db.prepare('SELECT * FROM restaurants');
  const restaurants = stmt.all();
  return restaurants;
}
