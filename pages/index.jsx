import MarketPlace from "PageComponents/BlackFriday/MarketPlace";
export async function getStaticProps() {
  const response = await fetch(`https://nero.bumpa.xyz/api/stores/nbc`);
  const data = await response.json();

  return {
    props: {
      deals: data,
    },
  };
}
const Home = ({ deals }) => {
  return <MarketPlace deals={deals} />;
};

export default Home;
