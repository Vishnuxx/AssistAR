import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { fauth } from "../firebase_config";
import {
  matchPasswords,
  saveToken,
  validateLoginInput,
  validateSignupInput,
} from "../utils/AuthUtils";
import axios from "axios";
import {
  REACT_APP_SERVER_CREATE_PROFILE_ENDPOINT,
  REACT_APP_SERVER__ENDPOINT,
} from "../constants/Envs";
import { savetUid } from "../utils/StorageUtils";

function AuthService(fauth) {
  this.signup = async (username, email, password, confirmpassword) => {
    //throws exception for invalid inputs
    const match = validateSignupInput(
      username,
      email,
      password,
      confirmpassword
    );
    console.log("validated");
    const resposnse = await axios({
      method: "post",
      url: REACT_APP_SERVER__ENDPOINT + "/signup",
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
    console.log("signedup");
    return resposnse;
  };

  this.login = async (email, password) => {
    //throws exception for invalid inputs
    const match = validateLoginInput(email, password);
    console.log("validated");

    const userCredential = await signInWithEmailAndPassword(
      fauth,
      email,
      password
    );
    console.log("logined");

    savetUid(userCredential.user.uid);

    const token = await userCredential.user.getIdToken();
    saveToken(token);
    console.log("token fetched", token);

    const profile = await axios({
      method: "get",
      url: REACT_APP_SERVER__ENDPOINT + "/userprofile",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        uid: userCredential.user.uid,
      },
    });

    console.log("fetched profile");

    return {
      user: userCredential.user,
      profile: profile,
    };
  };

  //listens for token update
  this.onTokenUpdate = (onUpdate, onRemoved) => {
    return fauth.onIdTokenChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        saveToken(token);
        onUpdate(token);
      } else {
        localStorage.removeItem("token");
        onRemoved();
      }
    });
  };
}

export const auth_service = new AuthService(fauth);
