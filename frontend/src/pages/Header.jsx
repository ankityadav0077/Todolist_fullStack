import Login from "../features/auth/Login"
import Register from "../features/auth/Register"
import Logout from "../features/auth/Logout"
import { useSelector } from "react-redux"

export default function Header() {
    const isUserPresent = useSelector((state) => state.auth.isUserPresent)
    const userName = useSelector((state) => state.auth.userName)

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white text-2xl font-bold">✓</span>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            TaskFlow
                        </span>
                    </div>

                    {/* Tagline - Hidden on mobile */}
                    <div className="hidden md:block text-gray-600 font-medium">
                        Stay productive, stay organized ✨
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        {!isUserPresent ? (
                            <div className="flex gap-2">
                                <Login />
                                <Register />
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                        {userName?.charAt(0)?.toUpperCase()}
                                    </div>
                                    <span className="font-semibold text-gray-800 hidden sm:block">{userName}</span>
                                </div>
                                <Logout />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}