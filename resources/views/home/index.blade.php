<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    @include('app.head')
    <body class="antialiased">
        <div class="container text-center" >
            <div class="row">
              <div class="col">
                <input type="file" id="file">
              </div>
              <div>
                <button id="button">Get Data</button>
                <img id="imageplus" src="img/Formato-para-describir-las-actividades-de-un-proceso-35-MANUAL-DE-PROCESOS-El-manual-de.png">
              </div>
              <div id="spreadsheet"></div>
            </div>
          </div>
    </body>
    @include('app.js')
</html>
