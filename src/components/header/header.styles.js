import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
            height: 55px;
            padding: 10px;
            position: absolute;
        }
` 

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 200px;
    padding: 25px;
    padding-left: 0px;

    @media screen and (max-width: 800px) {
            width: 150px;
            padding: 0;
            position:absolute
    }
` 

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
            width: 100%;
            margin-top: 60px;
            padding: 0px 10px;
            justify-content: center;
        }

        @media screen and (max-width: 520px) {
            width: 90%;
        }

        @media screen and (max-width: 425px) {
            font-size: .8em;
        }

        @media screen and (max-width: 375px) {
            font-size: .7em;
        }

        @media screen and (max-width: 320px) {
            font-size: .6em;
        }


` 
export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        padding: 0px 15px;
        cursor: pointer;  
    }
`