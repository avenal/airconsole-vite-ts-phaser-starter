import { type AirConsoleEvents } from "../../airconsole-events"
type AirConsoleWithEvents = AirConsole & AirConsoleEvents;
const airconsole: AirConsoleWithEvents = new AirConsole() as AirConsoleWithEvents

airconsole.onMessage = function(deviceId, data) {
    this.dispatchEvent(deviceId, data)
  }
airconsole.onReady = () => {
  
}