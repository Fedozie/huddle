import styled from "styled-components";

export const StyledSocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    li{
        cursor: pointer;
        list-style-type: none;
        border: 1px solid #fff;
        border-radius: 50%;
        height: 40px;
        width: 40px;
        display: flex
        align-items: center;
        justify-content: center;
        padding-top: 10px;
        margin-right: 10px;
    }

    a{  
        color: #fff;
        text-decoration: none;
    }

   @media (max-width: ${({theme}) => theme.mobile}){
    margin-bottom: 2rem;
   }
`