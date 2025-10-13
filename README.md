# Task Manager App

### Created by: Tyler Fields

---

## 📌 Project Overview

This is a simple, clean, and interactive **Task Manager Web App** built using **React**. The app allows users to:

- Add new tasks
- Mark tasks as complete or incomplete
- Edit existing tasks
- Filter tasks by their status (All, Completed, Incomplete)
- Delete tasks
- Navigate across pages using React Router
- Submit a contact form (as a controlled component)

All features are implemented using React’s component-based structure and useState/useEffect hooks. The project is styled with custom CSS for a responsive and user-friendly interface.

---

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- React Router

---

## 🧠 Core Features

- ✅ Add task functionality
- ✅ Mark task as complete/incomplete
- ✅ Delete tasks
- ✅ Edit tasks in-place
- ✅ Filter tasks (All / Completed / Incomplete)
- ✅ Form handling with controlled components
- ✅ Basic client-side routing between Home, Todos, and Contact pages
- ✅ Clean file structure and professional styling

---

## 💡 Future Improvements

1. **Persistent Storage** – Integrate localStorage or a backend (Firebase, Supabase, etc.) to save tasks between sessions.
2. **Due Dates & Priorities** – Add the ability to assign deadlines and priority levels to tasks.
3. **Responsive Design** – Further refine mobile/tablet views with media queries.
4. **Dark Mode Toggle** – Add a toggle for light/dark themes.
5. **User Authentication** – Allow users to log in and manage personal task lists.

---

## 📝 How to Run This App

1. Clone the repository:
   ```
   git clone https://github.com/your-username/task-manager.git
   cd task-manager
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the app:
   ```
   npm start
   ```

---

## ✉️ Contact Page Info

The Contact form is a **controlled React component**. It tracks the user's input through `useState` and is structured to prepare for future form submission handling or API integration.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── TodoItem.js
│   └── ...
├── pages/
│   ├── HomePage.js
│   ├── TodosPage.js
│   └── ContactPage.js
├── App.js
├── index.js
└── styles/
    ├── TodoItem.css
    ├── TodosPage.css
    └── ...
```

---

## ✅ Status

✔️ Project complete and ready for submission.