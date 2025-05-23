// Hong Kong map coordinates (centered on Victoria Harbour)
const HK_LAT = 22.2988;
const HK_LNG = 114.1722;

// Map initialization
let map;
let markers = [];

// Current language (default: English)
let currentLanguage = 'en';

// Language translations
const translations = {
  en: {
    // Header and nav
    appName: 'Real Trip',
    tagline: 'Restoring Authenticity to Travel',
    home: 'Home',
    reviews: 'Reviews',
    recommendations: 'Recommendations',
    profile: 'Profile',
    
    // Map section
    mapTitle: 'Hong Kong Interactive Map',
    searchPlaceholder: 'Search for a location in Hong Kong...',
    searchBtn: 'Search',
    all: 'All',
    verified: 'Verified',
    topRated: 'Top Rated',
    restaurants: 'Restaurants',
    attractions: 'Attractions',
    shopping: 'Shopping',
    
    // Review section
    postReview: 'Post a Review',
    locationName: 'Location Name:',
    locationPlaceholder: 'Enter location name...',
    yourReview: 'Your Review:',
    reviewPlaceholder: 'Enter your review here...',
    rating: 'Rating:',
    selectRating: 'Select a rating',
    excellent: '5 - Excellent',
    veryGood: '4 - Very Good',
    good: '3 - Good',
    fair: '2 - Fair',
    poor: '1 - Poor',
    uploadProof: 'Upload Proof (Receipt/Ticket):',
    submitReview: 'Submit Review',
    
    // Recent reviews
    recentReviews: 'Recent Reviews',
    postedOn: 'Posted on:',
    
    // Recommendations
    aiRecommendations: 'AI Recommendations in Hong Kong',
    selectInterests: 'Select interests to get personalized recommendations',
    noneSelected: 'None selected',
    selectedInterests: 'Your selected interests:',
    generateItinerary: 'Generate My Itinerary',
    selectTags: 'Please select at least one interest to generate recommendations.',
    routeDescription: 'Explore Hong Kong with this curated itinerary based on your interests.',
    routeSaved: 'Route saved to your profile!',
    routeSavedBtn: 'Saved ✓',
    
    // Interest tags
    tagHiking: 'Hiking',
    tagFood: 'Local Food',
    tagCulture: 'Culture',
    tagNightlife: 'Nightlife',
    tagShopping: 'Shopping',
    tagBeaches: 'Beaches',
    tagHistory: 'History',
    tagArchitecture: 'Architecture',
    tagNature: 'Nature',
    tagPhotography: 'Photography',
    tagParks: 'Parks',
    tagMarkets: 'Markets',
    tagMuseums: 'Museums',
    tagFestivals: 'Festivals',
    tagFamily: 'Family-friendly',
    tagAdventure: 'Adventure',
    tagViews: 'Scenic Views',
    tagCafes: 'Cafés',
    
    // User profile
    userProfile: 'User Profile',
    memberSince: 'Member since: January 2025',
    reviewsCount: 'Reviews: 15',
    verifiedReviews: 'Verified Reviews: 12',
    yourReviews: 'Your Reviews',
    savedPlaces: 'Saved Places',
    
    // Footer
    about: 'About Real Trip',
    mission: 'Our mission is to restore authenticity to travel experiences.',
    quickLinks: 'Quick Links',
    postReviewLink: 'Post Review',
    recentReviewsLink: 'Recent Reviews',
    contactUs: 'Contact Us',
    email: 'Email: info@realtrip.com',
    phone: 'Phone: +852 1234 5678',
    copyright: '© 2025 Real Trip. All Rights Reserved.',
    
    // Review submission
    fillAllFields: 'Please fill in all fields and upload proof.',
    thankYou: 'Thank you for your review! It has been submitted for verification.',
    aiAnalyzing: 'AI analyzing your preferences...',
    aiCompletedAnalysis: 'Analysis complete! Based on your selected interests, we recommend:',
    saveRoute: 'Save Route'
  },
  zh_CN: {
    // Header and nav
    appName: '真旅游',
    tagline: '重塑旅游真实性',
    home: '首页',
    reviews: '评论',
    recommendations: '推荐',
    profile: '个人主页',
    
    // Map section
    mapTitle: '香港互动地图',
    searchPlaceholder: '搜索香港地点...',
    searchBtn: '搜索',
    all: '全部',
    verified: '已验证',
    topRated: '高评分',
    restaurants: '餐厅',
    attractions: '景点',
    shopping: '购物',
    
    // Review section
    postReview: '发表评论',
    locationName: '地点名称:',
    locationPlaceholder: '输入地点名称...',
    yourReview: '您的评论:',
    reviewPlaceholder: '在此输入您的评论...',
    rating: '评分:',
    selectRating: '选择评分',
    excellent: '5 - 极好',
    veryGood: '4 - 很好',
    good: '3 - 好',
    fair: '2 - 一般',
    poor: '1 - 差',
    uploadProof: '上传凭证(收据/票据):',
    submitReview: '提交评论',
    
    // Recent reviews
    recentReviews: '最新评论',
    postedOn: '发表于:',
    
    // Recommendations
    aiRecommendations: '香港AI推荐',
    selectInterests: '选择兴趣获取个性化推荐',
    noneSelected: '未选择',
    selectedInterests: '您选择的兴趣:',
    generateItinerary: '生成我的行程',
    selectTags: '请至少选择一个兴趣来生成推荐。',
    routeDescription: '根据您的兴趣探索香港的精选行程。',
    routeSaved: '行程已保存到您的个人资料！',
    routeSavedBtn: '已保存 ✓',
    
    // Interest tags
    tagHiking: '徒步旅行',
    tagFood: '当地美食',
    tagCulture: '文化',
    tagNightlife: '夜生活',
    tagShopping: '购物',
    tagBeaches: '海滩',
    tagHistory: '历史',
    tagArchitecture: '建筑',
    tagNature: '自然',
    tagPhotography: '摄影',
    tagParks: '公园',
    tagMarkets: '市场',
    tagMuseums: '博物馆',
    tagFestivals: '节日',
    tagFamily: '亲子活动',
    tagAdventure: '冒险',
    tagViews: '风景',
    tagCafes: '咖啡馆',
    
    // User profile
    userProfile: '用户主页',
    memberSince: '注册时间: 2025年1月',
    reviewsCount: '评论数: 15',
    verifiedReviews: '已验证评论: 12',
    yourReviews: '您的评论',
    savedPlaces: '收藏地点',
    
    // Footer
    about: '关于真旅游',
    mission: '我们的使命是重塑旅游体验的真实性。',
    quickLinks: '快速链接',
    postReviewLink: '发表评论',
    recentReviewsLink: '最新评论',
    contactUs: '联系我们',
    email: '电子邮件: info@realtrip.com',
    phone: '电话: +852 1234 5678',
    copyright: '© 2025 真旅游。保留所有权利。',
    
    // Review submission
    fillAllFields: '请填写所有字段并上传凭证。',
    thankYou: '感谢您的评论！已提交审核。',
    aiAnalyzing: 'AI正在分析您的偏好...',
    aiCompletedAnalysis: '分析完成！根据您选择的兴趣，我们推荐：',
    saveRoute: '保存行程'
  },
  zh_HK: {
    // Header and nav
    appName: '真旅遊',
    tagline: '重塑旅遊真實性',
    home: '首頁',
    reviews: '評論',
    recommendations: '推薦',
    profile: '個人主頁',
    
    // Map section
    mapTitle: '香港互動地圖',
    searchPlaceholder: '搜索香港地點...',
    searchBtn: '搜索',
    all: '全部',
    verified: '已驗證',
    topRated: '高評分',
    restaurants: '餐廳',
    attractions: '景點',
    shopping: '購物',
    
    // Review section
    postReview: '發表評論',
    locationName: '地點名稱:',
    locationPlaceholder: '輸入地點名稱...',
    yourReview: '您的評論:',
    reviewPlaceholder: '在此輸入您的評論...',
    rating: '評分:',
    selectRating: '選擇評分',
    excellent: '5 - 極好',
    veryGood: '4 - 很好',
    good: '3 - 好',
    fair: '2 - 一般',
    poor: '1 - 差',
    uploadProof: '上傳憑證(收據/票據):',
    submitReview: '提交評論',
    
    // Recent reviews
    recentReviews: '最新評論',
    postedOn: '發表於:',
    
    // Recommendations
    aiRecommendations: '香港AI推薦',
    selectInterests: '選擇興趣獲取個性化推薦',
    noneSelected: '未選擇',
    selectedInterests: '您選擇的興趣:',
    generateItinerary: '生成我的行程',
    selectTags: '請至少選擇一個興趣來生成推薦。',
    routeDescription: '根據您的興趣探索香港的精選行程。',
    routeSaved: '行程已保存到您的個人資料！',
    routeSavedBtn: '已保存 ✓',
    
    // Interest tags
    tagHiking: '遠足',
    tagFood: '本地美食',
    tagCulture: '文化',
    tagNightlife: '夜生活',
    tagShopping: '購物',
    tagBeaches: '海灘',
    tagHistory: '歷史',
    tagArchitecture: '建築',
    tagNature: '自然',
    tagPhotography: '攝影',
    tagParks: '公園',
    tagMarkets: '市場',
    tagMuseums: '博物館',
    tagFestivals: '節慶',
    tagFamily: '親子活動',
    tagAdventure: '冒險',
    tagViews: '風景',
    tagCafes: '咖啡館',
    
    // User profile
    userProfile: '用戶主頁',
    memberSince: '註冊時間: 2025年1月',
    reviewsCount: '評論數: 15',
    verifiedReviews: '已驗證評論: 12',
    yourReviews: '您的評論',
    savedPlaces: '收藏地點',
    
    // Footer
    about: '關於真旅遊',
    mission: '我們的使命是重塑旅遊體驗的真實性。',
    quickLinks: '快速鏈接',
    postReviewLink: '發表評論',
    recentReviewsLink: '最新評論',
    contactUs: '聯繫我們',
    email: '電子郵件: info@realtrip.com',
    phone: '電話: +852 1234 5678',
    copyright: '© 2025 真旅遊。保留所有權利。',
    
    // Review submission
    fillAllFields: '請填寫所有字段並上傳憑證。',
    thankYou: '感謝您的評論！已提交審核。',
    aiAnalyzing: 'AI正在分析您的喜好...',
    aiCompletedAnalysis: '分析完成！根據您選擇的興趣，我們推薦：',
    saveRoute: '儲存行程'
  }
};

