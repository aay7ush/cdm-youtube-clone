import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Videos = ({ videos }) => {
  if (!videos?.length)
    return <h2 className="text-3xl font-medium">Loading...</h2>

  return (
    <div className="flex flex-wrap justify-around gap-y-5">
      {videos.map((item) => (
        <div key={item.id} className="max-w-xs">
          <Link to={item.id.videoId && `/video/${item.id.videoId}`}>
            <img
              src={item.snippet?.thumbnails?.medium?.url}
              alt={item.snippet?.title}
              className="rounded-xl"
            />
          </Link>
          <div className="font-medium">
            <h5 className="text-lg">{item.snippet?.title.slice(0, 60)}</h5>
            <div className="flex items-center gap-1 text-gray-600">
              <p>{item.snippet?.channelTitle}</p>
              <CheckCircle2 size="20px" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Videos
