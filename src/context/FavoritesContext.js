import React, { createContext, useState, useContext } from "react"

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [fav, setFav] = useState([])
  return <FavoritesContext.Provider value={{ fav, setFav }}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  return useContext(FavoritesContext)
}
