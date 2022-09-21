import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 1.5rem;

    & > *{
        margin-right: 2rem;
    }

    @media only screen and (max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
        text-align: left;
    }

    & > div,
    & > ul{
        flex: 1;

        @media only screen and (max-width: ${({theme}) => theme.mobile}){
           
        }
    }

    & > div > *{
        margin-top: 20px;
    }
`