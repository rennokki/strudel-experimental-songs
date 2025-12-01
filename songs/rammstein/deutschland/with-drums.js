setcpm(121/4)

const visOptions = { labels: true, cycles: 1, playhead: 0.2 }

// Flake
$: note(`<
    <B3 B3 E4 B3>
    <B3 E4 B3 B3>
    <E4 B3 B3 E4>
    <B3 B3 E4 E4>
>*16`)
  .trans(-10)
  .legato(0.8)
  .sound("sawtooth")
  .trans(`<
     <3 3 8 3>
     <3 6 3 3>
     <5 3 3 6>
     <3 3 5 3>
  >*16`)
  ._punchcard(visOptions)

// Christoph
// TODO: Someting seems odd?
_$: sound(`<
  linn9000_sd
>`)
.struct(`[<1@2 1@2>]*<4@2 8@1 16@0.5 32@0.5>`)
._punchcard(visOptions)
_$: stack(
  sound(`<linn9000_sd>`)
    .struct(`[<1@2 1@2>]*3`)
    ._punchcard(visOptions),
  
  sound(`s50_oh`)
    .struct(`<1>*3`)
    .gain(0.15)
    .pan(0.3)
    .sustain(0.7)
    .decay(.5)
    .legato(2)
    ._punchcard(visOptions),
  
  sound(`<linn9000_bd>`)
  .struct(`[<1@2 1@2>]*6`)
  ._punchcard(visOptions),
)
