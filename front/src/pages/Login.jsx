import SignIn from "../components/SignIn";

function Login() {
  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <SignIn />
        </section>
      </main>
    </>
  );
}

Login.propTypes = {};

export default Login;
