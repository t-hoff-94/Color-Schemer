import styled from 'styled-components'
import chroma from 'chroma-js'

const Container = styled.div`
  background: #444;
  color: #fff;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 55px;
  min-height: 100vh;
  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 1s;
    input {
      border-radius: 7px;
      border: 2px solid grey;
      padding: 5px;
      text-align: center;
      font-size: 22px;
      max-width: 200px;
    }
    button {
      background: #fff;
      border: 2px solid grey;
      border-radius: 7px;
      font-size: 17px;
      margin: 5px;
      padding: 7px;
      outline: none;
    }
  }
  .color-box {
    border-radius: 7px;
    width: 200px;
    height: 66px;
    position: relative;
    overflow: hidden;
    transition: all .25s;
    button {
      border: none;
    }
    div {
      bottom: 0;
      display: flex;
      justify-content: space-around;
      height: 44px;
      position: absolute;
      width: 100%;
    }
  }
  .primary {
    background: ${props => chroma(props.color)};
    /* border: 4px solid ${props => chroma(props.compColor)}; */
  }
  .complementary {
    background: ${props => chroma(props.compColor)};
    /* border: 4px solid ${props => chroma(props.color)}; */
  }
`;
















export default Container
