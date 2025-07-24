'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MessageCircle, Users, Zap, Shield, Globe, Star, ArrowRight, Play, Check } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

interface RoomCardProps {
  name: string;
  users: number;
  topic: string;
  isActive: boolean;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transform cursor-pointer transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl group">
        <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const RoomCard: React.FC<RoomCardProps> = ({ name, users, topic, isActive, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-purple-400/50 transition-all duration-300 hover:bg-white hover:shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
        </div>
        <p className="text-gray-600 text-sm mb-2">{topic}</p>
        <div className="flex items-center text-purple-600 text-sm font-medium">
          <Users size={14} className="mr-1" />
          {users} active
        </div>
      </div>
    </div>
  );
};

const ChatAppLanding: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const router = useRouter();
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <MessageCircle size={32} />,
      title: "Instant Messaging",
      description: "Lightning-fast real-time messaging with advanced features like reactions, threads, and file sharing."
    },
    {
      icon: <Users size={32} />,
      title: "Smart Rooms",
      description: "Create topic-based rooms with custom permissions, moderation tools, and seamless user management."
    },
    {
      icon: <Zap size={32} />,
      title: "Lightning Speed",
      description: "Built for performance with optimized delivery, offline support, and instant synchronization."
    },
    {
      icon: <Shield size={32} />,
      title: "Enterprise Security",
      description: "End-to-end encryption, secure authentication, and compliance-ready infrastructure."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Reach",
      description: "Connect users worldwide with multi-language support and global content delivery."
    },
    {
      icon: <Star size={32} />,
      title: "Premium Experience",
      description: "Intuitive design, customizable themes, and advanced analytics for better engagement."
    }
  ];

 

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-400/30 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/25 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-400/25 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-gradient-to-br from-yellow-400/25 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      <header className="relative z-10 px-6 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="  rounded-xl flex items-center justify-center">
             <img src="/image-1.png" width={100} height={100} className='w-[5px] h-[5px]' alt="Logo" />
            </div>
           
          </div>
          <div className="flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">Features</a>
            
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">Pricing</a>
            <button onClick={()=>{
              router.push('/rooms');
            }} className="bg-gradient-to-r hidden md:flex from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </button>
             <div className="fixed top-4 right-4 z-50">
                    <ThemeToggle />
              </div>
          </div>
        </nav>
      </header>

      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-6xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Chat {" "}</span>
              Rooms
            </h1>
            <h1 className="text-6xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Connect in
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Style</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the future of communication with intelligent rooms, lightning-fast messaging, and seamless collaboration tools.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button onClick={()=>{
               router.push('/rooms');
              }} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center group">
                Start Chatting Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
            
            </div>

         
           
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Modern Teams</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build vibrant communities and streamline communication
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 cursor-pointer lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

  

      
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Communication?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of teams already using ChatRooms to build better connections
          </p>
          
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200 mb-12 shadow-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center text-purple-700 font-medium">
                <Check className="mr-3 text-green-500" size={20} />
                Free forever plan
              </div>
              <div className="flex items-center text-purple-700 font-medium">
                <Check className="mr-3 text-green-500" size={20} />
                No credit card required
              </div>
              <div className="flex items-center text-purple-700 font-medium">
                <Check className="mr-3 text-green-500" size={20} />
                Setup in under 2 minutes
              </div>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-2xl font-bold text-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            Start Your Free Room Today
          </button>
        </div>
      </section>

    
      <footer className="relative z-10 px-6 py-12 border-t border-gray-200 bg-white/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <MessageCircle className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">ChatRooms</span>
          </div>
          <p className="text-gray-600">
            © 2025 ChatRooms. Building the future of communication.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ChatAppLanding;