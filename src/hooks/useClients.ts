import { useState } from "react"
import Client from "../core/clients"
import useVisibility from "./useVisibility"
import clientsList from "../dataBase/listOfClients"

export default function useClients(){

    const [currentClient, setCurrentClient] = useState<Client>(Client.emptyClient())
    const {showForm, showTable, formVisible, tableVisible} = useVisibility()
    const [clients, setClients] = useState<Client[]>(clientsList)
  
    const selectClient = (client: Client) => {
      setCurrentClient(client)
      showForm()
    }
  
    const removeClient = (client: Client) => {
      setClients([...clients].filter(e => e.id !== client.id))
    }
  
    const saveClient = (client: Client) => {
  
      if(clients.find(e => e.id === client.id)){
        const index = clients.findIndex(e => e.id === client.id)
        setClients([...clients.slice(0,index), new Client(client.name, client.age, client.id), ...clients.slice(index + 1)])
      }

      else{
        if(!clients.length){
          setClients([...clients, new Client(client.name, client.age, "1")])
        }
        else{
        const newClientId = Math.max(...clients.map(client => +client.id)) + 1
        setClients([...clients, new Client(client.name, client.age, newClientId + "")])
        }
      }
  
      showTable()
    }
  
    const newClient = () => {
      setCurrentClient(Client.emptyClient())
      showForm()
    }

    return {newClient, saveClient, removeClient, selectClient, clients, currentClient, showTable, tableVisible}
}