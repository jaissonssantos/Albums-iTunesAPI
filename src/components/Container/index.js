import styled from 'styled-components';

const Container = styled.div`
    max-width: 620px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    padding: 30px;
    margin: 60px auto;

    img {
        width: 100%;
        max-height: 120px;
        margin-bottom: 40px;
    }

    h1 {
        font-size: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        letter-spacing: -0.04em;
        line-height: 1.15;
    }

    h2 {
        font-size: 18px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-weight: 300;
        color: #32323d !important;
    }

    .notfound {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        margin: 20px auto;

        svg {
            font-size: 42px !important;
        }
    }

    @media (max-width: 480px) {
        margin: 60px 15px !important;

        h1 {
            font-size: 30px !important;
        }
        h2 {
            font-size: 16px !important;
        }
    }
`;

export default Container;
