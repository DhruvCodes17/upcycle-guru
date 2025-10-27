import React from 'react'
import { useLocation } from 'react-router-dom'

function mockIdeas(item){
  const base = item.toLowerCase()
  if(base.includes('bottle')) return [
    {title:'Self-watering Planter', desc:'Turn a plastic bottle into a planter with a wick.'},
    {title:'Desk Organizer', desc:'Cut and stack bottles to hold pens.'},
    {title:'Bird Feeder', desc:'Use a bottle, a stick and string.'}
  ]
  if(base.includes('t-shirt') || base.includes('shirt')) return [
    {title:'Reusable Tote', desc:'Sew the sleeves and bottom.'},
    {title:'Plant Pot Cover', desc:'Wrap and tie around a pot.'},
    {title:'Patch Quilt', desc:'Combine old shirts into a quilt.'}
  ]
  return [
    {title:'Multi-use Craft', desc:`Creative idea for ${item}`},
    {title:'Functional Item', desc:`Practical repurpose for ${item}`},
    {title:'Decor Piece', desc:`Decor idea using ${item}`}
  ]
}

export default function Suggestions(){
  const loc = useLocation()
  const item = (loc.state && loc.state.desc) || 'an item'
  const ideas = mockIdeas(item)

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-4 shadow">
        <h2 className="font-semibold">Ideas for “{item}”</h2>
        <p className="text-xs text-slate-600">These are AI-style suggestions (mocked for hackathon demo).</p>
      </div>

      <div className="space-y-3">
        {ideas.map((i,idx)=> (
          <div key={idx} className="bg-white rounded-lg p-3 shadow">
            <h3 className="font-medium">{i.title}</h3>
            <p className="text-sm text-slate-700">{i.desc}</p>
            <div className="mt-2 flex gap-2">
              <button className="text-xs px-3 py-1 border rounded">Save</button>
              <button className="text-xs px-3 py-1 border rounded">Find Recycler</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}