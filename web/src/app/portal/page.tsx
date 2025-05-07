"use client"

import { Search, ChevronDown, Zap, Filter, Users, MessageSquare, CreditCard, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export default function ClientPortal() {
  const [showPlatformDropdown, setShowPlatformDropdown] = useState(false)
  const [showContactedDropdown, setShowContactedDropdown] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)
  const platformRef = useRef<HTMLDivElement>(null)
  const contactedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (platformRef.current && !platformRef.current.contains(event.target as Node)) {
        setShowPlatformDropdown(false)
      }
      if (contactedRef.current && !contactedRef.current.contains(event.target as Node)) {
        setShowContactedDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const creators = [
    {
      username: "alicemedia",
      description: "Lorem ipsum dolor sit amet ldcom drusum dlolor ase.",
      hasShortlist: true,
      followers: "12.5K",
      platform: "Reddit",
    },
    {
      username: "travellervxv",
      description: "Lorem ipsum dolor sit ldcom drausan dolor ias",
      hasShortlist: true,
      followers: "45.8K",
      platform: "N/A",
    },
    {
      username: "fachguru",
      description: "Lorem ipsum dolor ldcom ipsum dolor as",
      hasShortlist: true,
      followers: "78.3K",
      platform: "Reddit",
    },
    {
      username: "tecnguru",
      description: "Lorem ipsum dol ldcom draum noi",
      hasShortlist: false,
      followers: "32.1K",
      platform: "N/A",
    },
    {
      username: "fashionista",
      description: "Lorem ipsum dolor sit amet ldcom drusum cleignzsen",
      hasShortlist: true,
      followers: "156K",
      platform: "Reddit",
    },
    {
      username: "foodiefinds",
      description: "Lorem ipsum dolor sit ldcom drausan dolor ias",
      hasShortlist: true,
      followers: "89.2K",
      platform: "N/A",
    },
    {
      username: "stylishsarah",
      description: "Lorem ipsum dolor ldcom ipsum dolor as",
      hasShortlist: true,
      followers: "67.4K",
      platform: "Reddit",
    },
    {
      username: "gamerguy",
      description: "Lorem ipsum dol ldcom draum noi",
      hasShortlist: false,
      followers: "112K",
      platform: "N/A",
    },
    {
      username: "healthyannah",
      description: "Lorem ipsum dolor sit amet ldcom drusum dolor ese",
      hasShortlist: true,
      followers: "43.7K",
      platform: "Reddit",
    },
    {
      username: "urbanexplore",
      description: "Lorem ipsum dolor sit ldcom drausan dolor ias",
      hasShortlist: true,
      followers: "28.9K",
      platform: "N/A",
    },
    {
      username: "beautybytes",
      description: "Lorem ipsum dolor ldcom ipsum dolor as",
      hasShortlist: true,
      followers: "94.6K",
      platform: "Reddit",
    },
    {
      username: "fitnesstech",
      description: "Lorem ipsum dol ldcom draum noi",
      hasShortlist: false,
      followers: "76.3K",
      platform: "N/A",
    },
  ]

  const filteredCreators = selectedPlatform
    ? creators.filter(creator => 
        selectedPlatform === "Other" 
          ? creator.platform === "N/A"
          : creator.platform === selectedPlatform
      )
    : creators;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="h-8 w-8 text-[#ff4d8d] drop-shadow-[0_0_20px_rgba(255,77,141,0.7)]" />
          <span className="font-semibold">Creator Pulse</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Logout
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full w-[180px] bg-black/20 border-r border-white/10 py-6 px-3">
          <div className="flex items-center gap-2 px-3 mb-8">
            <div className="h-7 w-7 rounded-md bg-[#ff4d8d] flex items-center justify-center shadow-[0_0_20px_rgba(255,77,141,0.7)]">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <h1 className="text-lg font-semibold">Client Portal</h1>
          </div>

          <nav className="space-y-1">
            <Link
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-white/70 hover:bg-[#ff4d8d]/10 hover:text-white rounded-md transition-colors"
            >
              <Users className="h-4 w-4" />
              <span className="text-sm">Dashboard</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-3 py-2 bg-[#ff4d8d]/10 text-white rounded-md transition-colors"
            >
              <Users className="h-4 w-4" />
              <span className="text-sm">Creators</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-white/70 hover:bg-[#ff4d8d]/10 hover:text-white rounded-md transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm">Messages</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-white/70 hover:bg-[#ff4d8d]/10 hover:text-white rounded-md transition-colors"
            >
              <CreditCard className="h-4 w-4" />
              <span className="text-sm">Billing</span>
            </Link>
          </nav>
        </div>

        {/* Main content */}
        <div className="ml-[180px] w-[calc(100%-180px)] p-6">
          <header className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Creator Discovery</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
              <input
                type="text"
                placeholder="Search creators..."
                className="pl-10 pr-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4d8d] focus:border-transparent w-[300px]"
              />
            </div>
          </header>

          <main>
            <div className="bg-black/20 rounded-xl border border-white/10 shadow-xl overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Creator Matches</h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#ff4d8d] hover:bg-[#ff1a6c] rounded-md text-sm font-medium transition-colors">
                    <Filter className="h-4 w-4" />
                    Advanced Filters
                  </button>
                </div>
                <p className="text-white/70">Search creators by niche, follower range, and engagement metrics</p>
              </div>

              <div className="flex items-center gap-2 p-4 bg-black/30 border-b border-white/10">
                <button 
                  onClick={() => setSelectedPlatform(null)}
                  className={`px-4 py-2 ${!selectedPlatform ? 'bg-[#ff4d8d]/10' : 'hover:bg-[#ff4d8d]/10'} rounded-md text-sm font-medium transition-colors`}
                >
                  All Creators
                </button>
                <div className="relative group" ref={platformRef}>
                  <button 
                    onClick={() => setShowPlatformDropdown(!showPlatformDropdown)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium text-white/70 transition-colors ${(showPlatformDropdown || selectedPlatform ? 'bg-[#ff4d8d]/10' : 'group-hover:bg-[#ff4d8d]/10')}`}
                  >
                    {selectedPlatform || 'Platform'}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className={`absolute w-32 mt-1 bg-black/20 border border-white/10 rounded-md shadow-lg z-10 transition-all duration-75 ${showPlatformDropdown ? 'visible' : 'invisible group-hover:visible'}`}>
                    <button 
                      onClick={() => {
                        setSelectedPlatform('Reddit')
                        setShowPlatformDropdown(false)
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-white/70 hover:bg-[#ff4d8d]/10"
                    >
                      Reddit
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedPlatform('Other')
                        setShowPlatformDropdown(false)
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-white/70 hover:bg-[#ff4d8d]/10"
                    >
                      Other
                    </button>
                  </div>
                </div>
                <div className="relative group" ref={contactedRef}>
                  <button 
                    onClick={() => setShowContactedDropdown(!showContactedDropdown)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium text-white/70 transition-colors ${(showContactedDropdown ? 'bg-[#ff4d8d]/10' : 'group-hover:bg-[#ff4d8d]/10')}`}
                  >
                    Contacted?
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className={`absolute w-32 mt-1 bg-black/20 border border-white/10 rounded-md shadow-lg z-10 transition-all duration-75 ${showContactedDropdown ? 'visible' : 'invisible group-hover:visible'}`}>
                    <button className="w-full px-4 py-2 text-left text-sm text-white/70 hover:bg-[#ff4d8d]/10">Yes</button>
                    <button className="w-full px-4 py-2 text-left text-sm text-white/70 hover:bg-[#ff4d8d]/10">No</button>
                  </div>
                </div>
              </div>

              <div className="p-6 max-h-[calc(100vh-280px)] overflow-y-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                  {filteredCreators.map((creator, index) => (
                    <div
                      key={index}
                      className="bg-black/20 rounded-lg border border-white/10 overflow-hidden hover:border-[#ff4d8d]/50 transition-all duration-200"
                    >
                      <div className="h-24 bg-gradient-to-r from-[#ff4d8d]/10 to-[#ff1a6c]/10"></div>
                      <div className="p-5 pt-0">
                        <div className="flex items-center -mt-8 mb-3">
                          <div className="h-16 w-16 rounded-full bg-[#ff4d8d]/10 border-4 border-black/20 flex items-center justify-center text-xl font-bold">
                            {creator.username.charAt(0).toUpperCase()}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-1">{creator.username}</h3>
                        <p className="text-sm text-white/70 mb-4 line-clamp-2">{creator.description}</p>

                        <div className="flex justify-between mb-4 text-xs text-white/70">
                          <div>
                            <div className="font-semibold text-white">{creator.followers}</div>
                            <div>Followers</div>
                          </div>
                          <div className="ml-[-32px]">
                            <div className="font-semibold text-white">{creator.platform}</div>
                            <div>Platform</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <button className="flex items-center gap-1 text-[#ff4d8d] hover:text-[#ff1a6c] text-sm font-medium">
                            View Profile
                            <ChevronRight className="h-4 w-4" />
                          </button>
                          <button className="px-3 py-1 bg-[#ff4d8d]/10 hover:bg-[#ff4d8d]/20 text-[#ff4d8d] rounded-md text-sm font-medium transition-colors">
                            Contact
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
