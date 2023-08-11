

//KAPATMA DUGMESI

let myNodeList = document.getElementsByTagName("li")
let i 
for (i = 0 ; i < myNodeList.length; i++) {
    let span = document.createElement("span")
    let text = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(text)
    myNodeList[i].appendChild(span) }




// OGELERI TAMAMEN KAPATMA

let close = document.getElementsByClassName("close")
for (let j = 0 ; j < close.length ; j++) {
    close[j].onclick = function() {
        let div = this.parentElement ;
        div.style.display = "none"
    }
}

// YAPILDI OLARAK ISARETLEME

let list = document.querySelector("ul")
list.addEventListener("click", function(element) {
      if (element.target.tagName === "LI") {
         element.target.classList.toggle("checked");
      }

}, false);

// EKLE BUTONU BASILDIGINDA EKLEME

function newElement() {
    let li = document.createElement("li")
    let inputValue = document.getElementById("task").value
    let t = document.createTextNode(inputValue)    
    li.appendChild(t)
    if(inputValue === "") {
       alert ("LİSTEYE BOS EKLEME YAPAMAZSINIZ !!!")

    } else {
      document.getElementById("list").appendChild(li)

    }
    
    document.getElementById("task").value = ""

    let span = document.createElement("span")
    let text = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(text)
    li.appendChild(span)
    
    for (let i=0 ; i < close.length ; i++) {
         close[i].onclick = function() {
          let div = this.parentElement
          div.style.display = "none"

         }

    }

}

/*

// Kapatma düğmesini her öğeye ekleme

var myNodeList = document.getElementsByTagName("li")
var i
for(i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("span")
    var text = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(text)
    myNodeList[i].appendChild(span)
}

// Öğeleri tamamen kapatma

var close = document.getElementsByClassName("close")
var i
for(i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement
        div.style.display = "none"
    }
}


// Checked ekleme

var list = document.querySelector('ul');
list.addEventListener('click', function(element) {
    if (element.target.tagName === 'LI') {
        element.target.classList.toggle('checked');
    }
}, false);

// Ekle butonuna basınca yeni elemanı listeye ekleme

function newElement() {
    var li = document.createElement("li")
    var inputValue = document.getElementById("task").value
    var t = document.createTextNode(inputValue)
    li.appendChild(t)
    if (inputValue === "" ) {
        alert("Listeye boş ekleme yapamazsınız!")
    } else {
        document.getElementById("list").appendChild(li)
    }
    document.getElementById("task").value = ""

    var span = document.createElement("span")
    var text = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(text)
    li.appendChild(span)

    for(i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement
            div.style.display = "none"
        }
    }
}


-----


}
*/


