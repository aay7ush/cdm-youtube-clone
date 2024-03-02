import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className="sticky top-0 px-5 py-2 bg-white">
        <Link to="/">
          <img src="/logo.svg" alt="logo" className="w-32 h-10" />
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
export default Layout
