input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("G G G G C C C C ", 120), music.PlaybackMode.UntilDone)
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
basic.showArrow(ArrowNames.NorthWest)
basic.showString("is game")
