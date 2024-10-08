<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@include('app.head')

<body class="antialiased">
  @include('app.navbar')
    <div class="modal fade" id="modalColumn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            
          </div>
        </div>
      </div>
    </div>
    <div class="container text-center stepper-container">
        <div class="row justify-content-md-center " >
          <div class="col-sm-12 col-md-12 col-lg-11 col-xl-10 stepper-no-container">
              <div class="d-flex justify-content-around">
                  <div>
                      <button id="stepper-selector-1" class="stepper-selector btn btn-success rounded-circle" type="button" data-target="collapseStepper1">1</button>
                      <p class="stepper-titles">Cargar archivo</p>
                  </div>
                  <hr id="collapseStepper2-id" class="btn-secondary">
                  <div>
                      <button id="stepper-selector-2" class="stepper-selector btn btn-secondary rounded-circle" type="button" data-target="collapseStepper2">2</button>
                      <p class="stepper-titles">Crear Columnas</p>  
                  </div>
                  <hr id="collapseStepper3-id" class="btn-secondary">
                  <div>
                      <button id="stepper-selector-3" class="stepper-selector btn btn-secondary rounded-circle" type="button" data-target="collapseStepper3">3</button>
                      <p class="stepper-titles">Seleccionar Elementos</p>
                  </div>
              </div>
          </div>
        </div>
        <div class="collapse show" id="collapseStepper1">
            <div class="card card-body">
                <div class="col">
                    <input type="file" id="file">
                </div>
            </div>
        </div>
        <div class="collapse" id="collapseStepper2">
          <div class="col-12 border">
            <button id="addColumn" class="btn btn-outline-secondary">Nueva Columna</button>
            <button id="deleteColumn" class="btn btn-outline-dark">Eliminar Columna</button>
            <div class="card card-body">
              <p><span id="no-columns">0</span> Columnas Creadas</p>
              <table id="columnas-bruto" class="table table-striped-columns">
                <thead>
                  <tr>
                  </tr>
                </thead>
              </table>
              
              <img id="imageplus" src="img/Formato-para-describir-las-actividades-de-un-proceso-35-MANUAL-DE-PROCESOS-El-manual-de.png">
            </div>
            <button  class="btn btn-outline-primary">Continuar</button>
          </div>
        </div>
        <div class="collapse" id="collapseStepper3">
            <div class="card card-body">
                <div class="col-12">
                    <div id="spreadsheet"></div>
                    <button id="button" class="btn btn-outline-secondary">Obtener Datos</button>
                </div>
            </div>
        </div>

    </div>
    @include('app.js')
</body>

</html>
