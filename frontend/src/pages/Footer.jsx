export default function Footer(){
    return (
        <>
         <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Project */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">About Project</h3>
            <p className="text-sm">
              This project is a full-stack application built with modern web
              technologies to ensure scalability, performance, and maintainability.
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
            <ul className="space-y-2 text-sm">
              <li>⚡ Express.js (Backend Framework)</li>
              <li>🗄️ Mongoose (MongoDB ODM)</li>
              <li>✅ Zod (Validation)</li>
              <li>⚛️ React (Frontend Library)</li>
              <li>🔄 Redux (State Management)</li>
            </ul>
          </div>

          {/* Contact / Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:ankityadav17.work@gmail.com" className="text-blue-400 hover:underline">ankityadav17.work@gmail.com</a></li>
              <li>GitHub: <a href="https://github.com/ankityadav0077" className="text-blue-400 hover:underline">github.com/ankityadav0077</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/ankit-yadav-01b38b281/" className="text-blue-400 hover:underline">linkedin.com/in/ankit-yadav-01b38b281/</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Todo fullStack . All rights reserved.</p>
        </div>
      </div>
    </footer>
        </>
    )
}