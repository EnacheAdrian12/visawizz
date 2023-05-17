import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Mexico = () => {
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
        <title>Mexico</title>
        <meta name="description" content="Mexico" />
        <meta
          name="keywords"
          content="Mexico travel visa, Mexico work visa, Mexico study visa, How to apply for an Mexico visa, Mexico visa requirements, Mexico tourist visa, Mexico student visa, Mexico business visa, Mexico visa processing time, Mexico visa application process, Mexico visa for Americans, Mexico visa for Europeans, Mexico visa for Mexicons, Mexico visa for Canadians, Mexico visa for Mexicons, Mexico visa for Chinese, Mexico visa for Africans, Mexico visa for Asians, Mexico visa for South Americans, Mexico visa for Middle Easterners, Mexico visa for UK citizens, Mexico visa for EU citizens, Mexico visa for Schengen area, Mexico visa for non-EU citizens, Mexico visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Mexico
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Mexico is a large country in North America, known for its
              beautiful beaches, vibrant culture, and rich history. The country
              has a long and complex history, with roots in the ancient
              civilizations of the Maya and Aztec, as well as the Spanish
              colonial period. Today, Mexico is known for its rich cultural
              heritage, with many traditional festivals, music, and art forms
              that reflect its diverse population. The capital city of Mexico
              City is a major cultural and economic hub, with many historic
              landmarks, museums, and cultural institutions. Mexico is also
              known for its beautiful beaches and coastal resorts, as well as
              its rich natural beauty, with mountains, forests, and deserts that
              are popular with hikers and outdoor enthusiasts. The country is a
              popular tourist destination, with many visitors coming to
              experience its vibrant culture and beautiful landscapes.
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
                Who can enter Mexico without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of some countries are allowed to enter Mexico without a
                visa for stays of up to 180 days, while citizens of other
                countries are required to obtain a visa before traveling to
                Mexico.
                <br />
                <br />
                Citizens of the following countries are allowed to enter Mexico
                without a visa for stays of up to 180 days:
                <br />
                <br />
                <span className="font-bold">
                  Andorra, Argentina, Australia, Austria, Belgium, Belize,
                  Bolivia, Brazil, Bulgaria, Canada, Chile, Costa Rica, Croatia,
                  Cyprus, Czech Republic, Denmark, Estonia, Finland, France,
                  Germany, Greece, Honduras, Hungary, Iceland, Ireland, Israel,
                  Italy, Japan, Latvia, Liechtenstein, Lithuania, Luxembourg,
                  Malta, Monaco, Netherlands, New Zealand, Norway, Panama,
                  Paraguay, Peru, Poland, Portugal, Romania, San Marino,
                  Slovakia, Slovenia, South Korea, Spain, Sweden, Switzerland,
                  United Kingdom, United States, Uruguay, Vatican City.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  Citizens of all other countries are required to obtain a visa
                  before traveling to Mexico. If you are not a citizen of one of
                  the countries listed above, you will need to check with the
                  Mexican embassy or consulate in your country to find out what
                  the requirements are for obtaining a visa to enter Mexico.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Mexico Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Mexico, you will need to provide
                the following documents:
                <br />
                <br />
                ● A completed application form. This can usually be obtained
                from the Mexican embassy or consulate in your country, or
                online.
                <br />
                <br />
                ● A valid passport. Your passport must be valid for at least six
                months after the date of your intended arrival in Mexico.
                <br />
                <br />
                ● Passport-style photographs. You will need to provide two
                passport-style photographs with your visa application.
                <br />
                <br />
                ● A copy of your round-trip ticket or travel itinerary.
                <br />
                <br />
                ● Evidence of sufficient funds. You will need to demonstrate
                that you have sufficient funds to support yourself during your
                stay in Mexico. This can be in the form of bank statements, pay
                stubs, or a letter from your employer indicating that your
                travel expenses will be covered.
                <br />
                <br />
                ● A letter of invitation. If you are being invited to Mexico by
                a Mexican national or a foreign resident of Mexico, you may need
                to provide a letter of invitation with your visa application.
                <br />
                <br />
                ● Other documents may be required depending on the purpose of
                your visit to Mexico. For example, if you are traveling to
                Mexico for work, you may need to provide a letter from your
                employer or a copy of your work contract.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  visa to enter Mexico may vary depending on your country of
                  citizenship and the purpose of your visit. You should contact
                  the Mexican embassy or consulate in your country for more
                  information on the specific requirements for obtaining a visa
                  to enter Mexico.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Mexico Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Mexico, you will need to follow the
                steps below:
                <br />
                <br />
                ● Determine which type of visa you need. There are several
                different types of visas available for travel to Mexico,
                including tourist visas, business visas, work visas, and student
                visas. You will need to determine which type of visa is
                appropriate for your purpose of travel.
                <br />
                <br />
                ● Collect the required documents. To apply for a visa to enter
                Mexico, you will need to provide a completed application form, a
                valid passport, passport-style photographs, a copy of your
                round-trip ticket or travel itinerary, and evidence of
                sufficient funds. Depending on the purpose of your visit, you
                may also need to provide additional documents, such as a letter
                of invitation or a letter from your employer.
                <br />
                <br />
                ● Contact the Mexican embassy or consulate in your country. You
                will need to contact the Mexican embassy or consulate in your
                country to find out where and how to submit your visa
                application. Some embassies and consulates may allow you to
                apply for a visa online, while others may require you to submit
                your application in person.
                <br />
                <br />
                ● Submit your visa application. Once you have gathered all of
                the required documents and determined where to submit your
                application, you will need to submit your visa application to
                the Mexican embassy or consulate. You may be required to pay a
                fee at this time.
                <br />
                <br />
                ● Wait for a decision on your application. After you have
                submitted your visa application, you will need to wait for a
                decision on your application. This process can take several
                weeks, so it is important to apply for your visa well in advance
                of your planned travel date.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  visa to enter Mexico may vary depending on your country of
                  citizenship and the purpose of your visit. You should contact
                  the Mexican embassy or consulate in your country for more
                  information on the specific requirements and process for
                  obtaining a visa to enter Mexico.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Mexico?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                <span className="font-bold">As a tourist</span>, you are
                generally allowed to stay in Mexico for up to 180 days (6
                months) on a single visit. However, the length of time that you
                are allowed to stay in Mexico may be shorter or longer depending
                on the purpose of your visit and your country of citizenship.
                <br />
                <br />
                If you wish to stay in Mexico for longer than 180 days, you may
                be able to apply for a temporary resident visa, which allows you
                to stay in Mexico for up to 4 years. To apply for a temporary
                resident visa, you will need to meet certain requirements, such
                as having a valid passport, demonstrating sufficient funds to
                support yourself during your stay in Mexico, and not having a
                criminal record. You will also need to provide supporting
                documents, such as a letter from your employer or a certificate
                of enrollment in a Mexican educational institution.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the length of time you are
                  allowed to stay in Mexico may vary depending on your country
                  of citizenship and the purpose of your visit. You should
                  contact the Mexican embassy or consulate in your country for
                  more information on the specific requirements and restrictions
                  that apply to your visit to Mexico.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Mexico?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To this day, there are no entry restrictions in Mexico and no
                obligation to carry a COVID test or to do quarantine. Check the
                current status of the pandemic in Mexico and follow the sanitary
                rules to prevent contagion.
                <br />
                <br />
                A negative COVID-19 test (PCR and/or serology) is not required
                for entry. Health screening procedures in place at airports and
                other ports of entry.
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
                Informations About Diplomatic Passport!
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                A diplomatic passport is a special type of passport that is
                issued to diplomats and other government officials for official
                travel. In Mexico, diplomatic passports are issued by the
                Secretariat of Foreign Affairs (Secretaría de Relaciones
                Exteriores) to Mexican diplomats and other government officials
                who are authorized to travel on official business.
                <br />
                <br />
                Holders of diplomatic passports are entitled to certain
                privileges and immunities while traveling abroad, including
                exemption from visa requirements and immigration controls in
                many countries. They are also typically afforded special
                treatment at airports and other border crossings.
                <br />
                <br />
                To qualify for a diplomatic passport in Mexico, you must be a
                Mexican national who is employed by the government in an
                official capacity and who has been authorized to travel on
                official business. You will need to provide proof of your
                employment and your official travel authorization when applying
                for a diplomatic passport.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that diplomatic passports are only
                  issued to individuals who are traveling on official business
                  and are not intended for personal travel. If you are not a
                  Mexican national and are not employed by the government in an
                  official capacity, you will not be eligible for a diplomatic
                  passport.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Mexico?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in Mexico, you will need to obtain a
                worker visa before you can begin working. There are several
                different types of worker visas available in Mexico, including
                temporary worker visas, permanent worker visas, and independent
                worker visas.
                <br />
                <br />
                To qualify for a worker visa in Mexico, you will typically need
                to meet the following requirements:
                <br />
                <br />
                ● Be a foreign national who is not a resident of Mexico.
                <br />
                <br />
                ● Have a job offer from a Mexican employer.
                <br />
                <br />
                ● Meet any educational, experience, or other qualifications
                required for the job.
                <br />
                <br />
                ● Meet any other requirements specified by Mexican immigration
                law.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  worker visa in Mexico may vary depending on your country of
                  citizenship and the specific type of visa you are applying
                  for. You should contact the Mexican embassy or consulate in
                  your country for more information on the specific requirements
                  and process for obtaining a worker visa in Mexico.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Mexico Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Mexico, you will need to follow
                the steps below:
                <br />
                <br />
                ● Determine which type of worker visa you need. There are
                several different types of worker visas available in Mexico,
                including temporary worker visas, permanent worker visas, and
                independent worker visas. You will need to determine which type
                of visa is appropriate for your situation and the type of work
                you will be doing in Mexico.
                <br />
                <br />
                ● Gather the required documents. To apply for a worker visa in
                Mexico, you will need to provide a completed application form, a
                valid passport, passport-style photographs, a copy of your job
                offer or work contract, and evidence of sufficient funds to
                support yourself during your stay in Mexico. You may also need
                to provide other documents, such as a police clearance
                certificate from your country of citizenship.
                <br />
                <br />
                ● Contact the Mexican embassy or consulate in your country. You
                will need to contact the Mexican embassy or consulate in your
                country to find out where and how to submit your worker visa
                application. Some embassies and consulates may allow you to
                apply for a worker visa online, while others may require you to
                submit your application in person.
                <br />
                <br />
                ● Submit your worker visa application. Once you have gathered
                all of the required documents and determined where to submit
                your application, you will need to submit your worker visa
                application to the Mexican embassy or consulate. You may be
                required to pay a fee at this time.
                <br />
                <br />
                ● Wait for a decision on your application. After you have
                submitted your worker visa application, you will need to wait
                for a decision on your application. This process can take
                several weeks, so it is important to apply for your worker visa
                well in advance of your planned travel date.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  worker visa in Mexico may vary depending on your country of
                  citizenship and the specific type of visa you are applying
                  for. You should contact the Mexican embassy or consulate in
                  your country for more information on the specific requirements
                  and process for obtaining a worker visa in Mexico.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Mexico Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several different types of worker visas available in
                Mexico, including:
                <br />
                <br />
                <span className="font-bold">Temporary Worker Visa</span>
                : A temporary worker visa is issued for a specific period of
                time and is intended for foreign workers who will be working in
                Mexico on a temporary basis. This type of visa is usually valid
                for up to four years and may be renewed for additional periods
                of up to four years.
                <br />
                <br />
                <span className="font-bold">Permanent Worker Visa</span>
                : A permanent worker visa is issued to foreign workers who will
                be working in Mexico on a long-term basis. This type of visa is
                usually valid for up to 10 years and may be renewed for
                additional periods of up to 10 years.
                <br />
                <br />
                <span className="font-bold">Independent Worker Visa</span>
                : An independent worker visa is issued to foreign workers who
                will be working in Mexico as self-employed individuals. This
                type of visa is usually valid for up to four years and may be
                renewed for additional periods of up to four years.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements and
                  restrictions that apply to each type of worker visa may vary
                  depending on your country of citizenship and the specific type
                  of work you will be doing in Mexico. You should contact the
                  Mexican embassy or consulate in your country for more
                  information on the specific requirements and restrictions that
                  apply to each type of worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Mexico Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Mexico, you will need to provide
                the following documents:
                <br />
                <br />
                ● A completed application form. This can usually be obtained
                from the Mexican embassy or consulate in your country, or
                online.
                <br />
                <br />
                ● A valid passport. Your passport must be valid for at least six
                months after the date of your intended arrival in Mexico.
                <br />
                <br />
                ● Passport-style photographs. You will need to provide two
                passport-style photographs with your worker visa application.
                <br />
                <br />
                ● A copy of your job offer or work contract. This should be a
                written agreement between you and your Mexican employer that
                outlines the terms and conditions of your employment in Mexico.
                <br />
                <br />
                ● Evidence of sufficient funds. You will need to demonstrate
                that you have sufficient funds to support yourself during your
                stay in Mexico. This can be in the form of bank statements, pay
                stubs, or a letter from your employer indicating that your
                travel and living expenses will be covered.
                <br />
                <br />
                ● A police clearance certificate from your country of
                citizenship. This should be a certificate issued by the police
                in your country of citizenship that states that you do not have
                a criminal record.
                <br />
                <br />● Other documents may be required depending on the
                specific type of worker visa you are applying for and the
                purpose of your work in Mexico. For example, if you are applying
                for a temporary worker visa, you may need to provide a letter
                from your employer stating the specific tasks you will be
                performing in Mexico. If you are applying for a permanent worker
                visa, you may need to provide evidence of your educational
                qualifications or work experience.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  worker visa in Mexico may vary depending on your country of
                  citizenship and the specific type of visa you are applying
                  for. You should contact the Mexican embassy or consulate in
                  your country for more information on the specific requirements
                  and process for obtaining a worker visa in Mexico.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Mexico?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Mexico, you will need to contact
                the Mexican embassy or consulate in your country. Some embassies
                and consulates may allow you to apply for a worker visa online,
                while others may require you to submit your application in
                person.
                <br />
                <br />
                It is important to apply for your worker visa well in advance of
                your planned travel date, as the process of obtaining a worker
                visa can take several weeks. You should contact the Mexican
                embassy or consulate in your country as soon as you have a job
                offer from a Mexican employer to find out how to apply for a
                worker visa and to determine the specific requirements and
                deadlines that apply to your situation.
                <br />
                <br />
                It is also important to note that you may need to obtain a visa
                to enter Mexico even if you have a worker visa. If you are not a
                citizen of one of the countries that are allowed to enter Mexico
                without a visa for stays of up to 180 days, you will need to
                apply for a visa to enter Mexico in addition to your worker
                visa.
                <br />
                <br />
                <span className="font-bold">
                  You should contact the Mexican embassy or consulate in your
                  country for more information on the specific requirements and
                  process for obtaining a worker visa in Mexico, as well as any
                  other visas that may be required for your visit.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Mexico?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in Mexico, you will typically need
                to obtain a student visa before you can begin your studies.
                There are several different types of student visas available in
                Mexico, including short-term study visas, long-term study visas,
                and exchange student visas.
                <br />
                <br />
                To qualify for a student visa in Mexico, you will typically need
                to meet the following requirements:
                <br />
                <br />
                ● Be a foreign national who is not a resident of Mexico.
                <br />
                <br />
                ● Have been accepted to a recognized Mexican educational
                institution.
                <br />
                <br />
                ● Have sufficient funds to support yourself during your studies
                in Mexico.
                <br />
                <br />
                ● Meet any other requirements specified by Mexican immigration
                law.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  student visa in Mexico may vary depending on your country of
                  citizenship and the specific type of visa you are applying
                  for. You should contact the Mexican embassy or consulate in
                  your country for more information on the specific requirements
                  and process for obtaining a student visa in Mexico.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Mexico Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Mexico, you will need to follow
                the steps below:
                <br />
                <br />
                ● Determine which type of student visa you need. There are
                several different types of student visas available in Mexico,
                including short-term study visas, long-term study visas, and
                exchange student visas. You will need to determine which type of
                visa is appropriate for your situation and the type of studies
                you will be undertaking in Mexico.
                <br />
                <br />
                ● Gather the required documents. To apply for a student visa in
                Mexico, you will need to provide a completed application form, a
                valid passport, passport-style photographs, a copy of your
                acceptance letter from the Mexican educational institution where
                you will be studying, and evidence of sufficient funds to
                support yourself during your studies in Mexico. You may also
                need to provide other documents, such as a police clearance
                certificate from your country of citizenship.
                <br />
                <br />
                ● Contact the Mexican embassy or consulate in your country. You
                will need to contact the Mexican embassy or consulate in your
                country to find out where and how to submit your student visa
                application. Some embassies and consulates may allow you to
                apply for a student visa online, while others may require you to
                submit your application in person.
                <br />
                <br />
                ● Submit your student visa application. Once you have gathered
                all of the required documents and determined where to submit
                your application, you will need to submit your student visa
                application to the Mexican embassy or consulate. You may be
                required to pay a fee at this time.
                <br />
                <br />
                ● Wait for a decision on your application. After you have
                submitted your student visa application, you will need to wait
                for a decision on your application. This process can take
                several weeks, so it is important to apply for your student visa
                well in advance of your planned travel date.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the process for applying for a
                  student visa in Mexico may vary depending on your country of
                  citizenship and the specific type of visa you are applying
                  for. You should contact the Mexican embassy or consulate in
                  your country for more information on the specific requirements
                  and process for obtaining a student visa in Mexico.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Mexico Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa, you will need to provide the
                following documents:
                <br />
                <br />
                ● A completed application form. This can usually be obtained
                from the Mexican embassy or consulate in your country, or
                online.
                <br />
                <br />
                ● A valid passport. Your passport must be valid for at least six
                months after the date of your intended arrival in Mexico.
                <br />
                <br />
                ● Passport-style photographs. You will need to provide two
                passport-style photographs with your student visa application.
                <br />
                <br />
                ● A copy of your acceptance letter from the Mexican educational
                institution where you will be studying.
                <br />
                <br />
                ● Evidence of sufficient funds to support yourself during your
                studies in Mexico. This can be in the form of bank statements,
                pay stubs, or a letter from your sponsor indicating that your
                living and educational expenses will be covered.
                <br />
                <br />
                ● A police clearance certificate from your country of
                citizenship. This should be a certificate issued by the police
                in your country of citizenship that states that you do not have
                a criminal record.
                <br />
                <br />
                ● Other documents may be required depending on the specific type
                of student visa you are applying for and the purpose of your
                studies in Mexico. For example, if you are applying for a
                short-term study visa, you may need to provide a letter from
                your educational institution outlining the specific course of
                study you will be undertaking in Mexico. If you are applying for
                a long-term study visa, you may need to provide evidence of your
                educational qualifications or previous academic transcripts.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the requirements for obtaining a
                  student visa in Mexico may vary depending on your country of
                  citizenship and the specific type of visa you are applying
                  for. You should contact the Mexican embassy or consulate in
                  your country for more information on the specific requirements
                  and process for obtaining a student visa in Mexico.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Mexico Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Mexico will depend
                on the specific type of student visa you are applying for. There
                are several different types of student visas available in
                Mexico, including short-term study visas, long-term study visas,
                and exchange student visas.
                <br />
                <br />
                <span className="font-bold">Short-term study visas</span> are
                typically valid for up to 180 days and are intended for students
                who will be studying in Mexico for a short period of time. The
                price of a short-term study visa in Mexico is typically around
                $36 USD.
                <br />
                <br />
                <span className="font-bold">Long-term study visas</span> are
                issued for a specific period of time, usually up to one year,
                and are intended for students who will be studying in Mexico for
                a longer period of time. The price of a long-term study visa in
                Mexico is typically around $50 USD.
                <br />
                <br />
                Exchange student visas are issued for a specific period of time
                and are intended for students who will be participating in an
                exchange program in Mexico. The price of an exchange student
                visa in Mexico is typically around $50 USD.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the price of a student visa in
                  Mexico may vary depending on your country of citizenship and
                  the specific type of visa you are applying for. You should
                  contact the Mexican embassy or consulate in your country for
                  more information on the specific validity and price of a
                  student visa in Mexico.
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

export default Mexico;
