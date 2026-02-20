
export default function Footer() {
  return (
<footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black border-t border-sky-500/30 text-gray-300">
  <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Diamond */}
    <div className="flex justify-center mb-6 mt-5">
      <div className="w-10 h-10 bg-cyan-400 rotate-45"></div>
    </div>

    {/* Social links */}
    <div className="flex justify-center gap-6 mb-6 mt-10">

      {/* GitHub */}
      <a
        href="https://github.com/Metellus509"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-400 transition"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z"/>
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/junior-wilfrid-metellus-639352288/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-400 transition"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.98h4.6V24H.2V8.98zM8.4 8.98h4.4v2.05h.06c.6-1.1 2.1-2.25 4.3-2.25 4.6 0 5.4 3 5.4 6.9V24h-4.6v-6.9c0-1.6 0-3.6-2.2-3.6s-2.6 1.7-2.6 3.5V24H8.4V8.98z"/>
        </svg>
      </a>

    </div>

    {/* Text */}
    <p className="text-center text-sm text-white-400">
      2026 © Junior Wilfrid Metellus - Contact
    </p>

  </div>
</footer>);
}
