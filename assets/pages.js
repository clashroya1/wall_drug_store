(() => {
  const A = 'www.walldrug.com/assets/images/uploads/';

  const articles = [
    {
      slug: 'travelers-chapel', year: '2022', date: 'August 4, 2022',
      title: "The History of Wall Drug’s Famous Traveler’s Chapel",
      excerpt: 'The quiet sanctuary tucked into the Western Mall—and the family idea that placed it there.',
      image: `${A}chapel-window-2.jpg`,
      source: 'www.walldrug.com/news/article/the-history-of-wall-drug-stores-famous-travelers-chapel-538/index.html'
    },
    {
      slug: 'road-trip-playlist', year: '2022', date: 'June 9, 2022',
      title: 'Wall Drug Road Trip Essential Listening',
      excerpt: 'A road-tested soundtrack for long highways, open skies and the miles between here and there.',
      image: `${A}roadtrip.png`,
      source: 'www.walldrug.com/news/article/wall-drug-store-road-trip-essential-listening-a-playlist-935/index.html'
    },
    {
      slug: 'badlands-on-a-dime', year: '2022', date: 'June 6, 2022',
      title: 'Wall & Badlands Vacations on a Dime',
      excerpt: 'Big prairie views and family-friendly discoveries without a big vacation budget.',
      image: `${A}0bk.png`,
      source: 'www.walldrug.com/news/article/wall-sd-and-badlands-national-park-vacations-on-a-dime-140/index.html'
    },
    {
      slug: 'must-see-road-trip-stop', year: '2022', date: 'January 18, 2022',
      title: 'The Must-See Stop on Your South Dakota Road Trip',
      excerpt: 'Photo ops, legendary food, Western hospitality and plenty of reasons to pull over.',
      image: `${A}signs/wall-drug-billboards-0020-img-1483.jpg`,
      source: 'www.walldrug.com/news/article/wall-drug-store-the-must-see-stop-on-your-2022-road-trip-547/index.html'
    },
    {
      slug: 'ten-things', year: '2021', date: 'December 2, 2021',
      title: 'Ten Things You Didn’t Know About Wall Drug',
      excerpt: 'From a $3,000 inheritance to nearly a million homemade donuts a year.',
      image: `${A}historic/wall-drug-ted-and-dorothy-hustead.jpg`,
      source: 'www.walldrug.com/news/article/ten-things-you-didn-know-about-wall-drug-store-879/index.html'
    },
    {
      slug: 'thankful-for', year: '2021', date: 'November 17, 2021',
      title: 'The Things We Are Thankful For',
      excerpt: 'Family legacy, old-fashioned values and generations of travelers who became part of the story.',
      image: `${A}martin-donut-photo.jpg`,
      source: 'www.walldrug.com/news/article/wall-drug-store-the-things-we-are-thankful-for-787/index.html'
    },
    {
      slug: 'gift-guide', year: '2021', date: 'October 22, 2021',
      title: 'The Ultimate Wall Drug Gift Guide',
      excerpt: 'Western keepsakes, regional craftsmanship and something memorable for everyone back home.',
      image: `${A}shopping/wall-drug-shopping.jpg`,
      source: 'www.walldrug.com/news/article/the-ultimate-wall-drug-store-gift-giving-guide-284/index.html'
    },
    {
      slug: 'forgot-something', year: '2021', date: 'August 30, 2021',
      title: 'You Forgot Something at Wall Drug!',
      excerpt: 'How to bring a little piece of the West home—even after your road trip is over.',
      image: `${A}pages/visit/wall-drug-exterior-planning-your-trip-2000x1230.jpg`,
      source: 'www.walldrug.com/news/article/you-forgot-something-at-wall-drug-store-545/index.html'
    },
    {
      slug: 'sturgis-oasis', year: '2021', date: 'July 23, 2021',
      title: 'An Oasis for Sturgis Rally-Goers',
      excerpt: 'A place to cool down, fuel up and stretch your legs along I-90.',
      image: `${A}store-front.jpg`,
      source: 'www.walldrug.com/news/article/wall-drug-store-an-oasis-for-sturgis-rally-goers-704/index.html'
    },
    {
      slug: 'miles-to-wall-drug', year: '2021', date: 'June 21, 2021',
      title: 'How Many Miles to Wall Drug?',
      excerpt: 'A guide to the must-see attractions surrounding Western South Dakota’s favorite stop.',
      image: `${A}signs/wall-drug-billboards-0000-img-1509.jpg`,
      source: 'www.walldrug.com/news/article/how-many-miles-to-wall-drug-a-guide-to-must-see-attractions-near-wall-drug-store-567/index.html'
    }
  ];

  const pages = {
    story: {
      eyebrow: 'Our Story · Since 1931', title: 'The idea that put Wall on the map.',
      intro: 'A little faith, a lot of grit and one irresistible promise turned a struggling prairie pharmacy into an American roadside legend.',
      image: `${A}historic/wall-drug-storefront.jpg`,
      stats: [['1931', 'Ted & Dorothy arrive'], ['1936', 'Free ice water signs'], ['2M+', 'Travelers each year']],
      sections: [
        { kicker: 'The beginning', title: 'A store on the edge of the Badlands', body: ["In December 1931, Ted and Dorothy Hustead bought the only drugstore in a town of 326 people. The Depression was tightening its grip and business was slow, but they believed a small town with a church and good neighbors was the right place to build a life.", 'For five years they filled prescriptions, helped local families and watched travelers pass on the highway without turning into town.'], image: `${A}pages/home/img-homepage-original-store-resized.jpg` },
        { kicker: 'Summer 1936', title: 'Dorothy heard the traffic—and found the answer', body: ['On a hot Sunday, Dorothy noticed the steady roar of cars headed toward the Black Hills. Those travelers were thirsty. Her idea was wonderfully simple: offer them ice water, free.', 'Ted painted a sequence of Burma-Shave-style signs and placed them along Route 16. By the time he returned, Dorothy was already pouring water for a crowd.'], image: `${A}historic/wall-drug-ted-and-dorothy-hustead.jpg` },
        { kicker: 'The promise lives on', title: 'Hospitality became the destination', body: ['The pharmacy grew into a block-long landmark with food, Western art, shopping and family attractions—but the original promise never changed. The water is still cold. The coffee is still five cents. Travelers are still welcome.'], image: `${A}free-ice-water/free-ice-water-husteads-wall-drug-1368x1039.jpg` }
      ],
      quote: '“Free Ice Water · Wall Drug · Wall, S.D.”',
      related: [{ route: 'signs', label: 'The signs', title: 'How six words traveled around the world', image: `${A}signs/wall-drug-billboards-0020-img-1483.jpg` }, { route: 'city', label: 'Our hometown', title: 'Meet Wall, the window to the West', image: `${A}city/wall-drug-city-of-wall-south-dakota-1914x2000.jpg` }]
    },
    signs: {
      eyebrow: 'Hand-painted history', title: 'How many miles to Wall Drug?',
      intro: 'From South Dakota highways to London, Morocco and the North Pole, Wall Drug signs have spent generations turning distance into anticipation.',
      image: `${A}signs/wall-drug-billboards-0020-img-1483.jpg`,
      stats: [['1936', 'First highway signs'], ['20+ mi', 'Early sign radius'], ['Worldwide', 'A message carried far']],
      sections: [
        { kicker: 'The first jingle', title: 'A roadside invitation becomes an icon', body: ['Dorothy’s first hand-lettered message offered travelers a soda, a root beer and free ice water just ahead. The cars began turning in almost immediately.', 'Ted worked with landowners and kept expanding the trail of signs. Their short rhymes made the miles feel smaller—and made Wall Drug impossible to forget.'], image: `${A}signs/billboards/dsc00683.jpg` },
        { kicker: 'Around the world', title: 'Every sign points back to Wall', body: ['During World War II, service members carried the message overseas. Later signs appeared in famous places across Europe, Africa and beyond, each one proudly reporting the distance home to Wall Drug.', 'The billboards remain hand-painted today, keeping a piece of folk art alive on the open road.'], image: `${A}pages/history/signs/wall-drug-historic-sign--taj-mahal-india.jpg` }
      ],
      gallery: [`${A}signs/billboards/dsc00653.jpg`, `${A}signs/billboards/dsc00663.jpg`, `${A}signs/billboards/dsc00673.jpg`, `${A}signs/billboards/dsc00689.jpg`, `${A}signs/billboards/dsc00698.jpg`, `${A}pages/history/signs/wall-drug-great-wall-of-china.jpg`],
      cta: { label: 'Share your sign', text: 'Tag your road-trip photo with #MilestoWallDrug.', href: 'https://www.instagram.com/walldrug/' }
    },
    explore: {
      eyebrow: 'Things to do', title: 'One stop. A whole world of wonder.',
      intro: 'Come for a cold drink and stay for the homemade food, Western treasures, backyard legends and only-at-Wall-Drug photo ops.',
      image: `${A}images-2022/bk6a0589.jpg`,
      cards: [
        { route: 'dining', label: 'Eat', title: 'Western Art Gallery Restaurant', text: 'Homemade donuts, buffalo burgers, hot beef sandwiches and 5¢ coffee.', image: `${A}food/wall-drug-children-enjoying-hardy-meal-2000x1333.jpg` },
        { route: 'shopping', label: 'Browse', title: 'The Wall Drug Mall', text: 'Regional craftsmanship, Western wear, books, boots, jewelry and road-trip necessities.', image: `${A}shopping/wall-drug-shopping.jpg` },
        { route: 'backyard', label: 'Play', title: 'The Backyard', text: 'A roaring T-Rex, giant jackalope, jumping water and plenty of room to roam.', image: `${A}backyard/wall-drug-backyard-mount-rushmore-2000x1333.jpg` },
        { route: 'map', label: 'Find your way', title: 'Interactive Store Map', text: 'Zoom, pan and discover what is waiting around every corner.', image: `${A}map/walldrug-map.jpg` }
      ]
    },
    dining: {
      eyebrow: 'Eat at Wall Drug', title: 'Road-trip comfort, made from scratch.',
      intro: 'Pull up a chair in the Western Art Gallery Restaurant for famous donuts, hearty plates, old-fashioned sweets and coffee that is still just a nickel.',
      image: `${A}wall-drug-family-eating-at-western-art-gallery-restaurant-2000x1499.jpg`,
      stats: [['530', 'Dining room seats'], ['300+', 'Original artworks'], ['5¢', 'A cup of coffee']],
      sections: [
        { kicker: 'The classics', title: 'Made for hungry travelers', body: ['Start with a homemade donut or roll, then settle in for a legendary hot beef sandwich with mashed potatoes and gravy, a buffalo burger, or a family breakfast. A full kids’ menu keeps little travelers happy too.'], image: `${A}images-2022/bk6a0717.jpg` },
        { kicker: 'Save room', title: 'The old-fashioned Soda Fountain', body: ['Seasonal favorites include homemade hard- and soft-serve ice cream, floats, sundaes, shakes and malts—the kind of treats that have made road-trip memories here since the early 1930s.'], image: `${A}images-2022/bk6a0249.jpg` },
        { kicker: 'Look around', title: 'A museum with your meal', body: ['The dining rooms hold more than 300 original Western paintings and illustrations collected by the Hustead family, including work by N.C. Wyeth, Harvey Dunn, Gutzon Borglum and Oscar Howe.'], image: `${A}paintings/wall-drug-restaurant-art-gallery-0002-dsc00566.jpg` }
      ],
      cta: { label: 'Next stop', text: 'See everything waiting in the Backyard.', href: '#backyard' }
    },
    shopping: {
      eyebrow: 'Shop the West', title: 'Bring home something with a story.',
      intro: 'Nearly 50,000 square feet of Western character—from practical road supplies to regional jewelry, handmade goods and souvenirs worth keeping.',
      image: `${A}shopping/wall-drug-shopping.jpg`,
      stats: [['50K', 'Square feet of shopping'], ['1931', 'Original pharmacy roots'], ['One stop', 'For every traveler']],
      sections: [
        { kicker: 'Western Mall', title: 'Old West storefronts, real regional craft', body: ['Browse Black Hills Gold, Native American jewelry, Western apparel, hats, leather boots and belts, moccasins, books and gifts for every age.'], image: `${A}images-2022/bk6a0689.jpg` },
        { kicker: 'The original spirit', title: 'A pharmacy inside a destination', body: ['The working pharmacy and Apothecary Shop preserve the feeling of the original 1931 store while stocking the travel essentials families still need on the road.'], image: `${A}historic/wall-drug-1951.jpg` },
        { kicker: 'Can’t fit it in the car?', title: 'The West can ship', body: ['Find Wall Drug favorites, apparel and gifts online when the suitcase is full—or when you want to send a little road-trip joy to someone back home.'], image: `${A}images-2022/bk6a0502.jpg` }
      ],
      cta: { label: 'Shop from anywhere', text: 'Visit the official Wall Drug online store.', href: 'https://shop.walldrug.com/' }
    },
    backyard: {
      eyebrow: 'Family adventure', title: 'The wildest backyard in South Dakota.',
      intro: 'Stretch your legs, cool off and make the kind of wonderfully strange family photos that get talked about for years.',
      image: `${A}activities/wall-drug-family-running-from-t-rex-animatronics-display-1333x2000.jpg`,
      stats: [['6 ft', 'Legendary rabbit'], ['1,400+', 'Historic photos'], ['1 giant', 'Jackalope']],
      sections: [
        { kicker: 'Play', title: 'T-Rexes, water jets and giant legends', body: ['Meet the roaring T-Rex, pose by mini Mount Rushmore, climb aboard the giant jackalope and cool down at the Train Station Water Show.'], image: `${A}backyard/wall-drug-backyard-sign-2000x1333.jpg` },
        { kicker: 'Discover', title: 'Pan for a prairie treasure', body: ['Young prospectors can pan for gemstones and explore the Wall Drug Mining Company, a paleontology shop filled with fossil casts and Jurassic replicas.'], image: `${A}images-2022/bk6a0007.jpg` },
        { kicker: 'Unwind', title: 'A pause for the grown-ups too', body: ['Find a shady courtyard, grab a coffee or snack from the Prairie Parlor and wander through more than 1,400 historic photographs of South Dakota.'], image: `${A}images-2022/bk6a0731.jpg` }
      ],
      cta: { label: 'Know before you roam', text: 'Open the interactive Wall Drug map.', href: '#map' }
    },
    visit: {
      eyebrow: 'Plan your visit', title: 'The best kind of detour.',
      intro: 'Right off I-90 and eight miles north of Badlands National Park, Wall Drug is an easy stop to make—and a hard one to forget.',
      image: `${A}pages/visit/wall-drug-exterior-planning-your-trip-2000x1230.jpg`,
      stats: [['Exit 109', 'From the east'], ['Exit 110', 'From the west'], ['8 miles', 'To Badlands National Park']],
      cards: [
        { route: 'map', label: 'Start here', title: 'Maps & Directions', text: 'Find the store, zoom around the grounds and map your route.', image: `${A}attractions-map.jpg` },
        { route: 'badlands', label: '8 miles away', title: 'Badlands National Park', text: 'Otherworldly formations, overlooks, hikes and wildlife just south of town.', image: `${A}pages/badlands-national-park/wall-drug-entrance-to-badlands-national-park-2-2000x2000.jpg` },
        { route: 'minuteman', label: 'Cold War history', title: 'Minuteman Missile', text: 'Three National Park Service sites along a 15-mile stretch of I-90.', image: `${A}pages/minuteman-missile-site/800px-minuteman-iii-in-silo-1989.jpg` },
        { route: 'city', label: 'Our hometown', title: 'The City of Wall', text: 'A small town with a big personality at the gateway to the Badlands.', image: `${A}city/wall-drug-city-of-wall-south-dakota-1914x2000.jpg` },
        { route: 'bus-tours', label: 'Traveling together', title: 'Bus & Group Tours', text: 'Simple arrival information and space for groups to stop together.', image: `${A}wall-bus-map-1.jpg` }
      ],
      sections: [{ kicker: 'Today’s details', title: 'Hours & address', body: ['Main Store: 8:00 AM–8:00 PM daily', 'Cafe: 8:00 AM–7:00 PM daily', 'Mall Shops: 8:30 AM–7:30 PM daily', 'Pharmacy: 8:30 AM–5:00 PM Monday–Friday', '510 Main Street, Wall, South Dakota 57790 · 605-279-2175'], image: `${A}wall-drug-storefront.jpg` }]
    },
    badlands: {
      eyebrow: 'Eight miles south', title: 'Welcome to another world.',
      intro: 'Wall is the northern gateway to Badlands National Park—a landscape of layered rock, open prairie, winding roads and enormous sky.',
      image: `${A}pages/badlands-national-park/wall-drug-entrance-to-badlands-national-park-3-2000x2000.jpg`,
      stats: [['8 miles', 'From Wall Drug'], ['Hwy 240', 'Scenic Loop Road'], ['All day', 'Big views']],
      sections: [
        { kicker: 'Take the scenic way', title: 'Overlooks made for pulling over', body: ['Enter through the Pinnacles Entrance south of Wall and follow Highway 240 through dramatic formations and wide-open overlooks with convenient parking.'], image: `${A}pages/badlands-national-park/wall-drug-entrance-to-badlands-national-park-4-2000x2000.jpg` },
        { kicker: 'Travel ready', title: 'Water first. Wonder next.', body: ['Fill up, check the weather and trail conditions, and carry plenty of water. The landscape is beautiful, exposed and quick to change. Stop at the National Park Service visitor center for current guidance.'], image: `${A}wall-drug-entrance-to-badlands-national-park-3-2000x2000.jpg` }
      ],
      cta: { label: 'Official park information', text: 'Check current conditions at the National Park Service.', href: 'https://www.nps.gov/badl/' }
    },
    minuteman: {
      eyebrow: 'Minutes east on I-90', title: 'A quiet prairie. A powerful history.',
      intro: 'Minuteman Missile National Historic Site preserves key places and stories from the Cold War across western South Dakota.',
      image: `${A}pages/minuteman-missile-site/800px-minuteman-iii-in-silo-1989.jpg`,
      stats: [['3 sites', 'Across the park'], ['15 miles', 'Along Interstate 90'], ['1963–91', 'Years on alert']],
      sections: [
        { kicker: 'Three places, one story', title: 'Visitor Center · Delta-01 · Delta-09', body: ['Begin at the visitor center for exhibits and orientation, then see a preserved launch control facility and missile silo. Depending on your schedule, a visit can take from half an hour to half a day.', 'Guided access and operating hours can change, so check the National Park Service before your trip.'], image: `${A}images-2022/bk6a0069.jpg` }
      ],
      cta: { label: 'Plan with the park', text: 'View current hours, tours and reservations.', href: 'https://www.nps.gov/mimi/' }
    },
    city: {
      eyebrow: 'Our hometown', title: 'Small town. Huge personality.',
      intro: 'Once called the “geographical center of nowhere,” Wall is now the window to the West and the northern gateway to the Badlands.',
      image: `${A}city/wall-drug-city-of-wall-south-dakota-1914x2000.jpg`,
      stats: [['1907', 'Railroad town founded'], ['I-90', 'Exits 109 & 110'], ['8 miles', 'North of the Badlands']],
      sections: [
        { kicker: 'A prairie town', title: 'Built by neighbors and open roads', body: ['Wall began along the Chicago & North Western Railway and grew as roads brought more travelers toward the Badlands and Black Hills. Wall Drug and the town grew up together, sharing the same welcoming spirit.'], image: `${A}images-2022/bk6a1196.jpg` },
        { kicker: 'Stay awhile', title: 'More than a place to pass through', body: ['The town offers lodging, parks, recreation and easy access to some of western South Dakota’s most memorable landscapes. Peak travel season runs from May through August, so booking early is wise.'], image: `${A}images-2022/209.jpg` }
      ]
    },
    'bus-tours': {
      eyebrow: 'Group travel', title: 'A legendary stop for the whole bus.',
      intro: 'Wall Drug has welcomed motor coaches and tour groups for generations, with simple access from I-90 and plenty to explore under one roof.',
      image: `${A}wall-bus-map-1.jpg`,
      sections: [
        { kicker: 'Arrive with ease', title: 'Easy access for drivers and groups', body: ['Use the group arrival maps to approach Wall Drug and downtown Wall. For current coordination, parking details or a large-group visit, contact the Wall Drug team at 605-279-2175.'], image: `${A}wall-map-1.jpg` },
        { kicker: 'Make it yours', title: 'Food, shopping and photo stops together', body: ['Groups can enjoy the Western Art Gallery Restaurant, the Mall and Backyard attractions at their own pace—all within a compact walkable destination.'], image: `${A}images-2022/bk6a0318.jpg` }
      ],
      cta: { label: 'Coordinate a visit', text: 'Call 605-279-2175 or contact the team.', href: '#contact' }
    },
    careers: {
      eyebrow: 'Join the family', title: 'Work where the West welcomes everyone.',
      intro: 'Carry on a family tradition that began in the 1930s with seasonal and year-round roles in retail, food service and maintenance.',
      image: `${A}employment/wall-drug-employment-2000x2000.jpg`,
      stats: [['3 areas', 'Retail · Restaurant · Maintenance'], ['Seasonal', 'And year-round roles'], ['Since 1931', 'A family tradition']],
      cards: [
        { route: 'student-jobs', label: 'Students', title: 'A summer out West', text: 'Build skills, meet people and experience a one-of-a-kind season in Wall.', image: `${A}employment/wall-drug-employee.jpg` },
        { route: 'adult-jobs', label: 'Adults', title: 'Seasonal & year-round roles', text: 'Customer-focused work, attractive pay and opportunities across the store.', image: `${A}employment/wall-drug-employment-2000x2000.jpg` },
        { route: 'application', label: 'Ready?', title: 'Apply to Wall Drug', text: 'Complete the original employment application securely online.', image: `${A}historic/wall-drug-ted-bill-rick-storefront.jpg` }
      ],
      sections: [{ kicker: 'What matters here', title: 'Hospitality is the job', body: ['Customer service, teamwork, dependability and strong ethics guide every position. Employees may receive in-store discounts, housing options, access to local events and the chance to become part of a much-loved South Dakota tradition.'], image: `${A}employment/wall-drug-employee.jpg` }]
    },
    'adult-jobs': {
      eyebrow: 'Careers · Adults', title: 'Bring your best to the busiest season.',
      intro: 'Seasonal and year-round opportunities pair hard work with a lively environment, welcoming teammates and a summer in western South Dakota.',
      image: `${A}employment/wall-drug-employee.jpg`,
      sections: [
        { kicker: 'Seasonal benefits', title: 'Work hard. Explore the West.', body: ['Most seasonal team members work three to four months. Depending on the role, Wall Drug offers attractive pay, overtime opportunity, safe and affordable housing options, store discounts and time to experience the surrounding region.'], image: `${A}employment/wall-drug-employment-2000x2000.jpg` },
        { kicker: 'The roles', title: 'Find where you fit', body: ['Opportunities are typically available in retail sales, restaurant service and maintenance. Every role calls for dependable teammates who enjoy helping guests.'], image: `${A}images-2022/bk6a0381.jpg` }
      ], cta: { label: 'Take the next step', text: 'Open the Wall Drug employment application.', href: '#application' }
    },
    'student-jobs': {
      eyebrow: 'Careers · Students', title: 'Make your summer a story.',
      intro: 'Spend a season building real-world skills with a team that welcomes thousands of travelers from around the world.',
      image: `${A}employment/wall-drug-employment-2000x2000.jpg`,
      sections: [
        { kicker: 'April through September', title: 'A summer job with room to grow', body: ['The busiest season offers students experience in customer service, teamwork and day-to-day operations across retail, restaurant and maintenance roles.', 'Seasonal employees can enjoy competitive pay, possible overtime, affordable housing options, store discounts and access to local events.'], image: `${A}employment/wall-drug-employee.jpg` }
      ], cta: { label: 'Apply today', text: 'Complete the Wall Drug employment application.', href: '#application' }
    },
    map: { type: 'map', eyebrow: 'Find your way', title: 'The whole wonder, at your fingertips.', intro: 'Zoom and pan across Wall Drug, then open road directions when you are ready to roll.', image: `${A}map/walldrug-map.jpg` },
    journal: { type: 'journal', eyebrow: 'The Backyard Bulletin', title: 'Stories from the road.', intro: 'Trip ideas, hidden histories and the wonderfully unexpected details that make Wall Drug worth the detour.', image: `${A}signs/wall-drug-billboards-0000-img-1509.jpg` },
    contact: { type: 'contact', eyebrow: 'Contact Wall Drug', title: 'Give us a holler.', intro: 'Questions about a visit, a group, a lost item or something else? We would be glad to hear from you.', image: `${A}wall-drug-storefront.jpg` },
    application: { type: 'application', eyebrow: 'Join the family', title: 'Wall Drug employment application.', intro: 'Apply for a student, seasonal or year-round position and help welcome the next generation of travelers.', image: `${A}employment/wall-drug-employment-2000x2000.jpg` }
  };

  window.WALL_DRUG = { pages, articles, assetRoot: A };
})();
