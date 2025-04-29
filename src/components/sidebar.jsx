"use client"

import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  Home,
  Search,
  Library,
  PlusSquare,
  Heart,
  Download,
  LogIn,
  UserPlus,
  CreditCard,
  Settings,
  ChevronUp,
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react"
import { Button } from "./ui/button"

// Simple theme toggle for React version
function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem("theme")
    return savedTheme || "dark"
  })

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle("dark", theme === "dark")
    // Save theme to localStorage
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-8 h-8 hover:bg-accent"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-4 w-4 text-yellow-300" /> : <Moon className="h-4 w-4 text-purple-700" />}
    </Button>
  )
}

export function Sidebar() {
  const sidebarRef = useRef(null)
  const [showScrollButtons, setShowScrollButtons] = useState(false)
  const [canScrollUp, setCanScrollUp] = useState(false)
  const [canScrollDown, setCanScrollDown] = useState(false)

  const checkScroll = () => {
    if (!sidebarRef.current) return

    const { scrollTop, scrollHeight, clientHeight } = sidebarRef.current
    setCanScrollUp(scrollTop > 0)
    setCanScrollDown(scrollTop < scrollHeight - clientHeight - 5)
    setShowScrollButtons(scrollHeight > clientHeight)
  }

  useEffect(() => {
    const sidebar = sidebarRef.current
    if (sidebar) {
      checkScroll()
      sidebar.addEventListener("scroll", checkScroll)
      window.addEventListener("resize", checkScroll)
    }

    return () => {
      if (sidebar) {
        sidebar.removeEventListener("scroll", checkScroll)
        window.removeEventListener("resize", checkScroll)
      }
    }
  }, [])

  const scrollUp = () => {
    if (!sidebarRef.current) return
    sidebarRef.current.scrollBy({ top: -100, behavior: "smooth" })
  }

  const scrollDown = () => {
    if (!sidebarRef.current) return
    sidebarRef.current.scrollBy({ top: 100, behavior: "smooth" })
  }

  return (
    <div className="relative flex flex-col h-full w-[210px] bg-background border-r border-border text-foreground">
      {showScrollButtons && canScrollUp && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-16 left-1/2 -translate-x-1/2 z-10 rounded-full bg-background/80 hover:bg-accent/90 w-8 h-8"
          onClick={scrollUp}
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
      )}

      <div className="p-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary rounded-full p-1">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <span className="font-bold">Spotify</span>
        </Link>
        <ThemeToggle />
      </div>

      <div ref={sidebarRef} className="flex-1 overflow-y-auto scrollbar-hide">
        <nav className="px-3 space-y-1">
          <Link to="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/50">
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link
            to="/search"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/50"
          >
            <Search className="h-5 w-5" />
            Search
          </Link>
          <Link
            to="/library"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/50"
          >
            <Library className="h-5 w-5" />
            Your Library
          </Link>
        </nav>

        <div className="mt-6">
          <nav className="px-3 space-y-1">
            <Link
              to="/create-playlist"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/50"
            >
              <PlusSquare className="h-5 w-5" />
              Create Playlist
            </Link>
            <Link
              to="/liked-songs"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/50"
            >
              <Heart className="h-5 w-5 text-primary" />
              Liked Songs
            </Link>
            <Link
              to="/downloaded"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/50"
            >
              <Download className="h-5 w-5" />
              Downloaded
            </Link>
          </nav>
        </div>

        <div className="mt-6">
          <nav className="px-3 space-y-1">
            <Link
              to="/login"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/50"
            >
              <LogIn className="h-5 w-5" />
              Log In
            </Link>
            <Link
              to="/signup"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/50"
            >
              <UserPlus className="h-5 w-5" />
              Sign Up
            </Link>
            <Link
              to="/premium-plans"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/50"
            >
              <CreditCard className="h-5 w-5" />
              Premium Plans
            </Link>
            <Link
              to="/settings"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/50"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </div>

        {/* Add extra space to ensure scrolling is possible */}
        <div className="h-20"></div>
      </div>

      {showScrollButtons && canScrollDown && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 rounded-full bg-background/80 hover:bg-accent/90 w-8 h-8"
          onClick={scrollDown}
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

