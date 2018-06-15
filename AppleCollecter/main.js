var DataManager = {
  standardLists : [],
  customLists : []
}

var AppleModel = function AppleModel(XMLHttpRequest){
    this.XMLHttpRequest = XMLHttpRequest;
    this.myList = [];
    this.secretToken = "b3c2e4d351ec4a56bf403743d6056888";
    this.query = "Apple";
    this.index = 0;
}

AppleModel.prototype.getAppleData = function getAppleData(method,url,callback){
    var request = new this.XMLHttpRequest();

    request.onload = function(){
        var rawDataList = JSON.parse(request.responseText);
        callback(rawDataList);
    }
    request.open(method, url, true);
    request.send();
}


var AppleView = function AppleView(element){
    this.element = element;
    this.translate = null;
    this.saveFavorite = null;
}

AppleView.prototype.render = function render(obj){
    //console.log(obj);
    var objKeys = Object.keys(obj);
    var str = "";
    str += "<div class='uiCard' index="+obj["index"]+">";
    objKeys.map(function(element){
        if (element === "urlToImage" && obj[element] !== null) {
            str += "<div class='image'>";
            //console.log(obj["url"]);
            str += "<img src=" + obj[element] + " alt=" + obj["url"] + "/>";
            str += "</div>";
        }
        str += "<div class='content'>";
        if(element === "title" ){
            str += "<h2>" + obj[element] + "</h2>";
        }else if (element === "publishedAt") {
            str += "<div class='meta'>";
            str += "<span class='date'>" +obj[element] + "</span>";
            str += "</div>";
        }
        if(element === "description"){
            str += "<div class='description'>";
            str += obj[element];
            str += "</div>";
        }
        str += "</div>";
    });
    str += "<div class='uiBtn'>";
    str += "<button class='btnElement' val='save'>";
    str += "저장";
    str += "</button>";
    str += "<button class='btnElement' val='translate'>";
    str += "번역";
    str += "</button>";
    str += "</div>";

    str += "</div>";

    this.element.innerHTML += str;
}

var AppleController = function AppleController(appleModel, appleView){
    this.appleModel = appleModel;
    this.appleView = appleView;
}

AppleController.prototype.initialize = function initialize(){
    this.appleView.translate = this.translate.bind(this);
    this.appleView.saveFavorite = this.saveFavorite.bind(this);
}

AppleController.prototype.saveFavorite = function saveFavorite(param){
    //saveFavorite
    var index = param.toElement.parentElement.parentElement.getAttribute("index");
    if(DataManager.customLists.includes(DataManager.standardLists.articles[index]) == false){
      console.log("해당 데이터를 추가합니다...");
      DataManager.customLists.push(DataManager.standardLists.articles[index]);
    }else{
      console.log("이미 추가 되있음..");
    }

}

AppleController.prototype.translate = function translate(param){
    //Translate words
    var element = param.toElement.parentElement.parentElement;
    let title = element.getElementsByTagName("h2")[0].textContent;
    let description = element.getElementsByClassName("description")[0].textContent;

    let langTranslate = "https://bcdefence.herokuapp.com/translate/convert?";// //&from=en&to=ru&text=hello%3Cb%3E";
    let langDetect = "https://bcdefence.herokuapp.com/translate/check?text=";

    HttpRequest('GET',langDetect+title,function(data){
        var lang = JSON.parse(data);
        //title 번역
        HttpRequest('GET',langTranslate+"lang="+ lang.result +"&data="+title,function(data){
          var trans = JSON.parse(data);

          if(trans.result.search("ArgumentOutOfRangeException") == -1){
              element.querySelector("h2").textContent = trans.result;
              //description 번역
              HttpRequest('GET',langTranslate+"lang="+lang.result + "&data="+description,function(data){
                var trans = JSON.parse(data);
                element.querySelector(".description").textContent = trans.result;
              });

          }else{
            window.alert("해당 언어는 번역할 수 없습니다..");
          }
        });
    })
    param.toElement.removeEventListener('click',translate); //한번만 클릭할 수 있게 제작
}

AppleController.prototype.displayView = function displayView(obj){

    var params = [];
    var articleIndex = 0;

    obj["articles"].map(function(element){
        param = {};
        try{
            //param["author"] = element["author"];
            param["index"] = articleIndex;
            param["title"] = element["title"];
            param["description"] = element["description"];
            param["url"] = element["url"];
            param["urlToImage"] = element["urlToImage"];
            param["publishedAt"] = element["publishedAt"];
        }catch(Exception){
          console.log(Exception);
        }
        if(element["urlToImage"] == null){
            param["urlToImage"] = "https://newsclick.in/themes/newsclick/assets/images/newsclick_logo.png";
        }
        articleIndex++;
        params.push(param);
    });

    for(var i=0;i<params.length;i++){
        this.appleView.render(params[i]);
        console.log("Draw Call..."+i);
    }

    var allElements = this.appleView.element.querySelectorAll("button[val=translate]");
    for(var  i = 0;i<allElements.length;i++){
        allElements[i].parentElement.querySelector("button[val=save]").addEventListener('click',this.saveFavorite);
        allElements[i].parentElement.parentElement.querySelector(".image").children[0].addEventListener('click',openUrl);
        allElements[i].addEventListener('click',this.translate); //give all elements eventListener

    }

    console.log("start initialize...");
    this.initialize();
}

function HttpRequest(method, url ,callback){
    var request = new XMLHttpRequest();
    request.onload = function(){
        callback(request.responseText);
    }
    request.open(method, url, true);
    request.send();
}
//act like a taget _blank
function openUrl(params){
  window.alert("해당 기사 페이지로 이동합니다!");
  window.open(params.toElement.getAttribute('alt'));
}

function BrowserCheck(){
  var agent = navigator.userAgent.toLowerCase();
  if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
     // ie일 경우
     window.alert("본 SPA는 크롬 브라우저에 최적화 되어있습니다.");
   }
}

function openNavigation(){
  document.getElementById("nav").style.width = "250px";
}

function closeNavigation(){
  document.getElementById("nav").style.width = "0px";
}


BrowserCheck();

window.onload = function(){
    var appleView = new AppleView(document.getElementById("content"));
    var appleModel = new AppleModel(XMLHttpRequest);
    var appleController = null;

    appleModel.getAppleData(
      "GET",
      "https://newsapi.org/v2/everything?q='"+ appleModel.query +"'&sortBy=publishedAt&apiKey="+appleModel.secretToken,
      function(list) {
        appleModel.myList = list;
        DataManager.standardLists = appleModel.myList;
        appleController = new AppleController(appleModel, appleView);
        appleController.displayView(appleModel.myList);
        //appleController.initialize();
      }
    );
}
