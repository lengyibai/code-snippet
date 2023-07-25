import { DirectiveBinding } from "vue";
const waveDiffuse = {
  mounted(el: HTMLElement, { value = "#ccc" }) {
    el.style.cssText = `
      overflow: hidden;
    `;
    const style = `
      position: absolute;
      background-color: ${value};
      transform: translate(-50%, -50%);
      pointer-events: none;
      border-radius: 50%;
      width: 0;
      height: 0;
      transition: all 1s linear;
    `;
    el.addEventListener("mousedown", function (e: MouseEvent) {
      const v = e.target as HTMLInputElement;
      const c = document.createElement("span");
      c.style.cssText = style;
      const x = e.clientX - v.getBoundingClientRect().left;
      const y = e.clientY - v.getBoundingClientRect().top;
      c.style.left = x + "px";
      c.style.top = y + "px";
      this.appendChild(c);
      const width = v.offsetWidth;
      const height = v.offsetHeight;
      const size = width > height ? width : height;
      c.style.width = `${size * 5}px`;
      c.style.height = `${size * 5}px`;
      function fn() {
        c.style.transition = "all 0.675s ease-out";
        c.style.opacity = "0";
        setTimeout(() => {
          c.remove();
        }, 675);
      }
      el.addEventListener("mouseup", fn);
      el.addEventListener("mouseleave", fn);
    });
  },
};

const textHoverColor = {
  mounted(el: HTMLElement, { value = "black" }) {
    // 需要给父盒子加相对定位或绝对定位
    const mask = document.createElement("div");
    const line = document.createElement("div");
    mask.innerHTML = el.innerHTML;
    mask.style.cssText = `
      z-index: 9;
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      background-color: ${value};
      transition: all 0.35s;
      text-shadow: initial;
      -webkit-background-clip: text;
      clip-path: circle(75% at 50% 50%);
    `;
    const line_height = el.offsetHeight / 15;
    line.style.cssText = `
      z-index: 9;
      position: absolute;
      width: 0%;
      height: ${line_height}px;
      bottom: 0;
      color: transparent;
      background-color: #2980b9;
      transition: all 0.35s;
      left: 50%;
      transform: translate(-50%,0);
      border-radius: ${line_height}px;
    `;
    window.addEventListener("resize", () => {
      const line_height = el.offsetHeight / 20;
      line.style.height = line_height + "px";
      line.style.borderRadius = line_height + "px";
    });

    el.appendChild(mask);
    el.appendChild(line);
    el.addEventListener("mouseenter", () => {
      mask.style.clipPath = "circle(0% at 50% 50%)";
      line.style.width = "100%";
    });
    el.addEventListener("mouseleave", () => {
      mask.style.clipPath = "circle(75% at 50% 50%)";
      line.style.width = "0%";
    });
  },
};

const typewriterSingle = {
  mounted(el: HTMLElement) {
    let lib = el;
    let cursor_timer: any = null; //光标计时器，需要被其它函数调用，所以声明在全局作用域

    function cursor() {
      clearInterval(cursor_timer); //调用前清除光标计时器
      cursor_timer = setInterval(() => {
        lib.classList.toggle("cursor"); //光标闪烁
      }, 500);
    }

    let say = lib.innerHTML;
    function again() {
      lib.innerHTML = "";
      let timer;
      let says = say; //用于删除
      let num = 0, //用于累加遍历字符串
        text = ""; //用于输出在屏幕上
      lib.innerHTML = "";
      timer = setInterval(() => {
        clearInterval(cursor_timer); //禁止光标闪烁
        lib.classList.add("cursor");
        text += say[num]; //遍历输出的文字
        lib.innerHTML = text; //输出在屏幕上
        num++;

        if (num >= say.length) {
          //如果文字输出完毕
          cursor(); //调用光标闪烁
          clearInterval(timer); //清除用于输出文字的计时器
          setTimeout(() => {
            //文字显示完三秒后
            clearInterval(cursor_timer); //禁止光标闪烁
            let delText_timer = setInterval(() => {
              //开始调用删除文字的计时器
              says = says.substr(0, says.length - 1); //逐个清除末尾文字
              lib.innerHTML = says; //每次删除一个字，输出在屏幕上
              if (says.length <= 0) {
                //如果删除完毕
                clearInterval(delText_timer); //清除用于删除文字的计时器
                cursor(); //调用光标闪烁
                setTimeout(() => {
                  again(); //循环上面的过程
                }, 1000);
              }
            }, 100);
          }, 2000);
        }
      }, 100);
    }
    again();
  },
};

