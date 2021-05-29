// data
const products = [
  { id: 1, description: 'Peinture provencale', price: 200, img: 'assets/img/tableau.jpg'},
  { id: 2, description: 'Peinture provencale', price: 250, img: 'assets/img/tableau-deux.jpg'},
  { id: 3, description: 'Peinture provencale', price: 225, img: 'assets/img/tableau-trois.png'},
  { id: 4, description: 'Peinture provencale', price: 200, img: 'assets/img/tableau-quatre.jpg'},
  { id: 5, description: 'Peinture provencale', price: 275, img: 'assets/img/tableau-cinq.jpg'},
  { id: 6, description: 'Peinture provencale', price: 300, img: 'assets/img/tableau-six.jpg'},
  { id: 7, description: 'Peinture provencale', price: 200, img: 'assets/img/tableau-sept.jpg'},
  { id: 8, description: 'Peinture provencale', price: 250, img: 'assets/img/tableau-huit.jpg'},
  { id: 9, description: 'Peinture provencale', price: 275, img: 'assets/img/tableau-neuf.jpg'},
  { id: 10, description: 'Peinture provencale', price: 225, img: 'assets/img/tableau-dix.jpg'},
  { id: 11, description: 'Peinture provencale', price: 300, img: 'assets/img/tableau-onze.jpg'},
  { id: 12, description: 'Peinture provencale', price: 250, img: 'assets/img/tableau-douze.jpg'},
];

// set little red dot above icons nav
window.addEventListener("load", () => {
  let checkbox = document.getElementsByTagName('input'); 
  let notif = document.getElementById('nav-notif');

  // check if at least one of the checkboxes on the DOM is checked
  const checkboxCheck = () => { 
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        return true;
      }
    }
    return false;
  }

  // set red dot
  const setNotif = () => {
    if (checkboxCheck()){
      // console.log('true');
      notif.style.visibility = 'visible';
      notif.style.opacity = '1';
    } else {
      // console.log('false');
      notif.style.visibility = 'hidden';
      notif.style.opacity = '0';
    }
  }
  
  // check once if red dot is needed
  setNotif();

  // watch any change
  document.addEventListener('click', setNotif);

});

