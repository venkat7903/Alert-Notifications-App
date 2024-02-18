// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-container">
      {children}
      <GrFormClose size={30} />
    </div>
  )
}

export default Notification
