export type BrawlerRarity =
    | "starter"
    | "rare"
    | "superRare"
    | "epic"
    | "mythic"
    | "legendary"
    | "ultraLegendary"


export type Brawler = {
    name: string
    image: string
    rarity: BrawlerRarity
}

export const brawlers: Brawler[] = [
    {
        name: "Shelly",
        image: "/brawlers/shelly.png",
        rarity: "starter"
    },
    {
        name: "Nita",
        image: "/brawlers/nita.png",
        rarity: "rare"
    },
    {
        name: "Colt",
        image: "/brawlers/colt.png",
        rarity: "rare"
    },
    {
        name: "Bull",
        image: "/brawlers/bull.png",
        rarity: "rare"
    },
    {
        name: "Brock",
        image: "/brawlers/brock.png",
        rarity: "rare"
    },
    {
        name: "El Primo",
        image: "/brawlers/elprimo.png",
        rarity: "rare"
    },
    {
        name: "Barley",
        image: "/brawlers/barley.png",
        rarity: "rare"
    },
    {
        name: "Poco",
        image: "/brawlers/poco.png",
        rarity: "rare"
    },
    {
        name: "Rosa",
        image: "/brawlers/rosa.png",
        rarity: "rare"
    },
    {
        name: "Jessie",
        image: "/brawlers/jessie.png",
        rarity: "superRare"
    },
    {
        name: "Dynamike",
        image: "/brawlers/dynamike.png",
        rarity: "superRare"
    },
    {
        name: "Tick",
        image: "/brawlers/tick.png",
        rarity: "superRare"
    },
    {
        name: "8-Bit",
        image: "/brawlers/8-bit.png",
        rarity: "superRare"
    },
    {
        name: "Rico",
        image: "/brawlers/rico.png",
        rarity: "superRare"
    },
    {
        name: "Darryl",
        image: "/brawlers/darryl.png",
        rarity: "superRare"
    },
    {
        name: "Penny",
        image: "/brawlers/penny.png",
        rarity: "superRare"
    },
    {
        name: "Carl",
        image: "/brawlers/carl.png",
        rarity: "superRare"
    },
    {
        name: "Jacky",
        image: "/brawlers/jacky.png",
        rarity: "superRare"
    },
    {
        name: "Gus",
        image: "/brawlers/gus.png",
        rarity: "superRare"
    },
    {
        name: "Bo",
        image: "/brawlers/bo.png",
        rarity: "epic"
    },
    {
        name: "Emz",
        image: "/brawlers/emz.png",
        rarity: "epic"
    },
    {
        name: "Stu",
        image: "/brawlers/stu.png",
        rarity: "epic"
    },
    {
        name: "Piper",
        image: "/brawlers/piper.png",
        rarity: "epic"
    },
    {
        name: "Pam",
        image: "/brawlers/pam.png",
        rarity: "epic"
    },
    {
        name: "Bolt",
        image: "/brawlers/bolt.png",
        rarity: "epic"
    },
    {
        name: "Frank",
        image: "/brawlers/frank.png",
        rarity: "epic"
    },
    {
        name: "Bibi",
        image: "/brawlers/bibi.png",
        rarity: "epic"
    },
    {
        name: "Bea",
        image: "/brawlers/bea.png",
        rarity: "epic"
    },
    {
        name: "Nani",
        image: "/brawlers/nani.png",
        rarity: "epic"
    },
    {
        name: "Edgar",
        image: "/brawlers/edgar.png",
        rarity: "epic"
    },
    {
        name: "Griff",
        image: "/brawlers/griff.png",
        rarity: "epic"
    },
    {
        name: "Grom",
        image: "/brawlers/grom.png",
        rarity: "epic"
    },
    {
        name: "Bonnie",
        image: "/brawlers/bonnie.png",
        rarity: "epic"
    },
    {
        name: "Gale",
        image: "/brawlers/gale.png",
        rarity: "epic"
    },
    {
        name: "Colette",
        image: "/brawlers/colette.png",
        rarity: "epic"
    },
    {
        name: "Belle",
        image: "/brawlers/belle.png",
        rarity: "epic"
    },
    {
        name: "Ash",
        image: "/brawlers/ash.png",
        rarity: "epic"
    },
    {
        name: "Lola",
        image: "/brawlers/lola.png",
        rarity: "epic"
    },
    {
        name: "Sam",
        image: "/brawlers/sam.png",
        rarity: "epic"
    },
    {
        name: "Mandy",
        image: "/brawlers/mandy.png",
        rarity: "epic"
    },
    {
        name: "Maisie",
        image: "/brawlers/maisie.png",
        rarity: "epic"
    },
    {
        name: "Hank",
        image: "/brawlers/hank.png",
        rarity: "epic"
    },
    {
        name: "Pearl",
        image: "/brawlers/pearl.png",
        rarity: "epic"
    },
    {
        name: "Larry & Lawrie",
        image: "/brawlers/larrylawrie.png",
        rarity: "epic"
    },
    {
        name: "Angelo",
        image: "/brawlers/angelo.png",
        rarity: "epic"
    },
    {
        name: "Berry",
        image: "/brawlers/berry.png",
        rarity: "epic"
    },
    {
        name: "Shade",
        image: "/brawlers/shade.png",
        rarity: "epic"
    },
    {
        name: "Meeple",
        image: "/brawlers/meeple.png",
        rarity: "epic"
    },
    {
        name: "Trunk",
        image: "/brawlers/trunk.png",
        rarity: "epic"
    },
    {
        name: "Mortis",
        image: "/brawlers/Mortis.png",
        rarity: "mythic"
    },
    {
        name: "Tara",
        image: "/brawlers/tara.png",
        rarity: "mythic"
    },
    {
        name: "Gene",
        image: "/brawlers/gene.png",
        rarity: "mythic"
    },
    {
        name: "Max",
        image: "/brawlers/Max.png",
        rarity: "mythic"
    },
    {
        name: "Mr. P",
        image: "/brawlers/mrp.png",
        rarity: "mythic"
    },
    {
        name: "Sprout",
        image: "/brawlers/sprout.png",
        rarity: "mythic"
    },
    {
        name: "Byron",
        image: "/brawlers/byron.png",
        rarity: "mythic"
    },
    {
        name: "Squeak",
        image: "/brawlers/squeak.png",
        rarity: "mythic"
    },
    {
        name: "Lou",
        image: "/brawlers/lou.png",
        rarity: "mythic"
    },
    {
        name: "Ruffs",
        image: "/brawlers/ruffs.png",
        rarity: "mythic"
    },
    {
        name: "Buzz",
        image: "/brawlers/buzz.png",
        rarity: "mythic"
    },
    {
        name: "Fang",
        image: "/brawlers/fang.png",
        rarity: "mythic"
    },
    {
        name: "Eve",
        image: "/brawlers/eve.png",
        rarity: "mythic"
    },
    {
        name: "Janet",
        image: "/brawlers/janet.png",
        rarity: "mythic"
    },
    {
        name: "Otis",
        image: "/brawlers/otis.png",
        rarity: "mythic"
    },
    {
        name: "Buster",
        image: "/brawlers/buster.png",
        rarity: "mythic"
    },
    {
        name: "Grey",
        image: "/brawlers/grey.png",
        rarity: "mythic"
    },
    {
        name: "R-T",
        image: "/brawlers/r-t.png",
        rarity: "mythic"
    },
    {
        name: "Willow",
        image: "/brawlers/willow.png",
        rarity: "mythic"
    },
    {
        name: "Doug",
        image: "/brawlers/doug.png",
        rarity: "mythic"
    },
    {
        name: "Chuck",
        image: "/brawlers/chuck.png",
        rarity: "mythic"
    },
    {
        name: "Charlie",
        image: "/brawlers/charlie.png",
        rarity: "mythic"
    },
    {
        name: "Mico",
        image: "/brawlers/mico.png",
        rarity: "mythic"
    },
    {
        name: "Melodie",
        image: "/brawlers/melodie.png",
        rarity: "mythic"
    },
    {
        name: "Lily",
        image: "/brawlers/lily.png",
        rarity: "mythic"
    },
    {
        name: "Clancy",
        image: "/brawlers/clancy.png",
        rarity: "mythic"
    },
    {
        name: "Moe",
        image: "/brawlers/moe.png",
        rarity: "mythic"
    },
    {
        name: "Juju",
        image: "/brawlers/juju.png",
        rarity: "mythic"
    },
    {
        name: "Ollie",
        image: "/brawlers/ollie.png",
        rarity: "mythic"
    },
    {
        name: "Lumi",
        image: "/brawlers/lumi.png",
        rarity: "mythic"
    },
    {
        name: "Finx",
        image: "/brawlers/finx.png",
        rarity: "mythic"
    },
    {
        name: "Jae-yong",
        image: "/brawlers/jae-yong.png",
        rarity: "mythic"
    },
    {
        name: "Alli",
        image: "/brawlers/alli.png",
        rarity: "mythic"
    },
    {
        name: "Mina",
        image: "/brawlers/mina.png",
        rarity: "mythic"
    },
    {
        name: "Ziggy",
        image: "/brawlers/ziggy.png",
        rarity: "mythic"
    },
    {
        name: "Gigi",
        image: "/brawlers/gigi.png",
        rarity: "mythic"
    },
    {
        name: "Glowy",
        image: "/brawlers/glowy.png",
        rarity: "mythic"
    },
    {
        name: "Najia",
        image: "/brawlers/najia.png",
        rarity: "mythic"
    },
    {
        name: "Star Nova",
        image: "/brawlers/starnova.png",
        rarity: "mythic"
    },
    {
        name: "Damian",
        image: "/brawlers/damian.png",
        rarity: "mythic"
    },
    {
        name: "Spike",
        image: "/brawlers/spike.png",
        rarity: "legendary"
    },
    {
        name: "Crow",
        image: "/brawlers/crow.png",
        rarity: "legendary"
    },
    {
        name: "Leon",
        image: "/brawlers/leon.png",
        rarity: "legendary"
    },
    {
        name: "Sandy",
        image: "/brawlers/sandy.png",
        rarity: "legendary"
    },
    {
        name: "Amber",
        image: "/brawlers/amber.png",
        rarity: "legendary"
    },
    {
        name: "Meg",
        image: "/brawlers/meg.png",
        rarity: "legendary"
    },
    {
        name: "Surge",
        image: "/brawlers/surge.png",
        rarity: "legendary"
    },
    {
        name: "Chester",
        image: "/brawlers/chester.png",
        rarity: "legendary"
    },
    {
        name: "Cordelius",
        image: "/brawlers/cordelius.png",
        rarity: "legendary"
    },
    {
        name: "Kit",
        image: "/brawlers/kit.png",
        rarity: "legendary"
    },
    {
        name: "Draco",
        image: "/brawlers/draco.png",
        rarity: "legendary"
    },
    {
        name: "Kenji",
        image: "/brawlers/kenji.png",
        rarity: "legendary"
    },
    {
        name: "Pierce",
        image: "/brawlers/pierce.png",
        rarity: "legendary"
    },
    {
        name: "Kaze",
        image: "/brawlers/kaze.png",
        rarity: "ultraLegendary"
    },
    {
        name: "Sirius",
        image: "/brawlers/sirius.png",
        rarity: "ultraLegendary"
    },
]