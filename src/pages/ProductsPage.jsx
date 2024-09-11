import { useState } from "react"
import Products from "../components/Products"
import { db } from "../data/db"
import { useFavorites } from "../context/FavoritesContext"

export default function ProductsPage() {
  const [data] = useState(db)
  const [selectedProd, setSelectedProd] = useState(null)
  const { fav, setFav } = useFavorites()

  const openModal = product => {
    setSelectedProd(product)
  }

  const closeModal = () => {
    setSelectedProd(null)
  }

  const handleFav = product => {
    if (!isFavorite(product)) {
      setFav(fav => [...fav, product])
    }
  }

  const isFavorite = product => {
    return fav.find(item => item.id === product.id)
  }

  return (
    <>
      <h1 className="title-prod">Nuestra colección</h1>
      <div className="products">
        {data.map(product => (
          <Products key={product.id} product={product} openModal={openModal} />
        ))}
      </div>

      {selectedProd && (
        <div className="modal">
          <div className="modal-content">
            <img src={`/${selectedProd.image}.jpg`} alt="imagen producto" />
            <div className="modal-content-right">
              <button className="close-button" onClick={closeModal}>
                X
              </button>
              <h4>{selectedProd.name}</h4>
              <p className="modal-description">{selectedProd.description}</p>
              <p className="modal-price">{selectedProd.price} €</p>
              <button
                onClick={() => handleFav(selectedProd)}
                className={`fav-button ${isFavorite(selectedProd) ? "active" : ""}`}
              >
                {isFavorite(selectedProd) ? "En favoritos" : "Añadir a favoritos"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
