---
layout: default
title: roman numerals
permalink: /tools/roman
---

<script type="text/javascript" src="/scripts/roman.js"></script>

## roman numerals

<p>returns romanized integers</p>
<br>
<label for="inputField">Input:</label>
<input type="text" id="inputField" onkeyup="romanize()" onkeydown="romanize()" onchange="romanize()">
<br>
<span id="output"></span>