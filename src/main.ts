import "phaser";
import { LogoScene, PreloadScene, MainScene } from "./scenes";

const config = {
    title: "Flappy Santa",
    width: "100%",
    height: "100%",
    parent: "game",
    backgroundColor: "#18216D",
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    scene: [PreloadScene, LogoScene, MainScene]
};
export class FlappySantaGame extends Phaser.Game {
    constructor(config: any) {
        super(config);
    }
}
window.onload = () => {
    new FlappySantaGame(config);
};
