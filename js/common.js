//이미지 슬라이더
function initComparisons() {
  var x, i;
  /* Find all elements with an "overlay" class: */
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /* Once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function: */
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    /* Get the width and height of the img element */
    w = img.offsetWidth;
    h = img.offsetHeight;
    /* Set the width of the img element to 50%: */
    img.style.width = (w / 2) + "px";
    /* Create slider: */
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /* Insert slider */
    img.parentElement.insertBefore(slider, img);
    /* Position the slider in the middle: */
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /* Execute a function when the mouse button is pressed: */
    slider.addEventListener("mousedown", slideReady);
    /* And another function when the mouse button is released: */
    window.addEventListener("mouseup", slideFinish);
    /* Or touched (for touch screens: */
    slider.addEventListener("touchstart", slideReady);
      /* And released (for touch screens: */
    window.addEventListener("touchend", slideFinish);
    function slideReady(e) {
      /* Prevent any other actions that may occur when moving over the image: */
      e.preventDefault();
      /* The slider is now clicked and ready to move: */
      clicked = 1;
      /* Execute a function when the slider is moved: */
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /* The slider is no longer clicked: */
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /* If the slider is no longer clicked, exit this function: */
      if (clicked == 0) return false;
      /* Get the cursor's x position: */
      pos = getCursorPos(e)
      /* Prevent the slider from being positioned outside the image: */
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /* Execute a function that will resize the overlay image according to the cursor: */
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      /* Get the x positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      x = e.pageX - a.left;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /* Resize the image: */
      img.style.width = x + "px";
      /* Position the slider: */
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}

$(document).ready(function () {

  const arr = [
    "L",
    "i",
    "호",
    "생",
    "m",
    "t",
    "고",
    "4",
    "M",
    "래",
    "나",
    "사",
    "R",
    "&",
    "란",
    "y",
    "십",
    "%",
    "P",
    "안",
    "6",
    "일",
    "1",
    "기",
    "@",
    "억",
    "!",
    "3",
    "들",
    "e",
    "본",
    "~",
    "/",
    "l",
    "육",
    "w",
    "아",
    "이",
    "S",
    "세",
    "$",
    "0",
    "전",
    "r",
    "a",
    "노",
    "리",
    "#",
    "S",
    "비",
    "봄",
    "s",
    "약",
    "월",
    "o",
    "?",
    "속",
    "b",
    "명",
    "f"
]

  //grid 그리기
  for (i =0; i<arr.length; i++){
    $(".life_preview").append("<span class='item'>"+arr[i]+"</span>");
  }

  $(".preview_btn").on("click", function () {
    $(".preview_btn").removeClass("active");
    $(this).addClass("active");
    $(".item").css("font-family",$(this).attr("font-weight"));
  });

  $(".weight-box").on("click", function () {
    $(".weight-box").removeClass("active");
    $(this).addClass("active");
    $(".preview_typing").css("font-family",$(this).attr("font-weight"));
  });

  $(".background-box").on("click", function () {
    $(".background-box").removeClass("active2");
    $(this).addClass("active2");
    if($(this).attr("img-src") != "imgUpload"){
      $(".preview_typing").css("background-image",  "url("+$(this).attr("img-src")+".png)" );
    }
    //직접 업로드
    else{
      $('#file').click();
    }
  });

  $("#file").on("change", function() {
    $(".preview_typing").css("background-image",'none');
    var file = event.target.files[0];
    var reader = new FileReader(); 
    reader.onload = function(e) {
      $(".preview_typing").css({"background-image":"url("+ e.target.result+")"}); 				
    }
    reader.readAsDataURL(file);
  });

  $("#customRange1").on("input change",function () {
    $('.preview_typing').css("font-size", $(this).val() + "px");
  });
  
});