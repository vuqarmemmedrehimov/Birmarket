const discountedProducts = [
  {
    id: 1,
    title: "Vakuum qablaşdırıcı Kumtel VP053-HVSE-01 125 W qara",
    desc: "Qida məhsullarını vakuumla qablaşdıraraq daha uzun müddət təzə saxlayır. Ət, tərəvəz və quru məhsullar üçün uyğundur, 125 W gücə malikdir.",
    image: "https://images.unsplash.com/photo-1617664759233-484e38145c07?w=500&q=80",
    category: "Mətbəx texnikası",
    price: 54.99,
    oldPrice: 100.0,
    discount: 45,
    isNew: false,
    installment: { monthly: 2.82, months: 24 },
    rating: 5,
    reviewCount: 1,
    timer: "12:02:55",
    delivery: "14 oktyabr",
  },
  {
    id: 2,
    title: "Masaüstü oyun 4-ü 1-də (futbol + bilyard + xokey + tennis)",
    desc: "Bir masada dörd oyun: stolüstü futbol, bilyard, hava xokeyi və stolüstü tennis. Ailəvi əyləncə üçün idealdır, 3 yaşdan yuxarı uşaqlar üçün tövsiyə olunur.",
    image: "https://images.unsplash.com/photo-1690073939470-bc10bde2e8f5?w=500&q=80",
    category: "Oyuncaqlar",
    price: 149.89,
    oldPrice: 200.0,
    discount: 25,
    isNew: true,
    installment: { monthly: 7.68, months: 24 },
    rating: 5,
    reviewCount: 1,
    timer: "12:02:55",
    delivery: "14 oktyabr",
  },
  {
    id: 3,
    title: "Səyahət və ev üçün şişmə döşək BM-10202, 199x156x22 sm",
    desc: "İki nəfərlik məxmər örtüklü şişmə döşək. Kampinq, səyahət və qonaqlar üçün əlavə yataq kimi istifadə etmək olar, yığılanda az yer tutur.",
    image: "https://images.unsplash.com/photo-1722356541555-eeabc38f80a8?w=500&q=80",
    category: "Səyahət və istirahət",
    price: 99.77,
    oldPrice: 200.0,
    discount: 50,
    isNew: false,
    installment: { monthly: 5.11, months: 24 },
    rating: 5,
    reviewCount: 1,
    timer: "12:02:55",
    delivery: "14 oktyabr",
  },
  {
    id: 4,
    title: "Qadınlar üçün əlcək snh004, tül, qara, ölçü One size",
    desc: "Tül və krujevadan hazırlanmış zərif qara əlcək, bilək hissəsində bant bəzəyi var. Toy, gecə tədbirləri və fotosessiyalar üçün uyğundur.",
    image: "https://images.unsplash.com/photo-1772355325489-442a672e432c?w=500&q=80",
    category: "Aksesuarlar",
    price: 13.2,
    oldPrice: 32.88,
    discount: 60,
    isNew: false,
    installment: { monthly: 0.68, months: 24 },
    rating: 0,
    reviewCount: 0,
    timer: "12:02:55",
    delivery: "14 oktyabr",
  },
  {
    id: 5,
    title: "Mayka qızlar üçün SHN003-0801, pambıq, ağ, 5-6 yaş",
    desc: "100% pambıqdan hazırlanmış yumşaq alt mayka. Dərini qıcıqlandırmır, gündəlik geyim üçün rahatdır.",
    image: "https://images.unsplash.com/photo-1788228934349-3164c5465eee?w=500&q=80",
    category: "Uşaq geyimi",
    price: 12.54,
    oldPrice: 31.23,
    discount: 60,
    isNew: false,
    installment: { monthly: 0.64, months: 24 },
    rating: 0,
    reviewCount: 0,
    timer: "12:02:55",
    delivery: "14 oktyabr",
  },
  {
    id: 6,
    title: "Elektrik çaydan 1.7 L, 2200 W, ağ",
    desc: "Sürətli qızdırma funksiyalı elektrik çaydan. Su bitdikdə avtomatik sönür, gizli qızdırıcı elementi təmizlənməni asanlaşdırır.",
    image: "https://images.unsplash.com/photo-1685514128186-c5d8d7e90e1a?w=500&q=80",
    category: "Mətbəx texnikası",
    price: 39.9,
    oldPrice: 66.5,
    discount: 40,
    isNew: false,
    installment: { monthly: 2.04, months: 24 },
    rating: 4,
    reviewCount: 12,
    timer: "12:02:55",
    delivery: "14 oktyabr",
  },
  {
    id: 7,
    title: "Uşaq konstruktoru 500 hissə, rəngli",
    desc: "Təxəyyülü və motor bacarıqlarını inkişaf etdirən 500 hissəli konstruktor dəsti. Saxlama qutusu ilə birlikdə gəlir, 6 yaşdan yuxarı uşaqlar üçün.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&q=80",
    category: "Oyuncaqlar",
    price: 29.99,
    oldPrice: 49.99,
    discount: 40,
    isNew: true,
    installment: { monthly: 1.54, months: 24 },
    rating: 5,
    reviewCount: 8,
    timer: "12:02:55",
    delivery: "15 oktyabr",
  },
  {
    id: 8,
    title: "Simsiz Bluetooth qulaqlıq TWS, qara",
    desc: "Bluetooth 5.3 dəstəkli simsiz qulaqlıq. Doldurma qutusu ilə birlikdə 24 saata qədər işləyir, toxunma ilə idarə olunur.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    category: "Elektronika",
    price: 24.5,
    oldPrice: 49.0,
    discount: 50,
    isNew: false,
    installment: { monthly: 1.26, months: 24 },
    rating: 4,
    reviewCount: 27,
    timer: "12:02:55",
    delivery: "14 oktyabr",
  },
  {
    id: 9,
    title: "Saç qurudan fen 1600 W, 3 temperatur rejimi",
    desc: "Kompakt və yüngül fen, 3 temperatur və 2 sürət rejimi var. Soyuq hava düyməsi saç düzümünü sabitləşdirməyə kömək edir.",
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500&q=80",
    category: "Gözəllik və sağlamlıq",
    price: 45.6,
    oldPrice: 76.0,
    discount: 40,
    isNew: false,
    installment: { monthly: 2.34, months: 24 },
    rating: 5,
    reviewCount: 4,
    timer: "12:02:55",
    delivery: "15 oktyabr",
  },
  {
    id: 10,
    title: "Termos paslanmayan polad 1 L, gümüşü",
    desc: "İki qatlı vakuum izolyasiyası içkini 12 saat isti, 24 saat soyuq saxlayır. Qapağı stəkan kimi istifadə etmək olar.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
    category: "Səyahət və istirahət",
    price: 18.75,
    oldPrice: 25.0,
    discount: 25,
    isNew: false,
    installment: { monthly: 0.96, months: 24 },
    rating: 4,
    reviewCount: 6,
    timer: "12:02:55",
    delivery: "14 oktyabr",
  },
  {
    id: 11,
    title: "Kişi idman ayaqqabısı, toxuma, boz, ölçü 42",
    desc: "Nəfəs alan toxuma üzlüyü və yumşaq altlığı olan yüngül idman ayaqqabısı. Qaçış, gəzinti və gündəlik istifadə üçün uyğundur.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    category: "Ayaqqabı",
    price: 59.0,
    oldPrice: 118.0,
    discount: 50,
    isNew: true,
    installment: { monthly: 3.02, months: 24 },
    rating: 5,
    reviewCount: 3,
    timer: "12:02:55",
    delivery: "16 oktyabr",
  },
  {
    id: 12,
    title: "Uşaq velosipedi 16\", əlavə təkərli, qırmızı",
    desc: "4-7 yaşlı uşaqlar üçün möhkəm metal çərçivəli velosiped. Çıxarıla bilən köməkçi təkərlər, zəng və ön səbət ilə gəlir.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&q=80",
    category: "İdman və hobbi",
    price: 189.0,
    oldPrice: 270.0,
    discount: 30,
    isNew: false,
    installment: { monthly: 9.69, months: 24 },
    rating: 5,
    reviewCount: 9,
    timer: "12:02:55",
    delivery: "16 oktyabr",
  },
  {
    id: 13,
    title: "Mətbəx bıçaq dəsti 6 əşya, altlıqla",
    desc: "Paslanmayan poladdan hazırlanmış 5 bıçaq və altlıqdan ibarət dəst. Ergonomik dəstəklər kəsim zamanı rahatlıq təmin edir.",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500&q=80",
    category: "Mətbəx ləvazimatı",
    price: 34.8,
    oldPrice: 58.0,
    discount: 40,
    isNew: false,
    installment: { monthly: 1.78, months: 24 },
    rating: 4,
    reviewCount: 15,
    timer: "12:02:55",
    delivery: "14 oktyabr",
  },
  {
    id: 14,
    title: "Yataq dəsti iki nəfərlik, ranforce pambıq, bej",
    desc: "Yorğanüzü, döşəkağı və 2 yastıqüzündən ibarət dəst. Yüksək keyfiyyətli pambıq parça yuyulduqdan sonra rəngini itirmir.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80",
    category: "Ev tekstili",
    price: 64.35,
    oldPrice: 99.0,
    discount: 35,
    isNew: false,
    installment: { monthly: 3.3, months: 24 },
    rating: 5,
    reviewCount: 21,
    timer: "12:02:55",
    delivery: "15 oktyabr",
  },
  {
    id: 15,
    title: "Ağıllı saat, 1.8\" ekran, nəbz ölçən, qara",
    desc: "Nəbz, addım sayğacı və yuxu izləmə funksiyaları olan ağıllı saat. Telefon bildirişlərini göstərir, suya davamlıdır.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    category: "Elektronika",
    price: 79.99,
    oldPrice: 159.98,
    discount: 50,
    isNew: true,
    installment: { monthly: 4.1, months: 24 },
    rating: 4,
    reviewCount: 18,
    timer: "12:02:55",
    delivery: "14 oktyabr",
  },
  {
    id: 16,
    title: "Rəngli karandaş dəsti 24 rəng",
    desc: "Parlaq və canlı rəngli karandaşlar, qırılmağa davamlı içlik. Məktəb və rəsm dərsləri üçün ideal seçimdir.",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&q=80",
    category: "Dəftərxana",
    price: 6.3,
    oldPrice: 9.0,
    discount: 30,
    isNew: false,
    installment: { monthly: 0.32, months: 24 },
    rating: 5,
    reviewCount: 34,
    timer: "12:02:55",
    delivery: "14 oktyabr",
  },
  {
    id: 17,
    title: "Simsiz şaquli tozsoran 150 W, göy",
    desc: "Yüngül şaquli tozsoran, bir doldurma ilə 40 dəqiqəyə qədər işləyir. Əl tozsoranına çevrilir, mebel və maşın üçün uyğundur.",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&q=80",
    category: "Ev texnikası",
    price: 129.0,
    oldPrice: 215.0,
    discount: 40,
    isNew: true,
    installment: { monthly: 6.61, months: 24 },
    rating: 4,
    reviewCount: 7,
    timer: "12:02:55",
    delivery: "16 oktyabr",
  },
  {
    id: 18,
    title: "Qadın çantası eko-dəri, bej",
    desc: "Geniş daxili bölməsi və tənzimlənən çiyin qayışı olan gündəlik çanta. Fermuarlı cib əşyaları təhlükəsiz saxlayır.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
    category: "Aksesuarlar",
    price: 42.0,
    oldPrice: 70.0,
    discount: 40,
    isNew: false,
    installment: { monthly: 2.15, months: 24 },
    rating: 5,
    reviewCount: 5,
    timer: "12:02:55",
    delivery: "15 oktyabr",
  },
  {
    id: 19,
    title: "Ortopedik məktəb çantası, göy",
    desc: "Ortopedik arxa hissəsi kürəyə düşən yükü bərabər paylayır. İşıq əks etdirən zolaqlar və çoxlu bölmələr var.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    category: "Dəftərxana",
    price: 38.4,
    oldPrice: 64.0,
    discount: 40,
    isNew: false,
    installment: { monthly: 1.97, months: 24 },
    rating: 5,
    reviewCount: 11,
    timer: "12:02:55",
    delivery: "14 oktyabr",
  },
  {
    id: 20,
    title: "Stolüstü blender 600 W, 1.5 L",
    desc: "Smuzi, kokteyl və souslar üçün güclü blender. Paslanmayan polad bıçaqlar və buz doğrama rejimi var.",
    image: "https://images.unsplash.com/photo-1564940735784-b15466e8dc09?w=500&q=80",
    category: "Mətbəx texnikası",
    price: 49.5,
    oldPrice: 90.0,
    discount: 45,
    isNew: false,
    installment: { monthly: 2.54, months: 24 },
    rating: 4,
    reviewCount: 10,
    timer: "12:02:55",
    delivery: "15 oktyabr",
  },
]

