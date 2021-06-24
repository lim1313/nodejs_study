const process = require("process");
const path = require("path");
const os = require("os");
const fs = require("fs");

//1. 경로 설정
const folder = process.argv[2];

const workingDir = path.join(os.homedir(), "Desktop", "Pictures", folder);

if (!folder || !fs.existsSync(workingDir)) {
  console.error("please enter folder name in Pictures");
  return;
}

//2. 폴더 생성
const videoDir = path.join(workingDir, "videoDir");
const captureDir = path.join(workingDir, "captureDir");
const duplicateDir = path.join(workingDir, "duplicateDir");

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(captureDir) && fs.mkdirSync(captureDir);
!fs.existsSync(duplicateDir) && fs.mkdirSync(duplicateDir);

//3. 폴더 안에 있는 파일 이동
fs.promises.readdir(workingDir).then(processFiles).catch(console.log);

function processFiles(files) {
  files.forEach(file => {
    if (isVideoDir(file)) {
      move(file, videoDir);
    } else if (isCaptureDir(file)) {
      move(file, captureDir);
    } else if (isDuplicatDir(files, file)) {
      move(file, duplicateDir);
    }
  });
}

function isVideoDir(file) {
  const extname = path.extname(file);
  return extname === ".mov" || extname === ".mp4" ? true : false;
}
function isCaptureDir(file) {
  const extname = path.extname(file);
  return extname === ".png" || extname === ".aae" ? true : false;
}

function isDuplicatDir(files, file) {
  if (!file.startsWith("IMG_") || file.startsWith("IMG_E")) {
    return false;
  }
  const edited = `IMG_E${file.split("_")[1]}`;
  const found = files.find(f => f.includes(edited));
  return !!found;
}

function move(file, targetDir) {
  console.log(`move ${file} to ${path.basename(targetDir)}`);
  const oldpath = path.join(workingDir, file);
  const newpath = path.join(targetDir, file);
  fs.promises.rename(oldpath, newpath).catch(console.error);
}
