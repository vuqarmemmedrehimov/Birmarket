let favorite = JSON.parse(localStorage.getItem('favorite')) || []

const dropDownMenu = document.getElementById('dropDownMenu')
const todayDiscount = document.getElementById('todayDiscount')
const bestSeller = document.getElementById('bestSeller')
const newProductSlider = document.getElementById('newProductSlider')
const popBrand = document.getElementById('popBrand')
const popSeller = document.getElementById('popSeller')
const actualCategory = document.getElementById('actualCategory')
const actualFooter = document.getElementById('actualFooter')
const mainSearch = document.getElementById('mainSearch')

showTodayDiscount('discounted', allData['discounted'])
showBestSeller('bestSell', allData['bestSell'])
showNewProduct('news', allData['news'])
uptBtn('cart', 'mainCart')
uptBtn('favorite', 'mainFavorite')
checkCartButtons()

mainSearch.addEventListener('input', function() {
    const word = mainSearch.value.toLowerCase()

    const discountedResult = allData['discounted'].filter( function(item) { 
        return item.title.toLowerCase().includes(word) ||
        item.price.toString().includes(word) ||
        item.category.toLowerCase().includes(word)
    })

    const bestSellResult = allData['bestSell'].filter( function(item) { 
        return item.title.toLowerCase().includes(word) ||
        item.price.toString().includes(word) ||
        item.category.toLowerCase().includes(word)
    });

    const newResult = allData['news'].filter( function(item) { 
        return item.title.toLowerCase().includes(word) ||
        item.price.toString().includes(word) ||
        item.category.toLowerCase().includes(word)
    });

    showTodayDiscount('discounted', discountedResult)
    showBestSeller('bestSell', bestSellResult)
    showNewProduct('news', newResult)
})

dropDownMenu.innerHTML = menuItemData.map( item => `
    
	<div class="pl-2.5 cursor-pointer">
		<div class="relative ${item.pad7px ? 'py-1.75' : 'py-2.5'} flex items-center ">
			<div class="absolute left-0.75 top-1/2 transform -translate-y-1/2 w-6.25">
				<img src="../img/menuicon/${item.bg}" alt="img" /> 
			</div>
			<span class="pl-10 block w-[calc(100%-22px)] text-[#1e244d] text-[13px] leading-4">${item.title}</span>
			<div class="${!item.dropdown ? 'hidden' : ''} h-2.5 flex items-center justify-center transform rotate-270">
				<svg width="10" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.06 0L4 3.05333L0.94 0L0 0.94L4 4.94L8 0.94L7.06 0Z" fill="#BDBFCD"></path></svg>
			</div>
		</div>
	</div>

` ).join('')

popBrand.innerHTML = popBrandData.map(item => `
    <div class="swiper-slide cursor-pointer overflow-hidden w-full min-h-full h-22!">
        <div class="p-2.5 w-full h-full flex items-center justify-center bg-white">
            <img src="../img/brand-slider/${item}" alt="" class="max-h-14 md:max-w-25" />
        </div>
    </div>
`).join('')

popSeller.innerHTML = popSellerData.map(item => `
    <div class="swiper-slide cursor-pointer overflow-hidden w-full min-h-full h-22!">
        <div class="p-2.5 w-full h-full flex items-center justify-center bg-white">
            <img src="../img/seller-slider/${item}" alt="" class="max-h-14 md:max-w-25" />
        </div>
    </div>
`).join('')

actualCategory.innerHTML = actualCategoryData.map(item => `

    <div class="md:p-5.5 cursor-pointer">
        <div class="h-34.5 w-34.5 max-w-4/5 md:max-w-30.5 lg:max-w-33.5 m-[0_auto_8px]">
            <img src="../img/actual/${item.bg}" alt="img" class="w-full object-center object-contain h-full" />
        </div>
        <div class="text-[12px] md:text-[13px] text-center text-[#1e244d] leading-[150%] min-h-10 flex justify-center
        items-center">${item.title}</div>
    </div>
    
`).join('')

