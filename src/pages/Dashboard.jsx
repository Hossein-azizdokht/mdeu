import React, { useState } from "react";
import PageTitle from "../components/pageTitles/PageTitle";
import { Row, Col } from "react-bootstrap";
import CardItem from "../components/dashboard/cardItem";
import { Baar } from "../components/dashboard/barChart";
import { SingleBaar } from "../components/dashboard/singleBarChart";
import { PieChart } from "../components/dashboard/pieChart";
import IranMap from "../components/IranMap";
// import { Calendar } from "react-modern-calendar-datepicker";
// import "react-modern-calendar-datepicker/lib/DatePicker.css";

const Dashboard = () => {
  return (
    <>
      <PageTitle title="میز کار"></PageTitle>
      <div className="pt-4">
        {/* <Row>
          <Col lg={12}>
            <Row>
              <Col>
                <CardItem bg="green">برنامه ریزی سالانه</CardItem>
              </Col>
              <Col>
                <CardItem bg="blue">برنامه ریزی چندساله</CardItem>
              </Col>
              <Col>
                <CardItem bg="orange">تستس</CardItem>
              </Col>
              <Col>
                <CardItem bg="cyan">تستس</CardItem>
              </Col>
            </Row>
          </Col>
        </Row> */}
        {/* <hr /> */}
        <Row>
          <Row>
            <Col lg={5}>
              <div className="Card">
                <Baar />
              </div>
              <div className="Card">
                <SingleBaar />
              </div>
            </Col>
            <Col lg={4}>
              <div className="Card">
                <IranMap />
              </div>
            </Col>
            <Col lg={3}>
              <div className="Card">
                <PieChart />
              </div>
            </Col>
          </Row>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
