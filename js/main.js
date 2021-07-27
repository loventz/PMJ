$(function () {

// nav
  $(".nav1").bind("mouseover",function(){
    var kor = $(this).attr("title1");
    var eng = $(this).attr("title2");
    $(this).html(kor);
   })
   $(".nav1").bind("mouseout",function(){
    var kor = $(this).attr("title1");
    var eng = $(this).attr("title2");
    $(this).html(eng);
   })

// nav











  // slider
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,dots : true, 
      });
// slider

// sub1
      $(".vertical-center").slick({
        arrows : false, 
        dots: false,
        vertical: true,
        centerMode: true,
        slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 2000, 
        pauseOnHover : true,
      });
// sub1

// sub3
 $(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
// sub3










// sub4
$(".regular").slick({
  arrows:true,  
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite : true,
  pauseOnHover : true,
});
// sub4


















    }) //제이쿼이 전체 끝
