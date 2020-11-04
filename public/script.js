const currentPage = location.pathname
const menuItems =  document.querySelectorAll("header .links a")

for(item of menuItems){
    if(currentPage.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }
}


function paginate(selectedPage,totalPages){
    let pages = [], oldPage;

    for(let currentPage = 1; currentPage <= totalPages; currentPage++){
        

        const firstAndLastPage = currentPage == 1 || currentPage == totalPages
        const PagesAfterSelectedPages = currentPage <= selectedPage + 2
        const PagesBerforeSelectedPages = currentPage >= selectedPage - 2

        if(firstAndLastPage || PagesAfterSelectedPages && PagesBerforeSelectedPages){
            if(oldPage && currentPage - oldPage > 2){
                pages.push("...")
            }
            if(oldPage && currentPage - oldPage == 2){
                pages.push(oldPage + 1)
            }
            pages.push(currentPage)
            oldPage = currentPage
        }
    }
    return pages;
}

const pagination = document.querySelector(".pagination")
const page = +pagination.dataset.page;
const total = +pagination.dataset.total;
const pages = paginate(page,total);

console.log(pages)
