const game = new Game();
game.initialize();

function Game() {
    
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    const gameSpace = document.querySelector('.game');

    const failSound = document.getElementById('hihat');
    const kickSound = document.getElementById('kick');
    const inputPlayer = document.getElementById('player');
    const levelText = document.getElementById('level');
    const scoreList = document.getElementById('score-list');

    const minPeepTime = 200;
    let holes = '';
    let maxPeepTime = 1000;
    let lastHole;
    let timeUp = false;
    let score = 0;
    let level = 1;
    let levelScore = 0;
    let player = "";
    
    let players = [];

    this.initialize = () => {
        this.fillMoles();
        holes = document.querySelectorAll('.hole');
        moles.forEach(mole => mole.addEventListener('click', this.bonk));
        gameSpace.addEventListener('click',this.clickSound);
    }

    this.randomTime = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    this.randomHole = holes => {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole) return this.randomHole(holes);
        lastHole = hole;
        return hole;
    }

    this.peep = () => {
        const time = this.randomTime(minPeepTime, maxPeepTime);
        const hole = this.randomHole(holes);
        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            if (!timeUp) this.peep();
        }, time);
    }

    this.startGame = () => {
        maxPeepTime = 1000;
        scoreBoard.textContent = 0;
        levelText.textContent = 1;
        level = 1;
        player = (inputPlayer.value == "") ? "Anonymous" : inputPlayer.value;
        timeUp = false;
        score = 0;
        levelScore = 0;
        this.peep();
        setTimeout(() => {
            timeUp = true;
            inputPlayer.value = "";
            players.push({'name': player, 'score': score});
            this.updateBoard();
        }, 10000)
    }

    this.updateBoard = () => {
        scoreList.innerHTML = " ";
        this.sortArray();
        if (players.length > 5) {
            players.pop();
        }
        players.forEach( (element) =>{
            let listItem = document.createElement('li');
            listItem.innerHTML = `${element.name}: ${element.score}`;
            scoreList.appendChild(listItem);
        })
    }

    this.sortArray =() => {
        players.sort((a,b) => {
            return b.score - a.score;
        });
    }

    this.bonk = e => {
        if (!e.isTrusted) return;
        score++;
        levelScore++;
        e.target.classList.remove('up');
        scoreBoard.textContent = score;
        this.levelUp();
    }

    this.clickSound = e => {
        if (e.target.className == "mole") {
            kickSound.play();
        }
        else{
            failSound.play();
        }
    }

    this.levelUp = () => {
        if ( levelScore > 5 ) {
            levelScore = 0;
            level++;
            levelText.textContent = level;
            maxPeepTime = 800;
        }
    }

    this.fillMoles = () => {
        for( let i = 1; i < 10; i++){
            const mole = document.createElement('div');
            mole.className = `hole hole${i}`;
            mole.innerHTML = '<div class="mole"></div>'
            gameSpace.appendChild(mole);
        }
    }
}


