import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const SouthKorea = () => {
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
        <title>South Korea</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="South Korea travel visa, South Korea work visa, South Korea study visa, How to apply for an South Korea visa, South Korea visa requirements, South Korea tourist visa, South Korea student visa, South Korea business visa, South Korea visa processing time, South Korea visa application process, South Korea visa for Americans, South Korea visa for Europeans, South Korea visa for South Koreans, South Korea visa for Canadians, South Korea visa for South Koreans, South Korea visa for Chinese, South Korea visa for Africans, South Korea visa for Asians, South Korea visa for South Americans, South Korea visa for Middle Easterners, South Korea visa for UK citizens, South Korea visa for EU citizens, South Korea visa for Schengen area, South Korea visa for non-EU citizens, South Korea visa fees and charges"
          
        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            South Korea
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              South Korea is a country located in East Asia, known for its rapid
              modernization and economic development. It is known for its
              advanced technology and electronics industry, with companies like
              Samsung and LG being major global brands. South Korea is also
              known for its rich culture and history, with a unique language and
              a distinct traditional art and cuisine. Additionally, South Korea
              is known for its scenic natural beauty, with many mountains,
              forests, and beaches. The country is also known for its popular
              music and entertainment industry, with K-pop being a major
              cultural export.
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
                Who can enter South Korea without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                As of 2021, citizens of certain countries are able to enter
                South Korea without a visa for short-term stays, depending on
                the purpose of their visit and the length of their stay.
                <br />
                <br />
                Citizens of countries that have visa-waiver agreements with
                South Korea can generally enter the country without a visa for
                stays of up to 90 days for tourism or business purposes.
                <br />
                <br />
                <span className="font-bold">
                  Citizens of the United States, Canada, Australia, New Zealand,
                  and most countries in the European Union are among the
                  countries that have visa-waiver agreements with South Korea.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements for visa-free
                  entry to South Korea can vary depending on the specific
                  circumstances of your visit, and you may still need to obtain
                  a visa if you plan to stay in the country for a longer period
                  of time or for a purpose other than tourism or business. You
                  can find more information about the visa requirements for
                  South Korea on the Ministry of Foreign Affairs of the Republic
                  of Korea website.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for South Korea Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to South Korea, you will generally need to
                provide the following documents:
                <br />
                <br />
                ● A completed visa application form: You will need to complete
                the appropriate visa application form, which can be found on the
                website of the nearest South Korean embassy or consulate.
                <br />
                <br />
                ● A valid passport: You will need to provide a copy of your
                passport, which must be valid for at least six months beyond the
                date you plan to leave South Korea.
                <br />
                <br />
                ● Passport-sized photos: You will need to provide two
                passport-sized photos of yourself, which must meet certain
                specifications.
                <br />
                <br />
                ● Evidence of your purpose of visit: You will need to provide
                evidence of the purpose of your visit to South Korea, such as a
                letter of invitation from a host company or organization, or a
                copy of your travel itinerary.
                <br />
                <br />
                ● Evidence of your financial ability to support yourself: You
                will need to show that you have sufficient funds to support
                yourself while you are in South Korea. This may include evidence
                of your financial resources, such as bank statements or a letter
                from your sponsor.
                <br />
                <br />● Other supporting documents: Depending on your individual
                circumstances, you may also need to provide other supporting
                documents, such as a police clearance certificate or evidence of
                your health insurance coverage.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a South Korea Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                If you want to apply for a visa in South Korea, you will need to
                follow these steps:
                <br />
                <br />
                ● Check if you need a visa: You may be able to enter South Korea
                without a visa if you are a citizen of a country that has a
                visa-waiver agreement with South Korea and you are staying in
                the country for a short period of time for tourism or business
                purposes. You can find information about the visa requirements
                for South Korea on the Ministry of Foreign Affairs of the
                Republic of Korea website.
                <br />
                <br />
                ● Choose the right type of visa: There are several different
                types of visas available for South Korea, each of which is
                intended for a specific purpose. You will need to choose the
                type of visa that best fits your circumstances and the purpose
                of your visit.
                <br />
                <br />
                ● Gather the necessary documents: You will need to provide a
                range of documents as part of your visa application, including a
                valid passport, passport-sized photos, and proof of your purpose
                of visit and financial ability to support yourself. You can find
                a list of the specific documents you will need on the Ministry
                of Foreign Affairs of the Republic of Korea website.
                <br />
                <br />
                ● Submit your application: You can apply for a visa in South
                Korea in person at a Korean embassy or consulate, or through a
                Korean embassy or consulate in your country of residence. You
                will need to complete the appropriate application form and
                provide all the necessary documents in person. You will also
                need to pay the visa application fee.
                <br />
                <br />
                ● Wait for a decision: After you submit your application, the
                Korean embassy or consulate will review it and decide whether to
                grant you a visa. You will be notified of the decision by email
                or mail. If your application is successful, you will receive a
                visa label in your passport, which will allow you to travel to
                South Korea.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements for a visa to
                  enter South Korea may vary depending on your country of origin
                  and the purpose of your trip. You should contact the New South
                  Korea government or a South Korea embassy or consulate for
                  specific information on how to apply for a visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in South Korea?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in South Korea will depend on
                the type of visa you have and the purpose of your visit.
                <br />
                <br />
                If you are a citizen of a country that has a visa-waiver
                agreement with South Korea and you are visiting the country for
                tourism or business purposes, you may be able to stay in the
                country for up to 90 days without a visa.
                <br />
                <br />
                If you have a{" "}
                <span className="font-bold">&nbsp;short-term visa</span> for
                South Korea, such as a tourist visa or a business visa, you will
                generally be able to stay in the country for a specific period
                of time, which will be indicated on your visa.
                <br />
                <br />
                If you have a{" "}
                <span className="font-bold">&nbsp;long-term visa</span> for
                South Korea, such as a student visa or a work visa, you will
                generally be able to stay in the country for the duration of
                your visa, up to a maximum of four years.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the length of time you can stay in
                  South Korea can vary depending on your individual
                  circumstances and the type of visa you have. You should always
                  check the expiration date of your visa and make sure you leave
                  the country before it expires. You can find more information
                  about the length of time you can stay in South Korea on the
                  Ministry of Foreign Affairs of the Republic of Korea website.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in South Korea?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Are either PCR or antigen tests available for U.S. citizens in
                Korea? Yes.
                <br />
                <br />
                If so, are test results reliably available within one calendar
                day? Yes.
                <br />
                <br />
                Testing for travel purposes. If you need a COVID test for travel
                or other purposes, many local hospitals and clinics offer them
                for a fee, usually between $100 and $300. The U.S. Embassy has
                no designated testing centers; however, a list of COVID-19
                testing sites is available here. This list is non-comprehensive
                and provided for informational purposes only.
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
                A diplomatic passport is a special type of passport that is
                issued to diplomats and other government officials who are
                traveling on official business. Diplomatic passports are issued
                by the government of the passport holder's country of
                citizenship and are typically valid for a period of five years.
                <br />
                <br />
                Holders of diplomatic passports are entitled to certain
                privileges and immunities while they are abroad, as provided for
                under international law. These privileges and immunities are
                intended to allow diplomats to carry out their duties without
                interference and to protect them from legal proceedings while
                they are in a foreign country.
                <br />
                <br />
                In South Korea, holders of diplomatic passports are exempt from
                visa requirements and are allowed to stay in the country for the
                duration of their official duties. They are also entitled to
                certain privileges, such as tax exemptions and the use of
                diplomatic lounges at airports.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the privileges and immunities
                  associated with diplomatic passports are not intended for
                  personal use and are only granted for the purpose of carrying
                  out official duties. Diplomatic passport holders are expected
                  to adhere to the laws and regulations of the countries they
                  visit and to respect the sovereignty of those countries.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in South Korea?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether or not you need a worker visa in South Korea will depend
                on your citizenship, the type of work you will be doing, and the
                length of your stay.
                <br />
                <br />
                Citizens of certain countries are able to work in South Korea
                without a visa for short-term, non-professional employment, such
                as teaching English or working in a restaurant.
                <br />
                <br />
                If you are a citizen of a country that has a visa-waiver
                agreement with South Korea and you are coming to the country to
                work in a non-professional capacity for a short period of time,
                you may be able to work in South Korea without a visa.
                <br />
                <br />
                However, if you are coming to South Korea to work in a
                professional capacity, or if you are staying in the country for
                a longer period of time, you will generally need to obtain a
                work visa.
                <br />
                <br />
                To apply for a work visa in South Korea, you will need to
                provide evidence of your employment, such as a letter of offer
                from your employer or a copy of your employment contract. You
                will also need to provide proof of your qualifications and
                skills, and you may need to provide evidence of your English
                language ability (if required).
                <br />
                <br />
                <span className="font-bold">
                  You can find more information about the work visa requirements
                  for South Korea on the Ministry of Foreign Affairs of the
                  Republic of Korea website. It's always a good idea to check
                  with the nearest Korean embassy or consulate to confirm the
                  most current visa requirements and to find out what documents
                  you need to bring with you when you travel to South Korea.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a South Korea Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to apply for a worker visa in South Korea, you will
                need to follow these steps:
                <br />
                <br />
                ● Check if you need a worker visa: You may be able to work in
                South Korea without a worker visa if you are a citizen of a
                country that has a visa-waiver agreement with South Korea and
                you are coming to the country to work in a non-professional
                capacity for a short period of time. You can find information
                about the visa requirements for South Korea on the Ministry of
                Foreign Affairs of the Republic of Korea website.
                <br />
                <br />
                ● Gather the necessary documents: You will need to provide a
                range of documents as part of your worker visa application,
                including evidence of your employment, proof of your
                qualifications and skills, and proof of your English language
                ability (if required). You can find a list of the specific
                documents you will need on the Ministry of Foreign Affairs of
                the Republic of Korea website.
                <br />
                <br />
                ● Submit your application: You can apply for a worker visa in
                South Korea in person at a Korean embassy or consulate, or
                through a Korean embassy or consulate in your country of
                residence. You will need to complete the appropriate application
                form and provide all the necessary documents in person. You will
                also need to pay the visa application fee.
                <br />
                <br />
                ● Wait for a decision: After you submit your application, the
                Korean embassy or consulate will review it and decide whether to
                grant you a worker visa. You will be notified of the decision by
                email or mail. If your application is successful, you will
                receive a visa label in your passport, which will allow you to
                travel to South Korea.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the process for applying for a
                  worker visa in South Korea can be complex, and it's always a
                  good idea to seek the advice of a qualified immigration
                  advisor if you have any questions or concerns. You can find
                  more information about the worker visa application process on
                  the Ministry of Foreign Affairs of the Republic of Korea
                  website.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of South Korea Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several different types of worker visas available in
                South Korea, each of which is intended for a specific purpose.
                The type of worker visa you will need will depend on the type of
                work you will be doing and the length of your stay in the
                country.
                <br />
                <br />
                Some of the types of worker visas available in South Korea
                include:
                <br />
                <br />
                <span className="font-bold">E-1 visa</span>
                : This type of visa is for foreign nationals who are coming to
                South Korea to work in a professional capacity, such as a
                researcher, professor, or specialist in a field of expertise.
                <br />
                <br />
                <span className="font-bold">E-2 visa</span>
                : This type of visa is for foreign nationals who are coming to
                South Korea to teach English or another foreign language.
                <br />
                <br />
                <span className="font-bold">E-3 visa</span>
                : This type of visa is for foreign nationals who are coming to
                South Korea to work in a non-professional capacity, such as a
                restaurant worker or a sports coach.
                <br />
                <br />
                <span className="font-bold">E-4 visa</span>
                : This type of visa is for foreign nationals who are coming to
                South Korea to work as a technical instructor or in a similar
                occupation.
                <br />
                <br />
                <span className="font-bold">E-5 visa</span>
                : This type of visa is for foreign nationals who are coming to
                South Korea to work in the entertainment industry, such as a
                musician or actor.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements for worker visas
                  in South Korea can vary depending on the specific
                  circumstances of your case and the type of visa you are
                  applying for. You can find more information about the types of
                  worker visas available in South Korea on the Ministry of
                  Foreign Affairs of the Republic of Korea website.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for South Korea Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in South Korea, you will generally
                need to provide the following documents:
                <br />
                <br />
                ● A valid passport: You will need to provide a copy of your
                passport, which must be valid for at least six months beyond the
                date you plan to leave South Korea.
                <br />
                <br />
                ● A completed application form: You will need to complete the
                appropriate application form, which can be found on the Ministry
                of Foreign Affairs of the Republic of Korea website.
                <br />
                <br />
                ● Passport-sized photos: You will need to provide two
                passport-sized photos of yourself, which must meet certain
                specifications.
                <br />
                <br />
                ● Evidence of your employment: You will need to provide evidence
                of your employment in South Korea, such as a letter of offer
                from your employer or a copy of your employment contract.
                <br />
                <br />
                ● Proof of your qualifications and skills: You will need to
                provide proof of your qualifications and skills, such as copies
                of your degrees, certificates, or transcripts.
                <br />
                <br />
                ● Proof of your English language ability (if required): If your
                job requires a certain level of English language proficiency,
                you may need to provide evidence of your English language
                skills, such as a test score from an approved English language
                test.
                <br />
                <br />● Other supporting documents: Depending on your
                circumstances, you may also need to provide other supporting
                documents, such as a police clearance certificate or evidence of
                your health insurance coverage.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in South Korea?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in South Korea, you will need to
                submit your application in person at a Korean embassy or
                consulate, or through a Korean embassy or consulate in your
                country of residence.
                <br />
                <br />
                It's important to apply for your worker visa well in advance of
                your intended travel date, as the visa application process can
                take several weeks or even months to complete. You should aim to
                submit your application at least a few months before you plan to
                travel to South Korea.
                <br />
                <br />
                You can find a list of Korean embassies and consulates on the
                Ministry of Foreign Affairs of the Republic of Korea website.
                You should contact the nearest embassy or consulate to find out
                the specific requirements for worker visa applications and to
                make an appointment to submit your application in person.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements for worker visas
                  in South Korea can vary depending on your individual
                  circumstances and the type of visa you are applying for. You
                  should always check with the nearest Korean embassy or
                  consulate to confirm the most current visa requirements and to
                  find out what documents you need to bring with you when you
                  travel to South Korea.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in South Korea?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether or not you need a visa to study in South Korea will
                depend on your citizenship, the length of your course of study,
                and the type of educational institution you will be attending.
                <br />
                <br />
                Citizens of certain countries are able to study in South Korea
                without a visa for short-term, non-degree programs, such as
                language courses or cultural exchange programs.
                <br />
                <br />
                If you are a citizen of a country that has a visa-waiver
                agreement with South Korea and you are coming to the country to
                study in a non-degree program for a short period of time, you
                may be able to study in South Korea without a visa.
                <br />
                <br />
                However, if you are coming to South Korea to study in a degree
                program or if you are staying in the country for a longer period
                of time, you will generally need to obtain a student visa.
                <br />
                <br />
                To apply for a student visa in South Korea, you will need to
                provide evidence of your enrollment in a recognized educational
                institution, such as a letter of acceptance or a copy of your
                enrollment contract. You may also need to provide evidence of
                your financial ability to support yourself while you are in the
                country.
                <br />
                <br />
                <span className="font-bold">
                  You can find more information about the student visa
                  requirements for South Korea on the Ministry of Foreign
                  Affairs of the Republic of Korea website. It's always a good
                  idea to check with the nearest Korean embassy or consulate to
                  confirm the most current visa requirements and to find out
                  what documents you need to bring with you when you travel to
                  South Korea.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a South Korea Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to apply for a student visa in South Korea, you will
                need to follow these steps:
                <br />
                <br />
                ● Check if you need a student visa: You may be able to study in
                South Korea without a student visa if you are a citizen of a
                country that has a visa-waiver agreement with South Korea and
                you are coming to the country to study in a non-degree program
                for a short period of time. You can find information about the
                visa requirements for South Korea on the Ministry of Foreign
                Affairs of the Republic of Korea website.
                <br />
                <br />
                ● Gather the necessary documents: You will need to provide a
                range of documents as part of your student visa application,
                including evidence of your enrollment in a recognized
                educational institution, proof of your financial ability to
                support yourself while you are in the country, and a police
                clearance certificate. You can find a list of the specific
                documents you will need on the Ministry of Foreign Affairs of
                the Republic of Korea website.
                <br />
                <br />
                ● Submit your application: You can apply for a student visa in
                South Korea in person at a Korean embassy or consulate, or
                through a Korean embassy or consulate in your country of
                residence. You will need to complete the appropriate application
                form and provide all the necessary documents in person. You will
                also need to pay the visa application fee.
                <br />
                <br />● Wait for a decision: After you submit your application,
                the Korean embassy or consulate will review it and decide
                whether to grant you a student visa. You will be notified of the
                decision by email or mail. If your application is successful,
                you will receive a visa label in your passport, which will allow
                you to travel to South Korea.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                South Korea Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in South Korea, you will generally
                need to meet the following requirements:
                <br />
                <br />
                ● Enroll in a recognized educational institution: You will need
                to provide evidence of your enrollment in a recognized
                educational institution in South Korea, such as a letter of
                acceptance or a copy of your enrollment contract.
                <br />
                <br />
                ● Have a valid passport: You will need to provide a copy of your
                passport, which must be valid for at least six months beyond the
                date you plan to leave South Korea.
                <br />
                <br />
                ● Provide passport-sized photos: You will need to provide two
                passport-sized photos of yourself, which must meet certain
                specifications.
                <br />
                <br />
                ● Provide proof of your financial ability to support yourself:
                You will need to provide evidence of your financial ability to
                support yourself while you are in South Korea, such as bank
                statements or a letter of financial support from a sponsor.
                <br />
                <br />
                ● Obtain a police clearance certificate: You may need to provide
                a police clearance certificate, which is a document that
                certifies that you do not have a criminal record.
                <br />
                <br />
                ● Meet any other requirements: Depending on your individual
                circumstances, you may also need to meet other requirements,
                such as providing proof of your English language ability (if
                required) or undergoing a medical examination.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements for student visas
                  in South Korea can vary depending on your specific
                  circumstances and the type of visa you are applying for. You
                  should always check with the nearest Korean embassy or
                  consulate to confirm the most current visa requirements and to
                  find out what documents you need to bring with you when you
                  travel to South Korea.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for South Korea Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in South Korea will
                depend on the length of your course of study and the type of
                educational institution you will be attending.
                <br />
                <br />
                Student visas in South Korea are typically valid for the
                duration of your course of study, up to a maximum of four years.
                However, the length of time you can stay in South Korea on a
                student visa may be shorter if your course of study is shorter
                than four years.
                <br />
                <br />
                The price of a student visa in South Korea will vary depending
                on the specific circumstances of your case and the type of visa
                you are applying for. You will generally need to pay a visa
                application fee when you submit your application, which is
                payable in local currency.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the price and validity of student
                  visas in South Korea can vary depending on your individual
                  circumstances and the type of visa you are applying for. You
                  should always check with the nearest Korean embassy or
                  consulate to confirm the most current visa requirements and
                  fees.
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

export default SouthKorea;
