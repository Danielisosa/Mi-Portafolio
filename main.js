$(document).ready(() => {
  let titulo1 = "Danieli Sosa";
  let titulo2 = "Frontend Developer Jr.";

  //funcion para hacer el texto corrido
  let writing = (str) => {
    let arrText = str.split("");
    let escribiendo = "";
    $(".text-corrido1").html("");
    let i = 0;
    let printStr = setInterval(() => {
      escribiendo += arrText[i];
      $(".text-corrido1").html(escribiendo + "|");

      i++;
      if (i === arrText.length) {
        clearInterval(printStr);
        setTimeout(() => {
          $(".text-corrido1").html("");
          escribiendo = "";
          i = 0;
          writing2(titulo2);
        }, 2000);

        let writing2 = (str2) => {
          let arrText2 = str2.split("");
          $(".text-corrido2").html("");
          let printStr2 = setInterval(() => {
            escribiendo += arrText2[i];
            $(".text-corrido2").html(escribiendo + "|");

            i++;
            if (i === arrText2.length) {
              clearInterval(printStr2);
              setTimeout(() => {
                $(".text-corrido2").html("");
                escribiendo = "";
                i = 0;
                writing(titulo1);
              }, 1000);
            }
          }, 80);
        };
      }
    }, 80);
  };

  writing(titulo1);

  //funcion para activar el menu de navegacion en pantallas moviles y cambiar los colores del nav
  $(".panel-btn").click(function () {
    $(".panel-btn").toggleClass("open");
    $(".menu").toggleClass("active");
    $(".cont-nav").css("background", "rgb(255, 255, 255)").fadeIn("2000");
    $(".text-nav").css("color", "rgb(37, 37, 37)");
    $("#ico-logo").css("color", "rgb(37, 37, 37)");
  });

  $(".text-nav").click(function () {
    $(".menu").toggleClass("active");
  });

  //funcion para hacer la animacion de aparecer el boton flecha cuando se haga scroll a la pagina y cambiar el color del nav
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".cont-nav").css("background", "rgb(255, 255, 255)").fadeIn("2000");
      $(".text-nav").css("color", "rgb(37, 37, 37)");
      $("#ico-logo").css("color", "rgb(37, 37, 37)");

      $("#subir").slideDown(200);
    } else {
      $("#subir").css("display", "none");
      $(".cont-nav").css("background", "none");
      $(".text-nav").css("color", "white");
      $("#ico-logo").css("color", "white");
    }

    if ($(this).scrollTop() >= 250) {
      $("#cont-about").addClass("animate fadeIn");
    }
  });
});

//funcion hacer subir la pagina al inicio con el boton de la flecha
$("#subir").click(function () {
  $("body, html").animate(
    {
      scrollTop: "0px",
    },
    300
  );
});
