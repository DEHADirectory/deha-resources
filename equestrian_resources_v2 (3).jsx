import React, { useState, useMemo, useEffect } from 'react';
import { MapPin, Calendar, Plus, X, Edit2, Save, Search } from 'lucide-react';

const EquestrianResources = () => {
  const defaultResources = [
    {
      id: 1,
      name: "Steve Wiberg Horseshoeing",
      category: "Farrier",
      city: "Woodside",
      phone: "(650) 854-3162",
      email: "",
      website: "farrierstevewiberg.com",
      description: "63 years of specialized equine expertise, delivering prompt and reliable hoof care. Serving all Bay Area counties.",
      lat: 37.4299,
      lng: -122.2538
    },
    {
      id: 2,
      name: "Bitar Farrier Services",
      category: "Farrier",
      city: "San Francisco",
      phone: "",
      email: "",
      website: "",
      description: "Professional farrier services in San Francisco",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 3,
      name: "Kahuanui Farrier Service",
      category: "Farrier",
      city: "San Francisco",
      phone: "",
      email: "",
      website: "",
      description: "Excellent farrier, reliable and professional. Great with all horses including ponies.",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 4,
      name: "Natural Choice Hoof Care",
      category: "Barefoot Trimmer",
      city: "San Francisco",
      phone: "",
      email: "",
      website: "",
      description: "California Bay Area's choice for all natural alternatives in hoof care",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 5,
      name: "Bayhill Equine",
      category: "Veterinarian",
      city: "San Francisco Peninsula",
      phone: "",
      email: "",
      website: "bayhillequine.com",
      description: "Sports medicine specialized, fully ambulatory practice. Specializes in prepurchase exams, lameness, radiography, regenerative medicine therapies, and ultrasound.",
      lat: 37.4500,
      lng: -122.1800
    },
    {
      id: 6,
      name: "Steinbeck Peninsula Equine Clinics",
      category: "Large Animal Hospital",
      city: "Menlo Park",
      phone: "(650) 854-3162",
      email: "",
      website: "steinbeckpeninsulaequine.com",
      description: "State-of-the-art equine hospitals providing primary care, diagnostics, internal medicine, surgery, sports medicine and therapy.",
      lat: 37.4530,
      lng: -122.1817
    },
    {
      id: 7,
      name: "Steinbeck Peninsula Equine Clinics - Salinas",
      category: "Large Animal Hospital",
      city: "Salinas",
      phone: "(831) 455-1808",
      email: "",
      website: "steinbeckpeninsulaequine.com",
      description: "State-of-the-art equine hospital serving Monterey Bay to San Francisco area",
      lat: 36.6777,
      lng: -121.6555
    },
    {
      id: 66,
      name: "UC Davis Veterinary Medicine-Large Animal Hospital",
      category: "Large Animal Hospital",
      city: "Davis",
      phone: "",
      email: "",
      website: "vetmed.ucdavis.edu",
      description: "World-renowned veterinary medical teaching hospital providing advanced equine care and specialty services.",
      lat: 38.5382,
      lng: -121.7617
    },
    {
      id: 67,
      name: "Pioneer Equine Hospital",
      category: "Large Animal Hospital",
      city: "Oakdale",
      phone: "",
      email: "",
      website: "",
      description: "Large animal hospital providing comprehensive equine veterinary services.",
      lat: 37.7666,
      lng: -120.8471
    },
    {
      id: 8,
      name: "Dr. Douglas Novick DVM",
      category: "Veterinarian",
      city: "Silicon Valley",
      phone: "",
      email: "",
      website: "novickdvm.com",
      description: "Mobile veterinary care, emergency care and pre-purchase examinations. Specializes in equine sports medicine, dentistry and reproduction.",
      lat: 37.3688,
      lng: -122.0363
    },
    {
      id: 9,
      name: "Starwood Equine Veterinary Services",
      category: "Veterinarian",
      city: "Woodside",
      phone: "",
      email: "",
      website: "starwoodequine.com",
      description: "Full service equine ambulatory practice with locations in Woodside and East Bay. Comprehensive veterinary care and health management services.",
      lat: 37.4299,
      lng: -122.2538
    },
    {
      id: 10,
      name: "Circle Oak Equine (Petaluma Equine)",
      category: "Veterinarian",
      city: "Petaluma",
      phone: "",
      email: "",
      website: "circleoakequine.com",
      description: "Full service veterinary practice featuring sports medicine, diagnostic imaging, elective surgery, and the Bay Area's only standing MRI.",
      lat: 38.2324,
      lng: -122.6367
    },
    {
      id: 11,
      name: "Kari DeLeeuw DVM - Bay Area Equine Holistic Medicine",
      category: "Veterinarian",
      city: "Bay Area",
      phone: "",
      email: "",
      website: "equineholisticvetmed.com",
      description: "Full range of holistic care for horses. Specializes in acupuncture, chiropractic, and holistic medicine.",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 57,
      name: "Renee Golenz DVM",
      category: "Veterinarian",
      city: "Brentwood",
      phone: "",
      email: "",
      website: "",
      description: "Equine veterinary services in Brentwood",
      lat: 37.9318,
      lng: -121.6958
    },
    {
      id: 12,
      name: "Rancho Viejo Boarding Stables",
      category: "Boarding Facility",
      city: "Portola Valley",
      phone: "",
      email: "",
      website: "ranchoviejostables.com",
      description: "Well-kept private boarding facility between San Francisco and San Jose. Great horse care, fantastic arena footing, friendly low-key barn.",
      lat: 37.3841,
      lng: -122.2094
    },
    {
      id: 13,
      name: "Ocean View Stables",
      category: "Boarding Facility",
      city: "San Francisco",
      phone: "",
      email: "",
      website: "oceanviewstables.com",
      description: "Horseback riding to the beach, horsemanship school, kids camps, lesson programs, boarding facility. Minutes from San Francisco Zoo.",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 14,
      name: "Skyline Ranch Equestrian Center",
      category: "Boarding Facility",
      city: "Oakland",
      phone: "(510) 336-0850",
      email: "",
      website: "skyline-ranch.com",
      description: "English riding and boarding facility in Oakland Hills. Part of East Bay Regional Park system. Training for riders and horses of all levels.",
      lat: 37.8044,
      lng: -122.2712
    },
    {
      id: 15,
      name: "Sheridan Equestrian Center",
      category: "Boarding Facility",
      city: "Fremont",
      phone: "",
      email: "",
      website: "",
      description: "Located off 680 between Fremont and Sunol. Indoor and outdoor arenas, round pens, multiple turnouts, trainers on site.",
      lat: 37.5485,
      lng: -121.9886
    },
    {
      id: 16,
      name: "Mar Vista Stables",
      category: "Boarding Facility",
      city: "Daly City",
      phone: "",
      email: "",
      website: "marvistastable.com",
      description: "Historic Bay Area stable on Thornton State Beach. Boarding, lessons, summer camps, beach trail rides.",
      lat: 37.6879,
      lng: -122.4702
    },
    {
      id: 17,
      name: "Kheystone Stables",
      category: "Boarding Facility",
      city: "Oakland",
      phone: "",
      email: "",
      website: "kheystonestables.org",
      description: "Premier horse boarding and training in East Bay at Anthony Chabot Equestrian Center and Las Trampas Stables.",
      lat: 37.8044,
      lng: -122.2712
    },
    {
      id: 54,
      name: "CMDTRA",
      category: "Boarding Facility",
      city: "Clayton",
      phone: "",
      email: "",
      website: "",
      description: "Boarding facility and equestrian community organization",
      lat: 37.9405,
      lng: -121.9358
    },
    {
      id: 18,
      name: "Carousel Saddlery",
      category: "Tack Store",
      city: "Portola Valley",
      phone: "",
      email: "",
      website: "carouselsaddlery.com",
      description: "Full service English tack shop serving the Bay Area for over 30 years. Wide range of products from beginners through professionals.",
      lat: 37.3841,
      lng: -122.2094
    },
    {
      id: 19,
      name: "Dover Saddlery",
      category: "Tack Store",
      city: "Moraga",
      phone: "",
      email: "",
      website: "stores.doversaddlery.com/california/moraga-ca",
      description: "Expansive collection of English equestrian supplies. Riding apparel, horse blankets, saddles, bridles, dressage supplies, and stable equipment.",
      lat: 37.8349,
      lng: -122.1294
    },
    {
      id: 20,
      name: "Western Saddlery",
      category: "Tack Store",
      city: "Pleasanton",
      phone: "",
      email: "",
      website: "",
      description: "Large warehouse with horse care, feed, English and Western tack, apparel, and custom tack trunks. Family owned with excellent customer service.",
      lat: 37.6624,
      lng: -121.8747
    },
    {
      id: 21,
      name: "Rowell's Saddlery",
      category: "Tack Store",
      city: "Castro Valley",
      phone: "",
      email: "",
      website: "",
      description: "Since 1941. Western wear and accessories, basic horse care items, leather/saddle/bridle repair, and custom leather work.",
      lat: 37.6941,
      lng: -122.0863
    },
    {
      id: 22,
      name: "Tack Warehouse",
      category: "Tack Store",
      city: "Woodland",
      phone: "",
      email: "",
      website: "tackwarehouse.com",
      description: "Northern California's largest tack and saddle shop. 14,000 square feet of tack, complete horse blanket store, dog groomer on site.",
      lat: 38.6785,
      lng: -121.7733
    },
    {
      id: 23,
      name: "Olsen Nolte Saddle Shop",
      category: "Tack Store",
      city: "San Francisco Bay Area",
      phone: "",
      email: "",
      website: "olsennoltesaddleshop.com",
      description: "Custom saddles and tack shop",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 24,
      name: "Ganado Feed & Pet Supplies",
      category: "Feed Store",
      city: "San Jose",
      phone: "",
      email: "",
      website: "ganadofeed.com",
      description: "Family owned since 2009. High quality livestock and equine feed. Offers delivery throughout the Bay Area.",
      lat: 37.3382,
      lng: -121.8863
    },
    {
      id: 25,
      name: "Peninsula Feed Store",
      category: "Feed Store",
      city: "San Francisco Peninsula",
      phone: "",
      email: "",
      website: "peninsulafeedstore.com",
      description: "Bay Area urban farming supplies. Horse feed, grains, supplements from Purina, Triple Crown, Nutrena, LMF. Grooming and fly control supplies.",
      lat: 37.4500,
      lng: -122.1800
    },
    {
      id: 26,
      name: "Concord Feed & Pet Supply",
      category: "Feed Store",
      city: "Concord",
      phone: "",
      email: "",
      website: "concordfeed.com",
      description: "Since the 1920s. Four locations: Concord, Pleasant Hill, Dublin, and Livermore. Complete farm, ranch, and livestock supplies.",
      lat: 37.9780,
      lng: -122.0311
    },
    {
      id: 27,
      name: "Half Moon Bay Feed and Fuel",
      category: "Feed Store",
      city: "Half Moon Bay",
      phone: "",
      email: "",
      website: "hmbfeedandfuel.com",
      description: "San Mateo County's largest and oldest feed and tack store. Ranch, hobby farm, livestock supplies, live poultry. Horse boarding and equestrian camping facilities.",
      lat: 37.4636,
      lng: -122.4286
    },
    {
      id: 28,
      name: "Bay Area Hay and Feed",
      category: "Feed Store",
      city: "Livermore",
      phone: "(925) 998-0911",
      email: "",
      website: "bayareahayandfeed.com",
      description: "Comprehensive animal feed and ranch supply. Carries Purina, Cargill Nutrena, LMF, Stable Mix. Quality hay, bedding, and ranch equipment.",
      lat: 37.6819,
      lng: -121.7680
    },
    {
      id: 29,
      name: "Rivertown Feed & Pet Country Store",
      category: "Feed Store",
      city: "Petaluma",
      phone: "(707) 762-4505",
      email: "",
      website: "rivertownfeed.com",
      description: "Healthy selection of horse food brands with only the highest quality ingredients. Bulk options available.",
      lat: 38.2324,
      lng: -122.6367
    },
    {
      id: 30,
      name: "Barlas Feeds",
      category: "Feed Store",
      city: "Petaluma",
      phone: "",
      email: "",
      website: "barlasfeed.com",
      description: "Livestock feed, ranch & garden supply, pet food, organic & conventional straw and hay.",
      lat: 38.2324,
      lng: -122.6367
    },
    {
      id: 62,
      name: "Rodie's Feed & Pet Supply",
      category: "Feed Store",
      city: "Clayton",
      phone: "",
      email: "",
      website: "",
      description: "Feed and pet supply store serving the Clayton equestrian community.",
      lat: 37.9405,
      lng: -121.9358
    },
    {
      id: 63,
      name: "Concord Feed & Pet Supply - Pleasant Hill",
      category: "Feed Store",
      city: "Pleasant Hill",
      phone: "",
      email: "",
      website: "concordfeed.com",
      description: "Since the 1920s. Complete farm, ranch, and livestock supplies. One of four locations.",
      lat: 37.9480,
      lng: -122.0608
    },
    {
      id: 64,
      name: "Concord Feed & Pet Supply - Dublin",
      category: "Feed Store",
      city: "Dublin",
      phone: "",
      email: "",
      website: "concordfeed.com",
      description: "Since the 1920s. Complete farm, ranch, and livestock supplies. One of four locations.",
      lat: 37.7022,
      lng: -121.9358
    },
    {
      id: 65,
      name: "Concord Feed & Pet Supply - Livermore",
      category: "Feed Store",
      city: "Livermore",
      phone: "",
      email: "",
      website: "concordfeed.com",
      description: "Since the 1920s. Complete farm, ranch, and livestock supplies. One of four locations.",
      lat: 37.6819,
      lng: -121.7680
    },
    {
      id: 31,
      name: "Alex Greer Dressage",
      category: "Trainer",
      city: "Bay Area",
      phone: "",
      email: "",
      website: "alexgreerdressage.com",
      description: "Training from Training Level to FEI. Horse sourcing and sales. Private facility with top-of-the-line footing.",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 32,
      name: "Tanya Vik Dressage",
      category: "Trainer",
      city: "Petaluma",
      phone: "",
      email: "",
      website: "tanyavik.com",
      description: "Grand Prix rider, trainer, and competitor. Instruction and training for dressage performance horses and riders.",
      lat: 38.2324,
      lng: -122.6367
    },
    {
      id: 33,
      name: "Windy Hill Equestrians",
      category: "Trainer",
      city: "Los Altos Hills",
      phone: "",
      email: "",
      website: "windyhillequestrians.com",
      description: "Premier Bay Area hunter jumper facility. All-inclusive horse and rider training program. Serving San Francisco to South San Jose.",
      lat: 37.3688,
      lng: -122.1141
    },
    {
      id: 34,
      name: "Heather Hill Riding Center",
      category: "Trainer",
      city: "Atherton",
      phone: "",
      email: "",
      website: "heatherhillridingcenter.com",
      description: "Excellence in horsemanship since 1997. Small, community-oriented barn known for Welsh ponies and Cobs. Individualized instruction.",
      lat: 37.4613,
      lng: -122.1977
    },
    {
      id: 35,
      name: "Ocean View Stables",
      category: "Trainer",
      city: "San Francisco",
      phone: "",
      email: "",
      website: "oceanviewstables.com",
      description: "Natural Horsemanship training. Lessons, camps, boarding. Horseback rides to the beach. Minutes from San Francisco Zoo.",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 36,
      name: "Bay Area Equestrian Club",
      category: "Equestrian Social Club",
      city: "Bay Area",
      phone: "",
      email: "",
      website: "baeclub.com",
      description: "501(c)(3) nonprofit providing equestrian activities, volunteer opportunities, rescue horse programs, and leadership training for young people.",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 37,
      name: "Bay Area Ridge Riders",
      category: "Equestrian Social Club",
      city: "South Bay",
      phone: "",
      email: "",
      website: "bayarearidgeriders.com",
      description: "Guided trail rides in parks and preserves. Endurance riding coaching and events. Small group rides with athletic, responsive horses.",
      lat: 37.3382,
      lng: -121.8863
    },
    {
      id: 38,
      name: "Metropolitan Horsemen's Association",
      category: "Equestrian Social Club",
      city: "East Bay",
      phone: "",
      email: "",
      website: "mhaeastbay.org",
      description: "East Bay equestrian organization hosting clinics, shows, and events. Manages Sequoia Arena in Joaquin Miller Park.",
      lat: 37.8044,
      lng: -122.2712
    },
    {
      id: 55,
      name: "CMDTRA",
      category: "Equestrian Social Club",
      city: "Clayton",
      phone: "",
      email: "",
      website: "",
      description: "Equestrian community and social organization",
      lat: 37.9405,
      lng: -121.9358
    },
    {
      id: 39,
      name: "The Horse Park at Woodside",
      category: "Equestrian Event Facility",
      city: "Woodside",
      phone: "",
      email: "",
      website: "horsepark.org",
      description: "Premier equestrian event venue. Hunter/jumper shows, dressage competitions, horse trials, clinics. Multiple arenas and facilities.",
      lat: 37.4299,
      lng: -122.2538
    },
    {
      id: 40,
      name: "Murieta Equestrian Center",
      category: "Equestrian Event Facility",
      city: "Sloughhouse",
      phone: "",
      email: "",
      website: "murietaequestriancenter.com",
      description: "Hunter/jumper shows, all-breeds open shows. USEF National events. Multiple arenas and show facilities.",
      lat: 38.5102,
      lng: -121.2158
    },
    {
      id: 41,
      name: "Miwok Equestrian Center",
      category: "Equestrian Event Facility",
      city: "Marin County",
      phone: "",
      email: "",
      website: "miwokequestrianctr.com",
      description: "Golden Gate National Recreation Area. English hunter/jumper lessons, show teams, seasonal camps. Therapeutic programs.",
      lat: 37.9735,
      lng: -122.5311
    },
    {
      id: 42,
      name: "NCEFT - National Center for Equine Facilitated Therapy",
      category: "Equestrian Non-Profit",
      city: "Woodside",
      phone: "",
      email: "",
      website: "nceft.org",
      description: "12-acre center for equine facilitated therapy. Two arenas, sensory trail, PT/OT/speech therapy clinic. Serving all Bay Area counties.",
      lat: 37.4299,
      lng: -122.2538
    },
    {
      id: 43,
      name: "Sunrise Horse Rescue",
      category: "Equestrian Non-Profit",
      city: "Calistoga",
      phone: "",
      email: "",
      website: "sunrisehorserescue.org",
      description: "501(c)(3) nonprofit horse rescue and sanctuary. Equine assisted learning and therapy programs. Volunteer opportunities.",
      lat: 38.5788,
      lng: -122.5797
    },
    {
      id: 44,
      name: "Oakdale Equine Rescue",
      category: "Equestrian Non-Profit",
      city: "Oakdale",
      phone: "",
      email: "",
      website: "oakdaleequinerescue.org",
      description: "Rescue and rehabilitation for abused, neglected, and unwanted horses. Adoption services throughout Central Valley and Bay Area.",
      lat: 37.7666,
      lng: -120.8471
    },
    {
      id: 45,
      name: "Save Them All Horse Rescue",
      category: "Equestrian Non-Profit",
      city: "Northern California",
      phone: "",
      email: "",
      website: "savethemallhorserescue.com",
      description: "501(c)(3) all-volunteer equine rescue. Assists 12-20 horses per year. Founded 2011.",
      lat: 38.5816,
      lng: -121.4944
    },
    {
      id: 46,
      name: "SERRA Equine Rescue",
      category: "Equestrian Non-Profit",
      city: "Santa Rosa",
      phone: "",
      email: "",
      website: "serraequinerescue.org",
      description: "Horse rescue and rehabilitation. Horses available for adoption. Proper veterinary care and support throughout adoption process.",
      lat: 38.4404,
      lng: -122.7141
    },
    {
      id: 47,
      name: "Eagleson Equestrian Center",
      category: "Equestrian Non-Profit",
      city: "San Francisco Peninsula",
      phone: "",
      email: "",
      website: "catholiccharitiessf.org/equine",
      description: "Catholic Charities program. Equine-assisted learning and therapy. Works with foster youth, neurodivergent children, women in recovery.",
      lat: 37.4500,
      lng: -122.1800
    },
    {
      id: 56,
      name: "Diablo Equestrian Heritage Association (DEHA)",
      category: "Equestrian Non-Profit",
      city: "Clayton",
      phone: "",
      email: "events@diabloequestrianheritage.org",
      website: "diabloequestrianheritage.org",
      description: "501(c)(3) organization dedicated to promoting, educating, and preserving Diablo Valley equestrian activities and heritage. Hosts events, gymkhanas, and obstacle challenges.",
      lat: 37.9405,
      lng: -121.9358
    },
    {
      id: 72,
      name: "Stardust Sanctuary",
      category: "Equestrian Non-Profit",
      city: "California",
      phone: "",
      email: "",
      website: "stardustsanctuaryca.org",
      description: "Equine rescue and sanctuary dedicated to providing safe haven for horses in need.",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 58,
      name: "Earthquake Arabians",
      category: "Riding Lessons",
      city: "Brentwood",
      phone: "(707) 386-7771",
      email: "earthquakearabians@yahoo.com",
      website: "earthquakearabians.com",
      description: "Riding lessons specializing in Arabian horses. Instruction for all levels, from beginners to advanced competitive riders.",
      lat: 37.9318,
      lng: -121.6958
    },
    {
      id: 59,
      name: "Castle Rock Arabians",
      category: "Riding/Horse Camps",
      city: "Walnut Creek",
      phone: "(925) 289-9269",
      email: "",
      website: "castlerockarabians.com",
      description: "Family-friendly horse ranch in Walnut Creek. Horse camps, riding lessons, birthday parties, and scout badge sessions. Located at the base of Mount Diablo with extensive trails.",
      lat: 37.9101,
      lng: -122.0652
    },
    {
      id: 60,
      name: "Bryerly Farms",
      category: "Riding/Horse Camps",
      city: "Walnut Creek",
      phone: "(925) 856-5328",
      email: "",
      website: "bryerlyfarms.com",
      description: "Family-run organic farm and horse camp. Day camps for kids ages 5+. Certified Wildlife Habitat with rescued wild horses. Mustang Meditation sessions available.",
      lat: 37.9101,
      lng: -122.0652
    },
    {
      id: 61,
      name: "Earthquake Arabians",
      category: "Riding/Horse Camps",
      city: "Brentwood",
      phone: "(707) 386-7771",
      email: "earthquakearabians@yahoo.com",
      website: "earthquakearabians.com",
      description: "Horse camps, birthday parties, and show team training. Full service training program for Arabian horses. IEA team available.",
      lat: 37.9318,
      lng: -121.6958
    },
    {
      id: 48,
      name: "Dr. Kelly MacKay - Animal Chiropractic Care",
      category: "Horse Chiropractor",
      city: "Bay Area",
      phone: "(707) 887-1875",
      email: "",
      website: "animalchiropracticcare.net",
      description: "Doctor of Chiropractic certified by AVCA. Over 20 years experience providing chiropractic care for horses.",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 49,
      name: "Marin Mobile Chiropractic",
      category: "Horse Chiropractor",
      city: "Kentfield",
      phone: "(415) 233-2044",
      email: "pamelamulveydc@yahoo.com",
      website: "",
      description: "Mobile chiropractic services for horses throughout Marin County and surrounding areas.",
      lat: 37.9527,
      lng: -122.5575
    },
    {
      id: 50,
      name: "Dr. Amy Powell DC",
      category: "Horse Chiropractor",
      city: "Petaluma",
      phone: "(707) 365-5173",
      email: "dramypowell@hotmail.com",
      website: "dramypowell.com",
      description: "Certified animal chiropractor providing equine chiropractic care in Sonoma County and Bay Area.",
      lat: 38.2324,
      lng: -122.6367
    },
    {
      id: 51,
      name: "CorElite Chiropractic & Wellness",
      category: "Horse Chiropractor",
      city: "Campbell",
      phone: "(408) 866-8820",
      email: "",
      website: "",
      description: "Dr. Brenda Gonzalez. Chiropractic and wellness services for horses in South Bay area.",
      lat: 37.2872,
      lng: -121.9500
    },
    {
      id: 52,
      name: "Drake Equine - Robyn Drake",
      category: "Horse Massage Practitioner",
      city: "Bay Area",
      phone: "",
      email: "",
      website: "drakesaddlesavvy.com",
      description: "Certified Equine Sports Massage Therapist. Over two decades of experience. Multiple modalities including myofascial release and acupressure.",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 53,
      name: "Bay Area Equine Therapy",
      category: "Horse Massage Practitioner",
      city: "Bay Area",
      phone: "",
      email: "",
      website: "bayareaequinetherapy.com",
      description: "Equine-assisted psychotherapy and coaching. Individual services and workshops for healing and growth.",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 68,
      name: "Janice Pementel Dead Stock Removal Services",
      category: "Miscellaneous Services",
      city: "Livermore",
      phone: "",
      email: "",
      website: "baenhosting.com/janicepementel/",
      description: "Professional dead stock removal services for horses and livestock.",
      lat: 37.6819,
      lng: -121.7680
    },
    {
      id: 69,
      name: "CPM Equine and Livestock Removal Services",
      category: "Miscellaneous Services",
      city: "Salinas",
      phone: "",
      email: "",
      website: "horseandlivestockremoval.com",
      description: "Equine and livestock removal services serving the Salinas and surrounding areas.",
      lat: 36.6777,
      lng: -121.6555
    },
    {
      id: 70,
      name: "California State Horsemen's Association (CSHA)",
      category: "Horse Associations",
      city: "California",
      phone: "",
      email: "",
      website: "californiastatehorsemen.org",
      description: "Statewide organization dedicated to promoting and protecting equestrian interests throughout California.",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 71,
      name: "United States Pony Club (USPC)",
      category: "Horse Associations",
      city: "National",
      phone: "",
      email: "",
      website: "ponyclub.org",
      description: "National youth organization dedicated to teaching riding, mounted sports, and the care of horses and ponies.",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 73,
      name: "North American Trail Ride Conference (NATRC)",
      category: "Horse Associations",
      city: "National",
      phone: "",
      email: "",
      website: "natrc.org",
      description: "Organization promoting competitive trail riding with an emphasis on horsemanship and horse care.",
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 74,
      name: "Diablo Arabian Horse Association (DAHA)",
      category: "Horse Associations",
      city: "Diablo Valley",
      phone: "",
      email: "",
      website: "diabloaha.org",
      description: "Local chapter promoting Arabian horses and supporting Arabian horse enthusiasts in the Diablo Valley area.",
      lat: 37.9405,
      lng: -121.9358
    }
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [resources, setResources] = useState(defaultResources);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [view, setView] = useState('resources');
  
  // Resource editing state
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [newResource, setNewResource] = useState({
    name: '',
    category: 'Farrier',
    street: '',
    city: '',
    state: 'CA',
    zip: '',
    phone: '',
    email: '',
    website: '',
    description: ''
  });
  
  // Event calendar state
  const [events, setEvents] = useState([
    { id: 1, title: 'Spring Dressage Competition', startDate: '2026-03-15', endDate: '2026-03-15', location: 'Woodside', description: 'Annual dressage event' },
    { id: 2, title: 'Trail Ride Meetup', startDate: '2026-04-20', endDate: '2026-04-20', location: 'Briones Park', description: 'Community trail ride' },
  ]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: '',
    startDate: '',
    endDate: '',
    location: '',
    description: ''
  });
  const [calendarYear, setCalendarYear] = useState(2026);
  const [calendarMonth, setCalendarMonth] = useState(0);

  // Load resources from storage on mount
  useEffect(() => {
    const loadResources = async () => {
      try {
        if (window.storage) {
          const stored = await window.storage.get('equestrian-resources-v2');
          if (stored && stored.value) {
            const parsed = JSON.parse(stored.value);
            setResources(parsed);
          }
        }
      } catch (error) {
        console.log('Using default resources');
      } finally {
        setIsLoading(false);
      }
    };
    loadResources();
  }, []);

  // Save resources to storage whenever they change
  useEffect(() => {
    if (!isLoading && window.storage) {
      const saveResources = async () => {
        try {
          await window.storage.set('equestrian-resources-v2', JSON.stringify(resources));
        } catch (error) {
          console.error('Error saving:', error);
        }
      };
      saveResources();
    }
  }, [resources, isLoading]);

  // Alphabetized categories - include Saddle Fitters even if no resources yet
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(resources.map(r => r.category))).sort();
    // Add Saddle Fitters to the list even if no resources exist yet
    if (!uniqueCategories.includes('Saddle Fitters')) {
      uniqueCategories.push('Saddle Fitters');
      uniqueCategories.sort();
    }
    return ['All', ...uniqueCategories];
  }, [resources]);

  // Alphabetized cities - filter out full addresses (anything with numbers or common street words)
  const cities = useMemo(() => {
    const allCities = resources.map(r => r.city);
    const cleanCities = allCities.filter(city => {
      // Filter out if it contains numbers or common street indicators
      const hasNumbers = /\d/.test(city);
      const hasStreetWords = /(street|st|avenue|ave|road|rd|drive|dr|lane|ln|way|blvd|boulevard|court|ct|circle|place|pl)/i.test(city);
      return !hasNumbers && !hasStreetWords;
    });
    const uniqueCities = Array.from(new Set(cleanCities)).sort();
    return ['All', ...uniqueCities];
  }, [resources]);

  const filteredResources = useMemo(() => {
    return resources
      .filter(resource => {
        const searchMatch = searchTerm === '' || 
          resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (resource.phone && resource.phone.includes(searchTerm)) ||
          (resource.website && resource.website.toLowerCase().includes(searchTerm.toLowerCase()));
        const categoryMatch = selectedCategory === 'All' || resource.category === selectedCategory;
        const cityMatch = selectedCity === 'All' || resource.city === selectedCity;
        return searchMatch && categoryMatch && cityMatch;
      })
      .sort((a, b) => {
        if (a.category !== b.category) {
          return a.category.localeCompare(b.category);
        }
        return a.name.localeCompare(b.name);
      });
  }, [resources, searchTerm, selectedCategory, selectedCity]);

  // Calendar functions
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const getEventsForDate = (year, month, day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(e => {
      const eventStart = new Date(e.startDate + 'T00:00:00');
      const eventEnd = new Date(e.endDate + 'T00:00:00');
      const checkDate = new Date(dateStr + 'T00:00:00');
      return checkDate >= eventStart && checkDate <= eventEnd;
    });
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.startDate) {
      // If no end date, use start date
      const eventToSave = {
        ...newEvent,
        endDate: newEvent.endDate || newEvent.startDate,
        id: editingEvent ? editingEvent.id : Date.now()
      };
      
      if (editingEvent) {
        setEvents(events.map(e => e.id === editingEvent.id ? eventToSave : e));
        setEditingEvent(null);
      } else {
        setEvents([...events, eventToSave]);
      }
      setNewEvent({ title: '', startDate: '', endDate: '', location: '', description: '' });
      setShowEventForm(false);
    }
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setNewEvent(event);
    setShowEventForm(true);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter(e => e.id !== eventId));
  };

  // Resource editing functions
  const handleAddResource = () => {
    if (!newResource.name || !newResource.city) {
      alert('Please fill in required fields: Name and City');
      return;
    }
    
    if (editingId) {
      setResources(resources.map(r => 
        r.id === editingId ? { ...newResource, id: editingId, lat: 37.7749, lng: -122.4194 } : r
      ));
      setEditingId(null);
    } else {
      const resourceToAdd = {
        ...newResource,
        id: resources.length > 0 ? Math.max(...resources.map(r => r.id)) + 1 : 1,
        lat: 37.7749,
        lng: -122.4194
      };
      setResources([...resources, resourceToAdd]);
    }
    
    setNewResource({
      name: '', category: 'Farrier', city: '', phone: '', email: '', website: '', description: ''
    });
    setShowAddForm(false);
  };

  const handleEditResource = (resource) => {
    setNewResource({
      name: resource.name,
      category: resource.category,
      street: resource.street || '',
      city: resource.city,
      state: resource.state || 'CA',
      zip: resource.zip || '',
      phone: resource.phone || '',
      email: resource.email || '',
      website: resource.website || '',
      description: resource.description || ''
    });
    setEditingId(resource.id);
    setShowAddForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setNewResource({
      name: '', category: 'Farrier', street: '', city: '', state: 'CA', zip: '', phone: '', email: '', website: '', description: ''
    });
    setEditingId(null);
    setShowAddForm(false);
  };

  const handleDeleteResource = (id) => {
    console.log('Delete clicked for id:', id);
    setDeleteConfirmId(id);
  };

  const confirmDelete = () => {
    console.log('Confirming delete for:', deleteConfirmId);
    setResources(resources.filter(r => r.id !== deleteConfirmId));
    setDeleteConfirmId(null);
  };

  const cancelDelete = () => {
    console.log('Cancelled delete');
    setDeleteConfirmId(null);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(calendarYear, calendarMonth);
    const firstDay = getFirstDayOfMonth(calendarYear, calendarMonth);
    const days = [];
    
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2 border border-gray-200 bg-gray-50"></div>);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDate(calendarYear, calendarMonth, day);
      days.push(
        <div key={day} className="p-2 border border-gray-200 min-h-24 bg-white hover:bg-gray-50">
          <div className="font-semibold text-sm mb-1">{day}</div>
          {dayEvents.map(event => (
            <div key={event.id} className="text-xs bg-blue-100 p-1 mb-1 rounded cursor-pointer hover:bg-blue-200"
                 onClick={() => handleEditEvent(event)}>
              {event.title}
            </div>
          ))}
        </div>
      );
    }
    
    return days;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-800 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading resources...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Equestrian Banner Header */}
      <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 border-b-4 border-blue-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-2 font-serif tracking-wide">
              DEHA
            </h1>
            <p className="text-blue-200 text-lg mb-3 italic">
              Diablo Equestrian Heritage Association
            </p>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Equestrian Resource Guide
            </h2>
            <div className="flex items-center justify-center gap-2 text-blue-200 mb-3">
              <div className="h-px w-24 bg-blue-400"></div>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 8L21 9L16 14L18 21L12 17L6 21L8 14L3 9L9 8L12 2Z"/>
              </svg>
              <div className="h-px w-24 bg-blue-400"></div>
            </div>
            <p className="text-white text-lg">
              Your comprehensive directory of Bay Area equestrian facilities and events
            </p>
            <p className="text-blue-200 mt-2 font-semibold text-lg">
              {resources.length} Resources Available
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-2xl border-2 border-gray-400 p-8">
        
        {/* Navigation */}
        <div className="flex gap-4 mb-6 border-b-2 border-gray-400 pb-4">
          <button
            onClick={() => setView('resources')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors border-2 ${
              view === 'resources' 
                ? 'bg-blue-700 text-white border-blue-800' 
                : 'bg-gray-100 text-gray-700 border-gray-400 hover:bg-gray-200'
            }`}
          >
            Resources
          </button>
          <button
            onClick={() => setView('calendar')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 border-2 ${
              view === 'calendar' 
                ? 'bg-blue-700 text-white border-blue-800' 
                : 'bg-gray-100 text-gray-700 border-gray-400 hover:bg-gray-200'
            }`}
          >
            <Calendar size={18} /> Events Calendar
          </button>
        </div>

        {/* Resources View */}
        {view === 'resources' && (
          <>
            {/* Delete Confirmation Dialog */}
            {deleteConfirmId !== null && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm Deletion</h3>
                  <p className="text-gray-600 mb-6">Are you sure you want to delete this resource? This action cannot be undone.</p>
                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={cancelDelete}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={confirmDelete}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search resources by name, description, category, city, phone, or website..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base"
                />
              </div>
            </div>

            {/* Filters and Add Button */}
            <div className="flex gap-4 mb-6 flex-wrap">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => {
                    if (showAddForm && !editingId) {
                      setShowAddForm(false);
                    } else if (showAddForm && editingId) {
                      handleCancelEdit();
                    } else {
                      setShowAddForm(true);
                    }
                  }}
                  className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2 border-2 border-blue-800 font-semibold"
                >
                  {showAddForm ? <X size={18} /> : <Plus size={18} />}
                  {showAddForm ? 'Cancel' : 'Add Resource'}
                </button>
              </div>
            </div>

            {/* Add/Edit Resource Form */}
            {showAddForm && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
                <h3 className="font-semibold mb-3 text-lg text-blue-900">
                  {editingId ? 'Edit Resource' : 'Add New Resource'}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name *"
                    value={newResource.name}
                    onChange={(e) => setNewResource({...newResource, name: e.target.value})}
                    className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <select
                    value={newResource.category}
                    onChange={(e) => setNewResource({...newResource, category: e.target.value})}
                    className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.filter(c => c !== 'All').map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Street Address"
                    value={newResource.street || ''}
                    onChange={(e) => setNewResource({...newResource, street: e.target.value})}
                    className="md:col-span-2 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="City *"
                    value={newResource.city}
                    onChange={(e) => setNewResource({...newResource, city: e.target.value})}
                    className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="State"
                      value={newResource.state || 'CA'}
                      onChange={(e) => setNewResource({...newResource, state: e.target.value})}
                      className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      maxLength="2"
                    />
                    <input
                      type="text"
                      placeholder="Zip"
                      value={newResource.zip || ''}
                      onChange={(e) => setNewResource({...newResource, zip: e.target.value})}
                      className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      maxLength="10"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={newResource.phone}
                    onChange={(e) => setNewResource({...newResource, phone: e.target.value})}
                    className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={newResource.email}
                    onChange={(e) => setNewResource({...newResource, email: e.target.value})}
                    className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Website"
                    value={newResource.website}
                    onChange={(e) => setNewResource({...newResource, website: e.target.value})}
                    className="md:col-span-2 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Description"
                    value={newResource.description}
                    onChange={(e) => setNewResource({...newResource, description: e.target.value})}
                    className="md:col-span-2 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    rows="3"
                  />
                </div>
                <button
                  onClick={handleAddResource}
                  className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2 border-2 border-blue-800"
                >
                  <Save size={16} />
                  {editingId ? 'Update Resource' : 'Add Resource'}
                </button>
              </div>
            )}

            <div className="mb-4">
              <p className="text-gray-600">
                Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {filteredResources.map(resource => (
                <div key={resource.id} className="border-2 border-gray-400 rounded-lg p-4 hover:shadow-xl transition-all bg-gradient-to-br from-white to-gray-50 relative">
                  <div className="absolute top-2 right-2 flex gap-2 z-10">
                    <button
                      onClick={() => handleEditResource(resource)}
                      className="px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded font-semibold text-sm cursor-pointer border border-blue-800"
                      title="Edit resource"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteResource(resource.id)}
                      className="px-3 py-2 bg-red-600 text-white hover:bg-red-700 rounded font-semibold text-sm cursor-pointer border border-red-800"
                      title="Delete resource"
                    >
                      Delete
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 pr-16 font-serif">{resource.name}</h3>
                  <p className="text-sm text-blue-700 font-semibold">{resource.category}</p>
                  {resource.street && (
                    <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                      <MapPin size={14} /> {resource.street}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                    {!resource.street && <MapPin size={14} />} {resource.city}{resource.state ? `, ${resource.state}` : ''}{resource.zip ? ` ${resource.zip}` : ''}
                  </p>
                  {resource.description && (
                    <p className="text-sm text-gray-700 mt-2">{resource.description}</p>
                  )}
                  {resource.phone && (
                    <p className="text-sm text-gray-600 mt-1">📞 {resource.phone}</p>
                  )}
                  {resource.email && (
                    <p className="text-sm text-gray-600 mt-1">✉️ {resource.email}</p>
                  )}
                  {resource.website && (
                    <p className="text-sm text-blue-600 mt-1 font-semibold">🌐 {resource.website}</p>
                  )}
                  <div className="mt-3">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resource.name + ' ' + resource.city)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white text-sm rounded-lg hover:bg-blue-800 transition-colors border border-blue-800 font-semibold"
                    >
                      <MapPin size={14} /> View on Google Maps
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredResources.length === 0 && (
              <p className="text-center text-gray-500 py-8">No resources found matching your filters.</p>
            )}
          </>
        )}

        {/* Calendar View */}
        {view === 'calendar' && (
          <div className="bg-white rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    if (calendarMonth === 0) {
                      setCalendarMonth(11);
                      setCalendarYear(calendarYear - 1);
                    } else {
                      setCalendarMonth(calendarMonth - 1);
                    }
                  }}
                  disabled={calendarYear === 2026 && calendarMonth === 0}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                  ←
                </button>
                <h2 className="text-2xl font-bold text-amber-800">
                  {monthNames[calendarMonth]} {calendarYear}
                </h2>
                <button
                  onClick={() => {
                    if (calendarMonth === 11) {
                      setCalendarMonth(0);
                      setCalendarYear(calendarYear + 1);
                    } else {
                      setCalendarMonth(calendarMonth + 1);
                    }
                  }}
                  disabled={calendarYear === 2036 && calendarMonth === 0}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                  →
                </button>
              </div>
              
              <button
                onClick={() => {
                  setShowEventForm(true);
                  setEditingEvent(null);
                  setNewEvent({ title: '', date: '', location: '', description: '' });
                }}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Plus size={18} /> Add Event
              </button>
            </div>

            {showEventForm && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-3 text-lg">
                  {editingEvent ? 'Edit Event' : 'Add New Event'}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Event Title *"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    className="md:col-span-2 px-3 py-2 border border-gray-300 rounded"
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date *</label>
                    <input
                      type="date"
                      value={newEvent.startDate}
                      min="2026-01-01"
                      max="2036-01-31"
                      onChange={(e) => setNewEvent({ ...newEvent, startDate: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date (optional)</label>
                    <input
                      type="date"
                      value={newEvent.endDate}
                      min={newEvent.startDate || "2026-01-01"}
                      max="2036-01-31"
                      onChange={(e) => setNewEvent({ ...newEvent, endDate: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Location"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    className="md:col-span-2 px-3 py-2 border border-gray-300 rounded"
                  />
                  <textarea
                    placeholder="Description"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    className="md:col-span-2 px-3 py-2 border border-gray-300 rounded"
                    rows="3"
                  />
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={handleAddEvent}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 border border-blue-800"
                  >
                    <Save size={16} /> {editingEvent ? 'Update' : 'Save'}
                  </button>
                  <button
                    onClick={() => {
                      setShowEventForm(false);
                      setEditingEvent(null);
                      setNewEvent({ title: '', startDate: '', endDate: '', location: '', description: '' });
                    }}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="bg-amber-100 p-2 text-center font-semibold text-sm">
                  {day}
                </div>
              ))}
              {renderCalendar()}
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">All Events</h3>
              <div className="space-y-2">
                {events.sort((a, b) => new Date(a.startDate) - new Date(b.startDate)).map(event => {
                  const startDate = new Date(event.startDate + 'T00:00:00');
                  const endDate = new Date(event.endDate + 'T00:00:00');
                  const isSameDay = event.startDate === event.endDate;
                  
                  return (
                    <div key={event.id} className="flex justify-between items-start p-3 bg-gray-50 rounded border border-gray-200 hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{event.title}</h4>
                        {isSameDay ? (
                          <p className="text-sm text-gray-600">
                            {startDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                          </p>
                        ) : (
                          <p className="text-sm text-gray-600">
                            {startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - {endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </p>
                        )}
                        {event.location && <p className="text-sm text-gray-500">📍 {event.location}</p>}
                        {event.description && <p className="text-sm text-gray-600 mt-1">{event.description}</p>}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditEvent(event)}
                          className="px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded font-semibold text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteEvent(event.id)}
                          className="px-3 py-2 bg-red-600 text-white hover:bg-red-700 rounded font-semibold text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
                {events.length === 0 && (
                  <p className="text-center text-gray-500 py-4">No events scheduled yet.</p>
                )}
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default EquestrianResources;
