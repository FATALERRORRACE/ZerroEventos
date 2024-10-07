<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@include('app.head')

<body class="antialiased">
    <div class="container text-center" class="stepper-container">
        <div class="row justify-content-md-center">
          <div class="col-sm-12 col-md-12 col-lg-11 col-xl-10">
              <div class="d-flex justify-content-around">
                  <div>
                      <button class="stepper-selector btn btn-success rounded-circle" type="button"
                          data-target="collapseStepper1">1</button>
                      <p>Cargar archivo</p>
                  </div>
                  <hr id="collapseStepper2-id" class="btn-secondary">
                  <div>
                      <button class="stepper-selector btn btn-secondary rounded-circle" type="button"
                          data-target="collapseStepper2">2</button>
                      <p>Crear Columnas</p>
                  </div>
                  <hr id="collapseStepper3-id" class="btn-secondary">
                  <div>
                      <button class="stepper-selector btn btn-secondary rounded-circle" type="button"
                          data-target="collapseStepper3">3</button>
                      <p>Seleccionar Elementos</p>
                  </div>
              </div>
          </div>
        </div>
        <div class="collapse" id="collapseStepper1">
            <div class="card card-body">
                <div class="col">
                    <input type="file" id="file">
                </div>
            </div>
        </div>
        <div class="collapse" id="collapseStepper2">
            <div class="card card-body">
                <div id="spreadsheet"></div>
                <button id="button">Get Data</button>
            </div>
        </div>
        <div class="collapse" id="collapseStepper3">
            <div class="card card-body">
                <div class="col-12">
                    <img id="imageplus"
                        src="img/Formato-para-describir-las-actividades-de-un-proceso-35-MANUAL-DE-PROCESOS-El-manual-de.png">
                </div>
            </div>
        </div>

    </div>
    @include('app.js')
</body>

</html>
