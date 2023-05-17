import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Portugal = () => {
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
        <title>Portugal</title>
        <meta name="description" content="Portugal" />
        <meta
          name="keywords"
          content="Portugal travel visa, Portugal work visa, Portugal study visa, How to apply for an Portugal visa, Portugal visa requirements, Portugal tourist visa, Portugal student visa, Portugal business visa, Portugal visa processing time, Portugal visa application process, Portugal visa for Americans, Portugal visa for Europeans, Portugal visa for Portugalns, Portugal visa for Canadians, Portugal visa for Portugalns, Portugal visa for Chinese, Portugal visa for Africans, Portugal visa for Asians, Portugal visa for South Americans, Portugal visa for Middle Easterners, Portugal visa for UK citizens, Portugal visa for EU citizens, Portugal visa for Schengen area, Portugal visa for non-EU citizens, Portugal visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Portugal
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Portugal is a country in southwestern Europe, known for its
              beautiful beaches, vibrant culture, and rich history. The country
              has a long and complex history, with roots in the ancient Celts
              and the Roman and Moorish empires. Today, Portugal is known for
              its beautiful coastline and beaches, which are popular with
              tourists, as well as its historic cities, including Lisbon, Porto,
              and Coimbra, which are rich in cultural and architectural
              heritage. The capital city of Lisbon is a major cultural and
              economic hub, with many historic landmarks, museums, and cultural
              institutions. Portugal is also known for its vibrant music and
              arts scene, and its rich folk traditions that have been preserved
              and celebrated by generations of Portuguese. The country is a
              popular tourist destination, with many visitors coming to
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
                Who can enter Portugal without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of the European Union (EU), the European Economic Area
                (EEA) countries (Iceland, Liechtenstein and Norway), and
                Switzerland can enter Portugal without a visa for stays of up to
                90 days within a 180-day period. This means that they can stay
                in Portugal for up to 90 days in any six-month period, but they
                cannot stay for more than 90 days at a time.
                <br /> <br />
                Other countries whose citizens are allowed to enter Portugal
                without a visa for short stays include:{" "}
                <span className="font-bold">
                  Andorra, Argentina, Australia, Bahamas, Barbados, Bosnia and
                  Herzegovina, Brazil, Brunei, Canada, Chile, Costa Rica, El
                  Salvador, Georgia, Grenada, Guatemala, Honduras, Hong Kong,
                  Israel, Japan, Kosovo, Macau, Malaysia, Mauritius, Mexico,
                  Monaco, Montenegro, New Zealand, Nicaragua, Panama, Paraguay,
                  Saint Kitts and Nevis, San Marino, Serbia, Seychelles,
                  Singapore, South Korea, Taiwan, United Arab Emirates, United
                  States, Uruguay, Vatican City, Venezuela.
                </span>
                <br /> <br />
                <span className="font-bold">
                  Please note that this list is subject to change, and it is
                  always advisable to check with the Portuguese embassy or
                  consulate in your country of residence before traveling to
                  Portugal to make sure you have the correct documentation.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Portugal Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Portugal, you will generally need to
                submit the following documents: <br /> <br />
                ● A valid passport: Your passport must be valid for at least
                three months beyond the end of your intended stay in Portugal,
                and it must have at least two blank pages for the visa. <br />{" "}
                <br />
                ● A completed and signed visa application form: You can download
                the visa application form from the website of the Portuguese
                embassy or consulate in your country of residence. <br /> <br />
                ● Two recent passport-sized photographs: The photographs should
                be taken against a white background and should show your full
                face. <br /> <br />
                ● A travel insurance policy: You will need to provide proof of a
                valid travel insurance policy that covers the duration of your
                stay in Portugal. <br /> <br />
                ● Proof of accommodation: This can be a hotel booking or a
                letter of invitation from a host in Portugal, stating that they
                will provide accommodation for you during your stay. <br />{" "}
                <br />
                ● Proof of sufficient financial means: You will need to provide
                evidence that you have enough money to cover the costs of your
                stay in Portugal, such as bank statements or a letter from your
                employer. <br /> <br />
                ● A return ticket: You will need to provide proof of your return
                or onward journey, such as a return flight ticket or a ticket
                for a ferry or train. <br /> <br />
                ● A criminal record certificate: Depending on your country of
                origin and the type of visa you are applying for, you may need
                to provide a criminal record certificate from your home country.
                <br /> <br />● Other supporting documents: Depending on the
                purpose of your visit to Portugal, you may need to provide
                additional documents, such as a letter from your employer or a
                certificate of enrollment in a Portuguese language course.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Portugal Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Portugal, you will need to follow these
                steps: <br /> <br />
                ● Determine the type of visa you need: There are several types
                of visas for Portugal, including short-stay visas for tourism,
                business, study, and family visits, and long-stay visas for
                work, study, and family reunification. Determine the type of
                visa that best fits your purpose of visit and the duration of
                your stay in Portugal. <br /> <br />
                ● Check the visa requirements: Check the visa requirements for
                your country of residence and the type of visa you are applying
                for. You can find this information on the website of the
                Portuguese embassy or consulate in your country. <br /> <br />
                ● Gather the required documents: Gather all the required
                documents for your visa application, including your passport, a
                completed and signed visa application form, photographs, travel
                insurance, proof of accommodation, proof of financial means, and
                a return ticket, as well as any other supporting documents that
                may be required. <br /> <br />
                ● Make an appointment: Contact the Portuguese embassy or
                consulate in your country of residence to make an appointment to
                submit your visa application. You may need to do this online or
                by phone. <br /> <br />
                ● Submit your application: Attend your appointment and submit
                your application in person. You may need to pay a visa fee at
                this time. <br /> <br />● Wait for a decision: The processing
                time for a visa application can vary, so it is important to
                apply well in advance of your intended travel date. You will be
                notified by the embassy or consulate when a decision has been
                made on your application.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Portugal?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The amount of time you can stay in Portugal depends on your
                nationality and the purpose of your visit.
                <br /> <br /> If you are a citizen of the European Union (EU),
                the European Economic Area (EEA) countries (Iceland,
                Liechtenstein and Norway), or Switzerland, you can enter
                Portugal without a visa and stay for up to 90 days within a
                180-day period. This means that you can stay in Portugal for up
                to 90 days in any six-month period, but you cannot stay for more
                than 90 days at a time.
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of a country that requires a visa to
                  enter Portugal, the length of your stay will depend on the
                  type of visa you have. Short-stay visas for tourism, business,
                  study, and family visits are generally valid for stays of up
                  to 90 days within a 180-day period, while long-stay visas for
                  work, study, and family reunification are valid for stays of
                  more than 90 days.
                </span>
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the length of your stay in
                  Portugal may also be affected by other factors, such as your
                  travel insurance policy and the purpose of your visit. It is
                  always advisable to check with the Portuguese embassy or
                  consulate in your country of residence for the most up-to-date
                  information on the length of stay that is permitted for your
                  specific situation.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Portugal?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are no longer any COVID-19 vaccination, testing or
                passenger locator form requirements for entry to mainland
                Portugal, Madeira and the Azores. If you're travelling to
                Portugal via other countries, such as France and Spain , check
                the entry requirements for those countries before you travel.
                <br />
                <br />
                COVID-19 travel restrictions were lifted in Portugal. Providing
                proof of vaccination, recovery from COVID-19 or negative test
                results is not required.
                <br />
                <br />
                Most restrictions have been lifted, but you will still need to
                use a face mask on entry to medical facilities, retirement and
                nursing homes. This measure does not apply to children aged 10
                and under.
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
                Informations about Diplomatic Passport!
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In Portugal, a diplomatic passport is issued to individuals who
                are working in a diplomatic capacity for their country, such as
                diplomats and members of a diplomatic mission. The Ministry of
                Foreign Affairs is responsible for issuing diplomatic passports
                to eligible individuals in Portugal.
                <br />
                <br />
                To obtain a diplomatic passport in Portugal, an individual must
                meet certain criteria and provide certain documents, such as:
                <br />
                <br />●{" "}
                <span className="font-bold">
                  Proof of employment as a diplomat or member of a diplomatic
                  mission.
                </span>
                <br />● <span className="font-bold">A valid ID document.</span>
                <br />●{" "}
                <span className="font-bold">
                  A recent passport-size photograph.
                </span>
                <br />●{" "}
                <span className="font-bold">A completed application form.</span>
                <br />●{" "}
                <span className="font-bold">
                  Payment of any applicable fees.
                </span>
                <br />
                <br />
                Diplomatic passport holders in Portugal are generally granted
                certain privileges and immunity from certain laws in the country
                where they are posted. This includes immunity from arrest and
                detention, as well as certain customs and tax exemptions.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that Diplomatic passport should be used
                  for official travel and diplomatic activities, and it's not
                  meant for personal travel. Misuse of a diplomatic passport can
                  result in revocation of the passport, and could lead to other
                  consequences as well.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  Keep in mind that the information provided is based on my
                  knowledge cut-off and the regulations regarding Diplomatic
                  Passport in Portugal can change over time. It's recommended to
                  check with the Ministry of Foreign Affairs of Portugal for
                  more updated information and requirements.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Portugal?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of the European Union (EU), the European
                Economic Area (EEA) countries (Iceland, Liechtenstein and
                Norway), or Switzerland, you have the right to live and work in
                Portugal without a visa. You will need to register with the
                local authorities within three months of arriving in Portugal,
                but you do not need to obtain a separate work visa.
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of a country outside the EU, EEA, or
                  Switzerland, you will generally need to obtain a work visa in
                  order to work in Portugal. The type of work visa you need will
                  depend on the type of work you will be doing and the duration
                  of your stay in Portugal.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Portugal Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa for Portugal, you will need to follow
                these steps: <br /> <br />
                ● Determine the type of work visa you need: There are several
                types of work visas for Portugal, including short-term visas for
                work placements and internships, and long-term visas for
                employment and self-employment. Determine the type of work visa
                that best fits your situation and the duration of your stay in
                Portugal. <br /> <br />
                ● Check the visa requirements: Check the visa requirements for
                your country of residence and the type of work visa you are
                applying for. You can find this information on the website of
                the Portuguese embassy or consulate in your country. <br />{" "}
                <br />
                ● Gather the required documents: Gather all the required
                documents for your visa application, including your passport, a
                completed and signed visa application form, photographs, travel
                insurance, proof of accommodation, proof of financial means, and
                a return ticket, as well as any other supporting documents that
                may be required. <br /> <br />
                ● Make an appointment: Contact the Portuguese embassy or
                consulate in your country of residence to make an appointment to
                submit your visa application. You may need to do this online or
                by phone. <br /> <br />
                ● Submit your application: Attend your appointment and submit
                your application in person. You may need to pay a visa fee at
                this time. <br /> <br />● Wait for a decision: The processing
                time for a visa application can vary, so it is important to
                apply well in advance of your intended travel date. You will be
                notified by the embassy or consulate when a decision has been
                made on your application.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Portugal Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of work visas for Portugal, including:
                <br /> <br />●{" "}
                <span className="font-bold">Short-term work visa</span>: This
                type of visa is intended for work placements and internships of
                up to 90 days within a 180-day period. It is generally issued
                for specific purposes, such as training or research, and it is
                not intended for employment.
                <br /> <br />●{" "}
                <span className="font-bold">Work and residence permit</span>:
                This type of visa is intended for employment or self-employment
                in Portugal for a period of more than 90 days. It allows you to
                live and work in Portugal for the duration of your permit, which
                is generally valid for up to one year. <br /> <br />●{" "}
                <span className="font-bold">EU Blue Card</span>: This type of
                visa is intended for highly skilled workers who wish to work in
                Portugal for more than 90 days. It allows you to live and work
                in Portugal for the duration of your permit, which is generally
                valid for up to four years. <br /> <br />●{" "}
                <span className="font-bold">Seasonal work visa</span>: This type
                of visa is intended for temporary work in Portugal during the
                peak tourist season. It allows you to work in Portugal for a
                maximum of six months per year, and it is generally valid for up
                to one year. <br /> <br />●{" "}
                <span className="font-bold">Entrepreneur visa</span>: This type
                of visa is intended for entrepreneurs who wish to set up a
                business in Portugal. It allows you to live and work in Portugal
                for the duration of your permit, which is generally valid for up
                to one year.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Portugal Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa for Portugal, you will generally need
                to submit the following documents: <br /> <br />
                ● A valid passport: Your passport must be valid for at least
                three months beyond the end of your intended stay in Portugal,
                and it must have at least two blank pages for the visa. <br />{" "}
                <br />
                ● A completed and signed visa application form: You can download
                the visa application form from the website of the Portuguese
                embassy or consulate in your country of residence. <br /> <br />
                ● Two recent passport-sized photographs: The photographs should
                be taken against a white background and should show your full
                face. <br /> <br />
                ● A travel insurance policy: You will need to provide proof of a
                valid travel insurance policy that covers the duration of your
                stay in Portugal. <br /> <br />
                ● Proof of accommodation: This can be a hotel booking or a
                letter of invitation from a host in Portugal, stating that they
                will provide accommodation for you during your stay. <br />{" "}
                <br />
                ● Proof of sufficient financial means: You will need to provide
                evidence that you have enough money to cover the costs of your
                stay in Portugal, such as bank statements or a letter from your
                employer.
                <br /> <br />
                ● A return ticket: You will need to provide proof of your return
                or onward journey, such as a return flight ticket or a ticket
                for a ferry or train. <br /> <br />
                ● A criminal record certificate: Depending on your country of
                origin and the type of visa you are applying for, you may need
                to provide a criminal record certificate from your home country.
                <br /> <br />● Other supporting documents: Depending on the type
                of work you will be doing in Portugal, you may need to provide
                additional documents, such as a contract of employment or a
                letter from your employer.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Portugal?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa for Portugal, you will need to contact
                the Portuguese embassy or consulate in your country of
                residence. You can find the contact details of the embassy or
                consulate on the website of the Portuguese Ministry of Foreign
                Affairs.
                <br /> <br /> You will generally need to make an appointment to
                submit your visa application in person. You may need to do this
                online or by phone, depending on the embassy or consulate.
                <br /> <br />
                <span className="font-bold">
                  It is important to apply for your work visa well in advance of
                  your intended travel date, as the processing time for a visa
                  application can vary. You should also allow sufficient time to
                  gather all the required documents and make any necessary
                  arrangements for your stay in Portugal.
                </span>
                <br /> <br />
                <span className="font-bold">
                  It is always advisable to check with the Portuguese embassy or
                  consulate in your country of residence for the most up-to-date
                  information on the process for applying for a work visa,
                  including the availability of appointments and the processing
                  time for your specific situation.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Portugal?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a visa to study in Portugal depends on your
                nationality and the duration of your stay.
                <br /> <br /> If you are a citizen of the European Union (EU),
                the European Economic Area (EEA) countries (Iceland,
                Liechtenstein and Norway), or Switzerland, you can enter
                Portugal without a visa and stay for up to 90 days within a
                180-day period for the purpose of studying. If you are planning
                to study in Portugal for longer than 90 days, you will need to
                apply for a long-stay visa for study.
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of a country outside the EU, EEA, or
                  Switzerland, you will generally need to obtain a visa in order
                  to study in Portugal. The type of visa you need will depend on
                  the duration of your stay in Portugal. If you are planning to
                  study in Portugal for less than 90 days, you will need a
                  short-stay visa for study. If you are planning to study in
                  Portugal for longer than 90 days, you will need a long-stay
                  visa for study.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Portugal student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Portugal, you will need to
                follow these steps: <br /> <br />
                ● Determine the type of student visa you need: If you are
                planning to study in Portugal for less than 90 days, you will
                need a short-stay student visa. If you are planning to study in
                Portugal for longer than 90 days, you will need a long-stay
                student visa. <br /> <br />
                ● Check the visa requirements: Check the visa requirements for
                your country of residence and the type of student visa you are
                applying for. You can find this information on the website of
                the Portuguese embassy or consulate in your country. <br />{" "}
                <br />
                ● Gather the required documents: Gather all the required
                documents for your visa application, including your passport, a
                completed and signed visa application form, photographs, travel
                insurance, proof of accommodation, proof of financial means, and
                a return ticket, as well as any other supporting documents that
                may be required.
                <br /> <br />
                ● Make an appointment: Contact the Portuguese embassy or
                consulate in your country of residence to make an appointment to
                submit your visa application. You may need to do this online or
                by phone. <br /> <br />
                ● Submit your application: Attend your appointment and submit
                your application in person. You may need to pay a visa fee at
                this time. <br /> <br />● Wait for a decision: The processing
                time for a visa application can vary, so it is important to
                apply well in advance.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Portugal student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Portugal, you will generally
                need to submit the following documents: <br /> <br />
                ● A valid passport: Your passport must be valid for at least
                three months beyond the end of your intended stay in Portugal,
                and it must have at least two blank pages for the visa. <br />{" "}
                <br />
                ● A completed and signed visa application form: You can download
                the visa application form from the website of the Portuguese
                embassy or consulate in your country of residence. <br /> <br />
                ● Two recent passport-sized photographs: The photographs should
                be taken against a white background and should show your full
                face. <br /> <br />
                ● A travel insurance policy: You will need to provide proof of a
                valid travel insurance policy that covers the duration of your
                stay in Portugal. <br /> <br />
                ● Proof of accommodation: This can be a hotel booking or a
                letter of invitation from a host in Portugal, stating that they
                will provide accommodation for you during your stay. <br />{" "}
                <br />
                ● Proof of sufficient financial means: You will need to provide
                evidence that you have enough money to cover the costs of your
                stay in Portugal, such as bank statements or a letter from your
                employer. <br /> <br />
                ● A return ticket: You will need to provide proof of your return
                or onward journey, such as a return flight ticket or a ticket
                for a ferry or train. <br /> <br />
                ● Proof of acceptance at a Portuguese educational institution:
                You will need to provide a letter of acceptance from a
                Portuguese educational institution, stating that you have been
                accepted to study in Portugal. <br /> <br />
                ● A criminal record certificate: Depending on your country of
                origin and the type of visa you are applying for, you may need
                to provide a criminal record certificate from your home country.
                <br /> <br />● Other supporting documents: Depending on your
                specific situation, you may need to provide additional
                documents, such as a transcript of your academic records or a
                letter from your employer.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Portugal student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Portugal depend on
                the type of student visa you are applying for and your country
                of residence.
                <br /> <br /> If you are applying for a short-stay student visa
                for Portugal, which is valid for stays of up to 90 days within a
                180-day period, the visa will generally be valid for the
                duration of your stay in Portugal. The price of a short-stay
                student visa may vary depending on your country of residence.
                <br /> <br /> If you are applying for a long-stay student visa
                for Portugal, which is valid for stays of more than 90 days, the
                visa will generally be valid for the duration of your studies in
                Portugal. The price of a long-stay student visa may vary
                depending on your country of residence and the duration of your
                stay in Portugal.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the validity and price of a
                  student visa for Portugal may vary depending on your specific
                  situation and the type of student visa you are applying for.
                  It is always advisable to check with the Portuguese embassy or
                  consulate in your country of residence for the most up-to-date
                  information on the validity and price of student visas for
                  Portugal.
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

export default Portugal;
