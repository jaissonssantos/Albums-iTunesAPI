import React, { Component } from 'react';
import axios from 'axios';

import { Container } from './styles';

import api from '../../services/api';

export default class Albums extends Component {
    async componentDidMount() {
        const { match } = this.props;

        // const beta = await axios.get(
        //     // `https://itunes.apple.com/lookup?amgArtistId=2628097&entity=song`,
        //     // `https://itunes.apple.com/lookup?id=65623345&entity=album`,
        //     `https://itunes.apple.com/lookup?id=65623345&entity=song`,
        //     {
        //         headers: {
        //             'X-Requested-With': 'XMLHttpRequest',
        //             'Access-Control-Allow-Methods':
        //                 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        //         },
        //     }
        // );

        // console.log(beta);

        // const albums = await api
        //     .get('/lookup', {
        //         params: {
        //             id: 65623345,
        //             entity: 'album',
        //         },
        //     })
        //     .then(response => {
        //         // Success 🎉
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         // Error 😨
        //         if (error.response) {
        //             /*
        //              * The request was made and the server responded with a
        //              * status code that falls out of the range of 2xx
        //              */
        //             console.log(error.response.data);
        //             console.log(error.response.status);
        //             console.log(error.response.headers);
        //         } else if (error.request) {
        //             /*
        //              * The request was made but no response was received, `error.request`
        //              * is an instance of XMLHttpRequest in the browser and an instance
        //              * of http.ClientRequest in Node.js
        //              */
        //             console.log('aaqui...');
        //             console.log(error.request);
        //         } else {
        //             // Something happened in setting up the request and triggered an Error
        //             console.log('Error', error.message);
        //         }
        //         console.log(error.config);
        //     });

        const songs = await api.get('/lookup', {
            params: {
                id: match.params.artistId,
                entity: 'song',
            },
        });

        const tracks = songs.data.results.filter(
            song =>
                song.wrapperType === 'track' &&
                parseInt(song.collectionId) ===
                    parseInt(match.params.collectionId)
        );

        const tracks = songs.data.results.filter(
            song =>
                song.wrapperType === 'track' &&
                parseInt(song.collectionId) ===
                    parseInt(match.params.collectionId)
        );

        console.log(tracks);

        // this.setState({

        // });
        // albums.console.log(albums);
    }

    render() {
        return (
            <Container>
                <h1>Música para todos.</h1>
                <h2>
                    Milhões de artistas à sua escolha. Procure por seu artista
                    preferido :)
                </h2>
            </Container>
        );
    }
}
