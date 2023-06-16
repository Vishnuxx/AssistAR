import { REACT_APP_FIREBASE_TOKEN_KEY } from "../constants/Envs";
import {
  matchPasswords,
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateUsername,
} from "./Validator";

export function validateSignupInput(
  username,
  email,
  password,
  confirmpassword
) {
  validateUsername(username);
  validateEmail(email);
  validatePassword(password);
  validateConfirmPassword(confirmpassword);
  matchPasswords(password, confirmpassword);

  return true;
}

export function validateLoginInput(email, password) {
  validateEmail(email);
  validatePassword(password);
  return true;
}

export function saveToken(token) {
  localStorage.setItem(REACT_APP_FIREBASE_TOKEN_KEY, token);
}

export function getToken() {
  return localStorage.getItem(REACT_APP_FIREBASE_TOKEN_KEY);
}
