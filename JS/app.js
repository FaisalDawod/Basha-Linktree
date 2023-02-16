const shareBtn = document.querySelectorAll('.tile-share')

console.log(shareBtn)

async function copyText(e) {
    //Prevent Button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')

    console.log(link)

    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the link: " + link)
    }

    catch (err) {
        console.error(err)
    }
}

shareBtn.forEach(shareBtn => shareBtn.addEventListener('click', copyText))