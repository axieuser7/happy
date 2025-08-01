import React, { useState } from 'react';
import { Header } from '@/components/21st-navbar';
import { HeroVideoDialog } from '@/components/hero-video-dialog';
import { OmOss } from '@/components/OmOss';
import { User, Sun, Moon, Play, Star, ArrowRight, CheckCircle, Globe, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Svenska menyalternativ
const menuItems = [
  {
    text: "Tjänster",
    items: [
      {
        text: "Webbutveckling",
        description: "Moderna och responsiva webbsidor",
        to: "/tjanster/webbutveckling",
      },
      {
        text: "Mobilappar",
        description: "iOS och Android applikationer",
        to: "/tjanster/mobilappar",
      },
      {
        text: "Konsultation",
        description: "Teknisk rådgivning och strategi",
        to: "/tjanster/konsultation",
      }
    ]
  },
  {
    text: "Om Oss",
    to: "/om-oss"
  },
  {
    text: "Portfolio",
    items: [
      {
        text: "Webbprojekt",
        description: "Våra senaste webbsidor och applikationer",
        to: "/portfolio/webb",
      },
      {
        text: "Mobilappar",
        description: "Innovativa mobilapplikationer",
        to: "/portfolio/mobil",
      }
    ]
  },
  {
    text: "Kontakt",
    to: "/kontakt"
  }
];

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [currentPage, setCurrentPage] = useState<string>('home');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Handle navigation
  const handleNavigation = (path: string) => {
    if (path === '/om-oss') {
      setCurrentPage('om-oss');
    } else if (path.startsWith('http')) {
      window.open(path, '_blank');
    } else {
      setCurrentPage('home');
    }
  };

  // Update menu items to use navigation handler
  const updatedMenuItems = menuItems.map(item => ({
    ...item,
    to: item.to,
    items: item.items?.map(subItem => ({
      ...subItem,
      onClick: () => handleNavigation(subItem.to)
    })),
    onClick: item.to ? () => handleNavigation(item.to) : undefined
  }));

  if (currentPage === 'om-oss') {
    return <OmOss theme={theme} toggleTheme={toggleTheme} menuItems={updatedMenuItems} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <Header
        theme={theme}
        logo={
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.jpg" 
              alt="Axie Studio" 
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Axie Studio
            </span>
          </div>
        }
        menuItems={updatedMenuItems}
        onThemeChange={toggleTheme}
        rightContent={
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost"
              onClick={toggleTheme}
              className={theme === 'dark' ? 'text-white hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button 
              variant={theme === 'dark' ? 'outline' : 'default'}
              className={theme === 'dark' ? 'text-white border-gray-600 hover:bg-gray-800' : ''}
            >
              <User className="mr-2 h-4 w-4" />
              Logga In
            </Button>
          </div>
        }
      />

      {/* Hero Section */}
      <section 
        className={`py-20 px-4 relative ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
        style={{
          backgroundImage: `url('/Untitled design (1).png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative z-10">
            <Badge variant="secondary" className="mb-4">
              🎮 Creative Excellence
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Creative
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              We create cutting-edge digital solutions that push the boundaries of gaming, 
              digital art, and interactive experiences. From AI-powered applications to immersive worlds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900">
                Learn More
              </Button>
            </div>
          </div>

          {/* Video Hero */}
          <div className="max-w-4xl mx-auto relative z-10">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc="https://drive.google.com/file/d/1p0s7qS7b3MHgWEbJMe3lTmFzWUPuTVkQ/preview"
              thumbnailSrc="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
              thumbnailAlt="Axie Studio creative showcase"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Why Choose Axie Studio?
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              We combine creative excellence with technical expertise to deliver 
              exceptional digital experiences that captivate and engage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className={theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white'}>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  Global Reach
                </CardTitle>
                <CardDescription className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Our solutions reach users worldwide with precision and creative excellence.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    99.9% Uptime
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className={theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white'}>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  Lightning Performance
                </CardTitle>
                <CardDescription className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Optimized solutions that deliver exceptional speed and user experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    &lt;100ms Response Time
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className={theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white'}>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  Security First
                </CardTitle>
                <CardDescription className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  GDPR-compliant solutions with the highest security standards.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    ISO 27001 Certified
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-r from-purple-600 to-pink-600'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-purple-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-purple-100">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-purple-100">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-purple-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Ready to Start?
          </h2>
          <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Let us help you bring your digital visions to life with creative excellence and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={() => window.open('https://service.axiestudio.se/en#contact', '_blank')}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className={theme === 'dark' ? 'text-white border-gray-600' : ''}
              onClick={() => window.open('https://service.axiestudio.se/en#booking', '_blank')}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 border-t ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="/logo.jpg" 
              alt="Axie Studio" 
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Axie Studio
            </span>
          </div>
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Axie Studio. All rights reserved. Creative excellence through innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;