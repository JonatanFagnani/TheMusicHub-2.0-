//Menu hamburguesa en mobile

const body = document.body;

const hamburgerToggler = document.querySelector(".toggler");

hamburgerToggler.addEventListener("change", (e) => {
  e.target.checked
    ? (body.style.overflowY = "hidden")
    : (body.style.overflowY = "scroll");
});

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
    alert("Completa el campo email");
  } else if (pw.value.length == 0) {
    alert("Completa el campo contraseña");
  } else if (nombre.value.length == 0 && pw.value.length == 0) {
    alert("Por favor completa tu email y contraseña");
  } else {
    sessionStorage.setItem("nombre", nombre.value);
    sessionStorage.setItem("pw", pw.value);
    alert("Cuenta creada con exito!");
  }
}

//Buscar Usuario y Pass registrado
function check() {
  let storedNombre = sessionStorage.getItem("nombre");
  let storedPw = sessionStorage.getItem("pw");

  let usuario = document.getElementById("usuario");
  let usuarioPw = document.getElementById("usuarioPw");

  if (usuario.value == storedNombre && usuarioPw.value == storedPw) {
    alert(`Bienvenido ${storedNombre}!`);
  } else {
    alert("Usuario no encotrado, registrate!.");
  }
}

//Log Out y Clear SS

function clearss() {
  sessionStorage.clear();
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
