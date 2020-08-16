import axios from "axios";
import Layout from "../components/Layout";

import Prices from "../components/Prices";

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await axios({
    url: "https://api.coindesk.com/v1/bpi/currentprice.json",
    method: "GET",
  });

  const data = res.data;

  return {
    bpi: data.bpi,
  };
};

export default Index;
