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
music.setBuiltInSpeakerEnabled(true)
radio.setGroup(69)
basic.forever(function () {
    music.setVolume(vol)
    led.plotBarGraph(
    vol,
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        vol += -5
        if (vol < 0) {
            vol = 0
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        vol += 5
        if (vol > 255) {
            vol = 255
        }
    }
})
basic.forever(function () {
    led.toggle(2, 2)
    basic.pause(100)
})
