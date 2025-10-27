import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Suggestions from './pages/Suggestions'
import Community from './pages/Community'

export default function App(){
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white shadow p-4 sticky top-0">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <h1 className="text-xl font-semibold">Upcycle Guru</h1>
          <nav className="flex gap-2">
            <Link to="/" className="text-sm">Home</Link>
            <Link to="/upload" className="text-sm">Upload</Link>
            <Link to="/community" className="text-sm">Community</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-md mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/upload" element={<Upload/>} />
          <Route path="/suggestions" element={<Suggestions/>} />
          <Route path="/community" element={<Community/>} />
        </Routes>
      </main>
      <footer className="fixed bottom-4 left-0 right-0 pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          <nav className="bg-white rounded-lg shadow p-3 flex justify-around">
            <Link to="/" className="text-xs">Home</Link>
            <Link to="/upload" className="text-xs font-medium">Upload</Link>
            <Link to="/community" className="text-xs">Share</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}