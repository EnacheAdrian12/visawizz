import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Croatia = () => {
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
        <title>Croatia</title>
        <meta name="description" content="Croatia" />
        <meta
          name="keywords"
          content="Croatia travel visa, Croatia work visa, Croatia study visa, How to apply for an Croatia visa, Croatia visa requirements, Croatia tourist visa, Croatia student visa, Croatia business visa, Croatia visa processing time, Croatia visa application process, Croatia visa for Americans, Croatia visa for Europeans, Croatia visa for Croatians, Croatia visa for Canadians, Croatia visa for Indians, Croatia visa for Chinese, Croatia visa for Africans, Croatia visa for Asians, Croatia visa for South Americans, Croatia visa for Middle Easterners, Croatia visa for UK citizens, Croatia visa for EU citizens, Croatia visa for Schengen area, Croatia visa for non-EU citizens, Croatia visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Croatia
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Croatia is a country located in the Balkans region of Europe. It
              is well known for its beautiful coastlines and its rich cultural
              heritage. Croatia is known for its many stunning beaches, which
              are popular among tourists, and its many national parks and
              protected areas, which are home to a rich array of plant and
              animal life. The country is also known for its delicious cuisine,
              which features a variety of fresh, local ingredients, and its
              thriving wine industry, which produces some of the best wines in
              the region. Some other things that Croatia is known for include
              its vibrant arts and music scene, and its many historical and
              cultural attractions, such as the ancient city of Dubrovnik and
              the Plitvice Lakes National Park.
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
                Who can enter Croatia without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Croatia is a member of the European Union (EU) and the Schengen
                Area, which means that citizens of other EU countries and
                Schengen Area countries can enter Croatia without a visa and
                stay for an unlimited period of time. Citizens of certain
                countries outside the EU and the Schengen Area are also allowed
                to enter Croatia without a visa for short stays (up to 90 days
                in a 180-day period). These countries include:
                <br />
                <br />
                <span className="font-bold">
                  Albania, Andorra, Antigua and Barbuda, Argentina, Australia,
                  Bahamas, Barbados, Bosnia and Herzegovina, Brazil, Brunei,
                  Canada, Chile, Colombia, Costa Rica, Dominica, El Salvador,
                  Georgia ,Grenada, Guatemala, Holy See (Vatican City)
                  ,Honduras, Hong Kong (Special Administrative Region of China),
                  Israel, Japan, Kosovo, Macao (Special Administrative Region of
                  China), Malaysia, Marshall, Islands, Mauritius, Mexico
                  ,Micronesia, Moldova, Montenegro, New Zealand, Nicaragua,
                  North Macedonia, Palau, Panama, Paraguay, Peru, Saint Kitts
                  and Nevis, Saint Lucia ,Saint Vincent and the Grenadines,
                  Samoa, San Marino, Serbia, Seychelles, Singapore, South Korea,
                  Taiwan, Timor-Leste (East Timor), Tonga, Trinidad and Tobago,
                  Tuvalu, Ukraine, United Arab Emirates, United States of
                  America, Uruguay ,Vanuatu, Venezuela.{" "}
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Croatia Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Croatia, you will generally need to
                provide the following documents:
                <br />
                <br />● A valid passport or travel document
                <br />
                <br />● A completed visa application form
                <br />
                <br />● Two recent passport-sized photographs
                <br />
                <br />● A valid travel insurance policy
                <br />
                <br />● Proof of sufficient financial resources to support
                yourself while you are in Croatia, such as bank statements or a
                letter from your employer stating that they will provide
                financial support
                <br />
                <br />● A letter of invitation from a host in Croatia, if
                applicable
                <br />
                <br />● Any additional documents that may be required depending
                on the purpose of your trip to Croatia, such as a letter of
                acceptance from a university if you are going to study in
                Croatia, or a letter from your employer if you are going to work
                in Croatia
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Croatia Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Croatia, you will generally need to
                follow these steps:
                <br />
                <br />● Gather all of the necessary documents for your visa
                application. This will include a valid passport or travel
                document, a completed visa application form, two recent
                passport-sized photographs, a valid travel insurance policy,
                proof of sufficient financial resources to support yourself
                while you are in Croatia, and any additional documents that may
                be required depending on the purpose of your trip to Croatia.
                <br />
                <br />
                ● Submit your visa application to the Croatian embassy or
                consulate in your country of residence. You may need to make an
                appointment to do this, and you may need to pay a fee for
                processing your application.
                <br />
                <br />● Wait for a decision on your visa application. Processing
                times can vary, so it is a good idea to apply for your visa well
                in advance of your intended departure date.
                <br />
                <br />● Once your visa has been approved, you will need to pay
                the visa fee and receive your visa. You will need to carry your
                visa with you when you travel to Croatia.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Croatia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The amount of time you are allowed to stay in Croatia will
                depend on the type of visa you have and your specific
                circumstances.
                <br />
                <br /> If you are a citizen of an EU country or a Schengen Area
                country, you are allowed to stay in Croatia for an unlimited
                period of time.
                <br />
                <br /> If you are a citizen of a country that is allowed to
                enter Croatia without a visa for short stays (up to 90 days in a
                180-day period), you are allowed to stay in Croatia for up to 90
                days within a 180-day period.
                <br />
                <br /> If you are a citizen of a country that requires a visa to
                enter Croatia, the length of your stay in Croatia will depend on
                the type of visa you have. For example, if you have a tourist
                visa, you may be allowed to stay in Croatia for up to 90 days
                within a 180-day period.
                <br />
                <br /> If you have a student visa, you may be allowed to stay in
                Croatia for the duration of your studies. It is important to
                note that the length of time you are allowed to stay in Croatia
                may vary depending on your country of citizenship and the
                specific type of visa you have.
                <br />
                <br /> It is a good idea to check with the Croatian embassy or
                consulate in your country of residence for the most up-to-date
                information on the length of time you are allowed to stay in
                Croatia.
                <br />
                <br />
                <span className="font-bold">
                  It is also a good idea to follow the terms of your visa and to
                  leave Croatia when your visa expires, as failure to do so
                  could result in fines or other penalties.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Croatia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are no restrictions on regional travel within Croatia.
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
                issued to individuals who are representing their country in a
                diplomatic capacity. Diplomatic passports are usually issued to
                diplomats, such as ambassadors and consular officers, as well as
                to other officials who are traveling on official business on
                behalf of their government. <br />
                <br /> Diplomatic passports are typically issued in addition to
                an ordinary passport, and they are used for travel to and from
                the country in which the holder is serving as a diplomat.
                Diplomatic passports are usually valid for a period of time that
                coincides with the holder's diplomatic mission.
                <br />
                <br /> Holders of diplomatic passports are generally entitled to
                a number of privileges and immunities while they are traveling
                on official business. These privileges and immunities are
                granted under the Vienna Convention on Diplomatic Relations, and
                they include immunity from arrest and detention, as well as
                exemptions from certain taxes and duties.
                <br />
                <br />
                <span className="font-bold">
                  In Croatia, diplomatic passports are issued by the Ministry of
                  Foreign and European Affairs. Only Croatian citizens who are
                  serving in a diplomatic capacity are eligible to receive a
                  diplomatic passport. It is a good idea to check with the
                  Ministry of Foreign and European Affairs for the most
                  up-to-date information on the process for obtaining a
                  diplomatic passport in Croatia.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Croatia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you will need a worker visa to work in Croatia will
                depend on your country of citizenship and the specific terms of
                your employment in Croatia.
                <br />
                <br /> If you are a citizen of an EU country or a Schengen Area
                country, you do not need a worker visa to work in Croatia. You
                are allowed to work in Croatia without any restrictions as long
                as you are legally present in the country.
                <br />
                <br />
                <span className="font-bold">
                  If you are a citizen of a country outside the EU and the
                  Schengen Area, you may need a worker visa to work in Croatia.
                  You will generally need to apply for a worker visa if you will
                  be working in Croatia for more than 90 days within a 180-day
                  period.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Croatia Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Croatia, you will
                generally need to follow these steps:
                <br />
                <br /> Gather all of the necessary documents for your worker
                visa application. This will include a valid passport or travel
                document, a completed visa application form, two recent
                passport-sized photographs, a valid travel insurance policy, a
                work contract or other evidence of employment in Croatia, a
                certificate of criminal records from your country of residence,
                and a certificate of good conduct from your country of
                residence.
                <br />
                <br /> Submit your worker visa application to the Croatian
                embassy or consulate in your country of residence. You may need
                to make an appointment to do this, and you may need to pay a fee
                for processing your application.
                <br />
                <br /> Wait for a decision on your worker visa application.
                Processing times can vary, so it is a good idea to apply for
                your worker visa well in advance of your intended departure
                date.
                <br />
                <br /> Once your worker visa has been approved, you will need to
                pay the visa fee and receive your worker visa. You will need to
                carry your worker visa with you when you travel to Croatia.
                <br />
                <br /> It is important to note that the process for applying for
                a worker visa to work in Croatia may vary depending on your
                country of citizenship and the specific type of worker visa you
                are applying for.
                <br />
                <br />
                <span className="font-bold">
                  It is a good idea to check with the Croatian embassy or
                  consulate in your country of residence for the most up-to-date
                  information on the process for obtaining a worker visa to work
                  in Croatia. It is also a good idea to follow the terms of your
                  worker visa and to leave Croatia when your worker visa
                  expires, as failure to do so could result in fines or other
                  penalties.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Croatia Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas that you may be able to
                apply for to work in Croatia, depending on your specific
                circumstances. These include:
                <br />
                <br />●{" "}
                <span className="font-bold">
                  A temporary stay visa for work purposes
                </span>
                : This type of visa is issued to individuals who will be working
                in Croatia for a period of up to 90 days within a 180-day
                period.
                <br />
                <br />●{" "}
                <span className="font-bold">
                  A temporary stay visa for the purpose of performing an
                  economic activity
                </span>
                : This type of visa is issued to individuals who will be working
                in Croatia for a period of more than 90 days within a 180-day
                period.
                <br />
                <br />● <span className="font-bold">A long-term stay visa</span>
                : This type of visa is issued to individuals who will be working
                in Croatia for a period of more than 90 days within a 180-day
                period and who have a work contract or other employment
                arrangement in Croatia that is valid for more than 90 days.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Croatia Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Croatia, you will
                generally need to provide the following documents:
                <br />
                <br />● A valid passport or travel document
                <br />
                <br />● A completed visa application form
                <br />
                <br />● Two recent passport-sized photographs
                <br />
                <br />● A valid travel insurance policy
                <br />
                <br />● A work contract or other evidence of employment in
                Croatia
                <br />
                <br />● A certificate of criminal records from your country of
                residence
                <br />
                <br />● A certificate of good conduct from your country of
                residence
                <br />
                <br /> It is important to note that the specific documents you
                will need to provide may vary depending on your country of
                citizenship and the specific type of worker visa you are
                applying for. It is a good idea to check with the Croatian
                embassy or consulate in your country of residence for the most
                up-to-date information on the documents that are required for
                your specific situation.
                <br />
                <br /> It is also a good idea to make copies of all of the
                documents you will be submitting with your worker visa
                application, as you may need to present these copies at various
                points during the application process.
                <br />
                <br />
                <span className="font-bold">
                  It is important to follow the terms of your worker visa and to
                  leave Croatia when your worker visa expires, as failure to do
                  so could result in fines or other penalties.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Croatia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Croatia, you will
                generally need to submit your application to the Croatian
                embassy or consulate in your country of residence. You may need
                to make an appointment to do this, and you may need to pay a fee
                for processing your application. <br />
                <br /> It is a good idea to apply for your worker visa well in
                advance of your intended departure date, as processing times can
                vary. You should also allow plenty of time for your travel
                arrangements, including booking flights and making any necessary
                accommodation arrangements.
                <br />
                <br /> It is important to note that the process for applying for
                a worker visa to work in Croatia may vary depending on your
                country of citizenship and the specific type of worker visa you
                are applying for. It is a good idea to check with the Croatian
                embassy or consulate in your country of residence for the most
                up-to-date information on the process for obtaining a worker
                visa to work in Croatia.
                <br />
                <br />
                <span className="font-bold">
                  It is also a good idea to follow the terms of your worker visa
                  and to leave Croatia when your worker visa expires, as failure
                  to do so could result in fines or other penalties.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Croatia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you will need a visa to study in Croatia will depend on
                your country of citizenship and the specific terms of your
                studies in Croatia.
                <br />
                <br /> If you are a citizen of an EU country or a Schengen Area
                country, you do not need a visa to study in Croatia. You are
                allowed to study in Croatia without any restrictions as long as
                you are legally present in the country.
                <br />
                <br />
                <span className="font-bold">
                  If you are a citizen of a country outside the EU and the
                  Schengen Area, you may need a visa to study in Croatia. You
                  will generally need to apply for a student visa if you will be
                  studying in Croatia for more than 90 days within a 180-day
                  period.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Croatia student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Croatia, you will
                generally need to follow these steps: <br />
                <br />
                ● Gather all of the necessary documents for your student visa
                application. This will include a valid passport or travel
                document, a completed visa application form, two recent
                passport-sized photographs, a valid travel insurance policy, a
                letter of acceptance from a Croatian educational institution,
                proof of sufficient funds to cover your studies and living
                expenses in Croatia, and a certificate of criminal records from
                your country of residence.
                <br />
                <br />● Submit your student visa application to the Croatian
                embassy or consulate in your country of residence. You may need
                to make an appointment to do this, and you may need to pay a fee
                for processing your application.
                <br />
                <br />● Wait for a decision on your student visa application.
                Processing times can vary, so it is a good idea to apply for
                your student visa well in advance of your intended departure
                date.
                <br />
                <br />● Once your student visa has been approved, you will need
                to pay the visa fee and receive your student visa. You will need
                to carry your student visa with you when you travel to Croatia.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Croatia student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Croatia, you will
                generally need to provide the following documents:
                <br />
                <br />● A valid passport or travel document
                <br />
                <br />● A completed visa application form
                <br />
                <br />● Two recent passport-sized photographs
                <br />
                <br />● A valid travel insurance policy
                <br />
                <br />● A letter of acceptance from a Croatian educational
                institution
                <br />
                <br />● Proof of sufficient funds to cover your studies and
                living expenses in Croatia
                <br />
                <br />● A certificate of criminal records from your country of
                residence
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Croatia student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa to study in Croatia
                will depend on the specific type of student visa you are
                applying for and your country of citizenship. <br />
                <br /> If you are a citizen of an EU country or a Schengen Area
                country, you do not need a visa to study in Croatia. You are
                allowed to study in Croatia without any restrictions as long as
                you are legally present in the country. <br />
                <br /> If you are a citizen of a country outside the EU and the
                Schengen Area, you may need a student visa to study in Croatia.
                The validity of your student visa will generally depend on the
                length of your studies in Croatia and may be valid for up to one
                year. <br />
                <br />
                <span className="font-bold">
                  The price of a student visa to study in Croatia will generally
                  depend on the specific type of student visa you are applying
                  for and your country of citizenship. You may need to pay a fee
                  for processing your student visa application, and you may also
                  need to pay a fee for the visa itself.
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

export default Croatia;
