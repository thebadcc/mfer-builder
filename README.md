![image](https://github.com/thebadcc-eth/mfer-builder/blob/main/images/mferBanner.PNG?raw=true)

# mferBuilder SDK

**Assets & Playground**

All images pull from [cerealbox.wtf](https://www.cerealbox.wtf/traits) and are archieved in this repository under [images](https://github.com/thebadcc-eth/mfer-builder/tree/main/images).

A working [mfer Playground](https://thebadcc-eth.github.io/mfer-builder/) is available to create your own mfer. If you'd like to generate mfers on your another site, please see the installation guide below.

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

You can change the displayed image(s) size via CSS of the html-content-holder:
```
.html-content-holder {
  width: 300px;
  height: 300px;
  background-size: contain; 
}
```

**generateMfers()**    
 
The generateMfers() function requires two inputs:
* Number of mfers to generate; and 
* A 28 character seed expressed as a string.

The seed instructs the function to pull certain image layers, process any exclusion rules (e.g. long hair & hoodies, shirts & chains, etc.), and convert them into one image using html2canvas.
    
**Seeds**

Seeds are a length of 28 characters (e.g. '-1', '00', '01', etc.) expressed as a string ('xxxxxxxxxxxxxxxxxxxxxxxxxxx'). Each trait is represented by 'xx' for a total of 14 traits under the following conventions:

* None: -1
* Random: 00
* Trait 1: 01
* Trait 2: 02
* ... and so forth.

If you exceed the trait maximum, that trait will be automatically reset to random ('00').

For Example:

* 0000000000000000000000000000 would mean all traits are selected at random;
* -100000000000000000000000000 would mean there was no background and all other traits are selected at random.

**Building a Seed**


