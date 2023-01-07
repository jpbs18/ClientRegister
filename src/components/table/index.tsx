import Client from "../../core/clients"
import {EditIcon, DeleteIcon} from "../icons"

interface TableProps{
    clients: Client[],
    selectClient?: (client: Client) => void,
    removeClient?: (client: Client) => void
}

export default function Table(props: TableProps){

    const actionsToShow = props.removeClient || props.selectClient

    const renderTableHeader = () => {
        return(
            <tr>
                <th className={`text-left p-4`}>Code</th>
                <th className={`text-left p-4`}>Name</th>
                <th className={`text-left p-4`}>Age</th>
                {actionsToShow ? <th>Actions</th> : null}
            </tr>      
        )
    }

    const renderClients = () =>{
        return props.clients?.map((client, i) => {
            return(
                <tr key={`${client.id}-${i}`} className={`${i % 2 !== 0 ? "bg-gradient-to-r from-purple-200 to-blue-200" : "bg-white"}`}>
                    <td className={`text-left p-4`}>{client.id}</td>
                    <td className={`text-left p-4`}>{client.name}</td>
                    <td className={`text-left p-4`}>{client.age}</td>
                    {actionsToShow ? renderActions(client) : null}
                </tr>
            )
        })
    }

    const renderActions = (client: Client) => {
        return(
            <td className={`flex justify-center`}>

                {props.selectClient ? 
                    <button onClick={() => props.selectClient?.(client)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-100
                     `}>
                        {EditIcon}
                    </button> : null}
             
                {props.removeClient ?
                    <button onClick={() => props.removeClient?.(client)} className={`
                        flex justify-center items-center
                       text-red-600 rounded-full p-2 m-1
                       hover:bg-purple-100
                    `}>
                        {DeleteIcon}
                    </button> : null}
            </td>
        )
    }

    return(
        <table className={`
            w-full
            rounded-xl overflow-hidden
        `}>
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-100
            `}>
                {renderTableHeader()}
            </thead>
            <tbody>{renderClients()}</tbody>
        </table>
    )
}