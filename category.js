var imageInfoModal = document.getElementById("imageinfoModal");
var imgProduct = document.getElementById("imgProduct");
var closeImgInfo = document.getElementById("closeImgInfo");
let isclicked = false;



const showMore = (_clickedId) => {
    let id = _clickedId;
    let htmlel = `<ul>
 <li class="filter-list-items" id="yeniurunler">
     <button class="button-filter " type="button">
         <span class="filter-item-title">Yeni
             Ürünler
         </span>
         <i class="fa-solid fa-angle-right filter-icon" id="iconright"></i>
     </button>

 </li>

</ul>
`
    let htmlel2 = `<ul>
<li class="filter-list-items" id="listicecek">
    <button class="button-filter " type="button">
        <span class="filter-item-title">Su & İçecek
        </span>
        <i class="fa-solid fa-angle-right filter-icon" id="iconright"></i>
    </button>
    <button class="button-filter " type="button">
        <span class="filter-item-title">Meyve & Sebze
        </span>
        <i class="fa-solid fa-angle-right filter-icon" id="iconright"></i>
    </button>
    <button class="button-filter " type="button">
        <span class="filter-item-title">Fırından
        </span>
        <i class="fa-solid fa-angle-right filter-icon" id="iconright"></i>
    </button>
    <button class="button-filter " type="button">
        <span class="filter-item-title">Atıştırmalık
        </span>
        <i class="fa-solid fa-angle-right filter-icon" id="iconright"></i>
    </button>
    <button class="button-filter " type="button">
        <span class="filter-item-title">Kahvaltılık
        </span>
        <i class="fa-solid fa-angle-right filter-icon" id="iconright"></i>
    </button>
    <button class="button-filter " type="button">
        <span class="filter-item-title">Yiyecek
        </span>
        <i class="fa-solid fa-angle-right filter-icon" id="iconright"></i>
    </button>
    <button class="button-filter " type="button">
        <span class="filter-item-title">Fit & Form
        </span>
        <i class="fa-solid fa-angle-right filter-icon" id="iconright"></i>
    </button>

</li>

</ul>`
    let htmlel3 = `
<ul>
<li class="filter-list-items" id="suicecek">
    <button class="button-filter " type="button">
        <span class="filter-item-title">Su
        </span>
        <i class="fa-solid fa-angle-right filter-icon" id="iconright"></i>
    </button>

</li>

</ul>
`
    let htmlel4 = `
<ul>
                            <li class="filter-list-items" id="meyvesebze">
                                <button class="button-filter " type="button">
                                    <span class="filter-item-title">Meyve
                                    </span>
                                    <i class="fa-solid fa-angle-right filter-icon" id="iconright"></i>
                                </button>

                            </li>

                        </ul>


`
    let htmlel5 = `
<ul>
<li class="filter-list-items" id="fırından">
    <button class="button-filter " type="button">
        <span class="filter-item-title">Ekmek
        </span>
        <i class="fa-solid fa-angle-right filter-icon" id="iconright"></i>
    </button>

</li>

</ul>


`






    if (isclicked == false) {
        if (id == "yeniurunlerbtn") {
            document.getElementById(id).insertAdjacentHTML("beforeend", htmlel)
        }
        else if (id == "indirimlerbtn") {
            document.getElementById(id).insertAdjacentHTML("beforeend", htmlel2)
        }
        else if (id == "suicecekbtn") {
            document.getElementById(id).insertAdjacentHTML("beforeend", htmlel3)
        }
        else if (id == "meyvesebzebtn") {
            document.getElementById(id).insertAdjacentHTML("beforeend", htmlel4)
        }
        else if (id == "fırındanbtn") {
            document.getElementById(id).insertAdjacentHTML("beforeend", htmlel5)
        }
        isclicked = true;

    } else if (isclicked == true) {
        if (id == "yeniurunlerbtn") {
            document.getElementById("yeniurunler").remove(true);

        }
        else if (id == "indirimlerbtn") {
            document.getElementById("listicecek").remove(true);

        }
        else if (id == "suicecekbtn") {
            document.getElementById("suicecek").remove(true);
        }
        else if (id == "meyvesebzebtn") {
            document.getElementById("meyvesebze").remove(true);
        }
        else if (id == "fırındanbtn") {
            document.getElementById("fırından").remove(true);
        }
        isclicked = false;
    }

}


imgProduct.onclick = function () {
    imageInfoModal.style.display = "block";
///Slider
    const productImage = document.querySelector(".product-img")
    const slider = Array.from(productImage.children);
    setTimeout(() => {
        const slideWidth = slider[0].getBoundingClientRect().width;
        slider.forEach((slide, index) => {
            slide.style.left = slideWidth * index + "px";
        });
    }, 100);
    document.getElementById("nextbtn").addEventListener("click", () => {
        const currentSlide = document.querySelector(".current-slide");
        const nextbtn = document.getElementById("nextbtn")
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            nextSlide.classList.add("current-slide");
            productImage.style.transform = "translateX(-" + nextSlide.style.left + ")";
            nextbtn.classList.add("none-btn");
            prevbtn.classList.remove("none-btn")
        } else {
            slider[0].classList.add("current-slide");
            productImage.style.transform = "translateX(0)";
            
        }
        currentSlide.classList.remove("current-slide");
        

    });
    document.getElementById("prevbtn").addEventListener("click", ()=>{
        const currentSlide = document.querySelector(".current-slide");
        const prevSlide =currentSlide.previousElementSibling;
        const prevbtn = document.getElementById("prevbtn")
        if(prevSlide){
            prevSlide.classList.add("current-slide");
            productImage.style.transform = "translateX(-" + prevSlide.style.left + ")";
            prevbtn.classList.add("none-btn")
            nextbtn.classList.remove("none-btn");
            
        }else{
            const lastSlide=slider[slider.length-1];
            lastSlide.classList.add("current-slide");
            productImage.style.transform = "translateX(-" + lastSlide.style.left + ")";
            
       
        }
        currentSlide.classList.remove("current-slide");
        
    });
}
const favheart=document.getElementById("heart");
const favBtn=document.getElementById("favBtn")
favBtn.addEventListener("mousemove",function(){
favheart.classList.add=".fav-header:hover";
})



closeImgInfo.onclick = function () {
    imageInfoModal.style.display = "none";
}


//Counter
function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}

//ekranda herhangi bir yere tıklandığında modalı kapatır.
window.onclick = function (event) {
    if (event.target == imageInfoModal) {
        imageInfoModal.style.display = "none";
    }
    if (event.target == languageModal) {
        languageModal.style.display = "none";
    }
    if (event.target == signUpmodal) {
        signUpmodal.style.display = "none";
    }
    if (event.target == signInModal) {
        signInModal.style.display = "none";
    }
}

const openIndexPage = () => {
    window.open("index.html")
}
