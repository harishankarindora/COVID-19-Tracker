import axios from "axios";

export const FetchGlobalData = async () => {
  try {
    const globalSummary = await axios.get("https://corona.lmao.ninja/v2/all");
    const countries = await axios.get("https://corona.lmao.ninja/v2/countries?sort=cases");

    return { globalSummary, countries };
  }
  catch (error) {
    return error;
  }
}

export const FetchHistoricalData = async () => {
  try {
    const historical = await axios.get("https://covid19.mathdro.id/api/daily");

    return { historical };
  }
  catch (error) {
    return error;
  }
}

export const FetchNewsData = async (endpoint, query, language, limit) => {
  let url = "https://api.coronatracker.com/";

  if (endpoint === 'news/trending') {
    url = `${url}${endpoint}?language=${language}&limit=${limit}`;
    try {
      const {data: {items}} = await axios.get(url);
      return{ items }
    }
    catch (error) {
      return error;
    }
  }
  else{
    url = `${url}${endpoint}?q=${query}&limit=${limit}`
    try {
      const data = await axios.get(url);
      const items= data.data;
      return{ items }
    }
    catch (error) {
      return error;
    }
  }
}