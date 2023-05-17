import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Belarus = () => {
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
        <title>Belarus</title>
        <meta name="description" content="Belarus" />
        <meta
          name="keywords"
          content="Belarus travel visa, Belarus work visa, Belarus study visa, How to apply for an Belarus visa, Belarus visa requirements, Belarus tourist visa, Belarus student visa, Belarus business visa, Belarus visa processing time, Belarus visa application process, Belarus visa for Americans, Belarus visa for Europeans, Belarus visa for Belarusns, Belarus visa for Canadians, Belarus visa for Indians, Belarus visa for Chinese, Belarus visa for Africans, Belarus visa for Asians, Belarus visa for South Americans, Belarus visa for Middle Easterners, Belarus visa for UK citizens, Belarus visa for EU citizens, Belarus visa for Schengen area, Belarus visa for non-EU citizens, Belarus visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Belarus
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Belarus is a country in Eastern Europe, and it is well known for
              its rich cultural heritage and its beautiful landscapes. It is
              also known for its contributions to science and technology, and
              for its thriving agricultural and industrial sectors. Some other
              things that Belarus is known for include its delicious cuisine,
              its colorful folk traditions, and its vibrant arts and music
              scene.
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
                Who can enter Belarus without a Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are allowed to enter Belarus
                without a visa for stays of up to 30 days. These countries
                include:
                <span className="font-bold">
                  &nbsp;Armenia, Azerbaijan, Georgia, Kazakhstan, Kyrgyzstan,
                  Moldova, Russia, Tajikistan, Ukraine. <br /> <br />
                </span>
                In addition, citizens of some other countries are allowed to
                enter Belarus without a visa for stays of up to 90 days,
                provided that they are traveling for business or tourism. These
                countries include:
                <span className="font-bold">
                  &nbsp;Albania, Austria, Belgium, Bosnia and Herzegovina,
                  Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia,
                  Finland, France, Germany, Greece, Hungary, Iceland, Ireland,
                  Italy, Kosovo, Latvia, Liechtenstein, Lithuania, Luxembourg,
                  Malta, Montenegro, Netherlands, North, Macedonia, Norway,
                  Poland, Portugal, Romania, Serbia, Slovakia, Slovenia, Spain,
                  Sweden, Switzerland, Turkey. <br /> <br />
                </span>{" "}
                It's also worth noting that citizens of certain countries may be
                able to enter Belarus without a visa if they are participating
                in certain events or programs. For example, participants in the
                "European Games" or the "World Festival of Youth and Students"
                are allowed to enter Belarus without a visa.
                <br /> <br /> Finally, it's worth noting that these rules are
                subject to change, and it's always a good idea to check the most
                current visa requirements before planning a trip to Belarus.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Belarus Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Belarus, you will need to submit
                the following documents:
                <br /> <br />● A completed visa application form. This form can
                be obtained from the Belarusian embassy or consulate in your
                country of residence, or it can be downloaded from the website
                of the Ministry of Foreign Affairs of the Republic of Belarus.
                <br /> <br />● A valid passport. Your passport must be valid for
                at least three months beyond the date of your intended departure
                from Belarus.
                <br /> <br />● A passport-sized photograph. This photograph must
                be taken within the past six months and should meet the
                requirements for passport photographs.
                <br /> <br />● A letter of invitation. If you are visiting
                Belarus for business or personal reasons, you will need to
                provide a letter of invitation from the person or organization
                that you will be visiting. This letter should be written in
                Belarusian and should include the following information:
                <br />
                <br />● The full name, date of birth, and passport number of the
                person being invited
                <br />
                <br />● The purpose of the visit (business, tourism, etc.)
                <br />
                <br />● The dates of the visit
                <br />
                <br />● The address of the place where the person will be
                staying in Belarus
                <br />
                <br />● Proof of sufficient financial means. You will need to
                provide evidence that you have enough money to support yourself
                during your stay in Belarus. This could be in the form of bank
                statements, credit card statements, or a letter from an employer
                stating that you will be provided with financial support during
                your stay.
                <br />
                <br />● Other documents may be required depending on the purpose
                of your visit. For example, if you are visiting Belarus for
                business reasons, you may need to provide a letter from your
                employer or other proof of your business activities.
                <br />
                <br />
                <span className="font-bold">
                  It's worth noting that these requirements may vary depending
                  on the country where you are applying for a visa, so it's
                  always a good idea to check with the Belarusian embassy or
                  consulate in your country of residence for the most up-to-date
                  information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Belarus Visa ?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Belarus, you will need to follow
                these steps:
                <br />
                <br />● Determine the type of visa you need. There are several
                types of visas available for travel to Belarus, including
                tourist visas, business visas, and cultural exchange visas. The
                type of visa you need will depend on the purpose of your visit.
                <br />
                <br />
                ● Collect the required documents. As I mentioned earlier, you
                will need to gather a number of documents in order to apply for
                a Belarusian visa. This includes a completed visa application
                form, a valid passport, a passport-sized photograph, and a
                letter of invitation (if applicable). You may also need to
                provide proof of sufficient financial means and other documents
                depending on the purpose of your visit.
                <br />
                <br />● Submit your application. You can submit your visa
                application in person at the Belarusian embassy or consulate in
                your country of residence, or you may be able to apply online or
                through the mail. Check with the embassy or consulate to
                determine the best way to submit your application.
                <br />
                <br />● Pay the visa fee. There is a fee for obtaining a
                Belarusian visa, which must be paid when you submit your
                application. The fee amount will depend on the type of visa you
                are applying for and the length of your stay in Belarus.
                <br />
                <br />● Wait for a decision on your application. It may take
                several weeks for the embassy or consulate to process your visa
                application. Be patient and do not make any travel arrangements
                until you have received a decision on your application.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Belarus?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Belarus will depend on the
                type of visa you have. Here are the maximum stay periods for the
                different types of visas:
                <br />
                <br />● <span className="font-bold">Tourist visa</span>: 30 days
                <br />
                <br />● <span className="font-bold">Business visa</span>: 90
                days
                <br />
                <br />●{" "}
                <span className="font-bold">Cultural exchange visa</span>: 90
                days
                <br />
                <br />● <span className="font-bold">Student visa</span>: 90 days
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Belarus ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are no current coronavirus restrictions for travel or
                accommodation in Belarus.
                <br />
                <br />
                If you develop COVID-19 symptoms in Belarus then you should
                contact the Emergency Services using telephone number 103. You
                will be directed to your nearest Regional Public Health Care
                Centre. You should have your medical insurance.
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
                A diplomatic passport is a type of passport issued to diplomats
                and other government officials for official travel on behalf of
                their country. Diplomatic passports are typically issued to
                individuals who are representing their government in an official
                capacity and are not subject to the same visa requirements and
                entry restrictions as regular passports.
                <br />
                <br /> In Belarus, diplomatic passports are issued to Belarusian
                citizens who are serving as diplomats, consular officers, and
                other government officials. These individuals are typically
                posted to embassies, consulates, and other diplomatic missions
                abroad, and are granted special privileges and immunities while
                performing their official duties.
                <br />
                <br />
                <span className="font-bold">
                  To apply for a diplomatic passport in Belarus, you will need
                  to be a Belarusian citizen and be serving in an official
                  capacity that requires you to travel on behalf of the
                  government. You will also need to meet any other eligibility
                  requirements set by the Ministry of Foreign Affairs of the
                  Republic of Belarus. If you are eligible for a diplomatic
                  passport, you can apply for one through the Ministry of
                  Foreign Affairs or the Department of Citizenship and Migration
                  of the Republic of Belarus.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Belarus ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to work in Belarus, you will need to obtain a worker
                visa. A worker visa is a type of visa that allows you to enter
                Belarus for the purpose of working in the country.
                <br />
                <br /> To apply for a worker visa, you will need to have a job
                offer from a Belarusian employer. Your employer will need to
                apply for a work permit on your behalf, and once the work permit
                is approved, you can then apply for a worker visa.
                <br />
                <br /> To apply for a worker visa, you will need to submit the
                following documents:
                <br />
                <br />● A completed visa application form
                <br />● A valid passport
                <br />● A passport-sized photograph
                <br />● A letter of invitation from your Belarusian employer
                <br />● A copy of your work permit
                <br />● Proof of sufficient financial means to support yourself
                during your stay in Belarus
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Belarus Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Belarus, you will need to follow
                these steps:
                <br />
                <br />● Find a job in Belarus. In order to apply for a worker
                visa, you will need to have a job offer from a Belarusian
                employer. Your employer will need to apply for a work permit on
                your behalf.
                <br />
                <br />● Gather the required documents. You will need to collect
                a number of documents in order to apply for a worker visa,
                including a completed visa application form, a valid passport, a
                passport-sized photograph, and proof of sufficient financial
                means to support yourself during your stay in Belarus. You will
                also need to provide a letter of invitation from your Belarusian
                employer and a copy of your work permit.
                <br />
                <br />● Submit your application. You can submit your worker visa
                application in person at the Belarusian embassy or consulate in
                your country of residence, or you may be able to apply online or
                through the mail. Check with the embassy or consulate to
                determine the best way to submit your application.
                <br />
                <br />● Pay the visa fee. There is a fee for obtaining a worker
                visa in Belarus, which must be paid when you submit your
                application. The fee amount will depend on the length of your
                intended stay in the country.
                <br />
                <br />● Wait for a decision on your application. It may take
                several weeks for the embassy or consulate to process your
                worker visa application. Be patient and do not make any travel
                arrangements until you have received a decision on your
                application.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Belarus Worker Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available for travel to
                Belarus, including:
                <br />
                <br />●{" "}
                <span className="font-bold">Short-term worker visa</span>: This
                type of visa is valid for up to 90 days and is typically used
                for temporary work assignments or internships.
                <br />
                <br />● <span className="font-bold">Long-term worker visa</span>
                : This type of visa is valid for up to one year and is typically
                used for longer-term work assignments or permanent employment.
                <br />
                <br />●{" "}
                <span className="font-bold">Multiple-entry worker visa</span>:
                This type of visa allows you to enter and exit Belarus multiple
                times within the validity period of the visa. This can be useful
                if you need to travel outside of Belarus for business or
                personal reasons while you are working in the country.
                <br />
                <br />●{" "}
                <span className="font-bold">Family member worker visa</span>: If
                you are a family member of a worker who has a valid worker visa
                in Belarus, you may be able to obtain a family member worker
                visa. This type of visa allows you to work in Belarus and live
                with your family member who is working in the country.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Belarus Worker Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Belarus, you will need to submit
                the following documents:
                <br />
                <br />● A completed visa application form. This form can be
                obtained from the Belarusian embassy or consulate in your
                country of residence, or it can be downloaded from the website
                of the Ministry of Foreign Affairs of the Republic of Belarus.
                <br />
                <br />● A valid passport. Your passport must be valid for at
                least three months beyond the date of your intended departure
                from Belarus.
                <br />
                <br />● A passport-sized photograph. This photograph must be
                taken within the past six months and should meet the
                requirements for passport photographs.
                <br />
                <br />● A letter of invitation from your Belarusian employer.
                Your employer will need to apply for a work permit on your
                behalf and provide you with a letter of invitation that includes
                the following information:
                <br />
                <br />● The full name, date of birth, and passport number of the
                worker being invited
                <br />
                <br />● The purpose of the visit (work, internship, etc.)
                <br />
                <br />● The dates of the visit
                <br />
                <br />● The address of the place where the worker will be
                staying in Belarus
                <br />
                <br />● A copy of your work permit. In order to apply for a
                worker visa, you will need to have a valid work permit issued by
                the Ministry of Labour and Social Protection of the Republic of
                Belarus. Your employer will need to apply for this work permit
                on your behalf.
                <br />
                <br />● Proof of sufficient financial means. You will need to
                provide evidence that you have enough money to support yourself
                during your stay in Belarus. This could be in the form of bank
                statements, credit card statements, or a letter from your
                employer stating that you will be provided with financial
                support during your stay.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Belarus ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Belarus, you will need to submit
                your application to the Belarusian embassy or consulate in your
                country of residence. You can usually find the location and
                contact information for the embassy or consulate on the website
                of the Ministry of Foreign Affairs of the Republic of Belarus.
                <br />
                <br />
                You can typically submit your worker visa application in person
                at the embassy or consulate, or you may be able to apply online
                or through the mail. Check with the embassy or consulate to
                determine the best way to submit your application.
                <br />
                <br /> You should apply for your worker visa as far in advance
                as possible, as it may take several weeks for the embassy or
                consulate to process your application. You should also make sure
                to have all of the required documents ready when you submit your
                application, as incomplete applications may be rejected or
                delayed.
                <br />
                <br />
                <span className="font-bold">
                  It's worth noting that the processing time for worker visas
                  may vary depending on the country where you are applying, so
                  it's always a good idea to check with the Belarusian embassy
                  or consulate in your country of residence for the most
                  up-to-date information.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Belarus?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you want to study in Belarus, you will typically need to
                obtain a student visa. A student visa is a type of visa that
                allows you to enter Belarus for the purpose of studying in the
                country.
                <br />
                <br /> To apply for a student visa, you will need to be accepted
                to a Belarusian educational institution and have a letter of
                acceptance from the institution. You will also need to provide
                evidence that you have sufficient financial means to support
                yourself during your studies in Belarus.
                <br />
                <br /> To apply for a student visa, you will need to submit the
                following documents:
                <br />
                <br />● A completed visa application form
                <br />● A valid passport
                <br />● A passport-sized photograph
                <br />● A letter of acceptance from a Belarusian educational
                institution
                <br />● Proof of sufficient financial means to support yourself
                during your studies in Belarus
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Belarus student Visa ?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Belarus, you will need to follow
                these steps:
                <br />
                <br />● Enroll in a Belarusian educational institution. In order
                to apply for a student visa, you will need to be accepted to a
                Belarusian educational institution and have a letter of
                acceptance from the institution.
                <br />
                <br />● Gather the required documents. You will need to collect
                a number of documents in order to apply for a student visa,
                including a completed visa application form, a valid passport, a
                passport-sized photograph, and proof of sufficient financial
                means to support yourself during your studies in Belarus. You
                will also need to provide a letter of acceptance from a
                Belarusian educational institution.
                <br />
                <br />● Submit your application. You can submit your student
                visa application in person at the Belarusian embassy or
                consulate in your country of residence, or you may be able to
                apply online or through the mail. Check with the embassy or
                consulate to determine the best way to submit your application.
                <br />
                <br />
                ● Pay the visa fee. There is a fee for obtaining a student visa
                in Belarus, which must be paid when you submit your application.
                The fee amount will depend on the length of your intended stay
                in the country.
                <br />
                <br />● Wait for a decision on your application. It may take
                several weeks for the embassy or consulate to process your
                student visa application. Be patient and do not make any travel
                arrangements until you have received a decision on your
                application.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Belarus student Visa Requirments .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Belarus, you will need to provide
                the following documents:
                <br />
                <br />● A completed visa application form. This form can be
                obtained from the Belarusian embassy or consulate in your
                country of residence, or it can be downloaded from the website
                of the Ministry of Foreign Affairs of the Republic of Belarus.
                <br />
                <br />● A valid passport. Your passport must be valid for at
                least three months beyond the date of your intended departure
                from Belarus.
                <br />
                <br />● A passport-sized photograph. This photograph must be
                taken within the past six months and should meet the
                requirements for passport photographs.
                <br />
                <br />● A letter of acceptance from a Belarusian educational
                institution. You will need to provide a letter of acceptance
                from the educational institution where you will be studying in
                Belarus. This letter should include information about the course
                of study you will be enrolled in and the duration of your
                studies.
                <br />
                <br />● Proof of sufficient financial means. You will need to
                provide evidence that you have enough money to support yourself
                during your studies in Belarus. This could be in the form of
                bank statements, credit card statements, or a letter from your
                sponsor stating that they will be providing you with financial
                support during your stay.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Belarus student Visa .
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Belarus will depend
                on the length of your intended stay in the country. Here are the
                maximum stay periods and corresponding visa fees for student
                visas in Belarus:
                <br />
                <br />● <span className="font-bold">Student visa</span> valid
                for up to 90 days: $50
                <br />
                <br />● <span className="font-bold">Student visa</span> valid
                for up to one year: $70
                <br />
                <br />● <span className="font-bold">Student visa</span> valid
                for up to two years: $100
                <br />
                <br />● <span className="font-bold">Student visa</span> valid
                for up to five years: $200
                <br />
                <br /> It's worth noting that these fees are subject to change,
                so it's always a good idea to check with the Belarusian embassy
                or consulate in your country of residence for the most
                up-to-date information on visa fees.
                <br />
                <br /> In addition to the visa fee, you may also be required to
                pay a processing fee and any other fees associated with
                obtaining a student visa in Belarus. It's a good idea to budget
                for these additional costs when planning your studies in the
                country.
                <br />
                <br />
                <span className="font-bold">
                  It's also important to note that you may need to renew your
                  student visa if you plan to stay in Belarus for an extended
                  period of time. You will need to apply for a visa extension at
                  the Department of Citizenship and Migration of the Republic of
                  Belarus before your current visa expires. You will need to
                  provide evidence of your continued enrollment in a Belarusian
                  educational institution and proof of sufficient financial
                  means to support yourself during your studies in order to be
                  eligible for a visa extension.
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

export default Belarus;
