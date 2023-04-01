var text = ""
var parameter = ""

document.getElementById('fileInput').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var content = e.target.result;
        // 在这里处理文件内容
        document.getElementById("file").innerText = content;
    };
    reader.readAsText(file);
});


function makeParameter(){
    parameter = ""
    var s = document.getElementById("services");
    console.log(s.value);
    if(s.value === 'b'){
        if(parameter === ""){
            parameter = "?";
        }
        else{
            parameter = parameter + "&";
        }
        parameter = parameter + "text=" + document.getElementById("comments").value;
    }
    else if(s.value === 'c'){
        if(parameter === ""){
            parameter = "?";
        }
        else{
            parameter = parameter + "&";
        }
        loadToFile(document.getElementById("file").value);
        parameter = parameter + "input=" + "input";
    }


    s = document.getElementById("output");
    if(s.value === "b"){}
    else if(s.value === "c"){
        if(parameter === ""){
            parameter = "?";
        }
        else{
            parameter = parameter + "&";
        }
        parameter = parameter + "trinary=trinary";
    }
    else if(s.value === "d"){
        if(parameter === ""){
            parameter = "?";
        }
        else{
            parameter = parameter + "&";
        }
        parameter = parameter + "binary=binary";
    }
    else if(s.value === "e"){
        if(parameter === ""){
            parameter = "?";
        }
        else{
            parameter = parameter + "&";
        }
        parameter = parameter + "scale=scale";
    }

    for(let i = 1; i <= 20; i++){
        var id = "option" + i;
        if(document.getElementById(id).checked){
            console.log(document.getElementById(id).value);
            if(parameter === ""){
                parameter = "?";
            }
            else{
                parameter = parameter + "&";
            }
            parameter = parameter + document.getElementById(id).value.substring(0, document.getElementById(id).value.length-1) + "=" + document.getElementById(id).value.substring(0, document.getElementById(id).value.length-1);
        }
    }
    console.log(parameter)
}

function get(){
    makeParameter();
    if(parameter === ""){
        alert("选择参数错误，请重新选择！");
    }
    quest();
}

function quest(){
    $.ajax({
        url: "http://172.19.169.81:3000/check" + parameter,
        type: "get",
        async: true,
        success: function (res) {
            console.log(res)
            text = res['ans']
            document.getElementById('scoreBox').style.display = "block";
            document.getElementById("score").innerText = "情感分类的结果为：";
            document.getElementById('scoreText').innerText = text.toString()
        }
    })
}

var u = "";
changeBlock();
function changeBlock(){
    if(u !== ""){
        document.getElementById(u).style.display = "none";
    }
    var s = document.getElementById("services");
    if(s.value === 'b'){
        document.getElementById("classifyBox").style.display = "block";
        u = "classifyBox";
    }
    else if(s.value === 'c'){
        document.getElementById("fileBox").style.display = "block";
        u = "fileBox";
    }
}

function readFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function(e) {
            const fileContent = e.target.result;
            console.log(fileContent); // 将文件内容打印到控制台
        }
    }
}

function loadToFile(context){
    $.ajax({
        url: "http://172.19.169.81:3000/loadToFile?text=" + context,
        type: "get",
        async: true,
        success: function (res) {
            console.log("success to load file!")
        }
    })
}

// 获取按钮和下拉框
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

// 点击按钮时展开或收起下拉框
dropdownBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

// 点击下拉框以外的地方时收起下拉框
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-btn') && !event.target.matches('.dropdown-content *')) {
        dropdownContent.classList.remove('show');
    }
});


