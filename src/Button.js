import styled from 'styled-components';


const theme = {
    RecordButton: {
        default: '#31CACF', //Light-Blue
        hover: '#D5D5D5'    //Light-Grey
    },
    ResultsButton: {
        default: '#F26627', //Orange
        hover: '#EF3D59'    //Red
    },
    BackButton: {
        default: '#D5D5D5', //Light-Grey
        hover: '#9A9A9A'    //Grey
    }
}

const Button = styled.button`
    background-color: ${props => theme[props.theme].default};
    color: black;
    padding: 5px 15px
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    box-shadow: 0px 2px 2px lightgrey;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover {
    background-color: ${props => theme[props.theme].hover};
    }`

export default Button;