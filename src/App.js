import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FavoritesProvider } from "./context/FavoritesContext"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import FavoritesPage from "./pages/FavoritesPage"
import Layout from "./layouts/Layout"

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  )
}

export default App
