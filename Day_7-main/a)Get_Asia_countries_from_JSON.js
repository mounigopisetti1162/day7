//creating variable instance for the XHR object to interact with the server.
let request=new XMLHttpRequest();
    request.open("GET","https://restcountries.com/v3.1/all")       //https link to access the api from the server.
    request.send();
    request.onload=function(){
        var data=JSON.parse(request.response)                     //storing datas inside the data variable.
        data=data.filter((country)=>country.region==="Asia")      //filtering the data that are in Asia continent by using the filter method.
        console.log("Asian continent countries are shown below:")
        data.forEach((element,i) => {                             //here for each methods is used to iterate over the elements and  print the data in the console.
            console.log(`
            ${i} ${element.name.common}`);                        //here using template literals.
        })
    }

// The output for the above JSON file is shown below"
/*
Asian continent countries are shown below:
            0 Laos
            1 Iraq
            2 China
            3 South Korea
            4 Kuwait
            5 Taiwan
            6 Bangladesh
            7 Singapore
            8 Turkmenistan
            9 Nepal
            10 Oman
            11 Hong Kong
            12 Kyrgyzstan
            13 Bhutan
            14 Yemen
            15 Palestine
            16 Pakistan
            17 India
            18 Brunei
            19 United Arab Emirates
            20 Georgia
            21 Uzbekistan
            22 Mongolia
            23 Timor-Leste
            24 North Korea
            25 Philippines
            26 Afghanistan
            27 Macau
            28 Syria
            29 Malaysia
            30 Cambodia
            31 Sri Lanka
            32 Iran
            33 Maldives
            34 Jordan
            35 Myanmar
            36 Thailand
            37 Lebanon
            38 Kazakhstan
            39 Israel
            40 Armenia
            41 Saudi Arabia
            42 Indonesia
            43 Japan
            44 Tajikistan
            45 Bahrain
            46 Turkey
            47 Azerbaijan
            48 Vietnam
            49 Qatar
*/
    
