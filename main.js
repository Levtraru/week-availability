// Toggle between available, unavailable and undecided classes on click
cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // Disables function for cells with the class 'day'
    if (!cell.classList.contains("day")) {
      // Toggles undecided from available
      if (cell.classList.contains("available")) {
        cell.classList.toggle("available");
        cell.classList.toggle("undecided");
      // Toggles unavailable from undecided
      } else if (cell.classList.contains("undecided")) {
        cell.classList.toggle("undecided");
        cell.classList.toggle("unavailable");
      // Toggles blank from unavailable
      } else if (cell.classList.contains("unavailable")) {
        cell.classList.toggle("unavailable");
        cell.classList.toggle("blank");
      // Toggles available from blank
      } else {
        cell.classList.toggle("blank");
        cell.classList.toggle("available");
      }
    }
  });
});

/* =========================================================================================== */

// Toggle between dark and light mode
const body = document.querySelector("body");
const themeToggle = document.getElementById("toggle-dark");
const root = document.querySelector(":root");

themeToggle.addEventListener("click", () => {
  themeToggle.classList.toggle('fa-moon');
  themeToggle.classList.toggle('fa-sun');
  if (themeToggle.classList.contains("fa-sun")) {
    root.style.setProperty('--black', '#eee');
    root.style.setProperty('--white', '#111');
    root.style.setProperty('--light-gray', '#222');
    root.style.setProperty('--dark-gray', '#bbb');
  } else {
    root.style.setProperty('--black', '#111');
    root.style.setProperty('--white', '#eee');
    root.style.setProperty('--light-gray', '#bbb');
    root.style.setProperty('--dark-gray', '#222');
  }
});

/* =========================================================================================== */

/**
 * Toggles between English and Spanish when language button is clicked
*/
function langChange(){
  langBtn.classList.toggle("en-lang");
  langBtn.classList.toggle("es-lang");
  if (langBtn.classList.contains("en-lang")){
    setSpanish();
  } else {
    setEnglish();
  }
};

/* =========================================================================================== */

/**
 * Translates the contents of the page to Spanish
*/
divs  = document.querySelectorAll("div");
langBtn = document.getElementById("lang-change");

function setSpanish(){
  divs.forEach((div) => {
    // Translates Title
    if (div.innerHTML == "Week Availability"){
      div.innerHTML = "Disponibilidad Semanal"
    }

    /* ==== Translates info ==== */
    else if (div.innerHTML == "<b>Click</b> any moment of the day to <b>toggle</b> through these states:"){
      div.innerHTML = "<b>Clickea</b> cualquier momento del dia para <b>alternar</b> entre estos estados:"
    }
    else if (div.innerHTML == "Available"){
      div.innerHTML = "Disponible"
    }
    else if (div.innerHTML == "Undecided"){
      div.innerHTML = "Indeciso"
    }
    else if (div.innerHTML == "Unavailable"){
      div.innerHTML = "Ocupado"
    }

    /* ==== Translates days of the week ==== */
    else if (div.innerHTML == "Sunday"){
      div.innerHTML = "Domingo"
    }
    else if (div.innerHTML == "Monday"){
      div.innerHTML = "Lunes"
    }
    else if (div.innerHTML == "Tuesday"){
      div.innerHTML = "Martes"
    }
    else if (div.innerHTML == "Wednesday"){
      div.innerHTML = "Miércoles"
    }
    else if (div.innerHTML == "Thursday"){
      div.innerHTML = "Jueves"
    }
    else if (div.innerHTML == "Friday"){
      div.innerHTML = "Viernes"
    }
    else if (div.innerHTML == "Saturday"){
      div.innerHTML = "Sábado"
    }

    /* ==== Translates moments of the day ==== */
    else if (div.innerHTML == "Morning <br> (6:00 - 12:00)"){
      div.innerHTML = "Mañana <br> (6:00 - 12:00)"
    }
    else if (div.innerHTML == "Noon <br> (12:00 - 15:00)"){
      div.innerHTML = "Mediodía <br> (12:00 - 15:00)"
    }
    else if (div.innerHTML == "Afternoon <br> (15:00 - 20:00)"){
      div.innerHTML = "Tarde <br> (15:00 - 20:00)"
    }
    else if (div.innerHTML == "Night <br>(20:00 - 02:00)"){
      div.innerHTML = "Noche <br>(20:00 - 02:00)"
    }
  });
};

/**
 * Translates the contents of the page to English
*/
function setEnglish(){
  divs.forEach((div) => {
    // Translates Title
    if (div.innerHTML == "Disponibilidad Semanal"){
      div.innerHTML = "Week Availability"
    }

    /* ==== Translates info ==== */
    else if (div.innerHTML == "<b>Clickea</b> cualquier momento del dia para <b>alternar</b> entre estos estados:"){
      div.innerHTML = "<b>Click</b> any moment of the day to <b>toggle</b> through these states:"
    }
    else if (div.innerHTML == "Disponible"){
      div.innerHTML = "Available"
    }
    else if (div.innerHTML == "Indeciso"){
      div.innerHTML = "Undecided"
    }
    else if (div.innerHTML == "Ocupado"){
      div.innerHTML = "Unavailable"
    }

    /* ==== Translates days of the week ==== */
    else if (div.innerHTML == "Domingo"){
      div.innerHTML = "Sunday"
    }
    else if (div.innerHTML == "Lunes"){
      div.innerHTML = "Monday"
    }
    else if (div.innerHTML == "Martes"){
      div.innerHTML = "Tuesday"
    }
    else if (div.innerHTML == "Miércoles"){
      div.innerHTML = "Wednesday"
    }
    else if (div.innerHTML == "Jueves"){
      div.innerHTML = "Thursday"
    }
    else if (div.innerHTML == "Viernes"){
      div.innerHTML = "Friday"
    }
    else if (div.innerHTML == "Sábado"){
      div.innerHTML = "Saturday"
    }

    /* ==== Translates moments of the day ==== */
    else if (div.innerHTML == "Mañana <br> (6:00 - 12:00)"){
      div.innerHTML = "Morning <br> (6:00 - 12:00)"
    }
    else if (div.innerHTML == "Mediodía <br> (12:00 - 15:00)"){
      div.innerHTML = "Noon <br> (12:00 - 15:00)"
    }
    else if (div.innerHTML == "Tarde <br> (15:00 - 20:00)"){
      div.innerHTML = "Afternoon <br> (15:00 - 20:00)"
    }
    else if (div.innerHTML == "Noche <br>(20:00 - 02:00)"){
      div.innerHTML = "Night <br>(20:00 - 02:00)"
    }
  });
};