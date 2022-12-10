export const getData= async (url)=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  const data = await fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => {
      var lines = result.split(/\n/);
      var filtered = lines.filter(function (el) {
        return el != "";
      });
      var wrapped = "[" + filtered.join(",") + "]";
      var obj = JSON.parse(wrapped);
      return obj
    })
    .catch(error => console.log('error', error));

    return data;
}

