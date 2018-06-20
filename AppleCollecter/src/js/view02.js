function loadLocalStorage() {
    return localStorage.getItem('myDB');
}

function clearLocalStorage() {
    localStorage.setItem('myDB', null);
}

function saveLocalStorage() {
    localStorage.setItem('myDB', JSON.stringify(TotalData));
}

var TotalData = [];
var selectedIndex = -1;// 처음 selectedIndex의 상태는 -1 (선택 안됨 상태)
var mobileAddElement = {};

TotalData = JSON.parse(loadLocalStorage());

function initTableList(){
    var wrap_left = document.getElementsByClassName('list_wrap');
    var str = "";
    for(var i=0;i<TotalData.length;i++){
        str += "<li class='list_article' onclick='selectedElement(this);' index="+i+">";
        str += "<a href=#></a>";
        str += "<div class='list_article_top'>";
        str += "<p class='user_name ellipse'>" + TotalData[i].source.name + "</p>";
        str += "<p class='send_date'>" + TotalData[i].publishedAt + "</p>";
        str += "<button class='btn_mail_delete' onclick='elementDelete(this);'index= " + i + "><span class='blind'>삭제</span></button>";
        str += "</div>";
        str += "<div class='list_article_botton'>";
        str += "<p class='mail_title ellipse'>" + TotalData[i].title + "</p>";
        str += "</div>";
        str += "<button type='button' class='btn_list_move'><span class='blind'>이동버튼</span></button>";
        str += "<div style='padding : 10px'>";
        str += "</li>";
    }

    wrap_left[0].innerHTML = str;
    render(TotalData[0]);

    document.getElementsByClassName("btn_center")[0].style["height"] = document.getElementsByClassName("list_wrap")[0].clientHeight + "px";
}

function elementDelete(element) {
    var index = element.getAttribute("index");
    var elements = document.querySelectorAll("li");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("index") == index) {
            let tempHeight = (document.getElementsByClassName("list_wrap")[0].clientHeight - elements[i].clientHeight) + "px";
            //console.log(elements[i].clientHeight);
            document.getElementsByClassName("list_wrap")[0].clientHeight = tempHeight;
            document.getElementsByClassName("btn_center")[0].style.height = tempHeight;
            elements[i].remove();

            TotalData.pop(i);
            saveLocalStorage();
        }
    }
    var rightView = document.getElementsByClassName("wrap_right")[0];
    rightView.innerHTML = "";

}

//추가 할 리스트를 생성하는 함수
function selectedElement(element) {
    var index = element.getAttribute("index");
    element.setAttribute("class", "list_article sellect");
    if (selectedIndex == -1) {
        selectedIndex = index;
    }
    else if (index != selectedIndex && selectedElement != -1) {
        deselectedElement(selectedIndex);
        selectedIndex = index;
    }
    render(TotalData[index]);
}

//이전에 선택된 리스트의 스타일을 변경하는 함수
function deselectedElement(selectedIndex) {
    var elements = document.getElementsByClassName("list_article sellect");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("index") == selectedIndex) {
            elements[i].setAttribute("class", "list_article");
        }
    }
}

//wrap_right 화면에 렌더링 하는 함수
function render(obj) {
    if (obj == null) {
        obj = {
            description: "",
            publishedAt: "",
            source: "",
            title: "",
            url : ""
        };
    }
    var rightView = document.getElementsByClassName("wrap_right")[0];
    rightView.innerHTML = ""; //이전에 생성된 element들을 초기화

    var str = "";
    str += "<div class='content_top'>";
    str += "<h1 class='user_name ellipse content_font'>" + obj.source.name + "</h1>";
    str += "<p class='send_date'>" + obj.publishedAt + "</p>";
    str += "<p class='mail_title ellipse'>" + obj.title + "</p>";
    if(obj.urlToImage == null){
        obj.urlToImage = "https://newsclick.in/themes/newsclick/assets/images/newsclick_logo.png";
    }
    str += "<img class='mail_title ellipse'" + "src=" + obj.urlToImage + ">";
    str += "</div>";
    str += "<div class='content_bottom'>";

    var arr = obj.description.split('\n');

    for (var i = 0; i < arr.length; i++) {
        str += arr[i] + "</br>";
    }
    str += "</div>";
    rightView.innerHTML = str; //저장할 div 데이터를 warp_right에 저장

}


$(document).ready(function(){
    initTableList();
    if (TotalData.length == 0) {
        var rightView = document.getElementsByClassName("wrap_right")[0];
        rightView.innerHTML = "";
    }


    $('.btn_mail_delete').click(function(){
        $(this).parent().parent().hide('slow',function(){
            console.log("Delete motion");
        });
        var rightView = document.getElementsByClassName("content_top")[0];
        rightView.innerHTML = "";
    })

    $('.closebtn').click(function () {
        console.log("close");
        $('#mySideNav').css({
            width: 0
        })
    })

    $('.openbtn').click(function () {
        console.log("open");
        $('#mySideNav').css({
            width: 250
        })
    });
})