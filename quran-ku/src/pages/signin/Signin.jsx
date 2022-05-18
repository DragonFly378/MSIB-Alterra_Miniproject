import React, { useState, useEffect } from "react";
import imgbanner from "../../images/bannerImg.svg";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";
import "./Signin.scss";

import { useLazyQuery } from "@apollo/client";
import { GET_USER_BY_EMAIL } from "../../graphql/queries";

const Signin = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([
    {
      label: "Email",
      type: "email",
      placeholder: "Type your email...",
      name: "email",
      value: "",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Type your password",
      name: "password",
      value: "",
    },
  ]);

  // if you want use LazyQuery
  const [getData, { loading: loadingLazy }] = useLazyQuery(GET_USER_BY_EMAIL, {
    onCompleted: (data) => {
      try {
        // console.log(inputs);
        // console.log(data);

        if (data.users.length < 1) {
          throw new Error("Akun tidak terdaftar");
        }

        if (inputs[1].value !== data.users[0].password) {
          throw new Error("Password salah mas");
        }
        if (inputs[1].value === data.users[0].password) {
          // alert("Yeay login berhasil");
          Swal.fire({
            title: "Success",
            text: "Yeay login berhasil",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            const token = localStorage.getItem("Token");
            if (token) {
              return navigate("/bacaquran");
            }
          });
        }

        const token = JSON.stringify({
          id: data.users[0].id,
          fullname: data.users[0].fullname,
        });

        console.log(token);
        localStorage.setItem("Token", token);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        }).then(() => {
          window.location.href = window.location.href;
        });
      }
    },
    onError: (error) => {
      alert(error.message);
      setInputs(
        inputs.map((input) => {
          input.value = "";
          return input;
        })
      );
    },
  });

  // console.log(dataLazy)

  // console.log(data);
  // useEffect(() => {
  //   const token = localStorage.getItem("Token");
  //   if (token) {
  //     return navigate("/bacaquran");
  //   }
  // });

  const onChangeHandler = (e) => {
    setInputs(
      inputs.map((input) => {
        if (input.name === e.target.name) {
          input.value = e.target.value;
        }
        return input;
      })
    );
    // console.log(e.target.name);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // refetch({
    //   email: inputs[0].value,
    // });
    getData({
      variables: {
        email: inputs[0].value,
      },
    });
  };

  // console.log(loadingLazy);

  return (
    <>
      <div className="signin-section col-md-12 ">
        <div className="container">
          <div className="row">
            <div className="konten">
              <div className="row">
                <div className="col-lg-6 col-md-12 m-auto">
                  {<KontenKiri />}
                </div>
                <div className="col-lg-6 col-md-12 m-auto">
                  <div className="kanan">
                    <h2>SIGN IN</h2>
                    <div className="form-section">
                      <Form
                        changeHandler={onChangeHandler}
                        inputs={inputs}
                        setInputs={setInputs}
                        submit={handleSubmitForm}
                        btnTitle="MASUK"
                      />
                      <p className="daftar text-center">
                        belum punya akun? <Link to="/signup">klik disini</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
        <img src={imgbanner} />
      </div>
    </>
  );
};

export default Signin;
