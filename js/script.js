//embed de spotify

let playlist = [
  {
    nombre: "Oldies To Sing Out Loud",
    genero: "Clásicos",
    ruta: "https://open.spotify.com/embed/playlist/54gibrYeY2jqubh5Nuddqc?utm_source=generator",
  },
  {
    nombre: "Classical Music",
    genero: "Música Clásica",
    ruta: "https://open.spotify.com/embed/playlist/05GvxtaYflMggJW7NnF3Sd?utm_source=generator&theme=0",
  },
  {
    nombre: "Techno",
    genero: "EDM",
    ruta: "https://open.spotify.com/embed/playlist/3FqxgacGZOiEzFs5OsOZkJ?utm_source=generator",
  },
  {
    nombre: "Remember that song",
    genero: "90's Pop",
    ruta: "https://open.spotify.com/embed/playlist/1JDO6AyadSAHLAtwolMsRi?utm_source=generator&theme=0",
  },
  {
    nombre: "Songs to dream awake",
    genero: "Relax",
    ruta: "https://open.spotify.com/embed/playlist/6portF9PcmnHNi38FdVQdS?utm_source=generator&theme=0",
  },
  {
    nombre: "Musical Mood",
    genero: "Musicales & Peliculas",
    ruta: "https://open.spotify.com/embed/playlist/3e5CQ7rRHxOHRSQJxAGvNL?utm_source=generator&theme=0",
  },
  {
    nombre: "Spanish Hits",
    genero: "En Español",
    ruta: "https://open.spotify.com/embed/playlist/37kNvJJOhK6AXNa22Nkste?utm_source=generator&theme=0",
  },
];

function update() {
  let mainGenderinput = $("#genderFav :selected").text();
  if (mainGenderinput === "Clásicos") {
    document.getElementById("playlistsrc").src = playlist[0].ruta;
  } else if (mainGenderinput === "Música Clásica") {
    document.getElementById("playlistsrc").src = playlist[1].ruta;
  } else if (mainGenderinput === "EDM") {
    document.getElementById("playlistsrc").src = playlist[2].ruta;
  } else if (mainGenderinput === "90's Pop") {
    document.getElementById("playlistsrc").src = playlist[3].ruta;
  } else if (mainGenderinput === "Relax") {
    document.getElementById("playlistsrc").src = playlist[4].ruta;
  } else if (mainGenderinput === "Musicales & Peliculas") {
    document.getElementById("playlistsrc").src = playlist[5].ruta;
  } else if (mainGenderinput === "En Español") {
    document.getElementById("playlistsrc").src = playlist[6].ruta;
  }
}

update();

//REGISTRO & LOGIN

function store() {
  let nombre = document.getElementById("nombre");
  let pw = document.getElementById("pw");

  if (nombre.value.length == 0) {
    $(".popup").append(`<h3>Completa el campo email</h3>`);
    $("h3").fadeOut(1000);
  } else if (pw.value.length == 0) {
    $(".popup").append(`<h3>Completa el campo contraseña</h3>`);
    $("h3").fadeOut(1000);
  } else if (nombre.value.length == 0 && pw.value.length == 0) {
    $(".popup").append(`<h3>Por favor completa tu email y contraseña</h3>`);
    $("h3").fadeOut(1000);
  } else {
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("pw", pw.value);
    $(".popup").append(`<h3>Cuenta creada con exito!.</h3>`);
    $("h3").fadeOut(1000);
  }
}

//Buscar Usuario y Pass registrado

function check() {
  let storedNombre = localStorage.getItem("nombre");
  let storedPw = localStorage.getItem("pw");

  let usuario = document.getElementById("usuario");
  let usuarioPw = document.getElementById("usuarioPw");

  if (usuario.value == storedNombre && usuarioPw.value == storedPw) {
    $(".popup").append(`<h3>Bienvenido ${storedNombre}!</h3>`);
    $("h3").fadeOut(3000);
    $(".displayUser").append(`<h3>${storedNombre}</h3>`);
  } else {
    $(".popup").append(`<h3>Usuario no encotrado, registrate!.</h3>`);
    $("h3").fadeOut(1000);
  }
}

//Log Out y Clear SS

function clearss() {
  localStorage.clear();
}

//Top 10

const URL = "http://127.0.0.1:5500/js/top10.json";

$.get(URL, function (respuesta, estado) {
  if (estado == "success") {
    let misDatos = respuesta;
    for (const dato of misDatos) {
      $(".top-10").append(`
      <h5>${dato.puesto}</h5>
      <iframe
        id="top10-song"
        src="${dato.ruta}"
        width="100%"
        height="80"
        frameborder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
                `);
    }
    $("h5").css({
      "font-size": "5rem",
      "background-color": "black",
      color: "white ",
    });
  }
});

//Menu hamburguesa en mobile

const body = document.body;

const hamburgerToggler = document.querySelector(".toggler");

hamburgerToggler.addEventListener("change", (e) => {
  e.target.checked
    ? (body.style.overflowY = "hidden")
    : (body.style.overflowY = "scroll");
});

//Reproductor

const playCancion = document.getElementsByClassName("play");
const stopCancion = document.getElementsByClassName("stop");
const volumen = document.querySelector(".volumen");

let audio;

for (elemento of playCancion) {
  elemento.addEventListener("click", function () {
    let cancion = this.getAttribute("id");
    audio = new Audio(`../assets/canciones/${cancion}.mp3`);
    audio.play();
  });
}

for (elemento of stopCancion) {
  elemento.addEventListener("click", function () {
    audio.pause();
  });
}
