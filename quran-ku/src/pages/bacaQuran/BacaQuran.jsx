import React, { useState, useEffect } from "react";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import imgbanner from "../../images/bannerImg.svg";
import "./BacaQuran.scss";

import { Link, useLocation, useNavigate } from "react-router-dom";

import alquranApi from "../../api/alquranApi";

import { StarFill } from "react-bootstrap-icons";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../../graphql/queries";

const BacaQuran = () => {
  // const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("Token");
  useEffect(() => {
    // console.log("object");

    if (!token) {
      console.log("token kosong");
      return navigate("/signin");
    }
  }, [location]);
  // if (!token) {
  //   console.log("token kosong");
  //   return navigate("/signin");
  // }

  const user = JSON.parse(token);

  const userId = user?.id;
  const username = user?.fullname;

  // console.log(userId);

  const { data, loading, error, fetching } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: userId,
    },
  });

  // console.log(data);
  return (
    <>
      <div className="baca-quran mt-5">
        <div className="container">
          <div className="header-section col-md-12 row">
            <h3>Assalamualaikum</h3>
            <h2>{username}</h2>
          </div>
        </div>

        <div className="jumbotron-section ">
          {data && (
            <Jumbotron
              kiri={<KontenKiri user={data.users[0]} />}
              kanan={<KontenKanan />}
            />
          )}
        </div>

        <div className="konten-section col-md-12 mt-5">
          <div className="container">
            <h2 className="header">Silahkan Pilih Surat</h2>
            <div className="container">
              <TableSurah />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const KontenKiri = ({ user }) => {
  const bacaan = user?.bacaan_terakhirs[0];

  return (
    <>
      <div className="kiri">
        <div className="row align-content-center ">
          <h3>Lates Read</h3>
          <h2>
            Surah{" "}
            <span style={{ color: "#F9B52C" }}>
              {bacaan?.nama_surat} : {bacaan?.ayat}
            </span>{" "}
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

const TableSurah = () => {
  const [datas, setDatas] = useState([]);
  // const link = "/surah"+ "/" + data.id;

  useEffect(() => {
    const getListSurah = async () => {
      let res = null;
      const params = {};

      res = await alquranApi.getListSurah(params);
      setDatas(res.data);
      // console.log(res.data);
    };
    getListSurah();
    // console.log(datas);
  }, []);

  return (
    <>
      <table
        className="table table-borderless table-surah"
        aria-describedby="Surah"
      >
        <tbody>
          {datas.map((data, dataIdx) => (
            <Link
              key={dataIdx}
              to={"/surah/" + data.number}
              style={{
                textDecoration: "none",
                cursor: "pointer",
                borderRadius: "20px",
              }}
            >
              <tr className={`surah ${data.number}`}>
                <td style={{ width: "5%" }}>
                  <p className="text-center ">
                    <StarFill size={32} className="icon" />
                  </p>
                </td>
                <td style={{ width: "40%" }}>
                  <div className="name">
                    <span>{data.number}.</span> {data.name.transliteration.id}
                  </div>
                  <div className="desc-surah">
                    {data.numberOfVerses} Ayat - {data.revelation.id}
                  </div>
                </td>
                <td style={{ width: "30%" }} className="text-end arabic">
                  {data.name.short}
                </td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default BacaQuran;
