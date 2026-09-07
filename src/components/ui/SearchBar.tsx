import type { FormEvent } from "react";

interface SearchBarProps {
    value: string;
    searchedValue: string;
    onChange: (value: string) => void;
    onSearch: (value: string) => void;
    onClear: () => void;
}

export function SearchBar({
    value,
    searchedValue,
    onChange,
    onSearch,
    onClear
}: SearchBarProps) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSearch(value.trim())
    }

    return(
        <>
        <form className="search-section" onSubmit={handleSubmit}>
          <label>
            Ciudad
            <span className="city-input-wrapper">
                <input type="text" placeholder="Santiago, Chile" value={value} onChange={(event) => onChange(event.target.value)}/>
                {
                    (value || searchedValue) && (
                        <button className="clear-city-button" type="button" onClick={onClear}>
                            x
                        </button>
                    )
                }
            </span>
          </label>
          <label>
            Tipo
            <input type="text" placeholder="Apartamento" />
          </label>
          <label>
            Huéspedes
            <input type="number" placeholder="2" />
          </label>
          <button>Buscar</button>
        </form>
        <p className="current-search">
            Resultados de la búsqueda: <strong>{searchedValue || 'Sin búsqueda'}</strong>
        </p>
        </>
    )
}