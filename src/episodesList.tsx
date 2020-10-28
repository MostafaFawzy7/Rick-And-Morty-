import React from 'react'
import { IEpisode } from './interfaces'
import {
    FavButton, LikeButton, FavButtonFilled, LikeButtonFilled, Thumbnail, Title, SMthumb,
    Type, Time, Summary, Season, Episode, Date, Reaction, Watch, SearchPar, Input
} from './episodeStyle'
import { SeasonsNavigator, SeasonStyle } from './pageContainer'
import { Layout } from './layoutStyle'
import { Box } from './layoutStyle'

const EpisodesList = (props: any): any => {
    const { episodes, toggleFavAction, favourites, likes, toggleLikeAction, store } = props
    const { state, dispatch } = store
    const [episList, setEpis] = React.useState(episodes)

    const handleChange = e => {
        setEpis(e.target.value);
    }

    const trim = (str, no_words) => {
        return str.split(" ").splice(0, no_words).join(" ");
    }

    return (
        <React.Fragment>
            <SeasonsNavigator>
                <SeasonStyle onClick={() => setEpis(episodes)}>All</SeasonStyle>
                <SeasonStyle onClick={() => setEpis(episodes.filter(e => e.season === 1))}>Season 1</SeasonStyle>
                <SeasonStyle onClick={() => setEpis(episodes.filter(e => e.season === 2))}>Season 2</SeasonStyle>
                <SeasonStyle onClick={() => setEpis(episodes.filter(e => e.season === 3))}>Season 3</SeasonStyle>
                <SeasonStyle onClick={() => setEpis(episodes.filter(e => e.season === 4))}>Season 4</SeasonStyle>
            </SeasonsNavigator>

            <SearchPar>
                <Input type="text" placeholder='Search' onChange={handleChange} />
            </SearchPar>

            <Layout>
                {episList.map((episode: IEpisode) => {
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
                                    <Summary>{summary !== 'null' ? trim(summary, 10) : 'There is no summary !!'} ...</Summary>
                                    <Episode>Episode: {episode.number}</Episode>
                                    <Season>Season: {episode.season}</Season>
                                    <Date>{episode.airdate}</Date>
                                </div>
                                <Reaction>
                                    <Watch href={episode.url} target='_blank'>Watch</Watch>
                                    <FavButton onClick={() => toggleFavAction(state, dispatch, episode)}>
                                        {favourites.find((fav: IEpisode) => fav.id === episode.id)
                                            ? <FavButtonFilled className="fa fa-heart" aria-hidden="true"></FavButtonFilled>
                                            : <i className="fa fa-heart" aria-hidden="true"></i>}
                                    </FavButton>
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