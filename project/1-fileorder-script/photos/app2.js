// file path 설정
const process = require("process");
const path = require("path");
const os = require("os");
const fs = require("fs");

const workingPath = path.join(
  os.homedir(),
  "Desktop",
  "Pictures",
  process.argv[2]
);

// fileDir 생성 : folder 생성 후 file 처리해야 하기 때문에 Sync 사용, 즉 동기적 처리가 필요하기 때문

const videosDir = path.join(workingPath, "videoDir");
const captureDir = path.join(workingPath, "captureDir");
const duplicateDir = path.join(workingPath, "duplicateDir");

!fs.existsSync(videosDir) && fs.mkdirSync(videosDir);
!fs.existsSync(captureDir) && fs.mkdirSync(captureDir);
!fs.existsSync(duplicateDir) && fs.mkdirSync(duplicateDir);

// file 이동경로
fs.promises.readdir(workingPath).then(processFiles).catch(console.error);

function processFiles(files) {
  files.forEach(file => {
    if (videoFile(file)) {
      move(file, videosDir);
    } else if (captureFile(file)) {
      move(file, captureDir);
    } else if (duplicateFile(files, file)) {
      move(file, duplicateDir);
    }
  });
}

function videoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function captureFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function duplicateFile(files, file) {
  if (!file.startsWith("IMG_") || file.startsWith("IMG_E")) {
    return false;
  }
  const edited = `IMG_E${file.split("_")[1]}`;
  const found = files.find(f => f.includes(edited));
  return !!found;
}

function move(file, targetDir) {
  const oldpath = path.join(workingPath, file);
  const newpath = path.join(targetDir, file);

  fs.rename(oldpath, newpath, console.error);
}
