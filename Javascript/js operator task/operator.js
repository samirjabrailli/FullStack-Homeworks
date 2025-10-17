 let eded1 = Number (prompt(`Birinci ededi daxil edin:`));

    alert(`Birinci eded daxil edildi: ${eded1}`);

    let eded2 = Number (prompt(`Ikinci ededi daxil edin:`));

    alert(`Ikinci eded daxil edildi: ${eded2 }`);

    
    let emel = prompt(`Emeliyyati daxil edin: (+, -, *, /, %):`);

    alert(`Emeliyyat daxil edildi: ${emel}`);

    let operant = {
       "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b !== 0 ? a / b : "Sifira bolme olmaz!"),
  "%": (a, b) => a % b,
  hesabla: function(a, b, op) {
    return this[op] ? this[op](a, b) : "Yanlış əməliyyat!";
  }
    }

    let netice = operant.hesabla (eded1, eded2, emel);

    alert(`Netice: ${eded1} ${emel} ${eded2} = ${netice}`);