const typewriterMultiple = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const say = el.innerHTML;
    el.innerHTML = "";
    setTimeout(() => {
      let timer: any;
      let num = 0, //用于累加遍历字符串
        text = ""; //用于输出在屏幕上
      fn();
      function fn() {
        timer = setInterval(() => {
          if (num >= say.length) {
            //如果文字输出完毕
            clearInterval(timer); //清除用于输出文字的计时器
            binding.value && binding.value();
            return;
          }
          text += say[num]; //遍历输出的文字
          el.innerHTML = text; //输出在屏幕上
          if ("，、。？！".includes(say[num])) {
            clearInterval(timer); //清除用于输出文字的计时器
            setTimeout(
              () => {
                fn();
              },
              "，" === say[num]
                ? 500
                : "、" === say[num]
                ? 250
                : "。？！" === say[num]
                ? 1000
                : 500
            );
          }
          num++;
        }, 100);
      }
    }, 750);
  },
};

function $random(min = 0, max = 1, num = 0) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(num));
}
const particle = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const {
      color = "#cfb45c",
      size = 10,
      brightness = 1.3,
      contrast = 1.1,
      filter = true,
      num = 35,
      down = false,
    } = binding.value || {};
    setTimeout(() => {
      const box = el;
      const box_width = box.offsetWidth;
      const box_height = box.offsetHeight;

      if (down) {
        document.styleSheets[0].insertRule(
          `
      @keyframes particle-rise-${box_height} {
        0% {
          transform: translateY(-${box_height}px) translateZ(0);
          opacity: 0;
        }
        50% {
          transform: translateY(${box_height / 2}px) translateZ(0);
          opacity: 1;
        }
        100% {
          transform: translateY(${box_height}px) translateZ(0);
          opacity: 0;
        }
      }
      `,
          document.styleSheets[0].cssRules.length
        );
      } else {
        document.styleSheets[0].insertRule(
          `
        @keyframes particle-rise-${box_height} {
          0% {
            transform: translateY(0px) translateZ(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-${box_height / 2}px) translateZ(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-${box_height}px) translateZ(0);
            opacity: 0;
          }
        }
        `,
          document.styleSheets[0].cssRules.length
        );
      }
      for (let i = 0; i < num; i++) {
        const p = document.createElement("span");

        const style = `
      position: absolute;
      background-color: ${color};
      pointer-events: none;
      width: ${size}px;
      height: ${size}px;
      bottom: 0;
      opacity: 0;
      box-shadow: 0 0 10px 0 ${color};
      filter: brightness(200%);
      `;
        const left = $random(0, box_width - size);
        const scale = $random(0.25, 0.75, 1);
        const time = $random(1, 3, 1);
        const delay = $random(0, 5, 1);
        p.style.cssText = style;
        p.style.left = `${left}px`;
        p.style.scale = scale.toString();
        p.style.animation = `particle-rise-${box_height} ${time}s linear infinite`;
        p.style.animationDelay = delay + "s";

        box.appendChild(p);
      }
    }, 1000);

    if (filter) el.style.transition = "all 0.25s";
    el.addEventListener("mouseenter", () => {
      if (!filter) return;
      el.style.filter = `brightness(${brightness * 100}%) contrast(${
        contrast * 100
      }%)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.filter = "";
    });
  },
};

const snowFalling = {
  mounted(el: HTMLElement) {
    function $random(min, max, num = 0) {
      return parseFloat((Math.random() * (max - min) + min).toFixed(num));
    }

    const lib = el;
    let particle: string[] = [];

    for (let i = 0; i < document.documentElement.offsetWidth / 15; i++) {
      particle.push('<div class="particle"></div>');
    }

    function update() {
      lib.innerHTML = "";
      lib.innerHTML = particle.join(" "); //join转换成字符串
      let left: number, size: number;
      const particles: NodeListOf<HTMLElement> =
        lib.querySelectorAll(".particle");
      particles.forEach((item) => {
        size = $random(100, 200);
        item.style.cssText = `
          --LibSnowFalling-left: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: ${document.documentElement.offsetWidth / size}px;
          height: ${document.documentElement.offsetWidth / size}px;
          animation: LibSnowFalling var(--LibSnowFalling-time) infinite linear;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          pointer-events: none;
          background-color: #fff;
          border-radius: 50%;
        `;
        left = $random(0, document.documentElement.offsetWidth);

        item.style.transform = `translateX(${left}px) translateY(-200%)`;
        item.style.setProperty("--LibSnowFalling-left", left + "px");
        item.style.setProperty("--LibSnowFalling-time", $random(3, 5, 1) + "s");
        item.style.animationDelay = $random(0, 10, 1) + "s";
      });
    }
    window.addEventListener("resize", update);
    update();
  },
};

const parallaxVideo = {
  mounted(el: HTMLElement, { value = 2 }) {
    el.style.cssText = `
      position: absolute;
      pointer-events: none;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      transition: all 0.25s ease-out;
    `;
    /* 灵敏度三级 */
    const sensitivity = [
      [15, 1.1],
      [10, 1.225],
      [5, 1.35],
    ];
    // 当前灵敏度为最高
    const multiple = sensitivity[value][0];
    function transformElement(x, y) {
      let box = el.getBoundingClientRect();
      let calcY = (box.height / 2 - (y - box.y)) / multiple;
      let calcX = (box.width / 2 - (x - box.x)) / multiple;
      el.style.transform = `translateY(${calcY}px) translateX(${calcX}px) scale(${sensitivity[value][1]})`;
    }
    el.parentElement!.addEventListener("mousemove", (e) => {
      requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
      });
    });
  },
};

const parallaxImg = {
  mounted(el: HTMLElement) {
    el.style.cssText = `
      position: absolute;
      pointer-events: none;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      transition: all 0.25s ease-out;
    `;
    /* 灵敏度三级 */
    const size = [
      [15, 1.1],
      [10, 1.225],
      [5, 1.35],
    ];
    // 当前灵敏度为中等
    const multiple = size[1][0];
    function transformElement(x, y) {
      let box = el.getBoundingClientRect();
      let calcY = (box.height / 2 - (y - box.y)) / multiple;
      let calcX = (box.width / 2 - (x - box.x)) / multiple;
      el.style.transform = `translateY(${calcY}px) translateX(${calcX}px) scale(${size[1][1]})`;
    }
    el.parentElement!.addEventListener("mousemove", (e) => {
      requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
      });
    });
  },
};

const sweepLight = {
  mounted(el: HTMLElement, binding) {
    const { auto = true, time = 1 } = binding.value || {};
    setTimeout(() => {
      const a = auto !== false;
      const light = document.createElement("div");
      el.style.position = "relative";
      light.style.cssText = `
      position: absolute;
      top: 0px;
      left: 0px;
      width: ${el.offsetWidth / 3}px;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      transform: skewX(45deg) translateX(${el.offsetWidth * 1.5}px);
      transition: all ${time}s;
      filter: blur(5px)
    `;
      el.appendChild(light);
      if (a) {
        light.style.transform = `skewX(45deg) translateX(${
          -el.offsetWidth * 1.5
        }px)`;
      } else {
        el.addEventListener("mouseenter", () => {
          light.style.transform = `skewX(45deg) translateX(${
            -el.offsetWidth * 0.75
          }px)`;
        });

        el.addEventListener("mouseleave", () => {
          light.style.transform = `skewX(45deg) translateX(${
            el.offsetWidth * 1.5
          }px)`;
        });
      }
    });
  },
};

const downDrag = {
  mounted(el: HTMLElement) {
    el.style.cursor = "move";
    let x = 0,
      y = 0,
      startX = 0,
      startY = 0,
      moveX = 0,
      moveY = 0;
    el.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      x = e.pageX;
      y = e.pageY;
      startX = el.offsetLeft;
      startY = el.offsetTop;
      window.addEventListener("mousemove", fn);
      function fn(e) {
        requestAnimationFrame(function () {
          moveX = e.pageX - x;
          moveY = e.pageY - y;
          el.style.left = `${moveX + startX}px`;
          el.style.top = `${moveY + startY}px`;
        });
      }
      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", fn);
      });
    });

    el.addEventListener("touchstart", (e) => {
      e.stopPropagation();
      x = e.changedTouches[0].pageX;
      y = e.changedTouches[0].pageY;
      startX = el.offsetLeft;
      startY = el.offsetTop;
      window.addEventListener("touchmove", fn);
      function fn(e: TouchEvent) {
        requestAnimationFrame(function () {
          moveX = e.changedTouches[0].pageX - x;
          moveY = e.changedTouches[0].pageY - y;
          el.style.left = `${moveX + startX}px`;
          el.style.top = `${moveY + startY}px`;
        });
      }
      window.addEventListener("touchend", () => {
        window.removeEventListener("touchmove", fn);
      });
    });
  },
};

const maskGradient = {
  mounted(el: HTMLElement, binding) {
    const {
      color = "rgba(0, 0, 0, 0.75)",
      rotate = "0deg",
      num1 = "0%",
      num2 = "50%",
    } = binding.value || {};
    const mask = document.createElement("div");
    mask.style.cssText = `
    position: absolute;
    inset:0;
    background-image: linear-gradient(${rotate}, ${color} ${num1}, transparent ${num2});
    pointer-events: none;
    `;
    el.appendChild(mask);
  },
};

const tableLayout = {
  mounted(el: HTMLElement, { value }) {
    el.style.cssText = `
      border-collapse: collapse;
    `;
    [...el.querySelectorAll("td")].forEach((item, index) => {
      item.style.wordBreak = "break-all";
      item.style.textAlign = index % 2 ? value[1] : value[0];
    });
  },
};

const dragFile = {
  mounted(el: HTMLElement, { value }) {
    el.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    el.addEventListener("drop", (e) => {
      e.preventDefault();
      let file = [...e.dataTransfer!.items].map((item) => {
        if (item.kind === "file") {
          return item.getAsFile();
        }
      });
      value(file);
    });
  },
};

const viewImg = {
  mounted(el: HTMLElement) {
    el.addEventListener("click", (e) => {
      new Lyb(e.target);
    });
    const svg = {
      CLOSE: `<svg t="1662135922951" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2662"><path d="M1022.583467 127.803733 894.779733 0 511.291733 383.4624 127.8464 0 0 127.803733 383.496533 511.274667 0 894.737067 127.8464 1022.5408 511.291733 639.0784 894.779733 1022.5408 1022.583467 894.737067 639.138133 511.274667Z" p-id="2663" fill="#ffffff"></path></svg>`,
      CLOCKWISE: `<svg t="1662135824052" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1399"><path d="M482.773333 66.517333l148.181334 151.168a21.333333 21.333333 0 0 1 0 29.866667l-147.84 150.826667a21.333333 21.333333 0 0 1-28.16 2.090666l-2.346667-2.090666-27.050667-27.605334a21.333333 21.333333 0 0 1 0-29.866666l69.888-71.338667a304.64 304.64 0 1 0 318.421334 352.682667l1.024-6.826667c0.170667-1.408 0.426667-3.285333 0.64-5.632a21.333333 21.333333 0 0 1 22.314666-19.114667l42.666667 2.261334a21.333333 21.333333 0 0 1 20.224 22.4l-0.085333 1.024-1.194667 10.496A389.973333 389.973333 0 1 1 484.821333 184.746667l-59.306666-60.458667a21.333333 21.333333 0 0 1 0-29.866667l27.093333-27.605333a21.333333 21.333333 0 0 1 30.165333-0.298667z" p-id="1400" fill="#ffffff"></path></svg>`,
      COUNTER: `<svg t="1662135840330" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1590"><path d="M541.226667 66.517333L393.045333 217.685333a21.333333 21.333333 0 0 0 0 29.866667l147.84 150.826667a21.333333 21.333333 0 0 0 28.16 2.090666l2.346667-2.090666 27.050667-27.605334a21.333333 21.333333 0 0 0 0-29.866666l-69.888-71.338667a304.64 304.64 0 1 1-318.421334 352.682667l-1.024-6.826667a176.554667 176.554667 0 0 1-0.64-5.632 21.333333 21.333333 0 0 0-22.314666-19.114667l-42.666667 2.261334a21.333333 21.333333 0 0 0-20.224 22.4l0.085333 1.024 1.194667 10.496A389.973333 389.973333 0 1 0 539.178667 184.746667l59.306666-60.458667a21.333333 21.333333 0 0 0 0-29.866667l-27.093333-27.605333a21.333333 21.333333 0 0 0-30.165333-0.298667z" p-id="1591" fill="#ffffff"></path></svg>`,
    };
    class Lyb {
      x = 0;
      y = 0;
      size = 1;
      rotate = 0;
      status = 0;
      transform = "";
      origin = [0, 0];
      position = [0, 0];
      pic: HTMLElement;
      tool: HTMLElement;
      mask: HTMLElement;
      boxDom: HTMLElement;
      counter: HTMLElement;
      closeBtn: HTMLElement;
      clonedBox: HTMLElement;
      clockwise: HTMLElement;
      constructor(el) {
        document.body.style.overflow = "hidden";
        this.boxDom = el;
        this.createdMask();
        this.createPic();
        this.createBtn();
        this.createCloseBtn();
        if (this.boxDom.tagName !== "IMG") return;
        this.initImg();
        this.addEventListener();
      }
      createdMask() {
        this.mask = document.createElement("div");
        this.mask.style.cssText = ` display: none; position: fixed; inset: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.75); transition: all 0.25s; opacity: 0; z-index: 999; `;
        document.body.appendChild(this.mask);
      }
      createPic() {
        this.pic = document.createElement("div");
        this.pic.style.cssText = ` position: fixed; inset: 0; width: 100%; height: 100%; transition: all 0.25s; z-index: 1000; display: none; transform: scale(0.75); opacity: 0; `;
        document.body.appendChild(this.pic);
      }
      createBtn() {
        this.tool = document.createElement("div");
        this.clockwise = document.createElement("div");
        this.counter = document.createElement("div");
        this.tool.style.cssText = ` position: fixed; display: none; justify-content: space-between; width: 110px; left: 50%; bottom: 30px; transform: translateX(-50%); background-color: #606266; border-radius: 50px; z-index: 1001; padding: 10px 23px; opacity: 0; transition: all 0.25s; `;
        const base = `width: 23px; height: 23px; `;
        this.clockwise.style.cssText = base;
        this.counter.style.cssText = base;
        this.clockwise.innerHTML = svg.CLOCKWISE;
        this.counter.innerHTML = svg.COUNTER;
        this.tool.appendChild(this.counter);
        this.tool.appendChild(this.clockwise);
        document.body.appendChild(this.tool);
        this.clockwise.addEventListener("click", (e) => {
          e.stopPropagation();
          this.setPosition("clockwise");
        });
        this.counter.addEventListener("click", (e) => {
          e.stopPropagation();
          this.setPosition("counter");
        });
      }
      createCloseBtn() {
        this.closeBtn = document.createElement("div");
        this.closeBtn.innerHTML = svg.CLOSE;
        this.closeBtn.style.cssText = ` position: fixed; display: none; top: 60px; right: 60px; width: 40px; height: 40px; z-index: 1001; padding: 11px; background-color: #606266; transition: all 0.25s; opacity: 0; border-radius: 50%; `;
        document.body.appendChild(this.closeBtn);
      }
      initImg() {
        this.clonedBox = this.boxDom.cloneNode(true) as HTMLElement;
        this.clonedBox.style.cssText = ` position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); max-width: 100%; max-height: 100%; object-fit: contain; transition: all 0.25s; `;
        this.pic.appendChild(this.clonedBox);
        this.pic.style.display = "block";
        this.mask.style.display = "block";
        this.tool.style.display = "flex";
        this.closeBtn.style.display = "block";
        setTimeout(() => {
          this.mask.style.opacity = "1";
          this.pic.style.opacity = "1";
          this.pic.style.transform = "scale(1)";
          this.tool.style.opacity = "1";
          this.closeBtn.style.opacity = "1";
          this.origin = [
            this.clonedBox.offsetWidth / 2,
            this.clonedBox.offsetHeight / 2,
          ];
        });
      }
      setPosition(name) {
        const obj = {
          clockwise() {
            this.rotate += 90;
            this.status++;
          },
          counter() {
            this.rotate -= 90;
            this.status--;
          },
        };
        obj[name].call(this);
        this.setStyle();
      }
      setStyle() {
        this.clonedBox.style.transform = `translate(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px)) rotate(${this.rotate}deg) scale(${this.size})`;
        this.clonedBox.style.transformOrigin = `${this.origin[0]}px ${this.origin[1]}px`;
      }
      addEventListener() {
        this.pic.addEventListener("mousewheel", this.wheel.bind(this));
        this.clonedBox.addEventListener("click", (e) => {
          e.stopPropagation();
        });
        this.closeBtn.addEventListener("click", this.close.bind(this));
        this.pic.addEventListener("click", this.close.bind(this));
        const _this = this;
        let startX = 0;
        let startY = 0;
        let moveX = 0;
        let moveY = 0;
        let originX = 0;
        let originY = 0;
        function fn(e) {
          const status = _this.status;
          if (status % 4 === 0) {
            _this.x = moveX + (e.pageX - startX) / _this.size;
            _this.y = moveY + (e.pageY - startY) / _this.size;
            _this.origin[0] = originX - (e.pageX - startX) / _this.size;
            _this.origin[1] = originY - (e.pageY - startY) / _this.size;
          }
          if (status % 4 === 1 || status % 4 === -3) {
            _this.x = moveX + (e.pageY - startY) / _this.size;
            _this.y = moveY - (e.pageX - startX) / _this.size;
            _this.origin[0] = originX - (e.pageY - startY) / _this.size;
            _this.origin[1] = originY + (e.pageX - startX) / _this.size;
          }
          if (status % 4 === 2 || status % 4 === -2) {
            _this.x = moveX - (e.pageX - startX) / _this.size;
            _this.y = moveY - (e.pageY - startY) / _this.size;
            _this.origin[0] = originX + (e.pageX - startX) / _this.size;
            _this.origin[1] = originY + (e.pageY - startY) / _this.size;
          }
          if (status % 4 === 3 || status % 4 === -1) {
            _this.x = moveX - (e.pageY - startY) / _this.size;
            _this.y = moveY + (e.pageX - startX) / _this.size;
            _this.origin[0] = originX + (e.pageY - startY) / _this.size;
            _this.origin[1] = originY - (e.pageX - startX) / _this.size;
          }
          _this.setStyle();
        }
        this.clonedBox.addEventListener("mousedown", (e) => {
          e.preventDefault();
          startX = e.pageX;
          startY = e.pageY;
          moveX = this.x;
          moveY = this.y;
          originX = this.origin[0];
          originY = this.origin[1];
          this.clonedBox.style.transition = "all 0s";
          this.clonedBox.addEventListener("mousemove", fn);
        });
        this.clonedBox.addEventListener("mouseup", () => {
          this.clonedBox.style.transition = "all 0.25s";
          this.clonedBox.removeEventListener("mousemove", fn);
        });
      }
      wheel(e) {
        if (e.deltaY > 0) {
          this.size /= 1.25;
          if (this.size < 0.1) this.size = 0.1;
        } else {
          this.size *= 1.25;
        }
        this.setStyle();
      }
      close() {
        document.body.style.overflow = "auto";
        this.pic.removeEventListener("mousewheel", this.wheel.bind(this));
        this.mask.style.opacity = "0";
        this.tool.style.opacity = "0";
        this.closeBtn.style.opacity = "0";
        this.pic.style.opacity = "0";
        this.pic.style.transform = "scale(0.75)";
        setTimeout(() => {
          this.mask.style.display = "none";
          this.tool.style.display = "none";
          this.pic.style.display = "none";
          this.pic.innerHTML = "";
          this.closeBtn.style.display = "none";
        }, 250);
      }
    }
  },
};

export default {
  waveDiffuse,
  textHoverColor,
  typewriterSingle,
  typewriterMultiple,
  particle,
  snowFalling,
  parallaxVideo,
  parallaxImg,
  sweepLight,
  downDrag,
  maskGradient,
  tableLayout,
  dragFile,
  viewImg,
};
