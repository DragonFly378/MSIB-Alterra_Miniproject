import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import alquranApi from "../../api/alquranApi";

import "./Detail.scss";

const Detail = () => {
  const { id } = useParams();

  const [datas, setDatas] = useState([]);
  const [nama, setNama] = useState([]);

  useEffect(() => {
    const getDetailSurah = async () => {
      let res = null;
      const params = {};

      res = await alquranApi.getDetailSurah(id, params);
      setDatas(res.data.verses);
      setNama(res.data);

      console.log(res.data);
    };
    getDetailSurah();
    console.log(nama.name.transliteration.id);
  }, []);

  const namaSurat = nama.name.transliteration.id;

  return (
    <>
      <>
        <div className="detail mt-5">
          <div className="container">
            <div className="header-section col-md-12 row">
              <h3>Assalamualaikum</h3>
              <h2>Muhammad Hafiz Hisbullah</h2>
              <Link to="/bacaquran">Kembali</Link>
            </div>

            <div className="surat-section mt-4 col-md-12">
              <div className="row header">
                <p>
                  Surat <br />{" "}
                  <span style={{ color: "#F9B52C" }}>{namaSurat}</span>
                </p>
              </div>

              {datas.map((data, dataIdx) => (
                <div className="ayat col-md-12" key={dataIdx}>
                  <div className="row">
                    <div className="arab ">{data.text.arab} </div>
                    <div className="arti">
                      {data.number.inSurah + ". "}
                      {data.translation.id}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Detail;
