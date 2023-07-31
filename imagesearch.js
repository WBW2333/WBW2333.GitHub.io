const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// 读取文件夹下所有图片名称
function readImageNamesFromFolder(folderPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                reject(err);
            } else {
                const imageNames = files.filter(file => /\.(png|jpe?g|gif|JPG|PNG)$/i.test(file));
                resolve(imageNames);
            }
        });
    });
}

// 读取HTML文件并解析img元素
function readAndParseHTML(htmlFilePath) {
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
    return cheerio.load(htmlContent);
}

// 检测文件夹下的图片有哪些没有被img使用
function findUnusedImages(imageNames, $) {
    const usedImageNames = [];
    $('img').each((index, element) => {
        const src = $(element).attr('src');
        if (src) {
            usedImageNames.push(path.basename(src));
        }
    });

    return imageNames.filter(imageName => !usedImageNames.includes(imageName));
}

// 主函数
async function main() {
    const imageFolderPath = 'assets/img'; // 替换为你的图片文件夹路径
    const htmlFilePath = 'blogs.html'; // 替换为你的HTML文件路径

    try {
        const imageNames = await readImageNamesFromFolder(imageFolderPath);
        const $ = readAndParseHTML(htmlFilePath);
        const unusedImages = findUnusedImages(imageNames, $);

        console.log('Unused images:');
        unusedImages.forEach(imageName => {
            console.log(imageName);
        });
    } catch (err) {
        console.error('Error:', err);
    }
}

main();
