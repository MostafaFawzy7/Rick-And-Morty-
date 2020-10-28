import React from 'react'
import { Link } from "@reach/router"
import { Container } from './container'
import { Header, Logo, Icons, Icon } from './header'

const TopMenu = () => {
    return (
        <React.Fragment>
            <Header>
                <Container>
                    <Link to='/'><Logo>Rick and morty</Logo></Link>
                    <Icons>
                        <Link to='/'><Icon><i className="fa fa-home" aria-hidden="true"></i></Icon></Link>
                        <Link to='/faves'><Icon><i className="fa fa-heart" aria-hidden="true"></i></Icon></Link>
                        <Link to='/likes'><Icon><i className="fa fa-thumbs-up" aria-hidden="true"></i></Icon></Link>
                    </Icons>
                </Container>
            </Header>
        </React.Fragment>
    )
}

export default TopMenu