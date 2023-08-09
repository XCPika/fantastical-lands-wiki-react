import styled from 'styled-components'
import border from './stone_border.png'

const StoneBorder = styled.div`
    background-image: url(${border});
    background-repeat: repeat-x;
    height:0.6vw;
    min-height:6px;
    max-height:12px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 1), 0 0 5px 0 rgba(0, 0, 0, 0.19);
    border-bottom: solid 1px rgb(0, 0, 0);
    border-top: solid 1px rgb(0, 0, 0);
`

export default StoneBorder