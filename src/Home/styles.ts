import styled, {createGlobalStyle} from 'styled-components';

export const FullScreenGlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    background: #ccc;
    font-family: 'Fira Code', monospace, consolas, courier;
  }
`;

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Canvas = styled.canvas`
  background-color: #fff;
`;