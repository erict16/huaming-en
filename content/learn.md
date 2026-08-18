# What a tap changer is

A transformer changes voltage. It has several tap points on a winding. A tap changer is the moving switch that picks which tap is live, so the output voltage stays in range as load and network voltage move.

## On-load vs de-energized

**OLTC (on-load tap changer)** changes taps while the transformer is energised. It has to break and make current. That is why it needs a diverter, a vacuum bottle, or an oil arc chamber.

**OCTC / DETC (de-energized tap changer)** changes taps only with the transformer off. Cage (WSL/WDL), drum (WDG), and linear (ZWC) are this family. Do not call them on-load.

## Vacuum vs oil

In an **oil** OLTC the arc happens in transformer oil. In a **vacuum** OLTC the arc happens inside a vacuum interrupter. Vacuum types (CV2, CM2, SHZV, SHZVG, CHVT, HWV, CVT, CZ) make less carbon in the oil.

CV2 is the vacuum CV. CM2 is the vacuum CM. SHZV is the vacuum CMD. Those three are not interchangeable just because they are all vacuum.

## In-tank vs on-tank

Most Huaming OLTCs sit **in the transformer tank**. **HWV** bolts on the tank (on-tank / compartment). The commercial HWV type already includes the motor drive. Do not add CMA7 a second time unless engineering says so.

## Motor drive (MDU)

The tap changer is the switch. The **motor drive** (CMA7, SHM-D, SHM-X, SHM-KX) is the cabinet that turns it. They are accessories, not a fourth tap-changer family.

## How to pick a type tonight

1. On-load or off-circuit?
2. Vacuum or oil? In-tank or on-tank?
3. Current (Iᵤ) and highest voltage (Um) from the catalogue, not from memory.
4. Open the type page and take the PDF.
5. For a first-pass type string, use the [OLTC selector](https://erict16.github.io/oltc-selector/). It is a helper, not a factory confirmation.
