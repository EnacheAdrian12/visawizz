import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Serbia = () => {
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
        <title>Saudi Arabia</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="Saudi Arabia travel visa, Saudi Arabia work visa, Saudi Arabia study visa, How to apply for an Saudi Arabia visa, Saudi Arabia visa requirements, Saudi Arabia tourist visa, Saudi Arabia student visa, Saudi Arabia business visa, Saudi Arabia visa processing time, Saudi Arabia visa application process, Saudi Arabia visa for Americans, Saudi Arabia visa for Europeans, Saudi Arabia visa for Saudi Arabians, Saudi Arabia visa for Canadians, Saudi Arabia visa for Saudi Arabians, Saudi Arabia visa for Chinese, Saudi Arabia visa for Africans, Saudi Arabia visa for Asians, Saudi Arabia visa for South Americans, Saudi Arabia visa for Middle Easterners, Saudi Arabia visa for UK citizens, Saudi Arabia visa for EU citizens, Saudi Arabia visa for Schengen area, Saudi Arabia visa for non-EU citizens, Saudi Arabia visa fees and charges"


        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Serbia
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Serbia is a country located in the Balkans region of Europe. It is
              known for its rich history and culture, with a mix of Eastern and
              Western influences. Serbia is known for its beautiful natural
              scenery, including the Carpathian Mountains, the Danube River, and
              the Black Sea coast. The country is also known for its diverse
              wildlife, with many national parks and protected areas.
              Additionally, Serbia is known for its strong economy and its
              growing technology sector.
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
                Who can enter Serbia without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Serbia is a country in southeastern Europe. The visa
                requirements for foreign citizens who wish to enter Serbia will
                depend on the foreign citizen's country of origin and the
                purpose of their visit.
                <br /> <br />
                In general, foreign citizens who are citizens of countries that
                are part of the European Union (EU), the European Free Trade
                Association (EFTA), or the Schengen Area are allowed to enter
                Serbia without a visa for stays of up to 90 days within a
                180-day period for tourism, business, or other purposes.
                <br /> <br />
                Foreign citizens who are citizens of certain other countries are
                also allowed to enter Serbia without a visa for stays of up to
                30 days for tourism, business, or other purposes. These
                countries include: Albania, Bosnia and Herzegovina, Montenegro,
                North Macedonia,Turkey <br /> <br />
                Foreign citizens who are citizens of countries that are not part
                of the EU, EFTA, or the Schengen Area and are not listed above
                may need to obtain a visa to enter Serbia. The specific
                requirements and procedures for obtaining a visa to enter Serbia
                will depend on the foreign citizen's country of origin and the
                purpose of their visit.
                <br /> <br />
                <span className="font-bold">
                  It is important for foreign citizens to carefully research the
                  requirements and procedures for entering Serbia before
                  initiating their travel plans. Foreign citizens should also
                  seek guidance from the Serbian embassy or consulate in their
                  home country for specific information about the visa
                  application process, if applicable.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Serbia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                The specific documents required to apply for a visa to enter
                Serbia will depend on the foreign citizen's country of origin
                and the purpose of their visit.
                <br /> <br /> In general, foreign citizens who are required to
                obtain a visa to enter Serbia will need to provide the following
                documents when applying for a visa: <br /> <br />● Passport:
                Foreign citizens will need to provide a copy of their valid
                passport, including the identification page and any relevant
                visas or stamps. The passport must be valid for at least six
                months after the intended date of departure from Serbia. <br />{" "}
                <br />● Visa application form: Foreign citizens will need to
                complete and submit a visa application form, which can typically
                be obtained from the Serbian embassy or consulate in the foreign
                citizen's home country or online. <br /> <br />● Passport-sized
                photographs: Foreign citizens will need to provide two
                passport-sized photographs that meet the requirements of the
                Serbian embassy or consulate. <br /> <br />● Evidence of purpose
                of visit: Foreign citizens will need to provide evidence of the
                purpose of their visit to Serbia, such as a letter of
                invitation, a letter of employment, or a letter of acceptance
                from an educational institution. <br /> <br />● Evidence of
                sufficient financial resources: Foreign citizens may need to
                demonstrate that they have sufficient financial resources to
                support themselves while in Serbia, such as bank statements or
                proof of sponsorship. <br /> <br />● Health insurance: Foreign
                citizens may need to provide evidence of health insurance
                coverage while in Serbia.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Serbia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                The process for applying for a visa to enter Serbia typically
                involves several steps, including completing and submitting the
                necessary application forms and documents at the Serbian embassy
                or consulate in the foreign citizen's home country.
                <br /> <br /> Here is a general outline of the process for
                applying for a visa to enter Serbia: <br /> <br />● Determine
                the type of visa needed: Foreign citizens will need to determine
                the type of visa they need to enter Serbia based on the purpose
                of their visit and their country of origin. Different types of
                visas may have different requirements and procedures. <br />{" "}
                <br />● Gather the necessary documents: Foreign citizens will
                need to gather the necessary documents required for the visa
                application process. These may include a valid passport,
                passport-sized photographs, and evidence of the purpose of their
                visit to Serbia, such as a letter of invitation, a letter of
                employment, or a letter of acceptance from an educational
                institution. <br /> <br />● Complete the visa application form:
                Foreign citizens will need to complete and submit the necessary
                visa application form, which can typically be obtained from the
                Serbian embassy or consulate in the foreign citizen's home
                country or online. <br /> <br />● Submit the visa application:
                Foreign citizens will need to submit their completed visa
                application, along with the necessary documents, at the Serbian
                embassy or consulate in their home country. It is important to
                note that the visa application process can take several weeks or
                even months to complete, depending on the specific circumstances
                of the foreign citizen and the type of visa they are seeking.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Serbia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that a foreign citizen is allowed to stay in
                Serbia will depend on the foreign citizen's country of origin
                and the purpose of their visit.
                <br /> <br />
                In general, foreign citizens who are citizens of countries that
                are part of the European Union (EU), the European Free Trade
                Association (EFTA), or the Schengen Area are allowed to stay in
                Serbia for up to 90 days within a 180-day period for tourism,
                business, or other purposes.
                <br /> <br />
                <span className="font-bold">
                  Foreign citizens who are citizens of certain other countries
                  are also allowed to stay in Serbia for up to 30 days for
                  tourism, business, or other purposes. These countries include:
                  Albania, Bosnia and Herzegovina, Montenegro, North
                  Macedonia,Turkey.
                </span>
                <br /> <br />
                <span className="font-bold">
                  Foreign citizens who are citizens of countries that are not
                  part of the EU, EFTA, or the Schengen Area and are not listed
                  above may need to obtain a visa to enter Serbia and will need
                  to adhere to the length of stay specified on their visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Serbia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                COVID test is not required when arriving in Serbia.
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
                In Serbia, a diplomatic passport is issued to individuals who
                are working in a diplomatic capacity for their country, such as
                diplomats and members of a diplomatic mission. The Ministry of
                Foreign Affairs is responsible for issuing diplomatic passports
                to eligible individuals in Serbia.
                <br />
                <br />
                To obtain a diplomatic passport in Serbia, an individual must
                meet certain criteria and provide certain documents, such as:
                <br />
                <br />●{" "}
                <span className="font-bold">
                  Proof of employment as a diplomat or member of a diplomatic
                  mission.
                </span>
                <br />● <span className="font-bold">A valid ID document.</span>
                <br />●{" "}
                <span className="font-bold">
                  A recent passport-size photograph.
                </span>
                <br />●{" "}
                <span className="font-bold">A completed application form.</span>
                <br />●{" "}
                <span className="font-bold">
                  Payment of any applicable fees.
                </span>
                <br />
                <br />
                Diplomatic passport holders in Serbia are generally granted
                certain privileges and immunity from certain laws in the country
                where they are posted. This includes immunity from arrest and
                detention, as well as certain customs and tax exemptions.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that Diplomatic passport should be used
                  for official travel and diplomatic activities, and it's not
                  meant for personal travel. Misuse of a diplomatic passport can
                  result in revocation of the passport, and could lead to other
                  consequences as well.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  Keep in mind that the information provided is based on my
                  knowledge cut-off and the regulations regarding Diplomatic
                  Passport in Serbia can change over time. It's recommended to
                  check with the Ministry of Foreign Affairs of Serbia for more
                  updated information and requirements.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Serbia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Foreign citizens who wish to work in Serbia may need to obtain a
                worker visa in order to legally work in the country. The
                specific requirements and procedures for obtaining a worker visa
                in Serbia will depend on the foreign citizen's country of origin
                and the type of work they will be doing in Serbia.
                <br /> <br />
                In general, foreign citizens who are citizens of countries that
                are part of the European Union (EU), the European Free Trade
                Association (EFTA), or the Schengen Area are allowed to work in
                Serbia without a worker visa for stays of up to 90 days within a
                180-day period.
                <br /> <br />
                <span className="font-bold">
                  Foreign citizens who are citizens of countries that are not
                  part of the EU, EFTA, or the Schengen Area may need to obtain
                  a worker visa to work in Serbia. The specific requirements and
                  procedures for obtaining a worker visa in Serbia will depend
                  on the foreign citizen's country of origin and the type of
                  work they will be doing in Serbia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Serbia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The process for applying for a worker visa in Serbia typically
                involves several steps, including completing and submitting the
                necessary application forms and documents at the Serbian embassy
                or consulate in the foreign citizen's home country.
                <br /> <br /> Here is a general outline of the process for
                applying for a worker visa in Serbia: <br /> <br />● Determine
                the type of worker visa needed: Foreign citizens will need to
                determine the type of worker visa they need to work in Serbia
                based on the type of work they will be doing in the country and
                their country of origin. Different types of worker visas may
                have different requirements and procedures. <br /> <br />●
                Gather the necessary documents: Foreign citizens will need to
                gather the necessary documents required for the worker visa
                application process. These may include a valid passport,
                passport-sized photographs, and evidence of the purpose of their
                work in Serbia, such as a letter of employment or a contract of
                employment. <br /> <br />● Complete the worker visa application
                form: Foreign citizens will need to complete and submit the
                necessary worker visa application form, which can typically be
                obtained from the Serbian embassy or consulate in the foreign
                citizen's home country or online. <br /> <br />● Submit the
                worker visa application: Foreign citizens will need to submit
                their completed worker visa application, along with the
                necessary documents, at the Serbian embassy or consulate in
                their home country. It is important to note that the worker visa
                application process can take several weeks or even months to
                complete, depending on the specific circumstances of the foreign
                citizen and the type of worker visa they are seeking.
                <br />
                <br />
                <span className="font-bold">
                  It is important for foreign citizens to carefully research the
                  requirements and procedures for obtaining a worker visa to
                  work in Serbia before initiating the process. Foreign citizens
                  should also seek guidance from the Serbian embassy or
                  consulate in their home country for specific information about
                  the worker visa application process.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Serbia Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In Serbia, there are several types of worker visa available
                depending on the individual's specific situation and the type of
                work they will be doing in Serbia. Here are a few examples of
                worker visas that are available in Serbia:
                <br />
                <br />● <span className="font-bold">Employment visa</span>: This
                type of visa is for individuals who have been offered a job in
                Serbia and will be working for a Serbian employer. This visa is
                valid for the duration of the employment contract and can be
                renewed for up to three years.
                <br />
                <br />● <span className="font-bold">Business visa</span>: This
                type of visa is for individuals who will be doing business in
                Serbia, such as setting up a company, investing or participating
                in trade fairs. This visa is valid for up to one year.
                <br />
                <br />● <span className="font-bold">Seasonal work visa</span>:
                This type of visa is for individuals who will be working in
                Serbia on a seasonal basis, such as in agriculture or tourism.
                This visa is valid for up to 6 months.
                <br />
                <br />●{" "}
                <span className="font-bold">Intra-corporate transfer visa</span>
                : This type of visa is for employees of international companies
                who are being transferred to a Serbian branch of the company.
                This visa is valid for up to three years.
                <br />
                <br />● <span className="font-bold">Blue Card visa</span>: This
                type of visa is for highly-skilled workers and is similar to the
                EU Blue Card. It allows the holder to work and live in Serbia
                for up to three years, with the possibility of renewal.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the type of visa you will need
                  will depend on your specific circumstances, and it's
                  recommended to check with the Serbian embassy or consulate in
                  your home country or the Serbian Office for Foreigners for
                  more detailed information and requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Serbia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The specific documents required to apply for a worker visa in
                Serbia will depend on the foreign citizen's country of origin
                and the type of worker visa they are seeking.
                <br /> <br />
                In general, foreign citizens who are required to obtain a worker
                visa to work in Serbia will need to provide the following
                documents when applying for a worker visa: <br /> <br />●
                Passport: Foreign citizens will need to provide a copy of their
                valid passport, including the identification page and any
                relevant visas or stamps. The passport must be valid for at
                least six months after the intended date of departure from
                Serbia. <br /> <br />● Visa application form: Foreign citizens
                will need to complete and submit a visa application form, which
                can typically be obtained from the Serbian embassy or consulate
                in the foreign citizen's home country or online. <br /> <br />●
                Passport-sized photographs: Foreign citizens will need to
                provide two passport-sized photographs that meet the
                requirements of the Serbian embassy or consulate. <br /> <br />●
                Evidence of employment: Foreign citizens will need to provide
                evidence of their employment in Serbia, such as a letter of
                employment or a contract of employment. <br /> <br />● Evidence
                of sufficient financial resources: Foreign citizens may need to
                demonstrate that they have sufficient financial resources to
                support themselves while in Serbia, such as bank statements or
                proof of sponsorship. <br /> <br />● Health insurance: Foreign
                citizens may need to provide evidence of health insurance
                coverage while in Serbia.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Serbia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Foreign citizens who wish to apply for a worker visa to work in
                Serbia will typically need to submit their visa application at
                the Serbian embassy or consulate in their home country.
                <br /> <br />
                The specific location and contact information for the Serbian
                embassy or consulate in the foreign citizen's home country can
                typically be found on the website of the Ministry of Foreign
                Affairs of the Republic of Serbia. Foreign citizens should also
                check the website of the embassy or consulate for specific
                information about the visa application process and requirements.
                <br /> <br />
                <span className="font-bold">
                  It is important for foreign citizens to carefully research the
                  requirements and procedures for obtaining a worker visa to
                  work in Serbia before initiating the process. Foreign citizens
                  should also seek guidance from the Serbian embassy or
                  consulate in their home country for specific information about
                  the worker visa application process, including the location
                  and contact information for the embassy or consulate.
                </span>
                <br /> <br />
                <span className="font-bold">
                  It is also important for foreign citizens to note that the
                  worker visa application process can take several weeks or even
                  months to complete, depending on the specific circumstances of
                  the foreign citizen and the type of worker visa they are
                  seeking. Foreign citizens should therefore initiate the
                  process as early as possible to allow sufficient time for the
                  application to be processed.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Serbia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Foreign citizens who wish to study in Serbia may need to obtain
                a student visa in order to legally study in the country. The
                specific requirements and procedures for obtaining a student
                visa in Serbia will depend on the foreign citizen's country of
                origin and the type of study program they will be participating
                in.
                <br /> <br />
                In general, foreign citizens who are citizens of countries that
                are part of the European Union (EU), the European Free Trade
                Association (EFTA), or the Schengen Area are allowed to study in
                Serbia without a student visa for stays of up to 90 days within
                a 180-day period.
                <br /> <br />
                Foreign citizens who are citizens of countries that are not part
                of the EU, EFTA, or the Schengen Area may need to obtain a
                student visa to study in Serbia. The specific requirements and
                procedures for obtaining a student visa in Serbia will depend on
                the foreign citizen's country of origin and the type of study
                program they will be participating in. <br /> <br />
                <span className="font-bold">
                  It is important for foreign citizens to carefully research the
                  requirements and procedures for studying in Serbia before
                  initiating their travel plans. Foreign citizens should also
                  seek guidance from the Serbian embassy or consulate in their
                  home country for specific information about the student visa
                  application process, if applicable.
                </span>
                <br /> <br />
                <span className="font-bold">
                  It is also important for foreign citizens to note that
                  studying in Serbia without the necessary documentation may
                  result in fines, deportation, and other consequences. Foreign
                  citizens should ensure that they have the necessary
                  documentation to legally study in Serbia before beginning
                  their studies in the country.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Serbia student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The process for applying for a student visa in Serbia typically
                involves several steps, including completing and submitting the
                necessary application forms and documents at the Serbian embassy
                or consulate in the foreign citizen's home country.
                <br /> <br /> Here is a general outline of the process for
                applying for a student visa in Serbia: <br /> <br />● Determine
                the type of student visa needed: Foreign citizens will need to
                determine the type of student visa they need to study in Serbia
                based on their country of origin and the type of study program
                they will be participating in. Different types of student visas
                may have different requirements and procedures. <br /> <br />●
                Gather the necessary documents: Foreign citizens will need to
                gather the necessary documents required for the student visa
                application process. These may include a valid passport,
                passport-sized photographs, and evidence of their enrollment in
                an educational program in Serbia, such as a letter of acceptance
                or enrollment. <br /> <br />● Complete the student visa
                application form: Foreign citizens will need to complete and
                submit the necessary student visa application form, which can
                typically be obtained from the Serbian embassy or consulate in
                the foreign citizen's home country or online. <br /> <br />●
                Submit the student visa application: Foreign citizens will need
                to submit their completed student visa application, along with
                the necessary documents, at the Serbian embassy or consulate in
                their home country.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the student visa application
                  process can take several weeks or even months to complete,
                  depending on the specific circumstances of the foreign citizen
                  and the type of student visa they are seeking.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Serbia student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The specific requirements for a student visa to study in Serbia
                will depend on the foreign citizen's country of origin and the
                type of study program they will be participating in.
                <br /> <br /> In general, foreign citizens who are required to
                obtain a student visa to study in Serbia will need to meet the
                following requirements: <br /> <br />● Valid passport: Foreign
                citizens will need to have a valid passport, including the
                identification page and any relevant visas or stamps. The
                passport must be valid for at least six months after the
                intended date of departure from Serbia. <br /> <br />● Evidence
                of enrollment in an educational program: Foreign citizens will
                need to provide evidence of their enrollment in an educational
                program in Serbia, such as a letter of acceptance or enrollment.
                <br /> <br />● Health insurance: Foreign citizens may need to
                provide evidence of health insurance coverage while in Serbia.
                <br /> <br />● Evidence of sufficient financial resources:
                Foreign citizens may need to demonstrate that they have
                sufficient financial resources to support themselves while in
                Serbia, such as bank statements or proof of sponsorship.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Serbia student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa to study in Serbia will
                depend on the foreign citizen's country of origin and the type
                of study program they will be participating in.
                <br /> <br />
                In general, student visas to study in Serbia are valid for the
                duration of the study program and can be extended if necessary.
                The specific requirements and procedures for extending a student
                visa in Serbia will depend on the foreign citizen's country of
                origin and the type of study program they will be participating
                in.
                <br /> <br />
                The price of a student visa to study in Serbia will also depend
                on the foreign citizen's country of origin and the type of study
                program they will be participating in. In general, student visas
                to study in Serbia are free for citizens of countries that are
                part of the European Union (EU), the European Free Trade
                Association (EFTA), or the Schengen Area. Foreign citizens who
                are citizens of countries that are not part of the EU, EFTA, or
                the Schengen Area may be required to pay a fee to obtain a
                student visa to study in Serbia.
                <br /> <br />
                <span className="font-bold">
                  It is important for foreign citizens to carefully research the
                  specific requirements and procedures for the type of student
                  visa they are seeking before initiating the process. Foreign
                  citizens should also seek guidance from the Serbian embassy or
                  consulate in their home country for specific information about
                  the student visa application process, including the validity
                  and price of the student visa.
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

export default Serbia;
