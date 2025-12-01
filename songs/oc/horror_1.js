setcpm(200/6)

$: note("<a b e eb>*2")
  .sound("gm_fiddle")

$: note("<g3 b3 a3 c3>*2")
  .sound("gm_electric_guitar_muted")
  .trans("<0 1>@2")

$: note("<a2 b1 a2 [b1 a1]>")
  .sound("wt_digital_bad_day")

$: stack(
  sound("bd").struct("<1 <0 1 0> <1 0 1> 0 0 <1 0 0>>*8"),
  sound("sd").struct("<0 0 1 0 1 0>*4")
)
