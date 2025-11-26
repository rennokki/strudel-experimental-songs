setcpm(121/4)

const visOptions = { labels: true, cycles: 1, playhead: 0.2 }

// Flake Synth
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

// Christoph Ramp-up into song
// TODO: increase slowly the volume
$: sound(`<
  linn9000_sd
>`)
  .struct(`
    [<1@2 1@2>*<4@2 8@1 16@0.5 32@0.5>]
`)
  ._punchcard(visOptions)
