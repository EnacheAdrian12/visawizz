import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const France = () => {
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
        <title>France</title>
        <meta name="description" content="France" />
        <meta
          name="keywords"
          content="France travel visa, France work visa, France study visa, How to apply for an France visa, France visa requirements, France tourist visa, France student visa, France business visa, France visa processing time, France visa application process, France visa for Americans, France visa for Europeans, France visa for Francens, France visa for Canadians, France visa for Indians, France visa for Chinese, France visa for Africans, France visa for Asians, France visa for South Americans, France visa for Middle Easterners, France visa for UK citizens, France visa for EU citizens, France visa for Schengen area, France visa for non-EU citizens, France visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            France
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              France is a country located in Western Europe. It is known for its
              rich culture and history, as well as its beautiful landscapes and
              cities. Some of the things that France is famous for include its
              art and architecture, its fashion and cuisine, and its wine. The
              country is home to many world-renowned museums, such as the Louvre
              in Paris, which houses some of the most famous works of art in the
              world, including the Mona Lisa. In addition, France is known for
              its beautiful countryside, which includes the rolling hills of the
              countryside, the snow-capped peaks of the Alps, and the sandy
              beaches of the Mediterranean.
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
                Who can enter France without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                France is a member of the European Union (EU) and the Schengen
                Area, which consists of 26 European countries that have
                abolished passport and other types of border control at their
                mutual borders. This means that citizens of EU and Schengen Area
                countries do not need a visa to enter France or travel between
                other member countries.
                <br />
                <br />
                Citizens of certain countries outside of the EU and Schengen
                Area are also able to enter France without a visa for stays of
                up to 90 days in a 180-day period for tourism or business
                purposes. These countries include Andorra, Argentina, Australia,
                Bahamas, Barbados, Brazil, Brunei, Canada, Chile, Costa Rica, El
                Salvador, Guatemala, Honduras, Israel, Japan, Malaysia,
                Mauritius, Mexico, Monaco, New Zealand, Nicaragua, Panama,
                Paraguay, Saint Kitts and Nevis, San Marino, Seychelles, South
                Korea, Taiwan, United Arab Emirates, United States, Uruguay, and
                Vatican City.
                <br />
                <br />
                <span className="font-bold">
                  All other travelers to France must obtain a visa before
                  arriving in the country. The specific requirements for
                  obtaining a visa to France depend on the purpose and duration
                  of the visit, as well as the nationality of the applicant. It
                  is recommended that travelers check with the French embassy or
                  consulate in their country of residence for specific visa
                  requirements and application procedures.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for France Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to France, you will need to submit the
                following documents:
                <br />
                <br />● A completed visa application form. This form can be
                obtained from the French embassy or consulate in your country of
                residence, or it can be downloaded from the embassy's website.
                <br />
                <br />● A valid passport or travel document. Your passport must
                be valid for at least three months beyond the date you plan to
                leave France, and it must have at least two blank pages for the
                visa stamp.
                <br />
                <br />● Passport-sized photographs. You will need to submit two
                recent, passport-sized photographs with your visa application.
                The photos should meet the requirements for passport
                photographs, which include being taken against a white
                background and showing your face clearly.
                <br />
                <br />● Evidence of your purpose of visit. Depending on the
                purpose of your visit, you may need to provide additional
                documentation, such as a letter of invitation, a hotel
                reservation, or proof of employment.
                <br />
                <br />● Evidence of your financial means. You will need to
                demonstrate that you have sufficient funds to support yourself
                during your stay in France. This can be done by providing proof
                of employment, bank statements, or a letter of financial support
                from a sponsor.
                <br />
                <br />
                ● Proof of travel insurance. You will need to show that you have
                valid travel insurance that covers medical expenses,
                repatriation, and other expenses that may arise during your stay
                in France.
                <br />
                <br />
                <span className="font-bold">
                  In addition to these documents, you may also be required to
                  undergo a medical examination and provide additional
                  documentation, such as a police clearance certificate or proof
                  of enrollment in a French school or university. It is
                  recommended that you check with the French embassy or
                  consulate in your country of residence for specific visa
                  requirements and application procedures.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a France Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to France, you will need to follow these
                steps:
                <br />
                <br />● Determine the type of visa you need: There are several
                types of visas available for France, including short-stay visas
                for tourism, business, or study, and long-stay visas for work,
                study, or family reunification. Choose the type of visa that
                best fits your purpose of visit.
                <br />
                <br />● Gather the required documents: You will need to provide
                certain documents as part of your visa application. These may
                include a completed visa application form, a valid passport,
                passport-sized photographs, evidence of your purpose of visit,
                proof of financial means, and proof of travel insurance. Check
                with the French embassy or consulate in your country of
                residence for specific requirements.
                <br />
                <br />● Make an appointment: Most French embassies and
                consulates require applicants to make an appointment to submit
                their visa applications in person. Check the embassy or
                consulate's website or call to schedule an appointment.
                <br />
                <br />● Submit your application: Bring all the required
                documents to your appointment at the embassy or consulate. You
                may also need to pay a visa fee at this time.
                <br />
                <br />● Wait for a decision: The processing time for visa
                applications can vary depending on the type of visa and the
                embassy or consulate. You will be notified by the embassy or
                consulate when a decision has been made on your application.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  vary depending on the country where you are applying and the
                  type of visa you are seeking. It is recommended that you check
                  with the French embassy or consulate in your country of
                  residence for specific requirements and instructions.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in France?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in France depends on the type of
                visa you have and the purpose of your visit.
                <br />
                <br />
                If you have a short-stay visa, also known as a Schengen visa,
                you can stay in France for up to 90 days in a 180-day period for
                tourism, business, or other purposes. This type of visa allows
                for visits of up to 90 days within a six-month period, but it
                does not allow you to work or study in France.
                <br />
                <br />
                If you have a long-stay visa, also known as a national visa, you
                can stay in France for a longer period of time. This type of
                visa is typically issued for work, study, or family
                reunification purposes and allows you to stay in France for a
                period of three to six months, or up to one year in some cases.
                A long-stay visa may also allow you to work or study in France.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the length of time you can stay
                  in France is determined by the validity of your visa, and you
                  must leave the country before your visa expires. Overstaying
                  your visa can result in fines, difficulties with future travel
                  to France, or other consequences.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in France?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Since 14 March 2022, the “vaccine pass” has been lifted in
                France in all areas where it was previously required (cultural
                and leisure venues, commercial catering, professional trade
                shows, etc.). Similarly, the COVID certificate is no longer
                required as of 1 August 2022.
                <br />
                <br />
                <span className="font-bold">
                  Some local health authorities may still require masks, for
                  example, Paris Hospitals (AP-HP), where masks remain mandatory
                  for those aged 6 and above.
                </span>
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
                A diplomatic passport is a special type of passport issued to
                diplomats and other officials representing their country abroad.
                In France, diplomatic passports are issued by the Ministry of
                Foreign Affairs to French diplomats and other officials who are
                accredited to represent France abroad, as well as to their
                family members.
                <br />
                <br />
                Diplomatic passports are issued in addition to regular passports
                and are used for official travel on behalf of the French
                government. They are typically valid for five years and are not
                subject to the same visa requirements as regular passports.
                Diplomats and officials holding diplomatic passports are granted
                special privileges and immunities while abroad, including
                exemption from immigration controls, customs duties, and local
                laws.
                <br />
                <br />
                In France, diplomatic passports are issued to the following
                categories of individuals:
                <br />
                <br />
                - French diplomats: This includes ambassadors, consuls, and
                other officials representing France abroad.
                <br />
                <br />
                - Family members of diplomats: This includes the spouse and
                children of a diplomat who are traveling with them or joining
                them at their posting.
                <br />
                <br />
                - Officials traveling on official business: This includes
                officials from the French government or other public bodies who
                are traveling on official business.
                <br />
                <br />
                <span className="font-bold">
                  To apply for a diplomatic passport in France, you must be a
                  French citizen and meet the specific criteria for the category
                  of passport you are seeking. It is recommended that you
                  contact the Ministry of Foreign Affairs for more information
                  about the application process and requirements for diplomatic
                  passports.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in France?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a non-European Union (EU) citizen and you want to
                work in France, you will typically need to obtain a worker visa
                before you can begin your employment. The specific type of
                worker visa you need depends on the nature and duration of your
                employment in France.
                <br />
                <br />
                <span className="font-bold">
                  To apply for a worker visa in France, you will need to provide
                  certain documents, including a completed visa application
                  form, a valid passport, passport-sized photographs, and a
                  letter of employment from your employer in France. You may
                  also need to provide additional documents, such as a police
                  clearance certificate or evidence of your qualifications. It
                  is recommended that you check with the French embassy or
                  consulate in your country of residence for specific
                  requirements and application procedures.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a France Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to France, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine the type of worker visa you need: There are several
                types of worker visas available for France, including temporary
                worker visas, seasonal worker visas, and long-stay worker visas.
                Choose the type of visa that best fits your employment situation
                in France.
                <br />
                <br />● Gather the required documents: You will need to provide
                certain documents as part of your visa application. These may
                include a completed visa application form, a valid passport,
                passport-sized photographs, a letter of employment from your
                employer in France, and evidence of your qualifications. Check
                with the French embassy or consulate in your country of
                residence for specific requirements.
                <br />
                <br />● Make an appointment: Most French embassies and
                consulates require applicants to make an appointment to submit
                their visa applications in person. Check the embassy or
                consulate's website or call to schedule an appointment.
                <br />
                <br />● Submit your application: Bring all the required
                documents to your appointment at the embassy or consulate. You
                may also need to pay a visa fee at this time.
                <br />
                <br />● Wait for a decision: The processing time for visa
                applications can vary depending on the type of visa and the
                embassy or consulate. You will be notified by the embassy or
                consulate when a decision has been made on your application.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  vary depending on the country where you are applying and the
                  type of visa you are seeking. It is recommended that you check
                  with the French embassy or consulate in your country of
                  residence for specific requirements and instructions.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of France Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In France, there are several types of work permits available
                depending on the specific circumstances of your employment and
                the length of your stay. These include:
                <br />
                <br />
                <span className="font-bold">Temporary worker visa</span>
                : This type of visa is issued for a specific job or project that
                is expected to last less than one year. It allows you to work in
                France for a specified period of time and does not allow you to
                bring your family with you.
                <br />
                <br />
                <span className="font-bold">Seasonal worker visa</span>
                : This type of visa is issued for employment in certain seasonal
                jobs, such as tourism or agriculture, that are expected to last
                less than six months. It allows you to work in France for a
                specified period of time and does not allow you to bring your
                family with you.
                <br />
                <br />
                <span className="font-bold">Long-stay worker visa</span>
                : This type of visa is issued for employment in France that is
                expected to last more than one year. It allows you to work in
                France for an extended period of time and allows you to bring
                your family with you.
                <br />
                <br />
                <span className="font-bold">
                  To apply for a worker visa in France, you will need to provide
                  certain documents, including a completed visa application
                  form, a valid passport, passport-sized photographs, and a
                  letter of employment from your employer in France. You may
                  also need to provide additional documents, such as a police
                  clearance certificate or evidence of your qualifications. It
                  is recommended that you check with the French embassy or
                  consulate in your country of residence for specific
                  requirements and application procedures.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for France Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to France, you will need to provide
                the following documents:
                <br />
                <br />● A completed visa application form. This form can be
                obtained from the French embassy or consulate in your country of
                residence, or it can be downloaded from the embassy's website.
                <br />
                <br />● A valid passport or travel document. Your passport must
                be valid for at least three months beyond the date you plan to
                leave France, and it must have at least two blank pages for the
                visa stamp.
                <br />
                <br />
                ● Passport-sized photographs. You will need to submit two
                recent, passport-sized photographs with your visa application.
                The photos should meet the requirements for passport
                photographs, which include being taken against a white
                background and showing your face clearly.
                <br />
                <br />
                ● A letter of employment from your employer in France. This
                letter should confirm the nature of your employment, the
                duration of your contract, and your salary.
                <br />
                <br />● Evidence of your qualifications. Depending on the nature
                of your employment, you may need to provide proof of your
                education and professional qualifications, such as diplomas or
                certificates.
                <br />
                <br />● Proof of financial means. You will need to demonstrate
                that you have sufficient funds to support yourself during your
                stay in France. This can be done by providing bank statements or
                a letter of financial support from a sponsor.
                <br />
                <br />
                ● Proof of travel insurance. You will need to show that you have
                valid travel insurance that covers medical expenses,
                repatriation, and other expenses that may arise during your stay
                in France.
                <br />
                <br />
                <span className="font-bold">
                  In addition to these documents, you may also be required to
                  undergo a medical examination and provide additional
                  documentation, such as a police clearance certificate or proof
                  of your accommodation in France. It is recommended that you
                  check with the French embassy or consulate in your country of
                  residence for specific visa requirements and application
                  procedures.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in France?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to France, you will need to visit the
                French embassy or consulate in your country of residence. You
                can find a list of French embassies and consulates around the
                world on the website of the French Ministry of Foreign Affairs.
                <br />
                <br />
                Most French embassies and consulates require applicants to make
                an appointment to submit their visa applications in person. You
                can schedule an appointment by contacting the embassy or
                consulate directly or by visiting their website. It is important
                to schedule your appointment as soon as possible, as appointment
                availability can be limited.
                <br />
                <br />
                It is recommended that you apply for your worker visa well in
                advance of your intended travel date to France. The processing
                time for visa applications can vary depending on the type of
                visa and the embassy or consulate, but it is generally
                recommended to allow at least several weeks for your application
                to be processed.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  vary depending on the country where you are applying and the
                  type of visa you are seeking. It is recommended that you check
                  with the French embassy or consulate in your country of
                  residence for specific requirements and instructions.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in France?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a non-European Union (EU) citizen and you want to
                study in France, you will typically need to obtain a student
                visa before you can begin your studies. A student visa is a type
                of long-stay visa that allows you to stay in France for an
                extended period of time for the purpose of studying.
                <br />
                <br />
                To apply for a student visa to France, you will need to provide
                certain documents, including a completed visa application form,
                a valid passport, passport-sized photographs, a letter of
                acceptance from a French educational institution, and evidence
                of your financial means. You may also need to provide additional
                documents, such as a police clearance certificate or proof of
                your accommodation in France.
                <br />
                <br />
                <span className="font-bold">
                  It is recommended that you start the visa application process
                  well in advance of your intended travel date to France, as the
                  processing time for visa applications can vary depending on
                  the embassy or consulate. It is also important to note that
                  the visa application process can vary depending on the country
                  where you are applying and the type of visa you are seeking.
                  It is recommended that you check with the French embassy or
                  consulate in your country of residence for specific
                  requirements and instructions.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a France Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to France, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine your eligibility: In order to be eligible for a
                student visa to France, you must be accepted to a French
                educational institution and have sufficient financial means to
                support yourself during your studies. You may also need to meet
                certain language requirements, depending on the nature of your
                studies.
                <br />
                <br />
                ● Gather the required documents: You will need to provide
                certain documents as part of your visa application. These may
                include a completed visa application form, a valid passport,
                passport-sized photographs, a letter of acceptance from a French
                educational institution, and evidence of your financial means.
                Check with the French embassy or consulate in your country of
                residence for specific requirements.
                <br />
                <br />
                ● Make an appointment: Most French embassies and consulates
                require applicants to make an appointment to submit their visa
                applications in person. Check the embassy or consulate's website
                or call to schedule an appointment.
                <br />
                <br />
                ● Submit your application: Bring all the required documents to
                your appointment at the embassy or consulate. You may also need
                to pay a visa fee at this time.
                <br />
                <br />
                ● Wait for a decision: The processing time for visa applications
                can vary depending on the type of visa and the embassy or
                consulate. You will be notified by the embassy or consulate when
                a decision has been made on your application.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the visa application process can
                  vary depending on the country where you are applying and the
                  type of visa you are seeking. It is recommended that you check
                  with the French embassy or consulate in your country of
                  residence for specific requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                France Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                ● A completed visa application form. This form can be obtained
                from the French embassy or consulate in your country of
                residence, or it can be downloaded from the embassy's website.
                <br />
                <br />● A valid passport or travel document. Your passport must
                be valid for at least three months beyond the date you plan to
                leave France, and it must have at least two blank pages for the
                visa stamp.
                <br />
                <br />● Passport-sized photographs. You will need to submit two
                recent, passport-sized photographs with your visa application.
                The photos should meet the requirements for passport
                photographs, which include being taken against a white
                background and showing your face clearly.
                <br />
                <br />● A letter of acceptance from a French educational
                institution. This letter should confirm that you have been
                accepted to study in France and provide details about your
                program of study and the duration of your course.
                <br />
                <br />● Evidence of your financial means. You will need to
                demonstrate that you have sufficient funds to support yourself
                during your studies in France. This can be done by providing
                bank statements, a letter of financial support from a sponsor,
                or other proof of your financial resources.
                <br />
                <br />● Proof of your accommodation in France. You will need to
                provide evidence of your accommodation in France, such as a
                rental contract or a letter from your host.
                <br />
                <br />● A police clearance certificate. You may need to provide
                a police clearance certificate or similar document to show.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for France Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa to France will depend
                on the length of your studies and the type of visa you are
                applying for.
                <br />
                <br />
                If you are planning to study in France for less than six months,
                you may be eligible for a short-stay student visa, also known as
                a Schengen visa. This type of visa allows you to stay in France
                for up to 90 days in a 180-day period for the purpose of
                studying. A short-stay student visa is typically valid for a
                single trip and does not allow you to work or bring your family
                with you to France.
                <br />
                <br />
                If you are planning to study in France for more than six months,
                you will need to apply for a long-stay student visa, also known
                as a national visa. This type of visa allows you to stay in
                France for an extended period of time for the purpose of
                studying. A long-stay student visa is typically valid for a
                period of three to six months, or up to one year in some cases,
                and allows you to work and bring your family with you to France.
                <br />
                <br />
                <span className="font-bold">
                  The price of a student visa to France depends on the type of
                  visa you are applying for and the country where you are
                  applying. In general, short-stay visas (Schengen visas) cost
                  around 60 EUR, while long-stay visas (national visas) cost
                  around 99 EUR. However, these fees may vary depending on the
                  embassy or consulate where you are applying and the currency
                  in which the fees are paid. It is recommended that you check
                  with the French embassy or consulate in your country of
                  residence for specific visa fees and payment methods.
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

export default France;
