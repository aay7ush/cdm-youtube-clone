import {
  Code,
  Dumbbell,
  Flame,
  Gamepad2,
  GraduationCap,
  HomeIcon,
  Music,
  Newspaper,
  Popcorn,
  ShoppingBag,
  Trophy,
} from 'lucide-react'

const categories = [
  { name: 'New', icon: <HomeIcon /> },
  { name: 'Trending', icon: <Flame /> },
  { name: 'Coding', icon: <Code /> },
  { name: 'Shopping', icon: <ShoppingBag /> },
  { name: 'Music', icon: <Music /> },
  { name: 'Movies', icon: <Popcorn /> },
  { name: 'Gaming', icon: <Gamepad2 /> },
  { name: 'News', icon: <Newspaper /> },
  { name: 'Sport', icon: <Trophy /> },
  { name: 'Education', icon: <GraduationCap /> },
  { name: 'Gym', icon: <Dumbbell /> },
]

const Sidebar = () => {
  return <h1>Sidebar</h1>
}
export default Sidebar
