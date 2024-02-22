import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <header className="sticky top-0 flex justify-between px-5 py-3">
      <Link to="/">
        <img src="/logo.svg" alt="" className="w-32 h-10" />
      </Link>

      <SearchBar />
    </header>
  )
}
export default Header
