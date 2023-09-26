
function getNavbar() {
    return `<div class="navbar-wrapper d-flex justify-content-center fixed-top w-100">
                <div class="navbar d-flex align-items-center w-100" role="navigation">
                    <a class="navbar-logo" href="/index.html">K</a>
                    <div class="navbar-elements d-flex gap-3 justify-content-center">
                        <a id="home" href="index.html">Home</a>
                        <a id="about-me" href="about_me.html">Me</a>
                        <a id="contact" href="contact.html">Contact</a>
                        <a id="navbar-disclosure" href="legal_disclosure.html">Disclosure</a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><img src="assets/img/menu.png"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a id="home" class="nav-link" href="index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a id="about-me" class="nav-link" href="about_me.html">Me</a>
                                </li>
                                <li class="nav-item">
                                    <a id="contact" class="nav-link" href="contact.html">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a id="navbar-disclosure" class="nav-link" href="legal_disclosure.html">Disclosure</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
           </div>`;
}


function getPage() {
    return  `<div class="main w-100 d-flex flex-column aling-items-center">
                <p id="greeting" class="greeting text-cool d-flex justify-content-center"></p>
                <div id="description-wrapper" class="d-flex justify-content-evenly">
                    <img id="pic" class="pic box-cool img-fit" src="">
                    <div id="description-container" class="d-flex justify-content-start">
                        <p id="description" class="description"></p>
                    </div>
                </div>
            </div>`;
}


function getAboutmeDescription() {
    return `<p class="description-text-aboutme d-flex">
                I am born and raised in the salty town called Lüneburg.
                After graduating from highschool in 2015, my way continued in Osnabrück.
                Moving out to my first shared apartment of 7 people was like a jump into cold water.
                After two more shared apartemnts I moved 2021 into my first own apartment, where I live since then.
                From electrical engineering studies to web development, I am now a proud apprentice at basecom!
            </p>
            <div class="description-hobbies d-flex flex-column align-items-start">
                <p class="description-title text-cool d-flex justify-self-start">hobbies & likes</p>
                <div class="icons d-flex flex-wrap">
                    <img src="assets/img/mtb.png" alt="Mountainbiking" title="Mountainbiking">
                    <img src="assets/img/run.png" alt="running" title="Running">
                    <img src="assets/img/skate.png" alt="Skateboarding" title="Skateboarding">
                    <img src="assets/img/inliner.png" alt="Inliner" title="Inline Skating">
                    <img src="assets/img/bible.png" alt="reading Bible" title="reading Bible">
                    <img src="assets/img/movies.png" alt="watching Movies" title="watching Movies">
                    <img src="assets/img/music.png" alt="listen to Music" title="listen to Music">
                    <img src="assets/img/programming.png" alt="Programming" title="Programming">
                </div>
            </div>
            <div class="description-skills w-100 d-flex flex-column align-items-start">
                <p class="description-title text-cool align-self-end">..and skills</p>
                <div class="icons d-flex flex-wrap">
                    <img src="assets/img/c.png" title="C">
                    <img src="assets/img/c++.png" title="C++">
                    <img src="assets/img/html.png" title="HTML 5">
                    <img src="assets/img/css.png" title="CSS 3">
                    <img src="assets/img/js.png" title="Javasript">
                    <img src="assets/img/php.png" title="PHP">
                    <img src="assets/img/python.png" title="Python">
                </div>
            </div>`;
}



function getContactDescription() {
    return `<div class="contact-card  d-flex flex-column align-items-center">
                <p class="text-cool">Kevin Schumilo</p>
                <table class="tbl table">
                        <tr>
                            <td><img src="assets/img/house.png"></td>
                            <td><p>Limberger Str. 102, 49080 Osnabrück</p></td>
                        </tr>
                        <tr>
                            <td><img src="assets/img/phone.png"></td>
                            <td><a href="tel:+4917678904871">0176 78904871</a></td>
                        </tr>
                        <tr>
                            <td><img src="assets/img/mail.png"></td>
                            <td><a href="mailto:k.schumilo@basecom.de">k.schumilo@basecom.de</a></td>
                        </tr>
                        <tr>
                            <td><img src="assets/img/github.png"></td>
                            <td><a href="https://github.com/me50/kevuschka-basecom" target="_blank"><span style="color:var(--medium-yellow)">github</span></a></td></td>
                        </tr>
                </table>
        </div>`;
}


