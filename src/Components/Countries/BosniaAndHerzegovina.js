import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const BosniaAndHerzegovina = () => {
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
        <title>Bosnia and Herzegovina</title>
        <meta name="description" content="Bosnia and Herzegovina" />
        <meta
          name="keywords"
          content="Bosnia and Herzegovina travel visa, Bosnia and Herzegovina work visa, Bosnia and Herzegovina study visa, How to apply for an Bosnia and Herzegovina visa, Bosnia and Herzegovina visa requirements, Bosnia and Herzegovina tourist visa, Bosnia and Herzegovina student visa, Bosnia and Herzegovina business visa, Bosnia and Herzegovina visa processing time, Bosnia and Herzegovina visa application process, Bosnia and Herzegovina visa for Americans, Bosnia and Herzegovina visa for Europeans, Bosnia and Herzegovina visa for Bosnia and Herzegovinans, Bosnia and Herzegovina visa for Canadians, Bosnia and Herzegovina visa for Indians, Bosnia and Herzegovina visa for Chinese, Bosnia and Herzegovina visa for Africans, Bosnia and Herzegovina visa for Asians, Bosnia and Herzegovina visa for South Americans, Bosnia and Herzegovina visa for Middle Easterners, Bosnia and Herzegovina visa for UK citizens, Bosnia and Herzegovina visa for EU citizens, Bosnia and Herzegovina visa for Schengen area, Bosnia and Herzegovina visa for non-EU citizens, Bosnia and Herzegovina visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Bosnia and Herzegovina
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Bosnia and Herzegovina is a country located in the Western
              Balkans. It is well known for its beautiful natural scenery and
              its rich cultural heritage. Bosnia and Herzegovina is home to a
              number of UNESCO World Heritage sites, including the Old Bridge of
              Mostar and the medieval city of Dubrovnik. The country is also
              known for its delicious cuisine, which combines influences from
              the Middle East, Central Europe, and the Mediterranean. Some other
              things that Bosnia and Herzegovina is known for include its
              vibrant arts and music scene, and its many natural parks and
              outdoor recreation areas.
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
                Who can enter Bosnia and Herzegovina without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are able to enter Bosnia and
                Herzegovina without a visa for stays of up to 90 days within a
                180-day period.
                <br />
                <br />
                As of 2021, citizens of the following countries are able to
                enter Bosnia and Herzegovina without a visa:
                <br />
                <br />
                <span className="font-bold">
                  Albania, Andorra, Antigua and Barbuda, Argentina, Australia,
                  Austria, Bahamas, Barbados, Belgium, Belize, Bolivia, Brazil,
                  Brunei, Bulgaria, Canada, Chile, Costa Rica, Croatia, Cyprus,
                  Czech Republic, Denmark, Commonwealth of Dominica, El
                  Salvador, Estonia, Finland, France, Georgia, Germany, Greece,
                  Grenada, Guatemala, Honduras, Hungary, Iceland, Ireland,
                  Israel, Italy, Japan, Kosovo, Latvia, Liechtenstein,
                  Lithuania, Luxembourg, Malta, Marshall, Islands, Mauritius,
                  Mexico, Moldova, Monaco, Montenegro, Netherlands, New Zealand,
                  Nicaragua, North Macedonia, Norway, Panama, Paraguay, Peru,
                  Poland, Portugal, Romania, Russia, Saint Kitts and Nevis,
                  Saint Lucia, Saint Vincent and the Grenadines, San Marino,
                  Serbia, Seychelles, Singapore, Slovakia, Slovenia, South
                  Korea, Spain, Sweden, Switzerland, Ukraine, United Arab
                  Emirates, United Kingdom, United States, Uruguay, Vatican
                  City, Venezuela.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the list of countries whose
                  citizens can enter Bosnia and Herzegovina without a visa may
                  change from time to time, so it's always a good idea to check
                  the most up-to-date information before planning your trip.
                  Additionally, even if you are able to enter Bosnia and
                  Herzegovina without a visa, you may still need to meet other
                  requirements, such as having a valid passport and sufficient
                  funds to support your stay.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Bosnia and Herzegovina Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Bosnia and Herzegovina, you will
                typically need to submit the following documents:
                <br />
                <br />● A completed and signed visa application form. This form
                can be obtained from the embassy or consulate of Bosnia and
                Herzegovina in your country of residence, or you can download it
                from the website of the Ministry of Foreign Affairs of Bosnia
                and Herzegovina.
                <br />
                <br />● A valid passport. Your passport must have at least six
                months of validity remaining and at least two blank pages for
                the visa to be affixed.
                <br />
                <br />● Two passport-size photographs. These photos should be
                taken recently and should meet the requirements for passport
                photos.
                <br />
                <br />● Proof of sufficient funds. You will need to demonstrate
                that you have sufficient funds to support your stay in Bosnia
                and Herzegovina. This may include bank statements, credit card
                statements, or other financial documents.
                <br />
                <br />● Proof of travel insurance. You will need to show that
                you have travel insurance that covers medical expenses,
                repatriation, and any other expenses that may arise during your
                stay in Bosnia and Herzegovina.
                <br />
                <br />
                ● A letter of invitation or sponsorship, if applicable. If you
                are being invited to Bosnia and Herzegovina by a company,
                organization, or individual, you may need to provide a letter of
                invitation or sponsorship from them.
                <br />
                <br />● Other documents may be required depending on the purpose
                of your trip and your specific circumstances. For example, if
                you are planning to work or study in Bosnia and Herzegovina, you
                may need to provide additional documents such as a job offer
                letter or a letter of acceptance from a school.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific documents required
                  for a visa application may vary depending on the embassy or
                  consulate where you are applying, as well as the type of visa
                  you are seeking. Be sure to check the requirements carefully
                  and provide all required documents to avoid delays in the visa
                  application process.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Bosnia and Herzegovina Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Bosnia and Herzegovina visa, you will need to
                follow these steps:
                <br />
                <br />● Determine the type of visa you need. Bosnia and
                Herzegovina offers several types of visas, including tourist
                visas, business visas, and student visas. You will need to
                determine the type of visa that is most appropriate for your
                trip.
                <br />
                <br />● Gather the required documents. As mentioned earlier, you
                will need to provide certain documents as part of your visa
                application, including a completed visa application form, a
                valid passport, passport-size photographs, and proof of
                sufficient funds and travel insurance.
                <br />
                <br />● Schedule an appointment with the embassy or consulate.
                Contact the embassy or consulate of Bosnia and Herzegovina in
                your country of residence to schedule an appointment to submit
                your visa application.
                <br />
                <br />● Attend the appointment and submit your application.
                Bring all required documents with you to the appointment, as
                well as any fees that are required. The embassy or consulate
                will review your application and may ask you additional
                questions or request additional documents.
                <br />
                <br />● Wait for a decision. It may take several weeks or longer
                for the embassy or consulate to process your visa application.
                You will be notified by mail or email when a decision has been
                made.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the visa application process may
                  vary depending on the embassy or consulate where you are
                  applying, as well as the type of visa you are seeking. Be sure
                  to check the specific requirements and follow the instructions
                  provided by the embassy or consulate.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Bosnia and Herzegovina?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are allowed to stay in Bosnia and
                Herzegovina depends on the type of visa you have and the purpose
                of your visit.
                <br />
                <br />
                If you are a citizen of a country that is able to enter Bosnia
                and Herzegovina without a visa, you are generally allowed to
                stay in the country for up to 90 days within a 180-day period.
                <br />
                <br />
                If you are a citizen of a country that requires a visa to enter
                Bosnia and Herzegovina, the length of your stay will depend on
                the type of visa you have and the purpose of your visit. For
                example, if you are visiting Bosnia and Herzegovina for tourism
                purposes, you may be granted a tourist visa that allows you to
                stay in the country for up to 90 days. If you are visiting
                Bosnia and Herzegovina for business purposes, you may be granted
                a business visa that allows you to stay for a shorter period of
                time, such as 30 or 60 days.
                <br />
                <br />
                It's important to note that the length of time you are allowed
                to stay in Bosnia and Herzegovina may be affected by other
                factors, such as the expiration date of your passport, the
                availability of travel insurance, and your ability to
                demonstrate that you have sufficient funds to support your stay.
                <br />
                <br />
                <span className="font-bold">
                  If you want to stay in Bosnia and Herzegovina for a longer
                  period of time, you may need to apply for a residence permit.
                  Residence permits are typically granted for specific purposes,
                  such as work, study, or family reunification, and they may
                  allow you to stay in the country for an extended period of
                  time.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Bosnia and Herzegovina?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                COVID test is not required when traveling to Bosnia and
                Herzegovina.
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
                individuals who are representing their country in an official
                capacity, such as diplomats, government officials, and members
                of parliament. Diplomatic passports are issued by the government
                of the individual's home country and are typically valid for a
                longer period of time than ordinary passports.
                <br />
                <br />
                In Bosnia and Herzegovina, diplomatic passports are issued to
                individuals who are accredited as diplomats or members of the
                diplomatic corps, as well as to other individuals who are
                designated as official representatives of the government of
                Bosnia and Herzegovina.
                <br />
                <br />
                Holders of diplomatic passports are generally entitled to
                certain privileges and immunities when traveling abroad,
                including immunity from arrest and detention, exemption from
                visa requirements in certain cases, and the right to receive
                assistance from the host country in the event of an emergency.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that diplomatic passports are not the
                  same as official passports, which are issued to government
                  employees who are traveling abroad on official business but
                  are not accredited as diplomats. Official passports also grant
                  certain privileges and immunities, but they are not as
                  extensive as those granted to holders of diplomatic passports.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Bosnia and Herzegovina?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a foreign national and you want to work in Bosnia and
                Herzegovina, you may need to obtain a worker visa. Worker visas
                are typically required for individuals who will be employed in
                Bosnia and Herzegovina for a period of time, either as salaried
                employees or self-employed individuals.
                <br />
                <br />
                To apply for a worker visa, you will typically need to provide
                the following documents:
                <br />
                <br />
                ● A completed and signed visa application form.
                <br />
                <br />
                ● A valid passport with at least six months of validity
                remaining.
                <br />
                <br />
                ● Two passport-size photographs.
                <br />
                <br />
                ● A certificate of good conduct or police clearance certificate.
                <br />
                <br />
                ● A medical certificate.
                <br />
                <br />
                ● Evidence of your employment or self-employment, such as a
                contract or letter of offer.
                <br />
                <br />
                ● Evidence of your financial means, such as bank statements or
                other financial documents.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific documents required
                  for a worker visa may vary depending on the embassy or
                  consulate where you are applying, as well as the type of work
                  you will be doing in Bosnia and Herzegovina. Be sure to check
                  the requirements carefully and provide all required documents
                  to avoid delays in the visa application process.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It's also worth noting that worker visas are typically granted
                  for a specific period of time and may be subject to renewal.
                  You may need to apply for an extension of your worker visa if
                  you want to continue working in Bosnia and Herzegovina after
                  your initial visa expires.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Bosnia and Herzegovina Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to Bosnia and Herzegovina, you will
                need to follow these steps:
                <br />
                <br />
                ● Determine your eligibility. To be eligible for a worker visa,
                you will typically need to have a job offer or a contract of
                employment in Bosnia and Herzegovina. You will also need to meet
                other requirements, such as having a clean criminal record and
                being in good health.
                <br />
                <br />● Gather the required documents. As mentioned earlier, you
                will need to provide certain documents as part of your worker
                visa application, including a completed visa application form, a
                valid passport, passport-size photographs, and evidence of your
                employment or self-employment. You may also need to provide
                other documents, such as a certificate of good conduct or a
                medical certificate.
                <br />
                <br />● Schedule an appointment with the embassy or consulate.
                Contact the embassy or consulate of Bosnia and Herzegovina in
                your country of residence to schedule an appointment to submit
                your worker visa application.
                <br />
                <br />● Attend the appointment and submit your application.
                Bring all required documents with you to the appointment, as
                well as any fees that are required. The embassy or consulate
                will review your application and may ask you additional
                questions or request additional documents.
                <br />
                <br />● Wait for a decision. It may take several weeks or longer
                for the embassy or consulate to process your worker visa
                application. You will be notified by mail or email when a
                decision has been made.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the worker visa application
                  process may vary depending on the embassy or consulate where
                  you are applying, as well as the type of work you will be
                  doing in Bosnia and Herzegovina. Be sure to check the specific
                  requirements and follow the instructions provided by the
                  embassy or consulate.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Bosnia and Herzegovina Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas that may be available to
                foreign nationals seeking to work in Bosnia and Herzegovina. The
                specific type of worker visa you will need will depend on the
                nature of your employment and the length of your stay in the
                country.
                <br />
                <br />
                Here are some of the main types of worker visas that may be
                available to foreign nationals in Bosnia and Herzegovina:
                <br />
                <br />● Temporary worker visa: This type of visa is typically
                granted to foreign nationals who will be working in Bosnia and
                Herzegovina for a specific period of time, such as a few months
                or a year. Temporary worker visas may be granted for a variety
                of purposes, including seasonal work, internships, and other
                short-term employment.
                <br />
                <br />● Long-term worker visa: This type of visa is typically
                granted to foreign nationals who will be working in Bosnia and
                Herzegovina for an extended period of time, such as several
                years. Long-term worker visas may be granted for a variety of
                purposes, including salaried employment, self-employment, and
                other types of work.
                <br />
                <br />● Intra-company transferee visa: This type of visa is
                typically granted to foreign nationals who are being transferred
                to Bosnia and Herzegovina by their employer for a specific
                period of time. Intra-company transferee visas are typically
                granted to employees who are being transferred to a branch,
                subsidiary, or affiliate of their company in Bosnia and
                Herzegovina.
                <br />
                <br />
                Self-employed worker visa: This type of visa is typically
                granted to foreign nationals who will be working in Bosnia and
                Herzegovina as self-employed individuals, such as freelancers or
                contractors. Self-employed worker visas may be granted for a
                specific period of time or on a long-term basis.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific requirements for
                  worker visas in Bosnia and Herzegovina may vary depending on
                  the type of visa you are seeking and the purpose of your
                  employment. Be sure to check the requirements carefully and
                  provide all required documents to avoid delays in the visa
                  application process.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Bosnia and Herzegovina Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to Bosnia and Herzegovina, you will
                typically need to provide the following documents:
                <br />
                <br />● A completed and signed visa application form. This form
                can be obtained from the embassy or consulate of Bosnia and
                Herzegovina in your country of residence, or you can download it
                from the website of the Ministry of Foreign Affairs of Bosnia
                and Herzegovina.
                <br />
                <br />● A valid passport. Your passport must have at least six
                months of validity remaining and at least two blank pages for
                the visa to be affixed.
                <br />
                <br />
                ● Two passport-size photographs. These photos should be taken
                recently and should meet the requirements for passport photos.
                <br />
                <br />
                ● A certificate of good conduct or police clearance certificate.
                This document, also known as a criminal record check or
                background check, is issued by the authorities in your home
                country and confirms that you have no criminal record.
                <br />
                <br />● A medical certificate. This document is issued by a
                doctor and confirms that you are in good health and do not have
                any medical conditions that would prevent you from working.
                <br />
                <br />● Evidence of your employment or self-employment. This may
                include a contract of employment, a letter of offer, or other
                documents that confirm your employment or self-employment in
                Bosnia and Herzegovina.
                <br />
                <br />
                Evidence of your financial means. You will need to demonstrate
                that you have sufficient funds to support your stay in Bosnia
                and Herzegovina. This may include bank statements, credit card
                statements, or other financial documents.
                <br />
                <br />
                Other documents may be required depending on the specific
                circumstances of your case. For example, if you are applying for
                an intra-company transferee visa, you may need to provide
                additional documents such as a letter of transfer from your
                employer.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific documents required
                  for a worker visa may vary depending on the embassy or
                  consulate where you are applying, as well as the type of work
                  you will be doing in Bosnia and Herzegovina. Be sure to check
                  the requirements carefully and provide all required documents
                  to avoid delays in the visa application process.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Bosnia and
                Herzegovina?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to Bosnia and Herzegovina, you will
                typically need to submit your application to the embassy or
                consulate of Bosnia and Herzegovina in your country of
                residence. You can find the nearest embassy or consulate by
                checking the website of the Ministry of Foreign Affairs of
                Bosnia and Herzegovina or by contacting the embassy or consulate
                directly.
                <br />
                <br />
                It's important to note that the process for applying for a
                worker visa in Bosnia and Herzegovina may vary depending on the
                embassy or consulate where you are applying. Be sure to check
                the specific requirements and instructions provided by the
                embassy or consulate where you will be submitting your
                application.
                <br />
                <br />
                You can usually apply for a worker visa to Bosnia and
                Herzegovina at any time, but it's a good idea to start the
                process as early as possible to allow enough time for your
                application to be processed. The processing time for worker visa
                applications can vary, but it may take several weeks or longer
                for the embassy or consulate to review your application and make
                a decision.
                <br />
                <br />
                To ensure that you have enough time to prepare for your trip,
                it's a good idea to apply for your worker visa at least a few
                months in advance of your planned travel date. This will give
                you time to gather all required documents and to make any
                necessary travel arrangements.
                <br />
                <br />
                <span className="font-bold">
                  It's also worth noting that worker visas are typically granted
                  for a specific period of time and may be subject to renewal.
                  If you want to continue working in Bosnia and Herzegovina
                  after your initial visa expires, you may need to apply for an
                  extension of your worker visa.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Bosnia and Herzegovina?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a foreign national and you want to study in Bosnia
                and Herzegovina, you may need to obtain a student visa. Student
                visas are typically required for individuals who will be
                studying in Bosnia and Herzegovina for a period of time, either
                as full-time or part-time students.
                <br />
                <br />
                To apply for a student visa, you will typically need to provide
                the following documents:
                <br />
                <br />● A completed and signed visa application form.
                <br />
                <br />● A valid passport with at least six months of validity
                remaining.
                <br />
                <br />● Two passport-size photographs.
                <br />
                <br />● A certificate of good conduct or police clearance
                certificate.
                <br />
                <br />● A medical certificate.
                <br />
                <br />● A letter of acceptance or enrollment from a school or
                university in Bosnia and Herzegovina.
                <br />
                <br />
                ● Evidence of your financial means, such as bank statements or
                other financial documents.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific documents required
                  for a student visa may vary depending on the embassy or
                  consulate where you are applying, as well as the type of study
                  you will be pursuing in Bosnia and Herzegovina. Be sure to
                  check the requirements carefully and provide all required
                  documents to avoid delays in the visa application process.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It's also worth noting that student visas are typically
                  granted for a specific period of time and may be subject to
                  renewal. You may need to apply for an extension of your
                  student visa if you want to continue studying in Bosnia and
                  Herzegovina after your initial visa expires.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Bosnia and Herzegovina Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to Bosnia and Herzegovina, you will
                need to follow these steps:
                <br />
                <br />● Determine your eligibility. To be eligible for a student
                visa, you will typically need to have been accepted or enrolled
                in a school or university in Bosnia and Herzegovina. You will
                also need to meet other requirements, such as having a clean
                criminal record and being in good health.
                <br />
                <br />● Gather the required documents. As mentioned earlier, you
                will need to provide certain documents as part of your student
                visa application, including a completed visa application form, a
                valid passport, passport-size photographs, and a letter of
                acceptance or enrollment from a school or university in Bosnia
                and Herzegovina. You may also need to provide other documents,
                such as a certificate of good conduct or a medical certificate.
                <br />
                <br />● Schedule an appointment with the embassy or consulate.
                Contact the embassy or consulate of Bosnia and Herzegovina in
                your country of residence to schedule an appointment to submit
                your student visa application.
                <br />
                <br />● Attend the appointment and submit your application.
                Bring all required documents with you to the appointment, as
                well as any fees that are required. The embassy or consulate
                will review your application and may ask you additional
                questions or request additional documents.
                <br />
                <br />● Wait for a decision. It may take several weeks or longer
                for the embassy or consulate to process your student visa
                application. You will be notified by mail or email when a
                decision has been made.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the student visa application
                  process may vary depending on the embassy or consulate where
                  you are applying, as well as the type of study you will be
                  pursuing in Bosnia and Herzegovina.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Bosnia and Herzegovina Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                ● A completed and signed visa application form. This form can be
                obtained from the embassy or consulate of Bosnia and Herzegovina
                in your country of residence, or you can download it from the
                website of the Ministry of Foreign Affairs of Bosnia and
                Herzegovina.
                <br />
                <br />● A valid passport. Your passport must have at least six
                months of validity remaining and at least two blank pages for
                the visa to be affixed.
                <br />
                <br />● Two passport-size photographs. These photos should be
                taken recently and should meet the requirements for passport
                photos.
                <br />
                <br />● A certificate of good conduct or police clearance
                certificate. This document, also known as a criminal record
                check or background check, is issued by the authorities in your
                home country and confirms that you have no criminal record.
                <br />
                <br />● A medical certificate. This document is issued by a
                doctor and confirms that you are in good health and do not have
                any medical conditions that would prevent you from studying.
                <br />
                <br />● A letter of acceptance or enrollment from a school or
                university in Bosnia and Herzegovina. This document is issued by
                the school or university and confirms that you have been
                accepted or enrolled in a program of study.
                <br />
                <br />
                ● Evidence of your financial means. You will need to demonstrate
                that you have sufficient funds to support your studies in Bosnia
                and Herzegovina. This may include bank statements, credit card
                statements, or other financial documents.
                <br />
                <br />
                <span className="font-bold">
                  Other documents may be required depending on the specific
                  circumstances of your case. For example, if you are applying
                  for a scholarship or other financial assistance, you may need
                  to provide additional documents such as proof of funding.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific documents required
                  for a student visa may vary.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Bosnia and Herzegovina Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa to Bosnia and
                Herzegovina will depend on the specific circumstances of your
                case, as well as the embassy or consulate where you are
                applying.
                <br />
                <br />
                Student visas are typically granted for a specific period of
                time and may be subject to renewal. The length of your student
                visa will depend on the duration of your studies in Bosnia and
                Herzegovina. For example, if you are enrolled in a full-time
                program of study that lasts one academic year, your student visa
                may be valid for one year. If you are enrolled in a part-time
                program of study that lasts longer than one year, your student
                visa may be valid for a longer period of time.
                <br />
                <br />
                The price of a student visa to Bosnia and Herzegovina may vary
                depending on the embassy or consulate where you are applying, as
                well as other factors such as the length of your visa and the
                type of service you are requesting. For example, you may be
                charged a higher fee if you request expedited processing of your
                student visa application.
                <br />
                <br />
                <span className="font-bold">
                  To find out the specific validity and price of a student visa
                  to Bosnia and Herzegovina, you should contact the embassy or
                  consulate of Bosnia and Herzegovina in your country of
                  residence. Be sure to provide all required information and
                  documents to ensure that you receive an accurate quote.
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

export default BosniaAndHerzegovina;