const bestSellerProducts = [
  {
    id: 1,
    title: "Smartfon Xiaomi Redmi Note 15 8GB/256GB Black",
    desc: "6.67\" AMOLED ekran, 108 MP kamera və 5500 mAh batareya. Gündəlik istifadə üçün güclü və sürətli smartfon.",
    image: "https://picsum.photos/seed/best1/500/500",
    category: "Smartfonlar",
    price: 539.0,
    oldPrice: 799.0,
    discount: 33,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 27.63, months: 24 },
    rating: 4.5,
    reviewCount: 294,
    delivery: "14 oktyabr",
  },
  {
    id: 2,
    title: "Avtomobil üçün ön şüşə siləcəyi Opel Vectra B 1995-2002",
    desc: "19\" ölçülü siləcək dəsti, şüşəni iz qoymadan təmizləyir. Asan quraşdırılır.",
    image: "https://picsum.photos/seed/best2/500/500",
    category: "Avto məhsullar",
    price: 15.0,
    oldPrice: 20.0,
    discount: 25,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 0.77, months: 24 },
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr",
  },
  {
    id: 3,
    title: "Duş geli Bioderma Atoderm, nəmləndirici, quru və həssas dəri üçün, 1 L",
    desc: "Quru və həssas dəri üçün yumşaq təmizləyici gel. Dərini qurutmadan nəmləndirir.",
    image: "https://picsum.photos/seed/best3/500/500",
    category: "Gözəllik və baxım",
    price: 27.0,
    oldPrice: 54.0,
    discount: 50,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 1.38, months: 24 },
    rating: 5,
    reviewCount: 65,
    delivery: "14 oktyabr",
  },
  {
    id: 4,
    title: "Energetik içki Bizon mavi, 450 ml By Birmarket",
    desc: "Enerji verən qazlı içki. Soyuq halda içilməsi tövsiyə olunur.",
    image: "https://picsum.photos/seed/best4/500/500",
    category: "İçkilər",
    price: 0.86,
    oldPrice: 1.49,
    discount: 42,
    isNew: false,
    isPartnerPremium: true,
    isBestSeller: false,
    installment: null,
    rating: 5,
    reviewCount: 1,
    delivery: "Sabah",
  },
  {
    id: 5,
    title: "Qol saatı Longines L33704966 Silver/Blue",
    desc: "Paslanmayan polad korpus və qolbaq, göy siferblat. Suya davamlı klassik kişi saatı.",
    image: "https://picsum.photos/seed/best5/500/500",
    category: "Saatlar",
    price: 3207.0,
    oldPrice: null,
    discount: 0,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 164.41, months: 24 },
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr",
  },
  {
    id: 6,
    title: "Qabyuyan maşın üçün tabletlər Finish Quantum, 60 ədəd",
    desc: "Yağ və ləkələri ilk yuyuşda təmizləyir, qablara parlaqlıq verir.",
    image: "https://picsum.photos/seed/best6/500/500",
    category: "Məişət kimyası",
    price: 24.9,
    oldPrice: 35.9,
    discount: 31,
    isNew: true,
    isPartnerPremium: true,
    isBestSeller: false,
    installment: { monthly: 1.28, months: 24 },
    rating: 5,
    reviewCount: 42,
    delivery: "14 oktyabr",
  },
  {
    id: 7,
    title: "Universal təmizləyici sprey, 500 ml",
    desc: "Mətbəx və vanna otağı səthləri üçün. Yağ və əhəng qalıqlarını asanlıqla təmizləyir.",
    image: "https://picsum.photos/seed/best7/500/500",
    category: "Məişət kimyası",
    price: 3.2,
    oldPrice: 4.5,
    discount: 29,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 0.16, months: 24 },
    rating: 4,
    reviewCount: 18,
    delivery: "Sabah",
  },
  {
    id: 8,
    title: "Paltaryuyan toz Persil Color, 6 kq",
    desc: "Rəngli paltarlar üçün yuyucu toz. Rəngləri qoruyur və ləkələri aşağı temperaturda belə çıxarır.",
    image: "https://picsum.photos/seed/best8/500/500",
    category: "Məişət kimyası",
    price: 18.9,
    oldPrice: 29.9,
    discount: 37,
    isNew: false,
    isPartnerPremium: true,
    isBestSeller: false,
    installment: { monthly: 0.97, months: 24 },
    rating: 5,
    reviewCount: 120,
    delivery: "14 oktyabr",
  },
  {
    id: 9,
    title: "Portativ Bluetooth dinamik JBL Go 3, qara",
    desc: "Kompakt və suya davamlı dinamik, 5 saata qədər fasiləsiz işləyir.",
    image: "https://picsum.photos/seed/best9/500/500",
    category: "Elektronika",
    price: 69.0,
    oldPrice: 89.0,
    discount: 22,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 3.54, months: 24 },
    rating: 4.5,
    reviewCount: 57,
    delivery: "14 oktyabr",
  },
  {
    id: 10,
    title: "Protein tozu Gold Standard Whey, şokolad, 2.27 kq",
    desc: "Bir porsiyada 24 q protein. Məşqdən sonra əzələlərin bərpası üçün.",
    image: "https://picsum.photos/seed/best10/500/500",
    category: "İdman qidası",
    price: 139.0,
    oldPrice: 179.0,
    discount: 22,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: true,
    installment: { monthly: 7.12, months: 24 },
    rating: 5,
    reviewCount: 88,
    delivery: "14 oktyabr",
  },
  {
    id: 11,
    title: "Smartfon Samsung Galaxy A56 8GB/256GB Graphite",
    desc: "6.7\" Super AMOLED ekran, 50 MP kamera, 5000 mAh batareya və sürətli doldurma.",
    image: "https://picsum.photos/seed/best11/500/500",
    category: "Smartfonlar",
    price: 649.0,
    oldPrice: 829.0,
    discount: 22,
    isNew: true,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 33.26, months: 24 },
    rating: 4.5,
    reviewCount: 76,
    delivery: "14 oktyabr",
  },
  {
    id: 12,
    title: "Aerogril (air fryer) 4.2 L, 1500 W, qara",
    desc: "Yağsız qızartma, bişirmə və isitmə funksiyaları. 8 hazır proqramı var.",
    image: "https://picsum.photos/seed/best12/500/500",
    category: "Mətbəx texnikası",
    price: 129.0,
    oldPrice: 189.0,
    discount: 32,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: true,
    installment: { monthly: 6.61, months: 24 },
    rating: 4.5,
    reviewCount: 143,
    delivery: "15 oktyabr",
  },
  {
    id: 13,
    title: "Paltaryuyan kapsullar Ariel All in 1, 40 ədəd",
    desc: "Yuyucu, ləkə təmizləyici və parlaqlıq verən vasitə bir kapsulda.",
    image: "https://picsum.photos/seed/best13/500/500",
    category: "Məişət kimyası",
    price: 15.4,
    oldPrice: 22.0,
    discount: 30,
    isNew: false,
    isPartnerPremium: true,
    isBestSeller: false,
    installment: { monthly: 0.79, months: 24 },
    rating: 5,
    reviewCount: 39,
    delivery: "Sabah",
  },
  {
    id: 14,
    title: "Nəmləndirici krem Nivea Soft, 200 ml",
    desc: "Üz, bədən və əllər üçün yüngül krem. Tez hopur və dərini yumşaldır.",
    image: "https://picsum.photos/seed/best14/500/500",
    category: "Gözəllik və baxım",
    price: 6.5,
    oldPrice: 8.9,
    discount: 27,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 0.33, months: 24 },
    rating: 5,
    reviewCount: 211,
    delivery: "14 oktyabr",
  },
  {
    id: 15,
    title: "Simsiz qulaqlıq Apple AirPods 4, ağ",
    desc: "Yenilənmiş dizayn, uzun batareya ömrü və USB-C doldurma qutusu.",
    image: "https://picsum.photos/seed/best15/500/500",
    category: "Elektronika",
    price: 299.0,
    oldPrice: 349.0,
    discount: 14,
    isNew: true,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 15.32, months: 24 },
    rating: 5,
    reviewCount: 64,
    delivery: "14 oktyabr",
  },
  {
    id: 16,
    title: "Uşaq bezi Pampers Active Baby, 4 ölçü, 52 ədəd",
    desc: "12 saata qədər quruluq təmin edir, yumşaq və elastik kənarları var.",
    image: "https://picsum.photos/seed/best16/500/500",
    category: "Uşaq məhsulları",
    price: 32.9,
    oldPrice: 45.9,
    discount: 28,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: true,
    installment: { monthly: 1.69, months: 24 },
    rating: 5,
    reviewCount: 175,
    delivery: "Sabah",
  },
  {
    id: 17,
    title: "Həll olunan qəhvə Jacobs Monarch, 190 q",
    desc: "Zəngin ətirli və tündlüyü orta olan həll olunan qəhvə.",
    image: "https://picsum.photos/seed/best17/500/500",
    category: "Qida",
    price: 11.8,
    oldPrice: 15.9,
    discount: 26,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 0.6, months: 24 },
    rating: 4.5,
    reviewCount: 93,
    delivery: "Sabah",
  },
  {
    id: 18,
    title: "Buxarlı ütü Philips 2400 W, göy",
    desc: "Keramik altlıq, güclü buxar zərbəsi və avtomatik təmizlənmə funksiyası.",
    image: "https://picsum.photos/seed/best18/500/500",
    category: "Ev texnikası",
    price: 89.0,
    oldPrice: 129.0,
    discount: 31,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 4.56, months: 24 },
    rating: 4.5,
    reviewCount: 31,
    delivery: "15 oktyabr",
  },
  {
    id: 19,
    title: "Fitnes qolbağı Xiaomi Smart Band 9, qara",
    desc: "AMOLED ekran, nəbz və yuxu izləmə, 21 günə qədər batareya ömrü.",
    image: "https://picsum.photos/seed/best19/500/500",
    category: "Elektronika",
    price: 79.0,
    oldPrice: 99.0,
    discount: 20,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 4.05, months: 24 },
    rating: 4.5,
    reviewCount: 102,
    delivery: "14 oktyabr",
  },
  {
    id: 20,
    title: "Şampun Head & Shoulders, kəpəyə qarşı, 400 ml",
    desc: "Kəpəyə qarşı təsirli şampun, saçı təravətli və təmiz saxlayır.",
    image: "https://picsum.photos/seed/best20/500/500",
    category: "Gözəllik və baxım",
    price: 8.4,
    oldPrice: 12.0,
    discount: 30,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 0.43, months: 24 },
    rating: 4,
    reviewCount: 48,
    delivery: "Sabah",
  },
]

