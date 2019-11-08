import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import Container from '../../components/Container';
import { Loading, Artist, List } from './styles';
import { formatPriceENUS } from '../../util/format';
import api from '../../services/api';

export default class Songs extends Component {
    state = {
        tracks: [],
        album: {},
        loading: true,
    };

    async componentDidMount() {
        const { match } = this.props;

        const songs = await api.get('/lookup', {
            params: {
                id: match.params.artistId,
                entity: 'song',
            },
        });

        const album = songs.data.results.filter(
            song => song.wrapperType === 'artist'
        );

        const tracks = songs.data.results.filter(
            song =>
                song.wrapperType === 'track' &&
                parseInt(song.collectionId) ===
                    parseInt(match.params.collectionId)
        );

        const data = tracks.map(song => ({
            ...song,
            trackPriceFormatted: formatPriceENUS(song.trackPrice),
            trackTimeMillisFormatted: `${(
                song.trackTimeMillis /
                1000 /
                60
            ).toFixed(2)}min`,
        }));

        const firstSong = tracks.find(song => typeof song !== 'undefined');

        const headerAlbum = album.map(album => ({
            ...album,
            artworkUrl100: firstSong.artworkUrl100,
            collectionPrice: formatPriceENUS(firstSong.collectionPrice),
        }));

        this.setState({
            tracks: [...data],
            album: headerAlbum.find(artist => typeof artist !== 'undefined'),
            loading: false,
        });
    }

    render() {
        const { album, tracks, loading } = this.state;

        if (loading) {
            return (
                <Loading>
                    <FaSpinner color="#FFF" size={16} />
                    <p>Processando...</p>
                </Loading>
            );
        }

        return (
            <Container>
                <Artist>
                    <Link to="/">Voltar para novas buscas</Link>
                    <img src={album.artworkUrl100} alt={album.artistName} />
                    <h1>{album.artistName}</h1>
                    <p>{album.primaryGenreName}</p>
                    <a href={album.artistLinkUrl} className="buy">
                        <span>{`Comprar ${album.collectionPrice}`}</span>
                    </a>
                </Artist>

                <List>
                    {tracks.map(track => (
                        <li key={track.trackId}>
                            <div>
                                <span>{track.trackName}</span>
                            </div>
                            <div>
                                <abbr>{track.trackPriceFormatted}</abbr>
                                <small>
                                    <IoMdTime color="#333" size={12} />
                                    <span>
                                        {track.trackTimeMillisFormatted}
                                    </span>
                                </small>
                            </div>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}
