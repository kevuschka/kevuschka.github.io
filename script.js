function init() {
    let container = document.getElementById('container');
    loadNavbar(container);
    loadPage(container);
    loadContent();
}


function loadNavbar(page) {
    page.innerHTML = '';
    page.innerHTML = getNavbar();
}


function loadPage(page) {
    page.innerHTML += getPage();
}


function loadContent() {
    if (window.location.pathname.includes('index.html')) {
        loadContentHome();
        document.getElementById('home').classList.add('current-page');
    } else if (window.location.pathname.includes('/assets/pages/about_me.html')) {
        loadContentAboutme();
        document.getElementById('about-me').classList.add('current-page');
    } else if (window.location.pathname.includes('contact.html')) {
        loadContentContact();
        document.getElementById('contact').classList.add('current-page');
    } else {
        loadContentDisclosure();
        document.getElementById('navbar-disclosure').classList.add('current-page');
    }
}


function loadContentHome() {
    document.getElementById('greeting').innerHTML = `Hey, welcome on&nbsp<a href="/assets/pages/about_me.html">my</a>&nbsphomepage`;
    document.getElementById('pic').src = 'assets/img/home_pic.png';
    document.getElementById('description').innerHTML = `
        I am Kevin Schumilo<br>
        <strong>Trainee Software Developer</span></strong><br>
        at <span class="text-company">basecom</span> in Osnabrück.`;
    document.getElementById('description-container').style.alignItems = 'center';
}


function loadContentAboutme() {
    document.getElementById('greeting').innerHTML = `Yeah, so this is&nbsp<a href="/assets/pages/about_me.html">me</a>`;
    document.getElementById('pic').src = 'assets/img/aboutme_pic.png';
    if (window.innerWidth > 551) document.getElementById('description-wrapper').style.flexDirection = 'row-reverse';
    else document.getElementById('description-wrapper').style.flexDirection = 'column';
    document.getElementById('description-container').style.flexDirection = 'column';
    document.getElementById('description-container').style.alignItems = 'start';
    document.getElementById('description-wrapper').classList.add('description-gap-aboutme');
    document.getElementById('description-container').innerHTML = getAboutmeDescription();
    document.getElementById('description-container').classList.add('description-gap-aboutme');
}


function loadContentContact() {
    document.getElementById('greeting').innerHTML = `Everything to contact&nbsp<a href="/assets/pages/about_me.html">me</a>`;
    document.getElementById('description-wrapper').innerHTML = "";
    document.getElementById('description-wrapper').innerHTML = getContactDescription();

}


function loadContentDisclosure() {
    document.getElementById('greeting').innerHTML = `<a href="/assets/pages/about_me.html">My</a>&nbsp legal disclosure`;
    document.getElementById('description-wrapper').innerHTML = getDisclosureDescription();
    document.getElementById('wrapper').style.paddingBottom = '24px';
}






{/* <a href="https://de.freepik.com/search?format=search&last_filter=query&last_value=mountainbike&query=mountainbike&type=icon">Icon von Freepik</a>

<a href="https://de.freepik.com/search?format=search&last_filter=query&last_value=skating&query=skating&type=icon">Icon von Smashicons</a>
<a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=sport&query=sport&type=icon">Icon by Freepik</a>
<a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=bible&query=bible&type=icon">Icon by Smashicons</a>
<a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=music&query=music&type=icon">Icon by Freepik</a>
<a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=movies&query=movies&type=icon">Icon by photo3idea_studio</a>
<a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=programming&query=programming&type=icon">Icon by juicy_fish</a>

<a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=html&query=html&type=icon">Icon by Freepik</a>
<a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=html&query=html&type=icon">Icon by Pixel perfect</a>





*/}


