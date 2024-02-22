import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChannelDetail from './pages/ChannelDetail'
import Feed from './pages/Feed'
import Layout from './pages/Layout'
import SearchFeed from './pages/SearchFeed'
import VideoDetail from './pages/VideoDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="video/:id" element={<VideoDetail />} />
          <Route path="channel/:id" element={<ChannelDetail />} />
          <Route path="search/:searchTerm" element={<SearchFeed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
