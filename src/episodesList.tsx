import React from 'react'
import { IEpisode } from './interfaces'
import {
    FavButton, LikeButton, FavButtonFilled, LikeButtonFilled, Thumbnail, Title, SMthumb,
    Type, Time, Summary, Season, Episode, Date, Reaction, Watch
} from './episodeStyle'
import { SeasonsNavigator, SeasonStyle } from './pageContainer'
import { Layout } from './layoutStyle'
import { Box } from './layoutStyle'

const EpisodesList = (props: any): any => {
    const { episodes, toggleFavAction, favourites, likes, toggleLikeAction, store } = props
    const { state, dispatch } = store

    const trim = (str, no_words) => {
        return str.split(" ").splice(0, no_words).join(" ");
    }

    return (
        <React.Fragment>
            <SeasonsNavigator>
                <SeasonStyle>All</SeasonStyle>
                <SeasonStyle>Season 1</SeasonStyle>
                <SeasonStyle>Season 2</SeasonStyle>
                <SeasonStyle>Season 3</SeasonStyle>
                <SeasonStyle>Season 4</SeasonStyle>
            </SeasonsNavigator>

            <Layout>
                {episodes.map((episode: IEpisode) => {
                    const summary = JSON.stringify(episode.summary).replace('<p>', '').replace('</p>', '')

                    return (
                        <Box key={episode.id} className="episode-box">
                            <Thumbnail src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
                            <Title>{episode.name}</Title>
                            <SMthumb src={episode.image.medium} />
                            <section>
                                <div>
                                    <Time>{episode.airtime}</Time>
                                    <Type>{episode.type}</Type>
                                    <Summary>{trim(summary, 10)} ...</Summary>
                                    <Episode>Episode: {episode.number}</Episode>
                                    <Season>Season: {episode.season}</Season>
                                    <Date>{episode.airdate}</Date>
                                </div>
                                <Reaction>
                                    <FavButton onClick={() => toggleFavAction(state, dispatch, episode)}>
                                        {favourites.find((fav: IEpisode) => fav.id === episode.id)
                                            ? <FavButtonFilled className="fa fa-heart" aria-hidden="true"></FavButtonFilled>
                                            : <i className="fa fa-heart" aria-hidden="true"></i>}
                                    </FavButton>
                                    <Watch href={episode.url} target='_blank'>Watch</Watch>
                                    <LikeButton onClick={() => toggleLikeAction(state, dispatch, episode)}>
                                        {likes.find((like: IEpisode) => like.id === episode.id)
                                            ? <LikeButtonFilled className="fa fa-thumbs-up" aria-hidden="true"></LikeButtonFilled>
                                            : <i className="fa fa-thumbs-up" aria-hidden="true"></i>}
                                    </LikeButton>
                                </Reaction>
                            </section>
                        </Box>
                    )
                })}
            </Layout>
        </React.Fragment>
    )
}

export default EpisodesList