actualFooter.innerHTML = actualFooterData.map(item => `
    <div class="text-[#242b58] text-sm py-1.5 px-4 bg-white cursor-pointer rounded-[20px]">${item}</div>    
`).join('')

const swiper = new Swiper('.banner-swiper', {
	slidesPerView: 'auto',
	spaceBetween: 8,
	loop: true,
	autoplay: {
	delay: 5000,
	disableOnInteraction: false,
	},
	pagination: {
	el: '.swiper-pagination',
	clickable: true,
	},
	breakpoints: {
	735:  {
		slidesPerView: 1, 
		spaceBetween: 0
	},
	}
})

const productSwiper = new Swiper('.product-swiper', {
	slidesPerView: 2,
	slidesPerGroup: 2,
	spaceBetween: 8,
	navigation: {
		prevEl: '.product-prev',
		nextEl: '.product-next',
	},
	pagination: {
		el: '.product-pagination',
		clickable: true,
	},
	breakpoints: {
		400:  {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 8,
		},
		600:  {
			slidesPerView: 3, 
			slidesPerGroup: 3,
			spaceBetween: 8,
		},
		650:  {
			slidesPerView: 4, 
			slidesPerGroup: 4,
			spaceBetween: 8,
		},
		1200:  {
			slidesPerView: 5, 
			slidesPerGroup: 5,
			spaceBetween: 8,
		},
	}
})

const companySwiper = new Swiper('.pop-brand-swiper', {
    slidesPerView: 3,
	slidesPerGroup: 3,
	spaceBetween: 8,
	navigation: {
		prevEl: '.pop-brand-prev',
		nextEl: '.pop-brand-next',
	},
	pagination: {
		el: '.pop-brand-pagination',
		clickable: true,
	},
    breakpoints: {
		640:  {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 8,
		},
		1200:  {
			slidesPerView: 5, 
			slidesPerGroup: 5,
			spaceBetween: 8,
		},
	}
})

const sellerSwiper = new Swiper('.pop-seller-swiper', {
    slidesPerView: 3,
	slidesPerGroup: 3,
	spaceBetween: 8,
	navigation: {
		prevEl: '.pop-seller-prev',
		nextEl: '.pop-seller-next',
	},
	pagination: {
		el: '.pop-seller-pagination',
		clickable: true,
	},
    breakpoints: {
		640:  {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 8,
		},
		1200:  {
			slidesPerView: 5, 
			slidesPerGroup: 5,
			spaceBetween: 8,
		},
	}
})

const newProductSwiper = new Swiper('.new-prod-swiper', {
	slidesPerView: 2,
	slidesPerGroup: 2,
	spaceBetween: 8,
	navigation: {
		prevEl: '.new-prod-prev',
		nextEl: '.new-prod-next',
	},
	pagination: {
		el: '.new-prod-pagination',
		clickable: true,
	},
	breakpoints: {
		400:  {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 8,
		},
		600:  {
			slidesPerView: 3, 
			slidesPerGroup: 3,
			spaceBetween: 8,
		},
		650:  {
			slidesPerView: 4, 
			slidesPerGroup: 4,
			spaceBetween: 8,
		},
		1200:  {
			slidesPerView: 5, 
			slidesPerGroup: 5,
			spaceBetween: 8,
		},
	}
})

