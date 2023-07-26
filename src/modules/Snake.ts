class Snake {
    private element: HTMLElement;
    private head: HTMLElement;
    private bodies: HTMLCollection;

    constructor() {
        this.element = document.getElementById("snake")!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    get bodySize() {
        return this.bodies.length;
    }

    set X(value) {
        if (value < 0 || value > 290) throw new Error("蛇撞墙了！");
        this.moveBody();
        this.head.style.left = value + 'px';
    }

    set Y(value) {
        if (value < 0 || value > 290) throw new Error("蛇撞墙了！");
        this.moveBody();
        this.head.style.top = value + 'px';
    }

    grow(): void {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }

    move(direction: string): void {
        switch (direction) {
            case "Up":
            case "ArrowUp":
                this.Y -= 10;
                break;
            case "Down":
            case "ArrowDown":
                this.Y += 10;
                break;
            case "Left":
            case "ArrowLeft":
                this.X -= 10;
                break;
            case "Right":
            case "ArrowRight":
                this.X += 10;
                break;
        }
        if (this.checkBodyCrash()) throw new Error("蛇撞到了自己!");
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px';
        }
    }

    checkBodyCrash(): boolean {
        if (this.bodies.length < 5) return false;
        for (let i = 4; i < this.bodies.length; i++) {
            if ((this.bodies[i] as HTMLElement).offsetLeft == this.X && (this.bodies[i] as HTMLElement).offsetTop == this.Y) return true;
        }
        return false;
    }
}

export default Snake;