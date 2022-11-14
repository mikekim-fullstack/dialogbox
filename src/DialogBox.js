import './DialogBox.css'
function DialogBox({ message, onDialog, itemName }) {

    return (
        <div className='dialogbox__view' onClick={() => onDialog(false)} >
            <div className='content' onClick={(e) => e.stopPropagation()} >
                <div className='close' onClick={() => onDialog(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 18.65 5.35 17.6l5.6-5.6-5.6-5.6L6.4 5.35l5.6 5.6 5.6-5.6 1.05 1.05-5.6 5.6 5.6 5.6-1.05 1.05-5.6-5.6Z" /></svg>
                </div>
                <div className='message-group'>
                    <h3 className='message' >{message}</h3>
                    <h1 className='item-name'>{itemName}</h1>
                </div>
                <div className='btn-group' style={{ display: "flex", alignItems: "center" }}>
                    <button className='btn-ok' onClick={() => onDialog(true)}>
                        Yes
                    </button>
                    <button className='btn-cancel' onClick={() => onDialog(false)} >
                        Cancel
                    </button>
                </div>
            </div>
        </div >
    );
}
export default DialogBox;
