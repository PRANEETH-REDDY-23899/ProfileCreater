import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button } from "antd";
import axios from "axios";

const { Meta } = Card;

const Sports = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const loadSportsNews = async () => {
      const data = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=2f58f33c186e4d468e41908dcdb81b0d"
      );
      setSports(data.data.articles);
    };
    loadSportsNews();
  }, []);

  return (
    <div align='center'>
      <Row gutter={16}>
          {sports &&
            sports.map((item, index) => {
              return (
                <Col span={8}>
                <Card
                  key={index}
                  hoverable
                  style={{width: 470, height:470, margin: 20 }}
                  cover={<img alt="foto" src={item.urlToImage} style={{width:470 , height:272.9}}/>}
                >
                  <Meta title={item.title} description={item.content} />
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Button type="primary" style={{ marginTop: "10px" }}>
                      Read More
                    </Button>
                  </a>
                </Card>
                </Col>
              );
            })}
      </Row>
    </div>
  );
};

export default Sports;