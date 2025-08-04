// app/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MessageCircle, Users, Zap, Shield, Globe, Star, ArrowRight, Check } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Page: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 relative overflow-hidden transition-colors">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400/30 dark:bg-purple-700/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/25 dark:bg-blue-700/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/20 dark:bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-green-400/20 dark:bg-green-600/25 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-yellow-400/25 dark:bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1500" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
           
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium">Features</a>
            <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium">Pricing</a>
            <ThemeToggle />
            <button
              onClick={() => router.push('/rooms')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl hidden md:flex hover:scale-105 hover:shadow-xl transition"
            >
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <h1 className={`text-6xl md:text-6xl font-bold mb-8 leading-tight ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} transition-all duration-1000`}>
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Chat </span>Rooms
        </h1>
        <h2 className="text-4xl md:text-4xl font-bold mb-8">
          Connect in <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Style</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Experience the future of communication with intelligent rooms, lightning-fast messaging, and seamless collaboration tools.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <button
            onClick={() => router.push('/rooms')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all flex items-center group"
          >
            Start Chatting Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Modern Teams</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to build vibrant communities and streamline communication.
          </p>
        </div>
        {/* Features List (optional render) */}
      </section>

      {/* CTA */}
      <section id="pricing" className="relative z-10 px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to Transform Your <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Communication?</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Join thousands of teams already using ChatRooms to build better connections.
        </p>

        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-12 shadow-lg">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center text-purple-700 dark:text-purple-300 font-medium">
              <Check className="mr-3 text-green-500" size={20} /> Free forever plan
            </div>
            <div className="flex items-center text-purple-700 dark:text-purple-300 font-medium">
              <Check className="mr-3 text-green-500" size={20} /> No credit card required
            </div>
            <div className="flex items-center text-purple-700 dark:text-purple-300 font-medium">
              <Check className="mr-3 text-green-500" size={20} /> Setup in under 2 minutes
            </div>
          </div>
        </div>

        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-2xl font-bold text-xl hover:scale-105 hover:shadow-2xl transition-all">
          Start Your Free Room Today
        </button>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <MessageCircle className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">ChatRooms</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 ChatRooms. Building the future of communication.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
