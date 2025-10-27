import React, {useState} from 'react'

const initial = [
  {id:1, title:'Bottle Planter', author:'Asha', desc:'Made a self-watering planter from 2 bottles.'},
  {id:2, title:'T-shirt Tote', author:'Ravi', desc:'Old shirt converted to a grocery tote.'}
]

export default function Community(){
  const [posts, setPosts] = useState(initial)
  const [form, setForm] = useState({title:'', desc:''})
  function submit(e){
    e.preventDefault()
    const next = { id: Date.now(), author:'You', ...form }
    setPosts([next, ...posts])
    setForm({title:'', desc:''})
  }

  return (
    <div className="space-y-4">
      <form onSubmit={submit} className="bg-white p-3 rounded shadow space-y-2">
        <input value={form.title} onChange={e=>setForm({...form, title:e.target.value})} placeholder="Project title" className="w-full p-2 border rounded" />
        <textarea value={form.desc} onChange={e=>setForm({...form, desc:e.target.value})} rows={3} placeholder="Describe your project" className="w-full p-2 border rounded" />
        <button className="bg-indigo-600 text-white py-2 rounded w-full">Share</button>
      </form>

      <div className="space-y-3">
        {posts.map(p=> (
          <div key={p.id} className="bg-white p-3 rounded shadow">
            <div className="flex justify-between">
              <strong>{p.title}</strong>
              <span className="text-xs text-slate-500">{p.author}</span>
            </div>
            <p className="text-sm mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}