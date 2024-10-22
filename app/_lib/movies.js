import axios from "axios";

const API_KEY = "95589b75f4353c58100be7c1adaba264";

export async function getMoviesApi({ searchTerms, page }) {

  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  const formattedDate = lastMonth.toISOString().split('T').at(0);
  const params = {
    api_key: API_KEY,
    "primary_release_date.gte": formattedDate,
    language: 'en-US',
    sort_by: 'popularity.desc',
  }
  if (searchTerms) params.query = searchTerms;
  if (page) params.page = page;

  const { data, error } = await axios.get(`https://api.themoviedb.org/3/${searchTerms ? 'search' : 'discover'}/movie`, {
    params,
  })
  if (error) {
    console.error(error);
    throw new Error('The Movies data could not be loaded.');
  }

  return data;
}