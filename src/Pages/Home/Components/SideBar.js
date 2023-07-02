import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const SideBar = () => {
  return (
    <div >
      <ButtonGroup vertical >
      <Button>Inbox</Button>
      <Button>Starred</Button>
      <Button>Snoozed</Button>
      <Button>Sent</Button>
      <Button>Draft</Button>
      </ButtonGroup>
    </div>
  )
}

export default SideBar
