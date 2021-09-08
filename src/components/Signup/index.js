import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  TextLink,
} from "./SignupElements";

const Signup = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">deco</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in your account</FormH1>
              <FormLabel htmlFor="for">Full Name</FormLabel>
              <FormInput type="text" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Sign up</FormButton>
              <Text>
                Already have an account?<TextLink> Sign In</TextLink>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signup;
