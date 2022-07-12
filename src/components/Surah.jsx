import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getData } from "../actions";
import Loader from "./Loader/Loader";
const Surah = () => {
  const [data, setData] = useState({});
  const [active, setActive] = useState(false);

  let { id } = useParams();
  let navigate = useNavigate();
  let verses = data.verses;

  useEffect(() => {
    getData(id, setData);
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="content">
      <button
        style={{ position: "fixed", top: "4rem", right: "1rem" }}
        className="btn btn-primary"
        onClick={goBack}
      >
        Go Back
      </button>
      <div className="container">
        <div
          className="border py-2 mt-3 m-auto"
          style={{ width: "340px", borderRadius: "10px" }}
        >
          <div
            className="text-center m-auto"
            style={{ borderRadius: "10px", width: "310px" }}
          >
            <button
              className={
                active === true
                  ? "btn btn-danger mr-5 px-4"
                  : "btn btn-success mr-5 px-4"
              }
              onClick={() => {
                setActive(false);
              }}
            >
              Translation
            </button>
            <button
              className={
                active === false
                  ? "btn btn-danger px-4"
                  : "btn btn-success px-4"
              }
              onClick={() => {
                setActive(true);
              }}
            >
              Description
            </button>
          </div>
        </div>
        <div className="mt-3">
          {active === false ? (
            <>
              <h1 className="text-center d-flex" style={{flexDirection:'column'}}>
                {data.surah_name_ar}
                <span style={{fontSize:'1rem'}}>
                {data.name} ({data.translation})
                </span>
              </h1>

              <div>
                {verses ?
                  Object.entries(data.verses).map((item) => {
                    return (
                      <div className="py-2 border-bottom">
                        <h5 className="text-right">{item[1].content}</h5>
                        <p>
                          {item[1].translation_eng}
                          <br />
                          <span className="text-muted">-Translation</span>
                        </p>
                        <p>
                          {item[1].transliteration}
                          <br />
                          <span className="text-muted">-Transliteration</span>
                        </p>
                      </div>
                    );
                  })
                  : <Loader />
                }
              </div>
            </>
          ) : (
            <h6 className='text-center m-auto w-75'>{data.description}</h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default Surah;
