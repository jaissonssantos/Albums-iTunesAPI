import styled from 'styled-components';

export const Container = styled.div`
    max-width: 620px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    padding: 30px;
    margin: 60px auto;

    img {
        width: 120px;
        height: 120px;
        margin-bottom: 40px;
        border-radius: 50%;
    }

    h1 {
        font-size: 22px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        letter-spacing: -0.04em;
        line-height: 1.15;
    }

    p {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-weight: 300;
        color: #32323d !important;
    }
`;
