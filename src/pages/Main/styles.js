import styled, { keyframes, css } from 'styled-components';

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

    @media (max-width: 480px) {
        flex-direction: column !important;

        input {
            flex: 1;
        }
    }
`;

const rotateSpinner = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background-color: #ef5466;
    border: 0;
    padding: 0 20px;
    margin-left: 15px;
    border-radius: 4px;
    display: flex;
    justify-items: center;
    align-items: center;
    cursor: pointer;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${props =>
        props.loading &&
        css`
            svg {
                animation: ${rotateSpinner} 2s linear infinite;
            }
        `}

    @media (max-width: 480px) {
        flex: 1;
        flex-direction: column !important;
        margin: 15px 0 0;
        padding: 15px;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    list-style: none;
    margin-top: 25px;

    li {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    a {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: stretch;
        align-content: stretch;
        align-items: center;
        color: #ef5466;
        text-decoration: none;
        padding: 18px 15px;
        border-radius: 4px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

        &:hover {
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.18);
        }
    }

    img {
        align-self: center;
        width: 100px;
        height: 100px;
        margin-bottom: 15px;
        border-radius: 50%;
        border: 2px solid #eee;
    }

    div {
        display: flex;
        align-items: center;
        overflow: hidden;
        margin-top: auto;
        flex-direction: column;

        strong {
            flex: 1;
        }

        p {
            flex: 1;
            font-size: 12px;
            color: #333;
        }
    }
`;
