bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
	
})
bluetooth.onBluetoothConnected(function () {
    basic.showString("BT BE")
    basic.clearScreen()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("BT KI")
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.clearScreen()
bluetooth.startUartService()
