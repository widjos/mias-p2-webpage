
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';


interface Country {
  id: number;
  World: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  formData: any = {};
  mailBody: any = {
    "from": "korer123455@gmail.com",
    "to": "",
    "subject": "MarketFake - Code Confirmation",
    "html": "" 
  };

  errors: any = [];
  verificationCode: number;
  sendedCode : boolean;
  countries: Country[] = [
    {
      "id": 1,
      "World": "Afghanistan"
    },
    {
      "id": 2,
      "World": "Akrotiri"
    },
    {
      "id": 3,
      "World": "Albania"
    },
    {
      "id": 4,
      "World": "Algeria"
    },
    {
      "id": 5,
      "World": "American Samoa"
    },
    {
      "id": 6,
      "World": "Andorra"
    },
    {
      "id": 7,
      "World": "Angola"
    },
    {
      "id": 8,
      "World": "Anguilla"
    },
    {
      "id": 9,
      "World": "Antarctica"
    },
    {
      "id": 10,
      "World": "Antigua and Barbuda"
    },
    {
      "id": 11,
      "World": "Arctic Ocean"
    },
    {
      "id": 12,
      "World": "Argentina"
    },
    {
      "id": 13,
      "World": "Armenia"
    },
    {
      "id": 14,
      "World": "Aruba"
    },
    {
      "id": 15,
      "World": "Ashmore and Cartier Islands"
    },
    {
      "id": 16,
      "World": "Atlantic Ocean"
    },
    {
      "id": 17,
      "World": "Australia"
    },
    {
      "id": 18,
      "World": "Austria"
    },
    {
      "id": 19,
      "World": "Azerbaijan"
    },
    {
      "id": 20,
      "World": "Bahamas"
    },
    {
      "id": 21,
      "World": "The Bahrain"
    },
    {
      "id": 22,
      "World": "Baker Island"
    },
    {
      "id": 23,
      "World": "Bangladesh"
    },
    {
      "id": 24,
      "World": "Barbados"
    },
    {
      "id": 25,
      "World": "Belarus"
    },
    {
      "id": 26,
      "World": "Belgium"
    },
    {
      "id": 27,
      "World": "Belize"
    },
    {
      "id": 28,
      "World": "Benin"
    },
    {
      "id": 29,
      "World": "Bermuda"
    },
    {
      "id": 30,
      "World": "Bhutan"
    },
    {
      "id": 31,
      "World": "Bolivia"
    },
    {
      "id": 32,
      "World": "Bosnia and Herzegovina"
    },
    {
      "id": 33,
      "World": "Botswana"
    },
    {
      "id": 34,
      "World": "Bouvet Island"
    },
    {
      "id": 35,
      "World": "Brazil"
    },
    {
      "id": 36,
      "World": "British Indian Ocean Territory"
    },
    {
      "id": 37,
      "World": "British Virgin Islands"
    },
    {
      "id": 38,
      "World": "Brunei"
    },
    {
      "id": 39,
      "World": "Bulgaria"
    },
    {
      "id": 40,
      "World": "Burkina Faso"
    },
    {
      "id": 41,
      "World": "Burma"
    },
    {
      "id": 42,
      "World": "Burundi"
    },
    {
      "id": 43,
      "World": "Cabo Verde"
    },
    {
      "id": 44,
      "World": "Cambodia"
    },
    {
      "id": 45,
      "World": "Cameroon"
    },
    {
      "id": 46,
      "World": "Canada"
    },
    {
      "id": 47,
      "World": "Cayman Islands"
    },
    {
      "id": 48,
      "World": "Central African Republic"
    },
    {
      "id": 49,
      "World": "Chad"
    },
    {
      "id": 50,
      "World": "Chile"
    },
    {
      "id": 51,
      "World": "China"
    },
    {
      "id": 52,
      "World": "Christmas Island"
    },
    {
      "id": 53,
      "World": "Clipperton Island"
    },
    {
      "id": 54,
      "World": "Cocos (Keeling) Islands"
    },
    {
      "id": 55,
      "World": "Colombia"
    },
    {
      "id": 56,
      "World": "Comoros"
    },
    {
      "id": 57,
      "World": "Congo"
    },
    {
      "id": 58,
      "World": "Democratic Republic of the"
    },
    {
      "id": 59,
      "World": "Congo"
    },
    {
      "id": 60,
      "World": "Republic of the"
    },
    {
      "id": 61,
      "World": "Cook Islands"
    },
    {
      "id": 62,
      "World": "Coral Sea Islands"
    },
    {
      "id": 63,
      "World": "Costa Rica"
    },
    {
      "id": 64,
      "World": "Cote d???Ivoire"
    },
    {
      "id": 65,
      "World": "Croatia"
    },
    {
      "id": 66,
      "World": "Cuba"
    },
    {
      "id": 67,
      "World": "Curacao"
    },
    {
      "id": 68,
      "World": "Cyprus"
    },
    {
      "id": 69,
      "World": "Czechia"
    },
    {
      "id": 70,
      "World": "Denmark"
    },
    {
      "id": 71,
      "World": "Dhekelia"
    },
    {
      "id": 72,
      "World": "Djibouti"
    },
    {
      "id": 73,
      "World": "Dominica"
    },
    {
      "id": 74,
      "World": "Dominican Republic"
    },
    {
      "id": 75,
      "World": "Ecuador"
    },
    {
      "id": 76,
      "World": "Egypt"
    },
    {
      "id": 77,
      "World": "El Salvador"
    },
    {
      "id": 78,
      "World": "Equatorial Guinea"
    },
    {
      "id": 79,
      "World": "Eritrea"
    },
    {
      "id": 80,
      "World": "Estonia"
    },
    {
      "id": 81,
      "World": "Ethiopia"
    },
    {
      "id": 82,
      "World": "Falkland Islands (Islas Malvinas)"
    },
    {
      "id": 83,
      "World": "Faroe Islands"
    },
    {
      "id": 84,
      "World": "Fiji"
    },
    {
      "id": 85,
      "World": "Finland"
    },
    {
      "id": 86,
      "World": "France"
    },
    {
      "id": 87,
      "World": "French Polynesia"
    },
    {
      "id": 88,
      "World": "French Southern and Antarctic Lands"
    },
    {
      "id": 89,
      "World": "Gabon"
    },
    {
      "id": 90,
      "World": "Gambia"
    },
    {
      "id": 91,
      "World": "The"
    },
    {
      "id": 92,
      "World": "Gaza Strip"
    },
    {
      "id": 93,
      "World": "Georgia"
    },
    {
      "id": 94,
      "World": "Germany"
    },
    {
      "id": 95,
      "World": "Ghana"
    },
    {
      "id": 96,
      "World": "Gibraltar"
    },
    {
      "id": 97,
      "World": "Greece"
    },
    {
      "id": 98,
      "World": "Greenland"
    },
    {
      "id": 99,
      "World": "Grenada"
    },
    {
      "id": 100,
      "World": "Guam"
    },
    {
      "id": 101,
      "World": "Guatemala"
    },
    {
      "id": 102,
      "World": "Guernsey"
    },
    {
      "id": 103,
      "World": "Guinea"
    },
    {
      "id": 104,
      "World": "Guinea-Bissau"
    },
    {
      "id": 105,
      "World": "Guyana"
    },
    {
      "id": 106,
      "World": "Haiti"
    },
    {
      "id": 107,
      "World": "Heard Island and McDonald Islands"
    },
    {
      "id": 108,
      "World": "Holy See (Vatican City)"
    },
    {
      "id": 109,
      "World": "Honduras"
    },
    {
      "id": 110,
      "World": "Hong Kong"
    },
    {
      "id": 111,
      "World": "Howland Island"
    },
    {
      "id": 112,
      "World": "Hungary"
    },
    {
      "id": 113,
      "World": "Iceland"
    },
    {
      "id": 114,
      "World": "India"
    },
    {
      "id": 115,
      "World": "Indian Ocean"
    },
    {
      "id": 116,
      "World": "Indonesia"
    },
    {
      "id": 117,
      "World": "Iran"
    },
    {
      "id": 118,
      "World": "Iraq"
    },
    {
      "id": 119,
      "World": "Ireland"
    },
    {
      "id": 120,
      "World": "Isle of Man"
    },
    {
      "id": 121,
      "World": "Israel"
    },
    {
      "id": 122,
      "World": "Italy"
    },
    {
      "id": 123,
      "World": "Jamaica"
    },
    {
      "id": 124,
      "World": "Jan Mayen"
    },
    {
      "id": 125,
      "World": "Japan"
    },
    {
      "id": 126,
      "World": "Jarvis Island"
    },
    {
      "id": 127,
      "World": "Jersey"
    },
    {
      "id": 128,
      "World": "Johnston Atoll"
    },
    {
      "id": 129,
      "World": "Jordan"
    },
    {
      "id": 130,
      "World": "Kazakhstan"
    },
    {
      "id": 131,
      "World": "Kenya"
    },
    {
      "id": 132,
      "World": "Kingman Reef"
    },
    {
      "id": 133,
      "World": "Kiribati"
    },
    {
      "id": 134,
      "World": "Korea"
    },
    {
      "id": 135,
      "World": "North"
    },
    {
      "id": 136,
      "World": "Korea"
    },
    {
      "id": 137,
      "World": "South"
    },
    {
      "id": 138,
      "World": "Kosovo"
    },
    {
      "id": 139,
      "World": "Kuwait"
    },
    {
      "id": 140,
      "World": "Kyrgyzstan"
    },
    {
      "id": 141,
      "World": "Laos"
    },
    {
      "id": 142,
      "World": "Latvia"
    },
    {
      "id": 143,
      "World": "Lebanon"
    },
    {
      "id": 144,
      "World": "Lesotho"
    },
    {
      "id": 145,
      "World": "Liberia"
    },
    {
      "id": 146,
      "World": "Libya"
    },
    {
      "id": 147,
      "World": "Liechtenstein"
    },
    {
      "id": 148,
      "World": "Lithuania"
    },
    {
      "id": 149,
      "World": "Luxembourg"
    },
    {
      "id": 150,
      "World": "Macau"
    },
    {
      "id": 151,
      "World": "Macedonia"
    },
    {
      "id": 152,
      "World": "Madagascar"
    },
    {
      "id": 153,
      "World": "Malawi"
    },
    {
      "id": 154,
      "World": "Malaysia"
    },
    {
      "id": 155,
      "World": "Maldives"
    },
    {
      "id": 156,
      "World": "Mali"
    },
    {
      "id": 157,
      "World": "Malta"
    },
    {
      "id": 158,
      "World": "Marshall Islands"
    },
    {
      "id": 159,
      "World": "Mauritania"
    },
    {
      "id": 160,
      "World": "Mauritius"
    },
    {
      "id": 161,
      "World": "Mexico"
    },
    {
      "id": 162,
      "World": "Micronesia"
    },
    {
      "id": 163,
      "World": "Federated States of"
    },
    {
      "id": 164,
      "World": "Midway Islands"
    },
    {
      "id": 165,
      "World": "Moldova"
    },
    {
      "id": 166,
      "World": "Monaco"
    },
    {
      "id": 167,
      "World": "Mongolia"
    },
    {
      "id": 168,
      "World": "Montenegro"
    },
    {
      "id": 169,
      "World": "Montserrat"
    },
    {
      "id": 170,
      "World": "Morocco"
    },
    {
      "id": 171,
      "World": "Mozambique"
    },
    {
      "id": 172,
      "World": "Namibia"
    },
    {
      "id": 173,
      "World": "Nauru"
    },
    {
      "id": 174,
      "World": "Navassa Island"
    },
    {
      "id": 175,
      "World": "Nepal"
    },
    {
      "id": 176,
      "World": "Netherlands"
    },
    {
      "id": 177,
      "World": "New Caledonia"
    },
    {
      "id": 178,
      "World": "New Zealand"
    },
    {
      "id": 179,
      "World": "Nicaragua"
    },
    {
      "id": 180,
      "World": "Niger"
    },
    {
      "id": 181,
      "World": "Nigeria"
    },
    {
      "id": 182,
      "World": "Niue"
    },
    {
      "id": 183,
      "World": "Norfolk Island"
    },
    {
      "id": 184,
      "World": "Northern Mariana Islands"
    },
    {
      "id": 185,
      "World": "Norway"
    },
    {
      "id": 186,
      "World": "Oman"
    },
    {
      "id": 187,
      "World": "Pacific Ocean"
    },
    {
      "id": 188,
      "World": "Pakistan"
    },
    {
      "id": 189,
      "World": "Palau"
    },
    {
      "id": 190,
      "World": "Palmyra Atoll"
    },
    {
      "id": 191,
      "World": "Panama"
    },
    {
      "id": 192,
      "World": "Papua New Guinea"
    },
    {
      "id": 193,
      "World": "Paracel Islands"
    },
    {
      "id": 194,
      "World": "Paraguay"
    },
    {
      "id": 195,
      "World": "Peru"
    },
    {
      "id": 196,
      "World": "Philippines"
    },
    {
      "id": 197,
      "World": "Pitcairn Islands"
    },
    {
      "id": 198,
      "World": "Poland"
    },
    {
      "id": 199,
      "World": "Portugal"
    },
    {
      "id": 200,
      "World": "Puerto Rico"
    },
    {
      "id": 201,
      "World": "Qatar"
    },
    {
      "id": 202,
      "World": "Romania"
    },
    {
      "id": 203,
      "World": "Russia"
    },
    {
      "id": 204,
      "World": "Rwanda"
    },
    {
      "id": 205,
      "World": "Saint Barthelemy"
    },
    {
      "id": 206,
      "World": "Saint Helena"
    },
    {
      "id": 207,
      "World": "Ascension"
    },
    {
      "id": 208,
      "World": "and Tristan da Cunha"
    },
    {
      "id": 209,
      "World": "Saint Kitts and Nevis"
    },
    {
      "id": 210,
      "World": "Saint Lucia"
    },
    {
      "id": 211,
      "World": "Saint Martin"
    },
    {
      "id": 212,
      "World": "Saint Pierre and Miquelon"
    },
    {
      "id": 213,
      "World": "Saint Vincent and the Grenadines"
    },
    {
      "id": 214,
      "World": "Samoa"
    },
    {
      "id": 215,
      "World": "San Marino"
    },
    {
      "id": 216,
      "World": "Sao Tome and Principe"
    },
    {
      "id": 217,
      "World": "Saudi Arabia"
    },
    {
      "id": 218,
      "World": "Senegal"
    },
    {
      "id": 219,
      "World": "Serbia"
    },
    {
      "id": 220,
      "World": "Seychelles"
    },
    {
      "id": 221,
      "World": "Sierra Leone"
    },
    {
      "id": 222,
      "World": "Singapore"
    },
    {
      "id": 223,
      "World": "Sint Maarten"
    },
    {
      "id": 224,
      "World": "Slovakia"
    },
    {
      "id": 225,
      "World": "Slovenia"
    },
    {
      "id": 226,
      "World": "Solomon Islands"
    },
    {
      "id": 227,
      "World": "Somalia"
    },
    {
      "id": 228,
      "World": "South Africa"
    },
    {
      "id": 229,
      "World": "Southern Ocean"
    },
    {
      "id": 230,
      "World": "South Georgia and South Sandwich Islands"
    },
    {
      "id": 231,
      "World": "South Sudan"
    },
    {
      "id": 232,
      "World": "Spain"
    },
    {
      "id": 233,
      "World": "Spratly Islands"
    },
    {
      "id": 234,
      "World": "Sri Lanka"
    },
    {
      "id": 235,
      "World": "Sudan"
    },
    {
      "id": 236,
      "World": "Suriname"
    },
    {
      "id": 237,
      "World": "Svalbard"
    },
    {
      "id": 238,
      "World": "Swaziland"
    },
    {
      "id": 239,
      "World": "Sweden"
    },
    {
      "id": 240,
      "World": "Switzerland"
    },
    {
      "id": 241,
      "World": "Syria"
    },
    {
      "id": 242,
      "World": "Taiwan"
    },
    {
      "id": 243,
      "World": "Tajikistan"
    },
    {
      "id": 244,
      "World": "Tanzania"
    },
    {
      "id": 245,
      "World": "Thailand"
    },
    {
      "id": 246,
      "World": "Timor-Leste"
    },
    {
      "id": 247,
      "World": "Togo"
    },
    {
      "id": 248,
      "World": "Tokelau"
    },
    {
      "id": 249,
      "World": "Tonga"
    },
    {
      "id": 250,
      "World": "Trinidad and Tobago"
    },
    {
      "id": 251,
      "World": "Tunisia"
    },
    {
      "id": 252,
      "World": "Turkey"
    },
    {
      "id": 253,
      "World": "Turkmenistan"
    },
    {
      "id": 254,
      "World": "Turks and Caicos Islands"
    },
    {
      "id": 255,
      "World": "Tuvalu"
    },
    {
      "id": 256,
      "World": "Uganda"
    },
    {
      "id": 257,
      "World": "Ukraine"
    },
    {
      "id": 258,
      "World": "United Arab Emirates"
    },
    {
      "id": 259,
      "World": "United Kingdom"
    },
    {
      "id": 260,
      "World": "United States"
    },
    {
      "id": 261,
      "World": "United States Pacific Island Wildlife Refuges"
    },
    {
      "id": 262,
      "World": "Uruguay"
    },
    {
      "id": 263,
      "World": "Uzbekistan"
    },
    {
      "id": 264,
      "World": "Vanuatu"
    },
    {
      "id": 265,
      "World": "Venezuela"
    },
    {
      "id": 266,
      "World": "Vietnam"
    },
    {
      "id": 267,
      "World": "Virgin Islands"
    },
    {
      "id": 268,
      "World": "Wake Island"
    },
    {
      "id": 269,
      "World": "Wallis and Futuna"
    },
    {
      "id": 270,
      "World": "West Bank"
    },
    {
      "id": 271,
      "World": "Western Sahara"
    },
    {
      "id": 272,
      "World": "Yemen"
    },
    {
      "id": 273,
      "World": "Zambia"
    },
    {
      "id": 274,
      "World": "Zimbabwe"
    },
    {
      "id": 275,
      "World": "European Union"
    }
  ];


