import axiosClient from "./axiosClient";

const alquranApi = {
  getListSurah: (params) => {
    const url = "surah";
    return axiosClient.get(url, params);
  },
  getDetailSurah: (id, params) => {
    const url = "surah/" + id;
    return axiosClient.get(url, params);
  },
};

export default alquranApi;
