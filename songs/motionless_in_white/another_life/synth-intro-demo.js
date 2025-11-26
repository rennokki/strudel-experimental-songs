setcpm(160/4)

// Ricky
// Not complete AND wrong (did just by hearing the song), just for demo purposes.
$: note("<[52 52 59 52 59 60 62 52] [52 52 59 52 <59 52 59 52> <52 59 52 59> <59 52 52 59> 60]>")
.sound("<supersaw@10 sawtooth@2>")
.lpf("<1100@10 800@2>")
.gain(0.4)
._pianoroll({ labels: true, cycles: 6, playhead: 0.2 })
// Vinny
$: stack(
  sound("rolandtr626_hh").struct("<1 1 1 1 1 1 1 1>*8")
    .gain(0.02)
    .pan(0.2),
  sound("rolandtr626_bd").struct("<1 1 <1 1 0 1> 1 ~ ~ <~ ~ ~ 1> <~ ~ ~ 1>>*8")
    .gain(0.3)
    .legato("<1.5 1.5 1.5 2.5>"),
  sound("rolandtr707_sd").struct("<<0 0 0 0 0 0 0 1> <0 0 0 0 0 0 0 1> ~ 1 ~ <~ ~ ~ 1> <~ ~ ~ 1> <~ ~ ~ 1>>*8")
    .gain(0.2)
    .legato("<1.2 1.2 1.2 1.5>")
    .release(5)
    .sustain(1.5)
)
._pianoroll({ labels: true, cycles: 6, playhead: 0.2 })

// Ryan
// Not complete, just for demo purposes.
_$: note(`
    <[A3,D3]*4 [A3,D3]*4 [A3,D3]*4 [A3,D3]*4>*2
`)
.trans(`
  [7,5]@3 <[7,4] [[7,7] [7,9]]>
`)
.sound("gm_electric_guitar_muted")
.gain(0.2)
.distort(".9:1.3")
// .echo(1.2, 1/128, .3)
.legato(1.3)
._pianoroll({ labels: true, cycles: 6, playhead: 0.2 })
