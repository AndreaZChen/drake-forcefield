'use strict';

var bouncingWords = [
  "Transphobia",
  "Homophobia",
  "Ableism",
  "Marmite",
  "Toxic masculinity",
  "Racism",
  "Repetitive strain injuries",
  "Drake himself",
  "Eifie",
  "<img src='https://cdn.discordapp.com/emojis/574323263564677135.png?v=1'/>",
];

function addBouncingWordsToHtml() {
  var newHtml = "";
  bouncingWords.forEach(function(word) {
    var delay = Math.random() * 1000;
    newHtml +=
      `<div
        class="bouncing-words-wrapper"
        style="animation-delay: -${delay}s"
      >
        <div style="animation-delay: -${delay}s">
          <div style="animation-delay: -${delay}s">
            <span style="animation-delay: -${delay}s">
              ${word}
            </span>
          </div>
        </div>
      </div>`;
  });
  
  document.getElementById("bounce-area").innerHTML = newHtml;
};

addBouncingWordsToHtml();
