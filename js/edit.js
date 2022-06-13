$(document).ready(function () {

  //대댓글 토글 view_material---------------------------------------------
  $('.reply_btn').click(function(){
    $('#reply_wrap').toggle();
  })

  //카테고리, 오늘 본 상품 퀵 메뉴
  var currentPosition = parseInt($(".quick_side").css("top"));
  $(window).scroll(function() {
    var position = $(window).scrollTop(); 
    $(".quick_side").stop().animate({"top":position+currentPosition+"px"},1000);
  });


  
  //상단 올라가는 버튼
  $('#top_btn').click(function () {
    $('html , body').animate({
      'scrollTop': 0,
    }, 1500)
  })

  //전체보기 버튼 눌렀을 때 나타나기
  $('.gnb_all_btn').click(function () {
    if ($('.gnb_all_wrap').hasClass('active')) {
      $('.gnb_all_wrap').removeClass('active')
    } else {
      $('.gnb_all_wrap').addClass('active')
    }
  })

  //메인 배너 슬릭 슬라이드
  $('.main_ban_slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  })

  //자료 탭 슬릭 슬라이드
  $('.material_slider').on('init', function (event, slick) {
    $('#left_material_slider .tabs_header h3').eq(0).addClass('active');
  });

  $('.material_slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  })

  $('.material_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('#left_material_slider .tabs_header h3').removeClass('active');
    $('#left_material_slider .tabs_header h3').eq(currentSlide).addClass('active');
  })

  /*좌우이동 버튼*/
  $('.tabs_btn_left').click(function () {
    $('this.material_slider').slick('slickPrev')
  })

  $('.tabs_btn_right').click(function () {
    $('this.material_slider').slick('slickNext')
  })

  //게시판 탭 슬릭 슬라이드
  $('.board_slider').on('init', function (event, slick) {
    $('#left_board_slider .tabs_header h3').eq(0).addClass('active');
  });

  $('.board_slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  })

  $('.board_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('#left_board_slider .tabs_header h3').removeClass('active');
    $('#left_board_slider .tabs_header h3').eq(currentSlide).addClass('active');
  })

  //공모전/정보 탭 슬릭 슬라이드
  $('.info_slider').on('init', function (event, slick) {
    $('#left_info_slider .tabs_header h3').eq(0).addClass('active');
  });

  $('.info_slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  })

  $('.info_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('#left_info_slider .tabs_header h3').removeClass('active');
    $('#left_info_slider .tabs_header h3').eq(currentSlide).addClass('active');
  })

  //인기/신규 강의 탭 슬릭 슬라이드
  $('.lec_slider').on('init', function (event, slick) {
    $('#left_lec_slider .tabs_header h3').eq(0).addClass('active');
  });

  $('.lec_slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  })

  $('.lec_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('#left_lec_slider .tabs_header h3').removeClass('active');
    $('#left_lec_slider .tabs_header h3').eq(currentSlide).addClass('active');
  })

  //학습교구/필기구 숍 탭 슬릭 슬라이드
  $('.shop_slider').on('init', function (event, slick) {
    $('#right_shop_slider .tabs_header h3').eq(0).addClass('active');
  });

  $('.shop_slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  })

  $('.shop_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('#right_shop_slider .tabs_header h3').removeClass('active');
    $('#right_shop_slider .tabs_header h3').eq(currentSlide).addClass('active');
  })

  //이벤트/공지사항 탭 슬릭 슬라이드
  $('.event_slider').on('init', function (event, slick) {
    $('#right_event_slider .tabs_header h3').eq(0).addClass('active');
  });

  $('.event_slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  })

  $('.event_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('#right_event_slider .tabs_header h3').removeClass('active');
    $('#right_event_slider .tabs_header h3').eq(currentSlide).addClass('active');
  })

  //오른쪽 광고 배너 슬릭 슬라이드
  $('.ad_ban_slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  })

  //교재/문제집 탭 슬릭 슬라이드
  $('.book_slider').on('init', function (event, slick) {
    $('#right_book_slider .tabs_header h3').eq(0).addClass('active');
  });

  $('.book_slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  })

  $('.book_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('#right_book_slider .tabs_header h3').removeClass('active');
    $('#right_book_slider .tabs_header h3').eq(currentSlide).addClass('active');
  })


  //회원가입---------------------------------------------

  /*전체 동의 누를 경우*/
  ('.custom_check').click(function(){

  })

  /*단일 동의 누를 경우*/
  ('.agree_1').click(function(){
      
  })
  ('.agree_2').click(function(){
      
  })

  /*더보기 버튼 누를 경우 약관 Y스크롤 보이기, ^ 아이콘 180도 회전*/
  $('.term_more_btn').click(function () {
      if ($('.term_area').hasClass('active')) {
        $('.term_area').removeClass('active')
      } else {
        $('.term_area').addClass('active')
      }
  })


  
})