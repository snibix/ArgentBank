import { useNavigate } from "react-router-dom";
import { useLogin } from "../../services/useLogin";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Input from "../Input";

function SignIn() {
  const { login, isLoading, isError, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const credentials = {
      email: form["username"].value,
      password: form["password"].value,
    };

    login(credentials)
      .then(() => {
        navigate("/user");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>

      {isError && <div className="error-message">{error}</div>}

      <Input
        name="username"
        type="text"
        minLength={2}
        required
        disabled={isLoading}
      />
      <Input
        name="password"
        type="current-password"
        minLength={2}
        required
        disabled={isLoading}
      />
      <Checkbox name="remember-me" label="Remember me" />
      <Button type="submit" className="sign-in-button" disabled={isLoading}>
        {isLoading ? "Connecting..." : "Sign In"}
      </Button>
    </form>
  );
}

SignIn.propTypes = {};

export default SignIn;
