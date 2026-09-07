<<<<<<< HEAD
export function filterProperties(properties, searchText) {
    if (!searchText) return properties
=======
import type { Property } from "../types/property";

export function filterProperties(properties: Property[], searchText: string): Property[] {
>>>>>>> 93aea2dfe2c203a385d1f01492394e2c991137ee
    const normalizedSearch = searchText.trim().toLowerCase()

    if (!normalizedSearch) return properties

    return properties.filter((prop) => {
        return (
<<<<<<< HEAD
            prop.title && prop.title.toLowerCase().includes(searchText) ||
            prop.location && prop.location.toLowerCase().includes(searchText) ||
            prop.type && prop.type.toLowerCase().includes(searchText)
        )
    })
}
=======
            prop.title.toLowerCase().includes(normalizedSearch) ||
            prop.location.toLowerCase().includes(normalizedSearch) ||
            (prop.type?.toLowerCase().includes(normalizedSearch) ?? false)
        )
    })
}
>>>>>>> 93aea2dfe2c203a385d1f01492394e2c991137ee
