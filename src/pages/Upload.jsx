import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function Upload(){
  const [desc, setDesc] = useState('')
  const [fileName, setFileName] = useState(null)
  const navigate = useNavigate()

  function handleFile(e){
    const f = e.target.files[0]
    if(f) setFileName(f.name)
  }
  function submit(){
    const payload = { desc: desc || fileName || 'Unknown item' }
    navigate('/suggestions', { state: payload })
  }

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-4 shadow">
        <label className="block text-sm font-medium">Upload image</label>
        <input type="file" onChange={handleFile} className="mt-2" accept="image/*" />
        {fileName && <p className="text-xs mt-2 text-slate-600">Selected: {fileName}</p>}
      </div>

      <div className="bg-white rounded-lg p-4 shadow">
        <label className="block text-sm font-medium">Or describe the item</label>
        <textarea value={desc} onChange={e=>setDesc(e.target.value)} rows={3} className="w-full mt-2 p-2 border rounded" placeholder="e.g. 'two plastic bottles and a cork'" />
      </div>

      <div className="flex gap-2">
        <button onClick={submit} className="flex-1 bg-blue-600 text-white py-2 rounded-lg">Get Ideas</button>
      </div>
    </div>
  )
}