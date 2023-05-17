import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Georgia = () => {
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
        <title>Georgia</title>
        <meta name="description" content="Georgia" />
        <meta
          name="keywords"
          content="Georgia travel visa, Georgia work visa, Georgia study visa, How to apply for an Georgia visa, Georgia visa requirements, Georgia tourist visa, Georgia student visa, Georgia business visa, Georgia visa processing time, Georgia visa application process, Georgia visa for Americans, Georgia visa for Europeans, Georgia visa for Georgians, Georgia visa for Canadians, Georgia visa for Indians, Georgia visa for Chinese, Georgia visa for Africans, Georgia visa for Asians, Georgia visa for South Americans, Georgia visa for Middle Easterners, Georgia visa for UK citizens, Georgia visa for EU citizens, Georgia visa for Schengen area, Georgia visa for non-EU citizens, Georgia visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Georgia
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Georgia is a country located in the Caucasus region of Europe. It
              is known for its rich history and cultural heritage, as well as
              its beautiful landscapes and friendly people. Some of the things
              that Georgia is famous for include its delicious food and wine,
              its ancient monasteries and churches, and its vibrant music and
              dance traditions. The country is also known for its diverse
              landscape, which includes the towering peaks of the Caucasus
              Mountains, the rolling hills of the countryside, and the Black Sea
              coast. In addition, Georgia is known for its friendly and
              hospitable people, who are known for their hospitality and their
              love of good food and drink.
            </p>
          </Col>
        </Row>

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
                Who can enter Georgia without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Georgia has visa-free regimes with several countries, which
                means that citizens of those countries are not required to
                obtain a visa in order to enter Georgia for short stays. The
                length of stay allowed under the visa-free regimes varies
                depending on the country.
                <br /> <br />● Citizens of the following countries can enter
                Georgia without a visa for stays of up to 360 days:
                <span className="font-bold">
                  {" "}
                  Armenia, Azerbaijan, Belarus, Kazakhstan, Kyrgyzstan, Moldova,
                  Russia, Ukraine.
                </span>
                <br /> <br />● Citizens of the following countries can enter
                Georgia without a visa for stays of up to 90 days within a
                180-day period:
                <span className="font-bold">
                  &nbsp;Albania, Andorra, Antigua and Barbuda, Austria, Bahamas,
                  Bahrain, Barbados, Belgium, Bosnia and Herzegovina, Brazil,
                  Brunei, Bulgaria, China, Croatia, Cyprus, Czech Republic,
                  Denmark, Estonia, Fiji, Finland, France, Germany, Greece,
                  Hungary, Iceland, Ireland, Italy, Japan, Kuwait, Latvia,
                  Lebanon, Lithuania, Luxembourg, Malta, Mexico, Monaco,
                  Montenegro, Netherlands, North Macedonia, Norway, Oman,
                  Palestine, Poland, Portugal, Qatar, Romania, San Marino,
                  Serbia, Seychelles, Slovakia, Slovenia, South Korea, Spain,
                  Sweden, Switzerland, Turkey, United Arab Emirates, United
                  Kingdom, United States.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa-free regimes are subject
                  to change, so it is always a good idea to check with the
                  nearest Georgian embassy or consulate for the most up-to-date
                  information before traveling to Georgia.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Georgia Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Georgia, you will typically need to
                provide the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least six months beyond the date that you are scheduled to
                leave Georgia.
                <br /> <br />● A completed visa application form: This form can
                be obtained from the nearest Georgian embassy or consulate, or
                downloaded from their website.
                <br /> <br />● A recent photograph: This should be a
                passport-style photograph, taken within the past six months.
                <br /> <br />
                ● Proof of the purpose of your trip: This could include
                documentation such as a letter of invitation, a hotel
                reservation, or a letter from your employer stating the purpose
                of your trip.
                <br /> <br />● Evidence of sufficient financial means: You will
                need to demonstrate that you have sufficient financial means to
                support yourself while you are in Georgia, such as bank
                statements or a letter from your employer stating that they will
                be providing financial support.
                <br /> <br />● Health insurance: You will need to have health
                insurance coverage for the duration of your stay in Georgia.
                <br /> <br />● Any other documents that may be required: The
                exact documents that you will need to provide will depend on
                your individual circumstances, so it is best to check with the
                nearest Georgian embassy or consulate for a complete list of
                requirements.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Georgia Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Georgia, you will need to follow the
                following steps:
                <br /> <br />● Determine which type of visa you need. There are
                several types of visas available for Georgia, including a
                tourist visa, a business visa, and a student visa.
                <br /> <br />● Gather all required documents. This will
                typically include a valid passport, a completed visa application
                form, a recent photograph, and any other supporting documents
                that may be required, such as proof of the purpose of your trip
                or evidence of sufficient financial means.
                <br /> <br />● Schedule an appointment with the nearest Georgian
                embassy or consulate. You will need to schedule an appointment
                to submit your application and have your biometric data
                collected.
                <br /> <br />● Attend your appointment and submit your
                application. You will need to bring all required documents with
                you to your appointment, as well as any applicable fees.
                <br /> <br />● Wait for a decision on your application. The
                processing time for a visa for Georgia can vary, so it is best
                to allow plenty of time for your application to be processed.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Georgia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you have a valid passport from an EU/EEA member state or from
                Switzerland, you are allowed to stay in Georgia for an unlimited
                period of time. If you are a citizen of a country outside of the
                EU/EEA, the length of time that you are allowed to stay in
                Georgia will depend on the type of visa that you have.
                <br /> <br /> If you have a tourist visa, you are typically
                allowed to stay in Georgia for up to 90 days within a 180-day
                period. If you have a business visa, you are typically allowed
                to stay in Georgia for up to 90 days within a 180-day period,
                although it may be possible to apply for an extension if needed.
                If you have a student visa, you are allowed to stay in Georgia
                for the duration of your studies, up to a maximum of 365 days.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the length of time that you are
                  allowed to stay in Georgia may vary depending on your
                  individual circumstances and the type of visa that you have.
                  If you wish to stay in Georgia for a longer period of time,
                  you may need to apply for an extension of your visa before
                  your current visa expires. You should contact the nearest
                  Georgian embassy or consulate for more information on the
                  process for extending your visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Georgia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Georgian citizens using any mode of travel (by air, land, or
                sea) can enter Georgia unconditionally, without the obligation
                to produce vaccination certificates or negative PCR test
                results.
                <br />
                <br />
                Almost all COVID restrictions have now been lifted but it is
                still mandatory to wear masks in hospitals. You can find full
                details of the latest restrictions from the Government of
                Georgia.
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
                diplomats and other representatives of a country who are
                traveling on official business. Diplomatic passports are
                typically issued to individuals who are working in embassies,
                consulates, or other diplomatic missions, as well as to
                individuals who are traveling on behalf of their government in
                an official capacity.
                <br /> <br /> Diplomatic passports are usually issued by the
                country that an individual is representing, and they are
                typically valid for a longer period of time than ordinary
                passports. In addition to allowing the holder to travel on
                official business, diplomatic passports also grant the holder
                certain privileges and immunities while abroad, such as immunity
                from arrest and detention in some cases.
                <br /> <br />
                <span className="font-bold">
                  If you are a Georgian diplomat or other representative of the
                  Georgian government and you need to apply for a diplomatic
                  passport, you should contact the Ministry of Foreign Affairs
                  of Georgia for more information on the process.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Georgia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of an EU/EEA member state or Switzerland,
                you do not need a worker's visa to work in Georgia. You are
                allowed to work in Georgia for an unlimited period of time as
                long as you have a valid passport from one of these countries.
                <br /> <br />
                If you are a citizen of a country outside of the EU/EEA, you
                will typically need to obtain a worker's visa in order to work
                in Georgia. The process for obtaining a worker's visa in Georgia
                will depend on the length and nature of your stay, as well as
                your country of citizenship.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the requirements for a worker's
                  visa for Georgia may vary depending on your individual
                  circumstances, so it is best to contact the nearest Georgian
                  embassy or consulate for more information on the process for
                  obtaining a worker's visa in Georgia.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Georgia Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of a country outside of the EU/EEA and you
                need to obtain a worker's visa in order to work in Georgia, you
                will need to follow the following steps:
                <br /> <br />● Determine which type of worker's visa you need.
                There are several types of worker's visas available for Georgia,
                including a short-term work visa, a long-term work visa, and a
                seasonal work visa.
                <br /> <br />● Gather all required documents. This will
                typically include a valid passport, a completed visa application
                form, a recent photograph, proof of employment or a job offer in
                Georgia, and any other supporting documents that may be
                required, such as evidence of sufficient financial means or
                health insurance.
                <br /> <br />● Schedule an appointment with the nearest Georgian
                embassy or consulate. You will need to schedule an appointment
                to submit your application and have your biometric data
                collected.
                <br /> <br />● Attend your appointment and submit your
                application. You will need to bring all required documents with
                you to your appointment, as well as any applicable fees.
                <br /> <br />● Wait for a decision on your application. The
                processing time for a worker's visa for Georgia can vary, so it
                is best to allow plenty of time for your application to be
                processed.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Georgia Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Georgia offers a variety of visas for foreign workers,
                including:
                <br /> <br />●{" "}
                <span className="font-bold">Temporary Work Visa</span>: This
                visa allows a foreign national to work in Georgia for a specific
                period of time, typically up to one year. It may be renewed if
                the employer wishes to continue employing the foreign national.
                <br /> <br />●{" "}
                <span className="font-bold">Permanent Work Visa</span>: This
                visa allows a foreign national to work in Georgia indefinitely.
                It is typically granted to individuals with specialized skills
                or experience who are in high demand in Georgia's labor market.
                <br /> <br />● <span className="font-bold">Investor Visa</span>:
                This visa is available to foreign nationals who make a
                significant investment in Georgia, such as by starting a
                business or investing in real estate.
                <br /> <br />●{" "}
                <span className="font-bold">Self-Employment Visa</span>: This
                visa is available to foreign nationals who wish to work as
                self-employed individuals in Georgia.
                <br /> <br />● <span className="font-bold">Student Visa</span>:
                This visa is available to foreign students who are studying in
                Georgia. It allows the student to work part-time while studying.
                <br /> <br />● <span className="font-bold">Family Visa</span>:
                This visa is available to the family members of foreign workers
                who are living and working in Georgia.
                <br /> <br />●{" "}
                <span className="font-bold">Retirement Visa</span>: This visa is
                available to foreign nationals who are retired and wish to live
                in Georgia.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Georgia Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Georgia, you will typically need
                to provide the following documents:
                <br /> <br />● Passport: You will need to provide a copy of your
                passport, including the identification page and any pages with
                visas or stamps.
                <br /> <br />● Passport-sized photos: You will need to provide
                two passport-sized photographs.
                <br /> <br />● Employment contract: You will need to provide a
                signed employment contract with a Georgian employer.
                <br /> <br />● Work permit: You will need to apply for and
                obtain a work permit from the Georgian Ministry of Economy and
                Sustainable Development.
                <br /> <br />● Medical insurance: You will need to provide proof
                of medical insurance that covers you while you are in Georgia.
                <br /> <br />
                ● Criminal background check: You may be required to provide a
                criminal background check from your home country.
                <br /> <br />● Educational documents: You may be required to
                provide copies of your educational certificates or diplomas.
                <br /> <br />
                ● Resume: You will need to provide a detailed resume or CV
                outlining your work experience and education.
                <br /> <br />● Letter of recommendation: You may be required to
                provide a letter of recommendation from a previous employer.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Georgia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In Georgia, you can apply for a worker visa at the Georgian
                embassy or consulate in your home country. You can also apply
                for a visa at the point of entry into Georgia, such as at an
                airport.
                <br /> <br /> To apply for a worker visa in Georgia, you will
                need to provide the following documents:
                <br /> <br />● A valid passport
                <br />● A completed visa application form
                <br />● A recent passport-sized photo
                <br />● A letter of invitation from your employer in Georgia
                <br />
                ● Evidence of your employment, such as a contract or offer
                letter
                <br />
                ● Evidence of your qualifications and professional experience
                <br />
                ● Payment for the visa fee
                <br /> <br />
                <span className="font-bold">
                  You may also need to provide additional documents, depending
                  on your specific circumstances. It is a good idea to contact
                  the Georgian embassy or consulate in your home country for
                  more information on the specific requirements for a worker
                  visa.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Georgia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes, you will need a student visa to study in Georgia. To apply
                for a student visa, you will need to provide the following
                documents:
                <br /> <br />● A valid passport
                <br />● A completed visa application form
                <br />● A recent passport-sized photo
                <br />● A letter of acceptance from a Georgian educational
                institution
                <br />● Evidence of your financial ability to support yourself
                during your studies in Georgia
                <br />● Payment for the visa fee
                <br /> <br />
                <span className="font-bold">
                  You may also need to provide additional documents, depending
                  on your specific circumstances. It is a good idea to contact
                  the Georgian embassy or consulate in your home country for
                  more information on the specific requirements for a student
                  visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Georgia student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Georgia, you will need to follow
                these steps:
                <br /> <br />● Find a Georgian educational institution that you
                would like to attend and apply to the school. If you are
                accepted, the school will provide you with a letter of
                acceptance.
                <br /> <br />● Contact the Georgian embassy or consulate in your
                home country to find out the specific requirements for a student
                visa.
                <br /> <br />● Gather all the necessary documents, including a
                valid passport, a completed visa application form, a recent
                passport-sized photo, and a letter of acceptance from a Georgian
                educational institution.
                <br /> <br />● Submit the required documents and payment for the
                visa fee to the Georgian embassy or consulate.
                <br /> <br />● Wait for a decision on your visa application.
                This process can take several weeks, so it is important to plan
                ahead and apply as early as possible.
                <br /> <br />● If your visa is approved, you will need to pay a
                consular fee and schedule an appointment to have your visa
                issued.
                <br /> <br />● Once you have your visa, you can make
                arrangements to travel to Georgia and begin your studies.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Georgia student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Georgia, you will need to
                provide the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least six months beyond your planned stay in Georgia.
                <br /> <br />● A completed visa application form: You can obtain
                a visa application form from the Georgian embassy or consulate
                in your home country.
                <br /> <br />● A recent passport-sized photo: You will need to
                provide a recent passport-sized photo with your visa
                application.
                <br /> <br />● A letter of acceptance from a Georgian
                educational institution: This letter should be issued by the
                school you have been accepted to, and should confirm that you
                have been accepted to study there.
                <br /> <br />● Evidence of your financial ability to support
                yourself during your studies in Georgia: You will need to show
                that you have enough money to cover your living expenses while
                you are studying in Georgia. This may include bank statements,
                scholarship letters, or other financial documents.
                <br /> <br />● Payment for the visa fee: You will need to pay a
                fee to apply for a student visa. The fee amount will vary
                depending on your country of origin and the length of your
                planned stay in Georgia.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Georgia student Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Georgia will depend
                on the length of your planned stay in Georgia and your country
                of origin.
                <br /> <br /> Student visas for Georgia can be issued for single
                or multiple entries, and can be valid for up to one year. If you
                are planning to study in Georgia for a longer period of time,
                you will need to apply for an extension of your student visa
                before it expires.
                <br /> <br />
                <span className="font-bold">
                  The price of a student visa for Georgia will vary depending on
                  your country of origin and the length of your planned stay.
                  You can contact the Georgian embassy or consulate in your home
                  country for more information on the specific fees for a
                  student visa.
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

export default Georgia;
