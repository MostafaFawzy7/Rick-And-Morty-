import styled from 'styled-components'

export const Header = styled.header`
    padding: 5px;
    border-bottom: 1px solid rgb(219, 219, 219);
    width: 100%;
    position: sticky;
    top: 0px;
    background: #fff;
    z-index: 1;
`

export const Logo = styled.div`
    display: inline-block;
    width: 350px;
    color: #333;
    font-size: 22px;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer
`

export const SearchPar = styled.div`
    display: inline-block;  
    width: 350px;
    margin: 0 auto;
    text-align: center;
`

export const Input = styled.input` 
    width: 60%;
    height: 10px;
    margin: 0px auto;
    color: rgb(142, 142, 142);
    border-radius: 3px;
    cursor: text;
    font-size: 14px;
    font-weight: 300;
    padding: 7px;
    text-align: center;
    border-radius: 1px;
    border: none;
    background: #f0f0f0;
    border: solid 1px #d5d5d5;
`

export const Icons = styled.div`
    display: inline-block;
    width: calc(100% - 700px);
    text-align: right;
`

export const Icon = styled.span`
    margin-left: 35px;
    font-size: 25px;
    color: #333
`