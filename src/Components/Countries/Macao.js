import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Macao = () => {
  const [turistSection, setTuristSection] = useState(true);
  const [workSection, setWorkSection] = useState(false);

  const [turistButtonStyle, setTuristButtonStyle] = useState(
    "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]  -translate-y-6"
  );
  const [workButtonStyle, setWorkButtonStyle] = useState(
    "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
  );
  const [studentButtonStyle, setStudentButtonStyle] = useState(
    "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.51] hover:bg-[#233783 md:my-[2.5rem]] lg:bg-[#1e2e6e lg:mt-[2.75rem] lg:mb-[2.75rem]] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
  );

  const changeOnTurist = () => {
    setTuristSection(true);
    setWorkSection(false);
    setTuristButtonStyle(
      "bg-[#1e2e6e] scale-[1.1] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]  -translate-y-6"
    );
    setWorkButtonStyle(
      "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
    );
    setStudentButtonStyle(
      "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
    );
  };
  const changeOnWork = () => {
    setTuristSection(false);
    setWorkSection(true);
    setTuristButtonStyle(
      "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
    );
    setWorkButtonStyle(
      "bg-[#1e2e6e] scale-[1.1] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]  -translate-y-6"
    );
    setStudentButtonStyle(
      "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
    );
  };
  const changeOnStudent = () => {
    setTuristSection(false);
    setWorkSection(false);
    setTuristButtonStyle(
      "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
    );
    setWorkButtonStyle(
      "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]"
    );
    setStudentButtonStyle(
      "bg-[#1e2e6e] scale-[1.1] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]  -translate-y-6"
    );
  };
  return (
    <>
      <Helmet>
        <title>Macao</title>
        <meta name="description" content="Macao" />
        <meta
          name="keywords"
          content="Macao travel visa, Macao work visa, Macao study visa, How to apply for an Macao visa, Macao visa requirements, Macao tourist visa, Macao student visa, Macao business visa, Macao visa processing time, Macao visa application process, Macao visa for Americans, Macao visa for Europeans, Macao visa for Macao, Macao visa for Canadians, Macao visa for Macao, Macao visa for Chinese, Macao visa for Africans, Macao visa for Asians, Macao visa for South Americans, Macao visa for Middle Easterners, Macao visa for UK citizens, Macao visa for EU citizens, Macao visa for Schengen area, Macao visa for non-EU citizens, Macao visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Macao
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Macao is a Special Administrative Region of China, located on the
              eastern side of the Pearl River Delta. It is known for its vibrant
              blend of Chinese and Portuguese cultures, and for its historic
              city center, which is listed as a UNESCO World Heritage Site.
              Macao is also known for its thriving gambling industry, which
              makes it a popular destination for tourists from around the world.
              In recent years, the city has also become known for its diverse
              food scene, with a wide range of cuisines on offer, from
              traditional Cantonese dishes to Portuguese and Brazilian
              specialties.
            </p>
          </Col>
        </Row>

        <p className="text-center pt-[6rem] text-[2.8rem]">
          Information on the duration of each type of visa can be found in the
          <span className="text-[#1e2e6e] font-bold">
            &nbsp;tourist section
          </span>{" "}
          under the question
          <br />
          <span className="text-[#1e2e62] font-bold">
            "How much time can I stay in (country name)".
          </span>
        </p>
        <Row className="text-zinc-600 p-[6rem] my-[3rem]">
          <Col className="flex items-center justify-center">
            <button
              style={{
                boxShadow: "0 1rem 2rem 0 rgba(0, 0, 0, 0.35)",
                transition: "all 0.75s",
              }}
              className={turistButtonStyle}
              onClick={() => {
                changeOnTurist();
              }}
            >
              Tourist
            </button>
          </Col>

          <Col className="flex items-center justify-center">
            <button
              style={{
                boxShadow: "0 1rem 2rem 0 rgba(0, 0, 0, 0.35)",
                transition: "all 0.75s",
              }}
              className={workButtonStyle}
              onClick={() => {
                changeOnWork();
              }}
            >
              Worker
            </button>
          </Col>

          <Col className="flex items-center justify-center">
            <button
              style={{
                boxShadow: "0 1rem 2rem 0 rgba(0, 0, 0, 0.35)",
                transition: "all 0.75s",
              }}
              className={studentButtonStyle}
              onClick={() => {
                changeOnStudent();
              }}
            >
              Student
            </button>
          </Col>
        </Row>
        {turistSection ? (
          <>
            {" "}
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Who can enter Macao without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries and territories are able to enter
                Macao without a visa for short stays, typically for tourism or
                business purposes. The exact length of stay and the specific
                purposes allowed without a visa vary depending on the country or
                territory of citizenship.
                <br />
                <br />
                As of 2021, citizens of the following countries and territories
                are able to enter Macao without a visa for stays of up to 90
                days:
                <br />
                <br />
                <span className="font-bold">
                  Andorra Argentina, Australia, Austria, Bahrain, Belgium,
                  Bulgaria, Canada, Chile, Croatia, Cyprus, Czech Republic,
                  Denmark, Estonia, Finland, France, Germany, Greece, Hungary,
                  Iceland, Ireland, Israel, Italy, Japan, Kuwait, Latvia,
                  Liechtenstein, Lithuania, Luxembourg, Malaysia, Malta, Mexico,
                  Monaco, Netherlands, New Zealand, Norway, Oman, Poland,
                  Portugal, Qatar, Romania, San Marino, Saudi Arabia, Singapore,
                  Slovakia, Slovenia, South Korea, Spain, Sweden, Switzerland,
                  United Arab Emirates, United Kingdom, United States.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that this list is subject to change
                  and that the length of stay and specific purposes allowed
                  without a visa may vary depending on your country or territory
                  of citizenship. It is always a good idea to check with the
                  authorities in Macao or the nearest embassy or consulate of
                  Macao to confirm the current visa requirements for your
                  situation.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Macao Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Macao, you will need to gather
                several documents to submit with your application. These may
                include:
                <br />
                <br />
                ● A valid passport or travel document.
                <br />
                <br />
                ● A completed and signed application form.
                <br />
                <br />
                ● Two passport-style photographs.
                <br />
                <br />
                ● A copy of your flight itinerary or travel plans.
                <br />
                <br />
                ● A letter of invitation from a host in Macao, if applicable.
                <br />
                <br />
                ● Evidence of sufficient funds to cover your stay in Macao, such
                as bank statements or credit card statements.
                <br />
                <br />
                ● Proof of your employment or academic status, such as a letter
                from your employer or a letter of acceptance from a school or
                university.
                <br />
                <br />
                ● A certificate of good conduct (also known as a police
                clearance certificate)
                <br />
                <br />
                <span className="font-bold">
                  You may also be required to provide additional documents
                  depending on the specific type of visa you are applying for
                  and your specific circumstances. It is always a good idea to
                  check with the embassy or consulate of Macao in your home
                  country to make sure you have all the necessary documents
                  before you submit your application.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Macao Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Macao, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine if you need a visa: Citizens of certain countries
                and territories are able to enter Macao without a visa for short
                stays. If you are a citizen of one of these countries, you may
                be able to enter Macao without a visa for a specific length of
                time and for specific purposes. If you are a citizen of another
                country or if you plan to stay in Macao for longer than the
                allowed period, you will need to apply for a visa.
                <br />
                <br />
                ● Gather the required documents: You will need to prepare a
                number of documents to submit with your visa application. These
                may include your passport, photographs, a completed and signed
                application form, and other documents as required.
                <br />
                <br />
                ● Submit your application: You can usually submit your visa
                application at the embassy or consulate of Macao in your home
                country. Some countries may have a designated visa application
                center where you can submit your application.
                <br />
                <br />
                ● Wait for a decision: The processing time for visa applications
                can vary, so be prepared to wait for a decision. You can usually
                check the status of your application online or by contacting the
                embassy or consulate.
                <br />
                <br />
                ● Attend an interview (if required): Depending on the specific
                type of visa you are applying for and the purpose of your visit,
                you may be required to attend an interview at the embassy or
                consulate.
                <br />
                <br />● Collect your visa: If your application is approved, you
                will be issued a visa. You will need to pay a fee to receive
                your visa.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Macao?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Macao depends on the specific
                type of visa you have and the purpose of your visit.
                <br />
                <br />
                If you are a citizen of a country or territory that allows
                short-term stays without a visa, you may be able to stay in
                Macao for a specific length of time without a visa. The exact
                length of stay and the specific purposes allowed without a visa
                vary depending on your country or territory of citizenship.
                <br />
                <br />
                If you are a citizen of another country or if you need a visa to
                enter Macao, the length of time you can stay in the territory
                will be determined by the specific type of visa you have and the
                purpose of your visit. Visas for tourism or business purposes
                are typically issued for stays of up to 90 days, while visas for
                other purposes, such as study or work, may be issued for longer
                periods of time.
                <br />
                <br />
                It is important to note that the length of stay granted on your
                visa is not the same as the length of time you are allowed to
                remain in Macao. When you enter Macao, the immigration
                authorities will stamp your passport with the length of time you
                are allowed to remain in the territory. This is known as your
                "period of stay." Your period of stay may be shorter than the
                length of time granted on your visa, depending on the specific
                rules and regulations in place.
                <br />
                <br />
                <span className="font-bold">
                  It is always a good idea to check with the authorities in
                  Macao or the nearest embassy or consulate of Macao to confirm
                  the current visa and entry requirements for your situation.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Macao?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                No travel is risk-free during COVID-19. Countries may further
                restrict travel or bring in new rules at short notice, for
                example due to a new COVID-19 variant. Check with your travel
                company or airline for any transport changes which may delay
                your journey home.
                <br />
                <br />
                If you test positive for COVID-19, you may need to stay where
                you are until you test negative. You may also need to seek
                treatment there.
                <br />
                <br />
                <span className="font-bold">
                  Don't forget to check twice before and at the same time on
                  reliable sources because the information presented can change
                  over time.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Informations About Diplomatic Passport!
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                A diplomatic passport is a type of passport that is issued to
                diplomats, government officials, and other individuals
                representing their country abroad. Diplomatic passports are
                typically issued to individuals who are traveling on official
                business and are entitled to certain privileges and exemptions
                while traveling.
                <br />
                <br />
                In Macao, diplomatic passports are issued by the government to
                individuals who are accredited as diplomats by the Macao Special
                Administrative Region (SAR). This includes ambassadors, chargés
                d'affaires, and other officials who are accredited to represent
                their country in Macao.
                <br />
                <br />
                Holders of diplomatic passports are entitled to certain
                privileges and exemptions while traveling in Macao, including:
                <br />
                <br />
                <span className="font-bold">
                  - Exemption from visa requirements: Diplomatic passport
                  holders are typically exempt from visa requirements when
                  traveling to Macao.
                  <br />
                  - Exemption from customs duties: Diplomatic passport holders
                  are typically exempt from paying customs duties on personal
                  effects brought into Macao.
                  <br />
                  - Exemption from taxes: Diplomatic passport holders are
                  typically exempt from paying taxes on goods and services
                  consumed in Macao.
                  <br />- Use of special lanes at immigration: Diplomatic
                  passport holders may be able to use special lanes at
                  immigration when entering or exiting Macao.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that these privileges and exemptions
                  are granted to diplomatic passport holders by the Macao SAR
                  and are subject to the rules and regulations in place. It is
                  always a good idea to check with the authorities in Macao or
                  the nearest embassy or consulate of Macao to confirm the
                  specific privileges and exemptions that apply to your
                  situation.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Macao?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether or not you need a worker visa to work in Macao depends
                on your nationality, the length of your stay, and the specific
                terms of your employment.
                <br />
                <br />
                Citizens of the People's Republic of China (PRC) do not need a
                worker visa to work in Macao. They are allowed to live and work
                in the territory without any restrictions.
                <br />
                <br />
                Citizens of other countries may need a worker visa to work in
                Macao, depending on the length of their stay and the specific
                terms of their employment. If you are coming to Macao to work
                for a specific employer on a temporary basis, you may be able to
                enter the territory on a short-stay visa (also known as a
                Schengen visa) and work without a separate worker visa.
                <br />
                <br />
                If you are coming to Macao to work for a longer period of time,
                you will need to apply for a long-stay visa (also known as a
                national visa) and a residence permit. You will need to show
                proof of employment in Macao and meet other requirements to be
                eligible for a long-stay visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that worker visas are usually tied to
                  a specific employer and job. If you change jobs or employers
                  while you are in Macao, you may need to apply for a new worker
                  visa. It is always a good idea to check with the authorities
                  in Macao or the nearest embassy or consulate of Macao to
                  determine the specific requirements for your situation.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Macao Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Macao, you will need to
                follow these steps:
                <br />
                <br />
                ● Determine if you need a worker visa: If you are a citizen of
                the People's Republic of China (PRC), you do not need a worker
                visa to work in Macao. If you are a citizen of another country,
                you may need a worker visa depending on the length of your stay
                and the specific terms of your employment.
                <br />
                <br />
                ● Gather the required documents: You will need to prepare a
                number of documents to submit with your worker visa application.
                These may include your passport, photographs, a completed and
                signed application form, and other documents as required.
                <br />
                <br />
                ● Submit your application: You can usually submit your worker
                visa application at the embassy or consulate of Macao in your
                home country. Some countries may have a designated visa
                application center where you can submit your application.
                <br />
                <br />
                ● Wait for a decision: The processing time for worker visa
                applications can vary, so be prepared to wait for a decision.
                You can usually check the status of your application online or
                by contacting the embassy or consulate.
                <br />
                <br />
                ● Attend an interview (if required): Depending on the specific
                type of worker visa you are applying for and the purpose of your
                visit, you may be required to attend an interview at the embassy
                or consulate.
                <br />
                <br />● Collect your visa: If your application is approved, you
                will be issued a worker visa. You will need to pay a fee to
                receive your visa, which you can usually do through a bank
                transfer or by credit card. Be sure to keep your visa safe, as
                you will need to present it when you enter Macao.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Macao Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas that you can apply for
                to work in Macao, depending on your specific circumstances and
                the length of your stay.
                <br />
                <br />
                <span className="font-bold">Short-stay worker visa</span>
                : This type of visa is also known as a Schengen visa and is
                typically issued for stays of up to 90 days. It is issued for
                temporary work assignments or short-term business purposes.
                <br />
                <br />
                <span className="font-bold">Long-stay worker visa</span>
                : This type of visa is also known as a national visa and is
                typically issued for stays of up to one year. It is issued for
                full-time employment or long-term business purposes.
                <br />
                <br />
                <span className="font-bold">Seasonal worker visa</span>
                : This type of visa is issued for temporary work assignments
                that are seasonal in nature, such as tourism or agriculture. It
                is typically issued for stays of up to six months.
                <br />
                <br />
                <span className="font-bold">Highly qualified worker visa</span>
                : This type of visa is issued to highly qualified professionals,
                such as executives, managers, or specialists, who are coming to
                work in Macao on a temporary or permanent basis.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that worker visas are usually tied to
                  a specific employer and job. If you change jobs or employers
                  while you are in Macao, you may need to apply for a new worker
                  visa. It is always a good idea to check with the authorities
                  in Macao or the nearest embassy or consulate of Macao to
                  determine the specific requirements for your situation.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Macao Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Macao, you will need to
                gather several documents to submit with your application. These
                may include:
                <br />
                <br />
                ● A valid passport or travel document.
                <br />
                <br />
                ● A completed and signed application form.
                <br />
                <br />
                ● Two passport-style photographs.
                <br />
                <br />
                ● A copy of your flight itinerary or travel plans.
                <br />
                <br />
                ● A job offer or contract of employment from your employer in
                Macao.
                <br />
                <br />
                ● Evidence of sufficient funds to cover your stay in Macao, such
                as bank statements or credit card statements.
                <br />
                <br />
                ● A certificate of good conduct (also known as a police
                clearance certificate).
                <br />
                <br />
                <span className="font-bold">
                  You may also be required to provide additional documents
                  depending on the specific type of worker visa you are applying
                  for and your specific circumstances. It is always a good idea
                  to check with the embassy or consulate of Macao in your home
                  country to make sure you have all the necessary documents
                  before you submit your application.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Macao?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You can usually apply for a worker visa to work in Macao at the
                embassy or consulate of Macao in your home country. Some
                countries may have a designated visa application center where
                you can submit your application.
                <br />
                <br />
                It is important to apply for your worker visa as early as
                possible to allow enough time for the application process to be
                completed. Processing times for worker visa applications can
                vary, so it is always a good idea to check with the embassy or
                consulate of Macao in your home country to find out how long you
                can expect to wait for a decision.
                <br />
                <br />
                You should also be aware of the expiration date of your passport
                when applying for a worker visa. Your passport must be valid for
                at least six months beyond the date you plan to leave Macao. If
                your passport will expire before this time, you will need to
                renew it before you can apply for a worker visa.
                <br />
                <br />
                <span className="font-bold">
                  It is also a good idea to check the visa requirements for your
                  return trip home before you apply for a worker visa. Some
                  countries may require that you have a valid visa or a certain
                  amount of time remaining on your passport before you can
                  enter. Be sure to check with the authorities in your home
                  country to make sure you have the necessary documents for your
                  return trip.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Macao?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether or not you need a visa to study in Macao depends on your
                nationality and the length of your stay.
                <br />
                <br />
                Citizens of the People's Republic of China (PRC) do not need a
                visa to study in Macao. They are allowed to live and study in
                the territory without any restrictions.
                <br />
                <br />
                Citizens of other countries may need a visa to study in Macao,
                depending on the length of their stay. If you are coming to
                Macao to study for a short period of time, such as for a
                language course or a summer program, you may be able to enter
                the territory on a short-stay visa (also known as a Schengen
                visa) and study without a separate student visa.
                <br />
                <br />
                If you are coming to Macao to study for a longer period of time,
                such as for a full degree program, you will need to apply for a
                long-stay visa (also known as a national visa) and a residence
                permit. You will need to show proof of acceptance to a school or
                university in Macao and meet other requirements to be eligible
                for a long-stay visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that student visas are usually tied to
                  a specific school or university. If you change schools or
                  programs while you are in Macao, you may need to apply for a
                  new student visa. It is always a good idea to check with the
                  authorities in Macao or the nearest embassy or consulate of
                  Macao to determine the specific requirements for your
                  situation.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Macao Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Macao, you will need to
                follow these steps:
                <br />
                <br />
                ● Determine if you need a student visa: If you are a citizen of
                the People's Republic of China (PRC), you do not need a student
                visa to study in Macao. If you are a citizen of another country,
                you may need a student visa depending on the length of your
                stay.
                <br />
                <br />
                ● Gather the required documents: You will need to prepare a
                number of documents to submit with your student visa
                application. These may include your passport, photographs, a
                completed and signed application form, and other documents as
                required. You will also need to provide proof of acceptance to a
                school or university in Macao and evidence of sufficient funds
                to cover your studies and living expenses.
                <br />
                <br />
                ● Submit your application: You can usually submit your student
                visa application at the embassy or consulate of Macao in your
                home country. Some countries may have a designated visa
                application center where you can submit your application.
                <br />
                <br />
                ● Wait for a decision: The processing time for student visa
                applications can vary, so be prepared to wait for a decision.
                You can usually check the status of your application online or
                by contacting the embassy or consulate.
                <br />
                <br />
                ● Attend an interview (if required): Depending on the specific
                type of student visa you are applying for and the purpose of
                your visit, you may be required to attend an interview at the
                embassy or consulate.
                <br />
                <br />
                ● Collect your visa: If your application is approved, you will
                be issued a student visa. You will need to pay a fee to receive
                your visa, which you can usually do through a bank transfer or
                by credit card. Be sure to keep your visa safe, as you will need
                to present it when you enter Macao.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that a student visa does not guarantee
                  entry into Macao. You will also need to meet the entry
                  requirements of the Macao Special Administrative Region (SAR)
                  when you arrive.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Macao Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a student visa to study in Macao, you will
                need to meet the following requirements:
                <br />
                <br />
                ● You must be accepted to a school or university in Macao: You
                will need to provide proof of acceptance to a recognized school
                or university in Macao, such as a letter of acceptance or a
                certificate of enrollment.
                <br />
                <br />
                ● You must have sufficient funds to cover your studies and
                living expenses: You will need to provide evidence of sufficient
                funds to cover your studies and living expenses in Macao, such
                as bank statements or a letter of financial support.
                <br />
                <br />
                ● You must have a valid passport or travel document: Your
                passport must be valid for at least six months beyond the date
                you plan to leave Macao. If your passport will expire before
                this time, you will need to renew it before you can apply for a
                student visa.
                <br />
                <br />
                ● You must meet the entry requirements of the Macao Special
                Administrative Region (SAR): You will need to meet the entry
                requirements of the Macao SAR when you arrive, including showing
                proof of a return or onward ticket and having sufficient funds
                to cover your stay.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that these are general requirements
                  for a student visa to study in Macao. The specific
                  requirements may vary depending on the specific type of
                  student visa you are applying for and your specific
                  circumstances. It is always a good idea to check with the
                  authorities in Macao or the nearest embassy or consulate of
                  Macao to confirm the specific requirements for your situation.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Macao Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa to study in Macao will
                depend on the specific type of student visa you are applying for
                and the length of your stay.
                <br />
                <br />
                <span className="font-bold">Short-stay student visas</span>{" "}
                (also known as Schengen visas) are typically valid for stays of
                up to 90 days and cost around 60 EUR (about 68 USD).
                <br />
                <br />
                <span className="font-bold">Long-stay student visas</span> (also
                known as national visas) are typically valid for stays of up to
                one year and cost around 75 EUR (about 85 USD).
                <br />
                <br />
                <span className="font-bold">Seasonal student visas</span> are
                typically valid for stays of up to six months and cost around 60
                EUR (about 68 USD).
                <br />
                <br />
                <span className="font-bold">
                  Highly qualified student visas
                </span>{" "}
                are typically valid for stays of up to one year and cost around
                75 EUR (about 85 USD).
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that these are general estimates of
                  the validity and price of student visas to study in Macao. The
                  specific validity and price may vary depending on your
                  specific circumstances and the current exchange rate. It is
                  always a good idea to check with the authorities in Macao or
                  the nearest embassy or consulate of Macao to confirm the
                  specific validity and price for your situation.
                </span>
              </p>
            </Container>
          </>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Macao;
