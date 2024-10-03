import './bootstrap';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';

const image = document.getElementById('imageplus');

jQuery(document).ready(()=>{

    //FILE INPUT
    // initialize plugin with defaults
    // jQuery("#file").fileinput();
    // // with plugin options
    // jQuery("#file").fileinput({'showUpload':false, 'previewFileType':'any'})
    // .on('fileloaded', function(event, file, previewId, fileId, index, reader) {
    //     console.log("fileloaded");
    // });
    var data = [
        ['Jazz', 'Honda', '2019-02-12', '', true, '$ 2.000,00', '#777700'],
        ['Civic', 'Honda', '2018-07-11', '', true, '$ 4.000,01', '#007777'],
    ];
    // INSTANCE CROPPER 
    const cropper = new Cropper(
        image,
        {},
    );
    // GET POSITION
    $('#button').click(()=>{
        console.log(cropper.getData());
    });

    jspreadsheet(document.getElementById('spreadsheet'), {
        data:data,
        columns: [
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
         ]
    });
});