// Sample data for saved places
const savedPlaces = [
  {
    id: 1,
    name: "Victoria Peak",
    image: "https://images.unsplash.com/photo-1578494021484-4e09a1e2e8c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Attractions",
    rating: 4.8,
    description: "Enjoy breathtaking views of Hong Kong's skyline from this iconic mountaintop.",
    isNew: true
  },
  {
    id: 2,
    name: "Tim Ho Wan",
    image: "https://images.unsplash.com/photo-1538966918053-5e36c5b1db3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Restaurants",
    rating: 4.5,
    description: "Famous dim sum restaurant known for its affordable Michelin-starred cuisine."
  },
  {
    id: 3,
    name: "Tsim Sha Tsui Promenade",
    image: "https://images.unsplash.com/photo-1549564919-c62918a143e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Attractions",
    rating: 4.7,
    description: "A scenic waterfront promenade with spectacular views of Hong Kong Island skyline."
  },
  {
    id: 4,
    name: "Temple Street Night Market",
    image: "https://images.unsplash.com/photo-1516813046-c2897333fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Shopping",
    rating: 4.3,
    description: "Popular night market selling food, souvenirs, and other merchandise."
  }
];

// Sample locations data for Hong Kong
const hkLocations = [
  {
    id: 1,
    name: "Victoria Peak",
    lat: 22.2714,
    lng: 114.1500,
    rating: 4.8,
    reviews: 1250,
    category: "attractions",
    description: "Iconic mountain with panoramic views of Hong Kong's skyline.",
    verified: true
  },
  {
    id: 2,
    name: "Tim Ho Wan",
    lat: 22.3047,
    lng: 114.1675,
    rating: 4.7,
    reviews: 980,
    category: "restaurants",
    description: "Famous dim sum restaurant known for its affordable Michelin-starred food.",
    verified: true
  },
  {
    id: 3,
    name: "Tsim Sha Tsui Promenade",
    lat: 22.2938,
    lng: 114.1721,
    rating: 4.6,
    reviews: 1540,
    category: "attractions",
    description: "Stunning waterfront with views of Hong Kong Island skyline.",
    verified: true
  },
  {
    id: 4,
    name: "Hong Kong Disneyland",
    lat: 22.3130,
    lng: 114.0413,
    rating: 4.5,
    reviews: 1890,
    category: "attractions",
    description: "Disney theme park with rides, shows and entertainment.",
    verified: true
  },
  {
    id: 5,
    name: "Lan Kwai Fong",
    lat: 22.2808,
    lng: 114.1558,
    rating: 4.4,
    reviews: 760,
    category: "attractions",
    description: "Popular nightlife district with bars and restaurants.",
    verified: true
  },
  {
    id: 6,
    name: "Temple Street Night Market",
    lat: 22.3080,
    lng: 114.1700,
    rating: 4.3,
    reviews: 1120,
    category: "shopping",
    description: "Famous night market with various goods and street food.",
    verified: true
  },
  {
    id: 7,
    name: "Yung Kee Restaurant",
    lat: 22.2820,
    lng: 114.1550,
    rating: 4.5,
    reviews: 630,
    category: "restaurants",
    description: "Renowned for its roast goose since 1942.",
    verified: true
  },
  {
    id: 8,
    name: "Mong Kok Markets",
    lat: 22.3215,
    lng: 114.1695,
    rating: 4.4,
    reviews: 890,
    category: "shopping",
    description: "Popular shopping area with various markets and street food.",
    verified: true
  },
  {
    id: 9,
    name: "Ladies' Market",
    lat: 22.3187,
    lng: 114.1702,
    rating: 4.2,
    reviews: 1280,
    category: "shopping",
    description: "Popular market in Mong Kok selling clothes, accessories and souvenirs.",
    verified: true
  },
  {
    id: 10,
    name: "Star Ferry",
    lat: 22.2934,
    lng: 114.1678,
    rating: 4.6,
    reviews: 2350,
    category: "attractions",
    description: "Iconic ferry service between Tsim Sha Tsui and Central/Wan Chai.",
    verified: true
  },
  {
    id: 11,
    name: "Wong Tai Sin Temple",
    lat: 22.3421,
    lng: 114.1933,
    rating: 4.5,
    reviews: 890,
    category: "attractions",
    description: "Famous temple known for 'making every wish come true'.",
    verified: true
  },
  {
    id: 12,
    name: "Tai O Fishing Village",
    lat: 22.2558,
    lng: 113.8585,
    rating: 4.4,
    reviews: 750,
    category: "attractions", 
    description: "Traditional fishing village with stilt houses and boat excursions.",
    verified: true
  },
  {
    id: 13,
    name: "Ramen Jo",
    lat: 22.2784,
    lng: 114.1722,
    rating: 4.7,
    reviews: 450,
    category: "restaurants",
    description: "Authentic Japanese ramen restaurant with homemade noodles.",
    verified: true
  },
  {
    id: 14,
    name: "Under Bridge Spicy Crab",
    lat: 22.2770,
    lng: 114.1827,
    rating: 4.3,
    reviews: 680,
    category: "restaurants",
    description: "Famous for its signature spicy crab dish.",
    verified: true
  },
  {
    id: 15,
    name: "Lin Heung Tea House",
    lat: 22.2847,
    lng: 114.1546,
    rating: 4.2,
    reviews: 590,
    category: "restaurants",
    description: "One of Hong Kong's oldest dim sum restaurants with traditional cart service.",
    verified: true
  }
];

