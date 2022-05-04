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
          <h2>Surah Al-Baqarah - 256</h2>
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
      console.log(res.data[0]);
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
            <tr className="surah">
              <td style={{ width: "5%" }}>
                <div className="icon text-center">
                  <StarFill size={32} />
                </div>
              </td>
              <td style={{ width: "50%" }}>
                <div className="name">{data.name.transliteration.id}</div>
                <div className="desc">
                  {data.numberOfVerses} Ayat - {data.revelation.id}
                </div>
              </td>
              <td style={{ width: " 35%" }} className="text-end">
                <CaretRightFill size={28} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default BacaQuran;
