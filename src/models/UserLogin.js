

function UserLogin(email, password) {
  this.email = email;
  this.password = password;


  this.toJson = () => {
    return {
      email: this.email,
      password: this.password,
    };
  };
}

export default UserLogin;