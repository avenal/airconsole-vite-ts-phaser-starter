import { type AirConsoleEvents } from "../../airconsole-events"
import Phaser from "phaser"
type AirConsoleWithEvents = AirConsole & AirConsoleEvents;
const airconsole: AirConsoleWithEvents = new AirConsole() as AirConsoleWithEvents

airconsole.onMessage = function (device_id, data) {
  this.dispatchEvent(device_id, data)
}

class Example extends Phaser.Scene {
  preload() {
  }

  create() {

  }
}
const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: Example
}

const _game = new Phaser.Game(config)