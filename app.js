/// <reference path="typings/tsd.d.ts" />
function WriteFile() {
    var fs = require('fs');
    fs.writeFile('log/test.txt', 'Hello Node', function(err) {
        if (err) throw err;
        console.log('Saved successfully');
    });
}

function AppendFile(apptxt) {
    var fs = require('fs');
    //追加文本
    fs.appendFile('log/test.txt', apptxt, function(err) {
        if (err) throw err;
        console.log('这是追加的文本：' + apptxt);
    });
    //判断文件是否存在
    fs.exists('log/test.txt', function(exists) {
        console.log(exists ? "存在" : "不存在");
    });
}
//修改文件名称
function ReName() {
    var fs = require('fs');
    fs.rename('log/test2.txt', 'log/test.txt', function(err) {
        if (err) throw err;
        console.log('Successful modification');
    });
}
//读取文本
function ReadFile() {
    var fs = require('fs');
    fs.readFile('log/test.txt', 'utf-8', function(err, data) {
        if (err) throw err;
        console.log(data);
    })
}
//删除文件
function Unlink() {
    var fs = require('fs');
    fs.unlink('log/123.txt', function(err) {
        if (err) throw err;
        console.log('successfully deleted')
    })
}
//创建目录
function Mkdir() {
    var fs = require("fs");
    fs.mkdir('log/test2', function(err) {
        if (err) throw err;
        console.log("创建文件目录")
    })
}
function Rmdir() {
    var fs = require('fs');
    fs.rmdir('log/test', function(err) {
        if (err) throw err;
        console.log("删除目录")
    });
}
//读取目录
function Readdir() {
    var fs=require("fs");
    fs.readdir('log/',function(err,files){
        if(err) throw err;
        files.forEach(function(element) {
            console.log(element)
        }, this);
    });
}

//ReName();
//AppendFile("小明 吃麻辣烫不！！！！")
//ReadFile();
//Unlink();
//Mkdir();
//Rmdir();
Readdir();