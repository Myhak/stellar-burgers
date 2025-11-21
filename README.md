# Проектная работа 11-го спринта

[Макет](<https://www.figma.com/file/vIywAvqfkOIRWGOkfOnReY/React-Fullstack_-Проектные-задачи-(3-месяца)_external_link?type=design&node-id=0-1&mode=design>)

[Чеклист](https://www.notion.so/praktikum/0527c10b723d4873aa75686bad54b32e?pvs=4)

## Этапы работы:

1. Разверните проект и ознакомьтесь с кодом. Все необходимые вам компоненты уже созданы и лежат в папке `src/components`

2. Настройте роутинг.

3. Напишите функционал запросов данных с сервера, используя `Redux` и глобальный `store`. Сами "ручки" уже прописаны и лежат в `utils/burger-api.ts`

4. Настройте авторизацию и создайте защищённые роуты.

## Важно:

Для корректной работы запросов к серверу необходимо добавить переменную BURGER_API_URL в окружение. Сама ссылка находится в файле `.env.example`.

```
stellar-burgers
├─ .babelrc
├─ .editorconfig
├─ .eslintrc
├─ .prettierrc
├─ .storybook
│  ├─ main.ts
│  ├─ preview.tsx
│  └─ storybook-config-entry.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ components
│  │  ├─ app
│  │  │  ├─ app.module.css
│  │  │  └─ app.tsx
│  │  ├─ app-header
│  │  │  ├─ app-header.tsx
│  │  │  └─ index.ts
│  │  ├─ burger-constructor
│  │  │  ├─ burger-constructor.tsx
│  │  │  └─ index.ts
│  │  ├─ burger-constructor-element
│  │  │  ├─ burger-constructor-element.tsx
│  │  │  ├─ index.ts
│  │  │  └─ type.ts
│  │  ├─ burger-ingredient
│  │  │  ├─ burger-ingredient.tsx
│  │  │  ├─ index.ts
│  │  │  └─ type.ts
│  │  ├─ burger-ingredients
│  │  │  ├─ burger-ingredients.tsx
│  │  │  └─ index.ts
│  │  ├─ feed-info
│  │  │  ├─ feed-info.tsx
│  │  │  └─ index.ts
│  │  ├─ index.ts
│  │  ├─ ingredient-details
│  │  │  ├─ index.ts
│  │  │  └─ ingredient-details.tsx
│  │  ├─ ingredients-category
│  │  │  ├─ index.ts
│  │  │  ├─ ingredients-category.tsx
│  │  │  └─ type.ts
│  │  ├─ modal
│  │  │  ├─ index.ts
│  │  │  ├─ modal.tsx
│  │  │  └─ type.ts
│  │  ├─ order-card
│  │  │  ├─ index.ts
│  │  │  ├─ order-card.tsx
│  │  │  └─ type.ts
│  │  ├─ order-info
│  │  │  ├─ index.ts
│  │  │  └─ order-info.tsx
│  │  ├─ order-status
│  │  │  ├─ index.ts
│  │  │  ├─ order-status.tsx
│  │  │  └─ type.ts
│  │  ├─ orders-list
│  │  │  ├─ index.ts
│  │  │  ├─ orders-list.tsx
│  │  │  └─ type.ts
│  │  ├─ profile-menu
│  │  │  ├─ index.ts
│  │  │  └─ profile-menu.tsx
│  │  ├─ protected-route.tsx
│  │  └─ ui
│  │     ├─ app-header
│  │     │  ├─ app-header.module.css
│  │     │  ├─ app-header.tsx
│  │     │  ├─ index.ts
│  │     │  └─ type.ts
│  │     ├─ burger-constructor
│  │     │  ├─ burger-constructor.module.css
│  │     │  ├─ burger-constructor.tsx
│  │     │  ├─ index.ts
│  │     │  └─ type.ts
│  │     ├─ burger-constructor-element
│  │     │  ├─ burger-constructor-element.module.css
│  │     │  ├─ burger-constructor-element.tsx
│  │     │  ├─ index.ts
│  │     │  └─ type.ts
│  │     ├─ burger-ingredient
│  │     │  ├─ burger-ingredient.module.css
│  │     │  ├─ burger-ingredient.tsx
│  │     │  ├─ index.ts
│  │     │  └─ type.ts
│  │     ├─ burger-ingredients
│  │     │  ├─ burger-ingredients.module.css
│  │     │  ├─ burger-ingredients.tsx
│  │     │  ├─ index.ts
│  │     │  └─ type.ts
│  │     ├─ feed-info
│  │     │  ├─ feed-info.module.css
│  │     │  ├─ feed-info.tsx
│  │     │  ├─ index.ts
│  │     │  └─ type.ts
│  │     ├─ index.ts
│  │     ├─ ingredient-details
│  │     │  ├─ index.ts
│  │     │  ├─ ingredient-details.module.css
│  │     │  ├─ ingredient-details.tsx
│  │     │  └─ type.ts
│  │     ├─ ingredients-category
│  │     │  ├─ index.ts
│  │     │  ├─ ingredients-category.module.css
│  │     │  ├─ ingredients-category.tsx
│  │     │  └─ type.ts
│  │     ├─ modal
│  │     │  ├─ index.ts
│  │     │  ├─ modal.module.css
│  │     │  ├─ modal.tsx
│  │     │  └─ type.ts
│  │     ├─ modal-overlay
│  │     │  ├─ index.ts
│  │     │  ├─ modal-overlay.module.css
│  │     │  └─ modal-overlay.tsx
│  │     ├─ order-card
│  │     │  ├─ index.ts
│  │     │  ├─ order-card.module.css
│  │     │  ├─ order-card.tsx
│  │     │  └─ type.ts
│  │     ├─ order-details
│  │     │  ├─ index.ts
│  │     │  ├─ order-details.module.css
│  │     │  ├─ order-details.tsx
│  │     │  └─ type.ts
│  │     ├─ order-info
│  │     │  ├─ index.ts
│  │     │  ├─ order-info.module.css
│  │     │  ├─ order-info.tsx
│  │     │  └─ type.ts
│  │     ├─ order-status
│  │     │  ├─ index.ts
│  │     │  ├─ order-status.tsx
│  │     │  └─ type.ts
│  │     ├─ orders-list
│  │     │  ├─ index.ts
│  │     │  ├─ orders-list.module.css
│  │     │  ├─ orders-list.tsx
│  │     │  └─ type.ts
│  │     ├─ pages
│  │     │  ├─ common-type.ts
│  │     │  ├─ common.module.css
│  │     │  ├─ constructor-page
│  │     │  │  ├─ constructor-page.module.css
│  │     │  │  ├─ constructor-page.tsx
│  │     │  │  ├─ index.ts
│  │     │  │  └─ type.ts
│  │     │  ├─ feed
│  │     │  │  ├─ feed.module.css
│  │     │  │  ├─ feed.tsx
│  │     │  │  ├─ index.ts
│  │     │  │  └─ type.ts
│  │     │  ├─ forgot-password
│  │     │  │  ├─ forgot-password.tsx
│  │     │  │  └─ index.ts
│  │     │  ├─ index.ts
│  │     │  ├─ login
│  │     │  │  ├─ index.ts
│  │     │  │  ├─ login.tsx
│  │     │  │  └─ type.ts
│  │     │  ├─ profile
│  │     │  │  ├─ index.ts
│  │     │  │  ├─ profile.module.css
│  │     │  │  ├─ profile.tsx
│  │     │  │  └─ type.ts
│  │     │  ├─ profile-orders
│  │     │  │  ├─ index.ts
│  │     │  │  ├─ profile-orders.module.css
│  │     │  │  ├─ profile-orders.tsx
│  │     │  │  └─ type.ts
│  │     │  ├─ register
│  │     │  │  ├─ index.ts
│  │     │  │  ├─ register.tsx
│  │     │  │  └─ type.ts
│  │     │  └─ reset-password
│  │     │     ├─ index.ts
│  │     │     ├─ reset-password.tsx
│  │     │     └─ type.ts
│  │     ├─ preloader
│  │     │  ├─ index.ts
│  │     │  ├─ preloader.module.css
│  │     │  └─ preloader.tsx
│  │     └─ profile-menu
│  │        ├─ index.ts
│  │        ├─ profile-menu.module.css
│  │        ├─ profile-menu.tsx
│  │        └─ type.ts
│  ├─ images
│  │  └─ done.svg
│  ├─ index.css
│  ├─ index.tsx
│  ├─ pages
│  │  ├─ constructor-page
│  │  │  ├─ constructor-page.module.css
│  │  │  ├─ constructor-page.tsx
│  │  │  └─ index.ts
│  │  ├─ feed
│  │  │  ├─ feed.tsx
│  │  │  └─ index.ts
│  │  ├─ forgot-password
│  │  │  ├─ forgot-password.tsx
│  │  │  └─ index.ts
│  │  ├─ index.ts
│  │  ├─ login
│  │  │  ├─ index.ts
│  │  │  └─ login.tsx
│  │  ├─ not-fount-404
│  │  │  ├─ index.ts
│  │  │  └─ not-fount-404.tsx
│  │  ├─ profile
│  │  │  ├─ index.ts
│  │  │  └─ profile.tsx
│  │  ├─ profile-orders
│  │  │  ├─ index.ts
│  │  │  └─ profile-orders.tsx
│  │  ├─ register
│  │  │  ├─ index.ts
│  │  │  └─ register.tsx
│  │  └─ reset-password
│  │     ├─ index.ts
│  │     └─ reset-password.tsx
│  ├─ services
│  │  ├─ slices
│  │  │  ├─ ConstructorSlice.ts
│  │  │  ├─ FeedSlice.ts
│  │  │  ├─ index.ts
│  │  │  ├─ IngredientsSlice.ts
│  │  │  ├─ OrderSlice.ts
│  │  │  └─ UserSlice.ts
│  │  └─ store.ts
│  ├─ stories
│  │  ├─ assets
│  │  │  ├─ accessibility.png
│  │  │  ├─ accessibility.svg
│  │  │  ├─ addon-library.png
│  │  │  ├─ assets.png
│  │  │  ├─ avif-test-image.avif
│  │  │  ├─ context.png
│  │  │  ├─ discord.svg
│  │  │  ├─ docs.png
│  │  │  ├─ figma-plugin.png
│  │  │  ├─ github.svg
│  │  │  ├─ share.png
│  │  │  ├─ styling.png
│  │  │  ├─ testing.png
│  │  │  ├─ theming.png
│  │  │  ├─ tutorials.svg
│  │  │  └─ youtube.svg
│  │  ├─ BurgerConstructor.stories.ts
│  │  ├─ BurgerConstructorElement.stories.ts
│  │  ├─ BurgerIngredient.stories.tsx
│  │  ├─ Configure.mdx
│  │  ├─ FeedInfo.stories.ts
│  │  ├─ Header.stories.ts
│  │  ├─ IngredientDetails.stories.ts
│  │  ├─ OrderCard.stories.ts
│  │  ├─ OrderDetails.stories.tsx
│  │  ├─ OrderInfo.stories.ts
│  │  ├─ OrderStatus.stories.tsx
│  │  ├─ Preloader.stories.ts
│  │  └─ ProfileMenu.stories.ts
│  ├─ styles.d.ts
│  ├─ svg.d.ts
│  └─ utils
│     ├─ burger-api.ts
│     ├─ cookie.ts
│     └─ types.ts
├─ tsconfig.json
└─ webpack.config.js

```