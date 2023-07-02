import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';

const SideBar = () => {

  const data = useSelector(state=>state.itemlist.data)
  let unreadMail = 0
  data.map(i=>{
    return(i.read===false && (unreadMail = unreadMail +1 ))
  })

  return (
    <div >
      <div style={{width:'50%', float:'right',marginTop:'10px'}}>
        {unreadMail>0 && <Badge bg="secondary">Unread {unreadMail}</Badge>}
      </div>

      <div style={{width:'50%'}}>
      <ButtonGroup vertical >
      <Button style={{marginTop:'10px'}}>Inbox</Button>
      <Button style={{marginTop:'1px'}}>Starred</Button>
      <Button style={{marginTop:'1px'}}>Snoozed</Button>
      <Button style={{marginTop:'1px'}}>Sent</Button>
      <Button style={{marginTop:'1px'}}>Draft</Button>
      </ButtonGroup>
      </div>
      
    </div>
  )
}

export default SideBar
