import React from 'react'
import styled, { keyframes } from 'styled-components'

const Spinner = (): JSX.Element => {

    const rotate = keyframes`
        0% {
            -webkit-transform: rotate(0deg) scale(0.8);
            -moz-transform: rotate(0deg) scale(0.8);
        }
        50% {
            -webkit-transform: rotate(360deg) scale(1.2);
            -moz-transform: rotate(360deg) scale(1.2);
        }
        100% {
            -webkit-transform: rotate(720deg) scale(0.8);
            -moz-transform: rotate(720deg) scale(0.8);
        }
    `
    const ball1 = keyframes`
        0% {
            box-shadow: 30px 0 0 #f8b334;
        }
        50% {
            box-shadow: 0 0 0 #f8b334;
            margin-bottom: 0;
            -webkit-transform: translate(15px, 15px);
            -moz-transform: translate(15px, 15px);
        }
        100% {
            box-shadow: 30px 0 0 #f8b334;
            margin-bottom: 10px;
        }
    `
    const ball2 = keyframes`
        0% {
            box-shadow: 30px 0 0 #97bf0d;
        }
        50% {
            box-shadow: 0 0 0 #97bf0d;
            margin-top: -20px;
            -webkit-transform: translate(15px, 15px);
            -moz-transform: translate(15px, 15px);
        }
        100% {
            box-shadow: 30px 0 0 #97bf0d;
            margin-top: 0;
        }
    `
    const Spinner = styled.span`
        & {
            animation-name: ${rotate};
            animation-duration: 1s;
            animation-iteration-count: infinite;
            height: 50px;
            width: 50px;
        }

        &:before, &:after {
            border-radius: 50%;
            content: "";
            display: block;
            height: 20px;
            width: 20px;
        }

        &:before {
            animation-name: ${ball1};
            animation-duration: 1s;
            animation-iteration-count: infinite;
            background-color: #cb2025;
            box-shadow: 30px 0 0 #f8b334;
            margin-bottom: 10px
        }

        &:after {
            animation-name: ${ball2};
            animation-duration: 1s;
            animation-iteration-count: infinite;
            background-color: #00a096;
            box-shadow: 30px 0 0 #97bf0d;
        } 
    `

    return (
        <React.Fragment>
            <Spinner></Spinner>
        </React.Fragment>
    )
}

export default Spinner