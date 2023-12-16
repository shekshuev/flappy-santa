import "phaser";

export default class MainScene extends Phaser.Scene {
    private city?: Phaser.GameObjects.TileSprite;
    private santa?: Phaser.Physics.Arcade.Sprite;
    private crashSound?: Phaser.Sound.BaseSound;
    private jumpSound?: Phaser.Sound.BaseSound;
    private pause: boolean = false;
    private score: number = 0;

    constructor() {
        super({
            key: "MainScene"
        });
        this.jump = this.jump.bind(this);
    }
    preload(): void {}

    create(): void {
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
        this.santa = this.physics.add.sprite(this.game.canvas.width * 0.2, 245, "santa");
        this.santa.scale = 0.25;
        this.santa.setOrigin(0.6, 0.5);
        this.physics.enableUpdate();
        this.santa.setGravityY(500);

        this.crashSound = this.sound.add("crash", { loop: false });
        this.jumpSound = this.sound.add("jump", { loop: false });

        if (this.input.keyboard) {
            this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE).on("down", this.jump);
        }
        this.input.on(Phaser.Input.Events.POINTER_DOWN, this.jump);
    }

    update(): void {
        if (!this.pause) {
            if (this.city) {
                this.city.tilePositionX += 0.15;
            }
            if (this.santa) {
                if (this.santa?.angle < 20) {
                    this.santa.angle += 1;
                }
                if (this.santa.y < 0 || this.santa.y > this.game.canvas.height) {
                    // this.santa.alive = false;
                    this.santa.disableBody();
                    this.crashSound?.play();
                    this.pause = true;
                }
            }
        }
    }

    jump() {
        if (!this.pause) {
            this.tweens.add({
                targets: this.santa,
                ease: "Linear",
                angle: { from: 0, to: -30 },
                duration: 100
            });
            this.santa?.setVelocityY(-360);
            this.jumpSound?.play();
        }
    }
}
