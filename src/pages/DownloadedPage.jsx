"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, Play, Clock, MoreHorizontal, Search, Wifi, WifiOff } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Switch } from "../components/ui/switch"
import { MainLayout } from "../components/main-layout"

// Mock data for downloaded songs
const downloadedSongs = [
  {
    id: "1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    downloadedAt: "2 weeks ago",
    duration: "3:20",
    imageUrl: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "2",
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    downloadedAt: "1 month ago",
    duration: "3:23",
    imageUrl: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "3",
    title: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    downloadedAt: "3 weeks ago",
    duration: "3:35",
    imageUrl: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "4",
    title: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    album: "F*CK LOVE 3: OVER YOU",
    downloadedAt: "1 week ago",
    duration: "2:21",
    imageUrl: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "5",
    title: "good 4 u",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    downloadedAt: "2 months ago",
    duration: "2:58",
    imageUrl: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "6",
    title: "Montero (Call Me By Your Name)",
    artist: "Lil Nas X",
    album: "MONTERO",
    downloadedAt: "3 months ago",
    duration: "2:17",
    imageUrl: "/placeholder.svg?height=50&width=50",
  },
]

export default function DownloadedPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [hoveredSongId, setHoveredSongId] = useState(null)
  const [offlineMode, setOfflineMode] = useState(false)

  const filteredSongs = searchQuery
    ? downloadedSongs.filter(
        (song) =>
          song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.album.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : downloadedSongs

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
      <div>
        <div className="bg-gradient-to-b from-blue-900 to-zinc-900 p-8">
          <div className="flex items-end gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-52 h-52 bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center rounded-md shadow-lg"
            >
              <Download className="h-24 w-24 text-white" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-medium uppercase">Playlist</p>
              <h1 className="text-7xl font-bold mt-2 mb-6">Downloaded</h1>
              <p className="text-sm text-zinc-300">{downloadedSongs.length} songs</p>
            </motion.div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="icon" className="rounded-full bg-green-500 text-black h-14 w-14 shadow-lg">
                  <Play className="h-7 w-7" />
                </Button>
              </motion.div>

              <div className="relative max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <Input
                  className="pl-9 bg-zinc-800 border-zinc-700 h-9"
                  placeholder="Search in Downloaded"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm">{offlineMode ? "Offline Mode" : "Online Mode"}</span>
              <div className="flex items-center gap-2">
                <WifiOff className={`h-4 w-4 ${offlineMode ? "text-green-500" : "text-zinc-500"}`} />
                <Switch checked={offlineMode} onCheckedChange={setOfflineMode} />
                <Wifi className={`h-4 w-4 ${!offlineMode ? "text-green-500" : "text-zinc-500"}`} />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="grid grid-cols-12 text-xs text-zinc-400 border-b border-zinc-800 px-4 py-2">
              <div className="col-span-1">#</div>
              <div className="col-span-5">TITLE</div>
              <div className="col-span-3">ALBUM</div>
              <div className="col-span-2">DOWNLOADED</div>
              <div className="col-span-1 flex justify-end">
                <Clock className="h-4 w-4" />
              </div>
            </div>

            <motion.div variants={container} initial="hidden" animate="show" className="space-y-2 mt-2">
              {filteredSongs.map((song, index) => (
                <motion.div
                  key={song.id}
                  variants={item}
                  className="grid grid-cols-12 items-center px-4 py-2 rounded-md hover:bg-zinc-800/50 group"
                  onMouseEnter={() => setHoveredSongId(song.id)}
                  onMouseLeave={() => setHoveredSongId(null)}
                >
                  <div className="col-span-1">
                    {hoveredSongId === song.id ? (
                      <Play className="h-4 w-4 text-white" />
                    ) : (
                      <span className="text-zinc-400">{index + 1}</span>
                    )}
                  </div>
                  <div className="col-span-5 flex items-center gap-3">
                    <img src={song.imageUrl || "/placeholder.svg"} alt={song.title} className="w-10 h-10 rounded" />
                    <div>
                      <p className="font-medium">{song.title}</p>
                      <p className="text-sm text-zinc-400">{song.artist}</p>
                    </div>
                  </div>
                  <div className="col-span-3 text-sm text-zinc-400 truncate">{song.album}</div>
                  <div className="col-span-2 text-sm text-zinc-400">{song.downloadedAt}</div>
                  <div className="col-span-1 flex items-center justify-end gap-2 text-sm text-zinc-400">
                    <span>{song.duration}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 bg-zinc-800/40 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">About Downloaded Music</h3>
            <p className="text-sm text-zinc-400 mb-4">
              Downloaded songs are available offline. You can manage your downloads in the settings. When offline mode
              is enabled, only downloaded content will be available for playback.
            </p>
            <Button variant="outline" size="sm">
              Manage Downloads
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

