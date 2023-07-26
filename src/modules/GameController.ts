import Food from "./Food.ts";
import Snake from "./Snake.ts";
import ScorePanel from "./ScorePanel.ts";

class GameController {
    private food: Food;
    private snake: Snake;
    private scorePanel: ScorePanel;
    private direction: string = "";
    private isAlive: boolean = true;
    private startSpeed = 200;

    constructor() {
        this.food = new Food();
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
    }

    start() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(event: KeyboardEvent) {
        if (this.snake.bodySize > 1) {
            switch (event.key) {
                case "Up":
                case "ArrowUp":
                    if (this.direction == "Down" || this.direction == "ArrowDown") return;
                    break;
                case "Down":
                case "ArrowDown":
                    if (this.direction == "Up" || this.direction == "ArrowUp") return;
                    break;
                case "Left":
                case "ArrowLeft":
                    if (this.direction == "Right" || this.direction == "ArrowRight") return;
                    break;
                case "Right":
                case "ArrowRight":
                    if (this.direction == "Left" || this.direction == "ArrowLeft") return;
            }
        }
        this.direction = event.key;
    }

    run() {
        if (!this.isAlive) return;
        let x: number = this.snake.X;
        let y: number = this.snake.Y;
        switch (this.direction) {
            case "Up":
            case "ArrowUp":
                y -= 10;
                break;
            case "Down":
            case "ArrowDown":
                y += 10;
                break;
            case "Left":
            case "ArrowLeft":
                x -= 10;
                break;
            case "Right":
            case "ArrowRight":
                x += 10;
        }
        this.checkEat(x, y);
        try {
            this.snake.move(this.direction);
        } catch (e: any) {
            alert(e.message + ' GAME OVER!!');
            this.isAlive = false;
        }
        setTimeout(this.run.bind(this), this.startSpeed - this.scorePanel.level * 10);
    }

    checkEat(x: number, y: number) {
        if (x == this.food.X && y == this.food.Y) {
            this.food.move();
            this.snake.grow();
            this.scorePanel.scoreUp();
            if (this.scorePanel.level == 10) {
                this.isAlive = false;
                alert("Congratulations! You won the game!");
            }
        }
    }
}

export default GameController;