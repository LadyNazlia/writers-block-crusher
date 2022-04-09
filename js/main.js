document.querySelector('button').addEventListener('click', getWord1)
document.querySelector('button').addEventListener('click', getWord2)
document.querySelector('button').addEventListener('click', getWord3)
let word = ''
let definition = ''

function getWord1() {
  fetch("https://random-words-api.vercel.app/word")
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        word = data[0].word
        definition = data[0].definition
        document.querySelector('#word1').innerHTML = `${word}`;
        document.querySelector('#def1').innerHTML = `Definition: ${definition}`;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  }

  function getWord2() {
    fetch("https://random-words-api.vercel.app/word")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          word = data[0].word
          definition = data[0].definition
          document.querySelector('#word2').innerHTML = `${word}`;
          document.querySelector('#def2').innerHTML = `Definition: ${definition}`;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    }

    function getWord3() {
      fetch("https://random-words-api.vercel.app/word")
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data)
            word = data[0].word
            definition = data[0].definition
            document.querySelector('#word3').innerHTML = `${word}`;
            document.querySelector('#def3').innerHTML = `Definition: ${definition}`;
          })
          .catch(err => {
              console.log(`error ${err}`)
          });
      }
    










// function getWords(){
//   let i = 0
// while(i < 3) {
//   fetch("https://random-words-api.vercel.app/word")
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         word = data[0].word
//         definition = data[0].definition
//         printWordAndDef(i, word, definition);
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
//       i++;
      
      
//     }
//   }

// function printWordAndDef(i, word, definition) {
//     if (i === 1) {
//        document.querySelector('#word1').innerHTML = `${word}`;
//        document.querySelector('#def1').innerHTML = `${definition}`;
//       } else if (i === 2) {
//         document.querySelector('#word2').innerHTML = `${word}`;
//          document.querySelector('#def2').innerHTML = `${definition}`;
//         } else if (i === 3) {
//           document.querySelector('#word3').innerHTML = `${word}`;
//           document.querySelector('#def3').innerHTML = `${definition}`;
//         }
//       }
