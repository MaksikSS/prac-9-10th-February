window.onload = function() {
  check = (word) => {
    if (word.length > 8) {
      word = '<span style="background:yellow;">' + word + '</span>';
    } else {
      word;
    }
    return word;
  }

  var str = document.querySelector("#txt").innerText;
  var newt = str.trim().split(' ').map(check).join(' ');
  document.querySelector("#txt").innerHTML = newt;

}


const link = document.createElement('a');
link.href='https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html';
link.innerText='Link';
document.body.appendChild(link);


function countWords(){

   
    var paragraphs = document.getElementsByTagName("p");

   
    var count = 0;

    for(var i = 0; i < paragraphs.length; i++)
    {
      
        count += paragraphs[i].innerHTML.split(' ').length;
    }

    document.getElementById("t").innerHTML = " "+count+" words";
}

countWords();


const paragraph = document.querySelector('p');
 paragraph.innerHTML = paragraph.innerText.replace(/[?]/g, '🤔');
 paragraph.innerHTML = paragraph.innerText.replace(/[!]/g, '😲');







