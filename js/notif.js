const notifi = document.querySelector(".notif");
const btns = document.querySelectorAll(".con-b .demo-btn");

const toastDetails = {
    timer: 5000,
    info:{
        icon:'bx-info-circle',
        text:'Info: The Application is not ready!.',
    },
    
    ready:{
        icon:'bx-check-circle', 
        text:'Info: Application processing...',
    }
}

const removeToast = (toast) =>{
    toast.classList.add("hide");
    if(toast.timeOutId) clearTimeout(toast.timeOutId);
    setTimeout(() => toast.remove(), 500);
}

const createToast = (id) =>{
    const {icon, text} = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = `<div class="col">
                        <i class='bx ${icon}'></i>
                        <span> ${text}</span>
                    </div>
                    <i class='bx bx-x' onclick="removeToast(this.parentElement)"></i>`;
    notifi.appendChild(toast);
    toast.timeOutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

btns.forEach(btn =>{
    btn.addEventListener("click", ()=> createToast(btn.id));
});