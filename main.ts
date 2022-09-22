bluetooth.onBluetoothConnected(function () {
    basic.showString("BT BE")
    serial.writeLine("BT BE")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("BT KI")
    serial.writeLine("BT KI")
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteLine("BT SOR KULD")
    serial.writeLine("BT SOR KULD")
})
input.onButtonPressed(Button.AB, function () {
    bluetooth.uartWriteString("BT SZOVEG KULD")
    serial.writeString("BT SZOVEG KULD")
})
input.onButtonPressed(Button.B, function () {
    bluetooth.uartWriteNumber(9876)
    serial.writeNumber(9876)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        serial.writeLine("1 DOWN")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            # # # # #
            `)
        serial.writeLine("1 UP")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        serial.writeLine("2 DOWN")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
        basic.showLeds(`
            # # # # #
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        serial.writeLine("2 UP")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        serial.writeLine("3 DOWN")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
        basic.showLeds(`
            . . # . #
            . # . . #
            # # # # #
            . # . . #
            . . # . #
            `)
        serial.writeLine("3 UP")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        serial.writeLine("4 DOWN")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        basic.showLeds(`
            # . # . .
            # . . # .
            # # # # #
            # . . # .
            # . # . .
            `)
        serial.writeLine("4 UP")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        basic.showLeds(`
            . # . . .
            # . # . .
            # # # . .
            # . # . #
            # . # . #
            `)
        serial.writeLine("A DOWN")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        basic.showLeds(`
            . # . . #
            # . # . #
            # # # . .
            # . # . .
            # . # . .
            `)
        serial.writeLine("A UP")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # # . . .
            # . # . #
            # # . . #
            `)
        serial.writeLine("B DOWN")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        basic.showLeds(`
            # # . . #
            # . # . #
            # # . . .
            # . # . .
            # # . . .
            `)
        serial.writeLine("B UP")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        basic.showLeds(`
            . # # . .
            # . . . .
            # . . . .
            # . . . #
            . # # . #
            `)
        serial.writeLine("C DOWN")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
        basic.showLeds(`
            . # # . #
            # . . . #
            # . . . .
            # . . . .
            . # # . .
            `)
        serial.writeLine("C UP")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # . # . .
            # . # . #
            # # . . #
            `)
        serial.writeLine("D DOWN")
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        basic.showLeds(`
            # # . . #
            # . # . #
            # . # . .
            # . # . .
            # # . . .
            `)
        serial.writeLine("D UP")
    } else {
        adat = "CT-" + control.eventValue() + "-"
        basic.showString(adat)
        serial.writeLine(adat)
    }
    basic.pause(100)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    bluetooth.uartWriteValue("abc", 234)
    serial.writeValue("abc", 234)
})
let adat = ""
basic.clearScreen()
bluetooth.startUartService()
basic.forever(function () {
    adat = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (adat.isEmpty() == false) {
        adat = "NL-" + adat + "-"
        basic.showString(adat)
        serial.writeString(adat)
    }
})
