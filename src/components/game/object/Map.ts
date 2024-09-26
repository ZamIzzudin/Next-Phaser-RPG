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

  moveChar(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    if (cursors.left.isDown) {
      this.player.moveToTile("x", -1, "left");
    } else if (cursors.right.isDown) {
      this.player.moveToTile("x", 1, "right");
    } else if (cursors.up.isDown) {
      this.player.moveToTile("y", -1, "up");
    } else if (cursors.down.isDown) {
      this.player.moveToTile("y", 1, "down");
    }
  }
}
