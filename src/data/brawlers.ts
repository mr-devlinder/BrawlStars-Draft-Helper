import { asset } from "../utils/assets"



export type BrawlerRarity =

    | "Starter"

    | "Rare"

    | "Super Rare"

    | "Epic"

    | "Mythic"

    | "Legendary"

    | "Ultra Legendary"





export type Brawler = {

    name: string

    image: string

    rarity: BrawlerRarity

}



export const brawlers: Brawler[] = [

    {

        name: "Shelly",

        image: asset("/brawlers/shelly.png"),

        rarity: "Starter"

    },

    {

        name: "Nita",

        image: asset("/brawlers/nita.png"),

        rarity: "Rare"

    },

    {

        name: "Colt",

        image: asset("/brawlers/colt.png"),

        rarity: "Rare"

    },

    {

        name: "Bull",

        image: asset("/brawlers/bull.png"),

        rarity: "Rare"

    },

    {

        name: "Brock",

        image: asset("/brawlers/brock.png"),

        rarity: "Rare"

    },

    {

        name: "El Primo",

        image: asset("/brawlers/elprimo.png"),

        rarity: "Rare"

    },

    {

        name: "Barley",

        image: asset("/brawlers/barley.png"),

        rarity: "Rare"

    },

    {

        name: "Poco",

        image: asset("/brawlers/poco.png"),

        rarity: "Rare"

    },

    {

        name: "Rosa",

        image: asset("/brawlers/rosa.png"),

        rarity: "Rare"

    },

    {

        name: "Jessie",

        image: asset("/brawlers/jessie.png"),

        rarity: "Super Rare"

    },

    {

        name: "Dynamike",

        image: asset("/brawlers/dynamike.png"),

        rarity: "Super Rare"

    },

    {

        name: "Tick",

        image: asset("/brawlers/tick.png"),

        rarity: "Super Rare"

    },

    {

        name: "8-Bit",

        image: asset("/brawlers/8-bit.png"),

        rarity: "Super Rare"

    },

    {

        name: "Rico",

        image: asset("/brawlers/rico.png"),

        rarity: "Super Rare"

    },

    {

        name: "Darryl",

        image: asset("/brawlers/darryl.png"),

        rarity: "Super Rare"

    },

    {

        name: "Penny",

        image: asset("/brawlers/penny.png"),

        rarity: "Super Rare"

    },

    {

        name: "Carl",

        image: asset("/brawlers/carl.png"),

        rarity: "Super Rare"

    },

    {

        name: "Jacky",

        image: asset("/brawlers/jacky.png"),

        rarity: "Super Rare"

    },

    {

        name: "Gus",

        image: asset("/brawlers/gus.png"),

        rarity: "Super Rare"

    },

    {

        name: "Bo",

        image: asset("/brawlers/bo.png"),

        rarity: "Epic"

    },

    {

        name: "Emz",

        image: asset("/brawlers/emz.png"),

        rarity: "Epic"

    },

    {

        name: "Stu",

        image: asset("/brawlers/stu.png"),

        rarity: "Epic"

    },

    {

        name: "Piper",

        image: asset("/brawlers/piper.png"),

        rarity: "Epic"

    },

    {

        name: "Pam",

        image: asset("/brawlers/pam.png"),

        rarity: "Epic"

    },

    {

        name: "Bolt",

        image: asset("/brawlers/bolt.png"),

        rarity: "Epic"

    },

    {

        name: "Frank",

        image: asset("/brawlers/frank.png"),

        rarity: "Epic"

    },

    {

        name: "Bibi",

        image: asset("/brawlers/bibi.png"),

        rarity: "Epic"

    },

    {

        name: "Bea",

        image: asset("/brawlers/bea.png"),

        rarity: "Epic"

    },

    {

        name: "Nani",

        image: asset("/brawlers/nani.png"),

        rarity: "Epic"

    },

    {

        name: "Edgar",

        image: asset("/brawlers/edgar.png"),

        rarity: "Epic"

    },

    {

        name: "Griff",

        image: asset("/brawlers/griff.png"),

        rarity: "Epic"

    },

    {

        name: "Grom",

        image: asset("/brawlers/grom.png"),

        rarity: "Epic"

    },

    {

        name: "Bonnie",

        image: asset("/brawlers/bonnie.png"),

        rarity: "Epic"

    },

    {

        name: "Gale",

        image: asset("/brawlers/gale.png"),

        rarity: "Epic"

    },

    {

        name: "Colette",

        image: asset("/brawlers/colette.png"),

        rarity: "Epic"

    },

    {

        name: "Belle",

        image: asset("/brawlers/belle.png"),

        rarity: "Epic"

    },

    {

        name: "Ash",

        image: asset("/brawlers/ash.png"),

        rarity: "Epic"

    },

    {

        name: "Lola",

        image: asset("/brawlers/lola.png"),

        rarity: "Epic"

    },

    {

        name: "Sam",

        image: asset("/brawlers/sam.png"),

        rarity: "Epic"

    },

    {

        name: "Mandy",

        image: asset("/brawlers/mandy.png"),

        rarity: "Epic"

    },

    {

        name: "Maisie",

        image: asset("/brawlers/maisie.png"),

        rarity: "Epic"

    },

    {

        name: "Hank",

        image: asset("/brawlers/hank.png"),

        rarity: "Epic"

    },

    {

        name: "Pearl",

        image: asset("/brawlers/pearl.png"),

        rarity: "Epic"

    },

    {

        name: "Larry & Lawrie",

        image: asset("/brawlers/larrylawrie.png"),

        rarity: "Epic"

    },

    {

        name: "Angelo",

        image: asset("/brawlers/angelo.png"),

        rarity: "Epic"

    },

    {

        name: "Berry",

        image: asset("/brawlers/berry.png"),

        rarity: "Epic"

    },
    {

        name: "Shade",

        image: asset("/brawlers/shade.png"),

        rarity: "Epic"

    },
    {

        name: "Meeple",

        image: asset("/brawlers/meeple.png"),

        rarity: "Epic"

    },

    {

        name: "Trunk",

        image: asset("/brawlers/trunk.png"),

        rarity: "Epic"

    },

    {

        name: "Mortis",

        image: asset("/brawlers/mortis.png"),

        rarity: "Mythic"

    },

    {

        name: "Tara",

        image: asset("/brawlers/tara.png"),

        rarity: "Mythic"

    },

    {

        name: "Gene",

        image: asset("/brawlers/gene.png"),

        rarity: "Mythic"

    },

    {

        name: "Max",

        image: asset("/brawlers/max.png"),

        rarity: "Mythic"

    },

    {

        name: "Mr. P",

        image: asset("/brawlers/mrp.png"),

        rarity: "Mythic"

    },

    {

        name: "Sprout",

        image: asset("/brawlers/sprout.png"),

        rarity: "Mythic"

    },

    {

        name: "Byron",

        image: asset("/brawlers/byron.png"),

        rarity: "Mythic"

    },

    {

        name: "Squeak",

        image: asset("/brawlers/squeak.png"),

        rarity: "Mythic"

    },

    {

        name: "Lou",

        image: asset("/brawlers/lou.png"),

        rarity: "Mythic"

    },

    {

        name: "Ruffs",

        image: asset("/brawlers/ruffs.png"),

        rarity: "Mythic"

    },

    {

        name: "Buzz",

        image: asset("/brawlers/buzz.png"),

        rarity: "Mythic"

    },

    {

        name: "Fang",

        image: asset("/brawlers/fang.png"),

        rarity: "Mythic"

    },

    {

        name: "Eve",

        image: asset("/brawlers/eve.png"),

        rarity: "Mythic"

    },

    {

        name: "Janet",

        image: asset("/brawlers/janet.png"),

        rarity: "Mythic"

    },

    {

        name: "Otis",

        image: asset("/brawlers/otis.png"),

        rarity: "Mythic"

    },

    {

        name: "Buster",

        image: asset("/brawlers/buster.png"),

        rarity: "Mythic"

    },

    {

        name: "Gray",

        image: asset("/brawlers/gray.png"),

        rarity: "Mythic"

    },

    {

        name: "R-T",

        image: asset("/brawlers/r-t.png"),

        rarity: "Mythic"

    },

    {

        name: "Willow",

        image: asset("/brawlers/willow.png"),

        rarity: "Mythic"

    },

    {

        name: "Doug",

        image: asset("/brawlers/doug.png"),

        rarity: "Mythic"

    },

    {

        name: "Chuck",

        image: asset("/brawlers/chuck.png"),

        rarity: "Mythic"

    },

    {

        name: "Charlie",

        image: asset("/brawlers/charlie.png"),

        rarity: "Mythic"

    },

    {

        name: "Mico",

        image: asset("/brawlers/mico.png"),

        rarity: "Mythic"

    },

    {

        name: "Melodie",

        image: asset("/brawlers/melodie.png"),

        rarity: "Mythic"

    },

    {

        name: "Lily",

        image: asset("/brawlers/lily.png"),

        rarity: "Mythic"

    },

    {

        name: "Clancy",

        image: asset("/brawlers/clancy.png"),

        rarity: "Mythic"

    },

    {

        name: "Moe",

        image: asset("/brawlers/moe.png"),

        rarity: "Mythic"

    },

    {

        name: "Juju",

        image: asset("/brawlers/juju.png"),

        rarity: "Mythic"

    },

    {

        name: "Ollie",

        image: asset("/brawlers/ollie.png"),

        rarity: "Mythic"

    },

    {

        name: "Lumi",

        image: asset("/brawlers/lumi.png"),

        rarity: "Mythic"

    },

    {

        name: "Finx",

        image: asset("/brawlers/finx.png"),

        rarity: "Mythic"

    },

    {

        name: "Jae-yong",

        image: asset("/brawlers/jae-yong.png"),

        rarity: "Mythic"

    },

    {

        name: "Alli",

        image: asset("/brawlers/alli.png"),

        rarity: "Mythic"

    },

    {

        name: "Mina",

        image: asset("/brawlers/mina.png"),

        rarity: "Mythic"

    },

    {

        name: "Ziggy",

        image: asset("/brawlers/ziggy.png"),

        rarity: "Mythic"

    },

    {

        name: "Gigi",

        image: asset("/brawlers/gigi.png"),

        rarity: "Mythic"

    },

    {

        name: "Glowy",

        image: asset("/brawlers/glowy.png"),

        rarity: "Mythic"

    },

    {

        name: "Najia",

        image: asset("/brawlers/najia.png"),

        rarity: "Mythic"

    },

    {

        name: "Starr Nova",

        image: asset("/brawlers/starrnova.png"),

        rarity: "Mythic"

    },

    {

        name: "Damian",

        image: asset("/brawlers/damian.png"),

        rarity: "Mythic"

    },

    {

        name: "Spike",

        image: asset("/brawlers/spike.png"),

        rarity: "Legendary"

    },

    {

        name: "Crow",

        image: asset("/brawlers/crow.png"),

        rarity: "Legendary"

    },

    {

        name: "Leon",

        image: asset("/brawlers/leon.png"),

        rarity: "Legendary"

    },

    {

        name: "Sandy",

        image: asset("/brawlers/sandy.png"),

        rarity: "Legendary"

    },

    {

        name: "Amber",

        image: asset("/brawlers/amber.png"),

        rarity: "Legendary"

    },

    {

        name: "Meg",

        image: asset("/brawlers/meg.png"),

        rarity: "Legendary"

    },

    {

        name: "Surge",

        image: asset("/brawlers/surge.png"),

        rarity: "Legendary"

    },

    {

        name: "Chester",

        image: asset("/brawlers/chester.png"),

        rarity: "Legendary"

    },

    {

        name: "Cordelius",

        image: asset("/brawlers/cordelius.png"),

        rarity: "Legendary"

    },

    {

        name: "Kit",

        image: asset("/brawlers/kit.png"),

        rarity: "Legendary"

    },

    {

        name: "Draco",

        image: asset("/brawlers/draco.png"),

        rarity: "Legendary"

    },

    {

        name: "Kenji",

        image: asset("/brawlers/kenji.png"),

        rarity: "Legendary"

    },

 //   {

 //       name: "Nori",

 //       image: asset("/brawlers/nori.png"),

 //       rarity: "Legendary"

 //   },

    {

        name: "Pierce",

        image: asset("/brawlers/pierce.png"),

        rarity: "Legendary"

    },

    {

        name: "Kaze",

        image: asset("/brawlers/kaze.png"),

        rarity: "Ultra Legendary"

    },

    {

        name: "Sirius",

        image: asset("/brawlers/sirius.png"),

        rarity: "Ultra Legendary"

    },

]