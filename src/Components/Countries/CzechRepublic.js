import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const CzechRepublic = () => {
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
        <title>Czechia</title>
        <meta name="description" content="Czechia" />
        <meta
          name="keywords"
          content="Czechia travel visa, Czechia work visa, Czechia study visa, How to apply for an Czechia visa, Czechia visa requirements, Czechia tourist visa, Czechia student visa, Czechia business visa, Czechia visa processing time, Czechia visa application process, Czechia visa for Americans, Czechia visa for Europeans, Czechia visa for Czechians, Czechia visa for Canadians, Czechia visa for Indians, Czechia visa for Chinese, Czechia visa for Africans, Czechia visa for Asians, Czechia visa for South Americans, Czechia visa for Middle Easterners, Czechia visa for UK citizens, Czechia visa for EU citizens, Czechia visa for Schengen area, Czechia visa for non-EU citizens, Czechia visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Czechia
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Czechia, also known as the Czech Republic, is a country located in
              Central Europe. It is well known for its beautiful architecture,
              particularly in its capital city of Prague. The Czech Republic is
              also known for its rich cultural traditions, including its music,
              art, and cuisine. Some other things that the Czech Republic is
              known for include its beautiful forests and natural scenery, its
              world-class beer, and its glass and crystal products.
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
                Who can enter Czechia without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Czechia, also known as the Czech Republic, is a member of the
                European Union (EU) and the Schengen Area, which allows citizens
                of certain countries to enter Czechia without a visa for stays
                of up to 90 days in any 180-day period.
                <br />
                <br />
                The countries whose citizens are allowed to enter Czechia
                visa-free are:
                <br />
                <br />
                ● EU countries.
                <br />
                <br />
                ● European Economic Area (EEA) countries (Iceland,
                Liechtenstein, and Norway).
                <br />
                <br />
                ● Andorra, Monaco, San Marino, Switzerland.
                <br />
                <br />
                ● United States, Canada, Australia, New Zealand, Japan.
                <br />
                <br />
                ● Brazil, Israel, South Korea, Singapore.
                <br />
                <br />
                <span className="font-bold">
                  Citizens of other countries may need to obtain a visa before
                  entering Czechia, depending on the purpose of their visit and
                  the length of their stay.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Czechia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Czechia, you will need to submit
                the following documents:
                <br />
                <br />
                ● A completed and signed visa application form.
                <br />
                <br />
                ● A valid passport or travel document. Your passport must be
                valid for at least three months beyond the intended date of your
                return to your home country.
                <br />
                <br />
                ● Two recent passport-size photographs, taken against a white
                background.
                <br />
                <br />
                ● A valid return ticket or proof of sufficient funds to purchase
                a return ticket.
                <br />
                <br />
                ● Proof of accommodation in Czechia, such as a hotel reservation
                or a letter of invitation from a host in Czechia.
                <br />
                <br />
                ● Proof of sufficient funds to cover your expenses during your
                stay in Czechia, such as bank statements or a letter from your
                employer stating that your expenses will be covered.
                <br />
                <br />
                ● A letter explaining the purpose of your visit to Czechia,
                including details of any business meetings or activities you
                will be participating in.
                <br />
                <br />
                ● Documents related to your employment or studies, such as a
                letter from your employer or a copy of your enrollment at a
                university.
                <br />
                <br />
                <span className="font-bold">
                  You may also be required to provide other documents depending
                  on the specific type of visa you are applying for and the
                  purpose of your visit to Czechia. It is advisable to check
                  with the embassy or consulate of Czechia in your home country
                  for a complete list of requirements.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Czechia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Czechia, you will need to follow
                the steps below:
                <br />
                <br />
                ● Determine your eligibility: To be eligible for a visa to enter
                Czechia, you must have a valid passport or travel document and
                meet the other requirements for a visa, such as having a clean
                criminal record and being in good health.
                <br />
                <br />
                ● Gather the required documents: You will need to provide a
                range of documents as part of your visa application, including
                your passport, photographs, a letter explaining the purpose of
                your visit to Czechia, and proof of sufficient funds to cover
                your expenses during your stay.
                <br />
                <br />
                ● Complete the application form: Fill out the visa application
                form and make sure to provide accurate and up-to-date
                information.
                <br />
                <br />
                ● Submit the application: Submit your completed application,
                along with all required documents, at the embassy or consulate
                of Czechia in your home country. You may be required to attend
                an interview as part of the application process.
                <br />
                <br />
                ● Wait for a decision: It may take several weeks or even months
                for your application to be processed. Do not make any travel
                arrangements until you have received a decision on your visa
                application.
                <br />
                <br />
                <span className="font-bold">
                  It is advisable to apply for your visa well in advance of your
                  intended travel date, as processing times can vary. You should
                  also be prepared to pay a fee to cover the cost of processing
                  your visa application.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Czechia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Czechia depends on the type
                of visa you have obtained and the purpose of your visit.
                <br />
                <br />
                If you are a citizen of an EU or EEA country, or of a country
                that is part of the Schengen Area, you have the right to enter
                Czechia without a visa and stay for up to 90 days in any 180-day
                period.
                <br />
                <br />
                If you have a{" "}
                <span className="font-bold">&nbsp;tourist visa</span>, you will
                generally be allowed to stay in Czechia for up to 90 days in any
                180-day period.
                <br />
                <br />
                If you have a{" "}
                <span className="font-bold">&nbsp;business visa</span>, you will
                generally be allowed to stay in Czechia for up to 90 days in any
                180-day period.
                <br />
                <br />
                If you have a{" "}
                <span className="font-bold">&nbsp;student visa</span>, you will
                generally be allowed to stay in Czechia for the duration of your
                studies, up to a maximum of five years.
                <br />
                <br />
                If you have a<span className="font-bold">&nbsp;work visa</span>
                , you will generally be allowed to stay in Czechia for the
                duration of your employment, up to a maximum of one year.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the length of time you can stay
                  in Czechia may be affected by the specific terms of your visa
                  and the purpose of your visit. It is advisable to check with
                  the embassy or consulate of Czechia in your home country for
                  more information on the length of time you are allowed to stay
                  in Czechia.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Czechia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Effective April 9, 2022, the Czech Republic has suspended all
                COVID-19 related entry restrictions for travelers. Travelers to
                the Czech Republic are no longer required to complete a
                Passenger Locator Form, provide proof of COVID-19 vaccination or
                prior infection, etc.
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
                A diplomatic passport is a type of passport that is issued to
                individuals who are traveling abroad on official government
                business as representatives of their country. Diplomatic
                passports are typically issued to diplomats, government
                officials, and other individuals who are authorized to conduct
                official business on behalf of their country.
                <br />
                <br />
                In Czechia, diplomatic passports are issued by the Ministry of
                Foreign Affairs to individuals who are traveling abroad on
                official government business. Diplomatic passports are valid for
                five years and may be renewed.
                <br />
                <br />
                Holders of diplomatic passports are generally granted diplomatic
                immunity, which means that they are not subject to the laws and
                regulations of the countries they visit and are exempt from
                certain taxes and duties. However, diplomatic immunity is not
                absolute and may be waived in certain circumstances.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that diplomatic passports are not
                  intended for personal travel and should only be used for
                  official government business. Misuse of a diplomatic passport
                  can result in the revocation of the passport and other
                  penalties.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Czechia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a worker visa to work in Czechia depends on
                your citizenship and the length of your stay.
                <br />
                <br />
                If you are a citizen of an EU or EEA country, or of a country
                that is part of the Schengen Area, you have the right to work in
                Czechia without a worker visa. You will only need to register
                with the authorities and obtain a residence permit if you plan
                to stay in the country for more than 90 days.
                <br />
                <br />
                If you are a citizen of a country outside the EU, EEA, and
                Schengen Area, you will generally need to obtain a worker visa
                in order to work in Czechia.
                <br />
                <br />
                <span className="font-bold">
                  You may also be required to provide other documents depending
                  on the specific type of worker visa you are applying for and
                  the nature of your work in Czechia. It is advisable to check
                  with the embassy or consulate of Czechia in your home country
                  for a complete list of requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Czechia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Czechia, you will need to
                follow the steps below:
                <br />
                <br />
                ● Determine your eligibility: To be eligible for a worker visa
                in Czechia, you must have a job offer from an employer in
                Czechia and meet the other requirements for a worker visa, such
                as having a clean criminal record and being in good health.
                <br />
                <br />
                ● Gather the required documents: You will need to provide a
                range of documents as part of your worker visa application,
                including your passport, photographs, a letter from your
                employer in Czechia, and evidence of sufficient funds to support
                yourself during your stay.
                <br />
                <br />
                ● Complete the application form: Fill out the worker visa
                application form and make sure to provide accurate and
                up-to-date information.
                <br />
                <br />
                ● Submit the application: Submit your completed application,
                along with all required documents, at the embassy or consulate
                of Czechia in your home country. You may be required to attend
                an interview as part of the application process.
                <br />
                <br />
                ● Wait for a decision: It may take several weeks or even months
                for your application to be processed. Do not make any travel
                arrangements until you have received a decision on your worker
                visa application.
                <br />
                <br />
                <span className="font-bold">
                  It is advisable to apply for your worker visa well in advance
                  of your intended travel date, as processing times can vary.
                  You should also be prepared to pay a fee to cover the cost of
                  processing your worker visa application.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Czechia Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In Czechia, there are several types of worker visas that you can
                apply for, depending on the nature of your work and the length
                of your stay in the country.
                <br />
                <br />
                The main types of worker visas in Czechia are:
                <br />
                <br />
                <span className="font-bold">Employment visa</span>
                : An employment visa is issued to individuals who have been
                offered a job in Czechia and wish to work in the country for a
                period of up to one year. To apply for an employment visa, you
                will need to provide a letter from your employer in Czechia
                stating the details of your employment, including your job
                title, duties, and salary.
                <br />
                <br />
                <span className="font-bold">Business visa</span>
                : A business visa is issued to individuals who wish to conduct
                business in Czechia, such as attending meetings, negotiations,
                or business conferences. Business visas are generally valid for
                up to 90 days in any 180-day period.
                <br />
                <br />
                <span className="font-bold">Student visa</span>
                : A student visa is issued to individuals who have been accepted
                to study at a recognized educational institution in Czechia.
                Student visas are generally valid for the duration of your
                studies, up to a maximum of five years.
                <br />
                <br />
                <span className="font-bold">Family reunification visa</span>
                : A family reunification visa is issued to individuals who wish
                to join a family member who is living and working in Czechia. To
                apply for a family reunification visa, you will need to provide
                proof of your relationship with the family member in Czechia,
                such as a marriage certificate or birth certificate.
                <br />
                <br />
                <span className="font-bold">Residence permit</span>
                : A residence permit is issued to individuals who wish to stay
                in Czechia for a period of more than 90 days. To apply for a
                residence permit, you will need to provide evidence of the
                purpose.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the type of worker visa you will
                  need depends on the specific circumstances of your work and
                  stay in Czechia. It is advisable to check with the embassy or
                  consulate of Czechia in your home country for more information
                  on the different types of worker visas available and which one
                  is most suitable for you.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Czechia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Here is a list of documents that you may need to provide when
                applying for a worker visa for the Czech Republic:
                <br />
                <br />
                ● A valid passport or travel document.
                <br />
                <br />
                ● A completed application form.
                <br />
                <br />
                ● Two recent passport-size photographs.
                <br />
                <br />
                ● A certificate of good conduct from your home country.
                <br />
                <br />
                ● A medical certificate.
                <br />
                <br />
                ● Evidence of your employment or a letter of invitation from
                your employer in the Czech Republic.
                <br />
                <br />
                ● Evidence of your qualifications.
                <br />
                <br />
                ● A return ticket or sufficient funds to purchase one.
                <br />
                <br />
                ● Proof of sufficient funds to support yourself during your stay
                in the Czech Republic.
                <br />
                <br />
                ● Travel insurance.
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is just a general list and the actual
                  documents required may vary depending on your specific
                  circumstances. It is best to check with the Embassy of the
                  Czech Republic or the immigration authorities in the Czech
                  Republic for the most up-to-date and complete list of
                  requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Czechia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In order to apply for a worker visa for the Czech Republic, you
                will need to submit your application at the Embassy or Consulate
                of the Czech Republic in your home country. It is best to check
                with the Embassy or Consulate to find out the specific process
                for submitting your application and to make an appointment if
                necessary.
                <br />
                <br />
                <span className="font-bold">
                  You should apply for your worker visa as soon as you receive a
                  job offer from an employer in the Czech Republic, or as soon
                  as you have been invited for an interview. It is important to
                  note that the process of obtaining a worker visa can take
                  several weeks or even months, so it is best to start the
                  application process as early as possible.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Czechia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                It depends on your nationality and the duration of your studies.
                <br />
                <br />
                If you are a citizen of an EU or EEA member state, or of
                Switzerland, you do not need a visa to study in the Czech
                Republic. However, you will need to register with the Foreign
                Police within three working days of your arrival in the country.
                <br />
                <br />
                If you are a citizen of a non-EU country and you are planning to
                study in the Czech Republic for less than 90 days, you may be
                able to enter the country with a short-term Schengen visa. This
                type of visa allows you to stay in the Czech Republic and other
                Schengen countries for up to 90 days within a 180-day period.
                <br />
                <br />
                If you are a citizen of a non-EU country and you are planning to
                study in the Czech Republic for more than 90 days, you will need
                to apply for a long-term visa (also known as a "visa for the
                purpose of study"). You will need to provide the following
                documents when applying for a long-term visa:
                <br />
                <br />
                ● A valid passport or travel document.
                <br />
                <br />
                ● A completed application form.
                <br />
                <br />
                ● Two recent passport-size photographs.
                <br />
                <br />
                ● A certificate of good conduct from your home country.
                <br />
                <br />
                ● A medical certificate.
                <br />
                <br />
                ● A letter of acceptance from a recognized educational
                institution in the Czech Republic.
                <br />
                <br />
                ● Evidence of your qualifications.
                <br />
                <br />
                ● A return ticket or sufficient funds to purchase one.
                <br />
                <br />
                ● Proof of sufficient funds to support yourself during your stay
                in the Czech Republic.
                <br />
                <br />● Travel insurance.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Czechia student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Here are the steps you will need to follow in order to apply for
                a student visa for the Czech Republic:
                <br />
                <br />
                ● Check that you meet the requirements for a student visa. You
                will need to have a letter of acceptance from a recognized
                educational institution in the Czech Republic, and you will need
                to show that you have sufficient funds to support yourself
                during your stay in the country.
                <br />
                <br />
                ● Collect all of the required documents. In addition to a valid
                passport and the letter of acceptance from your educational
                institution, you will also need to provide evidence of your
                qualifications, proof of sufficient funds, and a medical
                certificate, among other things.
                <br />
                <br />
                ● Contact the Embassy or Consulate of the Czech Republic in your
                home country to make an appointment to submit your application.
                You may also be required to attend an interview as part of the
                application process.
                <br />
                <br />
                ● Submit your application at the Embassy or Consulate on the
                date of your appointment. You will need to pay a visa fee at
                this time.
                <br />
                <br />
                ● Wait for a decision on your application. The processing time
                for a student visa can vary, but it is typically several weeks
                or even months.
                <br />
                <br />
                <span className="font-bold">
                  It is advisable to apply for your student visa well in advance
                  of your intended travel date, as processing times can vary.
                  You should also be prepared to pay a fee to cover the cost of
                  processing your student visa application.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Czechia student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Here are the requirements that you will need to meet in order to
                be eligible for a student visa for the Czech Republic:
                <br />
                <br />
                ● You must have a letter of acceptance from a recognized
                educational institution in the Czech Republic. This letter must
                state the duration of your studies and confirm that you have
                been accepted into a full-time program.
                <br />
                <br />
                ● You must have sufficient funds to support yourself during your
                stay in the Czech Republic. This may include funds for tuition
                and living expenses. You will need to provide proof of your
                funds, such as bank statements or a scholarship letter.
                <br />
                <br />
                ● You must have a valid passport or travel document. Your
                passport must be valid for at least three months beyond the
                expected end date of your studies in the Czech Republic.
                <br />
                <br />
                ● You must provide a medical certificate to confirm that you are
                in good health and do not have any contagious diseases.
                <br />
                <br />
                ● You may be required to provide a certificate of good conduct
                from your home country, to confirm that you do not have any
                criminal convictions.
                <br />
                <br />
                ● You may also be required to provide other documents, such as
                evidence of your qualifications or proof of travel insurance.
                <br />
                <br />
                <span className="font-bold">
                  You may also be required to provide other documents depending
                  on the specific circumstances of your study in Czechia. It is
                  advisable to check with the embassy or consulate of Czechia in
                  your home country for a complete list of requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Czechia student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity of a student visa for the Czech Republic depends on
                the duration of your studies. If you are planning to study in
                the Czech Republic for less than 180 days, you will be issued a
                short-term visa. If you are planning to study in the Czech
                Republic for more than 180 days, you will be issued a long-term
                visa.
                <br />
                <br />
                The price of a student visa for the Czech Republic varies
                depending on the type of visa you need and the country in which
                you are applying. Short-term visas typically cost around 60 EUR,
                while long-term visas can cost up to 100 EUR. You may also be
                required to pay additional fees for processing and handling.
                <br />
                <br />
                It is best to check with the Embassy or Consulate of the Czech
                Republic in your home country for the most up-to-date
                information on visa fees.
                <br />
                <br />
                <span className="font-bold">
                  It is advisable to check with the embassy or consulate of
                  Czechia in your home country for more information on the
                  validity and price of student visas for Czechia. You should
                  also be prepared to pay any other fees that may be required,
                  such as fees for medical exams or police clearance
                  certificates.
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

export default CzechRepublic;