// Sample review data - expanded with Hong Kong style reviews
const sampleReviews = [
  {
    id: 1,
    location: "Victoria Peak",
    user: "TravelLover22",
    avatar: "https://via.placeholder.com/40",
    rating: 5,
    content: "The view from Victoria Peak is absolutely breathtaking! I recommend going in the early evening to see both daytime and nighttime views of the city. Worth every penny!",
    date: "2025-02-15"
  },
  {
    id: 2,
    location: "Tim Ho Wan",
    user: "FoodieExplorer",
    avatar: "https://via.placeholder.com/40",
    rating: 5,
    content: "Best dim sum I've ever had! The BBQ pork buns are heavenly. Even with the wait, it's absolutely worth it. Can't believe such good food is so affordable!",
    date: "2025-02-10"
  },
  {
    id: 3,
    location: "Temple Street Night Market",
    user: "ShopTillIDrop",
    avatar: "https://via.placeholder.com/40",
    rating: 4,
    content: "Great atmosphere and a wide variety of goods. Remember to bargain! The street food stalls at the north end are also fantastic.",
    date: "2025-02-05"
  },
  {
    id: 4,
    location: "旺角女人街",
    user: "香港本地人",
    avatar: "https://via.placeholder.com/40",
    rating: 2,
    content: "嘩！太多人啦！成日撞來撞去，好多嘢都好貴，而且啲嘢質素麻麻，唔係太好買。不過如果你想體驗香港嘅市集文化，都可以嚟睇下掛。",
    date: "2025-01-30"
  },
  {
    id: 5,
    location: "蘭桂坊",
    user: "夜生活愛好者",
    avatar: "https://via.placeholder.com/40",
    rating: 5,
    content: "超正！氣氛勁好，飲品款式多，仲有好多靚仔靚女，週末人多到爆！飲醉咗之後可以去附近食夜宵，邊度都有嘢食。絕對係香港夜生活嘅必去地方！",
    date: "2025-01-25"
  },
  {
    id: 6,
    location: "太平山頂",
    user: "攝影發燒友",
    avatar: "https://via.placeholder.com/40",
    rating: 5,
    content: "個景靚到爆！日落時間去最掂，可以影到香港最靚嘅天際線。記得帶埋相機同三腳架啊！個纜車排隊時間長，建議提前買飛或者搭的士上去。",
    date: "2025-01-20"
  },
  {
    id: 7,
    location: "迪士尼樂園",
    user: "親子活動達人",
    avatar: "https://via.placeholder.com/40",
    rating: 4,
    content: "同小朋友去好正！個園區雖然細過其他地方嘅迪士尼，但係設施都幾好玩。米奇老鼠周圍都係，小朋友見到超開心。不過飲食好貴，可以自己帶啲嘢食。",
    date: "2025-01-15"
  },
  {
    id: 8,
    location: "添好運點心",
    user: "美食家",
    avatar: "https://via.placeholder.com/40",
    rating: 5,
    content: "嘩！個叉燒包簡直係神級！酥皮煎餃都勁好食，價錢又平，難怪排隊排到咁長。個服務態度就麻麻地啦，不過嚟香港邊度都係咁㗎啦。總之一定要去試下！",
    date: "2025-01-10"
  },
  {
    id: 9,
    location: "東涌昂坪纜車",
    user: "冒險者",
    avatar: "https://via.placeholder.com/40",
    rating: 1,
    content: "好失望呀！排隊排成個鐘，仲要俾人加塞。上到去啲紀念品鋪賣嘅嘢又貴又冇特色。大佛周圍都係旅行團，影相都要等好耐。總之唔抵玩！",
    date: "2025-01-05"
  },
  {
    id: 10,
    location: "深水埗鴨寮街",
    user: "電子發燒友",
    avatar: "https://via.placeholder.com/40",
    rating: 4,
    content: "尋寶好去處！咁多二手電子產品，價錢又平，真係買到寶。不過要小心啲，睇清楚先買，有啲嘢係冇保養嘅。最好識電子嘢嘅朋友一齊去先至買得安心啲。",
    date: "2024-12-25"
  },
  {
    id: 11,
    location: "中環蘇豪區",
    user: "時尚達人",
    avatar: "https://via.placeholder.com/40",
    rating: 5,
    content: "好多特色小店同餐廳，街頭藝術感覺好濃厚！個氣氛好歐洲，同香港其他地方好唔同。啲餐廳食物質素高，但係價錢都幾貴。周末去會更加有氣氛！",
    date: "2024-12-20"
  },
  {
    id: 12,
    location: "尖沙咀海旁",
    user: "本地遊客",
    avatar: "https://via.placeholder.com/40",
    rating: 1,
    content: "咩都冇睇頭！凈係影相打卡嘅地方。夜晚嘅燈光表演都係草草了事。重點係人多到癲，周圍都係自拍棍，好難行路。唔知點解會有咁多人嚟呢度。",
    date: "2024-12-15"
  }
];

// Sample user reviews
const userReviews = [
  {
    id: 101,
    location: "Lan Kwai Fong",
    rating: 4,
    content: "Vibrant nightlife district with many bars and restaurants. Gets very crowded on weekends but has a great atmosphere!",
    date: "2025-01-28"
  },
  {
    id: 102,
    location: "Hong Kong Disneyland",
    rating: 5,
    content: "Magical experience! Smaller than other Disney parks but still packed with fun. The Mystic Manor ride is unique to this park and absolutely fantastic.",
    date: "2025-01-15"
  }
];

// DOM ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize map
  initMap();
  
  // Load recent reviews
  loadRecentReviews();
  
  // Load user profile data
  loadUserProfile();
  
  // Set up event listeners
  setupEventListeners();
  
  // Start review auto-scroll
  startReviewsAutoScroll();
  
  // Initialize language selector
  initLanguageSelector();
  
  // Start AI recommendations
  generateAIRecommendations();
  
  // Initialize review actions
  setTimeout(initReviewActions, 500);
  
  // Remove any excess elements from the profile section
  cleanupProfileSection();
  
  // Detect touch devices and add appropriate class
  function detectTouchDevice() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
      document.body.classList.add('touch-device');
      return true;
    }
    return false;
  }
  
  const isTouchDevice = detectTouchDevice();
  
  // Add touch-active class for visual feedback on touch
  if (isTouchDevice) {
    const interactiveElements = document.querySelectorAll('a, button, .interest-tag, .card');
    interactiveElements.forEach(element => {
      element.addEventListener('touchstart', function() {
        this.classList.add('touch-active');
      });
      element.addEventListener('touchend', function() {
        this.classList.remove('touch-active');
      });
      element.addEventListener('touchcancel', function() {
        this.classList.remove('touch-active');
      });
    });
    
    // Mobile FAB button functionality
    const fabButton = document.getElementById('add-review-fab');
    if (fabButton) {
      fabButton.addEventListener('click', function() {
        const reviewModal = document.getElementById('review-modal');
        if (reviewModal) {
          reviewModal.style.display = 'block';
        }
      });
    }
  }
  
  // Adjust layout for mobile
  function handleResponsiveLayout() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      // Mobile layout adjustments
      const map = document.getElementById('map');
      if (map) {
        map.style.height = '40vh';
      }
    } else {
      // Desktop layout resets
      const map = document.getElementById('map');
      if (map) {
        map.style.height = '';
      }
    }
  }
  
  // Run once on load and then on resize
  handleResponsiveLayout();
  window.addEventListener('resize', handleResponsiveLayout);
});

// Function to clean up the profile section
function cleanupProfileSection() {
  const profileSection = document.getElementById('profile');
  
  // Get all direct children of the profile section
  const children = profileSection.children;
  
  // Keep only the h2 and profile-container elements
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.tagName !== 'H2' && !child.classList.contains('profile-container')) {
      child.remove();
      i--; // Adjust index since we're removing elements
    }
  }
}

