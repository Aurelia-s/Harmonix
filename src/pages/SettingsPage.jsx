"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Bell, Volume2, Lock, Eye, Globe, Database, HelpCircle, Info, ChevronLeft } from "lucide-react"
import { Button } from "../components/ui/button"
import { Switch } from "../components/ui/switch"
import { Slider } from "../components/ui/slider"
import { Separator } from "../components/ui/separator"
import { MainLayout } from "../components/main-layout"

export default function SettingsPage() {
  const [volume, setVolume] = useState(80)
  const [notifications, setNotifications] = useState(true)
  const [autoplay, setAutoplay] = useState(true)
  const [offlineMode, setOfflineMode] = useState(false)
  const [explicitContent, setExplicitContent] = useState(false)
  const [dataSaver, setDataSaver] = useState(false)

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="ghost" size="icon" className="rounded-full bg-black/40 hover:bg-black/60">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">Account</h2>
            <div className="space-y-4 bg-zinc-900/60 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-zinc-400">user@example.com</p>
                </div>
                <Button variant="outline" className="text-sm">
                  Change
                </Button>
              </div>

              <Separator className="bg-zinc-800" />

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Password</h3>
                  <p className="text-sm text-zinc-400">Last changed 3 months ago</p>
                </div>
                <Button variant="outline" className="text-sm">
                  Change
                </Button>
              </div>

              <Separator className="bg-zinc-800" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-zinc-400" />
                  <div>
                    <h3 className="font-medium">Privacy Settings</h3>
                    <p className="text-sm text-zinc-400">Manage your data and privacy preferences</p>
                  </div>
                </div>
                <Button variant="ghost" className="text-sm">
                  Manage
                </Button>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Playback</h2>
            <div className="space-y-4 bg-zinc-900/60 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Volume2 className="h-5 w-5 text-zinc-400" />
                  <div>
                    <h3 className="font-medium">Volume level</h3>
                    <p className="text-sm text-zinc-400">Adjust the default volume level</p>
                  </div>
                </div>
                <div className="w-32">
                  <Slider
                    value={[volume]}
                    max={100}
                    step={1}
                    onValueChange={(value) => setVolume(value[0])}
                    className="w-full"
                  />
                </div>
              </div>

              <Separator className="bg-zinc-800" />

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Autoplay</h3>
                  <p className="text-sm text-zinc-400">Play similar songs when your music ends</p>
                </div>
                <Switch checked={autoplay} onCheckedChange={setAutoplay} />
              </div>

              <Separator className="bg-zinc-800" />

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Offline Mode</h3>
                  <p className="text-sm text-zinc-400">Only play downloaded content</p>
                </div>
                <Switch checked={offlineMode} onCheckedChange={setOfflineMode} />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Content</h2>
            <div className="space-y-4 bg-zinc-900/60 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-zinc-400" />
                  <div>
                    <h3 className="font-medium">Explicit Content</h3>
                    <p className="text-sm text-zinc-400">Allow playback of explicit-rated content</p>
                  </div>
                </div>
                <Switch checked={explicitContent} onCheckedChange={setExplicitContent} />
              </div>

              <Separator className="bg-zinc-800" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-zinc-400" />
                  <div>
                    <h3 className="font-medium">Language</h3>
                    <p className="text-sm text-zinc-400">Choose your preferred language</p>
                  </div>
                </div>
                <Button variant="outline" className="text-sm">
                  English
                </Button>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Data</h2>
            <div className="space-y-4 bg-zinc-900/60 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Database className="h-5 w-5 text-zinc-400" />
                  <div>
                    <h3 className="font-medium">Data Saver</h3>
                    <p className="text-sm text-zinc-400">Reduces data usage while streaming</p>
                  </div>
                </div>
                <Switch checked={dataSaver} onCheckedChange={setDataSaver} />
              </div>

              <Separator className="bg-zinc-800" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-zinc-400" />
                  <div>
                    <h3 className="font-medium">Notifications</h3>
                    <p className="text-sm text-zinc-400">Receive notifications about new releases</p>
                  </div>
                </div>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">About</h2>
            <div className="space-y-4 bg-zinc-900/60 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-zinc-400" />
                  <div>
                    <h3 className="font-medium">Version</h3>
                    <p className="text-sm text-zinc-400">App version 1.0.0</p>
                  </div>
                </div>
              </div>

              <Separator className="bg-zinc-800" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-zinc-400" />
                  <div>
                    <h3 className="font-medium">Help</h3>
                    <p className="text-sm text-zinc-400">Get support and troubleshooting</p>
                  </div>
                </div>
                <Button variant="ghost" className="text-sm">
                  Visit Help Center
                </Button>
              </div>
            </div>
          </section>

          <div className="pt-4 pb-8">
            <Button variant="outline" className="w-full">
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

