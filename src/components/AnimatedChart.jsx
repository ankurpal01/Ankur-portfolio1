import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

// Exact Theme Colors
const bgBase = '#111d2c';
const bgCard = '#17273a';
const textMuted = '#8fa3b6';
const textBright = '#ffffff';
const cyan = '#00e5ff';
const pink = '#e91e63';
const purple = '#c47fff';
const yellow = '#ffc107';

const Card = ({ children, className = '' }) => (
  <div className={`rounded-lg border border-white/5 relative overflow-hidden ${className}`} style={{ backgroundColor: bgCard }}>
    {children}
  </div>
);

const WaveChart = ({ color, data, delay }) => (
  <div className="absolute bottom-0 left-0 right-0 h-1/2 w-full pointer-events-none">
    <motion.svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full opacity-80"
       animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 3, delay, ease: "easeInOut" }}>
      <defs>
        <linearGradient id={`grad-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={data.d1} fill={`url(#grad-${color.replace('#','')})`} />
      <motion.path 
         fill="none" stroke={color} strokeWidth="1.5"
         animate={{ d: [data.d1, data.d2, data.d1] }}
         transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
    </motion.svg>
  </div>
);

const wave1 = { d1: "M0,30 L20,40 L40,20 L60,35 L80,10 L100,20 L100,50 L0,50 Z", d2: "M0,40 L20,20 L40,30 L60,15 L80,25 L100,10 L100,50 L0,50 Z" };
const wave2 = { d1: "M0,20 L20,35 L40,15 L60,30 L80,20 L100,40 L100,50 L0,50 Z", d2: "M0,10 L20,25 L40,35 L60,10 L80,30 L100,20 L100,50 L0,50 Z" };

const SynopsisView = () => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="flex flex-col gap-4">
    {/* 2. Top Row KPIs */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { title: "Sales", cy: "733.22K", py: "609.21K", pct: "20.36%", color: cyan, wave: wave1 },
        { title: "Profit", cy: "93.44K", py: "81.80K", pct: "14.24%", color: pink, wave: wave2 },
        { title: "Orders", cy: "3312", py: "2587", pct: "28.02%", color: purple, wave: wave1 },
        { title: "Returns", cy: "289", py: "197", pct: "46.70%", color: yellow, wave: wave2 },
      ].map((kpi, i) => (
        <Card key={i} className="h-32 p-3 flex flex-col">
          <div className="flex justify-between">
            <span className="font-bold text-sm" style={{ color: textBright }}>{kpi.title}</span>
            <span className="material-symbols-outlined text-[14px]">info</span>
          </div>
          <div className="text-xs mt-2">
            <span className="font-bold" style={{ color: kpi.color }}>CY {kpi.cy}</span> <span className="px-1">|</span> PY {kpi.py}
          </div>
          <div className="text-xs font-bold mt-1 flex items-center gap-1" style={{ color: kpi.color }}>
            {kpi.pct} <span className="material-symbols-outlined text-[12px]">arrow_drop_up</span>
          </div>
          <WaveChart color={kpi.color} data={kpi.wave} delay={i * 0.2} />
        </Card>
      ))}
    </div>

    {/* 3. Middle Row */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Sales Trend */}
      <Card className="md:col-span-3 p-3 flex flex-col h-56">
        <div className="flex justify-between mb-4">
          <span className="font-bold text-sm" style={{ color: textBright }}>Sales trend</span>
          <span className="material-symbols-outlined text-[14px]">info</span>
        </div>
        <div className="flex-1 flex items-end gap-2 px-2 relative">
           <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px]">
              <span>800k</span><span>600k</span><span>400k</span><span>200k</span>
           </div>
           <div className="ml-6 flex-1 h-full flex items-end justify-between gap-1 border-l border-b border-white/10 pb-1">
             {[40, 55, 75, 80, 60, 90].map((h, i) => (
               <div key={i} className="w-full flex flex-col items-center gap-1">
                 <motion.div className="w-full bg-[#00e5ff]" animate={{ height: [`${h}%`, `${h-10}%`, `${h}%`] }} transition={{ repeat: Infinity, duration: 3, delay: i*0.2 }} />
                 <span className="text-[8px]">{2019+i}</span>
               </div>
             ))}
           </div>
        </div>
      </Card>

      {/* Business Overview Table */}
      <Card className="md:col-span-5 p-3 flex flex-col h-56 overflow-auto">
        <div className="flex justify-between mb-2">
          <span className="font-bold text-sm" style={{ color: textBright }}>Business Overview by Regions</span>
          <span className="material-symbols-outlined text-[14px]">info</span>
        </div>
        <table className="w-full text-[10px] text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-2 font-normal">Region</th><th className="font-normal">Total Sales</th><th className="font-normal">Total Orders</th><th className="font-normal">Total Returns</th><th className="font-normal">Total Profit</th><th className="font-normal">Profit Ratio</th>
            </tr>
          </thead>
          <tbody>
            {[
              { r: 'West', s: '725,457.82', o: 3203, rt: 490, p: '108,418.45', pr: '1.18' },
              { r: 'East', s: '678,781.24', o: 2848, rt: 149, p: '91,522.78', pr: '1.16' },
              { r: 'South', s: '391,721.91', o: 1620, rt: 69, p: '46,749.43', pr: '1.14' },
              { r: 'Central', s: '501,239.89', o: 2323, rt: 92, p: '39,706.36', pr: '1.09' }
            ].map((row, i) => (
              <motion.tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5" animate={{ backgroundColor: ["rgba(255,255,255,0)", "rgba(0,229,255,0.05)", "rgba(255,255,255,0)"] }} transition={{ repeat: Infinity, duration: 4, delay: i*0.5 }}>
                <td className="py-2">{row.r}</td><td>{row.s}</td><td>{row.o}</td><td>{row.rt}</td><td>{row.p}</td><td>{row.pr}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Ranking Overview */}
      <Card className="md:col-span-4 p-3 flex flex-col h-56">
        <div className="flex justify-between mb-2">
          <span className="font-bold text-sm" style={{ color: textBright }}>Ranking Overview</span>
          <span className="material-symbols-outlined text-[14px]">info</span>
        </div>
        <div className="flex justify-between text-[10px] mb-2">
           <div className="flex items-center gap-2">
              Value: <span className="text-cyan-400">◉ Top</span> <span>○ Bottom</span>
           </div>
           <div className="flex items-center gap-2">
              Ranking option: <input type="text" value="3" readOnly className="w-6 bg-transparent border border-white/20 text-center rounded text-[10px]" />
           </div>
        </div>
        <div className="flex gap-4 text-[10px] mb-2">
          <div className="flex flex-col gap-1">
            <span className="mb-1 text-white">Metric</span>
            <span>○ Retail Sales People</span>
            <span className="text-cyan-400">◉ State</span>
            <span>○ City</span>
            <span>○ Customer</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="mb-1 text-white">Measure By</span>
            <span className="text-cyan-400">◉ Sales</span>
            <span>○ Profit</span>
            <span>○ Orders</span>
            <span>○ Returns</span>
          </div>
        </div>
        <table className="w-full text-[9px] text-left mt-1 border-t border-white/10 pt-1">
          <thead><tr><th>Ranking</th><th>State</th><th>Sales</th></tr></thead>
          <tbody>
            <tr><td>457688</td><td>California</td><td>457,687.63</td></tr>
            <tr><td>310876</td><td>New York</td><td>310,876.27</td></tr>
            <tr><td>138642</td><td>Washington</td><td>138,641.27</td></tr>
          </tbody>
        </table>
        <div className="absolute bottom-0 left-0 w-full h-8">
          <motion.svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full" animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <motion.path fill="none" stroke={pink} strokeWidth="1" d="M0,15 L10,5 L20,15 L30,10 L40,15 L50,8 L60,18 L70,12 L80,5 L90,15 L100,10" animate={{ d: ["M0,15 L10,5 L20,15 L30,10 L40,15 L50,8 L60,18 L70,12 L80,5 L90,15 L100,10", "M0,10 L10,15 L20,5 L30,15 L40,10 L50,15 L60,8 L70,18 L80,12 L90,5 L100,15", "M0,15 L10,5 L20,15 L30,10 L40,15 L50,8 L60,18 L70,12 L80,5 L90,15 L100,10"] }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} />
          </motion.svg>
        </div>
      </Card>
    </div>

    {/* 4. Bottom Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Pie Chart */}
      <Card className="p-3 flex flex-col h-48">
        <div className="flex justify-between mb-4">
          <span className="font-bold text-sm" style={{ color: textBright }}>Which Segment Contributed Most Towards Total Sales?</span>
          <span className="material-symbols-outlined text-[14px]">info</span>
        </div>
        <span className="text-[9px] -mt-4 mb-2">Sum of Sales by Segment, Category and Sub-Category</span>
        <div className="flex-1 flex items-center justify-center gap-8">
          <div className="flex flex-col gap-3 text-[10px]">
             <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{backgroundColor: yellow}}></span> Consumer (1.16M)</div>
             <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{backgroundColor: pink}}></span> Corporate (706.15K)</div>
             <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{backgroundColor: cyan}}></span> Home Office (429.65K)</div>
          </div>
          <div className="relative w-28 h-28">
             <motion.div className="w-full h-full rounded-full" style={{ background: `conic-gradient(${yellow} 0% 50%, ${cyan} 50% 68%, ${pink} 68% 100%)` }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} />
             <div className="absolute top-1/2 left-0 -translate-x-12 -translate-y-1/2 text-[10px] bg-bgBase px-1 rounded">50.56%</div>
             <div className="absolute top-1/4 right-0 translate-x-8 -translate-y-1/2 text-[10px] bg-bgBase px-1 rounded">30.76%</div>
             <div className="absolute bottom-1/4 right-0 translate-x-8 translate-y-1/2 text-[10px] bg-bgBase px-1 rounded">18.70%</div>
          </div>
        </div>
      </Card>

      {/* Horizontal Bars */}
      <Card className="p-3 flex flex-col h-48">
        <div className="flex justify-between mb-4">
          <span className="font-bold text-sm" style={{ color: textBright }}>Sales Growth Analysis For Top 5 Sub Categories</span>
          <span className="material-symbols-outlined text-[14px]">info</span>
        </div>
        <div className="flex-1 flex flex-col gap-3 px-2">
           {[
             { n: 'Phones', w: '85%', p: '25.00%' },
             { n: 'Chairs', w: '70%', p: '12.2%' },
             { n: 'Binders', w: '75%', p: '31.7%' },
             { n: 'Storage', w: '60%', p: '15.6%' },
           ].map((item, i) => (
             <div key={i} className="flex items-center gap-2 text-[10px]">
               <div className="w-16">{item.n}</div>
               <div className="flex-1 flex items-center">
                  <motion.div className="h-[1px] bg-cyan-400 relative" animate={{ width: [`${parseInt(item.w)-10}%`, item.w, `${parseInt(item.w)-10}%`] }} transition={{ repeat: Infinity, duration: 3, delay: i*0.4 }}>
                     <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-[6px] border-transparent border-l-cyan-400"></div>
                     <div className="absolute right-0 -bottom-3 text-[9px] text-cyan-400 font-bold whitespace-nowrap">{item.p} <span className="material-symbols-outlined text-[10px]">arrow_drop_up</span></div>
                  </motion.div>
               </div>
             </div>
           ))}
           <div className="flex justify-between text-[9px] border-t border-white/10 pt-1 mt-2 pl-16">
             <span>0K</span><span>50K</span><span>100K</span><span>150K</span>
           </div>
        </div>
      </Card>
    </div>
  </motion.div>
);

