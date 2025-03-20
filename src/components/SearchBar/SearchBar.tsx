import { FunctionComponent } from 'react'

const SearchBar: FunctionComponent = () => (
  <div className="mt-6 flex items-center w-full max-w-md">
    <input
      type="text"
      placeholder="Buscar aeropuertos..."
      className="w-full p-3 rounded-l-full text-gray-900 outline-none dark:text-white dark:bg-gray-800"
    />
    <button className="flex items-center gap-2 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-r-full transition">
      Lupa - Buscar
    </button>
  </div>
)

export default SearchBar
