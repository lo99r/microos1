input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
music.play(music.stringPlayable("C C C C G G G G ", 120), music.PlaybackMode.UntilDone)
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    # # # # #
    # # . # #
    # # # # #
    # # . # #
    # # # # #
    `)
basic.showLeds(`
    . # # # .
    . # . # .
    . # # # .
    . # . # .
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # # . # #
    . # # # .
    # # . # #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # # . # #
    # . . . #
    # # . # #
    . # # # .
    `)
basic.showLeds(`
    . # . # .
    # # . # #
    . . . . .
    # # . # #
    . # . # .
    `)
basic.showString("Hello! world!")
basic.showArrow(ArrowNames.North)
basic.showString("is game")
