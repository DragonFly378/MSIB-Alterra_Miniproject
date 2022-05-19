import React from "react";
import "./Profile.scss";
import imgbanner from "../../images/bannerImg.svg";

import Jumbotron from "../../components/jumbotron/Jumbotron";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER_BY_ID, DELETE_FAVORITE_ONE } from "../../graphql/queries";

import { HeartFill, Trash3Fill } from "react-bootstrap-icons";
import Button from "../../components/button/Button";
import Swal from "sweetalert2";

const Profile = () => {
  const token = localStorage.getItem("Token");
  const user = JSON.parse(token);

  const userId = user?.id;
  const username = user?.fullname;
  const { data, refetch } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: userId,
    },
  });
  // console.log(data);

  const [deleteFav, { loading: loadingDelete }] = useMutation(
    DELETE_FAVORITE_ONE,
    {
      onCompleted: (data) => {
        Swal.fire({
          title: "Success",
          text: "Data berhasil dihapus!",
          icon: "success",
          confirmButtonText: "ASHIAP",
        });
        refetch();
      },
      onError: (error) => {
        console.log("error nih gan", { error });
      },
    }
  );

  const favorite = data?.users[0]?.bacaan_favorites;
  // console.log(favorite);

  const deleteHandle = (id) => {
    deleteFav({
      variables: {
        id: id,
      },
    });
  };

  return (
    <>
      <div className="profile mt-5">
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
            <h2 className="header">Surat Favorites</h2>
            <div className="container mt-4">
              {favorite?.map((fav, favIdx) => {
                return (
                  <div className="row fav-card" key={favIdx}>
                    <div
                      className="d-flex isi-fav "
                      style={{ justifyContent: "space-between" }}
                    >
                      <div className="d-flex my-auto">
                        <HeartFill size={32} className="icon me-4" />
                        <h4 className="desc">
                          {fav?.nama_surat} : {fav?.ayat}
                        </h4>
                      </div>
                      <Button
                        onClick={() => deleteHandle(fav.id)}
                        className="btn"
                        title={<Trash3Fill size={32} className="icon" />}
                      />
                    </div>
                  </div>
                );
              })}
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

export default Profile;
