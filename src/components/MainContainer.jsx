import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../reducer/context";
import Loader from "./Loader/Loader";

const MainContainer = () => {
  const { surah } = useContext(MainContext);
  let surahs = surah.sort(function (a, b) {
    return a.id - b.id;
  });
  if (!surahs) {
    return <div>Error 404</div>;
  }
  return (
    <div className="content">
      {surahs.length ? (
        surahs.map((surah) => {
          return (
            <>
              <Link
                className="card my-3 text-dark text-decoration-none"
                style={{ width: "25rem", height: "13vh", cursor: "pointer" }}
                to={`/${surah.id}`}
                key={surah.id}
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <h1>{surah.id}</h1>
                    </div>
                    <div className="col-9">
                      <div className="row">
                        <div className="col-6">
                          <b
                            className="card-title"
                            style={{ fontSize: ".8rem" }}
                          >
                            {surah.surah_name}
                          </b>
                          <p
                            className="text-muted"
                            style={{ fontSize: ".8rem" }}
                          >
                            {surah.translation}
                          </p>
                        </div>
                        <div className="col-6">
                          <h6 className="card-title">{surah.surah_name_ar}</h6>
                          <p className="text-muted">
                            {surah.total_verses} Ayahs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MainContainer;
