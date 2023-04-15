let typingWord = document.getElementsByClassName('typing_item');
        for(let i = 0; i<typingWord.length; i++){
            let text = typingWord[i].innerText;
            typingWord[i].innerText=''; 
            let j = 0;
            function typing(){
                if(j<text.length){
                    typingWord[i].innerHTML+=text.charAt(j);
                    j++
                    setTimeout(typing,150)
                }
          }
          typing()
        }

let pTag = document.getElementsByClassName('p_item');
        for(let i = 0; i<pTag.length; i++){
            let text = pTag[i].innerText;
            pTag[i].innerText=''; 
            let j = 0;
            function typing(){
                if(j<text.length){
                    pTag[i].innerHTML+=text.charAt(j);
                    j++
                    setTimeout(typing,50)
                }
          }
          typing()
        }        