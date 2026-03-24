// Array of free eBooks
const freeBooks = [
  {
    title: "Calcified Canals",
    img: "img/our_books/free/1.jpeg",
    desc: "Tips and Tricks for RCT in calcified cases. You need to read this before your next calcified case."
  },
  {
    title: "BMP Mistakes",
    img: "img/our_books/free/4.jpeg",
    desc: "3 mistakes to avoid in bmp includes points we usually ignore in bmp and are equally important."
  },
  {
    title: "⁠Irrigants",
    img: "img/our_books/free/3.jpeg",
    desc: "Includes sodium hypochlorite , chlorohexidiene , edta and recent advances."
  },
  {
    title: "Paediatric Drug Dosage",
    img: "img/our_books/free/2.jpeg",
    desc: "Includes every aspect and every formula for calculating drug dosage for pediatric patients (age and weight based )."
  }
];

// Build HTML dynamically
let ebook_free = `
<div class="container-fluid menu bg-light py-6 my-6">
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <div class="flex-grow-1 text-center">
        <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
          Free-Of-Cost
        </small>
    </div>
    <div>
      <a href="#" class="btn btn-primary fw-bold text-uppercase rounded-pill px-4 py-2 mb-3" data-bs-toggle="modal" data-bs-target="#buyNowModal">
        <i class="bi bi-cart-fill me-2"></i> Buy Now
      </a>
    </div>
    

  </div>

    <div class="tab-class text-center">
        <div class="row g-4">
`;

for (let i = 0; i < freeBooks.length; i++) {
  ebook_free += `
    <div class="col-lg-6 wow bounceInUp" data-wow-delay="0.${i+1}s">
      <div class="menu-item d-flex align-items-center">
        <img class="flex-shrink-0 img-fluid rounded-circle" height="20%" width="20%" src="${freeBooks[i].img}" alt="">
        <div class="w-100 d-flex flex-column text-start ps-4">
          <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
            <h4>${freeBooks[i].title}</h4>
            <h4 class="text-primary"></h4>
          </div>
          <p class="mb-0">${freeBooks[i].desc}</p>
        </div>
      </div>
    </div>
  `;
}

ebook_free += `
        </div>
      </div>
    </div>
</div>
`;

// Inject into DOM
document.getElementById("ebook_free").innerHTML = ebook_free;
