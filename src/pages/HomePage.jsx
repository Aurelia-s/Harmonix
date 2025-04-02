"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { Button } from "../components/ui/button"
import { MainLayout } from "../components/main-layout"

// Mock data for recently played
const recentlyPlayed = [
  {
    id: "1",
    title: "Chill Mix",
    description: "Relaxing beats for your day",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
  {
    id: "2",
    title: "Hip Hop Mix",
    description: "Fresh hip hop tracks",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
  {
    id: "3",
    title: "Workout Mix",
    description: "Energetic beats to keep you moving",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
  {
    id: "4",
    title: "Focus Mix",
    description: "Concentration-enhancing tracks",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
  {
    id: "5",
    title: "Throwback Mix",
    description: "Nostalgic hits from the past",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
  {
    id: "6",
    title: "Discover Weekly",
    description: "Your weekly mixtape of fresh music",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
]

// Mock data for featured playlists
const featuredPlaylists = [
  {
    id: "7",
    title: "Today's Top Hits",
    description: "Drake is on top of the Hottest 50!",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
  {
    id: "8",
    title: "RapCaviar",
    description: "New music from Kendrick Lamar, Drake and more",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
  {
    id: "9",
    title: "All Out 2010s",
    description: "The biggest songs of the 2010s",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
  {
    id: "10",
    title: "Rock Classics",
    description: "Rock legends & epic songs",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
  {
    id: "11",
    title: "Chill Hits",
    description: "Kick back to the best new and recent chill hits",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
  {
    id: "12",
    title: "Viva Latino",
    description: "Today's top Latin hits",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
]

// Mock data for made for you
const madeForYou = [
  {
    id: "13",
    title: "Daily Mix 1",
    description: "Kendrick Lamar, J. Cole, Drake and more",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
  {
    id: "14",
    title: "Daily Mix 2",
    description: "The Weeknd, Doja Cat, Post Malone and more",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
  {
    id: "15",
    title: "Daily Mix 3",
    description: "Coldplay, Imagine Dragons, OneRepublic and more",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
  {
    id: "16",
    title: "Daily Mix 4",
    description: "Taylor Swift, Olivia Rodrigo, Billie Eilish and more",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
  {
    id: "17",
    title: "Release Radar",
    description: "Catch all the latest music from artists you follow",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
  {
    id: "18",
    title: "On Repeat",
    description: "Songs you've been playing most",
    imageUrl: "/placeholder.svg?height=150&width=150",
    type: "playlist",
  },
]

export default function HomePage() {
  const [greeting, setGreeting] = useState("Good morning")

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting("Good morning")
    else if (hour < 18) setGreeting("Good afternoon")
    else setGreeting("Good evening")
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold mb-6">
          {greeting}
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
        >
          {recentlyPlayed.slice(0, 6).map((item) => (
            <motion.div
              key={item.id}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="bg-zinc-800/40 rounded-md overflow-hidden flex items-center"
            >
              <img src={item.imageUrl || "/placeholder.svg"} alt={item.title} className="h-12 w-12 object-cover" />
              <div className="flex-1 truncate px-3">{item.title}</div>
              <div className="opacity-0 group-hover:opacity-100 p-2">
                <Button size="icon" variant="ghost" className="rounded-full bg-green-500 text-black h-8 w-8">
                  <Play className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Featured Playlists</h2>
            <Button variant="link" className="text-zinc-400 hover:text-white">
              Show all
            </Button>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {featuredPlaylists.map((playlist) => (
              <motion.div
                key={playlist.id}
                variants={item}
                whileHover={{ y: -8 }}
                className="bg-purple-800/40 p-4 rounded-md group"
              >
                <div className="relative mb-4">
                  <img
                    src={playlist.imageUrl || "/placeholder.svg"}
                    alt={playlist.title}
                    className="w-full aspect-square object-cover rounded-md shadow-lg"
                  />
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" className="rounded-full bg-purple-500 text-black h-10 w-10 shadow-lg">
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <h3 className="font-semibold truncate">{playlist.title}</h3>
                <p className="text-sm text-purple-400 line-clamp-2">{playlist.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Made For You</h2>
            <Button variant="link" className="text-purple-400 hover:text-white">
              Show all
            </Button>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {madeForYou.map((playlist) => (
              <motion.div
                key={playlist.id}
                variants={item}
                whileHover={{ y: -8 }}
                className="bg-purple-800/40 p-4 rounded-md group"
              >
                <div className="relative mb-4">
                  <img
                    src={playlist.imageUrl || "/placeholder.svg"}
                    alt={playlist.title}
                    className="w-full aspect-square object-cover rounded-md shadow-lg"
                  />
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" className="rounded-full bg-purple-500 text-black h-10 w-10 shadow-lg">
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <h3 className="font-semibold truncate">{playlist.title}</h3>
                <p className="text-sm text-zinc-400 line-clamp-2">{playlist.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </MainLayout>
  )
}

