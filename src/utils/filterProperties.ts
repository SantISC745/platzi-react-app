export function filterProperties(properties, searchText) {
    if (!searchText) return properties
    const normalizedSearch = searchText.trim().toLowerCase()

    if (!normalizedSearch) return properties

    return properties.filter((prop) => {
        return (
            prop.title && prop.title.toLowerCase().includes(searchText) ||
            prop.location && prop.location.toLowerCase().includes(searchText) ||
            prop.type && prop.type.toLowerCase().includes(searchText)
        )
    })
}