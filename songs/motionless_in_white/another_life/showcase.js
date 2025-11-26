setcpm(160/4)

// Proved to not be working if passed via interpolation.
// const gtr_pm = `gm_electric_guitar_muted`
// const gtr_h = "gm_guitar_harmonics"
// const ricky = "gm_electric_guitar_jazz"

const visOptions = { labels: true, cycles: 1, playhead: 0.2 }

// Intro Riff
// Low ........ High
// A  E  A  D  F#  B

const drums = {
  verseRiff: () => stack(
    sound("rolandtr626_hh").struct("<1 1 1 1 1 1 1 1>*8")
      .gain(0.03)
      .pan(0.15),
    sound("rolandtr626_bd").struct("<1 1 <1 1 0 1> 1 ~ ~ <~ ~ ~ 1> <~ ~ ~ 1>>*8")
      .gain(0.35)
      .legato("<1.5 1.5 1.5 2.5>"),
    sound("rolandtr707_sd").struct("<<0 0 0 0 0 0 0 1> <0 0 0 0 0 0 0 1> <0 0 0 1 0 0 0 0> 1 ~ <~ ~ ~ 1> <~ ~ ~ 1> <~ ~ ~ 1>>*8")
      .gain(0.2)
      .legato("<1.2 1.2 1.2 1.5>")
      .release(5)
      .sustain(1.5)
  )._punchcard(visOptions),
  chorusStart: () => stack(
    sound("rolandtr626_bd").struct("<<1 1 ~ ~>*4!2 <1 [1 1] ~ 1>*4 <[~ 1] 1 1 1>*4>")
      .legato("<1!2 2.5 2>")
      .gain(0.3),
    sound("rolandtr707_sd").struct("<<~ ~ [1, 1] ~>*4!2 <~ 1 1 [~ 1]>*4 <~ <~ 1> ~ 1>*8>")
      .gain(0.1)
      .release(5)
      .sustain(1.5),
    sound("rolandjd990_cr").struct("<<1 1 ~ ~>*4!2 <1 [1 1] 1 1>*4 <[1 1] 1 1>*4>")
      .gain("<0.1!2 0.075 0.075>")
      .delay("<0.125!2 0 0>")
      .sustain(1.5),
  )._punchcard(visOptions)
}

const leadGuitar = {
  mainRiff: () => note(`<
    [[
      [E3 E3 A3 E3 D3 D3 E3 F#3] [E3 E3 A3 E3 D3 D3 E3 D3]
    ]@2]!12/2
    [[
      [E3 E3 A3 E3 D3 D3 E3 F#3] [E3 E3 A3 E3 D3 D3 E3 D3]
    ]@2]!2/2
    [[
      [E3 E3 A3 E3 D3 D3 E3 F#3] [E3 E3 A3 E3 D3 D3 E3 D3]
    ]@2]!2/2
  >`)
  .trans(`<
    [[
      [0 0 7 0 9 10 0 8]
      [0 0 7 0 7 9 0 9]
    ]@2]!12/2
    [
      [8 8 7 8 9 10 8 9]
      [8 8 7 8 7 9 8 9]
    ]!2/2
    [
      [5 5 7 5 7 9 5 9]
      [5 5 7 5 7 7 7 7]
    ]!2/2
  >`)
  .release(0.75)
  .scale("A:minor")
  .sound(`
    gm_electric_guitar_muted@2
    gm_electric_guitar_jazz@1
    gm_electric_guitar_muted@1
    gm_electric_guitar_jazz@2
    gm_electric_guitar_muted@1
    gm_electric_guitar_jazz@1
  `)._punchcard(visOptions)
}

const rythmGuitar = {
  mainRiff: () => note(`<
    <[A2,D2]*8>!2
    <[A2,D2]*8>!2
    <[A1,D1]*8>!2
    <[A2,E2]*8>!1.5
    <[E2,D2]*8>!0.5
  >`)
  .scale(`A:minor`)
  .trans(`
    <
      <[[7,5]@1.5 [7,4]@0.5]>@2
      <[[7,5]@2.5 [[7,7]@0.5 [7,9]@0.5]]>@2
      <[[3,5]@1 [[3,4]@0.5 [2,3]@0.5]]>@2
      <[[0,0]@1.5]>@1.5
      <[[7,9]@2]>@0.5
    >
  `)
  .release(0.25)
  .gain(0.15)
  .sound(`piano`)
  ._punchcard(visOptions)
}

$: drums.verseRiff()
$: leadGuitar.mainRiff()
$: rythmGuitar.mainRiff()
