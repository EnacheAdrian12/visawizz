import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Monaco = () => {
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
        <title>Monaco</title>
        <meta name="description" content="Monaco" />
        <meta
          name="keywords"
          content="Monaco travel visa, Monaco work visa, Monaco study visa, How to apply for an Monaco visa, Monaco visa requirements, Monaco tourist visa, Monaco student visa, Monaco business visa, Monaco visa processing time, Monaco visa application process, Monaco visa for Americans, Monaco visa for Europeans, Monaco visa for Monacons, Monaco visa for Canadians, Monaco visa for Monacons, Monaco visa for Chinese, Monaco visa for Africans, Monaco visa for Asians, Monaco visa for South Americans, Monaco visa for Middle Easterners, Monaco visa for UK citizens, Monaco visa for EU citizens, Monaco visa for Schengen area, Monaco visa for non-EU citizens, Monaco visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Monaco
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Monaco is a small country on the Mediterranean coast, known for
              its beautiful beaches, glamorous casinos, and luxurious lifestyle.
              The country is known for its mild climate and stunning natural
              beauty, with a picturesque harbor and a hilly landscape that is
              home to many elegant villas and gardens. Monaco is also known for
              its rich cultural heritage, with many historic landmarks and
              museums, including the Prince's Palace, the Oceanographic Museum,
              and the Monaco Cathedral. The capital city of Monaco is a major
              hub of tourism and commerce, with many hotels, restaurants, and
              shops that cater to a wealthy and sophisticated clientele. Monaco
              is also known for its status as a tax haven, and its reputation as
              a playground for the rich and famous.
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
                Who can enter Monaco without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of the European Union (EU), the European Economic Area
                (EEA), and Switzerland do not need a visa to enter Monaco. They
                may enter Monaco with a valid national identification card or
                passport and stay for up to 90 days within a 180-day period.
                <br /> <br />● Citizens of certain other countries are also able
                to enter Monaco without a visa for stays of up to 90 days within
                a 180-day period. These countries include:
                <span className="font-bold">
                  Albania, Andorra, Antigua and Barbuda, Argentina, Australia,
                  Bahamas, Barbados, Bosnia and Herzegovina, Brazil, Brunei,
                  Canada, Chile, Costa Rica, Dominica, El Salvador, Georgia,
                  Grenada, Guatemala, Honduras, Hong Kong, Israel, Japan,
                  Kosovo, Kyrgyzstan, Macao, Malaysia, Marshall Islands,
                  Mauritius, Mexico, Moldova, Montenegro, New Zealand,
                  Nicaragua, North, Macedonia, Panama, Paraguay, Peru, Saint
                  Kitts and Nevis, Saint Lucia, Saint Vincent and the
                  Grenadines, Serbia, Seychelles, Singapore, South Korea,
                  Taiwan, Tajikistan, Timor-Leste, Tonga, Trinidad and Tobago,
                  Ukraine, United Arab Emirates, United States, Uruguay,
                  Uzbekistan, Vanuatu.{" "}
                </span>{" "}
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of any other country, you will need to
                  apply for a visa to enter Monaco. The type of visa that you
                  will need to apply for will depend on the purpose of your
                  visit and the length of your stay.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Monaco Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Monaco visa, you will typically need to provide
                the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least six months beyond the date of your intended stay in
                Monaco.
                <br /> <br />● A completed and signed Monaco visa application
                form: You can obtain this form from the Monaco embassy or
                consulate in your home country.
                <br /> <br />● A recent passport-sized photograph: This should
                be a color photograph that meets the Monaco visa photo
                requirements.
                <br /> <br />● A cover letter: You will need to provide a cover
                letter explaining the purpose of your visit and the duration of
                your stay in Monaco. Proof of accommodation: You will need to
                provide evidence of where you will be staying during your stay
                in Monaco, such as a hotel reservation or a letter of invitation
                from a host in Monaco.
                <br /> <br />● Proof of financial means: You will need to
                provide evidence that you have sufficient funds to support
                yourself during your stay in Monaco. This may include bank
                statements or a letter from your employer confirming that they
                will provide financial support.
                <br /> <br />● Proof of travel insurance: You will need to
                provide proof of travel insurance that covers you during your
                stay in Monaco.
                <br /> <br />● Other documents may be required depending on the
                purpose of your visit and your specific circumstances. It is
                important to check with the Monaco embassy or consulate in your
                home country for a complete list of required documents.
                <br /> <br />● You may also be required to provide additional
                documents depending on the purpose of your visit. For example,
                if you are traveling to Monaco for business purposes, you may
                need to provide a letter of invitation from a host in Monaco or
                a letter from your employer stating the details of your trip. If
                you are traveling to Monaco for medical treatment, you may need
                to provide medical documents and a letter from a doctor in
                Monaco.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Monaco Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Monaco visa, you will need to follow the steps
                below:
                <br /> <br />● Gather the required documents: As a foreign
                visitor, you will need to provide a number of documents as part
                of your visa application. These may include a valid passport, a
                completed and signed Monaco visa application form, a recent
                passport-sized photograph, a cover letter, proof of
                accommodation, proof of financial means, and proof of travel
                insurance. It is important to check with the Monaco embassy or
                consulate in your home country for a complete list of required
                documents.
                <br /> <br />● Contact the Monaco embassy or consulate: Once you
                have gathered all of the required documents, you should contact
                the Monaco embassy or consulate in your home country to schedule
                an appointment to submit your visa application.
                <br /> <br />● Submit your visa application: At your
                appointment, you will need to submit your completed visa
                application along with all of the required supporting documents.
                You may also be required to pay a visa processing fee at this
                time.
                <br /> <br />● Wait for a decision: After you have submitted
                your visa application, it will be reviewed by the Monaco
                authorities. You will be notified by the embassy or consulate if
                your visa application has been approved or denied.
                <br /> <br />● If your visa is approved: If your visa
                application is approved, you will receive your visa in the form
                of a sticker that will be placed in your passport. You should
                make sure to bring your visa with you when you travel to Monaco.
                <br /> <br />● If your visa is denied: If your visa application
                is denied, you will receive a letter explaining the reason for
                the denial. You may have the option to appeal the decision or to
                reapply for a visa at a later time.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Monaco?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you can stay in Monaco will depend on
                your citizenship and the type of visa that you have.
                <br /> <br /> If you are a citizen of the European Union (EU),
                the European Economic Area (EEA), or Switzerland, you do not
                need a visa to enter Monaco and may stay for up to 90 days
                within a 180-day period.
                <br /> <br /> If you are a citizen of one of the countries that
                are eligible for visa-free entry to Monaco, you may also stay
                for up to 90 days within a 180-day period.
                <br /> <br /> If you are a citizen of any other country and have
                a Monaco visa, the length of your stay will depend on the type
                of visa that you have. Some common types of Monaco visas and
                their associated validity periods are: <br /> <br />
                ● Tourist visa: A tourist visa allows you to stay in Monaco for
                a period of up to 90 days within a 180-day period. Business
                visa:
                <br /> <br />
                ● A business visa allows you to stay in Monaco for the duration
                of your business activities, up to a maximum of 90 days within a
                180-day period.
                <br /> <br />● Medical treatment visa: A medical treatment visa
                allows you to stay in Monaco for the duration of your medical
                treatment, up to a maximum of one year.
                <br /> <br />● Student visa: A student visa allows you to stay
                in Monaco for the duration of your studies, up to a maximum of
                one year.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the length of your stay in Monaco
                  may be shorter than the validity period of your visa if you
                  are granted a shorter period of stay by the Monaco authorities
                  upon arrival. You should make sure to check the details of
                  your visa and confirm the length of your stay with the Monaco
                  authorities before making travel plans.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Monaco?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Anyone arriving to Monaco, who is not vaccinated or recovered,
                must present a negative PCR or antigen test, no older than 24
                hours.
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
                government officials. In the case of Monaco, a diplomatic
                passport is issued to individuals who are appointed as
                representatives of the Principality of Monaco to foreign states,
                international organizations, or other foreign entities.
                <br />
                <br />
                Holders of a Monaco diplomatic passport are entitled to certain
                privileges and immunities under international law, such as
                immunity from arrest and prosecution, and special privileges
                with regard to taxes, customs, and immigration.
                <br />
                <br />
                It's worth noting that, Monaco is not a member of the European
                Union, but it is a member of the Schengen Area, which means that
                the Monaco diplomatic passport holders can travel visa-free
                within the Schengen zone.
                <br />
                <br />
                In order to obtain a diplomatic passport in Monaco, one
                typically needs to be appointed by the government of the
                Principality of Monaco to a diplomatic position and will usually
                need to provide documentation to confirm their status and
                purpose of travel.
                <br />
                <br />
                <span className="font-bold">
                  Please note that, the information provided here is based on
                  the publicly available information, the rules and regulations
                  regarding diplomatic passport in Monaco may change over time,
                  so it's recommended to check with the Monaco Ministry of
                  Foreign Affairs for the most recent and accurate information.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Monaco?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of the European Union (EU), the European
                Economic Area (EEA), or Switzerland and you wish to work in
                Monaco, you do not need a worker visa. You are free to take up
                employment in Monaco as long as you have a valid national
                identification card or passport and have registered with the
                authorities in Monaco.
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of any other country and you wish to work
                  in Monaco, you will typically need to apply for a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Monaco Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Monaco worker visa, you will need to follow the
                steps below:
                <br /> <br />● Gather the required documents: As a foreign
                worker, you will need to provide a number of documents as part
                of your visa application. These may include a valid passport, a
                completed and signed Monaco visa application form, a recent
                passport-sized photograph, a job offer letter from your Monaco
                employer, proof of financial means, a criminal record check, and
                health insurance. It is important to check with the Monaco
                embassy or consulate in your home country for a complete list of
                required documents.
                <br /> <br />● Contact the Monaco embassy or consulate: Once you
                have gathered all of the required documents, you should contact
                the Monaco embassy or consulate in your home country to schedule
                an appointment to submit your visa application.
                <br /> <br />● Submit your visa application: At your
                appointment, you will need to submit your completed visa
                application along with all of the required supporting documents.
                You may also be required to pay a visa processing fee at this
                time.
                <br /> <br />● Wait for a decision: After you have submitted
                your visa application, it will be reviewed by the Monaco
                authorities. You will be notified by the embassy or consulate if
                your visa application has been approved or denied.
                <br /> <br />● If your visa is approved: If your visa
                application is approved, you will receive your visa in the form
                of a sticker that will be placed in your passport. You should
                make sure to bring your visa with you when you travel to Monaco.
                <br /> <br />● If your visa is denied: If your visa application
                is denied, you will receive a letter explaining the reason for
                the denial. You may have the option to appeal the decision or to
                reapply for a visa at a later time.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Monaco Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas that you can apply for
                in Monaco, depending on the nature of your work and the duration
                of your stay. Some common types of worker visas are:
                <br /> <br />●{" "}
                <span className="font-bold">Short-term worker visa</span>: A
                short-term worker visa allows you to work in Monaco for a period
                of up to 90 days within a 180-day period. This type of visa is
                intended for workers who are performing short-term assignments
                or temporary work in Monaco.
                <br /> <br />●{" "}
                <span className="font-bold">Long-term worker visa</span>: A
                long-term worker visa allows you to work in Monaco for an
                extended period of time, typically up to one year. This type of
                visa is intended for workers who have been offered permanent
                employment in Monaco or who will be working in Monaco on a
                long-term assignment.
                <br /> <br />●{" "}
                <span className="font-bold">Self-employed worker visa</span>: A
                self-employed worker visa allows you to work in Monaco as a
                self-employed individual. To qualify for this type of visa, you
                will need to demonstrate that you have the skills and experience
                necessary to start your own business or provide a service in
                Monaco.
                <br /> <br />●{" "}
                <span className="font-bold">Artist and entertainer visa</span>:
                An artist and entertainer visa allows you to work in Monaco as
                an artist or entertainer. To qualify for this type of visa, you
                will need to provide evidence of your professional status and
                the details of your performance or exhibition in Monaco.
                <br /> <br />●{" "}
                <span className="font-bold">Athlete and coach visa</span>: An
                athlete and coach visa allows you to work in Monaco as an
                athlete or coach. To qualify for this type of visa, you will
                need to provide evidence of your professional status and the
                details of your participation in a sporting event in Monaco.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Monaco Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Monaco worker visa, you will typically need to
                provide the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least six months beyond the date of your intended stay in
                Monaco.
                <br /> <br />● A completed and signed Monaco visa application
                form: You can obtain this form from the Monaco embassy or
                consulate in your home country.
                <br /> <br />● A recent passport-sized photograph: This should
                be a color photograph that meets the Monaco visa photo
                requirements.
                <br /> <br />● A job offer letter from your Monaco employer:
                This letter should state the details of your employment,
                including your job title, salary, and duration of your stay in
                Monaco.
                <br /> <br />● Proof of financial means: You will need to
                provide evidence that you have sufficient funds to support
                yourself during your stay in Monaco. This may include bank
                statements or a letter from your employer confirming that they
                will provide financial support.
                <br /> <br />● A criminal record check: You may need to provide
                a police clearance certificate or similar document to
                demonstrate that you have no criminal history.
                <br /> <br />● Health insurance: You will need to provide proof
                of health insurance that covers you during your stay in Monaco.
                <br /> <br />
                ● Other documents may be required depending on your specific
                circumstances. It is important to check with the Monaco embassy
                or consulate in your home country for a complete list of
                required documents.
                <br /> <br />● You may also be required to provide additional
                documents depending on the type of worker visa that you are
                applying for. For example, if you are applying for an artist and
                entertainer visa, you may need to provide evidence of your
                professional status and the details of your performance or
                exhibition in Monaco. If you are applying for an athlete and
                coach visa, you may need to provide evidence of your
                professional status and the details of your participation in a
                sporting event in Monaco.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Monaco?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Monaco, you will need to do the
                following:
                <br /> <br />● Contact the Monaco embassy or consulate in your
                home country: You should contact the Monaco embassy or consulate
                in your home country to find out more about the worker visa
                application process and to schedule an appointment to submit
                your application.
                <br /> <br />● Gather the required documents: As a foreign
                worker, you will need to provide a number of documents as part
                of your visa application. These may include a valid passport, a
                completed and signed Monaco visa application form, a recent
                passport-sized photograph, a job offer letter from your Monaco
                employer, proof of financial means, a criminal record check, and
                health insurance. It is important to check with the Monaco
                embassy or consulate in your home country for a complete list of
                required documents.
                <br /> <br />● Submit your visa application: You will need to
                submit your completed visa application along with all of the
                required supporting documents at your appointment at the Monaco
                embassy or consulate. You may also be required to pay a visa
                processing fee at this time.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  worker visa in Monaco can vary depending on your specific
                  circumstances and the embassy or consulate that you are
                  applying at. You should make sure to check with the embassy or
                  consulate for the most up-to-date information on the worker
                  visa application process.
                </span>
                <br /> <br />
                <span className="font-bold">
                  It is also worth noting that you should apply for your worker
                  visa well in advance of your intended travel date, as the visa
                  processing time can vary depending on the embassy or consulate
                  and the time of year. You should allow enough time for your
                  visa application to be processed and for any additional
                  documents or information to be provided, if required.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Monaco?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of the European Union (EU), the European
                Economic Area (EEA), or Switzerland and you wish to study in
                Monaco, you do not need a student visa. You are free to take up
                study in Monaco as long as you have a valid national
                identification card or passport and have registered with the
                authorities in Monaco.
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of any other country and you wish to
                  study in Monaco, you will typically need to apply for a
                  student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Monaco student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Monaco student visa, you will need to follow the
                steps below:
                <br /> <br />● Gather the required documents: As a foreign
                student, you will need to provide a number of documents as part
                of your visa application. These may include a valid passport, a
                completed and signed Monaco visa application form, a recent
                passport-sized photograph, an acceptance letter from a school,
                university, or other educational institution in Monaco, proof of
                financial means, and health insurance. It is important to check
                with the Monaco embassy or consulate in your home country for a
                complete list of required documents. <br /> <br />
                ● Contact the Monaco embassy or consulate: Once you have
                gathered all of the required documents, you should contact the
                Monaco embassy or consulate in your home country to schedule an
                appointment to submit your visa application.
                <br /> <br />● Submit your visa application: At your
                appointment, you will need to submit your completed visa
                application along with all of the required supporting documents.
                You may also be required to pay a visa processing fee at this
                time.
                <br /> <br />● Wait for a decision: After you have submitted
                your visa application, it will be reviewed by the Monaco
                authorities. You will be notified by the embassy or consulate if
                your visa application has been approved or denied.
                <br /> <br />● If your visa is approved: If your visa
                application is approved, you will receive your visa in the form
                of a sticker that will be placed in your passport. You should
                make sure to bring your visa with you when you travel to Monaco.
                <br /> <br />● If your visa is denied: If your visa application
                is denied, you will receive a letter explaining the reason for
                the denial. You may have the option to appeal the decision or to
                reapply for a visa at a later time.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Monaco student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Monaco student visa, you will typically need to
                provide the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least six months beyond the date of your intended stay in
                Monaco.
                <br /> <br />● A completed and signed Monaco visa application
                form: You can obtain this form from the Monaco embassy or
                consulate in your home country.
                <br /> <br />● A recent passport-sized photograph: This should
                be a color photograph that meets the Monaco visa photo
                requirements.
                <br /> <br />● An acceptance letter from a school, university,
                or other educational institution in Monaco: You will need to
                provide an acceptance letter from the educational institution
                where you will be studying in Monaco. <br /> <br />
                ● Proof of financial means: You will need to provide evidence
                that you have sufficient funds to support yourself during your
                stay in Monaco. This may include bank statements or a letter
                from your sponsor confirming that they will provide financial
                support.
                <br /> <br />● Health insurance: You will need to provide proof
                of health insurance that covers you during your stay in Monaco.
                <br /> <br />
                ● Other documents may be required depending on your specific
                circumstances. It is important to check with the Monaco embassy
                or consulate in your home country for a complete list of
                required documents.
                <br /> <br />
                <span className="font-bold">
                  In addition to these general requirements, you may also need
                  to meet specific requirements depending on your level of study
                  and the type of educational institution you will be attending
                  in Monaco. For example, you may need to provide transcripts or
                  other documents demonstrating your academic qualifications, or
                  you may need to provide proof of language proficiency if the
                  language of instruction at your educational institution will
                  be in a language other than your native language. It is
                  important to check with the embassy or consulate and your
                  educational institution for the most up-to-date information on
                  student visa requirements.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Monaco student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity of a Monaco student visa will depend on the length
                of your intended stay in Monaco and the duration of your
                studies. In general, a Monaco student visa will be valid for the
                duration of your studies in Monaco, up to a maximum of one year.
                If you will be studying in Monaco for more than one year, you
                may need to apply for an extension to your student visa.
                <br /> <br /> The price of a Monaco student visa will vary
                depending on the embassy or consulate that you are applying at
                and the processing time that you select. You may be required to
                pay a visa processing fee as part of your visa application.
                <br /> <br />
                <span className="font-bold">
                  It is important to check with the embassy or consulate for the
                  most up-to-date information on visa fees. It is also worth
                  noting that you may be required to pay additional fees to your
                  educational institution in Monaco, such as tuition fees or
                  other enrollment fees. You should make sure to check with your
                  educational institution for information on these fees.
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

export default Monaco;
