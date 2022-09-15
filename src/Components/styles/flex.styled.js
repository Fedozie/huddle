import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div,
    & > ul{
        flex: 1;

        @media only screen and (max-width: ${({theme}) => theme.mobile}){
            flex-direction: column;
            text-align: center;
        }
    }

    & > div > *{
        margin-top: 20px;
    }
`