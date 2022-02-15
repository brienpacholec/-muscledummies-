import React, { useEffect } from "react";
import Layout from "../components/layout"
import Container from "@mui/material/Container"
import Linkbar from "../components/linkbar"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import AppsIcon from "@mui/icons-material/Apps"
import Box from "@mui/material/Box"
import DummieHero from "../components/dummie_hero"
import AOS from "aos";
import "aos/dist/aos.css";

const IndexPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <Container data-aos="fade-up">
        <Grid container spacing={0} sx={{ display: "flex", marginTop: 10 }} >
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#FFF",
              }}
            >
              Ready to take over the Fitness Industry
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              display="inline"
              sx={{
                color: "#FFF",
              }}
            >
              Join&nbsp;
            </Typography>

            <Typography
              variant="h3"
              display="inline"
              sx={{
                color: "primary.main",
              }}
            >
              Muscle Dummies
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
              }}
            >
              Muscle Dummies is your chance to be a part of the greatest takeover in the Health and Fitness Industry
            </Typography>
          </Grid>


        </Grid>

        <DummieHero />
      </Container>

      {/* <div id="bgImageHero"></div>
      <Linkbar />

      <Container id="Home">
        <Grid container spacing={2} sx={{ marginTop: 15 }}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography variant="h2">Welcome to Muscle Dummies</Typography>
            <Typography variant="subtitle2">
              Join this ultra-exclusive NFT project featuring not only authentic
              art, but unmatched utility!
            </Typography>

            <Button
              variant="outlined"
              sx={{ borderRadius: 10, paddingY: {sm: 1, md: 1}, paddingX: {sm: 5, md: 5}, marginY: {sm: 1, md: 1}, backgroundColor: '#FFF' }}
              endIcon={<AppsIcon />}
              href="https://www.google.com"
            >
              <Typography variant="h5">View The Collection</Typography>
            </Button>
          </Grid>
        </Grid>


        <p>
          Skorupi minun kyurem regigigas bibarel fraxure ampharos petilil
          beldum. Huntail dragonite empoleon swalot porygon sentret joltik.
          Venipede togetic lugia baltoy, mienshao wormadam deino beedrill?
          Larvitar shellos, basculin qwilfish. Bastiodon pelipper yamask machop
          delcatty linoone roserade. Yanma, glaceon frillish geodude roserade
          beedrill. Heatran tepig combusken tentacool elekid lilligant miltank
          spiritomb ralts feebas vulpix. Stunky marshtomp kirlia phanpy joltik,
          gliscor garchomp reuniclus bronzor honchkrow. Leavanny delibird tauros
          dodrio hitmontop ferroseed larvesta carvanha? Pidgey bidoof dusknoir
          lopunny mismagius snorlax shroomish.
        </p>
        <p>
          Gible muk poliwhirl dodrio walrein nuzleaf regigigas leafeon.
          Camerupt, swellow mudkip lombre of caterpie excadrill vanillish
          litwick. Starly politoed barboach infernape dustox ledian lickitung
          cubchoo ledyba claydol lillipup thundurus dwebble. Blissey breloom,
          buneary caterpie. Tynamo emolga voltorb jellicent scizor virizion
          kingdra hitmontop skarmory drowzee. Regigigas gligar tauros trubbish
          doduo venusaur swellow togekiss seedot. Mesprit celebi nidoqueen
          spheal articuno purrloin reshiram electrode slakoth spheal quilava.
          Tepig heatmor seel hoppip cryogonal ambipom electrike. Ledian espeon
          hypno altaria chingling joltik the mawile chingling blitzle machamp
          gastrodon. Grimer chatot fraxure roserade bronzong graveler? Chinchou
          barboach cherrim scyther. Sandshrew glameow honchkrow froslass ralts
          litwick, magnezone zoroark ivysaur electrode staravia. Ho primeape
          poochyena magnezone carnivine relicanth sewaddle marshtomp bellossom
          turtwig dewgong shaymin!
        </p>
        <p>
          Kingler volbeat haunter cacnea. Milotic stoutland flareon grovyle
          magby roggenrola, ledian seedot cacnea herdier. Sunkern poliwrath
          togetic lapras skarmory teddiursa surskit prinplup rattata octillery
          wormadam cofagrigus keldeo. Remoraid corsola medicham elekid shuppet
          musharna samurott! Vulpix gigalith luxio kecleon metapod mienfoo
          krabby vaporeon volcarona chingling ninjask. Cofagrigus crawdaunt
          bayleef teddiursa gastly flygon pansage. Bayleef noctowl lapras
          qwilfish seviper maractus spiritomb milotic piplup. Dodrio marowak
          smoochum magmar reuniclus aipom zekrom? Grumpig quagsire abra
          kricketune. Lickitung simisear pansage raichu electivire starly
          fraxure panpour. Togetic cacturne persian toxicroak whimsicott unown
          spinda munchlax simisage kadabra nidorino. Delcatty swalot feebas
          chimecho glameow the trubbish palpitoad hoothoot clefairy arbok.
          Umbreon yanma forretress meditite frillish grotle shroomish natu
          lampent braviary shellder regigigas. Graveler petilil.
        </p>
        <ul>
          <li>
            Swanna qwilfish musharna mismagius tyrogue vullaby pansage nosepass
            sigilyph smoochum zekrom miltank kyogre; shinx mandibuzz magmortar
            torkoal alomomola omanyte totodile.
          </li>
          <li>
            Bastiodon delibird exeggcute bastiodon chikorita magnezone eevee
            leavanny oddish cacnea swablu seedot servine deoxys drapion trapinch
            rhyhorn chimchar lunatone shaymin.
          </li>
          <li>
            Torchic cranidos grumpig sneasel suicune solosis mesprit aron
            vespiquen, chinchou numel tropius lopunny shieldon magmortar
            venipede barboach vigoroth simisage throh!
          </li>
        </ul>
        <p>
          Dodrio lopunny zebstrika miltank a raichu scraggy purrloin magnemite
          chinchou. Hariyama tympole sigilyph squirtle kyogre wailmer hoppip
          kyogre omanyte vulpix genesect roselia torterra. Clamperl rhyhorn
          zoroark fearow shinx zekrom probopass cleffa lucario karrablast. Golem
          torkoal volcarona nosepass lanturn makuhita. Porygon dialga venonat
          pachirisu. Rufflet kingler carracosta spinda ferrothorn roselia lileep
          pignite servine togetic klang. Joltik kadabra igglybuff ambipom
          sandshrew beheeyem! Clamperl weavile roserade lampent wartortle
          torterra clefable whismur gigalith gengar. Houndoom mienfoo elgyem
          vanillite lairon. Metapod roserade trapinch lumineon gloom simipour
          pignite. Swalot poliwrath cinccino bronzor togepi samurott krokorok
          rapidash swanna misdreavus nidoking. Seadra qwilfish rotom arcanine
          scrafty samurott tangrowth aggron. Manaphy larvesta dewott carnivine
          cresselia luxio, minun lileep pansear emolga nidoking. Surskit
          wobbuffet, cofagrigus lairon empoleon lairon shaymin caterpie farfetch
          weezing gulpin conkeldurr. Monferno foongus ekans suicune luxio.
        </p>
        <p>
          Sunkern galvantula krabby bouffalant escavalier tirtouga totodile
          bellsprout. Kangaskhan froslass scyther cranidos virizion anorith
          gothitelle pineco musharna? Machoke bibarel nincada gothitelle!
          Happiny scrafty clefairy lilligant latios kabutops vaporeon stunky
          bastiodon zorua chikorita slaking electivire. Squirtle rattata archen
          serperior accelgor tentacruel weepinbell ivysaur, regirock wailmer?
          Purugly jumpluff palkia gothorita meowth darmanitan pidgeot vanillish
          chatot foongus gigalith hypno. Dewott seaking snivy zorua dewott
          mawile emolga skorupi lilligant. Bouffalant electabuzz regice chimchar
          drilbur pupitar cleffa armaldo pikachu. Whismur staravia sneasel
          houndour skorupi spoink amoonguss. Electivire moltres uxie musharna,
          lugia sandile. Quilava gible crobat vileplume metapod cryogonal.
          Bulbasaur shuppet accelgor cyndaquil butterfree slowpoke tropius
          piplup ninetales makuhita dragonair geodude azumarill. Kirlia crustle
          duosion.
        </p>

      <hr/>
      
      <div id ="About">ABOUT LOL</div>
      </Container> */}
    </Layout>
  )
}

export default IndexPage
