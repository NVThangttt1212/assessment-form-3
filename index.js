const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

//--------------handle đóng mở NavBar pc---------------------------
let isNav;
const navBar = $('.header__nav--menu i')
const  aside = $('.container .aside')
const main = $('.container .main')

navBar.onclick = function (){
    isNav=!isNav
    checkbool(isNav);
}
function checkbool(testsmth){
    if (testsmth === true){
        aside.style.display = 'none';
        main.style.Width = '100%';
        main.style.flex = '1';
        main.style.animationName = 'main';
    } else {
        aside.style.display = 'block';
    }
}
//------------------handle đóng mở navbar mobile--------------
const  overlay = $('.overlay')
const logo = $('.aside .logo img')
const container = $('.container')
if (container.offsetWidth < 1023){
    aside.style.zIndex = '1000';
    aside.style.position = 'fixed';

    aside.style.left ='0';
    aside.style.top ='0';
    aside.style.height ='100%';


    navBar.onclick = function (){
        overlay.style.display = 'block';
        logo.style.paddingLeft = '20px';
        logo.style.paddingRight = '20px';
        aside.style.left ='0px';
        aside.style.display ='block';

    }
    // thực hiện đóng nav
    overlay.onclick = function (){
        overlay.style.display = 'none';
        aside.style.display = 'none';
    }
    logo.onclick = function (){
        overlay.style.display = 'none';
        aside.style.display = 'none';
    }
}

// -----------------phần content mobile-------------------------------------------
const contentBlogs = $$('.blog__content')
const moreContentBlogs = $$('.down__content--blog')
const lessContentBlogs = $$('.up__content--blog')


//phần hiển thị content blog------------------------
moreContentBlogs.forEach((moreContentBlog, index)=>{
    const contentBlog = contentBlogs[index]
    const lessContentBlog = lessContentBlogs[index]
    moreContentBlog.onclick = function (){
        contentBlog.style.display = 'block';
        this.style.display = 'none';
        lessContentBlog.style.display = 'block';
    }
})

//phần ẩn đi content blog
lessContentBlogs.forEach((lessContentBlog, index)=>{
    const contentBlog = contentBlogs[index]
    const moreContentBlog = moreContentBlogs[index]
    lessContentBlog.onclick = function (){
        contentBlog.style.display = 'none';
        this.style.display = 'none';
        moreContentBlog.style.display = 'block';
    }
})



// xử lý change lang -------------------------------------
const langVn = $('.header__right__lang--itemVN');
const langE = $('.header__right__lang--itemE');

function handleLang(){
    langE.style.display = 'block';
    langVn.style.display = 'block';
}
function SelectedLangE(){
    langE.style.display = 'block';
    langVn.style.display = 'none';
}
function SelectedLangVN(){
    langE.style.display = 'none';
    langVn.style.display = 'block';
}

// xử lý next tab btn------------------------------------------
const sliderTabs = $$('.slider__tab--btn');
const sliderTexts = $$('.slider__text p');
const sliderBtn = $('.slider__btn')
const imgBtnSHow =$('.slider__text img')

// điều kiện để bắt đầu mở trang độ dài có đủ điều kiện để show more slider hay không
if ($('.slider__text p').offsetHeight < 96){
    sliderBtn.style.display = 'none';
    imgBtnSHow.style.display = 'none';
}else {
    sliderBtn.style.display = 'flex';
    imgBtnSHow.style.display = 'block';
}

sliderTabs.forEach((sliderTab, index)=>{
    const sliderText = sliderTexts[index]
    sliderTab.onclick = function (){
        $('.slider__tab--btn.activeBtn').classList.remove('activeBtn')
        $('.slider__text--item.activeText').classList.remove('activeText')
        this.classList.add('activeBtn')
        sliderText.classList.add('activeText')

        // điều kiện để hiển thị show More Slider nhưng sau khi event onclick---------
        if(sliderText.offsetHeight < 96){
            sliderBtn.style.display = 'none';
            imgBtnSHow.style.display = 'none';
        }else {
            sliderBtn.style.display = 'flex';
            imgBtnSHow.style.display = 'block';
        }
    }
})

