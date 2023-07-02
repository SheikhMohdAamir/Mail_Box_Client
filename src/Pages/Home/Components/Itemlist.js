import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Itemlist = () => {
    const [data, setData] = useState()

    useEffect(()=>{
        return async() => {
            try{
            const resolve = await axios.get('https://mailboxclient-62a75-default-rtdb.firebaseio.com/sent.json')
            const data = resolve.data
            setData(data)
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
                text:data[key].text
            })
        }

  return (
    <div>
        <h3>Primary</h3>
        <ListGroup>
            {recievedData.map(item=>{
                return(
                    <ListGroup.Item key={item.id}><b>▢ {item.email}</b>{`${item.subject} ${item.text}`}</ListGroup.Item>
                )
            })}
        </ListGroup>

    </div>
  )
}

export default Itemlist
