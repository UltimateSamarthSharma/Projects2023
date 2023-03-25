class User
{
  constructor(username, password)
  {
    this.username = username;
    this._password = password;
  }
  get password()
  {
    return this._password.replace(/./g, "*");
  }
  set password(newPassword)
  {
    const hasNumber = /\d/.test(newPassword);
    const hasUppercase = /[A-Z]/.test(newPassword);
    const isValid = newPassword.length >= 8 && hasNumber && hasUppercase;
    if (isValid)
    {
      this._password = newPassword;
    }
    else
    {
      console.error("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
    }
  }
}
const user1 = new User("johnsmith", "Passw0rd");
console.log(user1.password);
user1.password = "newpassword";
console.log(user1.password);
user1.password = "invalid";
console.log(user1.password);