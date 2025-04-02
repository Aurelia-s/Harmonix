"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SearchIcon } from "lucide-react"
import { Input } from "../components/ui/input"
import { MainLayout } from "../components/main-layout"

// Mock data for browse categories
const browseCategories = [
  {
    id: "1",
    name: "Podcasts",
    color: "from-purple-700 to-purple-500",
    imageUrl: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "2",
    name: "Live Events",
    color: "from-orange-700 to-orange-500",
    imageUrl: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "3",
    name: "Made For You",
    color: "from-blue-700 to-blue-500",
    imageUrl: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "4",
    name: "New Releases",
    color: "from-pink-700 to-pink-500",
    imageUrl: "/placeholder.svg?height=150&width=150",
  },
  { id: "5", name: "Pop", color: "from-red-700 to-red-500", imageUrl: "/placeholder.svg?height=150&width=150" },
  {
    id: "6",
    name: "Hip-Hop",
    color: "from-yellow-700 to-yellow-500",
    imageUrl: "/placeholder.svg?height=150&width=150",
  },
  { id: "7", name: "Rock", color: "from-green-700 to-green-500", imageUrl: "/placeholder.svg?height=150&width=150" },
  { id: "8", name: "Latin", color: "from-teal-700 to-teal-500", imageUrl: "/placeholder.svg?height=150&width=150" },
  { id: "9", name: "Mood", color: "from-indigo-700 to-indigo-500", imageUrl: "/placeholder.svg?height=150&width=150" },
  {
    id: "10",
    name: "Dance/Electronic",
    color: "from-cyan-700 to-cyan-500",
    imageUrl: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "11",
    name: "Indie",
    color: "from-fuchsia-700 to-fuchsia-500",
    imageUrl: "/placeholder.svg?height=150&width=150",
  },
  { id: "12", name: "Trending", color: "from-rose-700 to-rose-500", imageUrl: "/placeholder.svg?height=150&width=150" },
  {
    id: "13",
    name: "Workout",
    color: "from-amber-700 to-amber-500",
    imageUrl: "/placeholder.svg?height=150&width=150",
  },
  { id: "14", name: "R&B", color: "from-lime-700 to-lime-500", imageUrl: "/placeholder.svg?height=150&width=150" },
  {
    id: "15",
    name: "Country",
    color: "from-emerald-700 to-emerald-500",
    imageUrl: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "16",
    name: "Folk & Acoustic",
    color: "from-sky-700 to-sky-500",
    imageUrl: "/placeholder.svg?height=150&width=150",
  },
]

// Mock data for trending searches
const trendingSearches = [
  "Taylor Swift",
  "Drake",
  "Kendrick Lamar",
  "Billie Eilish",
  "The Weeknd",
  "Bad Bunny",
  "Doja Cat",
  "Post Malone",
  "Ariana Grande",
  "Travis Scott",
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <MainLayout>
      <div className="p-6">
        <div className="mb-6">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <Input
              className="pl-10 bg-zinc-800 border-zinc-700 h-12 text-base"
              placeholder="What do you want to listen to?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {!searchQuery && (
          <>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Browse all</h2>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
              >
                {browseCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className={`relative overflow-hidden rounded-lg aspect-square bg-gradient-to-br ${category.color} cursor-pointer`}
                  >
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{category.name}</h3>
                    </div>
                    <img
                      src={category.imageUrl || "/placeholder.svg"}
                      alt={category.name}
                      className="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover transform rotate-25 translate-x-1/4 translate-y-1/4"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Trending searches</h2>
              <motion.div variants={container} initial="hidden" animate="show" className="flex flex-wrap gap-2">
                {trendingSearches.map((term, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.05, backgroundColor: "#1DB954" }}
                    className="bg-zinc-800 rounded-full px-4 py-2 cursor-pointer"
                    onClick={() => setSearchQuery(term)}
                  >
                    {term}
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </>
        )}

        {searchQuery && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Top results for "{searchQuery}"</h2>
            <p className="text-zinc-400">Search results would appear here...</p>
          </div>
        )}
      </div>
    </MainLayout>
  )
}

