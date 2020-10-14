import React from 'react'
import { Store } from './store'
import { Link } from "@reach/router"

const App = (props: any): JSX.Element => {

    const { state } = React.useContext(Store)

    return (
        <React.Fragment>
            <header className="header">
                <div>
                    <h1>Rick and morty</h1>
                    <p>Pick your favourite episode!!</p>
                </div>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/faves'>Favourite(s): {state.favourites.length}</Link>
                </div>
            </header>
            {props.children}
        </React.Fragment>
    )
}

export default App