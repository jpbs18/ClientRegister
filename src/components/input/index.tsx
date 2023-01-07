interface InputProps{
    text?:string,
    type: "text" | "number",
    value: any,
    readOnly?: boolean
    setValue?: (value:any) => void,
}

export default function Input(props: InputProps){
    return(
        <div className={`flex flex-col mb-5`}>
            <label className={`mb-3`}>
                {props.text}
            </label>
            <input 
                type={props.type ?? "text"}
                value={props.value}
                readOnly={props.readOnly}
                onChange={e => props.setValue?.(e.target.value)}
                className={`
                    border border-purple-400 rounded-lg
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.readOnly ? `` : `focus:bg-white`}
                `}
            ></input>
        </div>
    )
}