input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("AB")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("-" + receivedString + "-")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
basic.clearScreen()
radio.setGroup(1)
