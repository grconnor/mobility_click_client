// Library Imports:
import "./faq.css";
import React, { useState, useEffect } from "react";

// Component Imports:
import FAQ from "./FAQ";
import { GaPageView } from "../..";
import CommonPageHeadContent from "../CommonPageHeadContent/CommonPageHeadContent";

// Image Imports:


const FAQMain = () => {

  useEffect(() => { GaPageView("Vänliga Frågor"); }, []);

  const [faqs, setFaqs] = useState([
    {
      question: "Är tjänsten gratis?",
      answer: "Det stämmer! Tjänsten är helt kostnadsfri och du som säljare förbinder dig inte till något. Vill du inte acceptera vårt erbjudande kan du, såklart, tacka nej. Med andra ord, du bestämmer själv efter att du mottagit vårt erbjudande om du vill sälja din bil till oss eller inte!",
      open: false
    },
    {
      question: "Hur prissätter ni min bil?",
      answer: "Våra erfarna inköpare ger dig ett erbjudande samma dag som du skriver in dig. Eftersom du inte behöver räkna av pengar från din bil, som skulle hamna hos olika mellanhänder (bilhandlare, auktionsbolag och liknande) erbjuds du ett högre pris. \n\nDessutom slipper du lägga ner all tid och kostnader relaterat till försäljningen. Vi står för annonskostnader, rekonditioneringskostnader och eventuella reklamationer om det upptäcks fel på bilen efter försäljning. \n\nKort sagt: tjänsten gör din bilförsäljning snabbare, tryggare, och enklare. En affär som i slutändan ger mer pengar till dig.",
      open: false
    },
    {
      question: "Jag vill bara värdera min bil, går det",
      answer: "Eftersom våra priser utgår ifrån att vi står för annonskostnader, rekonditioneringskostnader och eventuella reklamationer, är detta fel tjänst för dig som bara vill ha en värdering. Tjänsten är till för dig som vill ha hjälp med att sälja din bil snabbt, tryggt och enkelt.",
      open: false
    },
    {
      question: "Jag har lån på min bil, kan jag utnyttja tjänsten ändå?",
      answer: "Att ha billån eller leasing upplägg är inget ovanligt. Vi löser eventuella skulder hos lån/leasing givare och betalar mellanskillnaden till dig. Detta innebär inga extra kostnader för dig.",
      open: false
    },
    {
      question: "Vad förväntas av mig - vad behöver jag göra?",
      answer: "Du skriver snabbt och enkelt in dina uppgifter i formuläret och trycker på skicka. För att kunna ge dig ett så bra bud som möjligt ringer vi ett kortare samtal till dig. Under samtalet går vi igenom bilens skick, historik och alla utrustning/tillbehör och dina förväntningar. \n\nNär vi kommer till försäljningen behöver vi del 2 av registreringsbeviset (den gula delen) och alla tillbehör och nycklar till bilen och viktigast av allt ditt kontonummer. Resten löser vi!",
      open: false
    },
    {
      question: "När tar ni över ansvaret?",
      answer: "Vi köper in din bil i befintligt skick. Så fort vi köpt bilen tar vi över ansvaret.",
      open: false
    },
    {
      question: "Hur sker ägarbytet?",
      answer: "Vi har direktregistrering hos Transportstyrelsen och genomför snabbt ägarbytet digitalt i deras system. OBS. För att kunna genomföra ägarbytet behöver vi det senast utfärdade registreringsbeviset del 2 (den gula delen).",
      open: false
    },
    {
      question: "Hur länge gäller ert erbjudande?",
      answer: "Vårt erbjudande gäller i 14 dagar. Vi lägger stor vikt vid trygghet. Därför står vi för budet så länge bilen är enligt beskrivning och att budet stämmer överens med marknaden och inte ett är ett uppenbart misstag.",
      open: false
    },
    {
      question: "Vad tjänar ni på att hjälpa mig?",
      answer: "Vi slipper alla mellan händer exempelvis andra bilhandlare, auktionsbolag och liknande som annars tar ut avgifter och förmedlingskostnader, dom pengarna hamnar i stället direkt hos dig. Eftersom vi även får se och testa bilen själva, innan vi köper den, behöver vi inte heller ta höjd för oförutsedda kostnader. Du får mer pengar för din bil och vi tar mindre risk.",
      open: false
    },
    {
      question: "Vilka är ni?",
      answer: "Tjänsten Budpådinbil.se ägs av Mobility motors. \n\n2005 grundade familjen Roelofsen Mobility Motors AB i Malmö. De hade en vision att kunna erbjuda sina kunder ett problemfritt bilägande. Idag driver Mobility Motors koncernen tio fullserviceanläggningar och är representanter för lika många nybilsbilmärken spridda på sju orter runtom i Sverige. För att möta våra kunders ökade behov av begagnade bilar lanserade vi 2021 budpådinbil.se.",
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
      <CommonPageHeadContent title="Vänliga frågor" description="FAQ" />
      <section>
        <div className="flexbox-faq-outer-container">
          <div className="flexbox-faq-image-outer-container">
            <div className="flexbox-faq-image-heading-container">
              <h1 id="faq-image-heading">
                Vanliga frågor
              </h1>
            </div>
          </div>
          <div className="flexbox-faq-inner-container">
            <div className="flexbox-faq-heading-container">
              <p id="faq-heading-paragraph">
                Här har vi sammanställt svaren på dom <span>vanligaste frågorna</span>. Om du inte hittar svaret du söker så är du välkommen att kontakta oss på bud@mmgroup.se
              </p>
            </div>
            <div className="faqs">
              {faqs.map((faq, i) => (
                <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQMain;
