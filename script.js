//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn ');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);
        console.log("Your on page "+pageTurnId);
        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
            console.log("Page turn contains 'turn'");
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
            console.log("Page turn adds 'turn'");
        }
    }
})

//contact me button whn click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

           setTimeout(() => {
            page.style.zIndex = 20 + index;
           }, 500)
        }, (index +1) * 200 + 100)
    })
}       

