![image](https://github.com/thebadcc-eth/mfer-builder/blob/main/images/mferBanner.PNG?raw=true)

# mferBuilder v1

**Assets & Playground**

All traits pull from and are archieved in this repository under [images](https://github.com/thebadcc-eth/mfer-builder/tree/main/images).

A working [mfer playground](https://thebadcc.github.io/mfer-builder/) is available to create your own mfer. If you'd like to generate mfers on another site, please see the installation guide below.

**Installation Guide**

Add the following libraries in your `<head>` tag:

```
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.7/dist/html2canvas.js"></script>
</head>
```

Add the following script  at the end of your `<body>` tag:

```
<body>
    ....
    <script src="https://raw.githubusercontent.com/thebadcc/mfer-builder/main/scripts/script.js"></script>
</body>
```

Add the content holder and mfer wrapper to your HTML:

```
<div class="html-content-holder"></div>
<div class="mferWrapper">
    <div class="mferImg"></div>
</div>
```

In order to generate the image(s), you must execute the generateMfers() function. For example, the [mfer playground](https://thebadcc-eth.github.io/mfer-builder/) utilizes this function onload to generate 12 random mfers within the mferWrapper:
```
<body onload="generateMfers(12, '0000000000000000000000000000')">
```

You can change the displayed image(s) size via CSS:
```
.html-content-holder {
  width: 300px;
  height: 300px;
  background-size: contain; 
}

.mferImg {
  text-align: center;
}

.mferImg img {
margin: 10px;
}
```

**generateMfers()**    
 
The generateMfers(number, string) function requires two inputs:
* Number of mfers to generate; and 
* A 28 character seed expressed as a string.

The seed instructs the function to pull certain image layers, process any exclusion rules (e.g. long hair & hoodies, shirts & chains, etc.), and convert them into one image using html2canvas.
    
**Seeds**

Seeds are a length of 28 characters (e.g. '00', '01', '02', etc.) expressed as a string ('xxxxxxxxxxxxxxxxxxxxxxxxxxx'). Each trait is represented by 'xx' for a total of 14 traits under the following conventions:
* Random: 00
* None: 01
* Trait 1: 02
* Trait 2: 03
* ... and so forth.

If you exceed the trait maximum, the image will not render. Future releases will default these invalid traits to random ('00').

To create a seed, see the trait list below for guidance or generate a seed using the [mfer playground](https://thebadcc-eth.github.io/mfer-builder/):
* xx(1): background
* xx(2): type    
* xx(3): eyes
* xx(4): mouth  
* xx(5): headphones
* xx(6): smoke  
* xx(7): watch
* xx(8): beard    
* xx(9): hoodies
* xx(10): shirt  
* xx(11): longHair
* xx(12): hatsUnder  
* xx(13): hatsOver
* xx(14): shortHair 
   
For example, generateMfers(1,'0205030305030401011301010111') will create the below image:

![image](https://github.com/thebadcc-eth/mfer-builder/blob/main/images/exampleMfer.png?raw=true)

Enjoy,
    
thebadcc
 
## LICENSE (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
