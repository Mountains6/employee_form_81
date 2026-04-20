import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  background-color: #2f3542;
  padding: 20px;
  padding-top: 60px;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
  font-family: sans-serif;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
  justify-content: flex-start;
  width: 100%;
  max-width: 1200;
  margin: 0 auto;
  padding: 0 300px;
`;

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;
