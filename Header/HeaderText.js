if(IsMobile){
    document.write(`
        <header class="Header">
            <a href="index.html"><div class="HeaderLogo_Mobile"></div></a>
            <div class="HeaderBurger_Mobile">
                <div class="HeaderMenuLine_Mobile"></div>
                <div class="HeaderMenuLine_Mobile"></div>
                <div class="HeaderMenuLine_Mobile"></div>
            </div>
            <div class="HeaderCross_Mobile"></div>
        </header>

        <div class="ScrolledHeader">
            <a href="index.html"><div class="HeaderLogo_Mobile"></div></a>
            <div class="HeaderBurger_Mobile HeaderBurger_MobileScroll">
                <div class="HeaderMenuLine_Mobile"></div>
                <div class="HeaderMenuLine_Mobile"></div>
                <div class="HeaderMenuLine_Mobile"></div>
            </div>
            <div class="HeaderCross_Mobile"></div>
        </div>

        <div class="HeaderLinks_Mobile">
            <a href="index.html"><div class="HeaderText_Mobile">Home</div></a>
            <a href="kuiperBelt.html"><div class="HeaderText_Mobile">Defender of Kuiper Belt</div></a>
            <a href="battleMagicians.html"><div class="HeaderText_Mobile">Battle Magicians (WIP)</div></a>
        </div>
    `);
}else{ // Desktop
    document.write(`
        <header class="Header">
            <a href="index.html"><div id="HeaderLogo"></div></a>
            <div id="HeaderLinks">
                <a href="index.html"><div class="HeaderText">Home</div></a>
                <a href="kuiperBelt.html"><div class="HeaderText">Defender of Kuiper Belt</div></a>
                <a href="battleMagicians.html"><div class="HeaderText">Battle Magicians</div></a>
            </div>
        </header>
    `);
}
