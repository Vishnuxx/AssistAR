import { createUserWithEmailAndPassword } from "firebase/auth";
import { fauth } from "../firebase_config";
import { matchPasswords, saveToken } from "../utils/AuthUtils";
import axios from "axios";
import {
  REACT_APP_SERVER_CREATE_PROFILE_ENDPOINT,
  REACT_APP_SERVER__ENDPOINT,
} from "../constants/Envs";

function AuthService(fauth) {
  
  this.signup = async (username, email, password, confirmpassword) => {
    try {
      const usercredential = await createUserWithEmailAndPassword(
        fauth,
        email,
        password
      );
      const user = usercredential.user;
      saveToken(user.getIdToken());
      const response = await createProfile(user.getIdToken(), {
        username : username , 
        email : email
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  this.login = async (email, password) => {
    try {
      const userCredential = await fauth.signInWithEmailAndPassword(
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  this.forgotPassword = async (email) => {
    try {
      await fauth.sendPasswordResetEmail(email);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  //listens for token update
  this.onTokenUpdate = (onUpdate, onRemoved) => {
    return fauth.onIdTokenChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        localStorage.setItem("token", token);
        onUpdate(token);
      } else {
        localStorage.removeItem("token");
        onRemoved();
      }
    });
  };
}

export const Authenticator = new AuthService(fauth);
