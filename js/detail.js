const params = new URLSearchParams(location.search)
const paramId = +params.get('id')
const paramType = params.get('type')

uptBtn('cart', 'detailCart')
uptBtn('favorite', 'detailFav')

const detailContainer = document.getElementById('detailContainer')

const product = allData[paramType].find(item => item.id === paramId)

detailContainer.innerHTML =  `
    
    <div class="bg-white py-4 border-b border-b-[#e7e8ed]">
        <ul class="container-brand overflow-auto flex">
            <li class="cursor-pointer whitespace-nowrap flex items-center">
                <span class="text-[#9497ad] hover:text-[#1e244d] text-[12px] leading-4 group-last:font-bold">Birmarket</span>
                <span class="px-2.5">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L5 5L1 1" stroke="#9497AD"></path></svg>
                </span>
            </li>
            <li class="cursor-pointer whitespace-nowrap flex items-center">
                <span class="text-[#9497ad] hover:text-[#1e244d] text-[12px] leading-4 group-last:font-bold">Kateqoriyalar</span>
                <span class="px-2.5">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L5 5L1 1" stroke="#9497AD"></path></svg>
                </span>
            </li>
            <li class="cursor-pointer whitespace-nowrap flex items-center">
                <span class="text-[#9497ad] hover:text-[#1e244d] text-[12px] leading-4 group-last:font-bold">Avtomobil məhsulları</span>
                <span class="px-2.5">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L5 5L1 1" stroke="#9497AD"></path></svg>
                </span>
            </li>
            <li class="cursor-pointer whitespace-nowrap flex items-center">
                <span class="text-[#9497ad] hover:text-[#1e244d] text-[12px] leading-4 group-last:font-bold">Avtomobil üçün kimyəvi və kosmetik maddələr</span>
                <span class="px-2.5">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L5 5L1 1" stroke="#9497AD"></path></svg>
                </span>
            </li>
            <li class="group cursor-pointer whitespace-nowrap flex items-center" >
                <span class="text-[#1e244d] text-[12px] leading-4 group-last:font-bold">${product.category}</span>
                <span class="px-2.5 group-last:hidden">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L5 5L1 1" stroke="#9497AD"></path></svg>
                </span>
            </li>
        </ul>
    </div>
    <div class="p-[16px_16px_0_16px] md:p-[40px_64px] lg:p-[40px_0]">
        <div class="lg:max-w-240 xl:max-w-300 xxl:max-w-7xl lg:mx-auto lg:flex">
            <div class="mb-6 md:m-[0_auto_40px] lg:m-[0_24px_0_0] flex items-center lg:items-start justify-center">
                <div class="hidden md:flex w-12 max-w-12">
                    <div class="h-96 flex flex-wrap">
                        <div class="overflow-hidden h-12.5">
                            <img src="${product.image}" alt="img" />
                        </div>
                    </div>
                </div>
                <div class="h-70 w-[calc(100vw-30px)] md:ml-10 md:size-118 lg:size-70 xl:size-96 lg:ml-9 xl:ml-4 relative">
                    <div class="${product.isPartnerPremium ? '' : 'hidden'} absolute z-25 top-0 left-0">
                        <div class="w-28.5 h-10 rounded-4xl flex justify-center items-center bg-[linear-gradient(to_right,#312e81,#c084fc)]">
                            <div class="w-27.75 h-9.25 flex justify-center items-center bg-white rounded-4xl">
                                <div class="w-full inline-flex flex-col justify-start items-center">
                                    <div class="text-[#312e81] tracking-wide leading-3 uppercase text-[11px]">Partner</div>
                                    <div class="bg-[linear-gradient(90deg,#392d69,#b57bee)] text-transparent bg-clip-text leading-4.5
                                    italic uppercase font-extrabold text-[19px] px-1">Premium</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="w-full min-h-full flex items-center justify-center">
                            <img class="max-h-70 h-full w-auto max-w-96 md:max-w-118 md:max-h-118 lg:max-w-70 lg:max-h-70
                            xl:max-w-96 xl:max-h-96" src="${product.image}" alt="img" />
                        </div>
                    </div>
                    <div class="absolute top-0 -right-2 md:top-13.75 lg:top-0">
                        <div class="flex flex-col gap-2">
                            <div class="bg-[linear-gradient(180deg,#7c62e3_13.51%,#53cebf_118.63%)] mr-4 flex flex-col items-center justify-center
                                h-22.5 w-22.5 rounded-[50%] text-center">
                                <img src="../img/birCredit.svg" alt="kart" class="w-10" />
                                <span class="text-white font-bold text-[16px] leading-6">${product.installment ? product.installment?.months : '0.30'} aylıq</span>
                                <span class="text-white text-[11px] leading-4">taksit</span>
                            </div>
                            <div class="bg-[#b61d29] w-22.5 h-22.5 rounded-[50%] flex items-center justify-center">
                                <p class="text-white text-[12px] leading-4 text-center w-16">
                                    kreditlə ayda <span class="text-[15px] font-bold"> ${product.installment ? product.installment?.monthly : '0.30'} AZN-dən</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full lg:pr-4 xl:pr-7">
                <h1 class="text-[17px] md:text-[24px] lg:text-[16px] xl:text-[24px] leading-5 md:leading-9 lg:leading-6 xl:leading-9 text-[#2a2a33] font-bold mb-2.5">${product.title}</h1>
                <div class="cursor-pointer mb-3">
                    <div class="flex max-md:gap-1">
                        ${showStar(product.rating)}
                        <div class="flex">
                            <span class="text-[#50557a] text-[11px] font-semibold mr-2 leading-4">${product.rating ? product.rating : 'Reytinq yoxdur'}</span>
                            <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="shrink-0
                            text-brand text-[12px] mr-1 ml-4 ${product.reviewCount ? '' : 'hidden'}">
                                <path xmlns="http://www.w3.org/2000/svg" d="M919.726 798.139c66.572-59.332 104.274-138.417 104.274-220.487 0-87.22-40.834-168.791-114.978-229.702-72.155-59.26-167.667-91.899-268.955-91.899-101.284 0-196.799 32.64-268.947 91.904-74.143 60.905-114.973 142.475-114.973 229.697s40.83 168.787 114.973 229.702c72.148 59.262 167.661 91.904 268.947 91.904 13.496 0 27.074-0.599 40.542-1.782l23.004 19.941c79.249 68.677 180.606 106.478 285.471 106.485h34.899v-74.289l-10.22-10.22c-40.328-40.45-72.277-88.441-94.039-141.253zM749.334 864.657l-46.163-40.005-15.388 1.881c-15.833 1.942-31.766 2.911-47.715 2.911-173.201 0-314.116-112.95-314.116-251.793 0-138.839 140.916-251.796 314.116-251.796 173.196 0 314.112 112.954 314.112 251.796 0 69.171-34.508 133.751-97.164 181.835l-20.102 15.427 9.275 26.253c19.004 53.619 46.947 103.637 82.628 147.933-66.457-11.088-128.569-40.312-179.486-84.441z"/>
                                <path xmlns="http://www.w3.org/2000/svg" d="M96.586 643.121c32.742-40.437 58.448-85.85 76.093-134.423l9.225-25.542-20.127-15.071c-59.215-44.335-91.827-103.838-91.827-167.55 0-128.027 133.368-232.184 297.302-232.184 120.6 0 224.653 56.373 271.239 137.146 8.65-0.409 17.338-0.639 26.065-0.639 17.529 0 34.898 0.83 52.105 2.49-18.006-45.506-49.273-87.046-92.253-121.493-68.996-55.301-160.311-85.757-257.153-85.757s-188.157 30.456-257.158 85.757c-70.998 56.904-110.097 133.145-110.097 214.681 0 76.358 35.747 149.933 98.918 205.278-20.616 48.407-50.739 92.409-88.672 129.53l-10.246 9.995v71.417h34.977c64.678-0.007 128.467-14.697 186.319-42.923-6.344-23.458-10.060-47.519-11.086-71.76-35.113 20.078-73.572 33.974-113.62 41.050z"/>
                            </svg>
                            <span class="${product.reviewCount ? '' : 'hidden'} text-[#50557a] md:text-brand text-[12px] leading-3">${product.reviewCount} rəy</span>
                        </div>
                    </div>
                </div>
                <div class="mb-6 md:mb-7.5 flex lg:flex-col xl:flex-row">
                    <span class="mb-2.5 md:mb-0 mr-6 lg:mb-4 flex text-[#1e244d] text-[11px] leading-4 ">Məhsulun kodu: 2651766</span>
                    <div onclick="addFavorite('${paramType}', ${product.id}, 'detailFav')" class="cursor-pointer mr-4 md:mr-6 flex">
                        <div class="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-0 flex justify-center">
                            <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="shrink-0
                            text-brand-hover text-[16px]">
                                <path xmlns="http://www.w3.org/2000/svg" d="M939.584 158.912c-54.451-52.751-126.88-81.616-204.301-81.616-77.427 0-149.855 28.865-204.301 81.616l-18.483 17.917-19.481-18.414c-54.447-52.752-127.376-81.616-204.3-81.616s-149.355 28.865-203.801 81.616c-54.947 52.751-84.917 122.921-84.917 197.071s29.971 144.321 84.917 197.072l397.612 383.199c7.493 7.462 17.983 11.443 28.971 11.443 10.49 0 20.98-3.98 28.972-11.443l398.613-382.701c54.944-52.752 84.915-122.922 84.915-197.57 0-73.653-29.971-143.822-84.416-196.574zM735.283 157.42c54.944 0 106.893 20.901 146.355 58.225 38.963 37.324 60.442 87.588 60.442 140.837 0 52.751-21.479 103.015-60.442 140.339l-369.639 354.827-369.14-355.325c-38.962-37.822-60.441-87.588-60.441-140.837s21.479-103.015 60.441-140.339c38.963-37.822 90.912-58.226 146.357-58.226s107.395 20.902 146.857 58.723l47.954 46.282c15.984 15.427 41.959 15.427 57.943 0l47.454-45.784c38.462-37.822 90.409-58.723 145.858-58.723z"/>
                            </svg>
                        </div>
                        <span class="text-[#1e244d] inline text-[11px] leading-4 ">Seçilmişlərə əlavə et</span>
                    </div>
                </div>
                <div class="hidden lg:block mt-8">
                    <p class="text-[#1e244d] text-[13px] leading-5 font-bold flex items-center mb-2">Məhsul haqqında məlumat:</p>
                    <table class="w-full">
                        <tr class="text-[13px] h-6 leading-5">
                            <td class="text-[#9497ad] w-2/5">Brend:</td>
                            <td class="text-brand hover:text-brand-hover font-semibold w-3/5">No Brand</td>
                        </tr>
                        <tr class="text-[13px] h-6 leading-5">
                            <td class="text-[#9497ad] w-2/5">Tip:</td>
                            <td class="text-[#565671] font-semibold w-3/5">${product.category}</td>
                        </tr>
                        <tr class="text-[13px] h-6 leading-5">
                            <td class="text-[#9497ad] align-top w-2/5">Təsvir:</td>
                            <td class="text-[#565671] font-semibold w-3/5">${product.desc}</td>
                        </tr>
                    </table>
                    <p class="cursor-pointer text-brand hover:text-brand-hover text-[13px] mt-4 leading-5">Texniki göstəricilərə və təsvirə baxmaq</p>
                </div>
            </div>
            <div class="lg:pl-4 xl:pl-7 lg:border-l lg:border-l-[#e7e8ed] lg:min-w-80 xl:min-w-91">
                <div>
                    <div class="leading-5 md:leading-6 flex items-end">
                        <span>
                            <span class="text-brand text-[32px] leading-12 mr-1 md:mr-2 font-bold">${product.price?.toFixed(2)} ₼</span>
                            <span class="${product.discount ? '' : 'hidden!'} inline-flex gap-2 leading-6 items-center">
                                <span class="text-[16px] text-[#9497AD] font-bold text-nowrap line-through">${product.oldPrice?.toFixed(2)} ₼</span>
                                <span class="text-white table font-semibold text-[11px] leading-4.5 px-1 h-4 bg-brand-hover rounded-xs">-${product.discount}%</span>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="mt-2">
                    <span class="${product.installment ? '' : 'hidden'} text-[#1e244d] text-[12px] md:text-[16px] px-1 md:py-1 leading-6 font-semibold bg-[#ffd740]
                    rounded-xs">${product.installment?.monthly} ₼ x ${product.installment?.months} ay</span>
                </div>
                <div class="${product.installment ? '' : 'hidden'} -mx-4 border-t-8 border-[#e7e8ed] md:border md:rounded-xs md:mt-4 md:mx-0">
                    <div class="flex flex-col p-4">
                        <div class="flex items-center">
                            <img src="../img/kb-credit.svg" alt="kredit" class="size-6" />
                            <span class="text-[#1e244d] text-[16px] lg:text-[13px] xl:text-[16px] font-bold ml-2">Kredit kalkulyatoru</span>
                        </div>
                        <div class="flex gap-1 xl:gap-2 mt-4">
                            <div class="relative grow max-w-[25%] h-10 cursor-pointer">
                                <input type="radio" name="kredit" id="ay6" class="invisible absolute peer" />
                                <label for="ay6" class="peer-checked:bg-[#ffd447] peer-checked:border-transparent flex max-xl:flex-col items-center justify-center h-full rounded-sm border
                                border-[#e7e8ed] text-[#1e244d] peer-checked:font-medium transition duration-75">
                                    <span class="text-[14px] leading-4 xl:pr-1">6</span>
                                    <span class="text-[14px] leading-4">ay</span>
                                </label>
                            </div>
                            <div class="relative grow max-w-[25%] h-10 cursor-pointer">
                                <input type="radio" name="kredit" id="ay12" class="invisible absolute peer" />
                                <label for="ay12" class="peer-checked:bg-[#ffd447] peer-checked:border-transparent flex max-xl:flex-col items-center justify-center h-full rounded-sm border
                                border-[#e7e8ed] text-[#1e244d] peer-checked:font-medium transition duration-75">
                                    <span class="text-[14px] leading-4 xl:pr-1">12</span>
                                    <span class="text-[14px] leading-4">ay</span>
                                </label>
                            </div>
                            <div class="relative grow max-w-[25%] h-10 cursor-pointer">
                                <input type="radio" name="kredit" id="ay18" class="invisible absolute peer" />
                                <label for="ay18" class="peer-checked:bg-[#ffd447] peer-checked:border-transparent flex max-xl:flex-col items-center justify-center h-full rounded-sm border
                                border-[#e7e8ed] text-[#1e244d] peer-checked:font-medium transition duration-75">
                                    <span class="text-[14px] leading-4 xl:pr-1">18</span>
                                    <span class="text-[14px] leading-4">ay</span>
                                </label>
                            </div>
                            <div class="relative grow max-w-[25%] h-10 cursor-pointer">
                                <input type="radio" checked name="kredit" id="ay24" class="invisible absolute peer" />
                                <label for="ay24" class="peer-checked:bg-[#ffd447] peer-checked:border-transparent flex max-xl:flex-col items-center justify-center h-full rounded-sm border
                                border-[#e7e8ed] text-[#1e244d] peer-checked:font-medium transition duration-75">
                                    <span class="text-[14px] leading-4 xl:pr-1">24</span>
                                    <span class="text-[14px] leading-4">ay</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-7">
                    <button onclick="addCart('${paramType}', ${product.id}, 'detailCart')" class="w-full bg-brand hover:bg-brand-hover text-white leading-5 font-bold text-[13px]
                    py-3 rounded-xs cursor-pointer transition duration-200">Səbətə əlavə etmək</button>
                </div>
            </div>
        </div>
    </div>

`
