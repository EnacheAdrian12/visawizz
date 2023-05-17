import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Belize = () => {
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
      "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]  -translate-y-6"
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
      "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]  -translate-y-6"
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
      "bg-[#1e2e6e] mt-[2.25rem] mb-[2.25rem] w-[25rem] text-white uppercase py-[1rem] px-[5rem] font-bold rounded-[3rem] text-[1.8rem] hover:scale-[1.15] hover:bg-[#233783] md:my-[2.5rem] lg:bg-[#1e2e6e] lg:mt-[2.75rem] lg:mb-[2.75rem] lg:w-[30rem] lg:text-white lg:uppercase lg:py-[1.4rem] lg:px-[6rem] lg:font-bold lg:rounded-[3rem] lg:text-[2rem] lg:hover:scale-[1.1] lg:hover:bg-[#233783]  -translate-y-6"
    );
  };
  return (
    <>
      <Helmet>
        <title>Belize</title>
        <meta name="description" content="Belize" />
        <meta
          name="keywords"
          content="Belize travel visa, Belize work visa, Belize study visa, How to apply for an Belize visa, Belize visa requirements, Belize tourist visa, Belize student visa, Belize business visa, Belize visa processing time, Belize visa application process, Belize visa for Americans, Belize visa for Europeans, Belize visa for Belizens, Belize visa for Canadians, Belize visa for Indians, Belize visa for Chinese, Belize visa for Africans, Belize visa for Asians, Belize visa for South Americans, Belize visa for Middle Easterners, Belize visa for UK citizens, Belize visa for EU citizens, Belize visa for Schengen area, Belize visa for non-EU citizens, Belize visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Belize
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Belize is a small country located on the eastern coast of Central
              America. It is well known for its natural beauty and its diverse
              ecosystem, which includes a number of protected areas such as
              national parks and wildlife reserves. Belize is also known for its
              rich cultural heritage, which is influenced by its indigenous
              Mayan history as well as its African and Caribbean roots. Some
              other things that Belize is known for include its vibrant coral
              reefs, which are popular among scuba divers, and its many
              adventure activities, such as cave tubing and zip lining.
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
                Who can enter Belize without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of the following countries are allowed to enter Belize
                without a visa for up to 30 days: Antigua and Barbuda,
                Australia, Bahamas, Barbados, Belize, Bermuda, Canada, Costa
                Rica, Dominica, El Salvador, Grenada, Guatemala, Guyana,
                Honduras, Ireland, Jamaica, Kiribati, Mexico, Micronesia, New
                Zealand, Nicaragua, Palau, Panama, Saint Kitts and Nevis, Saint
                Lucia, Saint Vincent and the Grenadines, Samoa, Singapore,
                Solomon, Islands, Tonga, Trinidad and Tobago, Tuvalu, United
                Kingdom, United States, Vanuatu. <br /> <br /> In addition,
                citizens of the following countries do not need a visa for stays
                of up to 90 days: Austria, Belgium, Czech Republic, Denmark,
                Finland, France, Germany, Greece, Iceland, Italy, Liechtenstein,
                Luxembourg, Netherlands, Norway, Poland, Portugal, Slovak,
                Republic, Slovenia, Spain, Sweden, Switzerland. <br /> <br />{" "}
                Holders of diplomatic and service passports of the following
                countries do not need a visa to enter Belize: China, India,
                Iran, Iraq, Kuwait, Lebanon, Palestine, Peru, Syria. <br />{" "}
                <br />
                <span className="font-bold">
                  Note that these lists are subject to change and it is always a
                  good idea to check the latest visa requirements with the
                  Embassy of Belize before traveling. It is also important to
                  note that even if you are eligible to enter Belize without a
                  visa, you may still need to meet certain entry requirements
                  such as having a valid passport and proof of sufficient funds
                  to support your stay in the country.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Belize Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Belize, you will need to submit the
                following documents:
                <br /> <br />● A completed visa application form: You can
                download the form from the Embassy of Belize's website or obtain
                it from the embassy in person. Make sure to fill out the form
                carefully and accurately.
                <br /> <br />● Passport: You will need to submit your passport,
                which must be valid for at least six months beyond your intended
                stay in Belize. Your passport should also have at least two
                blank pages for the visa and entry stamps.
                <br /> <br />● Passport-sized photographs: You will need to
                submit two recent passport-sized photographs, taken within the
                past six months.
                <br /> <br />● Proof of sufficient funds: You will need to show
                that you have sufficient funds to support your stay in Belize.
                This can be in the form of bank statements, credit card
                statements, or a letter from your employer stating that you will
                be financially supported during your stay.
                <br /> <br />● Proof of travel arrangements: You will need to
                provide proof of your travel arrangements, such as a round-trip
                ticket or a confirmed reservation for a tour or hotel.
                <br /> <br />● A letter of invitation: If you are being invited
                by a person or organization in Belize, you may be required to
                provide a letter of invitation from them.
                <br /> <br />● Other documents: Depending on the purpose of your
                visit and the type of visa you are applying for, you may need to
                submit additional documents. For example, if you are applying
                for a business visa, you may need to provide a letter from your
                employer or a copy of your business license.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Belize Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Belize, you will need to follow the steps
                below:
                <br /> <br />● Determine the type of visa you need: There are
                several types of visas available for Belize, including tourist
                visas, business visas, and student visas. Determine which type
                of visa is appropriate for your purpose of travel and the length
                of your stay.
                <br /> <br />● Collect the required documents: Gather all of the
                documents required for your visa application, including a
                completed visa application form, passport, passport-sized
                photographs, proof of sufficient funds, proof of travel
                arrangements, and any other documents required for your specific
                visa type.
                <br /> <br />● Contact the Embassy of Belize: Contact the
                Embassy of Belize in your country of residence to find out where
                and how to submit your visa application. Some embassies may
                allow you to submit your application in person, while others may
                require you to send your application by mail.
                <br /> <br />● Submit your application: Submit your completed
                application, along with all required documents, to the embassy
                or consulate where you are applying. You may be required to pay
                a visa fee at this time.
                <br /> <br />● Wait for a decision: The embassy or consulate
                will review your application and make a decision on your visa.
                This process can take several weeks, so it is important to apply
                well in advance of your intended travel date.
                <br /> <br />● If your visa is approved: If your visa is
                approved, the embassy or consulate will issue you a visa, which
                you will need to present when you enter Belize. Make sure to
                keep a copy of your visa for your own records.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Belize ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are allowed to stay in Belize depends on
                the type of visa you have and the purpose of your visit. Here
                are some general guidelines:
                <br /> <br />● <span className="font-bold">Tourist visas</span>:
                Tourist visas are typically issued for stays of up to 30 days.
                If you wish to stay longer, you may be able to apply for an
                extension of your stay at the Belize Immigration and Nationality
                Department.
                <br /> <br />● <span className="font-bold">Business visas</span>
                : Business visas are typically issued for stays of up to 30
                days, although longer stays may be possible in some cases. If
                you wish to stay longer, you will need to apply for an extension
                of your stay at the Belize Immigration and Nationality
                Department.
                <br /> <br />● <span className="font-bold">Student visas</span>:
                If you are coming to Belize to study, you will need to obtain a
                student visa. Student visas are typically issued for the
                duration of your study program, up to a maximum of one year. If
                you wish to stay longer, you will need to apply for an extension
                of your stay at the Belize Immigration and Nationality
                Department.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Belize ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Effective July 12, 2022, travellers are no longer required to
                show proof of vaccination for entry into Belize's airport, land
                borders or sea ports. Unvaccinated travellers are no longer
                required to show proof of a negative PCR or a negative Antigen
                Rapid test upon arrival.
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
                A diplomatic passport is a special type of passport that is
                issued to individuals who are traveling abroad on official
                government business. In Belize, diplomatic passports are issued
                to diplomats, government officials, and other individuals who
                are representing the government of Belize overseas. <br />{" "}
                <br /> Holders of diplomatic passports are entitled to certain
                privileges and immunities while traveling abroad, as provided
                for under international law. For example, they may be exempt
                from visa requirements and may be entitled to diplomatic
                immunity in certain cases. <br /> <br /> To qualify for a
                diplomatic passport in Belize, you must be a Belizean citizen
                and have been appointed to an official government position that
                requires you to travel abroad on official business. You will
                need to apply for a diplomatic passport through the Ministry of
                Foreign Affairs of Belize. <br /> <br />
                <span className="font-bold">
                  It is important to note that diplomatic passports are not
                  meant for personal travel and should only be used for official
                  government business. Misuse of a diplomatic passport can
                  result in the revocation of the passport and other
                  consequences!
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Belize?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes, if you want to work in Belize, you will need to obtain a
                worker visa. The type of worker visa you will need will depend
                on the nature of your work and the length of your stay.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Belize Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Belize, you will need to follow
                the steps below:
                <br /> <br />● Determine if you are eligible for a worker visa:
                In order to be eligible for a worker visa in Belize, you must
                have a job offer from a Belizean employer. You must also meet
                the requirements for the specific type of work you will be
                doing, such as having the necessary qualifications or training.
                <br /> <br />
                ● Collect the required documents: Gather all of the documents
                required for your worker visa application, including a completed
                visa application form, passport, passport-sized photographs,
                proof of sufficient funds, and a letter of employment from your
                Belizean employer.
                <br /> <br />● Contact the Embassy of Belize: Contact the
                Embassy of Belize in your country of residence to find out where
                and how to submit your worker visa application. Some embassies
                may allow you to submit your application in person, while others
                may require you to send your application by mail.
                <br /> <br />● Submit your application: Submit your completed
                application, along with all required documents, to the embassy
                or consulate where you are applying. You may be required to pay
                a visa fee at this time.
                <br /> <br />● Wait for a decision: The embassy or consulate
                will review your application and make a decision on your worker
                visa. This process can take several weeks, so it is important to
                apply well in advance of your intended travel date.
                <br /> <br />● If your worker visa is approved: If your worker
                visa is approved, the embassy or consulate will issue you a
                visa, which you will need to present when you enter Belize. Make
                sure to keep a copy of your worker visa for your own records.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Belize Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of visas that are available to foreign
                workers who wish to work in Belize. These include:
                <br /> <br />●{" "}
                <span className="font-bold">Temporary Work Permit</span>: This
                type of visa is typically issued for short-term employment, such
                as a project or contract position. It is valid for up to one
                year and may be renewed if necessary.
                <br /> <br />●{" "}
                <span className="font-bold">Permanent Residence Visa</span>:
                This type of visa allows foreign workers to live and work in
                Belize on a permanent basis. It may be granted to individuals
                who have been offered a permanent job in Belize, or who have
                established a business in the country.
                <br /> <br />● <span className="font-bold">Business Visa</span>:
                This type of visa is available to individuals who wish to
                conduct business in Belize, but do not plan to work or reside in
                the country on a permanent basis.
                <br /> <br />● <span className="font-bold">Investor Visa</span>:
                This type of visa is available to individuals who wish to invest
                a significant amount of money in a business venture in Belize.
                It allows the investor to live and work in the country while
                managing their investment.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Belize Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Belize, you will need to submit
                the following documents:
                <br /> <br />● A completed visa application form: You can
                download the form from the Embassy of Belize's website or obtain
                it from the embassy in person. Make sure to fill out the form
                carefully and accurately.
                <br /> <br />● Passport: You will need to submit your passport,
                which must be valid for at least six months beyond your intended
                stay in Belize. Your passport should also have at least two
                blank pages for the visa and entry stamps.
                <br /> <br />● Passport-sized photographs: You will need to
                submit two recent passport-sized photographs, taken within the
                past six months.
                <br /> <br />● Proof of sufficient funds: You will need to show
                that you have sufficient funds to support your stay in Belize.
                This can be in the form of bank statements, credit card
                statements, or a letter from your employer stating that you will
                be financially supported during your stay.
                <br /> <br />● Proof of employment: You will need to provide a
                letter of employment from your Belizean employer, stating that
                you have been offered a job and the details of your employment
                arrangement.
                <br /> <br />● Other documents: Depending on the type of work
                you will be doing and the specific requirements of your worker
                visa, you may need to submit additional documents. For example,
                if you are applying for a worker visa to work in a specific
                profession, you may need to provide proof of your qualifications
                or training.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Belize ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Belize, you will need to submit
                your application to the Embassy of Belize in your country of
                residence. You can find the nearest embassy by checking the
                Ministry of Foreign Affairs of Belize's website or contacting
                the embassy directly.
                <br /> <br /> You should apply for your worker visa well in
                advance of your intended travel date, as the visa application
                process can take several weeks. It is a good idea to start the
                process as soon as you have received a job offer from a Belizean
                employer and have gathered all of the required documents.
                <br /> <br /> When you submit your worker visa application, you
                will need to pay a visa fee. The amount of the fee may vary
                depending on your country of origin and the embassy or consulate
                where you are applying.
                <br /> <br /> It is important to note that worker visas are
                typically issued for a specific period of time and are tied to a
                specific employer. If you wish to change employers or extend
                your stay in Belize, you will need to apply for a new worker
                visa.
                <br /> <br />
                <span className="font-bold">
                  It is always a good idea to check the specific worker visa
                  application process and requirements with the Embassy of
                  Belize before submitting your application.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Belize ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes, if you are planning to study in Belize, you will need to
                obtain a student visa. A student visa allows you to stay in
                Belize for the duration of your study program, up to a maximum
                of one year.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Belize student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Belize, you will need to follow
                the steps below:
                <br /> <br />● Determine if you are eligible for a student visa:
                To be eligible for a student visa in Belize, you must have been
                accepted to a recognized educational institution in Belize and
                have the necessary funds to support your studies and stay in the
                country.
                <br /> <br />● Collect the required documents: Gather all of the
                documents required for your student visa application, including
                a completed visa application form, passport, passport-sized
                photographs, proof of sufficient funds, and a letter of
                acceptance from your educational institution in Belize.
                <br /> <br />● Contact the Embassy of Belize: Contact the
                Embassy of Belize in your country of residence to find out where
                and how to submit your student visa application. Some embassies
                may allow you to submit your application in person, while others
                may require you to send your application by mail.
                <br /> <br />● Submit your application: Submit your completed
                application, along with all required documents, to the embassy
                or consulate where you are applying. You may be required to pay
                a visa fee at this time.
                <br /> <br />● Wait for a decision: The embassy or consulate
                will review your application and make a decision on your student
                visa. This process can take several weeks, so it is important to
                apply well in advance of your intended travel date.
                <br /> <br />● If your student visa is approved: If your student
                visa is approved, the embassy or consulate will issue you a
                visa, which you will need to present when you enter Belize. Make
                sure to keep a copy of your student visa for your own records.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Belize student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Belize, you will need to submit
                the following documents:
                <br /> <br />● A completed visa application form: You can
                download the form from the Embassy of Belize's website or obtain
                it from the embassy in person. Make sure to fill out the form
                carefully and accurately.
                <br /> <br />● Passport: You will need to submit your passport,
                which must be valid for at least six months beyond your intended
                stay in Belize. Your passport should also have at least two
                blank pages for the visa and entry stamps.
                <br /> <br />● Passport-sized photographs: You will need to
                submit two recent passport-sized photographs, taken within the
                past six months.
                <br /> <br />● Proof of sufficient funds: You will need to show
                that you have sufficient funds to support your studies and stay
                in Belize. This can be in the form of bank statements, credit
                card statements, or a letter from your sponsor stating that you
                will be financially supported during your stay.
                <br /> <br />● Letter of acceptance: You will need to provide a
                letter of acceptance from your educational institution in
                Belize, stating that you have been accepted to a program of
                study and the details of your program.
                <br /> <br />● Other documents: Depending on your country of
                origin and the specific requirements of your student visa, you
                may need to submit additional documents. For example, you may
                need to provide proof of your academic qualifications or
                transcripts.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Belize student Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Belize will depend
                on your country of origin and the embassy or consulate where you
                are applying. You can check the specific visa fees and validity
                periods with the Embassy of Belize or on the embassy's website.
                <br /> <br />
                In general, student visas in Belize are typically issued for the
                duration of your study program, up to a maximum of one year. If
                you wish to stay longer, you will need to apply for an extension
                of your stay at the Belize Immigration and Nationality
                Department.
                <br /> <br /> The visa fee for a student visa in Belize may vary
                depending on your country of origin and the embassy or consulate
                where you are applying. You may be required to pay the visa fee
                when you submit your student visa application.
                <br /> <br /> It is important to note that student visas are
                typically issued for a specific period of time and are tied to a
                specific educational institution. If you wish to change
                educational institutions or extend your stay in Belize, you will
                need to apply for a new student visa.
                <br /> <br />
                <span className="font-bold">
                  It is always a good idea to check the specific student visa
                  fees and validity periods with the Embassy of Belize before
                  applying for a student visa.
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

export default Belize;
