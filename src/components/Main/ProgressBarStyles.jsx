import styled from "styled-components";
export const ProgressPriceContainer = styled.div`
  width: 400px;
  height: 20px;
  position: relative;
  background-color: #b1b0b0;
`;

export const BarProgress = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: red;
`;
