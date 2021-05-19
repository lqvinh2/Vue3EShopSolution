const MAX_USER_WANT_TO_GENETATE = 300;

///////////////////
const fs = require("fs");
const txtgen = require("txtgen");
const random_name = require("node-random-name");
const randomMobile = require("random-mobile");
const randomEmail = require("random-email");
const { AvatarGenerator } = require("random-avatar-generator");
const generator = new AvatarGenerator();
const randomId = require("random-id");

// length of the id (default is 30)
const lenRanDomId = 15;
// pattern to determin how the id will be generated
// default is aA0 it has a chance for lowercased capitals and numbers
const patternID = "aA0";

///////////////////////////
const lookup = require("country-code-lookup");

// search by FIPS
//console.log(lookup.byFips('VN'))

const reverse = require("reverse-geocode");
//console.log(reverse.lookup(37.8072792, -122.4780652, 'us'))

const GetListAddress = async () => {
  let data1 = await fs.promises.readFile("address.json");
  const listAdd = JSON.parse(data1.toString());

  console.log(listAdd[0]);
 

  let perList = [];
  for (let index = 0; index < MAX_USER_WANT_TO_GENETATE; index++) {

    let add1 = listAdd[Math.round(Math.random() * listAdd.length)];
    
    const per1 = {
      id: randomId(lenRanDomId, patternID),
      name: random_name(),
      display: txtgen.paragraph(),
      email: randomEmail(),
      mobile: randomMobile(),
      address: add1,
      avatar: generator.generateRandomAvatar(),
      note: "NOTE:avatar using in img tag in html",
    };
    perList.push(per1);
  }

  const jsonData = JSON.stringify(perList);
  //const resWrite = await fs.promises.writeFile("data.json", jsonData);

  fs.writeFile("data.json", jsonData, "utf8", function (err) {
    if (err) throw err;
    else console.log("Ghi file thanh cong!");
  });
};

GetListAddress();
