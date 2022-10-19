function reverseString(text) {
	var pobierzText;
	var odwrocText;
	var scalText;

	pobierzText = text.split('');
	odwrocText = pobierzText.reverse();
	scalText = odwrocText.join('');
	
	return scalText;
}

console.log( reverseString('Akademia 108') );