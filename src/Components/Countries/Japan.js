import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Japan = () => {
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
        <title>Japan</title>
        <meta name="description" content="Japan" />
        <meta
          name="keywords"
          content="Japan travel visa, Japan work visa, Japan study visa, How to apply for an Japan visa, Japan visa requirements, Japan tourist visa, Japan student visa, Japan business visa, Japan visa processing time, Japan visa application process, Japan visa for Americans, Japan visa for Europeans, Japan visa for Japanns, Japan visa for Canadians, Japan visa for Japanns, Japan visa for Chinese, Japan visa for Africans, Japan visa for Asians, Japan visa for South Americans, Japan visa for Middle Easterners, Japan visa for UK citizens, Japan visa for EU citizens, Japan visa for Schengen area, Japan visa for non-EU citizens, Japan visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Japan
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Japan is an island nation in East Asia that is known for its rich
              culture, advanced technology, and unique blend of modern and
              traditional influences. The country is known for its bustling
              cities, such as Tokyo and Osaka, which are home to many of the
              world's leading companies and technology firms. Japan is also
              known for its beautiful landscapes, including its mountainous
              terrain, forests, and beaches. Additionally, Japan is known for
              its rich cultural heritage, including its art, architecture, and
              cuisine, which includes dishes such as sushi, ramen, and tempura.
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
                Who can enter Japan without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are able to enter Japan without a
                visa for short stays, such as for tourism or business. These
                countries include:
                <br />
                <br />
                <span className="font-bold">
                  Andorra, Australia, Austria, Belgium, Bulgaria, Canada, Chile,
                  Cyprus, Czech Republic, Denmark, Estonia, Finland, France,
                  Germany, Greece, Hungary, Iceland, Ireland, Italy, Kosovo,
                  Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Monaco,
                  Netherlands, New Zealand, Norway, Poland, Portugal, Romania,
                  San Marino, Slovakia, Slovenia, Spain, Sweden, Switzerland,
                  United Kingdom, United States.
                </span>
                <br />
                <br />
                Citizens of these countries can enter Japan for up to 90 days
                without a visa for most purposes, such as tourism, business, or
                visiting relatives. However, they are not allowed to work while
                in Japan on this visa waiver.
                <br />
                <br />
                Other nationalities may be able to enter Japan without a visa in
                some circumstances, such as if they are transiting through Japan
                on their way to another country. In these cases, they may be
                able to enter Japan visa-free for up to 72 or 144 hours,
                depending on their country of origin and the purpose of their
                transit.
                <br />
                <br />
                <span className="font-bold">
                  It's always a good idea to check the visa requirements for
                  Japan before planning your trip, as the rules can change and
                  different rules may apply depending on your specific
                  circumstances.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Japan Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Japan, you will need to submit the
                following documents:
                <br />
                <br />
                ● A valid passport with at least 6 months of remaining validity.
                <br />
                <br />
                ● A completed visa application form, which you can get from a
                Japanese embassy or consulate or download from their website.
                <br />
                <br />
                ● A passport-sized photograph taken within the last 6 months.
                <br />
                <br />
                ● Proof of your purpose of visit to Japan, such as a letter of
                invitation from a host in Japan or a letter from your employer
                stating the purpose of your trip.
                <br />
                <br />
                ● Proof of your sufficient financial means to support yourself
                during your stay in Japan, such as bank statements or a letter
                from your employer stating that they will cover your expenses.
                <br />
                <br />
                ● Other documents may be required depending on your specific
                circumstances and the type of visa you are applying for. For
                example, students may need to provide a letter of acceptance
                from a Japanese university, and those traveling for work may
                need to provide a copy of their employment contract.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the Japanese embassy or
                  consulate in your country for the most up-to-date information
                  on the documents required for your visa application. They will
                  be able to provide you with a list of specific documents that
                  you need to submit based on your individual circumstances.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Japan Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Japan visa, you will need to follow these steps:
                <br />
                <br />
                ● Determine the type of visa you need: Japan offers several
                types of visas, including tourist visas, business visas, work
                visas, and student visas. Determine which type of visa is most
                appropriate for your trip to Japan.
                <br />
                <br />
                ● Gather the required documents: You will need to gather the
                documents required for your visa application, including your
                passport, a completed visa application form, a passport-sized
                photograph, and any other documents required for your specific
                circumstances.
                <br />
                <br />
                ● Contact the Japanese embassy or consulate: Contact the
                Japanese embassy or consulate in your country to schedule an
                appointment to submit your visa application. You may be able to
                make an appointment online or by phone.
                <br />
                <br />
                ● Submit your application: Bring your completed application and
                required documents to your appointment at the Japanese embassy
                or consulate. You may be required to pay a visa processing fee
                at this time.
                <br />
                <br />
                ● Wait for processing: Your visa application will be processed
                by the Japanese embassy or consulate. This process can take
                several weeks, so it's a good idea to apply for your visa well
                in advance of your planned trip.
                <br />
                <br />
                ● Receive your visa: If your visa application is approved, you
                will receive your visa in the form of a stamp or sticker in your
                passport. Keep this with you when you travel to Japan.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the Japanese embassy or
                  consulate in your country for the most up-to-date information
                  on the visa application process, as the requirements can vary
                  depending on your country of origin and the type of visa you
                  are applying for.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Japan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are allowed to stay in Japan will depend
                on the type of visa you have.
                <br />
                <br />
                If you are a citizen of one of the countries that is eligible
                for visa-free entry to Japan, you can stay for up to 90 days
                without a visa for most purposes, such as tourism, business, or
                visiting relatives.
                <br />
                <br />
                If you have a tourist visa, you will typically be allowed to
                stay in Japan for up to 90 days. Other types of visas, such as
                work visas and student visas, may allow you to stay in Japan for
                a longer period of time.
                <br />
                <br />
                <span className="font-bold">
                  It's always a good idea to check the specific terms of your
                  visa before planning your trip to Japan, as the rules can vary
                  depending on your circumstances. You can find this information
                  on the visa label in your passport or by contacting the
                  Japanese embassy or consulate in your country.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Japan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                For all cross-border travelers and returnees from
                countries/regions where the B.1.1.529 Omicron variant becomes
                dominant (all countries/regions except for those where COVID-19
                variants other than the Omicron variant become dominant),
                on-arrival test at the quarantine station, self-quarantine in
                places such as their own residence or accommodations, and
                refraining from use of public transportation are no longer
                required in principle. However, all returnees and entrants are
                required to provide either a valid COVID-19 vaccination
                certificate (3 doses) of vaccines on the Emergency Use List of
                World Health Organization (WHO) or a certificate of negative
                result of pre-departure COVID-19 test conducted within 72 hours
                prior to departing from the original country/region.
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
                A diplomatic passport is a type of passport issued to diplomats
                and other officials who are representing their country abroad.
                It is issued by the government of the passport holder's country
                and is used for official travel on behalf of the government.
                <br />
                <br />
                In Japan, diplomatic passports are issued to Japanese diplomats
                and other officials who are traveling abroad on official
                business. They are also issued to the spouse and children of a
                diplomat, as well as to other individuals who are traveling on
                official business for the Japanese government.
                <br />
                <br />
                Diplomatic passports are generally issued for a limited period
                of time, typically corresponding to the duration of the holder's
                assignment abroad. They are usually valid for a period of 5
                years, but this can vary depending on the specific circumstances
                of the passport holder.
                <br />
                <br />
                Holders of diplomatic passports are generally accorded certain
                privileges and immunities while traveling abroad, such as
                exemption from visa requirements and entry fees, and diplomatic
                immunity in certain cases. These privileges and immunities are
                based on international conventions and are intended to allow
                diplomats to carry out their duties without interference.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that diplomatic passports are only for
                  official travel and cannot be used for personal travel or
                  tourism. If you are a Japanese diplomat or official and need
                  to travel for personal or tourism purposes, you will need to
                  use a regular Japanese passport.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Japan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in Japan, you will typically need to
                obtain a worker visa before you can begin your employment. The
                type of worker visa you will need will depend on the nature of
                your work and your qualifications.
                <br />
                <br />
                To apply for a worker visa in Japan, you will need to have a job
                offer from a Japanese employer and meet the specific
                requirements for the type of visa you are applying for. You will
                also need to submit a number of documents, including a valid
                passport, a completed visa application form, and proof of your
                qualifications and employment.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the Japanese embassy or
                  consulate in your country for the most up-to-date information
                  on the worker visa application process, as the requirements
                  can vary depending on your country of origin and the type of
                  visa you are applying for.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Japan Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Japan, you will need to
                follow these steps:
                <br />
                <br />
                ● Determine the type of worker visa you need: There are several
                types of worker visas available in Japan, including the Working
                Holiday Visa, Specified Skilled Worker Visa, Professional Visa,
                and Business Manager Visa. Determine which type of visa is most
                appropriate for your situation based on your qualifications and
                the nature of your work in Japan.
                <br />
                <br />
                ● Find a job: You will need to have a job offer from a Japanese
                employer in order to apply for a worker visa. It's a good idea
                to start looking for job opportunities in Japan before you apply
                for your visa.
                <br />
                <br />
                ● Gather the required documents: You will need to gather the
                documents required for your worker visa application, including
                your passport, a completed visa application form, and any other
                documents required for your specific circumstances.
                <br />
                <br />
                ● Contact the Japanese embassy or consulate: Contact the
                Japanese embassy or consulate in your country to schedule an
                appointment to submit your worker visa application. You may be
                able to make an appointment online or by phone.
                <br />
                <br />
                ● Submit your application: Bring your completed application and
                required documents to your appointment at the Japanese embassy
                or consulate. You may be required to pay a visa processing fee
                at this time.
                <br />
                <br />
                ● Wait for processing: Your worker visa application will be
                processed by the Japanese embassy or consulate. This process can
                take several weeks, so it's a good idea to apply for your visa
                well in advance of your planned trip.
                <br />
                <br />
                ● Receive your visa: If your worker visa application is
                approved, you will receive your visa in the form of a stamp or
                sticker in your passport. Keep this with you when you travel to
                Japan.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the Japanese embassy or
                  consulate in your country for the most up-to-date information
                  on the worker visa application process, as the requirements
                  can vary depending on your country of origin and the type of
                  visa you are applying for.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Japan Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available in Japan,
                including:
                <br />
                <br />
                <span className="font-bold">Working Holiday Visa</span>
                : This visa is available to citizens of certain countries who
                are aged 18-30 and want to work and travel in Japan for up to 1
                year. This visa allows you to work in any type of job, except
                for work that is prohibited by law.
                <br />
                <br />
                <span className="font-bold">Specified Skilled Worker Visa</span>
                : This visa is available to individuals who have certain
                specialized skills that are in demand in Japan. It allows you to
                work in certain sectors, such as construction, nursing care, or
                agriculture.
                <br />
                <br />
                <span className="font-bold">Professional Visa</span>: This visa
                is available to individuals with advanced degrees or specialized
                skills in certain fields, such as science, engineering, or
                academia. It allows you to work in a professional capacity in
                Japan.
                <br />
                <br />
                <span className="font-bold">Business Manager Visa</span>: This
                visa is available to individuals who are being sent to Japan by
                their foreign company to work as a manager or executive in a
                Japanese branch or subsidiary.
                <br />
                <br />
                Each type of worker visa has specific requirements that must be
                met in order to be eligible for the visa. For example, the
                Working Holiday Visa is only available to citizens of certain
                countries and is restricted to individuals aged 18-30. The
                Specified Skilled Worker Visa requires that you have certain
                specialized skills that are in demand in Japan. The Professional
                Visa requires that you have an advanced degree or specialized
                skills in a specific field. The Business Manager Visa requires
                that you be sent to Japan by your foreign company to work as a
                manager or executive in a Japanese branch or subsidiary.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to carefully consider your qualifications and
                  the nature of your work in Japan when deciding which type of
                  worker visa to apply for. You can find more information on the
                  specific requirements for each type of worker visa on the
                  website of the Japanese embassy or consulate in your country.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Japan Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Japan, you will typically
                need to submit the following documents:
                <br />
                <br />
                ● A valid passport with at least 6 months of remaining validity.
                <br />
                <br />
                ● A completed visa application form, which you can get from a
                Japanese embassy or consulate or download from their website.
                <br />
                <br />
                ● A passport-sized photograph taken within the last 6 months.
                <br />
                <br />
                ● A letter of employment from your Japanese employer, stating
                the nature of your work and the terms of your employment.
                <br />
                <br />
                ● Proof of your qualifications, such as a copy of your degree or
                other relevant certificates.
                <br />
                <br />
                ● Proof of your financial means to support yourself during your
                stay in Japan, such as bank statements or a letter from your
                employer stating that they will cover your expenses.
                <br />
                <br />
                ● Other documents may be required depending on your specific
                circumstances and the type of worker visa you are applying for.
                For example, if you are applying for a Working Holiday Visa, you
                may need to provide proof of your travel plans, such as a
                round-trip ticket or a letter of invitation from a host in
                Japan.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the Japanese embassy or
                  consulate in your country for the most up-to-date information
                  on the documents required for your worker visa application, as
                  the requirements can vary depending on your country of origin
                  and the type of visa you are applying for. They will be able
                  to provide you with a list of specific documents that you need
                  to submit based on your individual circumstances.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Japan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Japan, you will need to
                submit your application to the Japanese embassy or consulate in
                your country. You can find the nearest embassy or consulate by
                checking the Ministry of Foreign Affairs of Japan's website or
                contacting the embassy or consulate directly.
                <br />
                <br />
                You can usually make an appointment to submit your worker visa
                application by contacting the embassy or consulate by phone or
                online. It's a good idea to make your appointment well in
                advance of your planned trip to Japan, as the visa application
                process can take several weeks.
                <br />
                <br />
                You will need to bring your completed application and required
                documents to your appointment at the embassy or consulate. You
                may also be required to pay a visa processing fee at this time.
                <br />
                <br />
                After you submit your application, it will be processed by the
                embassy or consulate. If your application is approved, you will
                receive your worker visa in the form of a stamp or sticker in
                your passport. You will need to keep this with you when you
                travel to Japan.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the Japanese embassy or
                  consulate in your country for the most up-to-date information
                  on the worker visa application process, as the requirements
                  can vary depending on your country of origin and the type of
                  visa you are applying for.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Japan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in Japan, you will typically need
                to obtain a student visa before you can begin your studies. The
                student visa is a type of long-term visa that allows you to stay
                in Japan for the duration of your studies.
                <br />
                <br />
                To be eligible for a student visa, you will need to be accepted
                into a recognized educational institution in Japan, such as a
                university, language school, or vocational school. You will also
                need to meet the specific requirements for the student visa,
                which may include having sufficient financial means to support
                yourself during your studies in Japan and being able to
                demonstrate your ability to speak, read, and write Japanese.
                <br />
                <br />
                To apply for a student visa, you will need to gather the
                required documents, including a valid passport, a completed visa
                application form, and a letter of acceptance from your
                educational institution in Japan. You will also need to submit
                evidence of your financial resources and your Japanese language
                ability.
                <br />
                <br />
                You will need to submit your student visa application to the
                Japanese embassy or consulate in your country. The visa
                application process can take several weeks, so it's a good idea
                to apply for your visa well in advance of your planned trip to
                Japan.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the Japanese embassy or
                  consulate in your country for the most up-to-date information
                  on the student visa application process, as the requirements
                  can vary depending on your country of origin. They will be
                  able to provide you with a list of specific documents that you
                  need to submit based on your individual circumstances.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Japan Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Japan, you will need to
                follow these steps:
                <br />
                <br />
                ● Find a school: You will need to be accepted into a recognized
                educational institution in Japan, such as a university, language
                school, or vocational school. Start by researching schools and
                programs that interest you and apply to the ones you are
                interested in attending.
                <br />
                <br />
                ● Gather the required documents: You will need to gather the
                documents required for your student visa application, including
                your passport, a completed visa application form, and a letter
                of acceptance from your educational institution in Japan. You
                will also need to submit evidence of your financial resources
                and your Japanese language ability.
                <br />
                <br />
                ● Contact the Japanese embassy or consulate: Contact the
                Japanese embassy or consulate in your country to schedule an
                appointment to submit your student visa application. You may be
                able to make an appointment online or by phone.
                <br />
                <br />
                ● Submit your application: Bring your completed application and
                required documents to your appointment at the Japanese embassy
                or consulate. You may be required to pay a visa processing fee
                at this time.
                <br />
                <br />
                ● Wait for processing: Your student visa application will be
                processed by the Japanese embassy or consulate. This process can
                take several weeks, so it's a good idea to apply for your visa
                well in advance of your planned trip.
                <br />
                <br />
                ● Receive your visa: If your student visa application is
                approved, you will receive your visa in the form of a stamp or
                sticker in your passport. Keep this with you when you travel to
                Japan.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the Japanese embassy or
                  consulate in your country for the most up-to-date information
                  on the student visa application process, as the requirements
                  can vary depending on your country of origin. They will be
                  able to provide you with a list of specific documents that you
                  need to submit based on your individual circumstances.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Japan Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a student visa to study in Japan, you will
                typically need to meet the following requirements:
                <br />
                <br />
                ● Be accepted into a recognized educational institution in
                Japan, such as a university, language school, or vocational
                school.
                <br />
                <br />
                ● Have sufficient financial means to support yourself during
                your studies in Japan, such as through a scholarship or personal
                savings.
                <br />
                <br />
                ● Be able to demonstrate your ability to speak, read, and write
                Japanese, if required by your educational institution.
                <br />
                <br />
                ● Meet any other requirements set by the Japanese embassy or
                consulate in your country, such as a minimum age or having a
                clean criminal record.
                <br />
                <br />
                To apply for a student visa, you will need to gather the
                required documents, including:
                <br />
                <br />
                ● A valid passport with at least 6 months of remaining validity.
                <br />
                <br />
                ● A completed visa application form, which you can get from a
                Japanese embassy or consulate or download from their website.
                <br />
                <br />
                ● A passport-sized photograph taken within the last 6 months.
                <br />
                <br />
                ● A letter of acceptance from your educational institution in
                Japan.
                <br />
                <br />
                ● Evidence of your financial resources, such as bank statements
                or a letter from your scholarship sponsor.
                <br />
                <br />
                ● Evidence of your Japanese language ability, such as a Japanese
                language proficiency test certificate.
                <br />
                <br />
                Other documents may be required depending on your specific
                circumstances and the requirements of the Japanese embassy or
                consulate in your country.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the Japanese embassy or
                  consulate in your country for the most up-to-date information
                  on the student visa requirements and application process, as
                  the requirements can vary depending on your country of origin.
                  They will be able to provide you with a list of specific
                  documents that you need to submit based on your individual
                  circumstances.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Japan Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity of a student visa to study in Japan will depend on
                the length of your studies and the terms of your student visa.
                <br />
                <br />
                Typically, a student visa is issued for the duration of your
                studies, up to a maximum of 4 years. If your studies are shorter
                than 4 years, your student visa will be valid for the duration
                of your studies.
                <br />
                <br />
                The price of a student visa will vary depending on the country
                you are applying from and the specific type of visa you are
                applying for. You may be required to pay a visa processing fee
                when you submit your application at the Japanese embassy or
                consulate in your country.
                <br />
                <br />
                It's a good idea to check with the Japanese embassy or consulate
                in your country for the most up-to-date information on the price
                of a student visa, as the fees can vary depending on your
                country of origin and the type of visa you are applying for. You
                may also be able to find information on the visa fees on the
                embassy or consulate's website.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that in addition to the visa fees, you
                  will also need to cover the costs of your studies in Japan and
                  your living expenses while you are in the country. It's a good
                  idea to carefully consider these costs when planning your
                  budget for your studies in Japan.
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

export default Japan;
