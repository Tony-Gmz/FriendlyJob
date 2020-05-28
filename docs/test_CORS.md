
```html

{# Ce code est à mettre dans une vue twig #}
{# Elle permet de faire une requete XHR afin de tester le CORS #}
{# https://developer.mozilla.org/fr/docs/Web/HTTP/CORS #}
{# https://codereviewvideos.com/course/beginners-guide-back-end-json-api-front-end-2018/video/symfony-4-cors-json-api #}

<div>

    <button id="ajaxButton" type="button">Make a request</button>

    <script>
    (function() {
      var httpRequest;
      document.getElementById("ajaxButton").addEventListener('click', makeRequest);

      function makeRequest() {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
          console.error('Giving up :( Cannot create an XMLHTTP instance');
          return false;
        }
        httpRequest.onreadystatechange = logContents;
        // Afin de pouvoir tester plein de cas il faut changer la méthode HTTP et/ou le lien de l'api
        // Afin de test il faut ouvrir avec php un serveur sur le port 8080 & le port 8081
        // Modifier le config/packages/nelmio_cors.yaml afin de procéder à divers test !
        httpRequest.open('GET', 'http://localhost:8080/api/v1/services');
        httpRequest.send();
      }

      function logContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            console.log('success', httpRequest.responseText);
          } else {
            console.error('There was a problem with the request.', httpRequest);
          }
        }
      }
    })();
    </script>

</div>
```