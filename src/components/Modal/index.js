import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
const modalRoot = document.getElementById('modal-root')
export class Modal extends React.Component {
  handleModalClick = (event) => {
    event.stopPropagation()
  }

  render() {
    const {
      children, handleClose
    } = this.props
    return ReactDOM.createPortal(
      <div onClick={handleClose} className="modal-container">
        <div onClick={this.handleModalClick} className="modal-content">
          <div className="modal-close" onClick={handleClose}>X</div>
          {children}
        </div>
      </div>, modalRoot
    )
  }
}
export default Modal