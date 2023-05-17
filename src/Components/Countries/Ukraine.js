import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Ukraine = () => {
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
        <title>Ukraine</title>
        <meta name="description" content="San Marino" />
        <meta
          name="keywords"
          content="Ukraine travel visa, Ukraine work visa, Ukraine study visa, How to apply for an Ukraine visa, Ukraine visa requirements, Ukraine tourist visa, Ukraine student visa, Ukraine business visa, Ukraine visa processing time, Ukraine visa application process, Ukraine visa for Americans, Ukraine visa for Europeans, Ukraine visa for Sudanns, Ukraine visa for Canadians, Ukraine visa for Sudanns, Ukraine visa for Chinese, Ukraine visa for Africans, Ukraine visa for Asians, Ukraine visa for South Americans, Ukraine visa for Middle Easterners, Ukraine visa for UK citizens, Ukraine visa for EU citizens, Ukraine visa for Schengen area, Ukraine visa for non-EU citizens, Ukraine visa fees and charges"
      
        />
      </Helmet>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Ukraine
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Ukraine is a country located in Eastern Europe that is known for
              its rich cultural heritage, natural beauty, and contributions to
              science and technology. It is home to the Chernobyl Exclusion
              Zone, which was created after the 1986 Chernobyl nuclear disaster
              and is now a popular tourist destination. Ukraine is also known
              for its fertile soil and abundant natural resources, which make it
              a major producer of grain and other agricultural products. It has
              a long tradition of scientific research and innovation, and it has
              made significant contributions to fields such as nuclear physics,
              rocket science, and computer science. Ukrainian culture is also
              rich in folk music and dance traditions, characterized by
              fast-paced rhythms and intricate melodies, as well as energetic
              and expressive dance movements. Finally, Ukraine is home to the
              largest concentration of castles in Europe, with more than 100
              castles and fortresses scattered throughout the country.
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
                Who can enter Ukraine without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                As of 2021, citizens of certain countries are able to enter
                Ukraine without a visa for short stays (90 days or less). These
                countries include:
                <br />
                <br />
                <span className="font-bold">
                  All EU and EFTA countries, Albania, Andorra, Antigua and
                  Barbuda, Argentina, Australia, Bahamas, Barbados, Bosnia and
                  Herzegovina, Brazil, Brunei, Canada, Chile, Colombia, Costa
                  Rica, Dominica, Georgia, Grenada, Guatemala, Holy See,
                  Honduras, Israel, Japan, Kosovo, Macedonia, Malaysia,
                  Mauritius, Mexico, Moldova, Montenegro, New Zealand,
                  Nicaragua, Panama, Paraguay, Peru, Saint Kitts and Nevis,
                  Saint Lucia, Saint Vincent and the Grenadines, Serbia,
                  Seychelles, Singapore, South Korea, Taiwan, Timor-Leste,
                  Trinidad and Tobago, United Arab Emirates, United States,
                  Uruguay, Venezuela.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  Please note that this list is subject to change, and it is
                  always best to check the latest visa requirements before
                  traveling to Ukraine.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Ukraine Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                If you are a citizen of a country that requires a visa to enter
                Ukraine, you will need to apply for a Ukrainian visa at a
                Ukrainian embassy or consulate in your country of residence.
                <br />
                <br />
                To apply for a Ukrainian visa, you will need to provide the
                following documents:
                <br />
                <br />
                ● A valid passport: Your passport must be valid for at least 6
                months beyond the date of your intended stay in Ukraine, and it
                must have at least two blank pages for visa stamps.
                <br />
                <br />
                ● A completed visa application form: You can download the visa
                application form from the website of the Ukrainian embassy or
                consulate where you will be applying.
                <br />
                <br />
                ● Passport-size photographs: You will need to provide two recent
                passport-size photographs.
                <br />
                <br />
                ● Evidence of travel arrangements: You will need to provide
                evidence of your travel arrangements, such as a round-trip
                airline ticket or a letter of invitation from a host in Ukraine.
                <br />
                <br />
                ● Evidence of sufficient funds: You will need to provide
                evidence that you have sufficient funds to support yourself
                during your stay in Ukraine. This may include bank statements,
                credit card statements, or a letter from your employer stating
                that you will be financially supported during your trip.
                <br />
                <br />
                ● Health insurance: You will need to provide proof of health
                insurance that covers you while you are in Ukraine.
                <br />
                <br />
                ● Payment of the visa fee: You will need to pay the visa fee at
                the time of your application. The visa fee varies depending on
                the type of visa you are applying for and the embassy or
                consulate where you are applying.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are the general requirements for a
                  Ukrainian visa. The specific documents that you need to
                  provide may vary depending on the type of visa you are
                  applying for and the embassy or consulate where you are
                  applying. It is always best to check the latest visa
                  requirements with the Ukrainian embassy or consulate where you
                  will be applying.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Ukraine Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a Ukrainian visa, you will need to follow these
                steps:
                <br />
                <br />
                ● Check the visa requirements: Before you begin the visa
                application process, it is important to check the visa
                requirements for your specific situation. This will help you to
                determine what type of visa you need, as well as what documents
                you will need to provide.
                <br />
                <br />
                ● Choose the type of visa you need: Ukraine offers several
                different types of visas, including tourist visas, business
                visas, work visas, and student visas. You will need to choose
                the type of visa that is appropriate for your purpose of travel.
                <br />
                <br />
                ● Gather the required documents: Once you know what type of visa
                you need and what documents you will need to provide, you can
                begin gathering the necessary documents. This may include your
                passport, photographs, proof of travel arrangements, proof of
                sufficient funds, and health insurance.
                <br />
                <br />● Complete the visa application form: You can download the
                visa application form from the website of the Ukrainian embassy
                or consulate where you will be applying. Carefully complete the
                form, making sure to provide all of the required information.
                <br />
                <br />
                ● Schedule an appointment: Contact the Ukrainian embassy or
                consulate to schedule an appointment to submit your visa
                application.
                <br />
                <br />
                ● Submit your application: On the day of your appointment, bring
                your completed application form and all of the required
                documents to the embassy or consulate. You will also need to pay
                the visa fee at this time.
                <br />
                <br />
                ● Wait for a decision: After you have submitted your
                application, you will need to wait for a decision to be made on
                your visa. This process can take several weeks, so it is
                important to plan ahead and apply for your visa well in advance
                of your planned travel date.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are the general steps for applying for
                  a Ukrainian visa. The specific process may vary depending on
                  the embassy or consulate where you are applying. It is always
                  best to check the latest visa requirements with the Ukrainian
                  embassy or consulate where you will be applying.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Ukraine?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you are permitted to stay in Ukraine
                depends on the type of visa you have and the purpose of your
                visit.
                <br />
                <br />
                If you are a citizen of a country that is able to enter Ukraine
                without a visa for short stays, you can stay in Ukraine for up
                to 90 days within a 180-day period.
                <br />
                <br />
                If you have a Ukrainian visa, the length of your stay will be
                determined by the type of visa you have. Tourist visas and
                business visas are typically valid for stays of up to 90 days,
                while work visas and student visas are typically valid for
                longer stays. The exact length of time that you are permitted to
                stay will be indicated on your visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that overstaying your visa or
                  remaining in Ukraine beyond the permitted length of time can
                  result in serious consequences, including fines and potential
                  deportation. It is important to adhere to the terms of your
                  visa and to leave Ukraine before your visa expires.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Ukraine?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                -
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
                issued to individuals who are representing their country in an
                official capacity, such as diplomats, officials, and other
                high-ranking government representatives. Diplomatic passports
                are issued by the government of the individual's country of
                citizenship, and they are typically valid for a period of five
                years.
                <br />
                <br />
                Holders of diplomatic passports are entitled to certain
                privileges and immunities while traveling abroad, including
                immunity from arrest and detention, and exemption from customs
                duties and taxes. Diplomatic passports also allow their holders
                to enter and exit countries more easily, and to receive
                assistance from other countries in the event of an emergency.
                <br />
                <br />
                <span className="font-bold">
                  In Ukraine, diplomatic passports are issued by the Ministry of
                  Foreign Affairs to Ukrainian citizens who are serving as
                  diplomats, officials, or other representatives of the
                  Ukrainian government abroad. Diplomatic passports issued by
                  Ukraine are valid for a period of five years, and they are
                  recognized by other countries as official travel documents.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Ukraine?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                It depends on the type of work you will be doing in Ukraine and
                your citizenship.
                <br />
                <br />
                If you are a citizen of a country that is able to enter Ukraine
                without a visa for short stays (90 days or less), you may be
                able to work in Ukraine without a worker visa as long as you do
                not exceed the permitted length of stay. However, if you will be
                working in Ukraine for a longer period of time, or if you are a
                citizen of a country that requires a visa to enter Ukraine, you
                will need to obtain a worker visa.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are the general requirements for a
                  Ukrainian worker visa. The specific documents that you need to
                  provide may vary depending on the type of visa you are
                  applying for and the embassy or consulate where you are
                  applying. It is always best to check the latest visa
                  requirements with the Ukrainian embassy or consulate where you
                  will be applying.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Ukraine Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Ukrainian worker visa, you will need to follow
                these steps:
                <br />
                <br />
                ● Check the visa requirements: Before you begin the visa
                application process, it is important to check the visa
                requirements for your specific situation. This will help you to
                determine what type of visa you need, as well as what documents
                you will need to provide.
                <br />
                <br />
                ● Choose the type of visa you need: Ukraine offers several
                different types of worker visas, including temporary worker
                visas, permanent worker visas, and student worker visas. You
                will need to choose the type of visa that is appropriate for
                your purpose of travel.
                <br />
                <br />
                ● Gather the required documents: Once you know what type of visa
                you need and what documents you will need to provide, you can
                begin gathering the necessary documents. This may include your
                passport, photographs, a letter of invitation from your employer
                in Ukraine, evidence of sufficient funds, and health insurance.
                <br />
                <br />
                ● Complete the visa application form: You can download the visa
                application form from the website of the Ukrainian embassy or
                consulate where you will be applying. Carefully complete the
                form, making sure to provide all of the required information.
                <br />
                <br />
                ● Schedule an appointment: Contact the Ukrainian embassy or
                consulate to schedule an appointment to submit your visa
                application.
                <br />
                <br />
                ● Submit your application: On the day of your appointment, bring
                your completed application form and all of the required
                documents to the embassy or consulate. You will also need to pay
                the visa fee at this time.
                <br />
                <br />
                ● Wait for a decision: After you have submitted your
                application, you will need to wait for a decision to be made on
                your visa. This process can take several weeks, so it is
                important to plan ahead and apply for your visa well in advance
                of your planned travel date.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are the general steps for applying for
                  a Ukrainian worker visa. The specific process may vary
                  depending on the embassy or consulate where you are applying.
                  It is always best to check the latest visa requirements with
                  the Ukrainian embassy or consulate where you will be applying.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Ukraine Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Ukraine offers several different types of worker visas,
                including:
                <br />
                <br />
                <span className="font-bold">Temporary worker visas</span>
                : These visas are issued to individuals who will be working in
                Ukraine for a specific period of time, typically up to one year.
                Temporary worker visas may be issued for a variety of purposes,
                including work, study, training, and cultural exchange.
                <br />
                <br />
                <span className="font-bold">Permanent worker visas</span>
                : These visas are issued to individuals who will be working in
                Ukraine on a permanent basis. Permanent worker visas may be
                issued to employees of international companies, highly skilled
                workers, and individuals with specialized expertise.
                <br />
                <br />
                <span className="font-bold">Student worker visas</span>: These
                visas are issued to students who will be working in Ukraine
                while studying. Student worker visas may be issued to full-time
                students who are enrolled in a Ukrainian university, and who
                will be working part-time in Ukraine to support themselves
                financially.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Ukraine Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Ukrainian worker visa, you will need to provide
                the following documents:
                <br />
                <br />
                ● A valid passport: Your passport must be valid for at least 6
                months beyond the date of your intended stay in Ukraine, and it
                must have at least two blank pages for visa stamps.
                <br />
                <br />
                ● A completed visa application form: You can download the visa
                application form from the website of the Ukrainian embassy or
                consulate where you will be applying.
                <br />
                <br />
                ● Passport-size photographs: You will need to provide two recent
                passport-size photographs.
                <br />
                <br />
                ● A letter of invitation from your employer: Your employer in
                Ukraine will need to provide a letter of invitation stating the
                purpose of your visit and the duration of your stay.
                <br />
                <br />
                ● Evidence of sufficient funds: You will need to provide
                evidence that you have sufficient funds to support yourself
                during your stay in Ukraine. This may include bank statements,
                credit card statements, or a letter from your employer stating
                that you will be financially supported during your trip.
                <br />
                <br />
                ● Health insurance: You will need to provide proof of health
                insurance that covers you while you are in Ukraine.
                <br />
                <br />● Payment of the visa fee: You will need to pay the visa
                fee at the time of your application. The visa fee varies
                depending on the type of visa you are applying for and the
                embassy or consulate where you are applying.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are the general requirements for a
                  Ukrainian worker visa. The specific documents that you need to
                  provide may vary depending on the type of visa you are
                  applying for and the embassy or consulate where you are
                  applying. It is always best to check the latest visa
                  requirements with the Ukrainian embassy or consulate where you
                  will be applying.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Ukraine?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Ukrainian worker visa, you will need to contact
                the Ukrainian embassy or consulate in your country of residence.
                You can find the nearest embassy or consulate by visiting the
                website of the Ministry of Foreign Affairs of Ukraine, or by
                searching online for "Ukrainian embassy" and the name of your
                country.
                <br />
                <br />
                Once you have located the nearest embassy or consulate, you can
                contact them to find out more information about the visa
                application process, including how to schedule an appointment to
                submit your application.
                <br />
                <br />
                It is important to apply for your worker visa well in advance of
                your planned travel date, as the visa application process can
                take several weeks. It is recommended to begin the visa
                application process at least one month before your planned
                travel date to ensure that you have enough time to complete the
                process and receive your visa.
                <br />
                <br />
                <span className="font-bold">
                  Please note that the specific process for applying for a
                  Ukrainian worker visa may vary depending on the embassy or
                  consulate where you are applying. It is always best to check
                  the latest visa requirements with the Ukrainian embassy or
                  consulate where you will be applying.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Ukraine?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                It depends on your citizenship and the length of your stay in
                Ukraine.
                <br />
                <br />
                If you are a citizen of a country that is able to enter Ukraine
                without a visa for short stays (90 days or less), you may be
                able to study in Ukraine without a visa as long as you do not
                exceed the permitted length of stay. However, if you will be
                studying in Ukraine for a longer period of time, or if you are a
                citizen of a country that requires a visa to enter Ukraine, you
                will need to obtain a student visa.
                <br />
                <br />
                Student visas are issued to individuals who will be studying in
                Ukraine on a full-time basis at a recognized Ukrainian
                educational institution. Student visas are typically valid for
                the duration of your studies, up to a maximum of one year.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Ukraine Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Ukrainian student visa, you will need to follow
                these steps:
                <br />
                <br />
                ● Check the visa requirements: Before you begin the visa
                application process, it is important to check the visa
                requirements for your specific situation. This will help you to
                determine what type of visa you need, as well as what documents
                you will need to provide.
                <br />
                <br />
                ● Choose the type of visa you need: Ukraine offers several
                different types of student visas, including temporary student
                visas and permanent student visas. You will need to choose the
                type of visa that is appropriate for your purpose of study.
                <br />
                <br />
                ● Gather the required documents: Once you know what type of visa
                you need and what documents you will need to provide, you can
                begin gathering the necessary documents. This may include your
                passport, photographs, an acceptance letter from a Ukrainian
                educational institution, evidence of sufficient funds, and
                health insurance.
                <br />
                <br />
                ● Complete the visa application form: You can download the visa
                application form from the website of the Ukrainian embassy or
                consulate where you will be applying. Carefully complete the
                form, making sure to provide all of the required information.
                <br />
                <br />
                ● Schedule an appointment: Contact the Ukrainian embassy or
                consulate to schedule an appointment to submit your visa
                application.
                <br />
                <br />● Submit your application: On the day of your appointment,
                bring your completed application form and all of the required
                documents to the embassy or consulate. You will also need to
                pay.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Ukraine Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a Ukrainian student visa, you will need to provide
                the following documents:
                <br />
                <br />
                ● A valid passport: Your passport must be valid for at least 6
                months beyond the date of your intended stay in Ukraine, and it
                must have at least two blank pages for visa stamps.
                <br />
                <br />
                ● A completed visa application form: You can download the visa
                application form from the website of the Ukrainian embassy or
                consulate where you will be applying.
                <br />
                <br />
                ● Passport-size photographs: You will need to provide two recent
                passport-size photographs.
                <br />
                <br />
                ● An acceptance letter from a Ukrainian educational institution:
                You will need to provide an acceptance letter from the Ukrainian
                educational institution where you will be studying. The letter
                should state the duration of your studies and the level of study
                you will be pursuing.
                <br />
                <br />
                ● Evidence of sufficient funds: You will need to provide
                evidence that you have sufficient funds to support yourself
                during your stay in Ukraine. This may include bank statements,
                credit card statements, or a letter from your sponsor stating
                that you will be financially supported during your trip.
                <br />
                <br />
                ● Health insurance: You will need to provide proof of health
                insurance that covers you while you are in Ukraine.
                <br />
                <br />
                ● Payment of the visa fee: You will need to pay the visa fee at
                the time of your application. The visa fee varies depending on
                the type of visa you are applying for and the embassy or
                consulate where you are applying.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are the general requirements for a
                  Ukrainian student visa. The specific documents that you need
                  to provide may vary depending on the type of visa you are
                  applying for and the embassy or consulate where you are
                  applying. It is always best to check the latest visa
                  requirements with the Ukrainian embassy or consulate where you
                  will be applying.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Ukraina Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity of a Ukrainian student visa depends on the length
                of your studies in Ukraine. Student visas are typically valid
                for the duration of your studies, up to a maximum of one year.
                If you will be studying in Ukraine for a longer period of time,
                you may need to apply for a renewal of your student visa.
                <br />
                <br />
                The price of a Ukrainian student visa varies depending on the
                embassy or consulate where you are applying and the type of visa
                you are applying for. The visa fee is typically paid in the
                local currency at the time of your application. You can contact
                the Ukrainian embassy or consulate where you will be applying to
                find out the current visa fee.
                <br />
                <br />
                <span className="font-bold">
                  Please note that in addition to the visa fee, you may also be
                  required to pay other fees, such as processing fees or courier
                  fees, to cover the cost of handling your visa application. It
                  is always best to check the latest visa requirements and fees
                  with the Ukrainian embassy or consulate where you will be
                  applying.
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

export default Ukraine;
