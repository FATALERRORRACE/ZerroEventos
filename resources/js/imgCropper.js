import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';
var cropper
jQuery(document).ready(()=>{
    const image = document.getElementById('imageplus');
    cropper = new Cropper(
        image,
        {},
    );
    
});
export {cropper};