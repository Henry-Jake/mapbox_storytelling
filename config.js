var config = {
    style: 'mapbox://styles/jachen0825/cma61071l00a301s17yyvfggt',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiamFjaGVuMDgyNSIsImEiOiJjbTk3a3dwMDkwNmV2MmtvZmdnaDZhcnJ6In0.3BSEKXYmm72yhz1QmtKrXg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'ENG355 Final Essay',
    subtitle: 'Spatial Journeys of Movement Across the South in Southern Literature',
    byline: 'Jacob Henry',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'How Economic Status Shaped Mobility in The South',
            image: './assets/Economic_mobility.png',
            description: 'How economic status superseded race in terms of mobility in southern literature <br> ',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Thesis',
            alignment: 'centered',
            hidden: false,
            title: 'Thesis: Economic Class Variablility & Mobility',
            image: '',
            description: 'When you ask a random person on the street what they think of when you say Southern Literature, most will say it is about white guys from the past writing about slavery and the Civil War, with lots of racism and sexism. Suppose you ask them if, during this period which had greater mobility between White and African Americans, most would tell you that White people had more mobility. What I am proposing in this essay is that race is only one factor to consider in terms of mobility. We can also look at how economic class affected how mobile people are in Southern Literature. Perhaps to the same degree or more as race. Through three novels that span from the 1900s to the 2100th, I will explore how economic class is equally important, if not more important than race when discussing the mobility and agency of characters in Southern Literature.',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
        },
        {
            id: 'As I Lay Dying - intro',
            alignment: 'right',
            hidden: false,
            title: 'As I Lay Dying By Willaim Faulkner',
            image: './assets/As_I_Lay_Dying_Cover.png',
            description:'<em> I Lay Dying </em> by William Faulkner takes place in rural Mississippi during the early 1920s in the fictional county of Yoknapatawpha. The Bundren family are poor white farmers who live on the outskirts of town and whose mother (Addie Bundren) is sick and who eventually dies. She is survived by her husband (Anse) and their children, Cash, Darl, Jewels, Dewy Dell, and Vardaman – ages. The main objective of the novel is to bury Addie Bundren in Jefferson. This journey proves extremely challenging due to the lack of resources the family possesses. The family struggles for approximately nine days to take her body some forty miles into the city. The novel explores topics like loss, grief, teen pregnancy, and poverty.',
            location: {
                center: [-89.4921200006997, 34.281557946257514],
                zoom: 12.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'As I Lay Dying - Mobility',
            alignment: 'left',
            hidden: false,
            title: 'How economic status affected mobility ',
            image: './assets/Digital_YA.png',
            description: 'Despite being white, the Bundrens\’s lack of financial resources due to their economic class negatively impacts nearly every aspect of their journey. Firstly, a doctor is not called for Addie until it is certainly too late because it is too expensive. After her death, the family embarks on their journey to Jefferson using a buggy and mules carrying Addie\’s corpse. Even though cars existed in this time (“we approach the crest, where the street runs, where cars go back and forth; the mules haul the wagon up and onto the crest and the street” ) (pg231). There is also a repeated sentiment of needing to make $3, so much so that Darl and Jewel are gone when their mother dies. Early into their journey, the family comes across a flooded and broken bridge, having neither the time nor resources to get across the river, the family wades through and ends up drowning the mules. Unable to afford new ones, the Anse sells Jewels\’s horse to pay for a new fleet (without telling him.) In this same altercation, Cash breaks his leg, and the family self-medicates him by fashioning a splint supported with cement to delay taking him to the doctor. Along their journey, the family does not have reliable housing and relies mostly upon the (idealized notion of southern hospitality) to stay in random people\’s barns – homes. Another layer of financial instability is Dewey Dell\’s inability to afford contraceptives for her pregnancy (only has $10). Toward the end of the novel, upon reaching Jefferson the family encounters two black men and a white man who all equally scuffle at the sight of the family and smell off the wagon. In burying their mother, they borrow the shovels, and Anse takes Dewey Dell\’s money to buy himself a new set of teeth. The family takes Cash to the same doctor they called for Addie who comments “Of course he\’d have to borrow a spade to bury his wife with. Unless he could borrow a hole in the ground,” (pg240) and who actually gives the family money to stay in a hotel for the night.',
            location: {
                center: [-89.4921200006997, 34.281557946257514], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'As I Lay Dying -Mibility 2',
            alignment: 'left',
            hidden: false,
            title: 'How economic status affected mobility ',
            image: './assets/Digital_YA.png',
            description: 'Overall, for the Bundren family in lieu of being white, they are also poor, which significantly decreases their access to resources and mobility – more than race, poverty proves to be the obstacle that presents itself in every decision and every hardship they face. They delayed medical care for Addie until it was certain death, the forty-mile journey takes nine days because the family must go by wagon and mule (not car) when the bridge collapses due to flooding they feel the pressure of time and see no other option than to risk crossing the river and end up losing their mules (having to trade Jewel Horse for a new set),  Cash goes a week with a broken leg (only seeing a doctor once they get to Jefferson), Dewey Dell is unable to afford/is conned out of getting medicine for her pregnancy, the family does not have consistent housing through (mostly staying where people offer for free), and they send Darl away to a mental hospital (in lieu of caring for him – to keep the peace & avoid being sued).',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'The Color Purple - Intro',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple By Alice Walker',
            image: './assets/The_color_Purple_cover.png',
            description: '<em> The Color Purple </em> by Alice Walker follows two sisters, Celie, and Nettie across the early 1900s -1950s. Both sisters are poor black women who get separated in early teenagerhood when Nettie becomes a missionary on the West Coast of Africa, while Celie remains in rural Georgia near Macon. The pair reunite at the end when the pair are both in their mid-forties. The novel is told in an epistolary format and follows the sisters through their lives and journeys across time and space of self-discovery, autonomy, and connection. Despite being an ocean apart, the sisters face many of the same trials and tribulations in navigating complex familial relationships as well as racism and sexism.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'The Color Purple - Mobility',
            alignment: 'left',
            hidden: false,
            title: 'How economic status affected mobility - Celie',
            image: '',
            description: 'From the very beginning of the Novel Celie is trapped in her loveless marriage to her husband (Albert “Mister”), in childhood she lacks the foundational schooling to fully comprehend the inequality of the situation – as she got pregnant by her stepfather (Alphonso) and pulled out of school to be married to Albert. The pair as well as Mister\’s son, Harpo live on a former plantation owned by Mister\’s father as farmers. Mister and Harpo primarily get around using horse and wagon. Celie does not possess the financial means or literacy to escape such conditions and thus writes to God to vent and escape her life. The arrival of Shug Avery, a wealthy singer from Memphis changes all this when she comes to town and begins to teach Celie about herself, love, and independence. Because of Shug\’s profession and economic status, she can travel the country in a car with relative ease. In meeting Shug, Celie begins to learn self-autonomy and gains the knowledge and courage to leave her marriage to go with Shug to Memphis. However, before leaving a notable altercation of perception occurs between Albert and Celie, Alber calls her “You black, you pore, you a woman. Goddam, he say, you nothing at all” while Celie snaps back “I\’m pore, I\’m black, I may be ugly and can\’t cook… but I\’m here” (pg206). Through this altercation, we see how Albert sees Celie firstly for her race – while Celie sees herself firstly for her economic status. Through the eyes of Albert, the main primary factor holding Celie back is her race – while Celie views the driving factor of her immobility and stagnating life as her economic status. With the help of Shug, Celie starts a pant sewing business – where she finds success and can move between Memphis and her hometown with relative ease and frequency. Toward the end of the novel, Celie inherits Alphonso’s house after his passing and moves back home having found herself through economic advancement and self-discovery. ',
            location: {
                center: [-78.8727234890205,38.438444501085634 ], 
                zoom: 7,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'The Color Purple - Mobility',
            alignment: 'left',
            hidden: false,
            title: 'How economic status affected mobility - Nettie',
            image: './assets/christian_nigeria.png',
            description: 'On the other hand, after Nettie is kicked out, she and Celie\’s children (Olivia and Adam) make their way to New York where they are taken in by a couple of missionaries and spend much of their life living with a native tribe (The Olinka) in West Africa. However, before settling in West Africa for a time, she travels to places like London and Southampton in England, as well as Lisbon in Portugal, Dakar in Senegal, and Monrovia in Liberia. While she is able to travel to these locations with the help of the church, she is unsuccessful in her mission of helping the Olinka people re-locate as their land and homes get taken over and repurposed into rubber plantations. When church funds begin to run out, she is unsuccessful in convincing the church to help any further and is forced to dip into her own pocket to try and aid the Olinka. She returns to Georgia after this failure as she begins receiving letters from Celie and wants to reconnect with her sister and have her children meet their birth mother. ',
            location: {
                center: [-78.8727234890205,38.438444501085634 ], 
                zoom: 7,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Salvage the Bones - intro',
            alignment: 'right',
            hidden: false,
            title: 'Salvage The Bones By Jesmyn Ward',
            image: './assets/salvage_the_bones.png',
            description: ' <em> Salvage the Bones </em> by Jesmyn Ward explores the survival story of the Batiste family, a poor black family living in the fictional town of Bois Sauvage, Mississippi (based on the real town of De Lisle) during Hurricane Katrina in 2005. The family consists of the father, Claude, three sons, Randall & Skeetah, and junior, and daughter, Esch (The mother of the family is dead). The story follows the activity of the family beginning ten days before the hurricane, the day of the hurricane, and finally the day after. The novel covers complex concepts like teen pregnancy, family relations, loss, grief, and resilience.',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Salvage the bones - Mobility - one',
            alignment: 'left',
            hidden: false,
            title: 'How economic status affected mobility',
            image: '',
            description: 'The family lives on a large estate (approximately 15 acres inherited through the parents of the mother), despite this, they live in relative poverty as they only have a broken-down garbage truck and Claud’/s pickup truck for transportation, they often rely on a character named Big Henry to drive them to and from town (approximately 2 miles) as well as the nearby coastal town of St. Cathrine (approximately 6 miles away). Although Claud becomes aware of the danger of the hurricane on day one – and insists the family must prepare to shelter in place - the rest of the family ignores him. On day two Skeetah steals money from his father and with Big Henry goes to St. Cathrine where the grocery store is packed with people preparing for the storm and yet he only buys expensive dog food for his dog China, and Esch steals a pregnancy test. On day four after China gives birth to puppies she comes down with parvovirus and instead of taking her to the vet, Skeetah decides to steal cow de-wormer from an elderly white couple of farmers. While Randall is initially against this plan, he decides to go along with it as the puppies could be worth up to $800 which would pay for his basketball camp. Additionally, Esch reflects on the economic and racial divide of Bois Sauvage, saying “We rode up and out of the black Bois and into the white Bois”, she relates this to wondering if white children had to resort to stealing “I wonder if they have their own Skeethas and Esches crawling around the edges of their fields like ants under the floorboards marching in line toward sugar left open in the cabinet” (pg71). Through Esch\’s comments, it is revealed how the racial and economic divide between the white and black communities has grown larger – and how the family is keenly aware of their lack of agency within their community.',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Salvage the bones - Mobility - two',
            alignment: 'left',
            hidden: false,
            title: 'How economic status affected mobility',
            image: '',
            description: 'On day nine, the family hears on the radio that Hurricane Katrina is a CAT 3 and begins to take it seriously – although it is too late to leave, and besides they have nowhere else to go and no way of leaving as Claud\’s truck does not fit them all. Skeetah again steals money from his father, and he goes with Big Henry back to St. Cathrine but does not bring back enough food and the family must harvest eggs from chickens on the property. Also, during storm preparation, the family collects rainwater in jugs and frequently breaks down the decaying house of their grandparent’/s for boards to cover up the windows of their house. On the tenth day, Randall and Esch go back to the elderly couple’/s farm to try and steal food from them but find the place abandoned as they likely evacuated.Despite taking place in 2005, poverty more than race, affects the Batiste household in their mobility. Their lack of transportation means their friend must drive them around, they resort to stealing on multiple occasions, the old radio in the pickup and TV distorts news of the impending hurricane delay and impede their knowledge of the Katrina\’s location, and they do not possess the means nor destination if they had chosen to leave earlier.',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Paralell & conclusion',
            alignment: 'center',
            hidden: false,
            title: 'Drawing Parallels & Conclusions',
            image: '',
            description: 'Of the three novels, two take place in rural communities (Mississippi & Georgia / Tennessee) during the early to mid-1900s although one features a poor white family and the other features a pair of poor black sisters. Despite their race, the Bundren family in <em> As I Lay Dying </em> struggles significantly through their forty-mile journey over nine days due to their economic status – and are even looked down upon by other white people because of their status in Jefferson. Throughout the novel, their economic status does not change and therefore their mobility capabilities do not change. While on the contrary, Celie and Nettie in <em> The Color Purple </em> also face extreme hardship when they are impoverished but, they begin to become more mobile as they gain more capital (Celie with Shug Avery & starting her own business – and Nettie with her work with the church). Additionally, instead of being looked down upon by other members of their race – both women are uplifted by those of higher status instead of being put down. What this suggests then, is that poverty is the great equalizer regardless of race – both the impoverished white and black communities face similar problems and lack of mobility due to their severe lack of available resources and support.',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Paralell & conclusion',
            alignment: 'center',
            hidden: false,
            title: 'Drawing Parallels & Conclusions',
            image: '',
            description: 'In time jumping to a rural community in Louisiana during 2005, we see the Batiste family in  <em> Salvage the Bones </em> squandering their inherited land (actively decreasing in economic resources as Claud can not work anymore & none of the children work). Between <em>The Color Purple </em> and <em> Salvage The Bones</em> we see the idea of those in the higher economic black community uplifting and helping each other out members of the lower class black community (Celie & Shug – Big Henry & the Batiste family). Between <em> As I Lay Dying </em> and <em> Salvage The Bones </em> we see the struggle to secure proper medical care (Cash & China) – although the Batiste family is able to get immediate help for Claud when hi\’s fingers are sliced off & they promise to take Esch to the doctor when they find out she is pregnant (compared to Dewey Dell who is conned out of seeking care). Where the Batiste differ from both the white and black communities of the 1900s is in their perennity stealing – throughout the novel Skeetah steals money from his father, Skeetah steals cow dewormer from a farm, Esch steals a pregnancy test, Randall & Esch go back the farm to try and steal food. The aspect of economics being a major contributing factor aside from race is prevented in all three rural communities across white and black communities and across a period of over fifty years. However, In resorting to stealing, while certain aspects of being poor have improved (like getting limited medical care), the overall conditions have gotten worse as well and the disparities between economic groups have widened - and therefore mobility disparity has also increased.',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Conclusion',
            alignment: 'center',
            hidden: false,
            title: 'Power and Limitations of the Database',
            image: '',
            description: 'The database proves to be a powerful tool to map major movements and economic exchange throughout a text, using it we create a real-world visual representation of words onto paper – this allows us to inspect elements of text through a non-traditional Lens in seeing trends rather than analyzing words to find trends. Through the database, we can see a correlation in novels between economic status and mobility. Where a character gaining economic status or is already in a higher state has more purchasing power, access to resources, and mobility. However, major limitations of the database are seen as there is no information attached to the data points other than movement occurred or an economic exchange took place. Additionally, there are no lines connecting where the movement occurred from or to (nor is there an indication of who or how they moved – nor who bought what or how). You have to have read the novel for the database to make sense especially (you have the have an idea of what dot represents what plot point). Something to fix this, although a lot of extra work would be to implement text boxes like in Digital Yoknapatawpha that give context and page numbers to the data point.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};