import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../services/useLogin";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Input from "../Input";

function SignIn() {
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const credentials = {
      email: target["username"].value,
      password: target["password"].value,
    };

    try {
      const result = await login(credentials);
      console.log("Connexion réussie :", result);
      navigate("/user");
    } catch (err) {
      console.error("Erreur de connexion :", err);
      setLoginError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>

      {(loginError || error) && (
        <div
          className="error-message"
          style={{ color: "red", fontSize: "14px" }}
        >
          email ou mot de passe invalid. Veuillez réessayer
        </div>
      )}

      <Input name="username" type="text" minLenght={2} required={true} />
      <Input
        name="password"
        type="current-password"
        minLenght={2}
        required={true}
      />
      <Checkbox name="remember-me" label="Remember me" />
      <Button type="submit" className="sign-in-button">
        {isLoading ? "Connecting..." : "Sign In"}
      </Button>
    </form>
  );
}

SignIn.propTypes = {};

export default SignIn;
