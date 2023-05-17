import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Germany = () => {
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
        <title>Germany</title>
        <meta name="description" content="Germany" />
        <meta
          name="keywords"
          content="Germany travel visa, Germany work visa, Germany study visa, How to apply for an Germany visa, Germany visa requirements, Germany tourist visa, Germany student visa, Germany business visa, Germany visa processing time, Germany visa application process, Germany visa for Americans, Germany visa for Europeans, Germany visa for Germanyns, Germany visa for Canadians, Germany visa for Indians, Germany visa for Chinese, Germany visa for Africans, Germany visa for Asians, Germany visa for South Americans, Germany visa for Middle Easterners, Germany visa for UK citizens, Germany visa for EU citizens, Germany visa for Schengen area, Germany visa for non-EU citizens, Germany visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Germany
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Germany is a country located in Central Europe. It is known for
              its beautiful landscapes, vibrant culture, and rich history.
              Germany is home to many species of plants and animals, including
              the national tree, the oak, and the national animal, the black
              eagle. The country is also known for its world-class universities,
              its strong economy, and its contributions to science and
              technology. Germany is also known for its beautiful cities, such
              as Berlin, Munich, and Hamburg, which are known for their museums,
              theaters, and music. Additionally, Germany is known for its beer,
              which has a long and celebrated history.
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
                Who can enter Germany without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are allowed to enter Germany
                without a visa for stays of up to 90 days within a 180-day
                period. These countries are members of the European Union (EU),
                the European Economic Area (EEA), and Switzerland.
                <br /> <br />● In addition, citizens of the following countries
                are also allowed to enter Germany without a visa for stays of up
                to 90 days within a 180-day period:
                <span className="font-bold">
                  {" "}
                  Andorra, Australia, Brazil, Canada, El Salvador, Honduras,
                  Israel, Japan, South Korea, Monaco, New Zealand, San Marino,
                  United States.{" "}
                </span>
                <br /> <br />
                <span className="font-bold">
                  {" "}
                  However, even if you are a citizen of one of these countries,
                  you may still need a visa to enter Germany if you are planning
                  to work, study, or stay in Germany for longer than 90 days.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Germany Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Germany, you will need to provide the
                following documents:
                <br /> <br />● A completed visa application form: You can obtain
                a visa application form from the German embassy or consulate in
                your home country, or you can download it from the website of
                the German Federal Foreign Office.
                <br /> <br />● A valid passport: Your passport must be valid for
                at least three months beyond your planned stay in Germany.
                <br /> <br />
                ● Passport-sized photos: You will need to provide two
                passport-sized photos with your visa application.
                <br /> <br />● A travel itinerary: You should provide a detailed
                itinerary of your planned trip to Germany, including your
                arrival and departure dates, and any planned activities while in
                Germany.
                <br /> <br />● Proof of financial support: You will need to show
                that you have enough money to cover your living expenses while
                you are in Germany. This may include bank statements,
                scholarship letters, or other financial documents.
                <br /> <br />● Health insurance: You will need to provide proof
                of health insurance that is valid in Germany.
                <br /> <br />● Payment for the visa fee: You will need to pay a
                fee to apply for a visa for Germany. The fee amount will vary
                depending on the type of visa you are applying for and your
                country of origin.
                <br /> <br />
                <span className="font-bold">
                  You may also need to provide additional documents, depending
                  on your specific circumstances. It is a good idea to contact
                  the German embassy or consulate in your home country for more
                  information on the specific requirements for a visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Germany Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Germany, you will need to follow these
                steps:
                <br /> <br />● Determine the type of visa you need: Germany
                offers different types of visas for different purposes, such as
                tourist visas, business visas, student visas, and work visas.
                You will need to determine the type of visa that is appropriate
                for your trip to Germany.
                <br /> <br />● Gather the required documents: You will need to
                provide a completed visa application form, a valid passport,
                passport-sized photos, a travel itinerary, proof of financial
                support, health insurance, and payment for the visa fee. You may
                also need to provide additional documents, depending on your
                specific circumstances.
                <br /> <br />● Schedule an appointment: You will need to
                schedule an appointment at a German embassy or consulate to
                submit your visa application.
                <br /> <br />● Submit your application: At your appointment, you
                will need to submit your completed visa application and all
                required documents. You may also be required to undergo an
                interview.
                <br /> <br />● Wait for a decision: The process of reviewing and
                deciding on a visa application can take several weeks. You
                should not make any travel arrangements until you have received
                a decision on your visa application.
                <br /> <br />● If your visa is approved: If your visa is
                approved, you will need to pay a consular fee and schedule an
                appointment to have your visa issued. Once you have your visa,
                you can make arrangements to travel to Germany.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Germany ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are allowed to stay in Germany depends on
                the type of visa you have and the purpose of your trip.
                <br /> <br /> If you have a{" "}
                <span className="font-bold">tourist visa</span> for Germany, you
                will generally be allowed to stay in the country for up to 90
                days within a 180-day period. This means that you can stay in
                Germany for up to 90 days, and then you must leave the country
                for at least 90 days before you can return.
                <br /> <br /> If you have a{" "}
                <span className="font-bold">business visa</span> for Germany,
                you will generally be allowed to stay in the country for up to
                90 days within a 180-day period. This visa is intended for
                business-related activities, such as attending meetings or
                conferences.
                <br /> <br /> If you have a{" "}
                <span className="font-bold">student visa</span> for Germany, you
                will generally be allowed to stay in the country for the
                duration of your studies. You will need to apply for an
                extension of your student visa if you wish to stay in Germany
                beyond the initial period of your visa.
                <br /> <br />
                <span className="font-bold">
                  If you have a work visa for Germany, you will generally be
                  allowed to stay in the country for the duration of your
                  employment. You will need to apply for an extension of your
                  work visa if you wish to stay in Germany beyond the initial
                  period of your visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Germany ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes. All travelers, including children under the age of 12, who
                have spent time in a virus-variant area in the last 10 days must
                quarantine for 14 days, even if they have been vaccinated.
                <br />
                <br />
                All persons who have at any time within the last 10 days prior
                to entry stayed in an area which is classified as an area of
                variants of concern at the time of their entry must, when
                entering the Federal Republic of Germany, be in possession of
                proof of testing based on a nucleic acid test (PCR, PoC-NAAT or
                other).
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
                issued to diplomats and other high-ranking officials who
                represent their country abroad. Diplomatic passports are issued
                by the government of the passport holder's country and are
                typically valid for a period of five years.
                <br /> <br /> Diplomatic passports are issued to diplomats and
                other officials who are traveling on official business, and they
                allow the passport holder to receive certain privileges and
                immunity while abroad. These privileges and immunity are granted
                by the country that the diplomat is visiting, and are intended
                to allow diplomats to carry out their duties without
                interference.
                <br /> <br />
                <span className="font-bold">
                  Diplomatic passports are not the same as regular passports,
                  and they do not allow the holder to enter every country. The
                  holder of a diplomatic passport may still need to obtain a
                  visa to enter certain countries, depending on the country's
                  visa requirements.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Germany ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a worker visa to work in Germany depends on
                your nationality and the length of your planned stay in Germany.
                <br /> <br />
                Citizens of certain countries are allowed to work in Germany
                without a worker visa for stays of up to 90 days within a
                180-day period. These countries are members of the European
                Union (EU), the European Economic Area (EEA), and Switzerland.
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of one of these countries and you are
                  planning to work in Germany for a longer period of time, you
                  will need to apply for a worker visa. You can apply for a
                  worker visa at the German embassy or consulate in your home
                  country, or you may be able to apply for a visa at the point
                  of entry into Germany, such as at an airport.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Germany Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Germany, you will need to follow
                these steps:
                <br /> <br />● Find a job in Germany and receive a job offer
                from an employer in Germany.
                <br /> <br />● Contact the German embassy or consulate in your
                home country to find out the specific requirements for a worker
                visa.
                <br /> <br />● Gather all the necessary documents, including a
                valid passport, a completed visa application form, a recent
                passport-sized photo, and a letter of invitation from your
                employer in Germany.
                <br /> <br />● Submit the required documents and payment for the
                visa fee to the German embassy or consulate.
                <br /> <br />● Wait for a decision on your visa application.
                This process can take several weeks, so it is important to plan
                ahead and apply as early as possible.
                <br /> <br />● If your visa is approved, you will need to pay a
                consular fee and schedule an appointment to have your visa
                issued.
                <br /> <br />● Once you have your visa, you can make
                arrangements to travel to Germany and begin your job.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Germany Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas for Germany, depending
                on the purpose and length of your stay in Germany:
                <br /> <br />● <span className="font-bold">Jobseeker visa</span>
                : This visa allows you to stay in Germany for up to six months
                to look for a job. You are not allowed to work while on this
                visa.
                <br /> <br />●{" "}
                <span className="font-bold">Temporary work visa</span>: This
                visa allows you to work in Germany for a specific period of
                time, usually up to one year.
                <br /> <br />● <span className="font-bold">EU Blue Card</span>:
                This visa allows highly skilled non-EU citizens to work and live
                in Germany. To be eligible for an EU Blue Card, you must have a
                university degree and a job offer in Germany with a salary that
                meets certain minimum requirements.
                <br /> <br />●{" "}
                <span className="font-bold">Settlement permit</span>: This visa
                allows you to live and work in Germany indefinitely. To be
                eligible for a settlement permit, you must have lived in Germany
                for a certain period of time and have a job or a business in
                Germany.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Germany Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Germany, you will need to provide
                the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least three months beyond your planned stay in Germany.
                <br /> <br />● A completed visa application form: You can obtain
                a visa application form from the German embassy or consulate in
                your home country, or you can download it from the website of
                the German Federal Foreign Office.
                <br /> <br />● Passport-sized photos: You will need to provide
                two passport-sized photos with your visa application.
                <br /> <br />● A letter of invitation from your employer in
                Germany: This letter should be issued by your employer and
                should confirm your job offer and the terms of your employment.
                <br /> <br />
                ● Evidence of your qualifications and professional experience:
                You will need to provide proof of your education and work
                experience, such as diplomas, transcripts, and letters of
                reference.
                <br /> <br />● Payment for the visa fee: You will need to pay a
                fee to apply for a worker visa for Germany. The fee amount will
                vary depending on the type of visa you are applying for and your
                country of origin.
                <br /> <br />
                <span className="font-bold">
                  You may also need to provide additional documents, depending
                  on your specific circumstances. It is a good idea to contact
                  the German embassy or consulate in your home country for more
                  information on the specific requirements for a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Germany ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In Germany, you can apply for a worker visa at the German
                embassy or consulate in your home country. You can also apply
                for a visa at the point of entry into Germany, such as at an
                airport.
                <br /> <br /> To apply for a worker visa in Germany, you will
                need to provide the following documents:
                <br /> <br />● A valid passport
                <br /> <br />● A completed visa application form
                <br /> <br />● Passport-sized photos
                <br /> <br />● A letter of invitation from your employer in
                Germany
                <br /> <br />● Evidence of your qualifications and professional
                experience
                <br /> <br />● Payment for the visa fee
                <br /> <br />
                <span className="font-bold">
                  You may also need to provide additional documents, depending
                  on your specific circumstances. It is a good idea to contact
                  the German embassy or consulate in your home country for more
                  information on the specific requirements for a worker visa.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Germany ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes, you will need a student visa to study in Germany.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Germany student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Germany, you will need to follow
                these steps:
                <br /> <br />● Find a school or university in Germany and apply
                to study there.
                <br /> <br />● Once you have been accepted to a school in
                Germany, contact the German embassy or consulate in your home
                country to find out the specific requirements for a student
                visa.
                <br /> <br />● Gather all the necessary documents, including a
                valid passport, a completed visa application form, a recent
                passport-sized photo, and a letter of acceptance from your
                school in Germany.
                <br /> <br />● Submit the required documents and payment for the
                visa fee to the German embassy or consulate.
                <br /> <br />● Wait for a decision on your visa application.
                This process can take several weeks, so it is important to plan
                ahead and apply as early as possible.
                <br /> <br />● If your visa is approved, you will need to pay a
                consular fee and schedule an appointment to have your visa
                issued.
                <br /> <br />● Once you have your visa, you can make
                arrangements to travel to Germany and begin your studies.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Germany student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa, you will need to provide the
                following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least three months beyond your planned stay in Germany.
                <br /> <br />● A completed visa application form: You can obtain
                a visa application form from the German embassy or consulate in
                your home country, or you can download it from the website of
                the German Federal Foreign Office.
                <br /> <br />● A recent passport-sized photo: You will need to
                provide a recent passport-sized photo with your visa
                application.
                <br /> <br />● A letter of acceptance from a German educational
                institution: This letter should be issued by the school you have
                been accepted to, and should confirm that you have been accepted
                to study there.
                <br /> <br />● Evidence of your financial ability to support
                yourself during your studies in Germany: You will need to show
                that you have enough money to cover your living expenses while
                you are studying in Germany. This may include bank statements,
                scholarship letters, or other financial documents.
                <br /> <br />● Payment for the visa fee: You will need to pay a
                fee to apply for a student visa for Germany. The fee amount will
                vary depending on your country of origin and the length of your
                planned stay in Germany.
                <br /> <br />
                <span className="font-bold">
                  You may also need to provide additional documents, depending
                  on your specific circumstances. It is a good idea to contact
                  the German embassy or consulate in your home country for more
                  information on the specific requirements for a student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Germany student Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Germany will depend
                on the length of your planned stay in Germany and your country
                of origin.
                <br /> <br /> Student visas for Germany can be issued for single
                or multiple entries, and can be valid for up to one year. If you
                are planning to study in Germany for a longer period of time,
                you will need to apply for an extension of your student visa
                before it expires.
                <br /> <br />
                <span className="font-bold">
                  The price of a student visa for Germany will vary depending on
                  your country of origin and the length of your planned stay.
                  You can contact the German embassy or consulate in your home
                  country for more information on the specific fees for a
                  student visa.
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

export default Germany;
