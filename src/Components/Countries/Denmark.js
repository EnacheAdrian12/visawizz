import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Denmark = () => {
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
        <title>Denmark</title>
        <meta name="description" content="Denmark" />
        <meta
          name="keywords"
          content="Denmark travel visa, Denmark work visa, Denmark study visa, How to apply for an Denmark visa, Denmark visa requirements, Denmark tourist visa, Denmark student visa, Denmark business visa, Denmark visa processing time, Denmark visa application process, Denmark visa for Americans, Denmark visa for Europeans, Denmark visa for Denmarkns, Denmark visa for Canadians, Denmark visa for Indians, Denmark visa for Chinese, Denmark visa for Africans, Denmark visa for Asians, Denmark visa for South Americans, Denmark visa for Middle Easterners, Denmark visa for UK citizens, Denmark visa for EU citizens, Denmark visa for Schengen area, Denmark visa for non-EU citizens, Denmark visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Denmark
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Denmark is a small country located in Northern Europe. It is well
              known for its beautiful landscapes, its rich cultural heritage,
              and its high quality of life. Denmark is known for its many
              stunning beaches, which are popular among tourists, and its many
              national parks and protected areas, which are home to a rich array
              of plant and animal life. The country is also known for its
              delicious cuisine, which features a variety of fresh, local
              ingredients, and its thriving design and fashion industries, which
              are known for their innovative and high-quality products. Some
              other things that Denmark is known for include its vibrant arts
              and music scene, and its many historical and cultural attractions,
              such as the capital city of Copenhagen and the Rosenborg Castle.
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
                Who can enter Denmark without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are able to enter Denmark without
                a visa for short stays of up to 90 days within a 180-day period.
                These countries include:
                <br /> <br />● European Union (EU) countries
                <br /> <br />● European Economic Area (EEA) countries (Iceland,
                Liechtenstein, Norway)
                <br /> <br />● Switzerland
                <br /> <br />●
                <span className="font-bold">
                  Andorra, Argentina, Australia, Bahrain, Brazil, Canada, Chile,
                  Costa Rica, Georgia, Israel, Japan, Kuwait, Mexico, New
                  Zealand, Qatar, San Marino, South Korea, United Arab Emirates,
                  United States, Uruguay, Vatican City.
                </span>
                <br />
                <br />
                Note that the list of countries whose citizens are able to enter
                Denmark without a visa may change over time, so it's always a
                good idea to check with the Danish authorities or with the
                Danish embassy or consulate in your country of residence for the
                most up-to-date information.
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of a country that is not on this list,
                  you will generally need to obtain a visa in order to enter
                  Denmark. There are several different types of visas available,
                  depending on the purpose of your visit and the length of your
                  intended stay. You can find more information about applying
                  for a visa to enter Denmark on the website of the Danish
                  Immigration Service.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Denmark Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Denmark, you will generally need to
                provide the following documents:
                <br /> <br />● A completed visa application form. You can obtain
                this form from the Danish embassy or consulate in your country
                of residence or online from the Danish Immigration Service
                website.
                <br /> <br />● A valid passport. Your passport must be valid for
                at least three months beyond the date of your intended departure
                from Denmark.
                <br /> <br />● Passport-sized photographs. You will need to
                provide two passport-sized photographs of yourself, taken within
                the past six months.
                <br /> <br />● Evidence of your purpose of visit. Depending on
                the purpose of your visit to Denmark, you may need to provide
                additional documentation. For example, if you are traveling for
                business, you may need to provide a letter of invitation from a
                Danish company. If you are traveling for tourism, you may need
                to provide proof of accommodation, such as a hotel booking. If
                you are traveling for studies, you may need to provide an
                acceptance letter from a Danish educational institution.
                <br /> <br />
                ● Evidence of sufficient financial means. You will need to
                provide evidence that you have enough money to support yourself
                during your stay in Denmark. This could be in the form of bank
                statements, credit card statements, or a letter from someone in
                Denmark stating that they will be providing you with financial
                support during your visit.
                <br /> <br />● Other documents may be required depending on your
                specific circumstances. For example, you may need to provide a
                medical certificate or a police clearance certificate. It's
                always a good idea to check with the Danish embassy or consulate
                in your country of residence for a complete list of documents
                required for your visa application.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Denmark Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Denmark, you will need to follow
                these steps:
                <br /> <br />● Determine which type of visa you need. There are
                several different types of visas available for travel to
                Denmark, depending on the purpose of your visit and the length
                of your intended stay. You can find more information about the
                different types of visas on the website of the Danish
                Immigration Service.
                <br /> <br />● Gather the required documents. You will need to
                collect a number of documents in order to apply for a visa to
                enter Denmark, including a completed visa application form, a
                valid passport, passport-sized photographs, and evidence of your
                purpose of visit and sufficient financial means. You may also
                need to provide other documents depending on your specific
                circumstances.
                <br /> <br />● Contact the Danish embassy or consulate in your
                country of residence. You will need to submit your visa
                application in person at the Danish embassy or consulate in your
                country of residence. You can find contact information for the
                embassy or consulate on the website of the Danish Immigration
                Service.
                <br /> <br />● Schedule an appointment to submit your
                application. You will generally need to schedule an appointment
                to submit your visa application in person at the Danish embassy
                or consulate. Make sure to allow enough time to schedule your
                appointment and gather all of the required documents. Submit
                your application. On the day of your appointment, bring all of
                the required documents to the Danish embassy or consulate. You
                will also need to pay a visa fee when you submit your
                application. Wait for a decision on your application. It may
                take several weeks for the embassy or consulate to process your
                visa application. Be patient and do not make any travel
                arrangements until you have received a decision on your
                application.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Denmark ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are allowed to stay in Denmark will
                depend on the type of visa you have obtained and the purpose of
                your visit.
                <br /> <br /> If you are a citizen of a country that is able to
                enter Denmark without a visa for short stays of up to 90 days
                within a 180-day period, you will generally be allowed to stay
                in Denmark for up to 90 days within a 180-day period. This
                applies to citizens of certain European Union (EU) countries,
                European Economic Area (EEA) countries (Iceland, Liechtenstein,
                Norway), Switzerland, and a number of other countries.
                <br /> <br /> If you have obtained a visa to enter Denmark for a
                specific purpose, such as business, tourism, or studies, your
                visa will generally allow you to stay in Denmark for the length
                of time necessary to accomplish the purpose of your visit. For
                example, if you have a student visa, you will generally be
                allowed to stay in Denmark for the duration of your studies, up
                to a maximum of two years.
                <br /> <br /> If you are planning to stay in Denmark for a
                longer period of time or for a purpose that is not covered by a
                specific visa category, you may need to apply for a residence
                permit. You can find more information about residence permits on
                the website of the Danish Immigration Service.
                <br /> <br />
                <span className="font-bold">
                  Note that the length of time you are allowed to stay in
                  Denmark may vary depending on your specific circumstances and
                  the type of visa you have obtained, so it's always a good idea
                  to check with the Danish authorities or with the Danish
                  embassy or consulate in your country of residence for the most
                  up-to-date information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Denmark ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are no covid-19 related restrictions on entry into
                Denmark.
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
                A diplomatic passport is a type of passport issued to diplomats
                and other government officials for the purpose of international
                travel on official business. Diplomatic passports are issued by
                the government of the diplomat's country of citizenship and are
                typically valid for a period of five years.
                <br /> <br /> Holders of diplomatic passports are entitled to a
                number of privileges and immunities while traveling abroad,
                including exemption from visa requirements, customs duties, and
                taxes. Diplomatic passports also allow their holders to receive
                assistance and protection from the diplomatic missions and
                consulates of their home country while abroad.
                <br /> <br /> In Denmark, diplomatic passports are issued by the
                Ministry of Foreign Affairs to Danish diplomats and other
                government officials who are traveling abroad on official
                business. Diplomatic passports issued by Denmark are generally
                valid for a period of five years and are recognized by other
                countries as valid travel documents.
                <br /> <br />
                <span className="font-bold">
                  It's worth noting that only certain individuals are eligible
                  to receive a diplomatic passport in Denmark, and the process
                  for obtaining one may vary depending on the applicant's
                  specific circumstances. If you are interested in obtaining a
                  diplomatic passport in Denmark, you should contact the
                  Ministry of Foreign Affairs for more information.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Denmark ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether or not you need a worker visa to work in Denmark will
                depend on your nationality and the length of your intended stay
                in the country.
                <br /> <br /> Citizens of the European Union (EU), European
                Economic Area (EEA) countries (Iceland, Liechtenstein, Norway),
                and Switzerland have the right to work in Denmark without a
                worker visa.
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of one of these countries, you are
                  generally allowed to work in Denmark for up to three months
                  without the need for a worker visa. If you are a citizen of a
                  country outside of the EU, EEA, and Switzerland, you will
                  generally need to obtain a worker visa in order to work in
                  Denmark. However, there are some exceptions to this rule. For
                  example, if you are a student from a non-EU/EEA country and
                  you have a valid student visa, you may be allowed to work in
                  Denmark without a worker visa for up to 20 hours per week
                  while you are studying.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Denmark Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Denmark, you will need to
                follow these steps: Determine if you are eligible for a worker
                visa. If you are a citizen of the European Union (EU), European
                Economic Area (EEA) countries (Iceland, Liechtenstein, Norway),
                or Switzerland, you are generally allowed to work in Denmark
                without a worker visa for up to three months. If you are a
                citizen of a country outside of the EU, EEA, and Switzerland,
                you will generally need to obtain a worker visa in order to work
                in Denmark.
                <br /> <br />● Gather the required documents. You will need to
                collect a number of documents in order to apply for a worker
                visa to work in Denmark, including a completed worker visa
                application form, a valid passport, passport-sized photographs,
                and a job offer from a Danish employer. You may also need to
                provide other documents depending on your specific
                circumstances.
                <br /> <br />● Contact the Danish embassy or consulate in your
                country of residence. You will need to submit your worker visa
                application in person at the Danish embassy or consulate in your
                country of residence. You can find contact information for the
                embassy or consulate on the website of the Danish Immigration
                Service.
                <br /> <br />● Schedule an appointment to submit your
                application. You will generally need to schedule an appointment
                to submit your worker visa application in person at the Danish
                embassy or consulate. Make sure to allow enough time to schedule
                your appointment and gather all of the required documents.
                <br /> <br />
                ● Submit your application. On the day of your appointment, bring
                all of the required documents to the Danish embassy or
                consulate. You will also need to pay a worker visa fee when you
                submit your application.
                <br /> <br />● Wait for a decision on your application. It may
                take several weeks for the embassy or consulate to process your
                worker visa application. Be patient and do not make any travel
                arrangements until you have received a decision on your
                application.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Denmark Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The main types of worker visas for Denmark are:
                <br /> <br />●{" "}
                <span className="font-bold">Short-term worker visa</span>: This
                type of visa allows you to work in Denmark for up to six months.
                It is suitable for temporary or seasonal work, or for working on
                a specific project. To apply for a short-term worker visa, you
                will need to provide a job offer from a Danish employer and
                evidence of sufficient financial means to support yourself
                during your stay in Denmark.
                <br /> <br />●{" "}
                <span className="font-bold">Temporary worker visa</span>: This
                type of visa allows you to work in Denmark for up to two years.
                It is suitable for longer-term work, such as work in connection
                with research, training, or an exchange program. To apply for a
                temporary worker visa, you will need to provide a job offer from
                a Danish employer and evidence of sufficient financial means to
                support yourself during your stay in Denmark.
                <br /> <br />●{" "}
                <span className="font-bold">Highly skilled worker visa</span>:
                This type of visa allows you to work in Denmark for up to four
                years. It is suitable for highly skilled workers who have a job
                offer from a Danish employer and meet certain income
                requirements. To apply for a highly skilled worker visa, you
                will need to provide a job offer from a Danish employer and
                evidence of sufficient financial means to support yourself
                during your stay in Denmark.
                <br /> <br />●{" "}
                <span className="font-bold">Greencard permit</span>: This type
                of permit allows you to work in Denmark for up to three years.
                It is suitable for highly skilled workers who have a job offer
                from a Danish employer and meet certain income and education
                requirements. To apply for a Greencard permit, you will need to
                provide a job offer from a Danish employer and evidence of
                sufficient financial means to support yourself during your stay
                in Denmark.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Denmark Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Denmark, you will
                generally need to provide the following documents:
                <br /> <br />● A completed worker visa application form. You can
                obtain this form from the Danish embassy or consulate in your
                country of residence or online from the Danish Immigration
                Service website.
                <br /> <br />● A valid passport. Your passport must be valid for
                at least three months beyond the date of your intended departure
                from Denmark.
                <br /> <br />● Passport-sized photographs. You will need to
                provide two passport-sized photographs of yourself, taken within
                the past six months.
                <br /> <br />● A job offer from a Danish employer. You will need
                to provide a written job offer from a Danish employer, stating
                the details of your employment, including the length of your
                contract and your salary.
                <br /> <br />● Evidence of sufficient financial means. You will
                need to provide evidence that you have enough money to support
                yourself during your stay in Denmark. This could be in the form
                of bank statements, credit card statements, or a letter from
                your employer stating that they will be providing you with
                financial support during your stay in the country.
                <br /> <br />● Other documents may be required depending on your
                specific circumstances. For example, you may need to provide a
                medical certificate or a police clearance certificate. It's
                always a good idea to check with the Danish embassy or consulate
                in your country of residence for a complete list of documents
                required for your worker visa application.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Denmark ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Denmark, you will need to
                contact the Danish embassy or consulate in your country of
                residence. You will generally need to submit your worker visa
                application in person at the embassy or consulate, so it's a
                good idea to check their website or contact them directly to
                find out their specific location and hours of operation.
                <br /> <br /> You will generally need to schedule an appointment
                to submit your worker visa application in person at the Danish
                embassy or consulate. Make sure to allow enough time to schedule
                your appointment and gather all of the required documents.
                <br /> <br /> It's worth noting that the worker visa application
                process can take several weeks to complete, so it's a good idea
                to start the process as early as possible. You should not make
                any travel arrangements until you have received a decision on
                your worker visa application.
                <br /> <br /> If you are currently living in Denmark on a
                different type of visa and you want to apply for a worker visa,
                you will generally need to apply for the worker visa while you
                are still in Denmark. In this case, you will need to contact the
                Danish Immigration Service (Udlændingestyrelsen) for more
                information on the worker visa application process.
                <br /> <br />
                <span className="font-bold">
                  If you have any questions about the worker visa application
                  process for Denmark, it's always a good idea to check with the
                  Danish embassy or consulate in your country of residence or
                  with the Danish Immigration Service for the most up-to-date
                  information.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Denmark ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether or not you need a visa to study in Denmark will depend
                on your nationality and the length of your intended stay in the
                country.
                <br /> <br />
                <span className="font-bold">
                  Citizens of the European Union (EU), European Economic Area
                  (EEA) countries (Iceland, Liechtenstein, Norway), and
                  Switzerland have the right to study in Denmark without a visa.
                  If you are a citizen of one of these countries, you are
                  generally allowed to study in Denmark for up to three months
                  without the need for a visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Denmark student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Denmark, you will need
                to follow these steps:
                <br /> <br />● Determine if you are eligible for a student visa.
                If you are a citizen of the European Union (EU), European
                Economic Area (EEA) countries (Iceland, Liechtenstein, Norway),
                or Switzerland, you are generally allowed to study in Denmark
                without a student visa for up to three months. If you are a
                citizen of a country outside of the EU, EEA, and Switzerland,
                you will generally need to obtain a student visa in order to
                study in Denmark.
                <br /> <br />● Gather the required documents. You will need to
                collect a number of documents in order to apply for a student
                visa, including evidence of acceptance into a Danish educational
                institution and proof that you have sufficient financial means
                to support yourself during your stay in Denmark. You may also
                need to provide other documents depending on your specific
                circumstances.
                <br /> <br />● Contact the Danish embassy or consulate in your
                country of residence. You will need to submit your student visa
                application in person at the Danish embassy or consulate in your
                country of residence. You can find contact information for the
                embassy or consulate on the website of the Danish Immigration
                Service.
                <br /> <br />● Schedule an appointment to submit your
                application. You will generally need to schedule an appointment
                to submit your student visa application in person at the Danish
                embassy or consulate. Make sure to allow enough time to schedule
                your appointment and gather all of the required documents.
                <br /> <br />
                ● Submit your application. On the day of your appointment, bring
                all of the required documents to the Danish embassy or
                consulate. You will also need to pay a student visa fee when you
                submit your application.
                <br /> <br />● Wait for a decision on your application. It may
                take several weeks for the embassy or consulate to process your
                student visa application. Be patient and do not make any travel
                arrangements until you have received a decision on your
                application.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Denmark student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Denmark, you will
                generally need to provide the following documents:
                <br /> <br />● A completed student visa application form. You
                can obtain this form from the Danish embassy or consulate in
                your country of residence or online from the Danish Immigration
                Service website.
                <br /> <br />● A valid passport. Your passport must be valid for
                at least three months beyond the date of your intended departure
                from Denmark.
                <br /> <br />● Passport-sized photographs. You will need to
                provide two passport-sized photographs of yourself, taken within
                the past six months.
                <br /> <br />● Evidence of acceptance into a Danish educational
                institution. You will need to provide evidence that you have
                been accepted into a Danish educational institution, such as a
                letter of acceptance from the institution.
                <br /> <br />● Evidence of sufficient financial means. You will
                need to provide evidence that you have enough money to support
                yourself during your stay in Denmark. This could be in the form
                of bank statements, credit card statements, or a letter from
                your sponsor stating that they will be providing you with
                financial support during your stay in the country.
                <br /> <br />● Other documents may be required depending on your
                specific circumstances. For example, you may need to provide a
                medical certificate or a police clearance certificate. It's
                always a good idea to check with the Danish embassy or consulate
                in your country of residence for a complete list of documents
                required for your student visa application.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Denmark student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Denmark will depend
                on your specific circumstances and the length of your intended
                stay in the country.
                <br /> <br /> If you are a citizen of the European Union (EU),
                European Economic Area (EEA) countries (Iceland, Liechtenstein,
                Norway), or Switzerland, you are generally allowed to study in
                Denmark without a student visa for up to three months. If you
                are a citizen of a country outside of the EU, EEA, and
                Switzerland, you will generally need to obtain a student visa in
                order to study in Denmark.
                <br /> <br /> The validity of a student visa for Denmark will
                generally be determined based on the length of your studies. If
                you are studying for a period of more than three months, you
                will generally need to apply for a student visa that is valid
                for the duration of your studies. If you are studying for a
                period of three months or less, you may be able to obtain a
                student visa that is valid for the duration of your studies or a
                shorter period of time.
                <br /> <br /> The price of a student visa for Denmark will
                generally depend on the length of your intended stay in the
                country. Student visas are typically valid for the duration of
                your studies, up to a maximum of five years. The price of a
                student visa will generally be based on the length of your
                intended stay in Denmark, with longer stays generally costing
                more.
                <br /> <br />
                <span className="font-bold">
                  If you are planning to study in Denmark and you need to apply
                  for a student visa, it's always a good idea to check with the
                  Danish embassy or consulate in your country of residence for
                  the most up-to-date information on the validity and price of a
                  student visa. They can provide you with specific information
                  based on your individual circumstances and the length of your
                  intended stay in the country.
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

export default Denmark;
