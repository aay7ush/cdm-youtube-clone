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

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="flex md:flex-col md:gap-1 px-5 py-2 overflow-scroll md:overflow-visible scrollbar-hide sticky top-14 h-min bg-white">
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
          className={`flex gap-2 font-medium px-3 py-2 rounded-full transition duration-300 hover:bg-red-600 hover:text-white group ${
            category.name === selectedCategory && 'bg-red-600 text-white'
          }`}
        >
          <span
            className={`group-hover:text-white ${
              category.name === selectedCategory ? 'text-white' : 'text-red-600'
            }`}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </aside>
  )
}
export default Sidebar
