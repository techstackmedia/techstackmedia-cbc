import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Business from "../../components/Business/Business";
import School from "../../components/School/School";
import RecentUpdates from "../../components/RecentUpdates/RecentUpdates";
import CoperateClienet from "../../components/CoperateClients/CoperateClients";
import Email from "../../components/Email/Email";

const Home = ({ card, card1 }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <section>
        <Business card={card} />
        <RecentUpdates />
        <School card1={card1} />
      </section>
      <CoperateClienet />
      <Email />
      <Footer />
    </>
  );
};

export default Home;
