import './bootstrap';
import LibrariesCreator from './LibrariesCreator';

const librariesCreator = new LibrariesCreator;

jQuery(document).ready(()=>{
    librariesCreator.createFileInput();
    $(".stepper-selector").on('click',(ev)=>{
        switch (ev.currentTarget.dataset.target) {
            case 'collapseStepper3':
                librariesCreator.createImageCropper()
            case 'collapseStepper2':
                librariesCreator.CreateTable();
        }
    });
    

    $('#button').click(()=>{
        console.log(cropper.getData());
    });
    $("#loader-container").fadeOut(1000);
});