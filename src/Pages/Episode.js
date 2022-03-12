import React, { useEffect, useState } from "react";
import Epi from "../components/Card/Epi";
import Pagination from "../components/Pagination/Pagination";
import Filter from "../components/Filter/Filter";
const Episode = () => {

  let [pageNumber, updatePageNumber] = useState(1);
  let [eresults, setEpisodes] = React.useState([]);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;


  let allepisode = `https://rickandmortyapi.com/api/episode/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(allepisode).then((res) => res.json());
      updateFetchedData(data);
      let a = await Promise.all(
        data.results.map((x) => {
          return x;
        })
      );
      setEpisodes(a);
    })();
  }, [allepisode]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Episodes

        </h1>
        <Epi page="/episodes/" results={eresults} />


      </div>
      <Filter
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />


      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />

    </div>
  );
};

export default Episode;
