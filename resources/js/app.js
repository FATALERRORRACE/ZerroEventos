import './bootstrap';
import { cropper } from './imgCropper';
import XlssClassCreator from './xlssInstance';

const table = new XlssClassCreator;

jQuery(document).ready(()=>{
    table.CreateTable();
    //FILE INPUT
    // initialize plugin with defaults
    // jQuery("#file").fileinput();
    // // with plugin options
    // jQuery("#file").fileinput({'showUpload':false, 'previewFileType':'any'})
    // .on('fileloaded', function(event, file, previewId, fileId, index, reader) {
    //     console.log("fileloaded");
    // });
    // GET POSITION
    $('#button').click(()=>{
        console.log(cropper.getData());
    });

});