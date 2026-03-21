const menuItems = [
  {
    text: "Pharmacological",
    href: "#tab-2",
    active: true,
    video_link: [
      {
        name: "Add In Your Prescription",
        link: "img/latest_videos/pharmacological/1.jpeg",
        lightbox: "event-1",
        delay: "0.1s",
        href: "https://www.youtube.com/embed/FWj9oUSgM4A?rel=0"
      }
    ]
  }
];

const latest_videosHTML = `
<div class="container-fluid event py-6">
  <div class="container">
    <div class="tab-class text-center">
      <div id="menu-container-for-videos"></div>
      <div class="tab-content">
        <div id="video_link_HTML"></div>
      </div>
    </div>
  </div>
</div>
`;

document.getElementById("tutorials_pharmacological").innerHTML = latest_videosHTML;

// Build menu dynamically
function setVideoMenu() {
  const ulHTML = `
    <ul class="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
      ${menuItems.map(item => `
        <li class="nav-item p-2">
          <a class="d-flex mx-2 py-2 border border-primary bg-light rounded-pill ${item.active ? 'active' : ''}" 
             data-bs-toggle="pill" href="${item.href}" onclick="handleClick('${item.text}')">
            <span class="text-dark" style="width: 150px;">${item.text}</span>
          </a>
        </li>
      `).join('')}
    </ul>
  `;
  document.getElementById("menu-container-for-videos").innerHTML = ulHTML;
}

// Render videos for selected tab
function handleClick(text) {
  const item = menuItems.find(m => m.text === text);
  if (!item) return;

  const videoHTML = `
    <div id="${item.href.substring(1)}" class="tab-pane fade show active p-0">
      <div class="row g-4">
        <div class="col-lg-12">
          <div class="row g-4">
            ${item.video_link.map(video => `
              <div class="col-md-6 col-lg-3" data-wow-delay="${video.delay}">
                <div class="event-img position-relative">
                  <div class="img-fluid rounded w-100 col-lg-5 wow bounceInUp" data-wow-delay="0.1s"> 
                    <div class="video" style="background-image: url(${video.link}); background-repeat:no-repeat;">
                      <button type="button" class="btn btn-play" data-bs-toggle="modal" data-bs-target="#videoModal" data-video="${video.href}">
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  document.getElementById("video_link_HTML").innerHTML = videoHTML;
}

// Modal video handling
document.addEventListener('DOMContentLoaded', () => {
  const videoModal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');

  videoModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget;
    videoFrame.src = button.getAttribute('data-video');
  });

  videoModal.addEventListener('hidden.bs.modal', () => {
    videoFrame.src = "";
  });
});

// Initialize menu and show active tab
setVideoMenu();
const activeItem = menuItems.find(item => item.active);
if (activeItem) handleClick(activeItem.text);
