import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Bahrain = () => {
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
        <title>Bahrain</title>
        <meta name="description" content="Bahrain" />
        <meta
          name="keywords"
          content="Bahrain travel visa, Bahrain work visa, Bahrain study visa, How to apply for an Bahrain visa, Bahrain visa requirements, Bahrain tourist visa, Bahrain student visa, Bahrain business visa, Bahrain visa processing time, Bahrain visa application process, Bahrain visa for Americans, Bahrain visa for Europeans, Bahrain visa for Bahrainns, Bahrain visa for Canadians, Bahrain visa for Indians, Bahrain visa for Chinese, Bahrain visa for Africans, Bahrain visa for Asians, Bahrain visa for South Americans, Bahrain visa for Middle Easterners, Bahrain visa for UK citizens, Bahrain visa for EU citizens, Bahrain visa for Schengen area, Bahrain visa for non-EU citizens, Bahrain visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Bahrain
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Bahrain is a small island country located in the Persian Gulf. It
              is known for its beautiful landscapes, including the desert region
              known as the Hawar Islands, and its bustling cities, such as the
              capital city of Manama. Bahrain is also known for its rich culture
              and history, including its art, music, and literature.
              Additionally, the country is known for its production of oil and
              natural gas, which are important sources of income for Bahrain.
              Bahrain is also known for its vibrant cuisine, which includes
              dishes such as machboos, a rice dish cooked with meat and spices,
              and shakshouka, a dish of eggs poached in a tomato sauce.
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
                Who can enter Bahrain without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are able to enter Bahrain without
                a visa for short stays. The length of stay allowed without a
                visa varies by country and can be anywhere from 14 days to 90
                days.
                <br /> <br /> Citizens of the following countries are able to
                enter Bahrain without a visa: Bahrain Kuwait Oman Qatar Saudi
                Arabia United Arab Emirates
                <br /> <br /> In addition, citizens of the following countries
                are able to enter Bahrain without a visa for stays of up to 14
                days: Andorra Austria Belgium Bulgaria Croatia Cyprus Czech
                Republic Denmark Estonia Finland France Germany Greece Hungary
                Iceland Ireland Italy Latvia Liechtenstein Lithuania Luxembourg
                Malta Monaco Netherlands Norway Poland Portugal Romania Slovakia
                Slovenia Spain Sweden Switzerland
                <br /> <br /> Citizens of other countries may be able to obtain
                a visa on arrival in Bahrain, but this is not guaranteed and it
                is recommended to check with the Bahraini embassy or consulate
                in your country prior to travel to confirm the visa requirements
                for your specific situation.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the visa and entry requirements
                  for Bahrain may change, so it is always a good idea to check
                  the latest information before you travel.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Bahrain Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Bahrain, you will typically need to
                provide the following documents: <br /> <br />● A completed visa
                application form <br /> <br />● A valid passport with at least
                six months of remaining validity and with at least one blank
                page for the visa <br /> <br />● A recent passport-sized
                photograph <br /> <br />● Proof of sufficient funds to support
                your stay in Bahrain <br /> <br />● A copy of your round-trip or
                onward ticket <br /> <br />● A letter of invitation from a
                sponsor in Bahrain, if applicable <br /> <br />● Any other
                documents required by the Bahraini embassy or consulate in your
                country, such as a letter of employment or proof of student
                status
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Bahrain Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                There are several ways to apply for a visa to enter Bahrain:
                <br /> <br />
                ● Apply for a visa on arrival: Depending on your nationality,
                you may be able to obtain a visa upon arrival in Bahrain. This
                can typically be done at the airport or at any of the border
                crossings into Bahrain.
                <br /> <br />● Apply for a visa through the Bahraini embassy or
                consulate in your country: You can also apply for a visa to
                enter Bahrain through the Bahraini embassy or consulate in your
                country. You will need to submit the required documents,
                including a completed visa application form, a valid passport,
                and any other supporting documents. <br /> <br />● Apply for an
                eVisa: Bahrain offers an online visa application system that
                allows you to apply for a visa online. You will need to create
                an account and provide the required documents, including a
                scanned copy of your passport, a passport-sized photograph, and
                any other supporting documents.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Bahrain ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are able to stay in Bahrain depends on
                the type of visa you have and the purpose of your visit.
                <br /> <br /> If you are a citizen of one of the countries that
                are able to enter Bahrain without a visa, you will be allowed to
                stay for a specific length of time depending on your
                nationality. For example, citizens of certain countries may be
                able to stay for up to 14 days without a visa, while citizens of
                other countries may be able to stay for up to 90 days without a
                visa.
                <br /> <br /> If you are not a citizen of one of the countries
                that can enter Bahrain without a visa, you will need to obtain a
                visa before you travel. The length of time you are allowed to
                stay in Bahrain will be specified on your visa. In general,
                visas for Bahrain are issued for stays of up to 30 days,
                although longer stays may be possible in some cases.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the length of time you are
                  allowed to stay in Bahrain may be subject to change, so it is
                  always a good idea to check the latest information before you
                  travel. If you wish to stay in Bahrain for a longer period of
                  time, you may need to apply for an extension of your visa
                  before it expires.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are Covid Restrictions in Bahrain ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There is no PCR testing nor quarantine requirements for any
                arrivals regardless of their vaccination status.
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
                diplomats and other government officials who are representing
                their country abroad. It is usually issued in addition to a
                regular passport, and it is typically valid for a longer period
                of time.
                <br /> <br /> Diplomatic passports are issued by the Ministry of
                Foreign Affairs of the country that the diplomat represents, and
                they are typically only issued to diplomats who are posted
                abroad. Diplomatic passports are usually valid for a period of
                five years and may be renewed if necessary.
                <br /> <br />
                <span className="font-bold">
                  Holders of diplomatic passports are entitled to certain
                  privileges and immunities while they are abroad, including
                  immunity from arrest and detention, and the right to use
                  diplomatic channels for communication. These privileges and
                  immunities are granted to allow diplomats to carry out their
                  duties without interference and to ensure the smooth
                  functioning of international relations.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Bahrain ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in Bahrain, you will typically need
                to obtain a worker visa before you can begin your employment. A
                worker visa is a type of visa that allows you to enter and work
                in Bahrain for a specific period of time.
                <br /> <br /> To apply for a worker visa in Bahrain, you will
                typically need to have a job offer from an employer in Bahrain
                and the employer will need to sponsor your visa application. The
                employer will also need to obtain a work permit on your behalf.
                <br /> <br />
                ● To apply for a worker visa, you will typically need to provide
                the following documents:
                <br /> <br />● A completed visa application form
                <br /> <br />● A valid passport with at least six months of
                remaining validity and with at least one blank page for the visa
                <br /> <br />
                ● A recent passport-sized photograph
                <br /> <br />● A copy of your job offer and employment contract
                <br /> <br />● A copy of your employer's work permit Any other
                documents required by the Bahraini embassy or consulate in your
                country
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Bahrain Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Bahrain, you will typically need
                to follow the following steps:
                <br /> <br />● Obtain a job offer from an employer in Bahrain:
                You will need to have a job offer from an employer in Bahrain in
                order to apply for a worker visa. The employer will also need to
                sponsor your visa application and obtain a work permit on your
                behalf.
                <br /> <br />● Gather the required documents: You will need to
                gather the required documents for your worker visa application,
                including a completed visa application form, a valid passport
                with at least six months of remaining validity and with at least
                one blank page for the visa, a recent passport-sized photograph,
                a copy of your job offer and employment contract, and any other
                documents required by the Bahraini embassy or consulate in your
                country.
                <br /> <br />● Submit your application: You will need to submit
                your worker visa application, along with all the required
                documents, to the Bahraini embassy or consulate in your country.
                You may also be required to attend an interview as part of the
                visa application process. Wait for a decision: The embassy or
                consulate will review your application and make a decision on
                your worker visa. You will be notified of the decision by the
                embassy or consulate.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Bahrain Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas that are available in
                Bahrain, including:
                <br /> <br />● <span className="font-bold">Work visa</span>: A
                work visa is a type of visa that allows you to work in Bahrain
                for a specific period of time. You will need to have a job offer
                from an employer in Bahrain in order to apply for a work visa.{" "}
                <br /> <br />●{" "}
                <span className="font-bold">Sponsorship visa</span>: A
                sponsorship visa is a type of visa that is sponsored by an
                employer in Bahrain. This type of visa allows you to work for
                the sponsoring employer in Bahrain for a specific period of
                time.
                <br /> <br />●{" "}
                <span className="font-bold">Employment visa</span>: An
                employment visa is a type of visa that allows you to work in
                Bahrain for a specific period of time. You will need to have a
                job offer from an employer in Bahrain in order to apply for an
                employment visa.
                <br /> <br />● <span className="font-bold">Business visa</span>:
                A business visa is a type of visa that allows you to conduct
                business in Bahrain. You will typically need to have a letter of
                invitation from a company or organization in Bahrain in order to
                apply for a business visa.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Bahrain Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Bahrain, you will typically need
                to provide the following documents:
                <br /> <br />● A completed visa application form
                <br /> <br />● A valid passport with at least six months of
                remaining validity and with at least one blank page for the visa
                <br /> <br />
                ● A recent passport-sized photograph
                <br /> <br />● A copy of your job offer and employment contract
                <br /> <br />
                ● A copy of your employer's work permit
                <br /> <br />● Any other documents required by the Bahraini
                embassy or consulate in your country, such as a letter of
                employment or proof of education
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Bahrain ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Bahrain, you will typically need
                to submit your application and the required documents to the
                Bahraini embassy or consulate in your country. It is recommended
                to check with the embassy or consulate for the specific
                requirements and procedures for applying for a worker visa in
                your country.
                <br /> <br /> You should also check with your employer in
                Bahrain to ensure that they have obtained a work permit for you
                and are sponsoring your worker visa application.
                <br /> <br />
                <span className="font-bold">
                  It is recommended to apply for a worker visa well in advance
                  of your planned travel to Bahrain, as the visa application
                  process can take several weeks or even longer to complete. It
                  is also important to note that the requirements for obtaining
                  a worker visa in Bahrain may vary depending on your specific
                  situation, so it is recommended to check with the Bahraini
                  embassy or consulate in your country for the most up-to-date
                  information.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Bahrain ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in Bahrain, you will typically need
                to obtain a student visa before you can begin your studies. A
                student visa is a type of visa that allows you to enter and
                study in Bahrain for a specific period of time.
                <br /> <br /> To apply for a student visa in Bahrain, you will
                typically need to have been accepted to a recognized educational
                institution in Bahrain and have proof of acceptance, such as a
                letter of acceptance or a student ID card. You will also need to
                provide the following documents:
                <br /> <br />● A completed visa application form
                <br /> <br />● A valid passport with at least six months of
                remaining validity and with at least one blank page for the visa
                <br /> <br />
                ● A recent passport-sized photograph <br /> <br />
                ● Proof of acceptance to an educational institution in Bahrain
                <br /> <br />● Proof of sufficient funds to support your studies
                in Bahrain Any other documents required by the Bahraini embassy
                or consulate in your country
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Bahrain student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Bahrain, you will typically need
                to follow the following steps:
                <br /> <br />● Obtain acceptance to a recognized educational
                institution in Bahrain: You will need to have been accepted to a
                recognized educational institution in Bahrain in order to apply
                for a student visa. You will need to provide proof of
                acceptance, such as a letter of acceptance or a student ID card,
                as part of your visa application. <br /> <br />
                ● Gather the required documents: You will need to gather the
                required documents for your student visa application, including
                a completed visa application form, a valid passport with at
                least six months of remaining validity and with at least one
                blank page for the visa, a recent passport-sized photograph,
                proof of acceptance to an educational institution in Bahrain,
                and any other documents required by the Bahraini embassy or
                consulate in your country.
                <br /> <br />● Submit your application: You will need to submit
                your student visa application, along with all the required
                documents, to the Bahraini embassy or consulate in your country.
                You may also be required to attend an interview as part of the
                visa application process.
                <br /> <br />● Wait for a decision: The embassy or consulate
                will review your application and make a decision on your student
                visa. You will be notified of the decision by the embassy or
                consulate.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Bahrain student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Bahrain, you will typically need
                to provide the following documents:
                <br /> <br />● A completed visa application form
                <br /> <br />● A valid passport with at least six months of
                remaining validity and with at least one blank page for the visa
                <br /> <br />● A recent passport-sized photograph
                <br /> <br />● Proof of acceptance to an educational institution
                in Bahrain, such as a letter of acceptance or a student ID card
                <br /> <br />● Proof of sufficient funds to support your studies
                in Bahrain, such as bank statements or a letter from your
                sponsor
                <br /> <br />● Any other documents required by the Bahraini
                embassy or consulate in your country, such as a letter of
                employment or proof of education
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Bahrain student Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Bahrain may vary
                depending on the specific circumstances of your situation, such
                as your nationality and the length of your studies.
                <br /> <br /> In general, student visas for Bahrain are
                typically valid for the duration of your studies, up to a
                maximum of four years. However, the specific length of validity
                may vary depending on the specific institution you will be
                attending and the terms of your enrollment.
                <br /> <br /> The price of a student visa in Bahrain may also
                vary depending on your nationality and the specific requirements
                of the Bahraini embassy or consulate in your country. It is
                recommended to check with the embassy or consulate for the most
                up-to-date information on the specific fees for a student visa
                in your situation.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the validity and price of a
                  student visa in Bahrain may be subject to change, so it is
                  always a good idea to check the latest information before you
                  apply for a student visa.
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

export default Bahrain;
