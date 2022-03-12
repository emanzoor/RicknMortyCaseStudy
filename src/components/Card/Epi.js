import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import CardDetails from "./CardDetails";

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, episode, air_date } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img className={`${styles.img} img-fluid`} src={"/rick-and-morty-poster-03.jpg"} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Episode</div>
                <div className="fs-5">{episode}</div>
                <div className="fs-6 fw-normal">Air Date</div>
                <div className="fs-5">{air_date}</div>
              </div>
            </div>
          </div>


        </Link>
      );
    });
  } else {
    display = "No Episode Found :/";
  }

  return <>{display}</>;
};

export default Card;
