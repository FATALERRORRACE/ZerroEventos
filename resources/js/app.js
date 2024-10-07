import './bootstrap';
import LibrariesCreator from './LibrariesCreator';

const librariesCreator = new LibrariesCreator;

jQuery(document).ready(()=>{
    $(".stepper-selector").on('click',(ev)=>{
        switch (ev.currentTarget.dataset.target) {
            case 'collapseStepper3':
                librariesCreator.createImageCropper()
            case 'collapseStepper2':
                console.log("hgere");
                librariesCreator.CreateTable();
            case 'collapseStepper1':
                librariesCreator.createFileInput();
        }
    });

    $('#button').click(()=>{
        console.log(cropper.getData());
    });

});