// Initialize language selector
function initLanguageSelector() {
  // Add language selector to page if it doesn't exist
  if (!document.getElementById('language-selector')) {
    const languageSelector = document.createElement('div');
    languageSelector.id = 'language-selector';
    languageSelector.className = 'language-selector';
    languageSelector.innerHTML = `
      <button class="lang-btn active" data-lang="en">English</button>
      <button class="lang-btn" data-lang="zh_CN">简体中文</button>
      <button class="lang-btn" data-lang="zh_HK">繁體中文</button>
    `;
    
    document.querySelector('header').appendChild(languageSelector);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        switchLanguage(lang);
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
}

// Switch language function
function switchLanguage(lang) {
  currentLanguage = lang;
  
  // Update text content based on selected language
  const t = translations[lang];
  
  // Header and navigation
  document.querySelector('.logo').textContent = t.appName;
  document.querySelector('.tagline').textContent = t.tagline;
  
  // Navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks[0].textContent = t.home;
  navLinks[1].textContent = t.reviews;
  navLinks[2].textContent = t.recommendations;
  navLinks[3].textContent = t.profile;
  
  // Map section
  document.querySelector('#map-section h2').textContent = t.mapTitle;
  document.querySelector('#searchInput').placeholder = t.searchPlaceholder;
  document.querySelector('#searchBtn').textContent = t.searchBtn;
  
  // Filter options
  const filterOptions = document.querySelectorAll('#filterSelect option');
  filterOptions[0].textContent = t.all;
  filterOptions[1].textContent = t.verified;
  filterOptions[2].textContent = t.topRated;
  filterOptions[3].textContent = t.restaurants;
  filterOptions[4].textContent = t.attractions;
  filterOptions[5].textContent = t.shopping;
  
  // Reviews section
  document.querySelector('#reviews h2').textContent = t.postReview;
  document.querySelector('label[for="locationName"]').textContent = t.locationName;
  document.querySelector('#locationName').placeholder = t.locationPlaceholder;
  document.querySelector('label[for="reviewText"]').textContent = t.yourReview;
  document.querySelector('#reviewText').placeholder = t.reviewPlaceholder;
  document.querySelector('label[for="ratingSelect"]').textContent = t.rating;
  
  // Rating options
  const ratingOptions = document.querySelectorAll('#ratingSelect option');
  ratingOptions[0].textContent = t.selectRating;
  ratingOptions[1].textContent = t.excellent;
  ratingOptions[2].textContent = t.veryGood;
  ratingOptions[3].textContent = t.good;
  ratingOptions[4].textContent = t.fair;
  ratingOptions[5].textContent = t.poor;
  
  document.querySelector('label[for="proofUpload"]').textContent = t.uploadProof;
  document.querySelector('#reviewForm button').textContent = t.submitReview;
  
  // Recent reviews
  document.querySelector('#recent-reviews h2').textContent = t.recentReviews;
  
  // Recommendations
  document.querySelector('#recommendations h2').textContent = t.aiRecommendations;
  
  // Tag selection interface
  const tagSelectionContainer = document.querySelector('.tag-selection-container');
  if (tagSelectionContainer) {
    tagSelectionContainer.querySelector('h3').textContent = t.selectInterests || 'Select interests to get personalized recommendations';
    
    // Update interest tags with translations
    const interestTags = document.querySelectorAll('.interest-tag');
    interestTags.forEach(tag => {
      const tagType = tag.getAttribute('data-tag');
      const translationKey = 'tag' + tagType.charAt(0).toUpperCase() + tagType.slice(1);
      if (t[translationKey]) {
        tag.textContent = t[translationKey];
      }
    });
    
    const selectedTagsContainer = tagSelectionContainer.querySelector('.selected-tags-container p');
    if (selectedTagsContainer) {
      // Get currently selected tags
      const selectedTags = [];
      document.querySelectorAll('.interest-tag.selected').forEach(tag => {
        const tagType = tag.getAttribute('data-tag');
        const translationKey = 'tag' + tagType.charAt(0).toUpperCase() + tagType.slice(1);
        if (t[translationKey]) {
          selectedTags.push(t[translationKey]);
        } else {
          selectedTags.push(tag.textContent);
        }
      });
      
      // Update selected tags display
      const selectedTagsText = selectedTags.length > 0 ? selectedTags.join(', ') : t.noneSelected || 'None selected';
      selectedTagsContainer.innerHTML = `${t.selectedInterests || 'Your selected interests:'} <span id="selected-tags-display">${selectedTagsText}</span>`;
    }
    
    const generateButton = document.getElementById('generate-itinerary-btn');
    if (generateButton) {
      generateButton.textContent = t.generateItinerary || 'Generate My Itinerary';
    }
  }
  
  // Profile
  document.querySelector('#profile h2').textContent = t.userProfile;
  document.querySelector('.profile-info p:nth-of-type(1)').textContent = t.memberSince;
  document.querySelector('.profile-info p:nth-of-type(2)').textContent = t.reviewsCount;
  document.querySelector('.profile-info p:nth-of-type(3)').textContent = t.verifiedReviews;
  document.querySelector('.user-reviews h3').textContent = t.yourReviews;
  document.querySelector('.saved-places h3').textContent = t.savedPlaces;
  
  // Footer
  const footerSections = document.querySelectorAll('.footer-section h3');
  footerSections[0].textContent = t.about;
  document.querySelector('.footer-section:nth-of-type(1) p').textContent = t.mission;
  footerSections[1].textContent = t.quickLinks;
  
  const quickLinks = document.querySelectorAll('.footer-section:nth-of-type(2) a');
  quickLinks[0].textContent = t.home;
  quickLinks[1].textContent = t.postReviewLink;
  quickLinks[2].textContent = t.recentReviewsLink;
  quickLinks[3].textContent = t.recommendations;
  
  footerSections[2].textContent = t.contactUs;
  const contactInfo = document.querySelectorAll('.footer-section:nth-of-type(3) p');
  contactInfo[0].textContent = t.email;
  contactInfo[1].textContent = t.phone;
  
  document.querySelector('.copyright').textContent = t.copyright;
  
  // Reload reviews to update date format
  loadRecentReviews();
  loadUserProfile();
  
  // Update AI-related translations
  if (document.querySelector('.ai-analysis')) {
    const aiTitle = document.querySelector('.ai-title');
    const aiSummary = document.querySelector('.ai-summary p');
    const saveRouteButtons = document.querySelectorAll('.save-route-btn');
    
    if (aiTitle) {
      aiTitle.textContent = t.aiAnalyzing || 'AI analyzing your preferences...';
    }
    
    if (aiSummary) {
      aiSummary.textContent = t.aiCompletedAnalysis || 'Analysis complete! Based on your selected interests, we recommend:';
    }
    
    if (saveRouteButtons.length > 0) {
      saveRouteButtons.forEach(btn => {
        if (btn.disabled) {
          btn.textContent = t.routeSavedBtn || 'Saved ✓';
        } else {
          btn.textContent = t.saveRoute || 'Save Route';
        }
      });
    }
  }
}

// Reviews auto-scroll functionality
let scrollInterval;
let displayedReviews = []; // 用於存儲當前顯示的評論

function startReviewsAutoScroll() {
  // Clear any existing interval
  if (scrollInterval) {
    clearInterval(scrollInterval);
  }
  
  // 初始選擇3個評論
  selectRandomReviews();
  
  // Set interval to randomly select new reviews
  scrollInterval = setInterval(() => {
    selectRandomReviews();
  }, 8000); // 每8秒更換一次評論
}

// 隨機選擇3個評論顯示
function selectRandomReviews() {
  // 從所有評論中隨機選擇3個
  let selectedReviews = [];
  let availableReviews = [...sampleReviews]; // 複製所有評論
  
  // 隨機選取3個評論
  for (let i = 0; i < 3; i++) {
    if (availableReviews.length === 0) break;
    
    const randomIndex = Math.floor(Math.random() * availableReviews.length);
    selectedReviews.push(availableReviews[randomIndex]);
    availableReviews.splice(randomIndex, 1); // 移除已選評論
  }
  
  // 淡出當前評論，然後顯示新評論
  const container = document.getElementById('reviews-container');
  const currentCards = container.querySelectorAll('.review-card');
  
  // 淡出當前評論
  currentCards.forEach(card => {
    card.style.opacity = '0';
  });
  
  // 500ms後添加新評論
  setTimeout(() => {
    // 清空容器
    container.innerHTML = '';
    
    // 添加新評論
    selectedReviews.forEach(review => {
      const reviewCard = createReviewCard(review);
      reviewCard.style.position = 'relative'; // 改為相對定位允許多個評論並排
      reviewCard.style.width = '100%';
      reviewCard.style.opacity = '0';
      container.appendChild(reviewCard);
    });
    
    // 淡入新評論
    setTimeout(() => {
      const newCards = container.querySelectorAll('.review-card');
      newCards.forEach(card => {
        card.style.opacity = '1';
      });
      
      // 初始化評論讚/踩狀態
      initReviewActions();
    }, 100);
    
    // 更新當前顯示的評論
    displayedReviews = selectedReviews;
  }, 500);
}

// Load recent reviews - updated to support 3 reviews display
function loadRecentReviews() {
  const container = document.getElementById('reviews-container');
  
  // Clear existing content
  container.innerHTML = '';
  
  // 初始時選擇3個評論 (不同於自動滾動時的隨機選擇)
  let initialReviews = sampleReviews.slice(0, 3);
  
  // Add initial reviews
  initialReviews.forEach(review => {
    const reviewCard = createReviewCard(review);
    reviewCard.style.position = 'relative'; // 改為相對定位允許多個評論並排
    reviewCard.style.width = '100%';
    container.appendChild(reviewCard);
  });
  
  // 更新當前顯示的評論
  displayedReviews = initialReviews;
  
  // 初始化評論讚/踩狀態
  setTimeout(initReviewActions, 100);
}

// Initialize Leaflet map
function initMap() {
  // Create map centered on Hong Kong
  map = L.map('map').setView([HK_LAT, HK_LNG], 13);
  
  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Add location markers
  addMapMarkers();
  
  // Add reviewed locations from user reviews
  addReviewedLocations();
}

// Add markers to the map
function addMapMarkers() {
  // Clear existing markers
  markers.forEach(marker => map.removeLayer(marker));
  markers = [];
  
  // Define marker icons for different categories
  const icons = {
    attractions: L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    }),
    restaurants: L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    }),
    shopping: L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })
  };
  
  // Add new markers with category-specific icons
  hkLocations.forEach(location => {
    // Select icon based on category
    const icon = icons[location.category] || icons.attractions;
    
    // Create marker with custom icon
    const marker = L.marker([location.lat, location.lng], {icon: icon}).addTo(map);
    
    // Find related reviews
    const locationReviews = sampleReviews.filter(review => 
      review.location.toLowerCase() === location.name.toLowerCase() ||
      location.name.toLowerCase().includes(review.location.toLowerCase()) ||
      review.location.toLowerCase().includes(location.name.toLowerCase())
    );
    
    // Create popup content
    let popupContent = `
      <div class="location-popup">
        <h3>${location.name}</h3>
        <p>Rating: ${location.rating} ★ (${location.reviews} reviews)</p>
        <p>${location.description}</p>
        <p class="category-tag ${location.category}">${location.category}</p>
        ${location.verified ? '<span class="verified">Verified</span>' : ''}
    `;
    
    // Add related reviews if available
    if (locationReviews.length > 0) {
      popupContent += `<div class="popup-reviews">
        <h4>User Reviews (${locationReviews.length})</h4>
        <div class="popup-reviews-content">`;
        
      // Add up to 2 reviews in the popup
      locationReviews.slice(0, 2).forEach(review => {
        // Create stars display
        let stars = '';
        for (let i = 1; i <= 5; i++) {
          stars += i <= review.rating ? '★' : '☆';
        }
        
        popupContent += `
          <div class="popup-review">
            <div class="popup-review-header">
              <span class="popup-review-user">${review.user}</span>
              <span class="popup-review-rating">${stars}</span>
            </div>
            <p class="popup-review-text">${review.content.length > 100 ? review.content.substring(0, 100) + '...' : review.content}</p>
          </div>
        `;
      });
      
      popupContent += `</div></div>`;
    }
    
    popupContent += `</div>`;
    
    // Bind popup to marker
    marker.bindPopup(popupContent, {
      maxWidth: 300,
      minWidth: 200,
      maxHeight: 400,
      autoPan: true,
      closeButton: true,
      autoPanPadding: [40, 40]
    });
    
    // Store marker reference
    markers.push(marker);
  });
}

