export default function Products({ product, openModal }) {
  const { name, image } = product

  return (
    <div className="product-item">
      <div>
        <img className="img-prod" src={`/${image}.jpg`} alt="imagen producto" />
      </div>
      <h2>{name}</h2>
      <button onClick={() => openModal(product)}>Ver descripción</button>
    </div>
  )
}
