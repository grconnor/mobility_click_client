// Library Imports:
import "./faq.css";
import React, { useState } from "react";

// Component Imports:
import FAQ from "./FAQ";

// Image Imports:


const FAQMain = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Kostar det något?",
      answer: "Nej Tjänsten är kostnadsfri och du förbinder dig inte till något. Om du inte accepterar vårt erbjudande tackar du nej. Du avgör själv om du vill sälja din bil till oss.",
      open: false
    },
    {
      question: "Hur kan ni erbjuda så mycket för min bil?",
      answer: "Med våra erfarna inköpare får en så bra affär som möjligt.   Vi behöver inte räkna av pengar från din bil som annars skulle gått till mellanhänder NEWLINE Normalt kan du räkna med omkring bättre betalt än du får hos din lokala bilhandlare. Kanske inte lika bra som att sälja privat (om du är duktig på det) men du slipper allt krångel! NEWLINE Det blir i slutändan oftast mer pengar till dig och du slipper lägga ner massa tid och riskera pengar till startavgifter, rekondavgifter och liknande.",
      open: false
    },
    {
      question: "Jag vill bara ha en värdering, kan jag endast få det?",
      answer: "Om du bara är ute efter en värdering så är det här fel tjänst för dig. Tjänsten är till för den som hoppas sälja sin bil till oss.",
      open: false
    },
    {
      question: "Vad tjänar ni på att hjälper mig?",
      answer: "Vi slipper ha mellan händer exempelvis andra bilhandlare, auktionsbolag och liknande som annars tar ut avgifter och förmedlingskostnader, dom pengarna hamnar i stället direkt hos dig. Eftersom vi även får se bilen själva innan vi köper den behöver vi inte heller ta höjd för oförutsedda kostnader. I slutändan du får mer pengar för din bil och vi har mindre risk.",
      open: false
    },
    {
      question: "Jag har lån på bilen, hur fungerar det?",
      answer: "Det är vanligt att man har billån eller leasing på bilen. Vi löser eventuella skulder hos lån/leasing givare och betalar mellanskillnaden till dig. Det innebär inga extra kostnader för dig.",
      open: false
    },
    {
      question: "Vad förväntas av mig - vad ska jag göra?",
      answer: "Den första intervjun brukar ta 10-15 minuter. Vi kommer fråga om bilens skick, servicehistorik, utrustning/tillbehör och dina förväntningar. Vid en försäljningen behöver vi del 2 av registreringsbeviset (den gula delen) och alla tillbehör och nycklar till bilen och viktigast av allt ditt kontonummer 😊 Vi värderar och testar din bil i nuvarande skick..",
      open: false
    },
    {
      question: "Vad tar ni för ansvar?",
      answer: "När vi köpt din bilen tar vi över ansvaret. Vi köper den i befintligt skick.",
      open: false
    },
    {
      question: "Hur sker ägarbytet?",
      answer: "Vi har direktregistrering hos Transportstyrelsen och genomför ägarbytet digitalt i deras system. För att kunna göra det behöver vi det senast utfärdade registreringsbeviset del 2 (den gula delen).",
      open: false
    },
    {
      question: "Står ni för ert erbjudande?",
      answer: "Vi garanterar att budet står så länge bilen är enligt överenskommelse och att budet stämmer överens med marknaden (inte ett uppenbart misstag). Och att bilen är beskrivet i korrekt skick. Vårt erbjudande gäller i 14 dagar",
      open: false
    },
    {
      question: "Vilka är ni?",
      answer: "Budpådinbil.se är del av Mobility motors.  2005 grundade familjen Roelofsen Mobility Motors AB i Malmö. Med en vision, att erbjuda ett problemfritt bilägande. Idag driver vi xx antal fullllserviceanläggningar och är representanter för xx nybilsbilmärken spridda på xx orter i Sverige. För att möta våra kundersbehov av begagnade bilar lanserade vi 2021 budpådinbil.se.",
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
      <div className="flexbox-faq-outer-container">
        <div className="flexbox-faq-inner-container">
          <div className="flexbox-faq-heading-container">
            <h2 id="faq-heading">
              Här har vi sammanställt svaren på dom <span>vanligaste frågorna</span>. Om du inte hittar svaret du söker så är du välkommen att kontakta oss på xxxx@mmgroup.se
            </h2>
          </div>
          <div className="faqs">
            {faqs.map((faq, i) => (
              <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQMain;