// Add markers for locations mentioned in reviews
function addReviewedLocations() {
  // Get all review locations
  const reviewedLocations = [...sampleReviews, ...userReviews].map(review => review.location);
  
  // Filter for locations not already in hkLocations
  const uniqueReviewedLocations = reviewedLocations.filter(reviewLoc => {
    return !hkLocations.some(location => 
      location.name.toLowerCase() === reviewLoc.toLowerCase() ||
      location.name.toLowerCase().includes(reviewLoc.toLowerCase()) ||
      reviewLoc.toLowerCase().includes(location.name.toLowerCase())
    );
  });
  
  // Define coordinates for some of the unique reviewed locations
  const reviewedCoordinates = {
    "旺角女人街": { lat: 22.3187, lng: 114.1702 },
    "蘭桂坊": { lat: 22.2808, lng: 114.1558 },
    "太平山頂": { lat: 22.2714, lng: 114.1500 },
    "迪士尼樂園": { lat: 22.3130, lng: 114.0413 },
    "添好運點心": { lat: 22.3047, lng: 114.1675 },
    "東涌昂坪纜車": { lat: 22.2579, lng: 113.9131 },
    "深水埗鴨寮街": { lat: 22.3298, lng: 114.1622 },
    "中環蘇豪區": { lat: 22.2829, lng: 114.1540 },
    "尖沙咀海旁": { lat: 22.2938, lng: 114.1721 }
  };
  
  // Add markers for reviewed locations that have coordinates
  uniqueReviewedLocations.forEach(reviewLoc => {
    if (reviewedCoordinates[reviewLoc]) {
      // Create user review marker with different icon
      const userReviewIcon = L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      
      const marker = L.marker([reviewedCoordinates[reviewLoc].lat, reviewedCoordinates[reviewLoc].lng], {
        icon: userReviewIcon
      }).addTo(map);
      
      // Find related reviews
      const locationReviews = sampleReviews.filter(review => review.location === reviewLoc);
      
      // Create popup content
      let popupContent = `
        <div class="location-popup">
          <h3>${reviewLoc}</h3>
          <p class="category-tag user-reviewed">User Reviewed</p>
      `;
      
      // Add reviews
      if (locationReviews.length > 0) {
        popupContent += `<div class="popup-reviews">
          <h4>User Reviews (${locationReviews.length})</h4>
          <div class="popup-reviews-content">`;
          
        // Add up to 2 reviews in the popup
        locationReviews.slice(0, 2).forEach(review => {
          // Create stars display
          let stars = '';
          for (let i = 1; i <= 5; i++) {
            stars += i <= review.rating ? '★' : '☆';
          }
          
          popupContent += `
            <div class="popup-review">
              <div class="popup-review-header">
                <span class="popup-review-user">${review.user}</span>
                <span class="popup-review-rating">${stars}</span>
              </div>
              <p class="popup-review-text">${review.content.length > 100 ? review.content.substring(0, 100) + '...' : review.content}</p>
            </div>
          `;
        });
        
        popupContent += `</div></div>`;
      }
      
      popupContent += `</div>`;
      
      // Bind popup to marker
      marker.bindPopup(popupContent, {
        maxWidth: 300,
        minWidth: 200
      });
      
      // Store marker reference
      markers.push(marker);
    }
  });
}

// Filter map markers based on search and filter criteria
function filterMarkers() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filter = document.getElementById('filterSelect').value;
  
  // Clear all markers first
  markers.forEach(marker => map.removeLayer(marker));
  markers = [];
  
  // Filter locations
  const filteredLocations = hkLocations.filter(location => {
    const matchesQuery = location.name.toLowerCase().includes(query) || 
                        location.description.toLowerCase().includes(query);
    const matchesFilter = filter === 'all' || 
                          (filter === 'verified' && location.verified) ||
                          (filter === 'top-rated' && location.rating >= 4.5) ||
                          filter === location.category;
    
    return matchesQuery && matchesFilter;
  });
  
  // Add filtered markers with category-specific icons
  const icons = {
    attractions: L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    }),
    restaurants: L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    }),
    shopping: L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })
  };
  
  filteredLocations.forEach(location => {
    // Select icon based on category
    const icon = icons[location.category] || icons.attractions;
    
    // Create marker with custom icon
    const marker = L.marker([location.lat, location.lng], {icon: icon}).addTo(map);
    
    // Find related reviews
    const locationReviews = sampleReviews.filter(review => 
      review.location.toLowerCase() === location.name.toLowerCase() ||
      location.name.toLowerCase().includes(review.location.toLowerCase()) ||
      review.location.toLowerCase().includes(location.name.toLowerCase())
    );
    
    // Create popup content
    let popupContent = `
      <div class="location-popup">
        <h3>${location.name}</h3>
        <p>Rating: ${location.rating} ★ (${location.reviews} reviews)</p>
        <p>${location.description}</p>
        <p class="category-tag ${location.category}">${location.category}</p>
        ${location.verified ? '<span class="verified">Verified</span>' : ''}
    `;
    
    // Add related reviews if available
    if (locationReviews.length > 0) {
      popupContent += `<div class="popup-reviews">
        <h4>User Reviews (${locationReviews.length})</h4>
        <div class="popup-reviews-content">`;
        
      // Add up to 2 reviews in the popup
      locationReviews.slice(0, 2).forEach(review => {
        // Create stars display
        let stars = '';
        for (let i = 1; i <= 5; i++) {
          stars += i <= review.rating ? '★' : '☆';
        }
        
        popupContent += `
          <div class="popup-review">
            <div class="popup-review-header">
              <span class="popup-review-user">${review.user}</span>
              <span class="popup-review-rating">${stars}</span>
            </div>
            <p class="popup-review-text">${review.content.length > 100 ? review.content.substring(0, 100) + '...' : review.content}</p>
          </div>
        `;
      });
      
      popupContent += `</div></div>`;
    }
    
    popupContent += `</div>`;
    
    marker.bindPopup(popupContent, {
      maxWidth: 300,
      minWidth: 200
    });
    
    markers.push(marker);
  });
  
  // Show results count
  console.log(`Found ${filteredLocations.length} locations matching criteria.`);
  
  // If we have results, zoom to fit them
  if (filteredLocations.length > 0) {
    const bounds = filteredLocations.map(loc => [loc.lat, loc.lng]);
    map.fitBounds(bounds);
  }
}

