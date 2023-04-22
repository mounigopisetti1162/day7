//creating variable instance for the XHR object to interact with the server.
let request=new XMLHttpRequest();
    request.open("GET","https://restcountries.com/v3.1/all");      //https link to access the api from the server.
    request.send();
    request.onload=function(){
        var data=JSON.parse(request.response)                      //storing datas inside the data variable. 
        var total_populaiton=(data).reduce((previous,current)=>(+previous)+(+current.population),0);
                                                                   //here reduce method is used to calculate the population.
        console.log(`
        Total population of the countries are:   ${total_populaiton}
        `);                                                        //This is the template literal from es6.
    };

//The output for the above program is shown below.
/*

        Total population of the countries are:   7777721563

*/
