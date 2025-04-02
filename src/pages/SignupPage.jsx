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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [password, setPassword] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [month, setMonth] = useState("")
  const [day, setDay] = useState("")
  const [year, setYear] = useState("")
  const [gender, setGender] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [dataConsent, setDataConsent] = useState(false)
  const [termsConsent, setTermsConsent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to home page after successful signup
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
          <h1 className="text-3xl font-bold text-white text-center mb-8">Sign up for free to start listening</h1>

          <div className="space-y-4 mb-8">
            <Button
              variant="outline"
              className="w-full bg-transparent border-zinc-700 hover:border-white text-white justify-center gap-2"
            >
              <Facebook className="h-5 w-5 text-blue-500" />
              Sign up with Facebook
            </Button>

            <Button
              variant="outline"
              className="w-full bg-transparent border-zinc-700 hover:border-white text-white justify-center gap-2"
            >
              <Apple className="h-5 w-5" />
              Sign up with Apple
            </Button>

            <Button
              variant="outline"
              className="w-full bg-transparent border-zinc-700 hover:border-white text-white justify-center"
            >
              Sign up with Google
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
                What's your email?
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-zinc-900 border-zinc-700 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-email" className="text-white">
                Confirm your email
              </Label>
              <Input
                id="confirm-email"
                type="email"
                placeholder="Enter your email again"
                className="bg-zinc-900 border-zinc-700 text-white"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Create a password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
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

            <div className="space-y-2">
              <Label htmlFor="display-name" className="text-white">
                What should we call you?
              </Label>
              <Input
                id="display-name"
                type="text"
                placeholder="Enter a profile name"
                className="bg-zinc-900 border-zinc-700 text-white"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
              />
              <p className="text-xs text-zinc-400">This appears on your profile.</p>
            </div>

            <div className="space-y-2">
              <Label className="text-white">What's your date of birth?</Label>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                  <Select value={month} onValueChange={setMonth}>
                    <SelectTrigger className="bg-zinc-900 border-zinc-700 text-white">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((m, i) => (
                        <SelectItem key={i} value={(i + 1).toString()}>
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-1">
                  <Select value={day} onValueChange={setDay}>
                    <SelectTrigger className="bg-zinc-900 border-zinc-700 text-white">
                      <SelectValue placeholder="Day" />
                    </SelectTrigger>
                    <SelectContent>
                      {days.map((d) => (
                        <SelectItem key={d} value={d.toString()}>
                          {d}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-1">
                  <Select value={year} onValueChange={setYear}>
                    <SelectTrigger className="bg-zinc-900 border-zinc-700 text-white">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((y) => (
                        <SelectItem key={y} value={y.toString()}>
                          {y}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-white">What's your gender?</Label>
              <RadioGroup value={gender} onValueChange={setGender} className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" className="text-green-500" />
                  <Label htmlFor="male" className="text-white">
                    Male
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" className="text-green-500" />
                  <Label htmlFor="female" className="text-white">
                    Female
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="non-binary" id="non-binary" className="text-green-500" />
                  <Label htmlFor="non-binary" className="text-white">
                    Non-binary
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" className="text-green-500" />
                  <Label htmlFor="other" className="text-white">
                    Other
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="prefer-not-to-say" id="prefer-not-to-say" className="text-green-500" />
                  <Label htmlFor="prefer-not-to-say" className="text-white">
                    Prefer not to say
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="marketing"
                  checked={marketingConsent}
                  onCheckedChange={(checked) => setMarketingConsent(checked)}
                  className="mt-1"
                />
                <Label htmlFor="marketing" className="text-zinc-400 text-sm">
                  I would like to receive marketing messages from Spotify about Spotify products, services, and
                  promotions.
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="data-sharing"
                  checked={dataConsent}
                  onCheckedChange={(checked) => setDataConsent(checked)}
                  className="mt-1"
                />
                <Label htmlFor="data-sharing" className="text-zinc-400 text-sm">
                  Share my registration data with Spotify's content providers for marketing purposes.
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={termsConsent}
                  onCheckedChange={(checked) => setTermsConsent(checked)}
                  className="mt-1"
                  required
                />
                <Label htmlFor="terms" className="text-zinc-400 text-sm">
                  I agree to the{" "}
                  <Link to="#" className="text-green-500 hover:underline">
                    Spotify Terms and Conditions of Use
                  </Link>{" "}
                  and{" "}
                  <Link to="#" className="text-green-500 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </Label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-black font-bold"
              disabled={isLoading || !termsConsent}
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>

          <div className="text-center mt-8">
            <p className="text-zinc-400">
              Already have an account?{" "}
              <Link to="/login" className="text-white hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

