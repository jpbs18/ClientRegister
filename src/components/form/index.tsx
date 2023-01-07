import Input from "../input"
import Client from "../../core/clients"
import Button from "../button"
import {useState} from "react"

interface FormProps{
    client: Client,
    onClick?: () => void
    saveClient?: (client: Client) => void
}

export default function Form(props: FormProps){

    const [name, setName] = useState(props.client?.name)
    const [age, setAge] = useState(props.client?.age)
    const id = props.client?.id

    return(
        <div>
            {id ?
                <Input text={"Id"} value={id} type={"text"} readOnly={true}/> : null
            }
            <Input text={"Name"} value={name} type={"text"} setValue={setName}/>
            <Input text={"Age"} value={age} type={"number"} setValue={setAge}/>
            <div className={`flex justify-end gap-3`}>
                <Button color="green" onClick={() => props.saveClient?.(new Client(name, +age, id))}>
                    {id ? "Edit Client" : "Add Client"}
                </Button>
                <Button color="gray" onClick={props.onClick}>
                    Cancel
                </Button>
            </div>
        </div>
    )
}