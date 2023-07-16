import { type AirConsoleEvents } from "../../airconsole-events"
type AirConsoleWithEvents = AirConsole & AirConsoleEvents;
const airconsole: AirConsoleWithEvents = new AirConsole() as AirConsoleWithEvents

airconsole.onMessage = function(device_id, data) {
    this.dispatchEvent(device_id, data)
  }