const RegionalView = () => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-12 gap-4">
     <Card className="md:col-span-7 h-[420px] p-3 flex flex-col">
       <div className="flex justify-between mb-4">
          <span className="font-bold text-sm" style={{ color: textBright }}>Geographic Density (Global Nodes)</span>
          <span className="material-symbols-outlined text-[14px]">map</span>
       </div>
       <div className="w-full flex-1 relative overflow-hidden bg-[#0d141e] rounded border border-white/5 p-4">
         <div className="grid grid-cols-12 grid-rows-8 gap-1 w-full h-full opacity-70">
           {Array.from({length: 96}).map((_, i) => {
             const isLand = [2,3,4,13,14,15,16,26,27,28,31,32,33,40,41,43,44,45,55,56,57,67,68,9,10,11,21,22].includes(i) || Math.random() > 0.8;
             if (!isLand) return <div key={i}></div>;
             return (
               <motion.div key={i} className="w-full h-full rounded-sm"
                 animate={{ opacity: [0.2, 1, 0.2], backgroundColor: ['#00e5ff', '#c47fff', '#00e5ff'] }}
                 transition={{ repeat: Infinity, duration: 2 + Math.random()*2, delay: Math.random()*2 }}
               />
             )
           })}
         </div>
       </div>
     </Card>
     
     <div className="md:col-span-5 flex flex-col gap-4">
       <Card className="h-48 p-3 flex flex-col">
         <div className="flex justify-between mb-4">
            <span className="font-bold text-sm" style={{ color: textBright }}>Regional Growth Projections</span>
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
         </div>
         <div className="flex-1 flex flex-col justify-around text-[10px]">
            {['West Coast', 'East Coast', 'Central', 'South'].map((r, i) => (
              <div key={i} className="flex items-center gap-2">
                 <span className="w-16">{r}</span>
                 <div className="flex-1 h-2 bg-black/40 rounded overflow-hidden">
                    <motion.div className="h-full rounded" style={{ backgroundColor: i%2===0 ? cyan : pink }} animate={{ width: [`${30+i*15}%`, `${80-i*10}%`, `${30+i*15}%`] }} transition={{ repeat: Infinity, duration: 3+i }} />
                 </div>
              </div>
            ))}
         </div>
       </Card>
       <Card className="flex-1 p-3 flex flex-col">
          <div className="flex justify-between mb-4">
            <span className="font-bold text-sm" style={{ color: textBright }}>Capacity Load</span>
            <span className="material-symbols-outlined text-[14px]">speed</span>
         </div>
         <div className="flex justify-around items-center flex-1">
            <div className="relative w-24 h-24 rounded-full border-4 border-white/10 flex items-center justify-center">
              <motion.svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90">
                <motion.circle cx="50" cy="50" r="45" fill="none" stroke={cyan} strokeWidth="6" strokeDasharray="282" animate={{ strokeDashoffset: [282, 100, 200, 50, 282] }} transition={{ repeat: Infinity, duration: 6 }} />
              </motion.svg>
              <span className="font-bold text-lg" style={{ color: textBright }}>85%</span>
            </div>
            <div className="relative w-24 h-24 rounded-full border-4 border-white/10 flex items-center justify-center">
              <motion.svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90">
                <motion.circle cx="50" cy="50" r="45" fill="none" stroke={yellow} strokeWidth="6" strokeDasharray="282" animate={{ strokeDashoffset: [282, 200, 150, 250, 282] }} transition={{ repeat: Infinity, duration: 4 }} />
              </motion.svg>
              <span className="font-bold text-lg" style={{ color: textBright }}>42%</span>
            </div>
         </div>
       </Card>
     </div>
  </motion.div>
);

