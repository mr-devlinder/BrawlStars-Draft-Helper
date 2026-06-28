import { asset } from "../utils/assets"



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

        image: asset("/brawlers/shelly.png"),

        rarity: "starter"

    },

    {

        name: "Nita",

        image: asset("/brawlers/nita.png"),

        rarity: "rare"

    },

    {

        name: "Colt",

        image: asset("/brawlers/colt.png"),

        rarity: "rare"

    },

    {

        name: "Bull",

        image: asset("/brawlers/bull.png"),

        rarity: "rare"

    },

    {

        name: "Brock",

        image: asset("/brawlers/brock.png"),

        rarity: "rare"

    },

    {

        name: "El Primo",

        image: asset("/brawlers/elprimo.png"),

        rarity: "rare"

    },

    {

        name: "Barley",

        image: asset("/brawlers/barley.png"),

        rarity: "rare"

    },

    {

        name: "Poco",

        image: asset("/brawlers/poco.png"),

        rarity: "rare"

    },

    {

        name: "Rosa",

        image: asset("/brawlers/rosa.png"),

        rarity: "rare"

    },

    {

        name: "Jessie",

        image: asset("/brawlers/jessie.png"),

        rarity: "superRare"

    },

    {

        name: "Dynamike",

        image: asset("/brawlers/dynamike.png"),

        rarity: "superRare"

    },

    {

        name: "Tick",

        image: asset("/brawlers/tick.png"),

        rarity: "superRare"

    },

    {

        name: "8-Bit",

        image: asset("/brawlers/8-bit.png"),

        rarity: "superRare"

    },

    {

        name: "Rico",

        image: asset("/brawlers/rico.png"),

        rarity: "superRare"

    },

    {

        name: "Darryl",

        image: asset("/brawlers/darryl.png"),

        rarity: "superRare"

    },

    {

        name: "Penny",

        image: asset("/brawlers/penny.png"),

        rarity: "superRare"

    },

    {

        name: "Carl",

        image: asset("/brawlers/carl.png"),

        rarity: "superRare"

    },

    {

        name: "Jacky",

        image: asset("/brawlers/jacky.png"),

        rarity: "superRare"

    },

    {

        name: "Gus",

        image: asset("/brawlers/gus.png"),

        rarity: "superRare"

    },

    {

        name: "Bo",

        image: asset("/brawlers/bo.png"),

        rarity: "epic"

    },

    {

        name: "Emz",

        image: asset("/brawlers/emz.png"),

        rarity: "epic"

    },

    {

        name: "Stu",

        image: asset("/brawlers/stu.png"),

        rarity: "epic"

    },

    {

        name: "Piper",

        image: asset("/brawlers/piper.png"),

        rarity: "epic"

    },

    {

        name: "Pam",

        image: asset("/brawlers/pam.png"),

        rarity: "epic"

    },

    {

        name: "Bolt",

        image: asset("/brawlers/bolt.png"),

        rarity: "epic"

    },

    {

        name: "Frank",

        image: asset("/brawlers/frank.png"),

        rarity: "epic"

    },

    {

        name: "Bibi",

        image: asset("/brawlers/bibi.png"),

        rarity: "epic"

    },

    {

        name: "Bea",

        image: asset("/brawlers/bea.png"),

        rarity: "epic"

    },

    {

        name: "Nani",

        image: asset("/brawlers/nani.png"),

        rarity: "epic"

    },

    {

        name: "Edgar",

        image: asset("/brawlers/edgar.png"),

        rarity: "epic"

    },

    {

        name: "Griff",

        image: asset("/brawlers/griff.png"),

        rarity: "epic"

    },

    {

        name: "Grom",

        image: asset("/brawlers/grom.png"),

        rarity: "epic"

    },

    {

        name: "Bonnie",

        image: asset("/brawlers/bonnie.png"),

        rarity: "epic"

    },

    {

        name: "Gale",

        image: asset("/brawlers/gale.png"),

        rarity: "epic"

    },

    {

        name: "Colette",

        image: asset("/brawlers/colette.png"),

        rarity: "epic"

    },

    {

        name: "Belle",

        image: asset("/brawlers/belle.png"),

        rarity: "epic"

    },

    {

        name: "Ash",

        image: asset("/brawlers/ash.png"),

        rarity: "epic"

    },

    {

        name: "Lola",

        image: asset("/brawlers/lola.png"),

        rarity: "epic"

    },

    {

        name: "Sam",

        image: asset("/brawlers/sam.png"),

        rarity: "epic"

    },

    {

        name: "Mandy",

        image: asset("/brawlers/mandy.png"),

        rarity: "epic"

    },

    {

        name: "Maisie",

        image: asset("/brawlers/maisie.png"),

        rarity: "epic"

    },

    {

        name: "Hank",

        image: asset("/brawlers/hank.png"),

        rarity: "epic"

    },

    {

        name: "Pearl",

        image: asset("/brawlers/pearl.png"),

        rarity: "epic"

    },

    {

        name: "Larry & Lawrie",

        image: asset("/brawlers/larrylawrie.png"),

        rarity: "epic"

    },

    {

        name: "Angelo",

        image: asset("/brawlers/angelo.png"),

        rarity: "epic"

    },

    {

        name: "Berry",

        image: asset("/brawlers/berry.png"),

        rarity: "epic"

    },
    {

        name: "Shade",

        image: asset("/brawlers/shade.png"),

        rarity: "epic"

    },
    {

        name: "Meeple",

        image: asset("/brawlers/meeple.png"),

        rarity: "epic"

    },

    {

        name: "Trunk",

        image: asset("/brawlers/trunk.png"),

        rarity: "epic"

    },

    {

        name: "Mortis",

        image: asset("/brawlers/mortis.png"),

        rarity: "mythic"

    },

    {

        name: "Tara",

        image: asset("/brawlers/tara.png"),

        rarity: "mythic"

    },

    {

        name: "Gene",

        image: asset("/brawlers/gene.png"),

        rarity: "mythic"

    },

    {

        name: "Max",

        image: asset("/brawlers/max.png"),

        rarity: "mythic"

    },

    {

        name: "Mr. P",

        image: asset("/brawlers/mrp.png"),

        rarity: "mythic"

    },

    {

        name: "Sprout",

        image: asset("/brawlers/sprout.png"),

        rarity: "mythic"

    },

    {

        name: "Byron",

        image: asset("/brawlers/byron.png"),

        rarity: "mythic"

    },

    {

        name: "Squeak",

        image: asset("/brawlers/squeak.png"),

        rarity: "mythic"

    },

    {

        name: "Lou",

        image: asset("/brawlers/lou.png"),

        rarity: "mythic"

    },

    {

        name: "Ruffs",

        image: asset("/brawlers/ruffs.png"),

        rarity: "mythic"

    },

    {

        name: "Buzz",

        image: asset("/brawlers/buzz.png"),

        rarity: "mythic"

    },

    {

        name: "Fang",

        image: asset("/brawlers/fang.png"),

        rarity: "mythic"

    },

    {

        name: "Eve",

        image: asset("/brawlers/eve.png"),

        rarity: "mythic"

    },

    {

        name: "Janet",

        image: asset("/brawlers/janet.png"),

        rarity: "mythic"

    },

    {

        name: "Otis",

        image: asset("/brawlers/otis.png"),

        rarity: "mythic"

    },

    {

        name: "Buster",

        image: asset("/brawlers/buster.png"),

        rarity: "mythic"

    },

    {

        name: "Gray",

        image: asset("/brawlers/gray.png"),

        rarity: "mythic"

    },

    {

        name: "R-T",

        image: asset("/brawlers/r-t.png"),

        rarity: "mythic"

    },

    {

        name: "Willow",

        image: asset("/brawlers/willow.png"),

        rarity: "mythic"

    },

    {

        name: "Doug",

        image: asset("/brawlers/doug.png"),

        rarity: "mythic"

    },

    {

        name: "Chuck",

        image: asset("/brawlers/chuck.png"),

        rarity: "mythic"

    },

    {

        name: "Charlie",

        image: asset("/brawlers/charlie.png"),

        rarity: "mythic"

    },

    {

        name: "Mico",

        image: asset("/brawlers/mico.png"),

        rarity: "mythic"

    },

    {

        name: "Melodie",

        image: asset("/brawlers/melodie.png"),

        rarity: "mythic"

    },

    {

        name: "Lily",

        image: asset("/brawlers/lily.png"),

        rarity: "mythic"

    },

    {

        name: "Clancy",

        image: asset("/brawlers/clancy.png"),

        rarity: "mythic"

    },

    {

        name: "Moe",

        image: asset("/brawlers/moe.png"),

        rarity: "mythic"

    },

    {

        name: "Juju",

        image: asset("/brawlers/juju.png"),

        rarity: "mythic"

    },

    {

        name: "Ollie",

        image: asset("/brawlers/ollie.png"),

        rarity: "mythic"

    },

    {

        name: "Lumi",

        image: asset("/brawlers/lumi.png"),

        rarity: "mythic"

    },

    {

        name: "Finx",

        image: asset("/brawlers/finx.png"),

        rarity: "mythic"

    },

    {

        name: "Jae-yong",

        image: asset("/brawlers/jae-yong.png"),

        rarity: "mythic"

    },

    {

        name: "Alli",

        image: asset("/brawlers/alli.png"),

        rarity: "mythic"

    },

    {

        name: "Mina",

        image: asset("/brawlers/mina.png"),

        rarity: "mythic"

    },

    {

        name: "Ziggy",

        image: asset("/brawlers/ziggy.png"),

        rarity: "mythic"

    },

    {

        name: "Gigi",

        image: asset("/brawlers/gigi.png"),

        rarity: "mythic"

    },

    {

        name: "Glowy",

        image: asset("/brawlers/glowy.png"),

        rarity: "mythic"

    },

    {

        name: "Najia",

        image: asset("/brawlers/najia.png"),

        rarity: "mythic"

    },

    {

        name: "Starr Nova",

        image: asset("/brawlers/starrnova.png"),

        rarity: "mythic"

    },

    {

        name: "Damian",

        image: asset("/brawlers/damian.png"),

        rarity: "mythic"

    },

    {

        name: "Spike",

        image: asset("/brawlers/spike.png"),

        rarity: "legendary"

    },

    {

        name: "Crow",

        image: asset("/brawlers/crow.png"),

        rarity: "legendary"

    },

    {

        name: "Leon",

        image: asset("/brawlers/leon.png"),

        rarity: "legendary"

    },

    {

        name: "Sandy",

        image: asset("/brawlers/sandy.png"),

        rarity: "legendary"

    },

    {

        name: "Amber",

        image: asset("/brawlers/amber.png"),

        rarity: "legendary"

    },

    {

        name: "Meg",

        image: asset("/brawlers/meg.png"),

        rarity: "legendary"

    },

    {

        name: "Surge",

        image: asset("/brawlers/surge.png"),

        rarity: "legendary"

    },

    {

        name: "Chester",

        image: asset("/brawlers/chester.png"),

        rarity: "legendary"

    },

    {

        name: "Cordelius",

        image: asset("/brawlers/cordelius.png"),

        rarity: "legendary"

    },

    {

        name: "Kit",

        image: asset("/brawlers/kit.png"),

        rarity: "legendary"

    },

    {

        name: "Draco",

        image: asset("/brawlers/draco.png"),

        rarity: "legendary"

    },

    {

        name: "Kenji",

        image: asset("/brawlers/kenji.png"),

        rarity: "legendary"

    },

    {

        name: "Pierce",

        image: asset("/brawlers/pierce.png"),

        rarity: "legendary"

    },

    {

        name: "Kaze",

        image: asset("/brawlers/kaze.png"),

        rarity: "ultraLegendary"

    },

    {

        name: "Sirius",

        image: asset("/brawlers/sirius.png"),

        rarity: "ultraLegendary"

    },

]