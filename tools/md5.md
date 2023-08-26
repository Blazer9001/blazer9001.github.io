---
layout: default
title: md5 hasher
permalink: /tools/md5
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
<script type="text/javascript" src="/scripts/md5.js"></script>

## md5

<p>returns md5 hash</p>
<br>
<label for="inputField">Input:</label>
<input type="text" id="inputField" onkeyup="md5()" onkeydown="md5()" onchange="md5()">
<br>
<span id="output"></span>