// Create review card element
function createReviewCard(review) {
  const reviewCard = document.createElement('div');
  reviewCard.className = 'review-card';
  
  // Create stars display
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += i <= review.rating ? '★' : '☆';
  }
  
  // 添加預設的讚和踩計數
  review.likes = review.likes || 0;
  review.dislikes = review.dislikes || 0;
  
  reviewCard.innerHTML = `
    <div class="review-header">
      <div class="user-info">
        <img src="${review.avatar}" alt="User" class="user-avatar">
        <div>
          <p>${review.user}</p>
        </div>
      </div>
      <div class="rating">${stars}</div>
    </div>
    <p class="location-name">${review.location}</p>
    <p class="review-content">${review.content}</p>
    <div class="review-footer">
      <p class="review-date">${translations[currentLanguage].postedOn} ${formatDate(review.date)}</p>
      <div class="review-actions">
        <button class="like-btn" data-review-id="${review.id}">
          <i class="like-icon">👍</i>
          <span class="like-count">${review.likes}</span>
        </button>
        <button class="dislike-btn" data-review-id="${review.id}">
          <i class="dislike-icon">👎</i>
          <span class="dislike-count">${review.dislikes}</span>
        </button>
      </div>
    </div>
  `;
  
  // 添加讚和踩的點擊事件
  setTimeout(() => {
    const likeBtn = reviewCard.querySelector('.like-btn');
    const dislikeBtn = reviewCard.querySelector('.dislike-btn');
    
    likeBtn.addEventListener('click', function() {
      handleLikeDislike(review.id, 'like', this);
    });
    
    dislikeBtn.addEventListener('click', function() {
      handleLikeDislike(review.id, 'dislike', this);
    });
  }, 0);
  
  return reviewCard;
}

// 處理讚和踩的功能
function handleLikeDislike(reviewId, action, button) {
  // 找到對應的評論
  let review = null;
  let reviewArray = sampleReviews;
  
  for (let i = 0; i < reviewArray.length; i++) {
    if (reviewArray[i].id === reviewId) {
      review = reviewArray[i];
      break;
    }
  }
  
  if (!review) {
    reviewArray = userReviews;
    for (let i = 0; i < reviewArray.length; i++) {
      if (reviewArray[i].id === reviewId) {
        review = reviewArray[i];
        break;
      }
    }
  }
  
  if (!review) return;
  
  // 獲取當前用戶對此評論的讚/踩狀態
  const reviewsActionState = getReviewActionState();
  const currentState = reviewsActionState[reviewId] || null;
  
  // 更新讚/踩計數
  if (action === 'like') {
    // 檢查當前狀態
    if (currentState === 'like') {
      // 如果已經讚了，則取消讚
      review.likes--;
      reviewsActionState[reviewId] = null;
      button.classList.remove('active');
    } else {
      // 如果還沒讚或已經踩了
      review.likes++;
      if (currentState === 'dislike') {
        // 如果已經踩了，取消踩
        review.dislikes--;
        button.parentNode.querySelector('.dislike-btn').classList.remove('active');
      }
      reviewsActionState[reviewId] = 'like';
      button.classList.add('active');
    }
  } else { // dislike
    if (currentState === 'dislike') {
      // 如果已經踩了，則取消踩
      review.dislikes--;
      reviewsActionState[reviewId] = null;
      button.classList.remove('active');
    } else {
      // 如果還沒踩或已經讚了
      review.dislikes++;
      if (currentState === 'like') {
        // 如果已經讚了，取消讚
        review.likes--;
        button.parentNode.querySelector('.like-btn').classList.remove('active');
      }
      reviewsActionState[reviewId] = 'dislike';
      button.classList.add('active');
    }
  }
  
  // 更新存儲的用戶行為
  saveReviewActionState(reviewsActionState);
  
  // 更新顯示的讚/踩計數
  button.parentNode.querySelector('.like-count').textContent = review.likes;
  button.parentNode.querySelector('.dislike-count').textContent = review.dislikes;
  
  // 如果是自動滾動中的評論，也更新displayedReviews中的讚/踩計數
  for (let i = 0; i < displayedReviews.length; i++) {
    if (displayedReviews[i].id === reviewId) {
      displayedReviews[i].likes = review.likes;
      displayedReviews[i].dislikes = review.dislikes;
      break;
    }
  }
}

// 獲取用戶對評論的讚/踩狀態
function getReviewActionState() {
  const state = localStorage.getItem('reviewActionState');
  return state ? JSON.parse(state) : {};
}

// 保存用戶對評論的讚/踩狀態
function saveReviewActionState(state) {
  localStorage.setItem('reviewActionState', JSON.stringify(state));
}

// 初始化評論讚/踩狀態
function initReviewActions() {
  const reviewsActionState = getReviewActionState();
  
  // 為每個評論卡片添加適當的活躍狀態
  document.querySelectorAll('.review-card').forEach(card => {
    const likeBtn = card.querySelector('.like-btn');
    const dislikeBtn = card.querySelector('.dislike-btn');
    
    if (!likeBtn || !dislikeBtn) return;
    
    const reviewId = parseInt(likeBtn.getAttribute('data-review-id'));
    const state = reviewsActionState[reviewId];
    
    if (state === 'like') {
      likeBtn.classList.add('active');
    } else if (state === 'dislike') {
      dislikeBtn.classList.add('active');
    }
  });
}

// Format date to readable string based on current language
function formatDate(dateStr) {
  const date = new Date(dateStr);
  
  if (currentLanguage === 'zh_CN' || currentLanguage === 'zh_HK') {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  } else {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}

// Load user profile data
function loadUserProfile() {
  // Load user reviews
  const userReviewsContainer = document.getElementById('user-reviews-container');
  userReviewsContainer.innerHTML = '';
  
  userReviews.forEach(review => {
    const reviewElement = createReviewCard(review);
    userReviewsContainer.appendChild(reviewElement);
  });
  
  // Load saved places with enhanced design
  const savedPlacesContainer = document.getElementById('saved-places-container');
  savedPlacesContainer.innerHTML = '';
  
  savedPlaces.forEach(place => {
    const placeElement = createSavedPlaceCard(place);
    savedPlacesContainer.appendChild(placeElement);
  });
  
  // Initialize review actions (likes/dislikes)
  setTimeout(initReviewActions, 100);
}

// Create saved place card with enhanced design
function createSavedPlaceCard(place) {
  const placeCard = document.createElement('div');
  placeCard.className = 'saved-place';
  placeCard.dataset.id = place.id;
  
  let badgeHtml = '';
  if (place.isNew) {
    badgeHtml = `<span class="saved-place-badge">New</span>`;
  }
  
  placeCard.innerHTML = `
    ${badgeHtml}
    <img src="${place.image}" alt="${place.name}">
    <div class="saved-place-content">
      <h4>${place.name}</h4>
      <div class="saved-place-meta">
        <span class="saved-place-category">${place.category}</span>
        <span class="saved-place-rating">${place.rating}</span>
      </div>
      <p class="saved-place-desc">${place.description}</p>
      <div class="saved-place-actions">
        <button class="view-place-btn">View Details</button>
        <button class="remove-place-btn">×</button>
      </div>
    </div>
  `;
  
  // Add event listeners
  setTimeout(() => {
    const viewBtn = placeCard.querySelector('.view-place-btn');
    const removeBtn = placeCard.querySelector('.remove-place-btn');
    
    viewBtn.addEventListener('click', function() {
      // Implement view details functionality
      console.log(`View details for ${place.name}`);
    });
    
    removeBtn.addEventListener('click', function() {
      // Implement remove place functionality
      placeCard.style.opacity = '0';
      setTimeout(() => {
        placeCard.remove();
      }, 300);
      console.log(`Removed ${place.name} from saved places`);
    });
  }, 0);
  
  return placeCard;
}

// Setup all event listeners
function setupEventListeners() {
  // Search button click
  document.getElementById('searchBtn').addEventListener('click', function() {
    filterMarkers();
  });
  
  // Search input enter key
  document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      filterMarkers();
    }
  });
  
  // Filter change
  document.getElementById('filterSelect').addEventListener('change', function() {
    filterMarkers();
  });
  
  // Review form submission
  document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
    
    // Get form values
    const locationName = document.getElementById('locationName').value;
    const reviewText = document.getElementById('reviewText').value;
    const rating = document.getElementById('ratingSelect').value;
    const fileInput = document.getElementById('proofUpload').files[0];
    
    // Validate form (already using HTML5 required attributes as well)
    if (!locationName || !reviewText || !rating || !fileInput) {
      alert(translations[currentLanguage].fillAllFields);
      return;
    }
    
    // In a real app, we would upload the file and submit data to a backend
    console.log("Review submitted:", {
      location: locationName,
      review: reviewText,
      rating: rating,
      file: fileInput.name
    });
    
    // Show success message
    alert(translations[currentLanguage].thankYou);
    
    // Clear form
    document.getElementById('reviewForm').reset();
    
    // Add the review to user's reviews (in a real app this would happen after backend confirmation)
    const newReview = {
      id: Date.now(), // Use timestamp as temporary ID
      location: locationName,
      rating: parseInt(rating),
      content: reviewText,
      date: new Date().toISOString().split('T')[0]  // Today's date in YYYY-MM-DD format
    };
    
    userReviews.unshift(newReview);  // Add to beginning of array
    loadUserProfile();  // Refresh user profile to show new review
  });
}

