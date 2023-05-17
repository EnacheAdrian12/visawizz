import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Canada = () => {
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
        <title>Canada</title>
        <meta name="description" content="Canada" />
        <meta
          name="keywords"
          content="Canada travel visa, Canada work visa, Canada study visa, How to apply for an Canada visa, Canada visa requirements, Canada tourist visa, Canada student visa, Canada business visa, Canada visa processing time, Canada visa application process, Canada visa for Americans, Canada visa for Europeans, Canada visa for Canadans, Canada visa for Canadians, Canada visa for Indians, Canada visa for Chinese, Canada visa for Africans, Canada visa for Asians, Canada visa for South Americans, Canada visa for Middle Easterners, Canada visa for UK citizens, Canada visa for EU citizens, Canada visa for Schengen area, Canada visa for non-EU citizens, Canada visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Canada
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Canada is a large country located in North America, and it is well
              known for its beautiful natural landscapes, vibrant culture, and
              friendly people. Some of the most notable things that Canada is
              known for include its stunning national parks, such as Banff and
              Jasper, its rich cultural heritage and history, which can be seen
              in its many museums and historic sites, and its vibrant arts and
              music scenes. Additionally, Canada is known for its cold weather
              and snow, which is a defining feature of the country's climate.
              Finally, Canada is known for its friendly and welcoming people,
              who are known for their warmth and hospitality.
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
                Who can enter Canada without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                There are a number of countries whose citizens are eligible to
                travel to Canada without a visa. These countries are known as
                visa-exempt countries, and their citizens are able to enter
                Canada as tourists or for business purposes for a period of up
                to six months without a visa.
                <br />
                <br /> The list of visa-exempt countries for Canada may change
                over time, so it is a good idea to check with the Government of
                Canada's website or with the Canadian embassy or consulate in
                your country of residence for the most up-to-date information on
                visa-exempt countries.
                <br />
                <br /> In addition to citizens of visa-exempt countries, there
                are a number of other individuals who are able to enter Canada
                without a visa, including:
                <br />
                <br />● Permanent residents of the United States
                <br />
                <br />● Citizens of the United States
                <br />
                <br />● Members of the military who are traveling on official
                orders
                <br />
                <br />● Diplomatic and consular staff of other countries.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that even if you are a citizen of a
                  visa-exempt country or are eligible to enter Canada without a
                  visa for other reasons, you may still need to obtain an
                  Electronic Travel Authorization (eTA) to travel to Canada. An
                  eTA is an electronic document that allows you to travel to
                  Canada by air and is required for most foreign nationals who
                  are visa-exempt. You can apply for an eTA online through the
                  Government of Canada's website.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Canada Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                In general, you will need to provide the following documents as
                part of your visa application:
                <br />
                <br />● A completed visa application form, which you can obtain
                from the Government of Canada's website or from a Canadian
                embassy or consulate.
                <br />
                <br />● A valid passport or travel document. Your passport
                should be valid for at least six months beyond the date you
                intend to leave Canada.
                <br />
                <br />● Two recent passport-sized photographs.
                <br />
                <br />● Any additional documents that are specific to the type
                of visa you are applying for, such as proof of your employment,
                educational qualifications, or family relationships.
                <br />
                <br />● Payment of the visa processing fee.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Canada Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to travel to Canada, you will need to follow
                these steps:
                <br />
                <br />● Determine the type of visa you need based on the length
                of your stay and the purpose of your visit to Canada. There are
                several types of visas available to travel to Canada, including
                visitor visas, work visas, study visas, and permanent residence
                visas.
                <br />
                <br />● Gather all of the necessary documents for your visa
                application. This will include a completed visa application
                form, a valid passport or travel document, passport-sized
                photographs, and any additional documents that are specific to
                the type of visa you are applying for.
                <br />
                <br />● Choose the method for submitting your visa application.
                You can generally apply for a visa to Canada online through the
                Government of Canada's website, or you can apply in person at a
                Canadian embassy or consulate.
                <br />
                <br />● Submit your visa application and pay the processing fee.
                If you are applying online, you will generally need to upload
                your documents and pay the fee through the Government of
                Canada's website. If you are applying in person, you will need
                to bring your documents and the fee to the embassy or consulate.
                <br />
                <br />● Wait for a decision on your visa application. Processing
                times can vary, so it is a good idea to apply for your visa well
                in advance of your intended travel date.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Canada ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are able to stay in Canada will depend on
                the type of visa you have and the purpose of your visit.
                <br />
                <br /> If you are a visitor to Canada and have a visitor visa or
                an Electronic Travel Authorization (eTA), you will generally be
                able to stay in Canada for a period of up to six months. If you
                want to stay longer, you will need to apply for an extension to
                your visitor visa before it expires.
                <br />
                <br /> If you have a work or study visa, the length of your stay
                in Canada will generally be determined by the length of your
                work or study program. You may be able to apply for an extension
                to your work or study visa if you want to stay in Canada for a
                longer period of time.
                <br />
                <br />
                <span className="font-bold">
                  If you are a permanent resident of Canada, you will generally
                  be able to stay in Canada indefinitely, as long as you meet
                  the requirements for maintaining your permanent resident
                  status.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Canada ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The Canadian government allowed its final COVID-19 entry
                restrictions to expire, ending random testing and vaccine
                requirements.
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
                diplomats and other officials who are representing their country
                in an official capacity. Diplomatic passports are issued by the
                government of the diplomat's home country and are typically used
                for official travel, such as attending conferences or conducting
                negotiations on behalf of the home country.
                <br />
                <br /> Diplomatic passports are generally considered to be a
                form of official identification and are recognized as such by
                other countries. Diplomats who hold a diplomatic passport are
                generally entitled to a number of privileges and immunities
                while traveling on official business, such as immunity from
                arrest or detention and exemption from immigration controls.
                <br />
                <br />
                <span className="font-bold">
                  In Canada, diplomatic passports are issued by the Department
                  of Foreign Affairs, Trade, and Development (DFATD) to Canadian
                  diplomats and other officials who are traveling on official
                  business. Diplomatic passports issued by Canada are generally
                  valid for five years and are renewable.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Canada ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a foreign national and you want to work in Canada,
                you will generally need to obtain a work permit. A work permit
                is a document that allows you to work in Canada for a specific
                employer for a specific period of time.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Canada Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work permit to work in Canada, you will need to
                follow these steps:
                <br />
                <br />● Determine the type of work permit you need based on the
                nature of your job and your specific situation. There are
                several types of work permits available in Canada, including
                open work permits, employer-specific work permits, and
                self-employed work permits.
                <br />
                <br />● Gather all of the necessary documents for your work
                permit application. This will include a completed work permit
                application form, a valid passport or travel document, and any
                additional documents that are specific to the type of work
                permit you are applying for, such as a job offer letter from a
                Canadian employer.
                <br />
                <br />● Choose the method for submitting your work permit
                application. You can generally apply for a work permit online
                through the Government of Canada's website, or you can apply in
                person at a Canadian embassy or consulate.
                <br />
                <br />● Submit your work permit application and pay the
                processing fee. If you are applying online, you will generally
                need to upload your documents and pay the fee through the
                Government of Canada's website. If you are applying in person,
                you will need to bring your documents and the fee to the embassy
                or consulate.
                <br />
                <br />● Wait for a decision on your work permit application.
                Processing times can vary, so it is a good idea to apply for
                your work permit well in advance of your intended travel date.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the application process may vary
                  depending on the embassy or consulate where you are applying,
                  and you may be required to provide additional documents or
                  information as needed. It is a good idea to check with the
                  embassy or consulate for the most up-to-date information on
                  the process for your specific situation.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Canada Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of work permits available in Canada,
                which are designed to meet the needs of different groups of
                workers. The specific type of work permit you need will depend
                on the nature of your job and your specific situation. Some of
                the types of work permits available in Canada include:
                <br />
                <br />● <span className="font-bold">Open work permit</span>: An
                open work permit allows you to work for any employer in Canada,
                provided that you meet certain eligibility requirements. Open
                work permits are generally available to certain groups of
                individuals, such as international students who have graduated
                from a Canadian educational institution, spouses or common-law
                partners of skilled workers or international students, and other
                individuals who are eligible to apply for permanent residence in
                Canada.
                <br />
                <br />●{" "}
                <span className="font-bold">Employer-specific work permit</span>
                : An employer-specific work permit allows you to work for a
                specific employer in Canada for a specific period of time. To
                apply for an employer-specific work permit, you will need to
                have a job offer from a Canadian employer.
                <br />
                <br />●{" "}
                <span className="font-bold">Self-employed work permit</span>: A
                self-employed work permit allows you to work in Canada as a
                self-employed individual, provided that you are able to
                demonstrate that you have the necessary skills and experience to
                support yourself financially. To apply for a self-employed work
                permit, you will need to demonstrate that you will be able to
                create your own employment in Canada.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Canada Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work permit to work in Canada, you will generally
                need to provide a number of documents as part of your
                application. The specific documents that you will need to
                provide will depend on the type of work permit you are applying
                for and your specific situation.
                <br />
                <br /> In general, you will need to provide the following
                documents as part of your work permit application:
                <br />
                <br />● A completed work permit application form, which you can
                obtain from the Government of Canada's website or from a
                Canadian embassy or consulate.
                <br />
                <br />● A valid passport or travel document. Your passport
                should be valid for at least six months beyond the date you
                intend to leave Canada.
                <br />
                <br />● A job offer letter from your Canadian employer, if you
                are applying for an employer-specific work permit.
                <br />
                <br />● Any additional documents that are specific to the type
                of work permit you are applying for, such as proof of your
                education and work experience, evidence of your ability to
                support yourself financially if you are applying for a
                self-employed work permit, or proof of your relationship with a
                skilled worker or international student if you are applying for
                an open work permit.
                <br />
                <br />● Payment of the work permit processing fee.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Canada ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You can apply for a work permit to work in Canada either before
                you travel to Canada or after you arrive in the country.
                <br />
                <br /> If you are applying for a work permit from outside of
                Canada, you can submit your application online through the
                Government of Canada's website or in person at a Canadian
                embassy or consulate in your country of residence. It is a good
                idea to apply for your work permit well in advance of your
                intended travel date, as processing times can vary.
                <br />
                <br />
                <span className="font-bold">
                  If you are already in Canada and have a valid study or work
                  permit, you may be able to apply for a work permit extension
                  from within Canada. You can apply for a work permit extension
                  online through the Government of Canada's website or in person
                  at a Service Canada center.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Canada ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a foreign national and you want to study in Canada,
                you will generally need to obtain a study permit. A study permit
                is a document that allows you to study at a designated learning
                institution (DLI) in Canada for a specific period of time.{" "}
                <br />
                <br /> To apply for a study permit in Canada, you will generally
                need to have been accepted to a DLI in Canada and meet certain
                other requirements, such as having a valid passport or travel
                document and being in good health. You may also need to undergo
                a medical examination and obtain a police clearance certificate,
                depending on your country of origin and the length of your stay
                in Canada. <br />
                <br /> It is important to note that the requirements for a study
                permit in Canada may vary depending on your country of
                citizenship and the specific type of study program you are
                enrolling in. It is a good idea to check with the Government of
                Canada's website or with a Canadian embassy or consulate for the
                most up-to-date information on the requirements for a study
                permit in Canada. <br />
                <br />
                <span className="font-bold">
                  In some cases, you may be able to study in Canada without a
                  study permit if you are participating in a study program that
                  is six months or less in duration and does not lead to a
                  degree or diploma. However, it is important to note that you
                  may still need to obtain a study permit if you want to work on
                  or off campus while you are studying in Canada, or if you want
                  to apply for a work permit after you complete your study
                  program.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Canada student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a study permit to study in Canada, you will need to
                follow these steps:
                <br />
                <br />● Gather all of the necessary documents for your study
                permit application. This will include a completed study permit
                application form, a valid passport or travel document, proof of
                acceptance to a designated learning institution (DLI) in Canada,
                and any additional documents that are specific to your
                situation, such as proof of your financial resources to support
                yourself while you are studying in Canada.
                <br />
                <br />● Choose the method for submitting your study permit
                application. You can generally apply for a study permit online
                through the Government of Canada's website, or you can apply in
                person at a Canadian embassy or consulate.
                <br />
                <br />● Submit your study permit application and pay the
                processing fee. If you are applying online, you will generally
                need to upload your documents and pay the fee through the
                Government of Canada's website. If you are applying in person,
                you will need to bring your documents and the fee to the embassy
                or consulate.
                <br />
                <br />● Wait for a decision on your study permit application.
                Processing times can vary, so it is a good idea to apply for
                your study permit well in advance of your intended travel date.
                <br />
                <br />
                It is important to note that the application process may vary
                depending on the embassy or consulate where you are applying,
                and you may be required to provide additional documents or
                information as needed. It is a good idea to check with the
                embassy or consulate for the most up-to-date information on the
                process for your specific situation. <br />
                <br />
                <span className="font-bold">
                  Once you have received your study permit, you will need to use
                  it to enter Canada before the start of your study program. You
                  will also need to carry your study permit with you at all
                  times while you are studying in Canada.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Canada student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a study permit to study in Canada, you will
                generally need to meet the following requirements:
                <br />
                <br />● Be accepted to a designated learning institution (DLI)
                in Canada. A DLI is a school that is authorized by a provincial
                or territorial government to host international students. You
                will need to provide proof of acceptance to a DLI as part of
                your study permit application.
                <br />
                <br />● Have a valid passport or travel document. Your passport
                should be valid for at least six months beyond the date you
                intend to leave Canada.
                <br />
                <br />● Demonstrate that you have enough financial resources to
                support yourself while you are studying in Canada. This may
                include proof of funds such as bank statements, a letter of
                financial support from a parent or guardian, or a scholarship or
                bursary letter.
                <br />
                <br />● Be in good health. You may be required to undergo a
                medical examination as part of your study permit application
                process.
                <br />
                <br />● Have no criminal record. You may be required to obtain a
                police clearance certificate as part of your study permit
                application process.
                <br />
                <br />● Intend to leave Canada at the end of your study program.
                You will need to demonstrate that you have strong ties to your
                home country and that you have a clear plan to return home after
                you complete your study program in Canada.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Canada student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a study permit for Canada will depend
                on the length of your study program and your specific situation.
                <br />
                <br />
                In general, a study permit will be valid for the length of your
                study program, plus an additional 90 days. The additional 90
                days are intended to give you time to prepare for your departure
                from Canada or to apply for an extension of your study permit if
                you need to stay in the country longer.
                <br />
                <br /> The price of a study permit for Canada is CAD$150. This
                fee is subject to change, so it is a good idea to check with the
                Government of Canada's website or with a Canadian embassy or
                consulate for the most up-to-date information on the price of a
                study permit.
                <br />
                <br /> It is important to note that you may also be required to
                pay additional fees as part of the study permit application
                process, such as a biometric fee if you are required to provide
                biometric information as part of your application. You may also
                be required to pay other fees, such as tuition and housing fees,
                to your DLI in Canada.
                <br />
                <br />
                <span className="font-bold">
                  It is a good idea to budget carefully for your study program
                  in Canada, as the cost of living in the country can vary
                  depending on your location and lifestyle. It is a good idea to
                  research the cost of living in the city or region where you
                  will be studying in advance, and to make sure that you have
                  enough financial resources to cover your expenses while you
                  are in Canada.
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

export default Canada;
