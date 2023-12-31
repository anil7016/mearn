export function createUser(userData) {
  return new Promise( async (resolve) => {
      const response = await fetch('http://localhost:8080/auth/signup',{
        method:'POST',
        body: JSON.stringify(userData),
        headers: {'content-type': 'application/json'}
      });
      const data = await response.json();
      resolve({data})
    });
}

export function checkUser(loginInfo) {
  return new Promise( async (resolve, reject) => {
    const response = await fetch('http://localhost:8080/auth/login',{
        method:'POST',
        body: JSON.stringify(loginInfo),
        headers: {'content-type': 'application/json'}
      });
    const data = await response.json();
    console.log('data', data)
    if(data && data.id){
      resolve( {data: data})
    } else{
      reject({message: 'Wrong credential'})
    }
    // const response = await fetch('http://localhost:8080/auth/login');
    // const data = await response.json();
    // console.log('data', data)
    // if(data.length){
    //   if(password === data[0].password){
    //     resolve({data : data[0]})  
    //   }else{
    //     reject({message: "wrong credential"})
    //   }
      
    // }else{
    //   reject({ message: 'User not found'})
    // }
    
  });
}

export function updateUser(update) {
  console.log('update-api', update)
  return new Promise( async (resolve) => {
      const response = await fetch('http://localhost:8080/users/'+update.id,{
        method:'PATCH',
        body: JSON.stringify(update),
        headers: {'content-type': 'application/json'}
      });
      const data = await response.json();
      resolve({data})
    });
}
