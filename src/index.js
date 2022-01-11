const React = require("react");
const ReactDOM = require("react-dom");
// import { WalletConnector } from './app';

import './main.css'

function HangConnect({ id }) {
    React.useEffect(() => {
        let selector = document.getElementById(id);
        selector.onclick = () => {
            alert('Wallet not connected')
        }
    }, [])

    return (
        <button id={id}>Hang Connect Web3</button>
    )
}

const element = document.createElement('div');
element.setAttribute("id", "hang-app-connect")
document.body.appendChild(element)
ReactDOM.render(<div><HangConnect id="boom" /></div>, document.getElementById("hang-app-connect"));