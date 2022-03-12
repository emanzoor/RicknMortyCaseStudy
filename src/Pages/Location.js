import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";

const Location = () => {
  let display;
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { type, dimension, name } = info;
  let id = useParams();
  let [idl, setID] = useState(id.id);
  let api = `https://rickandmortyapi.com/api/location/${idl}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);
  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Location name :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Type: {type === "" ? "Unknown" : type}
        </h5>
        <div className="text-center">Dimension</div>
        <span className="text-center">{dimension === "" ? "Unknown" : dimension}</span>
        <h3 className="text-center">Residents</h3>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup name="Episode" changeID={setID} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
