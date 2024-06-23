let add = document.getElementById("ptn_add");
let dlt = document.getElementById("ptn_dlt");
let edit = document.getElementById("ptn_edit");

function Array_Formation(User_input) {
  let Array = [];
  let sentence = "";
  let idx = 0;
  while (User_input.value[idx] != ".") {
    if (User_input.value[idx] == ";") {
      Array.push(sentence);
      sentence = "";
      idx++;
      continue;
    }

    if (!(User_input.value[idx] == " " && sentence.length == 0)) {
      let new_sentence = sentence.concat(User_input.value[idx]);
      sentence = new_sentence;
    }
    idx++;
  }
  Array.push(sentence);

  return Array;

}


  





