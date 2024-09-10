document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#AU-link').addEventListener('click',() => {load_cont('AU');});
    document.querySelector('#ABK-link').addEventListener('click',() => {load_cont('ABK');});
    document.querySelector('#IEA-link').addEventListener('click',() => {load_cont('IEA');});
    document.querySelector('#GST-link').addEventListener('click',() => {load_cont('GST');});
    document.querySelector('#IT-link').addEventListener('click',() => {load_cont('IT');});    
    document.querySelector('#TDS-link').addEventListener('click',() => {load_cont('TDS');});


    load_cont('AU');
});



function load_cont(arg){

    document.querySelectorAll('.Info').forEach(function(element){
        element.style.display='none';
    })


    if(arg){
        document.querySelector(`#${arg}`).style.display='block';
    }

}


// This is content that i get after 

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li');
    
    links.forEach(link => {
        link.addEventListener('click', function () {
            // Remove active class from all links
            links.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked link
            this.classList.add('active');

            // Load the corresponding content
            const sectionId = this.id.split('-link')[0]; // Get the ID part before '-link'
            load_cont(sectionId);
        });
    });

    // Load initial content (e.g., About Us by default)
    load_cont('AU');
});

function load_cont(arg) {
    // Hide all content sections
    document.querySelectorAll('.Info').forEach(function (element) {
        element.style.display = 'none';
    });

    // Show the corresponding section based on the argument
    if (arg) {
        document.querySelector(`#${arg}`).style.display = 'block';
    }
}





