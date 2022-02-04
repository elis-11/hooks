`
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
    
    `

npm i react-icons -D

    --FOOTHER.JSX--
    import React from "react";

export const Foother = () => {
  const today = new Date();
  return (
    <foother>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </foother>
  );
};
--HEADER.JSX--
import React from "react";

export const Header = () => {
  return (
    <header style={{ color: "white" }}>
      <h1>Groceries List</h1>
    </header>
  );
};