// 一応即時関数でスコープ作る
(() => {

  // const colorList = ['Aqua', 'DeepPink', 'Chartreuse', 'SkyBlue', 'LightSalmon'];
  // const heightFromTopList = [20, 140, 260, 380, 500];

  // // アニメーションしたい要素を配列に変換
  // const contents = Array.from(document.getElementsByClassName('content'));

  // // ボックス要素の色と位置を指定
  // contents.forEach((val, i) => {
  //   val.style.backgroundColor = colorList[i];
  //   val.style.top = heightFromTopList[i] + 'px';
  // });

  // const delay = (time) => time * 1000;

  // // promiseの配列を作ってreduceで順次実行してる
  // const delayPromises = (delayTime) => {
  //   return contents.map((val) => {
  //     return () => {
  //       return new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //           val.classList.add('slide-animation');
  //           resolve();
  //         }, delay(delayTime));
  //       }).catch((err) => {
  //         console.log(err);
  //         reject(err);
  //       });
  //     };
  //   }).reduce((pre, cur) => {
  //     return pre.then(cur);
  //   }, Promise.resolve());
  // };


  // const removeClass = (className) => {
  //   contents.forEach((val) => {
  //     val.classList.remove(className);
  //   });
  // };

  // const btn = document.getElementById('js-btn');
  // btn.addEventListener('click', () => {
  //   removeClass('slide-animation');
  //   const inputVal = document.getElementById('js-input').value;
  //   btn.disabled = true;
  //   delayPromises(inputVal);
  // });

  // // 最後の要素のアニメーション終わったらdisabled解除
  // const lastElement = document.getElementsByClassName('contents')[0];
  // lastElement.lastElementChild.addEventListener('animationend', () => {
  //   btn.disabled = false;
  // });


  /**
   * header -> footer -> main-content -> side-content ->
   * circle -> button の順でアニメーションする
   *
   *
   */

  const delay = 500;
  const header = document.getElementsByClassName('header')[0];
  const footer = document.getElementsByClassName('footer')[0];
  const mainContent = document.getElementsByClassName('main-content')[0];
  const sideContent = document.getElementsByClassName('side-content')[0];
  const circle0 = document.getElementsByClassName('circle')[0];
  const circle1 = document.getElementsByClassName('circle')[1];
  const circle2 = document.getElementsByClassName('circle')[2];
  const circle3 = document.getElementsByClassName('circle')[3];
  const button = document.getElementsByClassName('button')[0];

  const createPromise = (process, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        process;
        resolve();
      }, delay);
    });
  };

  createPromise(header.classList.add('header-animation'), delay).then(() => {
    return createPromise(footer.classList.add('footer-animation'), delay);
  }).then(() => {
    return createPromise(mainContent.classList.add('main-content-animation'), delay);
  }).then(() => {
    return createPromise(sideContent.classList.add('side-content-animation'), delay);
  }).then(() => {
    return createPromise(circle0.classList.add('circle-animation'), delay);
  }).then(() => {
    return createPromise(circle1.classList.add('circle-animation'), delay);
  }).then(() => {
    return createPromise(circle2.classList.add('circle-animation'), delay);
  }).then(() => {
    return createPromise(circle3.classList.add('circle-animation'), delay);
  }).then(() => {
    return createPromise(button.classList.add('button-animation'), delay);
  }).catch((err) => {
    console.log({ err });
  });
})();
