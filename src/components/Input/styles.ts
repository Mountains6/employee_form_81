import styled from "@emotion/styled";

export const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #2f3542;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const InputElement = styled.input<{ hasError?: boolean }>`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.hasError ? "red" : "#ccc")};
  font-size: 16px;
  outline: none;
`;

export const Error = styled.p`
  color: red;
  font-size: 12px;
  margin: 5px 0 0 0;
`;
