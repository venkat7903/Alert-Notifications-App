// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <div className="sub-alert-notifications-container">
      <h1 className="alert-notification-title">Alert Notifications</h1>
      <div>
        <Notification>
          <div className="icon-title-container">
            <AiFillCheckCircle color="#2dca73" size="35" />
            <div className="title-desc-container">
              <h1 className="notification-status">Success</h1>
              <p className="notification-desc">
                You can access all the files in the folder
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="icon-title-container">
            <RiErrorWarningFill color=" #ff0b37" size="35" />
            <div className="title-desc-container">
              <h1 className="notification-status error">Error</h1>
              <p className="notification-desc">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="icon-title-container">
            <MdWarning color="#ffb800" size="35" />
            <div className="title-desc-container">
              <h1 className="notification-status warning">Warning</h1>
              <p className="notification-desc">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="icon-title-container">
            <MdInfo color="#0f81e0" size="35" />
            <div className="title-desc-container">
              <h1 className="notification-status info">Info</h1>
              <p className="notification-desc">
                Anyone on the internet can view these files
              </p>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </div>
)

export default AlertNotifications
