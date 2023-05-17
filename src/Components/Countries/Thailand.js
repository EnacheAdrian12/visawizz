import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Thailand = () => {
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
        <title>Thailand</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content=
          "Thailand travel visa, Thailand work visa, Thailand study visa, How to apply for an Thailand visa, Thailand visa requirements, Thailand tourist visa, Thailand student visa, Thailand business visa, Thailand visa processing time, Thailand visa application process, Thailand visa for Americans, Thailand visa for Europeans, Thailand visa for Sudanns, Thailand visa for Canadians, Thailand visa for Sudanns, Thailand visa for Chinese, Thailand visa for Africans, Thailand visa for Asians, Thailand visa for South Americans, Thailand visa for Middle Easterners, Thailand visa for UK citizens, Thailand visa for EU citizens, Thailand visa for Schengen area, Thailand visa for non-EU citizens, Thailand visa fees and charges"
          
        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Thailand
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Thailand is a large country located in Southeast Asia. It is known
              for its beautiful beaches, lush forests, and vibrant culture.
              Thailand is also famous for its delicious cuisine, which features
              a unique blend of sweet, sour, and spicy flavors. In addition, the
              country is known for its unique architecture, including ornate
              temples and towering stupas. Thailand is also home to many unique
              species of plants and animals, including elephants, monkeys, and
              tigers.
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
                Who can enter Thailand without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of some countries are able to enter Thailand without a
                visa for short stays, provided they meet certain requirements.
                These countries include:
                <br />
                <br />
                <span className="font-bold">
                  Australia, Austria, Belgium, Bahrain, Brunei, Canada, Czech
                  Republic, Denmark, Estonia, Finland, France, Germany, Greece,
                  Hong Kong, Hungary, Iceland, Indonesia, Ireland, Israel,
                  Italy, Japan, Kuwait, Laos, Latvia, Liechtenstein, Lithuania,
                  Luxembourg, Malaysia, Monaco, the Netherlands, New Zealand,
                  Norway, Oman, the Philippines, Poland, Portugal, Qatar,
                  Russia, Singapore, Slovakia, Slovenia, South Africa, South
                  Korea, Spain, Sweden, Switzerland, Taiwan, the United Arab
                  Emirates, the United Kingdom, the United States, Vietnam.
                </span>
                <br />
                <br />
                Citizens of these countries are generally able to enter Thailand
                without a visa for stays of up to 30 days. If you wish to stay
                longer, you will need to apply for a visa before traveling to
                Thailand.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements for entering
                  Thailand without a visa can change, so it's always a good idea
                  to check with the Royal Thai Embassy or Consulate in your
                  country before traveling.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Thailand Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Thailand, you will need to have the
                following documents:
                <br />
                <br />
                ● A valid passport with at least 6 months of remaining validity
                and at least one blank page for the visa.
                <br />
                <br />
                ● A completed visa application form, which can be obtained from
                the Royal Thai Embassy or Consulate in your country.
                <br />
                <br />
                ● Two recent passport-sized photographs of yourself.
                <br />
                <br />
                ● Evidence of your purpose of visit, such as a letter of
                invitation from a company or organization in Thailand, or a
                letter of confirmation from a hotel or tour operator.
                <br />
                <br />
                ● Evidence of sufficient funds to support your stay in Thailand,
                such as bank statements or a letter from your employer.
                <br />
                <br />
                ● Any other documents that may be required, depending on the
                type of visa you are applying for. For example, if you are
                applying for a business visa, you may need to provide a letter
                from your employer or a copy of your business registration.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements for obtaining a
                  visa to Thailand may vary depending on your country of
                  citizenship and the type of visa you are applying for. It's
                  always a good idea to check with the Royal Thai Embassy or
                  Consulate in your country for the most up-to-date information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Thailand Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Thailand, you will need to follow these
                steps:
                <br />
                <br />
                ● Determine the type of visa you need. There are several types
                of visas available for Thailand, including tourist visas,
                business visas, and student visas. Choose the type of visa that
                best fits your purpose of visit.
                <br />
                <br />
                ● Gather the necessary documents. To apply for a visa to
                Thailand, you will need a valid passport with at least 6 months
                of remaining validity and at least one blank page for the visa,
                as well as a completed visa application form, two passport-sized
                photographs, and any other documents required for the type of
                visa you are applying for.
                <br />
                <br />
                ● Submit your application. You can submit your visa application
                in person at the Royal Thai Embassy or Consulate in your
                country, or you may be able to apply online through an
                authorized visa agent.
                <br />
                <br />● Pay the visa fee. You will need to pay a fee to obtain a
                visa to Thailand. The fee amount will depend on the type of visa
                you are applying for and your country of citizenship.
                <br />
                <br />
                ● Wait for a decision. It may take several weeks for your
                application to be processed. You will be notified by the embassy
                or consulate when a decision has been made on your application.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements and process for
                  obtaining a visa to Thailand may vary depending on your
                  country of citizenship and the type of visa you are applying
                  for. It's always a good idea to check with the Royal Thai
                  Embassy or Consulate in your country for the most up-to-date
                  information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Thailand?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are able to stay in Thailand depends on
                the type of visa you have and your country of citizenship.
                <br />
                <br />
                If you are a citizen of one of the countries that is eligible to
                enter Thailand without a visa, you will be able to stay in the
                country for up to 30 days.
                <br />
                <br />
                If you have a <span className="font-bold">tourist visa</span>,
                you will typically be able to stay in Thailand for a maximum of
                60 days.
                <br />
                <br />
                If you have a{" "}
                <span className="font-bold">non-immigrant visa</span>, such as a
                business visa or student visa, you will typically be able to
                stay in Thailand for a period of up to 90 days.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the length of time you are
                  permitted to stay in Thailand may vary depending on your
                  specific circumstances and the type of visa you have. It's
                  always a good idea to check with the Royal Thai Immigration
                  Department or the Royal Thai Embassy or Consulate in your
                  country for the most up-to-date information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Thailand?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Thailand classifies COVID-19 as a communicable disease under
                surveillance, meaning that COVID-19 is treated similar to a
                seasonal flu virus. You do not need to present COVID-19 related
                documents such as certificate of vaccination and COVID-19 test
                results upon arrival in Thailand. Mask wearing is a voluntary
                practice.
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
                diplomats and other government officials for the purpose of
                conducting official business on behalf of their country.
                Diplomatic passports are issued by the government of the
                individual's country of citizenship, and are usually valid for a
                period of 5 years.
                <br />
                <br />
                Diplomatic passports have a number of privileges and exemptions,
                including:
                <br />
                <br />
                ● Exemption from visa requirements in some countries.
                <br />
                <br />
                ● Priority processing at border crossings.
                <br />
                <br />
                ● Exemption from customs duties on personal effects and other
                items.
                <br />
                <br />
                ● Special privileges and assistance in the event of detention or
                arrest.
                <br />
                <br />
                In Thailand, diplomatic passport holders are generally granted
                visa-free entry for stays of up to 90 days. They are also exempt
                from paying the visa-on-arrival fee, and are not required to
                register with the local authorities if their stay is less than
                90 days.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the privileges and exemptions
                  granted to diplomatic passport holders may vary from country
                  to country, and it's always a good idea to check with the
                  local authorities or the embassy of your country of
                  citizenship for the most up-to-date information.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Thailand?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you plan to work in Thailand, you will typically need to have
                a valid work visa. A work visa is a type of non-immigrant visa
                that allows you to legally work in Thailand for a specific
                period of time.
                <br />
                <br />
                To apply for a work visa in Thailand, you will need to have a
                job offer from a Thai employer, and your employer will need to
                sponsor your work visa application. You will also need to meet
                certain requirements, such as having a bachelor's degree or
                higher, and having a minimum of 2 years of work experience in
                your field.
                <br />
                <br />
                Once you have gathered all of the necessary documents, you can
                submit your work visa application at the Royal Thai Embassy or
                Consulate in your country. If your application is approved, you
                will be issued a work visa, which will allow you to enter
                Thailand and work for your Thai employer.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements for obtaining a
                  work visa in Thailand may vary depending on your specific
                  circumstances and the type of work you will be doing in
                  Thailand. It's always a good idea to check with the Royal Thai
                  Embassy or Consulate in your country for the most up-to-date
                  information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Thailand Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa in Thailand, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine if you are eligible for a work visa. To be eligible
                for a work visa in Thailand, you will typically need to have a
                job offer from a Thai employer, a bachelor's degree or higher,
                and a minimum of 2 years of work experience in your field.
                <br />
                <br />
                ● Gather the necessary documents. To apply for a work visa, you
                will need to have a valid passport with at least 6 months of
                remaining validity, a completed visa application form, two
                recent passport-sized photographs, a letter of employment from
                your Thai employer, evidence of your qualifications and work
                experience, and a police clearance certificate from your country
                of citizenship.
                <br />
                <br />
                ● Submit your application. You can submit your work visa
                application in person at the Royal Thai Embassy or Consulate in
                your country, or you may be able to apply online through an
                authorized visa agent.
                <br />
                <br />
                ● Pay the visa fee. You will need to pay a fee to obtain a work
                visa in Thailand. The fee amount will depend on your country of
                citizenship and the type of work visa you are applying for.
                <br />
                <br />
                ● Wait for a decision. It may take several weeks for your
                application to be processed. You will be notified by the embassy
                or consulate when a decision has been made on your application.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements and process for
                  obtaining a work visa in Thailand may vary depending on your
                  specific circumstances and the type of work you will be doing
                  in Thailand. It's always a good idea to check with the Royal
                  Thai Embassy or Consulate in your country for the most
                  up-to-date information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Thailand Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of work visas available in Thailand,
                depending on the nature of your work and the length of your
                stay. Some of the most common types of work visas in Thailand
                include:
                <br />
                <br />
                <span className="font-bold">
                  Non-Immigrant Visa Category "B" (Business Visa)
                </span>
                : This type of visa is suitable for those who wish to work in
                Thailand on a short-term basis, such as for business meetings or
                conferences. This visa is typically valid for a period of 90
                days and can be extended for an additional 90 days.
                <br />
                <br />
                <span className="font-bold">
                  Non-Immigrant Visa Category "O" (Long-Term Stay Visa)
                </span>
                : This type of visa is suitable for those who wish to work in
                Thailand on a long-term basis, such as for a full-time job or to
                set up a business. This visa is typically valid for a period of
                1 year and can be extended for an additional 1-3 years.
                <br />
                <br />
                <span className="font-bold">
                  Non-Immigrant Visa Category "IB" (Investment Visa)
                </span>
                : This type of visa is suitable for those who wish to work in
                Thailand as an investor or entrepreneur. This visa is typically
                valid for a period of 1 year and can be extended for an
                additional 1-3 years.
                <br />
                <br />
                <span className="font-bold">
                  Non-Immigrant Visa Category "ED" (Education Visa)
                </span>
                : This type of visa is suitable for those who wish to work in
                Thailand as a teacher or researcher. This visa is typically
                valid for a period of 1 year and can be extended for an
                additional 1-3 years.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements and eligibility
                  for each type of work visa may vary, and it's always a good
                  idea to check with the Royal Thai Embassy or Consulate in your
                  country for the most up-to-date information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Thailand Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa in Thailand, you will need to have the
                following documents:
                <br />
                <br />
                ● A valid passport with at least 6 months of remaining validity.
                <br />
                <br />
                ● A completed visa application form.
                <br />
                <br />
                ● Two recent passport-sized photographs.
                <br />
                <br />
                ● A letter of employment from your Thai employer.
                <br />
                <br />
                ● Evidence of your qualifications and work experience.
                <br />
                <br />
                ● A police clearance certificate from your country of
                citizenship.
                <br />
                <br />
                Your Thai employer will also need to provide a number of
                supporting documents, including:
                <br />
                <br />
                ● A copy of the company's business registration.
                <br />
                <br />
                ● A letter of support for your work visa application.
                <br />
                <br />
                ● Evidence of the company's financial status.
                <br />
                <br />
                ● Evidence of the company's business activities.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific documents required
                  for a work visa in Thailand may vary depending on your
                  specific circumstances and the type of work you will be doing
                  in Thailand. It's always a good idea to check with the Royal
                  Thai Embassy or Consulate in your country for the most
                  up-to-date information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Thailand?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You can apply for a work visa in Thailand at the Royal Thai
                Embassy or Consulate in your country. You can find a list of
                Thai embassies and consulates on the website of the Ministry of
                Foreign Affairs of Thailand.
                <br />
                <br />
                You can apply for a work visa at any time, although it's
                generally a good idea to apply well in advance of your intended
                departure date to allow enough time for your application to be
                processed. It may take several weeks for your work visa
                application to be processed, so it's important to plan ahead.
                <br />
                <br />
                To apply for a work visa, you will need to have a job offer from
                a Thai employer, and your employer will need to sponsor your
                work visa application. You will also need to meet certain
                requirements, such as having a bachelor's degree or higher, and
                having a minimum of 2 years of work experience in your field.
                <br />
                <br />
                Once you have gathered all of the necessary documents, you can
                submit your work visa application at the Royal Thai Embassy or
                Consulate in your country. If your application is approved, you
                will be issued a work visa, which will allow you to enter
                Thailand and work for your Thai employer.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements and process for
                  obtaining a work visa in Thailand may vary depending on your
                  specific circumstances and the type of work you will be doing
                  in Thailand. It's always a good idea to check with the Royal
                  Thai Embassy or Consulate in your country for the most
                  up-to-date information.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Thailand?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you plan to study in Thailand, you will typically need to
                have a valid student visa. A student visa is a type of
                non-immigrant visa that allows you to legally study in Thailand
                for a specific period of time.
                <br />
                <br />
                To apply for a student visa in Thailand, you will need to be
                accepted into a recognized educational institution in Thailand,
                and your educational institution will need to sponsor your
                student visa application. You will also need to meet certain
                requirements, such as having a high school diploma or higher,
                and having a minimum of intermediate proficiency in the language
                of instruction.
                <br />
                <br />
                Once you have gathered all of the necessary documents, you can
                submit your student visa application at the Royal Thai Embassy
                or Consulate in your country. If your application is approved,
                you will be issued a student visa, which will allow you to enter
                Thailand and study at your educational institution.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements and process for
                  obtaining a student visa in Thailand may vary depending on
                  your specific circumstances and the type of educational
                  program you will be enrolling in. It's always a good idea to
                  check with the Royal Thai Embassy or Consulate in your country
                  for the most up-to-date information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Thailand Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Thailand, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine if you are eligible for a student visa. To be
                eligible for a student visa in Thailand, you will typically need
                to be accepted into a recognized educational institution in
                Thailand, have a high school diploma or higher, and have a
                minimum of intermediate proficiency in the language of
                instruction.
                <br />
                <br />
                ● Gather the necessary documents. To apply for a student visa,
                you will need to have a valid passport with at least 6 months of
                remaining validity, a completed visa application form, two
                recent passport-sized photographs, a letter of acceptance from
                your educational institution in Thailand, evidence of your
                qualifications and language proficiency, and a police clearance
                certificate from your country of citizenship.
                <br />
                <br />
                ● Submit your application. You can submit your student visa
                application in person at the Royal Thai Embassy or Consulate in
                your country, or you may be able to apply online through an
                authorized visa agent.
                <br />
                <br />
                ● Pay the visa fee. You will need to pay a fee to obtain a
                student visa in Thailand. The fee amount will depend on your
                country of citizenship and the type of student visa you are
                applying for.
                <br />
                <br />
                ● Wait for a decision. It may take several weeks for your
                application to be processed. You will be notified by the embassy
                or consulate when a decision has been made on your application.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements and process for
                  obtaining a student visa in Thailand may vary depending on
                  your specific circumstances and the type of educational
                  program you will be enrolling in. It's always a good idea to
                  check with the Royal Thai Embassy or Consulate in your country
                  for the most up-to-date information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Thailand Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a student visa in Thailand, you will
                typically need to meet the following requirements:
                <br />
                <br />
                ● Be accepted into a recognized educational institution in
                Thailand, such as a university or language school.
                <br />
                <br />
                ● Have a high school diploma or higher.
                <br />
                <br />
                ● Have a minimum of intermediate proficiency in the language of
                instruction.
                <br />
                <br />
                ● Have sufficient financial resources to support your stay in
                Thailand.
                <br />
                <br />
                ● Have a valid passport with at least 6 months of remaining
                validity.
                <br />
                <br />
                In addition to meeting these general requirements, you will also
                need to provide the following documents as part of your student
                visa application:
                <br />
                <br />
                ● A completed visa application form.
                <br />
                <br />
                ● Two recent passport-sized photographs.
                <br />
                <br />
                ● A letter of acceptance from your educational institution in
                Thailand.
                <br />
                <br />
                ● Evidence of your qualifications and language proficiency.
                <br />
                <br />
                ● A police clearance certificate from your country of
                citizenship.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the requirements for obtaining a
                  student visa in Thailand may vary depending on your specific
                  circumstances and the type of educational program you will be
                  enrolling in. It's always a good idea to check with the Royal
                  Thai Embassy or Consulate in your country for the most
                  up-to-date information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Thailand Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Thailand will depend
                on the length of your intended stay and your country of
                citizenship.
                <br />
                <br />
                Student visas in Thailand are typically valid for a period of 1
                year and can be extended for an additional 1-3 years, depending
                on the length of your educational program.
                <br />
                <br />
                The price of a student visa in Thailand will depend on your
                country of citizenship and the type of student visa you are
                applying for. Student visas typically range in price from around
                2,000 to 5,000 Thai baht (approximately $64 to $160).
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the validity and price of a
                  student visa in Thailand may vary depending on your specific
                  circumstances and the type of educational program you will be
                  enrolling in. It's always a good idea to check with the Royal
                  Thai Embassy or Consulate in your country for the most
                  up-to-date information.
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

export default Thailand;
