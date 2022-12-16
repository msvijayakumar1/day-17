
let btn = document.getElementById("btn");
 btn.addEventListener("click", () => {

  let dis = document.getElementById("display");
  
  let func_1 = (a) => {
    setTimeout(() => {
      dis.innerText = a;
      func_3(a - 1);
    }, 1000);
  };
  let func_2 = (b) => {
    setTimeout(() => {
      dis.innerText = b;
      func_7(b - 1);
    }, 1000);
  };
  let func_3 = (c) => {
    setTimeout(() => {
      dis.innerText = c;
      func_9(c - 1);
    }, 1000);
  };
  let func_4 = (d) => {
    setTimeout(() => {
      dis.innerText = d;
      func_10(d - 1);
    }, 1000);
  };
  let func_5 = (e) => {
    setTimeout(() => {
      dis.innerText = e;
      func_8(e - 1);
    }, 1000);
  };
  let func_6 = () => {
    setTimeout(() => {
      dis.innerText = "Happy independence Day";
    }, 1000);
  };
  let func_7 = (g) => {
    setTimeout(() => {
      dis.innerText = g;
      func_11(g-1);
    }, 1000);
  };
  let func_8 = (h) => {
    setTimeout(() => {
      dis.innerText = h;
      func_1(h - 1);
    }, 1000);
  };
  let func_9 = (i) => {
    setTimeout(() => {
      dis.innerText = i;
      func_4(i - 1);
    }, 1000);
  };
  let func_10 = (j) => {
    setTimeout(() => {
      dis.innerText = j;
      func_2(j - 1);
    }, 1000);
  };
  let func_11 = (k) => {
    setTimeout(() => {
      dis.innerText = k;
      func_6();
    }, 1000);
  };
  func_5(10);
});