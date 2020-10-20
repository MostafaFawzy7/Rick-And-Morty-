import React from 'react'
import { Store } from './store'
import { Link } from "@reach/router"
import { Body, Container } from './container'
import { Header, Logo, SearchPar, Icons, Input, Icon } from './header'
import { SeasonsNavigator, SeasonStyle, Paragraph, Indicator, LikesIndicator, FavsIndicator } from './pageContainer'

const App = (props: any): JSX.Element => {

    const { state } = React.useContext(Store)

    return (
        <React.Fragment>
            <Body>
                <Header>
                    <Container>
                        <Link to='/'><Logo>Rick and morty</Logo></Link>
                        <SearchPar>
                            <Input type="text" placeholder='Search' />
                        </SearchPar>
                        <Icons>
                            <Link to='/'><Icon><i className="fa fa-home" aria-hidden="true"></i></Icon></Link>
                            <Link to='/faves'><Icon><i className="fa fa-heart" aria-hidden="true"></i></Icon></Link>
                            <Link to='/likes'><Icon><i className="fa fa-thumbs-up" aria-hidden="true"></i></Icon></Link>
                        </Icons>
                    </Container>
                </Header>
                <Container>
                    <Paragraph>Pick Your Favourite Episode !!</Paragraph>
                    <Indicator>
                        <FavsIndicator>Favourite (s) : {state.favourites.length}</FavsIndicator>
                        <LikesIndicator>Likes (s) : {state.likes.length}</LikesIndicator>
                    </Indicator>
                    <SeasonsNavigator>
                        <SeasonStyle>Season 1</SeasonStyle>
                        <SeasonStyle>Season 2</SeasonStyle>
                        <SeasonStyle>Season 3</SeasonStyle>
                        <SeasonStyle>Season 4</SeasonStyle>
                    </SeasonsNavigator>
                    {props.children}
                </Container>
            </Body>
        </React.Fragment>
    )
}

export default App