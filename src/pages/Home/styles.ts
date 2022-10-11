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

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

export const BaseInput = styled.input`
  background: transparent;
  height: 2rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme["gray-100"]};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["green-500"]};
  }

  &::placeholder {
    border-color: ${(props) => props.theme["gray-500"]};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};
  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Divider = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme["green-500"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
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
