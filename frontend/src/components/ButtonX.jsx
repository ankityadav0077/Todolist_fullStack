

export default function ButtonX({buttonText='buttonX',onclick,css=''}){
    return (
        <>
        <button onClick={()=>onclick()} className={` ${css} px-4 py-2 m-0.5 w-full bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 active:scale-95 transition` }>{buttonText}</button>
        </>
    )
} 