
function copyToClipboard(target) {
  var element = document.getElementById(target);
  var text = element.innerHTML;
  var textArea = document.createElement("textarea")
  textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}


  window.onload=setTimeout((event) => {
    var section = document.getElementById('sectionToggle');
    if (section.classList.contains('s-hide')) {
      section.classList.remove('s-hide');
    } else {
      section.classList.add('s-hide');
    }
  }, 3000);

window.onload = (event) => {
        document.getElementById("toggleButton").addEventListener('click', function() {
        var section = document.getElementById('sectionToggle');
        if (section.classList.contains('s-hide')) {
          section.classList.remove('s-hide');
        } else {
          section.classList.add('s-hide');
        }
      });
  };
function change(param){
  var txt = "Promo-code:";
  var section = document.getElementById('sectionToggle');
  if (section.classList.contains('s-hide')) {
    return
  } else {
    document.getElementById(param).value = txt;
  }
}