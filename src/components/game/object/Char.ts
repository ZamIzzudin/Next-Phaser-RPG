/** @format */

import GridParse from "../utils/GridParse";

export default class Char {
  scene: Phaser.Scene;
  sprite: Phaser.GameObjects.Sprite;
  coordinate: { x: number; y: number };

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    key: string,
    frame: number
  ) {
    this.scene = scene;
    this.coordinate = GridParse.CharCoordinate(x, y);

    this.sprite = this.scene.add.sprite(
      this.coordinate.x,
      this.coordinate.y,
      key,
      frame
    );
    this.sprite.setOrigin(0, 0);
  }
}
