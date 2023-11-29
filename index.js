function animateButton() {
    var button = document.querySelector('button');
    button.style.transform = 'scale(1.1)';
    
    setTimeout(function() {
      button.style.transform = 'scale(1)';
    }, 300);
  }
  