// Add scroll to section functionality for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId) || document.getElementById(targetId + '-section');
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add AI recommendations functionality
function generateAIRecommendations() {
  // Get the tags container
  const interestTags = document.querySelectorAll('.interest-tag');
  const selectedTagsDisplay = document.getElementById('selected-tags-display');
  const generateItineraryBtn = document.getElementById('generate-itinerary-btn');
  const recommendationsContainer = document.querySelector('.recommendation-cards');
  
  // Track selected tags
  const selectedTags = new Set();
  
  // Add click event to each tag
  interestTags.forEach(tag => {
    tag.addEventListener('click', function() {
      const tagValue = this.getAttribute('data-tag');
      
      if (this.classList.contains('selected')) {
        // Remove tag from selection
        this.classList.remove('selected');
        selectedTags.delete(tagValue);
      } else {
        // Add tag to selection
        this.classList.add('selected');
        selectedTags.add(tagValue);
      }
      
      // Update the selected tags display
      const t = translations[currentLanguage];
      
      if (selectedTags.size === 0) {
        selectedTagsDisplay.textContent = t.noneSelected || 'None selected';
      } else {
        // Transform tag values to translated text
        const translatedTags = Array.from(selectedTags).map(tag => {
          const translationKey = 'tag' + tag.charAt(0).toUpperCase() + tag.slice(1);
          return t[translationKey] || tag;
        });
        
        selectedTagsDisplay.textContent = translatedTags.join(', ');
      }
    });
  });
  
  // Add click event to generate button
  generateItineraryBtn.addEventListener('click', function() {
    const t = translations[currentLanguage];
    
    if (selectedTags.size === 0) {
      alert(t.selectTags || 'Please select at least one interest to generate recommendations.');
      return;
    }
    
    // Show loading animation
    recommendationsContainer.innerHTML = '';
    showAIAnalysis(recommendationsContainer, Array.from(selectedTags));
  });
}

// Show AI analysis animation and generate recommendations
function showAIAnalysis(container, selectedTags) {
  const recommendationsSection = document.getElementById('recommendations');
  const t = translations[currentLanguage];
  
  // Create AI analysis element
  const aiAnalysisElement = document.createElement('div');
  aiAnalysisElement.className = 'ai-analysis';
  
  // Translate the tags for display
  const translatedTags = selectedTags.map(tag => {
    const translationKey = 'tag' + tag.charAt(0).toUpperCase() + tag.slice(1);
    return t[translationKey] || tag;
  });
  
  aiAnalysisElement.innerHTML = `
    <div class="ai-analysis-header">
      <i class="ai-icon">🧠</i>
      <h4 class="ai-title">${t.aiAnalyzing || 'AI analyzing your preferences...'}</h4>
    </div>
    <div class="ai-progress">
      <div class="ai-progress-bar"></div>
    </div>
    <div class="ai-keywords">
      ${translatedTags.map(tag => `<span class="keyword">${tag}</span>`).join('')}
    </div>
  `;
  
  // Add to container
  container.appendChild(aiAnalysisElement);
  
  // Simulate AI analysis progress
  let progress = 0;
  const progressBar = aiAnalysisElement.querySelector('.ai-progress-bar');
  
  const progressInterval = setInterval(() => {
    progress += 5;
    progressBar.style.width = `${progress}%`;
    
    if (progress >= 100) {
      clearInterval(progressInterval);
      
      // Analysis complete
      const aiSummary = document.createElement('div');
      aiSummary.className = 'ai-summary';
      aiSummary.innerHTML = `
        <p>${t.aiCompletedAnalysis || 'Analysis complete! Based on your selected interests, we recommend:'}</p>
      `;
      aiAnalysisElement.appendChild(aiSummary);
      
      // Generate itinerary based on selected tags
      setTimeout(() => {
        generateItineraryFromTags(container, selectedTags);
      }, 800);
    }
  }, 80);
}

// Generate itinerary based on selected tags
function generateItineraryFromTags(container, selectedTags) {
  const t = translations[currentLanguage];
  
  // Sample data for itineraries based on common tag combinations
  const itineraryOptions = {
    "hiking": [
      { title: "Hong Kong Hiking Tour", places: ["Dragon's Back", "Lion Rock", "Victoria Peak Trail"] },
      { title: "Nature Trails", places: ["Lantau Trail", "MacLehose Trail", "Lamma Island Hike"] }
    ],
    "food": [
      { title: "Foodie's Paradise", places: ["Tim Ho Wan", "Temple Street Night Market", "Mong Kok Food Stalls"] },
      { title: "Cantonese Cuisine", places: ["Lin Heung Tea House", "Maxim's Palace", "Yat Lok Restaurant"] }
    ],
    "culture": [
      { title: "Cultural Experience", places: ["Wong Tai Sin Temple", "Man Mo Temple", "Tai Kwun"] },
      { title: "Heritage Tour", places: ["Tian Tan Buddha", "Chi Lin Nunnery", "Sam Tung Uk Museum"] }
    ],
    "nightlife": [
      { title: "Night Out in HK", places: ["Lan Kwai Fong", "SoHo", "Knutsford Terrace"] }
    ],
    "shopping": [
      { title: "Shopping Expedition", places: ["Times Square", "Harbour City", "Ladies Market"] },
      { title: "Luxury Shopping", places: ["IFC Mall", "The Landmark", "Pacific Place"] }
    ],
    "beaches": [
      { title: "Beach Day", places: ["Repulse Bay", "Shek O Beach", "Stanley Beach"] }
    ],
    "history": [
      { title: "Historical Hong Kong", places: ["Hong Kong Museum of History", "Ping Shan Heritage Trail", "Dr Sun Yat-sen Museum"] }
    ],
    "architecture": [
      { title: "Architectural Gems", places: ["Bank of China Tower", "HSBC Building", "ICC Tower"] }
    ],
    "nature": [
      { title: "Natural Wonders", places: ["Hong Kong Geopark", "Mai Po Nature Reserve", "Hong Kong Wetland Park"] }
    ],
    "photography": [
      { title: "Photography Spots", places: ["Montane Mansion", "Victoria Harbour", "Sai Wan Swimming Shed"] }
    ],
    "museums": [
      { title: "Museum Day", places: ["Hong Kong Museum of Art", "Heritage Museum", "Science Museum"] }
    ],
    "markets": [
      { title: "Market Hopping", places: ["Graham Street Market", "Jade Market", "Flower Market"] }
    ]
  };
  
  // Create a custom itinerary based on selected tags
  const routesContainer = document.createElement('div');
  routesContainer.className = 'travel-routes';
  
  // Choose 2 itineraries based on the selected tags
  const selectedItineraries = [];
  let remainingTags = [...selectedTags];
  
  // Prioritize getting at least one itinerary for each tag if possible
  while (selectedItineraries.length < 2 && remainingTags.length > 0) {
    const randomTagIndex = Math.floor(Math.random() * remainingTags.length);
    const tag = remainingTags[randomTagIndex];
    
    // Get itineraries for this tag if available
    if (itineraryOptions[tag] && itineraryOptions[tag].length > 0) {
      const randomItineraryIndex = Math.floor(Math.random() * itineraryOptions[tag].length);
      const selectedItinerary = itineraryOptions[tag][randomItineraryIndex];
      
      // Add to selected itineraries if not already included
      if (!selectedItineraries.some(i => i.title === selectedItinerary.title)) {
        selectedItineraries.push(selectedItinerary);
        
        // Remove this option to avoid duplication
        itineraryOptions[tag].splice(randomItineraryIndex, 1);
      }
    }
    
    // Remove this tag from consideration
    remainingTags.splice(randomTagIndex, 1);
  }
  
  // If we still need more itineraries, pick randomly from all options
  if (selectedItineraries.length < 2) {
    const allItineraries = [];
    for (const tag in itineraryOptions) {
      itineraryOptions[tag].forEach(itinerary => {
        if (!selectedItineraries.some(i => i.title === itinerary.title)) {
          allItineraries.push(itinerary);
        }
      });
    }
    
    while (selectedItineraries.length < 2 && allItineraries.length > 0) {
      const randomIndex = Math.floor(Math.random() * allItineraries.length);
      selectedItineraries.push(allItineraries[randomIndex]);
      allItineraries.splice(randomIndex, 1);
    }
  }
  
  // Create route elements for selected itineraries
  selectedItineraries.forEach(itinerary => {
    const routeElement = document.createElement('div');
    routeElement.className = 'travel-route';
    
    let stopsHTML = '';
    itinerary.places.forEach((place, index) => {
      const time = 9 + index * 2; // Starting at 9:00 AM, each stop 2 hours apart
      const timeFormatted = time < 12 ? 
        `${time}:00 AM` : 
        (time === 12 ? `12:00 PM` : `${time-12}:00 PM`);
      
      stopsHTML += `
        <div class="route-stop">
          <div class="stop-time">${timeFormatted}</div>
          <div class="stop-details">${place}</div>
        </div>
      `;
    });
    
    routeElement.innerHTML = `
      <h3 class="route-title">${itinerary.title}</h3>
      <p class="route-description">${t.routeDescription || 'Explore Hong Kong with this curated itinerary based on your interests.'}</p>
      <div class="route-timeline">
        ${stopsHTML}
      </div>
      <button class="save-route-btn">${t.saveRoute || 'Save Route'}</button>
    `;
    
    routesContainer.appendChild(routeElement);
  });
  
  // Add the routes to the container
  container.appendChild(routesContainer);
  
  // Add save route button functionality
  const saveRouteButtons = routesContainer.querySelectorAll('.save-route-btn');
  saveRouteButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      alert(t.routeSaved || 'Route saved to your profile!');
      this.textContent = t.routeSavedBtn || 'Saved ✓';
      this.disabled = true;
      this.style.background = '#4caf50';
    });
  });
}

