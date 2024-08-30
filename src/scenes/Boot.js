import { Scene } from "phaser";

export class Boot extends Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    for (let i = 1; i <= 5; i++) {
      this.load.image(`layer${i}`, `assets/background/${i}.png`);
    }

    for (let i = 1; i <= 81; i++) {
      this.load.image(`tile${i}`, `assets/tiles/IndustrialTile_${i}.png`);
    }
  }

  create() {
    this.scene.start("Preloader");
  }
}
