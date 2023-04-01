const { spawn } = require('child_process');
const express = require('express');
const app = express();

//设置允许跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/check', function(req, res){
    var path = `./SentiStrength_Data/`;
    if(req.query['sentidata']){
        path = req.query['sentidata'];
    }

    var para = ['-jar', `./SentiStrength.jar`, `sentidata`, path];
    if(req.query['text']){
        para.push('text');
        para.push(req.query['text']);
    }
    if(req.query['input']){
        para.push('input');
        para.push("./tempDir/tempText.txt");
    }


    //检查所有的单参数
    var paras = ["trinary","binary", "scale",
        "explain",
        "alwaysSplitWordsAtApostrophes",
        "noBoosters",
        "noNegatingPositiveFlipsEmotion",
        "noNegatingNegativeNeutralisesEmotion",
        "negatedWordStrengthMultiplier",
        "maxWordsBeforeSentimentToNegate",
        "noIdioms",
        "questionsReduceNeg",
        "noEmoticons",
        "exclamations2",
        "mood",
        "noMultiplePosWords",
        "noMultipleNegWords",
        "noIgnoreBoosterWordsAfterNegatives",
        "noDictionary",
        "noDeleteExtraDuplicateLetters",
        "illegalDoubleLettersInWordMiddle",
        "illegalDoubleLettersAtWordEnd",
        "noMultipleLetters" ];
    for(i = 0; i < paras.length; i++){
        if(req.query[paras[i]]){
            para.push(req.query[paras[i]]);
        }
    }

    console.log(para)
    const child = spawn('java', para);
    let ans = ""
    child.stdout.on('data', (data) => {
        ans = data
    });

    console.log(req.query);
    child.on('exit', function(code, signal){
        console.log('child process exited with' + `code ${code} and signal ${signal}`);
        console.log(ans.toString());
        var text = ans.toString();
        if("Finished! Results in: " === text.substring(0, 22)){
            text = text.substring(22, text.length-1);
            const fs = require('fs');
            var tempPath = text;
            text = fs.readFileSync(tempPath).toString();
            fs.unlink(tempPath, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(`${tempPath} has been deleted.`);
            });
        }
        console.log(text)
        let use = {
            "ans": text
        }
        res.send(use);
    });
})

app.listen(3000);

const fs = require("fs");

app.get('/loadToFile', function(req, res) {
    const myString = req.query['text'];

    fs.writeFile("tempDir/tempText.txt", myString, function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log("文件已保存！");
        }
    });
    res.send(true);
})


