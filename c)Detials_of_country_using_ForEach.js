//creating variable instance for the XHR object to interact with the server.
let request=new XMLHttpRequest();
    request.open("GET","https://restcountries.com/v3.1/all")       //https link to access the api from the server.
    request.send();
    request.onload=function(){
        var data=JSON.parse(request.response)                      //storing datas inside the data variable.
        console.log("Details of name,captial,flag are shown below:")
        data.forEach((element,i) => {                             //here for each methods is used to iterate over the elements and  print the data in the console.
            console.log(`
        Name    : ${element.name.common}
        Capital : ${element.capital}
        Flag    : ${element.flags.png}`);                 //here using template literals.
        })
    }

//The sample output for the above javascript file are like as shown below:
//here I'm given only gew counties details of output only if you run the code you will get more datas
/*
    Details of name,captial,flag are shown below:

        Name    : Barbados
        Capital : Bridgetown
        Flag    : https://flagcdn.com/w320/bb.png
 
        Name    : British Indian Ocean Territory
        Capital : Diego Garcia
        Flag    : https://flagcdn.com/w320/io.png
 
        Name    : Republic of the Congo
        Capital : Brazzaville
        Flag    : https://flagcdn.com/w320/cg.png
 
        Name    : Brazil
        Capital : Brasília
        Flag    : https://flagcdn.com/w320/br.png
 
        Name    : Luxembourg
        Capital : Luxembourg
        Flag    : https://flagcdn.com/w320/lu.png
 
        Name    : United States Virgin Islands
        Capital : Charlotte Amalie
        Flag    : https://flagcdn.com/w320/vi.png
 
        Name    : Kiribati
        Capital : South Tarawa
        Flag    : https://flagcdn.com/w320/ki.png
 
        Name    : Romania
        Capital : Bucharest
        Flag    : https://flagcdn.com/w320/ro.png
 
        Name    : Laos
        Capital : Vientiane
        Flag    : https://flagcdn.com/w320/la.png
*/
