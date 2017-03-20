/**
 * Created by smit9 on 25.05.16
 * https://github.com/smit9
 */

//Determine the position of the cursor at the time the character is entered
var inputText = $(this),
    cursorPozition = inputText[0].selectionStart;

//Initialize the matching array. Replace the Cyrillic alphabet with the Latin alphabet according to the keyboard
var map = {
    'й' : 'q', 'ц' : 'w', 'у' : 'e', 'к' : 'r', 'е' : 't', 'н' : 'y', 'г' : 'u', 'ш' : 'i', 'щ' : 'o', 'з' : 'p', 'х' : '[', 'ъ' : ']',
    'ф' : 'a', 'ы' : 's', 'в' : 'd', 'а' : 'f', 'п' : 'g', 'р' : 'h', 'о' : 'j', 'л' : 'k', 'д' : 'l', 'ж' : ';', 'э' : '\'',
    'я' : 'z', 'ч' : 'x', 'с' : 'c', 'м' : 'v', 'и' : 'b', 'т' : 'n', 'ь' : 'm', 'б' : ',', 'ю' : '.', 'ё' : '\\',
    'Й' : 'Q', 'Ц' : 'W', 'У' : 'E', 'К' : 'R', 'Е' : 'T', 'Н' : 'Y', 'Г' : 'U', 'Ш' : 'I', 'Щ' : 'O', 'З' : 'P', 'Х' : '[', 'Ъ' : ']',
    'Ф' : 'A', 'Ы' : 'S', 'В' : 'D', 'А' : 'F', 'П' : 'G', 'Р' : 'H', 'О' : 'J', 'Л' : 'K', 'Д' : 'L', 'Ж' : ';', 'Э' : '\'',
    'Я' : 'Z', 'Ч' : 'X', 'С' : 'C', 'М' : 'V', 'И' : 'B', 'Т' : 'N', 'Ь' : 'M', 'Б' : ',', 'Ю' : '.', 'Ё' : '|',
    '"' : '@'
};

//Take the string from the input
var str = $(this).val();
var r = '';

//make a replacement for the Cyrillic alphabet in Latin
for (var i = 0; i < str.length; i++) {
    r += map[str.charAt(i)] || str.charAt(i);
}

//Set the value in the input
inputText.val(r);

//Set the cursor to the old position
if( cursorPozition != undefined)
    inputText[0].setSelectionRange(cursorPozition, cursorPozition);