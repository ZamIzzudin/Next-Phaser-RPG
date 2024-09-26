/** @format */

import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  preload() {
    // Load Assets
    this.load.image("demo", "/demoLower.png");
    this.load.spritesheet("player", "/hero.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create() {
    this.scene.start("Main_Screen");
  }
}
