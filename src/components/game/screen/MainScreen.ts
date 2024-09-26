/** @format */
import Phaser from "phaser";

export default class MainScreen extends Phaser.Scene {
  constructor() {
    super("Main_Screen");
  }

  create() {
    this.add.image(0, 0, "demo").setOrigin(0);
    this.add.sprite(16, 16, "player").setOrigin(0);
  }
}
