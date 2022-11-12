const pages = [
    {
        "page": "Programming",
        "catagories": ["Python", "C", "HTML/CSS"]
    },
    {
        "page": "CA",
        "catagories": ["1", "2", "3", "4", "5", "6", "7", "8"]
    },
    {
        "page": "Projects",
        "catagories": ["UI/UX", "Functional Requirements"]
    },
    {
        "page": "Industry Placement",
        "catagories": []
    },
    {
        "page": "Events",
        "catagories": []
    },
    {
        "page": "Blog",
        "catagories": []
    },
    {
        "page": "Masterclasses",
        "catagories": []
    },
]

const pageDropTemplate = document.querySelector('.pageDropItem')
const cateDropTemplate = document.querySelector('.cateDropItem')

function CateClick(category) {
    document.querySelector('.cateDrop').innerHTML = category
}

function SelectPage(page) {
    cateDropTemplate.style.display = 'none'

    document.querySelector('.pageDrop').innerHTML = page

    var pageIndex = pages.findIndex(function (pageName) {
        return pageName.page == page
    })
    var pageData = pages[pageIndex]
    var catagories = pageData.catagories

    for (var x = 0; x < catagories.length; x++) {
        if (x > catagories.length) {
            break;
        }
        cateDrop = cateDropTemplate.cloneNode(true)

        cateDrop.style.display = 'flex'
        cateDrop.innerHTML = catagories[x]
        cateDrop.onclick = () => { CateClick(catagories[x]) }
        document.querySelector('.cateMenu').appendChild(cateDrop)
    }
}

window.onload = () => {
    pageDropTemplate.style.display = 'none'

    for (var x = 0; x < pages.length; x++) {
        if (x > pages.length) {
            break;
        }
        var pageName = pages[x].page

        pageDrop = pageDropTemplate.cloneNode(true)
        pageDrop.style.display = 'flex'
        pageDrop.innerHTML = pageName

        switch (pageName) {
            case 'Programming':
                pageDrop.onclick = function () { SelectPage('Programming') }
                break;
            case 'CA':
                pageDrop.onclick = function () { SelectPage('CA') }
                break;
            case 'Projects':
                pageDrop.onclick = function () { SelectPage('Projects') }
                break;
            case 'Industry Placement':
                pageDrop.onclick = function () { SelectPage('Industry Placement') }
                break;
            case 'Events':
                pageDrop.onclick = function () { SelectPage('Events') }
                break;
            case 'Blog':
                pageDrop.onclick = function () { SelectPage('Blog') }
                break;
            case 'Masterclasses':
                pageDrop.onclick = function () { SelectPage('Masterclasses') }
                break;
        }
        
        document.querySelector('.pageMenu').appendChild(pageDrop)
    }
}


//var page = "CA"
//SelectPage(page)

function AddBlog() {

}