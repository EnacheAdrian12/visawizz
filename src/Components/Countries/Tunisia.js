import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Tunisia = () => {
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
        <title>Tunisia</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="Tunisia travel visa, Tunisia work visa, Tunisia study visa, How to apply for an Tunisia visa, Tunisia visa requirements, Tunisia tourist visa, Tunisia student visa, Tunisia business visa, Tunisia visa processing time, Tunisia visa application process, Tunisia visa for Americans, Tunisia visa for Europeans, Tunisia visa for Sudanns, Tunisia visa for Canadians, Tunisia visa for Sudanns, Tunisia visa for Chinese, Tunisia visa for Africans, Tunisia visa for Asians, Tunisia visa for South Americans, Tunisia visa for Middle Easterners, Tunisia visa for UK citizens, Tunisia visa for EU citizens, Tunisia visa for Schengen area, Tunisia visa for non-EU citizens, Tunisia visa fees and charges"

          
        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Tunisia
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Tunisia is a country located in North Africa, known for its rich
              history and cultural heritage. It is known for its many ancient
              ruins, including the famous city of Carthage and the ancient Roman
              city of Dougga. Tunisia is also known for its beautiful beaches
              and Mediterranean coastline, which attract many tourists.
              Additionally, the country is known for its diverse population and
              culture, with a mix of Arab, Berber, and European influences.
              Tunisia is also known for its strong agricultural sector and its
              production of olives, citrus fruits, and grains.
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
                Who can enter Tunisia without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are eligible to enter Tunisia
                without a visa for stays of up to 90 days. The list of countries
                whose citizens are eligible for visa-free entry to Tunisia
                includes:
                <br />
                <br />
                <span className="font-bold">
                  Algeria, Argentina, Australia, Austria, Bahrain, Belgium,
                  Brazil, Canada, Chile, China, Colombia, Costa Rica, Croatia,
                  Cyprus, Czech Republic, Denmark, Ecuador, Estonia, Finland,
                  France, Germany, Greece, Hungary, Iceland, Ireland, Italy,
                  Japan, Kuwait, Latvia, Lebanon, Lithuania, Luxembourg, Malta,
                  Mexico, Morocco, Netherlands, New Zealand, Norway, Oman,
                  Panama, Peru, Poland, Portugal, Qatar, Romania, Russia, Saudi
                  Arabia, Slovakia, Slovenia, South Africa, South Korea, Spain,
                  Sweden, Switzerland, Tunisia, Turkey, United Arab Emirates,
                  United Kingdom, United States, Uruguay.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the list of countries whose
                  citizens are eligible for visa-free entry to Tunisia may
                  change from time to time, and it's always a good idea to check
                  with the Tunisian embassy or consulate in your country for the
                  most up-to-date information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Tunisia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Tunisia, you will need to have the
                following documents:
                <br />
                <br />
                ● A valid passport with at least 6 months of remaining validity.
                <br />
                <br />
                ● A completed visa application form.
                <br />
                <br />
                ● Two recent passport-sized photographs.
                <br />
                <br />
                ● A letter of invitation or confirmation of accommodation from a
                host in Tunisia (if applicable).
                <br />
                <br />
                ● Evidence of sufficient financial resources to support your
                stay in Tunisia.
                <br />
                <br />
                ● A return ticket or onward travel ticket.
                <br />
                <br />
                ● Any other documents required by the Tunisian embassy or
                consulate in your country (such as a police clearance
                certificate or proof of employment).
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific documents required
                  for a visa to Tunisia may vary depending on your specific
                  circumstances and the purpose of your trip. It's always a good
                  idea to check with the Tunisian embassy or consulate in your
                  country for the most up-to-date information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Tunisia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Tunisia, you will need to follow these
                steps:
                <br />
                <br />
                ● Determine the type of visa you need. There are several types
                of visas available for travel to Tunisia, including tourist
                visas, business visas, and student visas. You will need to
                determine which type of visa is most suitable for your trip
                based on the purpose of your visit.
                <br />
                <br />
                ● Gather the necessary documents. To apply for a visa to
                Tunisia, you will need to have a valid passport with at least 6
                months of remaining validity, a completed visa application form,
                two recent passport-sized photographs, a letter of invitation or
                confirmation of accommodation from a host in Tunisia (if
                applicable), evidence of sufficient financial resources to
                support your stay in Tunisia, and a return ticket or onward
                travel ticket. You may also be required to provide other
                documents, such as a police clearance certificate or proof of
                employment.
                <br />
                <br />
                ● Submit your application. You can submit your visa application
                in person at the Tunisian embassy or consulate in your country,
                or you may be able to apply online through an authorized visa
                agent.
                <br />
                <br />● Pay the visa fee. You will need to pay a fee to obtain a
                visa to Tunisia. The fee amount will depend on your country of
                citizenship and the type of visa you are applying for.
                <br />
                <br />
                ● Wait for a decision. It may take several weeks for your
                application to be processed. You will be notified by the embassy
                or consulate when a decision has been made on your application.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements and process for
                  obtaining a visa to Tunisia may vary depending on your
                  specific circumstances and the type of visa you are applying
                  for. It's always a good idea to check with the Tunisian
                  embassy or consulate in your country for the most up-to-date
                  information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Tunisia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are permitted to stay in Tunisia will
                depend on the type of visa you have and the purpose of your
                visit.
                <br />
                <br />
                If you have a <span className="font-bold">tourist visa</span>,
                you will typically be permitted to stay in Tunisia for a period
                of up to 90 days. If you have a business visa, you may be
                permitted to stay for a longer period of time, depending on the
                terms of your visa. If you have a student visa, the length of
                your stay will depend on the duration of your educational
                program.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the length of time you are
                  permitted to stay in Tunisia may be subject to change, and
                  it's always a good idea to check with the Tunisian embassy or
                  consulate in your country for the most up-to-date information.
                  If you wish to stay in Tunisia for a longer period of time,
                  you may be able to apply for an extension of your visa.
                  However, the process for extending a visa may vary depending
                  on your specific circumstances and the type of visa you have.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Tunisia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are no COVID-19 restrictions in place for travel to
                Tunisia. There is no requirement to present certificates of
                vaccination/testing for COVID-19.
                <br />
                <br />
                Irish citizens in Tunisia should monitor developments regularly
                and follow the advice of local authorities.
                <br />
                <br />
                If you are in Tunisia and concerned that you may have COVID-19
                symptoms and/or have been exposed to an individual who tested
                positive for COVID-19, you should immediately contact the
                Tunisian Ministry of Health’s emergency medical service: SAMU –
                Tel.: 190.
                <br />
                <br />
                The Ministry of Health also has a free information helpline for
                other COVID-19 queries: 80 10 19 19.
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
                individuals who are traveling abroad on official government
                business, such as diplomats, government officials, and other
                high-ranking officials.
                <br />
                <br />
                In Tunisia, diplomatic passports are issued to individuals who
                are traveling on official business for the Tunisian government.
                Diplomatic passport holders are typically entitled to a number
                of privileges and immunities while abroad, including immunity
                from arrest and detention, and exemption from customs duties and
                taxes.
                <br />
                <br />
                To apply for a diplomatic passport in Tunisia, you will
                typically need to be a Tunisian citizen and have a valid reason
                for needing a diplomatic passport, such as being a diplomat or
                other high-ranking official. You will also need to provide
                documentation to support your application, such as proof of your
                government position and a letter of authorization from the
                Tunisian Ministry of Foreign Affairs.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements and process for
                  obtaining a diplomatic passport in Tunisia may vary depending
                  on your specific circumstances and the purpose of your trip.
                  It's always a good idea to check with the Tunisian embassy or
                  consulate in your country for the most up-to-date information.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Tunisia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you plan to work in Tunisia, you will typically need to have
                a valid work visa. A work visa is a type of non-immigrant visa
                that allows you to legally work in Tunisia for a specific period
                of time.
                <br />
                <br />
                To apply for a work visa in Tunisia, you will need to have a job
                offer from a Tunisian employer, and your employer will need to
                sponsor your work visa application. You will also need to meet
                certain requirements, such as having a bachelor's degree or
                higher, and having a minimum of 2 years of work experience in
                your field.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements and process for
                  obtaining a work visa in Tunisia may vary depending on your
                  specific circumstances and the type of work you will be doing
                  in Tunisia. It's always a good idea to check with the Tunisian
                  embassy or consulate in your country for the most up-to-date
                  information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Tunisia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa in Tunisia, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine if you are eligible for a work visa. To be eligible
                for a work visa in Tunisia, you will typically need to have a
                job offer from a Tunisian employer, have a bachelor's degree or
                higher, and have a minimum of 2 years of work experience in your
                field.
                <br />
                <br />
                ● Gather the necessary documents. To apply for a work visa, you
                will need to have a valid passport with at least 6 months of
                remaining validity, a completed visa application form, two
                recent passport-sized photographs, a letter of employment from
                your Tunisian employer, evidence of your qualifications and work
                experience, and a police clearance certificate from your country
                of citizenship. Your Tunisian employer will also need to provide
                a number of supporting documents, including a copy of the
                company's business registration, a letter of support for your
                work visa application, and evidence of the company's financial
                status and business activities.
                <br />
                <br />
                ● Submit your application. You can submit your work visa
                application in person at the Tunisian embassy or consulate in
                your country, or you may be able to apply online through an
                authorized visa agent.
                <br />
                <br />
                ● Pay the visa fee. You will need to pay a fee to obtain a work
                visa in Tunisia. The fee amount will depend on your country of
                citizenship and the type of work visa you are applying for.
                <br />
                <br />
                ● Wait for a decision. It may take several weeks for your
                application to be processed. You will be notified by the embassy
                or consulate when a decision has been made on your application.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements and process for
                  obtaining a work visa in Tunisia may vary depending on your
                  specific circumstances and the type of work you will be doing
                  in Tunisia. It's always a good idea to check with the Tunisian
                  embassy or consulate in your country for the most up-to-date
                  information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Tunisia Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of work visas available for travel to
                Tunisia, including:
                <br />
                <br />
                <span className="font-bold">Temporary work visas</span>: These
                visas are issued to individuals who are coming to Tunisia to
                work for a specific period of time, typically up to 1 year.
                Temporary work visas may be renewed for additional periods of
                time, depending on the terms of your employment and the type of
                work you will be doing in Tunisia.
                <br />
                <br />
                <span className="font-bold">Permanent work visas</span>: These
                visas are issued to individuals who are coming to Tunisia to
                work on a long-term basis, typically for a period of more than 1
                year. Permanent work visas may be renewed indefinitely, as long
                as you continue to meet the requirements for a work visa in
                Tunisia.
                <br />
                <br />
                <span className="font-bold">Self-employed work visas</span>:
                These visas are issued to individuals who are coming to Tunisia
                to work as self-employed individuals, such as entrepreneurs or
                freelancers. Self-employed work visas are typically valid for a
                period of up to 1 year and may be renewed for additional periods
                of time.
                <br />
                <br />
                <span className="font-bold">Professional work visas</span>:
                These visas are issued to individuals who are coming to Tunisia
                to work in a specific profession, such as a doctor or lawyer.
                Professional work visas are typically valid for a period of up
                to 1 year and may be renewed for additional periods of time.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements and process for
                  obtaining a work visa in Tunisia may vary depending on your
                  specific circumstances and the type of work you will be doing
                  in Tunisia. It's always a good idea to check with the Tunisian
                  embassy or consulate in your country for the most up-to-date
                  information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Tunisia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa in Tunisia, you will need to have the
                following documents:
                <br />
                <br />
                ● A valid passport with at least 6 months of remaining validity.
                <br />
                <br />
                ● A completed visa application form.
                <br />
                <br />
                ● Two recent passport-sized photographs.
                <br />
                <br />
                ● A letter of employment from your Tunisian employer.
                <br />
                <br />
                ● Evidence of your qualifications and work experience.
                <br />
                <br />
                ● A police clearance certificate from your country of
                citizenship.
                <br />
                <br />
                Your Tunisian employer will also need to provide a number of
                supporting documents, including:
                <br />
                <br />
                ● A copy of the company's business registration.
                <br />
                <br />
                ● A letter of support for your work visa application.
                <br />
                <br />
                ● Evidence of the company's financial status.
                <br />
                <br />
                ● Evidence of the company's business activities.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific documents required
                  for a work visa in Tunisia may vary depending on your specific
                  circumstances and the type of work you will be doing in
                  Tunisia. It's always a good idea to check with the Tunisian
                  embassy or consulate in your country for the most up-to-date
                  information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Tunisia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa in Tunisia, you will need to submit
                your application at the Tunisian embassy or consulate in your
                country. You can typically apply for a work visa up to 3 months
                before your intended date of travel to Tunisia.
                <br />
                <br />
                It's important to note that the process for applying for a work
                visa in Tunisia may vary depending on your specific
                circumstances and the type of work you will be doing in Tunisia.
                It's always a good idea to check with the Tunisian embassy or
                consulate in your country for the most up-to-date information on
                the process and requirements for obtaining a work visa in
                Tunisia.
                <br />
                <br />
                <span className="font-bold">
                  It's also a good idea to apply for your work visa as early as
                  possible to ensure that you have enough time to gather all of
                  the necessary documents and complete the application process
                  before your intended date of travel.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Tunisia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a foreign national and you plan to study in Tunisia,
                you will typically need to have a valid student visa. A student
                visa is a type of non-immigrant visa that allows you to legally
                study in Tunisia for a specific period of time.
                <br />
                <br />
                To apply for a student visa in Tunisia, you will need to have
                been accepted to a Tunisian educational institution, such as a
                university or language school. You will also need to meet
                certain requirements, such as having a valid passport with at
                least 6 months of remaining validity and having sufficient
                financial resources to support your stay in Tunisia.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements and process for
                  obtaining a student visa in Tunisia may vary depending on your
                  specific circumstances and the type of study you will be doing
                  in Tunisia. It's always a good idea to check with the Tunisian
                  embassy or consulate in your country for the most up-to-date
                  information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Tunisia Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Tunisia, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine if you are eligible for a student visa. To be
                eligible for a student visa in Tunisia, you will typically need
                to have been accepted to a Tunisian educational institution,
                such as a university or language school, and have a valid
                passport with at least 6 months of remaining validity. You will
                also need to have sufficient financial resources to support your
                stay in Tunisia.
                <br />
                <br />
                ● Gather the necessary documents. To apply for a student visa,
                you will need to have a valid passport with at least 6 months of
                remaining validity, a completed visa application form, two
                recent passport-sized photographs, a letter of acceptance from a
                Tunisian educational institution, evidence of sufficient
                financial resources to support your stay in Tunisia, and a
                police clearance certificate from your country of citizenship.
                <br />
                <br />
                ● Submit your application. You can submit your student visa
                application in person at the Tunisian embassy or consulate in
                your country, or you may be able to apply online through an
                authorized visa agent.
                <br />
                <br />
                ● Pay the visa fee. You will need to pay a fee to obtain a
                student visa in Tunisia. The fee amount will depend on your
                country of citizenship and the type of student visa you are
                applying for.
                <br />
                <br />
                ● Wait for a decision. It may take several weeks for your
                application to be processed. You will be notified by the embassy
                or consulate when a decision has been made on your application.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements and process for
                  obtaining a student visa in Tunisia may vary depending on your
                  specific circumstances and the type of study you will be doing
                  in Tunisia. It's always a good idea to check with the Tunisian
                  embassy or consulate in your country for the most up-to-date
                  information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Tunisia Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a student visa in Tunisia, you will typically
                need to meet the following requirements:
                <br />
                <br />
                ● Have a valid passport with at least 6 months of remaining
                validity.
                <br />
                <br />
                ● Have been accepted to a Tunisian educational institution, such
                as a university or language school.
                <br />
                <br />
                ● Have sufficient financial resources to support your stay in
                Tunisia.
                <br />
                <br />
                ● Meet any other requirements set by the Tunisian government.
                <br />
                <br />
                To apply for a student visa, you will need to have the following
                documents:
                <br />
                <br />
                ● A valid passport with at least 6 months of remaining validity.
                <br />
                <br />
                ● A completed visa application form.
                <br />
                <br />
                ● Two recent passport-sized photographs.
                <br />
                <br />
                ● A letter of acceptance from a Tunisian educational
                institution.
                <br />
                <br />
                ● Evidence of sufficient financial resources to support your
                stay in Tunisia.
                <br />
                <br />
                ● A police clearance certificate from your country of
                citizenship.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements and
                  documents needed for a student visa in Tunisia may vary
                  depending on your specific circumstances and the type of study
                  you will be doing in Tunisia. It's always a good idea to check
                  with the Tunisian embassy or consulate in your country for the
                  most up-to-date information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Tunisia Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Tunisia may vary
                depending on the length of your intended stay and the country
                you are a citizen of. It is generally recommended that you
                contact the embassy or consulate of Tunisia in your country of
                residence to inquire about the specific requirements and fees
                for a student visa. You may also need to provide documentation
                such as a letter of acceptance from a Tunisian educational
                institution, proof of sufficient financial resources, and a
                valid passport. It is important to apply for your student visa
                well in advance of your intended travel date, as processing
                times may vary.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the validity and price of a
                  student visa in Tunisia may vary depending on your specific
                  circumstances and the type of educational program you will be
                  enrolling in. It's always a good idea to check with the Royal
                  Thai Embassy or Consulate in your country for the most
                  up-to-date information.
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

export default Tunisia;
