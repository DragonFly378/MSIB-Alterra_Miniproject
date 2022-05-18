import React from "react";
import img from "../../images/bookmark.svg";
import Card from "../card/Card";
import "./Features.scss";

const Features = () => {
  const datas = [
    {
      img: img,
      alt: "bookmark",
      dataAos: "flip-left",
      title: "BookMark Reads",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, ",
    },
    {
      img: img,
      alt: "bookmark",
      dataAos: "flip-up",
      title: "BookMark Reads",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, ",
    },
    {
      img: img,
      alt: "bookmark",
      dataAos: "flip-right",
      title: "BookMark Reads",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, ",
    },
  ];

  return (
    <>
      <section className="features-section col-md-12">
        <div className="container">
          <h2>Features</h2>
          <div className="konten row justify-content-center">
            {datas.map((data, dataIdx) => {
              return (
                <Card
                  key={dataIdx}
                  img={data.img}
                  alt={data.alt}
                  title={data.title}
                  desc={data.desc}
                  // dataAos={data.dataAos}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
