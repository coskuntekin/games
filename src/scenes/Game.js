import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.cameras.main.setBackgroundColor("#b1aeba");

    const { width, height } = this.scale;

    this.layers = [];
    for (let i = 1; i <= 5; i++) {
      const layer = this.add
        .tileSprite(0, 0, width, height, `layer${i}`)
        .setOrigin(0, 0)
        .setScale(
          height / this.textures.get(`layer${i}`).getSourceImage().height
        );
      this.layers.push(layer);
    }

    const platforms = this.physics.add.staticGroup();
    for (let i = 1; i <= 81; i++) {
      const x = Phaser.Math.Between(0, width);
      const y = Phaser.Math.Between(0, height);
      platforms.create(x, y, `tile${i}`);
    }
  }

  update() {
    this.layers[0].tilePositionX += 0.5;
    this.layers[1].tilePositionX += 1;
    this.layers[2].tilePositionX += 1.5;
    this.layers[3].tilePositionX += 2;
    this.layers[4].tilePositionX += 2.5;
  }
}
