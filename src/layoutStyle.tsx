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
    &:nth-child(n) {
        margin-left: 0
    }
    &:nth-child(3n) {
        margin-right: 0
    }
`