import React from 'react'
import { IEpisode } from './interfaces'
import { FavButton, LikeButton, FavButtonFilled, LikeButtonFilled, Thumbnail } from './episodeStyle'
import { Box } from './layoutStyle'

const EpisodesList = (props: any): Array<JSX.Element> => {
    const { episodes, toggleFavAction, favourites, likes, toggleLikeAction, store } = props
    const { state, dispatch } = store

    const trim = (str, no_words) => {
        return str.split(" ").splice(0, no_words).join(" ");
    }

    return episodes.map((episode: IEpisode) => {
        const summary = JSON.stringify(episode.summary).replace('<p>', '').replace('</p>', '')

        return (
            <Box key={episode.id} className="episode-box">
                <Thumbnail src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
                <div>{episode.name}</div>
                <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <div>Season: {episode.season}</div>
                        <div>Episode: {episode.number}</div>
                        <div>{episode.airdate}</div>
                        <div>{episode.airtime}</div>
                        <div>{episode.type}</div>
                        <div>{trim(summary, 20)} ...</div>
                        <a href={episode.url} target='_blank'>Watch</a>
                    </div>
                    <div>
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
                    </div>
                </section>
            </Box>
        )
    })
}

export default EpisodesList