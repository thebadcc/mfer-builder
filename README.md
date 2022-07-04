![image](https://github.com/thebadcc-eth/mfer-builder/blob/main/images/mferBanner.PNG?raw=true)

# mfer-builder SDK

**Assets & Playground**

All images pull from [cerealbox.wtf](https://www.cerealbox.wtf/traits) and are archieved in this repository under [images](https://github.com/thebadcc-eth/mfer-builder/tree/main/images).

[You can find a working playground here](https://thebadcc-eth.github.io/mfer-builder/).

**Install**

Add the following Javascript Library to your header:

`
<script src="https://raw.githubusercontent.com/thebadcc-eth/mfer-builder/main/scripts/script.js"></script>
`

**Seed**

mfers are generated using a 28 length "seed" of numbers expressed as a string ('xxxxxxxxxxxxxxxxxxxxxxxxxxx'). Each trait is 'xx' for a total of 14 traits and may be expressed using the following convention:

* None: -1
* Random: 00
* Trait 1: 01
* Trait 2: 02
* ... and so forth.

If you exceed the trait maximum, that trait will be reset to random.

For Example:

* 0000000000000000000000000000 would mean all mfer traits are selected at random
* -100000000000000000000000000 would mean there was no background

**Function**

