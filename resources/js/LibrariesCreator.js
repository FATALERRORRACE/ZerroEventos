import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';

export default class LibrariesCreator{

    cropperInstance;
    tableInstance;
    fileInputInstance;

    tableInstanceExists = false;
    cropperInstanceExists = false;

    data = [
        [],
    ];

    column = [
    ];


    CreateTable(){
        if(this.tableInstanceExists)return;
        var globalUse = this
        this.tableInstance = jspreadsheet(document.getElementById('spreadsheet'), {
            data: this.data,
            columns: this.column,
            onfocus: this.onFocusTable,
            onselection: this.onselectionTable,
        });
        this.tableInstanceExists = true;
    }

    createImageCropper(){
        if(this.cropperInstanceExists) return;
        const image = document.getElementById('imageplus');
        this.cropperInstance = new Cropper(
            image,
            {
                responsive: true
            },
        );
        this.cropperInstanceExists = true;
    }

    onFocusTable(instance){
        console.log(instance);
        console.log('The table ' + $(instance).prop('id') + ' is focus');
        
    }

    onselectionTable(instance, x1, y1, x2, y2, origin) {
        var cellName1 = jspreadsheet.getColumnNameFromId([x1, y1]);
        var cellName2 = jspreadsheet.getColumnNameFromId([x2, y2]);
        console.log('The selection from ' + cellName1 + ' to ' + cellName2 + '');
    }

    createFileInput(){
        //initialize plugin with defaults
        $("#file").fileinput();
        // with plugin options
        this.fileInputInstance = $("#file").fileinput({'showUpload':false, 'previewFileType':'any'});    
    }
}