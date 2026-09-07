export type Property = {
    id: number
    title: string
    location: string
    price: number
    image: string
    type: PropertyType
}

export type PropertyType = 'Apartamento' | 'Casa' | 'Loft' | 'Cabaña' | 'Estudio' | 'Villa'