import React, { Component } from 'react';

import { FaSearch, FaSpinner } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import { Container, Form, SubmitButton, List } from './styles';

import api from '../../services/api';

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
                limit: 10,
            },
        });

        this.setState({
            results: [...response.data.results],
            artists: '',
            loading: false,
        });

        // console.log(response.data);
        console.log(this.state.results);
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
                    {results.map(result => (
                        <li key={String(result.artistId)}>
                            <a href="#">
                                <img
                                    src={result.artworkUrl100}
                                    alt={result.artistName}
                                />
                                <div>
                                    <strong>{result.artistName}</strong>
                                    <p>{result.collectionName}</p>
                                    <p>{result.primaryGenreName}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}