const OrdersView = () => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="flex flex-col gap-4">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { t: "Daily Volume", v: "14,209", c: cyan, icon: "local_shipping" },
          { t: "Fulfillment Rate", v: "98.4%", c: pink, icon: "task_alt" },
          { t: "Avg Delivery", v: "2.4 Days", c: yellow, icon: "schedule" }
        ].map((k, i) => (
          <Card key={i} className="h-24 p-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-widest">{k.t}</div>
              <div className="text-2xl font-bold mt-1" style={{ color: textBright }}>{k.v}</div>
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
               <motion.span className="material-symbols-outlined" style={{ color: k.c }} animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, delay: i*0.5 }}>{k.icon}</motion.span>
            </div>
          </Card>
        ))}
     </div>
     <Card className="h-64 p-3 flex flex-col">
        <div className="flex justify-between mb-4">
            <span className="font-bold text-sm" style={{ color: textBright }}>Order Frequency Timeline</span>
            <span className="material-symbols-outlined text-[14px]">insights</span>
         </div>
         <div className="flex-1 w-full relative">
            <motion.svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 3 }}>
              <path fill="none" stroke={purple} strokeWidth="1" d="M0,40 Q10,10 20,30 T40,20 T60,40 T80,10 T100,30" />
              <path fill="none" stroke={cyan} strokeWidth="1" d="M0,20 Q10,40 20,10 T40,40 T60,20 T80,30 T100,10" />
              <path fill="none" stroke={yellow} strokeWidth="1" d="M0,30 Q10,20 20,40 T40,10 T60,30 T80,20 T100,40" />
            </motion.svg>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-full h-[1px] bg-white/20"></div>
               <motion.div className="absolute w-[2px] h-full bg-pink/50 shadow-[0_0_10px_#e91e63]" animate={{ left: ['0%', '100%', '0%'] }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }} />
            </div>
         </div>
     </Card>
  </motion.div>
);

