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
      this.player.sprite.x -= 1;
    } else if (cursors.right.isDown) {
      this.player.sprite.x += 1;
    } else if (cursors.up.isDown) {
      this.player.sprite.y -= 1;
    } else if (cursors.down.isDown) {
      this.player.sprite.y += 1;
    }
  }
}
