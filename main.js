$(function(){

  console.log("start");

  $('input.js-choice-btn').change(function(){

    // クリックしたinputのdataを確認する
    //console.log($(this).data().scene);

    var scene_num = $(this).data().scene;
    var route_type = $(this).data().route;

    // シーンを表示
    $("div[data-scene=" + scene_num + "]").removeClass("m-scene--hidden");

    // シーン内のルートを全部非表示
    $("div[data-scene=" + scene_num + "]").find("div[data-route]").addClass("m-scene__route--hidden");

    // 該当ルートを表示
    $("div[data-scene=" + scene_num + "]").find("div[data-route=" + route_type + "]").removeClass("m-scene__route--hidden");

    // スクロールアイコンを表示
    $(this).closest('.m-choice').find('.m-choice__next').removeClass('m-choice__next--hidden');

  });
});