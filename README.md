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

### Step 1

- Register a dynamic route

```js
<Routes>
  <Route path="/details/:id" element={<DiscoverPage />} />
</Routes>
```

### Step 2

- You need to choose an element to link to your details page

```js
<Link to={`/details/${item.id}`}>
  <h3>{item.name}</h3>
</Link>
```

### Step 3

- On the details page, retrieve the param from the url

```js
const params = useParams()
console.log("params", params) //always console.log and check the object in the console
```

### Step 4 

- Make an API call (make sure you are using the correct endpoint) and pass the params to it

```js
  const fetchItems = async () => {
    const response = await axios.get(`example-api/${params.id}`)
    console.log("one pokemon", response)
  }
```

### Step 5 - You are all done! 🎉
