# Lab 2 – Cat Selector App 

## Project Overview

This project is a web-based application created for Lab 2 of my Web Development course. The goal was to build an interactive cat selector app using HTML and JavaScript. The application uses data from [The Cat API](https://api.thecatapi.com/v1/breeds) to let users explore cat breeds based on:

- Name
- Health issues
- Weight (in imperial or metric)
- Intelligence and child friendliness
- Average intelligence (for all or filtered breeds)

All the logic was handled using JavaScript, and the layout was built with HTML. I learned how to integrate third-party APIs, handle data dynamically, and display results based on user interaction.

---

## Features

- Display all 67 cat breed names
- Filter breeds by number of health issues
- Toggle between metric and imperial weight units
- View intelligence and child-friendliness ratings side-by-side
- Calculate and display average intelligence
- Show average intelligence of cats that are child-friendly (rating of 4)

---

## Technologies Used

- HTML (structure and layout)
- JavaScript (logic, data fetching, and DOM manipulation)
- JSON (data format retrieved from API)
- Live Server (for running the application locally)

---

## How I Tested It

To make sure the app worked properly, I installed and used the **Live Server extension in Visual Studio Code**. This was necessary because modern browsers block `fetch()` API requests when opening an HTML file directly from the file system.

### Why Live Server?
- It acts as a local development server.
- It prevents CORS issues when using `fetch()` to access external data.
- It reloads the browser automatically when I save changes.

### Steps I Took:
1. Installed **Live Server** from the VS Code Extensions panel.
2. Right-clicked on `lab2.html`.
3. Clicked **"Open with Live Server"**.
4. Tested each button to ensure all features worked as expected.

---

## What I Learned

Throughout this lab, I gained a deeper understanding of how frontend web development works:

- **HTML** is responsible for the structure and layout of the page (buttons, inputs, etc.)
- **JavaScript** controls the logic and behavior — it fetches data, reacts to user input, and updates the content dynamically.
- **JSON** is a standard format for data exchange — and using `fetch()` helped me practice parsing and working with real API data.

I also learned how to:
- Use `map`, `filter`, and `reduce` methods to manipulate data
- Link HTML to JS properly
- Use the DOM to update the page based on logic

---

## Resources I Used for Learning

While working on this lab, I referred to the following tools and platforms to help me understand how things work:

- [Google](https://www.google.com) — for general searching and documentation
- [ChatGPT](https://chat.openai.com) — for breaking down logic and debugging
- [YouTube](https://www.youtube.com) — to see visual examples of `fetch()` and DOM manipulation
- [Quizlet](https://www.quizlet.com) — for reviewing key terms like "JSON", "fetch", and "DOM"

These resources helped me go beyond the lab instructions and better understand what I was building and why it worked.

---

## Project Files

| File Name    | Description                         |
|--------------|-------------------------------------|
| `lab2.html`  | Main HTML file with all UI elements |
| `lab2.js`    | JavaScript logic and data handling  |
| `README.md`  | This file                           |

---

## Author

Austin W Davis 
Course: Web Development
Student Number: 23077290
Lab 2 Submission

