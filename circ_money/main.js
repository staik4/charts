const arr = [
  {"date":"2018-08-01","type":"package","stat":[{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"10792.02"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"2477.58"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"7.87"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"6.29"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"4.45"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"2.90"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"0.99"},{"package_id":12,"name":"Youtube Shares [INSTANT] [Reddit referrer]","s":"0.74"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"0.22"},{"package_id":10,"name":"Youtube Shares [INSTANT] [ODNOKLASSNIKI referrer]","s":"0.07"}]},
  {"date":"2018-08-02","type":"package","stat":[{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"6721.55"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"574.26"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"8.33"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"7.91"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"3.42"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"2.46"},{"package_id":12,"name":"Youtube Shares [INSTANT] [Reddit referrer]","s":"1.59"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"1.55"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"0.30"}]},
  {"date":"2018-08-03","type":"package","stat":[{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"4140.32"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"380.85"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"32.70"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"7.60"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"3.72"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"2.91"},{"package_id":12,"name":"Youtube Shares [INSTANT] [Reddit referrer]","s":"1.72"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"1.20"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"0.48"},{"package_id":10,"name":"Youtube Shares [INSTANT] [ODNOKLASSNIKI referrer]","s":"0.08"}]},
  {"date":"2018-08-04","type":"package","stat":[{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"2763.01"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"276.12"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"14.71"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"10.26"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"5.14"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"2.79"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"2.35"},{"package_id":12,"name":"Youtube Shares [INSTANT] [Reddit referrer]","s":"1.55"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"0.34"},{"package_id":10,"name":"Youtube Shares [INSTANT] [ODNOKLASSNIKI referrer]","s":"0.22"}]},
  {"date":"2018-08-05","type":"package","stat":[{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"1810.13"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"100.32"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"9.08"},{"package_id":444,"name":"YouTube Views GEO: RU [No Refund] [10-50k \/ day] [1 hour+ Retention]","s":"7.20"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"5.99"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"3.80"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"2.71"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"1.10"},{"package_id":445,"name":"YouTube Views GEO: RU [AUTO REFILL 14d] [10-50k \/ day] [1 hour+ Retention]","s":"0.75"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"0.10"},{"package_id":10,"name":"Youtube Shares [INSTANT] [ODNOKLASSNIKI referrer]","s":"0.04"}]},
  {"date":"2018-08-06","type":"package","stat":[{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"934.57"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"49.11"},{"package_id":445,"name":"YouTube Views GEO: RU [AUTO REFILL 14d] [10-50k \/ day] [1 hour+ Retention]","s":"27.00"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"11.78"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"10.06"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"7.75"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"2.81"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"0.41"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"0.40"},{"package_id":91,"name":"Youtube - Comment Likes [ UPVOTES ] INSTANT","s":"0.07"}]},
  {"date":"2018-08-07","type":"package","stat":[{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"440.77"},{"package_id":446,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR] 2","s":"50.03"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"29.59"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"27.53"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"14.79"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"9.43"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"7.47"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"3.51"},{"package_id":445,"name":"YouTube Views GEO: RU [AUTO REFILL 14d] [10-50k \/ day] [1 hour+ Retention]","s":"3.00"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"0.94"},{"package_id":10,"name":"Youtube Shares [INSTANT] [ODNOKLASSNIKI referrer]","s":"0.87"},{"package_id":91,"name":"Youtube - Comment Likes [ UPVOTES ] INSTANT","s":"0.35"}]},
  {"date":"2018-08-08","type":"package","stat":[{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"485.70"},{"package_id":445,"name":"YouTube Views GEO: RU [AUTO REFILL 14d] [10-50k \/ day] [1 hour+ Retention]","s":"382.20"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"74.85"},{"package_id":446,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR] 2","s":"22.40"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"18.76"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"11.27"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"5.91"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"4.69"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"4.30"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"2.09"},{"package_id":10,"name":"Youtube Shares [INSTANT] [ODNOKLASSNIKI referrer]","s":"1.15"},{"package_id":246,"name":"Instagram Views - [ S9 ] [ Max- 3m ] INSTANT","s":"1.10"}]},
  {"date":"2018-08-09","type":"package","stat":[{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"123.32"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"43.14"},{"package_id":445,"name":"YouTube Views GEO: RU [AUTO REFILL 14d] [10-50k \/ day] [1 hour+ Retention]","s":"6.75"},{"package_id":446,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR] 2","s":"5.11"},{"package_id":444,"name":"YouTube Views GEO: RU [No Refund] [10-50k \/ day] [1 hour+ Retention]","s":"5.00"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"3.48"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"2.66"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"2.52"},{"package_id":447,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [85% Retention] 2","s":"2.23"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"1.28"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"0.54"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"0.42"},{"package_id":10,"name":"Youtube Shares [INSTANT] [ODNOKLASSNIKI referrer]","s":"0.28"}]},
  {"date":"2018-08-10","type":"package","stat":[{"package_id":444,"name":"YouTube Views GEO: RU [No Refund] [10-50k \/ day] [1 hour+ Retention]","s":"182.00"},{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"119.36"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"29.52"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"26.13"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"24.16"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"18.68"},{"package_id":446,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR] 2","s":"11.03"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"10.16"},{"package_id":445,"name":"YouTube Views GEO: RU [AUTO REFILL 14d] [10-50k \/ day] [1 hour+ Retention]","s":"9.00"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"7.63"},{"package_id":447,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [85% Retention] 2","s":"3.93"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"1.03"},{"package_id":10,"name":"Youtube Shares [INSTANT] [ODNOKLASSNIKI referrer]","s":"0.28"}]},
  {"date":"2018-08-11","type":"package","stat":[{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"168.88"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"85.68"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"7.88"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"3.90"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"3.18"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"3.05"},{"package_id":445,"name":"YouTube Views GEO: RU [AUTO REFILL 14d] [10-50k \/ day] [1 hour+ Retention]","s":"3.00"},{"package_id":446,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR] 2","s":"2.48"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"2.30"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"0.88"},{"package_id":447,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [85% Retention] 2","s":"0.70"},{"package_id":10,"name":"Youtube Shares [INSTANT] [ODNOKLASSNIKI referrer]","s":"0.33"}]},
  {"date":"2018-08-12","type":"package","stat":[{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"35.31"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"18.93"},{"package_id":446,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR] 2","s":"9.66"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"9.18"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"8.07"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"6.01"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"2.03"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"0.64"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"0.31"},{"package_id":447,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [85% Retention] 2","s":"0.20"},{"package_id":10,"name":"Youtube Shares [INSTANT] [ODNOKLASSNIKI referrer]","s":"0.06"}]},
  {"date":"2018-08-13","type":"package","stat":[{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"176.28"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"40.74"},{"package_id":446,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR] 2","s":"18.31"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"14.28"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"3.98"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"3.48"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"1.63"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"1.02"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"0.92"},{"package_id":447,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [85% Retention] 2","s":"0.85"},{"package_id":10,"name":"Youtube Shares [INSTANT] [ODNOKLASSNIKI referrer]","s":"0.26"}]},
  {"date":"2018-08-14","type":"package","stat":[{"package_id":446,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR] 2","s":"129.40"},{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"51.96"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"44.70"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"29.38"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"10.27"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"9.37"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"2.89"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"2.70"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"1.43"},{"package_id":447,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [85% Retention] 2","s":"0.95"},{"package_id":10,"name":"Youtube Shares [INSTANT] [ODNOKLASSNIKI referrer]","s":"0.53"}]},
  {"date":"2018-08-15","type":"package","stat":[{"package_id":446,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR] 2","s":"203.41"},{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"103.08"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"34.05"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"10.15"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"4.94"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"4.37"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"4.09"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"3.25"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"1.48"},{"package_id":447,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [85% Retention] 2","s":"0.10"},{"package_id":10,"name":"Youtube Shares [INSTANT] [ODNOKLASSNIKI referrer]","s":"0.08"}]},
  {"date":"2018-08-16","type":"package","stat":[{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"79.88"},{"package_id":447,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [85% Retention] 2","s":"36.40"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"19.10"},{"package_id":446,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR] 2","s":"11.91"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"10.23"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"8.91"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"4.90"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"4.06"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"1.14"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"0.98"}]},
  {"date":"2018-08-17","type":"package","stat":[{"package_id":447,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [85% Retention] 2","s":"46.52"},{"package_id":450,"name":"[PRIVATE] YouTube Views [INSTANT 0-1h] [Speed 20-100K] ","s":"20.53"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"20.21"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"6.90"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"6.44"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"4.46"},{"package_id":17,"name":"YouTube Views  INSTANT [AUTO REFILL 14 days] [5-20k \/ day] [80% Retention]","s":"3.00"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"2.28"},{"package_id":448,"name":"\ud83d\udd25YouTube Views [INSTANT 0-1h] [Speed 20-100K] [Facebook \/ Twitter Referer] [No refill]","s":"1.21"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"1.09"},{"package_id":1,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR]","s":"0.80"},{"package_id":10,"name":"Youtube Shares [INSTANT] [ODNOKLASSNIKI referrer]","s":"0.24"}]},
  {"date":"2018-08-18","type":"package","stat":[{"package_id":443,"name":"\ud83d\udd25\ud83d\udd25\ud83d\udd25 YouTube Views INSTANT [No Refund] [200-500k \/ day] [1 hour+ Retention]","s":"300.00"},{"package_id":450,"name":"[PRIVATE] YouTube Views [INSTANT 0-1h] [Speed 20-100K] ","s":"268.44"},{"package_id":446,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR] 2","s":"17.68"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"17.53"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"10.73"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"7.06"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"3.48"},{"package_id":448,"name":"\ud83d\udd25YouTube Views [INSTANT 0-1h] [Speed 20-100K] [Facebook \/ Twitter Referer] [No refill]","s":"2.00"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"1.88"},{"package_id":451,"name":"\ud83d\udc4dYoutube Likes [SUPER FAST] [Speed 3-15k]","s":"1.70"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"1.30"}]},
  {"date":"2018-08-19","type":"package","stat":[{"package_id":450,"name":"[PRIVATE] YouTube Views [INSTANT 0-1h] [Speed 20-100K] ","s":"676.42"},{"package_id":446,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR] 2","s":"618.79"},{"package_id":443,"name":"\ud83d\udd25\ud83d\udd25\ud83d\udd25 YouTube Views INSTANT [No Refund] [200-500k \/ day] [1 hour+ Retention]","s":"170.00"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"19.63"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"10.66"},{"package_id":451,"name":"\ud83d\udc4dYoutube Likes [SUPER FAST] [Speed 3-15k]","s":"6.80"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"5.22"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"3.79"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"0.71"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"0.11"}]},
  {"date":"2018-08-20","type":"package","stat":[{"package_id":450,"name":"[PRIVATE] YouTube Views [INSTANT 0-1h] [Speed 20-100K] ","s":"605.70"},{"package_id":9,"name":"Youtube Shares [INSTANT] [FB referrer]","s":"29.22"},{"package_id":446,"name":"YouTube Views INSTANT [5-20k \/ day] [No Refill] [HR] 2","s":"11.76"},{"package_id":15,"name":"Youtube Shares [INSTANT] [Google+ referrer]","s":"7.42"},{"package_id":11,"name":"Youtube Shares [INSTANT] [Twitter referrer]","s":"5.17"},{"package_id":8,"name":"Youtube Shares [INSTANT] [VK referrer]","s":"1.90"},{"package_id":13,"name":"Youtube Shares [INSTANT] [Whatsapp referrer]","s":"0.28"},{"package_id":14,"name":"Youtube Shares [INSTANT] [Tumblr referrer]","s":"0.16"}]}

];

let laberArr = [];
function createLabelArr() {
  for (let j=0; j < arr.length; j++) {
    let date = arr[j]['date'];
    laberArr.push(date);
  }
  // return laberArr;
}
createLabelArr();

let amount_money = [];

let summ = 0;

let numPack = [];
let numNamePack = [];
function uniquePack(varr) {
  let res = {};
  for (let i=0; i < arr.length; i++) {
    for (key in arr[i]['stat']) {
      // console.log(key);
      // console.log(arr[i]['stat'][key]['package_id']);
      if (numPack.indexOf(arr[i]['stat'][key]['package_id']) == -1) {
        numPack.push(arr[i]['stat'][key]['package_id']);
      }
      if (numNamePack.indexOf(arr[i]['stat'][key]['name']) == -1) {
        numNamePack.push(arr[i]['stat'][key]['name']);
      }
      summ += parseFloat(arr[i]['stat'][key]['s']);
    }
    amount_money.push(parseInt(summ));
    summ = 0;
  }
  // console.log(numPack);
  // console.log(numNamePack);

  res = {
    'num_pack_id':numPack,
    'num_name_pack':numNamePack
  }
  return res[varr];
};
uniquePack();




var ctx = document.getElementById("barwChart").getContext('2d');

// Global Options:
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 16;

// var datas = {
//   labels: "laberArr",
//   datasets:datasets
// }

console.log(laberArr);
console.log(amount_money);

var options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
};

let datas = {
  labels:laberArr,
  datasets: [
    {
      label: "Company turnover",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: amount_money,
    }
  ]
}

var myBarChart = new Chart(ctx, {
  type: 'line',
  data: datas,

});
