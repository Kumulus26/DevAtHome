'use client'

import Navbar from '@/components/Navbar'
import Image from 'next/image'
export default function About() {
  const skills = [
    { name: 'UI DESIGN', category: 'design' },
    { name: 'UX DESIGN', category: 'design' },
    { name: 'PROTOTYPING', category: 'design' },
    { name: 'HTML/CSS', category: 'development' },
    { name: 'DATABASE MANAGEMENT', category: 'development' },
    { name: 'SECURITY', category: 'development' },
    { name: 'AWS', category: 'development' },
    { name: 'ARDUINO', category: 'development' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden relative">
              {/* Placeholder for your photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-100 to-transparent opacity-50"></div>
              <Image src="/images/profile.jpeg" alt="About" fill className="object-cover" />
            </div>
          </div>

          {/* Text Column */}
          <div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">Hi there!</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Fuelled by a passion for programming and photography, I have a deep desire to excel and 
              continuously improve in my work. <br></br>Learn more about my journey below.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-6 mt-8">
              <a
                href="https://github.com/Kumulus26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/axel-lussert/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/axel.onfilm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Career Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Career Text */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What I've learned with this project</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
              Always up for a challenge, I took on the task of creating a fully functional website with a genuine community-driven aspect. 
              To achieve this, I explored and implemented an ORM to manage my database, used AWS to host images in an S3 bucket, 
              and improved my JavaScript skills. I also integrated security features such as bcrypt for password hashing 
              and JWT (JSON Web Tokens) for session management. My next goal is to expand this project by integrating it with an Arduino board.
              I'll share more details about this soon...
              </p>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white border border-gray-200 shadow-sm rounded-md text-xs font-medium text-gray-800 tracking-wide hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 