import styled, { keyframes } from 'styled-components';

const rotateLoading = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Loading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vw;
    color: #fff;

    svg {
        animation: ${rotateLoading} 2s linear infinite;
    }

    p {
        font-size: 16px;
        text-transform: uppercase;
        margin: 10px auto;
        font-weight: 300;
    }
`;

export const Artist = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        text-decoration: none;
        font-size: 13px;
        text-transform: uppercase;
        color: #ef5466;

        &:hover {
            color: #222;
        }
    }

    a.buy {
        background-color: #ef5466;
        padding: 12px 15px;
        color: #fff;
        margin-top: 10px;
        border-radius: 4px;

        &:hover {
            background-color: #222;
        }
    }

    img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin-top: 25px;
        margin-bottom: 0;
    }

    h1 {
        font-size: 20px;
        margin-top: 10px;
    }

    p {
        font-size: 14px;
        margin-top: 10px;
        color: #666;
    }
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 20px;

    li {
        display: flex;
        padding: 15px 0;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & + li {
            border-top: 1px solid #eee;
        }

        div {
            display: flex;
        }

        small {
            display: flex;
            margin-left: 15px;
            justify-content: space-between;
            align-items: center;

            span {
                font-size: 13px;
                margin-left: 2px;
            }
        }
    }
`;
