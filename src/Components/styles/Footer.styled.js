import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    color: #fff;
    // padding: 100px 0 60px;
    padding: 6rem 3rem .8rem 3rem;

    img{
        margin-bottom: 2.5rem;
    }

    ul {
        list-style-type: none;
    }

    ul li {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 20px;
    }

    ul:first-of-type > li > div{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1.5rem;
    }

    ul:first-of-type > li:first-of-type > div{
        align-items: flex-start;
    }

    li p {
        text-align: left;
    }

    .copyright{
        text-align: right;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;
    
        ul {
            padding: 0;
            width: 100%;
        }

        ul:first-of-type > li > p{
            text-align: left;
            margin-left: 1.5rem;
        }



        ul:nth-of-type(2){
            margin-top: 2.5rem;
        }

        
        p {
            text-align: center;
        }
    }
`