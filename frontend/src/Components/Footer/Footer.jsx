import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-[#0d1b2a] text-[#a1caff] p-4">
      <div className="text-center">
        <p className="mb-2">&copy; 2024 IP Lookup. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
