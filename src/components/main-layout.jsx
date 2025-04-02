import { Sidebar } from "./sidebar"
import { Player } from "./player"

export function MainLayout({ children, showHeader = true }) {
  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-900 to-black pb-24">{children}</main>
      <Player />
    </div>
  )
}

