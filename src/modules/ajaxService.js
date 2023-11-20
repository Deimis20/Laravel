const ajaxService = (address,city)=>{
    const url = "https://api.postit.lt/v2/?city=";
    const key = "5xDgL3veHkw6EDOwILqT";
    return fetch(`${url}${city}&address=${address}&key=${key}`)
    .then(response=>response.json())
}

export default ajaxService