function showTodayDiscount(type, arr) {

    todayDiscount.innerHTML = arr.map( item => `
  
        <div class="swiper-slide bg-white md:border md:border-[#edf1f7] h-auto! rounded-xs">
            <div class="flex flex-col justify-between h-full">
                <div class="p-[12px_16px_8px] md:p-[24px_24px_16px] relative">
                    <div onclick="addFavorite('${type}', ${item.id}, 'mainFavorite')" class="cursor-pointer absolute z-99 group top-2.5 right-2.5 md:top-4 md:right-4 size-6 rounded-[50%] bg-transparent flex
                    items-center justify-center">
                        ${showHeart(type, item.id)}
                    </div>
                    <div class="${item.isNew ? '' : 'hidden'} absolute z-10 top-1 left-1 md:top-6 md:left-6 flex flex-col gap-1.5">
                        <span class="text-[11px] px-1 bg-brand rounded-xs text-white font-semibold leading-4">Yenilik</span>
                    </div>
                    <a href="../html/detail.htm?type=${type}&id=${item.id}" class="flex flex-col">
                        <div class="flex flex-col gap-1.5 md:gap-4">
                            <div class="overflow-hidden relative max-md:aspect-square flex items-center w-full md:h-46.5">
                                <img src="${item.image}" alt="img" class="object-contain w-full h-full" />
                                <div class="${item.discount ? '' : 'hidden'} flex absolute bottom-0">
                                    <p class="bg-[#ff429a] rounded-xs text-white text-[11px] leading-3.5
                                    font-bold h-4 mr-1 p-[2px_4px]">-${item.discount} %</p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-0.5 md:gap-1.5 overflow-hidden">
                                <div class="text-[#1e244d] leading-5 md:leading-6 font-bold text-[16px]">
                                    <span class="text-brand mr-1 md:mr-2">${item.price?.toFixed(2)} ₼</span>
                                    <span class="${item.oldPrice != 0 ? '' : 'hidden'} text-[13px] md:block lg:inline text-[#9497ad] line-through text-nowrap">${item.oldPrice?.toFixed(2)} ₼</span>
                                </div>
                                <div class="${item.timer ? '' : 'hidden'} flex text-[11px] leading-normal -mt-1.5">
                                    <span class="text-[#9497ad]">Aksiya: &nbsp;</span>
                                    <span class="text-[#ff429a] font-semibold">${item.timer}</span>
                                </div>
                                <span class="${item.installment ? '' : 'hidden'} text-[#1e244d] leading-4.5 md:leading-5 w-max font-semibold text-[12px] md:text-[13px]
                                px-1 bg-[#ffd740] rounded-xs -mt-0.5">${item.installment?.monthly} ₼ x ${item.installment?.months} ay</span>
                                <div class="text-[13px] leading-4.5 max-h-9 line-clamp-2">${item.desc}</div>
                                <div class="flex items-center ${item.reviewCount == 0 ? 'hidden' : ''}">
                                    ${showStar(item.rating)}
                                    <span class="ml-0.75 inline-flex items-center whitespace-nowrap text-[#50557a] md:text-brand text-[12px] leading-6">${item.reviewCount} reytinq</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="pb-3 mt-2 md:mt-0 w-full px-4 md:px-6 md:pb-4">
                    <button id="btn${type}${item.id}" onclick="addCart('${type}', ${item.id}, 'mainCart')" class="text-brand font-bold text-[13px] md:text-[16px] leading-6 py-3 rounded-xs h-9 cursor-pointer w-full bg-[#fef1f7]
                    flex items-center justify-center">
                        <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="inline-block shrink-0 mr-2 text-[18px] md:text-[22px]">
                            <path xmlns="http://www.w3.org/2000/svg" d="M311.878 950.857c45.933 0 83.168-36.766 83.168-82.125s-37.235-82.125-83.168-82.125c-45.933 0-83.168 36.766-83.168 82.125s37.235 82.125 83.168 82.125z"/>
                            <path xmlns="http://www.w3.org/2000/svg" d="M1013.605 257.925c-5.198-5.133-5.198-5.133-10.396-5.133h-743.31c-20.792 0-36.386-15.399-36.386-30.797l-20.792-138.586c0-5.133-5.198-10.266-15.594-10.266h-171.533c-10.396 0-15.594 5.133-15.594 15.399v35.93c0 10.266 5.198 15.399 15.594 15.399h129.949v5.133l83.168 564.611c0 5.134 5.198 10.269 15.593 10.269h566.577c5.198 0 10.396-5.134 15.594-10.269l197.525-441.422c-5.198 0-5.198-5.133-10.396-10.266zM899.249 370.846l-119.554 261.776c-5.198 15.399-20.787 20.529-36.381 20.529h-426.236c-20.792 0-36.386-15.399-36.386-30.793l-36.386-261.777c0-10.266 0-20.532 10.396-30.797 5.198-5.133 15.594-10.266 25.99-10.266h582.171c10.396 0 25.99 5.133 31.188 15.399 10.396 10.266 10.396 25.665 5.198 35.93z"/>
                            <path xmlns="http://www.w3.org/2000/svg" d="M753.708 950.857c45.929 0 83.163-36.766 83.163-82.125s-37.234-82.125-83.163-82.125c-45.933 0-83.169 36.766-83.169 82.125s37.234 82.125 83.169 82.125z"/>
                        </svg>
                        ${item.delivery}
                    </button>
                </div>
            </div>
        </div>
  
  
    ` ).join('')


}

