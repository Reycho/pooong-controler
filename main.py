def on_gesture_tilt_left():
    radio.send_value("bleft", 0)
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    basic.show_leds("""
        # # . . .
                # # . . .
                # # . . .
                # # . . .
                # # . . .
    """)
    basic.pause(350)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_tilt_right():
    radio.send_value("bright", 0)
    music.play_tone(392, music.beat(BeatFraction.WHOLE))
    basic.show_leds("""
        . . . # #
                . . . # #
                . . . # #
                . . . # #
                . . . # #
    """)
    basic.pause(350)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

music.set_built_in_speaker_enabled(True)
music.set_volume(0)
radio.set_group(69)

def on_forever():
    if input.button_is_pressed(Button.A):
        basic.show_leds("""
            . . # . .
                        . # # # .
                        # . # . #
                        . . # . .
                        . . # . .
        """)
        basic.pause(200)
        basic.clear_screen()
    if input.button_is_pressed(Button.B):
        basic.show_leds("""
            . . # . .
                        . . # . .
                        # . # . #
                        . # # # .
                        . . # . .
        """)
        basic.pause(200)
        basic.clear_screen()
basic.forever(on_forever)

def on_forever2():
    led.toggle(2, 2)
    basic.pause(100)
basic.forever(on_forever2)
