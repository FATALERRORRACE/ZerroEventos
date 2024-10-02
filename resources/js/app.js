import './bootstrap';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';


jQuery(document).ready(()=>{
    // initialize plugin with defaults
    // jQuery("#file").fileinput();
    // // with plugin options
    // jQuery("#file").fileinput({'showUpload':false, 'previewFileType':'any'})
    // .on('fileloaded', function(event, file, previewId, fileId, index, reader) {
    //     console.log("fileloaded");
    // });
    const image = document.getElementById('image');
    const cropper = new Cropper(
        image, 
        {

        },
    );
}); 