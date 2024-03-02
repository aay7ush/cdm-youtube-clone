import { Bell, User, Video } from 'lucide-react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className="sticky top-0 px-5 py-2 bg-white flex justify-between items-center">
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
      <main>
        <Outlet />
      </main>
    </>
  )
}
export default Layout
