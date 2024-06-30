import { createContext, useEffect, useState } from "react";
import { categories } from "../constans";
import api from "../utils/api";

// adım 1: context yapısının temelini oluşturma
export const VideoContext = createContext();
// adım 2: sağlayıcı bileşeni oluşturma
export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[1]);
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const type = selectedCategory.type;
    // Seçilen kategorinin type'ı menu ise fonksiyonunu burada durdurur.
    if (type === "menu") return;
    // yüklenmeyi true'ya çek
    setIsLoading(true);

    const url =
      type === "home"
        ? "/home"
        : type === "trending"
        ? "/trending"
        : type === "category"
        ? `/search?query=${selectedCategory.name}`
        : "";

    // api isteği at ve durumu state aktar
    api
      .get(url)
      .then((res) => {
        setVideos(res.data.data);
        setError(null); // eskiden olan hatları kaldır
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        videos,
        error,
        isLoading,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};