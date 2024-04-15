import { useEffect, useState } from "react";
import {exeptions} from "./exeptions";

export const useFetch = (url) => {
  const [champions, setChampions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const championList = Object.values(data.data).map((champion) => ({
          name: champion.name,
          key: champion.key,
          img: exeptions(champion.name)
      }));
        setChampions(championList);
        console.log("DATA", data.data);
        console.log("CAMPEONES", championList);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al recibir los campeones:", error);
      });
  }, []);
  return { champions, loading };
};
