import styled from "styled-components";

const customStyle = (props) => {
  return {
    flexDirection: props.direction || "row",
    justifyContent: props.justify || "center",
    alignItems: props.align || "center",
  };
};

export const FlexContainer = styled.div.attrs(customStyle)`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;
