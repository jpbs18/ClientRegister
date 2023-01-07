import Layout from "../components/layout"
import Table from "../components/table"
import Button from "../components/button"
import Form from "../components/form"
import useClients from "../hooks/useClients"


export default function Home() {

  const {newClient, saveClient, selectClient, removeClient, showTable, clients, tableVisible, currentClient} = useClients()

  return (
    <div className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-violet-500 to-blue-600
      text-white
    `}>
      {tableVisible ?
        <Layout title={"Register Client"}>
          <div className={`flex justify-end`}>
            <Button color={"green"} className={"mb-4"} onClick={newClient}>New Client</Button>
          </div>
        <Table clients={clients} selectClient={selectClient} removeClient={removeClient}/>
        </Layout>  
          :
        <Layout>
          <Form client={currentClient} onClick={showTable} saveClient={saveClient}/> 
        </Layout> 
      }
    </div>
  )
}
