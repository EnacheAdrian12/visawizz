import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Lithuania = () => {
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
        <title>Lithuania</title>
        <meta name="description" content="Lithuania" />
        <meta
          name="keywords"
          content="Lithuania travel visa, Lithuania work visa, Lithuania study visa, How to apply for an Lithuania visa, Lithuania visa requirements, Lithuania tourist visa, Lithuania student visa, Lithuania business visa, Lithuania visa processing time, Lithuania visa application process, Lithuania visa for Americans, Lithuania visa for Europeans, Lithuania visa for Lithuanians, Lithuania visa for Canadians, Lithuania visa for Lithuanians, Lithuania visa for Chinese, Lithuania visa for Africans, Lithuania visa for Asians, Lithuania visa for South Americans, Lithuania visa for Middle Easterners, Lithuania visa for UK citizens, Lithuania visa for EU citizens, Lithuania visa for Schengen area, Lithuania visa for non-EU citizens, Lithuania visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Lithuania
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Lithuania is a country in Northern Europe, known for its beautiful
              forests, lakes, and beaches. The country has a rich cultural
              heritage, with roots in the ancient Baltic tribes who first
              settled the area. Today, Lithuania is known for its vibrant music
              and arts scene, and its rich folk traditions that have been
              preserved and celebrated by generations of Lithuanians. The
              capital city of Vilnius is a major cultural and economic hub, with
              many historic buildings and museums, as well as a bustling
              nightlife and vibrant contemporary arts scene. Lithuania is also
              known for its natural beauty, with many national parks and
              protected areas that are popular with hikers and nature lovers.
              The country is a popular tourist destination, with many visitors
              coming to experience its rich history and beautiful landscapes.
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
                Who can enter Lithuania without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Lithuania is a member of the European Union and is a part of the
                Schengen Area, which allows for free movement of people within
                the area. This means that citizens of other EU countries and
                countries that are part of the Schengen Agreement do not need a
                visa to enter Lithuania for stays of up to 90 days in any
                180-day period.
                <br />
                <br />
                Citizens of certain countries, including the United States,
                Canada, and Australia, do not need a visa to enter Lithuania for
                stays of up to 90 days in any 180-day period for tourist or
                business purposes.
                <br />
                <br />
                For stays longer than 90 days, or for other purposes such as
                work or study, citizens of these countries will need to obtain a
                visa or residence permit before arriving in Lithuania.
                <br />
                <br />
                <span className="font-bold">
                  It is always a good idea to check the latest information on
                  visa requirements before planning your trip, as these
                  requirements can change. You can find more information on the
                  Lithuanian embassy website or on the website of the European
                  Union.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Lithuania Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Lithuania, you will need to provide
                the following documents:
                <br />
                <br />
                ● A valid passport or travel document. Your passport must be
                valid for at least three months beyond the date you plan to
                leave Lithuania.
                <br />
                <br />
                ● A completed and signed visa application form.
                <br />
                <br />
                ● Two recent passport-size photographs.
                <br />
                <br />
                ● A letter of invitation or a confirmation of hotel
                reservations, if applicable.
                <br />
                <br />
                ● Evidence of sufficient financial means to support yourself
                during your stay in Lithuania, such as a bank statement or a
                letter from your employer.
                <br />
                <br />
                ● Proof of travel insurance.
                <br />
                <br />
                ● A fee for the processing of your visa application.
                <br />
                <br />
                In addition to these general requirements, you may also need to
                provide additional documents depending on the purpose of your
                trip and your individual circumstances. For example, if you are
                traveling for work or study, you may need to provide a work
                contract or a letter of acceptance from a Lithuanian educational
                institution.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  take several weeks, so you should start the process well in
                  advance of your planned trip. You should also be prepared to
                  attend an interview at the Lithuanian embassy or consulate as
                  part of the application process.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Lithuania Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Lithuania, you will need to follow
                the steps below:
                <br />
                <br />
                ● Determine the type of visa you need. There are several types
                of visas available for Lithuania, including tourist visas,
                business visas, work visas, and student visas. Choose the type
                of visa that best fits the purpose of your trip.
                <br />
                <br />
                ● Gather the required documents. As mentioned earlier, you will
                need to provide a completed and signed visa application form,
                two passport-size photographs, a valid passport or travel
                document, and other documents depending on the purpose of your
                trip and your individual circumstances.
                <br />
                <br />
                ● Pay the visa fee. Fees for visa processing vary depending on
                the type of visa you are applying for and your nationality. You
                will need to pay the fee when you submit your visa application.
                <br />
                <br />
                ● Submit your application. You can submit your visa application
                in person at a Lithuanian embassy or consulate, or you may be
                able to apply online or by mail if you are eligible.
                <br />
                <br />
                ● Wait for a decision on your application. It can take several
                weeks to process a visa application, so you should start the
                process well in advance of your planned trip.
                <br />
                <br />
                ● Collect your visa. If your visa application is approved, you
                will need to collect your visa in person or have it mailed to
                you. You will need to present your visa when you enter
                Lithuania.
                <br />
                <br />
                <span className="font-bold">
                  It is important to carefully follow the instructions for
                  applying for a Lithuania visa and to provide all required
                  documents in order to increase your chances of obtaining a
                  visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Lithuania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                As a holder of a Lithuanian visa, you are allowed to stay in the
                country for a maximum of 90 days within a 180-day period. This
                means that you can stay in Lithuania for up to 90 days, and then
                you must leave the country for at least 90 days before
                returning. The 180-day period is calculated from the date of
                your first entry into the Schengen Area.
                <br />
                <br />
                If you want to stay in Lithuania for a longer period of time, or
                if you want to work or study in the country, you will need to
                apply for a residence permit. Residence permits are issued for a
                specific purpose and are typically valid for up to one year,
                although some permits may be issued for a shorter period of
                time. To apply for a residence permit, you will need to have a
                valid reason for staying in Lithuania, such as work, study, or
                family reunification.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules for staying in
                  Lithuania may vary depending on your nationality and the
                  purpose of your trip. You should check with the Lithuanian
                  embassy or consulate for the most up-to-date information on
                  visa and residence permit requirements.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Lithuania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                As of May 1, Lithuania removed all COVID-19-related requirements
                for all travelers. It means that travelers arriving in Lithuania
                from any country in the world will no longer need to take the
                COVID-19 test before the trip, even if they are not vaccinated
                or recovered from COVID-19. Filling a questionnaire of the
                National Public Health Centre is also no longer required. As all
                touristic attractions are open in Lithuania, you can explore the
                whole country easily and mask-free.
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
                diplomats and other government officials for official travel on
                behalf of their government. Diplomatic passports are issued by
                the Ministry of Foreign Affairs of the country that the diplomat
                represents.
                <br />
                <br />
                In Lithuania, diplomats and other government officials who are
                traveling on official business may be eligible to apply for a
                diplomatic passport. To apply for a diplomatic passport, you
                will need to submit an application to the Ministry of Foreign
                Affairs. You will need to provide proof of your identity, your
                official status as a diplomat or government official, and the
                purpose of your trip.
                <br />
                <br />
                Diplomatic passports are issued to diplomats and other
                government officials who are traveling on official business and
                are not intended for personal travel. Diplomatic passports are
                usually valid for a period of five years and may be renewed
                before they expire.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that diplomatic passports do not
                  exempt the holder from visa requirements. Diplomats and other
                  government officials who are traveling to Lithuania on
                  official business will still need to obtain a visa if they are
                  from a country that requires one. You should check with the
                  Lithuanian embassy or consulate for the most up-to-date
                  information on visa requirements for your specific situation.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Lithuania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to work in Lithuania, you will need to obtain a
                worker visa. A worker visa is a type of visa that allows you to
                enter and work in Lithuania for a specific period of time.
                <br />
                <br />
                To apply for a worker visa, you will need to have a job offer
                from a Lithuanian employer. Your employer will need to apply for
                a work permit on your behalf, and once the permit is issued, you
                can apply for a worker visa.
                <br />
                <br />
                The worker visa application process can take several weeks to
                complete, so it is important to start the process well in
                advance of your planned trip. Once your worker visa is issued,
                you will be allowed to enter and work in Lithuania for the
                duration of your work permit.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that worker visas are only issued to
                  individuals who have a job offer and a work permit in
                  Lithuania. If you do not have a job offer and a work permit,
                  you will not be able to obtain a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Lithuania Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Lithuania, you will need to follow
                the steps below:
                <br />
                <br />
                ● Find a job in Lithuania. You will need to have a job offer
                from a Lithuanian employer in order to apply for a worker visa.
                <br />
                <br />
                ● Have your employer apply for a work permit. Your employer will
                need to apply for a work permit on your behalf. This process can
                take several weeks to complete.
                <br />
                <br />
                ● Gather the required documents. You will need to provide the
                following documents when you apply for a worker visa:
                <br />
                <br />
                <span className="font-bold">
                  - A valid passport or travel document.
                  <br />
                  - A completed and signed visa application form.
                  <br />
                  - Two recent passport-size photographs.
                  <br />
                  - A copy of your job offer or work contract.
                  <br />
                  - A copy of your employer's work permit.
                  <br />
                  - Evidence of sufficient financial means to support yourself
                  during your stay in Lithuania, such as a bank statement or a
                  letter from your employer.
                  <br />
                  - Proof of travel insurance.
                  <br />- A fee for the processing of your visa application.
                </span>
                <br />
                <br />
                ● Submit your application. You can submit your worker visa
                application in person at a Lithuanian embassy or consulate, or
                you may be able to apply online or by mail if you are eligible.
                <br />
                <br />● Wait for a decision on your application. It can take
                several weeks to process a worker visa application, so you
                should start the process well in advance of your planned trip.
                <br />
                <br />
                ● Collect your visa. If your worker visa application is
                approved, you will need to collect your visa in person or have
                it mailed to you. You will need to present your visa when you
                enter Lithuania.
                <br />
                <br />
                <span className="font-bold">
                  It is important to carefully follow the instructions for
                  applying for a Lithuania worker visa and to provide all
                  required documents in order to increase your chances of
                  obtaining a visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Lithuania Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available for Lithuania,
                depending on the purpose of your stay and the nature of your
                work. The main types of worker visas are:
                <br />
                <br />
                <span className="font-bold">Short-term worker visa</span>
                : This type of visa is issued for stays of up to six months and
                is intended for individuals who are coming to Lithuania to work
                on a specific project or for a specific employer.
                <br />
                <br />
                <span className="font-bold">Long-term worker visa</span>
                : This type of visa is issued for stays of more than six months
                and is intended for individuals who are coming to Lithuania to
                work on a long-term basis for a specific employer.
                <br />
                <br />
                <span className="font-bold">Seasonal worker visa</span>
                : This type of visa is issued for individuals who are coming to
                Lithuania to work in a specific seasonal occupation, such as
                agriculture or tourism.
                <br />
                <br />
                <span className="font-bold">Self-employed worker visa</span>
                : This type of visa is issued for individuals who are coming to
                Lithuania to work as self-employed individuals.
                <br />
                <br />
                <span className="font-bold">
                  Intra-corporate transferee visa
                </span>
                : This type of visa is issued for individuals who are being
                transferred within their company to work in Lithuania for a
                specific period of time.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the type of worker visa you are
                  eligible for will depend on the purpose of your stay and the
                  nature of your work in Lithuania. You should consult with your
                  employer and the Lithuanian embassy or consulate to determine
                  the type of worker visa that is most appropriate for your
                  situation.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Lithuania Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Lithuania, you will need to
                provide the following documents:
                <br />
                <br />
                ● A valid passport or travel document.
                <br />
                <br />
                ● A completed and signed visa application form.
                <br />
                <br />
                ● Two recent passport-size photographs.
                <br />
                <br />
                ● A copy of your job offer or work contract.
                <br />
                <br />
                ● A copy of your employer's work permit.
                <br />
                <br />
                ● Evidence of sufficient financial means to support yourself
                during your stay in Lithuania, such as a bank statement or a
                letter from your employer.
                <br />
                <br />
                ● Proof of travel insurance.
                <br />
                <br />
                ● A fee for the processing of your visa application.
                <br />
                <br />
                In addition to these general requirements, you may also need to
                provide additional documents depending on the specific type of
                worker visa you are applying for and your individual
                circumstances. For example, if you are applying for a
                self-employed worker visa, you may need to provide a business
                plan or other evidence of your self-employment.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  take several weeks, so you should start the process well in
                  advance of your planned trip. You should also be prepared to
                  attend an interview at the Lithuanian embassy or consulate as
                  part of the application process.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Lithuania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Lithuania, you will need to submit
                your application to a Lithuanian embassy or consulate in your
                home country. You can find a list of Lithuanian embassies and
                consulates on the website of the Ministry of Foreign Affairs of
                the Republic of Lithuania.
                <br />
                <br />
                You should apply for a worker visa as soon as you have received
                a job offer and your employer has applied for a work permit on
                your behalf. It is important to start the visa application
                process well in advance of your planned trip, as the process can
                take several weeks to complete.
                <br />
                <br />
                When you apply for a worker visa, you will need to provide all
                of the required documents and pay a fee for the processing of
                your application. You may also be required to attend an
                interview at the Lithuanian embassy or consulate as part of the
                application process.
                <br />
                <br />
                If your worker visa application is approved, you will need to
                collect your visa in person or have it mailed to you. You will
                need to present your visa when you enter Lithuania.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that worker visas are only issued to
                  individuals who have a job offer and a work permit in
                  Lithuania. If you do not have a job offer and a work permit,
                  you will not be able to obtain a worker visa.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Lithuania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to study in Lithuania for a period of time longer
                than 90 days, you will need to obtain a student visa. A student
                visa is a type of visa that allows you to enter and study in
                Lithuania for a specific period of time.
                <br />
                <br />
                To apply for a student visa, you will need to have been accepted
                to a Lithuanian educational institution. Your educational
                institution will provide you with the necessary documents and
                information on how to apply for a student visa.
                <br />
                <br />
                The student visa application process can take several weeks to
                complete, so it is important to start the process well in
                advance of your planned trip. Once your student visa is issued,
                you will be allowed to enter and study in Lithuania for the
                duration of your studies.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that student visas are only issued to
                  individuals who have been accepted to a Lithuanian educational
                  institution. If you are not enrolled in a Lithuanian
                  educational institution, you will not be able to obtain a
                  student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Lithuania Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Lithuania, you will need to
                follow the steps below:
                <br />
                <br />
                ● Enroll in a Lithuanian educational institution. You will need
                to have been accepted to a Lithuanian educational institution in
                order to apply for a student visa. Your educational institution
                will provide you with the necessary documents and information on
                how to apply for a student visa.
                <br />
                <br />
                ● Gather the required documents.
                <br />
                <br />
                ● Submit your application. You can submit your student visa
                application in person at a Lithuanian embassy or consulate, or
                you may be able to apply online or by mail if you are eligible.
                <br />
                <br />
                ● Attend an interview, if required. Some applicants may be
                required to attend an interview at the Lithuanian embassy or
                consulate as part of the visa application process.
                <br />
                <br />
                ● Wait for a decision on your application. It can take several
                weeks to process a student visa application, so you should start
                the process well in advance of your planned trip.
                <br />
                <br />
                ● Collect your visa. If your student visa application is
                approved, you will need to collect your visa in person or have
                it mailed to you. You will need to present your visa when you
                enter Lithuania.
                <br />
                <br />
                <span className="font-bold">
                  It is important to carefully follow the instructions for
                  applying for a Lithuania student visa and to provide all
                  required documents in order to increase your chances of
                  obtaining a visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Lithuania Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a student visa in Lithuania, you will need to
                meet the following requirements:
                <br />
                <br />
                ● You must have been accepted to a Lithuanian educational
                institution. You will need to provide a letter of acceptance
                from your educational institution as part of your visa
                application.
                <br />
                <br />
                ● You must have sufficient financial means to support yourself
                during your stay in Lithuania. This may include a bank statement
                or a letter from your sponsor indicating that you have
                sufficient funds to cover your expenses.
                <br />
                <br />
                ● You must have a valid passport or travel document. Your
                passport must be valid for at least three months beyond the date
                you plan to leave Lithuania.
                <br />
                <br />
                ● You must have a clean criminal record and be in good health.
                <br />
                <br />
                ● You must have health insurance that is valid in Lithuania.
                <br />
                <br />
                ● You must pay a fee for the processing of your visa
                application.
                <br />
                <br />
                In addition to these general requirements, you may also need to
                provide additional documents depending on your individual
                circumstances. For example, if you are under 18 years of age,
                you may need to provide a letter of consent from your parent or
                guardian.
                <br />
                <br />
                <span className="font-bold">
                  It is important to carefully review the requirements for a
                  student visa in Lithuania and to provide all required
                  documents in order to increase your chances of obtaining a
                  visa. You should also be prepared to attend an interview at
                  the Lithuanian embassy or consulate as part of the visa
                  application process.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Lithuania Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity of a student visa in Lithuania will depend on the
                duration of your studies. Student visas are typically valid for
                the duration of your studies, up to a maximum of one year. If
                you are studying for a period of time longer than one year, you
                will need to apply for a renewal of your student visa.
                <br />
                <br />
                The price for a student visa in Lithuania will depend on your
                nationality and the processing time you choose. Fees for student
                visas are typically higher for citizens of countries that are
                not part of the European Union (EU) or the European Economic
                Area (EEA).
                <br />
                <br />
                The standard processing time for a student visa is 15 calendar
                days. If you need to receive your visa more quickly, you may be
                able to choose an expedited processing time for an additional
                fee.
                <br />
                <br />
                It is important to note that the fees for student visas are
                non-refundable, even if your visa application is denied. You
                should carefully review the fees and processing times for
                student visas in Lithuania before you apply.
                <br />
                <br />
                <span className="font-bold">
                  You can find more information on the fees and processing times
                  for student visas in Lithuania on the website of the Ministry
                  of Foreign Affairs of the Republic of Lithuania.
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

export default Lithuania;
