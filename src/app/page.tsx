'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  return (
    <main className="relative flex  min-h-screen flex-col items-center justify-center overflow-hidden text-white">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-purple-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,0,255,0.2)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-fuchsia-300/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-30 animate-float"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10  max-w-4xl w-full text-center p-8 backdrop-blur-sm bg-white/5 rounded-3xl shadow-2xl">
        <h1 className="text-6xl font-bold mb-6 animate-text bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
          WebRoast
        </h1>
        <p className="text-2xl mb-8 animate-fade-in-up">Roast websites, not kebabs!</p>

        <Link href="/roast" passHref>
          <button className="bg-white text-purple-600 hover:bg-purple-100 font-bold text-xl py-4 px-8 rounded-full shadow-lg transition duration-300 mb-12 hover:scale-105 active:scale-95 animate-bounce">
            Try for Free
          </button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <FeatureCard
            title="Hyderabadi Flavor"
            description="Get your roasts served with a side of Hyderabadi spice!"
            icon="🌶️"
            isHovered={hoveredCard === 0}
            setHovered={() => setHoveredCard(0)}
            setUnhovered={() => setHoveredCard(null)}
          />
          <FeatureCard
            title="Safe for Work"
            description="We keep it funny without crossing the line. No biryani puns, we promise!"
            icon="🤐"
            isHovered={hoveredCard === 1}
            setHovered={() => setHoveredCard(1)}
            setUnhovered={() => setHoveredCard(null)}
          />
          <FeatureCard
            title="Instant Laughs"
            description="Generate hilarious website critiques faster than you can say 'baigan'!"
            icon="😂"
            isHovered={hoveredCard === 2}
            setHovered={() => setHoveredCard(2)}
            setUnhovered={() => setHoveredCard(null)}
          />
          <FeatureCard
            title="Share the Fun"
            description="Easily share roasts with your friends and on social media."
            icon="🚀"
            isHovered={hoveredCard === 3}
            setHovered={() => setHoveredCard(3)}
            setUnhovered={() => setHoveredCard(null)}
          />
        </div>
      </div>

      <footer className="relative z-10 mt-8 md:mt-16 px-4 py-3 md:py-4 text-center">
        <p className="text-xs md:text-sm opacity-75 max-w-xs md:max-w-none mx-auto leading-relaxed">
          © 2024 WebRoast 💖 <br className="md:hidden" />
          All rights reserved. <br className="hidden sm:inline md:hidden" />
          No websites were harmed in the making of this app.
        </p>
      </footer>
    </main>
  );
}

function FeatureCard({ title, description, icon, isHovered, setHovered, setUnhovered }: { title: string, description: string, icon: string, isHovered: boolean, setHovered: () => void, setUnhovered: () => void }) {
  return (
    <div 
      className={`bg-white/10 p-6 rounded-lg backdrop-blur-sm transition duration-300 transform ${isHovered ? 'scale-105 bg-white/20' : ''}`}
      onMouseEnter={setHovered}
      onMouseLeave={setUnhovered}
    >
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-2">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="opacity-80">{description}</p>
    </div>
  );
}