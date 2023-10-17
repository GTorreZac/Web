function igpayAtinlay(str) {
    var returnArray = [],
        wordArray = str.split(' ');

    for (var i = 0; i < wordArray.length; i++) {
        var word = wordArray[i];
        var beginning = word.charAt(0);

        if (/[aeiouAEIOU]/.test(beginning)) {
            returnArray.push(word += 'way');
            continue;
        }

        for (var ii = 1; ii < word.length; ii++) {
            if (/[aeiouAEIOU]/.test(word.charAt(ii))) {
                break;
            } else {
                beginning += word.charAt(ii);
            }
        }

        returnArray.push(word.substr(beginning.length) + beginning + 'ay');
    }
    
    console.log("This is a new word : "+ returnArray )/*+ igpayAtinlay(str))*/
    document.getElementById('result1').innerHTML ="The word in pig latin is: " + returnArray.join("  "); 
    return returnArray.join(" ");
};