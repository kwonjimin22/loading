$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $body = $('body');
  const $loading = `<div class="loading"><div class="lds-heart"><div></div></div></div>`;

  // body의 마지막 부분에 집어넣기
  $body.append($loading);
  // dom구조에 없던 걸 중간에 넣어서 컴퓨터가 $loading를 모르는데
  // 추가된 이후에 찾아보라고 다시하면 이제 $loading를 알아들을 수 있음
  const $target = $('.loading');

  // 로딩이 완료되면 (load)
  $window.on('load', function () {
    // 너무 빨리 사라지므로 조금 있다가 사라지게끔
    // setTimeout(동작, 시간)
    setTimeout(function () {
      $target.fadeOut();
    }, 1000);
  });
});
