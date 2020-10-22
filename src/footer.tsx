import React from 'react'
import styled from 'styled-components'

const Footer = () => {

    const Footer = styled.div`
        background: #333;
        font-size: 15px;
        color: #DDD;
        padding: 10px;
        text-align: center
    `

    return (
        <React.Fragment>
            <Footer>
                Author | Mostafa Fawzy , &copy; Copyright 2020 | Rick And Morty
            </Footer>
        </React.Fragment>
    )
}

export default Footer