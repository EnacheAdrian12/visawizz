import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const CostaRica = () => {
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
        <title>Costa Rica</title>
        <meta name="description" content="Costa Rica" />
        <meta
          name="keywords"
          content="Costa Rica travel visa, Costa Rica work visa, Costa Rica study visa, How to apply for an Costa Rica visa, Costa Rica visa requirements, Costa Rica tourist visa, Costa Rica student visa, Costa Rica business visa, Costa Rica visa processing time, Costa Rica visa application process, Costa Rica visa for Americans, Costa Rica visa for Europeans, Costa Rica visa for Costa Ricans, Costa Rica visa for Canadians, Costa Rica visa for Indians, Costa Rica visa for Chinese, Costa Rica visa for Africans, Costa Rica visa for Asians, Costa Rica visa for South Americans, Costa Rica visa for Middle Easterners, Costa Rica visa for UK citizens, Costa Rica visa for EU citizens, Costa Rica visa for Schengen area, Costa Rica visa for non-EU citizens, Costa Rica visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Costa Rica
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Costa Rica is a small country located in Central America, and it
              is well known for its beautiful natural landscapes, rich culture
              and history, and commitment to environmental conservation. Some of
              the most notable things that Costa Rica is known for include its
              stunning national parks and protected areas, such as the Arenal
              Volcano National Park and the Monteverde Cloud Forest Reserve, its
              rich biodiversity, which is home to a wide variety of plants and
              animals, and its beautiful beaches, which are popular with surfers
              and sunbathers alike. Additionally, Costa Rica is known for its
              vibrant art and music scenes, and the country has a rich cultural
              heritage that can be seen in its many museums and historic sites.
              Finally, Costa Rica is known for its commitment to sustainability
              and environmental conservation, and it is a leader in renewable
              energy and eco-tourism.
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
                Who can enter Costa Rica without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are able to enter Costa Rica
                without a visa for stays of up to 90 days. These countries
                include:
                <br />
                <br />● Most countries in the Americas, including the United
                States, Canada, Mexico, and most countries in South America and
                Central America.
                <br />
                <br />● Most countries in the European Union, as well as
                Switzerland, Norway, and Iceland. <br />
                <br />
                ● Australia, New Zealand, and Japan. <br />
                <br />
                ● South Korea.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the list of countries whose
                  citizens can enter Costa Rica without a visa may change over
                  time, so it is a good idea to check with the Government of
                  Costa Rica or with a Costa Rican embassy or consulate for the
                  most up-to-date information on visa requirements.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  If you are a citizen of a country that is not on the list of
                  countries whose citizens can enter Costa Rica without a visa,
                  you will generally need to obtain a visa before you travel to
                  Costa Rica. The type of visa you will need will depend on the
                  purpose of your trip and your specific situation.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Costa Rica Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to travel to Costa Rica, you will generally
                need to provide a number of documents as part of your
                application. The specific documents that you will need to
                provide will depend on the type of visa you are applying for and
                your specific situation.
                <br />
                <br /> In general, you will need to provide the following
                documents as part of your visa application:
                <br />
                <br />● A completed visa application form, which you can obtain
                from the Government of Costa Rica's website or from a Costa
                Rican embassy or consulate.
                <br />
                <br />● A valid passport or travel document. Your passport
                should be valid for at least six months beyond the date you
                intend to leave Costa Rica.
                <br />
                <br />● Two recent passport-sized photographs.
                <br />
                <br />● Proof of your financial resources to support yourself
                while you are in Costa Rica. This may include bank statements or
                a letter of financial support from a parent or guardian.
                <br />
                <br />● Proof of the purpose of your trip to Costa Rica. This
                may include a letter of invitation from a host in Costa Rica, a
                copy of your round-trip ticket, or a letter from your employer
                if you are traveling for work.
                <br />
                <br />● Any additional documents that are specific to the type
                of visa you are applying for, such as proof of your education or
                work experience if you are applying for a work visa, or a letter
                of acceptance from a Costa Rican educational institution if you
                are applying for a student visa.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Costa Rica Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to travel to Costa Rica, you will need to
                follow these steps:
                <br />
                <br />● Gather all of the necessary documents for your visa
                application. This will include a completed visa application
                form, a valid passport or travel document, two recent
                passport-sized photographs, proof of your financial resources to
                support yourself while you are in Costa Rica, and any additional
                documents that are specific to the type of visa you are applying
                for.
                <br />
                <br />● Choose the method for submitting your visa application.
                You can generally apply for a visa to Costa Rica online through
                the Government of Costa Rica's website, or you can apply in
                person at a Costa Rican embassy or consulate.
                <br />
                <br />● Submit your visa application and pay the processing fee.
                If you are applying online, you will generally need to upload
                your documents and pay the fee through the Government of Costa
                Rica's website. If you are applying in person, you will need to
                bring your documents and the fee to the embassy or consulate.
                <br />
                <br />
                ● Wait for a decision on your visa application. Processing times
                can vary, so it is a good idea to apply for your visa well in
                advance of your intended travel date. <br />
                <br />
                It is important to note that the application process may vary
                depending on the embassy or consulate where you are applying,
                and you may be required to provide additional documents or
                information as needed. It is a good idea to check with the
                embassy or consulate for the most up-to-date information on the
                process for your specific situation. <br />
                <br />
                <span className="font-bold">
                  Once you have received your visa, you will need to use it to
                  enter Costa Rica before the start of your intended stay. You
                  will also need to carry your visa with you at all times while
                  you are in Costa Rica.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Costa Rica ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are able to stay in Costa Rica will
                depend on the type of visa you have and your specific situation.
                <br />
                <br />
                If you are a citizen of a country whose citizens are able to
                enter Costa Rica without a visa for stays of up to 90 days, you
                will generally be able to stay in the country for up to 90 days.
                <br />
                <br />
                If you have obtained a visa to travel to Costa Rica, the length
                of time you are able to stay in the country will depend on the
                type of visa you have. For example, a tourist visa may allow you
                to stay in Costa Rica for up to 90 days, while a work visa or a
                student visa may allow you to stay in the country for a longer
                period of time.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that you may be able to extend your
                  stay in Costa Rica if you are unable to leave the country
                  before your visa or permit expires. However, you will need to
                  apply for an extension in advance of the expiration of your
                  visa or permit, and you will need to meet certain requirements
                  to be eligible for an extension. It is a good idea to check
                  with the Government of Costa Rica or with a Costa Rican
                  embassy or consulate for the most up-to-date information on
                  the process for extending your stay in the country.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Costa Rica ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are no COVID-related travel restrictions in place in Costa
                Rica. Private cars are only allowed to enter the capital of San
                Jose on certain week days (Monday to Friday) depending on
                restrictions based on the last digit of the licence plate
                number.
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
                A diplomatic passport is a special type of passport that is
                issued to diplomats and other officials who are representing
                their country abroad. Diplomatic passports are typically issued
                by the government of the country that the diplomat or official
                is representing, and they are often used in conjunction with a
                diplomatic visa or other special permission to enter another
                country.
                <br />
                <br /> Diplomatic passports generally have special privileges
                and protections, including the right to enter and exit countries
                without a visa or other formal permission, and the right to
                receive assistance and support from foreign governments while
                traveling abroad. Diplomatic passports are also generally
                accorded a higher level of respect and deference than ordinary
                passports, and they are often treated with a higher level of
                security.
                <br />
                <br />
                <span className="font-bold">
                  In Costa Rica, diplomatic passports are issued by the Ministry
                  of Foreign Affairs to diplomats and other officials who are
                  representing the country abroad. Diplomatic passports are
                  typically issued to individuals who are serving as
                  ambassadors, consuls, and other high-ranking officials in the
                  Costa Rican government or in international organizations.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Costa Rica ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to work in Costa Rica, you will generally need to
                obtain a work permit before you begin working in the country. A
                work permit is a document that allows you to work legally in
                Costa Rica for a specific period of time.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Costa Rica Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work permit (also known as a worker visa) in
                Costa Rica, you will generally need to follow these steps:
                <br />
                <br />
                Gather all of the necessary documents for your work permit
                application. This will include a valid passport or travel
                document, a job offer from a Costa Rican employer, proof of your
                financial resources to support yourself while you are in Costa
                Rica, and any additional documents that may be required
                depending on the type of work permit you are applying for.
                <br />
                <br />
                Submit your work permit application to the Ministry of Labor and
                Social Security (MTSS) in Costa Rica. You can submit your
                application in person at the MTSS office or through a
                representative, such as a lawyer or an immigration consultant.
                <br />
                <br />
                Wait for a decision on your work permit application. Processing
                times can vary, so it is a good idea to apply for your work
                permit well in advance of your intended start date.
                <br />
                <br />
                <span className="font-bold">
                  Once your work permit has been approved, you will need to
                  register with the Costa Rican Social Security System (CCSS).
                  This will typically involve paying a fee and providing proof
                  of your employment, such as a contract or a letter of
                  acceptance from your employer.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Costa Rica Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of work permits that are available in
                Costa Rica, depending on the specific circumstances of the
                worker and the nature of the job being offered. The main types
                of work permits in Costa Rica include:
                <br />
                <br />● Temporary Work Permit: This type of work permit is
                issued for a specific period of time and is typically valid for
                up to two years. It is generally issued to workers who are
                coming to Costa Rica to work on a temporary basis, such as for a
                specific project or on a seasonal basis.
                <br />
                <br />● Permanent Work Permit: This type of work permit is
                issued for an indefinite period of time and allows the holder to
                work in Costa Rica indefinitely. It is generally issued to
                workers who are coming to Costa Rica to work on a permanent
                basis, such as in a long-term job or as a business owner.
                <br />
                <br />
                ● Professional Work Permit: This type of work permit is issued
                to workers who are coming to Costa Rica to work in a specific
                profession, such as a doctor, lawyer, engineer, or teacher. It
                is generally issued for a specific period of time and may be
                renewable.
                <br />
                <br />● Student Work Permit: This type of work permit is issued
                to students who are studying in Costa Rica and who want to work
                part-time while they are studying. It is generally issued for a
                specific period of time and is only valid for work that is
                related to the student's field of study.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Costa Rica Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work permit (also known as a worker visa) in
                Costa Rica, you will generally need to provide the following
                documents:
                <br />
                <br />● A valid passport or travel document
                <br />
                <br />● A job offer from a Costa Rican employer, including a
                contract or letter of acceptance <br />
                <br />
                ● Proof of your financial resources to support yourself while
                you are in Costa Rica, such as bank statements or a letter from
                your employer stating that they will provide financial support
                <br />
                <br />● A medical certificate indicating that you are in good
                health and do not have any contagious diseases
                <br />
                <br />● Two recent passport-sized photographs
                <br />
                <br />● Any additional documents that may be required depending
                on the type of work permit you are applying for
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Costa Rica ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work permit (also known as a worker visa) in
                Costa Rica, you will need to submit your application to the
                Ministry of Labor and Social Security (MTSS) in Costa Rica. You
                can submit your application in person at the MTSS office or
                through a representative, such as a lawyer or an immigration
                consultant.
                <br />
                <br /> The MTSS has offices in most major cities in Costa Rica,
                including the capital city of San Jose. It is a good idea to
                check the MTSS website or with a Costa Rican embassy or
                consulate to find the location of the nearest MTSS office.
                <br />
                <br /> It is important to note that the process for applying for
                a work permit in Costa Rica may vary depending on your country
                of citizenship and the specific type of work permit you are
                applying for. It is a good idea to check with the Government of
                Costa Rica or with a Costa Rican embassy or consulate for the
                most up-to-date information on the process for obtaining a work
                permit in the country.
                <br />
                <br />
                <span className="font-bold">
                  It is also a good idea to apply for your work permit well in
                  advance of your intended start date in Costa Rica, as
                  processing times can vary and you will need to have your work
                  permit in hand before you can begin working in the country. It
                  is generally a good idea to start the process at least a few
                  months in advance to ensure that you have enough time to
                  gather all of the necessary documents and to complete the
                  application process.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Costa Rica ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to study in Costa Rica, you will generally need to
                obtain a student visa before you can enter the country. A
                student visa is a document that allows you to study in Costa
                Rica for a specific period of time.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Costa Rica student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Costa Rica, you will generally
                need to follow these steps:
                <br />
                <br />● Gather all of the necessary documents for your student
                visa application. This will include a valid passport or travel
                document, proof of acceptance to a recognized educational
                institution in Costa Rica, proof of your financial resources to
                support yourself while you are studying in Costa Rica, and any
                additional documents that may be required depending on the type
                of student visa you are applying for.
                <br />
                <br />● Submit your student visa application to the Costa Rican
                embassy or consulate in your country of residence. You may need
                to make an appointment to do this, and you may need to pay a fee
                for processing your application.
                <br />
                <br />● Wait for a decision on your student visa application.
                Processing times can vary, so it is a good idea to apply for
                your student visa well in advance of your intended start date in
                Costa Rica.
                <br />
                <br />● Once your student visa has been approved, you will need
                to register with the Costa Rican immigration authorities upon
                arrival in the country. This will typically involve providing
                proof of your student visa, paying a fee, and providing
                biometric information, such as fingerprints and a photograph.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Costa Rica student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Costa Rica, you will generally
                need to meet the following requirements:
                <br />
                <br />● Have a valid passport or travel document: You will need
                to provide a copy of your passport or travel document with your
                student visa application. Your passport must be valid for at
                least six months beyond the date of your intended arrival in
                Costa Rica.
                <br />
                <br />● Have been accepted to a recognized educational
                institution in Costa Rica: You will need to provide proof of
                acceptance to a recognized educational institution in Costa
                Rica, such as a letter of acceptance or a certificate of
                enrollment.
                <br />
                <br />● Have sufficient financial resources to support yourself
                while you are studying in Costa Rica: You will need to provide
                evidence of your financial resources, such as bank statements or
                a letter from your sponsor stating that they will provide
                financial support.
                <br />
                <br />● Have no criminal record: You will need to provide a
                police clearance certificate or a certificate of good conduct
                from your country of residence.
                <br />
                <br />● Meet any additional requirements that are specific to
                the type of student visa you are applying for: Depending on the
                type of student visa you are applying for, you may need to
                provide additional documents or information, such as proof of
                medical insurance or proof of your proficiency in the Spanish
                language.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Costa Rica student Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Costa Rica will
                depend on the specific type of student visa you are applying for
                and your specific circumstances.
                <br />
                <br /> Student visas in Costa Rica are generally issued for a
                specific period of time, and the length of the visa will depend
                on the duration of your studies in the country. For example, if
                you are studying for a semester or a year, your student visa
                will typically be valid for that same period of time.
                <br />
                <br />
                <span className="font-bold">
                  The price of a student visa in Costa Rica will also vary
                  depending on the specific type of student visa you are
                  applying for and your specific circumstances. There may be
                  fees for processing your student visa application, as well as
                  fees for registering with the Costa Rican immigration
                  authorities upon arrival in the country. It is a good idea to
                  check with the Government of Costa Rica or with a Costa Rican
                  embassy or consulate for the most up-to-date information on
                  the fees for your specific situation.
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

export default CostaRica;
