class ProBanner {


    constructor() {
        if ((window.location.href).substr(0, (window.location.href).length - 1) === window.location.origin) {
            document.location.href = '/?lang=' + (window.navigator.language).substr(0, 2)
        }
        this.proBannerUi()
        this.parseUrl()

    }

    proBannerUi() {
        this.selectionBlockEvent()
        this.btnSendEvents()
        this.parseUrl()
    }
    parseUrl() {
        let url = new URL(window.location.href);
        let lang = url.searchParams.get("lang");
        let arrLang = ['en', 'es', 'fr', 'ja', 'nl', 'ru', 'zh']
        if (arrLang.indexOf(lang) === -1 && lang !== 'en') {
            document.location.href = '/?lang=en'
        }
        if (lang) {
            this.readJson(`/localizations/${lang}.json`, (data) => {
                this.editLangBlock('.probanner-main__title h1',data['Unlimited Access<br>to All Features']);
                this.editLangBlock('.probanner-header__btn-restore a', data['Restore'])
                this.editLangBlock('.probanner-main__features ul li:nth-child(1)', data['Unlimited documents'])
                this.editLangBlock('.probanner-main__features ul li:nth-child(2)', )
                this.editLangBlock('.probanner-main__features ul li:nth-child(3)', data['Text recognition (OCR)'])
                this.editLangBlock('.apple .probanner-selection-block__type', data['Monthly'])
                this.editLangBlock('.apple .probanner-selection-block__price span', data['<strong>{{price}}</strong><br>per month'].replace('<strong>{{price}}</strong><br>', ''))
                this.editLangBlock('.apple .probanner-selection-block__label', data['3 DAYS FREE'])
                this.editLangBlock('.apple .probanner-selection-block__price-per-month span', data['{{price}}/month'].replace('{{price}}/', ''))
                this.editLangBlock('.google .probanner-selection-block__type', data['Annually'])
                this.editLangBlock('.google .probanner-selection-block__price span', data['<strong>{{price}}</strong><br>per year'].replace('<strong>{{price}}</strong><br>', ''))
                this.editLangBlock('.google .probanner-selection-block__label', data['MOST POPULAR'])
                this.editLangBlock('.google .probanner-selection-block__price-per-month span', data['{{price}}/month'].replace('{{price}}/', ''))
                this.editLangBlock('.probanner-selection-block__btn button', data['Continue'])
                this.editLangBlock('.probanner-selection-block__auto-rewable p', data['Auto-renewable. Cancel anytime.'])
                this.editLangBlock('.probanner-footer__btn-item:first-child a', data['Terms of Use'])
                this.editLangBlock('.probanner-footer__btn-item:last-child a', data['Privacy Policy'])
            });
            this.editTextForCurrentLang(lang)
        }
    }

