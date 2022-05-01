import React from "react";

const Card = ({ dataAos, alt, img, title, desc }) => {
  return (
    <>
      <div className="col-sm-12 col-md-12 col-lg-4 px-5 cards" id="website">
        <div
          className="card card-features text-center"
          data-aos={dataAos}
          data-aos-delay="100"
        >
          <div className="card-konten">
            <img src={img} alt={alt} className="mb-4" />
            <h3 className="mb-3">{title}</h3>
            <p className="desc">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
