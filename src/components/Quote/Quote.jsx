import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import quote from './Quote.module.css';

const Quote = () => {
  return (
    <section className={quote.section}>
      <div className={quote.quote}>
        <div className={quote.left}>
          <RiDoubleQuotesL />
        </div>
        <h1>
          Together we will solve some of the biggest challenges in the world.
        </h1>
        <div className={quote.right}>
          <RiDoubleQuotesR />
        </div>
      </div>
    </section>
  );
};

export default Quote;
