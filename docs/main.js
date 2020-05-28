
const colorList = ['Aqua', 'DeepPink', 'Chartreuse', 'SkyBlue', 'LightSalmon'];
const heightFromTopList = [20, 140, 260, 380, 500];

const contents = Array.from(document.getElementsByClassName('content'));

contents.forEach((val, i) => {
  val.style.backgroundColor = colorList[i];
  val.style.top = heightFromTopList[i] + 'px';
});

const delay = (time) => time * 1000;

const delayPromises = (delayTime) => {
  return contents.map((val) => {
    return () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          val.classList.add('slide-animation');
          resolve();
        }, delay(delayTime));
      }).catch((err) => {
        console.log(err);
        reject(err);
      });
    };
  }).reduce((pre, cur) => {
    return pre.then(cur);
  }, Promise.resolve());
};

const btn = document.getElementById('js-btn');
btn.addEventListener('click', () => {
  const inputVal = document.getElementById('js-input').value;
  delayPromises(inputVal);
});
