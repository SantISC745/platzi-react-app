export function PropertyCard({title, location, price, image, type}) {
    return (
        <article className="property-card">
              <img
                src={image ?? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcrXg9HIdYCdOamCgyjpRiJ89KUT3ET3ktMIabatBsw&s=10'}
                alt={title}
              />
              <div className="property-card-content">
                <h4>{title}</h4>
                <p>{location}</p>
                <p>{type ?? 'Tipo no especificado'}</p>
                <strong>${price} / noche</strong>
              </div>
            </article>
    );
}