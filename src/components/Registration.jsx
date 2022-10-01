import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const Registration = ({ onRegistration }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    if (validateEmail(user.email) && user.password && confirmPassword()) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [user]);

  const validateEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const extractUsername = (email) => {
    return email.split("@")[0];
  };

  const onChangeEmail = (e) => {
    if (validateEmail(e.target.value)) {
      if (user.username === "") {
        setUser({
          ...user,
          username: extractUsername(e.target.value),
          email: e.target.value,
        });
      } else {
        setUser({
          ...user,
          email: e.target.value,
        });
      }
    } else {
      setUser({
        ...user,
        email: e.target.value,
      });
    }
  };

  const confirmPassword = () => {
    return user.passwordConfirm ? user.password === user.passwordConfirm : true;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    onRegistration();
  };

  return (
    <Card>
      <StyledCardContent>
        <StyledTitle>
          <Typography variant="h1">REGISTRATION</Typography>
        </StyledTitle>
        <StyledForm onSubmit={onSubmit}>
          <TextField
            label="Email Address"
            value={user.email}
            onChange={onChangeEmail}
            error={Boolean(user.email) && !validateEmail(user.email)}
            helperText={
              user.email && !validateEmail(user.email)
                ? "Incorrect format of Email Address!"
                : ""
            }
          />
          <TextField
            label="User Name"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <TextField
            label="Password"
            value={user.password}
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <TextField
            label="Confirm Password"
            value={user.passwordConfirm}
            type="password"
            error={!confirmPassword()}
            helperText={!confirmPassword() ? "Confirmation failed!" : ""}
            onChange={(e) =>
              setUser({ ...user, passwordConfirm: e.target.value })
            }
          />
          <StyledButton
            variant="contained"
            type="submit"
            disabled={!isValidForm}
          >
            Register
          </StyledButton>
        </StyledForm>
      </StyledCardContent>
    </Card>
  );
};

const StyledCardContent = styled(CardContent)`
  padding: 30px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  max-width: 100px;
  align-self: center;
  &:disabled {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;
