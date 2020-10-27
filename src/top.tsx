import React from 'react'
import { Store } from './store'
import { Paragraph, Indicator, LikesIndicator, FavsIndicator, Separator } from './pageContainer'

const Top = () => {

    const { state } = React.useContext(Store)

    return (
        <React.Fragment>
            <Paragraph>Pick Your Favourite Episode !!</Paragraph>
            <Indicator>
                <FavsIndicator>Favourites : {state.favourites.length}</FavsIndicator>
                <LikesIndicator>Likes : {state.likes.length}</LikesIndicator>
            </Indicator>
            <Separator></Separator>
        </React.Fragment>
    )
}

export default Top