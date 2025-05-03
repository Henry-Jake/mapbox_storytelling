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
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'As I Lay Dying By Willaim Faulkner',
            image: './assets/As_I_Lay_Dying_Cover.png',
            description:'I Lay Dying by William Faulkner takes place in rural Mississippi during the early 1920s in the fictional county of Yoknapatawpha. The Bundren family are poor white farmers who live on the outskirts of town and whose mother (Addie Bundren) is sick and who eventually dies. She is survived by her husband (Anse) and their children, Cash, Darl, Jewels, Dewy Dell, and Vardaman – ages. The main objective of the novel is to bury Addie Bundren in Jefferson. This journey proves extremely challenging due to the lack of resources the family possesses. The family struggles for approximately nine days to take her body some forty miles into the city. The novel explores topics like loss, grief, teen pregnancy, and poverty.',
            location: {
                center: [-83.5573651, 32.5573651],
                zoom: 6.5,
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
            id: 'chapter-two',
            alignment: 'left',
            hidden: false,
            title: 'How economic status affected mobility ',
            image: './assets/Digital_YA.png',
            description: 'Despite being white, the Bundrens\’s lack of financial resources due to their economic class negatively impacts nearly every aspect of their journey. Firstly, a doctor is not called for Addie until it is certainly too late because it is too expensive. After her death, the family embarks on their journey to Jefferson using a buggy and mules carrying Addie\’s corpse. Even though cars existed in this time (“we approach the crest, where the street runs, where cars go back and forth; the mules haul the wagon up and onto the crest and the street” ) (pg231). There is also a repeated sentiment of needing to make $3, so much so that Darl and Jewel are gone when their mother dies. Early into their journey, the family comes across a flooded and broken bridge, having neither the time nor resources to get across the river, the family wades through and ends up drowning the mules. Unable to afford new ones, the Anse sells Jewels\’s horse to pay for a new fleet (without telling him.) In this same altercation, Cash breaks his leg, and the family self-medicates him by fashioning a splint supported with cement to delay taking him to the doctor. Along their journey, the family does not have reliable housing and relies mostly upon the (idealized notion of southern hospitality) to stay in random people\’s barns – homes. Another layer of financial instability is Dewey Dell\’s inability to afford contraceptives for her pregnancy (only has $10). Toward the end of the novel, upon reaching Jefferson the family encounters two black men and a white man who all equally scuffle at the sight of the family and smell off the wagon. In burying their mother, they borrow the shovels, and Anse takes Dewey Dell\’s money to buy himself a new set of teeth. The family takes Cash to the same doctor they called for Addie who comments “Of course he\’d have to borrow a spade to bury his wife with. Unless he could borrow a hole in the ground,” (pg240) and who actually gives the family money to stay in a hotel for the night.',
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
            id: 'chapter-two-end',
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
            id: 'chapter-three',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple By Alice Walker',
            image: './assets/The_Color_Purple_Cover.png',
            description: '<em>The Color Purple <em> by Alice Walker follows two sisters, Celie, and Nettie across the early 1900s -1950s. Both sisters are poor black women who get separated in early teenagerhood when Nettie becomes a missionary on the West Coast of Africa, while Celie remains in rural Georgia near Macon. The pair reunite at the end when the pair are both in their mid-forties. The novel is told in an epistolary format and follows the sisters through their lives and journeys across time and space of self-discovery, autonomy, and connection. Despite being an ocean apart, the sisters face many of the same trials and tribulations in navigating complex familial relationships as well as racism and sexism.',
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
            id: 'Chapter-Harrisonburg',
            alignment: 'left',
            hidden: false,
            title: 'How economic status affected mobility',
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
            id: 'chapter-five',
            alignment: 'right',
            hidden: false,
            title: 'Five',
            image: './assets/firestone_farm.jpg',
            description: 'Description of the Olinka people',
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
            id: 'chapter-six',
            alignment: 'left',
            hidden: false,
            title: 'Six',
            image: './assets/firestone_farm.jpg',
            description: 'Description of the Olinka people',
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
            id: 'chapter-seven',
            alignment: 'right',
            hidden: false,
            title: 'seven',
            image: './assets/firestone_farm.jpg',
            description: 'Description of the Olinka people',
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
            id: 'chapter-eight',
            alignment: 'left',
            hidden: false,
            title: 'Eight',
            image: './assets/firestone_farm.jpg',
            description: 'Description of the Olinka people',
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
            title: 'Conclusion',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
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