var 제목 = document.querySelector('#title');
if (제목 != null) {
    제목.innerHTML = '반가워요';
}
var 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'change.jpg';
}
var link = document.querySelectorAll('.naver');
link.forEach(function (item) {
    if (item instanceof HTMLAnchorElement) {
        item.href = 'https://kakao.com';
    }
});
