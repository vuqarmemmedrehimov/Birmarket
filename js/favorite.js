let favorite = JSON.parse(localStorage.getItem('favorite')) || []

const favoriteContainer = document.getElementById('favoriteContainer')

showFavorite()
uptBtn('cart', 'favCart')
uptBtn('favorite', 'favSec')

function showFavorite() {
    let favorites = JSON.parse(localStorage.getItem('favorite')) || []
    if(favorites.length == 0) {
        favoriteContainer.style.display = 'flex'
        favoriteContainer.innerHTML = `
            <div class="flex items-center justify-center py-25">
                <div class="flex flex-col items-center justify-center">
                    <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="text-[#e7e8ed] text-[80px] mb-5">
                        <path xmlns="http://www.w3.org/2000/svg" d="M939.584 158.912c-54.451-52.751-126.88-81.616-204.301-81.616-77.427 0-149.855 28.865-204.301 81.616l-18.483 17.917-19.481-18.414c-54.447-52.752-127.376-81.616-204.3-81.616s-149.355 28.865-203.801 81.616c-54.947 52.751-84.917 122.921-84.917 197.071s29.971 144.321 84.917 197.072l397.612 383.199c7.493 7.462 17.983 11.443 28.971 11.443 10.49 0 20.98-3.98 28.972-11.443l398.613-382.701c54.944-52.752 84.915-122.922 84.915-197.57 0-73.653-29.971-143.822-84.416-196.574zM735.283 157.42c54.944 0 106.893 20.901 146.355 58.225 38.963 37.324 60.442 87.588 60.442 140.837 0 52.751-21.479 103.015-60.442 140.339l-369.639 354.827-369.14-355.325c-38.962-37.822-60.441-87.588-60.441-140.837s21.479-103.015 60.441-140.339c38.963-37.822 90.912-58.226 146.357-58.226s107.395 20.902 146.857 58.723l47.954 46.282c15.984 15.427 41.959 15.427 57.943 0l47.454-45.784c38.462-37.822 90.409-58.723 145.858-58.723z"/>
                    </svg>
                    <p class="text-[#9497ad] text-[13px] leading-[150%]">Seçilmişlərdə hec bir məhsul yoxdur</p>
                </div>
            </div>
        `
    } else {
        favoriteContainer.style.display = 'grid'
        favoriteContainer.innerHTML = favorites.map(item => {
            const product = allData[item.type].find(a => a.id == item.id)

            return `
                <div class="bg-white md:border md:border-[#edf1f7] h-full rounded-xs">
                    <div class="flex flex-col h-full justify-between">
                        <div class="p-0 md:p-[24px_24px_16px] relative">
                            <div onclick="deleteFav('${item.type}', ${product.id})" class="cursor-pointer absolute z-55 group top-2.5 right-2.5 md:top-4 md:right-4 size-6 rounded-[50%] bg-transparent flex
                            items-center justify-center">
                                <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="shrink-0 text-brand group-hover:text-brand-hover
                                transition duration-200 text-[16px]">
                                    <path xmlns="http://www.w3.org/2000/svg" d="M735.283 77.295c77.421 0 149.85 28.864 204.301 81.616 54.444 52.751 84.416 122.921 84.416 196.574 0 74.648-29.971 144.817-84.915 197.57l-398.613 382.701c-7.992 7.462-18.482 11.443-28.972 11.443-10.989 0-21.479-3.981-28.972-11.443l-397.611-383.198c-54.946-52.751-84.917-122.921-84.917-197.071s29.971-144.32 84.917-197.072c54.447-52.751 126.877-81.615 203.801-81.615s149.854 28.864 204.3 81.615l19.481 18.413 18.483-17.916c54.447-52.751 126.875-81.616 204.302-81.616z"/>
                                </svg>
                            </div>
                            <div class="absolute z-10 top-1 left-1 md:top-6 md:left-6 flex flex-col gap-1.5">
                                <div class="${product.isPartnerPremium ? '' : 'hidden'} mb-1 w-18.25 h-6 rounded-4xl flex items-center justify-center bg-[linear-gradient(to_right,#312e81,#c084fc)]">
                                    <div class="bg-white rounded-4xl w-17.75 h-5.5 flex flex-col items-center justify-center">
                                        <p class="tracking-wide leading-1.5 uppercase text-[6px] text-[#312e81]">Partner</p>
                                        <p class="uppercase italic font-extrabold text-[12px] leading-3 pr-1
                                        bg-[linear-gradient(90deg,#392d69,#b57bee)] text-transparent bg-clip-text">Premium</p>
                                    </div>
                                </div>
                                <span class="${product.isNew ? '' : 'hidden'} text-[11px] px-1 bg-brand rounded-xs w-fit text-white font-semibold leading-4">Yenilik</span>
                                <span class="${product.isBestSeller ? '' : 'hidden'} bg-brand rounded-xs text-white text-[12px] font-semibold leading-4 px-1">Ən çox satılan</span>
                            </div>
                            <a href="" class="flex flex-col">
                                <div class="flex flex-col gap-1.5 md:gap-4">
                                    <div class="overflow-hidden relative max-md:aspect-square flex items-center w-full md:h-46.5">
                                        <img src="${product.image}" alt="img" class="object-contain w-full h-full" />
                                        <div class="${product.discount ? '' : 'hidden'} flex absolute bottom-0">
                                            <p class="bg-[#ff429a] rounded-xs text-white text-[11px] leading-3.5
                                            font-bold h-4 mr-1 p-[2px_4px]">-${product.discount} %</p>
                                        </div>
                                        <div class="absolute inset-0 bg-[#0000000a] rounded-xl md:hidden"></div>
                                    </div>
                                    <div class="flex flex-col gap-0.5 md:gap-1.5 max-md:h-28 overflow-hidden">
                                        <div class="text-[#1e244d] leading-5 md:leading-6 font-bold text-[16px]">
                                            <span class="text-brand mr-1 md:mr-2">${product.price.toFixed(2)} ₼</span>
                                            <span class="${product.oldPrice ? '' : 'hidden'} text-[13px] text-[#9497ad] line-through text-nowrap">${product.oldPrice?.toFixed(2)} ₼</span>
                                        </div>
                                        <span class="${product.installment ? '' : 'hidden'} text-[#1e244d] leading-4.5 md:leading-5 w-max font-semibold text-[12px] md:text-[13px]
                                        px-1 bg-[#ffd740] rounded-xs -mt-0.5">${product.installment?.monthly} ₼ x ${product.installment?.months} ay</span>
                                        <div class="text-[13px] leading-4.5 max-h-9 line-clamp-2">${product.title}</div>
                                        <div class="flex items-center ${product.reviewCount == 0 ? 'hidden' : ''}">
                                            ${showStar(product.rating)}
                                            <span class="ml-0.75 inline-flex items-center text-[#50557a] md:text-brand text-[12px] leading-6">${product.reviewCount} reytinq</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="max-md:p-0 pb-3 mt-2 w-full md:mt-0 self-end! px-4 md:px-6 md:pb-4">
                            <button id="btn${item.type}${product.id}" onclick="addCart('${item.type}', ${product.id}, 'favCart')" class="text-brand font-bold text-[13px] md:text-[16px] leading-6 py-3 rounded-xs h-9 cursor-pointer w-full bg-[#fef1f7]
                            flex items-center justify-center">
                                <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="inline-block shrink-0 mr-2 text-[18px] md:text-[22px]">
                                    <path xmlns="http://www.w3.org/2000/svg" d="M311.878 950.857c45.933 0 83.168-36.766 83.168-82.125s-37.235-82.125-83.168-82.125c-45.933 0-83.168 36.766-83.168 82.125s37.235 82.125 83.168 82.125z"/>
                                    <path xmlns="http://www.w3.org/2000/svg" d="M1013.605 257.925c-5.198-5.133-5.198-5.133-10.396-5.133h-743.31c-20.792 0-36.386-15.399-36.386-30.797l-20.792-138.586c0-5.133-5.198-10.266-15.594-10.266h-171.533c-10.396 0-15.594 5.133-15.594 15.399v35.93c0 10.266 5.198 15.399 15.594 15.399h129.949v5.133l83.168 564.611c0 5.134 5.198 10.269 15.593 10.269h566.577c5.198 0 10.396-5.134 15.594-10.269l197.525-441.422c-5.198 0-5.198-5.133-10.396-10.266zM899.249 370.846l-119.554 261.776c-5.198 15.399-20.787 20.529-36.381 20.529h-426.236c-20.792 0-36.386-15.399-36.386-30.793l-36.386-261.777c0-10.266 0-20.532 10.396-30.797 5.198-5.133 15.594-10.266 25.99-10.266h582.171c10.396 0 25.99 5.133 31.188 15.399 10.396 10.266 10.396 25.665 5.198 35.93z"/>
                                    <path xmlns="http://www.w3.org/2000/svg" d="M753.708 950.857c45.929 0 83.163-36.766 83.163-82.125s-37.234-82.125-83.163-82.125c-45.933 0-83.169 36.766-83.169 82.125s37.234 82.125 83.169 82.125z"/>
                                </svg>
                                Səbətə at
                            </button>
                        </div>
                    </div>
                </div>
                
            `
        }).join('')
    }
}

function deleteFav(type, id) {
    let favorites = JSON.parse(localStorage.getItem('favorite')) || []
    favorites = favorites.filter(item => item.type !== type || item.id != id)
    localStorage.setItem('favorite', JSON.stringify(favorites))
    
    showFavorite()
    uptBtn('favorite', 'favSec')
    checkCartButtons()
}