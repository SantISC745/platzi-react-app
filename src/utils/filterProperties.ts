import type { Property } from "../types/property";

export function filterProperties(properties: Property[], searchText: string): Property[] {
    const normalizedSearch = searchText.trim().toLowerCase()

    if (!normalizedSearch) return properties

    return properties.filter((prop) => {
        return (
            prop.title.toLowerCase().includes(normalizedSearch) ||
            prop.location.toLowerCase().includes(normalizedSearch) ||
            (prop.type?.toLowerCase().includes(normalizedSearch) ?? false)
        )
    })
}
