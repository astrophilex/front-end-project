let curPos = 0; // 현재 보여주는 이미지의 인덱스 번호
let positonValue = 0; // 이미지 태그의 위치 값 지정할 변수
const TOTAL_IMAGES = 2; // 전체 이미지 개수 -1
const IMAGE_WIDTH = 1300; // 이미지 가로 너비

const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const images = document.querySelector(".stay")

function next() {
    if(curPos < TOTAL_IMAGES){
        prevBtn.removeAttribute('disabled')
        positonValue -= IMAGE_WIDTH
        images.style.transform = `translateX(${positonValue}px)`
        curPos += 1
    }
    if(curPos === 3){
        nextBtn.setAttribute('disabled','true')
    }
}

function prev() {
    if(curPos > 0){
        nextBtn.removeAttribute('disabled')
        positonValue += IMAGE_WIDTH
        images.style.transform = `translateX(${positonValue}px)`
        curPos -= 1
    }
    if(curPos === 0){
        prevBtn.setAttribute('disabled','true')
    }
}

function init() {
    prevBtn.setAttribute('disabled',true)
    prevBtn.addEventListener('click',prev)
    nextBtn.addEventListener('click',next)
}

init();