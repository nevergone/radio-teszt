bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showString("LN-" + bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)) + "-")
})
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
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    bluetooth.uartWriteValue("abc", 234)
})
basic.clearScreen()
bluetooth.startUartService()
