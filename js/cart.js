let cart = JSON.parse(localStorage.getItem('cart')) || []

const cartContainer = document.getElementById('cartContainer')
const cartTop = document.getElementById('cartTop')
const cartOrder = document.getElementById('cartOrder')
const cartConfirm = document.getElementById('cartConfirm')
const totalPrice = document.getElementById('totalPrice')

showCart()
showTotalPrice()
uptBtn('cart', 'cartSeb')
uptBtn('favorite', 'cartFav')

function showCart() {
    let carts = JSON.parse(localStorage.getItem('cart')) || []

    if(carts.length == 0) {
        cartTop.style.display = 'none'
        cartOrder.style.display = 'none'
        cartConfirm.style.display = 'none'
        cartContainer.innerHTML = `
            <div class="py-6 px-3 mt-4 md:mt-10 mb-10 border border-[#e7e8ed] flex flex-col justify-center items-center">
                <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="shrink-0 text-[80px] text-[#dcdde4] p-2.5">
                    <path xmlns="http://www.w3.org/2000/svg" d="M311.878 950.857c45.933 0 83.168-36.766 83.168-82.125s-37.235-82.125-83.168-82.125c-45.933 0-83.168 36.766-83.168 82.125s37.235 82.125 83.168 82.125z"/>
                    <path xmlns="http://www.w3.org/2000/svg" d="M1013.605 257.925c-5.198-5.133-5.198-5.133-10.396-5.133h-743.31c-20.792 0-36.386-15.399-36.386-30.797l-20.792-138.586c0-5.133-5.198-10.266-15.594-10.266h-171.533c-10.396 0-15.594 5.133-15.594 15.399v35.93c0 10.266 5.198 15.399 15.594 15.399h129.949v5.133l83.168 564.611c0 5.134 5.198 10.269 15.593 10.269h566.577c5.198 0 10.396-5.134 15.594-10.269l197.525-441.422c-5.198 0-5.198-5.133-10.396-10.266zM899.249 370.846l-119.554 261.776c-5.198 15.399-20.787 20.529-36.381 20.529h-426.236c-20.792 0-36.386-15.399-36.386-30.793l-36.386-261.777c0-10.266 0-20.532 10.396-30.797 5.198-5.133 15.594-10.266 25.99-10.266h582.171c10.396 0 25.99 5.133 31.188 15.399 10.396 10.266 10.396 25.665 5.198 35.93z"/>
                    <path xmlns="http://www.w3.org/2000/svg" d="M753.708 950.857c45.929 0 83.163-36.766 83.163-82.125s-37.234-82.125-83.163-82.125c-45.933 0-83.169 36.766-83.169 82.125s37.234 82.125 83.169 82.125z"/>
                </svg>
                <span class="text-[#1e244d] font-bold text-lg mt-4 md:mt-2">Səbət boşdur</span>
                <span class="text-[#9497ad] text-xs md:text-sm text-center w-3/4 mt-2">Sizə lazım olan məhsulları tapmağınız üçün alış-verişə məhsul kataloquna keçərək başlayın</span>
                <div class="flex flex-col-reverse md:flex-row justify-center gap-2 md:gap-4 w-full mt-6">
                    <div class="cursor-pointer leading-normal text-brand hover:text-brand-hover transition duration-150 text-center w-full md:w-60 py-2 md:py-3">
                        <span class="text-xs md:text-base">Mənim sifarişlərim</span>
                    </div>
                    <div class="cursor-pointer leading-normal transition duration-150 w-full md:w-60 text-white bg-brand hover:bg-brand-hover text-center py-2 md:py-3 rounded-xs">
                        <span class="text-xs md:text-base">Məhsul kataloqu</span>
                    </div>
                </div>
            </div>
        `
    } else {

        cartContainer.innerHTML = carts.map(item => {
            cartTop.style.display = ''
            cartOrder.style.display = ''
            cartConfirm.style.display = ''
            const prod = allData[item.type].find(a => a.id == item.id)

            return  `
                    <div class="mb-6 bg-white rounded-xs w-full">
                        <div class="h-auto p-4 md:p-[0_32px] border-b border-b-[#e7e8ed] min-h-14 flex flex-wrap items-center w-full">
                            <div class="text-[#50557a] text-[11px] leading-normal w-full md:w-auto mr-2 flex items-center">
                                <span>Satıcı-şirkət:</span>
                                <span class="mr-4 ml-1.5 md:hidden">
                                    <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="shrink-0 text-[13px] text-[#9497AD]">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M475.43 286.475c0-10.099 8.187-18.286 18.286-18.286h36.238c10.1 0 18.286 8.187 18.286 18.286v60.952c0 10.1-8.187 18.286-18.286 18.286h-36.239c-10.099 0-18.286-8.187-18.286-18.286v-60.953zM475.43 481.523c0-10.099 8.187-18.286 18.286-18.286h36.239c10.099 0 18.286 8.187 18.286 18.286v255.998c0 10.101-8.187 18.286-18.286 18.286h-36.239c-10.099 0-18.286-8.185-18.286-18.286v-255.998zM512.002 24.38c-269.166 0-487.619 218.453-487.619 487.619s218.454 487.621 487.619 487.621c269.167 0 487.616-218.456 487.616-487.621s-218.448-487.619-487.616-487.619zM512.001 926.478c-215.040 0-414.476-199.439-414.476-414.479s199.436-414.476 414.476-414.476c215.041 0 414.474 199.436 414.474 414.476s-199.433 414.479-414.474 414.479z"/>
                                    </svg>
                                </span>
                            </div>
                            <div class="${prod.isPartnerPremium ? '' : 'hidden'} md:-order-1 mr-1 w-full md:w-auto">
                                <div class="bg-[linear-gradient(to_right,#312e81,#c084fc)] rounded-xs flex justify-center items-center w-26.25 h-4">
                                    <div class="bg-white w-25.75 h-3.5 rounded-xs flex items-center justify-center">
                                        <div class="w-full flex justify-evenly items-baseline">
                                            <p class="bg-[linear-gradient(90deg,#392d69,#b57bee)] bg-clip-text text-transparent leading-3 italic
                                            uppercase font-extrabold text-xs pr-1">Premium</p>
                                            <span class="text-[#312e81] tracking-wide leading-2 uppercase text-[8px]">Partner</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-wrap items-center justify-start">
                                <div class="size-6 mr-2">
                                    <img src="img/7d5f1b5c1a33fa77e34562f846c92f7a.png" alt="img" class="object-contain" />
                                </div>
                                <div class="text-[#1e244d] font-bold text-[13px] flex items-center">
                                    <span>Birmarket.az</span>
                                    <div class="hidden md:block ml-1.5 mr-4">
                                        <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="shrink-0 text-[13px] text-[#9497AD]">
                                            <path xmlns="http://www.w3.org/2000/svg" d="M475.43 286.475c0-10.099 8.187-18.286 18.286-18.286h36.238c10.1 0 18.286 8.187 18.286 18.286v60.952c0 10.1-8.187 18.286-18.286 18.286h-36.239c-10.099 0-18.286-8.187-18.286-18.286v-60.953zM475.43 481.523c0-10.099 8.187-18.286 18.286-18.286h36.239c10.099 0 18.286 8.187 18.286 18.286v255.998c0 10.101-8.187 18.286-18.286 18.286h-36.239c-10.099 0-18.286-8.185-18.286-18.286v-255.998zM512.002 24.38c-269.166 0-487.619 218.453-487.619 487.619s218.454 487.621 487.619 487.621c269.167 0 487.616-218.456 487.616-487.621s-218.448-487.619-487.616-487.619zM512.001 926.478c-215.040 0-414.476-199.439-414.476-414.479s199.436-414.476 414.476-414.476c215.041 0 414.474 199.436 414.474 414.476s-199.433 414.479-414.474 414.479z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-4 md:px-8 lg:px-10">
                            <div class="py-4 md:py-6 flex flex-wrap items-start relative">
                                <div class="flex md:items-center h-28">
                                    <input checked type="checkbox" class="size-3.5 rounded-xs mr-2.5 appearance-none border border-brand bg-white checked:bg-brand
                                    checked:bg-[url('img/u-icon-checked.svg')] checked:bg-contain checked:bg-no-repeat checked:bg-center " />
                                </div>
                                <div class="mr-2 md:mr-4 size-14 md:size-28">
                                    <img src="${prod.image}" class="size-full object-contain" alt="img" />
                                </div>
                                <div class="flex-1 md:flex-[0_0_calc(100%-184px)] md:flex md:items-start">
                                    <div class="mb-2 mr-7 flex-1 flex flex-col">
                                        <div class="flex leading-normal">
                                            <div class="text-[#565671] text-[12px] md:text-[13px] leading-normal mb-1">
                                                Çatdırılma:
                                                <span class="text-[#1e244d] font-bold">${prod.delivery}</span>
                                            </div>
                                        </div>
                                        <h5 class="text-[#1e244d] font-normal text-[13px] md:text-base leading-[150%] mb-3 w-full max-w-94">
                                            ${prod.title}
                                        </h5>
                                        <div class="${prod.discount ? '' : 'hidden!'} flex items-center">
                                            <p class="bg-brand-hover rounded-xs text-white font-bold h-4 text-[12px] leading-3.5 mr-1 p-[2px_4px]">-${prod.discount} %</p>
                                        </div>
                                        <div class="mb-1 lg:mb-2 text-[#1e244d] leading-5 md:leading-6 font-bold text-base">
                                            <span class="text-brand text-[13px] md:text-[16px] mr-1 md:mr-2">${prod.price.toFixed(2)} ₼</span>
                                            <span class="${prod.oldPrice ? '' : 'hidden'} text-[#9497ad] line-through text-[11px] md:text-[13px] text-nowrap">${prod.oldPrice?.toFixed(2)} ₼</span>
                                        </div>
                                        <div class="${prod.installment ? '' : 'hidden!'} flex flex-col md:flex-row flex-wrap max-md:max-w-38 md:mb-2">
                                            <span class="block whitespace-nowrap text-[11px] md:text-[13px] leading-normal px-1">Taksitli ödəniş</span>
                                            <div class="text-[11px] md:text-[13px] text-[#1e244d] leading-normal px-1 whitespace-nowrap">
                                                <span class="text-nowrap text-[11px] md:text-[13px] rounded-xs text-[#1e244d] px-1 font-bold bg-[#ffd740]">${prod.installment?.monthly} ₼ </span>&nbsp; x ${prod.installment?.months} ay
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-31.25">
                                        <div class="flex items-center border border-[#dcdde4] h-8 w-24">
                                            <button onclick="updtInpCart('${item.type}', ${prod.id}, -1)" class="flex items-center justify-center border-0 h-full w-7.75">
                                                <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="text-[#1e244d] text-[12px]  shrink-0">
                                                    <path xmlns="http://www.w3.org/2000/svg" d="M950.882 585h-877.709c-19.399 0-38.004-7.706-51.721-21.425s-21.423-32.318-21.423-51.714c0-19.397 7.706-38.006 21.423-51.723s32.322-21.425 51.721-21.425h877.709c19.397 0 38.006 7.706 51.723 21.425s21.425 32.326 21.425 51.723c0 19.397-7.706 37.995-21.425 51.714s-32.326 21.425-51.723 21.425z"/>
                                                </svg>
                                            </button>
                                            <input type="number" min="1" max="25" value="${item.quantity}" class="border-0 text-center border-l border-l-[#dcdde4] border-r border-r-[#dcdde4] w-8 h-7.25
                                            text-[#1e244d] text-[13px] font-semibold outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
                                            <button onclick="updtInpCart('${item.type}', ${prod.id}, 1)" class="flex items-center justify-center border-0 h-full w-7.75">
                                                <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="text-[#1e244d] text-[12px] shrink-0">
                                                    <path xmlns="http://www.w3.org/2000/svg" d="M950.852 585.142h-365.708v365.716c0 19.397-7.706 37.995-21.425 51.714s-32.326 21.425-51.723 21.425c-19.397 0-37.995-7.706-51.714-21.425s-21.425-32.318-21.425-51.714v-365.716h-365.714c-19.399 0-38.004-7.706-51.721-21.425s-21.423-32.318-21.423-51.714c0-19.397 7.706-38.006 21.423-51.723s32.322-21.425 51.721-21.425h365.714v-365.71c0-19.399 7.706-38.002 21.425-51.719s32.318-21.423 51.714-21.423c19.397 0 38.006 7.706 51.723 21.423s21.425 32.322 21.425 51.719v365.71h365.708c19.397 0 38.006 7.706 51.723 21.425s21.425 32.326 21.425 51.723c0 19.397-7.706 37.995-21.425 51.714s-32.326 21.425-51.723 21.425z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div onclick="removeCart('${item.type}', ${prod.id})" class="ml-2 md:ml-5.25 size-6 flex items-center group justify-center absolute right-0">
                                    <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="group-hover:text-brand-hover shrink-0 text-[10px] md:text-[14px] text-[#9497ad]">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M512.001 614.558l409.249 409.244 102.36-102.36-409.248-409.245 409.638-409.639-102.36-102.36-409.641 409.638-409.638-409.638-102.361 102.36 409.639 409.639-409.247 409.245 102.361 102.36 409.246-409.244z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="border-t flex border-t-[#e7e8ed] p-4 md:p-[16px_40px]">
                            <div class="mb-2 md:mb-5 w-full">
                                <div class="md:ml-auto md:w-fit max-md:justify-between flex items-center mb-1">
                                    <span class="text-[#9497ad] leading-[150%] text-[13px]">Ümumi qiymət:</span>
                                    <span class="text-[#1e244d] font-bold ml-6 leading-[150%] text-[13px] md:text-base">${(prod.price * item.quantity).toFixed(2)} ₼</span>
                                </div>
                            </div>
                        </div>
                    </div>
                
        `
        }).join('')
    }
}

