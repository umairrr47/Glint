import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { SocialNav } from "@/components/social-nav"

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Green foliage background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Social Navigation */}
      <SocialNav />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center p-6">
          <img src="logo.webp" alt="logo"
           className="w-20 h-15"
          />
          <button className="text-white p-2 hover:bg-white/10 rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-start justify-center min-h-[80vh] max-w-3xl ml-48 px-8">
          <div className="space-y-6">
            <p className="text-white/80 tracking-widest text-sm">WELCOME TO GLINT</p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We are a creative group of people who design influential brands and digital experiences.
            </h1>
            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                href="#"
                className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors text-sm tracking-wider"
              >
                START A PROJECT
              </Link>
              <Link
                href="#"
                className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors text-sm tracking-wider"
              >
                MORE ABOUT US
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

