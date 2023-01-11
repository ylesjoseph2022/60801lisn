input.onSound(DetectedSound.Loud, function () {
    開關 = !(開關)
    if (true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let 開關 = false
input.setSoundThreshold(SoundThreshold.Loud, 104)
