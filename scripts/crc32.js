function crc32() {
	var text = document.getElementById("inputField").value;
	const poly = 0xEDB88320;
	let crc = 0xFFFFFFFF;
  
	for (let i = 0; i < text.length; i++) {
	  crc ^= text.charCodeAt(i);
  
	  for (let j = 0; j < 8; j++) {
		crc = (crc >>> 1) ^ ((crc & 1) * poly);
	  }
	}
  
	crc ^= 0xFFFFFFFF;
	crc >>>= 0; // Convert to unsigned 32-bit integer

	document.getElementById("output").textContent = crc;

  }
  