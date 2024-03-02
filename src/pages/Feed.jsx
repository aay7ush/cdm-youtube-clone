import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Videos from '../components/Videos'
import fetchAPI from '../lib/fetchAPI'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    )
  }, [selectedCategory])

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div>
        <h4 className="text-4xl font-medium text-center md:text-start mb-3 space-x-2">
          <span>{selectedCategory === 'Home' ? 'New' : selectedCategory}</span>
          <span className="text-red-600">videos</span>
        </h4>
        <Videos videos={videos} />
      </div>
    </div>
  )
}
export default Feed
