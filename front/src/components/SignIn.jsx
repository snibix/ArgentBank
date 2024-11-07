import Checkbox from "./Checkbox";
import Input from "./Input";

function SignIn() {
  return (
    <form>
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <Input name="username" type="text" />
      <Input name="password" type="password" />
      <Checkbox name="remember-me" label="Remember me" />
      <a href="./user.html" className="sign-in-button">
        Sign In
      </a>
      <button className="sign-in-button">Sign In</button>
    </form>
  );
}

SignIn.propTypes = {};

export default SignIn;