function showBestSeller(type, arr) {

    bestSeller.innerHTML = arr.map(item => `

        <div class="bg-white md:border md:border-[#edf1f7] h-auto! rounded-xs">
            <div class="p-0 md:p-[24px_24px_16px] relative">
                <div onclick="addFavorite('${type}', ${item.id}, 'mainFavorite')" class="cursor-pointer absolute z-55 group top-2.5 right-2.5 md:top-4 md:right-4 size-6 rounded-[50%] bg-transparent flex
                items-center justify-center">
                    ${showHeart(type, item.id)}
                </div>
                <div class="absolute z-10 top-1 left-1 md:top-6 md:left-6 flex flex-col gap-1.5">
                    <div class="${item.isPartnerPremium ? '' : 'hidden'} mb-1 w-18.25 h-6 rounded-4xl flex items-center justify-center bg-[linear-gradient(to_right,#312e81,#c084fc)]">
                        <div class="bg-white rounded-4xl w-17.75 h-5.5 flex flex-col items-center justify-center">
                            <p class="tracking-wide leading-1.5 uppercase text-[6px] text-[#312e81]">Partner</p>
                            <p class="uppercase italic font-extrabold text-[12px] leading-3 pr-1
                            bg-[linear-gradient(90deg,#392d69,#b57bee)] text-transparent bg-clip-text">Premium</p>
                        </div>
                    </div>
                    <span class="${item.isNew ? '' : 'hidden'} text-[11px] px-1 bg-brand w-fit rounded-xs text-white font-semibold leading-4">Yenilik</span>
                    <span class="${item.isBestSeller ? '' : 'hidden'} bg-brand rounded-xs text-white text-[12px] font-semibold leading-4 px-1">Ən çox satılan</span>
                </div>
                <a href="detail.htm?type=${type}&id=${item.id}" class="flex flex-col">
                    <div class="flex flex-col gap-1.5 md:gap-4">
                        <div class="overflow-hidden relative max-md:aspect-square flex items-center w-full md:h-46.5">
                            <img src="${item.image}" alt="img" class="object-contain w-full h-full" />
                            <div class="${item.discount ? '' : 'hidden'} flex absolute bottom-0">
                                <p class="bg-[#ff429a] rounded-xs text-white text-[11px] leading-3.5
                                font-bold h-4 mr-1 p-[2px_4px]">-${item.discount} %</p>
                            </div>
                            <div class="absolute inset-0 bg-[#0000000a] rounded-xl md:hidden"></div>
                        </div>
                        <div class="flex flex-col gap-0.5 md:gap-1.5 max-md:h-28 overflow-hidden">
                            <div class="text-[#1e244d] leading-5 md:leading-6 font-bold text-[16px]">
                                <span class="text-brand mr-1 md:mr-2">${item.price.toFixed(2)} ₼</span>
                                <span class="${item.oldPrice ? '' : 'hidden'} text-[13px] text-[#9497ad] line-through text-nowrap">${item.oldPrice?.toFixed(2)} ₼</span>
                            </div>
                            <span class="${item.installment ? '' : 'invisible'} text-[#1e244d] leading-4.5 md:leading-5 w-max font-semibold text-[12px] md:text-[13px]
                            px-1 bg-[#ffd740] rounded-xs -mt-0.5">${item.installment?.monthly} ₼ x ${item.installment?.months} ay</span>
                            <div class="text-[13px] leading-4.5 max-h-9 line-clamp-2">${item.desc}</div>
                            <div class="flex items-center ${item.reviewCount == 0 ? 'invisible' : ''}">
                                ${showStar(item.rating)}
                                <span class="ml-0.75 inline-flex items-center text-[#50557a] md:text-brand text-[12px] leading-6">${item.reviewCount} reytinq</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="max-md:p-0 pb-3 mt-2 md:mt-0 self-end! px-4 md:px-6 md:pb-4">
                <button id="btn${type}${item.id}" onclick="addCart('${type}', ${item.id}, 'mainCart')" class="text-brand font-bold text-[13px] md:text-[16px] leading-6 py-3 rounded-xs h-9 cursor-pointer w-full bg-[#fef1f7]
                flex items-center justify-center">
                    <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="inline-block shrink-0 mr-2 text-[18px] md:text-[22px]">
                        <path xmlns="http://www.w3.org/2000/svg" d="M311.878 950.857c45.933 0 83.168-36.766 83.168-82.125s-37.235-82.125-83.168-82.125c-45.933 0-83.168 36.766-83.168 82.125s37.235 82.125 83.168 82.125z"/>
                        <path xmlns="http://www.w3.org/2000/svg" d="M1013.605 257.925c-5.198-5.133-5.198-5.133-10.396-5.133h-743.31c-20.792 0-36.386-15.399-36.386-30.797l-20.792-138.586c0-5.133-5.198-10.266-15.594-10.266h-171.533c-10.396 0-15.594 5.133-15.594 15.399v35.93c0 10.266 5.198 15.399 15.594 15.399h129.949v5.133l83.168 564.611c0 5.134 5.198 10.269 15.593 10.269h566.577c5.198 0 10.396-5.134 15.594-10.269l197.525-441.422c-5.198 0-5.198-5.133-10.396-10.266zM899.249 370.846l-119.554 261.776c-5.198 15.399-20.787 20.529-36.381 20.529h-426.236c-20.792 0-36.386-15.399-36.386-30.793l-36.386-261.777c0-10.266 0-20.532 10.396-30.797 5.198-5.133 15.594-10.266 25.99-10.266h582.171c10.396 0 25.99 5.133 31.188 15.399 10.396 10.266 10.396 25.665 5.198 35.93z"/>
                        <path xmlns="http://www.w3.org/2000/svg" d="M753.708 950.857c45.929 0 83.163-36.766 83.163-82.125s-37.234-82.125-83.163-82.125c-45.933 0-83.169 36.766-83.169 82.125s37.234 82.125 83.169 82.125z"/>
                    </svg>
                    ${item.delivery}
                </button>
            </div>
        </div>

    `).join('')
}

