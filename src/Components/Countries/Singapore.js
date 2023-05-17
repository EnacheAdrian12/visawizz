import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Singapore = () => {
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
        <title>Singapore</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="Singapore travel visa, Singapore work visa, Singapore study visa, How to apply for an Singapore visa, Singapore visa requirements, Singapore tourist visa, Singapore student visa, Singapore business visa, Singapore visa processing time, Singapore visa application process, Singapore visa for Americans, Singapore visa for Europeans, Singapore visa for Singaporens, Singapore visa for Canadians, Singapore visa for Singaporens, Singapore visa for Chinese, Singapore visa for Africans, Singapore visa for Asians, Singapore visa for South Americans, Singapore visa for Middle Easterners, Singapore visa for UK citizens, Singapore visa for EU citizens, Singapore visa for Schengen area, Singapore visa for non-EU citizens, Singapore visa fees and charges"
        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Singapore
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Singapore is a small island nation located in Southeast Asia. It
              is known for its modern, thriving economy and its position as a
              major financial and trade hub in the region. Singapore is known
              for its clean and efficient public transportation system, its
              strict laws and lack of corruption, and its diverse population and
              culture. The city-state is also known for its impressive skyline
              and its many shopping and dining options. Additionally, Singapore
              is known for its commitment to conservation and the environment,
              with many parks and protected areas.
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
                Who can enter Singapore without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Singapore has a visa-free regime for certain countries, which
                means that citizens of these countries do not need a visa to
                enter Singapore for short stays of up to 30, 90, or 180 days,
                depending on their nationality.
                <br />
                <br />
                Citizens of the following countries can enter Singapore without
                a visa for stays of up to 30 days:
                <br />
                <br />
                <span className="font-bold">
                  Andorra, Argentina, Australia, Austria, Bahamas, Bahrain,
                  Belgium, Brazil, Brunei, Bulgaria, Canada, Chile, Cyprus,
                  Czech Republic, Denmark, Estonia, Finland, France, Germany,
                  Greece, Hong Kong, Hungary, Iceland, Indonesia, Ireland,
                  Israel, Italy, Japan, Korea (Republic of), Kuwait, Latvia,
                  Liechtenstein, Lithuania, Luxembourg, Macao (Special
                  Administrative Region of China), Malaysia, Malta, Mexico,
                  Monaco, Netherlands, New Zealand, Norway, Oman, Panama,
                  Poland, Portugal, Qatar, Romania, Russia, San Marino, Saudi
                  Arabia, Seychelles, Slovakia, Slovenia, South Africa, Spain,
                  Sweden, Switzerland, Taiwan, United Arab Emirates, United
                  Kingdom, United States of America, Uruguay.
                </span>
                <br />
                <br />
                Citizens of the following countries can enter Singapore without
                a visa for stays of up to 90 days:
                <br />
                <br />
                <span className="font-bold">
                  Albania, Bosnia and Herzegovina, Costa Rica, Kosovo,
                  Kyrgyzstan, Macedonia (Former Yugoslav Republic of),
                  Montenegro, Serbia, Turkmenistan, Ukraine.
                </span>
                <br />
                <br />
                Citizens of the following countries can enter Singapore without
                a visa for stays of up to 180 days:
                <br />
                <br />
                <span className="font-bold">
                  Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan, Sri
                  Lanka.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  If you are a citizen of a country that is not listed above and
                  you wish to enter Singapore, you will need to obtain a visa
                  before you can enter the country. There are several different
                  types of visas available for travel to Singapore, including
                  tourist visas, business visas, and work visas. You should
                  contact the Singapore embassy or consulate in your country for
                  more information on the specific requirements and process for
                  obtaining a visa to travel to Singapore.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Singapore Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                The specific documents that you will need to provide in order to
                apply for a visa to Singapore will depend on the type of visa
                you are applying for and the purpose of your visit. However,
                generally speaking, you will need to provide the following
                documents:
                <br />
                <br />
                ● A completed visa application form: You can complete the visa
                application form online or by downloading and printing the form.
                <br />
                <br />
                ● A valid passport: Your passport must be valid for at least six
                months beyond the date of your intended arrival in Singapore.
                <br />
                <br />
                ● Passport-sized photograph: You will need to provide a recent
                passport-sized photograph that meets the requirements for
                Singapore visa applications.
                <br />
                <br />
                ● Supporting documents: Depending on the type of visa you are
                applying for, you may need to provide additional supporting
                documents, such as a letter of invitation, proof of employment,
                proof of financial stability, and proof of academic
                qualifications.
                <br />
                <br />
                ● Fees: You will need to pay a visa processing fee in order to
                apply for a visa to Singapore. The fee will depend on the type
                of visa you are applying for and the length of your stay in the
                country.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  visa to travel to Singapore may vary depending on your country
                  of citizenship and the specific type of visa you are applying
                  for. You should contact the Singapore embassy or consulate in
                  your country for more information on the specific requirements
                  and process for obtaining a visa to travel to Singapore.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Singapore Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Singapore, you will need to follow the
                steps outlined below:
                <br />
                <br />
                ● Determine the type of visa you need: There are several types
                of visas available for travel to Singapore, including tourist
                visas, business visas, work visas, and student visas. You will
                need to determine the type of visa that is appropriate for your
                trip.
                <br />
                <br />
                ● Gather required documents: You will need to provide a variety
                of documents in order to apply for a visa to Singapore,
                including a completed visa application form, a valid passport,
                and a passport-sized photograph. Depending on the type of visa
                you are applying for, you may also need to provide additional
                supporting documents, such as a letter of invitation, proof of
                employment, proof of financial stability, and proof of academic
                qualifications.
                <br />
                <br />
                ● Submit the application: Once you have completed the visa
                application and gathered all of the required documents, you can
                submit the application either in person at a Singapore embassy
                or consulate, or through an authorized visa processing agency.
                <br />
                <br />● Wait for a decision: The processing time for a Singapore
                visa can vary, so you should plan ahead and allow enough time
                for your application to be processed.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  visa to travel to Singapore may vary depending on your country
                  of citizenship and the specific type of visa you are applying
                  for.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Singapore?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are permitted to stay in Singapore will
                depend on the type of visa you have obtained.
                <br />
                <br />
                If you have a <span className="font-bold">tourist visa</span>,
                you will generally be allowed to stay in Singapore for up to 30
                days. If you wish to stay longer, you will need to apply for an
                extension of stay.
                <br />
                <br />
                If you have a{" "}
                <span className="font-bold">&nbsp;business visa</span> or a{" "}
                <span className="font-bold">&nbsp;work visa</span>, you will
                generally be allowed to stay in Singapore for the length of your
                employment or for the duration of your business activities.
                <br />
                <br />
                If you have a <span className="font-bold">student visa</span>,
                you will generally be allowed to stay in Singapore for the
                duration of your studies.
                <br />
                <br />
                <span className="font-bold">
                  If you wish to stay in Singapore for a longer period of time
                  than the length of your initial visa allows, you may be able
                  to apply for an extension of your visa. You should contact the
                  Singapore embassy or consulate in your country for more
                  information on the specific requirements and process for
                  obtaining an extension of your visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Singapore?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Singapore is open to all travellers without quarantine, subject
                to pre-departure COVID-19 testing for travellers who are not
                fully vaccinated with COVID-19 vaccines.
                <br />
                <br />
                Depending on the destination you are travelling from,
                mask-wearing aboard flights and ferries to Singapore may not be
                required. Travellers are advised to check with the respective
                transport operator on the mask-wearing requirement prior to
                their trip.
                <br />
                <br />
                When you are in Singapore, please do your part by practising
                good personal hygiene, monitoring your own health, and following
                the appropriate safe management measures.
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
                A diplomatic passport is a special type of passport that is
                issued to diplomats and other government officials who are
                traveling abroad on official business. Diplomatic passports are
                issued by the government of the country that the diplomat
                represents and are typically valid for a period of five years.
                <br />
                <br />
                Holders of diplomatic passports are entitled to certain
                privileges and immunities while they are abroad, including
                immunity from arrest and detention, and exemption from
                immigration controls and customs duties.
                <br />
                <br />
                <span className="font-bold">
                  In Singapore, diplomatic passports are issued to Singaporean
                  diplomats and other government officials who are traveling
                  abroad on official business. Diplomatic passports are issued
                  by the Ministry of Foreign Affairs in Singapore.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Singapore?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes, if you want to work in Singapore, you will need to obtain a
                work visa. The process for obtaining a work visa in Singapore
                depends on the type of work you will be doing and the length of
                your stay in the country.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  worker visa in Singapore may vary depending on your country of
                  citizenship and the specific type of visa you are applying
                  for. You should contact the Singapore embassy or consulate in
                  your country for more information on the specific requirements
                  and process for obtaining a worker visa in Saudi Singapore.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Singapore Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Singapore, you will need to follow
                the steps outlined below:
                <br />
                <br />
                ● Determine the type of visa you need: There are several types
                of worker visas available for those who want to work in
                Singapore, including work visas, work holiday visas, and
                employment pass visas. You will need to determine the type of
                visa that is appropriate for your work and the length of your
                stay in the country.
                <br />
                <br />
                ● Gather required documents: You will need to provide a variety
                of documents in order to apply for a worker visa, including a
                valid passport, proof of employment, and proof of your academic
                and professional qualifications. You may also need to provide a
                police clearance certificate, a medical certificate, and other
                supporting documents, depending on the type of visa you are
                applying for.
                <br />
                <br />
                ● Submit the application: Once you have completed the visa
                application and gathered all of the required documents, you can
                submit the application either in person at a Singapore embassy
                or consulate, or through an authorized visa processing agency.
                <br />
                <br />
                ● Wait for a decision: The processing time for a worker visa in
                Singapore can vary, so you should plan ahead and allow enough
                time for your application to be processed.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  worker visa in Singapore may vary depending on your country of
                  citizenship and the specific type of visa you are applying
                  for. You should contact the Singapore embassy or consulate in
                  your country for more information on the specific requirements
                  and process for obtaining a worker visa in Saudi Singapore.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Singapore Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of work visas available for foreign
                workers in Singapore. The most common ones include:
                <br />
                <br />
                <span className="font-bold">Employment Pass (EP)</span>
                : This visa is for foreign professionals, managers, and
                executives who are planning to work in Singapore. To be
                eligible, you must have a job offer from a Singaporean employer
                and earn at least $5,000 per month.
                <br />
                <br />
                <span className="font-bold">S Pass</span>
                : This visa is for mid-level skilled workers who earn at least
                $2,300 per month and have relevant technical qualifications or
                skills.
                <br />
                <br />
                <span className="font-bold">Work Permit</span>
                : This visa is for foreign workers in low-skilled jobs, such as
                construction and manufacturing. To be eligible, you must have a
                job offer from a Singaporean employer.
                <br />
                <br />
                <span className="font-bold">
                  Training Employment Pass (TEP)
                </span>
                : This visa is for foreign trainees or interns who are in
                Singapore for training or attachment purposes. To be eligible,
                you must have a job offer from a Singaporean employer and be
                enrolled in a recognized training program.
                <br />
                <br />
                <span className="font-bold">Entrepreneur Pass</span>
                : This visa is for foreign entrepreneurs who are planning to
                start a business in Singapore. To be eligible, you must have a
                business plan and a minimum of $50,000 in paid-up capital.
                <br />
                <br />
                <span className="font-bold">
                  Personalized Employment Pass (PEP)
                </span>
                : This is a special type of employment pass that allows
                high-skilled professionals to work in Singapore without having a
                specific job offer. To be eligible, you must have at least
                $18,000 in fixed monthly salary and a successful track record in
                your field.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements and
                  restrictions that apply to each type of worker visa may vary
                  depending on your country of citizenship and the specific type
                  of work you will be doing in Singapore. You should contact the
                  Singapore embassy or consulate in your country for more
                  information on the specific requirements and restrictions that
                  apply to each type of worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Singapore Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The documents you will need for a Singapore work visa depend on
                the type of visa you are applying for. Some of the common
                documents you may need to provide include:
                <br />
                <br />
                ● Passport: You will need to provide a copy of the biographical
                page of your passport, which shows your name, photograph, and
                passport number. Your passport must also have at least 6 months
                of validity remaining.
                <br />
                <br />
                ● Educational and Professional Qualifications: You will need to
                provide copies of your educational certificates and transcripts,
                as well as any professional licenses or certificates that are
                relevant to your job.
                <br />
                <br />
                ● Employment Offer Letter: If you have a job offer from a
                Singaporean employer, you will need to provide a copy of the
                employment offer letter, which should include details about your
                job title, salary, and terms of employment.
                <br />
                <br />
                ● Resume or Curriculum Vitae (CV): You will need to provide a
                copy of your resume or CV, which should include details about
                your work experience, education, and skills.
                <br />
                <br />
                ● Medical Examination Report: You may need to undergo a medical
                examination and provide a copy of the medical report as part of
                the visa application process.
                <br />
                <br />
                ● Passport-Sized Photographs: You will need to provide two
                recent passport-sized photographs of yourself.
                <br />
                <br />● Proof of Financial Support: You may need to provide
                proof that you have sufficient funds to support yourself while
                you are in Singapore. This could include bank statements, pay
                stubs, or other financial documents.
                <br />
                <br />
                ● Other Supporting Documents: Depending on the specific
                requirements of your visa, you may need to provide other
                supporting documents, such as a business plan, proof of paid-up
                capital, or a training plan.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  worker visa in Singapore may vary depending on your country of
                  citizenship and the specific type of visa you are applying
                  for. You should contact the Singapore embassy or consulate in
                  your country for more information on the specific requirements
                  and process for obtaining a worker visa in Saudi Singapore.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Singapore?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa in Singapore, you will need to submit
                your application to the Ministry of Manpower (MOM). The MOM is
                responsible for managing the country's foreign workforce and
                issuing work visas to foreign workers.
                <br />
                <br />
                You can apply for a work visa online through the MOM's e-Service
                Portal, or you can submit a paper application by mail or in
                person.
                <br />
                <br />
                If you are applying online, you will need to create an account
                on the e-Service Portal and follow the instructions to complete
                the application process. You will need to upload electronic
                copies of the required documents, and you may also need to pay a
                fee to process your application.
                <br />
                <br />
                If you are submitting a paper application, you will need to fill
                out the appropriate application form and gather all the required
                documents. You can then mail the completed application and
                documents to the MOM's Work Pass Division or bring them in
                person to the MOM Service Centre.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the processing time for work visa
                  applications can vary depending on the type of visa you are
                  applying for and the volume of applications being processed.
                  You should allow sufficient time for your application to be
                  processed and approved before your intended date of travel to
                  Singapore.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Singapore?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes, you will need a student visa to study in Singapore.
                <br />
                <br />
                To apply for a student visa, you must first be accepted into a
                full-time course at a recognized educational institution in
                Singapore. You will then need to apply for a Student's Pass from
                the Ministry of Education (MOE) or the Immigration and
                Checkpoints Authority (ICA).
                <br />
                <br />
                <span className="font-bold">
                  Once you have gathered all the required documents, you can
                  apply for a Student's Pass online through the ICA's e-Service
                  Portal or by submitting a paper application to the ICA. The
                  processing time for student visa applications can vary, so it
                  is important to allow sufficient time for your application to
                  be processed and approved before your intended date of travel
                  to Singapore.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Singapore Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Singapore, you must first be
                accepted into a full-time course at a recognized educational
                institution in Singapore. You will then need to apply for a
                Student's Pass from the Ministry of Education (MOE) or the
                Immigration and Checkpoints Authority (ICA).
                <br />
                <br />
                Here are the steps to apply for a student visa in Singapore:
                <br />
                <br />
                ● Acceptance into a full-time course: To be eligible for a
                student visa, you must be accepted into a full-time course at a
                recognized educational institution in Singapore. You will need
                to provide proof of acceptance, such as an acceptance letter
                from the institution, as part of your visa application.
                <br />
                <br />
                ● Gather required documents: You will need to provide a variety
                of documents in order to apply for a student visa, including a
                valid passport, copies of your educational certificates, and
                proof of acceptance to a Singapore educational institution.
                <br />
                <br />
                ● Apply online or by mail: Once you have gathered all the
                required documents, you can apply for a Student's Pass online
                through the ICA's e-Service Portal or by submitting a paper
                application to the ICA.
                <br />
                <br />
                ● Wait for approval: The processing time for student visa
                applications can vary, so it is important to allow sufficient
                time for your application to be processed and approved before
                your intended date of travel to Singapore.
                <br />
                <br />
                ● Collect your Student's Pass: If your application is approved,
                you will receive an In-Principle Approval (IPA) letter from the
                ICA. You will need to bring this letter, along with your
                passport and other required documents, to the ICA to collect
                your Student's Pass.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  student visa in Singapore may vary depending on your country
                  of citizenship and the specific type of visa you are applying
                  for. You should contact the Singapore embassy or consulate in
                  your country for more information on the specific requirements
                  and process for obtaining a student visa in Saudi Singapore.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Singapore Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a student visa in Singapore, you must meet
                the following requirements:
                <br />
                <br />
                ● Acceptance into a full-time course: You must be accepted into
                a full-time course at a recognized educational institution in
                Singapore.
                <br />
                <br />
                ● Passport: You must have a valid passport with at least 6
                months of validity remaining.
                <br />
                <br />
                ● Financial support: You must have sufficient funds to support
                yourself while you are studying in Singapore. This could include
                personal savings, sponsorships, or other financial resources.
                <br />
                <br />
                ● Medical examination: You may need to undergo a medical
                examination and provide a copy of the medical report as part of
                the visa application process.
                <br />
                <br />
                ● Other requirements: Depending on the specific requirements of
                your visa, you may need to provide other supporting documents,
                such as a letter of guarantee from your sponsor or proof of
                accommodation in Singapore.
                <br />
                <br />
                To apply for a student visa, you will also need to gather the
                following documents:
                <br />
                <br />
                ● Passport: You will need to provide a copy of the biographical
                page of your passport, which shows your name, photograph, and
                passport number. Your passport must also have at least 6 months
                of validity remaining.
                <br />
                <br />
                ● Acceptance Letter: You will need to provide a copy of your
                acceptance letter from the educational institution in Singapore.
                <br />
                <br />
                ● Educational Qualifications: You will need to provide copies of
                your educational certificates and transcripts, as well as any
                other relevant documents, such as a TOEFL or IELTS score report.
                <br />
                <br />
                ● Passport-Sized Photographs: You will need to provide two
                recent passport-sized photographs of yourself.
                <br />
                <br />
                ● Financial Documentation: You will need to provide proof that
                you have sufficient funds to support yourself while you are
                studying in Singapore. This could include bank statements,
                sponsorships, or other financial documents.
                <br />
                <br />
                ● Medical Examination Report: You may need to undergo a medical
                examination and provide a copy of the medical report as part of
                the visa application process.
                <br />
                <br />
                ● Other Supporting Documents: Depending on the specific
                requirements of your visa, you may need to provide other
                supporting documents, such as a letter of guarantee from your
                sponsor or proof of accommodation in Singapore.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  student visa in Singapore may vary depending on your country
                  of citizenship and the specific type of visa you are applying
                  for. You should contact the Singapore embassy or consulate in
                  your country for more information on the specific requirements
                  and process for obtaining a student visa in Saudi Singapore.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Singapore Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity of a student visa in Singapore depends on the
                length of your course of study.
                <br />
                <br />
                If you are accepted into a full-time course that is shorter than
                6 months, your student visa will be valid for the duration of
                your course. If your course is longer than 6 months, your
                student visa will typically be valid for the duration of your
                course, plus an additional 6 months.
                <br />
                <br />
                There is no fee to apply for a student visa in Singapore.
                However, you may need to pay a fee to your educational
                institution for tuition and other fees.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that a student visa does not allow you
                  to work in Singapore. If you want to work while you are
                  studying, you will need to apply for a work permit in addition
                  to your student visa. Work permits are generally only
                  available for part-time work, and you will need to meet
                  certain eligibility requirements to qualify.
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

export default Singapore;
