"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MenuItem {
  text: string
  to?: string
  items?: {
    text: string
    description?: string
    to: string
  }[]
}

interface HeaderProps {
  logo?: React.ReactNode
  menuItems?: MenuItem[]
  rightContent?: React.ReactNode
  theme?: 'light' | 'dark'
  onThemeChange?: () => void
  className?: string
}

export function Header({
  logo,
  menuItems = [],
  rightContent,
  theme = 'light',
  onThemeChange,
  className
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

  const isDark = theme === 'dark'

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60",
      isDark ? "bg-gray-900/80 border-gray-700" : "bg-white/80 border-gray-200",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {logo}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.items ? (
                  <div>
                    <button
                      className={cn(
                        "flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        isDark 
                          ? "text-gray-300 hover:text-white hover:bg-gray-800" 
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      )}
                      onMouseEnter={() => setOpenDropdown(item.text)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <span>{item.text}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {/* Dropdown */}
                    {openDropdown === item.text && (
                      <div
                        className={cn(
                          "absolute top-full left-0 mt-1 w-64 rounded-md shadow-lg border",
                          isDark 
                            ? "bg-gray-800 border-gray-700" 
                            : "bg-white border-gray-200"
                        )}
                        onMouseEnter={() => setOpenDropdown(item.text)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="py-2">
                          {item.items.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.to}
                              className={cn(
                                "block px-4 py-3 text-sm transition-colors",
                                isDark
                                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                              )}
                            >
                              <div className="font-medium">{subItem.text}</div>
                              {subItem.description && (
                                <div className={cn(
                                  "text-xs mt-1",
                                  isDark ? "text-gray-400" : "text-gray-500"
                                )}>
                                  {subItem.description}
                                </div>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.to}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isDark 
                        ? "text-gray-300 hover:text-white hover:bg-gray-800" 
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    )}
                  >
                    {item.text}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Right Content */}
          <div className="hidden md:flex items-center space-x-4">
            {rightContent}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isDark ? "text-white hover:bg-gray-800" : ""}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={cn(
            "md:hidden border-t py-4",
            isDark ? "border-gray-700" : "border-gray-200"
          )}>
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.items ? (
                    <div>
                      <button
                        className={cn(
                          "flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors",
                          isDark 
                            ? "text-gray-300 hover:text-white hover:bg-gray-800" 
                            : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        )}
                        onClick={() => setOpenDropdown(openDropdown === item.text ? null : item.text)}
                      >
                        <span>{item.text}</span>
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform",
                          openDropdown === item.text ? "rotate-180" : ""
                        )} />
                      </button>
                      
                      {openDropdown === item.text && (
                        <div className="mt-2 ml-4 space-y-1">
                          {item.items.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.to}
                              className={cn(
                                "block px-3 py-2 text-sm rounded-md transition-colors",
                                isDark
                                  ? "text-gray-400 hover:text-white hover:bg-gray-800"
                                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                              )}
                            >
                              {subItem.text}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.to}
                      className={cn(
                        "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        isDark 
                          ? "text-gray-300 hover:text-white hover:bg-gray-800" 
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      )}
                    >
                      {item.text}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile Right Content */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                {rightContent}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}