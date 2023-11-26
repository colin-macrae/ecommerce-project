import "./Modal.css"

export default function Modal({ showModal, setShowModal, modalText }) {
  return (
    <div
      className={
        showModal ?
          'modal' :
          'hide'
      }
    >
      <div className='modal-box'>
        <div className='modal-text'>
          {modalText}
        </div>
        <div className='modal-btn-container'>
          <button
            className='modal-btn'
            onClick={() => setShowModal(false)}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}
