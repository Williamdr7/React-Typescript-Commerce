const API_URL = "https://graphql.datocms.com/";
const API_TOKEN = "fd3045f98da7c2012b11e4846443d1";

async function fetchCmsAPI(query: string, { variables }: any = {}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllProducts() {
  const data = await fetchCmsAPI(`
  {
    allProducts {
      id
      description
      image {        
        url
      }
      rating
      price
      priceCents
      available
    }  
  }
  `);

  return data.allProducts;
}

export default getAllProducts;
