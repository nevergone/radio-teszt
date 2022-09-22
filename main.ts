bluetooth.onBluetoothConnected(function () {
    basic.showString("BT BE")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("BT KI")
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteLine("BT SOR KULD")
})
input.onButtonPressed(Button.AB, function () {
    bluetooth.uartWriteString("BT SZOVEG KULD")
})
input.onButtonPressed(Button.B, function () {
    bluetooth.uartWriteNumber(9876)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    basic.showString("CT-" + control.eventValue() + "-")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    bluetooth.uartWriteValue("abc", 234)
})
control.onEvent(EventBusSource.MICROBIT_ID_RADIO, EventBusValue.MICROBIT_EVT_ANY, function () {
    basic.showString("RD-" + control.eventValue() + "-")
})
let adat = ""
basic.clearScreen()
bluetooth.startUartService()
basic.forever(function () {
    adat = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (adat.isEmpty() == false) {
        basic.showString("NL-" + adat + "-")
    }
})
