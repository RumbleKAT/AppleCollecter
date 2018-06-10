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

AppleModel.prototype.saveListData = function saveListData(){
    localStorage.setItem("myFavoriteList" , this.myList);
}

AppleModel.prototype.loadListData = function loadListData(){
    return localStorage.getItem("myList");
}

var AppleView = function AppleView(element){
    this.element = element;
}
/*
 "source": {
                "id": null,
                "name": "Seonews.ru"
            },
            "author": null,
            "title": "Программист iOS",
            "description": "Проект Seonews.ru предназначен для каждого участника рынка поискового маркетинга и ставит перед собой задачу: способствовать цивилизованному развитию рынка интернет маркетинга. На страницах SEOnews можно найти информацию о российских и зарубежных поисковых си…",
            "url": "https://www.seonews.ru/calendar/programmist-ios_06/",
            "urlToImage": "https://www.seonews.ru/upload/resize_cache/iblock/e93/200_200_1/e937d739e1aa2a3377282ca7650fd38d.jpg",
            "publishedAt": "2018-06-11T17:00:00Z"
*/


AppleView.prototype.render = function render(obj){
    console.log(obj);
    var objKeys = Object.keys(obj);
    var str = "";
    str += "<div class='listElements'>";
    objKeys.map(function(element){
        if(element === "title" ){
            str += "<h1>" + obj[element] + "</h1>";
        }else if(element === "description"){
            str += "<p>" + obj[element] + "</p>";
        }else if(element === "url"){
            str += "<a href=" + obj[element] + ">Go to the Link! </a>";
        }else if(element === "urlToImage" && obj[element] !== null){
            str += "<img src=" + obj[element] + " alt="+obj[element] +"/>";
        }else if(element === "publishedAt"){
            str += "<p>"+ obj[element] + "</p>";
        }
    });
    str += "</div>";

    this.element.innerHTML += str;

    //add Event
}

var AppleController = function AppleController(appleModel, appleView){
    this.appleModel = appleModel;
    this.appleView = appleView;
}

AppleController.prototype.initialize = function initialize(){

}

AppleController.prototype.displayView = function displayView(obj){

    var params = [];

    obj["articles"].map(function(element){
        param = {};
        try{
            param["author"] = element["author"];
            param["title"] = element["title"];
            param["description"] = element["description"];
            param["url"] = element["url"];
            param["urlToImage"] = element["urlToImage"];
            param["publishedAt"] = element["publishedAt"];
        }catch(e){
            // ....
            console.log(e);
            if(element["urlToImage"] == null){
                param["urlToImage"] = "https://www.elegantthemes.com/blog/tips-tricks/how-to-fix-the-404-error-for-wordpress-websites";
            }else if(element["author"] === null){
                param["author"] = "unknown..";
            }
        }
        params.push(param);
    });
    console.log(params.length);

    for(var i=0;i<params.length;i++){
        console.log(i);
        this.appleView.render(params[i]);
    }

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
        appleController.displayView(appleModel.myList);
      }
    );
}

