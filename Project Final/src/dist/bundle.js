(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const cars_data = require("../Data/Data.json");

const getAll = ({ Car_model, City, Car_vin, Color }={}) =>
  new Promise((resolve) => {
    let result = Array.from(cars_data);
    if (Car_model) {
      result = result.filter((item) => item.Car_model === Car_model);
    }

    if (City) {
      result = result.filter((item) => item.City === City);
    }

    if (Color) {
      result = result.filter((item) => item.Color === Color);
    }

    if (Car_vin) {
      result = result.filter((item) => item.Car_vin === Car_vin);
    }
    resolve({ code: 200, data: result });
  });

const getById = (Car_vin) =>
  new Promise((resolve) => {
    const cars = cars_data.find((cars) => cars.Car_vin === Car_vin);

    if (product) {
      resolve({ code: 200, data: cars });
    } else {
      resolve({
        code: 404,
        data: { message: `No information found for ${cars}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};
},{"../Data/Data.json":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"Car_model":"911","Car_make":"Porsche","Model_year":1999,"Car_vin":"5TDBM5G13AS332425","Color":"Puce","City":"Trondheim"},
    {"id":2,"Car_model":"9000","Car_make":"Saab","Model_year":1998,"Car_vin":"KNAGM4A78B5400607","Color":"Fuscia","City":"Tacoma"},
    {"id":3,"Car_model":"LS","Car_make":"Lexus","Model_year":1990,"Car_vin":"KNAFX5A87F5201703","Color":"Goldenrod","City":"Ash Sharyah"},
    {"id":4,"Car_model":"Continental Flying Spur","Car_make":"Bentley","Model_year":2010,"Car_vin":"KMHCM3ACXBU881227","Color":"Goldenrod","City":"Tucheng"},
    {"id":5,"Car_model":"Elantra","Car_make":"Hyundai","Model_year":2012,"Car_vin":"WAUFGAFC9FN606273","Color":"Fuscia","City":"Hasuda"},
    {"id":6,"Car_model":"SC","Car_make":"Lexus","Model_year":2004,"Car_vin":"KM8JT3AF6EU933932","Color":"Yellow","City":"Bojonghaur"},
    {"id":7,"Car_model":"R8","Car_make":"Audi","Model_year":2009,"Car_vin":"WAUAC48H45K136332","Color":"Aquamarine","City":"Šardice"},
    {"id":8,"Car_model":"Festiva","Car_make":"Ford","Model_year":1991,"Car_vin":"1G6DG8EG4A0467153","Color":"Pink","City":"Rennes"},
    {"id":9,"Car_model":"Corvette","Car_make":"Chevrolet","Model_year":1984,"Car_vin":"1N4AB7APXEN459359","Color":"Mauv","City":"As Suwaydā’"},
    {"id":10,"Car_model":"FX","Car_make":"Infiniti","Model_year":2011,"Car_vin":"WAUSF98E57A061910","Color":"Goldenrod","City":"El Adelanto"},
    {"id":11,"Car_model":"Town & Country","Car_make":"Chrysler","Model_year":2005,"Car_vin":"1FTEX1EW9AF532136","Color":"Red","City":"‘Afrīn"},
    {"id":12,"Car_model":"3500","Car_make":"Chevrolet","Model_year":1993,"Car_vin":"WDDGF4HB2EA062646","Color":"Blue","City":"Bulu"},
    {"id":13,"Car_model":"Elantra","Car_make":"Hyundai","Model_year":1996,"Car_vin":"JN8AZ2KR8ET749401","Color":"Khaki","City":"Regente Feijó"},
    {"id":14,"Car_model":"Yukon XL 2500","Car_make":"GMC","Model_year":2011,"Car_vin":"SCFEBBDL9EG483018","Color":"Indigo","City":"Buga"},
    {"id":15,"Car_model":"NV1500","Car_make":"Nissan","Model_year":2012,"Car_vin":"SCBCU8ZA5AC519835","Color":"Fuscia","City":"Kass Wollof"},
    {"id":16,"Car_model":"Swift","Car_make":"Suzuki","Model_year":2001,"Car_vin":"5J6TF3H53FL983626","Color":"Orange","City":"Kotakan Selatan"},
    {"id":17,"Car_model":"300E","Car_make":"Mercedes-Benz","Model_year":1992,"Car_vin":"WA1LGAFE1FD847610","Color":"Fuscia","City":"Longshe"},
    {"id":18,"Car_model":"CL-Class","Car_make":"Mercedes-Benz","Model_year":2002,"Car_vin":"5UXZV4C59DL292208","Color":"Teal","City":"Solosolo"},
    {"id":19,"Car_model":"Range Rover Evoque","Car_make":"Land Rover","Model_year":2012,"Car_vin":"WBA3B1C50FP612037","Color":"Goldenrod","City":"San Buenaventura"},
    {"id":20,"Car_model":"Titan","Car_make":"Nissan","Model_year":2012,"Car_vin":"WBAVB73518P240271","Color":"Teal","City":"Vila Fria"},
    {"id":21,"Car_model":"New Beetle","Car_make":"Volkswagen","Model_year":2003,"Car_vin":"2FMHK6DT4AB789864","Color":"Fuscia","City":"Pilcaniyeu"},
    {"id":22,"Car_model":"W201","Car_make":"Mercedes-Benz","Model_year":1991,"Car_vin":"3VW507AT0FM291965","Color":"Pink","City":"Alajuela"},
    {"id":23,"Car_model":"Acadia","Car_make":"GMC","Model_year":2009,"Car_vin":"1G6DS5E31C0046021","Color":"Maroon","City":"Mulyoagung"},
    {"id":24,"Car_model":"Swift","Car_make":"Suzuki","Model_year":1997,"Car_vin":"3TMJU4GN0DM105268","Color":"Violet","City":"Kirovgrad"},
    {"id":25,"Car_model":"Mini","Car_make":"Austin","Model_year":1959,"Car_vin":"WAUWG74F39N089184","Color":"Teal","City":"Modosinal"},
    {"id":26,"Car_model":"Quattroporte","Car_make":"Maserati","Model_year":2007,"Car_vin":"WBA3C1C55FP156940","Color":"Orange","City":"Carvalhais"},
    {"id":27,"Car_model":"F250","Car_make":"Ford","Model_year":2010,"Car_vin":"JN1AZ4EH3FM434904","Color":"Violet","City":"Moyo"},
    {"id":28,"Car_model":"Mountaineer","Car_make":"Mercury","Model_year":2003,"Car_vin":"JTJHY7AX3B4707425","Color":"Turquoise","City":"Inicbulan"},
    {"id":29,"Car_model":"tC","Car_make":"Scion","Model_year":2006,"Car_vin":"WAUVT58E85A086912","Color":"Yellow","City":"Witkowo"},
    {"id":30,"Car_model":"Golf","Car_make":"Volkswagen","Model_year":1983,"Car_vin":"1GYS3LKJ4FR767274","Color":"Khaki","City":"Castanheira"},
    {"id":31,"Car_model":"Type-1h","Car_make":"Aptera","Model_year":2010,"Car_vin":"SALSF2D42DA457532","Color":"Violet","City":"Chongxing"},
    {"id":32,"Car_model":"Z4","Car_make":"BMW","Model_year":2004,"Car_vin":"JTDKDTB32C1942877","Color":"Pink","City":"Jati"},
    {"id":33,"Car_model":"G","Car_make":"Infiniti","Model_year":2002,"Car_vin":"1FTMF1CW5AK792669","Color":"Red","City":"Washington"},
    {"id":34,"Car_model":"Leganza","Car_make":"Daewoo","Model_year":1999,"Car_vin":"JM1GJ1T64F1711043","Color":"Fuscia","City":"Meylan"},
    {"id":35,"Car_model":"Concorde","Car_make":"Chrysler","Model_year":1999,"Car_vin":"WBAKF3C59CJ002745","Color":"Aquamarine","City":"São Lourenço da Mata"},
    {"id":36,"Car_model":"Town & Country","Car_make":"Chrysler","Model_year":2000,"Car_vin":"1GTN1TEX1CZ384462","Color":"Maroon","City":"Kotablolong"},
    {"id":37,"Car_model":"del Sol","Car_make":"Honda","Model_year":1997,"Car_vin":"JA32U2FU8FU034013","Color":"Aquamarine","City":"Gonayiv"},
    {"id":38,"Car_model":"5 Series","Car_make":"BMW","Model_year":2005,"Car_vin":"3VW1K7AJ6FM178769","Color":"Teal","City":"Serpukhov"},
    {"id":39,"Car_model":"G-Series 1500","Car_make":"Chevrolet","Model_year":1997,"Car_vin":"WBA3F9C53EF929057","Color":"Green","City":"Stockholm"},
    {"id":40,"Car_model":"LeMans","Car_make":"Pontiac","Model_year":1966,"Car_vin":"WBA3C1C51EK528687","Color":"Orange","City":"Kaduna"},
    {"id":41,"Car_model":"E-Class","Car_make":"Mercedes-Benz","Model_year":2010,"Car_vin":"WDCYC3HF6FX841755","Color":"Purple","City":"Ajman"},
    {"id":42,"Car_model":"XLR-V","Car_make":"Cadillac","Model_year":2006,"Car_vin":"WAUDF78E88A161918","Color":"Teal","City":"Jelisavac"},
    {"id":43,"Car_model":"Fusion","Car_make":"Ford","Model_year":2009,"Car_vin":"1GYS4KEF2DR370013","Color":"Crimson","City":"Chaoyang"},
    {"id":44,"Car_model":"SL-Class","Car_make":"Mercedes-Benz","Model_year":2006,"Car_vin":"WAUHF68P16A275298","Color":"Red","City":"Saddina"},
    {"id":45,"Car_model":"Sebring","Car_make":"Chrysler","Model_year":2007,"Car_vin":"1B3AZ6EZ8AV714422","Color":"Green","City":"Pasirtujuhpuluh"},
    {"id":46,"Car_model":"Thunderbird","Car_make":"Ford","Model_year":1984,"Car_vin":"1G4CW54KX44567136","Color":"Khaki","City":"Yuanshanzi"},
    {"id":47,"Car_model":"Special","Car_make":"Buick","Model_year":1962,"Car_vin":"1GKKRNED1BJ374111","Color":"Red","City":"Jimeta"},
    {"id":48,"Car_model":"Monaco","Car_make":"Dodge","Model_year":1992,"Car_vin":"JM1DE1KY5D0426395","Color":"Puce","City":"Meixi"},
    {"id":49,"Car_model":"New Beetle","Car_make":"Volkswagen","Model_year":2003,"Car_vin":"1G6DV8EP0C0873388","Color":"Green","City":"Novo Hamburgo"},
    {"id":50,"Car_model":"Stanza","Car_make":"Nissan","Model_year":1992,"Car_vin":"3VWKX7AJ5DM641326","Color":"Turquoise","City":"Thành Phố Ninh Bình"},
    {"id":51,"Car_model":"Prelude","Car_make":"Honda","Model_year":1996,"Car_vin":"WBA3N3C54EF483436","Color":"Violet","City":"Xinxu"},
    {"id":52,"Car_model":"Scoupe","Car_make":"Hyundai","Model_year":1993,"Car_vin":"WAUGU54DX1N394170","Color":"Blue","City":"Krajan Bejagung"},
    {"id":53,"Car_model":"Avalanche 1500","Car_make":"Chevrolet","Model_year":2004,"Car_vin":"2G4GS5GX0F9733748","Color":"Violet","City":"Jeziorany"},
    {"id":54,"Car_model":"Mustang","Car_make":"Ford","Model_year":2010,"Car_vin":"5FRYD3H94GB500586","Color":"Turquoise","City":"Bell Ville"},
    {"id":55,"Car_model":"Sierra 3500","Car_make":"GMC","Model_year":2000,"Car_vin":"1FTEW1CM9DF839850","Color":"Blue","City":"Amargosa"},
    {"id":56,"Car_model":"Altima","Car_make":"Nissan","Model_year":2006,"Car_vin":"WDDGF4HBXER684249","Color":"Goldenrod","City":"Bradag"},
    {"id":57,"Car_model":"LS","Car_make":"Lexus","Model_year":2011,"Car_vin":"JN1CV6EK6CM228144","Color":"Orange","City":"Błonie"},
    {"id":58,"Car_model":"Escort","Car_make":"Ford","Model_year":2004,"Car_vin":"WAUDH98E48A576465","Color":"Maroon","City":"Emplak"},
    {"id":59,"Car_model":"Biturbo","Car_make":"Maserati","Model_year":1986,"Car_vin":"JTJBC1BA8C2615428","Color":"Khaki","City":"Kamieniec Podolski"},
    {"id":60,"Car_model":"I","Car_make":"Infiniti","Model_year":2000,"Car_vin":"WAUED54B61N256986","Color":"Blue","City":"Prochnookopskaya"},
    {"id":61,"Car_model":"Paseo","Car_make":"Toyota","Model_year":1996,"Car_vin":"4T3BA3BBXCU221353","Color":"Green","City":"Rutul"},
    {"id":62,"Car_model":"Lynx","Car_make":"Mercury","Model_year":1984,"Car_vin":"1FTSX2A57AE046680","Color":"Green","City":"Liantan"},
    {"id":63,"Car_model":"Escalade EXT","Car_make":"Cadillac","Model_year":2006,"Car_vin":"WAUBNAFB2AN219598","Color":"Goldenrod","City":"Machov"},
    {"id":64,"Car_model":"MKS","Car_make":"Lincoln","Model_year":2010,"Car_vin":"5FRYD3H91GB186606","Color":"Maroon","City":"Vila Chã"},
    {"id":65,"Car_model":"B-Series Plus","Car_make":"Mazda","Model_year":1998,"Car_vin":"WBASP0C54DC415285","Color":"Green","City":"Al Muţayrifī"},
    {"id":66,"Car_model":"F150","Car_make":"Ford","Model_year":2008,"Car_vin":"WAUKH74F66N963793","Color":"Blue","City":"Ciechanów"},
    {"id":67,"Car_model":"Tracer","Car_make":"Mercury","Model_year":1997,"Car_vin":"SCFFDABE8AG438014","Color":"Fuscia","City":"Coromandel"},
    {"id":68,"Car_model":"Liberty","Car_make":"Jeep","Model_year":2010,"Car_vin":"YV126MFCXF2576900","Color":"Green","City":"Chenyangzhai"},
    {"id":69,"Car_model":"Sorento","Car_make":"Kia","Model_year":2009,"Car_vin":"1GD01XEG3FZ224486","Color":"Purple","City":"Tangchijie"},
    {"id":70,"Car_model":"Econoline E250","Car_make":"Ford","Model_year":1999,"Car_vin":"WAUDF78E65A499023","Color":"Yellow","City":"Douarnenez"},
    {"id":71,"Car_model":"Cavalier","Car_make":"Chevrolet","Model_year":2001,"Car_vin":"WAULT64B42N334697","Color":"Indigo","City":"Loyola"},
    {"id":72,"Car_model":"Sonoma","Car_make":"GMC","Model_year":1992,"Car_vin":"SAJWA0F78F8589368","Color":"Blue","City":"Murça"},
    {"id":73,"Car_model":"Tiburon","Car_make":"Hyundai","Model_year":1999,"Car_vin":"1N6AF0KX9FN559424","Color":"Red","City":"Zrenjanin"},
    {"id":74,"Car_model":"Verano","Car_make":"Buick","Model_year":2012,"Car_vin":"1N6AD0CW6EN107702","Color":"Red","City":"Aktogay"},
    {"id":75,"Car_model":"Expo","Car_make":"Mitsubishi","Model_year":1992,"Car_vin":"WVWBN7AN5FE849484","Color":"Teal","City":"Karlsruhe"},
    {"id":76,"Car_model":"E250","Car_make":"Ford","Model_year":2008,"Car_vin":"WDDPK4HA2DF769914","Color":"Blue","City":"Sungaiduri"},
    {"id":77,"Car_model":"Taurus","Car_make":"Ford","Model_year":1997,"Car_vin":"WP0AB2A85CS917751","Color":"Teal","City":"Kawerau"},
    {"id":78,"Car_model":"Sienna","Car_make":"Toyota","Model_year":2009,"Car_vin":"2C3CDXFG2FH876284","Color":"Mauv","City":"Jamalteca"},
    {"id":79,"Car_model":"Escalade EXT","Car_make":"Cadillac","Model_year":2004,"Car_vin":"1GYFK56299R740577","Color":"Violet","City":"Igaraçu do Tietê"},
    {"id":80,"Car_model":"Impala","Car_make":"Chevrolet","Model_year":2010,"Car_vin":"1N6AA0CC8FN055912","Color":"Turquoise","City":"Sydney"},
    {"id":81,"Car_model":"XLR-V","Car_make":"Cadillac","Model_year":2009,"Car_vin":"WAUKF98EX8A058311","Color":"Pink","City":"Benešov nad Černou"},
    {"id":82,"Car_model":"Grand Marquis","Car_make":"Mercury","Model_year":1986,"Car_vin":"WBAYB6C57FD568610","Color":"Indigo","City":"Maun"},
    {"id":83,"Car_model":"Camaro","Car_make":"Chevrolet","Model_year":1993,"Car_vin":"3VWML7AJ0EM872561","Color":"Mauv","City":"Nanyang"},
    {"id":84,"Car_model":"Continental","Car_make":"Lincoln","Model_year":1997,"Car_vin":"WAUVC58E05A746022","Color":"Indigo","City":"Bāft"},
    {"id":85,"Car_model":"Q","Car_make":"Infiniti","Model_year":1996,"Car_vin":"1D7RB1CP8BS881561","Color":"Maroon","City":"Sebadelhe"},
    {"id":86,"Car_model":"Veyron","Car_make":"Bugatti","Model_year":2011,"Car_vin":"KNAFK4A63F5710114","Color":"Purple","City":"Wangyi Zhendian"},
    {"id":87,"Car_model":"A6","Car_make":"Audi","Model_year":2005,"Car_vin":"KNDMA5C13F6784907","Color":"Mauv","City":"Damai"},
    {"id":88,"Car_model":"Grand Marquis","Car_make":"Mercury","Model_year":1996,"Car_vin":"3C63D3CL0CG036481","Color":"Aquamarine","City":"Kotabunan"},
    {"id":89,"Car_model":"A6","Car_make":"Audi","Model_year":2010,"Car_vin":"3D73M4CL4AG882713","Color":"Goldenrod","City":"Castres"},
    {"id":90,"Car_model":"X-Type","Car_make":"Jaguar","Model_year":2005,"Car_vin":"2LMHJ5FK6FB554799","Color":"Orange","City":"São Pedro de Muel"},
    {"id":91,"Car_model":"Discovery","Car_make":"Land Rover","Model_year":1997,"Car_vin":"SCBFC7ZA9DC840632","Color":"Blue","City":"Ingå"},
    {"id":92,"Car_model":"300","Car_make":"Chrysler","Model_year":2011,"Car_vin":"SCFKDCEP6EG742620","Color":"Violet","City":"Haoxue"},
    {"id":93,"Car_model":"Impreza","Car_make":"Subaru","Model_year":2004,"Car_vin":"1HGCP2F3XAA756504","Color":"Fuscia","City":"Huillapima"},
    {"id":94,"Car_model":"Crown Victoria","Car_make":"Ford","Model_year":2006,"Car_vin":"1G6KF57945U781259","Color":"Pink","City":"Baiqiao"},
    {"id":95,"Car_model":"Explorer Sport Trac","Car_make":"Ford","Model_year":2010,"Car_vin":"JN8AF5MR7DT850029","Color":"Indigo","City":"Yanzhou"},
    {"id":96,"Car_model":"Odyssey","Car_make":"Honda","Model_year":2009,"Car_vin":"1G4GA5EC3BF824985","Color":"Aquamarine","City":"Orhei"},
    {"id":97,"Car_model":"Grand Cherokee","Car_make":"Jeep","Model_year":2008,"Car_vin":"WAUEF98E68A145135","Color":"Khaki","City":"Pangkalan"},
    {"id":98,"Car_model":"Explorer","Car_make":"Ford","Model_year":2009,"Car_vin":"WA1LGBFE5DD107657","Color":"Puce","City":"Lawesigalagala Timur"},
    {"id":99,"Car_model":"LS","Car_make":"Lexus","Model_year":2002,"Car_vin":"WAUKF68E65A450941","Color":"Purple","City":"Goya"},
    {"id":100,"Car_model":"W201","Car_make":"Mercedes-Benz","Model_year":1984,"Car_vin":"2HNYD28608H651285","Color":"Green","City":"San José de Río Tinto"},
    {"id":101,"Car_model":"626","Car_make":"Mazda","Model_year":1985,"Car_vin":"3VWML7AJ4BM767212","Color":"Maroon","City":"Bang Sai"},
    {"id":102,"Car_model":"4Runner","Car_make":"Toyota","Model_year":1995,"Car_vin":"SCBLF34F96C400550","Color":"Goldenrod","City":"Puerto López"},
    {"id":103,"Car_model":"F250","Car_make":"Ford","Model_year":2005,"Car_vin":"5TDDCRFH1FS948262","Color":"Teal","City":"Ar Rubū‘"},
    {"id":104,"Car_model":"M3","Car_make":"BMW","Model_year":1995,"Car_vin":"WBA3B9C50FP176238","Color":"Aquamarine","City":"Azacualpa"},
    {"id":105,"Car_model":"Camry","Car_make":"Toyota","Model_year":2000,"Car_vin":"4T1BF1FK3CU337681","Color":"Fuscia","City":"Shu"},
    {"id":106,"Car_model":"Continental Mark VII","Car_make":"Lincoln","Model_year":1989,"Car_vin":"1C4AJWAG9FL400422","Color":"Crimson","City":"Krasnovishersk"},
    {"id":107,"Car_model":"Versa","Car_make":"Nissan","Model_year":2008,"Car_vin":"4T3BA3BB6BU759823","Color":"Aquamarine","City":"Masantol"},
    {"id":108,"Car_model":"IS","Car_make":"Lexus","Model_year":2012,"Car_vin":"WAUHE98P89A812158","Color":"Green","City":"Bytkiv"},
    {"id":109,"Car_model":"325","Car_make":"BMW","Model_year":2005,"Car_vin":"WAUWGBFC7EN629989","Color":"Red","City":"Sitabamba"},
    {"id":110,"Car_model":"Mirage","Car_make":"Mitsubishi","Model_year":2001,"Car_vin":"WP0AA2A97ES144408","Color":"Pink","City":"Chenzhouzhai"},
    {"id":111,"Car_model":"Venture","Car_make":"Chevrolet","Model_year":2000,"Car_vin":"1GYS4RKJ3FR750790","Color":"Indigo","City":"Lawa-an"},
    {"id":112,"Car_model":"300ZX","Car_make":"Nissan","Model_year":1992,"Car_vin":"WBANW53579C023115","Color":"Pink","City":"Corinto"},
    {"id":113,"Car_model":"Tacoma Xtra","Car_make":"Toyota","Model_year":2003,"Car_vin":"2LMDJ8JKXFB752857","Color":"Green","City":"Qiqian"},
    {"id":114,"Car_model":"XJ Series","Car_make":"Jaguar","Model_year":1994,"Car_vin":"3N1AB6AP0BL000795","Color":"Teal","City":"La Luz"},
    {"id":115,"Car_model":"Econoline E250","Car_make":"Ford","Model_year":1994,"Car_vin":"1G6YV34AX55144757","Color":"Orange","City":"Carepa"},
    {"id":116,"Car_model":"RS 4","Car_make":"Audi","Model_year":2007,"Car_vin":"KNAFX5A88E5744377","Color":"Puce","City":"Doña Remedios Trinidad"},
    {"id":117,"Car_model":"Sportage","Car_make":"Kia","Model_year":2001,"Car_vin":"WBAFV3C57FD846645","Color":"Red","City":"Persen"},
    {"id":118,"Car_model":"745","Car_make":"BMW","Model_year":2002,"Car_vin":"WDDEJ7GBXDA748523","Color":"Puce","City":"Vyborg"},
    {"id":119,"Car_model":"Esprit","Car_make":"Lotus","Model_year":1994,"Car_vin":"3D7TT2CT1BG702791","Color":"Maroon","City":"General Elizardo Aquino"},
    {"id":120,"Car_model":"IPL G","Car_make":"Infiniti","Model_year":2012,"Car_vin":"JTJHY7AX5D4776250","Color":"Yellow","City":"Ekerö"},
    {"id":121,"Car_model":"Baja","Car_make":"Subaru","Model_year":2003,"Car_vin":"1FTEX1CM1DK789322","Color":"Crimson","City":"Jinzhuang"},
    {"id":122,"Car_model":"Suburban 2500","Car_make":"Chevrolet","Model_year":2000,"Car_vin":"1D7RB1CP6BS380118","Color":"Fuscia","City":"Candi"},
    {"id":123,"Car_model":"3 Series","Car_make":"BMW","Model_year":1994,"Car_vin":"SCFFDAAM0EG988435","Color":"Violet","City":"Daming"},
    {"id":124,"Car_model":"6000","Car_make":"Pontiac","Model_year":1990,"Car_vin":"1FMJK1FTXFE662453","Color":"Yellow","City":"Pābna"},
    {"id":125,"Car_model":"Sierra 3500","Car_make":"GMC","Model_year":2003,"Car_vin":"5J8TB4H33EL536431","Color":"Mauv","City":"Lewisporte"},
    {"id":126,"Car_model":"Ram 2500","Car_make":"Dodge","Model_year":2002,"Car_vin":"1G4GF5E3XDF404869","Color":"Fuscia","City":"Neuss"},
    {"id":127,"Car_model":"900","Car_make":"Saab","Model_year":1999,"Car_vin":"4USBU53547L833515","Color":"Mauv","City":"Imbituva"},
    {"id":128,"Car_model":"Chariot","Car_make":"Mitsubishi","Model_year":1988,"Car_vin":"3D73M3CL7BG009551","Color":"Violet","City":"Padre Burgos"},
    {"id":129,"Car_model":"Express 1500","Car_make":"Chevrolet","Model_year":2004,"Car_vin":"4JGCB2FB4AA691889","Color":"Orange","City":"Camp Thorel"},
    {"id":130,"Car_model":"Thunderbird","Car_make":"Ford","Model_year":1980,"Car_vin":"WUARL48H18K992037","Color":"Maroon","City":"Edson"},
    {"id":131,"Car_model":"Tribeca","Car_make":"Subaru","Model_year":2008,"Car_vin":"1D4PU7GXXBW235300","Color":"Purple","City":"Tabonok"},
    {"id":132,"Car_model":"Escalade EXT","Car_make":"Cadillac","Model_year":2004,"Car_vin":"3C4PDCGB4FT442366","Color":"Indigo","City":"Araguaína"},
    {"id":133,"Car_model":"A4","Car_make":"Audi","Model_year":1996,"Car_vin":"1FTSW3B59AE336572","Color":"Green","City":"Cruz del Eje"},
    {"id":134,"Car_model":"W201","Car_make":"Mercedes-Benz","Model_year":1991,"Car_vin":"3C6JD6AK1CG822065","Color":"Turquoise","City":"Jibu"},
    {"id":135,"Car_model":"Corolla","Car_make":"Toyota","Model_year":1992,"Car_vin":"WBA6B4C55DD427799","Color":"Turquoise","City":"Tongyu"},
    {"id":136,"Car_model":"7 Series","Car_make":"BMW","Model_year":1999,"Car_vin":"JTEBU5JR7F5750932","Color":"Crimson","City":"Daxi"},
    {"id":137,"Car_model":"F-Series","Car_make":"Ford","Model_year":2005,"Car_vin":"1G4HR54K14U433385","Color":"Goldenrod","City":"Évreux"},
    {"id":138,"Car_model":"Montero Sport","Car_make":"Mitsubishi","Model_year":1999,"Car_vin":"JTDKN3DUXA0132631","Color":"Yellow","City":"Steinkjer"},
    {"id":139,"Car_model":"Savana 3500","Car_make":"GMC","Model_year":2010,"Car_vin":"JHMZE2H30BS940422","Color":"Indigo","City":"Tongzhong"},
    {"id":140,"Car_model":"Grand Am","Car_make":"Pontiac","Model_year":1988,"Car_vin":"WBADX7C53BE405317","Color":"Goldenrod","City":"Miętne"},
    {"id":141,"Car_model":"Sunfire","Car_make":"Pontiac","Model_year":2002,"Car_vin":"2C3CDXHG3EH013313","Color":"Goldenrod","City":"Mayo"},
    {"id":142,"Car_model":"Camry","Car_make":"Toyota","Model_year":2007,"Car_vin":"WAULF78K09A341848","Color":"Turquoise","City":"Vantaa"},
    {"id":143,"Car_model":"XJ Series","Car_make":"Jaguar","Model_year":2000,"Car_vin":"5UXFB33542L472702","Color":"Pink","City":"Anticala"},
    {"id":144,"Car_model":"Mighty Max","Car_make":"Mitsubishi","Model_year":1992,"Car_vin":"WBANA53545C139106","Color":"Khaki","City":"Pavliš"},
    {"id":145,"Car_model":"del Sol","Car_make":"Honda","Model_year":1994,"Car_vin":"5TDDK3DC1CS053308","Color":"Pink","City":"Nantes"},
    {"id":146,"Car_model":"Ram 3500","Car_make":"Dodge","Model_year":2002,"Car_vin":"5N1AT2MK7EC738303","Color":"Mauv","City":"Aurelliana"},
    {"id":147,"Car_model":"Parisienne","Car_make":"Pontiac","Model_year":1984,"Car_vin":"1D7RB1GK2AS729806","Color":"Aquamarine","City":"Liulin"},
    {"id":148,"Car_model":"Daytona","Car_make":"Dodge","Model_year":1993,"Car_vin":"5GADT13S262309110","Color":"Aquamarine","City":"Zhongzi"},
    {"id":149,"Car_model":"E250","Car_make":"Ford","Model_year":2007,"Car_vin":"1GYS4JKJ8FR306144","Color":"Teal","City":"Laban"},
    {"id":150,"Car_model":"G-Series 2500","Car_make":"Chevrolet","Model_year":1997,"Car_vin":"WA1CGBFE4BD484459","Color":"Pink","City":"Beauharnois"},
    {"id":151,"Car_model":"Blazer","Car_make":"Chevrolet","Model_year":1995,"Car_vin":"WAUD2AFDXDN282830","Color":"Yellow","City":"Yuejin"},
    {"id":152,"Car_model":"TL","Car_make":"Acura","Model_year":1999,"Car_vin":"WAUDH78EX6A165251","Color":"Green","City":"Lhasa"},
    {"id":153,"Car_model":"Tacoma","Car_make":"Toyota","Model_year":2009,"Car_vin":"2HNYD18276H960482","Color":"Khaki","City":"Bulakan"},
    {"id":154,"Car_model":"MPV","Car_make":"Mazda","Model_year":2003,"Car_vin":"1G6AM5S37E0727093","Color":"Pink","City":"A-da-Gorda"},
    {"id":155,"Car_model":"Tundra","Car_make":"Toyota","Model_year":2005,"Car_vin":"WAUMGAFL6AA510611","Color":"Puce","City":"Lisala"},
    {"id":156,"Car_model":"Mustang","Car_make":"Ford","Model_year":1966,"Car_vin":"WA1CFBFP3BA329424","Color":"Goldenrod","City":"Kaji"},
    {"id":157,"Car_model":"Accord","Car_make":"Honda","Model_year":1986,"Car_vin":"WBSDE93482B099396","Color":"Violet","City":"Guadalupe Victoria"},
    {"id":158,"Car_model":"Savana 3500","Car_make":"GMC","Model_year":2011,"Car_vin":"19UUA56633A798114","Color":"Aquamarine","City":"Xiaojiangba"},
    {"id":159,"Car_model":"Cougar","Car_make":"Mercury","Model_year":1989,"Car_vin":"5GAKRBKD4DJ334625","Color":"Red","City":"Villa Nueva"},
    {"id":160,"Car_model":"Ram Van 2500","Car_make":"Dodge","Model_year":1995,"Car_vin":"3VWF17AT9FM022302","Color":"Aquamarine","City":"Nieuwegein"},
    {"id":161,"Car_model":"Passat","Car_make":"Volkswagen","Model_year":2006,"Car_vin":"4T1BF3EK9BU992343","Color":"Turquoise","City":"Dumingag"},
    {"id":162,"Car_model":"Escalade ESV","Car_make":"Cadillac","Model_year":2010,"Car_vin":"WBS3C9C59FP724925","Color":"Maroon","City":"Śliwice"},
    {"id":163,"Car_model":"Trans Sport","Car_make":"Pontiac","Model_year":1994,"Car_vin":"1FTMF1EW6AF538054","Color":"Yellow","City":"Teplice"},
    {"id":164,"Car_model":"TT","Car_make":"Audi","Model_year":2001,"Car_vin":"JN1AZ4EH6CM896627","Color":"Mauv","City":"Amieira"},
    {"id":165,"Car_model":"Discovery","Car_make":"Land Rover","Model_year":2006,"Car_vin":"KMHGH4JH0FU850775","Color":"Khaki","City":"Xiamujiao"},
    {"id":166,"Car_model":"Corolla","Car_make":"Toyota","Model_year":2009,"Car_vin":"1G6AB5S32D0165107","Color":"Khaki","City":"Solna"},
    {"id":167,"Car_model":"XK Series","Car_make":"Jaguar","Model_year":2013,"Car_vin":"2G4GN5EX0F9532250","Color":"Green","City":"Kraskino"},
    {"id":168,"Car_model":"Sierra","Car_make":"GMC","Model_year":2007,"Car_vin":"KMHTC6ADXCU229755","Color":"Mauv","City":"Hankasalmi"},
    {"id":169,"Car_model":"A4","Car_make":"Audi","Model_year":2007,"Car_vin":"YV1902AH0C1810986","Color":"Crimson","City":"Sumberpinang Satu"},
    {"id":170,"Car_model":"CL-Class","Car_make":"Mercedes-Benz","Model_year":2004,"Car_vin":"1N4AA5AP8CC232851","Color":"Pink","City":"Tucdao"},
    {"id":171,"Car_model":"Diamante","Car_make":"Mitsubishi","Model_year":1999,"Car_vin":"WAUDF68E35A181547","Color":"Violet","City":"Donghai"},
    {"id":172,"Car_model":"Tercel","Car_make":"Toyota","Model_year":1994,"Car_vin":"WBABN33423J139598","Color":"Crimson","City":"Al Majd"},
    {"id":173,"Car_model":"XJ","Car_make":"Jaguar","Model_year":2008,"Car_vin":"WBABN53471J282359","Color":"Puce","City":"Qingshan"},
    {"id":174,"Car_model":"GTI","Car_make":"Volkswagen","Model_year":2000,"Car_vin":"KMHTC6AD8EU769205","Color":"Crimson","City":"Nuing"},
    {"id":175,"Car_model":"Insight","Car_make":"Honda","Model_year":2011,"Car_vin":"WAUCFAFH4FN201861","Color":"Purple","City":"Il’inskiy"},
    {"id":176,"Car_model":"3500","Car_make":"Chevrolet","Model_year":2000,"Car_vin":"5NPEB4AC5DH624210","Color":"Teal","City":"Novotroitsk"},
    {"id":177,"Car_model":"330","Car_make":"BMW","Model_year":2006,"Car_vin":"1G6AX5SX4E0730415","Color":"Pink","City":"Baoquanshan"},
    {"id":178,"Car_model":"Legacy","Car_make":"Subaru","Model_year":1992,"Car_vin":"1C4RDHEG4EC156533","Color":"Turquoise","City":"Watuagung"},
    {"id":179,"Car_model":"Xterra","Car_make":"Nissan","Model_year":2001,"Car_vin":"WP1AA2A29BL318841","Color":"Goldenrod","City":"Zhaodong"},
    {"id":180,"Car_model":"Pacifica","Car_make":"Chrysler","Model_year":2004,"Car_vin":"WAUKH74F98N917930","Color":"Turquoise","City":"Umeå"},
    {"id":181,"Car_model":"CTS","Car_make":"Cadillac","Model_year":2011,"Car_vin":"1HGCP2F30AA195228","Color":"Pink","City":"Ranao"},
    {"id":182,"Car_model":"Aerostar","Car_make":"Ford","Model_year":1988,"Car_vin":"3VWPG3AG1AM998968","Color":"Blue","City":"Trajouce"},
    {"id":183,"Car_model":"TrailBlazer","Car_make":"Chevrolet","Model_year":2009,"Car_vin":"1C4RDHAGXDC926545","Color":"Violet","City":"Patzicía"},
    {"id":184,"Car_model":"Golf","Car_make":"Volkswagen","Model_year":1997,"Car_vin":"KNADM5A33E6792254","Color":"Maroon","City":"Kuala Terengganu"},
    {"id":185,"Car_model":"Mustang","Car_make":"Ford","Model_year":1980,"Car_vin":"1G6DV8EP1E0351470","Color":"Pink","City":"Baiyashi"},
    {"id":186,"Car_model":"Element","Car_make":"Honda","Model_year":2009,"Car_vin":"5UXWX7C56EL552323","Color":"Pink","City":"Zouma"},
    {"id":187,"Car_model":"Grand Caravan","Car_make":"Dodge","Model_year":2009,"Car_vin":"1FT7W2A68EE980225","Color":"Turquoise","City":"San Vicente"},
    {"id":188,"Car_model":"Expedition EL","Car_make":"Ford","Model_year":2010,"Car_vin":"WBABS33433J638838","Color":"Indigo","City":"Waru"},
    {"id":189,"Car_model":"Cherokee","Car_make":"Jeep","Model_year":1992,"Car_vin":"5N1AN0NU3AC278310","Color":"Yellow","City":"Baghdad"},
    {"id":190,"Car_model":"SJ","Car_make":"Suzuki","Model_year":1987,"Car_vin":"1FTMF1CWXAF384449","Color":"Yellow","City":"Akonolinga"},
    {"id":191,"Car_model":"Rainier","Car_make":"Buick","Model_year":2007,"Car_vin":"3VWF17AT5FM841162","Color":"Maroon","City":"Duayaw Nkwanta"},
    {"id":192,"Car_model":"Aurora","Car_make":"Oldsmobile","Model_year":2002,"Car_vin":"KMHCM3AC4AU455094","Color":"Green","City":"Chapayeve"},
    {"id":193,"Car_model":"Grand Marquis","Car_make":"Mercury","Model_year":1994,"Car_vin":"2G4WB52K041397070","Color":"Orange","City":"Miejska Górka"},
    {"id":194,"Car_model":"Sienna","Car_make":"Toyota","Model_year":2008,"Car_vin":"WBAEV53492K229431","Color":"Red","City":"Erjia"},
    {"id":195,"Car_model":"Avalanche 1500","Car_make":"Chevrolet","Model_year":2006,"Car_vin":"3VW4A7AT6CM198422","Color":"Red","City":"Ambato"},
    {"id":196,"Car_model":"FJ Cruiser","Car_make":"Toyota","Model_year":2009,"Car_vin":"WAUDF78E05A547308","Color":"Crimson","City":"Jorok Dalam"},
    {"id":197,"Car_model":"Tribute","Car_make":"Mazda","Model_year":2006,"Car_vin":"1C3BCBFG7DN174192","Color":"Pink","City":"San Pedro"},
    {"id":198,"Car_model":"Spectra","Car_make":"Kia","Model_year":2007,"Car_vin":"1C4RDJDG0DC813223","Color":"Maroon","City":"Labuhanlalar"},
    {"id":199,"Car_model":"Eclipse","Car_make":"Mitsubishi","Model_year":2008,"Car_vin":"WBABD53426P773459","Color":"Goldenrod","City":"Budrus"},
    {"id":200,"Car_model":"G-Series 2500","Car_make":"Chevrolet","Model_year":1997,"Car_vin":"WBA3B5G59FN914424","Color":"Crimson","City":"Xinbu"},
    {"id":201,"Car_model":"Golf","Car_make":"Volkswagen","Model_year":1986,"Car_vin":"4T1BF3EKXAU047092","Color":"Mauv","City":"Pingshan"},
    {"id":202,"Car_model":"Trans Sport","Car_make":"Pontiac","Model_year":1997,"Car_vin":"TRURD38J481202524","Color":"Purple","City":"Otjimbingwe"},
    {"id":203,"Car_model":"ES","Car_make":"Lexus","Model_year":1999,"Car_vin":"SCFFDEDN3CG818353","Color":"Teal","City":"Enskede"},
    {"id":204,"Car_model":"Freelander","Car_make":"Land Rover","Model_year":2004,"Car_vin":"TRUB3AFK3D1300460","Color":"Fuscia","City":"Pardelhas"},
    {"id":205,"Car_model":"CTS-V","Car_make":"Cadillac","Model_year":2009,"Car_vin":"1HGCP2E70CA699236","Color":"Maroon","City":"Oefau"},
    {"id":206,"Car_model":"Envoy","Car_make":"GMC","Model_year":2002,"Car_vin":"5UXFE4C57AL688992","Color":"Crimson","City":"Qinhe"},
    {"id":207,"Car_model":"Volt","Car_make":"Chevrolet","Model_year":2011,"Car_vin":"SCFFDCCD5BG346636","Color":"Green","City":"Inhambupe"},
    {"id":208,"Car_model":"Axiom","Car_make":"Isuzu","Model_year":2004,"Car_vin":"5J6TF3H55FL321272","Color":"Pink","City":"Aleksandrovskiy Zavod"},
    {"id":209,"Car_model":"xD","Car_make":"Scion","Model_year":2008,"Car_vin":"1B3CB8HB7BD403904","Color":"Puce","City":"Heishui"},
    {"id":210,"Car_model":"F-Series","Car_make":"Ford","Model_year":1991,"Car_vin":"WAURFAFR9AA805375","Color":"Turquoise","City":"Aţ Ţaybah"},
    {"id":211,"Car_model":"X6","Car_make":"BMW","Model_year":2008,"Car_vin":"1G4GE5G32EF133498","Color":"Goldenrod","City":"Kouvarás"},
    {"id":212,"Car_model":"9-5","Car_make":"Saab","Model_year":2010,"Car_vin":"1FMJU1J53AE035461","Color":"Mauv","City":"Pajagan"},
    {"id":213,"Car_model":"Golf","Car_make":"Volkswagen","Model_year":2000,"Car_vin":"2G4GS5GXXF9268220","Color":"Fuscia","City":"Mrzeżyno"},
    {"id":214,"Car_model":"Odyssey","Car_make":"Honda","Model_year":2005,"Car_vin":"5UXKR2C59F0011376","Color":"Purple","City":"Banjar Tegal Belodan"},
    {"id":215,"Car_model":"Yukon XL 2500","Car_make":"GMC","Model_year":2010,"Car_vin":"3C4PDCEGXCT348891","Color":"Maroon","City":"Fengjia"},
    {"id":216,"Car_model":"Elantra","Car_make":"Hyundai","Model_year":2000,"Car_vin":"WAUAFAFL8EN291087","Color":"Indigo","City":"Brataj"},
    {"id":217,"Car_model":"545","Car_make":"BMW","Model_year":2005,"Car_vin":"WBAFB33591L149677","Color":"Maroon","City":"Jingkou"},
    {"id":218,"Car_model":"Sierra 2500","Car_make":"GMC","Model_year":2001,"Car_vin":"WAUVT68E12A884461","Color":"Turquoise","City":"Longsheng"},
    {"id":219,"Car_model":"Ram Van 2500","Car_make":"Dodge","Model_year":2001,"Car_vin":"1FTEW1E84AK203758","Color":"Red","City":"Aplahoué"},
    {"id":220,"Car_model":"Altima","Car_make":"Nissan","Model_year":2013,"Car_vin":"2B3CK4CV3AH514865","Color":"Blue","City":"Shizong"}]
},{}],3:[function(require,module,exports){
const controller = require("./Controller/api.js")

const loadData = (path) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  });

const renderTable = (data, nameTerm) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }
  let source = data;

  if (nameTerm) {
    source = source.filter(
                          filter  =>  filter.Color === nameTerm
                          || filter.Car_make === nameTerm 
                          || filter.Car_vin === nameTerm
                          || filter.City === nameTerm
                          || filter.Car_model === nameTerm
                          || `${filter.Model_year}` === nameTerm
    );
  }

  const rows = source.reduce(
    (acc, { id , Car_model, Car_make,Model_year, Car_vin, Color, City}) =>
      acc +
      `<tr currency="table-row-${id}"><td>${id}</td><td>${Car_model}</td><td>${Car_make}</td><td>${Model_year}</td><td>${Car_vin}</td><td>${Color}</td><td>${City}</td></tr>`,
    ``
  );``

  tableBody.innerHTML = rows;
};

controller.getAll().then(({data}) => renderTable(data));

let form = document.querySelector("#form");
  form.onsubmit = (event) => {
  event.preventDefault();
  
  const term = event.target.inputfield.value;

  controller.getAll().then(({data}) => renderTable(data, term));
  
};

form.onreset = () => {
  controller.getAll().then(({data}) => renderTable(data));
};
},{"./Controller/api.js":1}]},{},[3]);
