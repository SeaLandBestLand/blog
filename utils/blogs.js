const blogData = window.data
const template = document.querySelector('.blog')
const colours = {
    'Programming': '#39FF14',
    'CA': '#FFF01F',
    'Projects': '#FFFFFF',
    'Industry Placement': '#ED2939',
    'Events': '#1F51FF',
    'Blog': '#9D00FF',
    'Masterclasses': '#83EEFF',
}

for (var x = 1; x < 8; x++) {
    if (x > blogData.length) {
        break;
    }

    var newBlog = template.cloneNode(true)
    var categoryColour = blogData[blogData.length - x].page
    var pageCate;
    if (blogData[blogData.length - x].category === "") {
        pageCate = blogData[blogData.length - x].page
    } else {
        pageCate = blogData[blogData.length - x].page + ' - ' + blogData[blogData.length - x].category
    }

    var title = blogData[blogData.length - x].title;
    title = title.charAt(0).toUpperCase() + title.substr(1).toLowerCase()

    newBlog.style.display = 'flex'
    newBlog.querySelector('.blog-title').innerHTML = `<h3>${title}</h3>`
    newBlog.querySelector('.blog-page').innerHTML = pageCate
    newBlog.querySelector('.blog-page').style.color = colours[categoryColour]
    newBlog.style.borderColor = colours[categoryColour]
    newBlog.querySelector('.blog-desc').innerHTML = blogData[blogData.length - x].text


    document.querySelector('.blog-con').appendChild(newBlog)
}
