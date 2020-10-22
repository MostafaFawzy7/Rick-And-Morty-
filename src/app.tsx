import React from 'react'
import { Body, Container } from './container'
import TopMenu from './topMenu'
import Top from './top'
import Footer from './footer'

const App = (props: any): JSX.Element => {

    return (
        <React.Fragment>
            <Body>
                <TopMenu />
                <Container>
                    <Top />
                    {props.children}
                    <Footer />
                </Container>
            </Body>
        </React.Fragment>
    )
}

export default App