const newProducts = [
  {
    id: 1,
    title: "Ağ küncüt İlğım, Universal, 30 q",
    desc: "Təbii ağ küncüt. Çörək, salat və şirniyyatlara əlavə etmək üçün uyğundur.",
    image: "https://picsum.photos/seed/new1/500/500",
    category: "Ədviyyatlar",
    price: 2.0,
    oldPrice: null,
    discount: 0,
    isNew: true,
    installment: null,
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr",
  },
  {
    id: 2,
    title: "Küncüt İlğım, Universal, 15 q",
    desc: "Qovrulmamış təbii küncüt, kiçik qablaşdırmada. Gündəlik istifadə üçün rahatdır.",
    image: "https://picsum.photos/seed/new2/500/500",
    category: "Ədviyyatlar",
    price: 1.79,
    oldPrice: null,
    discount: 0,
    isNew: true,
    installment: null,
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr",
  },
  {
    id: 3,
    title: "Qara küncüt İlğım, Universal, 15 q",
    desc: "Zəngin dadlı qara küncüt. Suşi, çörək və salatlar üçün ideal seçimdir.",
    image: "https://picsum.photos/seed/new3/500/500",
    category: "Ədviyyatlar",
    price: 3.0,
    oldPrice: null,
    discount: 0,
    isNew: true,
    installment: null,
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr",
  },
  {
    id: 4,
    title: "Videoqeydiyyatçı 1080p FHD 170°",
    desc: "3 kanallı videoqeydiyyatçı: ön, salon və arxa kamera. 170° geniş bucaq, gecə çəkilişi və parkinq rejimi var.",
    image: "https://picsum.photos/seed/new4/500/500",
    category: "Avto məhsullar",
    price: 68.0,
    oldPrice: 100.0,
    discount: 32,
    isNew: true,
    installment: { monthly: 3.49, months: 24 },
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr",
  },
  {
    id: 5,
    title: "Masaüstü dayaq No brand, Qırmızı, Plastik",
    desc: "Telefon və planşet üçün yığcam masaüstü dayaq. Video izləmək və zəng üçün rahatdır.",
    image: "https://picsum.photos/seed/new5/500/500",
    category: "Aksesuarlar",
    price: 1.0,
    oldPrice: null,
    discount: 0,
    isNew: true,
    installment: null,
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr",
  },
  {
    id: 6,
    title: "Üyüdülmüş darçın İlğım, 50 q",
    desc: "Ətirli üyüdülmüş darçın. Şirniyyat, çay və qəhvəyə əlavə etmək üçün.",
    image: "https://picsum.photos/seed/new6/500/500",
    category: "Ədviyyatlar",
    price: 2.4,
    oldPrice: null,
    discount: 0,
    isNew: true,
    installment: null,
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr",
  },
  {
    id: 7,
    title: "Avtomobil üçün maqnitli telefon tutacağı, qara",
    desc: "Güclü maqnitli tutacaq, ventilyasiya barmaqlığına bərkidilir və 360° fırlanır.",
    image: "https://picsum.photos/seed/new7/500/500",
    category: "Avto məhsullar",
    price: 12.9,
    oldPrice: 18.9,
    discount: 32,
    isNew: true,
    installment: { monthly: 0.66, months: 24 },
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr",
  },
  {
    id: 8,
    title: "USB-C kabel 1 m, ağ",
    desc: "Sürətli doldurma və məlumat ötürmə dəstəkli davamlı kabel.",
    image: "https://picsum.photos/seed/new8/500/500",
    category: "Aksesuarlar",
    price: 4.5,
    oldPrice: null,
    discount: 0,
    isNew: true,
    installment: null,
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr",
  },
  {
    id: 9,
    title: "Kətan toxumu İlğım, 100 q",
    desc: "Liflə zəngin təbii kətan toxumu. Səhər yeməyi və salatlara əlavə etmək üçün.",
    image: "https://picsum.photos/seed/new9/500/500",
    category: "Ədviyyatlar",
    price: 1.6,
    oldPrice: null,
    discount: 0,
    isNew: true,
    installment: null,
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr",
  },
  {
    id: 10,
    title: "Simsiz siçan, 2.4 GHz, qara",
    desc: "Səssiz düymələri olan ergonomik simsiz siçan. Bir batareya ilə aylarla işləyir.",
    image: "https://picsum.photos/seed/new10/500/500",
    category: "Kompüter aksesuarları",
    price: 15.9,
    oldPrice: 21.9,
    discount: 27,
    isNew: true,
    installment: { monthly: 0.81, months: 24 },
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr",
  },
]

