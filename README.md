![image](https://github.com/thebadcc-eth/mfer-builder/blob/main/images/mferBanner.PNG?raw=true)

# mfer-builder SDK

**Assets & Playground**

All images pull from [cerealbox.wtf](https://www.cerealbox.wtf/traits) and are archieved in this repository under [images](https://github.com/thebadcc-eth/mfer-builder/tree/main/images).

Here we build a working [mfer Playground](https://thebadcc-eth.github.io/mfer-builder/) to create your own mfer. If you'd like to generate mfers on your own site, please see the installation guide below.

**Install**

Add the following Javascript link at the end of your HTML in the <body>:

```
<script src="https://raw.githubusercontent.com/thebadcc-eth/mfer-builder/main/scripts/script.js"></script>
```

Add the mfer wrapper to your HTML:

```
<div class="html-content-holder"></div>
<div class="mferWrapper">
    <div class="mferImg"></div>
</div>
```

In order to generate the image(s), you must then execute the generateMfers() function. For example, the [mfer Playground](https://thebadcc-eth.github.io/mfer-builder/) utilizes this function onload:
```
<body onload="generateMfers(100, '0000000000000000000000000000')">
```


**generateMfers()**    
 
The generateMfers() function requires two inputs:
* Number of mfers to generate; and 
* A 28 character seed expressed as a string.

   
    
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


