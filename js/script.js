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
  //algo de JQuery
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

//formulario con jquery

$(".formulario").prepend(`
<form id="myForm">
Nombre
<input type="text">
Mail
<input type="text">
<input class="form-btn" type="submit">
</form>`);
$("#myForm").submit(function (e) {
  e.preventDefault();
  let hijos = $(e.target).children();
  console.log(hijos[0].value);
  console.log(hijos[1].value);
});

//lista
