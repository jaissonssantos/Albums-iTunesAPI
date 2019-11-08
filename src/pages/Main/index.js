import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import { Container, Form, SubmitButton, List } from './styles';

import api from '../../services/api';
import { formatPriceENUS } from '../../util/format';

export default class Main extends Component {
    state = {
        artists: '',
        results: [],
        loading: false,
    };

    handlerSearchArtists = e => {
        this.setState({ artists: e.target.value });
    };

    handlerSubmitForm = async e => {
        e.preventDefault();

        this.setState({ loading: true });

        const { artists, results } = this.state;

        const response = await api.get('/search', {
            params: {
                term: artists,
                entity: 'album',
                limit: 30,
            },
        });

        const data = response.data.results.map(albums => ({
            ...albums,
            collectionPriceFormatted: formatPriceENUS(albums.collectionPrice),
        }));

        this.setState({
            results: [...data],
            loading: false,
        });
    };

    render() {
        const { artists, loading, results } = this.state;

        return (
            <Container>
                <img src={logo} alt="iMusic" />

                <h1>Música para todos.</h1>
                <h2>
                    Milhões de artistas à sua escolha. Procure por seu artista
                    preferido :)
                </h2>

                <Form onSubmit={this.handlerSubmitForm}>
                    <input
                        type="input"
                        placeholder="Qual o nome do seu artista?"
                        value={artists}
                        onChange={this.handlerSearchArtists}
                    />

                    <SubmitButton loading={loading}>
                        {loading ? (
                            <FaSpinner color="#FFF" size={16} />
                        ) : (
                            <FaSearch color="#FFF" size={16} />
                        )}
                    </SubmitButton>
                </Form>

                <List>
                    {results.map(albums => (
                        <li key={String(albums.collectionId)}>
                            <Link
                                to={`/albums/${albums.artistId}/${albums.collectionId}`}
                            >
                                <img
                                    src={albums.artworkUrl100}
                                    alt={albums.artistName}
                                />
                                <div>
                                    <strong>{albums.artistName}</strong>
                                    <p>{albums.collectionName}</p>
                                    <p>{albums.primaryGenreName}</p>

                                    <abbr>
                                        {albums.collectionPriceFormatted}
                                    </abbr>
                                </div>
                            </Link>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}