function getDisclosureDescription() {
    return `<div class='impressum justify-content-center'>
                <p>Angaben gemäß § 5 TMG
                </p>
                <p>Kevin Schumilo <br>
                    Limberger Str. %2F 102<br>
                    49080 Osnabrück <br>
                </p>
                <p> <strong class="impressum-titles">Vertreten durch: </strong><br>
                    Kevin Schumilo<br>
                </p>
                <p><strong class="impressum-titles">Kontakt:</strong> <br>
                    Telefon: +4917678904871<br>
                    E-Mail: <a href='mailto:k.schumilo@basecom.de'>k.schumilo@basecom.de</a></br>
                </p>
                <p>
                    <strong class="impressum-titles">Haftungsausschluss: </strong><br><br>
                    <strong class="impressum-titles">Haftung für Inhalte</strong><br><br>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br>
                    <strong class="impressum-titles">Haftung für Links</strong><br><br>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br><br>
                    <strong class="impressum-titles">Urheberrecht</strong><br><br>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.<br><br>
                    <strong class="impressum-titles">Datenschutz</strong><br><br>
                    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br>
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br>
                    Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br>
                <br>
                Website Impressum erstellt durch <a href="https://www.impressum-generator.de">impressum-generator.de</a> von der <a href="https://www.kanzlei-hasselbach.de/" rel="nofollow">Kanzlei Hasselbach</a>
                </p><br><br>
                <strong class="impressum-titles">Icons genutzt von</strong><br><br>
                <a id="impressum-icons-titles" href="https://de.freepik.com/search?format=search&last_filter=query&last_value=mountainbike&query=mountainbike&type=icon">Icon von Freepik</a><br>
                <a id="impressum-icons-titles" href="https://de.freepik.com/search?format=search&last_filter=query&last_value=skating&query=skating&type=icon">Icon von Smashicons</a><br>
                <a id="impressum-icons-titles" href="https://www.freepik.com/search?format=search&last_filter=query&last_value=sport&query=sport&type=icon">Icon by Freepik</a><br>
                <a id="impressum-icons-titles" href="https://www.freepik.com/search?format=search&last_filter=query&last_value=bible&query=bible&type=icon">Icon by Smashicons</a><br>
                <a id="impressum-icons-titles" href="https://www.freepik.com/search?format=search&last_filter=query&last_value=music&query=music&type=icon">Icon by Freepik</a><br>
                <a id="impressum-icons-titles" href="https://www.freepik.com/search?format=search&last_filter=query&last_value=movies&query=movies&type=icon">Icon by photo3idea_studio</a><br>
                <a id="impressum-icons-titles" href="https://www.freepik.com/search?format=search&last_filter=query&last_value=programming&query=programming&type=icon">Icon by juicy_fish</a><br>
                <a id="impressum-icons-titles" href="https://www.freepik.com/search?format=search&last_filter=query&last_value=html&query=html&type=icon">Icon by Freepik</a><br>
                <a id="impressum-icons-titles" href="https://www.freepik.com/search?format=search&last_filter=query&last_value=html&query=html&type=icon">Icon by Pixel perfect</a><br>
                <a id="impressum-icons-titles" href="https://www.freepik.com/search?format=search&last_filter=query&last_value=php&query=php&type=icon">Icon by Freepik</a><br>
                <a id="impressum-icons-titles" href="https://www.freepik.com/search?format=search&last_filter=query&last_value=c&query=c&type=icon">Icon by Freepik</a><br>
                <a id="impressum-icons-titles" href="https://www.freepik.com/search?format=search&last_filter=query&last_value=c&query=c&type=icon">Icon by Hight Quality Icons</a><br>
                <a id="impressum-icons-titles" href="https://www.freepik.com/search?format=search&last_filter=query&last_value=js&query=js&type=icon">Icon by Freepik</a><br>
                <a id="impressum-icons-titles" href="https://www.freepik.com/search?format=search&last_filter=query&last_value=python&query=python&type=icon">Icon by Freepik</a><br>
                <a id="impressum-icons-titles" href="https://www.freepik.com/search?format=search&last_filter=query&last_value=sql&query=sql&type=icon">Icon by Stockio</a><br>
            </div>`;
}