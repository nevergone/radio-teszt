def on_bluetooth_connected():
    basic.show_string("BT BE")
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_string("BT KI")
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def on_button_pressed_a():
    bluetooth.uart_write_line("BT SOR KULD")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_uart_data_received():
    basic.show_string("LN-" + bluetooth.uart_read_until(serial.delimiters(Delimiters.SEMI_COLON)) + "-")
bluetooth.on_uart_data_received(serial.delimiters(Delimiters.SEMI_COLON),
    on_uart_data_received)

def on_button_pressed_ab():
    bluetooth.uart_write_string("BT SZOVEG KULD")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    bluetooth.uart_write_number(9876)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    bluetooth.uart_write_value("abc", 234)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

basic.clear_screen()
bluetooth.start_uart_service()