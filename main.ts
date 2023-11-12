input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    mode = 0
})
input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        mode = 1
    } else if (mode == 1) {
        game.setLife(1)
        s.set(LedSpriteProperty.X, 2)
        s.set(LedSpriteProperty.Y, 0)
        turtle.setPosition(2, 4)
        mode = 2
    } else if (mode == 2) {
        x += -1
        turtle.setPosition(x, 4)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == 0) {
        music.play(music.stringPlayable("C C C C G G G G ", 120), music.PlaybackMode.UntilDone)
    } else if (mode == 2) {
        x += 1
        turtle.setPosition(x, 4)
    } else {
    	
    }
})
let x = 0
let s: game.LedSprite = null
let mode = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
mode = 0
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
basic.showArrow(ArrowNames.West)
basic.showString("is game")
basic.forever(function () {
    if (mode == 2) {
        s.change(LedSpriteProperty.Y, 1)
        if (s.get(LedSpriteProperty.Y) == 4) {
            if (s.get(LedSpriteProperty.X) == x) {
                game.addLife(1)
            } else {
                game.addLife(-1)
            }
            if (game.isGameOver()) {
                mode = 0
            }
        }
    }
})
