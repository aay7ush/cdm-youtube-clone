import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import Videos from '../components/Videos'
import fetchAPI from '../lib/fetchAPI'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])

  if (!videoDetail?.snippet)
    return <h2 className="text-3xl font-medium">Loading...</h2>

  const {
    snippet: { title, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail

  return (
    <div className="grid lg:grid-cols-[3fr_1fr]">
      <div className="space-y-3 px-5 font-medium sticky top-14 h-min">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="rounded-xl overflow-hidden"
          width="100%"
          controls
        />
        <p className="text-2xl">{title}</p>
        <div className="flex justify-between text-lg">
          <p className="text-gray-600">{channelTitle}</p>
          <div className="flex gap-5">
            <p>{parseInt(viewCount).toLocaleString()} views</p>
            <p>{parseInt(likeCount).toLocaleString()} likes</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Videos videos={videos} />
      </div>
    </div>
  )
}
export default VideoDetail
