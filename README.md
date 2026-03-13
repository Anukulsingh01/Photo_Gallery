# Photo Gallery Web App

A responsive **Photo Gallery Web Application** built using React, Vite, and Tailwind CSS.
The application fetches photos from the Picsum Photos API, displays them in a responsive grid layout, allows users to search photos by author name, and mark photos as favourites.

Favourited photos are stored in localStorage so they remain saved even after refreshing the page.

---

## Features

* Fetches **30 photos** from the Picsum Photos API on page load
* Displays photos in a **responsive grid**
* **Real-time search filter** by author name
* **Favourite toggle** using heart icon
* Favourites persist using **localStorage**
* Handles **loading and error states**
* Uses **React performance hooks (useCallback & useMemo)**

---

## Tech Stack

* React
* Vite
* Tailwind CSS
* JavaScript

---

## API Used

Picsum Photos API

https://picsum.photos/v2/list?limit=30

---

## Project Setup

Clone the repository

git clone https://github.com/your-username/photo-gallery-app.git

Go to project directory

cd photo-gallery-app

Install dependencies

npm install

Run the development server

npm run dev

---

## Project Structure

src/
│
├── components/
│   └── Gallery.jsx
│
├── hooks/
│   └── useFetchPhotos.js
│
├── App.jsx
├── main.jsx
└── index.css

---

## Key Concepts Used

* **Custom Hook** (`useFetchPhotos`) to separate data fetching logic from UI
* **useReducer** to manage favourites state
* **localStorage** to persist favourites across refresh
* **useCallback** to memoize the search handler
* **useMemo** to optimize filtering of photos
* **Responsive Grid Layout** using Tailwind CSS

---

## Author

Anukul Singh Bisht

Frontend Developer | React Enthusiast
