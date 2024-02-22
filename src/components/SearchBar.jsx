import { Search } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black text-white px-4 py-2 rounded-full flex items-center"
    >
      <input
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-transparent outline-none"
      />

      <button type="submit">
        <Search color="red" />
      </button>
    </form>
  )
}
export default SearchBar
