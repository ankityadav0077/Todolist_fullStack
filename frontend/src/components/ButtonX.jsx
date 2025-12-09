export default function ButtonX({ buttonText = 'Button', onclick, css = '' }) {
    return (
        <button
            onClick={() => onclick()}
            className={`px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all ${css}`}
        >
            {buttonText}
        </button>
    )
}