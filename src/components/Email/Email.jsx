import { IoIosArrowDropright } from "react-icons/io";
import email from "./Email.module.css";

const Email = () => {
  return (
    <section>
      <div className={email.email}>
        <h2>Let's Be In Touch!</h2>
        <p>
          Get first hand information on products, promotions, job opportunities
          and company updates
        </p>
        <form htmlFor="email">
          <div className={email.inputButton}>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email Address"
            />
            <button>
              Subscribe <IoIosArrowDropright />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Email;
