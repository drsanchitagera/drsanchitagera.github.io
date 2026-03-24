// Array of paid eBooks
const paidBooks = [
  {
    title: "Systemic Diseases & Dentistry",
    price: 999,
    img: "img/our_books/paid/4.jpeg",
    desc: "This comprehensive guide provides detailed insights into systemic diseases, their oral manifestations, and the essential pharmacological knowledge for dentists."
  },
  {
    title: "Physiology Notes",
    price: 499,
    img: "img/our_books/paid/3.jpeg",
    desc: "Important questions commonly asked in University exams."
  },
  {
    title: "Pregnancy & Dentistry",
    price: 399,
    img: "img/our_books/paid/1.jpeg",
    desc: "Pharmacological aspect , chair positioning , which trimester is safe and trimester wise treatment protocol."
  },
  {
    title: "Diabetes & Dentistry",
    price: 299,
    img: "img/our_books/paid/2.jpeg",
    desc: "Includes oral changes , pharmacological aspect and modifications in dental treatment."
  }
];

// Build HTML dynamically
let ebook_paid = `
<div class="container-fluid menu bg-light py-6 my-6">
  <div class="container">
    
    <div class="d-flex justify-content-between align-items-center">
      <div class="flex-grow-1 text-center">
        <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
          Paid
        </small>
    </div>
    <div>
      <a href="#" class="btn btn-primary fw-bold text-uppercase rounded-pill px-4 py-2 mb-3" data-bs-toggle="modal" data-bs-target="#buyNowModalPaid">
        <i class="bi bi-cart-fill me-2"></i> Buy Now
      </a>
    </div>
    </div>

    <div class="tab-class text-center">
        <div class="row g-4">
`;

for (let i = 0; i < paidBooks.length; i++) {
  ebook_paid += `
    <div class="col-lg-6 wow bounceInUp" data-wow-delay="0.${i+1}s">
      <div class="menu-item d-flex align-items-center">
        <img class="flex-shrink-0 img-fluid rounded-circle" height="20%" width="20%" src="${paidBooks[i].img}" alt="">
        <div class="w-100 d-flex flex-column text-start ps-4">
          <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
            <h4>${paidBooks[i].title}</h4>
            <h4 class="text-primary">&#8377; ${paidBooks[i].price}</h4>
          </div>
          <p class="mb-0">${paidBooks[i].desc}</p>
        </div>
      </div>
    </div>
  `;
}

ebook_paid += `
        </div>
      </div>
    </div>
  </div>
</div>
`;

// Inject into DOM
document.getElementById("ebook_paid").innerHTML = ebook_paid;
