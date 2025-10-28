import React, { useState, useEffect, useCallback } from 'react';
import { Home, Upload, Recycle, Users, LogOut, Loader, KeyRound, Mail, UserPlus, LogIn, Send, Coffee, Box, Dribbble, Heart, Zap, Aperture } from 'lucide-react';

// --- BASE64 LOGO DATA ---
// Logo image: Gemini_Generated_Image_bl649dbl649dbl64.jpg
const LOGO_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7eGlmAAEAAAABAAAAAQAAAAAAAABgBAABAAAAAgAAAAoBAAEAAAAAAAEAAABwCAABAAAAAQAAAACcCAABAAAAAQAAAATgCAABAAAAAQAAACYgAwACAAAAFAAAAIsgAwACAAAAFAAAAJogBQABAAAAFQAAAKUgBQABAAAAFQAAAKwgMgADAAAAWAAAALkgAAAABgD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhkYHBw8CwkKFhQTDgwOHR4XHhwqKuL/+wBDAwICDAwQCAgQDQgQEBgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ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";

// --- LOCAL AUTHENTICATION MOCK ---
const LOCAL_STORAGE_KEY = 'upcycleGuruLocalUser';

const mockSignIn = (email, password) => {
  if (email && password && password.length >= 4) {
    const mockUser = { uid: `local_user_${email}`, email: email, isAnonymous: false };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockUser));
    return Promise.resolve(mockUser);
  }
  return Promise.reject({ code: 'auth/invalid-credentials', message: 'Invalid credentials or weak password.' });
};

const mockSignOut = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  return Promise.resolve();
};

const getLocalUser = () => {
  const userJson = localStorage.getItem(LOCAL_STORAGE_KEY);
  return userJson ? JSON.parse(userJson) : null;
};

// --- MOCK COMMUNITY DATA ---
const initialCommunityPosts = [
  { id: 1, title: 'Bottle Planter', desc: 'Made a self-watering planter from 2 bottles.', authorEmail: 'admin@upcycle.com', color: 'green', timestamp: new Date(Date.now() - 3600000) },
  { id: 2, title: 'T-shirt Tote', desc: 'Old shirt converted to a grocery tote.', authorEmail: 'testuser', color: 'indigo', timestamp: new Date(Date.now() - 7200000) }
];


// --- COMMON UI COMPONENTS ---

const LoadingIndicator = () => (
  <div className="flex flex-col items-center justify-center p-12 text-blue-500">
    <Loader className="w-8 h-8 animate-spin" />
    <p className="mt-2 text-sm font-medium">Starting application...</p>
  </div>
);

