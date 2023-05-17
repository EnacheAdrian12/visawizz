import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Kazakhstan = () => {
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
        <title>Kazakhstan</title>
        <meta name="description" content="Kazakhstan" />
        <meta
          name="keywords"
          content="Kazakhstan travel visa, Kazakhstan work visa, Kazakhstan study visa, How to apply for an Kazakhstan visa, Kazakhstan visa requirements, Kazakhstan tourist visa, Kazakhstan student visa, Kazakhstan business visa, Kazakhstan visa processing time, Kazakhstan visa application process, Kazakhstan visa for Americans, Kazakhstan visa for Europeans, Kazakhstan visa for Kazakhstanns, Kazakhstan visa for Canadians, Kazakhstan visa for Kazakhstanns, Kazakhstan visa for Chinese, Kazakhstan visa for Africans, Kazakhstan visa for Asians, Kazakhstan visa for South Americans, Kazakhstan visa for Middle Easterners, Kazakhstan visa for UK citizens, Kazakhstan visa for EU citizens, Kazakhstan visa for Schengen area, Kazakhstan visa for non-EU citizens, Kazakhstan visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Kazakhstan
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Kazakhstan is a country in Central Asia, and it is the largest
              landlocked country in the world. It is well known for its vast
              natural resources, including oil, natural gas, and a wide variety
              of minerals. It is also known for its unique blend of cultures, as
              it has a rich history that includes influences from Russia, China,
              and the Middle East. The capital city of Astana (now known as
              Nur-Sultan) is known for its futuristic architecture and modern
              skyline.
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
                Who can enter Kazakhstan without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are allowed to enter Kazakhstan
                without a visa for stays of up to 30 days. These countries
                include Belarus, Georgia, Kazakhstan, Kyrgyzstan, Moldova,
                Russia, Tajikistan, Turkmenistan, and Ukraine.
                <br /> <br /> Citizens of other countries may be eligible to
                enter Kazakhstan without a visa for stays of up to 15 days if
                they are visiting as part of a tour group organized by a
                licensed Kazakhstani tour operator.
                <br /> <br /> In addition, citizens of certain countries may be
                eligible to enter Kazakhstan without a visa for stays of up to
                90 days if they are visiting as part of a cultural exchange
                program or for other specific purposes, such as business or
                scientific research.
                <br /> <br />
                <span className="font-bold">
                  It is always a good idea to check the visa requirements for
                  Kazakhstan before traveling, as the rules for visa-free entry
                  can change from time to time.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Kazakhstan Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Kazakhstan, you will generally need to
                provide the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least six months beyond the date of your planned departure
                from Kazakhstan.
                <br /> <br />● A completed visa application form: You can obtain
                a visa application form from the Embassy of Kazakhstan or the
                Consulate General of Kazakhstan, or you can download it from the
                Embassy of Kazakhstan website.
                <br /> <br />● Passport-sized photos: You will need to provide
                two passport-sized photos with your visa application.
                <br /> <br />● A letter of invitation: Depending on the purpose
                of your visit to Kazakhstan, you may need to provide a letter of
                invitation from a Kazakhstani host or sponsor. This letter
                should include information about your host or sponsor, the
                purpose of your visit, and the duration of your stay.
                <br /> <br />● Evidence of sufficient financial resources: You
                will need to demonstrate that you have sufficient financial
                resources to support yourself during your stay in Kazakhstan.
                This may include evidence of funds in your bank account or a
                letter from your employer stating that they will cover your
                expenses during your stay.
                <br /> <br />● Payment for the visa fee: You will need to pay a
                fee to apply for a visa to Kazakhstan. The fee amount will vary
                depending on the type of visa you are applying for and the
                duration of your stay.
                <br /> <br />
                <span className="font-bold">
                  {" "}
                  You may also need to provide additional documents, depending
                  on your specific circumstances. It is a good idea to contact
                  the Embassy of Kazakhstan or the Consulate General of
                  Kazakhstan for more information on the specific requirements
                  for a visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Kazakhstan Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Kazakhstan visa, you will need to follow these
                steps:
                <br /> <br />● Determine the type of visa you need: Kazakhstan
                offers several types of visas, including business, work,
                tourist, and transit visas. You will need to determine which
                type of visa is appropriate for your purpose of travel.
                <br /> <br />● Check if you need a visa: Some nationalities are
                eligible for visa-free travel to Kazakhstan for short stays. You
                can check if you need a visa by contacting the Embassy of
                Kazakhstan in your country or by visiting the website of the
                Ministry of Foreign Affairs of Kazakhstan.
                <br /> <br />● Gather the required documents: To apply for a
                Kazakhstan visa, you will need to submit a completed visa
                application form, a valid passport, passport-size photographs,
                and any additional documents required for the type of visa you
                are applying for. These may include proof of sufficient funds, a
                letter of invitation, a letter of support from your employer, or
                proof of travel insurance.
                <br /> <br />● Submit your application: You can apply for a
                Kazakhstan visa by submitting your application in person at the
                Embassy of Kazakhstan in your country, or you may be able to
                apply online through a visa processing agency.
                <br /> <br />● Pay the visa fee: You will need to pay a visa fee
                when you submit your application. The fee amount will depend on
                the type of visa you are applying for and the length of your
                stay.
                <br /> <br />● Wait for your visa to be processed: The
                processing time for a Kazakhstan visa can vary, so it is
                important to apply well in advance of your intended travel date.
                <br /> <br />● Collect your visa: Once your visa has been
                approved, you will need to collect it in person or have it
                mailed to you. Make sure to bring your passport with you when
                you collect your visa.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Kazakhstan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are allowed to stay in Kazakhstan depends
                on the type of visa you have. Here are the maximum stay periods
                for some common types of visas:
                <br /> <br />● Tourist visa: 30 days
                <br /> <br />● Business visa: 90 days
                <br /> <br />● Work visa: 90 days
                <br /> <br />● Transit visa: 5 days
                <br /> <br />● Please note that these are maximum stay periods,
                and you may be granted a shorter stay depending on the specifics
                of your trip and the discretion of the visa officer.
                <br /> <br />● If you want to stay in Kazakhstan for a longer
                period of time, you may be able to apply for an extension of
                your visa. You can do this by contacting the Ministry of
                Internal Affairs of Kazakhstan or the local police department in
                the city where you are staying.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Kazakhstan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes. The U.S. Embassy and Consulate in Kazakhstan advises
                potential travelers to reconsider visits to Kazakhstan at this
                time due to the risk of COVID-19 in country. U.S. citizens can
                visit Kazakhstan without a visa for up to 30 days for all
                purposes of travel, with the exceptions of employment and
                missionary work.
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
                Informations about Diplomatic Passport !
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                A diplomatic passport is a type of passport issued to
                individuals who are traveling abroad on official government
                business as representatives of their country. In Kazakhstan,
                diplomatic passports are issued to government officials,
                including members of the diplomatic corps and other high-ranking
                officials.
                <br /> <br /> Holders of a diplomatic passport are entitled to
                certain privileges and immunities while traveling abroad,
                including exemption from visa requirements in some cases and
                diplomatic immunity in others.
                <br /> <br /> To qualify for a diplomatic passport in
                Kazakhstan, you must be a government official who has been
                appointed to represent the country abroad in an official
                capacity. This may include diplomats, consular officers, and
                other high-ranking officials.
                <br /> <br />
                <span className="font-bold">
                  If you are a government official and you need to apply for a
                  diplomatic passport, you will need to submit an application to
                  the Ministry of Foreign Affairs of Kazakhstan. The process for
                  obtaining a diplomatic passport may vary depending on your
                  specific circumstances and the requirements of the Ministry of
                  Foreign Affairs.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Kazakhstan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You may need a work visa to work in Kazakhstan, depending on
                your nationality and the length of your stay.
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of a country that has a visa-free
                  agreement with Kazakhstan, you may be able to work in the
                  country without a work visa for a certain period of time.
                  However, if you want to work in Kazakhstan for a longer period
                  of time, or if you are a citizen of a country that does not
                  have a visa-free agreement with Kazakhstan, you will need to
                  apply for a work visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Kazakhstan Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Kazakhstan, you will need to
                follow these steps:
                <br /> <br />● Determine if you need a work visa: If you are a
                citizen of a country that has a visa-free agreement with
                Kazakhstan, you may be able to work in the country without a
                work visa for a certain period of time. However, if you want to
                work in Kazakhstan for a longer period of time, or if you are a
                citizen of a country that does not have a visa-free agreement
                with Kazakhstan, you will need to apply for a work visa.
                <br /> <br />● Find a job: In order to apply for a worker visa,
                you will need to have a job offer from a Kazakh employer. You
                can search for jobs in Kazakhstan through job websites,
                recruitment agencies, or by contacting companies directly.
                <br /> <br />
                ● Gather the required documents: To apply for a worker visa, you
                will need to submit a completed visa application form, a valid
                passport, passport-size photographs, and any additional
                documents required for the type of visa you are applying for.
                These may include a letter of invitation from your Kazakh
                employer, proof of sufficient funds, and proof of health
                insurance.
                <br /> <br />● Submit your application: You can apply for a
                worker visa by submitting your application in person at the
                Embassy of Kazakhstan in your country, or you may be able to
                apply online through a visa processing agency.
                <br /> <br />● Pay the visa fee: You will need to pay a visa fee
                when you submit your application. The fee amount will depend on
                the type of visa you are applying for and the length of your
                stay.
                <br /> <br />● Wait for your visa to be processed: The
                processing time for a worker visa in Kazakhstan can vary, so it
                is important to apply well in advance of your intended start
                date.
                <br /> <br />● Collect your visa: Once your visa has been
                approved, you will need to collect it in person or have it
                mailed to you. Make sure to bring your passport with you when
                you collect your visa.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Kazakhstan Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas that you can apply for
                in Kazakhstan, depending on the nature of your job and the
                length of your stay. Here are some common types of worker visas:
                <br /> <br />●{" "}
                <span className="font-bold">Short-term work visa</span>: This
                type of visa is issued for work stays of up to 90 days. It is
                suitable for people who are coming to Kazakhstan for a
                short-term work assignment or for business purposes.
                <br /> <br />●{" "}
                <span className="font-bold">Long-term work visa</span>: This
                type of visa is issued for work stays of more than 90 days. It
                is suitable for people who are coming to Kazakhstan for a
                longer-term work assignment or for those who want to work in the
                country on a permanent basis.
                <br /> <br />●{" "}
                <span className="font-bold">Student work visa</span>: This type
                of visa is issued to foreign students who want to work part-time
                while studying in Kazakhstan.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Kazakhstan Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Kazakhstan, you will need to
                submit the following documents:
                <br /> <br />● A completed visa application form: You can obtain
                a visa application form from the Embassy of Kazakhstan in your
                country or from a visa processing agency.
                <br /> <br />● A valid passport: Your passport must be valid for
                at least six months beyond the intended length of your stay in
                Kazakhstan. It must also have at least two blank visa pages.
                <br /> <br />
                ● Passport-size photographs: You will need to provide two
                recent, passport-size photographs with your visa application.
                <br /> <br />● A letter of invitation from your Kazakh employer:
                This letter should state the purpose of your visit, the duration
                of your stay, and the details of your employment in Kazakhstan.
                <br /> <br />
                ● Proof of sufficient funds: You will need to show that you have
                enough money to support yourself during your stay in Kazakhstan.
                This may include bank statements, pay stubs, or other financial
                documents.
                <br /> <br />● Proof of health insurance: You will need to
                provide proof of health insurance that covers you while you are
                in Kazakhstan.
                <br /> <br />● Any additional documents required for the type of
                visa you are applying for: Depending on the nature of your job
                and the length of your stay, you may need to provide additional
                documents, such as a copy of your employment contract, proof of
                your education and qualifications, or a police clearance
                certificate.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Kazakhstan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You can apply for a worker visa in Kazakhstan at the Embassy of
                Kazakhstan in your country or at a visa processing agency.
                <br /> <br /> If you are applying at the embassy, you will need
                to submit your application in person. You may be able to
                schedule an appointment online or by contacting the embassy
                directly.
                <br /> <br /> If you are applying through a visa processing
                agency, you may be able to submit your application online or by
                mail. Be sure to check with the agency to see what options are
                available.
                <br /> <br />
                <span className="font-bold">
                  It is important to apply for your worker visa well in advance
                  of your intended start date, as the process for obtaining a
                  visa can take several weeks. You should also be prepared to
                  provide all of the required documents and pay the visa fee
                  when you submit your application.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Kazakhstan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You may need a student visa to study in Kazakhstan, depending on
                your nationality and the length of your stay.
                <br /> <br /> If you are a citizen of a country that has a
                visa-free agreement with Kazakhstan, you may be able to study in
                the country without a student visa for a certain period of time.
                However, if you want to study in Kazakhstan for a longer period
                of time, or if you are a citizen of a country that does not have
                a visa-free agreement with Kazakhstan, you will need to apply
                for a student visa.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Kazakhstan student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Kazakhstan, you will need to
                follow these steps:
                <br /> <br />● Determine if you need a student visa: If you are
                a citizen of a country that has a visa-free agreement with
                Kazakhstan, you may be able to study in the country without a
                student visa for a certain period of time. However, if you want
                to study in Kazakhstan for a longer period of time, or if you
                are a citizen of a country that does not have a visa-free
                agreement with Kazakhstan, you will need to apply for a student
                visa.
                <br /> <br />● Enroll in a Kazakh educational institution: In
                order to apply for a student visa, you will need to have been
                accepted to a Kazakh educational institution. You can search for
                schools and universities in Kazakhstan through education
                directories or by contacting schools directly.
                <br /> <br />● Gather the required documents: To apply for a
                student visa, you will need to submit a completed visa
                application form, a valid passport, passport-size photographs,
                and any additional documents required for the type of visa you
                are applying for. These may include a letter of acceptance from
                your Kazakh educational institution, proof of sufficient funds,
                and proof of health insurance.
                <br /> <br />● Submit your application: You can apply for a
                student visa by submitting your application in person at the
                Embassy of Kazakhstan in your country, or you may be able to
                apply online through a visa processing agency.
                <br /> <br />● Pay the visa fee: You will need to pay a visa fee
                when you submit your application. The fee amount will depend on
                the type of visa you are applying for and the length of your
                stay.
                <br /> <br />● Wait for your visa to be processed: The
                processing time for a student visa in Kazakhstan can vary, so it
                is important to apply well in advance of your intended start
                date.
                <br /> <br />● Collect your visa: Once your visa has been
                approved, you will need to collect it in person or have it
                mailed to you. Make sure to bring your passport with you when
                you collect your visa.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Kazakhstan student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In order to obtain a student visa for Kazakhstan, you will
                typically need to provide the following documents:
                <br />
                <br />
                ● A valid passport with at least two blank pages.
                <br />
                <br />
                ● Completed visa application form.
                <br />
                <br />
                ● Recent passport-size photograph.
                <br />
                <br />
                ● Proof of health insurance.
                <br />
                <br />
                ● Proof of financial support, such as bank statements.
                <br />
                <br />
                ● A letter of acceptance from a Kazakh educational institution.
                <br />
                <br />
                ● Payment of visa fees.
                <br />
                <br />
                ● HIV/AIDs Test certificate.
                <br />
                <br />
                <span className="font-bold">
                  Please note that the visa requirements may vary depending on
                  the individual's nationality, purpose of the visit and
                  duration of the stay. And also, it is always recommended to
                  double check the requirement via the nearest Kazakhstan
                  Embassy or Consulate in your home country as the requirements
                  can vary based on time and situation.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Kazakhstan student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Kazakhstan can vary
                depending on the length of the study program and the
                individual's nationality.
                <br /> <br />
                Generally, student visas are valid for the duration of the study
                program, up to a maximum of one year. They can be renewed for
                additional periods if the student's program of study is longer
                than one year.
                <br /> <br />
                The cost of a student visa for Kazakhstan can vary depending on
                the individual's country of citizenship. Kazakh embassy or
                consulate fees should be paid for student visa application which
                can vary based on the time and location. It is best to check
                with the Kazakh embassy or consulate in your home country for
                the most up-to-date information on visa fees.
                <br />
                <br />
                <span className="font-bold">
                  It's also worth noting that, Sometimes student visas are
                  issued without any fee for students from some countries based
                  on mutual agreement between countries. So you should double
                  check with the Kazakh embassy in your home country for the
                  most updated information about the fee for your case.
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

export default Kazakhstan;
