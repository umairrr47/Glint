import { Facebook, Twitter, Instagram, Dribbble } from "lucide-react"
import Link from "next/link"

export function SocialNav() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/shaikhumair47",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/umairrr47?igsh=a3E0bXYzYjY0ZXls",
    },
    {
      name: "Behance",
      href: "https://behance.net",
      icon: () => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M8.197 10.946c-.668-.534-1.594-.806-2.779-.806H2v8.592h3.25c1.216 0 2.178-.283 2.883-.85.704-.566 1.057-1.45 1.057-2.65 0-.998-.338-1.745-1.013-2.24" />
          <path d="M7.792 7.584c.511-.423.767-1.027.767-1.81 0-1.699-1.271-2.55-3.813-2.55H2v4.79h3.149c1.125 0 1.972-.143 2.643-.43" />
          <path d="M18.5 5.5h-5M20.5 9.5h-7M19.5 13.5h-6" />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      icon: Dribbble,
      href: "https://dribbble.com",
    },
  ]

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 space-y-4 z-20">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white transition-colors"
          aria-label={`Visit our ${link.name} page`}
        >
          <link.icon className="w-4 h-4" />
        </Link>
      ))}
    </nav>
  )
}

