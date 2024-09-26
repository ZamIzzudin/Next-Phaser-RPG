/** @format */
import Phaser from "phaser";
import Map from "../object/Map";

export default class MainScreen extends Phaser.Scene {
  constructor() {
    super("Main_Screen");
  }

  create() {
    const mapKey = "demo";

    const map = new Map(this, mapKey);
  }
}
