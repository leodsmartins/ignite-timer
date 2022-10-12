import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const BaseCountdownButton = styled.button`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color: ${(props) => props.theme["gray-100"]};
background: ${(props) => props.theme["green-500"]};
border: 0;
border-radius: 8px;
padding: 1rem;
gap: 0.5rem;
font-weight: bold;
cursor: pointer;

&:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

&:not(:disabled):hover {
  background: ${(props) => props.theme["green-700"]};
}
`;

export const StartCountdownButton = styled(BaseCountdownButton)`

color: ${(props) => props.theme["gray-100"]};
background: ${(props) => props.theme["green-500"]};

&:not(:disabled):hover {
  background: ${(props) => props.theme["green-700"]};
}
`;


export const StopCountdownButton = styled(BaseCountdownButton)`
color: ${(props) => props.theme["gray-100"]};
background: ${(props) => props.theme["red-500"]};

&:not(:disabled):hover {
  background: ${(props) => props.theme["red-700"]};
}
`;


