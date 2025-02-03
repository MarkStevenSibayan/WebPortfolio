"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Code, Mail } from "lucide-react"
import { Code2 } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/skills", label: "Skills", icon: Code },
    { href: "/resume", label: "Resume", icon: Code2 },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Code2 size={32} className="text-blue-400" />
            <span className="ml-2 text-xl font-bold text-white">Portfolio</span>
          </div>
          <ul className="flex space-x-4">
            {navItems.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center p-2 ${
                    pathname === href ? "text-blue-400" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <Icon size={20} className="mr-1" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

