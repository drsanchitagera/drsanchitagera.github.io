
const menuItems = [ 
    { text: "Clinical Hacks", href: "#tab-6", active: true,
        video_link: [
            { name: "Clinical Hacks 1", link: "img/latest_videos/clinical_hacks/1.jpeg", lightbox: "event-1", delay: "0.1s" , href:"https://www.youtube.com/embed/cjNRy5U0eZs?rel=0"},
            { name: "Clinical Hacks 2", link: "img/latest_videos/clinical_hacks/2.jpeg", lightbox: "event-1", delay: "0.1s" , href:"https://www.youtube.com/embed/GiPB1_JcfjU?rel=0"},
            { name: "Clinical Hacks 3", link: "img/latest_videos/clinical_hacks/3.jpeg", lightbox: "event-1", delay: "0.1s" , href:"https://www.youtube.com/embed/dVUZdQK1gx4?rel=0"}
        ] } 
];

const latest_videosHTML = `
<div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content rounded-0">
            <div class="modal-header">
                <h5 class="modal-title" id="videoModalLabel">Youtube Video</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="ratio ratio-16x9">
                <iframe id="videoFrame"
                        src=""
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                </iframe>
                </div>
            </div>
            </div>
        </div>
        </div>
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
`

document.getElementById("tutorials_pharmacological").innerHTML = latest_videosHTML;

function setvideounorderedlistHTML() {
    // Build menu
    let ulHTML = '<ul class="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">';
    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        ulHTML += `
            <li class="nav-item p-2">
                <a class="d-flex mx-2 py-2 border border-primary bg-light rounded-pill ${item.active ? 'active' : ''}" 
                   data-bs-toggle="pill" href="${item.href}" onclick="handleClick('${item.text}')">
                    <span class="text-dark" style="width: 150px;">${item.text}</span>
                </a>
            </li>`;
    }
    ulHTML += '</ul>';
    document.getElementById("menu-container-for-videos").innerHTML = ulHTML;
}

function handleClick(text) {
    let video_link_HTML = '';
    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        if (item["text"] == text){

            video_link_HTML += `
            <div id="${item.href.substring(1)}" class="tab-pane fade show active p-0">
                <div class="row g-4">
                    <div class="col-lg-12">
                        <div class="row g-4">`;

            for (let j = 0; j < item.video_link.length; j++) {
                const video = item.video_link[j];
                video_link_HTML += `
                    <div class="col-md-6 col-lg-3" data-wow-delay="${video.delay}">
                        <div class="event-img position-relative">
                            <div class="img-fluid rounded w-100 col-lg-5 wow bounceInUp" data-wow-delay="0.1s"> 
                                <div class="video" style="background-image: url(`+video.link+`) !important; background-repeat:no-repeat !important">
                                    <button type="button" class="btn btn-play" data-bs-toggle="modal" data-bs-target="#videoModal" data-video="${video.href}"> 
                                <span></span> 
                              </button> 
                              </div>
                            </div>
                        </div>
                    </div>`;
            }
            video_link_HTML += `
                            </div>
                        </div>
                    </div>
                </div>`;  
                       
        document.getElementById("video_link_HTML").innerHTML = video_link_HTML;    
        }
    
    }
    
}

document.addEventListener('DOMContentLoaded', function () {
  var videoModal = document.getElementById('videoModal');
  var videoFrame = document.getElementById('videoFrame');

  videoModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var videoUrl = button.getAttribute('data-video');
    videoFrame.src = videoUrl;
  });

  videoModal.addEventListener('hidden.bs.modal', function () {
    videoFrame.src = "";
  });
});

setvideounorderedlistHTML();

function show_slected_videos_list(){
    
    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        try {
            if (item["active"] == true){
                return handleClick(menuItems[i].text)
            }   
        } catch (error) {
            // console.log(error);
        }
    }    
}

show_slected_videos_list()