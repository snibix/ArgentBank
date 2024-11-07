import Button from "../Button";
import Checkbox from "../Checkbox";
import Input from "../Input";

function SignIn() {
  return (
    <form>
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <Input name="username" type="text" />
      <Input name="password" type="password" />
      <Checkbox name="remember-me" label="Remember me" />
      <Button type="submit" label="Sign In" className="sign-in-button" />
    </form>
  );
}

SignIn.propTypes = {};

export default SignIn;
