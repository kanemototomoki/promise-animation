<template>
  <div class="wrapper">
    <main class="contents">
      <header class="header"></header>
      <nav class="nav">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </nav>
      <div class="main-content"></div>
      <div class="side-content"></div>
      <div class="button">Click Me!!</div>
      <footer class="footer"></footer>
    </main>
  </div>
</template>

<script>
export default {
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      const delay = 500;
      const header = document.getElementsByClassName("header")[0];
      const footer = document.getElementsByClassName("footer")[0];
      const mainContent = document.getElementsByClassName("main-content")[0];
      const sideContent = document.getElementsByClassName("side-content")[0];
      const circle0 = document.getElementsByClassName("circle")[0];
      const circle1 = document.getElementsByClassName("circle")[1];
      const circle2 = document.getElementsByClassName("circle")[2];
      const circle3 = document.getElementsByClassName("circle")[3];
      const button = document.getElementsByClassName("button")[0];

      const createPromise = (process, delay) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            process;
            resolve();
          }, delay);
        });
      };

      createPromise(header.classList.add("header-animation"), delay)
        .then(() => {
          return createPromise(footer.classList.add("footer-animation"), delay);
        })
        .then(() => {
          return createPromise(
            mainContent.classList.add("main-content-animation"),
            delay
          );
        })
        .then(() => {
          return createPromise(
            sideContent.classList.add("side-content-animation"),
            delay
          );
        })
        .then(() => {
          return createPromise(
            circle0.classList.add("circle-animation"),
            delay
          );
        })
        .then(() => {
          return createPromise(
            circle1.classList.add("circle-animation"),
            delay
          );
        })
        .then(() => {
          return createPromise(
            circle2.classList.add("circle-animation"),
            delay
          );
        })
        .then(() => {
          return createPromise(
            circle3.classList.add("circle-animation"),
            delay
          );
        })
        .then(() => {
          return createPromise(button.classList.add("button-animation"), delay);
        })
        .catch(err => {
          console.log({ err });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
}

.contents {
  background-color: #9e9e9e;
  min-height: 800px;
  max-width: 95%;
  margin: auto;
  position: relative;
}

.header,
.footer {
  background-color: #707070;
  width: 100%;
  height: 70px;
  position: absolute;
  left: 0;
}

.main-content {
  background-color: #707070;
  width: 50%;
  height: 60%;
  position: absolute;
  top: 100px;
  left: 200px;
}

.side-content {
  background-color: #707070;
  width: 20%;
  height: 60%;
  position: absolute;
  top: 100px;
  right: 100px;
}

.nav {
  position: absolute;
  top: 120px;
  left: 20px;
}

.circle {
  background-color: #707070;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 20px;
}

.circle:first-child {
  margin-top: 0;
}

.button {
  background-color: #707070;
  color: #cfcfcf;
  width: 350px;
  line-height: 64px;
  font-size: 48px;
  letter-spacing: 1.3px;
  text-align: center;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
}

.header,
.footer,
.main-content,
.side-content,
.circle,
.button {
  opacity: 0;
}

.header-animation {
  animation: header 1s linear forwards;
}

.footer-animation {
  animation: footer 1s linear forwards;
}

.main-content-animation {
  animation: main-content 1s linear forwards;
}

.side-content-animation {
  animation: side-content 1s linear forwards;
}

.circle-animation {
  animation: circle 1s linear forwards;
}

.button-animation {
  animation: button 1s linear forwards;
}

@keyframes header {
  0% {
    top: -50%;
  }

  100% {
    opacity: 1;
    top: 0;
  }
}

@keyframes footer {
  0% {
    bottom: -50%;
  }

  100% {
    opacity: 1;
    bottom: 0;
  }
}

@keyframes main-content {
  0% {
    transform: rotateX(0);
  }

  100% {
    opacity: 1;
    transform: rotateX(360deg);
  }
}

@keyframes side-content {
  0% {
    transform: rotateY(0);
  }

  100% {
    opacity: 1;
    transform: rotateY(360deg);
  }
}

@keyframes circle {
  0% {
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(100%);
  }
}

@keyframes button {
  0% {
    transform: translateX(-50%) skew(90deg);
  }

  100% {
    opacity: 1;
    transform: translateX(-50%) skew(0);
  }
}
</style>
