import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <div className="space-y-4">
      <section className="bg-white rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold">Turn waste into wonder</h2>
        <p className="text-sm text-slate-600">Upload an item photo or describe it — get creative upcycle ideas instantly.</p>
        <div className="mt-3 flex gap-2">
          <Link to="/upload" className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg">Start Upcycling</Link>
        </div>
      </section>

      <section className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-medium">Trending Ideas</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>Glass jar → Desk organizer</li>
          <li>Old T-shirt → Reusable tote</li>
          <li>Plastic bottle → Self-watering planter</li>
        </ul>
      </section>
    </div>
  )
}