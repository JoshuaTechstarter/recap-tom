// Aufgabe: 
// Schreibe eine Funktion createHTMLList(liste)
// Sie soll eine Javascript Liste annehmen und daraus einen HTML String für eine ungeordnete Liste (<ul>) basteln
// Pspw createHTMLList(["eins", "zwei"]) ==> "<ul><li>eins</li> <li>zwei</li> </ul>"

const my_list = [1, 2, 3, 4, 5];

function createHtmlList(my_list, ordered = false) {
    let listItems = my_list.map((elem) => `\t<li>${elem}</li>\n`).join("");
    let listTag = ordered ? "ol" : "ul"; // Wenn 'ordered' true ist, dann 'ol', sonst 'ul'
    let htmlList = `<${listTag}>\n${listItems}\n</${listTag}>`;
    console.log(htmlList);
}

// Beispielaufrufe:
createHtmlList(my_list, false); // Ungeordnete Liste (<ul>)
createHtmlList(my_list, true);  // Geordnete Liste (<ol>)