function showNewProduct(type, arr) {

    newProductSlider.innerHTML = arr.map(item => `

        <div class="swiper-slide bg-white md:border md:border-[#edf1f7] h-auto! rounded-xs">
            <div class="flex flex-col justify-between h-full">
                <div class="p-[12px_16px_8px] md:p-[24px_24px_16px] relative">
                    <div onclick="addFavorite('${type}', ${item.id}, 'mainFavorite')" class="cursor-pointer absolute z-55 group top-2.5 right-2.5 md:top-4 md:right-4 size-6 rounded-[50%] bg-transparent flex
                    items-center justify-center">
                        ${showHeart(type, item.id)}
                    </div>
                    <div class="${item.isNew ? '' : 'hidden'} absolute z-10 top-1 left-1 md:top-6 md:left-6 flex flex-col gap-1.5">
                        <span class="text-[11px] px-1 bg-brand rounded-xs text-white font-semibold leading-4">Yenilik</span>
                    </div>
                    <a href="detail.htm?type=${type}&id=${item.id}" class="flex flex-col">
                        <div class="flex flex-col gap-1.5 md:gap-4">
                            <div class="overflow-hidden relative max-md:aspect-square flex items-center w-full md:h-46.5">
                                <img src="${item.image}" alt="img" class="object-contain w-full h-full" />
                                <div class="${item.discount ? '' : 'hidden'} flex absolute bottom-0">
                                    <p class="bg-[#ff429a] rounded-xs text-white text-[11px] leading-3.5
                                    font-bold h-4 mr-1 p-[2px_4px]">-${item.discount} %</p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-0.5 md:gap-1.5 overflow-hidden">
                                <div class="text-[#1e244d] leading-5 md:leading-6 font-bold text-[16px]">
                                    <span class="text-brand mr-1 md:mr-2">${item.price?.toFixed(2)} ₼</span>
                                    <span class="${item.oldPrice ? '' : 'hidden'} text-[13px] text-[#9497ad] line-through text-nowrap">${item.oldPrice?.toFixed(2)} ₼</span>
                                </div>
                                <span class="${item.installment ? '' : 'hidden'} text-[#1e244d] leading-4.5 md:leading-5 w-max font-semibold text-[12px] md:text-[13px]
                                px-1 bg-[#ffd740] rounded-xs -mt-0.5">${item.installment?.monthly} ₼ x ${item.installment?.months} ay</span>
                                <div class="text-[13px] leading-4.5 max-h-9 line-clamp-2">${item.desc}</div>
                                <div class="flex items-center ${item.reviewCount == 0 ? 'invisible' : ''}">
                                    ${showStar(item.rating)}
                                    <span class="ml-0.75 inline-flex items-center whitespace-nowrap text-[#50557a] md:text-brand text-[12px] leading-6">${item.reviewCount} reytinq</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="pb-3 mt-2 md:mt-0 w-full px-4 md:px-6 md:pb-4">
                    <button id="btn${type}${item.id}" onclick="addCart('${type}', ${item.id}, 'mainCart')" class="text-brand font-bold text-[13px] md:text-[16px] leading-6 py-3 rounded-xs h-9 cursor-pointer w-full bg-[#fef1f7]
                    flex items-center justify-center">
                        <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="inline-block shrink-0 mr-2 text-[18px] md:text-[22px]">
                            <path xmlns="http://www.w3.org/2000/svg" d="M311.878 950.857c45.933 0 83.168-36.766 83.168-82.125s-37.235-82.125-83.168-82.125c-45.933 0-83.168 36.766-83.168 82.125s37.235 82.125 83.168 82.125z"/>
                            <path xmlns="http://www.w3.org/2000/svg" d="M1013.605 257.925c-5.198-5.133-5.198-5.133-10.396-5.133h-743.31c-20.792 0-36.386-15.399-36.386-30.797l-20.792-138.586c0-5.133-5.198-10.266-15.594-10.266h-171.533c-10.396 0-15.594 5.133-15.594 15.399v35.93c0 10.266 5.198 15.399 15.594 15.399h129.949v5.133l83.168 564.611c0 5.134 5.198 10.269 15.593 10.269h566.577c5.198 0 10.396-5.134 15.594-10.269l197.525-441.422c-5.198 0-5.198-5.133-10.396-10.266zM899.249 370.846l-119.554 261.776c-5.198 15.399-20.787 20.529-36.381 20.529h-426.236c-20.792 0-36.386-15.399-36.386-30.793l-36.386-261.777c0-10.266 0-20.532 10.396-30.797 5.198-5.133 15.594-10.266 25.99-10.266h582.171c10.396 0 25.99 5.133 31.188 15.399 10.396 10.266 10.396 25.665 5.198 35.93z"/>
                            <path xmlns="http://www.w3.org/2000/svg" d="M753.708 950.857c45.929 0 83.163-36.766 83.163-82.125s-37.234-82.125-83.163-82.125c-45.933 0-83.169 36.766-83.169 82.125s37.234 82.125 83.169 82.125z"/>
                        </svg>
                        ${item.delivery}
                    </button>
                </div>
            </div>
        </div>
        
    `).join('')
}

