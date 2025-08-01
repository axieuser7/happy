import React from 'react';
import { Header } from '@/components/21st-navbar';
import { User, Sun, Moon, Bot, MessageSquare, Zap, Shield, Brain, Users, Award, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface OmOssProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  menuItems: any[];
}

export function OmOss({ theme, toggleTheme, menuItems }: OmOssProps) {
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
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-pink-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              🤖 AI-Driven Solutions
            </Badge>
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Om
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}Axie Studio
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Vi är specialister på att skapa intelligenta digitala lösningar som revolutionerar kundservice 
              genom avancerad AI-teknik och chatbot-integration.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Vår Mission
              </h2>
              <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                På Axie Studio tror vi på kraften av intelligent automation. Vi hjälper företag att 
                transformera sin kundservice genom att implementera AI-agenter och chatbots som 
                använder företagsspecifik information för att leverera exceptionell support.
              </p>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Våra lösningar är inte bara tekniskt avancerade - de är designade för att förstå 
                och representera ditt företag på bästa möjliga sätt, vilket resulterar i en 
                kundservice som är både effektiv och personlig.
              </p>
            </div>
            <div className="relative">
              <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-gradient-to-br from-purple-100 to-pink-100'}`}>
                <Bot className="w-16 h-16 text-purple-600 mb-4" />
                <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  AI-Driven Excellence
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Våra AI-agenter lär sig kontinuerligt från din företagsinformation och 
                  förbättrar sin förmåga att hjälpa kunder över tid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-pink-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Våra Specialiteter
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Vi erbjuder skräddarsydda AI-lösningar som integreras sömlöst med dina befintliga system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className={theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'}>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  Intelligenta Chatbots
                </CardTitle>
                <CardDescription className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Avancerade chatbots som förstår kontext och levererar personliga svar baserat på din företagsinformation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className={theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'}>
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  AI-Agenter
                </CardTitle>
                <CardDescription className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Sofistikerade AI-agenter som kan hantera komplexa kundförfrågningar och utföra specifika uppgifter.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className={theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'}>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  Snabb Integration
                </CardTitle>
                <CardDescription className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Sömlös integration med dina befintliga system och databaser för optimal prestanda.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Varför Välja Axie Studio?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Expertis
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Djup kunskap inom AI och maskininlärning
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Kvalitet
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Högsta standard på alla våra leveranser
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Snabbhet
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Effektiv implementation och snabb time-to-market
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Säkerhet
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                GDPR-kompatibla lösningar med högsta säkerhet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-r from-purple-600 to-pink-600'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Redo att Revolutionera Din Kundservice?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Låt oss hjälpa dig att implementera AI-lösningar som tar din kundservice till nästa nivå.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100"
              onClick={() => window.open('https://service.axiestudio.se/en#contact', '_blank')}
            >
              Kontakta Oss
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-purple-600"
              onClick={() => window.open('https://service.axiestudio.se/en#booking', '_blank')}
            >
              Boka Konsultation
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
            © 2025 Axie Studio. Alla rättigheter förbehållna. Intelligent kundservice genom AI.
          </p>
        </div>
      </footer>
    </div>
  );
}