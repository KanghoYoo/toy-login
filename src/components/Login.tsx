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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 600px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  box-shadow: 0 17px 20px -18px rgba(0, 0, 0, 1);
`;

const LoginImg = styled.div`
  background: linear-gradient(12deg, #4e68fc 20%, #88a0ff 0%);
  background: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 50%;
  border-radius: 12px 0px 0px 12px;
  text-align: center;
  margin: 0 auto;
`;

const IntroContents = styled.p`
  margin: 50px 50px 0px 0px;
  color: #ffffff;
  font-weight: 700;
  font-size: 80px;
  border-radius: 0px 12px 12px 0px;
  text-align: right;
`;

const LoginContainer = styled.div`
  width: 50%;
`;

const ContentTitle = styled.p`
  height: 50px;
  margin-top: 0;
  padding: 20px 0px 30px 50px;
  background-color: #4e68fc;
  color: white;
  font-size: 60px;
  border-radius: 0px 12px 0px 0px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

const InputId = styled.input`
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

const AutoCheckBox = styled.input`
  margin-right: 5px;
`;

const PasswordFind = styled.span`
  font-size: 14px;
  text-decoration: none;
`;

const BtnWrapper = styled.div`
  width: auto;
  margin: 0px 40px;
`;
const SignUpBtn = styled.button`
  margin: 10px;
  width: 195px;
  height: 50px;
  border: none;
  border-radius: 8px;
`;

const LoginBtn = styled.button`
  margin: 1px;
  width: 195px;
  height: 50px;
  background-color: #88a0ff;
  border: none;
  border-radius: 8px;
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
          <></>
          <Label>
            <AutoCheckBox type="checkbox" name="xxx" value="yyy" />
            Remember Me
            {" / "}
            <PasswordFind>Find My Password</PasswordFind>
          </Label>
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