const IconButton = ({ children, icon: Icon, onClick, color = 'blue', disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-white font-semibold rounded-lg shadow-md transition duration-300 transform active:scale-95
      ${color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-500 hover:bg-red-600'}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `}
  >
    {Icon && <Icon className="w-5 h-5" />}
    {children}
  </button>
);

const InputField = ({ label, id, type = 'text', value, onChange, icon: Icon, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full ${
          Icon ? 'pl-10' : 'pl-4'
        } pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150`}
        required
      />
    </div>
  </div>
);

// --- 1. HOME VIEW ---
const HomeView = ({ setPage }) => {
  return (
    <div className="space-y-4">
      <section className="bg-white rounded-xl p-4 shadow-lg">
        <h2 className="text-xl font-bold text-slate-800">Turn waste into wonder</h2>
        <p className="text-sm text-slate-600 mt-1">Upload an item photo or describe it — get creative upcycle ideas instantly.</p>
        <div className="mt-4 flex gap-2">
          <button onClick={() => setPage('upload')} className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
            Start Upcycling
          </button>
        </div>
      </section>

      <section className="bg-white rounded-xl p-4 shadow-lg">
        <h3 className="font-semibold text-lg text-slate-800">Trending Ideas</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li className="p-2 bg-slate-50 rounded-md shadow-sm">
            <span className="font-medium">Glass jar</span> &rarr; Desk organizer
          </li>
          <li className="p-2 bg-slate-50 rounded-md shadow-sm">
            <span className="font-medium">Old T-shirt</span> &rarr; Reusable tote
          </li>
          <li className="p-2 bg-slate-50 rounded-md shadow-sm">
            <span className="font-medium">Plastic bottle</span> &rarr; Self-watering planter
          </li>
        </ul>
      </section>
    </div>
  )
}

// --- 2. UPLOAD VIEW ---
const UploadView = ({ navigateToSuggestions }) => {
  const [desc, setDesc] = useState('');
  const [fileName, setFileName] = useState(null);
  
  const popularItems = [
    { label: "Plastic Bottle", value: "plastic bottle" },
    { label: "Old T-Shirt", value: "old t-shirt" },
    { label: "Cardboard Box", value: "cardboard box" },
    { label: "Glass Jar", value: "glass jar" },
    { label: "Wine Corks", value: "wine corks" },
    { label: "Wooden Pallet", value: "wooden pallet" },
  ];

  function handleFile(e) {
    const f = e.target.files[0];
    if (f) setFileName(f.name);
  }

  function submit(itemDesc = desc) {
    const payload = { desc: itemDesc || fileName || 'Unknown item' };
    navigateToSuggestions(payload);
  }
  
  function handleSuggestionClick(item) {
      setDesc(item); // Update the textarea too for visual confirmation
      submit(item);
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">What do you want to upcycle?</h2>

      {/* QUICK SUGGESTIONS SECTION */}
      <div className="bg-white rounded-xl p-4 shadow-lg">
        <label className="block text-sm font-semibold text-slate-700 mb-2">Quick Suggestions</label>
        <div className="flex flex-wrap gap-2">
          {popularItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleSuggestionClick(item.value)}
              className="px-3 py-1.5 text-sm bg-purple-500 text-white rounded-full font-medium hover:bg-purple-600 transition shadow-sm"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* UPLOAD SECTION */}
      <div className="bg-white rounded-xl p-4 shadow-lg">
        <label className="block text-sm font-semibold text-slate-700 mb-2">Upload Image</label>
        <input type="file" onChange={handleFile} className="mt-2 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" accept="image/*" />
        {fileName && <p className="text-xs mt-3 text-green-600 font-medium">Selected: {fileName}</p>}
      </div>

      {/* DESCRIBE SECTION */}
      <div className="bg-white rounded-xl p-4 shadow-lg">
        <label className="block text-sm font-semibold text-slate-700 mb-2">Or Describe the Item</label>
        <textarea
          value={desc}
          onChange={e => setDesc(e.target.value)}
          rows={3}
          className="w-full mt-2 p-3 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g. 'two plastic bottles and a cork' or 'an old wooden pallet'"
        />
      </div>

      <button onClick={() => submit()} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-md">
        Get Ideas
      </button>
    </div>
  )
}

// --- 3. SUGGESTIONS VIEW ---
function mockIdeas(item) {
  const base = item.toLowerCase();
  
  if (base.includes('bottle')) return [
    { title: 'Self-watering Planter', desc: 'Cut the bottle in half, invert the top, and use a wick to create a perfect self-watering system for small herbs.', icon: Recycle },
    { title: 'Desk Organizer Tower', desc: 'Cut the bottoms of several bottles at different heights and stack them to organize pens, pencils, and scissors.', icon: Upload },
    { title: 'DIY Piggy Bank', desc: 'Decorate a large plastic bottle, cut a slot in the cap, and use it as a fun, clear piggy bank.', icon: Heart }
  ];
  if (base.includes('t-shirt') || base.includes('shirt')) return [
    { title: 'Reusable Tote Bag (No-Sew)', desc: 'Cut off the sleeves and the neck, then fringe the bottom and tie the fringes together to create a simple grocery tote.', icon: Recycle },
    { title: 'Rag Rug or Trivet', desc: 'Cut the fabric into strips and braid or crochet them into a colorful, soft floor mat or hot trivet.', icon: Users },
    { title: 'Cleaning Cloths', desc: 'Cut the t-shirt into small squares for durable, absorbent, and reusable cleaning cloths.', icon: Home }
  ];
  if (base.includes('cardboard') || base.includes('box')) return [
    { title: 'Drawer Dividers', desc: 'Cut large boxes into smaller sections and join them to create custom, organized dividers for drawers or cabinets.', icon: Box },
    { title: 'Cable Management Box', desc: 'Decorate a medium-sized box, cut holes on the sides, and place a power strip inside to hide messy cables.', icon: Zap },
    { title: 'Kids Play Oven/Stove', desc: 'Use a large box as the main frame and add drawn elements (knobs, burners) to make a fun, pretend kitchen set.', icon: Aperture }
  ];
  if (base.includes('jar') || base.includes('glass')) return [
    { title: 'Spice or Bulk Storage', desc: 'Clean thoroughly and label them for storing spices, herbs, or small quantities of dried goods.', icon: Coffee },
    { title: 'Candle Holders/Lanterns', desc: 'Decorate the outside with lace, paint, or glitter to create beautiful, ambient candle holders or small outdoor lanterns.', icon: Heart },
    { title: 'Bathroom Organizer', desc: 'Paint the jars and use them to neatly organize toothbrushes, cotton swabs, and makeup brushes.', icon: Users }
  ];
  if (base.includes('cork')) return [
    { title: 'Photo/Memo Board', desc: 'Glue corks together side-by-side in a frame to create a beautiful, rustic pin-board for notes and photos.', icon: Dribbble },
    { title: 'Bath Mat', desc: 'Slice the corks in half lengthwise and glue them onto a waterproof backing for a naturally water-resistant bath mat.', icon: Home },
    { title: 'Plant Markers', desc: 'Glue a skewer to the base of the corks and write the name of your herbs/plants on them.', icon: Recycle }
  ];
  if (base.includes('pallet') || base.includes('wooden')) return [
    { title: 'Simple Patio Bench', desc: 'Stack two pallets, secure them, and add cushions for a rustic, outdoor seating area.', icon: Home },
    { title: 'Vertical Garden Planter', desc: 'Seal the gaps in a pallet to hold soil, then stand it upright to create a space-saving vertical garden.', icon: Recycle },
    { title: 'Coffee Table with Wheels', desc: 'Clean, sand, and varnish a single pallet, then attach caster wheels for a movable coffee table.', icon: Upload }
  ];
  
  // Default ideas if no keyword matches
  return [
    { title: 'Creative Craft Project', desc: `A unique and inspiring craft idea for your ${item}.`, icon: Recycle },
    { title: 'New Functional Item', desc: `A practical, everyday repurpose idea using your ${item}.`, icon: Upload },
    { title: 'Aesthetic Decor Piece', desc: `A simple decor idea to enhance your home using your ${item}.`, icon: Heart }
  ];
}

const SuggestionsView = ({ routerState }) => {
  const item = (routerState && routerState.desc) || 'an item';
  const ideas = mockIdeas(item);

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl p-4 shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600">Ideas for "{item}"</h2>
        <p className="text-xs text-slate-600 mt-1">These are mock suggestions for demo purposes.</p>
      </div>

      <div className="space-y-4">
        {ideas.map((i, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
              <i.icon className="w-5 h-5 text-blue-500" /> {i.title}
            </h3>
            <p className="text-sm text-slate-700 mt-1">{i.desc}</p>
            <div className="mt-3 flex gap-2">
              <button className="text-xs px-3 py-1 bg-slate-100 border border-slate-300 rounded-full hover:bg-slate-200 transition">Save</button>
              <button className="text-xs px-3 py-1 bg-slate-100 border border-slate-300 rounded-full hover:bg-slate-200 transition">Share Idea</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- 4. COMMUNITY VIEW (MOCK DATA) ---
const CommunityView = ({ userEmail }) => {
  const [posts, setPosts] = useState(initialCommunityPosts);
  const [form, setForm] = useState({ title: '', desc: '' });
  const [isPosting, setIsPosting] = useState(false);
  
  async function submit(e) {
    e.preventDefault();
    if (!form.title || !form.desc) return;

    setIsPosting(true);

    const newPost = {
        id: Date.now(),
        title: form.title,
        desc: form.desc,
        authorEmail: userEmail || 'guest-user',
        timestamp: new Date(),
        color: ['green', 'indigo', 'blue'][Math.floor(Math.random() * 3)]
    };

    setPosts(prevPosts => [newPost, ...prevPosts]);
    setForm({ title: '', desc: '' });
    
    // Slight delay to simulate network latency
    setTimeout(() => setIsPosting(false), 500);
  }

  const getBorderColor = (color) => {
    switch(color) {
      case 'green': return 'border-green-500';
      case 'indigo': return 'border-indigo-500';
      case 'blue': return 'border-blue-500';
      default: return 'border-slate-300';
    }
  }

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'Just now';
    const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
    return date.toLocaleDateString('en-US', { hour: '2-digit', minute: '2-digit' });
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Share Your Project</h2>
      <form onSubmit={submit} className="bg-white p-4 rounded-xl shadow-lg space-y-3">
        <input
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          placeholder="Project Title (e.g., 'Desk Organizer')"
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          disabled={isPosting}
          required
        />
        <textarea
          value={form.desc}
          onChange={e => setForm({ ...form, desc: e.target.value })}
          rows={3}
          placeholder="Describe how you made it!"
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          disabled={isPosting}
          required
        />
        <button 
          className={`text-white py-2 rounded-lg w-full font-semibold transition shadow flex items-center justify-center gap-2 
            ${isPosting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}
          `}
          disabled={isPosting}
        >
          {isPosting ? 'Posting...' : <><Send className="w-5 h-5"/> Share Your Upcycle</>}
        </button>
      </form>

      <h2 className="text-2xl font-bold text-slate-800">Community Posts ({posts.length})</h2>
      <p className="text-xs text-slate-500 -mt-2">Posts are stored for the current session only and will disappear on browser refresh.</p>
      <div className="space-y-4">
        {posts.map(p => (
            <div key={p.id} className={`bg-white p-4 rounded-xl shadow-lg border-l-4 ${getBorderColor(p.color)}`}>
              <div className="flex justify-between items-start">
                <strong className="text-lg font-bold text-slate-800">{p.title}</strong>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-slate-700 font-medium bg-slate-100 px-2 py-0.5 rounded-full mb-1">
                    {p.authorEmail?.split('@')[0]}
                  </span>
                  <span className="text-xs text-slate-500">
                    {formatTimestamp(p.timestamp)}
                  </span>
                </div>
              </div>
              <p className="text-sm mt-2 text-slate-700">{p.desc}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}


// --- AUTHENTICATION VIEW (LOCAL) ---
const AuthView = ({ authMode, setAuthMode, onAuthAction, error, message, isSubmitting, setError, setMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isRegister = authMode === 'register';
  const isForgot = authMode === 'forgot';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister && password !== confirmPassword) {
      onAuthAction('error', 'Passwords do not match.');
      return;
    }
    onAuthAction('login', email, password); 
  };

  const AuthHeader = ({ title, subtitle }) => (
  <header className="mb-8 text-center">
    <div className="flex justify-center mb-4">
      <img src="/logo.jpg" alt="Upcycle Guru Logo" className="w-24 h-24 rounded-full object-cover" />
    </div>
      <h2 className="text-3xl font-extrabold text-slate-800">{title}</h2>
      <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
    </header>
  );

  return (
    <div className="p-6 bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-auto">
      {isRegister ? (
        <AuthHeader 
          title="Welcome to Upcycle Guru" 
          subtitle="We are delighted to be a part of your Upcycle family!" 
        />
      ) : isForgot ? (
        <AuthHeader title="Reset Password" subtitle="This feature is disabled for demo purposes." />
      ) : (
        <AuthHeader 
          title="Welcome to Upcycle Guru" 
          subtitle="Transform your trash into treasure—sign in to get started!" 
        />
      )}

      {error && <div className="p-3 mb-4 text-sm font-medium text-red-700 bg-red-100 rounded-lg border border-red-200">{error}</div>}
      {message && <div className="p-3 mb-4 text-sm font-medium text-green-700 bg-green-100 rounded-lg border border-green-200">{message}</div>}

      <form onSubmit={handleSubmit}>
        <InputField
          id="email"
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={Mail}
          placeholder="your@example.com"
        />

        {!isForgot && (
          <InputField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={KeyRound}
            placeholder="Min 4 characters"
          />
        )}

        {isRegister && (
          <InputField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            icon={KeyRound}
            placeholder="Confirm your password"
          />
        )}

        {/* Action Button */}
        <IconButton
          icon={isRegister ? UserPlus : isForgot ? Mail : LogIn}
          disabled={isSubmitting || isForgot}
        >
          {isSubmitting ? 'Processing...' : isRegister ? 'Register & Log In' : isForgot ? 'Disabled for Demo' : 'Log In'}
        </IconButton>
      </form>

      {/* Switcher Links */}
      <div className="mt-6 text-center text-sm">
        {isForgot ? (
          <button
            onClick={() => { setAuthMode('login'); setError(''); setMessage(''); }}
            className="text-blue-600 hover:text-blue-800 font-medium transition duration-150"
          >
            &#8592; Back to Login
          </button>
        ) : (
          <>
            <button
              onClick={() => { setAuthMode(isRegister ? 'login' : 'register'); setError(''); setMessage('');}}
              className="text-blue-600 hover:text-blue-800 font-medium transition duration-150"
            >
              {isRegister ? 'Already have an account? Log In' : 'New User? Create an Account'}
            </button>
            <br />
            {!isRegister && (
              <p className="text-slate-500 mt-2 block w-full">Forgot Password is disabled.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};


// --- MAIN APP COMPONENT ---

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState('home'); 
  const [routerState, setRouterState] = useState({});
  const [authMode, setAuthMode] = useState('login');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Local Auth Status Listener
  useEffect(() => {
    setUser(getLocalUser());
    setIsLoading(false);
  }, []);

  // Handler to mimic react-router's navigation state push for Upload -> Suggestions
  const navigateToSuggestions = useCallback((state) => {
    setRouterState(state);
    setPage('suggestions');
  }, []);


  // 2. Local Authentication Handlers
  const handleAuthAction = useCallback(async (action, email, password) => {
    setError('');
    setMessage('');
    setIsSubmitting(true);

    try {
      if (action === 'login' || action === 'register') {
        const loggedInUser = await mockSignIn(email, password);
        setUser(loggedInUser);
        setPage('home');
      } else if (action === 'forgot') {
        // Disabled for local mode
        setMessage('Password reset is disabled for demo purposes.');
      } else if (action === 'error') {
        setError(email);
      }
    } catch (e) {
      console.error(e);
      let errorMessage = 'An unknown error occurred.';
      if (e.code === 'auth/invalid-credentials') {
        errorMessage = 'Invalid email or password (must be 4+ chars).';
      }
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await mockSignOut();
      setUser(null);
      setPage('home'); 
      setAuthMode('login');
    } catch (e) {
      console.error("Logout failed:", e);
      setError('Logout failed. Please try again.');
    }
  }, []);

  // 3. Conditional Rendering
  const renderContent = () => {
    if (isLoading) {
      return <LoadingIndicator />;
    }

    const isAuthenticated = !!user;
    const userEmail = user?.email || null;

    if (!isAuthenticated) {
      return (
        <AuthView 
          authMode={authMode} 
          setAuthMode={setAuthMode} 
          onAuthAction={handleAuthAction} 
          error={error} 
          message={message} 
          isSubmitting={isSubmitting} 
          setError={setError}
          setMessage={setMessage}
        />
      );
    }

    // Authenticated views
    switch (page) {
      case 'home':
        return <HomeView setPage={setPage} />;
      case 'upload':
        return <UploadView navigateToSuggestions={navigateToSuggestions} />;
      case 'suggestions':
        return <SuggestionsView routerState={routerState} />;
      case 'community':
        return <CommunityView userEmail={userEmail} />;
      default:
        return <HomeView setPage={setPage} />;
    }
  };

  const NavLink = ({ to, label, icon: Icon, onClick }) => {
    const isLogout = to === 'logout';
    return (
      <button
        onClick={onClick || (() => setPage(to))}
        className={`flex flex-col items-center p-2 text-xs transition duration-150
          ${isLogout ? 'text-red-500 hover:text-red-700' : page === to ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-blue-600'}
        `}
      >
        <Icon className="w-5 h-5 mb-0.5" />
        {label}
      </button>
    )
  };

  const isAuthenticated = !!user;

  return (
    <div className='min-h-screen bg-slate-50 text-slate-900 font-sans pb-16 md:pb-0'>
      <style>{`
        /* Custom Tailwind utility for shadow on top for mobile footer */
        .shadow-top {
          box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1);
        }
      `}</style>

      {/* ---------------------------------------------------- */}
      {/* CONDITIONAL HEADER (Only visible after successful login) */}
      {/* ---------------------------------------------------- */}
      {isAuthenticated && (
        <header className='bg-white shadow p-4 sticky top-0 z-20 hidden md:block'>
  <div className='max-w-md mx-auto flex items-center justify-between'>
    {/* Logo + Title */}
    <div className='flex items-center gap-3'>
      <img 
        src="/logo.jpg" 
        alt="Upcycle Guru Logo"
        className="w-15 h-15 rounded-full object-cover" 
      />
    </div>

    {/* Navigation */}
    <nav className='flex gap-4 items-center'>
      <button onClick={() => setPage('home')} className={`text-sm p-1 ${page === 'home' ? 'font-bold text-blue-600' : 'hover:text-blue-600'}`}>Home</button>
      <button onClick={() => setPage('upload')} className={`text-sm p-1 ${page === 'upload' ? 'font-bold text-blue-600' : 'hover:text-blue-600'}`}>Upload</button>
      <button onClick={() => setPage('suggestions')} className={`text-sm p-1 ${page === 'suggestions' ? 'font-bold text-blue-600' : 'hover:text-blue-600'}`}>Ideas</button>
      <button onClick={() => setPage('community')} className={`text-sm p-1 ${page === 'community' ? 'font-bold text-blue-600' : 'hover:text-blue-600'}`}>Community</button>
      <button 
        onClick={handleLogout} 
        className='text-sm font-bold text-red-600 border border-red-600 rounded-md px-3 py-1.5 hover:bg-red-50 transition duration-150 flex items-center gap-1'>
        <LogOut className="w-4 h-4" /> Logout
      </button>
    </nav>
  </div>
</header>

      )}

      {/* Main Content Area */}
      <main className='max-w-md mx-auto p-4 pt-8 md:pt-4'>
        {renderContent()}
      </main>

      {/* ---------------------------------------------------- */}
      {/* CONDITIONAL MOBILE FOOTER (Only visible after successful login) */}
      {/* ---------------------------------------------------- */}
      {isAuthenticated && (
        <footer className='fixed bottom-0 left-0 right-0 bg-white shadow-top z-10 md:hidden'>
          <div className='max-w-md mx-auto'>
            <nav className='p-1 flex justify-around'>
              <NavLink to="home" label="Home" icon={Home} />
              <NavLink to="upload" label="Upload" icon={Upload} />
              <NavLink to="suggestions" label="Ideas" icon={Recycle} />
              <NavLink to="community" label="Community" icon={Users} />
              <NavLink to="logout" label="Logout" icon={LogOut} onClick={handleLogout} />
            </nav>
          </div>
        </footer>
      )}
    </div>
  );
}
