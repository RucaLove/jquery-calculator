  // 1. Inputs: #(operands: string), operators, C (clear), =, button clicking
  //  Outputs: total, screen
  // Whatifs: start w/ops, no ops, too many ops, op probs, too many #'s, %0 errors,
  // 2. Divise a plan: E.L. for span to print to screen (class !op)

  $(document).ready(function() {
    let screen = $('#screen')
    let firstOp = '';
    let operator = '';
    let result = '';
    let space = ' ';
    let newNum1 = '';
    let arrNum1 = [];
    // let repeatOp = false;
    // let nextEquation = false;
    // console.log("SCREEN", $(screen));

    $('span').click(function(event) {
      let operand = $(event.target).text()
      // console.log("Numbers", arrNum1);

      //if it is not an 'operator'
      if (!$(this).hasClass("operator")) {
        //If screen contains a zero, take out the zero before inputing new number
        if (screen.text() === 0) {
          screen.text("");
        }
        firstOp += operand;
        screen.append(operand);
      }
      //if it is an 'operator'
      else if ($(this).hasClass("operator")) {
        if (firstOp !== "") {
          arrNum1.push(firstOp);
        }
        // console.log(arrNum1);
        if (this.innerText !== '=') {
          operator = this.innerHTML;
        }

        screen.append(space + operator + space);
        firstOp = '';

        if ($(event.target).attr("id") === "clear") {
          arrNum1 = [];
          firstOp = "";
          screen.text("0");
        }

        if ($(event.target).attr("id") === "equals") {
          // let operator =
          switch (operator) {
            case '+':
              result = Number(arrNum1[0]) + Number(arrNum1[1])
              screen.text(result)
              arrNum1 = [];
              arrNum1.push(result);
              break;
            case '-':
              result = Number(arrNum1[0]) - Number(arrNum1[1])
              screen.text(result)
              arrNum1 = [];
              arrNum1.push(result);
              break;
            case 'x':
              result = Number(arrNum1[0]) * Number(arrNum1[1])
              screen.text(result)
              arrNum1 = [];
              arrNum1.push(result)
              break;
            case '÷':
              result = Number(arrNum1[0]) / Number(arrNum1[1])
              screen.text(result)
              arrNum1 = [];
              arrNum1.push(result)
              break;
            default:
              return "not quite";
          }
        }
      }
    })
  })

  // $(document).ready(function() {
  //    let screen = $('#screen')
  //    var keys = ''
    //  var secondOp = ''
    //  var thirdOp = ''
    //  var total = ''
    //  var operator = ''
    // $('span').click(function(event){
       // console.log(event.target);
       // firstOp += $(event.target).text();
       // screen.text(firstOp);
    //  if (!$(event.target).hasClass('operator')) {
    //    keys += $(event.target).text();
    //    screen.text(keys);
       //!== ('.operator')
       // screen.append(firstOp)
    //  }
    //  if ($(event.target).hasClass('operator') && !$(event.target).attr('id') === 'clear' && !$(equal)) {
    //   screen.text(operator)
    //  }
    //  if ($(event.target).hasClass('operator') && $(event.target).attr('id') === 'clear' && $(event.target).attr('id') === 'equals') {
    //    console.log("HI");
    //  }
      //  if ($("span:contains('C')")) {
      //    screen.text('');
        //  $('#screen').text(' ');
        //  display = '';
        //  operator = '';
      //  }


 //   })
 // })
