import { REACT_APP_FIREBASE_TOKEN_KEY } from "../constants/Envs";


export function matchPasswords(password, confirmPassword) {
  // Check if the passwords are the same.
  if (password !== confirmPassword) {
    return false;
  }

  // Check if the password is at least 6 characters long.
  if (password.length < 6) {
    return false;
  }

  // The passwords match and are at least 6 characters long.
  return true;
}


export function saveToken(token) {
    localStorage.setItem(REACT_APP_FIREBASE_TOKEN_KEY , token);
}

export function getToken() {
    return localStorage.getItem(REACT_APP_FIREBASE_TOKEN_KEY);
}