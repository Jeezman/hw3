const React = require("react");
const ReactDOM = require("react-dom");
import { WalletConnector } from './app';
import './main.css'


function Page({ id }) {
    const [showConnector, setShowConnector] = React.useState(false)
    React.useEffect(() => {
        let selector = document.getElementById(id);
        selector.onclick = () => {
            setShowConnector(!showConnector)
        }
    }, [])

    const handleOnClick = () => setShowConnector(!showConnector)

    return <div className='page'>
        <section className='page-lightbox'>
            <section className='content'>
                <label className='mint-label'>
                    <p className='mint-text'>Select quantity</p>
                    <select className='mint-select' value={2} onChange={() => { }}>
                        {[...Array(10).keys()].map((value, i) => (<option value={value + 1} key={i}>
                            {value + 1}
                        </option>))}
                    </select>
                </label>
                <button id={id} onClick={handleOnClick} className='mint-btn'>Mint</button>
            </section>
        </section>
        {showConnector && <WalletConnector />}
    </div>
}

const element = document.createElement('div');
element.setAttribute("id", "hang-app-connect")
document.body.appendChild(element)
ReactDOM.render(
    <div>
        <Page id="boom" />
    </div>, document.getElementById("hang-app-connect"));


