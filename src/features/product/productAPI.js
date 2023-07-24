export function fetchAllProducts() {
  return new Promise( async (resolve) => {
      // todo we will not do hardcode.
      const response = await fetch('http://localhost:8080/products');
      const data = await response.json();
      resolve({data})
    });
}

export function fetchProductsByFilters(filter) {
  // {"category": "laptop"}
  let queryString = '';
  for (let key in filter){
    queryString += `${key}=${filter[key]}&`
  }

  return new Promise( async (resolve) => {
      // todo we will not do hardcode.
      const response = await fetch('http://localhost:8080/products?'+queryString);
      const data = await response.json();
      resolve({data})
    });
}