const allData = {
    discounted: discountedProducts,
    bestSell: bestSellerProducts,
    news: newProducts,
}

const menuItemData = [
    {
      bg: 'webpyz_67991.png',
      title: '60%-dək payız endirimləri',
      dropdown: false,
      pad7px: false,
    },
    {
      bg: 'Icon-1_67568.png',
      title: 'iPhone 18 artıq satışdadır! ',
      dropdown: false,
      pad7px: false,
    },
    {
      bg: 'icon_mega_discounts.webp',
      title: 'Mega endirimlər',
      dropdown: false,
      pad7px: false,
    },
    {
      bg: 'c5ebd954-c11b-4292-8774-8d2429a058b5.svg',
      title: 'Telefonlar, Smart cihazlar və telefon aksessuarları',
      dropdown: true,
      pad7px: true,
    },
    {
      bg: 'a578e619-a66c-4aee-9882-2fa6234bec17.svg',
      title: 'Məişət texnikası',
      dropdown: true,
      pad7px: false,
    },
    {
      bg: 'e7757c43-b757-45b2-96bb-8aa9750b0854.svg',
      title: 'Notbuk və kompüterlər',
      dropdown: true,
      pad7px: false,
    },
    {
      bg: '9b4619b4-6edb-4fe6-8214-c2c5994e8292.svg',
      title: 'TV, audio və video',
      dropdown: true,
      pad7px: false,
    },
    {
      bg: '23f03088-8850-4284-94ef-2c5c89481ca3.svg',
      title: 'Ev əşyaları',
      dropdown: true,
      pad7px: false,
    },
    {
      bg: '358e84ed-f0c5-47fc-ac98-0b02634eecae.svg',
      title: 'Avtomobil məhsulları',
      dropdown: true,
      pad7px: false,
    },
    {
      bg: '08f3017e-4663-489c-89b2-83af22a8f342.svg',
      title: 'Gözəllik',
      dropdown: true,
      pad7px: false,
    },
    {
      bg: '1ef6a3fc-c73b-40f0-818d-e7ed3f27c62d.png',
      title: 'Sağlamlıq',
      dropdown: true,
      pad7px: false,
    },
    {
      bg: '93bd3d4a-37a4-4d5f-b72b-fb2a9946317b.svg',
      title: 'Uşaqlar üçün',
      dropdown: true,
      pad7px: false,
    },
    {
      bg: '7cfaef25-1e90-4277-a02f-2cec08cc2a80.svg',
      title: 'Qida məhsulları və içkilər',
      dropdown: true,
      pad7px: true,
    },
    {
      bg: '53fd557b-44fa-4153-80a7-7574bb873432.svg',
      title: 'Məişət kimyası',
      dropdown: true,
      pad7px: false,
    },
    {
      bg: 'c9ba4168-dd25-4619-85dc-dd3d15889e38.svg',
      title: 'Idman və Əyləncə',
      dropdown: true,
      pad7px: false,
    },
    {
      bg: 'b53a94ed-3f34-4b4e-8f58-4f8ada040b00.svg',
      title: 'Bağ üçün məhsullar',
      dropdown: true,
      pad7px: false,
    },
    {
      bg: '55adaf55-282a-4be8-8df3-fb3d1964004d.svg',
      title: 'Bir Gaming',
      dropdown: true,
      pad7px: false,
    },
    {
      bg: '7a1ae86a-162a-4961-9c74-0b122d57d39f.svg',
      title: 'Saat, zinət və bəzək əşyaları',
      dropdown: true,
      pad7px: false,
    },
]

