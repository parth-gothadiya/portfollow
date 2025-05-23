# 📌 Project Name: **Dynamic Portfolio Json React**

![Project Banner](./image.png)

> 🚀 **A dynamic and interactive personal portfolio built using React.js, showcasing projects, experience, education, and skills in a sleek, modern UI.**

---

## 📖 Table of Contents
- [🌟 Features](#-features)
- [📸 Screenshots](#-screenshots)
- [🛠️ Technologies Used](#-technologies-used)
- [📦 Installation](#-installation)
- [⚡ Usage](#-usage)
- [🔧 Configuration](#-configuration)
- [🛠️ Global Config Setup](#-global-config-setup)
- [💡 Future Enhancements](#-future-enhancements)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📬 Contact](#-contact)

---

## 🌟 Features
✅ **Fully Responsive** - Works on all devices 📱💻🖥️  
✅ **Dynamic Config Management** - Global project settings using a JSON file 🌍  
✅ **Modular Component-Based Architecture** - Easily maintainable and scalable ⚙️  
✅ **Dark Mode UI** - Elegant and modern design with a dark theme 🌙  
✅ **Smooth Animations** - Aesthetic transitions and animations using GSAP ✨  
✅ **React Router Integration** - Seamless navigation between pages 🔗  
✅ **SEO Friendly** - Optimized for search engines 🚀  
✅ **Built with Tailwind CSS** - Fast and customizable styling 🎨  

---

## 📸 Screenshots
![Portfolio Preview](./image.png)
> 🎨 *A glimpse of the UI showcasing experience, education, and skills.*

---

## 🛠️ Technologies Used
- **React.js** - Frontend framework ⚛️
- **React Router** - Navigation handling 🚏
- **Tailwind CSS** - Styling framework 🎨
- **GSAP** - Animations library 🎥
- **JSON Configuration** - Global settings storage 📁

---

## 📦 Installation
1. Clone the repository
   ```sh
   git clone https://github.com/parth-gothadiya/portfollow.git   
2. Navigate to the project directory
   ```sh
   cd dynamic-portfolio-json-react
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm start
   ```

---

## ⚡ Usage
- Run the project locally and explore different sections 🔍
- Modify the `project.config.json` to customize your portfolio 📝
- Add more sections by creating new React components ⚡

---

## 🔧 Configuration
This project uses a **global config file** to dynamically manage portfolio content without modifying the React code. 🎯

#### **Example: `project.config.json`**
```json
{
  "project": {
    "title": "John Doe | Portfolio",
    "navbar": {
      "links": [
        { "label": "About", "to": "/about" },
        { "label": "Projects", "to": "/projects" },
        { "label": "Contact", "to": "/contact" }
      ]
    },
    "user": {
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  }
}
```

---

## 🛠️ Global Config Setup
To make the config globally accessible, set it up in `index.js`:
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configData from './project.config.json';
import { BrowserRouter } from 'react-router-dom';

window.config = configData; // Global variable

document.title = configData.project.title;

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
```
Now you can access config values globally:
```jsx
window.config.project.title
window.config.user.name
```

---

## 💡 Future Enhancements
🚀 **Add a Blog Section** - Display latest blogs dynamically  
🚀 **Integrate Contact Form** - Enable direct email messaging  
🚀 **Add Theme Switcher** - Light/Dark mode toggle  
🚀 **Deploy on Vercel** - Make it live instantly  

---

## 🤝 Contributing
Contributions are welcome! 🎉
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

---

## 📄 License
This project is licensed under the **MIT License** 📜

---

## 📬 Contact
📧 **Email:** john.doe@example.com  
🐦 **Twitter:** [@johndoe](https://twitter.com/johndoe)  
💼 **LinkedIn:** [John Doe](https://linkedin.com/in/johndoe)  

---

⭐ If you like this project, give it a star on [GitHub](https://github.com/reactrocket/dynamic-portfolio-json-react)! ⭐

