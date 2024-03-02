import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feed from './pages/Feed'
import Layout from './pages/Layout'
import VideoDetail from './pages/VideoDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="video/:id" element={<VideoDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
