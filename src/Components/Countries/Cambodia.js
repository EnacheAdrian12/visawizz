import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Cambodia = () => {
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
        <title>Cambodia</title>
        <meta name="description" content="Cambodia" />
        <meta
          name="keywords"
          content="Cambodia travel visa, Cambodia work visa, Cambodia study visa, How to apply for an Cambodia visa, Cambodia visa requirements, Cambodia tourist visa, Cambodia student visa, Cambodia business visa, Cambodia visa processing time, Cambodia visa application process, Cambodia visa for Americans, Cambodia visa for Europeans, Cambodia visa for Cambodians, Cambodia visa for Canadians, Cambodia visa for Indians, Cambodia visa for Chinese, Cambodia visa for Africans, Cambodia visa for Asians, Cambodia visa for South Americans, Cambodia visa for Middle Easterners, Cambodia visa for UK citizens, Cambodia visa for EU citizens, Cambodia visa for Schengen area, Cambodia visa for non-EU citizens, Cambodia visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Cambodia
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Cambodia is a country located in Southeast Asia, and it is well
              known for its rich culture and history, beautiful landscapes, and
              fascinating temple ruins. Some of the most notable things that
              Cambodia is known for include its beautiful beaches and islands,
              such as the popular tourist destination of Koh Rong, its stunning
              temple ruins, such as the famous Angkor Wat, and its vibrant food
              and art scenes. Additionally, Cambodia is known for its rich
              cultural heritage and history, which can be seen in its many
              museums and historic sites, such as the Royal Palace in the
              capital city of Phnom Penh. Finally, Cambodia is known for its
              friendly and welcoming locals, who are known for their warm
              hospitality and graciousness.
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
                Who can enter Cambodgia without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Cambodia has visa-free arrangements with several countries,
                allowing citizens of those countries to enter and stay in
                Cambodia for a certain period of time without a visa. The
                countries and territories with visa-free arrangements with
                Cambodia are:
                <br />
                <br />
                <span className="font-bold">
                  Brunei, Indonesia, Laos, Malaysia, Philippines, Singapore,
                  Thailand, Vietnam, Hong Kong, Macao.
                </span>
                <br />
                <br />
                Citizens of these countries and territories can enter Cambodia
                without a visa for stays of up to 30 days.
                <br />
                <br />
                It is important to note that visa-free arrangements are subject
                to change, and the specific terms of each arrangement may vary.
                It is always a good idea to check with the authorities in
                Cambodia or the nearest embassy or consulate of Cambodia to
                confirm the current visa-free arrangements and the specific
                terms of each arrangement.
                <br />
                <br />
                <span className="font-bold">
                  Citizens of other countries will need to apply for a visa in
                  advance to enter Cambodia. There are several types of visas
                  available, including tourist visas, business visas, and
                  student visas. The specific requirements and procedures for
                  obtaining a visa to Cambodia will depend on the type of visa
                  you are applying for and your specific circumstances.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Cambodia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Cambodia, you will need to gather
                several documents to submit with your application. These may
                include:
                <br />
                <br />
                ● A valid passport or travel document.
                <br />
                <br />
                ● A completed and signed application form.
                <br />
                <br />
                ● Two passport-style photographs.
                <br />
                <br />
                ● A copy of your flight itinerary or travel plans.
                <br />
                <br />
                ● Evidence of sufficient funds to cover your stay in Cambodia,
                such as bank statements or credit card statements.
                <br />
                <br />
                ● A certificate of good conduct (also known as a police
                clearance certificate).
                <br />
                <br />
                You may also be required to provide additional documents
                depending on the specific type of visa you are applying for and
                your specific circumstances. For example, if you are applying
                for a business visa, you may need to provide a letter of
                invitation from a company in Cambodia or a letter of support
                from your employer. If you are applying for a student visa, you
                may need to provide proof of acceptance to a school or
                university in Cambodia.
                <br />
                <br />
                <span className="font-bold">
                  It is always a good idea to check with the embassy or
                  consulate of Cambodia in your home country to make sure you
                  have all the necessary documents before you submit your
                  application.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Cambodia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Cambodia, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine the type of visa you need: There are several types
                of visas available to enter Cambodia, including tourist visas,
                business visas, and student visas. The specific type of visa you
                need will depend on the purpose of your visit and the length of
                your stay.
                <br />
                <br />
                ● Gather the required documents: You will need to prepare a
                number of documents to submit with your visa application. These
                may include your passport, photographs, a completed and signed
                application form, and other documents as required.
                <br />
                <br />
                ● Submit your application: You can usually submit your visa
                application at the embassy or consulate of Cambodia in your home
                country. Some countries may have a designated visa application
                center where you can submit your application.
                <br />
                <br />
                ● Wait for a decision: The processing time for visa applications
                can vary, so be prepared to wait for a decision. You can usually
                check the status of your application online or by contacting the
                embassy or consulate.
                <br />
                <br />
                ● Attend an interview (if required): Depending on the specific
                type of visa you are applying for and the purpose of your visit,
                you may be required to attend an interview at the embassy or
                consulate.
                <br />
                <br />● Collect your visa: If your application is approved, you
                will be issued a visa. You will need to pay a fee to receive
                your visa, which you can usually do through a bank transfer or
                by credit card. Be sure to keep your visa safe, as you will need
                to present it when you enter Cambodia.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that a visa does not guarantee entry
                  into Cambodia. You will also need to meet the entry
                  requirements of the Kingdom of Cambodia when you arrive.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Cambodia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are allowed to stay in Cambodia will
                depend on the type of visa you have.
                <br />
                <br />
                <span className="font-bold">Tourist visas</span> are typically
                issued for stays of up to 30 days. You can apply for a tourist
                visa at the embassy or consulate of Cambodia in your home
                country, or you can obtain a tourist visa on arrival at the
                airport or border crossing.
                <br />
                <br />
                <span className="font-bold">Business visas</span> are typically
                issued for stays of up to six months. You will need to apply for
                a business visa in advance at the embassy or consulate of
                Cambodia in your home country.
                <br />
                <br />
                <span className="font-bold">Student visas</span> are typically
                issued for stays of up to one year. You will need to apply for a
                student visa in advance at the embassy or consulate of Cambodia
                in your home country and provide proof of acceptance to a school
                or university in Cambodia.
                <br />
                <br />
                It is important to note that these are general guidelines for
                the length of time you are allowed to stay in Cambodia. The
                specific length of time may vary depending on your specific
                circumstances and the type of visa you have. It is always a good
                idea to check with the authorities in Cambodia or the nearest
                embassy or consulate of Cambodia to confirm the specific length
                of time you are allowed to stay in the country.
                <br />
                <br />
                <span className="font-bold">
                  If you want to stay in Cambodia for a longer period of time,
                  you may be able to apply for an extension of your visa.
                  Extension procedures and requirements vary depending on the
                  type of visa you have and your specific circumstances. It is
                  always a good idea to check with the authorities in Cambodia
                  to confirm the specific procedures and requirements for
                  extending your stay in the country.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Cambodia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                For Cambodia, a COVID-19 PCR test with serological test is
                required. The statement that is not older than 72 hours to enter
                the country.
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
                A diplomatic passport is a type of passport issued to
                individuals who are accredited as diplomats by the Ministry of
                Foreign Affairs of Cambodia. Diplomatic passports are issued to
                diplomats, their spouses and children, and other officials who
                are traveling on official business for the government of
                Cambodia.
                <br />
                <br />
                Diplomatic passports have a distinctive blue cover and are
                issued for a period of five years. They are issued to
                individuals who are representing the government of Cambodia in
                foreign countries, and they grant the holder certain privileges
                and immunities in accordance with international law.
                <br />
                <br />
                Diplomatic passports are issued to individuals who are working
                in a diplomatic capacity for the government of Cambodia, such as
                ambassadors, consuls, and other officials. They are not
                available to the general public and can only be obtained with
                the approval of the Ministry of Foreign Affairs of Cambodia.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that diplomatic passports are not the
                  same as official passports, which are issued to government
                  officials who are traveling on official business but are not
                  accredited as diplomats. Official passports have a green cover
                  and are issued for a period of three years.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Cambodia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in Cambodia, you will need to apply
                for a worker visa. A worker visa is a type of long-stay visa
                that allows you to work in Cambodia for an extended period of
                time.
                <br />
                <br />
                To be eligible for a worker visa, you will need to have a job
                offer from an employer in Cambodia and meet other requirements.
                You will need to provide evidence of your employment, such as a
                letter of offer or a contract of employment, and you may need to
                provide additional documents depending on your specific
                circumstances.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that a worker visa does not guarantee
                  entry into Cambodia. You will also need to meet the entry
                  requirements of the Kingdom of Cambodia when you arrive.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Cambodia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Cambodia worker visa, you will need to follow
                these steps:
                <br />
                <br />
                ● Gather the required documents: You will need to have a valid
                passport, two passport-sized photos, a police clearance
                certificate, and a health certificate. You may also need to
                provide proof of employment and a letter of invitation from your
                employer in Cambodia.
                <br />
                <br />
                ● Contact the Cambodian embassy or consulate in your home
                country: You will need to contact the embassy or consulate to
                find out what documents you need to submit, as well as the fees
                for the visa. You may be able to apply for the visa in person or
                by mail, depending on the embassy or consulate's policies.
                <br />
                <br />
                ● Submit your application: Once you have gathered all of the
                required documents, you can submit your application at the
                embassy or consulate. You may be required to pay a fee at this
                time.
                <br />
                <br />
                ● Wait for processing: It may take several weeks for your
                application to be processed. Once it has been approved, you will
                receive your visa.
                <br />
                <br />● Travel to Cambodia: Once you have your visa, you can
                travel to Cambodia and begin working. You may need to register
                with the immigration authorities upon arrival in the country.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Cambodia Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas for Cambodia:
                <br />
                <br />
                <span className="font-bold">Business Visa</span>
                : This type of visa is for people who are traveling to Cambodia
                for business purposes, such as attending meetings or
                negotiations. Business visas are typically valid for a period of
                three months and can be extended for an additional three months.
                <br />
                <br />
                <span className="font-bold">Employment Visa</span>
                : This type of visa is for people who are traveling to Cambodia
                to work in a full-time, paid position. Employment visas are
                typically valid for a period of six months to one year and can
                be extended for an additional year.
                <br />
                <br />
                <span className="font-bold">Investor Visa</span>
                : This type of visa is for people who are investing in a
                business in Cambodia. Investor visas are typically valid for a
                period of one year and can be extended for an additional year.
                <br />
                <br />
                <span className="font-bold">Retirement Visa</span>
                : This type of visa is for people who are planning to retire in
                Cambodia. Retirement visas are typically valid for a period of
                one year and can be extended for an additional year.
                <br />
                <br />
                <span className="font-bold">Study Visa</span>: This type of visa
                is for people who are traveling to Cambodia to study. Study
                visas are typically valid for the duration of the study program
                and can be extended if necessary.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Cambodia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Cambodia, you will need to
                provide the following documents:
                <br />
                <br />
                ● A valid passport: Your passport must be valid for at least six
                months beyond the date you plan to leave Cambodia.
                <br />
                <br />
                ● Two passport-sized photos: These should be recent,
                passport-style photos with a white background.
                <br />
                <br />
                ● A police clearance certificate: This is a document that
                certifies that you do not have any criminal convictions. You can
                usually obtain this certificate from the police department in
                your home country.
                <br />
                <br />
                ● A health certificate: This is a document that certifies that
                you are in good health and do not have any infectious diseases.
                You may need to undergo a medical examination to obtain this
                certificate.
                <br />
                <br />
                ● Proof of employment: This could include a letter of invitation
                from your employer in Cambodia, a copy of your employment
                contract, or other documentation.
                <br />
                <br />● Other documents: You may need to provide additional
                documents depending on your specific circumstances. For example,
                if you are applying for a student visa, you may need to provide
                proof of enrollment in a Cambodian educational institution.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Cambodia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Cambodia, you will need to contact
                the Cambodian embassy or consulate in your home country. You can
                find a list of Cambodian embassies and consulates on the website
                of the Ministry of Foreign Affairs and International Cooperation
                of the Kingdom of Cambodia.
                <br />
                <br />
                You can usually apply for a worker visa at any time, but it's a
                good idea to apply well in advance of your planned travel date
                to ensure that you have enough time to gather all of the
                necessary documents and for your application to be processed.
                The processing time for a worker visa can vary, but it is
                typically a few weeks.
                <br />
                <br />
                <span className="font-bold">
                  Once you have gathered all of the required documents, you can
                  submit your application at the embassy or consulate. You may
                  be required to pay a fee at this time. After your application
                  has been processed and approved, you will receive your visa.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Cambodia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes, you will need a visa to study in Cambodia. There are
                several types of visas that you can apply for, depending on your
                specific circumstances. If you are planning to study in Cambodia
                for a short period of time, you may be able to apply for a
                tourist visa or a business visa. These types of visas are
                typically valid for a period of three months and can be extended
                for an additional three months.
                <br />
                <br />
                <span className="font-bold">
                  If you are planning to study in Cambodia for a longer period
                  of time, you will need to apply for a study visa. Study visas
                  are typically valid for the duration of the study program and
                  can be extended if necessary.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Cambodia Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Cambodia, you will need to follow
                these steps:
                <br />
                <br />
                ● Gather the required documents: You will need to have a valid
                passport, two passport-sized photos, a police clearance
                certificate, a health certificate, and proof of enrollment in a
                Cambodian educational institution.
                <br />
                <br />
                ● Contact the Cambodian embassy or consulate in your home
                country: You will need to contact the embassy or consulate to
                find out what documents you need to submit, as well as the fees
                for the visa. You may be able to apply for the visa in person or
                by mail, depending on the embassy or consulate's policies.
                <br />
                <br />
                ● Submit your application: Once you have gathered all of the
                required documents, you can submit your application at the
                embassy or consulate. You may be required to pay a fee at this
                time.
                <br />
                <br />
                ● Wait for processing: It may take several weeks for your
                application to be processed. Once it has been approved, you will
                receive your visa.
                <br />
                <br />● Travel to Cambodia: Once you have your visa, you can
                travel to Cambodia and begin studying. You may need to register
                with the immigration authorities upon arrival in the country.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Cambodia Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Cambodia, you will need to
                provide the following documents:
                <br />
                <br />
                ● A valid passport: Your passport must be valid for at least six
                months beyond the date you plan to leave Cambodia.
                <br />
                <br />
                ● Two passport-sized photos: These should be recent,
                passport-style photos with a white background.
                <br />
                <br />
                ● A police clearance certificate: This is a document that
                certifies that you do not have any criminal convictions. You can
                usually obtain this certificate from the police department in
                your home country.
                <br />
                <br />
                ● A health certificate: This is a document that certifies that
                you are in good health and do not have any infectious diseases.
                You may need to undergo a medical examination to obtain this
                certificate.
                <br />
                <br />
                ● Proof of enrollment: You will need to provide proof that you
                have been accepted into a Cambodian educational institution.
                This could include a letter of acceptance, a copy of your
                enrollment contract, or other documentation.
                <br />
                <br />
                ● Other documents: You may need to provide additional documents
                depending on your specific circumstances. For example, you may
                need to provide financial documents to demonstrate that you have
                the funds to support yourself while you are studying in
                Cambodia.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that these are general requirements
                  for a student visa to study in Cambodia. The specific
                  requirements may vary depending on the specific type of
                  student visa you are applying for and your specific
                  circumstances. It is always a good idea to check with the
                  authorities in Cambodia or the nearest embassy or consulate of
                  Cambodia to confirm the specific requirements for your
                  situation.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Cambodia Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Student visas for Cambodia are typically valid for the duration
                of the study program. However, you may be able to extend your
                visa if your study program is extended or if you decide to
                enroll in a new program.
                <br />
                <br />
                The price of a student visa for Cambodia can vary depending on a
                number of factors, such as the length of the visa and the
                country where you are applying. You will need to contact the
                Cambodian embassy or consulate in your home country to find out
                the exact price of a student visa.
                <br />
                <br />
                In addition to the visa fee, you may also need to pay other
                fees, such as a processing fee or a medical examination fee. You
                should be prepared to pay these fees when you submit your visa
                application.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that these are general estimates of
                  the validity and price of student visas to study in Cambodia.
                  The specific validity and price may vary depending on your
                  specific circumstances and the current exchange rate. It is
                  always a good idea to check with the authorities in Cambodia
                  or the nearest embassy or consulate of Cambodia to confirm the
                  specific validity and price for your situation.
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

export default Cambodia;
