function processData(input) {
  //Enter your code here
  const inputArr = input.split("\r\n");

  for (let input of inputArr) {
    const [operation, type, content] = input.split(";");
    const resultArr = [];
    let resultStr = "";

    switch (operation) {
      case "S":
        let holdContent = content;
        let srchIdx = holdContent.search(/[A-Z]/);

        while (srchIdx !== -1) {
          srchIdx > 0 && resultArr.push(holdContent.slice(0, srchIdx));
          holdContent = holdContent[srchIdx].toLowerCase() + holdContent.slice(srchIdx + 1);
          srchIdx = holdContent.search(/[A-Z]/);
        }

        if (type === "M") holdContent = holdContent.slice(0, -2);

        resultArr.push(holdContent);
        resultStr = resultArr.join(" ");
        break;

      case "C":
        for (let word of content.split(" ")) {
          resultArr.push(word[0].toUpperCase() + word.slice(1));
        }

        resultStr = resultArr.join("");
        if (type !== "C")
          resultStr = resultStr[0].toLowerCase() + resultStr.slice(1);
        
        if (type === "M") resultStr += "()";
        break;
    }
    console.log(resultStr);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
