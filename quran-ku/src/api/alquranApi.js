import axiosClient from "./axiosClient";

const alquranApi = {
  getSurah: (params) => {
    const url = "surah";
    return axiosClient.get(url, params);
  },
};

export default alquranApi;
