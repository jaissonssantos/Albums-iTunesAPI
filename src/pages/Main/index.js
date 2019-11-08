import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import logo from '../../assets/logo.svg';
import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';

import api from '../../services/api';
import { formatPriceENUS } from '../../util/format';

export default class Main extends Component {
    state = {
        artists: '',
        results: [],
        isLoading: false,
        resultCount: false,
    };

    handlerSearchArtists = e => {
        this.setState({ artists: e.target.value });
    };

    handlerSubmitForm = async e => {
        e.preventDefault();

        this.setState({ isLoading: true });

        const { artists, results, resultCount } = this.state;

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
            results: data,
            isLoading: false,
            resultCount: response.data.resultCount,
        });
    };

    render() {
        const { artists, isLoading, results, resultCount } = this.state;

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

                    <SubmitButton isLoading={isLoading}>
                        {isLoading ? (
                            <FaSpinner color="#FFF" size={16} />
                        ) : (
                            <FaSearch color="#FFF" size={16} />
                        )}
                    </SubmitButton>
                </Form>

                {results.length ? (
                    <List>
                        {results.map(albums => (
                            <li key={String(albums.collectionId)}>
                                <Link
                                    to={`/songs/${albums.artistId}/${albums.collectionId}`}
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
                ) : (
                    <></>
                )}

                {resultCount === 0 ? (
                    <p className="notfound">
                        <IoIosInformationCircleOutline color="#333" />
                        <span>
                            Nenhum resultado encontrado para seu critério de
                            busca
                        </span>
                    </p>
                ) : (
                    <></>
                )}
            </Container>
        );
    }
}
