'use client';

import { forwardRef, useState } from 'react';
import { Activity, Code2, ScanLine, Home, Bell, Settings, Search, Menu, Leaf, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const cropData = [
    { title: "Organic Tomatoes", location: "Ahmedabad Mandi", price: "₹30", unit: "/kg", imgClass: "from-red-400 to-rose-600" },
    { title: "Premium Wheat", location: "Punjab Farms", price: "₹2,200", unit: "/q", imgClass: "from-amber-300 to-orange-500" },
    { title: "Basmati Rice", location: "Karnal Mandi", price: "₹85", unit: "/kg", imgClass: "from-emerald-200 to-teal-500" },
    { title: "Fresh Potatoes", location: "Agra Wholesale", price: "₹18", unit: "/kg", imgClass: "from-yellow-200 to-amber-600" },
    { title: "Red Onions", location: "Nashik Market", price: "₹45", unit: "/kg", imgClass: "from-purple-400 to-fuchsia-600" },
    { title: "Cotton Bales", location: "Gujarat Hub", price: "₹6,500", unit: "/q", imgClass: "from-slate-200 to-gray-400" },
];

const CropBazaarScreen = ({ cropScrollRef, isHoveringCrop }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const filteredCrops = cropData.filter(crop =>
        crop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crop.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="w-full h-full bg-[#f8fafc] dark:bg-[#121212] flex flex-col pt-12 relative overflow-hidden text-black dark:text-white">
            {/* Top Bar Navigation */}
            <div className="px-5 pb-3 pt-2 flex items-center justify-between border-b border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-md sticky top-0 z-20">
                {isSearchOpen ? (
                    <div className="flex-1 mr-2 flex items-center bg-gray-100 dark:bg-white/10 rounded-full px-3 py-1">
                        <Search size={14} className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search tomatoes..."
                            className="bg-transparent border-none outline-none text-sm w-full font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            autoFocus
                        />
                        <button onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} className="text-gray-400 hover:text-gray-600 ml-1">
                            ×
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                            <Leaf className="text-emerald-600 dark:text-emerald-400" size={20} />
                        </div>
                        <div>
                            <h1 className="font-bold text-lg leading-tight tracking-tight">Crop Bazar</h1>
                            <p className="text-[10px] text-gray-500 font-medium">Farmer's Market</p>
                        </div>
                    </div>
                )}

                <div className="flex gap-2 text-gray-600 dark:text-gray-300">
                    {!isSearchOpen && (
                        <button onClick={() => setIsSearchOpen(true)} className="p-2 bg-gray-100 dark:bg-white/5 rounded-full relative">
                            <Search size={16} />
                        </button>
                    )}
                    <button className="p-2 bg-gray-100 dark:bg-white/5 rounded-full relative">
                        <Bell size={16} />
                        <span className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-[#121212]"></span>
                    </button>
                </div>
            </div>

            {/* Scrolling Content */}
            <div
                ref={cropScrollRef}
                data-lenis-prevent="true"
                onMouseEnter={() => { if (isHoveringCrop) isHoveringCrop.current = true; }}
                onMouseLeave={() => { if (isHoveringCrop) isHoveringCrop.current = false; }}
                onTouchStart={() => { if (isHoveringCrop) isHoveringCrop.current = true; }}
                onTouchEnd={() => { if (isHoveringCrop) isHoveringCrop.current = false; }}
                className="flex-1 overflow-y-auto px-5 pt-4 pb-24 [&::-webkit-scrollbar]:hidden overscroll-contain"
            >

                {/* Weather/Market Alert Widget */}
                <div className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-5 text-white shadow-lg shadow-emerald-500/20 mb-6 shrink-0 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    <div className="flex justify-between items-start relative z-10">
                        <div>
                            <p className="text-xs font-medium text-emerald-100 uppercase tracking-widest mb-1">Mandi Updates</p>
                            <h2 className="text-2xl font-bold">Wheat ₹2,200/q</h2>
                            <p className="text-sm text-emerald-50 mt-1 flex items-center gap-1">
                                <span className="text-green-200">▲ +2.5%</span> today
                            </p>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <Activity size={20} />
                        </div>
                    </div>
                </div>

                {/* Quick Categories */}
                <div className="flex gap-4 overflow-x-auto pb-6 -mx-1 px-1 snap-x shrink-0 hidden-scrollbar">
                    {['Grains', 'Vegetables', 'Fruits', 'Seeds', 'Notes'].map((cat, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 snap-center shrink-0">
                            <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 shadow-sm border border-gray-100 dark:border-white/10 flex items-center justify-center">
                                <Leaf size={24} className="text-emerald-500" />
                            </div>
                            <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400">{cat}</span>
                        </div>
                    ))}
                </div>

                {/* Popular Listings feed */}
                <div className="flex justify-between items-end mb-4 shrink-0">
                    <h3 className="font-bold text-lg">Top Listings</h3>
                    <button className="text-xs font-bold text-emerald-600 dark:text-emerald-400">See All</button>
                </div>

                <div className="flex flex-col gap-4 shrink-0">
                    {filteredCrops.length > 0 ? (
                        filteredCrops.map((item, i) => (
                            <div key={i} className="w-full bg-white dark:bg-white/5 rounded-2xl p-4 flex gap-4 border border-gray-100 dark:border-white/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                <div className="w-20 h-20 rounded-xl bg-gray-100 dark:bg-white/10 overflow-hidden relative">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.imgClass} opacity-80 mix-blend-multiply dark:mix-blend-screen`}></div>
                                </div>
                                <div className="flex-1 py-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="font-bold text-sm leading-tight">{item.title}</h4>
                                        <p className="text-[11px] text-gray-500 mt-0.5">{item.location}</p>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <p className="font-bold text-emerald-600 dark:text-emerald-400">{item.price} <span className="text-[10px] font-normal text-gray-500">{item.unit}</span></p>
                                        <button className="text-[10px] font-bold bg-gray-100 dark:bg-white/10 px-3 py-1.5 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/40 hover:text-emerald-700 transition-colors">Buy</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8 text-gray-500 text-sm">
                            <p>No crops found matching "{searchQuery}"</p>
                        </div>
                    )}
                </div>

                {/* Spacer for bottom nav */}
                <div className="h-20 shrink-0"></div>
            </div>

            {/* Bottom Tab Bar */}
            <div className="absolute bottom-0 inset-x-0 h-20 bg-white dark:bg-[#18181b] border-t border-gray-200 dark:border-white/10 flex justify-around items-start pt-4 px-6 z-20 pb-6 rounded-b-[3rem]">
                <button className="flex flex-col items-center gap-1 text-emerald-600">
                    <Home size={22} className="fill-emerald-100 dark:fill-emerald-900/50" />
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-emerald-600 transition-colors">
                    <ShoppingBag size={22} />
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-emerald-600 transition-colors">
                    <Activity size={22} />
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-emerald-600 transition-colors">
                    <Settings size={22} />
                </button>
            </div>

            {/* Overlay Gradient to blend with phone frame bottom radius perfectly */}
            <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-b-[3rem] z-30"></div>
        </div>
    );
};

export const PhoneMockup = forwardRef(({ projects, screensRef, cropScrollRef, isHoveringCrop }, ref) => {
    return (
        <div ref={ref} className="absolute inset-0 flex items-center justify-end lg:justify-center">
            {/* Main Phone Container - Titanium Body aspect ratio */}
            <div className="relative w-[320px] h-[660px] flex-shrink-0 scale-[0.80] md:scale-[0.85] lg:scale-90 transform-gpu z-10 transition-transform duration-500">

                {/* Hardware Buttons (iPhone 17 layout) */}
                {/* Left: Action Button */}
                <div className="absolute top-[130px] -left-[3px] w-[3px] h-[25px] bg-gradient-to-r from-[#444] to-[#666] dark:from-[#777] dark:to-[#999] rounded-l-md shadow-sm z-0 transition-opacity duration-300"></div>
                {/* Left: Volume Up */}
                <div className="absolute top-[180px] -left-[3px] w-[3px] h-[55px] bg-gradient-to-r from-[#444] to-[#666] dark:from-[#777] dark:to-[#999] rounded-l-md shadow-sm z-0 transition-opacity duration-300"></div>
                {/* Left: Volume Down */}
                <div className="absolute top-[250px] -left-[3px] w-[3px] h-[55px] bg-gradient-to-r from-[#444] to-[#666] dark:from-[#777] dark:to-[#999] rounded-l-md shadow-sm z-0 transition-opacity duration-300"></div>

                {/* Right: Power Button */}
                <div className="absolute top-[200px] -right-[3px] w-[3px] h-[80px] bg-gradient-to-l from-[#444] to-[#666] dark:from-[#777] dark:to-[#999] rounded-r-md shadow-sm z-0 transition-opacity duration-300"></div>
                {/* Right: Camera Control */}
                <div className="absolute top-[420px] -right-[2px] w-[2px] h-[40px] bg-gradient-to-l from-[#222] to-[#444] dark:from-[#444] dark:to-[#666] rounded-r-sm shadow-inner z-0 transition-opacity duration-300"></div>

                {/* Outer Titanium Frame */}
                <div className="relative w-full h-full rounded-[3.5rem] bg-gradient-to-b from-[#b8bac0] via-[#8e9096] to-[#b8bac0] dark:from-[#494b50] dark:via-[#2a2b2f] dark:to-[#494b50] p-[3px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] z-10 ring-1 ring-black/20 dark:ring-white/10 transition-colors duration-500">

                    {/* Inner Black Bezel (Thinner for iPhone 17/Pro) */}
                    <div className="relative w-full h-full rounded-[3.35rem] bg-black p-[5px] shadow-[inset_0_0_6px_rgba(0,0,0,0.8)] overflow-hidden">

                        {/* Antenna Bands (subtle cuts in the metallic frame, visible from front slightly) */}
                        <div className="absolute top-0 left-12 w-[4px] h-[3px] bg-black/40 z-20"></div>
                        <div className="absolute top-0 right-12 w-[4px] h-[3px] bg-black/40 z-20"></div>
                        <div className="absolute bottom-0 left-12 w-[4px] h-[3px] bg-black/40 z-20"></div>
                        <div className="absolute bottom-0 right-12 w-[4px] h-[3px] bg-black/40 z-20"></div>

                        {/* Screen Area */}
                        <div className="relative w-full h-full bg-[#111] rounded-[3rem] overflow-hidden">

                            {/* Glass Reflection Indicator overlay */}
                            <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/15 rounded-[3rem]"></div>

                            {/* iPhone 17 Dynamic Island */}
                            <div className="absolute top-[10px] inset-x-0 flex justify-center z-40 pointer-events-none">
                                <div className="w-[110px] h-[32px] bg-black rounded-[16px] flex items-center justify-between px-3 shadow-[0_0_15px_rgba(0,0,0,0.4)] ring-1 ring-white/5 relative">
                                    {/* Ambient/FaceID sensor */}
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#111] shadow-[inset_0_0_2px_rgba(255,255,255,0.15)] flex items-center justify-center">
                                        <div className="w-1 h-1 rounded-full bg-indigo-900/40"></div>
                                    </div>
                                    {/* Camera Lens */}
                                    <div className="w-4 h-4 rounded-full bg-[#0a0a0a] shadow-[inset_0_0_4px_rgba(255,255,255,0.4)] relative flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-800/60 shadow-[0_0_4px_rgba(59,130,246,0.6)]"></div>
                                        {/* Lens flare */}
                                        <div className="absolute top-[2px] right-[2px] w-[2px] h-[2px] bg-white/60 rounded-full blur-[0.5px]"></div>
                                    </div>
                                    {/* Subtle Island Inner Bezel */}
                                    <div className="absolute inset-0 rounded-[16px] shadow-[inset_0_0_4px_rgba(255,255,255,0.05)]"></div>
                                </div>
                            </div>

                            {/* Dynamic Screens */}
                            <div className="relative w-full h-full bg-black">
                                {projects.slice(0, 2).map((project, i) => (
                                    <div
                                        key={i}
                                        ref={el => screensRef.current[i] = el}
                                        className="absolute inset-0 w-full h-full opacity-0 z-10"
                                        style={{ opacity: i === 0 ? 1 : 0 }}
                                    >
                                        {project.customUI ? (
                                            <CropBazaarScreen cropScrollRef={cropScrollRef} isHoveringCrop={isHoveringCrop} />
                                        ) : project.image ? (
                                            project.downloadLink ? (
                                                <a href={project.downloadLink} download="Deva_Resume.pdf" target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer group relative">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover object-top filter contrast-[1.02] saturate-[1.05] transition-transform duration-500 group-hover:scale-[1.03]"
                                                    />
                                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                        <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-bold flex items-center gap-2 shadow-xl">
                                                            Download Resume <Activity size={16} />
                                                        </div>
                                                    </div>
                                                </a>
                                            ) : (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover object-top filter contrast-[1.02] saturate-[1.05]"
                                                />
                                            )
                                        ) : (
                                            <div className={`w-full h-full ${project.color} flex flex-col items-center justify-center p-8 text-center text-white`}>
                                                <h4 className="text-3xl font-black tracking-tighter leading-tight drop-shadow-md">
                                                    {project.title}
                                                </h4>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
PhoneMockup.displayName = 'PhoneMockup';

export const MacbookMockup = forwardRef(({ codeScrollRef, isHoveringCode }, ref) => {
    return (
        <div ref={ref} className="absolute inset-0 flex items-center justify-end lg:justify-center opacity-0 scale-90 md:scale-75 lg:scale-95 ml-[-6rem] md:ml-[-4rem] lg:ml-0 translate-x-12 lg:translate-x-0">
            <div className="relative flex flex-col items-center">

                {/* MacBook Screen Frame */}
                <div className="relative w-[450px] lg:w-[540px] aspect-[16/10.5] bg-black rounded-t-2xl border-[6px] border-[#1a1a1a] dark:border-[#2a2a2a] shadow-2xl overflow-hidden ring-1 ring-white/10">

                    {/* MacBook M4 Notch */}
                    <div className="absolute top-0 inset-x-0 flex justify-center z-50">
                        <div className="w-[100px] h-[22px] bg-[#1a1a1a] dark:bg-[#2a2a2a] rounded-b-[14px] flex items-center justify-center relative">
                            <div className="w-2 h-2 rounded-full bg-[#050505] flex items-center justify-center shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]">
                                <div className="w-0.5 h-0.5 rounded-full bg-blue-500/50"></div>
                            </div>
                        </div>
                    </div>

                    {/* MacBook Screen Content - Realistic Code Editor */}
                    <div className="w-full h-full bg-[#1e1e1e] text-[#d4d4d4] font-mono text-[10px] sm:text-xs pt-8 p-4 flex flex-col relative overflow-hidden">

                        {/* Editor Tabs */}
                        <div className="absolute top-0 left-0 w-full h-8 bg-[#2d2d2d] flex items-end px-2 gap-1 z-40">
                            <div className="bg-[#1e1e1e] px-4 py-1.5 rounded-t font-sans text-[10px] text-white/80 border-t border-blue-500/50 flex items-center gap-2">
                                <span className="text-yellow-400">app.py</span>
                                <span className="text-white/40 hover:text-white/80 cursor-pointer">×</span>
                            </div>
                            <div className="px-4 py-1.5 rounded-t font-sans text-[10px] text-white/40 flex items-center gap-2">
                                <span>model.py</span>
                            </div>
                        </div>

                        {/* Code Content */}
                        <div className="flex-1 overflow-hidden relative mt-2 flex">

                            {/* Line Numbers */}
                            <div className="w-8 flex-shrink-0 text-[#858585] text-right pr-3 select-none flex flex-col pt-2 opacity-50">
                                {[...Array(20)].map((_, i) => <div key={i}>{i + 1}</div>)}
                            </div>

                            {/* Scrolling Code */}
                            <div
                                ref={codeScrollRef}
                                data-lenis-prevent="true"
                                onMouseEnter={() => { if (isHoveringCode) isHoveringCode.current = true; }}
                                onMouseLeave={() => { if (isHoveringCode) isHoveringCode.current = false; }}
                                onTouchStart={() => { if (isHoveringCode) isHoveringCode.current = true; }}
                                onTouchEnd={() => { if (isHoveringCode) isHoveringCode.current = false; }}
                                className="flex-1 relative overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20 pr-2 overscroll-contain"
                            >
                                <div className="pt-2 pb-12 flex flex-col leading-relaxed">
                                    <p><span className="text-[#c586c0]">import</span> <span className="text-[#4ec9b0]">torch</span></p>
                                    <p><span className="text-[#c586c0]">import</span> <span className="text-[#4ec9b0]">cv2</span></p>
                                    <p><span className="text-[#c586c0]">import</span> <span className="text-[#4ec9b0]">numpy</span> <span className="text-[#c586c0]">as</span> <span className="text-[#4ec9b0]">np</span></p>
                                    <p><span className="text-[#c586c0]">import</span> <span className="text-[#4ec9b0]">mediapipe</span> <span className="text-[#c586c0]">as</span> <span className="text-[#4ec9b0]">mp</span></p>
                                    <p className="mt-4"><span className="text-[#569cd6]">def</span> <span className="text-[#dcdcaa]">extract_keypoints</span>(results):</p>
                                    <p className="pl-4">pose = np.array([[res.x, res.y, res.z, res.visibility] <span className="text-[#c586c0]">for</span> res <span className="text-[#c586c0]">in</span> results.pose_landmarks.landmark]).flatten() <span className="text-[#c586c0]">if</span> results.pose_landmarks <span className="text-[#c586c0]">else</span> np.zeros(<span className="text-[#b5cea8]">33</span>*<span className="text-[#b5cea8]">4</span>)</p>
                                    <p className="pl-4">face = np.array([[res.x, res.y, res.z] <span className="text-[#c586c0]">for</span> res <span className="text-[#c586c0]">in</span> results.face_landmarks.landmark]).flatten() <span className="text-[#c586c0]">if</span> results.face_landmarks <span className="text-[#c586c0]">else</span> np.zeros(<span className="text-[#b5cea8]">468</span>*<span className="text-[#b5cea8]">3</span>)</p>
                                    <p className="pl-4"><span className="text-[#c586c0]">return</span> np.concatenate([pose, face])</p>
                                    <p className="mt-4"><span className="text-[#6a9955]"># Load the trained model</span></p>
                                    <p>model = torch.load(<span className="text-[#ce9178]">'gloss_to_pose.pth'</span>)</p>
                                    <p>model.eval()</p>
                                    <p className="mt-4"><span className="text-[#c586c0]">while</span> <span className="text-[#569cd6]">True</span>:</p>
                                    <p className="pl-4">ret, frame = cap.read()</p>
                                    <p className="pl-4"><span className="text-[#6a9955]"># Processing frame through MediaPipe</span></p>
                                    <p className="pl-4">predictions = model(features)</p>
                                    <p className="pl-4">cv2.imshow(<span className="text-[#ce9178]">'AI Sign Language'</span>, frame)</p>
                                    <p className="mt-4"><span className="text-[#6a9955]"># Wait for exit</span></p>
                                    <p className="pl-4"><span className="text-[#c586c0]">if</span> cv2.waitKey(<span className="text-[#b5cea8]">1</span>) & <span className="text-[#b5cea8]">0xFF</span> == <span className="text-[#569cd6]">ord</span>(<span className="text-[#ce9178]">'q'</span>):</p>
                                    <p className="pl-8"><span className="text-[#c586c0]">break</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MacBook Base (Keyboard/Trackpad Deck) */}
                <div className="relative w-[520px] lg:w-[620px] h-[16px] bg-[#d1d5db] dark:bg-[#374151] rounded-b-[16px] shadow-2xl flex justify-center border-t border-white/20">
                    {/* Trackpad Indent */}
                    <div className="w-[100px] h-[4px] bg-[#9ca3af] dark:bg-[#1f2937] rounded-b-md"></div>
                    {/* Bottom Lip Glow */}
                    <div className="absolute bottom-0 w-full h-[2px] bg-white/10 rounded-b-full"></div>
                </div>
            </div>
        </div>
    );
});
MacbookMockup.displayName = 'MacbookMockup';
