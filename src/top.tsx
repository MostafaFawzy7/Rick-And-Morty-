import React from 'react'
import { Store } from './store'
import { SeasonsNavigator, SeasonStyle, Paragraph, Indicator, LikesIndicator, FavsIndicator, Separator } from './pageContainer'

const Top = () => {

    const { state } = React.useContext(Store)

    return (
        <React.Fragment>
            <Paragraph>Pick Your Favourite Episode !!</Paragraph>
            <SeasonsNavigator>
                <SeasonStyle>All</SeasonStyle>
                <SeasonStyle>Season 1</SeasonStyle>
                <SeasonStyle>Season 2</SeasonStyle>
                <SeasonStyle>Season 3</SeasonStyle>
                <SeasonStyle>Season 4</SeasonStyle>
            </SeasonsNavigator>
            <Indicator>
                <FavsIndicator>Favourites : {state.favourites.length}</FavsIndicator>
                <LikesIndicator>Likes : {state.likes.length}</LikesIndicator>
            </Indicator>
            <Separator></Separator>
        </React.Fragment>
    )
}

export default Top