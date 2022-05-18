import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import alquranApi from "../../api/alquranApi";
import Swal from "sweetalert2";

import Button from "../../components/button/Button";
import "./Detail.scss";

import { useQuery, useMutation } from "@apollo/client";
import {
  INSERT_FAVORITE,
  UPDATE_LAST_READ,
  GET_USER_BY_ID,
  INSERT_LAST_READ_ONE,
} from "../../graphql/queries";

const Detail = () => {
  const { id } = useParams();

  const [datas, setDatas] = useState([]);
  const [nama, setNama] = useState({});
  const [panjang, setPanjang] = useState({});

  // Get id user from token
  const token = localStorage.getItem("Token");
  const user = JSON.parse(token);
  const userId = user?.id;
  // console.log(userId);

  const {
    data: database,
    loading,
    error,
    fetching,
  } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: userId,
    },
  });

  const [insertLastRead, { loading: loadingInsert }] = useMutation(
    INSERT_LAST_READ_ONE,
    {
      onCompleted: (data) => {},
      onError: (error) => {
        console.log("error nih gan", { error });
      },
    }
  );

  const [insertFavorite, { loading: loadingInsert2 }] = useMutation(
    INSERT_FAVORITE,
    {
      onCompleted: (data) => {},
      onError: (error) => {
        console.log("error nih gan", { error });
      },
    }
  );

  const [updateLastRead, { loading: loadingUpdate }] = useMutation(
    UPDATE_LAST_READ,
    {
      onCompleted: (data) => {},
      onError: (error) => {
        console.log("error nih gan", { error });
      },
    }
  );

  useEffect(() => {
    const getDetailSurah = async () => {
      let res = null;
      const params = {};

      res = await alquranApi.getDetailSurah(id, params);
      setDatas(res.data.verses);
      setNama(res.data);

      // console.log(res.data);
    };
    const getListSurah = async () => {
      let res = null;
      const params = {};

      res = await alquranApi.getListSurah(params);
      // setDatas(res.data);
      // console.log(res.data);

      setPanjang(res.data.length);
    };
    getListSurah();
    getDetailSurah();
    // console.log(nama.name.transliteration.id);
    console.log(database?.users[0].bacaan_trakhirs);
  }, []);

  const namaSurat = nama.name?.transliteration?.id;
  const bismillah = nama.preBismillah;
  // console.log(panjang, bismillah);

  const latesReadHandle = (e, suratName, ayatNumber) => {
    e.preventDefault();
    // console.log("Surat " + suratName + " - " + ayatNumber);
    const id = Math.floor(Math.random() * 10000) + 1;

    const tmp = {
      id: id,
      user_id: userId,
      nama_surat: suratName,
      ayat: ayatNumber,
    };

    if (database?.users[0].bacaan_trakhirs === undefined) {
      insertLastRead({
        variables: { object: tmp },
      });
    } else {
      updateLastRead({
        variables: {
          user_id: userId,
          nama_surat: suratName,
          ayat: ayatNumber,
        },
      });
    }

    Swal.fire({
      title: `Surah ${suratName} : ${ayatNumber}`,
      text: "Data berhasil diupdate",
      icon: "success",
      confirmButtonText: "ASHIAP",
    });
  };

  const onClickFavorite = (e, suratName, ayatNumber) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000) + 1;

    const tmp = {
      id: id,
      nama_surat: suratName,
      ayat: ayatNumber,
      user_id: userId,
    };

    insertFavorite({
      variables: {
        object: tmp,
      },
    });
    Swal.fire({
      title: `Surah ${suratName} : ${ayatNumber}`,
      text: "Berhasil dimasukan ke favorite",
      icon: "success",
      confirmButtonText: "ASHIAP",
    });
  };
  return (
    <>
      <>
        <div className="detail mt-5">
          <div className="container">
            <div className="header-section col-md-12 row">
              <h3>Assalamualaikum</h3>
              <h2>{user?.fullname}</h2>
              <Link to="/bacaquran">Kembali</Link>
            </div>

            {id >= panjang ? (
              <div className="surat-section mt-4 col-md-12">
                <div className="row header">
                  <p>
                    Maaf <br />{" "}
                    <span style={{ color: "#F9B52C" }}>Surat Tidak Ada</span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="surat-section mt-4 col-md-12">
                <div className="row header">
                  <p>
                    Surat <br />{" "}
                    <span style={{ color: "#F9B52C" }}>{namaSurat}</span>
                  </p>
                </div>
                {bismillah == null ? (
                  " "
                ) : (
                  <div className="ayat col-md-12">
                    <div className="row">
                      <div className="arab ">{bismillah.text.arab} </div>
                      <div className="arti">{bismillah.translation.id}</div>
                    </div>
                  </div>
                )}

                {datas.map((data, dataIdx) => (
                  <div className="ayat col-md-12" key={dataIdx}>
                    <div className="row">
                      <div className="arab ">{data.text.arab} </div>
                      <div className="arti">
                        {data.number.inSurah + ". "}
                        {data.translation.id}
                      </div>

                      <div className="d-flex action">
                        <Button
                          onClick={(e) =>
                            latesReadHandle(e, namaSurat, data.number.inSurah)
                          }
                          className=" btn "
                          title="Tandai Bacaan"
                          background="#027878"
                          color="#fff "
                        />

                        <Button
                          onClick={(e) =>
                            onClickFavorite(e, namaSurat, data.number.inSurah)
                          }
                          className=" btn fav"
                          title="Add Favorite"
                          background="#fff"
                          color="#027878 "
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default Detail;
