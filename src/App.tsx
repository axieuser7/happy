import React, { useState } from 'react';
import { Header } from '@/components/21st-navbar';
import { HeroVideoDialog } from '@/components/hero-video-dialog';
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

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <Header
        theme={theme}
        logo={
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              TechSverige
            </span>
          </div>
        }
        menuItems={menuItems}
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
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              🇸🇪 Gjort i Sverige
            </Badge>
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Framtidens
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Teknik
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Vi skapar innovativa digitala lösningar som driver svensk innovation framåt. 
              Från AI-drivna applikationer till hållbara teknologier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Kom Igång
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className={theme === 'dark' ? 'text-white border-gray-600' : ''}>
                Läs Mer
              </Button>
            </div>
          </div>

          {/* Video Hero */}
          <div className="max-w-4xl mx-auto">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
              thumbnailSrc="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
              thumbnailAlt="Svensk teknologi demonstration"
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
              Varför Välja Oss?
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Vi kombinerar svensk kvalitet med internationell expertis för att leverera 
              exceptionella digitala upplevelser.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className={theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white'}>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  Global Räckvidd
                </CardTitle>
                <CardDescription className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Våra lösningar når användare över hela världen med svensk precision och kvalitet.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    99.9% Upptid
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className={theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white'}>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  Blixtsnabb Prestanda
                </CardTitle>
                <CardDescription className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Optimerade lösningar som levererar exceptionell hastighet och användarupplevelse.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    &lt;100ms Responstid
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
                  Säkerhet Först
                </CardTitle>
                <CardDescription className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  GDPR-kompatibla lösningar med högsta säkerhetsstandarder enligt svensk lag.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    ISO 27001 Certifierad
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Nöjda Kunder</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-100">Projekt Levererade</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-100">År av Erfarenhet</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Redo att Börja?
          </h2>
          <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Låt oss hjälpa dig att förverkliga dina digitala visioner med svensk kvalitet och innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Starta Ditt Projekt
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className={theme === 'dark' ? 'text-white border-gray-600' : ''}>
              Boka Konsultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 border-t ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              TechSverige
            </span>
          </div>
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 TechSverige AB. Alla rättigheter förbehållna. Gjort med ❤️ i Sverige.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;