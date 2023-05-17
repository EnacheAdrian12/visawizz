import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Netherlands = () => {
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
        <title>Netherlands</title>
        <meta name="description" content="Netherlands" />
        <meta
          name="keywords"
          content="Netherlands travel visa, Netherlands work visa, Netherlands study visa, How to apply for an Netherlands visa, Netherlands visa requirements, Netherlands tourist visa, Netherlands student visa, Netherlands business visa, Netherlands visa processing time, Netherlands visa application process, Netherlands visa for Americans, Netherlands visa for Europeans, Netherlands visa for Netherlandsns, Netherlands visa for Canadians, Netherlands visa for Netherlandsns, Netherlands visa for Chinese, Netherlands visa for Africans, Netherlands visa for Asians, Netherlands visa for South Americans, Netherlands visa for Middle Easterners, Netherlands visa for UK citizens, Netherlands visa for EU citizens, Netherlands visa for Schengen area, Netherlands visa for non-EU citizens, Netherlands visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Netherlands
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              The Netherlands is a country in Western Europe, known for its
              beautiful landscapes, vibrant cities, and rich cultural heritage.
              The country has a long and complex history, with roots in the
              medieval era and the Dutch Golden Age. Today, the Netherlands is
              known for its beautiful canals, historic windmills, and tulip
              fields, which are popular with tourists. The capital city of
              Amsterdam is a major cultural and economic hub, with many historic
              landmarks, museums, and cultural institutions. The Netherlands is
              also known for its rich cultural heritage, with many traditional
              festivals, music, and art forms that reflect its diverse
              population. The country is a popular tourist destination, with
              many visitors coming to experience its beautiful landscapes and
              vibrant culture.
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
                Who can enter Netherlands without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are allowed to enter the
                Netherlands without a visa for stays of up to 90 days within a
                180-day period. These countries are:
                <br /> <br />● EU member states: All EU member states are part
                of the Schengen Area, which allows citizens of these countries
                to travel freely within the member states without a visa.
                <br /> <br />● EEA member states: The EEA (European Economic
                Area) consists of the EU member states, as well as Iceland,
                Liechtenstein, and Norway. Citizens of these countries are also
                allowed to enter the Netherlands without a visa.
                <br /> <br />● Schengen Area countries: In addition to the EU
                and EEA member states, there are several other countries that
                are part of the Schengen Area but are not EU or EEA member
                states. These countries include Switzerland, Iceland,
                Liechtenstein, Norway, and Malta. Citizens of these countries
                are also allowed to enter the Netherlands without a visa.
                <br /> <br />● Other countries: Some citizens of countries
                outside of the EU, EEA, and Schengen Area are also allowed to
                enter the Netherlands without a visa for stays of up to 90 days
                within a 180-day period. These countries include Andorra,
                Argentina, Australia, Brazil, Canada, Chile, Costa Rica, El
                Salvador, Guatemala, Honduras, Israel, Japan, South Korea,
                Macao, Malaysia, Mauritius, Mexico, Monaco, New Zealand,
                Nicaragua, Panama, Paraguay, San Marino, Singapore, South
                Africa, United Arab Emirates, United States, Uruguay, and
                Vatican City.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the above list is not exhaustive,
                  and there may be other countries that are also allowed to
                  enter the Netherlands without a visa. You should check with
                  the Dutch embassy or consulate in your home country for more
                  information on the specific requirements that apply to you.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Netherlands Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Netherlands visa, you will typically need to
                provide the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least three months beyond the date of your intended stay in
                the Netherlands.
                <br /> <br />● A completed and signed Netherlands visa
                application form: You can obtain this form from the Dutch
                embassy or consulate in your home country or online.
                <br /> <br />● A recent passport-sized photograph: This should
                be a color photograph that meets the Netherlands visa photo
                requirements.
                <br /> <br />● Proof of sufficient funds: You will need to
                provide evidence that you have sufficient funds to support
                yourself during your stay in the Netherlands. This may include
                bank statements or a letter from your sponsor confirming that
                they will provide financial support.
                <br /> <br />● Health insurance: You will need to provide proof
                of health insurance that covers you during your stay in the
                Netherlands.
                <br /> <br />● Other documents may be required depending on your
                specific circumstances and the purpose of your visit to the
                Netherlands. It is important to check with the Dutch embassy or
                consulate in your home country for a complete list of required
                documents.
                <br /> <br />
                <span className="font-bold">
                  It is worth noting that the requirements for a Netherlands
                  visa may vary depending on your specific circumstances and the
                  specific type of visa that you are applying for. You should
                  check with the Dutch authorities for more information on the
                  specific requirements that apply to you.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Netherlands Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Netherlands visa, you will need to follow the
                steps below:
                <br /> <br />● Gather the required documents: As a foreign
                national, you will need to provide a number of documents as part
                of your visa application. These may include a valid passport, a
                completed and signed Netherlands visa application form, a recent
                passport-sized photograph, proof of sufficient funds, and health
                insurance. It is important to check with the Dutch embassy or
                consulate in your home country for a complete list of required
                documents.
                <br /> <br />● Contact the Dutch embassy or consulate: Once you
                have gathered all of the required documents, you should contact
                the Dutch embassy or consulate in your home country to schedule
                an appointment to submit your visa application.
                <br /> <br />● Submit your visa application: At your
                appointment, you will need to submit your completed visa
                application along with all of the required supporting documents.
                You may also be required to pay a visa processing fee at this
                time.
                <br /> <br />● Wait for a decision: After you have submitted
                your visa application, it will be reviewed by the Dutch
                authorities. You will be notified by the embassy or consulate if
                your visa application has been approved or denied.
                <br /> <br />● If your visa is approved: If your visa
                application is approved, you will receive your visa in the form
                of a sticker that will be placed in your passport. You should
                make sure to bring your visa with you when you travel to the
                Netherlands.
                <br /> <br />● If your visa is denied: If your visa application
                is denied, you will receive a letter explaining the reason for
                the denial. You may have the option to appeal the decision or to
                reapply for a visa at a later time.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Netherlands?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The amount of time you are allowed to stay in the Netherlands
                will depend on the specific type of visa that you have and the
                purpose of your visit.
                <br /> <br /> If you have a short-stay visa (also known as a
                Schengen visa), you will typically be allowed to stay in the
                Netherlands for up to 90 days within a 180-day period. This type
                of visa is issued for purposes such as tourism, business, or
                visiting family and friends.
                <br /> <br /> If you have a long-stay visa or residence permit,
                you will typically be allowed to stay in the Netherlands for a
                longer period of time, depending on the specific type of visa or
                permit that you have. For example, you may be allowed to stay in
                the Netherlands for one year or more if you are studying,
                working, or living with a family member who is a Dutch citizen
                or legal resident.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the amount of time you are
                  allowed to stay in the Netherlands may be limited by the
                  specific terms and conditions of your visa or residence
                  permit. You should make sure to check with the Dutch
                  authorities for more information on the specific rules that
                  apply to you.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Netherlands?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In contrast, the Netherlands has already lifted all of its
                COVID-19 entry restrictions for EU/EEA travellers. Travellers
                from EU/EEA countries can enter the Netherlands
                restriction-free, regardless of their vaccination or recovery
                status.
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
                government officials. In the case of the Netherlands, a
                diplomatic passport is issued to individuals who are appointed
                as representatives of the Dutch government to foreign states,
                international organizations, or other foreign entities.
                <br />
                <br />
                Holders of a Dutch diplomatic passport are entitled to certain
                privileges and immunities under international law, such as
                immunity from arrest and prosecution, and special privileges
                with regard to taxes, customs, and immigration.
                <br />
                <br />
                It's worth noting that, The Netherlands is a member of the
                European Union and the Schengen Area, which means that Dutch
                diplomatic passport holders can travel visa-free within the
                Schengen zone.
                <br />
                <br />
                In order to obtain a diplomatic passport in the Netherlands, one
                typically needs to be appointed by the government of the
                Netherlands to a diplomatic position and will usually need to
                provide documentation to confirm their status and purpose of
                travel.
                <br />
                <br />
                <span className="font-bold">
                  Please note that, the information provided here is based on
                  the publicly available information, the rules and regulations
                  regarding diplomatic passport in the Netherlands may change
                  over time, so it's recommended to check with the Netherlands
                  Ministry of Foreign Affairs for the most recent and accurate
                  information.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Netherlands?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                As a foreign national, you may need a worker visa in order to
                work in the Netherlands. Whether or not you need a worker visa
                will depend on your specific circumstances and the length of
                time you plan to work in the Netherlands.
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of an EU or EEA member state, or of
                  Switzerland, you do not need a worker visa to work in the
                  Netherlands.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Netherlands Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa (also known as a Single Permit) in
                the Netherlands, you will need to follow the steps below:
                <br /> <br />● Gather the required documents: As a foreign
                national, you will need to provide a number of documents as part
                of your visa application. These may include a valid passport, a
                completed and signed Netherlands visa application form, a recent
                passport-sized photograph, proof of sufficient funds, and health
                insurance. You may also need to provide other documents such as
                a job offer from a Dutch employer and proof of your
                qualifications. It is important to check with the Dutch embassy
                or consulate in your home country for a complete list of
                required documents.
                <br /> <br />● Contact the Dutch embassy or consulate: Once you
                have gathered all of the required documents, you should contact
                the Dutch embassy or consulate in your home country to schedule
                an appointment to submit your visa application.
                <br /> <br />● Submit your visa application: At your
                appointment, you will need to submit your completed visa
                application along with all of the required supporting documents.
                You may also be required to pay a visa processing fee at this
                time.
                <br /> <br />● Wait for a decision: After you have submitted
                your visa application, it will be reviewed by the Dutch
                authorities. You will be notified by the embassy or consulate if
                your visa application has been approved or denied.
                <br /> <br />● If your visa is approved: If your visa
                application is approved, you will receive your visa in the form
                of a sticker that will be placed in your passport. You should
                make sure to bring your visa with you when you travel to the
                Netherlands.
                <br /> <br />● If your visa is denied: If your visa application
                is denied, you will receive a letter explaining the reason for
                the denial. You may have the option to appeal the decision or to
                reapply for a visa at a later time.
                <br /> <br />
                <span className="font-bold">
                  It is worth noting that the process for applying for a worker
                  visa in the Netherlands may vary depending on your specific
                  circumstances and the specific type of visa that you are
                  applying for. You should check with the Dutch authorities for
                  more information on the specific requirements that apply to
                  you.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Netherlands Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas that are available to
                foreign nationals who want to work in the Netherlands. The
                specific type of worker visa that you may be eligible for will
                depend on your specific circumstances and the length of time you
                plan to work in the Netherlands.
                <br /> <br />● <span className="font-bold">Single Permit</span>:
                A Single Permit is a type of worker visa that allows you to work
                and live in the Netherlands for a specific period of time. In
                order to be eligible for a Single Permit, you will typically
                need to have a job offer from a Dutch employer, and you will
                need to meet certain requirements such as having a clean
                criminal record and being in good health.
                <br /> <br />●{" "}
                <span className="font-bold">
                  Residence permit for employed persons
                </span>
                : If you have a job offer from a Dutch employer and you plan to
                work in the Netherlands for more than three months, you may be
                eligible for a residence permit for employed persons. This type
                of permit allows you to work and live in the Netherlands for a
                specific period of time, which may be up to one year or longer
                depending on the specific terms of your permit.
                <br /> <br />● <span className="font-bold">ICT permit</span>: An
                ICT (Intra-Corporate Transfer) permit is a type of worker visa
                that is available to employees of multinational companies who
                are being transferred to the Netherlands for a temporary period
                of time. This type of permit allows you to work and live in the
                Netherlands for a specific period of time, which may be up to
                three years or longer depending on the specific terms of your
                permit.
                <br /> <br />●{" "}
                <span className="font-bold">Highly skilled migrant permit</span>
                : A highly skilled migrant permit is a type of worker visa that
                is available to highly skilled workers who have a job offer from
                a Dutch employer. This type of permit allows you to work and
                live in the Netherlands for a specific period of time, which may
                be up to five years or longer depending on the specific terms of
                your permit.
                <br /> <br />
                <span className="font-bold">
                  It is worth noting that the rules for working in the
                  Netherlands may vary depending on your specific circumstances
                  and the length of time you plan to work in the Netherlands.
                  You should check with the Dutch authorities for more
                  information on the specific requirements that apply to you.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Netherlands Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Netherlands worker visa, you will need to provide
                the following documents:
                <br /> <br />● A valid passport or travel document
                <br /> <br />● A completed and signed visa application form
                <br /> <br />● Two recent passport-sized photos Evidence of your
                employer's employment offer or contract, including details of
                your salary and the duration of your employment
                <br /> <br />● Evidence of your qualifications and professional
                experience, such as your CV and copies of any relevant degrees
                or certificates
                <br /> <br />● A copy of your travel insurance policy
                <br /> <br />● Evidence of your financial means, such as bank
                statements or a letter from your employer stating that they will
                cover your expenses while you are in the Netherlands
                <br /> <br />● A criminal record certificate from your country
                of origin and any country you have lived in for more than six
                months in the past 10 years
                <br /> <br />● A medical certificate stating that you are in
                good health and do not have any infectious diseases
                <br /> <br />● Any other documents required by the Dutch embassy
                or consulate where you will be applying for your visa.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Netherlands?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You should apply for a Netherlands worker visa at the Dutch
                embassy or consulate in your country of residence. If you are
                not a resident of the country where you are applying, you may
                need to apply for your visa at the embassy or consulate that has
                jurisdiction over your place of residence.
                <br /> <br /> You should start the process of applying for a
                Netherlands worker visa well in advance of your intended travel
                date, as the process can take several weeks or even months to
                complete. You should also be aware that the availability of
                appointments at the Dutch embassy or consulate may be limited,
                so you should schedule your appointment as early as possible.
                <br /> <br />
                <span className="font-bold">
                  To apply for a Netherlands worker visa, you will need to
                  schedule an appointment at the Dutch embassy or consulate
                  where you will be applying. You can usually do this online or
                  by contacting the embassy or consulate directly. During your
                  appointment, you will need to submit your completed visa
                  application form and all required documents. You may also need
                  to undergo an interview with a consular officer.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Netherlands?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a visa to study in the Netherlands depends on
                your nationality and the length of your intended stay.
                <br /> <br /> If you are a national of an EU/EEA country
                (European Union/European Economic Area) or Switzerland, you do
                not need a visa to study in the Netherlands. However, you will
                need to register with the municipality in the city where you
                will be living within five days of arriving in the Netherlands.
                <br /> <br />
                If you are a national of another country and you will be
                studying in the Netherlands for less than 90 days, you may not
                need a visa. However, you should check the visa requirements for
                the Netherlands to confirm whether you need a visa.
                <br /> <br />
                <span className="font-bold">
                  If you are a national of another country and you will be
                  studying in the Netherlands for more than 90 days, you will
                  need to apply for a Dutch student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Netherlands student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Netherlands student visa, you will need to follow
                the steps below: Find a program of study: First, you will need
                to find a program of study at a recognized educational
                institution in the Netherlands.
                <br /> <br />● Meet the requirements: Next, you will need to
                make sure you meet the requirements for a Netherlands student
                visa, including having a valid passport, being accepted into a
                program of study, and having sufficient financial means to
                support yourself while studying in the Netherlands.
                <br /> <br />● Gather the required documents: You will need to
                gather the required documents for a Netherlands student visa,
                which may include a completed and signed visa application form,
                passport-sized photos, an acceptance letter from your
                educational institution, evidence of your financial means, and a
                medical certificate.
                <br /> <br />● Schedule an appointment: You will need to
                schedule an appointment at the Dutch embassy or consulate where
                you will be applying for your student visa. You can usually do
                this online or by contacting the embassy or consulate directly.
                <br /> <br />
                ● Submit your application: During your appointment, you will
                need to submit your completed visa application form and all
                required documents. You may also need to undergo an interview
                with a consular officer.
                <br /> <br />● Wait for a decision: The processing time for a
                Netherlands student visa can vary, but it can take several weeks
                or even months. You should not make any travel arrangements
                until you have received a decision on your student visa
                application.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Netherlands student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a Netherlands student visa, you will need to
                meet the following requirements:
                <br /> <br />● You must have been accepted into a program of
                study at a recognized educational institution in the
                Netherlands.
                <br /> <br />● You must have sufficient financial means to
                support yourself while studying in the Netherlands. This may
                include evidence of sufficient funds in your bank account or a
                letter from your sponsor stating that they will cover your
                expenses while you are in the Netherlands.
                <br /> <br />● You must have a valid passport or travel
                document.
                <br /> <br />● You must be in good health and not have any
                infectious diseases. You will need to provide a medical
                certificate as part of your visa application. You must not have
                a criminal record.
                <br /> <br />● You will need to provide a criminal record
                certificate from your country of origin and any country you have
                lived in for more than six months in the past 10 years as part
                of your visa application.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Netherlands student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a Netherlands student visa will depend
                on the length of your program of study and the specific
                requirements of the Dutch embassy or consulate where you will be
                applying.
                <br /> <br /> If you will be studying in the Netherlands for a
                program that is less than 90 days, you may be able to apply for
                a short-stay visa, also known as a Schengen visa. A Schengen
                visa is valid for up to 90 days within a 180-day period and
                allows you to travel to any country within the Schengen area.
                The Schengen area consists of 26 European countries that have
                abolished passport controls at their mutual borders.
                <br /> <br /> The price of a Schengen visa is €80 for adults and
                €40 for children between the ages of 6 and 12. Children under
                the age of 6 are exempt from the visa fee.
                <br /> <br /> If you will be studying in the Netherlands for a
                program that is longer than 90 days, you will need to apply for
                a long-stay visa, also known as a residence permit. The validity
                of a residence permit will depend on the length of your program
                of study. If your program is less than one year, your residence
                permit will be valid for the duration of your program. If your
                program is longer than one year, your residence permit will be
                valid for up to five years.
                <br /> <br />
                <span className="font-bold">
                  The price of a residence permit varies depending on the
                  specific type of permit you are applying for. You can find
                  more information on the price of different types of residence
                  permits on the website of the Dutch immigration authorities
                  (IND).
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

export default Netherlands;
