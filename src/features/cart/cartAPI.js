export function addToCart(item) {
  console.log('item-api', item)
  return new Promise( async (resolve) => {
      const response = await fetch('http://localhost:8080/cart',{
        method:'POST',
        body: JSON.stringify(item),
        headers: {'content-type': 'application/json'}
      });
      const data = await response.json();
      resolve({data})
    });
}

export function fetchItemByUserId(userId) {
  console.log('userId', userId)
  return new Promise( async (resolve) => {
      const response = await fetch('http://localhost:8080/cart?user='+userId);
      const data = await response.json();
      resolve({data})
    });
}
