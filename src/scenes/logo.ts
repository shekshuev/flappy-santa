import "phaser";

export default class LogoScene extends Phaser.Scene {
    private city?: Phaser.GameObjects.TileSprite;

    constructor() {
        super({
            key: "LogoScene"
        });
    }
    preload(): void {
        const { width, height } = this.scale;
        this.city = this.add
            .tileSprite(
                0,
                this.game.canvas.height - this.textures.get("city").getSourceImage().height,
                width,
                height,
                "city"
            )
            .setOrigin(0, 0);
        const logo = this.add.sprite(this.game.canvas.width * 0.5, this.game.canvas.height * 0.5, "logo");
        logo.scale = 0.7;

        const loadingLabel = this.add.text(this.game.canvas.width / 2, this.game.canvas.height - 50, "Загрузка", {
            font: "30px Arial",
            color: "#ffffff"
        });
        loadingLabel.setOrigin(0.5, 0.5);
        this.tweens.add({
            targets: loadingLabel,
            ease: "Linear",
            alpha: { from: 1, to: 0.5 },
            duration: 500,
            repeat: -1,
            yoyo: true
        });

        this.load.image("tutorial", new URL("../assets/images/tutorial.png", import.meta.url).href);
        this.load.image("santa", new URL("../assets/images/santa.png", import.meta.url).href);
        this.load.image("plane", new URL("../assets/images/plane.png", import.meta.url).href);
        this.load.image("balloon_1", new URL("../assets/images/balloon_1.png", import.meta.url).href);
        this.load.image("balloon_2", new URL("../assets/images/balloon_2.png", import.meta.url).href);

        this.load.image("cloud1", new URL("../assets/images/cloud_1.png", import.meta.url).href);
        this.load.image("cloud2", new URL("../assets/images/cloud_2.png", import.meta.url).href);
        this.load.image("cloud3", new URL("../assets/images/cloud_3.png", import.meta.url).href);
        this.load.image("cloud4", new URL("../assets/images/cloud_4.png", import.meta.url).href);
        this.load.image("cloud5", new URL("../assets/images/cloud_5.png", import.meta.url).href);
        this.load.image("cloud6", new URL("../assets/images/cloud_6.png", import.meta.url).href);
        this.load.image("cloud7", new URL("../assets/images/cloud_7.png", import.meta.url).href);
        this.load.image("cloud8", new URL("../assets/images/cloud_8.png", import.meta.url).href);
        this.load.image("gift1", new URL("../assets/images/gift_1.png", import.meta.url).href);
        this.load.image("gift2", new URL("../assets/images/gift_2.png", import.meta.url).href);
        this.load.image("gift3", new URL("../assets/images/gift_3.png", import.meta.url).href);
        this.load.image("gift4", new URL("../assets/images/gift_4.png", import.meta.url).href);
        this.load.image("gift5", new URL("../assets/images/gift_5.png", import.meta.url).href);
        this.load.image("gift6", new URL("../assets/images/gift_6.png", import.meta.url).href);
        this.load.image("gift7", new URL("../assets/images/gift_7.png", import.meta.url).href);
        this.load.image("gift8", new URL("../assets/images/gift_8.png", import.meta.url).href);
        this.load.image("gift9", new URL("../assets/images/gift_9.png", import.meta.url).href);

        this.load.spritesheet("startButton", new URL("../assets/images/start_button.png", import.meta.url).href, {
            frameWidth: 182,
            frameHeight: 80
        });
        this.load.spritesheet("exitButton", new URL("../assets/images/exit_button.png", import.meta.url).href, {
            frameWidth: 182,
            frameHeight: 80
        });
        this.load.spritesheet("helpButton", new URL("../assets/images/help_button.png", import.meta.url).href, {
            frameWidth: 182,
            frameHeight: 80
        });

        this.load.audio("hohoho", new URL("../assets/sounds/ho-ho-ho.wav", import.meta.url).href);
        this.load.audio("pickup", new URL("../assets/sounds/pickup.wav", import.meta.url).href);
        this.load.audio("jump", new URL("../assets/sounds/jump.wav", import.meta.url).href);
        this.load.audio("crash", new URL("../assets/sounds/crash.wav", import.meta.url).href);
    }

    create(): void {
        this.scene.switch("MainScene");
    }
    update(): void {
        if (this.city) {
            this.city.tilePositionX += 0.15;
        }
    }
}
