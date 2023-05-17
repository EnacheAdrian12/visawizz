import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Angola = () => {
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
        <title>Angola</title>
        <meta name="description" content="Angola" />
        <meta
          name="keywords"
          content="Angola travel visa, Angola work visa, Angola study visa, How to apply for an Angola visa, Angola visa requirements, Angola tourist visa, Angola student visa, Angola business visa, Angola visa processing time, Angola visa application process, Angola visa for Americans, Angola visa for Europeans, Angola visa for Australians, Angola visa for Canadians, Angola visa for Indians, Angola visa for Chinese, Angola visa for Africans, Angola visa for Asians, Angola visa for South Americans, Angola visa for Middle Easterners, Angola visa for UK citizens, Angola visa for EU citizens, Angola visa for Schengen area, Angola visa for non-EU citizens, Angola visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Angola
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Angola is a country located in Southern Africa. It is known for
              its beautiful landscapes, including the Namib Desert and the vast
              wetlands of the Okavango Delta. Angola is also known for its rich
              culture and history, including its art, music, and literature.
              Additionally, the country is known for its production of oil and
              diamonds, which are important sources of income for Angola.
              However, Angola is also one of the poorest countries in the world,
              and many people there struggle with poverty, disease, and
              political instability.
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
                Who can enter Angola without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                The visa requirements for Angola depend on your nationality and
                the length of your intended stay in the country. Some
                individuals may be able to enter Angola without a visa, while
                others will need to obtain a visa before traveling.
                <br />
                <br />
                Citizens of the following countries can enter Angola without a
                visa for stays of up to 90 days:
                <span className="font-bold">
                  &nbsp;Benin, Burkina Faso, Cape Verde, Chad, Democratic
                  Republic of Congo, Gabon, Gambia, Guinea-Bissau, Côte
                  d'Ivoire, Kenya, Mali, Mozambique, Namibia, Niger, Rwanda, Sao
                  Tome and Principe, Senegal, South Africa, Tanzania, Togo,
                  Uganda.
                </span>
                <br />
                <br />
                Citizens of the following countries can enter Angola without a
                visa for stays of up to 30 days:
                <span className="font-bold">
                  &nbsp;Botswana, Cameroon, Central African Republic, Congo,
                  Ethiopia, Ghana, Guinea, Lesotho, Liberia, Madagascar, Malawi,
                  Mauritius, Namibia, Nigeria, Seychelles, Sierra Leone,
                  Swaziland, Zambia.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  Citizens of all other countries will generally need to obtain
                  a visa before traveling to Angola. You can check with the
                  Angolan embassy or consulate in your home country for more
                  information on the specific visa requirements for Angola. It
                  is always a good idea to check the visa requirements well in
                  advance of your trip to ensure that you have the necessary
                  documents and to allow enough time for the visa application
                  process.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Angola Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Angola, you will need to provide certain
                documents as part of your application. The specific documents
                you will need to provide will depend on the type of visa you are
                applying for and your personal circumstances. Here are some of
                the documents you may need to provide as part of your visa
                application for Angola:
                <br />
                <br />● Passport: You will need to provide a valid passport that
                is valid for at least six months beyond your intended stay in
                Angola.
                <br />
                <br />● Visa application form: You will need to complete and
                submit a visa application form, which can usually be obtained
                from the Angolan embassy or consulate in your home country or
                through an online visa application service.
                <br />
                <br />● Passport-style photograph: You will need to provide a
                recent passport-style photograph to include with your visa
                application.
                <br />
                <br />● Proof of sufficient funds: You will need to show that
                you have sufficient funds to support yourself while you are in
                Angola. This may include bank statements or proof of income.
                <br />
                <br />● Health insurance: You will need to provide proof of
                health insurance that covers you while you are in Angola.
                <br />
                <br />● Proof of accommodation: You will need to provide
                evidence of where you will be staying in Angola, such as a hotel
                reservation or a letter of invitation from someone you will be
                staying with.
                <br />
                <br />● Return or onward ticket: You may need to provide proof
                of a return or onward ticket, depending on the length of your
                intended stay in Angola.
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is a general list of documents that you
                  may need to provide as part of your visa application for
                  Angola. The specific requirements may vary depending on your
                  country of origin and the type of visa you are applying for.
                  It is always best to check with the Angolan embassy or
                  consulate in your home country for the most up-to-date
                  information on the documents required for a visa to Angola.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Angola Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Angola, you will need to follow these
                steps:
                <br />
                <br />● Determine if you need a visa: If you are a citizen of a
                country that is exempt from the visa requirement for Angola, you
                may not need a visa to enter the country. Otherwise, you will
                generally need to obtain a visa before traveling to Angola.
                <br />
                <br />● Gather required documents: You will need to provide
                certain documents as part of your visa application. These may
                include a passport that is valid for at least six months beyond
                your intended stay, a completed visa application form, a recent
                passport-style photograph, and proof of sufficient funds and
                accommodation in Angola.
                <br />
                <br />● Submit your application: You can either submit your visa
                application in person at the Angolan embassy or consulate in
                your home country, or you can use an online visa application
                service. Follow the instructions provided by the embassy or
                consulate to complete the application process.
                <br />
                <br />● Pay the visa fee: There is a fee for applying for a visa
                to Angola. The fee may vary depending on the type of visa you
                are applying for and the country you are from.
                <br />
                <br />● Wait for a decision: It may take several weeks for your
                visa application to be processed. Keep an eye on your email
                and/or mailbox for any updates or requests for additional
                information.
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is a general overview of the visa
                  application process for Angola. The specific requirements and
                  procedures may vary depending on your country of origin and
                  the type of visa you are applying for. It is always best to
                  check with the Angolan embassy or consulate in your home
                  country for the most up-to-date information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Angola?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Angola will depend on the
                type of visa you have and the purpose of your visit.
                <br />
                <br />
                If you are a citizen of a country that is exempt from the visa
                requirement for Angola, you will generally be able to stay in
                the country for a specific period of time without a visa. For
                example, citizens of certain countries can stay in Angola for up
                to 90 days without a visa, while citizens of other countries can
                stay for up to 30 days.
                <br />
                <br />
                If you are a citizen of a country that requires a visa to enter
                Angola, the length of time you can stay will depend on the type
                of visa you have. For example, a tourist visa for Angola is
                generally valid for up to 90 days, while a business visa may be
                valid for up to six months.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules and regulations for
                  staying in Angola may vary depending on your country of origin
                  and the purpose of your visit. It is always a good idea to
                  check with the Angolan embassy or consulate in your home
                  country for the most up-to-date information on the visa
                  requirements and length of stay allowed in Angola.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Angola?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Anyone arriving to Angola will be required to present a
                <span className="font-bold">
                  &nbsp;negative PCR test, no older than 48 hours.&nbsp;
                </span>
                All arrivals will be tested again upon entry.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Informations About Diplomatic Passport!
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To obtain a diplomatic passport in Angola, you must generally be
                a diplomat, embassy staff member, or other government official
                who is traveling on official business on behalf of the
                government of Angola or an international organization.
                <br />
                <br />
                In order to apply for a diplomatic passport in Angola, you will
                typically need to provide certain documents as part of your
                application. These may include a completed passport application
                form, a recent passport-style photograph, and a letter from your
                government or international organization stating that you are
                traveling on official business.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for obtaining a
                  diplomatic passport in Angola may vary depending on your
                  specific circumstances and the purpose of your travel. It is
                  always best to check with the Angolan embassy or consulate in
                  your home country or with your government or international
                  organization for the most up-to-date information on the
                  requirements for a diplomatic passport in Angola.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Angola?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a worker visa to work in Angola will depend on
                your nationality and the length of your intended stay in the
                country.
                <br />
                <br />
                Citizens of the member countries of the Southern African
                Development Community (SADC) do not need a worker visa to work
                in Angola for stays of up to 90 days.
                <span className="font-bold">
                  &nbsp;SADC member countries include Angola, Botswana, Comoros,
                  Democratic Republic of Congo, Eswatini, Lesotho, Madagascar,
                  Malawi, Mauritius, Mozambique, Namibia, Seychelles, South
                  Africa, Tanzania, Zambia, and Zimbabwe.
                </span>
                <br />
                <br />
                Citizens of all other countries will generally need to obtain a
                worker visa in order to work in Angola. To apply for a worker
                visa, you will typically need to have a job offer from an
                Angolan employer and meet the other requirements for obtaining a
                worker visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules and requirements for
                  working in Angola may vary depending on your country of origin
                  and the length of your intended stay. It is always best to
                  check with the Angolan embassy or consulate in your home
                  country for the most up-to-date information on the worker visa
                  requirements for Angola.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Angola Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Angola, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine if you need a worker visa: If you are a citizen of a
                member country of the Southern African Development Community
                (SADC), you may not need a worker visa to work in Angola for
                stays of up to 90 days. Otherwise, you will generally need to
                obtain a worker visa to work in Angola.
                <br />
                <br />● Find a job in Angola: In order to apply for a worker
                visa, you will need to have a job offer from an Angolan
                employer. You should start by researching job opportunities in
                Angola and applying to the positions that interest you.
                <br />
                <br />● Gather required documents: You will need to provide
                certain documents as part of your worker visa application. These
                may include a passport that is valid for at least six months
                beyond your intended stay, a completed visa application form, a
                recent passport-style photograph, and proof of your job offer in
                Angola
                <br />
                <br />● Submit your application: You can either submit your
                worker visa application in person at the Angolan embassy or
                consulate in your home country, or you can use an online visa
                application service. Follow the instructions provided by the
                embassy or consulate to complete the application process.
                <br />
                <br />● Pay the visa fee: There is a fee for applying for a
                worker visa to Angola. The fee may vary depending on the type of
                visa you are applying for and the country you are from.
                <br />
                <br />● Wait for a decision: It may take several weeks for your
                worker visa application to be processed. Keep an eye on your
                email and/or mailbox for any updates or requests for additional
                information.
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is a general overview of the worker visa
                  application process for Angola. The specific requirements and
                  procedures may vary depending on your country.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Angola Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available for Angola,
                depending on the length of your intended stay and the purpose of
                your work in the country. Here are some of the main types of
                worker visas for Angola:
                <br />
                <br />● Temporary worker visa: A temporary worker visa is
                generally valid for stays of up to 90 days and is intended for
                individuals who are coming to Angola to work on a short-term
                basis. This type of visa may be suitable for workers who are
                coming to Angola for a specific project or assignment.
                <br />
                <br />● Long-term worker visa: A long-term worker visa is
                generally valid for stays of up to six months and is intended
                for individuals who are coming to Angola to work on a
                longer-term basis. This type of visa may be suitable for workers
                who are coming to Angola for a longer-term assignment or to take
                up permanent employment.
                <br />
                <br />● Work and residence permit: A work and residence permit
                is a combination of a worker visa and a residence permit, which
                allows you to work and live in Angola for an extended period of
                time. This type of visa may be suitable for workers who are
                coming to Angola to take up permanent employment or to work in
                the country for an extended period of time.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements and
                  eligibility criteria for each type of worker visa may vary
                  depending on your country of origin and the purpose of your
                  work in Angola. It is always best to check with the Angolan
                  embassy or consulate in your home country for the most
                  up-to-date information on the worker visas available in
                  Angola.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Angola Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Angola, you will generally need
                to provide certain documents as part of your application. Here
                are some of the documents you may need to provide as part of
                your worker visa application for Angola:
                <br />
                <br />● Passport: You will need to provide a valid passport that
                is valid for at least six months beyond your intended stay in
                Angola.
                <br />
                <br />● Visa application form: You will need to complete and
                submit a visa application form, which can usually be obtained
                from the Angolan embassy or consulate in your home country or
                through an online visa application service.
                <br />
                <br />
                ● Passport-style photograph: You will need to provide a recent
                passport-style photograph to include with your visa application.
                <br />
                <br />
                ● Job offer letter: You will need to provide a letter from your
                Angolan employer stating that you have been offered a job in the
                country and outlining the terms of your employment.
                <br />
                <br />● Proof of sufficient funds: You will need to show that
                you have sufficient funds to support yourself while you are in
                Angola. This may include bank statements or proof of income.
                <br />
                <br />● Health insurance: You will need to provide proof of
                health insurance that covers you while you are in Angola.
                <br />
                <br />
                ● Proof of accommodation: You will need to provide evidence of
                where you will be staying in Angola, such as a hotel reservation
                or a letter of invitation from someone you will be staying with.
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is a general list of documents that you
                  may need to provide as part of your worker visa application
                  for Angola. The specific requirements may vary depending on
                  your country of origin and the type of worker visa you are
                  applying for. It is always best to check with the Angolan
                  embassy or consulate in your home country for the most
                  up-to-date information on the documents required for a worker
                  visa to Angola.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Angola?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Angola, you will need to submit
                your application to the Angolan embassy or consulate in your
                home country. You can either submit your application in person
                at the embassy or consulate, or you can use an online visa
                application service.
                <br />
                <br />
                It is important to note that the process for applying for a
                worker visa in Angola may vary depending on your country of
                origin and the specific requirements of the visa. It is always
                best to check with the Angolan embassy or consulate in your home
                country for the most up-to-date information on the process for
                applying for a worker visa.
                <br />
                <br />
                <span className="font-bold">
                  As a general rule, it is a good idea to apply for your worker
                  visa well in advance of your intended travel date to allow
                  enough time for the visa application process to be completed.
                  You should also be prepared for the possibility that your
                  application may take longer to process due to circumstances
                  such as COVID-19 or other factors.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Angola?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a visa to study in Angola will depend on your
                nationality and the length of your intended stay in the country.
                <br />
                <br />
                Citizens of the member countries of the Southern African
                Development Community (SADC) do not need a visa to study in
                Angola for stays of up to 90 days.
                <span className="font-bold">
                  &nbsp;SADC member countries include Angola, Botswana, Comoros,
                  Democratic Republic of Congo, Eswatini, Lesotho, Madagascar,
                  Malawi, Mauritius, Mozambique, Namibia, Seychelles, South
                  Africa, Tanzania, Zambia, and Zimbabwe.
                </span>
                <br />
                <br />
                Citizens of all other countries will generally need to obtain a
                student visa in order to study in Angola. To apply for a student
                visa, you will typically need to be accepted into an educational
                institution in Angola and meet the other requirements for
                obtaining a student visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules and requirements for
                  studying in Angola may vary depending on your country of
                  origin and the length of your intended stay. It is always best
                  to check with the Angolan embassy or consulate in your home
                  country for the most up-to-date information on the student
                  visa requirements for Angola.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Angola Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Angola, you will need to follow
                these steps:
                <br />
                <br />● Determine if you need a student visa: If you are a
                citizen of a member country of the Southern African Development
                Community (SADC), you may not need a student visa to study in
                Angola for stays of up to 90 days. Otherwise, you will generally
                need to obtain a student visa to study in Angola.
                <br />
                <br />● Find a school in Angola: In order to apply for a student
                visa, you will need to be accepted into an educational
                institution in Angola. You should start by researching schools
                and programs in Angola and applying to the ones that interest
                you.
                <br />
                <br />● Gather required documents: You will need to provide
                certain documents as part of your student visa application.
                These may include a passport that is valid for at least six
                months beyond your intended stay, a completed visa application
                form, a recent passport-style photograph, and proof of your
                acceptance into an educational institution in Angola.
                <br />
                <br />● Submit your application: You can either submit your
                student visa application in person at the Angolan embassy or
                consulate in your home country, or you can use an online visa
                application service. Follow the instructions provided by the
                embassy or consulate to complete the application process.
                <br />
                <br />● Pay the visa fee: There is a fee for applying for a
                student visa to Angola. The fee may vary depending on the type
                of visa you are applying for and the country you are from.
                <br />
                <br />
                ● Wait for a decision: It may take several weeks for your
                student visa application to be processed. Keep an eye on your
                email and/or mailbox for any updates or requests for additional
                information.
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is a general overview of the student
                  visa application process for Angola. The specific requirements
                  and procedures may vary depending on your country of origin
                  and the type of student visa you are applying for. It is
                  always best to check with the Angolan embassy or consulate in
                  your home country for the most up-to-date information on the
                  process for obtaining a student visa to Angola.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Angola Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                ● Acceptance into an educational institution: You will need to
                be accepted into an educational institution in Angola in order
                to apply for a student visa. You should provide proof of your
                acceptance with your student visa application.
                <br />
                <br />● Passport: You will need to provide a valid passport that
                is valid for at least six months beyond your intended stay in
                Angola.
                <br />
                <br />● Visa application form: You will need to complete and
                submit a visa application form, which can usually be obtained
                from the Angolan embassy or consulate in your home country or
                through an online visa application service.
                <br />
                <br />● Passport-style photograph: You will need to provide a
                recent passport-style photograph to include with your visa
                application.
                <br />
                <br />● Proof of sufficient funds: You will need to show that
                you have sufficient funds to support yourself while you are
                studying in Angola. This may include bank statements or proof of
                income.
                <br />
                <br />● Health insurance: You will need to provide proof of
                health insurance that covers you while you are in Angola.
                <br />
                <br />● Proof of accommodation: You will need to provide
                evidence of where you will be staying in Angola, such as a
                letter of invitation from someone you will be staying with or a
                housing contract.
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is a general list of requirements for a
                  student visa for Angola. The specific requirements may vary
                  depending on your country of origin and the type of student
                  visa you are applying for. It is always best to check with the
                  Angolan embassy or consulate in your home country for the most
                  up-to-date information on the requirements for a student visa
                  to Angola.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Angola Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Angola will depend
                on the type of visa you are applying for and the length of your
                intended stay in the country.
                <br />
                <br />
                Student visas for Angola are generally valid for stays of up to
                90 days. If you are planning to study in Angola for a longer
                period of time, you may need to apply for a long-term student
                visa or a work and residence permit.
                <br />
                <br />
                The price of a student visa for Angola will also vary depending
                on the type of visa you are applying for and the country you are
                from. Student visas may be issued as single-entry visas, which
                allow you to enter Angola once, or as multiple-entry visas,
                which allow you to enter and exit Angola multiple times during
                the validity of the visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules and requirements for
                  student visas in Angola may vary depending on your country of
                  origin and the length of your intended stay. It is always best
                  to check with the Angolan embassy or consulate in your home
                  country for the most up-to-date information on the validity
                  and price of student visas for Angola.
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

export default Angola;
