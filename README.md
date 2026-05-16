# 🍔 FoodRecipeHunt

A food and recipe search website that lets you find your favourite meals and explore their ingredients powered by the **MealDB API**.

---

## 🌐 Live Preview

🔗 [Visit Live Site](https://sazidrafi.github.io/FoodRecipeHunt/)

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
   git clone https://github.com/sazidrafi/FoodRecipeHunt.git
   ```

2. Open the project folder
   ```bash
   cd FoodRecipeHunt
   ```

3. Open `index.html` in your browser — no server needed!

---

## 🔗 API Used

**TheMealDB** — Free meal database API  
Base URL: [www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata](https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata)

---

## 📌 How It Works

1. User types a food name (e.g. `cake`, `chicken`) in the search box
2. On clicking **Search**, `fetchInformation()` calls the MealDB API
3. Results are rendered as clickable cards with image and meal name
4. Clicking a card triggers `ShowDetails()` which displays full ingredient list at the top
5. If a item is not found then it shows "Item not found"

---

## 🔮 Planned Features

- [ ] Implement input field and seach button
- [ ] Connect API and access food name/title
- [ ] Show food with their ingradients if found
- [ ] If food not found then show "Item not found!"

---

## 👨‍💻 Author

**Sazid Rafi**  
CSE Student | Varendra University  
GitHub: [@sazidrafi](https://github.com/sazidrafi)
