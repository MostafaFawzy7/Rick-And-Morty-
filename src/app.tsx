import React from 'react'
import { Body, Container } from './container'
import TopMenu from './topMenu'
import Top from './top'

const App = (props: any): JSX.Element => {

    return (
        <React.Fragment>
            <Body>
                <TopMenu />
                <Container>
                    <Top />
                    {props.children}
                </Container>
            </Body>
        </React.Fragment>
    )
}

export default App