function createGame(player1, hour, player2, group){
  return `
  <li> 
         <div>
           <p class="group">Grupo ${group}</p>
           </div>
           <div class="container">
           <div class="team-container">
           <img src="./assets/icon-${player1}.svg" title="${player1}" alt="${player1}">
           <p>${player1}</p>
           </div>
           <strong>${hour}</strong>
          <div class="team-container">
         <img src="./assets/icon-${player2}.svg" title="${player2}" alt="${player2}">
        <p>${player2}</p>
      </div>
    </div>
  </li>
  `
}

function cardNotification(){

  return  `  
      <div class="">
                <div class="alarm-container">
                  <h1>00:00:00 PM</h1>
                    <div class="content">
                      <div class="alarm-controls">
                    <select>
                        <option value="Hour" selected disabled hidden> Horas </option>
                    </select>
                   </div>

                   <div class="alarm-controls">
                    <select>
                        <option value="Minute" selected disabled hidden> Minutos </option>
                    </select>
                </div>

                <div class="alarm-controls">
                    <select>
                        <option value="AM/PM" selected disabled hidden> AM/PM </option>
                    </select>
                </div>
            </div>
            <button>Ativar</button>
        </div>
    </div>
    `
}







let delay = -0.3;
function createCard(date, day, games) { 
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
                <h2>${date}<span>${day}</span></h2>
                   <ul> 
                    ${games}
                    </ul>
  </div>
  `
}


document.querySelector("#cards", "#cardNotification").innerHTML = ` 
             
             ${createCard("ATIVAR","ALARME",
             cardNotification
             )}
            
             ${createCard(
               "20/11",
               "DOMINGO",
               createGame("Catar", "13:00", "Equador", "A")
             )}
             ${createCard(
               "21/11",
               "SEGUNDA",
               createGame("Inglaterra", "10:00", "Ir??", "B") +
                 createGame("Senegal", "13:00", "Holanda", "A") +
                 createGame("Estados Unidos", "16:00", "Gales", "B")
             )}
             ${createCard(
               "22/11",
               "TER??A",
               createGame("Argentina", "07:00", "Arabia Saudita", "C") +
                 createGame("Dinamarca", "10:00", "Tunisia", "D") +
                 createGame("Mexico", "13:00", "Polonia", "C") +
                 createGame("Fran??a", "16:00", "Australia", "D")
             )}


            ${createCard(
              "23/11",
              "QUARTA",
              createGame("Marrocos", "07:00", "Cro??cia", "F") +
                createGame("Alemanha", "10:00", "Jap??o", "E") +
                createGame("Espanha", "13:00", "Costa Rica", "E") +
                createGame("Belgica", "16:00", "Canad??", "F")
            )}
            ${createCard(
              "24/11",
              "QUINTA",
              createGame("Sui??a", "07:00", "Camar??es", "G") +
                createGame("Uruguai", "10:00", "Coreia do Sul", "H") +
                createGame("Portugal", "13:00", "Gana", "H") +
                createGame("Brazil", "16:00", "S??rvia", "G")
            )}
           ${createCard(
             "25/11",
             "SEXTA",
             createGame("Gales", "07:00", "Ir??", "B") +
               createGame("Catar", "10:00", "Senegal", "A") +
               createGame("Holanda", "13:00", "Equador", "A") +
               createGame("Inglaterra", "16:00", "Estados Unidos", "B")
           )}
           ${createCard(
             "26/11",
             "S??BADO",
             createGame("Tunisia", "07:00", "Australia", "D") +
               createGame("Polonia", "10:00", "Arabia Saudita", "C") +
               createGame("Fran??a", "13:00", "Dinamarca", "D") +
               createGame("Argentina", "16:00", "Mexico", "C")
           )}
           ${createCard(
             "27/11",
             "DOMINGO",
             createGame("Jap??o", "07:00", "Costa Rica", "E") +
               createGame("Belgica", "10:00", "Marrocos", "F") +
               createGame("Cro??cia", "13:00", "Canad??", "F") +
               createGame("Espanha", "16:00", "Alemanha", "E")
           )}
            ${createCard(
              "28/11",
              "SEGUNDA",
              createGame("Camar??es", "07:00", "S??rvia", "G") +
                createGame("Coreia do Sul", "10:00", "Gana", "H") +
                createGame("Brazil", "13:00", "Sui??a", "G") +
                createGame("Portugal", "16:00", "Uruguai", "H")
            )}
            ${createCard(
              "29/11",
              "TER??A",
              createGame("Equador", "07:00", "Senegal", "A") +
                createGame("Holanda", "10:00", "Catar", "A") +
                createGame("Ir??", "13:00", "Estados Unidos", "B") +
                createGame("Gales", "16:00", "Inglaterra", "B")
            )}
            ${createCard(
              "30/11",
              "QUARTA",
              createGame("Tunisia", "07:00", "Fran??a", "D") +
                createGame("Australia", "10:00", "Dinamarca", "D") +
                createGame("Polonia", "13:00", "Argentina", "B") +
                createGame("Arabia Saudita", "16:00", "Mexico", "C")
            )}
            ${createCard(
              "01/12",
              "QUINTA",
              createGame("Cro??cia", "07:00", "Belgica", "F") +
                createGame("Canad??", "10:00", "Marrocos", "F") +
                createGame("Jap??o", "13:00", "Espanha", "E") +
                createGame("Costa Rica", "16:00", "Alemanha", "E")
            )}
            ${createCard(
              "02/11",
              "SEXTA",
              createGame("Coreia do Sul", "07:00", "Portugal", "H") +
                createGame("Gana", "10:00", "Uruguai", "H") +
                createGame("S??rvia", "13:00", "Sui??a", "G") +
                createGame("Camar??es", "16:00", "Brazil", "G")
            )}
       
`

/* ALARM FUNCTIONS */

  const currentTime = document.querySelector("h1"),
  content = document.querySelector(".content"),
  selectMenu = document.querySelectorAll("select"),
  btnSetAlarm = document.querySelector("button")

setInterval(() => {
  let date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ampm = "AM"

  if (hours >= 12) {
    hours = hours - 12
    ampm = "PM"
  }

  hours = hours == 0 ? (hours = 12) : hours
  hours = hours < 10 ? "0" + hours : hours
  minutes = minutes < 10 ? "0" + minutes : minutes
  seconds = seconds < 10 ? "0" + seconds : seconds

  currentTime.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`

  if (alarmTime === `${hours}:${minutes} ${ampm}`) {
    ringTone.play()
    ringTone.loop = true
  }
})

let alarmTime,
  isAlarmSet,
  ringTone = new Audio("/alarm-som/gol.mp3")

for (let i = 12; i > 0; i--) {
  i = i < 10 ? `0${i}` : i
  let option = `<option value="${i}">${i}</option>`
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option)
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? `0${i}` : i
  let option = `<option value="${i}">${i}</option>`
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option)
}

for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM"
  let option = `<option value="${ampm}">${ampm}</option>`
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option)
}

function setAlarm() {
  if (isAlarmSet) {
    alarmTime = ""
    ringTone.pause()
    content.classList.remove("disable")
    btnSetAlarm.innerHTML = "Ativar"
    return (isAlarmSet = false)
  }

  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
  if (
    time.includes("Hour") ||
    time.includes("Minute") ||
    time.includes("AM/PM")
  ) {
    return alert(
      "Insira horas e minutos v??lidos para ativar o alarme!"
    )
  }
  alarmTime = time
  isAlarmSet = true
  content.classList.add("disable")
  btnSetAlarm.innerHTML = "Desativar"
}
btnSetAlarm.addEventListener("click", setAlarm)


/*ROTAS*/









