import { PropertyCard } from "./PropertyCard";
import type { Property } from "../../types/property";

interface PropertyListProps {
    properties: Property[];
}

export function PropertyList({properties}: PropertyListProps) {
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
                        <PropertyCard key={id} title={title} location={location} price={price} image={image} type={type}/>
                    ))
                }
            </div>
            </section>
        )
}
