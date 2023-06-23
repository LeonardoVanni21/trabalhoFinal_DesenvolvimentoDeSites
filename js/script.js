var filename;

window.onload = function () {
  var url = window.location.pathname;
  filename = url.substring(url.lastIndexOf("/") + 1);
  var menu = document.getElementById("menu");

  if (filename == "imc.html") {
    menu.children[1].classList.add("active");
  } else if (filename == "calculadora.html") {
    menu.children[0].classList.add("active");
  } else if (filename == "json.html") {
    menu.children[2].classList.add("active");
  }
}

function redirectImc() {
  window.location.href = "imc.html";
}

function redirectCalculadora() {
  window.location.href = "calculadora.html";
}

function redirectJson() {
  window.location.href = "json.html";
}

$(document).keydown(function (event) {
  var key = event.key;
  if (key === "ArrowLeft") {
    if (filename == "imc.html") {
      redirectCalculadora();
    }
    if (filename == "json.html") {
      redirectImc();
    }
  }
});

$(document).keydown(function (event) {
  var key = event.key;
  if (key === "ArrowRight") {
    if (filename == "imc.html") {
      redirectJson();
    }
    if (filename == "calculadora.html") {
      redirectImc();
    }
  }
});
