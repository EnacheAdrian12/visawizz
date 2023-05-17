import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Palau = () => {
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
        <title>Palau</title>
        <meta name="description" content="Palau" />
        <meta
          name="keywords"
          content="Palau travel visa, Palau work visa, Palau study visa, How to apply for an Palau visa, Palau visa requirements, Palau tourist visa, Palau student visa, Palau business visa, Palau visa processing time, Palau visa application process, Palau visa for Americans, Palau visa for Europeans, Palau visa for Palauns, Palau visa for Canadians, Palau visa for Palauns, Palau visa for Chinese, Palau visa for Africans, Palau visa for Asians, Palau visa for South Americans, Palau visa for Middle Easterners, Palau visa for UK citizens, Palau visa for EU citizens, Palau visa for Schengen area, Palau visa for non-EU citizens, Palau visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Palau
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Palau is a small island country in the Pacific Ocean that is known
              for its beautiful beaches and crystal-clear waters, which make it
              a popular destination for scuba diving and other water sports.
              Palau is also known for its rich cultural heritage and traditions,
              which have been influenced by its diverse population, including
              indigenous Palauans, Micronesians, and Filipinos. Additionally,
              Palau is known for its commitment to environmental conservation
              and sustainability, and it is home to many protected marine areas,
              such as the Rock Islands Southern Lagoon, which is a UNESCO World
              Heritage Site.
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
                Who can enter Palau without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of the following countries are allowed to enter Palau
                without a visa:
                <br />
                <br />
                <span className="font-bold">
                  Belize, Federated States of Micronesia, Honduras, Hong Kong,
                  Kiribati, Marshall Islands, Nauru, Panama, Russia, Taiwan,
                  Vanuatu.
                </span>
                <br />
                <br />
                In addition to these countries, citizens of the United States
                and most countries in the European Union are also allowed to
                enter Palau without a visa for a stay of up to 30 days.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that these visa-free entry policies are
                  subject to change, so it's always a good idea to check the
                  latest requirements before you travel.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Palau Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Palau, you will need to provide the
                following documents:
                <br />
                <br />
                ● A completed visa application form.
                <br />
                <br />
                ● A valid passport with at least 6 months of remaining validity.
                <br />
                <br />
                ● A passport-sized photograph.
                <br />
                <br />
                ● A letter of invitation, if applicable.
                <br />
                <br />
                ● Proof of sufficient funds to support your stay in Palau.
                <br />
                <br />
                ● A round-trip ticket or proof of onward travel.
                <br />
                <br />
                ● Any additional documents required by the Palauan embassy or
                consulate where you are applying.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that these requirements may vary
                  depending on the purpose of your visit and the type of visa
                  you are applying for. It's always a good idea to check the
                  specific requirements for the visa you are applying for and to
                  submit all required documents to increase your chances of
                  success.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Palau Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Palau, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine the type of visa you need. There are several
                different types of visas available for Palau, including tourist
                visas, business visas, and student visas. Choose the one that
                best fits your purpose for traveling to Palau.
                <br />
                <br />
                ● Gather the required documents. As mentioned earlier, you will
                need to provide a completed visa application form, a valid
                passport with at least 6 months of remaining validity, a
                passport-sized photograph, a letter of invitation (if
                applicable), proof of sufficient funds, and a round-trip ticket
                or proof of onward travel.
                <br />
                <br />
                ● Contact the Palauan embassy or consulate where you will be
                applying for your visa. You can find the contact information for
                the Palauan embassy or consulate in your country on the website
                of the Ministry of Foreign Affairs of the Republic of Palau.
                <br />
                <br />
                ● Submit your visa application and required documents. You will
                need to submit your application and documents in person or by
                mail, depending on the requirements of the embassy or consulate
                where you are applying.
                <br />
                <br />
                ● Wait for a decision on your application. The processing time
                for a visa application to Palau can vary, so it's a good idea to
                apply as early as possible.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the visa application process can
                  vary depending on the country where you are applying. It's
                  always a good idea to check the specific requirements and
                  procedures for your location and to follow them carefully to
                  increase your chances of success.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Palau?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Citizens of most countries are allowed to stay in Palau for up
                to 30 days without a visa. However, you will need a valid
                passport to enter the country. If you want to stay longer than
                30 days, you will need to apply for a visa extension from the
                Palau Immigration Office. Please note that the length of time
                you are allowed to stay in Palau may be subject to change, so
                it's always a good idea to check with the Palau Immigration
                Office or the embassy or consulate of Palau in your country
                before you travel.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Palau?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                All travellers to Palau must be fully vaccinated against
                COVID-19, except those under 12 years of age. You are advised to
                practice social distancing, wear a mask over the nose and mouth
                when within six feet of others, and avoid large indoor
                gatherings for fourteen (14) days prior to their travel to
                Palau.
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
                In Palau, a diplomatic passport is a special type of passport
                issued to individuals who are accredited as diplomats by the
                Palau Ministry of Foreign Affairs. Diplomatic passports are
                typically issued to diplomats, embassy staff, and other
                government officials who are traveling abroad on official
                business. These passports are generally issued for the duration
                of the holder's assignment, and they may be used for travel to
                any country.
                <br />
                <br />
                Diplomatic passports are issued in accordance with the Vienna
                Convention on Diplomatic Relations, a treaty that sets out the
                rules and privileges that apply to diplomats and diplomatic
                missions. Diplomatic passports are typically issued in blue, and
                they contain a distinctive cover and design that makes them
                easily identifiable as diplomatic passports.
                <br />
                <br />
                <span className="font-bold">
                  Holders of diplomatic passports are generally entitled to
                  certain privileges and immunities while abroad, including
                  immunity from arrest and detention, and exemptions from
                  certain taxes and duties. However, these privileges are
                  granted for the purpose of carrying out official duties, and
                  they do not extend to personal or private activities.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Palau?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to work in Palau, you will need to obtain a worker
                visa. In order to apply for a worker visa, you will need to have
                a job offer from a Palauan employer, and your employer will need
                to sponsor your visa application.
                <br />
                <br />
                <span className="font-bold">
                  The process for obtaining a worker visa in Palau may vary
                  depending on your nationality and the type of work you will be
                  doing. It's always a good idea to check with the Palau
                  Immigration Office or the embassy or consulate of Palau in
                  your country for the most up-to-date information on the
                  requirements and process for obtaining a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Palau Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Palau, you will need to follow
                these steps:
                <br />
                <br />
                ● Find a job: The first step in the process is to find a job in
                Palau. You will need to have a job offer from a Palauan employer
                in order to apply for a worker visa.
                <br />
                <br />
                ● Gather required documents: You will need to submit a number of
                documents as part of your worker visa application. These may
                include a completed and signed visa application form, a valid
                passport with at least six months of remaining validity, two
                passport-sized photographs, a copy of your job offer letter from
                your Palauan employer, and a copy of your resume or CV. You may
                also be required to provide other documents, such as proof of
                your educational qualifications or work experience.
                <br />
                <br />
                ● Submit your application: Once you have gathered all of the
                required documents, you will need to submit your worker visa
                application to the Palau Immigration Office. You may be able to
                submit your application in person, by mail, or online, depending
                on the policies of the Palau Immigration Office.
                <br />
                <br />
                ● Wait for a decision: After you have submitted your worker visa
                application, the Palau Immigration Office will review your
                application and make a decision. This process can take several
                weeks or even months, depending on the volume of applications
                being processed.
                <br />
                <br />
                ● If your application is approved: If your worker visa
                application is approved, the Palau Immigration Office will issue
                you a worker visa. You will then be able to travel to Palau and
                begin working.
                <br />
                <br />
                <span className="font-bold">
                  It's always a good idea to check with the Palau Immigration
                  Office or the embassy or consulate of Palau in your country
                  for the most up-to-date information on the requirements and
                  process for obtaining a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Palau Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available in Palau,
                including:
                <br />
                <br />
                <span className="font-bold">Temporary worker visa</span>
                : A temporary worker visa allows you to work in Palau for a
                specific period of time, usually up to one year. This type of
                visa may be issued to workers who are coming to Palau on a
                short-term basis, such as to fill a specific job opening or to
                complete a specific project.
                <br />
                <br />
                <span className="font-bold">Permanent Worker Visa</span>
                : This type of visa is issued to foreign workers who will be
                working in Palau on a long-term basis. It is typically valid for
                up to five years and can be renewed indefinitely.
                <br />
                <br />
                <span className="font-bold">Seasonal worker visa</span>
                : A seasonal worker visa allows you to work in Palau for a
                specific season, such as the tourist season or the harvest
                season. This type of visa is usually issued for a period of
                three to six months.
                <br />
                <br />
                <span className="font-bold">Skilled Worker Visa</span>
                : This type of visa is issued to foreign workers who have
                specialized skills or expertise in a particular field.
                <br />
                <br />
                <span className="font-bold">Business Visa</span>: This type of
                visa is issued to foreign businesspeople who will be conducting
                business in Palau. It is typically valid for up to one year and
                can be renewed in certain circumstances.
                <br />
                <br />
                <span className="font-bold">
                  Again, it's important to note that the requirements for these
                  visas may vary depending on your country of origin and the
                  type of work you will be doing in Palau. You should contact
                  the Palau Ministry of Justice, Immigration, and Labor for
                  specific information on the requirements for a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Palau Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Palau, you will typically need to
                provide the following documents:
                <br />
                <br />
                ● A valid passport: You will need to provide a copy of the
                biographic page of your passport, which must be valid for at
                least six months beyond the date of your intended arrival in
                Palau.
                <br />
                <br />
                ● A completed visa application form: You will need to complete a
                visa application form and provide it with your other supporting
                documents.
                <br />
                <br />
                ● A letter of sponsorship: You will need to provide a letter of
                sponsorship from an employer in Palau who is willing to sponsor
                your work visa. The letter should include details about the job
                offer, the duration of your employment, and your salary.
                <br />
                <br />
                ● A medical certificate: You may need to provide a medical
                certificate stating that you are in good health and do not have
                any communicable diseases.
                <br />
                <br />
                ● A police clearance certificate: You may need to provide a
                police clearance certificate from your home country, stating
                that you do not have a criminal record.
                <br />
                <br />
                ● Proof of sufficient financial resources: You may need to
                provide proof that you have sufficient financial resources to
                support yourself while you are in Palau.
                <br />
                <br />● Additional documents: Depending on your country of
                origin and the type of work you will be doing in Palau, you may
                be required to provide additional documents. These could include
                transcripts, degrees, and other professional certifications.
                <br />
                <br />
                <span className="font-bold">
                  Again, it's important to note that the requirements for a
                  worker visa in Palau may vary depending on your country of
                  origin and the type of work you will be doing in Palau. You
                  should contact the Palau Ministry of Justice, Immigration, and
                  Labor for specific information on the documents you will need
                  to provide in order to apply for a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Palau?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You can apply for a worker visa in Palau at the following
                locations:
                <br />
                <br />
                The Palau Ministry of Justice, Immigration, and Labor: You can
                submit your application directly to the Palau Ministry of
                Justice, Immigration, and Labor.
                <br />
                <br />
                A Palauan embassy or consulate in your home country: If you are
                unable to travel to Palau to apply in person, you can submit
                your application to a Palauan embassy or consulate in your home
                country.
                <br />
                <br />
                You should apply for a worker visa as soon as you have received
                a job offer and a letter of sponsorship from an employer in
                Palau. You should also allow plenty of time for your application
                to be processed, as it can take several weeks or even months for
                a worker visa to be approved.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the processing times for worker
                  visas in Palau may vary depending on your country of origin
                  and the type of work you will be doing in Palau. You should
                  contact the Palau Ministry of Justice, Immigration, and Labor
                  for specific information on the processing times for worker
                  visas.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Palau?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes, you will need a student visa to study in Palau.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements for a student
                  visa in Palau may vary depending on your country of origin and
                  the type of studies you will be undertaking in Palau. You
                  should contact the Palau Ministry of Justice, Immigration, and
                  Labor for specific information on the requirements for a
                  student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Palau Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Palau, you will need to follow
                these steps:
                <br />
                <br />
                ● Find a school or educational institution in Palau that is
                willing to accept you as a student.
                <br />
                <br />
                ● Contact the Palau Ministry of Justice, Immigration, and Labor
                to find out which documents you need to provide in order to
                apply for a student visa.
                <br />
                <br />
                ● Gather all the necessary documents, including your passport, a
                completed visa application form, and any other documents
                required by the Palau Ministry of Justice, Immigration, and
                Labor. These may include transcripts, letters of recommendation,
                and proof of sufficient financial resources.
                <br />
                <br />
                ● Submit your application to the Palau Ministry of Justice,
                Immigration, and Labor or to a Palauan embassy or consulate in
                your home country.
                <br />
                <br />
                ● Pay the required visa fees.
                <br />
                <br />
                ● Wait for your application to be processed. If your application
                is approved, you will be issued a student visa.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements for a student
                  visa in Palau may vary depending on your country of origin and
                  the type of studies you will be undertaking in Palau. You
                  should contact the Palau Ministry of Justice, Immigration, and
                  Labor for specific information on the requirements for a
                  student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Palau Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Palau, you will typically need to
                provide the following documents:
                <br />
                <br />
                ● A valid passport: You will need to provide a copy of the
                biographic page of your passport, which must be valid for at
                least six months beyond the date of your intended arrival in
                Palau.
                <br />
                <br />
                ● A completed visa application form: You will need to complete a
                visa application form and provide it with your other supporting
                documents.
                <br />
                <br />
                ● A letter of acceptance: You will need to provide a letter of
                acceptance from a school or educational institution in Palau
                that is willing to accept you as a student.
                <br />
                <br />
                ● Transcripts and other academic records: You may need to
                provide transcripts and other academic records, such as diplomas
                and degrees, to demonstrate your academic qualifications.
                <br />
                <br />
                ● Proof of sufficient financial resources: You may need to
                provide proof that you have sufficient financial resources to
                support yourself while you are in Palau. This could include bank
                statements, scholarship letters, or letters of sponsorship from
                your home country.
                <br />
                <br />
                ● A medical certificate: You may need to provide a medical
                certificate stating that you are in good health and do not have
                any communicable diseases.
                <br />
                <br />
                ● A police clearance certificate: You may need to provide a
                police clearance certificate from your home country, stating
                that you do not have a criminal record.
                <br />
                <br />
                ● Additional documents: Depending on your country of origin and
                the type of studies you will be undertaking in Palau, you may be
                required to provide additional documents. These could include
                letters of recommendation, transcripts, and other professional
                certifications.
                <br />
                <br />
                <span className="font-bold">
                  Again, it's important to note that the requirements for a
                  student visa in Palau may vary depending on your country of
                  origin and the type of studies you will be undertaking in
                  Palau. You should contact the Palau Ministry of Justice,
                  Immigration, and Labor for specific information on the
                  documents you will need to provide in order to apply for a
                  student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Palau Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Palau will depend
                on the length of your studies and the type of educational
                program you are enrolled in.
                <br />
                <br />
                Typically, a student visa for Palau is valid for the duration of
                your studies, up to a maximum of five years. However, the exact
                length of time that your visa is valid for will depend on the
                length of your educational program.
                <br />
                <br />
                As for the price of a student visa, you will need to pay a fee
                to cover the cost of processing your visa application. The exact
                amount of the fee will depend on the length of your studies and
                the type of educational program you are enrolled in.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements for a student
                  visa in Palau may vary depending on your country of origin and
                  the type of studies you will be undertaking in Palau. You
                  should contact the Palau Ministry of Justice, Immigration, and
                  Labor for specific information on the validity and price of a
                  student visa.
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

export default Palau;
