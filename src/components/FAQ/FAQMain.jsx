// Library Imports:
import "./faq.css";
import React, { useState } from "react";

// Component Imports:
import FAQ from "./FAQ";

// Image Imports:


const FAQMain = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Jag har lån på bilen, hur fungerar det?",
      answer: "Det är vanliggt att man har bilkredit eller leasing på bilen. Det är inga problem för oss! När vi gör klart affären kommer vi lösa skulden och betala mellanskillnaden till dig. Det går supersmidigt och innebär inga extra kostnader för dig.",
      open: true
    },
    {
      question: "Om jag inte är nöjd med budet, kan jag hoppa av det?",
      answer: "Ja! Tjänsten är kostnadsfri och helt förutsättningslös. Om du inte gillar budet kan du enkelt tacka nej och hoppa av. NEWLINE När du har tackat ja till ett bud och har skakat hand på att göra affär så finns en symbolisk avbrottsavgift om du skulle hoppa av. Avgiften finns för att vi bokar upp testet och att köparen räknar med att få bilen.",
      open: false
    },
    {
      question: "Jag vill bara ha en värdering, kan jag endast få det?",
      answer: "Om du bara är ute efter en värdering så är det här fel tjänst för dig. Tjänsten är till för den som hoppas sälja sin bil genom oss. Vi kommer självklart hjälpa dig att värdera bilen och att fatta ett informerat beslut när du får budet.",
      open: false
    },
    {
      question: "Hur mycket pengar blir det till mig?",
      answer: "Först och främst: hos oss får du priset innan du sätter dig och åker någonstans. Vi arbetar inte med lockpriser. Poängen med våra rådgivare är för att du ska få ansvarsfull service och en så bra bilaffär som möjligt. NEWLINE Normalt kan du räkna med omkring 5-15% bättre betalt än du får hos din lokala bilhandlare. Kanske inte lika bra som att sälja privat (om du är duktig på det) men du slipper allt krångel! NEWLINE Tack vare tjänstens utformning och vårt digitala fokus har vi kanske lägst omkostnader i landet när man jämför med bilförmedlingstjänster. Det blir i slutändan mer pengar till dig och du slipper riskera pengar för startavgifter, rekondavgifter och liknande.",
      open: false
    },
    {
      question: "Kan jag få bättre betalt om jag säljer bilen själv?",
      answer: "Att sälja bilen privat är det alternativ som ofta kan ge dig bäst betalt. Vi har prövat det och har drivit traditionell bilförmedling i 5 år före nuvarande tjänst. Med den erfarenheten tycker vi att det är en upplevelse som man \"inte önskar sin värsta fiende\". Ibland går det jättesmidigt, ibland inte. NEWLINE Den här tjänsten är till för dig som är less på det eller inte ens orkar pröva. Vi vill att du ska få en så smidig affär som möjligt. Du slipper all frustration, slit och oro. Samtidigt får du rättvist betalt och slipper jämföra med andra tjänster. NEWLINE När du säljer bilen privat så gäller dessutom Köplagen. Du är ekonomiskt ansvarig för att annonsen var helt rätt och att bilen inte har några dolda fel. Köparen har enligt lag rätt att driva klagomål mot dig. Det går inte att avtala bort. Det gamla uttrycket \"säljs i befintligt skick\" gäller inte enligt svensk lag. Köparen kan ringa dig i tid och otid, ibland med ärliga frågor och ibland på ett oärligt sätt med bedrägliga avsikter. Vi har märkt att köpare blir allt mer pålästa och cyniska när det gäller sånt här. Det har blivit mycket svårare att sälja bil.",
      open: false
    },
    {
      question: "Vad tjänar ni på att hjälper mig?",
      answer: "Vi tar en avgift från köparen som varierar beroende på bilens pris och om köparen är bilhandlare eller konsument. Vanligtvis tjänar vi mellan 1000 kr och 5000 kr efter en slutförd affär. Roboten är stjärnan i teamet och drar det tyngsta lasset. Tack vare roboten och strömlinjeformade rutiner kan vi hålla dessa marginaler. NEWLINE Vi har försökt göra det så enkelt som möjligt för dig. Tjänsten är helt gratis och vi kommunicerar bara vad du får \"i handen\".",
      open: false
    },
    {
      question: "Vad förväntas av mig - vad ska jag göra?",
      answer: "Den första intervjun brukar ta 10-15 minuter. Där ställer vi lite frågor om din bil och dina förväntningar. NEWLINE Inom de kommande dagarna kommer vi höra av oss till dig med bud från intresserade köpare. NEWLINE När du är nöjd med priset och har tackat ja så återstår att samla ihop alla lösa tillbehör och att lämna in bilen på en av våra specialutbildade besiktningsstationer. Du behöver inte boka tid! NEWLINE Då är du klar! Du ska bara kontrollera att pengarna kommer in och därefter ge oss registreringsbevisen på bilen.",
      open: false
    },
    {
      question: "Vad tar ni för ansvar?",
      answer: "Tjänsten är utformad så att det ska vara riskfritt för dig. Vi garanterar att köparens bud gäller, förutsatt att bilen är i ett överenskommet (begagnat) skick och att budet inte är uppenbart fel (över marknadspris). NEWLINE Efter besiktningen sköter vi dialogen med köparen. Du slipper inblandning. När bilen är såld tar vi ansvar för eventuella reklamationer p.g.a. bilens skick.",
      open: false
    },
    {
      question: "Hur sker ägarbytet?",
      answer: "När du är nöjd och känner dig trygg så skickar du ditt registreringsbevis till oss. Vi har fått ett stort förtroende av Transportstyrelsen och kan göra ägarbytet digitalt i deras system när vi har fått registreringsbeviset.",
      open: false
    },
    {
      question: "Hur går köpet till och vad händer om köparen ångrar sig?",
      answer: "Vi garanterar att budet står så länge bilen är enligt överenskommelse och att budet stämmer överens med marknaden (inte ett uppenbart misstag).",
      open: false
    },
    {
      question: "Varför inte gå till en vanlig förmedlare eller auktiontjänst?",
      answer: "Ute på marknaden finns det många bra tjänster med etablerade varumärken. Du kommer ofta att göra rättvisa bilaffärer hos dem. De traditionella tjänsterna skapades dock med helt andra förutsättningar, före det digitaliserade samhället. För att göra vinst måste deras kunder normalt betala för kostsamma bilanläggningar, rekonditionering, annonsering, och förhållandevis många arbetstimmar. Därför är deras förmedlingsavgifter ofta en väsentlig del av bilens pris. Dessutom behöver du normalt lämna in bilen på en anläggning och det kan ta flera veckor innan de eventuellt hittar din köpare. NEWLINE Vi har byggt vår tjänst utifrån moderna arbetssätt, anpassade för det nya smartphone-samhället. Merparten av allt arbete sköts av vår robot, som nöjer sig med lite elektricitet som lön. Vår kundservice sköter bara sånt som roboten inte klarar och för att ge dig en ansvarsfull och personlig service. Trots det lyckas vi nå ut till samma potentiella köpare. Det innebär vanligtvis mer pengar i handen för dig och en väsentligt snabbare affär.",
      open: false
    },
    {
      question: "Var står bilen under tiden ni säljer den?",
      answer: "Du kan köra bilen precis som vanligt tills vi hittar din köpare. Du behöver inte ens bekymra dig med att tvätta den.",
      open: false
    },
    {
      question: "Kan köpare provköra bilen innan de slår till?",
      answer: "Våra köpkunder köper bilarna osett. De litar på vår garanti att bilen är i utlovat skick. Det är ett skäl varför vi behöver kontrollera bilen på en opartisk och specialutbildad besiktningsstation innan vi är klara. NEWLINE Självklart försöker vi hitta en schyst och rättvis affär som är dig till största möjliga nytta - om det vore så att något allvarligt fel hittades vid besiktningen.",
      open: false
    },
    {
      question: "Vilka är ni? Vem står bakom tjänsten?",
      answer: "Vi vet inte skälva",
      open: false
    },
    {
      question: "Vad vänder jag mig om jag har klagomål",
      answer: "Vi vill att du ska vara nöjd med din upplevelse hos oss. I första hand kan du ringa och söka en av våra chefer ifall du är missnöjd. Om du har en reklamation önskar vi att du också skickar ett skriftligt underlag till oss. NEWLINE Om vi inte lyckas nå en överenskommelse så rekommenderar vi att du kontaktar en konsumentvägledare. Vid eventuell tvist har vi som policy att alltid följa utlåtanden från Allmänna reklamationsnämnden.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (
    <>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </>
  )
}

export default FAQMain;
