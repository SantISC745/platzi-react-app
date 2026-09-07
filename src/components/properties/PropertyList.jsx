import { PropertyCard } from "./PropertyCard";

export function PropertyList({properties}) {
    if (properties.length === 0) {
        return (
            <section className="properties-section">
                <h3>Alojamientos disponibles</h3>
                <p>No encontramos alojamientos con esos criterios.</p>
            </section>
        )
    }
    else
        return(
            <section className="properties-section">
            <h3>Alojamientos disponibles</h3>
            <div className="properties-grid">
                {
                    properties.map(({id, image, location, price, title, type}) => (
                        <PropertyCard title={title} location={location} price={price} image={image} type={type}/>
                    ))
                }
            </div>
            </section>
        )
}