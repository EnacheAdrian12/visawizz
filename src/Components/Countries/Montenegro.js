import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Montenegro = () => {
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
        <title>Montenegro</title>
        <meta name="description" content="Montenegro" />
        <meta
          name="keywords"
          content="Montenegro travel visa, Montenegro work visa, Montenegro study visa, How to apply for an Montenegro visa, Montenegro visa requirements, Montenegro tourist visa, Montenegro student visa, Montenegro business visa, Montenegro visa processing time, Montenegro visa application process, Montenegro visa for Americans, Montenegro visa for Europeans, Montenegro visa for Montenegrons, Montenegro visa for Canadians, Montenegro visa for Montenegrons, Montenegro visa for Chinese, Montenegro visa for Africans, Montenegro visa for Asians, Montenegro visa for South Americans, Montenegro visa for Middle Easterners, Montenegro visa for UK citizens, Montenegro visa for EU citizens, Montenegro visa for Schengen area, Montenegro visa for non-EU citizens, Montenegro visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Montenegro
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Montenegro is a small country in the Balkans, located on the
              Adriatic Sea. It is known for its stunning natural beauty, with
              rugged mountains, picturesque beaches, and picturesque old towns.
              Montenegro is also known for its rich cultural heritage, including
              its unique blend of Eastern and Western influences, and its
              vibrant music and dance scene. The country is known for its
              beautiful national parks, such as Durmitor National Park and
              Biogradska Gora National Park, which are popular with hikers and
              nature enthusiasts. The capital city, Podgorica, is known for its
              historic buildings, museums, and cultural events.
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
                Who can enter Montenegro without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are able to enter Montenegro
                without a visa for stays of up to 90 days within a 180-day
                period. These countries include:
                <br /> <br />● European Union (EU) countries
                <br /> <br />● European Free Trade Association (EFTA) countries
                (Iceland, Liechtenstein, Norway, and Switzerland)
                <br /> <br />●
                <span className="font-bold">
                  &nbsp;Andorra, Antigua and Barbuda, Argentina, Australia,
                  Bahamas, Barbados, Bosnia and Herzegovina, Brazil, Brunei,
                  Canada, Chile, Costa Rica, El Salvador, Georgia, Grenada,
                  Honduras, Israel, Japan, Kosovo, Macao, Malaysia, Mauritius,
                  Mexico, Monaco, Montenegro, New Zealand, North Macedonia,
                  Panama, Paraguay, Saint Kitts and Nevis, San Marino, Serbia,
                  Seychelles, Singapore, South Korea, Taiwan, United Arab
                  Emirates, United States, Uruguay, Vatican City{" "}
                </span>{" "}
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the visa-free entry policy for
                  these countries is subject to change, and you should check
                  with the Montenegrin authorities for the most up-to-date
                  information before you travel.
                </span>
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of any other country, you will typically
                  need to apply for a visa before you can enter Montenegro. You
                  should check with the Montenegrin embassy or consulate in your
                  home country for more information on the visa application
                  process.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Montenegro Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Montenegro visa, you will typically need to
                provide the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least six months beyond the date of your intended stay in
                Montenegro.
                <br /> <br />● A completed and signed Montenegro visa
                application form: You can obtain this form from the Montenegrin
                embassy or consulate in your home country.
                <br /> <br />● A recent passport-sized photograph: This should
                be a color photograph that meets the Montenegro visa photo
                requirements.
                <br /> <br />● Proof of the purpose of your trip: Depending on
                the purpose of your trip to Montenegro, you may need to provide
                additional documents to demonstrate the reason for your visit.
                For example, if you are traveling to Montenegro for business,
                you may need to provide a letter from your employer or a copy of
                your business invitation. If you are traveling to Montenegro for
                tourism, you may need to provide details of your travel
                itinerary or a letter of invitation from a host in Montenegro.
                <br /> <br />
                ● Proof of sufficient funds: You will need to provide evidence
                that you have sufficient funds to support yourself during your
                stay in Montenegro. This may include bank statements or a letter
                from your sponsor confirming that they will provide financial
                support.
                <br /> <br />● Health insurance: You will need to provide proof
                of health insurance that covers you during your stay in
                Montenegro.
                <br /> <br />● Other documents may be required depending on your
                specific circumstances. It is important to check with the
                Montenegrin embassy or consulate in your home country for a
                complete list of required documents.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Montenegro Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Montenegro visa, you will need to follow the
                steps below:
                <br /> <br />● Gather the required documents: As a foreign
                national, you will need to provide a number of documents as part
                of your visa application. These may include a valid passport, a
                completed and signed Montenegro visa application form, a recent
                passport-sized photograph, proof of the purpose of your trip,
                proof of sufficient funds, and health insurance. It is important
                to check with the Montenegrin embassy or consulate in your home
                country for a complete list of required documents.
                <br /> <br />● Contact the Montenegrin embassy or consulate:
                Once you have gathered all of the required documents, you should
                contact the Montenegrin embassy or consulate in your home
                country to schedule an appointment to submit your visa
                application.
                <br /> <br />● Submit your visa application: At your
                appointment, you will need to submit your completed visa
                application along with all of the required supporting documents.
                You may also be required to pay a visa processing fee at this
                time.
                <br /> <br />● Wait for a decision: After you have submitted
                your visa application, it will be reviewed by the Montenegrin
                authorities. You will be notified by the embassy or consulate if
                your visa application has been approved or denied.
                <br /> <br />● If your visa is approved: If your visa
                application is approved, you will receive your visa in the form
                of a sticker that will be placed in your passport. You should
                make sure to bring your visa with you when you travel to
                Montenegro.
                <br /> <br />● If your visa is denied: If your visa application
                is denied, you will receive a letter explaining the reason for
                the denial. You may have the option to appeal the decision or to
                reapply for a visa at a later time.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Montenegro?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you can stay in Montenegro will depend
                on the type of visa that you have.
                <br /> <br /> If you have a short-stay visa (also known as a
                Schengen visa), you will be able to stay in Montenegro for up to
                90 days within a 180-day period. This type of visa is typically
                valid for tourism, business, or other short-term stays.
                <br /> <br />
                If you have a long-stay visa or a residence permit, you will be
                able to stay in Montenegro for a longer period of time. This
                type of visa is typically valid for stays of more than 90 days
                and is used for purposes such as studying, working, or living
                with a family member in Montenegro.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the length of time you can stay
                  in Montenegro on a long-stay visa or residence permit will
                  depend on the specific purpose of your stay and the type of
                  visa that you have. You should check with the Montenegrin
                  authorities for more information on the length of time you can
                  stay in Montenegro on a long-stay visa or residence permit.
                </span>
                <br /> <br />
                <span className="font-bold">
                  It is also worth noting that you will need to register with
                  the local authorities in Montenegro if you are staying in the
                  country for more than 90 days. You should make sure to
                  register within eight days of arriving in Montenegro.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Montenegro?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Montenegro is open for travelers from all countries without
                restrictions.
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
                government officials. In the case of Montenegro, a diplomatic
                passport is issued to individuals who are appointed as
                representatives of the Government of Montenegro to foreign
                states, international organizations, or other foreign entities.
                <br />
                <br />
                Holders of a Montenegrin diplomatic passport are entitled to
                certain privileges and immunities under international law, such
                as immunity from arrest and prosecution, and special privileges
                with regard to taxes, customs, and immigration.
                <br />
                <br />
                It's worth noting that, Montenegro is not a member of the
                European Union but it's a candidate country and has applied for
                accession to the EU. Montenegro is also a party to the Visa
                Waiver Agreement with EU Member States. This allows diplomatic
                passport holders from Montenegro to travel visa-free to some EU
                countries.
                <br />
                <br />
                In order to obtain a diplomatic passport in Montenegro, one
                typically needs to be appointed by the government of Montenegro
                to a diplomatic position and will usually need to provide
                documentation to confirm their status and purpose of travel.
                <br />
                <br />
                <span className="font-bold">
                  Please note that, the information provided here is based on
                  the publicly available information and my knowledge cut off is
                  2021, the rules and regulations regarding diplomatic passport
                  in Montenegro may change over time, so it's recommended to
                  check with the Montenegro Ministry of Foreign Affairs for the
                  most recent and accurate information.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Montenegro?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of an EU or EEA member state or Switzerland
                and you wish to work in Montenegro, you do not need a worker
                visa. You are free to work in Montenegro as long as you have a
                valid national identification card or passport and have
                registered with the authorities in Montenegro.
                <br /> <br /> If you are a citizen of any other country and you
                wish to work in Montenegro, you will typically need to apply for
                a worker visa. To apply for a worker visa, you will typically
                need to provide the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least six months beyond the date of your intended stay in
                Montenegro.
                <br /> <br />● A completed and signed Montenegro visa
                application form: You can obtain this form from the Montenegrin
                embassy or consulate in your home country.
                <br /> <br />● A recent passport-sized photograph: This should
                be a color photograph that meets the Montenegro visa photo
                requirements.
                <br /> <br />● A job offer letter from your Montenegrin
                employer: You will need to provide a job offer letter from your
                employer in Montenegro stating the terms of your employment.
                <br /> <br />
                ● Proof of sufficient funds: You will need to provide evidence
                that you have sufficient funds to support yourself during your
                stay in Montenegro. This may include bank statements or a letter
                from your sponsor confirming that they will provide financial
                support.
                <br /> <br />● Health insurance: You will need to provide proof
                of health insurance that covers you during your stay in
                Montenegro.
                <br /> <br />● Other documents may be required depending on your
                specific circumstances. It is important to check with the
                Montenegrin embassy or consulate in your home country for a
                complete list of required documents.!
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Montenegro Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Montenegro worker visa, you will need to follow
                the steps below:
                <br /> <br />● Gather the required documents: As a foreign
                national, you will need to provide a number of documents as part
                of your visa application. These may include a valid passport, a
                completed and signed Montenegro visa application form, a recent
                passport-sized photograph, a job offer letter from your
                Montenegrin employer, proof of sufficient funds, and health
                insurance. It is important to check with the Montenegrin embassy
                or consulate in your home country for a complete list of
                required documents.
                <br /> <br />● Contact the Montenegrin embassy or consulate:
                Once you have gathered all of the required documents, you should
                contact the Montenegrin embassy or consulate in your home
                country to schedule an appointment to submit your visa
                application.
                <br /> <br />● Submit your visa application: At your
                appointment, you will need to submit your completed visa
                application along with all of the required supporting documents.
                You may also be required to pay a visa processing fee at this
                time.
                <br /> <br />● Wait for a decision: After you have submitted
                your visa application, it will be reviewed by the Montenegrin
                authorities. You will be notified by the embassy or consulate if
                your visa application has been approved or denied.
                <br /> <br />● If your visa is approved: If your visa
                application is approved, you will receive your visa in the form
                of a sticker that will be placed in your passport. You should
                make sure to bring your visa with you when you travel to
                Montenegro.
                <br /> <br />● If your visa is denied: If your visa application
                is denied, you will receive a letter explaining the reason for
                the denial. You may have the option to appeal the decision or to
                reapply for a visa at a later time.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Montenegro Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas that you can apply for
                in Montenegro, depending on the purpose of your work and the
                length of your stay in the country. Some of the types of worker
                visas that are available in Montenegro include:
                <br /> <br />●{" "}
                <span className="font-bold">Employment visa</span>: An
                employment visa is a type of worker visa that allows you to work
                in Montenegro on a temporary basis, typically for a period of up
                to one year. To be eligible for an employment visa, you will
                need to have a job offer from a Montenegrin employer.
                <br /> <br />●{" "}
                <span className="font-bold">Self-employed visa</span>: A
                self-employed visa is a type of worker visa that allows you to
                work in Montenegro as a self-employed individual. To be eligible
                for a self-employed visa, you will need to demonstrate that you
                have the necessary skills and experience to work independently
                in Montenegro.
                <br /> <br />●{" "}
                <span className="font-bold">Residence permit</span>: A residence
                permit is a type of worker visa that allows you to work in
                Montenegro on a longer-term basis. To be eligible for a
                residence permit, you will typically need to have a job offer
                from a Montenegrin employer or be self-employed in Montenegro. A
                residence permit is typically valid for one year and can be
                renewed if needed.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  worker visa in Montenegro may vary depending on the specific
                  type of visa that you are applying for and your specific
                  circumstances. You should check with the Montenegrin
                  authorities for more information on the specific requirements
                  for obtaining a worker visa in Montenegro.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Montenegro Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Montenegro worker visa, you will typically need
                to provide the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least six months beyond the date of your intended stay in
                Montenegro.
                <br /> <br />● A completed and signed Montenegro visa
                application form: You can obtain this form from the Montenegrin
                embassy or consulate in your home country.
                <br /> <br />● A recent passport-sized photograph: This should
                be a color photograph that meets the Montenegro visa photo
                requirements.
                <br /> <br />● A job offer letter from your Montenegrin
                employer: You will need to provide a job offer letter from your
                employer in Montenegro stating the terms of your employment.
                <br /> <br />
                ● Proof of sufficient funds: You will need to provide evidence
                that you have sufficient funds to support yourself during your
                stay in Montenegro. This may include bank statements or a letter
                from your sponsor confirming that they will provide financial
                support.
                <br /> <br />● Health insurance: You will need to provide proof
                of health insurance that covers you during your stay in
                Montenegro.
                <br /> <br />● Other documents may be required depending on your
                specific circumstances. It is important to check with the
                Montenegrin embassy or consulate in your home country for a
                complete list of required documents.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Montenegro?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Montenegro, you will need to
                contact the Montenegrin embassy or consulate in your home
                country. You should make an appointment to submit your visa
                application in person at the embassy or consulate.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that you will typically need to apply
                  for your worker visa before you travel to Montenegro. You
                  should start the process of applying for a worker visa as
                  early as possible to ensure that you have sufficient time to
                  gather all of the required documents and to allow for
                  processing of your visa application.
                </span>
                <br /> <br />
                <span className="font-bold">
                  You should also make sure to check with the Montenegrin
                  embassy or consulate in your home country for information on
                  the specific process for applying for a worker visa, as well
                  as any deadlines or other important dates that you need to be
                  aware of.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Montenegro?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of an EU or EEA member state or Switzerland
                and you wish to study in Montenegro, you do not need a student
                visa. You are free to study in Montenegro as long as you have a
                valid national identification card or passport and have
                registered with the authorities in Montenegro.
                <br /> <br /> If you are a citizen of any other country and you
                wish to study in Montenegro, you will typically need to apply
                for a student visa. To apply for a student visa, you will
                typically need to provide the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least six months beyond the date of your intended stay in
                Montenegro.
                <br /> <br />● A completed and signed Montenegro student visa
                application form: You can obtain this form from the Montenegrin
                embassy or consulate in your home country.
                <br /> <br />● A recent passport-sized photograph: This should
                be a color photograph that meets the Montenegro visa photo
                requirements.
                <br /> <br />● Proof of acceptance to a Montenegrin educational
                institution: You will need to provide proof that you have been
                accepted to a recognized educational institution in Montenegro.
                This may include an acceptance letter from the institution or a
                copy of your enrollment agreement.
                <br /> <br />● Proof of sufficient funds: You will need to
                provide evidence that you have sufficient funds to support
                yourself during your stay in Montenegro. This may include bank
                statements or a letter from your sponsor confirming that they
                will provide financial support.
                <br /> <br />● Health insurance: You will need to provide proof
                of health insurance that covers you during your stay in
                Montenegro.
                <br /> <br />● Other documents may be required depending on your
                specific circumstances. It is important to check with the
                Montenegrin embassy or consulate in your home country for a
                complete list of required documents.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Montenegro student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Montenegro student visa, you will need to follow
                the steps below:
                <br /> <br />● Gather the required documents: As a foreign
                national, you will need to provide a number of documents as part
                of your visa application. These may include a valid passport, a
                completed and signed Montenegro student visa application form, a
                recent passport-sized photograph, proof of acceptance to a
                Montenegrin educational institution, proof of sufficient funds,
                and health insurance. It is important to check with the
                Montenegrin embassy or consulate in your home country for a
                complete list of required documents.
                <br /> <br />● Contact the Montenegrin embassy or consulate:
                Once you have gathered all of the required documents, you should
                contact the Montenegrin embassy or consulate in your home
                country to schedule an appointment to submit your visa
                application.
                <br /> <br />● Submit your visa application: At your
                appointment, you will need to submit your completed visa
                application along with all of the required supporting documents.
                You may also be required to pay a visa processing fee at this
                time.
                <br /> <br />● Wait for a decision: After you have submitted
                your visa application, it will be reviewed by the Montenegrin
                authorities. You will be notified by the embassy or consulate if
                your visa application has been approved or denied.
                <br /> <br />● If your visa is approved: If your visa
                application is approved, you will receive your visa in the form
                of a sticker that will be placed in your passport. You should
                make sure to bring your visa with you when you travel to
                Montenegro.
                <br /> <br />● If your visa is denied: If your visa application
                is denied, you will receive a letter explaining the reason for
                the denial. You may have the option to appeal the decision or to
                reapply for a visa at a later time.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Montenegro student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a Montenegro student visa, you will typically
                need to meet the following requirements:
                <br /> <br />● Have a valid passport: Your passport must be
                valid for at least six months beyond the date of your intended
                stay in Montenegro.
                <br /> <br />● Be accepted to a recognized educational
                institution in Montenegro: You will need to provide proof that
                you have been accepted to a recognized educational institution
                in Montenegro. This may include an acceptance letter from the
                institution or a copy of your enrollment agreement.
                <br /> <br />● Have sufficient funds: You will need to provide
                evidence that you have sufficient funds to support yourself
                during your stay in Montenegro. This may include bank statements
                or a letter from your sponsor confirming that they will provide
                financial support.
                <br /> <br />● Have health insurance: You will need to provide
                proof of health insurance that covers you during your stay in
                Montenegro.
                <br /> <br />● Meet any other requirements set by the
                Montenegrin authorities: Depending on your specific
                circumstances, you may be required to meet additional
                requirements in order to be eligible for a Montenegro student
                visa.
                <br /> <br />
                <span className="font-bold">
                  It is important to check with the Montenegrin embassy or
                  consulate in your home country for a complete list of
                  requirements. It is worth noting that the requirements for a
                  Montenegro student visa may vary depending on your specific
                  circumstances and the specific type of visa that you are
                  applying for. You should check with the Montenegrin
                  authorities for more information on the specific requirements
                  that apply to you.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Montenegro student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a Montenegro student visa will depend
                on a number of factors, including the length of your stay in
                Montenegro and the specific type of visa that you are applying
                for.
                <br /> <br /> Student visas in Montenegro are typically valid
                for the duration of your studies, up to a maximum of one year.
                If you are studying in Montenegro for a longer period of time,
                you will need to apply for a residence permit, which is a type
                of long-term visa that allows you to stay in Montenegro for an
                extended period of time.
                <br /> <br /> As for the price of a Montenegro student visa, you
                will typically need to pay a visa processing fee as part of your
                visa application. The amount of this fee may vary depending on
                the specific type of visa that you are applying for and your
                country of citizenship. You should check with the Montenegrin
                embassy or consulate in your home country for more information
                on the specific fees that apply to you.
                <br /> <br />
                <span className="font-bold">
                  It is worth noting that the cost of a Montenegro student visa
                  may also include other expenses, such as the cost of obtaining
                  the required documents and any fees for medical examinations
                  or other services. You should make sure to budget for these
                  additional costs when planning your trip to Montenegro.
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

export default Montenegro;
