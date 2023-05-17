import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const PapuaNewGuinea = () => {
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
        <title>Papua New Guinea</title>
        <meta name="description" content="Papua New Guinea" />
        <meta
          name="keywords"
          content="Papua New Guinea travel visa, Papua New Guinea work visa, Papua New Guinea study visa, How to apply for an Papua New Guinea visa, Papua New Guinea visa requirements, Papua New Guinea tourist visa, Papua New Guinea student visa, Papua New Guinea business visa, Papua New Guinea visa processing time, Papua New Guinea visa application process, Papua New Guinea visa for Americans, Papua New Guinea visa for Europeans, Papua New Guinea visa for Papua New Guineans, Papua New Guinea visa for Canadians, Papua New Guinea visa for Papua New Guineans, Papua New Guinea visa for Chinese, Papua New Guinea visa for Africans, Papua New Guinea visa for Asians, Papua New Guinea visa for South Americans, Papua New Guinea visa for Middle Easterners, Papua New Guinea visa for UK citizens, Papua New Guinea visa for EU citizens, Papua New Guinea visa for Schengen area, Papua New Guinea visa for non-EU citizens, Papua New Guinea visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Papua New Guinea
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Papua New Guinea is a country in the Pacific Ocean that is known
              for its rich cultural diversity and its unique natural
              environment. It is home to many different indigenous groups, each
              with their own languages, customs, and traditions, and it is one
              of the most culturally diverse countries in the world. Papua New
              Guinea is also known for its beautiful landscapes, including
              rainforests, mountains, and beaches, which offer opportunities for
              hiking, birdwatching, and other outdoor activities. Additionally,
              Papua New Guinea is known for its abundant natural resources,
              including gold, copper, and oil, which are important to its
              economy.
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
                Who can enter Papua New Guinea without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Papua New Guinea has visa-free or visa-on-arrival provisions for
                certain countries. Here is a list of countries whose citizens
                are allowed to enter Papua New Guinea without a visa for stays
                of up to 60 days: Fiji, Kiribati, Nauru, Samoa, Solomon Islands,
                Tonga, Tuvalu, Vanuatu.
                <br /> <br /> Citizens of these countries are allowed to enter
                Papua New Guinea without a visa for stays of up to 60 days,
                provided they have a valid passport and a return ticket.
                <br /> <br />
                <span className="font-bold">
                  However, it's important to note that this list is subject to
                  change, and it's always a good idea to check the latest visa
                  requirements for Papua New Guinea before you travel. You can
                  do this by contacting the Papua New Guinea embassy or
                  consulate in your country, or by checking the official website
                  of the Papua New Guinea Department of Immigration and
                  Citizenship.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Papua New Guinea Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Papua New Guinea, you will need to
                provide the following documents: <br /> <br />
                ● A valid passport: Your passport should have at least six
                months of validity remaining from the date of your arrival in
                Papua New Guinea. <br /> <br />
                ● A completed and signed visa application form: You can download
                the visa application form from the website of the Papua New
                Guinea Department of Immigration and Citizenship. <br /> <br />
                ● A passport-sized photograph: This should be a recent, color
                photograph of you taken against a plain white background.
                <br /> <br />
                ● Proof of onward travel: You will need to provide evidence of
                your onward travel arrangements, such as a confirmed return
                ticket or a confirmed booking for a flight out of Papua New
                Guinea.
                <br /> <br />
                ● Evidence of sufficient funds: You will need to show that you
                have enough money to support yourself during your stay in Papua
                New Guinea. This may include bank statements or credit card
                statements showing that you have sufficient funds.
                <br /> <br />
                ● A letter of invitation: If you are being invited to Papua New
                Guinea by a business or organization, you may need to provide a
                letter of invitation from the host. <br /> <br />● Other
                documents: Depending on your purpose of travel, you may need to
                provide additional documents, such as a letter of employment or
                a letter from your school or university.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Papua New Guinea Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Papua New Guinea visa, you will need to follow
                these steps: <br /> <br />
                ● Determine the type of visa you need: Papua New Guinea offers
                several types of visas, including tourist visas, business visas,
                student visas, and work visas. Determine the type of visa that
                best fits your purpose of travel. <br /> <br />
                ● Check the visa requirements: Make sure you meet the
                requirements for the type of visa you are applying for. These
                requirements may include having a valid passport, providing
                evidence of sufficient funds, and providing proof of onward
                travel. <br /> <br />
                ● Download and complete the visa application form: You can
                download the visa application form from the website of the Papua
                New Guinea Department of Immigration and Citizenship. Make sure
                to fill out the form completely and accurately, and to sign it.
                <br /> <br />
                ● Gather the required documents: Assemble all the required
                documents, including your passport, passport-sized photograph,
                proof of onward travel, and any other documents that may be
                required for your specific type of visa.
                <br /> <br />
                ● Submit your application: Submit your completed application
                form and required documents to the Papua New Guinea embassy or
                consulate in your country, or to the nearest Papua New Guinea
                High Commission. You may also be able to apply online or by
                mail, depending on the embassy or consulate.
                <br /> <br />
                ● Pay the visa fee: You will need to pay a fee to process your
                visa application. The fee will vary depending on the type of
                visa you are applying for and the length of your stay in Papua
                New Guinea.
                <br /> <br />● Wait for a decision: After you submit your
                application, the embassy or consulate will review it and make a
                decision on your visa. This process can take several weeks or
                even months, so it's important to apply as early as possible.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Papua New Guinea?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Papua New Guinea depends on
                the type of visa you have.
                <br /> <br /> If you have a{" "}
                <span className="font-bold">tourist visa</span>, you will
                typically be allowed to stay in Papua New Guinea for a period of
                up to 60 days. If you wish to stay longer, you will need to
                apply for an extension of your visa.
                <br /> <br /> If you have a{" "}
                <span className="font-bold">business visa</span>, you will
                typically be allowed to stay in Papua New Guinea for a period of
                up to 90 days. Again, if you wish to stay longer, you will need
                to apply for an extension of your visa.
                <br /> <br /> If you have a{" "}
                <span className="font-bold">student visa</span>, the length of
                your stay will depend on the duration of your studies in Papua
                New Guinea.
                <br /> <br /> If you have a{" "}
                <span className="font-bold">work visa</span>, the length of your
                stay will depend on the duration of your employment in Papua New
                Guinea.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Papua New Guinea?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                As of October 5, 2022, all COVID travel restrictions were
                lifted, including the requirement to be fully vaccinated against
                COVID-19.
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
                individuals who are representatives of their government, such as
                diplomats and consular officers. In Papua New Guinea, diplomatic
                passports are issued by the Department of Foreign Affairs and
                Trade. Holders of diplomatic passports are accorded certain
                privileges and immunities under international law, and are
                generally not subject to visa requirements when traveling to
                other countries for official business. However, it's important
                to note that the privileges and immunities associated with a
                diplomatic passport may vary depending on the country.
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Papua New Guinea?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in Papua New Guinea, you will
                generally need to obtain a worker visa. A worker visa is a type
                of visa that allows you to enter Papua New Guinea for the
                purpose of working in the country.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Papua New Guinea Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Papua New Guinea, you will need
                to follow these steps: <br /> <br />
                ● Determine the type of worker visa you need: Papua New Guinea
                offers several types of worker visas, including skilled worker
                visas, temporary worker visas, and permanent resident visas.
                Determine the type of worker visa that best fits your
                circumstances. <br /> <br />
                ● Check the visa requirements: Make sure you meet the
                requirements for the type of worker visa you are applying for.
                These requirements may include having a valid passport,
                providing a job offer letter from your employer in Papua New
                Guinea, and providing evidence of sufficient funds. <br />{" "}
                <br />
                ● Download and complete the visa application form: You can
                download the visa application form from the website of the Papua
                New Guinea Department of Immigration and Citizenship. Make sure
                to fill out the form completely and accurately, and to sign it.
                <br /> <br />
                ● Gather the required documents: Assemble all the required
                documents, including your passport, passport-sized photograph,
                job offer letter, and any other documents that may be required
                for your specific type of worker visa. <br /> <br />
                ● Submit your application: Submit your completed application
                form and required documents to the Papua New Guinea embassy or
                consulate in your country, or to the nearest Papua New Guinea
                High Commission. You may also be able to apply online or by
                mail, depending on the embassy or consulate. <br /> <br />
                ● Pay the visa fee: You will need to pay a fee to process your
                worker visa application. The fee will vary depending on the type
                of worker visa you are applying for and the length of your stay
                in Papua New Guinea.
                <br /> <br />● Wait for a decision: After you submit your
                application, the embassy or consulate will review it and make a
                decision on your worker visa. This process can take several
                weeks or even months, so it's important to apply as early as
                possible.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Papua New Guinea Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Papua New Guinea offers several types of worker visas,
                including: <br /> <br />●{" "}
                <span className="font-bold">Skilled worker visas</span>: These
                visas are for individuals who have the skills and qualifications
                required to work in a specific profession in Papua New Guinea.
                To be eligible for a skilled worker visa, you will typically
                need to have a job offer from an employer in Papua New Guinea,
                and you may need to provide proof of your qualifications and
                work experience. <br /> <br />●{" "}
                <span className="font-bold">Temporary worker visas</span>: These
                visas are for individuals who are coming to Papua New Guinea to
                work on a temporary basis, such as for a specific project or for
                a fixed period of time. To be eligible for a temporary worker
                visa, you will typically need to have a job offer from an
                employer in Papua New Guinea, and you may need to provide proof
                of your qualifications and work experience.
                <br /> <br />●{" "}
                <span className="font-bold">Permanent resident visas</span>:
                These visas are for individuals who are planning to work and
                live in Papua New Guinea on a long-term basis. To be eligible
                for a permanent resident visa, you will typically need to have a
                job offer from an employer in Papua New Guinea, and you may need
                to meet certain financial and other criteria.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Papua New Guinea Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Papua New Guinea, you will
                typically need to provide the following documents: <br /> <br />
                ● A valid passport: Your passport should have at least six
                months of validity remaining from the date of your arrival in
                Papua New Guinea. <br /> <br />
                ● A completed and signed visa application form: You can download
                the visa application form from the website of the Papua New
                Guinea Department of Immigration and Citizenship. <br /> <br />
                ● A passport-sized photograph: This should be a recent, color
                photograph of you taken against a plain white background. <br />{" "}
                <br />
                ● A job offer letter: You will need to provide a letter from
                your employer in Papua New Guinea offering you a job in the
                country. The letter should include details about the job, such
                as the job title, the duties and responsibilities, and the
                salary.
                <br /> <br />
                ● Evidence of sufficient funds: You will need to show that you
                have enough money to support yourself during your stay in Papua
                New Guinea. This may include bank statements or credit card
                statements showing that you have sufficient funds.
                <br /> <br />
                ● A police clearance certificate: You may be required to provide
                a police clearance certificate from your country of residence,
                indicating that you have no criminal record.
                <br /> <br />● Other documents: Depending on your circumstances,
                you may need to provide additional documents, such as a medical
                certificate or proof of your qualifications.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Papua New Guinea?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Papua New Guinea, you will need
                to submit your application to the Papua New Guinea embassy or
                consulate in your country, or to the nearest Papua New Guinea
                High Commission. You may also be able to apply online or by
                mail, depending on the embassy or consulate.
                <br /> <br /> It's a good idea to apply for your worker visa as
                early as possible, to allow plenty of time for the application
                process. The processing time for worker visa applications can
                vary, but it can take several weeks or even months to receive a
                decision on your application.
                <br /> <br /> Before you apply, it's important to check the
                latest worker visa requirements for Papua New Guinea, as these
                requirements can change over time. You can do this by contacting
                the Papua New Guinea embassy or consulate in your country, or by
                checking the official website of the Papua New Guinea Department
                of Immigration and Citizenship.
                <br /> <br />
                <span className="font-bold">
                  It's also a good idea to make sure that you have all the
                  necessary documents ready when you apply for your worker visa.
                  These documents may include your passport, a completed and
                  signed visa application form, a passport-sized photograph, a
                  job offer letter, and evidence of sufficient funds, among
                  others. Providing all the required documents will help ensure
                  that your worker visa application is processed smoothly and
                  efficiently.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Papua New Guinea?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in Papua New Guinea, you will
                generally need to obtain a student visa. A student visa is a
                type of visa that allows you to enter Papua New Guinea for the
                purpose of studying in the country.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Papua New Guinea student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Papua New Guinea, you will need
                to follow these steps: <br /> <br />
                ● Determine the type of student visa you need: Papua New Guinea
                offers several types of student visas, including short-term
                study visas and long-term study visas. Determine the type of
                student visa that best fits your circumstances. <br /> <br />
                ● Check the visa requirements: Make sure you meet the
                requirements for the type of student visa you are applying for.
                These requirements may include having a valid passport,
                providing an acceptance letter from a school or university in
                Papua New Guinea, and providing evidence of sufficient funds.
                <br /> <br />
                ● Download and complete the visa application form: You can
                download the visa application form from the website of the Papua
                New Guinea Department of Immigration and Citizenship. Make sure
                to fill out the form completely and accurately, and to sign it.
                <br /> <br />
                ● Gather the required documents: Assemble all the required
                documents, including your passport, passport-sized photograph,
                acceptance letter, and any other documents that may be required
                for your specific type of student visa. <br /> <br />
                ● Submit your application: Submit your completed application
                form and required documents to the Papua New Guinea embassy or
                consulate in your country, or to the nearest Papua New Guinea
                High Commission. You may also be able to apply online or by
                mail, depending on the embassy or consulate. <br /> <br />
                ● Pay the visa fee: You will need to pay a fee to process your
                student visa application. The fee will vary depending on the
                type of student visa you are applying for and the length of your
                stay in Papua New Guinea. <br /> <br />● Wait for a decision:
                After you submit your application, the embassy or consulate will
                review it and make a decision on your student visa. This process
                can take several weeks or even months, so it's important to
                apply as early as possible.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Papua New Guinea student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Papua New Guinea, you will
                typically need to provide the following documents: <br /> <br />
                ● A valid passport: Your passport should have at least six
                months of validity remaining from the date of your arrival in
                Papua New Guinea. <br /> <br />
                ● A completed and signed visa application form: You can download
                the visa application form from the website of the Papua New
                Guinea Department of Immigration and Citizenship. <br /> <br />
                ● A passport-sized photograph: This should be a recent, color
                photograph of you taken against a plain white background. <br />{" "}
                <br />
                ● An acceptance letter: You will need to provide an acceptance
                letter from the school or university in Papua New Guinea that
                has accepted you as a student. The acceptance letter should
                include details about the program of study, the duration of the
                program, and the tuition fees. <br /> <br />
                ● Evidence of sufficient funds: You will need to show that you
                have enough money to support yourself during your stay in Papua
                New Guinea. This may include bank statements or credit card
                statements showing that you have sufficient funds. <br /> <br />
                ● A police clearance certificate: You may be required to provide
                a police clearance certificate from your country of residence,
                indicating that you have no criminal record. <br /> <br />●
                Other documents: Depending on your circumstances, you may need
                to provide additional documents, such as a medical certificate
                or proof of your qualifications.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Papua New Guinea student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Papua New Guinea
                will depend on the type of student visa you are applying for and
                the length of your stay in the country.
                <br /> <br /> Papua New Guinea offers two types of student
                visas: short-term study visas and long-term study visas.
                <br /> <br />
                Short-term study visas are for individuals who are coming to
                Papua New Guinea to study for a period of less than six months.
                These visas are generally valid for the duration of your studies
                in Papua New Guinea. The price of a short-term study visa will
                depend on the length of your stay in the country and the
                specific program of study you will be pursuing.
                <br /> <br /> Long-term study visas are for individuals who are
                coming to Papua New Guinea to study for a period of six months
                or more. These visas are generally valid for the duration of
                your studies in Papua New Guinea, up to a maximum of five years.
                The price of a long-term study visa will depend on the length of
                your stay in the country and the specific program of study you
                will be pursuing.
                <br /> <br />
                <span className="font-bold">
                  It's important to note that these periods of validity and
                  prices are subject to change, and you should always check the
                  latest student visa requirements for Papua New Guinea before
                  you travel. You can do this by contacting the Papua New Guinea
                  embassy or consulate in your country, or by checking the
                  official website of the Papua New Guinea Department of
                  Immigration and Citizenship.
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

export default PapuaNewGuinea;
