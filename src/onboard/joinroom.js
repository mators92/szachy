import React from 'react'
import JoinGame from './joingame'
import ChessGame from '../chess/ui/chessgame'
import './../styles/joinroom.css'

/**
 * Onboard is where we create the game room.
 */

class JoinRoom extends React.Component {
    state = {
        didGetUserName: false,
        inputText: ""
    }

    constructor(props) {
        super(props);
        this.textArea = React.createRef();
    }

    typingUserName = () => {
        // grab the input text from the field from the DOM 
        const typedText = this.textArea.current.value
        
        // set the state with that text
        this.setState({
            inputText: typedText
        })
    }

    render() {
    
        return (<React.Fragment>
            {
                this.state.didGetUserName ?
                <React.Fragment>
                    <JoinGame userName = {this.state.inputText} isCreator = {false}/>
                    <ChessGame myUserName = {this.state.inputText}/>
                </React.Fragment>
            :
                <div className={'loginBody'}>
                    <div className={'logo'}>
                        <img src="https://worldcognacclub.com//data/files/logo-wcc-final-v4.png" alt={'logo'} width={'100%'}/>
                    </div>
                   <div className={'usernamePanel'}>
                        <h1>Your Username:</h1>

                        <input ref = {this.textArea}
                               onInput = {this.typingUserName}/>

                        <button className="btn btn-primary"
                            // style = {{marginLeft: String((window.innerWidth / 2) - 60) + "px", width: "120px", marginTop: "62px"}}
                            disabled = {!(this.state.inputText.length > 0)}
                            onClick = {() => {
                                // When the 'Submit' button gets pressed from the username screen,
                                // We should send a request to the server to create a new room with
                                // the uuid we generate here.
                                this.setState({
                                    didGetUserName: true
                                })
                            }}>Submit</button>
                    </div>
                </div>
            }
            </React.Fragment>)
    }
}

export default JoinRoom