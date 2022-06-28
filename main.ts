input.onGesture(Gesture.TiltLeft, function () {
    radio.sendValue("bleft", 0)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.pause(350)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendValue("bright", 0)
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
    basic.pause(350)
    basic.clearScreen()
})
let vol = 0
music.setVolume(vol)
vol = 0
radio.setGroup(69)
basic.forever(function () {
    led.toggle(2, 2)
    basic.pause(100)
    if (input.buttonIsPressed(Button.A)) {
        vol += 10
    }
    if (input.buttonIsPressed(Button.B)) {
        vol += -10
    }
})
