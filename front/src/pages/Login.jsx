import SignIn from "../components/forms/SignIn";

function Login() {
  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <SignIn />
        </section>
      </main>
    </>
  );
}

Login.propTypes = {};

export default Login;
