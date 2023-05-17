import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const VaticanCity = () => {
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
        <title>Vatican City</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="Vatican City travel visa, Vatican City work visa, Vatican City study visa, How to apply for an Vatican City visa, Vatican City visa requirements, Vatican City tourist visa, Vatican City student visa, Vatican City business visa, Vatican City visa processing time, Vatican City visa application process, Vatican City visa for Americans, Vatican City visa for Europeans, Vatican City visa for Sudanns, Vatican City visa for Canadians, Vatican City visa for Sudanns, Vatican City visa for Chinese, Vatican City visa for Africans, Vatican City visa for Asians, Vatican City visa for South Americans, Vatican City visa for Middle Easterners, Vatican City visa for UK citizens, Vatican City visa for EU citizens, Vatican City visa for Schengen area, Vatican City visa for non-EU citizens, Vatican City visa fees and charges"

    
        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Vatican City
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Vatican City is a small, independent city-state located within
              Rome, Italy. It is known for its rich history and cultural
              significance as the center of the Roman Catholic Church. It is
              home to a number of famous landmarks, including St. Peter's
              Basilica, the Vatican Museums, and the Sistine Chapel, which
              attract millions of visitors each year and make tourism a
              significant contributor to the local economy. Vatican City is also
              known for its art and architecture, with a vast collection of art
              and artifacts in the Vatican Museums and famous frescoes in the
              Sistine Chapel. In addition, it is known for its political and
              diplomatic role in the world, with the Pope often seen as a moral
              leader on matters of international importance. As the smallest
              country in the world in terms of both size and population, Vatican
              City is a unique and fascinating place.
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
                Who can enter Vatican City without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                As a sovereign city-state, Vatican City has the authority to
                determine its own visa and immigration policies. In general,
                visitors to Vatican City must have a valid passport and may need
                to obtain a visa in order to enter, depending on their
                nationality and the length of their stay.
                <br /> <br /> However, there are a few exceptions to this rule.
                The following categories of individuals are generally allowed to
                enter Vatican City without a visa:
                <br /> <br />● Citizens of European Union (EU) and European
                Economic Area (EEA) countries: Citizens of EU and EEA countries,
                as well as Switzerland, are allowed to enter, stay, and work in
                Vatican City without a visa for up to 90 days within a 180-day
                period.
                <br /> <br />● Holders of a Schengen visa: If you hold a valid
                Schengen visa, you may be allowed to enter Vatican City without
                obtaining a separate visa. The Schengen area consists of 26
                European countries that have abolished passport controls at
                their mutual borders.
                <br /> <br />● Holders of a Vatican City residence permit: If
                you hold a valid residence permit issued by Vatican City, you
                may be allowed to enter and stay in the city without a visa.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Vatican City Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Vatican City is a sovereign city-state and has its own visa
                requirements. The process of obtaining a visa for Vatican City
                can vary depending on the purpose of your visit and your country
                of origin. Here are some general documents that you may need to
                provide when applying for a Vatican City visa:
                <br /> <br />● A valid passport with at least 6 months remaining
                before expiry.
                <br /> <br />● A completed visa application form.
                <br /> <br />● A recent passport-size photograph.
                <br /> <br />● A letter of invitation from an organization or
                individual in Vatican City, if required.
                <br /> <br />● Proof of sufficient funds to cover your expenses
                during your stay in Vatican City.
                <br /> <br />● A travel itinerary, including details of your
                travel plans within Vatican City.
                <br /> <br />● A health insurance policy that covers you for the
                duration of your stay in Vatican City.
                <br /> <br />● Proof of accommodation in Vatican City, such as a
                hotel reservation or rental agreement.
                <br /> <br />● Any additional documents required by the Vatican
                City embassy or consulate where you are applying.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements may vary
                  depending on the type of visa you are applying for and the
                  country where you are applying from. It's recommended to check
                  with the Vatican City embassy or consulate in your home
                  country or the Vatican City immigration office for more
                  detailed information and requirements.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It's also important to keep in mind that the process of
                  obtaining a Vatican City visa can take several weeks or even
                  months, so it's recommended to start the process well in
                  advance of your planned departure date.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Vatican City Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Vatican City visa, you will need to follow the
                steps below:
                <br /> <br />● Determine your visa requirements: The first step
                in applying for a Vatican City visa is to determine whether you
                need a visa to enter the city-state. This will depend on your
                nationality, the length of your stay, and the purpose of your
                visit. You can check the visa requirements for Vatican City on
                the website of the Vatican City embassy or consulate in your
                country of residence.
                <br /> <br />● Gather the required documents: Once you have
                determined that you need a visa to enter Vatican City, you will
                need to gather the required documents for your visa application.
                These may include a valid passport or travel document, a
                completed and signed visa application form, passport-sized
                photos, and any other documents required by the Vatican City
                authorities.
                <br /> <br />● Schedule an appointment: You will need to
                schedule an appointment at the Vatican City embassy or consulate
                where you will be applying for your visa. You can usually do
                this online or by contacting the embassy or consulate directly.
                <br /> <br />
                ● Submit your application: During your appointment, you will
                need to submit your completed visa application form and all
                required documents. You may also need to undergo an interview
                with a consular officer.
                <br /> <br />● Wait for a decision: The processing time for a
                Vatican City visa can vary, but it can take several weeks or
                even months. You should not make any travel arrangements until
                you have received a decision on your visa application.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Vatican City?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Vatican City will depend on
                the type of visa you hold and the specific policies of the
                Vatican City authorities.
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of an European Union (EU) or European
                  Economic Area (EEA) country, or Switzerland, you may be
                  allowed to enter, stay, and work in Vatican City without a
                  visa for up to 90 days within a 180-day period.
                </span>
                <br /> <br />
                <span className="font-bold">
                  If you hold a Schengen visa, you may be allowed to enter
                  Vatican City and stay for up to 90 days within a 180-day
                  period, depending on the specific type of visa you hold. The
                  Schengen area consists of 26 European countries that have
                  abolished passport controls at their mutual borders.
                </span>
                <br /> <br />
                <span className="font-bold">
                  If you hold a long-stay visa or residence permit issued by
                  Vatican City, the length of time you can stay in the
                  city-state will depend on the specific type of visa or permit
                  you hold.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Vatican City?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Vatican City is open for all visitors.
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
                Informations about Diplomatic Passport!
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                A diplomatic passport is a special type of passport issued to
                diplomats and other individuals representing their country's
                interests abroad. In Vatican City, diplomatic passports are
                issued to members of the Holy See's diplomatic corps and to
                other individuals who have been accredited to represent the Holy
                See in international organizations or at the Vatican City
                embassy of their country.
                <br /> <br /> Holders of a diplomatic passport are entitled to
                certain privileges and immunities while abroad, as set out in
                the Vienna Convention on Diplomatic Relations. These privileges
                and immunities may include immunity from prosecution, exemption
                from certain taxes and customs duties, and the right to use
                diplomatic channels for the transmission of official
                correspondence.
                <br /> <br />
                <span className="font-bold">
                  In addition to serving as a travel document, a diplomatic
                  passport also serves as proof of the holder's status as a
                  diplomat or representative of the Holy See. It is generally
                  issued for a limited period of time and must be renewed when
                  it expires.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Vatican City?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                It is generally not possible for foreign citizens to work in
                Vatican City without first obtaining a work permit and a
                residence permit.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Vatican City Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Vatican City, you will need to
                follow the steps below:
                <br /> <br />● Find a job: The first step in applying for a
                worker visa in Vatican City is to find a job in the city-state.
                You will need to have a job offer from an employer in Vatican
                City in order to apply for a worker visa.
                <br /> <br />● Meet the requirements: You will need to make sure
                you meet the requirements for a worker visa in Vatican City,
                including having a valid passport or travel document, being in
                good health, and having sufficient financial means to support
                yourself during your stay in the city-state.
                <br /> <br />● Gather the required documents: You will need to
                gather the required documents for a worker visa in Vatican City,
                which may include a completed and signed visa application form,
                a copy of your job offer and employment contract, passport-sized
                photos, and any other documents required by the Vatican City
                authorities.
                <br /> <br />● Schedule an appointment: You will need to
                schedule an appointment at the Vatican City embassy or consulate
                where you will be applying for your worker visa. You can usually
                do this online or by contacting the embassy or consulate
                directly.
                <br /> <br />● Submit your application: During your appointment,
                you will need to submit your completed visa application form and
                all required documents. You may also need to undergo an
                interview with a consular officer.
                <br /> <br />
                ●Wait for a decision: The processing time for a worker visa in
                Vatican City can vary, but it can take several weeks or even
                months. You should not make any travel arrangements until you
                have received a decision on your worker visa application.
                <br /> <br />● Obtain a residence permit: If your worker visa
                application is approved, you will need to apply for a residence
                permit in order to live and work in Vatican City. You can
                usually apply for a residence permit at the same time as your
                worker visa application or after you arrive in the city-state.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Vatican City Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In Vatican City, there are several types of worker visas that
                may be available to foreign citizens seeking to work in the
                city-state. These visas may include:
                <br /> <br />● Temporary worker visa: A temporary worker visa
                allows you to work in Vatican City for a limited period of time,
                usually up to one year. This type of visa may be suitable if you
                have a temporary job offer in the city-state or if you are
                working on a specific project.
                <br /> <br />● Seasonal worker visa: A seasonal worker visa
                allows you to work in Vatican City for a specific period of
                time, usually up to six months, during a particular season of
                the year. This type of visa may be suitable if you have a job
                offer in the city-state that is only available for a specific
                period of time.
                <br /> <br />● Self-employed worker visa: A self-employed worker
                visa allows you to work in Vatican City as a self-employed
                individual, either on your own or as part of a company. This
                type of visa may be suitable if you are an entrepreneur or
                business owner who is looking to start or expand a business in
                the city-state.
                <br /> <br />● Intra-corporate transferee visa: An
                intra-corporate transferee visa allows you to work in Vatican
                City as an employee of a company that is based in another
                country. This type of visa may be suitable if you are
                transferring to a new job in the city-state within the same
                company.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Vatican City Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Vatican City, you will need to
                provide the following documents:
                <br /> <br />● A valid passport or travel document: Your
                passport or travel document must be valid for at least three
                months beyond the date you plan to leave Vatican City. It must
                also have at least two blank pages for visas.
                <br /> <br />● A completed and signed visa application form: You
                will need to fill out a visa application form and sign it. You
                can usually download the application form from the website of
                the Vatican City embassy or consulate where you will be applying
                for your worker visa.
                <br /> <br />● Two recent passport-sized photos: You will need
                to provide two recent passport-sized photos with your worker
                visa application. The photos must be taken against a white
                background and must meet the specific requirements for passport
                photos.
                <br /> <br />● A copy of your job offer and employment contract:
                You will need to provide a copy of your job offer and employment
                contract from your employer in Vatican City. The contract should
                specify the terms of your employment, including your job duties,
                salary, and duration of your employment.
                <br /> <br />● Evidence of your financial means: You will need
                to provide evidence that you have sufficient financial means to
                support yourself during your stay in Vatican City. This may
                include bank statements, pay slips, or a letter from your
                employer stating that they will cover your expenses while you
                are in the city-state.
                <br /> <br />● A medical certificate: You may need to provide a
                medical certificate stating that you are in good health and do
                not have any infectious diseases.
                <br /> <br />● A criminal record certificate: You may need to
                provide a criminal record certificate from your country of
                origin and any country you have lived in for more than six
                months in the past 10 years.
                <br /> <br />● Any other documents required by the Vatican City
                embassy or consulate where you will be applying for your worker
                visa. <br /> <br />
                <span className="font-bold">
                  It's important to note that the specific documents required
                  for a worker visa in Vatican City may vary depending on your
                  individual circumstances and the purpose of your stay in the
                  city-state. You should check with the Vatican City embassy or
                  consulate where you will be applying for your worker visa to
                  confirm the exact documents you need to provide.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Vatican City?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Vatican City, you will need to
                schedule an appointment at the Vatican City embassy or consulate
                in your country of residence. You can usually do this online or
                by contacting the embassy or consulate directly.
                <br /> <br />
                <span className="font-bold">
                  It's important to note that the process for applying for a
                  worker visa in Vatican City may vary depending on the specific
                  requirements of the Vatican City authorities and the policies
                  of the embassy or consulate where you will be applying. You
                  should check with the embassy or consulate to confirm the
                  exact process for applying for a worker visa in the
                  city-state.
                </span>
                <br /> <br />
                <span className="font-bold">
                  You should also make sure to apply for your worker visa well
                  in advance of your planned departure date, as the processing
                  time for a worker visa in Vatican City can vary, but it can
                  take several weeks or even months. You should not make any
                  travel arrangements until you have received a decision on your
                  worker visa application.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Vatican City?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                It is generally not possible for foreign citizens to study in
                Vatican City without first obtaining a student visa.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Vatican City student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Vatican City, you will need to
                follow the steps below: Find a program of study: The first step
                in applying for a student visa in Vatican City is to find a
                program of study at a recognized educational institution in the
                city-state. You will need to be accepted into a program of study
                in order to apply for a student visa.
                <br /> <br />● Meet the requirements: You will need to make sure
                you meet the requirements for a student visa in Vatican City,
                including having a valid passport or travel document, being in
                good health, and having sufficient financial means to support
                yourself during your stay in the city-state.
                <br /> <br />● Gather the required documents: You will need to
                gather the required documents for a student visa in Vatican
                City, which may include a completed and signed visa application
                form, proof of acceptance into a program of study,
                passport-sized photos, and any other documents required by the
                Vatican City authorities.
                <br /> <br />● Schedule an appointment: You will need to
                schedule an appointment at the Vatican City embassy or consulate
                where you will be applying for your student visa. You can
                usually do this online or by contacting the embassy or consulate
                directly.
                <br /> <br />● Submit your application: During your appointment,
                you will need to submit your completed student visa application
                form and all required documents. You may also need to undergo an
                interview with a consular officer.
                <br /> <br />● Wait for a decision: The processing time for a
                student visa in Vatican City can vary, but it can take several
                weeks or even months. You should not make any travel
                arrangements until you have received a decision on your student
                visa application.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Vatican City student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Vatican City, you will need to
                meet the following requirements:
                <br /> <br />● A valid passport or travel document: Your
                passport or travel document must be valid for at least three
                months beyond the date you plan to leave Vatican City. It must
                also have at least two blank pages for visas.
                <br /> <br />● Proof of acceptance into a program of study: You
                will need to provide proof that you have been accepted into a
                program of study at a recognized educational institution in
                Vatican City. This may include a letter of acceptance from the
                institution or a copy of your enrollment documents.
                <br /> <br />● Evidence of your financial means: You will need
                to provide evidence that you have sufficient financial means to
                support yourself during your stay in Vatican City. This may
                include bank statements, pay slips, or a letter from your
                sponsor stating that they will cover your expenses while you are
                in the city-state.
                <br /> <br />● A medical certificate: You may need to provide a
                medical certificate stating that you are in good health and do
                not have any infectious diseases.
                <br /> <br />● A criminal record certificate: You may need to
                provide a criminal record certificate from your country of
                origin and any country you have lived in for more than six
                months in the past 10 years.
                <br /> <br />● Any other documents required by the Vatican City
                embassy or consulate where you will be applying for your student
                visa.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Vatican City student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Vatican City will
                depend on the specific terms of your program of study and the
                policies of the Vatican City authorities.
                <br /> <br /> The length of time your student visa is valid will
                depend on the duration of your program of study. If you are
                enrolled in a program that is less than 90 days in duration,
                your student visa will usually be valid for the duration of your
                program. If you are enrolled in a program that is more than 90
                days in duration, your student visa may be valid for up to one
                year or the duration of your program, whichever is shorter.
                <br /> <br /> The price of a student visa in Vatican City may
                vary depending on the specific requirements of the Vatican City
                authorities and the policies of the embassy or consulate where
                you will be applying for your student visa. You may need to pay
                a fee to cover the cost of processing your student visa
                application.
                <br /> <br />
                <span className="font-bold">
                  It's important to note that the validity and price of a
                  student visa in Vatican City may vary depending on your
                  individual circumstances and the specific requirements of the
                  Vatican City authorities. You should check with the Vatican
                  City embassy or consulate in your country of residence to
                  confirm the exact validity and price of a student visa in the
                  city-state.
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

export default VaticanCity;
