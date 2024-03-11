$(function () {
    let header = $('header');
    let menuOpen = $('header .menu_open');
    let nav = $('header nav');
    let body = $('body');

    //스크롤 시, 헤더 스타일 변경과 메뉴 위치 변경
    $(window).scroll(function () {
        if (window.scrollY > 100) {
            header.addClass('on');
            header.addClass('scroll');
            nav.addClass('scroll');
        } else {
            header.removeClass('on');
            header.removeClass('scroll');
            nav.removeClass('scroll');
        }
    })

    //메뉴 버튼 클릭 시, 헤더 스타일 변경과 메뉴 열기
    menuOpen.click(function () {
        if (header.css('height') === '150px' && $('header > div a').css('color') === 'rgb(255, 255, 255)') { /* 색상명 쉼표 다음에 띄어써야 함!!! */
            header.addClass('on');
        } else if (header.css('height') === '150px' && $('header > div a').css('color') === 'rgb(51, 51, 51)') {
            header.removeClass('on');
        } else if (header.css('height') === '100px') {
            header.addClass('on');
        }
        header.toggleClass('menuOpen');
        nav.toggleClass('menuOpen');
        body.toggleClass('on');
    })

    let nextBtn = $('main figure .next_btn');
    let prevBtn = $('main figure .prev_btn');
    let mainImage = $('main figure img');

    let totalSlides = mainImage.length;
    let current = 0;

    nextBtn.click(function () {
        let nextIndex = (current + 1) % totalSlides;
        mainImage.eq(current).fadeOut(800);
        mainImage.eq(nextIndex).fadeIn(800);
        current = nextIndex;
    });

    prevBtn.click(function () {
        let prevIndex = (current - 1) % totalSlides;
        mainImage.eq(current).fadeOut(800);
        mainImage.eq(prevIndex).fadeIn(800);
        current = prevIndex;
    });

    setInterval(function () {

    }, 3000)

    let tabBtn = $('.stay .inner .text div ul li');
    let tabText = $('.stay .inner .text p');
    let tabImage = $('.stay .inner figure img');

    //탭메뉴 클릭 시 텍스트와 이미지 변경
    tabBtn.click(function () { /* 제이쿼리에서는 반복문을 써주지 않아도 됨. */
        let currentIndex = $(this).index() /* 선택한 요소의 index 값을 변수에 저장 */

        tabBtn.removeClass('on');
        tabBtn.eq(currentIndex).addClass('on'); /* eq() : 요소의 순서 */

        tabText.removeClass('on');
        tabText.eq(currentIndex).addClass('on');

        tabImage.fadeOut(800);
        tabImage.eq(currentIndex).fadeIn(800);

        // tabImage.attr('src', imageSrc[num]);
    })

    //웨이브온커피 자동 이미지 변경
    let currentIndex = 0;

    setInterval(function () {
        let nextIndex = (currentIndex + 1) % 3; // % : 나머지 값을 이용 (3으로 나누면 값은 0, 1, 2 세가지만 나오게 됨.)

        $('.special .inner figure .slide').eq(currentIndex).fadeOut(2000);
        $('.special .inner figure .slide').eq(nextIndex).fadeIn(2000); // 1.2초 동안 fadeOut/fadeIn 됨. (1000ms = 1s)

        currentIndex = nextIndex; // currentIndex 값을 nextIndex 값으로 바꿔주지 않으면 currentIndex 값은 계속 0이므로, nextIndex 값으로 잘 갱신되도록 함.
    }, 4000); // 3000ms = 3s


    AOS.init();
})