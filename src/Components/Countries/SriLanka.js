import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const SriLanka = () => {
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
        <title>Sri Lanka</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="Sri Lanka travel visa, Sri Lanka work visa, Sri Lanka study visa, How to apply for an Sri Lanka visa, Sri Lanka visa requirements, Sri Lanka tourist visa, Sri Lanka student visa, Sri Lanka business visa, Sri Lanka visa processing time, Sri Lanka visa application process, Sri Lanka visa for Americans, Sri Lanka visa for Europeans, Sri Lanka visa for Sri Lankans, Sri Lanka visa for Canadians, Sri Lanka visa for Sri Lankans, Sri Lanka visa for Chinese, Sri Lanka visa for Africans, Sri Lanka visa for Asians, Sri Lanka visa for South Americans, Sri Lanka visa for Middle Easterners, Sri Lanka visa for UK citizens, Sri Lanka visa for EU citizens, Sri Lanka visa for Schengen area, Sri Lanka visa for non-EU citizens, Sri Lanka visa fees and charges"


          
        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Sri Lanka
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Sri Lanka is an island nation located in South Asia, known for its
              rich history and culture. It is known for its beautiful beaches,
              lush forests, and abundant wildlife, including elephants,
              leopards, and whales. Sri Lanka is also known for its unique
              cuisine, which blends Indian, Arabic, and Chinese influences.
              Additionally, the country is known for its tea industry, with many
              plantations located in the scenic hill country. Sri Lanka is also
              known for its ancient Buddhist ruins and temples, which attract
              many tourists.
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
                Who can enter Sri Lanka without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Sri Lanka has visa-free arrangements with a number of countries,
                which means that citizens of these countries can enter Sri Lanka
                without a visa for short stays.
                <br />
                <br />
                The countries whose citizens are allowed to enter Sri Lanka
                without a visa include:
                <br />
                <br />
                <span className="font-bold">
                  India, Singapore, Maldives, Seychelles, Thailand, South Korea,
                  Japan, Philippines.
                </span>
                <br />
                <br />
                Citizens of these countries can enter Sri Lanka for a period of
                30 days without a visa. If you want to stay longer than 30 days,
                you will need to apply for a visa at a Sri Lankan embassy or
                consulate before you travel.
                <br />
                <br />
                It is important to note that visa-free entry is only available
                for tourism and business purposes. If you are planning to study,
                work, or reside in Sri Lanka, you will need to apply for a
                relevant visa.
                <br />
                <br />
                <span className="font-bold">
                  You should also make sure to have a valid passport with at
                  least 6 months of validity remaining when you travel to Sri
                  Lanka.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Sri Lanka Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Sri Lanka, you will need to provide the
                following documents:
                <br />
                <br />
                ● A valid passport with at least 6 months of remaining validity
                and at least two blank pages.
                <br />
                <br />
                ● A completed visa application form.
                <br />
                <br />
                ● A passport-sized photograph.
                <br />
                <br />
                ● Proof of payment for the visa fee.
                <br />
                <br />
                ● Evidence of sufficient funds to support your stay in Sri
                Lanka, such as bank statements or a letter from your employer.
                <br />
                <br />
                ● A return or onward ticket.
                <br />
                <br />
                ● A letter of invitation from a host in Sri Lanka, if
                applicable.
                <br />
                <br />
                <span className="font-bold">
                  It is also a good idea to check the website of the Sri Lankan
                  Department of Immigration and Emigration for the most
                  up-to-date information on visa requirements, as these can
                  change. You may also be required to provide additional
                  documents, depending on the purpose of your visit and your
                  specific circumstances.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Sri Lanka Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                There are several ways to apply for a visa to Sri Lanka,
                depending on your location and the type of visa you are seeking.
                Here are the steps you can follow to apply for a visa to Sri
                Lanka:
                <br />
                <br />
                ● Determine the type of visa you need: Sri Lanka offers several
                types of visas, including tourist visas, business visas, and
                work visas. Determine the type of visa that best fits your
                purpose of visit and your specific circumstances.
                <br />
                <br />
                ● Check the visa requirements: Make sure you meet the
                requirements for the type of visa you are applying for. You may
                need to provide documents such as a valid passport, a completed
                application form, a passport-sized photograph, and proof of
                payment for the visa fee.
                <br />
                <br />
                ● Submit your application: You can apply for a visa to Sri Lanka
                online through the Electronic Travel Authorization (ETA) system,
                or you can submit a paper application at a Sri Lankan embassy or
                consulate. If you are applying online, you will need to provide
                your personal and passport details, as well as information about
                your travel plans. If you are applying by paper, you will need
                to provide the required documents and pay the visa fee.
                <br />
                <br />● Wait for a decision: The processing time for a visa to
                Sri Lanka can vary depending on the type of visa and the embassy
                or consulate where you are applying. You will be notified of the
                decision on your visa application by email or mail.
                <br />
                <br />
                ● Collect your visa: If your visa application is approved, you
                will need to collect your visa from the embassy or consulate
                where you applied or from the port of entry in Sri Lanka. Make
                sure to bring your passport and any other required documents
                with you.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  vary depending on your location and the specific requirements
                  of the embassy or consulate where you are applying. It is a
                  good idea to check the website of the Sri Lankan Department of
                  Immigration and Emigration for the most up-to-date information
                  on the visa application process.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Sri Lanka?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are permitted to stay in Sri Lanka
                depends on the type of visa you have and the purpose of your
                visit. Here are the maximum stay periods for some common types
                of visas to Sri Lanka:
                <br />
                <br />
                <span className="font-bold">Tourist visas</span>: Tourist visas
                are typically valid for a stay of up to 30 days. However, if you
                wish to stay longer, you can apply for an extension at the
                Department of Immigration and Emigration in Colombo.
                <br />
                <br />
                <span className="font-bold">Business visas</span>: Business
                visas are typically valid for a stay of up to 90 days. However,
                if you wish to stay longer, you can apply for an extension at
                the Department of Immigration and Emigration in Colombo.
                <br />
                <br />
                <span className="font-bold">Work visas</span>: Work visas are
                typically valid for a stay of up to 2 years. However, the length
                of your stay will depend on the length of your employment
                contract.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the length of your stay in Sri
                  Lanka is at the discretion of the Department of Immigration
                  and Emigration, and you may be required to provide evidence of
                  your purpose of visit and your plans for your stay in the
                  country. It is a good idea to check the website of the
                  Department of Immigration and Emigration for the most
                  up-to-date information on visa periods of stay.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Sri Lanka?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are unvaccinated or not fully vaccinated you will no
                longer need to quarantine on arrival in Sri Lanka, and as of
                December 7th no pre-arrival PCR or RAT tests are required for
                inbound passengers.
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
                A diplomatic passport is a special type of passport issued to
                diplomats and other government officials who are traveling
                abroad on official business. In Sri Lanka, diplomatic passports
                are issued by the Department of Immigration and Emigration to
                individuals who are accredited by the Ministry of Foreign
                Affairs as diplomats, consular officers, or other officials
                representing the Sri Lankan government overseas.
                <br />
                <br />
                Holders of diplomatic passports are entitled to certain
                privileges and immunities while traveling abroad, including
                exemption from visa requirements, customs duties, and local
                taxes in many countries. However, it is important to note that
                these privileges and immunities may vary depending on the laws
                of the country you are visiting and the nature of your official
                duties.
                <br />
                <br />
                To be eligible for a diplomatic passport in Sri Lanka, you must
                be a Sri Lankan citizen and be serving as a diplomat, consular
                officer, or other official representing the Sri Lankan
                government overseas. You will need to provide evidence of your
                official status, such as a letter of accreditation from the
                Ministry of Foreign Affairs, when you apply for a diplomatic
                passport.
                <br />
                <br />
                <span className="font-bold">
                  It is a good idea to check the website of the Department of
                  Immigration and Emigration for the most up-to-date information
                  on the requirements for obtaining a diplomatic passport in Sri
                  Lanka.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Sri Lanka?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You may need a worker visa to work in Sri Lanka, depending on
                your nationality and the length and nature of your intended
                employment.
                <br />
                <br />
                If you are a citizen of a country that has a bilateral agreement
                with Sri Lanka allowing for the issuance of work visas, you may
                be able to apply for a worker visa to work in Sri Lanka. In this
                case, you will need to provide a job offer from a Sri Lankan
                employer and meet the requirements for the type of work visa you
                are applying for.
                <br />
                <br />
                If you are a citizen of a country that does not have a bilateral
                agreement with Sri Lanka, you may need to apply for a business
                visa or a tourist visa and then apply for a work permit once you
                arrive in Sri Lanka. In this case, you will need to provide a
                job offer from a Sri Lankan employer and meet the requirements
                for obtaining a work permit.
                <br />
                <br />
                <span className="font-bold">
                  It is a good idea to check the website of the Department of
                  Immigration and Emigration for the most up-to-date information
                  on the requirements for obtaining a worker visa in Sri Lanka,
                  as well as the specific requirements for obtaining a work
                  permit if you are not eligible for a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Sri Lanka Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Sri Lanka, you will need
                to follow these steps:
                <br />
                <br />
                ● Determine your eligibility: Worker visas to Sri Lanka are
                issued to citizens of countries that have bilateral agreements
                with Sri Lanka allowing for the issuance of work visas. Check to
                see if your country has such an agreement with Sri Lanka. If it
                does not, you may need to apply for a business visa or a tourist
                visa and then apply for a work permit once you arrive in Sri
                Lanka.
                <br />
                <br />
                ● Gather required documents: You will need to provide a variety
                of documents in order to apply for a worker visa, including a
                valid passport, proof of employment, and proof of your academic
                and professional qualifications. You may also need to provide a
                police clearance certificate, a medical certificate, and other
                supporting documents, depending on the type of visa you are
                applying for.
                <br />
                <br />
                ● Find a job: In order to apply for a worker visa, you will need
                a job offer from a Sri Lankan employer. You may need to provide
                evidence of your qualifications and work experience when seeking
                employment.
                <br />
                <br />
                ● Submit your application: You can apply for a worker visa at a
                Sri Lankan embassy or consulate in your home country. You will
                need to pay the visa fee and provide the required documents at
                the time of your application.
                <br />
                <br />
                ● Wait for a decision: The processing time for a worker visa to
                Sri Lanka can vary depending on the embassy or consulate where
                you are applying. You will be notified of the decision on your
                visa application by email or mail.
                <br />
                <br />
                ● Collect your visa: If your visa application is approved, you
                will need to collect your visa from the embassy or consulate
                where you applied or from the port of entry in Sri Lanka. Make
                sure to bring your passport and any other required documents
                with you.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  vary depending on your location and the specific requirements
                  of the embassy or consulate where you are applying. It is a
                  good idea to check the website of the Sri Lankan Department of
                  Immigration and Emigration for the most up-to-date information
                  on the visa application process.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Sri Lanka Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas that may be available to
                you if you are seeking to work in Sri Lanka, depending on your
                nationality, the nature of your employment, and the length of
                your stay. Some common types of worker visas for Sri Lanka
                include:
                <br />
                <br />
                <span className="font-bold">Employment visa</span>: An
                employment visa is issued to individuals who have been offered a
                job in Sri Lanka by a Sri Lankan employer. This type of visa is
                typically valid for a stay of up to 2 years, and it may be
                renewable.
                <br />
                <br />
                <span className="font-bold">Professional visa</span>: A
                professional visa is issued to individuals who have been offered
                a job in Sri Lanka in a professional or technical capacity. This
                type of visa is typically valid for a stay of up to 2 years, and
                it may be renewable.
                <br />
                <br />
                <span className="font-bold">Business visa</span>: A business
                visa is issued to individuals who are seeking to conduct
                business in Sri Lanka, such as attending meetings, signing
                contracts, or establishing a business. This type of visa is
                typically valid for a stay of up to 90 days, and it may be
                renewable.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  worker visa in Sri Lanka can vary depending on the type of
                  visa you are seeking and the specific requirements of the
                  embassy or consulate where you are applying. It is a good idea
                  to check the website of the Department of Immigration and
                  Emigration for the most up-to-date information on the types of
                  worker visas available and the requirements for obtaining
                  them.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Sri Lanka Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Sri Lanka, you will need
                to provide the following documents:
                <br />
                <br />
                ● A valid passport with at least 6 months of remaining validity
                and at least two blank pages.
                <br />
                <br />
                ● A completed visa application form.
                <br />
                <br />
                ● A passport-sized photograph.
                <br />
                <br />
                ● Evidence of sufficient funds to support your stay in Sri
                Lanka, such as bank statements or a letter from your employer.
                <br />
                <br />
                ● A return or onward ticket.
                <br />
                <br />
                ● A job offer from a Sri Lankan employer.
                <br />
                <br />● A letter of accreditation from the Ministry of Foreign
                Affairs, if applicable.
                <br />
                <br />
                <span className="font-bold">
                  You may also be required to provide additional documents,
                  depending on the type of worker visa you are applying for and
                  your specific circumstances. For example, you may need to
                  provide evidence of your qualifications and work experience,
                  or a business plan if you are seeking a business visa. It is a
                  good idea to check the website of the Department of
                  Immigration and Emigration for the most up-to-date information
                  on the requirements for obtaining a worker visa in Sri Lanka.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Sri Lanka?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Sri Lanka, you will need
                to submit your application at a Sri Lankan embassy or consulate
                in your home country. It is a good idea to check the website of
                the Department of Immigration and Emigration for a list of Sri
                Lankan embassies and consulates, as well as their contact
                information.
                <br />
                <br />
                You can apply for a worker visa at any time, but it is
                recommended to start the process as early as possible to allow
                enough time for your application to be processed. The processing
                time for a worker visa to Sri Lanka can vary depending on the
                embassy or consulate where you are applying and the workload at
                the time of your application.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  vary depending on your location and the specific requirements
                  of the embassy or consulate where you are applying. It is a
                  good idea to check the website of the Department of
                  Immigration and Emigration for the most up-to-date information
                  on the visa application process.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Sri Lanka?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You may need a visa to study in Sri Lanka, depending on your
                nationality and the length of your intended stay.
                <br />
                <br />
                Citizens of most countries are required to obtain a student visa
                to study in Sri Lanka for a period of more than 6 months. To
                apply for a student visa, you will need to provide proof of
                acceptance into a recognized educational institution in Sri
                Lanka, as well as evidence of your financial ability to support
                your stay in the country. You may also be required to provide a
                police clearance certificate and a medical certificate.
                <br />
                <br />
                Citizens of some countries, including India, are exempt from the
                requirement to obtain a student visa to study in Sri Lanka for a
                period of up to 6 months. However, it is a good idea to check
                the website of the Department of Immigration and Emigration for
                the most up-to-date information on visa requirements for
                studying in Sri Lanka, as these can change.
                <br />
                <br />
                <span className="font-bold">
                  It is a good idea to start the visa application process as
                  early as possible to allow enough time for your application to
                  be processed. The processing time for a student visa to Sri
                  Lanka can vary depending on the embassy or consulate where you
                  are applying and the workload at the time of your application.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Sri Lanka Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Sri Lanka, you will need
                to follow these steps:
                <br />
                <br />
                ● Determine your eligibility: Student visas to Sri Lanka are
                generally issued to individuals who have been accepted into a
                recognized educational institution in Sri Lanka and who are
                seeking to study in the country for a period of more than 6
                months. If you are a citizen of a country that is exempt from
                the requirement to obtain a student visa to study in Sri Lanka
                for a period of up to 6 months, you may not need to apply for a
                student visa.
                <br />
                <br />
                ● Find a place to study: In order to apply for a student visa,
                you will need to be accepted into a recognized educational
                institution in Sri Lanka. You may need to provide evidence of
                your qualifications and English language proficiency when
                applying to study in Sri Lanka.
                <br />
                <br />
                ● Gather required documents: You will need to provide a variety
                of documents in order to apply for a student visa, including a
                valid passport, copies of your educational certificates, and
                proof of acceptance to a Sri Lanka educational institution.
                <br />
                <br />
                ● Submit your application: You can apply for a student visa at a
                Sri Lankan embassy or consulate in your home country. You will
                need to pay the visa fee and provide the required documents at
                the time of your application.
                <br />
                <br />
                ● Wait for a decision: The processing time for a student visa to
                Sri Lanka can vary depending on the embassy or consulate where
                you are applying. You will be notified of the decision on your
                visa application by email or mail.
                <br />
                <br />
                ● Collect your visa: If your visa application is approved, you
                will need to collect your visa from the embassy or consulate
                where you applied or from the port of entry in Sri Lanka. Make
                sure to bring your passport and any other required documents
                with you.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  vary depending on your location and the specific requirements
                  of the embassy or consulate where you are applying. It is a
                  good idea to check the website of the Sri Lankan Department of
                  Immigration and Emigration for the most up-to-date information
                  on the visa application process.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Sri Lanka Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a student visa to study in Sri Lanka, you
                will need to meet the following requirements:
                <br />
                <br />
                ● You must be accepted into a recognized educational institution
                in Sri Lanka.
                <br />
                <br />
                ● You must have sufficient financial resources to support your
                stay in Sri Lanka, such as bank statements or a letter of
                sponsorship.
                <br />
                <br />
                ● You must be in good health and provide a medical certificate
                as part of your visa application.
                <br />
                <br />
                ● You may be required to provide a police clearance certificate,
                depending on your specific circumstances.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  student visa in Sri Lanka can vary depending on the specific
                  requirements of the embassy or consulate where you are
                  applying. It is a good idea to check the website of the
                  Department of Immigration and Emigration for the most
                  up-to-date information on the requirements for obtaining a
                  student visa in Sri Lanka.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Sri Lanka Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price for a student visa to study in Sri Lanka
                depend on the length of your intended stay and the type of visa
                you are applying for.
                <br />
                <br />
                Student visas to Sri Lanka are typically valid for the duration
                of your studies, up to a maximum of 2 years. If you wish to stay
                longer, you may be able to apply for an extension at the
                Department of Immigration and Emigration in Colombo.
                <br />
                <br />
                The price for a student visa to Sri Lanka can vary depending on
                the type of visa you are applying for and the specific
                requirements of the embassy or consulate where you are applying.
                It is a good idea to check the website of the Department of
                Immigration and Emigration for the most up-to-date information
                on the price for a student visa in Sri Lanka. You may also be
                required to pay a processing fee when you submit your visa
                application.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the validity and price of a
                  student visa to Sri Lanka can vary depending on your specific
                  circumstances and the specific requirements of the embassy or
                  consulate where you are applying. It is a good idea to check
                  the website of the Department of Immigration and Emigration
                  for the most up-to-date information on the validity and price
                  of student visas in Sri Lanka.
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

export default SriLanka;