//------------------------------- handle drop aside -------------------------------------------
const iconMoreAsides = $$('.aside__list--item-icon .icon-down')
const subAsides = $$('.subAside__list')
const iconLessAsides = $$('.aside__list--item-icon .icon-up')

if ($('.subAside__list.activeAside')){
    $('.aside__list--item-icon .icon-down').style.display = 'none';
    $('.aside__list--item-icon .icon-up').style.display = 'block';
}
//-----phần hiển thị-----------------------------------------
iconMoreAsides.forEach((iconMoreAside, index) =>{
    const subAside = subAsides[index]
    const iconLessAside = iconLessAsides[index]
    iconMoreAside.onclick = function (){
        this.style.display = 'none';
        subAside.style.display = 'block';
        iconLessAside.style.display = 'block';
    }
})

//---- phầm ẩn đi---------------------------------------
iconLessAsides.forEach((iconLessAside, index) =>{
    const subAside = subAsides[index]
    const iconMoreAside = iconMoreAsides[index]
    iconLessAside.onclick = function (){
        this.style.display = 'none';
        iconMoreAside.style.display = 'block';
        subAside.style.display = 'none';
    }
})

// -----------------------------------handle show more slider----------------------------------
const sliderText= $('.slider .slider__text');
const sliderImg = $('.slider .slider__text img')
const showMoreSlider = $('.slider .slider__btn .showMore')
const sliderSHowLess = $('.slider .slider__btn .showLess')

// điều kiện để hiển thị showMore-------------------------

showMoreSlider.onclick = function() {
    handleShowMoreSlider();
};

sliderSHowLess.onclick = function (){
    handleShowLessSlider();
};

function handleShowMoreSlider(){
    sliderText.style.height = 'auto';

    sliderImg.style.display = 'none';
    showMoreSlider.style.display = 'none';
    sliderSHowLess.style.display = 'block';
}
//phần ẩn đi ---
function handleShowLessSlider(){
    sliderSHowLess.style.display = 'none';
    showMoreSlider.style.display = 'block';
    sliderText.style.height = '96px';
    sliderImg.style.display = 'block';
}

//--------------------------handle rank btn detaile pc và tables------------------------------
const btnDetails = $$('.info__btn--list')
const iconShowDetails = $$('.iconMoreDetail');
const handleMores = $$('.handleMoreLessDetail');
const textDetailMbs = $$('.more__details--mb');

    btnDetails.forEach((btnDetail, index) =>{
    const handleMore = handleMores[index]
    const iconShowDetail = iconShowDetails[index]
    const textDetailMb = textDetailMbs[index]
    btnDetail.onclick = function (){
        if(this.querySelector('.more__details--pc').textContent === "More Details"){
            this.querySelector('.more__details--pc').innerText = 'Less Details';
            iconShowDetail.style.transform = 'rotate(180deg)';
            handleMore.style.display = 'block';
        }else {
            this.querySelector('.more__details--pc').innerText = 'More Details';
            iconShowDetail.style.transform = 'rotate(0deg)';
            handleMore.style.display = 'none';
        }
        if (this.querySelector('.more__details--mb').textContent === "More"){
            textDetailMb.innerText = 'Less';
        }else {
            textDetailMb.innerText = 'More';

        }
    }
})

//-----------------------------handle list pages -------------------------

const btn__pages = $$('.btn__page')
btn__pages.forEach((btn__page) =>{
    btn__page.onclick = function (){
        $('.btn__page.activeBtnPage').classList.remove('activeBtnPage')
        this.classList.add('activeBtnPage')
    }
})

// --------------------handle menu blog---------------------
const itemBlogs = $$('.content__blog--item')
itemBlogs.forEach((itemBlog)=>{
    itemBlog.onclick = function (){
        $('.content__blog--item.activeBlog').classList.remove('activeBlog')
        this.classList.add('activeBlog')
    }
})

