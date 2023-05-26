import { createUserWithEmailAndPassword } from "firebase/auth";
import { fauth } from "../firebase_config";
import { matchPasswords, saveToken } from "../utils/AuthUtils";

function AuthService(fauth) {

  this.signup = async (username, email, password, confirmpassword) => {
   

    try {
      const usercredential = await createUserWithEmailAndPassword(fauth, email, password);
      const user = usercredential.user;
      
    } catch (error) {
      throw new Error(error.message);
    }
  };

  this.login = async (email, password) => {
     try {
       const userCredential = await fauth.signInWithEmailAndPassword(email, password);
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
}

export const Authenticator = new AuthService(fauth);
