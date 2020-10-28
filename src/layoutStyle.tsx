import styled from 'styled-components'

export const Layout = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    text-align: left;
    align-items: flex-start;
`

export const Box = styled.section`
    width: calc(32% - 7px);
    margin: 20px 30px;
    position: relative;
    color: #FFF;
    &:nth-child(n) {
        margin-left: 0
    }
    &:nth-child(3n) {
        margin-right: 0
    }
    &:before {
        content: "";
        width: 100%;
        height: 82%;
        position: absolute;
        top: 0px;
        left: 0px;
        background: rgb(41 41 41 / 55%);
        border-radius: 5px;
        z-index: 0;
    }
`