## Adding Static Routing

### Step 1

- Instal React Router `npm i react-router-dom`

### Step 2

- Import BrowserRouter in `src/index.js`
- Wrap your app inn BrowserRouter

```js
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
 <React.StrictMode>
   <BrowserRouter>
     <App />
   </BrowserRouter> 
 </React.StrictMode>,
 document.getElementById("root")
);
```

### Step 3

- Import Routes and Route in `App.js`

```js
import { Routes, Route } from "react-router-dom";
```

### Step 4

- Start registering your routes

```js
  <Routes>
    <Route path="/discover" element={<DiscoverPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/" element={<HomePage />} />
  </Routes>
```

### Step 5 - You are all done! 🎉

## Adding Dynamic Routing
