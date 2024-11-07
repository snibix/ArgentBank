import {
  default as iconChat,
  default as iconMoney,
  default as iconSecurity,
} from "../assets/img/icon-chat.png";
import Feature from "./Feature";

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <Feature icon={iconChat} alt="Chat icon" title="You are our #1 priority">
        Need to talk to a representative? You can get in touch through our 24/7
        chat or through a phone call in less than 5 minutes.
      </Feature>
      <Feature
        icon={iconMoney}
        alt="Money icon"
        title="More savings means higher rates"
      >
        The more you save with us, the higher your interest rate will be!
      </Feature>

      <Feature
        icon={iconSecurity}
        alt="Security icon"
        title="Security you can trust"
      >
        We use top of the line encryption to make sure your data and money is
        always safe.
      </Feature>
    </section>
  );
}

Features.propTypes = {};

export default Features;