function updtInpCart(type, id, n) {
    const carts = JSON.parse(localStorage.getItem('cart')) || []
    const prod = carts.find(a => a.id == id && a.type === type )
    if(prod.quantity + n < 1) return;
    prod.quantity += +n

    localStorage.setItem('cart', JSON.stringify(carts))
    
    showCart()
    uptBtn('cart', 'cartSeb')
    showTotalPrice()
}

function showTotalPrice() {
    let carts = JSON.parse(localStorage.getItem('cart')) || []

    const total = carts.reduce((sum, item) => {
        const prod = allData[item.type].find(p => p.id == item.id)
        if (!prod) return sum
        return sum + prod.price * item.quantity
    }, 0)

    totalPrice.innerHTML = total.toFixed(2) + ' ₼'
}

function removeCart(type, id) {
    let carts = JSON.parse(localStorage.getItem('cart')) || []
    carts = carts.filter(item => item.type !== type || item.id != id)
    localStorage.setItem('cart', JSON.stringify(carts))
    
    showCart()
    showTotalPrice()
    uptBtn('favorite', 'cartFav')
    uptBtn('cart', 'cartSeb')
}

function removeAllCart() {
    localStorage.removeItem('cart')

    showCart()
    showTotalPrice()
    uptBtn('favorite', 'cartFav')
    uptBtn('cart', 'cartSeb',)
}