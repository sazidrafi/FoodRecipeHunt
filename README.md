# 🍔 Hungry Monster

A food search web app that lets you find your favourite meals and explore their ingredients — powered by the **MealDB API**.

---

## 🌐 Live Preview

> Open `index.html` in your browser to run locally.

---

## ✨ Features

- 🔍 **Food Search** — Type any food name and hit Search to get results instantly
- 🃏 **Food Cards** — Results display as visual cards with meal image and name
- 📋 **Ingredient Details** — Click any card to see the full ingredients list with measurements
- 🧹 **Auto Clear** — Input field clears automatically after each search

---

## 🖼️ UI Overview

```
┌─────────────────────────────────────────┐
│        [ Search Input ] [ Search ]      │
├─────────────────────────────────────────┤
│  [ Card ] [ Card ] [ Card ] [ Card ]    │  ← Search Results
├─────────────────────────────────────────┤
│       [ Clicked Card Detail View ]      │  ← Ingredients shown on click
└─────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure & layout |
| CSS3 | Styling & card design |
| JavaScript (ES6+) | DOM manipulation & API calls |
| Bootstrap 5.3 | Responsive utilities |
| MealDB API | Food data source |

---

## 📁 Project Structure

```
hungry-monster/
│
├── index.html      # Main HTML structure
├── script.js       # API calls, DOM rendering, event handling
└── style.css       # All custom styles
```

---

## 🚀 How to Run

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/hungry-monster.git
   ```

2. Open the project folder
   ```bash
   cd hungry-monster
   ```

3. Open `index.html` in your browser — no server needed!

---

## 🔗 API Used

**TheMealDB** — Free meal database API  
Base URL: `https://www.themealdb.com/api/json/v1/1/search.php?s={food_name}`

---

## 📌 How It Works

1. User types a food name (e.g. `cake`, `chicken`) in the search box
2. On clicking **Search**, `fetchInformation()` calls the MealDB API
3. Results are rendered as clickable cards with image and meal name
4. Clicking a card triggers `ShowDetails()` which displays full ingredient list at the top

---

## 🔮 Planned Features

- [ ] Error handling for invalid/empty search
- [ ] Loading spinner during API fetch
- [ ] YouTube recipe video embed
- [ ] Favourite meals bookmark feature

---

## 👨‍💻 Author

**Sazid Rafi**  
CSE Student | Varendra University  
GitHub: [@sazidrafi](https://github.com/sazidrafi)
