import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  background-color: #f8f8f8;
  background-size: cover;
`;

const Container = styled.div`
  position: absolute; // 위치 지정
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  width: 1000px;
  height: 600px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 17px 20px -18px rgba(0, 0, 0, 1);
`;

const LoginImg = styled.div`
  flex: 1;
  background: linear-gradient(12deg, #4e68fc 20%, #88a0ff 0%);
  border-radius: 12px 0px 0px 12px;
`;

const IntroContents = styled.p`
  color: white;
  margin: 50px 50px 0px 0px;
  font-weight: 700;
  font-size: 80px;
  border-radius: 0px 12px 12px 0px;
  text-align: right;
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  align-items: center;
`;

const ContentTitle = styled.p`
  width: 100%;
  height: 100px;
  margin-top: 0;
  padding: 20px 0px 0px 50px;
  box-sizing: border-box;
  background-color: #4e68fc;
  color: white;
  font-size: 60px;
  border-radius: 0px 12px 0px 0px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  height: 100px;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const InputId = styled.input`
  font-size: 14px;
  margin-left: 10px;
  width: 300px;
  height: 30px;
  border: none;
  border-bottom: 2px solid #88a0ff;
  :focus {
    outline: none;
    border-bottom: 4px solid #4e68fc;
  }
`;

const InputPw = styled.input`
  font-size: 14px;
  margin-left: 10px;
  width: 300px;
  height: 30px;
  border: none;
  border-bottom: 2px solid #88a0ff;
  :focus {
    outline: none;
    border-bottom: 4px solid #4e68fc;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  width: 400px;
  Label {
    width: 150px;
  }
`;

const AutoCheckBox = styled.input`
  font-size: 16px;
  text-decoration: none;
`;

const PasswordFind = styled.a`
  font-size: 16px;
  text-decoration: none;
  width: 150px;
  color: black;
`;

const BtnWrapper = styled.div`
  margin-top: 30px;
`;

const SignUpBtn = styled.button`
  margin: 10px;
  width: 195px;
  height: 50px;
  background-color: #eaeaea;
  border: none;
  border-radius: 8px;
  :hover {
    background-color: #dddddd;
    cursor: pointer;
  }
`;

const LoginBtn = styled.button`
  margin: 1px;
  width: 195px;
  height: 50px;
  background-color: #88a0ff;
  border: none;
  border-radius: 8px;
  :hover {
    background-color: #7691ff;
    cursor: pointer;
  }
`;

function Login() {
  return (
    <Background>
      <Container>
        <LoginImg>
          <IntroContents>Welcom To My Page!</IntroContents>
        </LoginImg>
        <LoginContainer>
          <ContentTitle>Sign In</ContentTitle>
          <InputWrapper>
            <Label>
              <FontAwesomeIcon icon={faUser} />
              <InputId type="email" placeholder="email"></InputId>
            </Label>
            <Label>
              <FontAwesomeIcon icon={faLock} />
              <InputPw type="password" placeholder="password"></InputPw>
            </Label>
          </InputWrapper>
          <TextBox>
            <Label>
              <AutoCheckBox type="checkbox" name="xxx" value="yyy" />
              &nbsp;Remember Me
            </Label>
            {"/"}
            <PasswordFind href="">Find My Password</PasswordFind>
          </TextBox>
          <BtnWrapper>
            <SignUpBtn type="button">Sign Up</SignUpBtn>
            <LoginBtn type="button">Login</LoginBtn>
          </BtnWrapper>
        </LoginContainer>
      </Container>
    </Background>
  );
}

export default Login;
