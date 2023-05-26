import { REACT_APP_FIREBASE_TOKEN_KEY } from "../constants/Envs";

export function validateSignupInput(username, email, password , confirmpassword) {
  const errors = {};

  // Validate username
  if (!username || username.trim() === "") {
    errors.username = "Username is required";
  }

  // Validate email
  if (!email || email.trim() === "") {
    errors.email = "Email is required";
  } else if (!isValidEmail(email)) {
    errors.email = "Invalid email format";
  }

  // Validate password
  if (!password || password.trim() === "") {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password should be at least 6 characters long";
  }

  // Validate confirmpassword
  if (!confirmpassword || confirmpassword.trim() === "") {
    errors.confirmpassword = "Confirmpassword is required";
  }

  // Check if the passwords are the same.
  if (password !== confirmpassword) {
    errors.passwordmatch = "Passwords doesnt match"
  }

  if(Object.keys(errors).length > 0) throw new Error(errors)
  
  return true;
}

export function isValidEmail(email) {
  // Simple email format validation
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}


export function saveToken(token) {
    localStorage.setItem(REACT_APP_FIREBASE_TOKEN_KEY , token);
}

export function getToken() {
    return localStorage.getItem(REACT_APP_FIREBASE_TOKEN_KEY);
}