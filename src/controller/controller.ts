import { type AirConsoleEvents } from "../../airconsole-events"
type AirConsoleWithEvents = AirConsole & AirConsoleEvents;
const airconsole: AirConsoleWithEvents = new AirConsole() as AirConsoleWithEvents

airconsole.onMessage = function(device_id, data) {
    // Put this into your onMessage function to listen for events
    this.dispatchEvent(device_id, data)
  }
airconsole.onReady = () => {
    airconsole.sendEvent(AirConsole.SCREEN, 'MOVE_DOWN', {
        distance: 20
      })

}