export default function Footer() {
  return (
    <footer className="bg-primary text-secondary mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; 2025 ANZWAY Academy. All rights reserved.</p>
        </div>

        {/* Right section: social links + chat */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.62 9.87v-6.99h-2.35V12h2.35V9.65c0-2.32 1.37-3.61 3.48-3.61.99 0 2.02.18 2.02.18v2.23h-1.14c-1.13 0-1.48.7-1.48 1.42V12h2.52l-.4 2.88h-2.12v6.99A10 10 0 0022 12z" />
              </svg>
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.05 9.05 0 01-2.88 1.1 4.52 4.52 0 00-7.73 4.12 12.85 12.85 0 01-9.32-4.73s-4 9 5 13a13 13 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4H7zm0 2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
              </svg>
            </a>
            <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5 6.2a2.8 2.8 0 00-1.97-1.98C19.62 4 12 4 12 4s-7.62 0-9.53.22a2.8 2.8 0 00-1.97 1.98A29.64 29.64 0 000 12a29.64 29.64 0 00.5 5.8 2.8 2.8 0 001.97 1.98C4.38 20 12 20 12 20s7.62 0 9.53-.22a2.8 2.8 0 001.97-1.98A29.64 29.64 0 0024 12a29.64 29.64 0 00-.5-5.8zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"/>
              </svg>
            </a>
          </div>

          {/* Chat with us on WhatsApp */}
          <a
            href="https://wa.me/923255588823"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-semibold hover:text-green-500 space-x-2"
          >
            <span>
              Need help? <strong>Chat with us</strong>
            </span>
            <svg
              className="w-8 h-8"   // Increased size
              fill="#25D366"         // WhatsApp green
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12c0 2.12.554 4.1 1.52 5.84L0 24l6.24-1.64A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12 0-3.19-1.25-6.19-3.48-8.52zM12 21.75a9.72 9.72 0 01-5.2-1.52l-.37-.22-3.7.97.99-3.63-.24-.37A9.72 9.72 0 012.25 12 9.75 9.75 0 1112 21.75zm5.25-7.5c-.23-.12-1.36-.67-1.57-.74-.21-.07-.37-.12-.53.12-.16.23-.63.74-.77.9-.14.16-.28.18-.51.06-.23-.12-.97-.36-1.85-1.14-.68-.61-1.14-1.36-1.28-1.59-.14-.23-.015-.35.1-.46.1-.1.23-.28.34-.42.11-.14.15-.23.23-.38.08-.14.04-.26-.02-.38-.07-.12-.53-1.28-.73-1.76-.19-.46-.38-.4-.53-.41l-.45-.01c-.15 0-.38.06-.58.28-.2.21-.76.74-.76 1.81 0 1.07.78 2.11.89 2.26.11.16 1.55 2.36 3.75 3.31 2.2.96 2.2.64 2.6.6.4-.04 1.36-.55 1.55-1.08.19-.53.19-.99.13-1.08-.06-.09-.21-.15-.44-.27z"/>
            </svg>
          </a>


        </div>
      </div>
    </footer>
  );
}
