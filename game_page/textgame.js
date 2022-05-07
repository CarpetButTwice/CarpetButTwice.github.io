//code base taken from https://www.youtube.com/watch?v=R1S_NhKkvGA
//global variables
let currentNode;
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
let textNodes = [];
//starts game
function startGame() {
    state = {}
    showTextNode(0)
}
//displays correct text on buttons
function showTextNode(textNodeIndex) {
    currentNode = textNodes[textNodeIndex];
    textElement.innerText = currentNode.text;
    //button var
    const buttons = ["btn1", "btn2", "btn3", "btn4"];
    for(let i = 0; i < 4; i++) {
        //hides buttons when no option is available
        if(currentNode.options[i] == undefined) {
            document.getElementById(buttons[i]).style.display = 'none';
        } else {
            document.getElementById(buttons[i]).innerHTML = currentNode.options[i].text;
            if(currentNode.options[i].text.length == 0) {
                document.getElementById(buttons[i]).style.display = 'none';
            } else {
                document.getElementById(buttons[i]).style.display = 'inline';
            }
        }
    }
}
//continues to the correct next textNode
function selectOption(option_index) {
    const nextTextNodeId = currentNode.options[option_index].nextText
    if(nextTextNodeId <= 0) {
        return startGame()
    }
    if(change_Education = 0) {
        return startGame()
    }
    showTextNode(nextTextNodeId)
}
//load game.tsv info into webpage
function textGame() {
    //lets for tsv -> array
    let request = new XMLHttpRequest();
    request.open('GET', 'game.tsv', false);
    request.send();
    let text = "";
    text = request.responseText;
    let split = text.split("\n");
    textNodes = [];
    for(let i = 1; i < split.length; i++) {
        let entry = split[i].split("\t");
        //game information
        let node = {
            id: entry[0],
            text: entry[6],
            options: [{
                text: entry[10],
                nextText: entry[11],
                change_Education: entry[2],
                change_Money: entry[3],
                change_Social: entry[4],
                change_Happiness: entry[5],
                change_Health: entry[6],
            }, {
                text: entry[12],
                nextText: entry[13],
            }, {
                text: entry[14],
                nextText: entry[15],
            }, {
                text: entry[16],
                nextText: entry[17],
            }, ]
        };
        //puts out textNode
        textNodes.push(node);
    }
}
//makes sure game loads into webpage at start
textGame()
startGame()