import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Loc = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, type, dimension } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark col-md-offset-3 loc "
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img className={`${styles.img} img-fluid`} src={"/rickmortyloc.jpg"} alt="loc" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Dimension</div>
                <span className="text-primary">{dimension === "" ? "Unknown" : dimension}</span>
                <div className="fs-6 fw-normal">Type</div>
                <div className="fs-5">{type}</div>
              </div>
            </div>
          </div>

          
        </Link>
      );
    });
  } else {
    display = "No Location Found :/";
  }

  return <>{display}</>;
};

export default Loc;
