/** @format */
import Char from "./Char";

export default class Map {
  scene: Phaser.Scene;
  player: Char;
  mapKey: string;

  constructor(scene: Phaser.Scene, mapKey: string) {
    this.scene = scene;
    this.mapKey = mapKey;

    this.scene.add.image(0, 0, "demo").setOrigin(0);
    this.player = new Char(this.scene, 1, 1, "player", 0);
  }
}
