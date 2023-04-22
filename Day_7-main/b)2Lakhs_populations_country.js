//creating variable instance for the XHR object to interact with the server.
let request=new XMLHttpRequest();
    request.open("GET","https://restcountries.com/v3.1/all")       //https link to access the api from the server.
    request.send();
    request.onload=function(){
        var data=JSON.parse(request.response)                      //storing datas inside the data variable.
        data=data.filter((country)=>country.population<200000)     //filtering the data that are in Asia continent by using the filter method.
        data.sort((a,b)=>a.population-b.population);               //sorting the country in assening order based on bubble sort method.
        console.log("Countries have population less than 2Lakhs are shown below:")
        data.forEach((element,i) => {                              //here for each methods is used to iterate over the elements and  print the data in the console.
            console.log(`
            ${i} ${element.name.common}
            Population : ${element.population}`);                  //here using template literals.
        })
    }
// The output for the above JSON file is shown below"
/*
Countries have population less than 2Lakhs are shown below:
 
            0 Heard Island and McDonald Islands
            Population : 0
 
            1 Bouvet Island
            Population : 0
 
            2 South Georgia
            Population : 30
 
            3 Pitcairn Islands
            Population : 56
 
            4 United States Minor Outlying Islands
            Population : 300
 
            5 French Southern and Antarctic Lands
            Population : 400
 
            6 Vatican City
            Population : 451
 
            7 Cocos (Keeling) Islands
            Population : 544
 
            8 Antarctica
            Population : 1000
 
            9 Tokelau
            Population : 1411
 
            10 Niue
            Population : 1470
 
            11 Christmas Island
            Population : 2072
 
            12 Norfolk Island
            Population : 2302
 
            13 Svalbard and Jan Mayen
            Population : 2562
 
            14 Falkland Islands
            Population : 2563
 
            15 British Indian Ocean Territory
            Population : 3000
 
            16 Saint Barthélemy
            Population : 4255
 
            17 Montserrat
            Population : 4922
 
            18 Saint Pierre and Miquelon
            Population : 6069
 
            19 Nauru
            Population : 10834
 
            20 Wallis and Futuna
            Population : 11750
 
            21 Tuvalu
            Population : 11792
 
            22 Anguilla
            Population : 13452
 
            23 Palau
            Population : 18092
 
            24 Cook Islands
            Population : 18100
 
            25 Caribbean Netherlands
            Population : 25987
 
            26 Åland Islands
            Population : 29458
 
            27 British Virgin Islands
            Population : 30237
 
            28 Gibraltar
            Population : 33691
 
            29 San Marino
            Population : 33938
 
            30 Liechtenstein
            Population : 38137
 
            31 Saint Martin
            Population : 38659
 
            32 Turks and Caicos Islands
            Population : 38718
 
            33 Monaco
            Population : 39244
 
            34 Sint Maarten
            Population : 40812
 
            35 Faroe Islands
            Population : 48865
 
            36 Saint Helena, Ascension and Tristan da Cunha
            Population : 53192
 
            37 Saint Kitts and Nevis
            Population : 53192
 
            38 American Samoa
            Population : 55197
 
            39 Greenland
            Population : 56367
 
            40 Northern Mariana Islands
            Population : 57557
 
            41 Marshall Islands
            Population : 59194
 
            42 Guernsey
            Population : 62999
 
            43 Bermuda
            Population : 63903
 
            44 Cayman Islands
            Population : 65720
 
            45 Dominica
            Population : 71991
 
            46 Andorra
            Population : 77265
 
            47 Isle of Man
            Population : 85032
 
            48 Antigua and Barbuda
            Population : 97928
 
            49 Seychelles
            Population : 98462
 
            50 Jersey
            Population : 100800
 
            51 Tonga
            Population : 105697
 
            52 United States Virgin Islands
            Population : 106290
 
            53 Aruba
            Population : 106766
 
            54 Saint Vincent and the Grenadines
            Population : 110947
 
            55 Grenada
            Population : 112519
 
            56 Micronesia
            Population : 115021
 
            57 Kiribati
            Population : 119446
 
            58 Curaçao
            Population : 155014
 
            59 Guam
            Population : 168783
 
            60 Saint Lucia
            Population : 183629
 
            61 Samoa
            Population : 198410
*/
