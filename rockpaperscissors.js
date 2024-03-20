const possiblePlays = ["rock", "paper", "scissors"]
let computerPlay = possiblePlays[0]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function resetBoard() {
    let gameGrid = document.getElementById("game-grid")
    gameGrid.remove()
    let startButtonContainer = document.getElementById("start-button-container")
    let startButton = document.createElement("button")
    startButton.setAttribute("id", "start-button")
    startButton.setAttribute("type", "button")
    startButton.setAttribute("onclick", "startGame()")
    startButton.setAttribute("class", "btn btn-primary")
    startButton.innerText = "Start game"
    startButtonContainer.appendChild(startButton)
    let resetButton = document.getElementById("reset-button")
    resetButton.remove()
    let playerOutput = document.getElementById("player-output")
    playerOutput.innerText = ""
  }

function makeResetButton() {
    let resetButtonContainer = document.getElementById("reset-button-container")
    let resetButton = document.createElement("button")
    resetButton.setAttribute("type", "button")
    resetButton.setAttribute("class", "btn btn-primary")
    resetButton.setAttribute("id", "reset-button")
    resetButton.setAttribute("onclick", "resetBoard()")
    resetButton.innerText = "Reset board"
    resetButtonContainer.appendChild(resetButton)
}

function showResults (playerMove) {
    let gameGridContainer = document.getElementById("game-grid-container")
    let gameGrid = document.getElementById("game-grid")
    gameGrid.remove()
    gameGrid = document.createElement("div")
    gameGrid.setAttribute("class", "container text-center")
    gameGrid.setAttribute("id", "game-grid")
    let gameRow = document.createElement("div")
    gameRow.setAttribute("class", "row")

    let playerCol = document.createElement("div")
    playerCol.setAttribute("class", "col m-5")
    let playerButton = document.createElement("button")
    playerButton.setAttribute("type", "button")
    playerButton.setAttribute("class", "btn btn-primary")
    playerButton.setAttribute("disabled", "")
    let playerImage = document.createElement("img")
    playerImage.setAttribute("src", `./images/${playerMove}.png`)
    playerImage.setAttribute("alt", `${playerMove}`)
    playerButton.appendChild(playerImage)
    playerCol.appendChild(playerButton)
    gameRow.appendChild(playerCol)

    let computerCol = document.createElement("div")
    computerCol.setAttribute("class", "col m-5")
    let computerButton = document.createElement("button")
    computerButton.setAttribute("type", "button")
    computerButton.setAttribute("class", "btn btn-primary")
    computerButton.setAttribute("disabled", "")
    let computerImage = document.createElement("img")
    computerImage.setAttribute("src", `./images/${computerPlay}.png`)
    computerImage.setAttribute("alt", `${computerPlay}`)
    computerImage.setAttribute("style", "transform: rotateY(180deg)")
    computerButton.appendChild(computerImage)
    computerCol.appendChild(computerButton)
    gameRow.appendChild(computerCol)

    gameGrid.appendChild(gameRow)
    gameGridContainer.appendChild(gameGrid)

    makeResetButton()
}

function rock() {
    computerPlay = possiblePlays[getRandomInt(3)]
    if (computerPlay == "scissors") {
        let playerOutput = document.getElementById("player-output")
        playerOutput.innerText = "Computer played scissors. You win!"
    } else if (computerPlay == "paper") {
        let playerOutput = document.getElementById("player-output")
        playerOutput.innerText = "Computer played paper. You lose!"
    } else if (computerPlay == "rock") {
        let playerOutput = document.getElementById("player-output")
        playerOutput.innerText = "Computer played rock. You tied!"
    }
    showResults("rock")
}

function paper() {
    computerPlay = possiblePlays[getRandomInt(3)]
    if (computerPlay == "rock") {
        let playerOutput = document.getElementById("player-output")
        playerOutput.innerText = "Computer played rock. You win!"
    } else if (computerPlay == "scissors") {
        let playerOutput = document.getElementById("player-output")
        playerOutput.innerText = "Computer played scissors. You lose!"
    } else if (computerPlay == "paper") {
        let playerOutput = document.getElementById("player-output")
        playerOutput.innerText = "Computer played paper. You tied!"
    }
    showResults("paper")
}

function scissors() {
    computerPlay = possiblePlays[getRandomInt(3)]
    if (computerPlay == "paper") {
        let playerOutput = document.getElementById("player-output")
        playerOutput.innerText = "Computer played paper. You win!"
    } else if (computerPlay == "rock") {
        let playerOutput = document.getElementById("player-output")
        playerOutput.innerText = "Computer played rock. You lose!"
    } else if (computerPlay == "scissors") {
        let playerOutput = document.getElementById("player-output")
        playerOutput.innerText = "Computer played scissors. You tied!"
    }
    showResults("scissors")
}

function generateBoard() {
    let gameGridContainer = document.getElementById("game-grid-container")
    let gameGrid = document.createElement("div")
    gameGrid.setAttribute("class", "container text-center")
    gameGrid.setAttribute("id", "game-grid")
    let gameRow = document.createElement("div")
    gameRow.setAttribute("class", "row")
    for (let i = 0; i < 3; i++) {
        let gameCol = document.createElement("div")
        gameCol.setAttribute("class", "col m-5")
        gameCol.setAttribute("id", `${possiblePlays[i]}Cell`)
        let cellButton = document.createElement("button")
        cellButton.setAttribute("type", "button")
        cellButton.setAttribute("class", "btn btn-primary")
        cellButton.setAttribute("id", `${possiblePlays[i]}Button`)
        cellButton.setAttribute("onclick", `${possiblePlays[i]}()`)
        let cellImage = document.createElement("img")
        cellImage.setAttribute("src", `./images/${possiblePlays[i]}.png`)
        cellImage.setAttribute("alt", `${possiblePlays[i]}`)
        cellButton.appendChild(cellImage)
        gameCol.appendChild(cellButton)
        gameRow.appendChild(gameCol)
    }
    gameGrid.appendChild(gameRow)
    gameGridContainer.appendChild(gameGrid)
}

function startGame() {
    let startButton = document.getElementById("start-button")
    startButton.remove()
    generateBoard()
    let playerOutput = document.getElementById("player-output")
    playerOutput.innerText = "Choose your move."
  }