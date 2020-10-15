import React from 'react'
import styled from 'styled-components'
import { Store } from './store'
import { Link } from "@reach/router"

const App = (props: any): JSX.Element => {

    const { state } = React.useContext(Store)

    // styles Of the Component
    const Title = styled.h1`
        text-align: center;
        color: #28B;
    `
    const OuterLink = styled.span`
        color: #DDD;
        background: #333;
        font-size: 20px;
        padding: 5px 10px;
        margin: 10px
    `

    return (
        <React.Fragment>
            <header className="header">
                <div>
                    <Title>Rick and morty</Title>
                    <p>Pick your favourite episode!!</p>
                </div>
                <div>
                    <OuterLink>
                        <Link to='/'>Home</Link>
                    </OuterLink>
                    <OuterLink>
                        <Link to='/faves'>Favourite(s): {state.favourites.length}</Link>
                    </OuterLink>
                </div>
            </header>
            {props.children}
        </React.Fragment>
    )
}

export default App