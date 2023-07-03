import { ListGroup } from "react-bootstrap"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom"
import { useDispatch } from "react-redux"
import { itemlistAction } from "../../../ReduxStore/Slices/ItemlistSlice"
import CloseButton from 'react-bootstrap/CloseButton';


const Itemlist = () => {
    const [data, setData] = useState()

    const dispatch = useDispatch()

    useEffect(()=>{
        return async() => {
            try{
            const resolve = await axios.get('https://mailboxclient-62a75-default-rtdb.firebaseio.com/sent.json')
            const data = resolve.data
            setData(data)
            console.log('working')
            }
            catch(error){
                console.log('Error In useEffect')
            }
        }
    },[])
 
    let recievedData = [];
    for(let key in data){
            recievedData.push( {
                id:key,
                email:data[key].email,
                subject:data[key].subject,
                text:data[key].text,
                read:data[key].read
            })
        }
    dispatch(itemlistAction.addItemlistDataToReducer(recievedData))

    const deleteMailHandler = async(id) =>{
        try{
            await axios.delete(`https://mailboxclient-62a75-default-rtdb.firebaseio.com/sent/${id}.json`)
        }
        catch(error){
            console.log('in Itemlist (deleteMailHandler)', error)
        }
    }

  return (
    <div>
        <h3>Sent Box</h3>
        <ListGroup>
            {recievedData.map(item=>{
                return(
                        <ListGroup.Item key={item.id} >
                            {item.read?'⚪':'🔵'} 
                            <Link to={`/home/${item.id}/${item.email}/${item.subject}/${item.text}`} >
                            <b> {item.email} </b>
                            </Link>
                            <CloseButton style={{float:'right'}} onClick={()=>deleteMailHandler(item.id)}/>
                        </ListGroup.Item>
                )
            })}
        </ListGroup>

    </div>
  )
}

export default Itemlist
