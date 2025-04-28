This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

<!--  Процесс проектирования и разработки:
Проект разрабатывался по следующей структуре:

Next.js (App Router) — для удобной маршрутизации страниц и API-роутов.

Better-sqlite3 — библиотека для синхронной работы с локальной SQLite базой данных.

Tailwind CSS — для быстрой и адаптивной стилизации интерфейса.

Использована локальная база данных SQLite, так как приложение не требует серверной БД для целей демонстрации и тестирования.

Основной акцент сделан на удобстве фильтрации ресторанов и минималистичном дизайне.

 Уникальные подходы и методологии:
SQLite в Next.js: Приложение работает полностью на локальной БД (dev.db), которая читается через синхронные запросы с помощью better-sqlite3. Это позволяет упростить архитектуру, убрать необходимость в серверной БД и повысить скорость обработки запросов.

Фильтрация на сервере: Все фильтры (цена, кухня, время ожидания) применяются на серверной стороне, что снижает нагрузку на клиент и увеличивает производительность.

Минимальная зависимость от сторонних сервисов: Нет необходимости настраивать внешние серверы или облачные базы данных — всё работает внутри проекта.

Чистая структура проекта: Логика API вынесена в отдельный файл, а функции работы с базой данных — в отдельный модуль (db.js).

 Принятые компромиссы:
Локальная база данных вместо серверной (например, PostgreSQL):

Плюсы: Упрощение установки и использования, отсутствие затрат на хостинг БД.

Минусы: Приложение не масштабируется под множество пользователей и не подходит для продакшн-использования.

Синхронные запросы к БД:

Плюсы: Проще код, меньше асинхронности.

Минусы: В высоконагруженных приложениях это могло бы стать узким местом.

Минимум обработок ошибок:

Для целей демо-проекта не реализована глубокая валидация данных на серверной стороне.

 Известные ошибки и ограничения
Нет полноценной панели администратора для добавления ресторанов в базу через интерфейс — необходимо вручную редактировать базу данных через инструменты вроде DB Browser for SQLite.

Нет обработки ошибок сети на клиенте: если API не отвечает, пользователь увидит только стандартное сообщение в консоли браузера.

База данных зашита в приложение: невозможно динамически менять список ресторанов без перекомпиляции проекта.

 Почему выбран именно этот стек?

Технология	Почему выбрана
Next.js	Универсальный фреймворк с поддержкой серверных API-роутов и клиентского рендеринга. Идеально подходит для маленьких и средних проектов.
SQLite	Легковесная и удобная база данных, не требующая отдельного сервера. Идеальна для локальной разработки и небольших демо-проектов.
Better-sqlite3	Очень простая в использовании библиотека для синхронной работы с SQLite в Node.js среде.
Tailwind CSS	Быстрая стилизация компонентов без необходимости писать много кастомных CSS-файлов.
JavaScript (React/Next.js)	Удобный стек для быстрого создания современных интерактивных пользовательских интерфейсов. -->