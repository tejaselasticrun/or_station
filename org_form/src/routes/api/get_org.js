

export async function get(){
    
    const url = 'http://0.0.0.0:8000/api/method/pravesh.facility.routes.temp_api.get_org';
    // const url = 'http://0.0.0.0:8000/api/resource/Organization?fields=[%22org_name%22]';
    //const url1 = 'https://gorest.co.in/public-api/users';
    // const url = 'http:localhost/api/method/login?usr=administrator&pwd=test'
    const res = await fetch(url,{
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' , 'Cookie': 'sid=4142c491ac52826458a01e515def1d85b65819891c02cc05e51da697;'}
    });
    data = await res.json();
    // console.log(data['data']);
    //  console.log(data);
    //  console.log(data.message);
    //  list = data.message;
     
    //  const lst = list.map(x => x['org_name']);
     
    //  console.log(lst);
     return{
        body :data.message
        // body: lst
    }
    
};