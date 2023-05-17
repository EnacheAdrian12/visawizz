import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Pakistan = () => {
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
        <title>Pakistan</title>
        <meta name="description" content="Pakistan" />
        <meta
          name="keywords"
          content="Pakistan travel visa, Pakistan work visa, Pakistan study visa, How to apply for an Pakistan visa, Pakistan visa requirements, Pakistan tourist visa, Pakistan student visa, Pakistan business visa, Pakistan visa processing time, Pakistan visa application process, Pakistan visa for Americans, Pakistan visa for Europeans, Pakistan visa for Pakistanns, Pakistan visa for Canadians, Pakistan visa for Pakistanns, Pakistan visa for Chinese, Pakistan visa for Africans, Pakistan visa for Asians, Pakistan visa for South Americans, Pakistan visa for Middle Easterners, Pakistan visa for UK citizens, Pakistan visa for EU citizens, Pakistan visa for Schengen area, Pakistan visa for non-EU citizens, Pakistan visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Pakistan
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Pakistan is a large country in South Asia, known for its rich
              culture, beautiful landscapes, and vibrant cities. The country has
              a long and complex history, with roots in the ancient Indus Valley
              Civilization and the Mughal Empire. Today, Pakistan is known for
              its beautiful mountains, including the famous Karakoram and
              Himalaya ranges, and its rich cultural heritage, with many
              traditional festivals, music, and art forms that reflect its
              diverse population. The capital city of Islamabad is a major
              cultural and economic hub, with many historic landmarks, museums,
              and cultural institutions. Pakistan is also known for its vibrant
              music and arts scene, and its rich folk traditions that have been
              preserved and celebrated by generations of Pakistanis. The country
              is a popular tourist destination, with many visitors coming to
              experience its beautiful landscapes and vibrant culture.
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
                Who can enter Pakistan without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are eligible for visa-free entry
                or visa on arrival in Pakistan. The specific requirements and
                conditions for visa-free entry or visa on arrival may vary
                depending on the individual's nationality and the purpose of
                their visit.
                <br /> <br />● Here is a list of countries whose citizens are
                eligible for visa-free entry or visa on arrival in Pakistan:
                Albania, Azerbaijan, Bahrain, Bosnia and Herzegovina, China,
                Egypt, Georgia, Indonesia, Iran, Kazakhstan, Kosovo, Kyrgyzstan,
                Lebanon, Maldives, Moldova, Montenegro, Morocco, North
                Macedonia, Palestine, Qatar, Serbia, Tajikistan, Tunisia,
                Turkey, Turkmenistan, Ukraine, United Arab Emirates.
                <br /> <br />
                <span className="font-bold">
                  {" "}
                  It is important to note that these visa-free or visa on
                  arrival provisions may be subject to change, and it is always
                  a good idea to check with the Pakistani embassy or consulate
                  in your country before you travel to Pakistan. It is also
                  important to note that even if you are eligible for visa-free
                  entry or visa on arrival, you may still need to meet certain
                  requirements, such as having a valid passport, a return
                  ticket, and sufficient funds to support your stay in Pakistan.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Pakistan Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Pakistan, you will need to provide the
                following documents: <br /> <br />● A valid passport with at
                least 6 months' validity remaining from the date of entry into
                Pakistan. <br /> <br />● A completed visa application form,
                which can be obtained from the Pakistani embassy or consulate in
                your country of residence. <br /> <br />
                ● Two recent passport-sized photographs. <br /> <br />
                ● Evidence of sufficient funds to cover your stay in Pakistan,
                such as bank statements or a letter of financial support from a
                sponsor. <br /> <br />● A letter of invitation, if applicable.
                <br /> <br />● Evidence of your travel itinerary, such as hotel
                reservations or a letter of invitation from a host in Pakistan.
                <br /> <br />● A medical certificate, if required for your type
                of visa. <br /> <br />● Any other documents required by the
                Pakistani embassy or consulate, such as a copy of your birth
                certificate or marriage certificate. <br /> <br />
                <span className="font-bold">
                  {" "}
                  It's also important to note that certain types of visas, such
                  as business visas, may require additional documentation. It's
                  best to check with the Pakistani embassy or consulate for
                  specific requirements for the type of visa you are seeking.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Pakistan Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Pakistan visa, you will need to follow these
                steps: <br /> <br />● Determine the type of visa you need:
                Pakistan offers several types of visas, including tourist visas,
                business visas, work visas, student visas, and transit visas.
                Determine which type of visa you need based on the purpose of
                your trip to Pakistan. <br /> <br />● Check the visa
                requirements: Different types of visas have different
                requirements, such as the length of validity, number of entries,
                and duration of stay. Check the requirements for the type of
                visa you are applying for to ensure you are eligible. <br />{" "}
                <br />
                ● Gather the required documents: To apply for a Pakistan visa,
                you will need to provide certain documents, such as a valid
                passport, passport-sized photographs, and a completed visa
                application form. You may also need to provide additional
                documents, such as evidence of sufficient funds, a letter of
                invitation, or a medical certificate. <br /> <br />● Submit your
                application: You can submit your visa application in person at
                the Pakistani embassy or consulate in your country of residence,
                or you may be able to apply online through an electronic visa
                system. If you apply in person, you will need to pay the visa
                fee and may need to schedule an interview with a consular
                officer. <br /> <br />● Wait for your visa to be processed:
                Processing times for Pakistan visas vary, so it's best to apply
                as early as possible. Once your application has been processed,
                you will receive your visa either by mail or in person at the
                embassy or consulate.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Pakistan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are allowed to stay in Pakistan depends
                on the type of visa you have. Some common types of visas and
                their associated length of stay are as follows: <br /> <br />●{" "}
                <span className="font-bold">Tourist visa</span>: A tourist visa
                allows you to stay in Pakistan for a maximum of 180 days. <br />{" "}
                <br />● <span className="font-bold">Business visa</span>: A
                business visa allows you to stay in Pakistan for a maximum of
                180 days.
                <br /> <br />● <span className="font-bold">Work visa</span>: A
                work visa allows you to stay in Pakistan for the duration of
                your employment contract, up to a maximum of 180 days. <br />{" "}
                <br />● <span className="font-bold">Student visa</span>: A
                student visa allows you to stay in Pakistan for the duration of
                your studies, up to a maximum of 180 days. <br /> <br />●{" "}
                <span className="font-bold">Transit visa</span>: A transit visa
                allows you to stay in Pakistan for up to 72 hours while in
                transit to another country.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Pakistan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes. Is a negative COVID-19 test (PCR and/or serology) required
                for entry? Vaccinated individuals do not require a pre-boarding
                negative PCR test. Unvaccinated individuals over age 12 must
                present a negative PCR test taken within 72 hours.
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
                A diplomatic passport is a special type of passport that is
                issued to individuals who represent their country in a
                diplomatic capacity, such as ambassadors, diplomats, and certain
                government officials. In the case of Pakistan, a diplomatic
                passport is issued to Pakistani citizens who are appointed as
                representatives of the government of Pakistan to foreign states,
                international organizations, or other foreign entities.
                <br />
                <br />
                Holders of a Pakistani diplomatic passport are entitled to
                certain privileges and immunities under international law, such
                as immunity from arrest and prosecution, and special privileges
                with regard to taxes, customs, and immigration.
                <br />
                <br />
                It's worth noting that, Pakistani diplomatic passport holders
                are eligible for visa-free travel to a number of countries, but
                the list of countries may vary over time, so it's recommended to
                check with the Ministry of Foreign Affairs of Pakistan for the
                most recent and accurate information.
                <br />
                <br />
                In order to obtain a diplomatic passport in Pakistan, one
                typically needs to be appointed by the government of Pakistan to
                a diplomatic position and will usually need to provide
                documentation to confirm their status and purpose of travel.
                <br />
                <br />
                <span className="font-bold">
                  Please note that, the information provided here is based on
                  the publicly available information, the rules and regulations
                  regarding diplomatic passport in Pakistan may change over
                  time, so it's recommended to check with the Pakistani Ministry
                  of Foreign Affairs for the most recent and accurate
                  information.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Pakistan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in Pakistan, you will generally need
                to obtain a work visa. The specific requirements and procedures
                for obtaining a work visa in Pakistan may vary depending on the
                type of work you will be doing, your nationality, and the length
                of your stay.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Pakistan Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Pakistan, you will generally need
                to follow these steps: <br /> <br />● Find a job in Pakistan:
                You will need to have a job offer from a Pakistani company
                before you can apply for a worker visa. Make sure to negotiate
                the terms of your employment and obtain a letter of sponsorship
                from your employer. <br /> <br />● Gather required documents:
                You will need to provide a range of documents as part of your
                visa application, including a passport that is valid for at
                least six months from the date of your arrival in Pakistan, a
                completed visa application form, a passport-size photograph, and
                a police clearance certificate from your home country. You may
                also need to provide evidence of your qualifications and
                experience. <br /> <br />● Submit your application: You can
                either apply for a worker visa in person at the Pakistani
                embassy or consulate in your home country, or you can apply
                online through the Pakistani embassy's website. You will need to
                pay the required visa fees as part of the application process.
                <br /> <br />● Wait for a decision: The processing time for a
                worker visa in Pakistan can vary, so it is a good idea to apply
                well in advance of your planned departure date. Once your
                application has been processed, you will receive a decision on
                your visa. If your application is approved, you will receive a
                visa sticker in your passport, which you will need to present at
                the border when you arrive in Pakistan.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Pakistan Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available in Pakistan,
                depending on the nature of your employment and the duration of
                your stay. Some of the main types of worker visas in Pakistan
                include: <br /> <br />●{" "}
                <span className="font-bold">Work Visa</span>: This type of visa
                is issued to foreign workers who have been offered employment in
                Pakistan by a Pakistani company. The visa is usually valid for
                the duration of the employment contract. <br /> <br />●{" "}
                <span className="font-bold">Employment Visa</span>: This type of
                visa is issued to foreign workers who have been offered
                employment in Pakistan by a foreign company that has a
                representative office in Pakistan. The visa is usually valid for
                the duration of the employment contract. <br /> <br />●{" "}
                <span className="font-bold">Business Visa</span>: This type of
                visa is issued to foreign businesspeople who are visiting
                Pakistan for business purposes, such as attending meetings or
                negotiating contracts. The visa is usually valid for a short
                period of time, such as three months to one year. <br /> <br />●{" "}
                <span className="font-bold">Investor Visa</span>: This type of
                visa is issued to foreign investors who are planning to invest
                in a business in Pakistan. The visa is usually valid for the
                duration of the investment project.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Pakistan Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Pakistan, you will generally need
                to provide the following documents: <br /> <br />● Passport: You
                will need to provide a passport that is valid for at least six
                months from the date of your arrival in Pakistan. Make sure that
                your passport has enough blank pages for the visa stamp. <br />{" "}
                <br />● Visa application form: You will need to complete a visa
                application form and provide it as part of your visa
                application. The form can usually be obtained from the Pakistani
                embassy or consulate in your home country or downloaded from
                their website. <br /> <br />● Passport-size photograph: You will
                need to provide a passport-size photograph, taken within the
                last six months, as part of your visa application. Make sure
                that the photograph meets the required standards and
                specifications. <br /> <br />● Employment letter: You will need
                to provide a letter of employment or sponsorship from your
                employer in Pakistan, outlining the terms of your employment and
                the duration of your stay. <br /> <br />● Police clearance
                certificate: You may be required to provide a police clearance
                certificate from your home country, certifying that you have no
                criminal record. <br /> <br />● Evidence of qualifications and
                experience: You may be required to provide evidence of your
                qualifications and experience, such as copies of your
                educational certificates and resume.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Pakistan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In Pakistan, the process for obtaining a worker visa typically
                begins with the employer or sponsoring organization submitting a
                request for a visa on behalf of the foreign worker. The worker
                will also need to complete and submit the necessary application
                forms and documents.
                <br /> <br />
                The worker visa application process can be initiated at the
                Pakistani embassy or consulate in the foreign worker's home
                country, or at the Ministry of Interior in Pakistan. The
                specific requirements and procedures for obtaining a worker visa
                may vary depending on the foreign worker's country of origin and
                the type of work they will be doing in Pakistan.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that worker visas are typically only
                  issued for specific job positions and are not intended for
                  individuals who are seeking employment in Pakistan. Foreign
                  workers should carefully research the requirements and
                  procedures for obtaining a worker visa before initiating the
                  application process.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Pakistan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in Pakistan, you will generally
                need to obtain a student visa. The specific requirements and
                procedures for obtaining a student visa in Pakistan may vary
                depending on your nationality, the duration of your studies, and
                the institution you will be attending.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Pakistan student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Pakistan, you will generally need
                to follow these steps: <br /> <br />● Find a program of study:
                You will need to be accepted into a recognized educational
                institution in Pakistan before you can apply for a student visa.
                Research your options and apply to the institution of your
                choice. <br /> <br />● Gather required documents: You will need
                to provide a range of documents as part of your visa
                application, including a passport that is valid for at least six
                months from the date of your arrival in Pakistan, a completed
                visa application form, a passport-size photograph, and a police
                clearance certificate from your home country. You will also need
                to provide evidence of your acceptance into a recognized
                educational institution in Pakistan, such as a letter of
                acceptance. <br /> <br />● Submit your application: You can
                either apply for a student visa in person at the Pakistani
                embassy or consulate in your home country, or you can apply
                online through the Pakistani embassy's website. You will need to
                pay the required visa fees as part of the application process.
                <br /> <br />● Wait for a decision: The processing time for a
                student visa in Pakistan can vary, so it is a good idea to apply
                well in advance of your planned departure date. Once your
                application has been processed, you will receive a decision on
                your visa. If your application is approved, you will receive a
                visa sticker in your passport, which you will need to present at
                the border when you arrive in Pakistan.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Pakistan student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Pakistan, you will generally need
                to provide the following documents: <br /> <br />● Passport: You
                will need to provide a passport that is valid for at least six
                months from the date of your arrival in Pakistan. Make sure that
                your passport has enough blank pages for the visa stamp. <br />{" "}
                <br />● Visa application form: You will need to complete a visa
                application form and provide it as part of your visa
                application. The form can usually be obtained from the Pakistani
                embassy or consulate in your home country or downloaded from
                their website. <br /> <br />● Passport-size photograph: You will
                need to provide a passport-size photograph, taken within the
                last six months, as part of your visa application. Make sure
                that the photograph meets the required standards and
                specifications. <br /> <br />● Letter of acceptance: You will
                need to provide a letter of acceptance from a recognized
                educational institution in Pakistan, indicating that you have
                been accepted into a program of study. <br /> <br />● Police
                clearance certificate: You may be required to provide a police
                clearance certificate from your home country, certifying that
                you have no criminal record. <br /> <br />● Financial
                documentation: You may be required to provide evidence of your
                financial ability to support yourself while studying in
                Pakistan, such as bank statements or a letter of sponsorship
                from a sponsor.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Pakistan student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Pakistan will depend
                on the specific terms of your studies and the duration of your
                stay in Pakistan. In general, student visas are issued for the
                duration of the program of study, and the visa fee is based on
                the length of the program.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the specific requirements and
                  fees for a student visa in Pakistan may vary depending on your
                  nationality and the specific terms of your studies. It is
                  always a good idea to check with the Pakistani embassy or
                  consulate in your country for the most up-to-date information
                  on the requirements and fees for obtaining a student visa in
                  Pakistan.
                </span>
                <br /> <br />
                <span className="font-bold">
                  In addition to the visa fee, you will also need to pay other
                  fees and expenses related to your studies in Pakistan, such as
                  tuition fees, housing, and living expenses. It is a good idea
                  to budget for these costs and make sure that you have
                  sufficient funds to support yourself while you are studying in
                  Pakistan.
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

export default Pakistan;
