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
    width: 700px;
    color: #333;
    font-size: 22px;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer
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