import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Kosovo = () => {
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
        <title>Kosovo</title>
        <meta name="description" content="Kosovo" />
        <meta
          name="keywords"
          content="Kosovo travel visa, Kosovo work visa, Kosovo study visa, How to apply for a Kosovo visa, Kosovo visa requirements, Kosovo tourist visa, Kosovo student visa, Kosovo business visa, Kosovo visa processing time, Kosovo visa application process, Kosovo visa for Americans, Kosovo visa for Europeans, Kosovo visa for Kosovo, Kosovo visa for Canadians, Kosovo visa for Kosovo, Kosovo visa for Chinese, Kosovo visa for Africans, Kosovo visa for Asians, Kosovo visa for South Americans, Kosovo visa for Middle Easterners, Kosovo visa for UK citizens, Kosovo visa for EU citizens, Kosovo visa for Schengen area, Kosovo visa for non-EU citizens, Kosovo visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Kosovo
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Kosovo is a small country in the Balkans region of Europe. It
              gained independence from Serbia in 2008, and is the subject of
              ongoing political debate and international recognition. Kosovo is
              known for its rich cultural heritage and natural beauty, with
              mountains, forests, and rivers that are popular with hikers and
              outdoor enthusiasts. The capital city of Pristina is a major hub
              of commerce and trade, and is home to many cultural and historical
              sites, including the National Museum of Kosovo and the Church of
              Our Lady of Ljeviš, a UNESCO World Heritage Site. The country is
              also known for its vibrant music and arts scene, with many
              talented musicians and artists emerging from Kosovo in recent
              years.
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
                Who can enter Kosovo without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are eligible to enter Kosovo
                without a visa for stays of up to 90 days within a 180-day
                period. These countries include:
                <span className="font-bold">
                  &nbsp;Albania, Andorra, Antigua and Barbuda, Australia,
                  Austria, Bahamas, Barbados, Belgium, Bosnia and Herzegovina,
                  Brazil, Bulgaria, Canada, Chile, Costa Rica, Croatia, Cyprus,
                  Czech Republic, Denmark, El Salvador, Estonia, Finland,
                  France, Germany, Greece, Guatemala, Honduras, Hungary,
                  Iceland, Ireland, Israel, Italy, Japan, Kosovo, Latvia,
                  Liechtenstein, Lithuania, Luxembourg, Macedonia, Malta,
                  Moldova, Monaco, Montenegro, Netherlands, New, Zealand,
                  Nicaragua, Norway, Panama, Paraguay, Poland, Portugal,
                  Romania, San Marino, Serbia, Slovakia, Slovenia, South Korea,
                  Spain Sweden, Switzerland, Turkey, Ukraine, United Kingdom,
                  United States, Uruguay.{" "}
                </span>
                <br /> <br />
                <span className="font-bold">
                  Please note that this list is subject to change, and you
                  should check the latest visa requirements before planning your
                  trip to Kosovo.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Kosovo Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Kosovo, you will need to provide the
                following documents:
                <br /> <br />● A completed visa application form: You can obtain
                a visa application form from the Embassy of Kosovo in your
                country or from a visa processing agency.
                <br /> <br />● A valid passport: Your passport must be valid for
                at least six months beyond the intended length of your stay in
                Kosovo. It must also have at least two blank visa pages.
                <br /> <br />
                ● Passport-size photographs: You will need to provide two
                recent, passport-size photographs with your visa application.
                <br /> <br />● A letter of invitation: If you are being invited
                to Kosovo by a person or organization, you will need to provide
                a letter of invitation from them. The letter should state the
                purpose of your visit, the duration of your stay, and the
                details of your accommodations.
                <br /> <br />● Proof of sufficient funds: You will need to show
                that you have enough money to support yourself during your stay
                in Kosovo. This may include bank statements, pay stubs, or other
                financial documents.
                <br /> <br />● Proof of health insurance: You will need to
                provide proof of health insurance that covers you while you are
                in Kosovo.
                <br /> <br />● Any additional documents required for the type of
                visa you are applying for: Depending on your specific
                circumstances and the nature of your trip, you may need to
                provide additional documents, such as a police clearance
                certificate or proof of your education and qualifications.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Kosovo Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Kosovo, you will need to follow these
                steps:
                <br /> <br />● Determine if you need a visa: If you are a
                citizen of a country that has a visa-free agreement with Kosovo,
                you may be able to enter the country without a visa for a
                certain period of time. However, if you want to stay in Kosovo
                for a longer period of time, or if you are a citizen of a
                country that does not have a visa-free agreement with Kosovo,
                you will need to apply for a visa.
                <br /> <br />● Gather the required documents: To apply for a
                visa to Kosovo, you will need to submit a completed visa
                application form, a valid passport, passport-size photographs,
                and any additional documents required for the type of visa you
                are applying for. These may include a letter of invitation,
                proof of sufficient funds, and proof of health insurance.
                <br /> <br />● Submit your application: You can apply for a visa
                to Kosovo by submitting your application in person at the
                Embassy of Kosovo in your country, or you may be able to apply
                online through a visa processing agency.
                <br /> <br />● Pay the visa fee: You will need to pay a visa fee
                when you submit your application. The fee amount will depend on
                the type of visa you are applying for and the length of your
                stay.
                <br /> <br />● Wait for your visa to be processed: The
                processing time for a visa to Kosovo can vary, so it is
                important to apply well in advance of your intended travel date.
                <br /> <br />● Collect your visa once it has been approved. You
                can collect your visa in person or have it mailed to you. Make
                sure to bring your passport with you when you collect your visa.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Kosovo?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Kosovo will depend on the
                type of visa you have.
                <br /> <br /> If you are a citizen of a country that has a
                visa-free agreement with Kosovo, you may be able to enter the
                country without a visa for a certain period of time. This period
                of time may vary depending on your nationality.
                <br /> <br /> If you are a citizen of a country that does not
                have a visa-free agreement with Kosovo, or if you want to stay
                in Kosovo for a longer period of time, you will need to apply
                for a visa. The length of your stay will be determined by the
                type of visa you are granted. <br /> <br />
                For example, if you are granted a{" "}
                <span className="font-bold">tourist visa</span>, you may be able
                to stay in Kosovo for up to 90 days within a 180-day period. If
                you are granted a business visa, you may be able to stay for up
                to 90 days within a 180-day period for business purposes, or for
                up to one year for work purposes.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Kosovo?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Entry and Exit Requirements. Is a negative COVID-19 test (PCR
                and/or serology) required for entry? Not by the Kosovo
                government, but may be required by airlines. As of May 1, 2022,
                Kosovo does not seek your vaccination status records, however we
                recommend you bring your vaccination records with you
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
                government officials.
                <br />
                <br />
                In the case of Kosovo, a diplomatic passport is issued to
                individuals who are appointed as representatives of the Republic
                of Kosovo to foreign states, international organizations, or
                other foreign entities.
                <br />
                <br />
                Holders of a Kosovan diplomatic passport are entitled to certain
                privileges and immunities under international law, such as
                immunity from arrest and prosecution, and special privileges
                with regard to taxes, customs, and immigration.
                <br />
                <br />
                It is worth to noting that Kosovo is a disputed territory and
                not all countries recognize it as a sovereign state. So, the
                recognition of diplomatic passport from Kosovo may differ from
                country to country.
                <br />
                <br />
                In order to obtain a diplomatic passport in Kosovo, one
                typically needs to be appointed by the government of the
                Republic of Kosovo to a diplomatic position and will usually
                need to provide documentation to confirm their status and
                purpose of travel.
                <br />
                <br />
                <span className="font-bold">
                  Please note that, the information provided here is based on
                  the publicly available information, the rules and regulations
                  regarding diplomatic passport in Kosovo may change over time,
                  so it's recommended to check with the Kosovo Ministry of
                  Foreign Affairs for the most recent and accurate information.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Kosovo?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You may need a worker visa to work in Kosovo, depending on your
                nationality and the length of your stay.
                <br /> <br /> If you are a citizen of a country that has a
                visa-free agreement with Kosovo, you may be able to work in the
                country without a worker visa for a certain period of time.
                However, if you want to work in Kosovo for a longer period of
                time, or if you are a citizen of a country that does not have a
                visa-free agreement with Kosovo, you will need to apply for a
                worker visa.
                <br /> <br /> To apply for a worker visa in Kosovo, you will
                need to submit a completed visa application form, a valid
                passport, passport-size photographs, and any additional
                documents required for the type of visa you are applying for.
                These may include a letter of invitation from your Kosovo
                employer, proof of sufficient funds, and proof of health
                insurance.
                <br /> <br /> You will also need to pay a visa fee when you
                submit your application. The fee amount will depend on the type
                of visa you are applying for and the length of your stay.
                <br /> <br />
                <span className="font-bold">
                  The process for obtaining a worker visa in Kosovo can take
                  several weeks, so it is important to apply well in advance of
                  your intended start date.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Kosovo Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Kosovo, you will need to follow
                these steps:
                <br /> <br />● Determine if you need a worker visa: If you are a
                citizen of a country that has a visa-free agreement with Kosovo,
                you may be able to work in the country without a worker visa for
                a certain period of time. However, if you want to work in Kosovo
                for a longer period of time, or if you are a citizen of a
                country that does not have a visa-free agreement with Kosovo,
                you will need to apply for a worker visa.
                <br /> <br />● Find employment in Kosovo: In order to apply for
                a worker visa, you will need to have been offered a job in
                Kosovo. You can search for job openings in Kosovo through job
                websites or by contacting companies directly.
                <br /> <br />● Gather the required documents: To apply for a
                worker visa, you will need to submit a completed visa
                application form, a valid passport, passport-size photographs,
                and any additional documents required for the type of visa you
                are applying for. These may include a letter of invitation from
                your Kosovo employer, proof of sufficient funds, and proof of
                health insurance.
                <br /> <br />● Submit your application: You can apply for a
                worker visa by submitting your application in person at the
                Embassy of Kosovo in your country, or you may be able to apply
                online through a visa processing agency.
                <br /> <br />● Pay the visa fee: You will need to pay a visa fee
                when you submit your application. The fee amount will depend on
                the type of visa you are applying for and the length of your
                stay.
                <br /> <br />● Wait for your visa to be processed: The
                processing time for a worker visa in Kosovo can vary, so it is
                important to apply well in advance of your intended start date.
                <br /> <br />● Collect your visa: Once your visa has been
                approved, you will need to collect it in person or have it
                mailed to you. Make sure to bring your passport with you when
                you collect your visa.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Kosovo Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of visas that a worker in Kosovo may be
                eligible for, depending on the purpose and duration of their
                stay. Some common types of visas include:
                <br /> <br />●{" "}
                <span className="font-bold">Temporary Work Visa</span>: This
                type of visa is issued to individuals who plan to work in Kosovo
                for a temporary period of time, usually up to 90 days.
                <br /> <br />●{" "}
                <span className="font-bold">Long-Term Work Visa</span>: This
                type of visa is issued to individuals who plan to work in Kosovo
                for a longer period of time, usually more than 90 days.
                <br /> <br />●{" "}
                <span className="font-bold">Self-Employment Visa</span>: This
                type of visa is issued to individuals who plan to work as
                self-employed individuals in Kosovo.
                <br /> <br />●{" "}
                <span className="font-bold">Employment Visa</span>: This type of
                visa is issued to individuals who have been offered a job in
                Kosovo and plan to work for an employer in the country.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Kosovo Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Kosovo worker visa, you will typically need to
                provide the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least six months beyond the date of your intended stay in
                Kosovo.
                <br /> <br />● A completed and signed Kosovo visa application
                form: You can obtain this form from the Kosovo embassy or
                consulate in your home country.
                <br /> <br />● A recent passport-sized photograph: This should
                be a color photograph that meets the Kosovo visa photo
                requirements.
                <br /> <br />● A job offer letter from your Kosovo employer:
                This letter should state the details of your employment,
                including your job title, salary, and duration of your stay in
                Kosovo.
                <br /> <br />● Proof of financial stability: You will need to
                provide evidence that you have sufficient funds to support
                yourself during your stay in Kosovo. This may include bank
                statements or a letter from your employer confirming that they
                will provide financial support.
                <br /> <br />● A criminal record check: You may need to provide
                a police clearance certificate or similar document to
                demonstrate that you have no criminal history.
                <br /> <br />● Health insurance: You will need to provide proof
                of health insurance that covers you during your stay in Kosovo.
                <br /> <br />● Other documents may be required depending on your
                specific circumstances. It is important to check with the Kosovo
                embassy or consulate in your home country for a complete list of
                required documents.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Kosovo for a Worker Visa in Albania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Kosovo worker visa in Albania, you will need to
                visit the Kosovo embassy or consulate in Albania. Kosovo does
                not currently have an embassy in Albania, so you may need to
                visit the embassy or consulate in a nearby country. You can find
                more information about the Kosovo embassy or consulate in
                Albania by contacting the Kosovo Ministry of Foreign Affairs or
                checking their website.
                <br /> <br />
                <span className="font-bold">
                  It is important to apply for your Kosovo worker visa well in
                  advance of your intended travel date, as processing times can
                  vary. You should also be aware of any deadlines or cut-off
                  dates for visa applications. It is generally recommended to
                  apply for your visa at least one month before your intended
                  travel date to allow sufficient time for processing.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Kosovo?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of a country that is a member of the
                European Union (EU), the European Economic Area (EEA), or
                Switzerland, you do not need a visa to study in Kosovo for stays
                of up to 90 days.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Kosovo student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Kosovo student visa, you will need to follow the
                steps below:
                <br /> <br />● Gather the required documents: As a foreign
                student, you will need to provide a number of documents as part
                of your visa application. These may include a valid passport, a
                completed and signed Kosovo visa application form, a recent
                passport-sized photograph, an acceptance letter from your Kosovo
                educational institution, proof of financial stability, a
                criminal record check, and health insurance. It is important to
                check with the Kosovo embassy or consulate in your home country
                for a complete list of required documents.
                <br /> <br />● Contact the Kosovo embassy or consulate: Once you
                have gathered all of the required documents, you should contact
                the Kosovo embassy or consulate in your home country to schedule
                an appointment to submit your visa application.
                <br /> <br />● Submit your visa application: At your
                appointment, you will need to submit your completed visa
                application along with all of the required supporting documents.
                You may also be required to pay a visa processing fee at this
                time.
                <br /> <br />● Wait for a decision: After you have submitted
                your visa application, it will be reviewed by the Kosovo
                authorities. You will be notified by the embassy or consulate if
                your visa application has been approved or denied.
                <br /> <br />● If your visa is approved: If your visa
                application is approved, you will receive your visa in the form
                of a sticker that will be placed in your passport. You should
                make sure to bring your visa with you when you travel to Kosovo.
                <br /> <br />● If your visa is denied: If your visa application
                is denied, you will receive a letter explaining the reason for
                the denial. You may have the option to appeal the decision or to
                reapply for a visa at a later time.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Kosovo student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a Kosovo student visa, you will typically
                need to meet the following requirements:
                <br /> <br />● Have a valid passport: Your passport must be
                valid for at least six months beyond the date of your intended
                stay in Kosovo.
                <br /> <br />● Be accepted to a Kosovo educational institution:
                You will need to provide an acceptance letter from a Kosovo
                educational institution as part of your visa application.
                <br /> <br />● Demonstrate financial stability: You will need to
                provide evidence that you have sufficient funds to support
                yourself during your stay in Kosovo. This may include bank
                statements or a letter from your educational institution
                confirming that they will provide financial support.
                <br /> <br />● Have a clean criminal record: You may need to
                provide a police clearance certificate or similar document to
                demonstrate that you have no criminal history.
                <br /> <br />● Have health insurance: You will need to provide
                proof of health insurance that covers you during your stay in
                Kosovo.
                <br /> <br />● Meet any other requirements set by the Kosovo
                embassy or consulate in your home country: These may include an
                interview, a medical examination, or other documentation. It is
                important to check with the embassy or consulate for a complete
                list of requirements.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Kosovo student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a Kosovo student visa will depend on
                the length of your studies and the duration of your stay in
                Kosovo.
                <br /> <br /> A Kosovo student visa may be issued for a single
                entry or for multiple entries, depending on your specific
                circumstances. A single entry visa is valid for a one-time visit
                to Kosovo, while a multiple entry visa allows you to enter and
                exit Kosovo multiple times during the validity period of the
                visa.
                <br /> <br /> The price of a Kosovo student visa will vary
                depending on the type of visa and the duration of your stay. The
                Kosovo embassy or consulate in your home country should be able
                to provide you with information on the specific fees for student
                visas. It is generally recommended to apply for your visa at
                least one month before your intended travel date to allow
                sufficient time for processing and to avoid any additional fees.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that a Kosovo student visa does not
                  allow you to work in Kosovo. If you wish to work while
                  studying in Kosovo, you will need to apply for a separate work
                  visa.
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

export default Kosovo;
