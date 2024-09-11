import { useFavorites } from "../context/FavoritesContext"
import Products from "../components/Products"
import { db } from "../data/db"
import { useState } from "react"

export default function FavoritesPage() {
  const { fav, setFav } = useFavorites()
  const [data] = useState(db)
  const [selectedFav, setSelectedFav] = useState(null)

  const favoriteProducts = data.filter(product => fav.includes(product))

  const openModal = product => {
    setSelectedFav(product)
  }

  const closeModal = () => {
    setSelectedFav(null)
  }

  const handleNoFav = product => {
    if (isFavorite) {
      setFav(fav.filter(item => item.id !== product.id))
      closeModal()
    }
  }

  const isFavorite = product => {
    return fav.find(item => item.id === product.id)
  }

  return (
    <>
      <div className="products">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map(product => (
            <Products key={product.id} product={product} openModal={openModal} />
          ))
        ) : (
          <p>No hay productos en tus favoritos.</p>
        )}
      </div>

      {selectedFav && (
        <div className="modal">
          <div className="modal-content">
            <img src={`/${selectedFav.image}.jpg`} alt="imagen producto" />
            <div className="modal-content-right">
              <button className="close-button" onClick={closeModal}>
                X
              </button>
              <h4>{selectedFav.name}</h4>
              <p className="modal-description">{selectedFav.description}</p>
              <p className="modal-price">{selectedFav.price} €</p>
              <button
                onClick={() => handleNoFav(selectedFav)}
                className={`fav-button ${isFavorite(selectedFav) ? "active" : ""}`}
              >
                Quitar de favoritos
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
