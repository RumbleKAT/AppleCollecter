var AppleModel = function AppleModel(XMLHttpRequest){
    this.XMLHttpRequest = XMLHttpRequest;
    this.rawDataList = [];
    this.myList = [];
    this.secretToken = "b3c2e4d351ec4a56bf403743d6056888";
    this.query = "ios";
    this.index = 0;
}

AppleModel.prototype.getAppleData = function getAppleData(method,url,callback){
    console.log(url);
    var request = new this.XMLHttpRequest();

    request.onload = function(){
        this.rawDataList = JSON.parse(request.responseText);
        callback(this.rawDataList);
    }
    request.open(method, url, true);
    request.send();
}
//lang Detect , lang Translate
AppleModel.prototype.getTranslateData = function getTranslateData(url , query, callback){
    var request = new this.XMLHttpRequest();

    request.onload = function(){
        var rawData = request.responseText;
        callback(rawData);
    }
    request.open(url, query, callback);
    request.send();
}

AppleModel.prototype.saveListData = function saveListData(){
    localStorage.setItem("myFavoriteList" , this.myList);
}

AppleModel.prototype.loadListData = function loadListData(){
    return localStorage.getItem("myList");
}

var AppleView = function AppleView(element){
    this.element = element;
    this.translate = null;
}

AppleView.prototype.render = function render(obj){
    //console.log(obj);
    var objKeys = Object.keys(obj);
    var str = "";
    str += "<div class='uiCard' index="+obj["index"]+">";
    objKeys.map(function(element){
        if (element === "urlToImage" && obj[element] !== null) {
            str += "<div class='image'>";
            str += "<img src=" + obj[element] + " alt=" + obj[element] + "/>";
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
        }else if(element === "url"){
            //str += "<a href=" + obj[element] + " target=_blank>Go to the Link! </a>";
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
    console.log(this.appleModel);

}

AppleController.prototype.initialize = function initialize(){
    this.appleView.translate = this.translate.bind(this);//
}

AppleController.prototype.saveFavorite = function saveFavorite(){
    //saveFavorite
}

AppleController.prototype.translate = function translate(param){
    //Translate words
    var element = param.toElement.parentElement.parentElement;
    let title = element.querySelector("h2").textContent;
    let description = element.querySelector(".description").textContent;

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
            param["author"] = element["author"];
            param["index"] = articleIndex;
            param["title"] = element["title"];
            param["description"] = element["description"];
            param["url"] = element["url"];
            param["urlToImage"] = element["urlToImage"];
            param["publishedAt"] = element["publishedAt"];
        }catch(Exception){
            // ....
            if(element["urlToImage"] == null){
                param["urlToImage"] = "https://www.elegantthemes.com/blog/tips-tricks/how-to-fix-the-404-error-for-wordpress-websites";
            }else if(element["author"] === null){
                param["author"] = "unknown..";
            }
        }
        articleIndex++;
        params.push(param);
    });
    console.log(params.length);

    for(var i=0;i<params.length;i++){
        this.appleView.render(params[i]);
    }

    var allElements = this.appleView.element.querySelectorAll("button[val=translate]");
    for(var  i = 0;i<allElements.length;i++){
        allElements[i].addEventListener('click',this.translate); //give all elements eventListener
    }
}

function HttpRequest(method, url ,callback){
    var request = new XMLHttpRequest();
    request.onload = function(){
        callback(request.responseText);
    }
    request.open(method, url, true);
    request.send();
}

window.onload = function(){
    var appleView = new AppleView(document.getElementById("content"));
    var appleModel = new AppleModel(XMLHttpRequest);
    var appleController = null;

    appleModel.getAppleData(
      "GET",
      "https://newsapi.org/v2/everything?q='"+ appleModel.query +"'&sortBy=publishedAt&apiKey="+appleModel.secretToken,
      function(list) {
        appleModel.myList = list;
        appleController = new AppleController(appleModel, appleView);
        appleController.initialize();
        appleController.displayView(appleModel.myList);
      }
    );
}
