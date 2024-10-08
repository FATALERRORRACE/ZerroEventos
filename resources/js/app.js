import './bootstrap';
import LibrariesCreator from './LibrariesCreator';

const librariesCreator = new LibrariesCreator;

jQuery(document).ready(()=>{

    librariesCreator.createFileInput();
    $(".stepper-selector").on('click',(ev)=>{
        switch (ev.currentTarget.dataset.target) {
            case 'collapseStepper3':
                librariesCreator.CreateTable();
            case 'collapseStepper2':
                librariesCreator.createImageCropper()
        }
    });
    
    modalColumn
    $("#addColumn").on('click', ()=>{
        fetch('/api/getForm')
        .then(response => {
            $("#modalColumn").modal("show");
            response.text().then(nexdata=>{
                $(".modal-body").html(nexdata);
                $("#saveColumn").on('click', (event)=>{
                    $("#columnas-bruto").append(`<th scope="col"><button class="col-12 btn btn-outline-secondary">${$("#text-new-column").val()} <i class="bi bi-file-x text-danger"></i></button></th>`);
                    $("#no-columns").text($("#columnas-bruto th").length);
                    
                    librariesCreator.column.push({
                        type: 'text',
                        title: $("#text-new-column").val(),
                        width: 90
                    });
                });
            })
        })
        .catch(error => console.error(error));
        
    });

    $("#deleteColumn").on('click', ()=>{
        $("#modalColumn").modal("show");
    });

    $('#button').click(()=>{
        console.log(librariesCreator.cropperInstance.getData());
    });

    $("#loader-container").fadeOut(1000);
});