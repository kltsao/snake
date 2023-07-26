class Food {
    private element: HTMLElement;

    constructor() {
        this.element = document.getElementById("food")!;
    }

    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    move(): void {
        let x = Math.round(Math.random() * 29) * 10;
        let y = Math.round(Math.random() * 29) * 10;
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    }
}

export default Food;