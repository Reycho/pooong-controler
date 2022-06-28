input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("left")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
})
radio.setGroup(69)
basic.showLeds(`
    # # # # #
    # . . . .
    # . . . .
    # . . . .
    # # # # #
    `)
basic.forever(function () {
    led.toggle(4, 2)
    basic.pause(100)
})
