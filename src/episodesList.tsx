import React from 'react'
import { IEpisode } from './interfaces'
import { FavButton, LikeButton } from './episodeStyle'

const EpisodesList = (props: any): Array<JSX.Element> => {
    const { episodes, toggleFavAction, favourites, likes, toggleLikeAction, store } = props
    const { state, dispatch } = store

    return episodes.map((episode: IEpisode) => {
        return (
            <section key={episode.id} className="episode-box">
                <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
                <div>{episode.name}</div>
                <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        Season: {episode.season} Number: {episode.number}
                    </div>
                    <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
                        {favourites.find((fav: IEpisode) => fav.id === episode.id)
                            ? <FavButton><i className="fa fa-heart" aria-hidden="true"></i></FavButton>
                            : <i className="fa fa-heart" aria-hidden="true"></i>}
                    </button>
                    <button type="button" onClick={() => toggleLikeAction(state, dispatch, episode)}>
                        {likes.find((like: IEpisode) => like.id === episode.id)
                            ? <LikeButton><i className="fa fa-thumbs-up" aria-hidden="true"></i></LikeButton>
                            : <i className="fa fa-thumbs-up" aria-hidden="true"></i>}
                    </button>
                </section>
            </section>
        )
    })
}

export default EpisodesList