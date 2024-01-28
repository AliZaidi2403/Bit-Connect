import { Typography, Row, Col, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNews";
import Loader from "../components/Loader";
const { Text, Title } = Typography;

function News({ simplified }) {
  const { data } = useGetCryptoNewsQuery();

  let newsData = data?.data;
  if (!newsData) {
    return <Loader />;
  }
  if (simplified) {
    newsData = newsData.slice(0, 6);
  }

  return (
    <Row gutter={[24, 24]}>
      {newsData.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="new-title" level={4}>
                  {news.title}
                </Title>
                <img
                  src={news?.thumbnail}
                  alt="newsImg"
                  style={{ height: "70px", width: "70px" }}
                />
              </div>
              <p>
                {news.description.length > 150
                  ? `${news.description.substring(0, 150)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <Text>{moment(news.createdAt).startOf("ss").fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;