const popBrandData = [
    'apple_37776.webp',
    'xiaomi_37780.webp',
    'samsung_37784.webp',
    'honor_37788.webp',
    'lg_37792.webp',
    'Anker_68087.webp',
    'bosch_37796.webp',
    'asus_37800.webp',
    'lenovo_37804.webp',
    'hp_37808.webp',
    'roborock_37812.webp',
    'dyson_37824.webp',
    'philips_37820.webp',
    'delonghi_37828.webp',
    'tefal_37832.webp',
    'karcher_37836.webp',
    'panasonic_37840.webp',
    'beko_37844.webp',
    'braun_37848.webp',
    'playstation_37852.webp',
    'jysk_37816.webp',
    'casio_37856.webp',
    'motorola_37868.webp',
    'infinix_37872.webp',
    'lorealparis_37963.webp',
    'moroccanoil_37880.webp',
    'kerastase_37884.webp',
    'sinoz_37888.webp',
    'bioderma_37892.webp',
    'larocheposay_37896.webp',
    'victoriasecret_37900.webp',
    'medipeel_37904.webp',
    'rhode_37908.webp',
    'farmstay_37912.webp',
]

const popSellerData = [
    'rossmann2_36403.webp',
    'myshops_37913.webp',
    'f_66794.webp',
    'ispace_37944.webp',
    'adore_40962.webp',
    'fil-electronics_37941.webp',
    'jysk_37922.webp',
    'bahar-store_37938.webp',
    'korendy_37937.webp',
    'lamour_37936.webp',
    'birtelecom_37932.webp',
    'noutbuklaraz_37926.webp',
    'nano_37927.webp',
    'theentertainer_37925.webp',
    'chicco_37923.webp',
]

