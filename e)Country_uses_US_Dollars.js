//initialize axml http request.
let xhr=new XMLHttpRequest();
//open a request and pass url to open methods
// xhr.open("GET","https://jsonplaceholder.typicode.com/users");
xhr.open("GET","https://restcountries.com/v2/all");   //DOUBLT
//Process the request on server side and retrive the data.
xhr.onload=function(){
    //Please provide me data if my request lites in range of status code 200-<300.
    if(xhr.status==200){
        //provide the data to the server
        let resdata=JSON.parse(this.response);
        var data=[];
        for(let i=0;i<resdata.length;i++){
            if(resdata[i].currencies!==undefined){
             if(resdata[i].currencies[0].name==="United States dollar"){
                data.push(resdata[i]);
             }
        }}
        console.log("Country which used US Dollars as currency are shown below:");
        data.forEach((a,i)=>{
            console.log(`
            ${i} Country Name : ${a.name}
            `)
        })
    }}
xhr.send();
//The output for the above program is given :
/*
Country which used US Dollars as currency are shown below:
            0  Country  Name :  Bonaire, Sint Eustatius and Saba
            1  Country  Name :  British Indian Ocean Territory
            2  Country  Name :  Virgin Islands (British)
            3  Country  Name :  Virgin Islands (U.S.)
            5  Country  Name :  El Salvador
            4  Country  Name :  Ecuador
            7  Country  Name :  Marshall Islands
            6  Country  Name :  Guam
            8  Country  Name :  Micronesia (Federated States of)
            9  Country  Name :  Northern Mariana Islands
            10 Country  Name :  Palau
            11 Country  Name :  Puerto Rico
            12 Country  Name :  Turks and Caicos Islands
            13 Country  Name :  United States of America
*/
