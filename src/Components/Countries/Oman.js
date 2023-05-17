import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Oman = () => {
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
        <title>Oman</title>
        <meta name="description" content="Oman" />
        <meta
          name="keywords"
          content="Oman travel visa, Oman work visa, Oman study visa, How to apply for an Oman visa, Oman visa requirements, Oman tourist visa, Oman student visa, Oman business visa, Oman visa processing time, Oman visa application process, Oman visa for Americans, Oman visa for Europeans, Oman visa for Omanns, Oman visa for Canadians, Oman visa for Omanns, Oman visa for Chinese, Oman visa for Africans, Oman visa for Asians, Oman visa for South Americans, Oman visa for Middle Easterners, Oman visa for UK citizens, Oman visa for EU citizens, Oman visa for Schengen area, Oman visa for non-EU citizens, Oman visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Oman
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Oman is a country in the Middle East, located on the Arabian
              Peninsula. It is known for its rich history and cultural heritage,
              as well as for its stunning natural beauty. Oman is known for its
              beautiful beaches, scenic mountains, and desert landscapes, and
              for its vibrant cities, such as the capital city, Muscat. The
              country is also known for its historic forts and castles, such as
              the Nizwa Fort, and for its rich cultural traditions, including
              music, dance, and art. Oman is also known for its hospitality and
              its welcoming people, and for its delicious cuisine, which blends
              Middle Eastern and Indian influences.
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
                Who can enter Oman without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of the following countries are able to enter Oman
                without a visa for a stay of up to 30 days: Bahrain, Kuwait,
                Qatar, Saudi Arabia, United Arab Emirates
                <br /> <br /> Citizens of the following countries are also able
                to enter Oman without a visa for a stay of up to 14 days:
                <span className="font-bold">
                  &nbsp;Andorra, Australia, Austria, Belgium, Brunei, Bulgaria,
                  Canada, Croatia, Cyprus, Czech Republic, Denmark, Estonia,
                  Finland, France, Germany, Greece, Hungary, Iceland, Ireland,
                  Italy, Japan, Latvia, Liechtenstein, Lithuania, Luxembourg,
                  Malta, Monaco, Netherlands, New Zealand, Norway, Poland,
                  Portugal, Romania, Russia, San Marino, Slovakia, Slovenia,
                  South Korea, Spain, Sweden, Switzerland, Turkey, United
                  Kingdom, United States{" "}
                </span>
                <br /> <br />
                <span className="font-bold">
                  It is important to note that these visa-free arrangements are
                  subject to change, and the rules may vary depending on the
                  specific circumstances of an individual's visit. It is always
                  best to check with the embassy or consulate of Oman before
                  making travel plans.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Oman Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Oman, you will generally need to
                provide the following documents: <br /> <br />● A completed visa
                application form: This form can typically be obtained from the
                embassy or consulate of Oman in your country of residence, or it
                may be available online. <br /> <br />● A valid passport: Your
                passport should be valid for at least six months beyond the date
                of your intended stay in Oman. <br /> <br />● A recent
                passport-sized photograph: This should be a clear, color
                photograph of your face that meets the requirements for passport
                photos. <br /> <br />● A confirmed hotel reservation or a letter
                of invitation from a sponsor in Oman: This should include
                details about your intended length of stay and the purpose of
                your visit. <br /> <br />● A round-trip ticket or proof of
                onward travel: You will need to provide evidence of your travel
                plans, such as a confirmed ticket for your return journey or a
                ticket for onward travel to another destination. <br /> <br />●
                Other documents may be required depending on the specific
                circumstances of your visit, such as a letter of employment,
                proof of sufficient financial means, or a letter from your
                employer stating the purpose of your visit. It is always best to
                check with the embassy or consulate of Oman to determine the
                specific requirements for your visa application.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Oman Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Oman, you will generally need to
                follow these steps: <br /> <br />● Determine the type of visa
                you need: Oman offers several types of visas, including tourist
                visas, business visas, and work visas. You will need to
                determine which type of visa is appropriate for your visit and
                make sure you meet the requirements for that type of visa.
                <br /> <br />● Gather the required documents: In addition to a
                completed visa application form, you will typically need to
                provide a valid passport, a recent passport-sized photograph, a
                confirmed hotel reservation or letter of invitation from a
                sponsor in Oman, and evidence of your travel plans (such as a
                round-trip ticket or proof of onward travel). Other documents
                may be required depending on the specific circumstances of your
                visit. <br /> <br />● Submit your application: You can typically
                submit your visa application in person at the embassy or
                consulate of Oman in your country of residence, or you may be
                able to apply online through an official government website. You
                will need to pay a fee to process your application. <br />{" "}
                <br />● Wait for a decision: The processing time for visa
                applications can vary, so it is best to apply well in advance of
                your intended travel date. Once your application has been
                reviewed and a decision has been made, you will be notified of
                the outcome. If your application is approved, you will be issued
                a visa, which you will need to present when you enter Oman.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the visa application process may
                  vary depending on the country you are applying from and the
                  specific circumstances of your visit. It is always best to
                  check with the embassy or consulate of Oman to confirm the
                  requirements and procedures for applying for a visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Oman?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are able to stay in Oman depends on the
                type of visa you have and the specific circumstances of your
                visit. Here are some common types of visas and the maximum
                length of stay they allow:
                <br /> <br />● <span className="font-bold">Tourist visas</span>:
                These visas allow you to stay in Oman for a maximum of 30 days.
                Some nationalities are eligible for a visa-free stay of up to 14
                days. <br /> <br />●{" "}
                <span className="font-bold">Business visas</span>: These visas
                allow you to stay in Oman for a maximum of 30 days and are
                typically issued to people who are traveling to Oman for
                business purposes.
                <br /> <br />● <span className="font-bold">Work visas</span>:
                These visas allow you to stay in Oman for a longer period of
                time, typically up to two years. They are issued to people who
                have been offered employment in Oman and are sponsored by an
                employer in the country.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that these maximum stays are subject
                  to change and may vary depending on the specific circumstances
                  of your visit. If you wish to stay in Oman for a longer period
                  of time, you may need to apply for an extension of your visa
                  before your initial stay expires. It is always best to check
                  with the embassy or consulate of Oman to confirm the rules and
                  regulations for your specific situation.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Oman?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Passengers must have: a negative COVID-19 RT-PCR test taken at
                most 72 hours before departure from the first embarkation point;
                or. a COVID-19 vaccination certificate showing that they were
                fully vaccinated at least 14 days before departure.
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
                A diplomatic passport is a special type of passport that is
                issued to individuals who represent their country in a
                diplomatic capacity, such as ambassadors, diplomats, and certain
                government officials. In the case of Oman, a diplomatic passport
                is issued to Omani citizens who are appointed as representatives
                of the government of Oman to foreign states, international
                organizations, or other foreign entities.
                <br />
                <br />
                Holders of an Omani diplomatic passport are entitled to certain
                privileges and immunities under international law, such as
                immunity from arrest and prosecution, and special privileges
                with regard to taxes, customs, and immigration.
                <br />
                <br />
                It's worth noting that, Oman is not a member of the European
                Union, and not a member of the Schengen area. But Oman has
                bilateral agreements with many countries on visa exemptions, so
                the holder of an Omani diplomatic passport can travel visa-free
                or with a visa on arrival to a number of countries.
                <br />
                <br />
                In order to obtain a diplomatic passport in Oman, one typically
                needs to be appointed by the government of Oman to a diplomatic
                position and will usually need to provide documentation to
                confirm their status and purpose of travel.
                <br />
                <br />
                <span className="font-bold">
                  Please note that, the information provided here is based on
                  the publicly available information, the rules and regulations
                  regarding diplomatic passport in Oman may change over time, so
                  it's recommended to check with the Omani Ministry of Foreign
                  Affairs for the most recent and accurate information.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Oman?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to work in Oman, you will generally need to apply
                for a work visa. A work visa allows you to legally work in the
                country for a specific period of time, typically up to two
                years.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Oman Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa for Oman, you will generally need to
                follow these steps: <br /> <br />● Obtain a job offer from an
                employer in Oman: In order to apply for a work visa, you will
                need to have a job offer from an employer in Oman. Your employer
                will typically handle the process of obtaining a work visa on
                your behalf. <br /> <br />● Gather the required documents: You
                will generally need to provide the following documents as part
                of your work visa application: a valid passport, a recent
                passport-sized photograph, a completed visa application form, a
                copy of your employment contract, a copy of your educational
                qualifications, a medical certificate stating that you are in
                good health, and a police clearance certificate from your
                country of residence. <br /> <br />● Submit your application:
                Your employer will typically submit your work visa application
                on your behalf, either in person at the embassy or consulate of
                Oman in your country of residence or online through an official
                government website. You will generally need to pay a fee to
                process your application. <br /> <br />● Wait for a decision:
                The processing time for work visa applications can vary, so it
                is best to apply well in advance of your intended travel date.
                Once your application has been reviewed and a decision has been
                made, you will be notified of the outcome. If your application
                is approved, you will be issued a work visa, which you will need
                to present when you enter Oman.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Oman Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of work visas that may be available for
                people who want to work in Oman. The specific type of work visa
                that is appropriate for you will depend on the nature of your
                employment and the specific circumstances of your situation.
                Here are some common types of work visas that may be available:
                <br /> <br />●{" "}
                <span className="font-bold">Employment visa</span>: This type of
                visa is issued to people who have been offered employment in
                Oman and are sponsored by an employer in the country. The
                employment visa allows you to work for the sponsoring employer
                for a specific period of time, typically up to two years. <br />{" "}
                <br />● <span className="font-bold">Self-employment visa</span>:
                This type of visa is issued to people who are planning to start
                their own business in Oman. The self-employment visa allows you
                to work as a self-employed individual in the country for a
                specific period of time, typically up to two years. <br />{" "}
                <br />● <span className="font-bold">Student visa</span>: This
                type of visa is issued to people who are studying in Oman. The
                student visa allows you to study at an educational institution
                in the country for a specific period of time.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Oman Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa for Oman, you will generally need to
                provide the following documents: <br /> <br />● A valid
                passport: Your passport should be valid for at least six months
                beyond the date of your intended stay in Oman. <br /> <br />● A
                recent passport-sized photograph: This should be a clear, color
                photograph of your face that meets the requirements for passport
                photos. <br /> <br />● A completed visa application form: This
                form can typically be obtained from the embassy or consulate of
                Oman in your country of residence, or it may be available
                online. <br /> <br />● A copy of your employment contract: This
                should include details about the nature of your employment and
                the length of your intended stay in Oman. <br /> <br />● A copy
                of your educational qualifications: You will generally need to
                provide proof of your education and any relevant work
                experience. <br /> <br />● A medical certificate stating that
                you are in good health: You may need to undergo a medical
                examination to obtain this certificate. <br /> <br />● A police
                clearance certificate from your country of residence: This
                certificate should indicate that you have no criminal record.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Oman?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work visa for Oman, you will generally need to
                submit your application to the embassy or consulate of Oman in
                your country of residence. Some embassies and consulates may
                also have satellite offices in other locations. You can
                typically find the contact information for the embassy or
                consulate of Oman in your country by visiting the website of the
                Ministry of Foreign Affairs in Oman or by searching online.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  work visa may vary depending on the specific circumstances of
                  your employment and the country you are applying from. It is
                  always best to check with the embassy or consulate of Oman to
                  confirm the specific requirements and procedures for applying
                  for a work visa.
                </span>
                <br /> <br />
                <span className="font-bold">
                  As a general rule, it is best to apply for a work visa well in
                  advance of your intended travel date, as the processing time
                  for visa applications can vary. You should also make sure that
                  your passport is valid for at least six months beyond the date
                  of your intended stay in Oman.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Oman?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to study in Oman, you will generally need to apply
                for a student visa. This visa allows you to legally study in the
                country for a specific period of time. To apply for a student
                visa, you will typically need to have been accepted into an
                educational institution in Oman and be sponsored by that
                institution. Your educational institution will typically handle
                the process of obtaining a student visa on your behalf and will
                provide you with a list of the required documents. It is always
                best to check with the embassy or consulate of Oman to confirm
                the specific requirements and procedures for applying for a
                student visa.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Oman student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Oman, you will generally need to
                follow these steps: <br /> <br />● Obtain acceptance to an
                educational institution in Oman: In order to apply for a student
                visa, you will need to have been accepted to an educational
                institution in Oman. Your sponsoring institution will typically
                handle the process of obtaining a student visa on your behalf.
                <br /> <br />● Gather the required documents: You will generally
                need to provide the following documents as part of your student
                visa application: a valid passport, a recent passport-sized
                photograph, a completed visa application form, a copy of your
                acceptance letter from the educational institution in Oman, a
                copy of your educational qualifications, a medical certificate
                stating that you are in good health, and a police clearance
                certificate from your country of residence. <br /> <br />●
                Submit your application: Your sponsoring institution will
                typically submit your student visa application on your behalf,
                either in person at the embassy or consulate of Oman in your
                country of residence or online through an official government
                website. You will generally need to pay a fee to process your
                application. <br /> <br />● Wait for a decision: The processing
                time for student visa applications can vary, so it is best to
                apply well in advance of your intended travel date. Once your
                application has been reviewed and a decision has been made, you
                will be notified of the outcome. If your application is
                approved, you will be issued a student visa, which you will need
                to present when you enter Oman.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Oman student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Oman, you will generally need to
                provide the following documents:
                <br /> <br />● A valid passport: Your passport should be valid
                for at least six months beyond the date of your intended stay in
                Oman.
                <br /> <br />● A recent passport-sized photograph: This should
                be a clear, color photograph of your face that meets the
                requirements for passport photos.
                <br /> <br />● A completed visa application form: This form can
                typically be obtained from the embassy or consulate of Oman in
                your country of residence, or it may be available online.
                <br /> <br />● An acceptance letter from an educational
                institution in Oman: This letter should include details about
                your course of study and the length of your intended stay in
                Oman.
                <br /> <br />● Educational qualifications: You will generally
                need to provide proof of your education and any relevant work
                experience.
                <br /> <br />● A medical certificate stating that you are in
                good health: You may need to undergo a medical examination to
                obtain this certificate.
                <br /> <br />● A police clearance certificate from your country
                of residence: This certificate should indicate that you have no
                criminal record.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Oman student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Oman will depend on
                the specific circumstances of your studies and the length of
                your intended stay in the country.
                <br /> <br /> As a general rule, student visas for Oman are
                typically valid for the duration of your studies, up to a
                maximum of two years. However, the exact length of validity will
                depend on the specific terms of your studies and the length of
                your course of study. The price of a student visa for Oman may
                vary depending on the country you are applying from and the
                specific circumstances of your studies. You will generally need
                to pay a fee to process your student visa application. It is
                always best to check with the embassy or consulate of Oman to
                confirm the current price for a student visa and to determine if
                there are any additional fees or charges that may apply.
                <br /> <br />
                <span className="font-bold">
                  It is important to note that the rules and regulations for
                  student visas in Oman may change over time, and the specific
                  requirements and procedures for obtaining a student visa may
                  vary depending on the country you are applying from. It is
                  always best to check with the embassy or consulate of Oman to
                  confirm the current rules and regulations for student visas.
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

export default Oman;
