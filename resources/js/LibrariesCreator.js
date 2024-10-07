import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';

export default class LibrariesCreator{

    cropperInstance;
    tableInstance;
    fileInputInstance;

    tableInstanceExists = false;
    cropperInstanceExists = false;

    data = [
        ['Jazz', 'Honda', '2019-02-12', '', true, '$ 2.000,00', '#777700'],
        ['Civic', 'Honda', '2018-07-11', '', true, '$ 4.000,01', '#007777'],
    ];

    column = [
        {
            type: 'text',
            title:'Car',
            width:90
        },
        {
            type: 'dropdown',
            title:'Make',
            width:120,
            source:[
                "Alfa Romeo",
                "Audi",
                "Bmw",
                "Chevrolet",
                "Chrystler",
                // (...)
            ]
        },
        {
            type: 'calendar',
            title:'Available',
            width:120
        },
        {
            type: 'image',
            title:'Photo',
            width:120
        },
        {
            type: 'checkbox',
            title:'Stock',
            width:80
        },
        {
            type: 'numeric',
            title:'Price',
            mask:'$ #.##,00',
            width:80,
            decimal:','
        },
        {
            type: 'color',
            width:80,
            render:'square',
        },
    ];


    CreateTable(){
        if(this.tableInstanceExists)return;
        this.tableInstance = jspreadsheet(document.getElementById('spreadsheet'), {
            data: this.data,
            columns: this.column
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

    createFileInput(){
        //initialize plugin with defaults
        $("#file").fileinput();
        // with plugin options
        this.fileInputInstance = $("#file").fileinput({'showUpload':false, 'previewFileType':'any'});    
    }
}