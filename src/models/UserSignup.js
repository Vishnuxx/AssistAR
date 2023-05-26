

function UserSignup(username , email , password , confirmpassword) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.confirmpassword = confirmpassword;

    this.toJson = () => {
        return {
          username : this.username,
          email : this.email , 
          password : this.password,
          confirmpassword : this.confirmpassword
        }
    }
}

export default UserSignup;