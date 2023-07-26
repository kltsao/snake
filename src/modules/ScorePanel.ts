class ScorePanel {
    private _score: number;
    private _level: number;
    private _scoreElement: HTMLElement;
    private _levelElement: HTMLElement;

    constructor(score: number = 0, level: number = 1) {
        this._score = score;
        this._level = level
        this._scoreElement = document.getElementById("score")!;
        this._levelElement = document.getElementById("level")!;
    }

    get score() {
        return this._score;
    }

    get level() {
        return this._level;
    }

    public scoreUp(): void {
        this._score++;
        this._scoreElement.innerHTML = this._score + '';
        if (this._score % 10 === 0) {
            this.levelUp();
        }
    }

    public levelUp(): void {
        if (this._level == 10) return;
        this._level++;
        this._levelElement.innerHTML = this._level + '';
    }
}

export default ScorePanel;