// 初始化用户個人檔案頁面
function initializeUserProfile() {
  loadUserProfile();
}

// Handle mobile navigation
function setupMobileNavigation() {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const nav = document.querySelector('nav');
  
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
    });
    
    // Close menu when a navigation link is clicked
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function() {
        hamburgerMenu.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.nav-container') && nav.classList.contains('active')) {
      hamburgerMenu.classList.remove('active');
      nav.classList.remove('active');
    }
  });
}

// Optimize images for mobile
function optimizeImagesForMobile() {
  if (window.innerWidth <= 768) {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading='lazy' for better performance on mobile
      img.setAttribute('loading', 'lazy');
      
      // Add appropriate sizes attribute for responsive images
      if (!img.hasAttribute('sizes')) {
        img.setAttribute('sizes', '(max-width: 768px) 100vw, 300px');
      }
    });
  }
}

// Add touch-friendly interactions
function enhanceTouchInteractions() {
  // Add active state styling for buttons on touch
  const interactiveElements = document.querySelectorAll('button, .interest-tag, .card, nav a');
  
  interactiveElements.forEach(element => {
    element.addEventListener('touchstart', function() {
      this.classList.add('touch-active');
    }, { passive: true });
    
    element.addEventListener('touchend', function() {
      this.classList.remove('touch-active');
    }, { passive: true });
  });
  
  // Disable hover effects on mobile
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.body.classList.add('touch-device');
  }
}

// Enhance scrolling on mobile
function enhanceMobileScrolling() {
  // Smooth scroll to sections when navigating
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Add small delay to allow menu to close first
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop - 60, // Account for fixed header
            behavior: 'smooth'
          });
        }, 100);
      }
    });
  });
}

// Initialize mobile optimizations
function initializeMobileOptimizations() {
  setupMobileNavigation();
  optimizeImagesForMobile();
  enhanceTouchInteractions();
  enhanceMobileScrolling();
  
  // Rerun optimizations when resizing
  window.addEventListener('resize', function() {
    optimizeImagesForMobile();
  });
}

// Document ready event
document.addEventListener('DOMContentLoaded', function() {
  // Initialize map
  initMap();
  
  // Start auto-scrolling reviews
  startReviewsAutoScroll();
  
  // Initialize user profile
  initializeUserProfile();
  
  // Initialize language selector and apply initial language
  initializeLanguageSelector();
  
  // Initialize recommendation tags with translations
  initializeRecommendations();
  
  // Initialize mobile-specific optimizations
  initializeMobileOptimizations();
  
  // Add review form submission event
  document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    handleReviewSubmission();
  });
  
  // Remove any excess elements from the profile section
  cleanupProfileSection();
  
  // Detect touch devices and add appropriate class
  function detectTouchDevice() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
      document.body.classList.add('touch-device');
      return true;
    }
    return false;
  }
  
  const isTouchDevice = detectTouchDevice();
  
  // Add touch-active class for visual feedback on touch
  if (isTouchDevice) {
    const interactiveElements = document.querySelectorAll('a, button, .interest-tag, .card');
    interactiveElements.forEach(element => {
      element.addEventListener('touchstart', function() {
        this.classList.add('touch-active');
      });
      element.addEventListener('touchend', function() {
        this.classList.remove('touch-active');
      });
      element.addEventListener('touchcancel', function() {
        this.classList.remove('touch-active');
      });
    });
    
    // Mobile FAB button functionality
    const fabButton = document.getElementById('add-review-fab');
    if (fabButton) {
      fabButton.addEventListener('click', function() {
        const reviewModal = document.getElementById('review-modal');
        if (reviewModal) {
          reviewModal.style.display = 'block';
        }
      });
    }
  }
  
  // Adjust layout for mobile
  function handleResponsiveLayout() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      // Mobile layout adjustments
      const map = document.getElementById('map');
      if (map) {
        map.style.height = '40vh';
      }
    } else {
      // Desktop layout resets
      const map = document.getElementById('map');
      if (map) {
        map.style.height = '';
      }
    }
  }
  
  // Run once on load and then on resize
  handleResponsiveLayout();
  window.addEventListener('resize', handleResponsiveLayout);
});

// Initialize recommendation tags with current language
function initializeRecommendations() {
  // Set up AI recommendations
  generateAIRecommendations();
  
  // Apply initial translations to interest tags
  if (document.querySelector('.interest-tags')) {
    const t = translations[currentLanguage];
    
    const interestTags = document.querySelectorAll('.interest-tag');
    interestTags.forEach(tag => {
      const tagType = tag.getAttribute('data-tag');
      const translationKey = 'tag' + tagType.charAt(0).toUpperCase() + tagType.slice(1);
      if (t[translationKey]) {
        tag.textContent = t[translationKey];
      }
    });
    
    // Update button text
    const generateButton = document.getElementById('generate-itinerary-btn');
    if (generateButton) {
      generateButton.textContent = t.generateItinerary || 'Generate My Itinerary';
    }
    
    // Update heading and selected tags container
    const tagSelectionHeading = document.querySelector('.tag-selection-container h3');
    if (tagSelectionHeading) {
      tagSelectionHeading.textContent = t.selectInterests || 'Select interests to get personalized recommendations';
    }
    
    const selectedTagsContainer = document.querySelector('.selected-tags-container p');
    if (selectedTagsContainer) {
      selectedTagsContainer.innerHTML = `${t.selectedInterests || 'Your selected interests:'} <span id="selected-tags-display">${t.noneSelected || 'None selected'}</span>`;
    }
  }
} 