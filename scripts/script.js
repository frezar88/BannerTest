class ProBanner {


    constructor() {

        if ((window.location.href).substr(0,(window.location.href).length-1) === window.location.origin) {
            document.location.href = '/?lang=' + (window.navigator.language).substr(0, 2)
        }
        this.proBannerUi()
        this.parseUrl()
        console.log()
       

    }

    proBannerUi() {
        this.selectionBlockEvent()
        this.btnSendEvents()
        this.parseUrl()

    }


    parseUrl(){
        let url = new URL(window.location.href);
        let lang = url.searchParams.get("lang");
        
        if (lang){
            this.readJson(`/localizations/${lang}.json`, (data)=> {
                let proBannerMainTitle = document.querySelector('.probanner-main__title h1');
                proBannerMainTitle.innerHTML= data['Unlimited Access<br>to All Features']
                let proBannerHeaderBtnRestore = document.querySelector('.probanner-header__btn-restore a');
                proBannerHeaderBtnRestore.innerHTML = data['Restore']
                let proBannerMainFeatures1 = document.querySelector('.probanner-main__features ul li:nth-child(1)');
                proBannerMainFeatures1.innerHTML = data['Unlimited documents']
                let proBannerMainFeatures2 = document.querySelector('.probanner-main__features ul li:nth-child(2)');
                let proBannerMainFeatures3 = document.querySelector('.probanner-main__features ul li:nth-child(3)');
                proBannerMainFeatures3.innerHTML = data['Text recognition (OCR)']
                let appleProBannerSelectionBlockType = document.querySelector('.apple .probanner-selection-block__type');
                appleProBannerSelectionBlockType.innerHTML = data['Monthly']
                let appleProBannerSelectionBlockPriceSpan = document.querySelector('.apple .probanner-selection-block__price span');
                appleProBannerSelectionBlockPriceSpan.innerHTML = data['<strong>{{price}}</strong><br>per month'].replace('<strong>{{price}}</strong><br>','')
                let appleProBannerSelectionBlockLabel = document.querySelector('.apple .probanner-selection-block__label');
                appleProBannerSelectionBlockLabel.innerHTML = data['3 DAYS FREE']
                let appleProBannerSelectionBlockPricePerMonth = document.querySelector('.apple .probanner-selection-block__price-per-month span');
                appleProBannerSelectionBlockPricePerMonth.innerHTML=data['{{price}}/month'].replace('{{price}}/','')
                let googleProBannerSelectionBlockType = document.querySelector('.google .probanner-selection-block__type');
                googleProBannerSelectionBlockType.innerHTML = data['Annually']
                let googleProBannerSelectionBlockPriceSpan = document.querySelector('.google .probanner-selection-block__price span');
                googleProBannerSelectionBlockPriceSpan.innerHTML = data['<strong>{{price}}</strong><br>per year'].replace('<strong>{{price}}</strong><br>','')
                let googleProBannerSelectionBlockLabel = document.querySelector('.google .probanner-selection-block__label');
                googleProBannerSelectionBlockLabel.innerHTML = data['MOST POPULAR']
                let googleProBannerSelectionBlockPricePerMonth = document.querySelector('.google .probanner-selection-block__price-per-month span');
                googleProBannerSelectionBlockPricePerMonth.innerHTML = data['{{price}}/month'].replace('{{price}}/','')
                let proBannerSelectionBlockBtnButton = document.querySelector('.probanner-selection-block__btn button');
                proBannerSelectionBlockBtnButton.innerHTML = data['Continue']
                let proBannerSelectionBlockAutoRewable = document.querySelector('.probanner-selection-block__auto-rewable p');
                proBannerSelectionBlockAutoRewable.innerHTML = data['Auto-renewable. Cancel anytime.']
                let proBannerFooterBtnItemLink1 = document.querySelector('.probanner-footer__btn-item:first-child a');
                proBannerFooterBtnItemLink1.innerHTML = data['Terms of Use']
                let proBannerFooterBtnItemLink2 = document.querySelector('.probanner-footer__btn-item:last-child a');
                proBannerFooterBtnItemLink2.innerHTML = data['Privacy Policy']
                console.log(lang)
              
                switch (lang) {
                    case 'ru':
                        proBannerMainTitle.style.fontSize = 26 + 'px'
                        
                        proBannerMainTitle.parentElement.parentNode.style.marginTop = 120 + 'px'
                        appleProBannerSelectionBlockLabel.style.fontSize = 12 + 'px'
                        proBannerMainFeatures1.style.fontSize = 12 + 'px'
                        proBannerMainFeatures2.style.fontSize = 12 + 'px'
                        proBannerMainFeatures3.style.fontSize = 12 + 'px'
                        break;
                    case 'fr':
                        proBannerMainTitle.style.fontSize = 26 + 'px'
                        proBannerMainTitle.style.lineHeight = 26 + 'px'
                        proBannerMainTitle.parentElement.parentNode.style.marginTop = 110 + 'px'
                        appleProBannerSelectionBlockLabel.style.fontSize = 12 + 'px'
                        proBannerMainFeatures1.style.fontSize = 12 + 'px'
                        proBannerMainFeatures2.style.fontSize = 12 + 'px'
                        proBannerMainFeatures3.style.fontSize = 12 + 'px'
                
                    case 'es':
                        proBannerMainTitle.style.fontSize = 26 + 'px'
                        proBannerMainTitle.style.lineHeight = 26 + 'px'
                        proBannerMainTitle.parentElement.parentNode.style.marginTop = 110 + 'px'
                        appleProBannerSelectionBlockLabel.style.fontSize = 12 + 'px'
                        proBannerMainFeatures1.style.fontSize = 12 + 'px'
                        proBannerMainFeatures2.style.fontSize = 12 + 'px'
                        proBannerMainFeatures3.style.fontSize = 12 + 'px'
                    case 'nl':
                        proBannerMainTitle.style.fontSize = 26 + 'px'
                        
                        proBannerMainTitle.parentElement.parentNode.style.marginTop = 110 + 'px'
                        appleProBannerSelectionBlockLabel.style.fontSize = 12 + 'px'
                        proBannerMainFeatures1.style.fontSize = 14 + 'px'
                        proBannerMainFeatures2.style.fontSize = 14 + 'px'
                        proBannerMainFeatures3.style.fontSize = 14 + 'px'
                
                    default:
                        break;
                }
            });
        }


    }

    selectionBlockEvent() {
        let selectBlocks = document.querySelectorAll('.probanner-selection-block__item')
        selectBlocks.forEach(el=>{
            el.addEventListener('click', (e)=>{
                let activeBlock = document.querySelector('.probanner-selection-block__item.active')
                if (activeBlock) activeBlock.classList.remove('active')
                e.currentTarget.classList.add('active')
            })
        })
    }
    btnSendEvents() {
        let btnSend = document.querySelector('.probanner-selection-block__btn button');
        btnSend.addEventListener('click',()=>{

            let googleBlock = document.querySelector('.google.active')
            if (googleBlock){
                document.location.href = 'https://google.com/'
            }else{
                document.location.href = 'https://apple.com/'
            }
        })
    }

    readJson(file, callback){
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







