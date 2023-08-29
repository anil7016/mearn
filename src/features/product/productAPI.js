export function fetchAllProducts() {
  return new Promise( async (resolve) => {
      // todo we will not do hardcode.
      const response = await fetch('http://localhost:8080/products');
      const data = await response.json();
      resolve({data})
    });
}

export function fetchProductById(id) {
  return new Promise( async (resolve) => {
      const response = await fetch('http://localhost:8080/products/'+id);
      const data = await response.json();
      resolve({data})
    });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  console.log('sort', sort)
  console.log('filter', filter)
  //console.log('pagination', pagination)
  // {"category": "laptop"}
  let queryString = '';
  // for (let key in filter){
  //   queryString += `${key}=${filter[key]}&`
  // }
  for (let key in filter.filter) {
    const fltr = filter.filter
    const categoryValues = fltr[key];
    if (categoryValues.length) {
      queryString += `${key}=${categoryValues}&`;
    }
  }

  // for (let key in sort){
  //   queryString += `${key}=${sort[key]}&` ;
  // }

  // for (let key in pagination){
  //   queryString += `${key}=${pagination[key]}&` 
  // }
  for (let key in filter.pagination){
    const npage = filter.pagination
    queryString += `${key}=${npage[key]}&` 
  }
  console.log('queryString', queryString)
    
  return new Promise( async (resolve) => {
      // todo we will not do hardcode.
      const response = await fetch('http://localhost:8080/products?'+queryString);
      //const response = await fetch('http://localhost:8080/products?_page=1&limit=10');
      
      const data = await response.json();
      console.log('products-data', data)
      const totalItems = await response.headers.get('X-Total-Count');
      resolve({ data: { products: data, totalItems: totalItems } });
    });
}

export function fetchAllCategories() {
  return new Promise( async (resolve) => {
      // todo we will not do hardcode.
      const response = await fetch('http://localhost:8080/categories');
      const data = await response.json();
      resolve({data})
    });
}

export function fetchAllBrands() {
  return new Promise( async (resolve) => {
      // todo we will not do hardcode.
      const response = await fetch('http://localhost:8080/brands');
      const data = await response.json();
      resolve({data})
    });
}
