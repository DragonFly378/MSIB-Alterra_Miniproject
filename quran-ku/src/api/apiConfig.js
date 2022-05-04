const apiConfig = {
  baseUrl: "https://api.quran.sutanlab.id/",
  //   apiKey: "....",
  surah: (noSurah) => `https://api.quran.sutanlab.id/surah/${noSurah}`,
  //   w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
