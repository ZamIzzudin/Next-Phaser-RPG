/** @format */

import Phaser from "phaser";
import MoveAnimation from "../logic/MoveAnimation";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  preload() {
    // Load Assets
    this.load.image("demo", "/DemoLower.png");
    this.load.image("street", "/StreetLower.png");
    this.load.spritesheet("player", "/hero.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create() {
    MoveAnimation(this, "player");
    this.scene.start("Main_Screen");
  }
}
