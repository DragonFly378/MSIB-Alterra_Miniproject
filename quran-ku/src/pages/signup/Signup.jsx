import React, { useState } from "react";
import imgbanner from "../../images/bannerImg.svg";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";
import "./Signup.scss";
import Swal from "sweetalert2";

import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import {
  INSERT_USER_ONE,
  GET_USER,
  GET_USER_BY_EMAIL,
} from "../../graphql/queries";

const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([
    {
      label: "Nama Lengkap",
      type: "text",
      placeholder: "Type your full name...",
      name: "fullname",
      value: "",
    },
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
    {
      label: "Re-password",
      type: "password",
      placeholder: "Re-type your password",
      name: "re-password",
      value: "",
    },
  ]);
  const { data, loading, refetch } = useQuery(GET_USER);

  const [insertUser, { loading: loadingInsert }] = useMutation(
    INSERT_USER_ONE,
    {
      onCompleted: (data) => {
        alert("Akun Terdaftarkan");
        refetch();
        navigate("/signin");
      },
      onError: (error) => {
        console.log("error nih gan", { error });
      },
    }
  );

  const [getDataEmail, { data: dataEmail, loading: loadingLazy }] =
    useLazyQuery(GET_USER_BY_EMAIL, {
      onCompleted: (data) => {},
      onError: (error) => {
        console.log("error nih gan", { error });
      },
    });

  // console.log(data);

  const onChangeHandler = (e) => {
    setInputs(
      inputs.map((input) => {
        if (input.name === e.target.name) {
          input.value = e.target.value;
        }
        return input;
      })
    );
    // console.log(inputs[2].value === inputs[3].value);
    // console.log(inputValueMap[0]);
  };

  // const onGetData = () => {
  //   if (!data) {
  //     getData();
  //   } else {
  //     refetch();
  //   }
  // };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    getDataEmail({
      variables: {
        email: inputs[1].value,
      },
    });

    const id = Math.floor(Math.random() * 10000) + 1;
    const tmp = {
      id: id,
      fullname: inputs[0].value,
      email: inputs[1].value,
      password: inputs[2].value,
    };

    // console.log(tmp);
    if (inputs[2].value !== inputs[3].value) {
      Swal.fire({
        title: "Error",
        text: "Password tidak sama",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else if (dataEmail.users.length >= 1) {
      Swal.fire({
        title: "Error",
        text: "Email sudah terpakai",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      insertUser({
        variables: {
          object: tmp,
        },
      });
    }

    // setInputs(
    //   inputs.map((input) => {
    //     return (input.value = "");
    //   })
    // );

    // onGetData();
  };

  return (
    <>
      <div className="signup-section col-md-12 ">
        <div className="container">
          <div className="row">
            <div className="konten">
              <div className="row">
                <div className="col-lg-6 col-md-12 m-auto">
                  {<KontenKiri />}
                </div>
                <div className="col-lg-6 col-md-12 m-auto">
                  <div className="kanan">
                    <h2>SIGN UP</h2>
                    <div className="form-section">
                      <Form
                        changeHandler={onChangeHandler}
                        inputs={inputs}
                        setInputs={setInputs}
                        submit={handleSubmitForm}
                        btnTitle="DAFTAR"
                        // validation={...}
                      />
                      <p className="daftar text-center">
                        sudah punya akun? <Link to="/signin">klik disini</Link>
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

export default Signup;
