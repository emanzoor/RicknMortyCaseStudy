import React, { useEffect, useState } from "react";
import Loc from "../components/Card/Loc";
import Pagination from "../components/Pagination/Pagination";
import Filter from "../components/Filter/Filter";
const Locations = () => {

  let [pageNumber, updatePageNumber] = useState(1);
  let [lresults, setLocations] = React.useState([]);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;


  let allLoc = `https://rickandmortyapi.com/api/location/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(allLoc).then((res) => res.json());
      updateFetchedData(data);
      let a = await Promise.all(
        data.results.map((x) => {
          return x;
        })
      );
      setLocations(a);
    })();
  }, [allLoc]);

  return (
    <div className="container">

      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Locations

        </h1>
        <Loc page="/location/" results={lresults} />


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

export default Locations;
