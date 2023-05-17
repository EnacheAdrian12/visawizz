import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Bangladesh = () => {
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
        <title>Bangladesh</title>
        <meta name="description" content="Bangladesh" />
        <meta
          name="keywords"
          content="Bangladesh travel visa, Bangladesh work visa, Bangladesh study visa, How to apply for an Bangladesh visa, Bangladesh visa requirements, Bangladesh tourist visa, Bangladesh student visa, Bangladesh business visa, Bangladesh visa processing time, Bangladesh visa application process, Bangladesh visa for Americans, Bangladesh visa for Europeans, Bangladesh visa for Bangladeshns, Bangladesh visa for Canadians, Bangladesh visa for Indians, Bangladesh visa for Chinese, Bangladesh visa for Africans, Bangladesh visa for Asians, Bangladesh visa for South Americans, Bangladesh visa for Middle Easterners, Bangladesh visa for UK citizens, Bangladesh visa for EU citizens, Bangladesh visa for Schengen area, Bangladesh visa for non-EU citizens, Bangladesh visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Bangladesh
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Bangladesh is a country in South Asia, and it is well known for
              its rich culture and history, vibrant textile industry, and
              beautiful landscapes. Some of the most notable aspects of
              Bangladeshi culture include its cuisine, which is known for its
              use of spices and flavors, and its music and dance, which are an
              integral part of the country's cultural heritage. Additionally,
              Bangladesh is known for its lush green landscapes, which include
              the world's largest mangrove forest, the Sundarbans, as well as
              beautiful beaches and rivers.
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
                Who can enter Bangladesh without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are able to enter Bangladesh
                without a visa for a limited period of time. The specific
                countries and the length of time that citizens of those
                countries are able to stay in Bangladesh without a visa vary.
                <br /> <br />
                Currently, citizens of the following countries are able to enter
                Bangladesh without a visa for a limited period of time:
                <br /> <br />● 90 days:Albania, Argentina, Austria, Bahamas,
                Barbados, Belgium, Bhutan, Bolivia, Bosnia and Herzegovina,
                Brazil, Brunei, Bulgaria, Chile, Colombia, Costa Rica, Croatia,
                Cyprus, Czech Republic, Denmark, Ecuador, Estonia ,Finland,
                France, Georgia, Germany, Greece, Hungary, Iceland, India
                ,Indonesia, Iran, Ireland, Italy, Japan, Kazakhstan, Kosovo,
                Kyrgyzstan, Latvia, Lithuania, Luxembourg, Macedonia, Maldives,
                Malta ,Mexico, Moldova, Mongolia, Montenegro, Morocco,
                Netherlands, Norway ,Peru ,Poland, Portugal, Romania, Russia,
                Serbia, Slovakia, Slovenia, South Korea, Spain, Sweden,
                Switzerland, Tajikistan, Thailand ,Tunisia ,Turkey,
                Turkmenistan, Ukraine, United Kingdom.
                <br /> <br />● 30 days: China, United Arab Emirates.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Bangladesh Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Bangladesh, you will typically need
                to provide the following documents:
                <br /> <br />● A completed visa application form
                <br /> <br />● A valid passport with at least six months of
                remaining validity and with at least one blank page for the visa
                <br /> <br />
                ● A recent passport-sized photograph
                <br /> <br />● A copy of your round-trip flight itinerary or
                proof of onward travel
                <br /> <br />● A copy of your hotel reservation or proof of
                accommodation
                <br /> <br />● A letter of invitation, if applicable
                <br /> <br />● Any other documents required by the Bangladesh
                embassy or consulate in your country
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Bangladesh Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Bangladesh, you will typically need
                to follow the following steps:
                <br /> <br />● Gather the required documents: You will need to
                gather the required documents for your visa application,
                including a completed visa application form, a valid passport
                with at least six months of remaining validity and with at least
                one blank page for the visa, a recent passport-sized photograph,
                and any other documents required by the Bangladesh embassy or
                consulate in your country.
                <br /> <br />● Submit your application: You will need to submit
                your visa application, along with all the required documents, to
                the Bangladesh embassy or consulate in your country. You may
                also be required to attend an interview as part of the visa
                application process.
                <br /> <br />● Wait for a decision: The embassy or consulate
                will review your application and make a decision on your visa.
                You will be notified of the decision by the embassy or
                consulate.
                <br /> <br />● Pay the visa fee: If your visa application is
                approved, you will need to pay the visa fee before your visa can
                be issued. The visa fee can typically be paid in cash or by
                credit card.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Bangladesh ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you are able to stay in Bangladesh will
                depend on the type of visa that you have obtained and the
                purpose of your trip.
                <br /> <br /> Tourist visas to Bangladesh are typically valid
                for a stay of up to 90 days. Business visas are typically valid
                for a stay of up to 30 days, although longer stays may be
                possible in some cases. Student visas and work visas may be
                valid for a stay of up to one year.
                <br /> <br /> It is important to note that the length of time
                that you are able to stay in Bangladesh may be subject to
                change, and the specific requirements for each type of visa may
                vary. Therefore, it is recommended to check with the Bangladesh
                embassy or consulate in your country for the most up-to-date
                information on the length of stay that is allowed for your
                specific situation.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are Covid Restrictions in Bangladesh ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Anyone arriving to Bangladesh will be required to present a
                negative PCR test, no older than 48 hours. Fully vaccinated
                travelers are exempt from pre-arrival testing. Arrivals from
                high-risk countries will undergo more tests on days 7 and 14 of
                their quarantine.
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
                About Diplomatic Passport !
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                A diplomatic passport is a type of passport that is issued to
                individuals who hold diplomatic positions, such as diplomats,
                ambassadors, and other government officials. Diplomatic
                passports are issued by the government of the individual's
                country of citizenship and are typically used for official
                government business and travel. <br /> <br /> Holders of
                diplomatic passports are typically entitled to certain
                privileges and immunities when traveling abroad, such as
                immunity from arrest and detention, as well as privileges
                related to customs, immigration, and other administrative
                formalities.
                <br /> <br />
                <span className="font-bold">
                  In Bangladesh, diplomatic passports are issued to Bangladeshi
                  citizens who hold diplomatic positions and are accredited to
                  represent the country in diplomatic missions abroad.
                  Diplomatic passports are also issued to certain other
                  individuals who are appointed by the government of Bangladesh
                  to represent the country in official capacities, such as
                  members of the armed forces, government officials, and other
                  individuals who are engaged in official government business.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Bangladesh ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in Bangladesh, you will typically
                need to obtain a worker visa before you can begin your
                employment. A worker visa is a type of visa that allows you to
                work in Bangladesh for a specific period of time.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Bangladesh Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Bangladesh, you will typically
                need to follow the following steps: <br /> <br />
                ● Obtain a job offer from an employer in Bangladesh: You will
                need to have a job offer from an employer in Bangladesh in order
                to apply for a worker visa. You will need to provide proof of
                the job offer, such as a letter of employment or a contract, as
                part of your visa application.
                <br /> <br />● Gather the required documents: You will need to
                gather the required documents for your worker visa application,
                including a completed visa application form, a valid passport
                with at least six months of remaining validity and with at least
                one blank page for the visa, a recent passport-sized photograph,
                and any other documents required by the Bangladesh embassy or
                consulate in your country.
                <br /> <br />● Submit your application: You will need to submit
                your worker visa application, along with all the required
                documents, to the Bangladesh embassy or consulate in your
                country. You may also be required to attend an interview as part
                of the visa application process.
                <br /> <br />● Wait for a decision: The embassy or consulate
                will review your application and make a decision on your worker
                visa. You will be notified of the decision by the embassy or
                consulate.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Bangladesh Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available for
                individuals who want to work in Bangladesh. The specific type of
                worker visa that you will need to apply for will depend on the
                nature of your work and the duration of your employment.
                <br /> <br /> Some of the types of worker visas available in
                Bangladesh include:
                <br /> <br />● Short-term worker visa: A short-term worker visa
                is typically valid for a stay of up to six months and is
                suitable for individuals who will be working in Bangladesh on a
                temporary basis.
                <br /> <br />● Long-term worker visa: A long-term worker visa is
                typically valid for a stay of up to one year and is suitable for
                individuals who will be working in Bangladesh on a longer-term
                basis.
                <br /> <br />● Multiple-entry worker visa: A multiple-entry
                worker visa allows the holder to enter and exit Bangladesh
                multiple times during the validity of the visa. This type of
                visa is suitable for individuals who may need to travel in and
                out of Bangladesh for work-related purposes.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Bangladesh Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Bangladesh, you will typically
                need to provide the following documents:
                <br /> <br />● A completed visa application form
                <br /> <br />● A valid passport with at least six months of
                remaining validity and with at least one blank page for the visa
                <br /> <br />● A recent passport-sized photograph
                <br /> <br />● Proof of the job offer, such as a letter of
                employment or a contract
                <br /> <br />● Any other documents required by the Bangladesh
                embassy or consulate in your country, such as proof of education
                or professional qualifications
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Bangladesh ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Bangladesh, you will typically
                need to submit your application to the Bangladesh embassy or
                consulate in your country. You can find the nearest embassy or
                consulate by visiting the website of the Ministry of Foreign
                Affairs of Bangladesh or by searching online for "Bangladesh
                embassy" or "Bangladesh consulate" followed by the name of your
                country.
                <br /> <br /> You will typically need to submit your worker visa
                application in person at the embassy or consulate. You may also
                be required to attend an interview as part of the visa
                application process.
                <br /> <br /> It is important to note that the process for
                applying for a worker visa in Bangladesh may vary depending on
                your specific situation and the requirements of the Bangladesh
                embassy or consulate in your country. Therefore, it is
                recommended to check with the embassy or consulate for the most
                up-to-date information on the process for applying for a worker
                visa in Bangladesh.
                <br /> <br /> It is generally a good idea to apply for your
                worker visa as soon as you have received a job offer from an
                employer in Bangladesh and have gathered all the required
                documents. This will allow you to have your visa in place before
                you travel to Bangladesh and begin your employment.
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Bangladesh ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in Bangladesh, you will typically
                need to obtain a student visa before you can begin your studies.
                A student visa is a type of visa that allows you to study in
                Bangladesh for a specific period of time.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Bangladesh student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Bangladesh, you will typically
                need to follow the following steps: <br /> <br />
                ● Acceptance to a recognized educational institution: You will
                need to have been accepted to a recognized educational
                institution in Bangladesh in order to apply for a student visa.
                You will need to provide proof of your acceptance, such as a
                letter of acceptance or an enrollment certificate, as part of
                your visa application.
                <br /> <br />● Gather the required documents: You will need to
                gather the required documents for your student visa application,
                including a completed visa application form, a valid passport
                with at least six months of remaining validity and with at least
                one blank page for the visa, a recent passport-sized photograph,
                and any other documents required by the Bangladesh embassy or
                consulate in your country.
                <br /> <br />● Submit your application: You will need to submit
                your student visa application, along with all the required
                documents, to the Bangladesh embassy or consulate in your
                country. You may also be required to attend an interview as part
                of the visa application process.
                <br /> <br />● Wait for a decision: The embassy or consulate
                will review your application and make a decision on your student
                visa. You will be notified of the decision by the embassy or
                consulate.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Bangladesh student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Bangladesh, you will typically
                need to provide the following documents:
                <br /> <br />● A completed visa application form
                <br /> <br />● A valid passport with at least six months of
                remaining validity and with at least one blank page for the visa
                <br /> <br />
                ● A recent passport-sized photograph <br /> <br />
                ● Proof of your acceptance to an educational institution in
                Bangladesh, such as a letter of acceptance or an enrollment
                certificate
                <br /> <br />● Any other documents required by the Bangladesh
                embassy or consulate in your country, such as proof of
                sufficient funds to cover your study and living expenses
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for
                  obtaining a student visa in Bangladesh may vary depending on
                  your nationality and the specific institution you will be
                  attending. Therefore, it is recommended to check with the
                  Bangladesh embassy or consulate in your country for the most
                  up-to-date information on the specific requirements for your
                  situation.
                </span>
                <br /> <br /> In addition to the above documents, you may also
                be required to provide other documents or information as part of
                your student visa application, such as:
                <br /> <br />● A letter of sponsorship or a letter of support
                from a sponsor, if you will be funded by someone else
                <br /> <br />● A copy of your academic transcripts and
                certificates
                <br /> <br />● A statement of purpose or a personal essay
                explaining your reasons for studying in Bangladesh
                <br /> <br />● Any other documents required by the Bangladesh
                embassy or consulate in your country
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Bangladesh student Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Bangladesh will
                depend on the specific type of student visa that you are
                applying for and the length of your studies.
                <br /> <br /> Student visas in Bangladesh are typically valid
                for the duration of your studies, up to a maximum of four years.
                Some student visas may also allow for a period of time for
                vacation or other activities before or after your studies.
                <br /> <br />
                <span className="font-bold">
                  The price of a student visa in Bangladesh may vary depending
                  on the specific type of student visa that you are applying for
                  and the length of your studies. In general, student visas in
                  Bangladesh are more expensive for longer periods of stay. The
                  visa fee may also vary depending on your nationality and the
                  specific embassy or consulate where you apply.
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

export default Bangladesh;
