import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const NewZealand = () => {
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
        <title>New Zealand</title>
        <meta name="description" content="New Zealand" />
        <meta
          name="keywords"
          content="New Zealand travel visa, New Zealand work visa, New Zealand study visa, How to apply for an New Zealand visa, New Zealand visa requirements, New Zealand tourist visa, New Zealand student visa, New Zealand business visa, New Zealand visa processing time, New Zealand visa application process, New Zealand visa for Americans, New Zealand visa for Europeans, New Zealand visa for New Zealandns, New Zealand visa for Canadians, New Zealand visa for New Zealandns, New Zealand visa for Chinese, New Zealand visa for Africans, New Zealand visa for Asians, New Zealand visa for South Americans, New Zealand visa for Middle Easterners, New Zealand visa for UK citizens, New Zealand visa for EU citizens, New Zealand visa for Schengen area, New Zealand visa for non-EU citizens, New Zealand visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            New Zealand
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              New Zealand is a country in the Pacific Ocean that is known for
              its beautiful natural landscapes and its unique flora and fauna.
              It is home to the Southern Alps, which offer opportunities for
              hiking, skiing, and other outdoor activities, as well as many
              protected areas, such as national parks and reserves, which are
              home to a wide variety of plants and animals. New Zealand is also
              known for its rich culture and history, which has been influenced
              by its indigenous Maori population and its British and European
              heritage. Additionally, New Zealand is known for its thriving
              economy and its high quality of life.
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
                Who can enter New Zealand without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                There are certain countries whose citizens are allowed to enter
                New Zealand without a visa for stays of up to six months, as
                long as they meet certain requirements. These countries include:
                <br />
                <br />
                <span className="font-bold">
                  Australia, Canada, Hong Kong (Special Administrative Region of
                  China), Japan, South Korea, Malaysia, Singapore, United States
                  of America, Taiwan.
                </span>
                <br />
                <br />
                Citizens of these countries do not need to apply for a visa in
                advance, but they will need to meet the following requirements
                in order to enter New Zealand without a visa:
                <br />
                <br />
                ● They must have a valid passport.
                <br />
                <br />
                ● They must have a return ticket or sufficient funds to purchase
                one.
                <br />
                <br />
                ● They must be able to show that they have sufficient funds to
                support themselves while they are in New Zealand.
                <br />
                <br />
                ● They must be in good health and have no criminal convictions.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that these requirements are subject to
                  change, and citizens of these countries may still be required
                  to apply for a visa if they do not meet the necessary
                  requirements. It's always a good idea to check with the New
                  Zealand government or a New Zealand embassy or consulate
                  before traveling to make sure you have the correct documents.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for New Zealand Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter New Zealand, you will need to
                provide the following documents:
                <br />
                <br />
                ● A valid passport: You will need to provide a copy of the
                biographic page of your passport, which must be valid for at
                least six months beyond the date of your intended arrival in New
                Zealand.
                <br />
                <br />
                ● A completed visa application form: You will need to complete a
                visa application form and provide it with your other supporting
                documents.
                <br />
                <br />
                ● A passport-sized photograph: You will need to provide a recent
                passport-sized photograph of yourself.
                <br />
                <br />
                ● Evidence of sufficient funds: You will need to provide
                evidence that you have sufficient funds to support yourself
                while you are in New Zealand. This could include bank
                statements, proof of employment, or a letter of sponsorship from
                a friend or relative in New Zealand.
                <br />
                <br />
                ● A police clearance certificate: You may need to provide a
                police clearance certificate from your home country, stating
                that you do not have a criminal record.
                <br />
                <br />
                ● A medical certificate: You may need to provide a medical
                certificate stating that you are in good health and do not have
                any communicable diseases.
                <br />
                <br />
                ● Evidence of your intended activities: You will need to provide
                evidence of your intended activities while you are in New
                Zealand. This could include a letter from an employer, a letter
                of acceptance from a school or university, or a letter of
                invitation from a friend or relative.
                <br />
                <br />
                ● Additional documents: Depending on your country of origin and
                the purpose of your trip to New Zealand, you may be required to
                provide additional documents. These could include transcripts,
                letters of recommendation, and other professional
                certifications.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements for a visa to
                  enter New Zealand may vary depending on your country of origin
                  and the purpose of your trip. You should contact the New
                  Zealand government or a New Zealand embassy or consulate for
                  specific information on the documents you will need to provide
                  in order to apply for a visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a New Zealand Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter New Zealand, you will need to
                follow these steps:
                <br />
                <br />
                ● Determine which type of visa you need: There are several
                different types of visas available for travel to New Zealand,
                and the type of visa you need will depend on the purpose of your
                trip and the length of your stay. You can use the New Zealand
                government's visa finder tool to help you determine which visa
                you need.
                <br />
                <br />
                ● Gather all the necessary documents: You will need to provide a
                range of documents with your visa application, including a valid
                passport, a completed visa application form, a passport-sized
                photograph, and evidence of your intended activities in New
                Zealand. You may also be required to provide additional
                documents, such as a police clearance certificate, a medical
                certificate, and evidence of sufficient funds.
                <br />
                <br />
                ● Submit your application: You can submit your visa application
                online through the New Zealand government's visa application
                website, or you can apply in person at a New Zealand embassy or
                consulate.
                <br />
                <br />
                ● Pay the required visa fees: You will need to pay a fee to
                cover the cost of processing your visa application. The exact
                amount of the fee will depend on the type of visa you are
                applying for.
                <br />
                <br />
                ● Wait for your application to be processed: It can take several
                weeks or even months for a visa application to be processed, so
                you should apply well in advance of your intended travel date.
                If your application is approved, you will be issued a visa.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements for a visa to
                  enter New Zealand may vary depending on your country of origin
                  and the purpose of your trip. You should contact the New
                  Zealand government or a New Zealand embassy or consulate for
                  specific information on how to apply for a visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in New Zealand?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                As a general rule, most visitors to New Zealand can stay for up
                to six months on a tourist visa. However, the length of time you
                can stay will depend on the specific type of visa you have and
                the purpose of your visit. Some people may be able to stay for
                longer periods if they are studying or working in New Zealand.
                It's important to note that the length of your stay will be
                determined by an immigration officer when you arrive in New
                Zealand. You can find more information about the different types
                of visas available for travel to New Zealand on the Immigration
                New Zealand website. It is always a good idea to check with the
                nearest New Zealand embassy or consulate to confirm the most
                current visa requirements and to find out what documents you
                need to bring with you when you travel to New Zealand.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in New Zealand?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are no COVID-19 pre-departure test or vaccination
                requirements to enter New Zealand, however, airlines may require
                evidence of vaccination or have other requirements to travel
                onboard their aircraft.
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
                diplomats and other officials who are representing their country
                in an official capacity abroad. Diplomatic passports are
                typically issued to individuals who are working in a diplomatic
                or consular capacity, or who are traveling abroad on official
                business for their government.
                <br />
                <br />
                In New Zealand, diplomatic passports are issued by the
                Department of Internal Affairs. Diplomatic passport holders are
                entitled to certain privileges and immunities while traveling
                abroad, which are intended to facilitate their work and ensure
                their safety. These privileges and immunities are granted under
                the Vienna Convention on Diplomatic Relations and the Vienna
                Convention on Consular Relations, which are international
                treaties that have been ratified by New Zealand.
                <br />
                <br />
                <span className="font-bold">
                  If you are interested in obtaining a diplomatic passport in
                  New Zealand, you will need to contact the Department of
                  Internal Affairs or the nearest New Zealand embassy or
                  consulate for more information on the process and
                  requirements. It is generally only individuals who are working
                  in a diplomatic or consular capacity who are eligible for a
                  diplomatic passport.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in New Zealand?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether or not you need a worker visa in New Zealand will depend
                on your citizenship, the purpose of your visit, and how long you
                plan to stay in the country. If you are a citizen of a country
                that has a visa-waiver agreement with New Zealand, you may be
                able to visit New Zealand as a tourist for up to six months
                without a visa. However, if you plan to work in New Zealand
                during your stay, you will generally need to obtain a worker
                visa.
                <br />
                <br />
                There are several different types of worker visas available for
                New Zealand, each of which is intended for a specific purpose.
                For example, the Essential Skills Work Visa is for people who
                have been offered a job in New Zealand and who meet certain
                criteria, such as having the necessary skills and qualifications
                for the job. The Work to Residence Visa is for people who have
                been offered a job in New Zealand and who want to eventually
                apply for permanent residence in the country.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements and eligibility
                  criteria for worker visas in New Zealand can vary depending on
                  the specific type of visa you are applying for. You can find
                  more information about the different types of worker visas
                  available, as well as the requirements and application
                  process, on the Immigration New Zealand website.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a New Zealand Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to apply for a worker visa in New Zealand, you will
                need to follow these steps:
                <br />
                <br />
                ● Check if you meet the eligibility criteria: Different types of
                worker visas have different eligibility criteria, so it's
                important to make sure you meet the requirements for the type of
                visa you are interested in. You can find information about the
                eligibility criteria for different types of worker visas on the
                Immigration New Zealand website.
                <br />
                <br />
                ● Choose the right type of worker visa: There are several
                different types of worker visas available in New Zealand, each
                of which is intended for a specific purpose. You will need to
                choose the type of visa that best fits your circumstances and
                the purpose of your visit.
                <br />
                <br />
                ● Gather the necessary documents: You will need to provide a
                range of documents as part of your visa application, including
                proof of your identity, proof of your employment in New Zealand,
                and proof of your qualifications and skills. You can find a list
                of the specific documents you will need on the Immigration New
                Zealand website.
                <br />
                <br />
                ● Submit your application: You can apply for a worker visa
                online through the Immigration New Zealand website. You will
                need to create an online account, complete the application form,
                and pay the application fee. If you prefer, you can also apply
                in person at a New Zealand embassy or consulate.
                <br />
                <br />
                ● Wait for a decision: After you submit your application,
                Immigration New Zealand will review it and decide whether to
                grant you a worker visa. You will be notified of the decision by
                email. If your application is successful, you will receive a
                visa label in your passport, which will allow you to travel to
                New Zealand.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the process for applying for a
                  worker visa in New Zealand can be complex, and it's always a
                  good idea to seek the advice of a qualified immigration
                  advisor if you have any questions or concerns. You can find
                  more information about the worker visa application process on
                  the Immigration New Zealand website.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of New Zealand Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several different types of worker visas available in
                New Zealand, each of which is intended for a specific purpose.
                Here are some of the most common types of worker visas:
                <br />
                <br />
                <span className="font-bold">Essential Skills Work Visa</span>
                : This visa is for people who have been offered a job in New
                Zealand and who meet certain criteria, such as having the
                necessary skills and qualifications for the job. The Essential
                Skills Work Visa is issued for a specific length of time, which
                depends on the nature of the job and the applicant's
                circumstances.
                <br />
                <br />
                <span className="font-bold">Work to Residence Visa</span>
                : This visa is for people who have been offered a job in New
                Zealand and who want to eventually apply for permanent residence
                in the country. The Work to Residence Visa is issued for a
                specific length of time, after which the holder can apply for
                permanent residence.
                <br />
                <br />
                <span className="font-bold">Working Holiday Visa</span>
                : This visa is for people aged 18 to 30 who want to come to New
                Zealand to travel and work for up to one year. The Working
                Holiday Visa allows the holder to take short-term employment to
                help fund their travels.
                <br />
                <br />
                <span className="font-bold">Temporary Work Visa</span>
                : This visa is for people who have been offered a short-term job
                in New Zealand and who meet certain criteria, such as having the
                necessary skills and qualifications for the job. The Temporary
                Work Visa is issued for a specific length of time, which depends
                on the nature of the job and the applicant's circumstances.
                <br />
                <br />
                <span className="font-bold">Partner of a Worker Visa</span>
                : This visa is for the partner or spouse of a worker who is
                already in New Zealand on a work visa. The Partner of a Worker
                Visa allows the holder to work in New Zealand while their
                partner is working in the country.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements and eligibility
                  criteria for these worker visas can vary depending on the
                  specific type of visa you are applying for. You can find more
                  information about the different types of worker visas
                  available, as well as the requirements and application
                  process, on the Immigration New Zealand website.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for New Zealand Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in New Zealand, you will generally
                need to provide the following documents:
                <br />
                <br />
                ● A valid passport: You will need to provide a copy of your
                passport, which must be valid for at least three months beyond
                the date you plan to leave New Zealand.
                <br />
                <br />
                ● A completed application form: You will need to complete the
                appropriate application form, which can be found on the
                Immigration New Zealand website.
                <br />
                <br />
                ● Passport-sized photos: You will need to provide two
                passport-sized photos of yourself, which must meet certain
                specifications.
                <br />
                <br />
                ● Proof of your employment: You will need to provide evidence of
                your employment in New Zealand, such as a letter of offer from
                your employer or a copy of your employment contract.
                <br />
                <br />
                ● Proof of your qualifications: You will need to provide
                evidence of your qualifications and skills, such as copies of
                your academic transcripts or certificates.
                <br />
                <br />
                ● Proof of your English language ability: If your job requires a
                certain level of English language ability, you may need to
                provide evidence of your English language skills, such as a test
                score from an approved English language test.
                <br />
                <br />● Other supporting documents: Depending on your
                circumstances, you may also need to provide other supporting
                documents, such as a police clearance certificate or evidence of
                your health insurance coverage.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific documents you will
                  need to provide as part of your worker visa application can
                  vary depending on the type of visa you are applying for and
                  your individual circumstances. You can find a list of the
                  specific documents you will need on the Immigration New
                  Zealand website.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in New Zealand?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You can apply for a worker visa in New Zealand at any time
                before you travel to the country. However, it's important to
                note that the process for applying for a worker visa can take
                several weeks or months, depending on the type of visa you are
                applying for and the current workload of Immigration New
                Zealand. It's always a good idea to apply for your worker visa
                as early as possible to ensure that you have enough time to
                prepare for your trip.
                <br />
                <br />
                To apply for a worker visa in New Zealand, you can either do so
                online through the Immigration New Zealand website or in person
                at a New Zealand embassy or consulate.
                <br />
                <br />
                If you are applying online, you will need to create an online
                account and complete the application form on the Immigration New
                Zealand website. You will also need to pay the application fee
                online.
                <br />
                <br />
                If you prefer to apply in person, you can do so at a New Zealand
                embassy or consulate. You will need to complete the appropriate
                application form and provide all the necessary documents in
                person. You will also need to pay the application fee in person.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the process for applying for a
                  worker visa in New Zealand can be complex, and it's always a
                  good idea to seek the advice of a qualified immigration
                  advisor if you have any questions or concerns. You can find
                  more information about the worker visa application process on
                  the Immigration New Zealand website.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in New Zealand?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether or not you need a visa to study in New Zealand will
                depend on your citizenship, the length of your course, and the
                type of institution you will be studying at.
                <br />
                <br />
                If you are a citizen of a country that has a visa-waiver
                agreement with New Zealand, you may be able to study in New
                Zealand for up to six months without a visa. However, if you
                plan to study in New Zealand for longer than six months, or if
                you are a citizen of a country that does not have a visa-waiver
                agreement with New Zealand, you will generally need to obtain a
                student visa.
                <br />
                <br />
                To apply for a student visa in New Zealand, you will need to
                provide evidence of your acceptance into a recognized course of
                study, proof of your financial ability to support yourself while
                you are in the country, and proof of your English language
                ability (if required). You will also need to pay the visa
                application fee.
                <br />
                <br />
                <span className="font-bold">
                  You can find more information about the student visa
                  application process and the requirements on the Immigration
                  New Zealand website. It's always a good idea to check with the
                  nearest New Zealand embassy or consulate to confirm the most
                  current visa requirements and to find out what documents you
                  need to bring with you when you travel to New Zealand.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a New Zealand Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to apply for a student visa in New Zealand, you will
                need to follow these steps:
                <br />
                <br />
                ● Check if you meet the eligibility criteria: To be eligible for
                a student visa in New Zealand, you will need to be accepted into
                a recognized course of study at a New Zealand educational
                institution. You will also need to meet certain financial and
                English language requirements. You can find information about
                the eligibility criteria for student visas on the Immigration
                New Zealand website.
                <br />
                <br />
                ● Gather the necessary documents: You will need to provide a
                range of documents as part of your student visa application,
                including proof of your acceptance into a recognized course of
                study, proof of your financial ability to support yourself while
                you are in New Zealand, and proof of your English language
                ability (if required). You can find a list of the specific
                documents you will need on the Immigration New Zealand website.
                <br />
                <br />
                ● Submit your application: You can apply for a student visa
                online through the Immigration New Zealand website. You will
                need to create an online account, complete the application form,
                and pay the application fee. If you prefer, you can also apply
                in person at a New Zealand embassy or consulate.
                <br />
                <br />
                ● Wait for a decision: After you submit your application,
                Immigration New Zealand will review it and decide whether to
                grant you a student visa. You will be notified of the decision
                by email. If your application is successful, you will receive a
                visa label in your passport, which will allow you to travel to
                New Zealand.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the process for applying for a
                  student visa in New Zealand can be complex, and it's always a
                  good idea to seek the advice of a qualified immigration
                  advisor if you have any questions or concerns. You can find
                  more information about the student visa application process on
                  the Immigration New Zealand website.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                New Zealand Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a student visa in New Zealand, you will
                generally need to meet the following requirements:
                <br />
                <br />
                ● Acceptance into a recognized course of study: You will need to
                provide evidence of your acceptance into a recognized course of
                study at a New Zealand educational institution. This may include
                a letter of acceptance from the institution or a copy of your
                enrollment agreement.
                <br />
                <br />
                ● Financial ability to support yourself: You will need to show
                that you have sufficient funds to support yourself while you are
                in New Zealand. This may include evidence of your financial
                resources, such as bank statements or a letter from your
                sponsor.
                <br />
                <br />
                ● English language ability: If your course of study requires a
                certain level of English language proficiency, you may need to
                provide evidence of your English language skills, such as a test
                score from an approved English language test.
                <br />
                <br />
                ● Good character: You will need to provide a police clearance
                certificate from your country of citizenship and any other
                country where you have lived for six months or more in the past
                five years.
                <br />
                <br />
                ● Health insurance: You will need to show that you have adequate
                health insurance coverage for the duration of your stay in New
                Zealand.
                <br />
                <br />
                ● Return travel arrangements: You will need to provide evidence
                of your return travel arrangements, such as a return ticket or
                proof of funds to purchase a return ticket.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements for a
                  student visa in New Zealand can vary depending on your
                  individual circumstances and the type of course you will be
                  studying. You can find more information about the student visa
                  requirements on the Immigration New Zealand website.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for New Zealand Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in New Zealand will
                depend on the length of your course of study and the type of
                student visa you are applying for.
                <br />
                <br />
                Most student visas are valid for the duration of your course of
                study, up to a maximum of four years. However, some student
                visas may be issued for a shorter period of time, depending on
                the specific circumstances of your case.
                <br />
                <br />
                The price of a student visa in New Zealand will depend on the
                type of visa you are applying for and the length of your course
                of study. As of 2021, the fee for a standard student visa is NZD
                $220 for a course of study that is less than one year in
                duration, and NZD $750 for a course of study that is one year or
                longer in duration. There may be additional fees for other
                services, such as express processing or airport transit.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the fees for student visas in New
                  Zealand are subject to change, so it's always a good idea to
                  check with the nearest New Zealand embassy or consulate for
                  the most current fee information. You can find more
                  information about the fees for student visas on the
                  Immigration New Zealand website.
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

export default NewZealand;
