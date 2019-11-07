import styled from 'styled-components';

export const Container = styled.div`
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
        text-align: center;
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
        font-weight: 300;
        text-align: center;
        color: #32323d !important;
    }
`;

export const Form = styled.form`
    margin-top: 40px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid #eee;
        border-radius: 4px;
        padding: 12px 15px;
        font-size: 16px;
        font-weight: 300;
    }
`;

export const SubmitButton = styled.button``;
