import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Albania = () => {
  const [turistSection, setTuristSection] = useState(true);
  const [workSection, setWorkSection] = useState(false);

  const [turistButtonStyle, setTuristButtonStyle] = useState(
    "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783]  -translate-y-6"
  );
  const [workButtonStyle, setWorkButtonStyle] = useState(
    "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783]"
  );
  const [studentButtonStyle, setStudentButtonStyle] = useState(
    "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783]"
  );

  const changeOnTurist = () => {
    setTuristSection(true);
    setWorkSection(false);
    setTuristButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783] -translate-y-6"
    );
    setWorkButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783]"
    );
    setStudentButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783]"
    );
  };
  const changeOnWork = () => {
    setTuristSection(false);
    setWorkSection(true);
    setTuristButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783] "
    );
    setWorkButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783] -translate-y-6"
    );
    setStudentButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783]"
    );
  };
  const changeOnStudent = () => {
    setTuristSection(false);
    setWorkSection(false);
    setTuristButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783] "
    );
    setWorkButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783] "
    );
    setStudentButtonStyle(
      "bg-[#1e2e6e] w-[30rem] text-white uppercase py-[1.4rem] px-[6rem] font-bold rounded-[3rem] text-[2rem] hover:scale-[1.1] hover:bg-[#233783] -translate-y-6"
    );
  };
  return (
    <>
      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Russia
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Russia is a large country in northern Eurasia, known for its
              beautiful landscapes, rich culture, and complex history. The
              country has a long and diverse history, with roots in the ancient
              Slavic tribes and the medieval state of Kievan Rus. Today, Russia
              is known for its beautiful forests, lakes, and rivers, as well as
              its historic cities, including Moscow, St. Petersburg, and
              Novgorod, which are rich in cultural and architectural heritage.
              The capital city of Moscow is a major cultural and economic hub,
              with many historic landmarks, museums, and cultural institutions.
              Russia is also known for its vibrant music and arts scene, and its
              rich folk traditions that have been preserved and celebrated by
              generations of Russians. The country is a popular tourist
              destination, with many visitors coming to experience its beautiful
              landscapes and vibrant culture.
            </p>
          </Col>
        </Row>

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
                Who can enter Russia without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                There are a few categories of foreign citizens who are eligible
                to enter Russia without a visa, provided they meet certain
                conditions and requirements. These categories include: <br />{" "}
                <br />● Citizens of countries that have visa-free agreements
                with Russia: Russia has visa-free agreements with a number of
                countries, which allow citizens of those countries to enter
                Russia without a visa for short-term stays of up to 90 days.
                Some of the countries that have visa-free agreements with Russia
                include Belarus, Kazakhstan, Kyrgyzstan, and Serbia. <br />{" "}
                <br />● Transit passengers: Foreign citizens who are in transit
                through Russia and do not leave the transit area of the airport
                are generally allowed to enter Russia without a visa for a
                period of up to 72 hours.
                <br /> <br />● Crew members of international flights: Crew
                members of international flights who are in Russia for the
                purpose of performing their duties are generally allowed to
                enter Russia without a visa for a period of up to three days.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Russia, foreign citizens will
                typically need to provide a range of documents to demonstrate
                their eligibility for the visa and their intentions in Russia.
                The specific documents required for a visa to Russia will depend
                on the type of visa you are applying for and the purpose of your
                visit to Russia.
                <br /> <br /> Here are some of the documents that foreign
                citizens may be required to provide when applying for a visa to
                Russia: <br /> <br />● Passport: Foreign citizens will need to
                provide a copy of their valid passport, including the
                identification page and any relevant visas or stamps. The
                passport must be valid for at least six months after the
                intended date of departure from Russia. <br /> <br />● Visa
                application form: Foreign citizens will need to complete and
                submit a visa application form, which can typically be obtained
                from the Russian embassy or consulate in the foreign citizen's
                home country or online. <br /> <br />● Passport-sized
                photographs: Foreign citizens will need to provide two
                passport-sized photographs that meet the requirements of the
                Russian embassy or consulate. <br /> <br />● Evidence of purpose
                of travel: Foreign citizens will need to provide evidence of the
                purpose of their travel to Russia, such as a letter of
                invitation, a letter of employment, or proof of enrollment in a
                school or university. <br /> <br />● Evidence of sufficient
                financial resources: Foreign citizens may need to demonstrate
                that they have sufficient financial resources to support
                themselves while in Russia, such as bank statements or proof of
                sponsorship. <br /> <br />● Health insurance: Foreign citizens
                may need to provide evidence of health insurance coverage while
                in Russia.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Russia Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                The process for applying for a visa to enter Russia typically
                involves several steps, including determining the type of visa
                you need, obtaining a letter of invitation or other required
                documents, and applying for the visa at the Russian embassy or
                consulate in your home country.
                <br /> <br /> Here is a general outline of the process for
                applying for a visa to Russia: <br /> <br />● Determine the type
                of visa you need: There are several types of visas to Russia,
                including tourist visas, business visas, student visas, and work
                visas. You will need to determine the type of visa that is
                appropriate for your purpose of travel to Russia. <br /> <br />●
                Obtain a letter of invitation or other required documents:
                Depending on the type of visa you are applying for, you may need
                to obtain a letter of invitation or other required documents,
                such as a work permit or enrollment certificate. The letter of
                invitation or other required documents can typically be obtained
                from a Russian organization or individual, such as an employer,
                school, or tour operator. <br /> <br />● Apply for the visa:
                Once you have determined the type of visa you need and obtained
                any required documents, you can apply for the visa at the
                Russian embassy or consulate in your home country. You will need
                to complete and submit the necessary application forms and
                documents, including your passport, passport-sized photographs,
                and evidence of the purpose of your travel to Russia.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Russia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you are allowed to stay in Russia will
                depend on the type of visa you have and the purpose of your
                visit to Russia.
                <br /> <br />
                If you have a tourist visa to Russia, you will typically be
                allowed to stay in the country for up to 30 days. If you want to
                stay in Russia for a longer period of time, you may be able to
                apply for an extension of your tourist visa.
                <br /> <br />
                If you have a business visa to Russia, you will typically be
                allowed to stay in the country for up to 90 days within a
                six-month period.
                <br /> <br />
                If you have a multiple-entry business visa, you may be able to
                enter and exit Russia multiple times during the validity period
                of the visa.
                <br /> <br />
                If you have a student visa to Russia, you will typically be
                allowed to stay in the country for the duration of your studies.
                <br /> <br />
                If you have a work visa to Russia, you will typically be allowed
                to stay in the country for the duration of your work contract.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Russia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                COVID-19 pandemic has had a significant impact on travel and
                entry restrictions around the world, including in Russia. It is
                important to check the current situation and any travel
                restrictions that may be in place before planning a trip to
                Russia.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Informations about Diplomatic Passport !
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ex,
                laborum repellat libero harum sint ipsum provident aperiam vitae
                nostrum facilis consequuntur voluptas. Debitis quo, laborum
                veniam perspiciatis eligendi placeat !
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container className="mt-[12rem]" fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Russia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Foreign citizens who want to work in Russia typically need to
                obtain a worker visa in order to be legally employed in the
                country. The specific requirements and procedures for obtaining
                a worker visa in Russia will depend on the foreign worker's
                country of origin and the type of work they will be doing in
                Russia.
                <br /> <br />
                In general, foreign workers in Russia will need to obtain a work
                permit before they can begin working in the country. Work
                permits are issued by the Russian Ministry of Labor and are
                valid for the duration of the worker's employment in Russia. In
                order to obtain a work permit, foreign workers will typically
                need to have a job offer from a Russian employer and will need
                to provide proof of their education and professional
                qualifications.
                <br /> <br />
                Once the foreign worker has obtained a work permit, they can
                then apply for a worker visa at the Russian embassy or consulate
                in their home country. The foreign worker will need to complete
                and submit the necessary application forms and documents,
                including a valid passport, proof of the work permit, and
                evidence of sufficient financial resource
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Russia Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The process for applying for a worker visa in Russia typically
                involves several steps, including obtaining a job offer and work
                permit from a Russian employer and applying for the worker visa
                at the Russian embassy or consulate in the foreign worker's home
                country.
                <br /> <br />
                Here is a general outline of the process for applying for a
                worker visa in Russia: <br /> <br />● Obtain a job offer and
                work permit: Foreign workers will need to obtain a job offer and
                work permit from a Russian employer in order to be eligible for
                a worker visa. The process for obtaining a work permit typically
                involves the employer submitting a request for a work permit to
                the Russian Ministry of Labor. The foreign worker will also need
                to provide proof of their education and professional
                qualifications. <br /> <br />● Apply for the worker visa: Once
                the foreign worker has obtained a work permit, they can then
                apply for a worker visa at the Russian embassy or consulate in
                their home country. The foreign worker will need to complete and
                submit the necessary application forms and documents, including
                a valid passport, proof of the work permit, and evidence of
                sufficient financial resources.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Russia Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas for Russia, including:
                <br /> <br />● Temporary Worker Visa: A temporary worker visa is
                issued to foreign citizens who are coming to Russia for
                short-term employment, typically for a period of up to 90 days.
                <br /> <br />● Skilled Worker Visa: A skilled worker visa is
                issued to foreign citizens who are coming to Russia to work in a
                skilled or professional capacity, typically for a period of up
                to three years. <br /> <br />● Intra-Company Transfer Visa: An
                intra-company transfer visa is issued to foreign citizens who
                are being transferred to a Russian affiliate or subsidiary of
                their current employer for a period of up to three years.
                <br /> <br />● Highly Qualified Specialist Visa: A highly
                qualified specialist visa is issued to foreign citizens who are
                coming to Russia to work in a highly qualified or specialized
                capacity, typically for a period of up to three years.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Russia, foreign citizens will
                typically need to provide a range of documents to demonstrate
                their eligibility for the visa and their intentions in Russia.
                The specific documents required for a worker visa in Russia will
                depend on the type of worker visa you are applying for and the
                purpose of your work in Russia.
                <br /> <br /> Here are some of the documents that foreign
                citizens may be required to provide when applying for a worker
                visa in Russia: <br /> <br />● Passport: Foreign citizens will
                need to provide a copy of their valid passport, including the
                identification page and any relevant visas or stamps. The
                passport must be valid for at least six months after the
                intended date of departure from Russia. <br /> <br />● Visa
                application form: Foreign citizens will need to complete and
                submit a visa application form, which can typically be obtained
                from the Russian embassy or consulate in the foreign citizen's
                home country or online. <br /> <br />● Passport-sized
                photographs: Foreign citizens will need to provide two
                passport-sized photographs that meet the requirements of the
                Russian embassy or consulate. <br /> <br />● Evidence of work
                permit: Foreign citizens will need to provide a copy of their
                work permit, which must be obtained from the Russian Ministry of
                Labor before applying for a worker visa. <br /> <br />● Evidence
                of employment: Foreign citizens will need to provide evidence of
                their employment in Russia, such as a letter of employment or
                contract. <br /> <br />● Evidence of sufficient financial
                resources: Foreign citizens may need to demonstrate that they
                have sufficient financial resources to support themselves while
                working in Russia, such as bank statements or proof of
                sponsorship. <br /> <br />● Health insurance: Foreign citizens
                may need to provide evidence of health insurance coverage while
                working in Russia. <br /> <br />● Evidence of education and
                professional qualifications: Foreign citizens may need to
                provide proof of their education and professional
                qualifications, such as transcripts or diplomas.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Russia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Foreign citizens who want to apply for a worker visa in Russia
                will need to apply at the Russian embassy or consulate in their
                home country. It is important to note that the Russian embassy
                or consulate may have specific procedures and requirements for
                the worker visa application process, so it is recommended that
                foreign citizens carefully research the specific requirements
                and procedures for the type of worker visa they are seeking and
                seek guidance from the embassy or consulate if they have any
                questions.
                <br /> <br />
                In general, foreign citizens can apply for a worker visa in
                Russia at any time before they plan to travel to the country.
                However, it is important to note that the worker visa
                application process can take several weeks or even months to
                complete, depending on the specific circumstances of the foreign
                citizen and the type of worker visa they are seeking. It is
                recommended that foreign citizens start the worker visa
                application process as early as possible to allow sufficient
                time for the process to be completed. <br /> <br />
                In addition to applying for a worker visa at the Russian embassy
                or consulate in their home country, foreign citizens may also
                need to obtain a work permit from the Russian Ministry of Labor
                before they can begin working in Russia. The process for
                obtaining a work permit typically involves the foreign citizen's
                employer submitting a request for a work permit on their behalf.
                It is important for foreign citizens to carefully research the
                requirements and procedures for obtaining a work permit in
                Russia and to seek guidance from their employer or a legal
                professional if they have any questions.
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container className="mt-[12rem]" fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Russia?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Foreign citizens who want to study in Russia typically need to
                obtain a student visa in order to be legally enrolled in a
                Russian educational institution. The specific requirements and
                procedures for obtaining a student visa in Russia will depend on
                the foreign student's country of origin and the type of
                educational program they will be enrolled in.
                <br /> <br />
                In general, foreign students in Russia will need to obtain an
                enrollment certificate from their Russian educational
                institution before they can apply for a student visa. The
                enrollment certificate serves as proof of the student's
                enrollment in the educational institution and is required to
                obtain a student visa.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Russia student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The process for applying for a student visa in Russia typically
                involves several steps, including obtaining an enrollment
                certificate from a Russian educational institution and applying
                for the student visa at the Russian embassy or consulate in the
                foreign student's home country.
                <br /> <br /> Here is a general outline of the process for
                applying for a student visa in Russia: <br /> <br />● Obtain an
                enrollment certificate: Foreign students will need to obtain an
                enrollment certificate from their Russian educational
                institution before they can apply for a student visa. The
                enrollment certificate serves as proof of the student's
                enrollment in the educational institution and is required to
                obtain a student visa. <br /> <br />● Apply for the student
                visa: Once the foreign student has obtained an enrollment
                certificate, they can then apply for a student visa at the
                Russian embassy or consulate in their home country. The foreign
                student will need to complete and submit the necessary
                application forms and documents, including a valid passport,
                proof of the enrollment certificate, and evidence of sufficient
                financial resources.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Russia student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The specific requirements for a student visa in Russia will
                depend on the foreign student's country of origin and the type
                of educational program they will be enrolled in. However, in
                general, foreign students will need to provide the following
                documents when applying for a student visa in Russia: <br />{" "}
                <br />● Passport: Foreign students will need to provide a copy
                of their valid passport, including the identification page and
                any relevant visas or stamps. The passport must be valid for at
                least six months after the intended date of departure from
                Russia. <br /> <br />● Visa application form: Foreign students
                will need to complete and submit a visa application form, which
                can typically be obtained from the Russian embassy or consulate
                in the foreign student's home country or online. <br /> <br />●
                Passport-sized photographs: Foreign students will need to
                provide two passport-sized photographs that meet the
                requirements of the Russian embassy or consulate. <br /> <br />●
                Evidence of enrollment: Foreign students will need to provide an
                enrollment certificate from their Russian educational
                institution, which serves as proof of their enrollment in the
                educational program. <br /> <br />● Evidence of sufficient
                financial resources: Foreign students may need to demonstrate
                that they have sufficient financial resources to support
                themselves while studying in Russia, such as bank statements or
                proof of sponsorship. <br /> <br />● Health insurance: Foreign
                students may need to provide evidence of health insurance
                coverage while studying in Russia. <br /> <br />● Evidence of
                education and professional qualifications: Foreign students may
                need to provide proof of their education and professional
                qualifications, such as transcripts or diplomas.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Russia student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price for a student visa in Russia will depend
                on the specific circumstances of the foreign student and the
                type of educational program they will be enrolled in.
                <br /> <br />
                In general, student visas to Russia are valid for the duration
                of the foreign student's enrollment in their educational
                program. The student visa will typically be valid for the same
                period as the enrollment certificate issued by the educational
                institution.
                <br /> <br />
                The price for a student visa in Russia may vary depending on the
                foreign student's country of origin and the type of student visa
                they are seeking. Student visas to Russia are typically issued
                for a fee, which must be paid at the time of application. It is
                recommended that foreign students carefully research the
                specific fees and costs associated with obtaining a student visa
                in Russia and seek guidance from the Russian embassy or
                consulate in their home country for specific information about
                the student visa application process. <br /> <br />
                It is important to note that the requirements and procedures for
                obtaining a student visa in Russia may vary depending on the
                foreign student's country of origin and the type of educational
                program they will be enrolled in. It is recommended that foreign
                students carefully research the specific requirements and
                procedures for the type of student visa they are seeking and
                seek guidance from the Russian embassy or consulate in their
                home country for specific information about the student visa
                application process.
              </p>
            </Container>
          </>
        )}
      </Container>

      <Container className="relative" fluid>
        <div className="absolute footer_bubble-1"></div>
        <div className="absolute footer_bubble-2"></div>
        <div className="absolute footer_bubble-3"></div>
        <div className="absolute footer_bubble-4"></div>
        <div className="absolute footer_bubble-5"></div>
        <div className="absolute footer_bubble-6"></div>

        <Row className="bg-gray-900">
          <h2 className="footer-logo text-[4rem] text-white text-center my-[4.4rem] z-50">
            Visa<p>Wizz</p>
          </h2>
          <p className="text-white text-center mb-[3rem] font-bold text-[2.6rem] z-50">
            Contact us :
          </p>
          <div className="icons-container">
            <div className="icons-background z-50">
              <a
                rel="noreferrer"
                href="https://twitter.com/VisaWizz"
                target="_blank"
                className="z-50"
              >
                <FaTwitter className="text-[3rem] text-white" />
              </a>
            </div>
            <div className="icons-background z-50">
              <OverlayTrigger
                trigger="click"
                overlay={
                  <Popover
                    className="p-[1.4rem] text-[1.8rem] text-[#1e2e6e] font-bold bg-gray-200"
                    id="popover-contained"
                  >
                    contact@visawizz.com
                  </Popover>
                }
              >
                <button rel="noreferrer" target="_blank" className="z-50">
                  <HiOutlineMail className="text-[3rem] text-white" />
                </button>
              </OverlayTrigger>
            </div>
            <div className="icons-background z-50">
              <a
                rel="noreferrer"
                href="https://www.instagram.com/visawizz/"
                target="_blank"
                className="z-50"
              >
                <FaInstagram className="text-[3rem] text-white" />
              </a>
            </div>
          </div>
          <p className="text-white text-center font-bold mt-[3rem] text-[1.6rem] tracking-[0.1rem] z-50">
            &copy; Copyright 2022 : VisaWizz.com{" "}
          </p>
        </Row>
      </Container>
    </>
  );
};

export default Albania;
