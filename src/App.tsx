/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Shield, 
  Car, 
  Briefcase, 
  MessageSquare, 
  ExternalLink, 
  ChevronRight, 
  Server, 
  Cpu, 
  Globe,
  Menu,
  X,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import logo from './logo.png';

// Custom Discord Icon since lucide doesn't have a perfect one sometimes
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [playerCount, setPlayerCount] = useState(0);
  const [isOnline, setIsOnline] = useState(true);

  // Simulate player count update
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayerCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        const next = prev + change;
        return next < 0 ? 0 : next > 128 ? 128 : next;
      });
    }, 5000);
    setPlayerCount(42);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { name: '首頁', href: '#home' },
    { name: '關於我們', href: '#about' },
    { name: '伺服器特色', href: '#features' },
    { name: '規則', href: '#rules' },
    { name: '加入我們', href: '#join' },
  ];

  return (
    <div className="min-h-screen selection:bg-primary selection:text-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border-2 border-primary/20 bg-card">
                <img 
                  src={logo} 
                  alt="LAG CITY Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="text-primary font-black text-xl">LC</div>';
                  }}
                />
              </div>
              <span className="text-2xl font-extrabold tracking-tighter">LAG<span className="text-primary">CITY</span></span>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="https://cfx.re/join/mx53l9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-amber-600 text-dark px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
                >
                  立即遊玩
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white p-2"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-card border-t border-white/10"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-primary block px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="https://cfx.re/join/mx53l9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-dark px-6 py-3 rounded-xl text-base font-bold mt-4 text-center"
                >
                  立即遊玩
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark to-dark z-10" />
          <img 
            src="https://picsum.photos/seed/gta5/1920/1080?blur=2" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left lg:max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-secondary animate-pulse' : 'bg-red-500'}`} />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                {isOnline ? `伺服器在線 - ${playerCount}/128 玩家` : '伺服器維護中'}
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight mb-6 leading-tight">
              開啟你的<br />
              <span className="text-gradient">第二人生</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              LAG CITY 是一個致力於提供高品質、沉浸式體驗的 FiveM 伺服器。
              在這裡，你可以成為任何人，做任何你想做的事。
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="https://cfx.re/join/mx53l9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-primary hover:bg-amber-600 text-dark px-10 py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 group"
              >
                加入伺服器 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://discord.gg/KcDeJRQESE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 px-10 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                <DiscordIcon className="w-6 h-6" /> 加入 Discord
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: '註冊玩家', value: '1,200+', icon: Users },
              { label: '自定義載具', value: '300+', icon: Car },
              { label: '獨特職業', value: '50+', icon: Briefcase },
              { label: '平均在線', value: '60+', icon: Globe },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-primary opacity-50" />
                </div>
                <div className="text-3xl font-black mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">為什麼選擇 <span className="text-primary">LAG CITY</span>?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">我們投入了數千小時開發獨家腳本，只為給你最真實的洛聖都生活。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '穩定流暢',
                desc: '採用頂級伺服器硬體，確保低延遲與極致流暢的遊戲體驗。',
                icon: Cpu
              },
              {
                title: '專業管理',
                desc: '24/7 專業管理團隊，確保遊戲公平性並即時處理玩家問題。',
                icon: Shield
              },
              {
                title: '深度經濟',
                desc: '完善的經濟系統，從洗車工到企業大亨，每一步都充滿挑戰。',
                icon: Briefcase
              },
              {
                title: '自定義內容',
                desc: '獨家車輛、服裝與地圖擴展，讓你的角色與眾不同。',
                icon: Car
              },
              {
                title: '活躍社群',
                desc: '友善且充滿活力的玩家社群，讓你輕鬆找到志同道合的夥伴。',
                icon: MessageSquare
              },
              {
                title: '持續更新',
                desc: '每週更新內容與修復漏洞，伺服器永遠保持新鮮感。',
                icon: Globe
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8">伺服器<span className="text-primary">核心規則</span></h2>
              <p className="text-gray-400 mb-10 text-lg">
                為了維護良好的遊戲環境，請所有玩家務必遵守以下基本準則。
                詳細規則請參閱 Discord 頻道。
              </p>
              
              <div className="space-y-6">
                {[
                  '尊重所有玩家，嚴禁任何形式的歧視或霸凌。',
                  '嚴禁使用外掛、腳本或利用遊戲漏洞獲取利益。',
                  '保持角色扮演（RP）的連貫性，嚴禁無故脫離角色。',
                  '禁止進行無意義的殺戮（RDM）或惡意撞車（VDM）。'
                ].map((rule, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-secondary w-6 h-6" />
                    </div>
                    <p className="text-gray-300 font-medium">{rule}</p>
                  </div>
                ))}
              </div>

              <button className="mt-12 bg-white/10 hover:bg-white/20 px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2">
                查看完整手冊 <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30" />
              <div className="relative p-8 rounded-3xl glass border border-white/10">
                <div className="flex items-center gap-3 mb-6 text-amber-500">
                  <AlertCircle className="w-6 h-6" />
                  <span className="font-black uppercase tracking-widest text-sm">重要提示</span>
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  "Roleplay 的精髓在於創造故事，而不是贏得比賽。
                  請記住，你的行為會影響他人的遊戲體驗。"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-black text-dark">
                    LC
                  </div>
                  <div>
                    <div className="font-bold">伺服器管理員</div>
                    <div className="text-sm text-gray-500">LAG CITY Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-black mb-8">準備好加入<br /><span className="text-primary">戰場</span>了嗎？</h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              加入我們的 Discord 社群，獲取伺服器 IP 並開始你的冒險。
              我們期待在洛聖都見到你！
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://discord.gg/KcDeJRQESE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#5865F2] hover:bg-[#4752C4] text-white px-12 py-5 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#5865F2]/20"
              >
                <DiscordIcon className="w-7 h-7" /> 加入 DISCORD
              </a>
              <a 
                href="https://cfx.re/join/mx53l9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-dark hover:bg-gray-200 px-12 py-5 rounded-2xl font-black text-xl transition-all flex items-center justify-center"
              >
                伺服器 IP
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border border-white/10 bg-card">
                <img 
                  src={logo} 
                  alt="LAG CITY Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="text-primary font-black text-sm">LC</div>';
                  }}
                />
              </div>
              <span className="text-xl font-extrabold tracking-tighter">LAG<span className="text-primary">CITY</span></span>
            </div>
            
            <div className="text-gray-500 text-sm font-medium">
              © 2026 LAG CITY. All rights reserved. 
              <span className="mx-2">|</span>
              非 Rockstar Games 或 Take-Two 官方伺服器。
            </div>

            <div className="flex gap-6">
              <a href="https://discord.gg/KcDeJRQESE" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><DiscordIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
