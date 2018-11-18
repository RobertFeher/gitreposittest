var kavek = [
  { fajta: 'arabica', kod: 'ara', orszag: 'Arab-emiratus', erosseg: 7, keszlet: 2, keszletsuly: 4, ar: 600 },
  { fajta: 'columbia', kod: 'col', orszag: 'Columbia', erosseg: 5, keszlet: 3, keszletsuly: 8, ar: 550 },
  { fajta: 'india', kod: 'ind', orszag: 'India', erosseg: 8, keszlet: 5, keszletsuly: 9, ar: 700 },
  { fajta: 'ecuador', kod: 'ecu', orszag: 'Ecuador', erosseg: 6, keszlet: 4, keszletsuly: 7, ar: 650 }
];


function kiirKavek(kavetomb) {
  var result = '';
  for (var i = 0; i < kavetomb.length; i++) {
    result += kiirKavekObjektum(kavetomb[i]);
  }
  return result;
}


alert(kiirKavek(kavek));

function kiirKavekObjektum(kave) {
  var result = '';
  for (var k in kave) {
    result += k + ' : ' + kave[k] + ', ';
    result += '\n';
  }
  return result;
}


function kavetipus() {
  var valaszt = document.querySelector('#kavek').value;
  var found = valaszt.toLowerCase();
  for (var i = 0; i < kavek.length; i++) {
    if (kavek[i].fajta.toLowerCase().indexOf(found) > -1) {
      eredmeny = kavek[i];
      break;
    } else {eredmeny = 'Nincs ilyen kávé';}
  }
  alert(kiirKavekObjektum(eredmeny));
}

function mennyiseg() {
  var kavekrendelesre = [];
  for (var k in kavek) {
    if (kavek[k].keszletsuly < 5) {
      kavekrendelesre.push(kavek[k]);
    }
  }
  alert(kiirKavek(kavekrendelesre));
}

function erosseg() {
  var erosseg1 = [];
  var erosseg2 = [];
  var erosseg3 = [];
  for (var k in kavek) {
    if (kavek[k].erosseg <= 3) {
      erosseg1.push(kavek[k]);
    } else if (kavek[k].erosseg <= 6) {
      erosseg2.push(kavek[k]);
    } else {
      erosseg3.push(kavek[k]);
    }
  }
  alert('Erős: ' + kiirKavek(erosseg3) + '\n' + 'Közepes: ' + kiirKavek(erosseg2) + '\n' + 'Könnyű: ' + kiirKavek(erosseg1) + '\n');
}

function maxar() {
  var maxar = 0;
  for (var k in kavek) {
    if (maxar < kavek[k].ar) {
      maxar = kavek[k].ar;
    }
  }
  alert(maxar);
}

function minar() {
  var minar = kavek[0].ar;
  for (var i = 0; i < kavek.length; i++) {
    console.log(kavek[i]);
    if (kavek[i].ar < minar) {
      minar = kavek[i].ar;
    }
  }
  alert(minar);
}

function atlag() {
  var aratlag = 0;
  var arsum = 0;
  for (var k in kavek) {
    arsum += kavek[k].ar;
  }
  aratlag = arsum / kavek.length;
  alert(aratlag);
}

function nevSzerint() {
  for (var i = 0; i < kavek.length - 1; i++) {
    for (var j = i + 1; j < kavek.length; j++) {
      var compOrszag = kavek[i].orszag.localeCompare(kavek[j].orszag);
      if (compOrszag > 0) {
        var temp = [kavek[i], kavek[j]];
        kavek[i] = temp[1];
        kavek[j] = temp[0];
      } else if (compOrszag === 0) {
        var compFajta = kavek[i].fajta.localeCompare(kavek[j].fajta);
        if (compFajta > 0) {
          [kavek[i], kavek[j]] = [kavek[j], kavek[i]];
        }
      }
    }
  } alert(kiirKavek(kavek));
}


function upperCase() {
  for (var i = 0; i < kavek.length; i++) {
    kavek[i].orszag = kavek[i].orszag.toUpperCase();
  }
}
upperCase();

var content = document.querySelector('.content');
content.innerHTML = kiirKavek(kavek);

function div() {
  var containerDiv = document.querySelector('.content');
  for (var j in kavek) {
    var btn = document.createElement('button');
    btn.innerHTML = kavek[j].fajta + ' rendelés';
    containerDiv.appendChild(btn);
  }
}

div();