const actualCategoryData = [
    {
        bg: '764e0397-6321-4008-b274-95f12fba59c4.jpeg',
        title: 'Telefonlar, Smart cihazlar və telefon aksessuarları',
    },
    {
        bg: '194a575e-619b-46c2-b080-6f718998ddca.jpeg',
        title: 'Notbuk və kompüterlər',
    },
    {
        bg: '944e559f-819f-4e8f-a09c-a3fceae9e641.jpeg',
        title: 'Məişət texnikası',
    },
    {
        bg: '26f24528-c5cc-4847-b209-6a4a72923411.jpeg',
        title: 'TV, audio və video',
    },
    {
        bg: '9400a216-bfca-4434-aac2-ac64752baa6d.jpeg',
        title: 'Gözəllik',
    },
    {
        bg: '7d53cf6b-98c7-407e-8b68-411eaec6c2d4.jpeg',
        title: 'Bağ üçün məhsullar',
    },
    {
        bg: '00902c8c-5c83-4cec-8088-91846480c788.jpeg',
        title: 'Saat, zinət və bəzək əşyaları',
    },
    {
        bg: '3d8cf4c5-b955-4fc8-a521-3c841f95247a.jpeg',
        title: 'Idman və Əyləncə',
    },
    {
        bg: 'e3098bf4-66dd-49dd-b980-eda7caf09b56.jpeg',
        title: 'Avtomobil məhsulları',
    },
    {
        bg: 'ecb6761d-0918-445e-8250-806c666aaade.jpeg',
        title: 'Uşaqlar üçün məhsullar',
    },
    {
        bg: 'e6fecd53-b785-48fd-86ff-db975b14e38a.jpeg',
        title: 'Təmir və tikinti',
    },
    {
        bg: '412d7cb9-f1e4-453a-83c2-d4e89aead65d.webp',
        title: 'Bir Gaming',
    },
]

const actualFooterData = [
  "redmi note 17 pro max",
  "iPhone 16 Pro",
  "Xiaomi 18 pro max",
  "Kombi",
  "Iphone 18 pro max",
  "Iphone 18 pro",
  "Xiaomi 17",
  "Kondisionerler",
  "Mega endirimlər",
  "Honor telefonları",
  "Poco X8 Pro",
  "Minoxidil",
  "Honor 600 pro",
  "Notbuklar",
  "Planşetlər",
  "Masaüstü kompüterlər",
  "iPhone 17",
  "Smartfonlar",
]

