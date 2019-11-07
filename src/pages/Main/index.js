import React from 'react';

import { FaSearch } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import { Container, Form, SubmitButton } from './styles';

export default function Main() {
    return (
        <Container>
            <img src={logo} alt="iMusic" />

            <h1>Música para todos.</h1>
            <h2>
                Milhões de artistas à sua escolha. Procure por seu artista
                preferido :)
            </h2>

            <Form onSubmit={() => {}}>
                <input type="input" placeholder="Qual o nome do seu artista?" />

                <SubmitButton disabled>
                    <FaSearchAlt color="#FFF" size={14} />
                </SubmitButton>
            </Form>
        </Container>
    );
}
