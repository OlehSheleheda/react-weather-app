import React from "react";
import "./CurrentWeatherCounty.css";

export default function CurrentWeatherCountry(props) {
  let countries = {
    ZW: "Zimbabwe",
    ZM: "Zambia",
    YE: "Yemen",
    EH: "Western Sahara",
    WF: "Wallis and Futuna",
    VI: "U.S. Virgin Islands",
    VN: "Vietnam",
    VE: "Venezuela",
    VA: "Vatican",
    VU: "Vanuatu",
    UZ: "Uzbekistan",
    US: "United States",
    UY: "Uruguay",
    UA: "Ukraine",
    GB: "United Kingdom",
    UG: "Uganda",
    AE: "United Arab Emirates",
    TV: "Tuvalu",
    TC: "Turks and Caicos Islands",
    TM: "Turkmenistan",
    TR: "Turkey",
    TN: "Tunisia",
    TT: "Trinidad and Tobago",
    TO: "Tonga",
    TK: "Tokelau",
    TG: "Togo",
    TH: "Thailand",
    TZ: "Tanzania",
    TJ: "Tajikistan",
    TW: "Taiwan",
    SY: "Syria",
    CH: "Switzerland",
    SE: "Sweden",
    SZ: "Swaziland",
    SJ: "Svalbard and Jan Mayen",
    SR: "Suriname",
    SD: "Sudan",
    VC: "Saint Vincent and the Grenadines",
    PM: "Saint Pierre and Miquelon",
    MF: "Saint Martin",
    LC: "Saint Lucia",
    KN: "Saint Kitts and Nevis",
    SH: "Saint Helena",
    LK: "Sri Lanka",
    ES: "Spain",
    SS: "South Sudan",
    KR: "South Korea",
    ZA: "South Africa",
    SO: "Somalia",
    SB: "Solomon Islands",
    SI: "Slovenia",
    SK: "Slovakia",
    SX: "Sint Maarten",
    SG: "Singapore",
    SL: "Sierra Leone",
    SC: "Seychelles",
    RS: "Serbia",
    SN: "Senegal",
    SA: "Saudi Arabia",
    ST: "Sao Tome and Principe",
    SM: "San Marino",
    WS: "Samoa",
    BL: "Saint Barthelemy",
    RW: "Rwanda",
    RU: "Russia",
    RO: "Romania",
    RE: "Reunion",
    QA: "Qatar",
    PR: "Puerto Rico",
    PT: "Portugal",
    PL: "Poland",
    PN: "Pitcairn",
    PH: "Philippines",
    PE: "Peru",
    PY: "Paraguay",
    PG: "Papua New Guinea",
    PA: "Panama",
    PS: "Palestine",
    PW: "Palau",
    PK: "Pakistan",
    OM: "Oman",
    NO: "Norway",
    KP: "North Korea",
    MP: "Northern Mariana Islands",
    NU: "Niue",
    NG: "Nigeria",
    NE: "Niger",
    NI: "Nicaragua",
    NZ: "New Zealand",
    NC: "New Caledonia",
    AN: "Netherlands Antilles",
    NL: "Netherlands",
    NP: "Nepal",
    NR: "Nauru",
    NA: "Namibia",
    MZ: "Mozambique",
    MA: "Morocco",
    MS: "Montserrat",
    ME: "Montenegro",
    MN: "Mongolia",
    MC: "Monaco",
    MD: "Moldova",
    FM: "Micronesia",
    MX: "Mexico",
    YT: "Mayotte",
    MU: "Mauritius",
    MR: "Mauritania",
    MH: "Marshall Islands",
    MT: "Malta",
    ML: "Mali",
    MV: "Maldives",
    MY: "Malaysia",
    MW: "Malawi",
    MG: "Madagascar",
    MK: "Macedonia",
    MO: "Macau",
    LU: "Luxembourg",
    LT: "Lithuania",
    LI: "Liechtenstein",
    LY: "Libya",
    LR: "Liberia",
    LS: "Lesotho",
    LB: "Lebanon",
    LV: "Latvia",
    LA: "Laos",
    KG: "Kyrgyzstan",
    KW: "Kuwait",
    XK: "Kosovo",
    KI: "Kiribati",
    KE: "Kenya",
    KZ: "Kazakhstan",
    JO: "Jordan",
    JE: "Jersey",
    JP: "Japan",
    JM: "Jamaica",
    CI: "Ivory Coast",
    IT: "Italy",
    IL: "Israel",
    IM: "Isle of Man",
    IE: "Ireland",
    IQ: "Iraq",
    IR: "Iran",
    ID: "Indonesia",
    IN: "India",
    IS: "Iceland",
    HU: "Hungary",
    HK: "Hong Kong",
    HN: "Honduras",
    HT: "Haiti",
    GY: "Guyana",
    GW: "Guinea-Bissau",
    GN: "Guinea",
    GG: "Guernsey",
    GT: "Guatemala",
    GU: "Guam",
    GD: "Grenada",
    GL: "Greenland",
    GR: "Greece",
    GI: "Gibraltar",
    GH: "Ghana",
    DE: "Germany",
    GE: "Georgia",
    GM: "Gambia",
    GA: "Gabon",
    PF: "French Polynesia",
    FR: "France",
    FI: "Finland",
    FJ: "Fiji",
    FO: "Faroe Islands",
    FK: "Falkland Islands",
    ET: "Ethiopia",
    EE: "Estonia",
    ER: "Eritrea",
    GQ: "Equatorial Guinea",
    SV: "El Salvador",
    EG: "Egypt",
    EC: "Ecuador",
    TL: "East Timor",
    DO: "Dominican Republic",
    DM: "Dominica",
    DJ: "Djibouti",
    DK: "Denmark",
    CZ: "Czech Republic",
    CY: "Cyprus",
    CW: "Curacao",
    CU: "Cuba",
    HR: "Croatia",
    CR: "Costa Rica",
    CK: "Cook Islands",
    CD: "Democratic Republic of the Congo",
    CG: "Republic of the Congo",
    KM: "Comoros",
    CO: "Colombia",
    CC: "Cocos Islands",
    CX: "Christmas Island",
    CN: "China",
    CL: "Chile",
    TD: "Chad",
    CF: "Central African Republic",
    KY: "Cayman Islands",
    CV: "Cape Verde",
    CA: "Canada",
    CM: "Cameroon",
    KH: "Cambodia",
    BI: "Burundi",
    MM: "Myanmar",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BN: "Brunei",
    VG: "British Virgin Islands",
    IO: "British Indian Ocean Territory",
    BR: "Brazil",
    BW: "Botswana",
    BA: "Bosnia and Herzegovina",
    BO: "Bolivia",
    BT: "Bhutan",
    BM: "Bermuda",
    BJ: "Benin",
    BZ: "Belize",
    BE: "Belgium",
    BY: "Belarus",
    BB: "Barbados",
    BD: "Bangladesh",
    BH: "Bahrain",
    BS: "Bahamas",
    AZ: "Azerbaijan",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AM: "Armenia",
    AR: "Argentina",
    AG: "Antigua and Barbuda",
    AQ: "Antarctica",
    AI: "Anguilla",
    AO: "Angola",
    AD: "Andorra",
    AS: "American Samoa",
    DZ: "Algeria",
    AL: "Albania",
    AF: "Afghanistan",
  };

  return <div className="CurrentWeatherCountry">{countries[props.code]}</div>;
}