// ------------------hande more less item Faq-------------------

const imgMoreItemFaqs =$$('.content__blog--item-heading .moreDescribeFaq')
const imgLessItemFaqs = $$('.content__blog--item-heading .lessDescribeFaq')
const itemDescripFaqs = $$('.content__blog--item--describe')


// phần more descrip
imgMoreItemFaqs.forEach((imgMoreItemFaq, index) =>{
    const itemDescripFaq = itemDescripFaqs[index]
    const lessItemFaq = imgLessItemFaqs[index]
    imgMoreItemFaq.onclick = function (){
        $('.content__blog--item--describe')
        this.style.display = 'none';
        lessItemFaq.style.display = 'block';
        itemDescripFaq.classList.remove('activeTextFaq')
    }
})

// phần less descrip

imgLessItemFaqs.forEach((imgLessItemFaq, index) =>{
    const moreItemFaq = imgMoreItemFaqs[index]
    const itemDescripFaq = itemDescripFaqs[index]
    imgLessItemFaq.onclick = function (){
        this.style.display = 'none';
        moreItemFaq.style.display = 'block';
        itemDescripFaq.classList.add('activeTextFaq')
    }
})

//-----------------handle footer-------------------------
const footerItems = $$('.footer__list--item')

footerItems.forEach((footerItem)=>{
    footerItem.onclick = function (){
        $('.footer__list--item.activeFooter').classList.remove('activeFooter')
        this.classList.add('activeFooter')
    }
})

//---điều kiện để previour được active
const previour = $('.PreviousMobi')
const fettlePreviour = $('.rank__pages--describe p').textContent
if(fettlePreviour !== "Showing results 1 - 18 of 4926"){
    previour.style.backgroundColor = '#1E60E1';
    previour.style.color = '#fff';
}

//--------------handle more detaile content mobile -----------

let isMore=true;
const MoreMobile = $('.moreMobile')
const textMoreMobile = $('.moreMobile h3')
const iconLessMobi = $('.Content__Mobi--more')
const iconMoreMobi = $('.Content__Mobi--less')

MoreMobile.onclick = function (){
    isMore=!isMore
    check(isMore);
}
function check(btnsmth){
    if (btnsmth){
        textMoreMobile.innerText = 'MORE';
        iconMoreMobi.style.display = 'block';
        iconLessMobi.style.display = 'none';
    } else {
        textMoreMobile.innerText = 'LESS';
        iconMoreMobi.style.display = 'none';
        iconLessMobi.style.display = 'block';
    }
}
//handler scroll menu hightlight----------------------------------------------

document.addEventListener('DOMContentLoaded',()=> {
    document.addEventListener('scroll', () => {
        const scrollTop = document.scrollTop || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const percent = Math.floor((scrollTop / (scrollHeight - clientHeight) * 100));
// lấy ra phần trăm khi mình scroll tới đâu
        console.log(percent)

        if(percent > 30 && percent < 40){
            selectedScroll("1")
        }else if(percent < 50){
            selectedScroll("2")
        }
        else if(percent < 60){
            selectedScroll("3")
        }
        else if(percent < 70){
            selectedScroll("4")
        }
        else if(percent < 80){
            selectedScroll("5")
        }
    })
})

// hàm thực hiện xóa class ActiveBlog
// chuyền vào tham số id
function deleteSelectedScroll(id){
    const removeActiveBlog = document.getElementById(id)
    removeActiveBlog.classList.remove('activeBlog')
}
// hàm thực hiện add class ActiveBlog
// function dele được callback lại và chuyền vào đối số ứng với cái id của tất cả các item

// chuyền tham số id vào  và được gọi lại ở trên phần if else và đối số và các id tương ứng
function selectedScroll(id){
    const addActiveBlog = document.getElementById(id)
    deleteSelectedScroll("1")
    deleteSelectedScroll("2")
    deleteSelectedScroll("3")
    deleteSelectedScroll("4")
    deleteSelectedScroll("5")
    addActiveBlog.classList.add('activeBlog')
}