const stars = [
    `
    <span class="size-3 relative flex items-center mr-px">
        <svg height="13" width="13" viewBox="0 0 1103 1024" step="100" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ff9800" d="M544.288 835.132c4.436-2.68 9.99-2.68 14.425 0l309.52 186.817c10.57 6.382 23.61-3.098 20.812-15.126l-82.144-352.093c-1.173-5.046 0.536-10.328 4.456-13.721l273.482-236.918c9.33-8.085 4.347-23.415-7.956-24.459l-360.101-30.55c-5.159-0.437-9.651-3.695-11.672-8.461l-140.758-332.109c-4.81-11.349-20.894-11.349-25.703 0l-140.758 332.109c-2.021 4.768-6.513 8.024-11.672 8.461l-360.097 30.55c-12.304 1.043-17.293 16.374-7.96 24.459l273.482 236.918c3.916 3.393 5.631 8.675 4.454 13.721l-82.138 352.093c-2.806 12.026 10.235 21.507 20.807 15.126l309.521-186.817z"/>
        </svg>
    </span>
    `,
    `
    <span class="size-3 relative flex items-center mr-px">
        <svg height="13" width="13" viewBox="0 0 1103 1024" step="100" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ff9800" d="M1064.413 379.602c12.288 1.059 17.263 16.365 7.951 24.447l-273.027 236.961c-3.909 3.389-5.617 8.659-4.449 13.695l81.648 352.145c2.786 12.015-10.245 21.473-20.809 15.103l-309.557-186.84c-4.439-2.675-9.991-2.675-14.426 0l-309.505 186.806c-10.571 6.381-23.611-3.098-20.806-15.119l82.135-352.079c1.177-5.047-0.538-10.329-4.453-13.723l-273.468-236.904c-9.333-8.084-4.344-23.413 7.959-24.457l360.077-30.549c5.159-0.438 9.652-3.695 11.672-8.462l140.761-332.114c4.808-11.345 20.888-11.35 25.7-0.007l140.745 331.581c2.021 4.757 6.498 8.009 11.652 8.452l360.202 31.061zM631.15 424.944l-79.319-187.401c-4.428-10.465-18.441-11.284-24.376-2.47-1.040 1.546-1.338 3.444-1.338 5.308v469.674c0 9.078 12.286 15.968 20.053 20.663l174.914 105.783c10.575 6.393 23.628-3.087 20.819-15.119l-46.379-198.492c-1.178-5.042 0.53-10.323 4.444-13.718l154.1-133.676c9.313-8.079 4.344-23.383-7.939-24.449l-203.332-17.641c-5.148-0.446-9.631-3.703-11.646-8.466z"/>
        </svg>
    </span>
    `,
    `
    <span class="size-3 relative flex items-center mr-px">
        <svg height="13" width="13" viewBox="0 0 1103 1024" step="100" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ff9800" d="M1053.865 407.79c8.99-7.802 4.182-22.577-7.675-23.599l-347.713-29.984c-4.969-0.428-9.297-3.567-11.242-8.159l-135.869-320.079c-4.646-10.949-20.165-10.945-24.806 0.007l-135.878 320.594c-1.95 4.601-6.287 7.745-11.266 8.168l-347.588 29.489c-11.876 1.008-16.692 15.805-7.683 23.609l263.982 228.686c3.78 3.277 5.436 8.375 4.299 13.247l-79.285 339.866c-2.708 11.604 9.88 20.755 20.083 14.595l298.769-180.326c4.282-2.582 9.644-2.582 13.924 0l298.819 180.359c10.197 6.149 22.781-2.98 20.092-14.579l-78.821-339.93c-1.126-4.861 0.528-9.949 4.295-13.22l263.561-228.741zM545.923 723.129c-4.285-2.592-9.651-2.592-13.937-0.005l-168.321 101.619c-10.206 6.166-22.796-2.991-20.084-14.6l44.776-191.639c1.137-4.867-0.515-9.965-4.292-13.242l-148.753-129.039c-8.991-7.799-4.193-22.572 7.664-23.601l196.266-17.028c4.978-0.432 9.308-3.583 11.249-8.187l76.071-180.332c4.63-10.975 20.179-10.985 24.825-0.015l76.568 180.9c1.946 4.596 6.268 7.74 11.242 8.172l196.274 17.029c11.857 1.029 16.659 15.802 7.664 23.601l-148.749 129.039c-3.778 3.277-5.433 8.375-4.29 13.242l44.765 191.607c2.716 11.614-9.89 20.766-20.092 14.595l-168.847-102.114z"/>
        </svg>
    </span>
    `,
]

const hearts = [
  `
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="shrink-0 text-brand group-hover:text-brand-hover
    transition duration-200 text-[16px]">
        <path xmlns="http://www.w3.org/2000/svg" d="M735.283 77.295c77.421 0 149.85 28.864 204.301 81.616 54.444 52.751 84.416 122.921 84.416 196.574 0 74.648-29.971 144.817-84.915 197.57l-398.613 382.701c-7.992 7.462-18.482 11.443-28.972 11.443-10.989 0-21.479-3.981-28.972-11.443l-397.611-383.198c-54.946-52.751-84.917-122.921-84.917-197.071s29.971-144.32 84.917-197.072c54.447-52.751 126.877-81.615 203.801-81.615s149.854 28.864 204.3 81.615l19.481 18.413 18.483-17.916c54.447-52.751 126.875-81.616 204.302-81.616z"/>
    </svg>
  `,
  `
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="inline-block transition duration-200 group-hover:text-brand-hover align-middle shrink-0
    text-[#9497ad] text-[16px]">
        <path xmlns="http://www.w3.org/2000/svg" d="M939.584 158.912c-54.451-52.751-126.88-81.616-204.301-81.616-77.427 0-149.855 28.865-204.301 81.616l-18.483 17.917-19.481-18.414c-54.447-52.752-127.376-81.616-204.3-81.616s-149.355 28.865-203.801 81.616c-54.947 52.751-84.917 122.921-84.917 197.071s29.971 144.321 84.917 197.072l397.612 383.199c7.493 7.462 17.983 11.443 28.971 11.443 10.49 0 20.98-3.98 28.972-11.443l398.613-382.701c54.944-52.752 84.915-122.922 84.915-197.57 0-73.653-29.971-143.822-84.416-196.574zM735.283 157.42c54.944 0 106.893 20.901 146.355 58.225 38.963 37.324 60.442 87.588 60.442 140.837 0 52.751-21.479 103.015-60.442 140.339l-369.639 354.827-369.14-355.325c-38.962-37.822-60.441-87.588-60.441-140.837s21.479-103.015 60.441-140.339c38.963-37.822 90.912-58.226 146.357-58.226s107.395 20.902 146.857 58.723l47.954 46.282c15.984 15.427 41.959 15.427 57.943 0l47.454-45.784c38.462-37.822 90.409-58.723 145.858-58.723z"/>
    </svg>
  `
]

function showStar(rating) {
    let rat = Math.round(rating * 2) / 2;
    let kod = ''

    for (let i = 1; i <= 5; i++) {
        if (rat >= i) kod += stars[0]
        else if (rat >= i - 0.5) kod += stars[1]
        else kod += stars[2]
    }

    return kod
}

function showHeart(type, id) {
    let favorites = JSON.parse(localStorage.getItem('favorite')) || []

    const isFav = favorites.some(item => item.id == id && item.type === type)

    if(isFav) return hearts[0]
    else return hearts[1]
}