export default function AnimatedChart() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('synopsis');

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="w-full h-auto min-h-[600px] flex flex-col gap-4 p-4 font-sans rounded-2xl border border-outline-variant/10 shadow-2xl relative" style={{ backgroundColor: bgBase, color: textMuted }}>
      
      {/* 1. Header with Interactive Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-4">
        <h2 className="text-lg font-bold" style={{ color: cyan }}>North America Retail Supply Chain and Sales Analysis</h2>
        <div className="flex gap-2 flex-wrap">
          <button 
            onClick={() => setActiveTab('synopsis')}
            className={`px-4 py-1.5 rounded font-semibold text-xs transition-all border ${activeTab === 'synopsis' ? 'text-black' : ''}`}
            style={{ 
              backgroundColor: activeTab === 'synopsis' ? cyan : 'transparent', 
              borderColor: cyan,
              color: activeTab === 'synopsis' ? '#000' : cyan,
              boxShadow: activeTab === 'synopsis' ? `0 0 0 1px ${bgBase}, 0 0 0 2px white` : 'none'
            }}
          >
            Synopsis
          </button>
          <button 
            onClick={() => setActiveTab('regional')}
            className={`px-4 py-1.5 rounded font-semibold text-xs transition-all border ${activeTab === 'regional' ? 'text-black' : ''}`}
            style={{ 
              backgroundColor: activeTab === 'regional' ? cyan : 'transparent', 
              borderColor: cyan,
              color: activeTab === 'regional' ? '#000' : cyan,
              boxShadow: activeTab === 'regional' ? `0 0 0 1px ${bgBase}, 0 0 0 2px white` : 'none'
            }}
          >
            Regional Analysis
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-1.5 rounded font-semibold text-xs transition-all border ${activeTab === 'orders' ? 'text-black' : ''}`}
            style={{ 
              backgroundColor: activeTab === 'orders' ? cyan : 'transparent', 
              borderColor: cyan,
              color: activeTab === 'orders' ? '#000' : cyan,
              boxShadow: activeTab === 'orders' ? `0 0 0 1px ${bgBase}, 0 0 0 2px white` : 'none'
            }}
          >
            Orders
          </button>
        </div>
      </div>

      {/* Main View Area with AnimatePresence */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          {activeTab === 'synopsis' && <SynopsisView key="synopsis" />}
          {activeTab === 'regional' && <RegionalView key="regional" />}
          {activeTab === 'orders' && <OrdersView key="orders" />}
        </AnimatePresence>
      </div>

    </div>
  );
}
