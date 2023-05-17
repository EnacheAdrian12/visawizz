import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Hungary = () => {
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
        <title>Hungary</title>
        <meta name="description" content="Hungary" />
        <meta
          name="keywords"
          content="Hungary travel visa, Hungary work visa, Hungary study visa, How to apply for an Hungary visa, Hungary visa requirements, Hungary tourist visa, Hungary student visa, Hungary business visa, Hungary visa processing time, Hungary visa application process, Hungary visa for Americans, Hungary visa for Europeans, Hungary visa for Hungaryns, Hungary visa for Canadians, Hungary visa for Indians, Hungary visa for Chinese, Hungary visa for Africans, Hungary visa for Asians, Hungary visa for South Americans, Hungary visa for Middle Easterners, Hungary visa for UK citizens, Hungary visa for EU citizens, Hungary visa for Schengen area, Hungary visa for non-EU citizens, Hungary visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Hungary
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Hungary is a country in Central Europe that is known for its rich
              history, cultural traditions, and beautiful landscapes. The
              country is known for its thermal baths, which are popular with
              tourists and locals alike. Hungary is also known for its beautiful
              architecture, including the Buda Castle in Budapest and the
              historic buildings of the Castle District. The country is known
              for its cuisine, which includes dishes such as goulash and chimney
              cake. Additionally, Hungary is known for its production of wines,
              especially the dessert wine Tokaji.
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
                Who can enter Hungary without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are allowed to enter Hungary
                without a visa for stays of up to 90 days within a 180-day
                period. These countries are members of the European Union (EU),
                the European Economic Area (EEA), and Switzerland.
                <br /> <br /> In addition, citizens of the following countries
                are also allowed to enter Hungary without a visa for stays of up
                to 90 days within a 180-day period:
                <span className="font-bold">
                  &nbsp;Andorra, Antigua and Barbuda, Argentina, Australia,
                  Bahamas, Barbados, Bosnia and Herzegovina, Brazil, Brunei,
                  Canada, Chile, Colombia, Costa Rica, Dominica, El Salvador,
                  Georgia, Grenada, Guatemala, Holy See, Honduras, Israel,
                  Japan, Kiribati, Kosovo, Macedonia, Malaysia, Marshall,
                  Islands, Mauritius, Mexico, Micronesia, Moldova, Monaco,
                  Montenegro, New Zealand, Nicaragua, Palau, Panama, Paraguay,
                  Peru, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and
                  the Grenadines, Samoa, San Marino, Serbia, Seychelles,
                  Singapore, Solomon Islands, South Korea, Taiwan, Timor-Leste,
                  Tonga, Trinidad and Tobago, Tuval, Ukraine, United Arab
                  Emirates, United States of America, Uruguay, Vanuatu.{" "}
                </span>
                <br /> <br />
                <span className="font-bold">
                  Citizens of all other countries will need to apply for a visa
                  to enter Hungary.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Hungary Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Hungary, you will need to provide the
                following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least three months beyond your planned stay in Hungary.
                <br /> <br />● A completed visa application form: You can obtain
                a visa application form from the Hungarian embassy or consulate
                in your home country, or you can download it from the website of
                the Hungarian Ministry of Foreign Affairs.
                <br /> <br />● Passport-sized photos: You will need to provide
                two passport-sized photos with your visa application.
                <br /> <br />● A letter of invitation: If you are visiting
                Hungary for business or personal purposes, you may need to
                provide a letter of invitation from a host in Hungary.
                <br /> <br />● Evidence of your purpose of travel: Depending on
                the purpose of your trip to Hungary, you may need to provide
                additional documents, such as proof of your employment, evidence
                of your enrollment in a school or university, or confirmation of
                your hotel reservations.
                <br /> <br />● Payment for the visa fee: You will need to pay a
                fee to apply for a visa for Hungary. The fee amount will vary
                depending on the type of visa you are applying for and your
                country of origin.
                <br /> <br />
                <span className="font-bold">
                  You may also need to provide additional documents, depending
                  on your specific circumstances. It is a good idea to contact
                  the Hungarian embassy or consulate in your home country for
                  more information on the specific requirements for a visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Hungary Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Hungary, you will need to follow these
                steps:
                <br /> <br />● Determine the type of visa you need: There are
                several types of visas for Hungary, including tourist visas,
                business visas, student visas, and work visas. Choose the type
                of visa that is most appropriate for your trip.
                <br /> <br />● Contact the Hungarian embassy or consulate in
                your home country: You can find the contact information for the
                Hungarian embassy or consulate in your home country on the
                website of the Hungarian Ministry of Foreign Affairs.
                <br /> <br />● Gather all the necessary documents: You will need
                to provide a valid passport, a completed visa application form,
                passport-sized photos, and any additional documents required for
                your specific type of visa.
                <br /> <br />● Submit the required documents and payment for the
                visa fee: You can submit your visa application and supporting
                documents in person at the Hungarian embassy or consulate, or
                you may be able to submit them by mail.
                <br /> <br />● Wait for a decision on your visa application: The
                processing time for a visa application can vary, so it is a good
                idea to apply as early as possible.
                <br /> <br />● If your visa is approved, you will need to pay a
                consular fee and schedule an appointment to have your visa
                issued.
                <br /> <br />● Once you have your visa, you can make
                arrangements to travel to Hungary.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Hungary?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you are allowed to stay in Hungary will
                depend on the type of visa you have and the purpose of your
                visit.
                <br /> <br /> If you are a citizen of an EU or EEA member
                country, or Switzerland, you are allowed to stay in Hungary for
                up to 90 days within a 180-day period without a visa.
                <br /> <br /> If you are a citizen of a country that requires a
                visa to enter Hungary, the length of your stay will be
                determined by the type of visa you have. Tourist visas and
                business visas are usually valid for stays of up to 90 days
                within a 180-day period. Student visas and work visas are
                typically valid for longer stays.
                <br /> <br />
                <span className="font-bold">
                  If you want to stay in Hungary for a longer period of time,
                  you will need to apply for an extension of your visa before it
                  expires.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Hungary?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                COVID-19 testing is not required when traveling to Hungary.
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
                A diplomatic passport is a type of passport that is issued to
                diplomats and other officials who are traveling abroad on
                official business. Diplomatic passports are issued by the
                government of the country that the diplomat represents and are
                usually valid for a period of four or five years.
                <br /> <br /> Diplomatic passports have several privileges and
                immunities that are not granted to regular passports, including:
                <br /> <br />
                ● Exemption from visa requirements in certain countries
                <br /> <br />● The right to enter and exit countries without
                being subjected to immigration control
                <br /> <br />● The right to receive assistance and protection
                from foreign governments while abroad
                <br /> <br />● The right to diplomatic immunity, which means
                that the holder of a diplomatic passport cannot be arrested or
                detained in a foreign country unless their immunity is waived by
                their home government
                <br /> <br />
                <span className="font-bold">
                  To be eligible for a diplomatic passport, you must be a
                  diplomat or other official who is traveling abroad on official
                  business. You will need to provide proof of your official
                  status and the purpose of your trip to the issuing authority
                  in your home country.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Hungary?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to work in Hungary, you will generally need to apply
                for a work visa before you travel to Hungary. There are several
                types of work visas for Hungary, depending on the length and
                purpose of your stay:
                <br /> <br />● Temporary work visa: This visa allows you to work
                in Hungary for a specific period of time, usually up to one
                year.
                <br /> <br />● EU Blue Card: This visa allows highly skilled
                non-EU citizens to work and live in Hungary. To be eligible for
                an EU Blue Card, you must have a university degree and a job
                offer in Hungary with a salary that meets certain minimum
                requirements.
                <br /> <br />● Settlement permit: This visa allows you to live
                and work in Hungary indefinitely. To be eligible for a
                settlement permit, you must have lived in Hungary for a certain
                period of time and have a job or a business in Hungary.
                <br /> <br /> You will need to provide the following documents
                to apply for a work visa for Hungary:
                <br /> <br />● A valid passport
                <br /> <br />● A completed visa application form
                <br /> <br />● Passport-sized photos
                <br /> <br />● A letter of invitation from your employer in
                Hungary
                <br /> <br />● Evidence of your qualifications and professional
                experience
                <br /> <br />● Payment for the visa fee
                <br /> <br />
                <span className="font-bold">
                  You may also need to provide additional documents, depending
                  on your specific circumstances. It is a good idea to contact
                  the Hungarian embassy or consulate in your home country for
                  more information on the specific requirements for a work visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Hungary Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Hungary, you will need to follow
                these steps:
                <br /> <br />● Determine the type of work visa you need: There
                are several types of work visas for Hungary, including temporary
                work visas, EU Blue Cards, and settlement permits. Choose the
                type of visa that is most appropriate for your situation.
                <br /> <br />● Find a job in Hungary: You will need to have a
                job offer from an employer in Hungary in order to apply for a
                work visa.
                <br /> <br />● Contact the Hungarian embassy or consulate in
                your home country: You can find the contact information for the
                Hungarian embassy or consulate in your home country on the
                website of the Hungarian Ministry of Foreign Affairs.
                <br /> <br />● Gather all the necessary documents: You will need
                to provide a valid passport, a completed visa application form,
                passport-sized photos, and any additional documents required for
                your specific type of work visa.
                <br /> <br />● Submit the required documents and payment for the
                visa fee: You can submit your visa application and supporting
                documents in person at the Hungarian embassy or consulate, or
                you may be able to submit them by mail.
                <br /> <br />● Wait for a decision on your visa application: The
                processing time for a visa application can vary, so it is a good
                idea to apply as early as possible.
                <br /> <br />● If your visa is approved, you will need to pay a
                consular fee and schedule an appointment to have your visa
                issued.
                <br /> <br />● Once you have your visa, you can make
                arrangements to travel to Hungary and begin working.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Hungary Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas for Hungary, depending
                on the length and purpose of your stay:
                <br /> <br />●{" "}
                <span className="font-bold">Temporary work visa</span>: This
                visa allows you to work in Hungary for a specific period of
                time, usually up to one year.
                <br /> <br />● <span className="font-bold">EU Blue Card</span>:
                This visa allows highly skilled non-EU citizens to work and live
                in Hungary. To be eligible for an EU Blue Card, you must have a
                university degree and a job offer in Hungary with a salary that
                meets certain minimum requirements.
                <br /> <br />●{" "}
                <span className="font-bold">Settlement permit</span>: This visa
                allows you to live and work in Hungary indefinitely. To be
                eligible for a settlement permit, you must have lived in Hungary
                for a certain period of time and have a job or a business in
                Hungary.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Hungary Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Hungary, you will need to provide
                the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least three months beyond your planned stay in Hungary.
                <br /> <br />● A completed visa application form: You can obtain
                a visa application form from the Hungarian embassy or consulate
                in your home country, or you can download it from the website of
                the Hungarian Ministry of Foreign Affairs.
                <br /> <br />● Passport-sized photos: You will need to provide
                two passport-sized photos with your visa application.
                <br /> <br />● A letter of invitation from your employer in
                Hungary: This letter should be issued by your employer and
                should confirm that you have been offered a job in Hungary.
                <br /> <br />
                ● Evidence of your qualifications and professional experience:
                You will need to provide evidence of your education and work
                experience, such as copies of your diploma and resume.
                <br /> <br />● Payment for the visa fee: You will need to pay a
                fee to apply for a worker visa for Hungary. The fee amount will
                vary depending on the type of visa you are applying for and your
                country of origin.
                <br /> <br />
                <span className="font-bold">
                  You may also need to provide additional documents, depending
                  on your specific circumstances. It is a good idea to contact
                  the Hungarian embassy or consulate in your home country for
                  more information on the specific requirements for a worker
                  visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Hungary?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Hungary, you will need to follow
                these steps:
                <br /> <br />● Determine the type of work visa you need: There
                are several types of work visas for Hungary, including temporary
                work visas, EU Blue Cards, and settlement permits. Choose the
                type of visa that is most appropriate for your situation.
                <br /> <br />● Find a job in Hungary: You will need to have a
                job offer from an employer in Hungary in order to apply for a
                work visa.
                <br /> <br />● Contact the Hungarian embassy or consulate in
                your home country: You can find the contact information for the
                Hungarian embassy or consulate in your home country on the
                website of the Hungarian Ministry of Foreign Affairs.
                <br /> <br />● Gather all the necessary documents: You will need
                to provide a valid passport, a completed visa application form,
                passport-sized photos, and any additional documents required for
                your specific type of work visa.
                <br /> <br />● Submit the required documents and payment for the
                visa fee: You can submit your visa application and supporting
                documents in person at the Hungarian embassy or consulate, or
                you may be able to submit them by mail.
                <br /> <br />● Wait for a decision on your visa application: The
                processing time for a visa application can vary, so it is a good
                idea to apply as early as possible.
                <br /> <br />● If your visa is approved, you will need to pay a
                consular fee and schedule an appointment to have your visa
                issued.
                <br /> <br />● Once you have your visa, you can make
                arrangements to travel to Hungary and begin working.
                <br /> <br />
                <span className="font-bold">
                  It is a good idea to apply for your worker visa as early as
                  possible, as the process can take several weeks. You should
                  also make sure to apply for your visa well in advance of your
                  planned departure date, to allow enough time for the
                  application to be processed.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Hungary?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of an EU or EEA member country, or
                Switzerland, you do not need a visa to study in Hungary. You
                will need to register your stay in Hungary with the local
                authorities within 90 days of your arrival.
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of a country that is not a member of the
                  EU, EEA, or Switzerland, you will generally need to apply for
                  a student visa to study in Hungary.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Hungary student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Hungary, you will need to follow
                these steps:
                <br /> <br />● Enroll in a Hungarian educational institution:
                You will need to be accepted to a Hungarian educational
                institution in order to apply for a student visa.
                <br /> <br />● Contact the Hungarian embassy or consulate in
                your home country: You can find the contact information for the
                Hungarian embassy or consulate in your home country on the
                website of the Hungarian Ministry of Foreign Affairs.
                <br /> <br />● Gather all the necessary documents: You will need
                to provide a valid passport, a completed visa application form,
                passport-sized photos, and any additional documents required for
                a student visa, such as a letter of acceptance from a Hungarian
                educational institution and proof of financial resources.
                <br /> <br />● Submit the required documents and payment for the
                visa fee: You can submit your visa application and supporting
                documents in person at the Hungarian embassy or consulate, or
                you may be able to submit them by mail.
                <br /> <br />● Wait for a decision on your visa application: The
                processing time for a visa application can vary, so it is a good
                idea to apply as early as possible.
                <br /> <br />● If your visa is approved, you will need to pay a
                consular fee and schedule an appointment to have your visa
                issued.
                <br /> <br />● Once you have your visa, you can make
                arrangements to travel to Hungary and begin your studies.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Hungary student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Hungary, you will need to
                provide the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least three months beyond your planned stay in Hungary.
                <br /> <br />● A completed visa application form: You can obtain
                a visa application form from the Hungarian embassy or consulate
                in your home country, or you can download it from the website of
                the Hungarian Ministry of Foreign Affairs.
                <br /> <br />● Passport-sized photos: You will need to provide
                two passport-sized photos with your visa application.
                <br /> <br />● Proof of acceptance at a Hungarian educational
                institution: You will need to provide a letter of acceptance
                from a Hungarian educational institution, confirming that you
                have been accepted to study in Hungary.
                <br /> <br />● Proof of financial resources: You will need to
                provide evidence that you have sufficient financial resources to
                support yourself during your stay in Hungary. This may include a
                scholarship award letter or a statement from your bank showing
                that you have sufficient funds available.
                <br /> <br />● Payment for the visa fee: You will need to pay a
                fee to apply for a student visa for Hungary. The fee amount will
                vary depending on your country of origin.
                <br /> <br /> You may also need to provide additional documents,
                depending on your specific circumstances. It is a good idea to
                contact the Hungarian embassy or consulate in your home country
                for more information on the specific requirements for a student
                visa.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Hungary student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity of a student visa for Hungary will depend on the
                length of your studies and the type of visa you have. Student
                visas are typically valid for the duration of your studies, up
                to a maximum of one year. If you are studying for a longer
                period of time, you will need to apply for an extension of your
                student visa before it expires.
                <br /> <br /> The price of a student visa for Hungary will
                depend on your country of origin. Visa fees are generally higher
                for citizens of countries that are not members of the EU, EEA,
                or Switzerland. You will need to pay a visa fee when you apply
                for a student visa, and you may also need to pay a consular fee
                when you have your visa issued.
                <br /> <br />
                <span className="font-bold">
                  It is a good idea to contact the Hungarian embassy or
                  consulate in your home country for more information on the
                  specific fees for a student visa. You can find the contact
                  information for the Hungarian embassy or consulate in your
                  home country on the website of the Hungarian Ministry of
                  Foreign Affairs.
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

export default Hungary;