  constructor(private auth: AuthService, private router: Router) {
    
    

  }

  ngOnInit(): void {
    this.verificationCode = this.getRandomValue(1000,9000);
    this.sendedCode = false;
    this.formData.country = "";
  }

  register():  void {
    //Le estoy manadando una foto de perfil por default 
    this.formData.pic = 'assets/rem.jpeg';
    console.log(this.formData);
    this.auth.register(this.formData).subscribe( res => {
      console.log("Nuevo usuario");
      alert("Se a registrado con exito");
      this.router.navigateByUrl('login');
     } 
    );

    
  }

  sendCodeVerification(mail): void {
    this.mailBody.to = mail;
    this.verificationCode = this.getRandomValue(1000,9000);
    this.sendedCode = true; 
    this.mailBody.html = this.getHtmlCode(this.verificationCode);  
    this.auth.sendCodeVerification(this.mailBody).subscribe(
      res => {
        console.log(res);
      }
    );
    console.log(this.verificationCode);

  }

  showUsers(): void {
    this.auth.getUsers().subscribe( res => {
      console.log(res);
    });
  }

  getRandomValue(min , max): number{
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getHtmlCode(code: number): string {
    return `
    <!DOCTYPE html>
    <html>
     
    <head>
        <style type="text/css" >
    
    @import url('https://fonts.googleapis.com/css?family=Asap+Condensed:600i,700');
    
    body {
      background: #fafafa;
      display: flex;
      text-transform: uppercase;
      font-family: 'Asap Condensed', sans-serif;
    }
    
    h1 {
      font-size: 60px;
    }
    h3 {
      font-size: 26px;
    }
    
    .italic {
      font-style: italic;
    }
    
    .card {
      position: relative;
      margin: auto;
      height: 350px;
      width: 600px;
      text-align: center;
      background: linear-gradient(#E96874, #6E3663, #2B0830);
      border-radius: 2px;
      box-shadow: 0 6px 12px -3px rgba(0,0,0,.3);
      color: #fff;
      padding: 30px;
    }
    
    .card header {
      position: absolute;
      top: 31px;
      left: 0;
      width: 100%;
      padding: 0 10%;
      transform: translateY(-50%);
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
    }
    
    .card header > *:first-child {
      text-align: left;
    }
    .card header > *:last-child {
      text-align: right;
    }
    
    .logo {
      font-size: 24px;
      position: relative;
    }
    .logo:before,
    .logo:after {
      content: '';
      position: absolute;
      top: 50%;
      border-top: 3px solid currentColor;
      transform: translateY(-50%);
    }
    
    .logo:before {
      right: 158px;
      width: 40%;
    }
    .logo:after {
      left: 158px;
      width: 55%;
    }
    
    .logo span {
      /*border: solid currentColor;
      border-width: 0 3px 3px 0;
      position: absolute;
      top: -22px;
      width: 69px;
      height: 70px;
      left: 50%;
      transform: translateX(-58%) rotate(58deg) skew(0deg, -30deg);*/
      display: block;
      position: absolute;
      width: 100%;
      top: calc(50% - 1px);
    }
    
    .announcement {
      position: relative;
      border: 3px solid currentColor;
      border-top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    .announcement:before,
    .announcement:after {
      content: '';
      position: absolute;
      top: 0px;
      border-top: 3px solid currentColor;
      height: 0;
      width: 15px;
    }
    .announcement:before {
      left: -3px;
    }
    .announcement:after {
      right: -3px;
    }
    
    
    .inspiration {
      position: absolute;
      bottom: 20px;
      left: 20px;
    }
    
    
    
    
    
    
    
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    html, body {
      height: 100%;
    }
    
    a,
    a:visited,
    a:focus,
    a:active,
    a:link {
      text-decoration: none;
      outline: 0;
    }
    
    a {
      color: currentColor;
      transition: .2s ease-in-out;
    }
    
    h1, h2, h3, h4 {
      margin: .15em 0;
    }
    
    ul {
      padding: 0;
      list-style: none;
    }
    
    img {
      vertical-align: middle;
      height: auto;
      width: 100%;
    }
    
    
            
            </style>
    
    </head>
    
    <body>
        <div class="card">
            <header>
              <time
            datetime="2018-05-15T19:00">NOv 6 - 2020</time>
              <div class="logo">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 234.5 53.7"><style>.st0{fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;}</style><path d="M.6 1.4L116.9 52l117-50.6" class="st0"/></svg>
                </span>Market Fake</div>
              <div class="sponsor">Sponsor</div>
            </header>
            <div class="announcement">
              <h3>Your code verification is</h3>
              <h1>${code}</h1>
              <h3 class="italic">+ thanks for trust in our</h3>
            </div>
          </div>
          
          <div class="inspiration">
            <a rel="noopener" target="_blank" href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/heartland.jpg">Inspiration</a>
          </div>
    </body>
    
    </html>
    `;

  }
}