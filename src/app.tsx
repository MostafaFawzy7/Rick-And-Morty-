import React from 'react'
import { Store } from './store'
import { Link } from "@reach/router"
import { Container } from './container'
import { Header, Logo, SearchPar, Icons, Input } from './header'
import { SeasonsNavigator, SeasonStyle, Paragraph } from './pageContainer'

const App = (props: any): JSX.Element => {

    const { state } = React.useContext(Store)

    return (
        <React.Fragment>
            <Header>
                <Container>
                    <Link to='/'><Logo>Rick and morty</Logo></Link>
                    <SearchPar>
                        <Input type="text" placeholder='Search' />
                    </SearchPar>
                    <Icons>
                        <Link to='/'>Home</Link>
                        <Link to='/faves'>Favourite(s): {state.favourites.length}</Link>
                        <Link to='/likes'>Likes(s): {state.likes.length}</Link>
                    </Icons>
                </Container>
            </Header>
            <Container>
                <Paragraph>Pick Your Favourite Episode !!</Paragraph>
                <SeasonsNavigator>
                    <SeasonStyle>Season 1</SeasonStyle>
                    <SeasonStyle>Season 2</SeasonStyle>
                    <SeasonStyle>Season 3</SeasonStyle>
                    <SeasonStyle>Season 4</SeasonStyle>
                </SeasonsNavigator>
                {props.children}
            </Container>
        </React.Fragment>
    )
}

export default App