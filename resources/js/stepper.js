
var collapses = {
    'collapseStepper1': new bootstrap.Collapse('#collapseStepper1', { toggle: false}),
    'collapseStepper2': new bootstrap.Collapse('#collapseStepper2', { toggle: false}),
    'collapseStepper3': new bootstrap.Collapse('#collapseStepper3', { toggle: false})
};

jQuery(document).ready(()=>{
    $(".stepper-selector").on('click',(ev)=>{
        $(".stepper-selector").prop('disabled',true);
        setTimeout(() => {
            $(".stepper-selector").prop('disabled',false);
        }, 500);
        hideExcept(ev.currentTarget.dataset.target);
        $(".stepper-selector").addClass('btn-secondary').removeClass('btn-success');
        $(ev.currentTarget).removeClass('btn-secondary').addClass('btn-success');
    });
    function hideExcept(id){
        // colapse activation
        Object.keys(collapses).forEach(element => {
            if(element != id) collapses[element].hide();
        });
        collapses[id].show();
        // bar color activation
        $("#collapseStepper3-id, #collapseStepper2-id").removeClass('btn-success').addClass('btn-secondary');
        switch (id){
            case 'collapseStepper3':    $("#collapseStepper3-id").removeClass('btn-secondary').addClass('btn-success');
            case 'collapseStepper2': $("#collapseStepper2-id").removeClass('btn-secondary').addClass('btn-success');
            
        }
        
    }
});
