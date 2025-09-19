export default function InputX({butttonText,onclick,css}){
    return (
        <>
        <input onclick={()=>onclick()} className={` ${css} ` }>{butttonText}</input>
        </>
    )
} 