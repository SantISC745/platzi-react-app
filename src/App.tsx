import { useState, useEffect } from "react";
import { Hero } from "./components/ui/Hero";
import { Header } from "./components/layout/Header";
import { PropertyList } from "./components/properties/PropertyList";
import { SearchBar } from "./components/ui/SearchBar";
import { properties } from "./data/properties";
import { filterProperties } from "./utils/filterProperties";
import type { Property } from "./types/property";

function App() {
  const [city, setCity] = useState('')
  const [search, setSearch] = useState('')
  const [propertiesFromAPI, setPropertiesFromAPI] = useState<Property[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const timerId = setTimeout(() => {
      try {
        setPropertiesFromAPI(properties)
      } catch {
        setError('No pudimos cargar las propiedades')
      }
      finally {
        setIsLoading(false)
      }
    }, 3000)

    return () => clearTimeout(timerId)
  }, [])

  const filteredProperties = filterProperties(propertiesFromAPI, search)

  return (
    <div className="app">
      <Header />

      <main className="main-content">
       <Hero />

       <SearchBar 
          value={city} 
          searchedValue={search}
          onChange={setCity}
          onSearch={setSearch}
          onClear={() => {
            setCity('')
            setSearch('')
          }}
          />
          {
            isLoading 
              ? <p>Cargando propiedades...</p> 
                : error 
                ? <p>{error}</p> 
              : <PropertyList properties={filteredProperties}/>
          }
      </main>
    </div>
  );
}

export default App;