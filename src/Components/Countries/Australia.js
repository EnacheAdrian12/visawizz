import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Australia = () => {
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
        <title>Australia</title>
        <meta name="description" content="Australia" />
        <meta
          name="keywords"
          content="Australia travel visa, Australia work visa, Australia study visa, How to apply for an Australia visa, Australia visa requirements, Australia tourist visa, Australia student visa, Australia business visa, Australia visa processing time, Australia visa application process, Australia visa for Americans, Australia visa for Europeans, Australia visa for Australians, Australia visa for Canadians, Australia visa for Indians, Australia visa for Chinese, Australia visa for Africans, Australia visa for Asians, Australia visa for South Americans, Australia visa for Middle Easterners, Australia visa for UK citizens, Australia visa for EU citizens, Australia visa for Schengen area, Australia visa for non-EU citizens, Australia visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Australia
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Australia is a large country located in the Southern Hemisphere.
              It is known for its beautiful landscapes, including the Great
              Barrier Reef, the outback, and the rugged coastline of the island
              of Tasmania. Australia is also known for its rich culture and
              history, including its art, music, and literature. Additionally,
              the country is known for its unique and diverse range of plant and
              animal life, including many species that are found nowhere else in
              the world. Australia is also known for its sporting culture, and
              its national teams are among the best in the world in many sports,
              including cricket, rugby, and swimming.
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
                Who can enter Australia without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries can enter Australia without a visa
                for short stays, provided they meet the requirements for
                visa-free travel.
                <br />
                <br /> The countries whose citizens are eligible for visa-free
                travel to Australia include:{" "}
                <span className="font-bold">
                  New Zealand, Canada, The United States, The United Kingdom,
                  The European Union.
                </span>{" "}
                <br />
                <br /> Citizens of these countries can enter Australia for
                tourism or business purposes for stays of up to 90 days without
                a visa.
                <br />
                <br /> Citizens of other countries may need to apply for a visa
                to enter Australia, depending on the purpose and length of their
                stay.
                <br />
                <br />
                <span className="font-bold">
                  It's always a good idea to check the specific visa
                  requirements for your country of citizenship before planning a
                  trip to Australia, as the requirements may change over time.
                  You can find information about the visa requirements for
                  Australia on the website of the Department of Home Affairs.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Australia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Australia, you will generally need
                to submit the following documents:
                <br />
                <br />● A completed visa application form: You can download the
                application form from the website of the Australian embassy or
                consulate in your country of residence or from the Department of
                Home Affairs website.
                <br />
                <br />● A valid passport: Your passport must be valid for at
                least six months beyond the date of your intended stay in
                Australia.
                <br />
                <br />● Passport-sized photos: You will need to submit two
                passport-sized photos taken within the last six months.
                <br />
                <br />● Proof of purpose of travel: Depending on the type of
                visa you are applying for, you may need to provide evidence of
                the purpose of your trip, such as a letter of invitation, a
                letter of support from your employer, or proof of enrollment in
                a study program.
                <br />
                <br />● Proof of sufficient financial means: You may need to
                provide proof that you have sufficient financial means to
                support yourself during your stay in Australia, such as bank
                statements or a letter of support from a sponsor.
                <br />
                <br />● Proof of travel insurance: You may need to provide proof
                of travel insurance that covers medical expenses and
                repatriation.
                <br />
                <br />
                ● Other documents: Depending on the circumstances of your trip,
                you may need to provide additional documents, such as a police
                clearance certificate, proof of employment, or proof of your
                relationship to family members traveling with you.
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is a general list of documents required
                  for a visa application to Australia, and the specific
                  documents you need to submit may vary depending on the type of
                  visa you are applying for and the embassy or consulate where
                  you are applying
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Australia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Australia, you will need to follow
                these steps:
                <br />
                <br />● Determine the type of visa you need: Australia offers
                several types of visas, including tourist visas, business visas,
                student visas, and work visas. You will need to determine which
                type of visa is appropriate for your trip based on the purpose
                of your visit and the length of your stay.
                <br />
                <br />● Check the visa requirements: You will need to check the
                specific visa requirements for the type of visa you are applying
                for and make sure you meet all of the eligibility criteria. You
                can find this information on the website of the Australian
                embassy or consulate in your country of residence or on the
                Department of Home Affairs website.
                <br />
                <br />● Gather the required documents: You will need to gather
                all of the necessary documents for your visa application,
                including a completed visa application form, a valid passport,
                passport-sized photos, and any other documents required for the
                type of visa you are applying for.
                <br />
                <br />● Schedule an appointment: You will need to schedule an
                appointment at the Australian embassy or consulate in your
                country of residence to submit your visa application and
                supporting documents. You can usually do this online or by
                contacting the embassy or consulate directly.
                <br />
                <br />● Submit your application: On the day of your appointment,
                you will need to attend the embassy or consulate in person to
                submit your visa application and supporting documents. You may
                also be required to pay a visa fee at this time.
                <br />
                <br />● Wait for a decision: The embassy or consulate will
                review your application and make
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Australia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Australia depends on the type
                of visa you have.
                <br />
                <br /> If you are a citizen of a country that is eligible for
                visa-free or visa-on-arrival travel to Australia, you can
                generally stay in the country for up to 90 days within a 180-day
                period.
                <br />
                <br /> If you have a tourist visa, you can generally stay in
                Australia for up to three months.
                <br />
                <br /> If you have a business visa, you can generally stay in
                Australia for up to three months.
                <br />
                <br /> If you have a student visa, you can generally stay in
                Australia for the duration of your study program, up to a
                maximum of five years.
                <br />
                <br /> If you have a work visa, you can generally stay in
                Australia for the duration of your work contract, up to a
                maximum of four years.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are general guidelines, and the
                  specific length of time you can stay in Australia may vary
                  depending on the type of visa you have and the circumstances
                  of your visit. It's always a good idea to check the specific
                  terms and conditions of your visa before traveling to
                  Australia.
                </span>{" "}
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are Covid Restrictions in Australia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Social distancing restrictions and other local measures are
                still in place across Australia with a number of variations.
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
                About Diplomatic Passport!
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                A diplomatic passport is a special type of passport issued to
                diplomats and other officials who are traveling abroad on
                official government business. In Australia, diplomatic passports
                are issued to diplomats, consular officials, and other officials
                who are accredited to represent the Australian government
                abroad.
                <br />
                <br /> Diplomatic passports are issued by the Department of
                Foreign Affairs and Trade of Australia and are valid for a
                period of five years. They are issued in accordance with the
                provisions of the Vienna Convention on Diplomatic Relations,
                which regulates the privileges and immunities of diplomats.
                <br />
                <br />
                Holders of diplomatic passports are entitled to certain
                privileges and immunities while traveling abroad, including
                exemption from visa requirements in certain countries, immunity
                from arrest and detention, and special protection in the event
                of an emergency.
                <br />
                <br />
                <span className="font-bold">
                  Please note that the specific privileges and immunities
                  associated with a diplomatic passport may vary depending on
                  the country in which the holder is traveling and the
                  provisions of the Vienna Convention on Diplomatic Relations.
                  It's always a good idea to check the specific privileges and
                  immunities with the embassy or consulate of the country you
                  are visiting before traveling.
                </span>{" "}
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Australia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a worker visa to work in Australia depends on
                your nationality and the length of your intended stay. <br />
                <br /> If you are a citizen of a country that is eligible for
                visa-free or visa-on-arrival travel to Australia, you may be
                able to work in the country for a short period of time without a
                worker visa, provided you have the necessary documentation and
                permissions. However, if you plan to work in Australia for an
                extended period of time, you will generally need to apply for a
                worker visa. <br />
                <br /> If you are a citizen of a country that requires a visa to
                enter Australia, you will generally need to apply for a worker
                visa in order to work in the country.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Australia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Australia, you will need to follow
                these steps:
                <br />
                <br />● Determine the type of worker visa you need: Australia
                offers several types of worker visas, including temporary worker
                visas, permanent worker visas, and employer-sponsored visas. You
                will need to determine which type of worker visa is appropriate
                for your situation based on the nature of your work, the length
                of your intended stay, and the sponsorship requirements.
                <br />
                <br />● Check the visa requirements: You will need to check the
                specific visa requirements for the type of worker visa you are
                applying for and make sure you meet all of the eligibility
                criteria. You can find this information on the website of the
                Australian embassy or consulate in your country of residence or
                on the Department of Home Affairs website.
                <br />
                <br />● Gather the required documents: You will need to gather
                all of the necessary documents for your worker visa application,
                including a completed visa application form, a valid passport,
                passport-sized photos, and any other documents required for the
                type of visa you are applying for.
                <br />
                <br />● Schedule an appointment: You will need to schedule an
                appointment at the Australian embassy or consulate in your
                country of residence to submit your worker visa application and
                supporting documents. You can usually do this online or by
                contacting the embassy or consulate directly.
                <br />
                <br />● Submit your application: On the day of your appointment,
                you will need to attend the embassy or consulate in person to
                submit your worker visa application and supporting documents.
                You may also be required to pay a visa fee at this time.
                <br />
                <br />● Wait for a decision: The embassy or consulate will
                review your application and make a decision on your worker visa.
                If your application is approved, you will receive your visa in
                the mail. If your application is denied, you will receive a
                letter explaining the reason for the denial.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Australia Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Australia offers several types of worker visas, including:
                <br />
                <br />
                ● Temporary Worker (Short Stay Specialist) visa (subclass 400):
                This visa allows you to come to Australia to work on a temporary
                basis for up to six months in a specific occupation. You must
                have a genuine offer of work from an Australian employer and
                meet other eligibility criteria.
                <br />
                <br />● Temporary Work (Skilled) visa (subclass 457): This visa
                allows you to work in Australia for up to four years in a
                specific occupation. You must have a genuine offer of work from
                an Australian employer and meet other eligibility criteria.
                <br />
                <br />
                ● Employer Nomination Scheme (subclass 186) visa: This is a
                permanent worker visa that allows you to work in Australia
                permanently for your nominated employer. You must have a genuine
                offer of work from an Australian employer and meet other
                eligibility criteria.
                <br />
                <br />● Regional Sponsored Migration Scheme (subclass 187) visa:
                This is a permanent worker visa that allows you to work in
                regional Australia permanently for your nominated employer. You
                must have a genuine offer of work from an Australian employer
                and meet other eligibility criteria.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are general descriptions of the types
                  of worker visas available in Australia, and the specific
                  requirements for each type of visa may vary. It's always a
                  good idea to check the specific requirements for the type of
                  worker visa you are interested in on the Department of Home
                  Affairs website or by contacting the embassy or consulate in
                  your country of residence.
                </span>{" "}
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Australia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Australia, you will generally need
                to provide the following documents:
                <br />
                <br />● A completed visa application form: You can download the
                application form from the website of the Australian embassy or
                consulate in your country of residence or from the Department of
                Home Affairs website.
                <br />
                <br />● A valid passport: Your passport must be valid for at
                least six months beyond the date of your intended stay in
                Australia.
                <br />
                <br />● Passport-sized photos: You will need to submit two
                passport-sized photos taken within the last six months.
                <br />
                <br />● A letter of invitation or contract from the Australian
                employer: You will need to provide a letter from your Australian
                employer stating that you have been offered a job and the
                details of your employment, including the length and nature of
                the work.
                <br />
                <br />● Proof of sufficient financial means: You may need to
                provide proof that you have sufficient financial means to
                support yourself during your stay in Australia, such as bank
                statements or a letter of support from a sponsor.
                <br />
                <br />● A police clearance certificate: You may need to provide
                a police clearance certificate from your country of residence,
                stating that you have no criminal record.
                <br />
                <br /> Proof of health insurance: You may need to provide proof
                of health insurance that covers medical expenses and
                repatriation.
                <br />
                <br />● Other documents: Depending on the circumstances of your
                trip, you may need to provide additional documents, such as
                transcripts or diplomas from previous studies, or proof of your
                relationship to family members traveling with you.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Australia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Australia, you will generally need
                to apply at the Australian embassy or consulate in your country
                of residence.
                <br />
                <br /> You can usually find information about the process for
                applying for a worker visa on the website of the Australian
                embassy or consulate in your country of residence or on the
                Department of Home Affairs website. You can also contact the
                embassy or consulate directly to ask about the process and to
                schedule an appointment to submit your application.
                <br />
                <br /> You will generally need to apply for a worker visa before
                you travel to Australia, as you will not be able to work in the
                country without a valid visa. It's a good idea to start the
                process of applying for a worker visa well in advance of your
                intended travel date, as the process can take several weeks or
                even months depending on the type of visa you are applying for
                and the circumstances of your trip.
                <br />
                <br /> Once you have gathered all of the necessary documents and
                scheduled an appointment at the embassy or consulate, you will
                need to attend the appointment in person to submit your worker
                visa application and supporting documents. You may also be
                required to pay a visa fee at this time.
                <br />
                <br /> After you have submitted your application, the embassy or
                consulate will review your application and make a decision on
                your worker visa. If your application is approved, you will
                receive your visa in the mail. If your application is denied,
                you will receive a letter explaining the reason for the denial.
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Australia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a visa to study in Australia depends on your
                nationality and the length of your intended stay.
                <br />
                <br /> If you are a citizen of a country that is eligible for
                visa-free or visa-on-arrival travel to Australia, you may be
                able to study in the country for a short period of time without
                a student visa, provided you have the necessary documentation
                and permissions. However, if you plan to study in Australia for
                an extended period of time, you will generally need to apply for
                a student visa.
                <br />
                <br /> If you are a citizen of a country that requires a visa to
                enter Australia, you will generally need to apply for a student
                visa in order to study in the country.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Australia student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Australia, you will need
                to follow these steps:
                <br />
                <br />● Determine the type of student visa you need: Australia
                offers several types of student visas, including temporary
                student visas, permanent student visas, and student guardian
                visas. You will need to determine which type of student visa is
                appropriate for your situation based on the nature of your
                studies, the length of your intended stay, and the sponsorship
                requirements.
                <br />
                <br />● Check the visa requirements: You will need to check the
                specific visa requirements for the type of student visa you are
                applying for and make sure you meet all of the eligibility
                criteria. You can find this information on the website of the
                Australian embassy or consulate in your country of residence or
                on the Department of Home Affairs website.
                <br />
                <br />● Gather the required documents: You will need to gather
                all of the necessary documents for your student visa
                application, including a completed visa application form, a
                valid passport, passport-sized photos, and any other documents
                required for the type of visa you are applying for.
                <br />
                <br />● Schedule an appointment: You will need to schedule an
                appointment at the Australian embassy or consulate in your
                country of residence to submit your student visa application and
                supporting documents. You can usually do this online or by
                contacting the embassy or consulate directly.
                <br />
                <br />● Submit your application: On the day of your appointment,
                you will need to attend the embassy or consulate in person to
                submit your student visa application and supporting documents.
                You may also be required to pay a visa fee at this time.
                <br />
                <br />● Wait for a decision: The embassy or consulate will
                review your application and make a decision on your student
                visa. If your application is approved, you will receive your
                visa in the mail. If your application is denied, you will
                receive a letter explaining the reason for the denial.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Australia Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a student visa to study in Australia, you
                will generally need to meet the following requirements:
                <br />
                <br />● Have an acceptance letter from an Australian educational
                institution: You will need to provide an acceptance letter from
                an Australian educational institution stating that you have been
                accepted into a course of study.
                <br />
                <br />● Meet the English language requirements: Depending on the
                course of study you are applying for, you may need to provide
                evidence of your English language proficiency, such as a test
                score from the International English Language Testing System
                (IELTS) or the Test of English as a Foreign Language (TOEFL).
                <br />
                <br />
                ● Meet the health requirements: You may need to provide evidence
                of your health status, such as a medical examination or
                vaccination records, depending on the length of your intended
                stay in Australia.
                <br />
                <br />● Meet the character requirements: You may need to provide
                a police clearance certificate from your country of residence,
                stating that you have no criminal record.
                <br />
                <br />● Have sufficient financial means to support your studies:
                You may need to provide proof that you have sufficient financial
                means to support yourself during your studies in Australia, such
                as bank statements or a letter of support from a sponsor.
                <br />
                <br />● Have a genuine intention to study: You will need to
                provide evidence that you have a genuine intention to study in
                Australia, such as a statement of purpose or a letter from your
                educational institution.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are general requirements for a student
                  visa to study in Australia, and the specific requirements may
                  vary depending on the embassy or consulate where you are
                  applying and the circumstances of your trip. It's always a
                  good idea to check the specific requirements with the embassy
                  or consulate before submitting your application.
                </span>{" "}
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Australia student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of an Australia student visa will depend
                on the type of student visa you are applying for and the
                circumstances of your trip.
                <br />
                <br /> Temporary student visas, also known as student visas
                (subclass 500), are typically valid for the duration of your
                studies in Australia, up to a maximum of five years. The price
                of a temporary student visa depends on the length of your
                intended stay in Australia and the type of course you are
                studying.
                <br />
                <br /> Permanent student visas, also known as graduate visas
                (subclass 485), are typically valid for a period of 18 months
                from the date of grant. The price of a permanent student visa
                depends on the length of your intended stay in Australia and the
                type of course you are studying.
                <br />
                <br /> Student guardian visas (subclass 590) are typically valid
                for a period of 12 months from the date of grant. The price of a
                student guardian visa depends on the length of your intended
                stay in Australia and the type of course you are studying.
              </p>
            </Container>
          </>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Australia;
