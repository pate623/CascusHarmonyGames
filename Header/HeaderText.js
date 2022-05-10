if(IsMobile){
    document.write(`
        <header class="header">
            <a href="index.html"><div class="headerLogo_Mobile"></div></a>
            <div class="headerBurger_Mobile">
                <div class="headerMenuLine_Mobile"></div>
                <div class="headerMenuLine_Mobile"></div>
                <div class="headerMenuLine_Mobile"></div>
            </div>
            <div class="headerCross_Mobile"></div>
        </header>

        <div class="scrolledHeader">
            <a href="index.html"><div class="headerLogo_Mobile"></div></a>
            <div class="headerBurger_Mobile headerBurger_MobileScroll">
                <div class="headerMenuLine_Mobile"></div>
                <div class="headerMenuLine_Mobile"></div>
                <div class="headerMenuLine_Mobile"></div>
            </div>
            <div class="headerCross_Mobile"></div>
        </div>

        <div class="headerLinks_Mobile">
            <a href="index.html"><div class="headerText_Mobile">Home</div></a>
            <a href="kuiperBelt.html"><div class="headerText_Mobile">Defender of Kuiper Belt</div></a>
            <a href="battleMagicians.html"><div class="headerText_Mobile">Battle Magicians (WIP)</div></a>
        </div>
    `);
}else{ // Desktop
    document.write(`
        <header class="header">
            <a href="index.html"><div id="headerLogo"></div></a>
            <div id="headerLinks">
                <a href="index.html"><div class="headerText">Home</div></a>
                <a href="kuiperBelt.html"><div class="headerText">Defender of Kuiper Belt</div></a>
                <a href="battleMagicians.html"><div class="headerText">Battle Magicians</div></a>
            </div>
        </header>
    `);
}
