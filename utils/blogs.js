const blogData = window.data
const pageLocation = window.location.href
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

console.log(pageLocation)

if (pageLocation.includes('index' || pageLocation == 'https://github.com/SeaLandBestLand/blog/')) {
    for (var x = 1; x < 4; x++) {
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

        // unix timestamp
        var ts = blogData[blogData.length - x].date

        // convert unix timestamp to milliseconds
        var ts_ms = ts * 1000

        // initialize new Date object
        var date_ob = new Date(ts_ms)

        // year as 4 digits (YYYY)
        var year = date_ob.getFullYear()

        // month as 2 digits (MM)
        var month = ("0" + (date_ob.getMonth() + 1)).slice(-2)

        // date as 2 digits (DD)
        var date = ("0" + date_ob.getDate()).slice(-2)

        var time = date + "-" + month + "-" + year

        newBlog.style.display = 'flex'
        newBlog.querySelector('.blog-title').innerHTML = `<h3>${title}</h3>`
        newBlog.querySelector('.blog-date').innerHTML = time
        newBlog.querySelector('.blog-page').innerHTML = pageCate
        newBlog.querySelector('.blog-page').style.color = colours[categoryColour]
        newBlog.style.borderColor = colours[categoryColour]
        newBlog.querySelector('.blog-desc').innerHTML = blogData[blogData.length - x].text


        document.querySelector('.blog-con').appendChild(newBlog)
    }
} else {
    
}
