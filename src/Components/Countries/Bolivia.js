import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Bolivia = () => {
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
        <title>Bolivia</title>
        <meta name="description" content="Bolivia" />
        <meta
          name="keywords"
          content="Bolivia travel visa, Bolivia work visa, Bolivia study visa, How to apply for an Bolivia visa, Bolivia visa requirements, Bolivia tourist visa, Bolivia student visa, Bolivia business visa, Bolivia visa processing time, Bolivia visa application process, Bolivia visa for Americans, Bolivia visa for Europeans, Bolivia visa for Bolivians, Bolivia visa for Canadians, Bolivia visa for Indians, Bolivia visa for Chinese, Bolivia visa for Africans, Bolivia visa for Asians, Bolivia visa for South Americans, Bolivia visa for Middle Easterners, Bolivia visa for UK citizens, Bolivia visa for EU citizens, Bolivia visa for Schengen area, Bolivia visa for non-EU citizens, Bolivia visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Bolivia
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Bolivia is a country located in South America, and it is well
              known for its beautiful landscapes, rich cultural heritage, and
              vibrant traditions. Some of the most notable things that Bolivia
              is known for include its stunning Andean mountain ranges, which
              are home to some of the highest peaks in the world, its vibrant
              indigenous cultures, which have a strong presence throughout the
              country, and its delicious cuisine, which features a mix of
              indigenous and European influences. Additionally, Bolivia is known
              for its rich history and cultural heritage, which can be seen in
              its many museums and historic sites, such as the city of Potosi,
              which was once one of the richest cities in the world due to its
              silver mines.
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
                Who can enter Bolivia without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are able to enter Bolivia without
                a visa for stays of up to 90 days. These countries include:
                <span className="font-bold">
                  &nbsp;Argentina, Chile, Colombia, Ecuador, Paraguay, Peru,
                  Uruguay.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  Holders of valid visas or permanent residence permits from the
                  United States, Canada, Australia, New Zealand, and the
                  European Union are also able to enter Bolivia without a visa
                  for stays of up to 90 days.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Bolivia Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Bolivia, you will generally need to
                provide the following documents:
                <br /> <br />● A completed visa application form. You can obtain
                this form from the Embassy of Bolivia in your country of
                residence or from a Bolivian embassy or consulate abroad.
                <br /> <br />● A valid passport. Your passport must be valid for
                at least six months beyond the date of your intended departure
                from Bolivia.
                <br /> <br />● A passport-sized photograph. This photograph
                should meet the requirements for passport photographs and should
                be taken within the past six months.
                <br /> <br />● Evidence of your purpose of travel. This could be
                in the form of a letter from your employer, a letter of
                invitation from a host in Bolivia, or documentation of your
                enrollment in a school or educational institution in the
                country.
                <br /> <br />● Evidence of sufficient financial means. You will
                need to provide evidence that you have enough money to support
                yourself during your stay in Bolivia. This could be in the form
                of bank statements, credit card statements, or a letter from
                your employer stating that you will be provided with financial
                support during your visit.
                <br /> <br />● Proof of medical insurance. You will need to
                provide proof that you have medical insurance that covers you
                for the duration of your stay in Bolivia.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Bolivia Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Bolivia, you will need to follow
                these steps:
                <br /> <br />● Determine the type of visa you need. Bolivia
                offers a range of visa categories, including tourist visas,
                business visas, student visas, and work visas. You will need to
                determine the type of visa that is right for you based on the
                purpose of your visit to the country.
                <br /> <br />● Gather the required documents. You will need to
                collect a number of documents in order to apply for a visa to
                enter Bolivia, including a completed visa application form, a
                valid passport, a passport-sized photograph, and evidence of
                your purpose of travel.
                <br /> <br />● Submit your application. You can submit your visa
                application in person at the Embassy of Bolivia in your country
                of residence or at a Bolivian embassy or consulate abroad.
                Alternatively, you may be able to apply online or through the
                mail. Check with the embassy or consulate to determine the best
                way to submit your application.
                <br /> <br />● Pay the visa fee. There is a fee for obtaining a
                visa to enter Bolivia, which must be paid when you submit your
                application. The fee amount will depend on the type of visa you
                are applying for and the length of your intended stay in the
                country.
                <br /> <br />● Wait for a decision on your application. It may
                take several weeks for the embassy or consulate to process your
                visa application. Be patient and do not make any travel
                arrangements until you have received a decision on your
                application.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Bolivia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Bolivia will depend on the
                type of visa you have and the purpose of your visit. Here are
                some examples of the lengths of stay that are generally allowed
                for different types of visas:
                <br /> <br />● Tourist visas: Tourist visas are typically valid
                for stays of up to 90 days. If you need to stay in Bolivia for
                longer than 90 days, you may be able to extend your visa.
                <br /> <br />
                ● Business visas: Business visas are typically valid for stays
                of up to 90 days. If you need to stay in Bolivia for longer than
                90 days, you may be able to extend your visa.
                <br /> <br />● Student visas: Student visas are typically valid
                for the duration of your studies in Bolivia, up to a maximum of
                two years. If you need to stay in the country for longer than
                two years, you may be able to extend your visa.
                <br /> <br />● Work visas: Work visas are typically valid for
                the duration of your employment in Bolivia, up to a maximum of
                two years. If you need to stay in the country for longer than
                two years, you may be able to extend your visa.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Bolivia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Travelers entering Bolivia are required to present negative PCR
                test results, no older than 72 hours, or an antigen test no
                older than 48 hours. Fully vaccinated arrivals are exempt.
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
                A diplomatic passport is a type of passport that is issued to
                diplomats and other government officials who are traveling
                abroad on official business. Diplomatic passports are typically
                issued by the government of the country where the diplomat or
                official is a citizen.
                <br /> <br /> Holders of diplomatic passports are typically
                entitled to a number of privileges and immunities while
                traveling abroad, including immunity from arrest, detention, and
                prosecution in most countries. These privileges and immunities
                are intended to allow diplomats to carry out their official
                duties without interference.
                <br /> <br />
                <span className="font-bold">
                  It's worth noting that the privileges and immunities
                  associated with diplomatic passports vary from country to
                  country, and are generally governed by international
                  conventions and agreements. It's always a good idea to check
                  with the embassy or consulate of the country you are visiting
                  for information on the privileges and immunities that apply to
                  you as a holder of a diplomatic passport.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Bolivia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to work in Bolivia, you will generally need to
                obtain a worker visa. A worker visa is a type of visa that
                allows you to work in the country for a specific period of time.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Bolivia Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Bolivia, you will need to follow
                these steps:
                <br /> <br />● Obtain a job offer from a Bolivian employer.
                Before you can apply for a worker visa, you will need to have
                received a job offer from a Bolivian employer. Your employer
                should provide you with a written offer of employment, which you
                will need to present as part of your worker visa application.
                <br /> <br />
                ● Gather the required documents. You will need to collect a
                number of documents in order to apply for a worker visa in
                Bolivia, including a completed worker visa application form, a
                valid passport, a passport-sized photograph, and proof of your
                employment in Bolivia.
                <br /> <br />● Submit your application. You can submit your
                worker visa application in person at the Embassy of Bolivia in
                your country of residence or at a Bolivian embassy or consulate
                abroad. Alternatively, you may be able to apply online or
                through the mail. Check with the embassy or consulate to
                determine the best way to submit your application.
                <br /> <br />● Pay the visa fee. There is a fee for obtaining a
                worker visa in Bolivia, which must be paid when you submit your
                application. The fee amount will depend on the length of your
                intended stay in the country and the type of work you will be
                doing.
                <br /> <br />● Wait for a decision on your application. It may
                take several weeks for the embassy or consulate to process your
                worker visa application. Be patient and do not make any travel
                arrangements until you have received a decision on your
                application.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Bolivia Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                In Bolivia, there are several different types of worker visas
                that you can apply for, depending on the purpose of your visit
                and the type of work you will be doing in the country. These
                types of worker visas include:
                <br /> <br />● Temporary worker visa: A temporary worker visa is
                a type of worker visa that allows you to work in Bolivia for a
                specific period of time, typically up to two years. This type of
                visa is intended for people who have received a job offer from a
                Bolivian employer and who will be working in the country on a
                temporary basis.
                <br /> <br />● Permanent worker visa: A permanent worker visa is
                a type of worker visa that allows you to work in Bolivia on a
                long-term basis. This type of visa is intended for people who
                have received a job offer from a Bolivian employer and who will
                be working in the country on a permanent basis.
                <br /> <br />● Self-employed worker visa: A self-employed worker
                visa is a type of worker visa that allows you to work in Bolivia
                as a self-employed person. This type of visa is intended for
                people who want to start their own business in Bolivia or who
                want to work as a freelancer or independent contractor.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Bolivia Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Bolivia, you will generally need
                to provide the following documents:
                <br /> <br />● A completed worker visa application form. You can
                obtain this form from the Embassy of Bolivia in your country of
                residence or from a Bolivian embassy or consulate abroad.
                <br /> <br />● A valid passport. Your passport must be valid for
                at least six months beyond the date of your intended departure
                from Bolivia.
                <br /> <br />● A passport-sized photograph. This photograph
                should meet the requirements for passport photographs and should
                be taken within the past six months.
                <br /> <br />● A written offer of employment from a Bolivian
                employer. You will need to provide a written offer of employment
                from a Bolivian employer, indicating the type of work you will
                be doing in the country and the duration of your employment.
                <br /> <br />
                ● Evidence of your qualifications and experience. You will need
                to provide evidence of your qualifications and experience in the
                field of work you will be doing in Bolivia. This could be in the
                form of a resume, a letter of recommendation, or copies of your
                educational transcripts.
                <br /> <br />● Proof of sufficient financial means. You will
                need to provide evidence that you have enough money to support
                yourself during your stay in Bolivia. This could be in the form
                of bank statements, credit card statements, or a letter from
                your employer stating that you will be provided with financial
                support during your visit.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Bolivia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Bolivia, you will generally need
                to submit your application in person at the Embassy of Bolivia
                in your country of residence or at a Bolivian embassy or
                consulate abroad. You may also be able to apply online or
                through the mail, depending on the embassy or consulate where
                you are applying.
                <br /> <br /> It's generally a good idea to apply for your
                worker visa well in advance of your intended date of travel to
                Bolivia. This will give the embassy or consulate enough time to
                process your application and make a decision on your visa. It
                may take several weeks for the embassy or consulate to process
                your worker visa application, so it's important to plan ahead
                and not wait until the last minute to apply.
                <br /> <br />
                <span className="font-bold">
                  You should also be aware that you may need to schedule an
                  in-person interview as part of the worker visa application
                  process. This will depend on the embassy or consulate where
                  you are applying and the type of worker visa you are applying
                  for.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Bolivia ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to study in Bolivia, you will generally need to
                obtain a student visa. A student visa is a type of visa that
                allows you to study in the country for a specific period of
                time.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Bolivia student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Bolivia, you will need to follow
                these steps:
                <br /> <br />● Enroll in an educational institution in Bolivia.
                Before you can apply for a student visa, you will need to enroll
                in an educational institution in Bolivia. You will need to
                provide proof of your enrollment as part of your student visa
                application.
                <br /> <br />● Gather the required documents. You will need to
                collect a number of documents in order to apply for a student
                visa in Bolivia, including a completed student visa application
                form, a valid passport, a passport-sized photograph, and
                evidence of your enrollment in a Bolivian educational
                institution.
                <br /> <br />● Submit your application. You can submit your
                student visa application in person at the Embassy of Bolivia in
                your country of residence or at a Bolivian embassy or consulate
                abroad. Alternatively, you may be able to apply online or
                through the mail. Check with the embassy or consulate to
                determine the best way to submit your application.
                <br /> <br />● Pay the visa fee. There is a fee for obtaining a
                student visa in Bolivia, which must be paid when you submit your
                application. The fee amount will depend on the length of your
                intended stay in the country and the type of studies you will be
                pursuing.
                <br /> <br />● Wait for a decision on your application. It may
                take several weeks for the embassy or consulate to process your
                student visa application. Be patient and do not make any travel
                arrangements until you have received a decision on your
                application.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Bolivia student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Bolivia, you will generally need
                to provide the following documents:
                <br /> <br />● A completed student visa application form. You
                can obtain this form from the Embassy of Bolivia in your country
                of residence or from a Bolivian embassy or consulate abroad.
                <br /> <br />● A valid passport. Your passport must be valid for
                at least six months beyond the date of your intended departure
                from Bolivia.
                <br /> <br />● A passport-sized photograph. This photograph
                should meet the requirements for passport photographs and should
                be taken within the past six months.
                <br /> <br />● An acceptance letter from a Bolivian educational
                institution. You will need to provide an acceptance letter from
                a Bolivian educational institution indicating that you have been
                accepted to study in the country.
                <br /> <br />● Evidence of sufficient financial means. You will
                need to provide evidence that you have enough money to support
                yourself during your studies in Bolivia. This could be in the
                form of bank statements, credit card statements, or a letter
                from your educational institution stating that you will be
                provided with financial support during your studies.
                <br /> <br />● A letter of sponsorship. If you are being
                sponsored by someone else for your studies in Bolivia, you will
                need to provide a letter of sponsorship from your sponsor.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Bolivia student Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity of a student visa in Bolivia will depend on the
                length of your intended stay in the country and the type of
                studies you will be pursuing. Student visas are generally issued
                for the duration of your studies, up to a maximum of two years.
                <br /> <br />
                <span className="font-bold">
                  The price of a student visa in Bolivia will also depend on the
                  length of your intended stay in the country and the type of
                  studies you will be pursuing. There is a fee for obtaining a
                  student visa in Bolivia, which must be paid when you submit
                  your application. The fee amount will depend on the length of
                  your intended stay in the country and the type of studies you
                  will be pursuing.
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

export default Bolivia;
