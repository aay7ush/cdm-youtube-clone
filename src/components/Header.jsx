import { Bell, User, Video } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="/logo.svg" alt="logo" className="w-32 h-10" />
      </Link>
      <div className="flex gap-5">
        <button>
          <Video />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </header>
  )
}
export default Header
