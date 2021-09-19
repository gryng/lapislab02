$(function(){

  // プレイヤー選択
  $('.js-select-player').change(function(){

    var player_num = $(this).val();

    if( player_num == 0){

      // GMならすべての発言が見えるように
      $('.m-dialog').removeClass('m-dialog--blind').removeClass('m-dialog--my');
      $('.m-choice__msg-hint').removeClass('m-choice__msg-hint--blind');
      $(".m-dialog[data-player=0]").addClass('m-dialog--my');
      $('.m-pre').addClass('m-pre--hidden');
      $(".m-pre[data-player=0]").removeClass("m-pre--hidden").addClass('m-pre--my');

    } else {

      // すべての発言を隠す
      $('.m-dialog').addClass('m-dialog--blind').removeClass('m-dialog--my');
      $('.m-choice__msg-hint').addClass('m-choice__msg-hint--blind');

      // 選んだプレイヤーの発言/ヒントを見えるようにする
      $(".m-dialog[data-player=" + player_num + "]").removeClass("m-dialog--blind").addClass('m-dialog--my');
      $(".m-choice__msg-hint[data-player=" + player_num + "]").removeClass('m-choice__msg-hint--blind');

      // 選んだプレイヤーのひとつ前の発言を見えるようにする
      $(".m-dialog[data-player=" + player_num + "]").prev('.m-dialog').removeClass("m-dialog--blind");


      // 準備テキストを隠す
      $('.m-pre').addClass('m-pre--hidden');

      // 選んだプレイヤーの準備テキストを表示する
      $(".m-pre[data-player=" + player_num + "]").removeClass("m-pre--hidden").addClass('m-pre--my');

    }

    // シーン1を表示
    $("div[data-scene=1]").removeClass("m-scene--hidden");

    // スクロールアイコンを表示
    $(this).closest('.m-choice').find('.m-choice__next').removeClass('m-choice__next--hidden');

  });

  // ルート選択
  $('input.js-choice-btn').change(function(){

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

    // シーン10を非表示に
    if ( scene_num==9 && route_type =="b" ) {
      console.log("9b");
      $("div[data-scene=10]").addClass("m-scene--hidden");
      $("div[data-scene=9]").find(".m-choice").addClass("m-choice--hidden");
    } else {
      $("div[data-scene=9]").find(".m-choice").removeClass("m-choice--hidden");
    }

  });
});