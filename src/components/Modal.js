import React, {Component} from 'react'

class Modal extends Component {
    render = () => {
        return (


             <button onCLick={ e => {
                 this.showModal
             }}
                > show Modal </button>

            state = {
                show:false
            }
            showModal = e => {
                this.setState({
                    show: true
                })
            }
            <Modal show={this.state.show} />

            // <div id='myModal' className='modal'>

            //     <div class='modal-content'>
            //         <span class='close'>&times;</span>
            //         <p>text</p>
            //     </div>

            // </div>

        )
    }
}

export default Modal