function showCartChoise(type, id) {
    let carts = JSON.parse(localStorage.getItem('cart')) || []

    const isCart = carts.some(item => item.id == id && item.type === type)

    if(isCart) return cartChoise[1]
    else return cartChoise[0]
}

function uptBtn(lst, container) {
    let contain = document.getElementById(container) 
    let data = JSON.parse(localStorage.getItem(lst)) || []
    let count = 0
    if(lst === 'favorite') {
        count = data.length
    } else if(lst === 'cart') {
        count = data.reduce((sum, item) => sum + item.quantity, 0) 
    }
    contain.innerHTML = count
    if (count === 0) {
        contain.style.display = 'none';
    } else {
        contain.style.display = 'block';
    }
}

function addFavorite(type, id, container) {
    const selectedData = allData[type]

    const product = selectedData.find(item => item.id == id )

    if (!product) return;

    let favorites = JSON.parse(localStorage.getItem('favorite')) || []

    const exists = favorites.some(item => item.type === type && item.id == id )

    if(!exists) {
        favorites.push({type, id: product.id})
    } else {
        favorites = favorites.filter(item => item.type !== type || item.id != id)
    }

    localStorage.setItem('favorite', JSON.stringify(favorites))
    uptBtn('favorite', container)
    showHeart(type, id)
    showTodayDiscount(type, allData['discounted'])
    showBestSeller(type, allData['bestSell'])
    showNewProduct(type, allData['news'])
}

function addCart(type, id, container) {
    const selectedData = allData[type]

    const product = selectedData.find(item => item.id == id )

    if (!product) return;

    const clickedBtn = document.getElementById('btn' + type + id )

    let carts = JSON.parse(localStorage.getItem('cart')) || []

    const exists = carts.some(item => item.type === type && item.id == id )

    if(!exists) {
        carts.push({type, id: product.id, quantity: 1})
        clickedBtn.style.background = '#eaf8f1'
        clickedBtn.style.color = '#13ae5f'
        clickedBtn.innerHTML = `
            <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="inline-block shrink-0 mr-2 text-[18px] md:text-[22px]">
                <path xmlns="http://www.w3.org/2000/svg" d="M311.878 950.857c45.933 0 83.168-36.766 83.168-82.125s-37.235-82.125-83.168-82.125c-45.933 0-83.168 36.766-83.168 82.125s37.235 82.125 83.168 82.125z"/>
                <path xmlns="http://www.w3.org/2000/svg" d="M1013.605 257.925c-5.198-5.133-5.198-5.133-10.396-5.133h-743.31c-20.792 0-36.386-15.399-36.386-30.797l-20.792-138.586c0-5.133-5.198-10.266-15.594-10.266h-171.533c-10.396 0-15.594 5.133-15.594 15.399v35.93c0 10.266 5.198 15.399 15.594 15.399h129.949v5.133l83.168 564.611c0 5.134 5.198 10.269 15.593 10.269h566.577c5.198 0 10.396-5.134 15.594-10.269l197.525-441.422c-5.198 0-5.198-5.133-10.396-10.266zM899.249 370.846l-119.554 261.776c-5.198 15.399-20.787 20.529-36.381 20.529h-426.236c-20.792 0-36.386-15.399-36.386-30.793l-36.386-261.777c0-10.266 0-20.532 10.396-30.797 5.198-5.133 15.594-10.266 25.99-10.266h582.171c10.396 0 25.99 5.133 31.188 15.399 10.396 10.266 10.396 25.665 5.198 35.93z"/>
                <path xmlns="http://www.w3.org/2000/svg" d="M753.708 950.857c45.929 0 83.163-36.766 83.163-82.125s-37.234-82.125-83.163-82.125c-45.933 0-83.169 36.766-83.169 82.125s37.234 82.125 83.169 82.125z"/>
            </svg>
            Səbətdə
        `
    }

    localStorage.setItem('cart', JSON.stringify(carts))
    uptBtn('cart', container)
}

function checkCartButtons() {
    const carts = JSON.parse(localStorage.getItem('cart')) || [];

    carts.forEach(item => {
        const btn = document.getElementById(
            'btn' + item.type + item.id
        )

        if (!btn) return;

        btn.style.background = '#eaf8f1'
        btn.style.color = '#13ae5f'

        btn.innerHTML = `
            <svg width="1em" height="1em" viewBox="0 0 1024 1024" aria-hidden="true" fill="currentColor" class="inline-block shrink-0 mr-2 text-[18px] md:text-[22px]">
                <path xmlns="http://www.w3.org/2000/svg" d="M311.878 950.857c45.933 0 83.168-36.766 83.168-82.125s-37.235-82.125-83.168-82.125c-45.933 0-83.168 36.766-83.168 82.125s37.235 82.125 83.168 82.125z"/>
                <path xmlns="http://www.w3.org/2000/svg" d="M1013.605 257.925c-5.198-5.133-5.198-5.133-10.396-5.133h-743.31c-20.792 0-36.386-15.399-36.386-30.797l-20.792-138.586c0-5.133-5.198-10.266-15.594-10.266h-171.533c-10.396 0-15.594 5.133-15.594 15.399v35.93c0 10.266 5.198 15.399 15.594 15.399h129.949v5.133l83.168 564.611c0 5.134 5.198 10.269 15.593 10.269h566.577c5.198 0 10.396-5.134 15.594-10.269l197.525-441.422c-5.198 0-5.198-5.133-10.396-10.266zM899.249 370.846l-119.554 261.776c-5.198 15.399-20.787 20.529-36.381 20.529h-426.236c-20.792 0-36.386-15.399-36.386-30.793l-36.386-261.777c0-10.266 0-20.532 10.396-30.797 5.198-5.133 15.594-10.266 25.99-10.266h582.171c10.396 0 25.99 5.133 31.188 15.399 10.396 10.266 10.396 25.665 5.198 35.93z"/>
                <path xmlns="http://www.w3.org/2000/svg" d="M753.708 950.857c45.929 0 83.163-36.766 83.163-82.125s-37.234-82.125-83.163-82.125c-45.933 0-83.169 36.766-83.169 82.125s37.234 82.125 83.169 82.125z"/>
            </svg>
            Səbətdə
        `
    })
}