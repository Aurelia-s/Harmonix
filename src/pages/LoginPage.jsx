"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Eye, EyeOff, Facebook, Apple } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Checkbox } from "../components/ui/checkbox"
import { Label } from "../components/ui/label"
import { Separator } from "../components/ui/separator"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to home page after successful login
      window.location.href = "/"
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center">
      <header className="w-full border-b border-zinc-800 p-8">
        <Link to="/">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full p-1">
              <svg viewBox="0 0 24 24" width="32" height="32">
                <path
                  d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <span className="text-white text-2xl font-bold">Spotify</span>
          </div>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-md px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full">
          <h1 className="text-3xl font-bold text-white text-center mb-8">Log in to Spotify</h1>

          <div className="space-y-4 mb-8">
            <Button
              variant="outline"
              className="w-full bg-transparent border-zinc-700 hover:border-white text-white justify-center gap-2"
            >
              <Facebook className="h-5 w-5 text-blue-500" />
              Continue with Facebook
            </Button>

            <Button
              variant="outline"
              className="w-full bg-transparent border-zinc-700 hover:border-white text-white justify-center gap-2"
            >
              <Apple className="h-5 w-5" />
              Continue with Apple
            </Button>

            <Button
              variant="outline"
              className="w-full bg-transparent border-zinc-700 hover:border-white text-white justify-center"
            >
              Continue with Google
            </Button>

            <Button
              variant="outline"
              className="w-full bg-transparent border-zinc-700 hover:border-white text-white justify-center"
            >
              Continue with phone number
            </Button>
          </div>

          <div className="relative mb-8">
            <Separator className="bg-zinc-800" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 text-zinc-400 text-sm">
              or
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email or username
              </Label>
              <Input
                id="email"
                type="text"
                placeholder="Email or username"
                className="bg-zinc-900 border-zinc-700 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="bg-zinc-900 border-zinc-700 text-white pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-zinc-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" checked={rememberMe} onCheckedChange={(checked) => setRememberMe(checked)} />
                <Label htmlFor="remember" className="text-white">
                  Remember me
                </Label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-black font-bold"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Log In"
              )}
            </Button>

            <div className="text-center">
              <Link to="#" className="text-white hover:underline">
                Forgot your password?
              </Link>
            </div>
          </form>

          <Separator className="my-8 bg-zinc-800" />

          <div className="text-center">
            <p className="text-zinc-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-white hover:underline">
                Sign up for Spotify
              </Link>
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

