import Subtitle from "./SubTitle";

function Hero() {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <Subtitle>No fees.</Subtitle>
        <Subtitle>No minimum deposit.</Subtitle>
        <Subtitle>High interest rates.</Subtitle>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}

Hero.propTypes = {};

export default Hero;
