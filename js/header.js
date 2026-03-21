
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
                    <a href="book.html" class="dropdown-item" onclick="setActive(this)">For Dentists</a>
                    <a href="blog.html" class="dropdown-item" onclick="setActive(this)">For General Public</a>
                </div>
            </div>        
            <a href="contact.html" class="nav-item nav-link" onclick="setActive(this)">Contact Us</a>
        </div>
        <div class="d-flex justify-content-end">
            <a href="" class="btn btn-primary py-2 px-4 rounded-pill">Book Now</a>
        </div>
    </div>
</nav>
`
document.getElementById("header").innerHTML = headerHTML;