    editTextForCurrentLang(lang){
        window.addEventListener('resize',function(){
            document.location.href = ''
        });

        if (lang =='ru' || lang == 'fr' || lang == 'es'){
            if (window.innerHeight == 568){
                this.editStyleForBlock('.probanner-main__title h1',{fontSize:'24px',letterSpacing:'0px',
                    lineHeight:'28px'});
                this.editStyleForBlock('.probanner-main',{marginTop:'90px'});
                this.editStyleForBlock('.apple .probanner-selection-block__label',{fontSize:'11.4px'});
                this.editStyleForBlock('.google .probanner-selection-block__label',{fontSize:'11.4px'});
                let li = document.querySelectorAll('.probanner-main__features ul li')
                li.forEach(el=>{
                    el.style.fontSize = 12 + 'px';
                });
            }
            if (window.innerHeight == 667){
                this.editStyleForBlock('.probanner-main__title h1',{fontSize:'24px',letterSpacing:'0px',
                    lineHeight:'28px'});
                this.editStyleForBlock('.probanner-main',{marginTop:'120px'});
                this.editStyleForBlock('.apple .probanner-selection-block__label',{fontSize:'11.4px'});
                this.editStyleForBlock('.google .probanner-selection-block__label',{fontSize:'11.4px'});
            }
            if (window.innerHeight == 736){
                this.editStyleForBlock('.probanner-main__title h1',{fontSize:'30px',letterSpacing:'0px',
                    lineHeight:'28px'});
                this.editStyleForBlock('.probanner-main',{marginTop:'120px'});
                this.editStyleForBlock('.apple .probanner-selection-block__label',{fontSize:'12.4px'});
                this.editStyleForBlock('.google .probanner-selection-block__label',{fontSize:'12.4px'});
            }

            if (window.innerHeight == 812){
                this.editStyleForBlock('.probanner-main__title h1',{fontSize:'29px',letterSpacing:'0px',
                    lineHeight:'28px'});
                this.editStyleForBlock('.probanner-main',{marginTop:'140px'});
                this.editStyleForBlock('.apple .probanner-selection-block__label',{fontSize:'12.4px'});
                this.editStyleForBlock('.google .probanner-selection-block__label',{fontSize:'12.4px'});
            }
        }
        if(lang =='nl'){
            if (window.innerHeight == 568){
                this.editStyleForBlock('.probanner-main__title h1',{fontSize:'27px',letterSpacing:'0px',
                    lineHeight:'28px'});
                this.editStyleForBlock('.probanner-main',{marginTop:'90px'});
                this.editStyleForBlock('.apple .probanner-selection-block__label',{fontSize:'11.4px'});
                this.editStyleForBlock('.google .probanner-selection-block__label',{fontSize:'11.4px'});
                let li = document.querySelectorAll('.probanner-main__features ul li')
                li.forEach(el=>{
                    el.style.fontSize = 12 + 'px';
                });
            }
            if (window.innerHeight == 667){
                this.editStyleForBlock('.probanner-main__title h1',{fontSize:'37px',letterSpacing:'0px',
                    lineHeight:'34px'});
                this.editStyleForBlock('.probanner-main',{marginTop:'120px'});
                this.editStyleForBlock('.apple .probanner-selection-block__label',{fontSize:'11.4px'});
                this.editStyleForBlock('.google .probanner-selection-block__label',{fontSize:'11.4px'});
            }
            if (window.innerHeight == 812){
                this.editStyleForBlock('.probanner-main__title h1',{fontSize:'33px',letterSpacing:'1px'});
                this.editStyleForBlock('.probanner-main',{marginTop:'140px'});
                this.editStyleForBlock('.apple .probanner-selection-block__label',{fontSize:'12.4px'});
                this.editStyleForBlock('.google .probanner-selection-block__label',{fontSize:'12.4px'});
            }
        }


    }

    editLangBlock(path,content) {
        let div = document.querySelector(path)
        if (content) { div.innerHTML = content;}
        return div;
    }


    editStyleForBlock(path,style){
        let div = document.querySelector(path)
        if (!div){alert('Блок не найден')}
        if (style){
            for (const pathKey in style) {
                div.style[pathKey] = style[pathKey]
            }
        }
        return div;
    }

    selectionBlockEvent() {
        let selectBlocks = document.querySelectorAll('.probanner-selection-block__item')
        selectBlocks.forEach(el => {
            el.addEventListener('click', (e) => {
                let activeBlock = document.querySelector('.probanner-selection-block__item.active')
                if (activeBlock) activeBlock.classList.remove('active')
                e.currentTarget.classList.add('active')
            })
        })
    }
    btnSendEvents() {
        let btnSend = document.querySelector('.probanner-selection-block__btn button');
        btnSend.addEventListener('click', () => {

            let googleBlock = document.querySelector('.google.active')
            if (googleBlock) {
                document.location.href = 'https://google.com/'
            } else {
                document.location.href = 'https://apple.com/'
            }
        })
    }

    readJson(file, callback) {
        let rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4 && rawFile.status == "200") {

                let data = JSON.parse(rawFile.responseText);
                callback(data);
            }
        }
        rawFile.send(null);
    }

}

new ProBanner()







