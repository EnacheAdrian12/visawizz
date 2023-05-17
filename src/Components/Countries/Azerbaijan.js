import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Azerbaijan = () => {
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
        <title>Azerbaijan</title>
        <meta name="description" content="Azerbaijan" />
        <meta
          name="keywords"
          content="Azerbaijan travel visa, Azerbaijan work visa, Azerbaijan study visa, How to apply for an Azerbaijan visa, Azerbaijan visa requirements, Azerbaijan tourist visa, Azerbaijan student visa, Azerbaijan business visa, Azerbaijan visa processing time, Azerbaijan visa application process, Azerbaijan visa for Americans, Azerbaijan visa for Europeans, Azerbaijan visa for Azerbaijanns, Azerbaijan visa for Canadians, Azerbaijan visa for Indians, Azerbaijan visa for Chinese, Azerbaijan visa for Africans, Azerbaijan visa for Asians, Azerbaijan visa for South Americans, Azerbaijan visa for Middle Easterners, Azerbaijan visa for UK citizens, Azerbaijan visa for EU citizens, Azerbaijan visa for Schengen area, Azerbaijan visa for non-EU citizens, Azerbaijan visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Azerbaijan
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Azerbaijan is a country located in the Caucasus region of Eurasia.
              It is known for its beautiful landscapes, including the Caucasus
              Mountains and the Caspian Sea. Azerbaijan is also known for its
              rich culture and history, including its art, music, and
              literature. Additionally, the country is known for its production
              of oil and natural gas, which are important sources of income for
              Azerbaijan. Azerbaijan is also known for its vibrant cuisine,
              which includes dishes such as dolma, a dish made of stuffed grape
              leaves, and plov, a rice dish cooked with meat and vegetables.
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
                Who can enter Azerbaijan without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are allowed to enter Azerbaijan
                visa-free for short stays of up to 90 days. These countries
                include:
                <span className="font-bold">
                  Albania, Andorra, Argentina, Australia, Austria, Bahrain,
                  Belarus, Belgium, Bosnia and Herzegovina, Brazil, Brunei,
                  Bulgaria, Canada, Chile, China, Colombia, Costa Rica, Croatia,
                  Cyprus, Czech Republic, Denmark, Estonia, Finland, France,
                  Georgia, Germany, Greece, Hungary, Iceland, Ireland, Italy,
                  Japan, Kuwait, Latvia, Liechtenstein, Lithuania, Luxembourg,
                  Malta, Mexico, Moldova, Monaco, Montenegro, Netherlands, New
                  Zealand, Norway, Oman, Panama, Poland, Portugal, Qatar,
                  Romania, San Marino, Saudi Arabia, Serbia, Singapore,
                  Slovakia, Slovenia, South Korea, Spain, Sweden, Switzerland,
                  Thailand, Turkey, Ukraine, United Arab Emirates, United
                  Kingdom, United States, Vatican City.{" "}
                </span>
                <br />
                <br /> It's important to note that these visa-free arrangements
                apply only to tourism and business purposes, and do not allow
                individuals to work or study in Azerbaijan. In addition,
                travelers must have a passport that is valid for at least 6
                months from the date of arrival in Azerbaijan, and must show
                evidence of sufficient funds to cover their stay in the country.
                <br />
                <br />
                If you are a citizen of a country not listed above, you will
                need to obtain a visa in order to enter Azerbaijan. You can
                apply for a visa at an Azerbaijani embassy or consulate in your
                home country, or through an online visa application system.
                <br />
                <br />
                <span className="font-bold">
                  It's always a good idea to check the most up-to-date
                  information on visa requirements before planning any
                  international travel, as these requirements can change.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Azerbaijan Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Azerbaijan, you will need to
                provide the following documents:
                <br />
                <br />● A valid passport: You will need a passport that is valid
                for at least 6 months from the date of your arrival in
                Azerbaijan.
                <br />
                <br />● A completed visa application form: You will need to fill
                out an application form, which you can usually obtain from the
                embassy or consulate where you will be submitting your
                application. You can also find the form online on the embassy's
                website.
                <br />
                <br />● A recent passport-sized photograph: You will need to
                provide a recent photograph of yourself that meets passport
                photo requirements.
                <br />
                <br />● Evidence of sufficient funds: You will need to provide
                evidence that you have sufficient funds to cover the costs of
                your stay in Azerbaijan. This may include bank statements,
                credit card statements, or a letter from your employer stating
                that you will be financially supported during your stay.
                <br />
                <br />
                ● Evidence of travel insurance: You will need to provide
                evidence of travel insurance that covers you for the duration of
                your stay in Azerbaijan.
                <br />
                <br />● A letter of invitation: Depending on the purpose of your
                visit, you may need to provide a letter of invitation from an
                individual or organization in Azerbaijan.
                <br />
                <br />● Other supporting documents: You may also be required to
                provide other supporting documents depending on the purpose of
                your visit, such as a letter from your employer or a letter of
                acceptance from a university or other educational institution.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Azerbaijan Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                There are several ways to apply for a visa to enter Azerbaijan,
                depending on your country of citizenship and the embassy or
                consulate where you will be applying. Here are the general steps
                for applying for a visa:
                <br />
                <br />● Determine your visa type: Azerbaijan offers several
                types of visas, including tourist visas, business visas, and
                student visas. You will need to determine the type of visa that
                best fits the purpose of your visit.
                <br />
                <br />● Gather the required documents: You will need to provide
                a number of documents as part of your visa application,
                including a valid passport, a completed visa application form, a
                recent passport-sized photograph, and evidence of sufficient
                funds and travel insurance. You may also need to provide other
                supporting documents depending on the purpose of your visit.
                <br />
                <br />● Submit your application: You can usually submit your
                visa application in person at an embassy or consulate, or by
                mail if the embassy or consulate allows it. Some countries also
                offer an online visa application system, which allows you to
                submit your application electronically.
                <br />
                <br />● Pay the visa fee: You will need to pay a fee to process
                your visa application. The fee amount varies depending on the
                type of visa you are applying for and your country of
                citizenship.
                <br />
                <br />● Wait for a decision: Once you have submitted your
                application, you will need to wait for a decision on your visa.
                The processing time for visa applications can vary, so it's a
                good idea to apply well in advance of your planned travel date.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Azerbaijan ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you can stay in Azerbaijan depends on
                the type of visa you have and the purpose of your visit. Here
                are some general guidelines: <br />
                <br />● Tourist visas: Tourist visas are issued for stays of up
                to 90 days. <br />
                <br />● Business visas: Business visas are issued for stays of
                up to 90 days, although it may be possible to extend your stay
                for up to one year if you are working on a specific project in
                Azerbaijan. <br />
                <br />● Student visas: Student visas are issued for the duration
                of your studies in Azerbaijan, up to a maximum of one year.{" "}
                <br />
                <br />● Work visas: Work visas are issued for the duration of
                your employment in Azerbaijan, up to a maximum of one year.{" "}
                <br />
                <br />
                <span className="font-bold">
                  {" "}
                  It's important to note that these are general guidelines, and
                  the length of time you can stay in Azerbaijan may vary
                  depending on your specific circumstances and the embassy or
                  consulate where you applied for your visa. It's always a good
                  idea to check with the embassy or consulate and to confirm the
                  specific requirements and limitations for your visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are Covid Restrictions in Azerbaijan ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The Cabinet of Ministers announced that, beginning April 15,
                2022, the need for a negative PCR test for entry to Azerbaijan
                is eliminated. U.S. citizen travelers over age 18 must have a
                COVID-19 passport (or a document confirming full vaccination
                against COVID-19 or immunity to COVID-19).
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
                A diplomatic passport is a passport issued to diplomats and
                consular officials for the purpose of conducting official
                business on behalf of their home country while abroad. In
                Azerbaijan, diplomatic passports are issued to officials who are
                accredited to foreign governments or international
                organizations, such as the United Nations. Diplomatic passport
                holders are generally entitled to a higher level of protection
                and assistance while abroad, and are often granted privileges
                and immunities in the countries where they are posted. However,
                it is important to note that these privileges and immunities are
                granted by the host country and are not automatically recognized
                by all countries.
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Azerbaijan ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in Azerbaijan, you will need to
                obtain a work visa in order to legally work in the country. A
                work visa is a type of visa that allows you to take up
                employment in Azerbaijan.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Azerbaijan Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Azerbaijan, you will need to
                follow these general steps:
                <br />
                <br />● Determine your visa type: Azerbaijan offers several
                types of visas, including tourist visas, business visas, and
                student visas. You will need to apply for a worker visa if you
                are planning to work in Azerbaijan.
                <br />
                <br />● Gather the required documents: As mentioned in my
                previous response, you will need to provide a number of
                documents as part of your worker visa application, including a
                valid passport, a completed visa application form, a recent
                passport-sized photograph, and evidence of sufficient funds and
                travel insurance. You will also need to obtain a work permit
                from the Ministry of Labor and Social Protection of the Republic
                of Azerbaijan.
                <br />
                <br />● Submit your application: You can usually submit your
                worker visa application in person at an embassy or consulate, or
                by mail if the embassy or consulate allows it. Some countries
                also offer an online visa application system, which allows you
                to submit your application electronically.
                <br />
                <br />● Pay the visa fee: You will need to pay a fee to process
                your worker visa application. The fee amount varies depending on
                the type of visa you are applying for and your country of
                citizenship.
                <br />
                <br />● Wait for a decision: Once you have submitted your
                application, you will need to wait for a decision on your worker
                visa. The processing time for visa applications can vary, so
                it's a good idea to apply well in advance of your planned travel
                date.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Azerbaijan Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Azerbaijan offers several types of worker visas depending on the
                nature of your employment and the length of your stay in the
                country. Here are some common types of worker visas in
                Azerbaijan: <br />
                <br />● Short-term worker visa: A short-term worker visa is
                issued for stays of up to 90 days, and is typically used for
                temporary work assignments or short-term business trips. <br />
                <br />
                ● Long-term worker visa: A long-term worker visa is issued for
                stays of up to one year, and is typically used for employment in
                Azerbaijan on a more permanent basis. <br />
                <br />● Work and residence permit: A work and residence permit
                is issued for stays of up to one year, and allows you to work
                and live in Azerbaijan on a more permanent basis. To obtain a
                work and residence permit, you will need to have a job offer
                from an employer in Azerbaijan and pass a medical examination.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Azerbaijan Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Azerbaijan, you will need to
                provide the following documents:
                <br />
                <br />● A valid passport: You will need a passport that is valid
                for at least 6 months from the date of your arrival in
                Azerbaijan.
                <br />
                <br />● A completed visa application form: You will need to fill
                out an application form, which you can usually obtain from the
                embassy or consulate where you will be submitting your
                application. You can also find the form online on the embassy's
                website.
                <br />
                <br />● A recent passport-sized photograph: You will need to
                provide a recent photograph of yourself that meets passport
                photo requirements.
                <br />
                <br />● Evidence of sufficient funds: You will need to provide
                evidence that you have sufficient funds to cover the costs of
                your stay in Azerbaijan. This may include bank statements,
                credit card statements, or a letter from your employer stating
                that you will be financially supported during your stay.
                <br />
                <br />
                ● Evidence of travel insurance: You will need to provide
                evidence of travel insurance that covers you for the duration of
                your stay in Azerbaijan.
                <br />
                <br />● A work permit: You will need to obtain a work permit
                from the Ministry of Labor and Social Protection of the Republic
                of Azerbaijan. Your employer will usually assist you with this
                process.
                <br />
                <br />● A job offer from an employer in Azerbaijan: You will
                need to provide a job offer from an employer in Azerbaijan,
                which should include details of your employment, such as your
                job title, salary, and the duration of your employment.
                <br />
                <br />● A medical certificate: You will need to pass a medical
                examination and provide a medical certificate to confirm that
                you are in good health.
                <br />
                <br />● Other supporting documents: You may also be required to
                provide other supporting documents depending on the nature of
                your employment and the embassy or consulate where you will be
                applying.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Azerbaijan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                You can apply for a worker visa in Azerbaijan at the embassy or
                consulate of Azerbaijan in your home country. You can usually
                find a list of Azerbaijani embassies and consulates on the
                website of the Ministry of Foreign Affairs of the Republic of
                Azerbaijan.
                <br />
                <br /> It's a good idea to apply for your worker visa well in
                advance of your planned travel date, as the visa application
                process can take several weeks to complete. You should also
                allow enough time to gather the required documents and to
                complete any necessary medical exams or other requirements.
                <br />
                <br />
                <span className="font-bold">
                  To apply for a worker visa, you will need to follow the
                  general steps outlined in my previous response, which include
                  gathering the required documents, completing the application
                  form, and paying the visa fee. You may also need to attend an
                  interview at the embassy or consulate as part of the visa
                  application process.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Azerbaijan ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in Azerbaijan, you will need to
                obtain a student visa in order to legally study in the country.
                A student visa is a type of visa that allows you to study in
                Azerbaijan for a period of time.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for Azerbaijan student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Azerbaijan, you will need to
                follow these general steps:
                <br />
                <br />● Determine your visa type: Azerbaijan offers several
                types of visas, including tourist visas, business visas, and
                student visas. You will need to apply for a student visa if you
                are planning to study in Azerbaijan. <br />
                <br />● Gather the required documents: As mentioned in my
                previous response, you will need to provide a number of
                documents as part of your student visa application, including a
                valid passport, a completed visa application form, a recent
                passport-sized photograph, and evidence of sufficient funds and
                travel insurance. You will also need to provide a letter of
                acceptance from a university or other educational institution in
                Azerbaijan.
                <br />
                <br />● Submit your application: You can usually submit your
                student visa application in person at an embassy or consulate,
                or by mail if the embassy or consulate allows it. Some countries
                also offer an online visa application system, which allows you
                to submit your application electronically.
                <br />
                <br />● Pay the visa fee: You will need to pay a fee to process
                your student visa application. The fee amount varies depending
                on the type of visa you are applying for and your country of
                citizenship.
                <br />
                <br />● Wait for a decision: Once you have submitted your
                application, you will need to wait for a decision on your
                student visa. The processing time for visa applications can
                vary, so it's a good idea to apply well in advance of your
                planned travel date.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Azerbaijan student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Azerbaijan, you will need to
                provide the following documents:
                <br />
                <br />● A valid passport: You will need a passport that is valid
                for at least 6 months from the date of your arrival in
                Azerbaijan.
                <br />
                <br />● A completed visa application form: You will need to fill
                out an application form, which you can usually obtain from the
                embassy or consulate where you will be submitting your
                application. You can also find the form online on the embassy's
                website.
                <br />
                <br />● A recent passport-sized photograph: You will need to
                provide a recent photograph of yourself that meets passport
                photo requirements.
                <br />
                <br />● Evidence of sufficient funds: You will need to provide
                evidence that you have sufficient funds to cover the costs of
                your stay in Azerbaijan, including tuition and living expenses.
                This may include bank statements, credit card statements, or a
                letter from your financial sponsor stating that you will be
                financially supported during your stay.
                <br />
                <br />● Evidence of travel insurance: You will need to provide
                evidence of travel insurance that covers you for the duration of
                your stay in Azerbaijan.
                <br />
                <br />● A letter of acceptance from a university or other
                educational institution in Azerbaijan: You will need to provide
                a letter of acceptance from the university or educational
                institution where you will be studying, confirming that you have
                been accepted into a program of study. <br />
                <br />● Other supporting documents: You may also be required to
                provide other supporting documents depending on the embassy or
                consulate where you will be applying.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Azerbaijan student Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Azerbaijan will
                depend on the length of your studies and your country of
                citizenship. Here are some general guidelines:
                <br />
                <br />● Validity: Student visas are usually issued for the
                duration of your studies in Azerbaijan, up to a maximum of one
                year. If you are planning to study for a longer period of time,
                you may need to apply for an extension of your student visa.
                <br />
                <br />● Price: The price of a student visa in Azerbaijan varies
                depending on your country of citizenship and the length of your
                stay. You will need to pay a fee to process your student visa
                application. The fee amount varies depending on the type of visa
                you are applying for and your country of citizenship. <br />
                <br />
                <span className="font-bold">
                  {" "}
                  It's a good idea to check with the embassy or consulate where
                  you will be applying for your student visa to confirm the
                  specific requirements and fees for your visa. It's also
                  important to note that the student visa application process
                  can vary depending on your country of citizenship and the
                  embassy or consulate where you will be applying.!{" "}
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

export default Azerbaijan;
