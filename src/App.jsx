import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import LibraryPage from "./pages/LibraryPage"
import CreatePlaylistPage from "./pages/CreatePlaylistPage"
import LikedSongsPage from "./pages/LikedSongsPage"
import DownloadedPage from "./pages/DownloadedPage"
import SettingsPage from "./pages/SettingsPage"
import PaymentPage from "./pages/PaymentPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import PremiumPlansPage from "./pages/PremiumPlansPage"
// import PaymentCompletePage from "./pages/PaymentCompletePage"
import PaymentGatewayPage from "./pages/PaymentGatewayPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/create-playlist" element={<CreatePlaylistPage />} />
        <Route path="/liked-songs" element={<LikedSongsPage />} />
        <Route path="/downloaded" element={<DownloadedPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-gateway" element={<PaymentGatewayPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/premium-plans" element={<PremiumPlansPage />} />
        {/* <Route path="/payment-complete" element={<PaymentCompletePage />} /> */}
      </Routes>
    </Router>
  )
}

export default App

