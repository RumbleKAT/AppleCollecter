var AppleModel = function AppleModel(XMLHttpRequest){
    this.XMLHttpRequest = XMLHttpRequest;
    this.totalList = [];
    this.myList = []; //save user's list (favorite)
    this.index = 0;
}

AppleModel.prototype.getData = function getData(callback){
    var req = new this.XMLHttpRequest();

    req.onload = function(){
        this.totalList = JSON.parse(req.responseText);
        console.log(this.totalList);
        callback(this.totalList);
    }

    req.open('GET','https://codepen.io/beautifulcoder/pen/vmOOLr.js', true);
    req.send();
}

AppleModel.prototype.saveListData = function saveData(){
    localStorage.setItem("myList",this.myList);
}

AppleModel.prototype.loadListData = function loadData(){
    return localStorage.getItem("myList");
}

var AppleView = function AppleView(element){
    this.element = element;
    this.EventTrigger = null;
}

AppleView.prototype.render = function render(obj){
    var objs = Object.keys(obj);
    var str = "";
    objs.map(function(element){
        if(element == "name")//regex element needed
            str += "<h1>" + obj[element] + "</h1>";
    })

    this.element.innerHTML = str;

    var h1Tag = this.element.querySelector('h1');
    h1Tag.addEventListener('click', this.EventTrigger);
}

var AppleController = function AppleController(appleModel,appleView){
    this.appleModel = appleModel;
    this.appleView = appleView;
}

AppleController.prototype.initialize = function initialize(){
    this.appleView.EventTrigger = this.EventTrigger.bind(this);
    console.log(this.appleView.EventTrigger);
}

AppleController.prototype.EventTrigger = function EventTrigger(){
    console.log(this.appleModel.myList[this.appleModel.index]);
}

AppleController.prototype.display = function display(obj){
    this.appleView.render(obj);
}

window.onload = function(){
    var appleView = new AppleView(document.getElementById("Canvas"));
    var appleModel = new AppleModel(XMLHttpRequest);
    var appleController = null;

    appleModel.getData(function (list) {
        appleModel.myList = list;
        appleController = new AppleController(appleModel, appleView);
        appleController.initialize();
        console.log(appleController.appleModel.myList);
        arr = appleController.appleModel.myList;

        appleController.display({
            "name": "song",
            "value": 3
        });

    });
}