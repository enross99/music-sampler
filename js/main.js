// assign variables
let infoDivs = document.querySelectorAll('.info-div');
let albumIcons = document.querySelectorAll('.album-icon');
let players = document.querySelectorAll('audio');

// function to hide all divs
function hideAll() {
  infoDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}

// run that function right away
hideAll();

// when any animal is clicked, make the suitable div appear
albumIcons.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

players.forEach(function(el) {
  el.pause();
  el.currentTime = 0;
});


    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'darkwild':
        document.querySelector('#woh')
        	.style.display = 'block';
        break;
      case 'ynwa':
        document.querySelector('#springday')
        	.style.display = 'block';
        break;
      case 'lytear':
        document.querySelector('#singularity')
        .style.display = 'block';
        break;
      case 'mots7':
        document.querySelector('#blackswan')
        .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this

  } // end of function for clicking

}); // end of forEach()
