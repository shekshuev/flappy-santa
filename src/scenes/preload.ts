import "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({
            key: "PreloadScene"
        });
    }
    preload(): void {
        this.load.image("city", new URL("../assets/images/city.png", import.meta.url).href);
        this.load.image("logo", new URL("../assets/images/logo.png", import.meta.url).href);
    }

    create(): void {
        this.scene.switch("LogoScene");
    }
    update(): void {
        // TODO
    }
}
