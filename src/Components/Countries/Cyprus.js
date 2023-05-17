import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Cyprus = () => {
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
        <title>Cyprus</title>
        <meta name="description" content="Cyprus" />
        <meta
          name="keywords"
          content="Cyprus travel visa, Cyprus work visa, Cyprus study visa, How to apply for an Cyprus visa, Cyprus visa requirements, Cyprus tourist visa, Cyprus student visa, Cyprus business visa, Cyprus visa processing time, Cyprus visa application process, Cyprus visa for Americans, Cyprus visa for Europeans, Cyprus visa for Cyprusns, Cyprus visa for Canadians, Cyprus visa for Indians, Cyprus visa for Chinese, Cyprus visa for Africans, Cyprus visa for Asians, Cyprus visa for South Americans, Cyprus visa for Middle Easterners, Cyprus visa for UK citizens, Cyprus visa for EU citizens, Cyprus visa for Schengen area, Cyprus visa for non-EU citizens, Cyprus visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Cyprus
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Cyprus is an island country located in the eastern Mediterranean
              Sea. It is well known for its beautiful beaches, its rich cultural
              heritage, and its warm climate. Cyprus is known for its many
              stunning beaches, which are popular among tourists, and its many
              national parks and protected areas, which are home to a rich array
              of plant and animal life. The country is also known for its
              delicious cuisine, which features a variety of fresh, local
              ingredients, and its thriving wine industry, which produces some
              of the best wines in the region. Some other things that Cyprus is
              known for include its vibrant arts and music scene, and its many
              historical and cultural attractions, such as the ancient city of
              Paphos and the Troodos Mountains.
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
                Who can enter Cyprus without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Cyprus is a member of the European Union (EU) and the Schengen
                Area, which allows citizens of certain countries to enter Cyprus
                without a visa for stays of up to 90 days in any 180-day period.
                <br />
                <br />
                The countries whose citizens are allowed to enter Cyprus
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
                  entering Cyprus, depending on the purpose of their visit and
                  the length of their stay.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Cyprus Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Cyprus, you will need to submit the
                following documents:
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
                ● Proof of accommodation in Cyprus, such as a hotel reservation
                or a letter of invitation from a host in Cyprus.
                <br />
                <br />
                ● Proof of sufficient funds to cover your expenses during your
                stay in Cyprus, such as bank statements or a letter from your
                employer stating that your expenses will be covered.
                <br />
                <br />
                ● A letter explaining the purpose of your visit to Cyprus,
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
                  purpose of your visit to Cyprus. It is advisable to check with
                  the embassy or consulate of Cyprus in your home country for a
                  complete list of requirements.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Cyprus Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Cyprus, you will need to follow the
                steps below:
                <br />
                <br />
                ● Determine the type of visa you need: There are several
                different types of visas available for Cyprus, including tourist
                visas, business visas, student visas, and work visas. Choose the
                visa that is most appropriate for your purpose of visit.
                <br />
                <br />
                ● Check the requirements: Make sure you have all the necessary
                documents and information to complete your visa application.
                This may include your passport, photographs, proof of
                accommodation, proof of sufficient funds, and a letter
                explaining the purpose of your visit.
                <br />
                <br />
                ● Complete the application form: Fill out the visa application
                form and make sure to provide accurate and up-to-date
                information.
                <br />
                <br />
                ● Submit the application: Submit your completed application,
                along with all required documents, at the embassy or consulate
                of Cyprus in your home country. You may be required to attend an
                interview as part of the application process.
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
                How much time can I stay in Cyprus?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are allowed to stay in Cyprus depends on
                the type of visa you have obtained and the purpose of your
                visit.
                <br />
                <br />
                If you are a citizen of an EU or EEA country, or of a country
                that is part of the Schengen Area, you can enter Cyprus without
                a visa and stay for up to 90 days in any 180-day period.
                <br />
                <br />
                If you have a tourist visa, you will typically be allowed to
                stay in Cyprus for up to 90 days. Business visas and work visas
                may allow for longer stays, depending on the specific purpose
                and duration of your visit.
                <br />
                <br />
                If you are a student or are working in Cyprus, you may be able
                to obtain a residence permit, which allows you to stay in the
                country for a longer period of time.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the length of your stay in Cyprus
                  is strictly limited by your visa. Overstaying your visa can
                  result in fines, deportation, and other consequences. It is
                  important to adhere to the terms of your visa and leave the
                  country before it expires.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Cyprus?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                According to a decision by the Council of Ministers, as of 1st
                June 2022, all travelers arriving in the Republic of Cyprus,
                irrespective of their country of origin, will not be required to
                present a valid certificate of vaccination or recovery or a
                negative result from a PCR or antigen rapid test.
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
                A diplomatic passport is a special type of passport that is
                issued to diplomats and other government officials who are
                traveling abroad on official business. Diplomatic passports are
                issued by the country's foreign affairs ministry and are
                typically valid for a longer period of time than regular
                passports.
                <br />
                <br />
                In Cyprus, diplomatic passports are issued to diplomats,
                government officials, and other individuals who are traveling
                abroad on official business on behalf of the Cypriot government.
                Holders of diplomatic passports are typically entitled to
                certain privileges and immunities while traveling abroad, such
                as exemption from immigration controls and visa requirements.
                <br />
                <br />
                <span className="font-bold">
                  To obtain a diplomatic passport in Cyprus, you must be a
                  diplomat or a government official and be traveling on official
                  business. You will need to apply for the passport through the
                  Ministry of Foreign Affairs of Cyprus and provide evidence of
                  your official status and the purpose of your trip.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Cyprus?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a worker visa to work in Cyprus depends on your
                citizenship and the type of work you will be doing.
                <br />
                <br />
                If you are a citizen of an EU or EEA country, or of a country
                that is part of the Schengen Area, you have the right to work in
                Cyprus without a worker visa. You will only need to register
                with the authorities and obtain a residence permit if you plan
                to stay in the country for more than 90 days.
                <br />
                <br />
                If you are a citizen of a country outside the EU, EEA, and
                Schengen Area, you will generally need to obtain a worker visa
                and a residence permit in order to work in Cyprus.
                <br />
                <br />
                <span className="font-bold">
                  It is advisable to check with the embassy or consulate of
                  Cyprus in your home country for a complete list of
                  requirements. Processing times for worker visas and residence
                  permits can vary, so it is important to apply well in advance
                  of your intended travel date.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Cyprus Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Cyprus, you will need to
                follow the steps below:
                <br />
                <br />
                ● Determine your eligibility: To be eligible for a worker visa
                in Cyprus, you must have a job offer from an employer in Cyprus
                and meet the other requirements for a worker visa, such as
                having a clean criminal record and being in good health.
                <br />
                <br />
                ● Gather the required documents: You will need to provide a
                range of documents as part of your worker visa application,
                including your passport, photographs, a letter from your
                employer, a copy of your employment contract, and proof of
                sufficient funds to support yourself during your stay in Cyprus.
                <br />
                <br />
                ● Complete the application form: Fill out the worker visa
                application form and make sure to provide accurate and
                up-to-date information.
                <br />
                <br />
                ● Submit the application: Submit your completed application,
                along with all required documents, at the embassy or consulate
                of Cyprus in your home country. You may be required to attend an
                interview as part of the application process.
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
                Types of Cyprus Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available for
                individuals who want to work in Cyprus, depending on the type of
                work they will be doing and the length of their stay.
                <br />
                <br />
                Some of the main types of worker visas available in Cyprus are:
                <br />
                <br />
                <span className="font-bold">Temporary worker visa</span>
                : This type of visa is suitable for individuals who are coming
                to Cyprus to work for a limited period of time, such as seasonal
                workers or interns.
                <br />
                <br />
                <span className="font-bold">Highly skilled worker visa</span>
                : This type of visa is designed for individuals who have
                specialized skills or expertise and are coming to Cyprus to work
                in a highly skilled occupation.
                <br />
                <br />
                <span className="font-bold">Self-employed worker visa</span>
                : This type of visa is suitable for individuals who are coming
                to Cyprus to start their own business or to work as a
                freelancer.
                <br />
                <br />
                <span className="font-bold">Work and travel visa</span>
                : This type of visa allows individuals to work and travel in
                Cyprus for a limited period of time, usually up to six months.
                <br />
                <br />
                <span className="font-bold">Residence and work permit</span>
                : This type of permit allows individuals to work and live in
                Cyprus for an extended period of time, usually up to five years.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the type of worker visa you will
                  need depends on the specific circumstances of your work and
                  stay in Cyprus. It is advisable to check with the embassy or
                  consulate of Cyprus in your home country for more information
                  on the different types of worker visas available and which one
                  is most suitable for you.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Cyprus Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Cyprus, you will need to
                submit the following documents:
                <br />
                <br />
                ● A completed and signed worker visa application form.
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
                ● A letter from your employer in Cyprus stating the details of
                your employment, including your job title, duties, and salary.
                <br />
                <br />
                ● A copy of your employment contract.
                <br />
                <br />
                ● A police clearance certificate from your home country.
                <br />
                <br />
                ● A medical certificate.
                <br />
                <br />
                ● Evidence of sufficient funds to support yourself during your
                stay in Cyprus, such as bank statements.
                <br />
                <br />
                <span className="font-bold">
                  You may also be required to provide other documents depending
                  on the specific type of worker visa you are applying for and
                  the nature of your work in Cyprus. It is advisable to check
                  with the embassy or consulate of Cyprus in your home country
                  for a complete list of requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Cyprus?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Cyprus, you will need to
                submit your application at the embassy or consulate of Cyprus in
                your home country. It is advisable to apply for your worker visa
                well in advance of your intended travel date, as processing
                times can vary.
                <br />
                <br />
                You should also be prepared to pay a fee to cover the cost of
                processing your worker visa application. The fee may vary
                depending on the type of worker visa you are applying for and
                the embassy or consulate you are applying at.
                <br />
                <br />
                It is important to note that you cannot apply for a worker visa
                from within Cyprus. You must apply for the visa from your home
                country before you travel to Cyprus.
                <br />
                <br />
                <span className="font-bold">
                  If you are already in Cyprus and you want to extend your stay
                  or change the purpose of your visit, you will need to apply
                  for a new worker visa or a residence permit at the Civil
                  Registry and Migration Department in Cyprus.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Cyprus?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a visa to study in Cyprus depends on your
                citizenship and the length of your stay.
                <br />
                <br />
                If you are a citizen of an EU or EEA country, or of a country
                that is part of the Schengen Area, you have the right to study
                in Cyprus without a student visa. You will only need to register
                with the authorities and obtain a residence permit if you plan
                to stay in the country for more than 90 days.
                <br />
                <br />
                If you are a citizen of a country outside the EU, EEA, and
                Schengen Area, you will generally need to obtain a student visa
                in order to study in Cyprus.
                <br />
                <br />
                <span className="font-bold">
                  It is advisable to check with the embassy or consulate of
                  Cyprus in your home country for a complete list of
                  requirements. Processing times for student visas can vary, so
                  it is important to apply well in advance of your intended
                  travel date.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Cyprus student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Cyprus, you will need to
                follow the steps below:
                <br />
                <br />
                ● Determine your eligibility: To be eligible for a student visa
                in Cyprus, you must be accepted to study at a recognized
                educational institution in Cyprus and meet the other
                requirements for a student visa, such as having a clean criminal
                record and being in good health.
                <br />
                <br />
                ● Gather the required documents: You will need to provide a
                range of documents as part of your student visa application,
                including your passport, photographs, proof of acceptance at a
                educational institution, and evidence of sufficient funds to
                cover your living expenses during your stay in Cyprus.
                <br />
                <br />
                ● Complete the application form: Fill out the student visa
                application form and make sure to provide accurate and
                up-to-date information.
                <br />
                <br />
                ● Submit the application: Submit your completed application,
                along with all required documents, at the embassy or consulate
                of Cyprus in your home country. You may be required to attend an
                interview as part of the application process.
                <br />
                <br />
                ● Wait for a decision: It may take several weeks or even months
                for your application to be processed. Do not make any travel
                arrangements until you have received a decision on your student
                visa application.
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
                Cyprus student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Cyprus, you will need to
                submit the following documents:
                <br />
                <br />
                ● A valid passport or travel document. Your passport must be
                valid for at least three months beyond the intended date of your
                return to your home country.
                <br />
                <br />
                ● A completed and signed student visa application form.
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
                ● Proof of acceptance at a recognized educational institution in
                Cyprus. This may include a letter of acceptance or a copy of
                your enrollment documents.
                <br />
                <br />
                ● Evidence of sufficient funds to cover your living expenses
                during your stay in Cyprus, such as bank statements or a letter
                from your sponsor.
                <br />
                <br />
                ● A medical certificate.
                <br />
                <br />
                ● A police clearance certificate from your home country.
                <br />
                <br />
                <span className="font-bold">
                  You may also be required to provide other documents depending
                  on the specific circumstances of your study in Cyprus. It is
                  advisable to check with the embassy or consulate of Cyprus in
                  your home country for a complete list of requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Cyprus student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Cyprus depend on
                the specific circumstances of your study in Cyprus and the
                length of your stay.
                <br />
                <br />
                Student visas for Cyprus are typically valid for the duration of
                your studies, up to a maximum of five years. The visa may be
                renewable, depending on the specific terms of your stay and the
                progress of your studies.
                <br />
                <br />
                The price of a student visa for Cyprus may vary depending on the
                embassy or consulate you are applying at and the type of visa
                you are applying for. You should be prepared to pay a fee to
                cover the cost of processing your student visa application.
                <br />
                <br />
                <span className="font-bold">
                  It is advisable to check with the embassy or consulate of
                  Cyprus in your home country for more information on the
                  validity and price of student visas for Cyprus. You should
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

export default Cyprus;
