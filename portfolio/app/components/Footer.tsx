import { Github, Linkedin, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/MarkStevenSibayan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/markstevensibayan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Facebook size={24} />
          </a>
        </div>
        <p className="text-gray-400 text-center">
          &copy; {new Date().getFullYear()} MarkStevenSibayan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

