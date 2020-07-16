      let timer = {};
      let index = 0;

      pictures = new Array()
      pictures[0] = 'assets/images/window1.jpg';
      pictures[1] = 'assets/images/window2.jpg';
      pictures[2] = 'assets/images/window3.jpg';
      pictures[3] = 'assets/images/window4.jpg';
      pictures[4] = 'assets/images/window5.jpg';
      pictures[5] = 'assets/images/window6.jpg';
      pictures[6] = 'assets/images/window7.jpg';
      pictures[7] = 'assets/images/window8.jpg';
      pictures[8] = 'assets/images/window9.jpg';

      liens = new Array()
      liens[0] = 'lien_image1.html';
      liens[1] = 'lien_image2.html';
      liens[2] = 'lien_image3.html';
      liens[3] = 'lien_image4.html';
      liens[4] = 'lien_image5.html';
      liens[5] = 'lien_image6.html';
      liens[6] = 'lien_image7.html';
      liens[7] = 'lien_image8.html';
      liens[8] = 'lien_image9.html';

      function startTrombi() {
          if (index > pictures.length -1 ) {
            index = 0;
          }
          changerImage(index);
          index++;
          timer = window.setTimeout(startTrombi, 2000);
      }

      function stopTrombi() {
        clearTimeout(timer);
      }

      document.querySelector('#box').addEventListener('mouseenter', function () {
        stopTrombi();
      })

      document.querySelector('#box').addEventListener('mouseout', function () {
        startTrombi();
      })

      let keepgoing = true;

function changerImage(indice) {
      imageVisible = '<img border="0" src="'+pictures[indice]+'" width="500px">';
      document.getElementById('box').innerHTML = imageVisible;
}
