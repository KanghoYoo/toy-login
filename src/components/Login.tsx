import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
<<<<<<< HEAD
  return (
    <div>
      <p>LoginPage</p>
    </div>
=======
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(String(e.target.value));
  };

  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickSignUp = () => {
    navigate(`/signup`);
  };
  const isValid = () => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const passWordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    return emailRegex.test(userId)
      ? passWordRegex.test(password)
        ? window.alert("로그인이 되었습니다.")
        : window.alert("비밀번호를 확인해주세요.")
      : window.alert("이메일 형식을 확인해주세요!");
  };

  return (
    <Background>
      <Container>
        <LoginImg>
          <IntroContents>Welcom To My Page!</IntroContents>
        </LoginImg>
        <LoginContainer>
          <ContentTitle>Sign In</ContentTitle>
          <FormWrapper>
            <Label>
              <FontAwesomeIcon icon={faUser} />
              <InputId
                type="email"
                onChange={onChangeId}
                placeholder="Username"
              ></InputId>
            </Label>
            <Label>
              <FontAwesomeIcon icon={faLock} />
              <InputPw
                type="password"
                onChange={onChangePw}
                placeholder="Password"
              ></InputPw>
            </Label>
          </FormWrapper>
          <TextWrapper>
            <Label>
              <RememberCheckBox type="checkbox" name="xxx" value="yyy" />
              Remember Me
            </Label>
            {"/"}
            <PasswordFind to="/findpassword">Forgot Password?</PasswordFind>
          </TextWrapper>
          <ButtonWrapper>
            <SignUpBtn type="button" onClick={onClickSignUp} color="#eaeaea">
              Sign Up
            </SignUpBtn>
            <LoginBtn type="button" onClick={isValid} color="#88a0ff">
              Login
            </LoginBtn>
          </ButtonWrapper>
        </LoginContainer>
      </Container>
    </Background>
>>>>>>> feature/login
  );
}

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
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

const Button = styled.button`
  margin: 10px;
  width: 195px;
  height: 50px;
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 8px;
`;

const Background = styled.div`
  height: 100vh;
  background-color: #f8f8f8;
`;

const Container = styled(FlexRow)`
  position: absolute; // 위치 지정
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 600px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 17px 20px -18px rgba(0, 0, 0, 1);
`;

const LoginImg = styled.div`
  flex: 1;
  background: linear-gradient(12deg, #4e68fc 20%, #88a0ff 0%);
  border-radius: 12px 0px 0px 12px;
`;

const IntroContents = styled.h1`
  color: white;
  margin: 50px 50px 0px 0px;
  font-weight: 700;
  font-size: 80px;
  border-radius: 0px 12px 12px 0px;
  text-align: right;
`;

const LoginContainer = styled(FlexColumn)`
  flex: 1;
  background-color: #ffffff;
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

const FormWrapper = styled.form`
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

const InputId = styled(Input)``;

const InputPw = styled(Input)``;

const TextWrapper = styled(FlexRow)`
  justify-content: space-around;
  margin-top: 10px;
  width: 400px;

  Label {
    width: 150px;
  }
`;

const RememberCheckBox = styled.input`
  margin-right: 5px;
  font-size: 16px;
  text-decoration: none;
`;

const PasswordFind = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  width: 150px;
  color: black;
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
`;

const SignUpBtn = styled(Button)`
  :hover {
    background-color: #dddddd;
    cursor: pointer;
  }
`;

const LoginBtn = styled(Button)`
  :hover {
    background-color: #7691ff;
    cursor: pointer;
  }
`;

export default Login;
