import styled from 'styled-components'

export const SearchPar = styled.div`
    display: inline-block;  
    width: 500px;
    margin: 0 auto;
    text-align: right;
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

export const Thumbnail = styled.img`
    height: 280px;
    max-width: 100%;
    width: auto;
    border-radius: 5px;
`
export const Title = styled.div`
    position: absolute;
    top: 24px;
    left: 69px;
    font-size: 14px;
`
export const SMthumb = styled.img`
    position: absolute;
    top: 25px;
    left: 27px;
    width: 30px;
    height: 30px;
    border-radius: 3px;
`

export const Type = styled.div`
    position: absolute;
    top: 42px;
    left: 69px;
    font-size: 13px;
`

export const Time = styled.div`
    position: absolute;
    top: 70px;
    left: 28px;
    font-size: 12px;
    background: #333;
    padding: 3px;
    border-radius: 2px;
`
export const Summary = styled.div`
    position: absolute;
    bottom: 75px;
    left: 30px;
    font-size: 15px;
    width: 85%;
`

export const Season = styled.span`
    margin: 0 25px;
    font-size: 14px;
    color: #333;
`

export const Episode = styled.span`
    margin-right: 27px;
    font-size: 14px;
    color: #333;
`

export const Date = styled.span`
    margin-left: 27px;
    font-size: 14px;
    color: #333;
`

export const Reaction = styled.div`
    margin-top: 10px;
    text-align: center;
`

export const Watch = styled.a`
    margin-left: 0;
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-weight: bold;
    background: rgb(12, 119, 12);
    padding: 5px;
    border-radius: 3px;
    float: left;
`

export const FavButton = styled.i`
    color: rgb(142, 142, 142);
    cursor: pointer;
    font-size: 25px;
    float: right;
`

export const LikeButton = styled.i`
    color: rgb(142, 142, 142);
    cursor: pointer;
    font-size: 25px;
    margin-right: 10px;
    float: right;
`

export const FavButtonFilled = styled.i`
    color: #e43a3a;
    cursor: pointer;
    font-size: 25px;
`

export const LikeButtonFilled = styled.i`
    color: #004daa;
    cursor: pointer;
    font-size: 25px;
`