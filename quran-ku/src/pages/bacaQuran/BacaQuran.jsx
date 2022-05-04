import React, { useState, useEffect } from "react";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import imgbanner from "../../images/bannerImg.svg";
import "./BacaQuran.scss";

// import { Link } from "react-router-dom";

import alquranApi from "../../api/alquranApi";

import { StarFill, CaretRightFill } from "react-bootstrap-icons";

const BacaQuran = () => {
  return (
    <>
      <div className="baca-quran mt-5">
        <div className="container">
          <div className="header-section col-md-12 row">
            <h3>Assalamualaikum</h3>
            <h2>Muhammad Hafiz Hisbullah</h2>
          </div>
        </div>

        <div className="jumbotron-section ">
          <Jumbotron kiri={<KontenKiri />} kanan={<KontenKanan />} />
        </div>

        <div className="konten-section col-md-12 mt-5">
          <div className="container">
            <h4 className="header">Silahkan Pilih Surat</h4>
            <div className="container">
              <TableSurah />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const KontenKiri = () => {
  return (
    <>
      <div className="kiri">
        <div className="row align-content-center ">
          <h3>Lates Read</h3>
          <h2>
            Surah <span style={{ color: "#F9B52C" }}>Al-Baqarah - 256</span>{" "}
          </h2>
        </div>
      </div>
    </>
  );
};

const KontenKanan = () => {
  return (
    <>
      <div className="kanan">
        <img src={imgbanner} alt="" />
      </div>
    </>
  );
};

const TableSurah = ({ noSurah }) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getListSurah = async () => {
      let res = null;
      const params = {};

      res = await alquranApi.getSurah(params);
      setDatas(res.data);
      console.log(res.data[0].name.short);
    };
    getListSurah();
    console.log(datas);
  }, []);

  return (
    <>
      <table
        className="table table-borderless table-surah"
        aria-describedby="Surah"
      >
        <tbody>
          {datas.map((data, dataIdx) => (
            <tr key={dataIdx} className={`surah ${dataIdx + 1}`}>
              <td style={{ width: "5%" }}>
                <p className="text-center ">
                  <StarFill size={32} className="icon" />
                </p>
              </td>
              <td style={{ width: "60%" }}>
                <div className="name">
                  <span>{data.number}.</span> {data.name.transliteration.id}
                </div>
                <div className="desc-surah">
                  {data.numberOfVerses} Ayat - {data.revelation.id}
                </div>
              </td>
              <td style={{ width: "20%" }} className="text-end arabic">
                {data.name.short}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default BacaQuran;
