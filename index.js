     const who = ['My dog' , 'Your cat', 'The dinosaur'];
     const what = [' ate my homework', ' threw my homework away'];
     const when = [' today', ' yesterday'];

     randomNumberWho = Math.floor(Math.random() * who.length);
     randomNumberWhat = Math.floor(Math.random() * what.length);
     randomNumberWhen = Math.floor(Math.random() * when.length);

    let excuse =

    who[randomNumberWho] + what[randomNumberWhat] + when[randomNumberWhen]


    let excuseSentence = document.querySelector("#whatever")
    excuseSentence.innerHTML = excuse;