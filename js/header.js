
const headerHTML = `
<nav class="navbar navbar-light navbar-expand-lg py-4">
    <a href="index.html" class="navbar-brand">
        <h1 class="text-primary fw-bold mb-0">Dr Sanchita <span class="text-dark">Gera</span> </h1>
    </a>
    <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="fa fa-bars text-primary"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav mx-auto">
            <a href="index.html" id="home" class="nav-item nav-link" >Home</a>
            <a href="about.html" id="about_us" class="nav-item nav-link">About Us</a>
            <div class="nav-item dropdown">
                <a href="#" id="notes_ebook" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Notes/eBooks</a>
                <div class="dropdown-menu bg-light">
                    <a href="ebook_free.html" class="dropdown-item" onclick="setActive(this)">Free</a>
                    <a href="ebook_paid.html" class="dropdown-item" onclick="setActive(this)">Paid</a>
                </div>
            </div>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tutorials</a>
                <div class="dropdown-menu bg-light">
                    <a href="tutorials_pharmacological.html" class="dropdown-item" onclick="setActive(this)">For Pharmacological</a>
                    <a href="tutorials_endodontics.html" class="dropdown-item" onclick="setActive(this)">For Endodontics</a>
                    <a href="tutorials_general_dentistry.html" class="dropdown-item" onclick="setActive(this)">For General Dentistry</a>
                    <a href="tutorials_dental_materials.html" class="dropdown-item" onclick="setActive(this)">For Dental Materials</a>
                    <a href="tutorials_clinical_hacks.html" class="dropdown-item" onclick="setActive(this)">For Clinical Hacks</a>
                </div>
            </div>        
            <a href="contact.html" class="nav-item nav-link" onclick="setActive(this)">Contact Us</a>
        </div>
        
    </div>
</nav>
`
document.getElementById("header").innerHTML = headerHTML;

{/* <div class="d-flex justify-content-end">
    <a href="" class="btn btn-primary py-2 px-4 rounded-pill">Book Now</a>
</div> */}