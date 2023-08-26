---
layout: default
title: base64
permalink: /tools/base64
---

<script type="text/javascript" src="/scripts/b64.js"></script>

## base64

<p>ascii input only please</p>
<br>
<label for="decInput">Encode Text</label>
<input type="text" id="decInput" onkeyup="b64Encode()" onkeydown="b64Encode()" onchange="b64Encode()">
<br>
<span id="enc"></span>
<br>
<br>
<label for="encInput">Decode b64</label>
<input type="text" id="encInput" onkeyup="b64Decode()" onkeydown="b64Decode()" onchange="b64Decode()">
<br>
<span id="dec"></span>
