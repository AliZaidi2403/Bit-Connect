import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News";
import Loader from "./Loader";
function HomePage() {
  const { data, isFetching } = useGetCryptosQuery(10);
  if (isFetching) {
    return <Loader />;
  }

  const globalStats = data?.data?.stats;

  return (
    <>
      <Typography.Title level={2} className="heading">
        Global Crypto Stats
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total CryptoCurrencies" value={globalStats.total} />
        </Col>
        {/*in ant design we have 24 spaces which takes up all the width */}
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={globalStats.totalMarkets} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Typography.Title>
        <Typography.Title level={2} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Typography.Title>
      </div>
      <CryptoCurrencies simplified />
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Latest Crypto News
        </Typography.Title>
        <Typography.Title level={2} className="show-more">
          <Link to="/news">Show more</Link>
        </Typography.Title>
      </div>
      <News simplified />
    </>
  );
}

export default HomePage;
