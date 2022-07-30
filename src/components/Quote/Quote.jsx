import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import quote from './Quote.module.css';

const Quote = ({ quotes }) => {
  return (
    <section className={quote.section}>
      <div className={quote.quote}>
        <div className={quote.left}>
          <RiDoubleQuotesL />
        </div>
        <h1>{quotes}</h1>
        <div className={quote.right}>
          <RiDoubleQuotesR />
        </div>
      </div>
    </section>
  );
};

export default Quote;
