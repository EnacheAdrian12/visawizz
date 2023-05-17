import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Austria = () => {
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
        <title>Austria</title>
        <meta name="description" content="Austria" />
        <meta
          name="keywords"
          content="Austria travel visa, Austria work visa, Austria study visa, How to apply for an Austria visa, Austria visa requirements, Austria tourist visa, Austria student visa, Austria business visa, Austria visa processing time, Austria visa application process, Austria visa for Americans, Austria visa for Europeans, Austria visa for Austrians, Austria visa for Canadians, Austria visa for Indians, Austria visa for Chinese, Austria visa for Africans, Austria visa for Asians, Austria visa for South Americans, Austria visa for Middle Easterners, Austria visa for UK citizens, Austria visa for EU citizens, Austria visa for Schengen area, Austria visa for non-EU citizens, Austria visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Austria
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Austria is a small country located in Central Europe. It is known
              for its beautiful landscapes, including the Alps, the Danube
              river, and the forests of the Vienna Woods. Austria is also known
              for its rich culture and history, including its art, music, and
              literature. Additionally, the country is known for its high
              quality of life and its strong economy, which is based on a
              variety of industries, including tourism, manufacturing, and
              finance. Austria is also known for its delicious cuisine, which
              includes dishes such as Wiener schnitzel and goulash.
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
                Who can enter Austria without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries can enter Austria without a visa
                for stays of up to 90 days within a 180-day period, provided
                they have a valid passport and are traveling for business,
                tourism, or transit purposes.
                <br />
                <br /> The list of countries whose citizens can enter Austria
                without a visa includes:{" "}
                <span className="font-bold">
                  European Union countries Schengen Area countries, Andorra,
                  Australia, Canada, Japan, South Korea, New Zealand, United
                  States, Vatican City.
                </span>
                <br />
                <br /> Citizens of other countries will generally need to apply
                for a visa before traveling to Austria. Please note that the
                list of countries whose citizens can enter Austria without a
                visa is subject to change, and it's always a good idea to check
                the specific requirements with the embassy or consulate before
                traveling.
                <br />
                <br /> In addition, even if you are a citizen of a country that
                is eligible for visa-free travel to Austria, you may still need
                a visa if you plan to stay in the country for more than 90 days
                or if you plan to work or study in Austria.
                <br />
                <br /> If you are a citizen of a country that requires a visa to
                enter Austria, you will need to apply for a visa before
                traveling to the country. The type of visa you will need will
                depend on the purpose and duration of your stay, and you will
                need to meet the specific requirements for the type of visa you
                are applying for.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Austria Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Austria, you will generally need to
                provide the following documents:
                <br />
                <br />● A completed visa application form: You can download the
                application form from the website of the Austrian embassy or
                consulate in your country of residence or from the Federal
                Ministry of the Interior's website.
                <br />
                <br />● A valid passport: Your passport must be valid for at
                least six months beyond the date of your intended stay in
                Austria. You will need to provide a copy of the bio-page of your
                passport, as well as any pages that show visas or stamps from
                previous travel.
                <br />
                <br />● Passport-sized photos: You will need to submit two
                passport-sized photos taken within the last six months.
                <br />
                <br />● A letter of invitation or contract from the Austrian
                employer or host: If you are traveling to Austria for business
                or work purposes, you will need to provide a letter from your
                Austrian employer or host stating the purpose of your trip and
                the details of your employment or work.
                <br />
                <br />● Proof of sufficient financial means: You may need to
                provide proof that you have sufficient financial means to
                support yourself during your stay in Austria, such as bank
                statements or a letter of support from a sponsor.
                <br />
                <br />● A police clearance certificate: You may need to provide
                a police clearance certificate from your country of residence,
                stating that you have no criminal record.
                <br />
                <br />● Proof of health insurance: You may need to provide proof
                of health insurance that covers medical expenses and
                repatriation.
                <br />
                <br />● Other documents: Depending on the circumstances of your
                trip, you may need to provide additional documents, such as
                transcripts or diplomas from previous studies, or proof of your
                relationship to family members traveling with you.
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is a general list of documents required
                  for a visa application to Austria, and the specific documents
                  you need to submit may vary depending on the type of visa you
                  are applying for and the embassy or consulate where you are
                  applying. It's always a good idea to check the specific
                  requirements with the embassy or consulate before submitting
                  your application.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Austria Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Austria, you will need to follow these
                steps:
                <br />
                <br />● Determine the type of visa you need: Austria offers
                several types of visas, including short-stay visas, long-stay
                visas, and transit visas. You will need to determine which type
                of visa is appropriate for your situation based on the purpose
                and duration of your stay in Austria.
                <br />
                <br />● Check the visa requirements: You will need to check the
                specific visa requirements for the type of visa you are applying
                for and make sure you meet all of the eligibility criteria. You
                can find this information on the website of the Austrian embassy
                or consulate in your country of residence or on the Federal
                Ministry of the Interior's website.
                <br />
                <br />● Gather the required documents: You will need to gather
                all of the necessary documents for your visa application,
                including a completed visa application form, a valid passport,
                passport-sized photos, and any other documents required for the
                type of visa you are applying for.
                <br />
                <br />● Schedule an appointment: You will need to schedule an
                appointment at the Austrian embassy or consulate in your country
                of residence to submit your visa application and supporting
                documents. You can usually do this online or by contacting the
                embassy or consulate directly.
                <br />
                <br />● Submit your application: On the day of your appointment,
                you will need to attend the embassy or consulate in person to
                submit your visa application and supporting documents. You may
                also be required to pay a visa fee at this time.
                <br />
                <br />● Wait for a decision: The embassy or consulate will
                review your application and make a decision on your visa. If
                your application is approved, you will receive your visa in the
                mail. If your application is denied, you will receive a letter
                explaining the reason for the denial.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Austria?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Austria will depend on the
                type of visa you have and the purpose of your stay.
                <br />
                <br /> If you have a short-stay visa, also known as a Schengen
                visa, you can stay in Austria for up to 90 days within a 180-day
                period. Short-stay visas are intended for business, tourism, or
                transit purposes, and they are valid for multiple entries into
                Austria and other Schengen Area countries.
                <br />
                <br /> If you have a long-stay visa, you can stay in Austria for
                a period of time that exceeds the maximum duration of a
                short-stay visa. Long-stay visas are intended for purposes such
                as study, work, or family reunification, and they are valid for
                a specific purpose and duration.
                <br />
                <br /> If you have a transit visa, you can stay in Austria for a
                short period of time while you are waiting to travel to another
                country. Transit visas are valid for a single entry into Austria
                and are intended for travelers who are passing through the
                country on their way to another destination.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are Covid Restrictions in Austria?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are no travel restrictions to Austria, but in Vienna, some
                safety measures still apply.
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
                A diplomatic passport is a special type of passport issued to
                diplomats and other government officials who are traveling
                abroad on official business. Diplomatic passports are issued by
                the government of the diplomat's country of citizenship and are
                typically valid for a period of five years.
                <br />
                <br /> Holders of diplomatic passports are entitled to certain
                privileges and immunities when traveling abroad, including
                immunity from arrest and detention, and are generally exempt
                from visa requirements when traveling to other countries.
                <br />
                <br /> In Austria, diplomatic passports are issued to members of
                the diplomatic corps, including ambassadors, diplomats, and
                other government officials who are traveling abroad on official
                business. Diplomatic passports are issued by the Federal
                Ministry of the Interior in Austria and are valid for a period
                of five years.
                <br />
                <br />
                <span className="font-bold">
                  Please note that the information provided here is general in
                  nature and may not apply to all countries. Diplomatic passport
                  policies and practices can vary from country to country, and
                  it's always a good idea to check the specific requirements
                  with the embassy or consulate before traveling.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Austria?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of a European Union (EU) or European Free
                Trade Association (EFTA) country, you are generally entitled to
                work in Austria without a visa or work permit. However, you will
                need to register your employment with the appropriate
                authorities and obtain a registration certificate or an EU
                residence permit.
                <br />
                <br /> If you are a citizen of a non-EU/EFTA country and you
                want to work in Austria, you will generally need to apply for a
                worker visa and a work permit. The type of worker visa you will
                need will depend on the nature of your work and the length of
                your intended stay in Austria.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Austria Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa and a work permit in Austria, you
                will need to follow these steps:
                <br />
                <br />● Determine the type of worker visa and work permit you
                need: Austria offers several types of worker visas and work
                permits, including the Red-White-Red Card, the EU Blue Card, and
                employment permits. You will need to determine which type of
                worker visa and work permit is appropriate for your situation
                based on the nature of your work and the length of your intended
                stay in Austria.
                <br />
                <br />● Check the visa and work permit requirements: You will
                need to check the specific visa and work permit requirements for
                the type of worker visa and work permit you are applying for and
                make sure you meet all of the eligibility criteria. You can find
                this information on the website of the Austrian embassy or
                consulate in your country of residence or on the Federal
                Ministry of the Interior's website.
                <br />
                <br />● Gather the required documents: You will need to gather
                all of the necessary documents for your worker visa and work
                permit application, including a completed application form, a
                valid passport, passport-sized photos, and any other documents
                required for the type of worker visa and work permit you are
                applying for.
                <br />
                <br />● Schedule an appointment: You will need to schedule an
                appointment at the Austrian embassy or consulate in your country
                of residence to submit your worker visa and work permit
                application and supporting documents. You can usually do this
                online or by contacting the embassy or consulate directly.
                <br />
                <br />
                ● Submit your application: On the day of your appointment, you
                will need to attend the embassy or consulate in person to submit
                your worker visa and work permit application and supporting
                documents. You may also be required to pay a visa and work
                permit fee at this time.
                <br />
                <br />● Wait for a decision: The embassy or consulate will
                review your application and make a decision on your worker visa
                and work permit. If your application is approved, you will
                receive your worker visa and work permit in the mail. If your
                application is denied, you will receive a letter explaining the
                reason for the denial.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Austria Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Austria offers several types of worker visas for individuals who
                want to work in the country, including:
                <br />
                <br />● Red-White-Red Card: This is a multi-purpose visa that
                allows you to work and live in Austria for a specific period of
                time. The Red-White-Red Card is issued to highly qualified
                workers, skilled workers in shortage occupations, and other
                qualified workers, such as entrepreneurs and self-employed
                individuals. To be eligible for a Red-White-Red Card, you will
                generally need to meet certain education and work experience
                requirements.
                <br />
                <br />● EU Blue Card: This is a work and residence permit for
                highly qualified workers from non-EU/EFTA countries. The EU Blue
                Card allows you to work and live in Austria for a specific
                period of time, and it is issued to workers who have a
                university degree or a minimum of five years of professional
                experience. To be eligible for an EU Blue Card, you will
                generally need to have a job offer from an Austrian employer and
                meet certain education and work experience requirements.
                <br />
                <br />
                ● Employment permit: This is a work permit that allows you to
                work in Austria for a specific employer. Employment permits are
                issued to workers who have a job offer from an Austrian employer
                and are generally valid for a period of up to one year. To be
                eligible for an employment permit, you will generally need to
                have a job offer from an Austrian employer and meet certain
                education and work experience requirements.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are general descriptions of the types
                  of worker visas available in Austria, and the specific
                  requirements for each type of worker visa may vary depending
                  on the embassy or consulate where you are applying and the
                  circumstances of your trip. It's always a good idea to check
                  the specific requirements with the embassy or consulate before
                  applying for a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Austria Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa and a work permit in Austria, you
                will generally need to provide the following documents: <br />
                <br />● A completed application form: You can download the
                application form from the website of the Austrian embassy or
                consulate in your country of residence or from the Federal
                Ministry of the Interior's website. <br />
                <br />● A valid passport: Your passport must be valid for at
                least six months beyond the date of your intended stay in
                Austria. You will need to provide a copy of the bio-page of your
                passport, as well as any pages that show visas or stamps from
                previous travel. <br />
                <br />● Passport-sized photos: You will need to submit two
                passport-sized photos taken within the last six months. <br />
                <br />● A job offer from an Austrian employer: You will need to
                provide a job offer from an Austrian employer stating the
                details of your employment, including your job title, salary,
                and duration of the employment. <br />
                <br />● Proof of education and qualifications: You may need to
                provide proof of your education and qualifications, such as
                transcripts or diplomas from previous studies. <br />
                <br />● Proof of sufficient financial means: You may need to
                provide proof that you have sufficient financial means to
                support yourself during your stay in Austria, such as bank
                statements or a letter of support from a sponsor. <br />
                <br />● A police clearance certificate: You may need to provide
                a police clearance certificate from your country of residence,
                stating that you have no criminal record. <br />
                <br />● Proof of health insurance: You may need to provide proof
                of health insurance that covers medical expenses and
                repatriation. <br />
                <br />● Other documents: Depending on the circumstances of your
                trip, you may need to provide additional documents, such as a
                marriage certificate or birth certificate if you are traveling
                with family members.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Albania?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa and a work permit in Austria, you
                will generally need to submit your application to the Austrian
                embassy or consulate in your country of residence. You can
                usually find the contact information for the embassy or
                consulate on the website of the Federal Ministry of the Interior
                or by searching online.
                <br />
                <br /> You can usually apply for a worker visa and work permit
                at any time, but it's a good idea to start the process as early
                as possible to allow enough time for your application to be
                processed. The processing time for a worker visa and work permit
                application can vary depending on the embassy or consulate where
                you are applying and the circumstances of your trip.
                <br />
                <br />
                <span className="font-bold">
                  To apply for a worker visa and work permit in Austria, you
                  will generally need to schedule an appointment at the embassy
                  or consulate in your country of residence. You can usually do
                  this online or by contacting the embassy or consulate
                  directly. You may be required to attend the embassy or
                  consulate in person to submit your application and supporting
                  documents.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Austria?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of a European Union (EU) or European Free
                Trade Association (EFTA) country, you are generally entitled to
                study in Austria without a visa. However, you will need to
                register your studies with the appropriate authorities and
                obtain a registration certificate or an EU residence permit.
                <br />
                <br /> If you are a citizen of a non-EU/EFTA country and you
                want to study in Austria, you will generally need to apply for a
                student visa. The type of student visa you will need will depend
                on the length of your intended stay in Austria.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Austria student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Austria, you will need to follow
                these steps: Determine the type of student visa you need:
                <br />
                <br />● Austria offers two types of student visas, including anp
                short-term student visa for study programs or courses that last
                for a shorter period of time and a long-term student visa for
                study programs or courses that last for a longer period of time.
                You will need to determine which type of student visa is
                appropriate for your situation based on the length of your
                intended stay in Austria.
                <br />
                <br />● Check the student visa requirements: You will need to
                check the specific student visa requirements for the type of
                student visa you are applying for and make sure you meet all of
                the eligibility criteria. You can find this information on the
                website of the Austrian embassy or consulate in your country of
                residence or on the Federal Ministry of the Interior's website.
                <br />
                <br />● Gather the required documents: You will need to gather
                all of the necessary documents for your student visa
                application, including a completed application form, a valid
                passport, passport-sized photos, and any other documents
                required for the type of student visa you are applying for.
                <br />
                <br />● Schedule an appointment: You will need to schedule an
                appointment at the Austrian embassy or consulate in your country
                of residence to submit your student visa application and
                supporting documents. You can usually do this online or by
                contacting the embassy or consulate directly.
                <br />
                <br />● Submit your application: On the day of your appointment,
                you will need to attend the embassy or consulate in person to
                submit your student visa application and supporting documents.
                You may also be required to pay a student visa fee at this time.
                <br />
                <br />● Wait for a decision: The embassy or consulate will
                review your application and make a decision on your student
                visa. If your application is approved, you will receive your
                student visa in the mail. If your application is denied, you
                will receive a letter explaining the reason for the denial.{" "}
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is a general overview of the process for
                  applying for a student visa in Austria, and the specific
                  requirements may vary depending on the embassy or consulate
                  where you are applying and the circumstances of your trip.
                  It's always a good idea to check the specific requirements
                  with the embassy or consulate
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Austria student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a student visa in Austria, you will generally
                need to meet the following requirements:
                <br />
                <br />● You must be accepted into an accredited educational
                institution in Austria: You will need to provide an acceptance
                letter from an Austrian educational institution stating that you
                have been accepted into a study program or course.
                <br />
                <br />● You must have sufficient financial means to support
                yourself during your stay in Austria: You may need to provide
                proof of sufficient financial means, such as bank statements or
                a letter of support from a sponsor.
                <br />
                <br />● You must have adequate health insurance: You may need to
                provide proof of health insurance that covers medical expenses
                and repatriation.
                <br />
                <br />● You must have a valid passport: Your passport must be
                valid for at least six months beyond the date of your intended
                stay in Austria.
                <br />
                <br />● You must meet any other requirements specific to the
                type of student visa you are applying for: Austria offers two
                types of student visas, including a short-term student visa for
                study programs or courses that last for a shorter period of time
                and a long-term student visa for study programs or courses that
                last for a longer period of time. The specific requirements for
                each type of student visa may vary.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Austria student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of an Austria student visa will depend on
                the type of student visa you are applying for and the length of
                your intended stay in Austria.
                <br />
                <br />●{" "}
                <span className="font-bold">
                  The short-term student visa
                </span>{" "}
                is valid for a period of up to six months, and it allows you to
                study in Austria for a specific period of time. The short-term
                student visa is intended for study programs or courses that last
                for a shorter period of time, such as language courses or summer
                schools. The price of a short-term student visa is usually €60.
                <br />
                <br />●{" "}
                <span className="font-bold">The long-term student visa</span> is
                valid for a period of time that exceeds the maximum duration of
                a short-term student visa. The long-term student visa is
                intended for study programs or courses that last for a longer
                period of time, such as bachelor's or master's degree programs.
                The price of a long-term student visa is usually €85.
                <br />
                <br />
                <span className="font-bold">
                  Please note that these are general guidelines for the validity
                  and price of student visas in Austria, and the specific
                  requirements may vary depending on the embassy or consulate
                  where you are applying and the circumstances of your trip.
                  It's always a good idea to check the specific requirements
                  with the embassy or consulate before applying for a student
                  visa.
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

export default Austria;
