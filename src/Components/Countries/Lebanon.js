import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Lebanon = () => {
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
        <title>Lebanon</title>
        <meta name="description" content="Lebanon" />
        <meta
          name="keywords"
          content="Lebanon travel visa, Lebanon work visa, Lebanon study visa, How to apply for an Lebanon visa, Lebanon visa requirements, Lebanon tourist visa, Lebanon student visa, Lebanon business visa, Lebanon visa processing time, Lebanon visa application process, Lebanon visa for Americans, Lebanon visa for Europeans, Lebanon visa for Lebanonns, Lebanon visa for Canadians, Lebanon visa for Lebanonns, Lebanon visa for Chinese, Lebanon visa for Africans, Lebanon visa for Asians, Lebanon visa for South Americans, Lebanon visa for Middle Easterners, Lebanon visa for UK citizens, Lebanon visa for EU citizens, Lebanon visa for Schengen area, Lebanon visa for non-EU citizens, Lebanon visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Lebanon
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Lebanon is a country in the Middle East that is known for its rich
              history and cultural heritage. It is home to many ancient ruins
              and historical sites, such as the ruins of Baalbek and the Cedars
              of God forest. Lebanon is also known for its vibrant and diverse
              culture, which is a blend of Arab, French, and Mediterranean
              influences. The country is famous for its cuisine, which features
              a wide variety of dishes, including hummus, falafel, and
              tabbouleh. Additionally, Lebanon is known for its production of
              high-quality wines and its thriving music and art scene.
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
                Who can enter Lebanon without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of the following countries are allowed to enter Lebanon
                without a visa and stay for a period of up to 90 days:
                <br />
                <br />
                <span className="font-bold">
                  Argentina, Armenia, Australia, Austria, Azerbaijan, Bahrain,
                  Belarus, Belgium, Bosnia and Herzegovina, Brazil, Bulgaria,
                  Canada, Chile, China, Colombia, Costa Rica, Croatia, Cyprus,
                  Czech Republic, Denmark, Ecuador, Egypt, Estonia, Finland,
                  Germany, Greece, Honduras, Hungary, Iceland, India, Indonesia,
                  Iran, Ireland, Israel, Italy, Japan, Kazakhstan, Kosovo,
                  Kuwait, Kyrgyzstan, Latvia, Lithuania, Luxembourg, Malaysia,
                  Malta, Mexico, Moldova, Montenegro, Netherlands, New Zealand,
                  Nicaragua, North Korea, Norway, Oman, Palestine, Panama, Peru,
                  Philippines, Poland, Qatar, Romania, Russia, Serbia,
                  Singapore, Slovakia, Slovenia, South Korea, Spain, Sweden,
                  Switzerland, Tajikistan, Thailand, Tunisia, Turkey,
                  Turkmenistan, Ukraine, United Arab Emirates, United Kingdom,
                  United States, Uzbekistan, Venezuela, Vietnam.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  Please note that this list is subject to change and it is
                  always a good idea to check the most current visa requirements
                  for Lebanon before planning your trip. You can find this
                  information on the website of the Lebanese embassy or
                  consulate in your home country, or you can contact the embassy
                  or consulate directly with any questions you may have.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Lebanon Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Lebanon, you will need to prepare several
                documents. These may include:
                <br />
                <br />
                ● A passport that is valid for at least six months from the date
                of your intended arrival in Lebanon.
                <br />
                <br />
                ● A completed and signed visa application form.
                <br />
                <br />
                ● A passport-sized photograph.
                <br />
                <br />
                ● Evidence of your purpose of visit, such as a letter of
                invitation or a letter from your employer or sponsor.
                <br />
                <br />
                ● Proof of sufficient funds to cover your expenses while in
                Lebanon, such as bank statements or a letter from your bank.
                <br />
                <br />
                ● Evidence of your accommodation in Lebanon, such as a hotel
                booking or a letter of invitation from a host.
                <br />
                <br />
                ● A round-trip ticket or a ticket for onward travel.
                <br />
                <br />
                ● Any other documents required by the Embassy or Consulate of
                Lebanon, such as a police clearance certificate or medical
                certificate.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for
                  obtaining a visa to Lebanon may vary depending on your
                  nationality and the purpose of your visit. You should contact
                  the Embassy or Consulate of Lebanon in your country for more
                  detailed information on the documents you will need to apply
                  for a visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Lebanon Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to Lebanon, you will need to follow the
                steps below:
                <br />
                <br />
                ● Determine the type of visa you need: Lebanon offers several
                types of visas, including tourist visas, business visas, and
                student visas. You will need to determine the type of visa that
                is most suitable for your purpose of visit.
                <br />
                <br />
                ● Collect the necessary documents: As mentioned above, you will
                need to prepare several documents in order to apply for a visa
                to Lebanon. These may include a passport, a completed and signed
                visa application form, passport-sized photographs, and evidence
                of your purpose of visit and sufficient funds, among others.
                <br />
                <br />
                ● Submit your application: You can apply for a visa to Lebanon
                through the Embassy or Consulate of Lebanon in your country. You
                will need to submit your application in person, by mail, or
                online, depending on the specific requirements of the Embassy or
                Consulate.
                <br />
                <br />
                ● Pay the visa fee: You will need to pay a fee to process your
                visa application. The visa fee may vary depending on the type of
                visa you are applying for and your nationality.
                <br />
                <br />
                ● Wait for a decision: The processing time for a visa to Lebanon
                may vary, but you can expect to wait at least a few weeks for a
                decision on your application. You should not make any travel
                arrangements until you have received your visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific process for applying
                  for a visa to Lebanon may vary depending on your nationality
                  and the purpose of your visit. You should contact the Embassy
                  or Consulate of Lebanon in your country for more detailed
                  information on how to apply for a visa.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Lebanon?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you are allowed to stay in Lebanon
                depends on the type of visa that you have.
                <br />
                <br />
                If you have a tourist visa, you will generally be allowed to
                stay in Lebanon for up to 90 days. If you are a student or are
                visiting Lebanon for business purposes, you may be granted a
                longer stay, depending on the specific circumstances of your
                visit.
                <br />
                <br />
                It is important to note that the length of your stay in Lebanon
                is determined by the expiration date of your visa. You will need
                to leave the country before your visa expires, or apply for an
                extension if you wish to stay longer.
                <br />
                <br />
                <span className="font-bold">
                  If you overstay your visa, you may be subject to fines and
                  other penalties. It is also possible that you may be denied
                  entry to Lebanon in the future. Therefore, it is important to
                  carefully plan your trip and make sure that you leave the
                  country before your visa expires.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Lebanon?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                All people traveling to Lebanon must fill out this health
                declaration form online before departure. Anyone arriving to
                Lebanon will be required to present a negative test, no older
                than 48 hours. Fully vaccinated arrivals are exempt.
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
                issued to diplomats and other government officials who are
                traveling abroad on official business. In Lebanon, diplomatic
                passports are issued by the Ministry of Foreign Affairs.
                <br />
                <br />
                Holders of a diplomatic passport are entitled to certain
                privileges and immunities while abroad, as provided for under
                international law. These may include exemption from immigration
                controls, customs duties, and taxes, as well as immunity from
                criminal jurisdiction in the host country.
                <br />
                <br />
                To be eligible for a diplomatic passport in Lebanon, you must be
                a citizen of Lebanon and hold a position in the government that
                requires you to travel abroad on official business. You will
                need to provide proof of your employment and your official
                duties when applying for a diplomatic passport.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the privileges and immunities
                  associated with a diplomatic passport are not absolute, and
                  may be waived by the host country in certain circumstances.
                  Diplomatic passport holders are expected to respect the laws
                  and regulations of the countries they visit and to conduct
                  themselves in a manner that is consistent with their official
                  status.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Lebanon?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a foreigner and you want to work in Lebanon, you will
                generally need to obtain a worker visa. A worker visa is a type
                of visa that allows you to legally work in the country for a
                specific period of time.
                <br />
                <br />
                To apply for a worker visa in Lebanon, you will need to have a
                job offer from a Lebanese employer. The employer will be
                responsible for sponsoring your worker visa and helping you to
                obtain the necessary documentation.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for
                  obtaining a worker visa in Lebanon may vary depending on your
                  nationality and the type of work you will be doing. You should
                  contact the Embassy or Consulate of Lebanon in your country
                  for more detailed information on the process for applying for
                  a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Lebanon Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Lebanon, you will need to follow
                the steps below:
                <br />
                <br />
                ● Find a job: Before you can apply for a worker visa, you will
                need to have a job offer from a Lebanese employer. You should
                make sure that you have a clear understanding of the terms of
                your employment, including your job duties, salary, and the
                duration of your contract.
                <br />
                <br />
                ● Gather the necessary documents: You will need to provide
                several documents when applying for a worker visa in Lebanon.
                These may include a valid passport, a completed and signed visa
                application form, passport-sized photographs, a copy of your
                employment contract, and a letter from your employer detailing
                the terms of your employment. You may also be required to
                provide a medical certificate and a police clearance
                certificate.
                <br />
                <br />
                ● Submit your application: You will need to submit your worker
                visa application to the Embassy or Consulate of Lebanon in your
                country. You may be required to submit your application in
                person, by mail, or online, depending on the specific
                requirements of the Embassy or Consulate.
                <br />
                <br />
                ● Pay the visa fee: You will need to pay a fee to process your
                worker visa application. The visa fee may vary depending on your
                nationality and the type of work you will be doing in Lebanon.
                <br />
                <br />
                ● Wait for a decision: The processing time for a worker visa in
                Lebanon may vary, but you can expect to wait at least a few
                weeks for a decision on your application. You should not make
                any travel arrangements until you have received your worker
                visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific process for applying
                  for a worker visa in Lebanon may vary depending on your
                  nationality and the type of work you will be doing. You should
                  contact the Embassy or Consulate of Lebanon in your country
                  for more detailed information on how to apply for a worker
                  visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Lebanon Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas that you can apply for
                in Lebanon, depending on the nature of your employment and the
                length of your contract. Some of the most common types of worker
                visas in Lebanon include:
                <br />
                <br />
                <span className="font-bold">Temporary worker visa</span>
                : This type of visa is issued to foreigners who are coming to
                Lebanon to work for a limited period of time, usually for a
                specific project or assignment.
                <br />
                <br />
                <span className="font-bold">Seasonal worker visa</span>
                : This type of visa is issued to foreigners who are coming to
                Lebanon to work in industries that experience a high demand for
                labor at certain times of the year, such as agriculture or
                tourism.
                <br />
                <br />
                <span className="font-bold">Professional worker visa</span>
                : This type of visa is issued to foreigners who are coming to
                Lebanon to work in a highly skilled or specialized profession,
                such as medicine or engineering.
                <br />
                <br />
                <span className="font-bold">Permanent worker visa</span>
                : This type of visa is issued to foreigners who are coming to
                Lebanon to work on a long-term basis, usually for an indefinite
                period of time.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for
                  obtaining a worker visa in Lebanon may vary depending on your
                  nationality and the type of work you will be doing. You should
                  contact the Embassy or Consulate of Lebanon in your country
                  for more detailed information on the types of worker visas
                  that are available.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Lebanon Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Lebanon, you will need to provide
                several documents. These may include:
                <br />
                <br />
                ● A valid passport: You will need to provide a passport that is
                valid for at least six months from the date of your intended
                arrival in Lebanon.
                <br />
                <br />
                ● A completed and signed visa application form: You will need to
                complete a visa application form and sign it to apply for a
                worker visa.
                <br />
                <br />
                ● Passport-sized photographs: You will need to provide one or
                more passport-sized photographs of yourself as part of your
                worker visa application.
                <br />
                <br />
                ● A copy of your employment contract: You will need to provide a
                copy of your employment contract, which should include details
                of your job duties, salary, and the duration of your contract.
                <br />
                <br />
                ● A letter from your employer: You will need to provide a letter
                from your employer detailing the terms of your employment in
                Lebanon. This letter should include information on your job
                duties, salary, and the duration of your contract.
                <br />
                <br />
                ● A medical certificate: You may be required to provide a
                medical certificate as part of your worker visa application.
                This certificate should confirm that you are in good health and
                do not have any communicable diseases.
                <br />
                <br />
                ● A police clearance certificate: You may be required to provide
                a police clearance certificate as part of your worker visa
                application. This certificate should confirm that you do not
                have any criminal record.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for
                  obtaining a worker visa in Lebanon may vary depending on your
                  nationality and the type of work you will be doing. You should
                  contact the Embassy or Consulate of Lebanon in your country
                  for more detailed information on the documents you will need
                  to apply for a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Lebanon?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Lebanon, you will need to submit
                your application to the Embassy or Consulate of Lebanon in your
                country. You may be required to submit your application in
                person, by mail, or online, depending on the specific
                requirements of the Embassy or Consulate.
                <br />
                <br />
                You should allow enough time to gather all the necessary
                documents and prepare your application before submitting it. The
                processing time for a worker visa in Lebanon may vary, but you
                can expect to wait at least a few weeks for a decision on your
                application.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific process for applying
                  for a worker visa in Lebanon may vary depending on your
                  nationality and the type of work you will be doing. You should
                  contact the Embassy or Consulate of Lebanon in your country
                  for more detailed information on where and when to apply for a
                  worker visa.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Lebanon?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Yes, you will generally need to obtain a student visa in order
                to study in Lebanon. A student visa is a type of visa that
                allows you to legally study in the country for a specific period
                of time.
                <br />
                <br />
                To apply for a student visa in Lebanon, you will need to have
                been accepted to a recognized educational institution in the
                country. The educational institution will be responsible for
                sponsoring your student visa and helping you to obtain the
                necessary documentation.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for
                  obtaining a student visa in Lebanon may vary depending on your
                  nationality and the type of study you will be doing. You
                  should contact the Embassy or Consulate of Lebanon in your
                  country for more detailed information on the process for
                  applying for a student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Lebanon Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Lebanon, you will need to follow
                the steps below:
                <br />
                <br />
                ● Find an educational institution: Before you can apply for a
                student visa, you will need to be accepted to a recognized
                educational institution in Lebanon. You should make sure that
                you have a clear understanding of the terms of your enrollment,
                including the duration of your studies and any tuition or other
                fees.
                <br />
                <br />
                ● Gather the necessary documents: You will need to provide
                several documents when applying for a student visa in Lebanon.
                These may include a valid passport, a completed and signed visa
                application form, passport-sized photographs, a letter of
                acceptance from the educational institution, and evidence of
                your financial ability to support yourself while studying in
                Lebanon. You may also be required to provide a medical
                certificate and a police clearance certificate.
                <br />
                <br />
                ● Submit your application: You will need to submit your student
                visa application to the Embassy or Consulate of Lebanon in your
                country. You may be required to submit your application in
                person, by mail, or online, depending on the specific
                requirements of the Embassy or Consulate.
                <br />
                <br />
                ● Pay the visa fee: You will need to pay a fee to process your
                student visa application. The visa fee may vary depending on
                your nationality and the type of study you will be doing in
                Lebanon.
                <br />
                <br />
                ● Wait for a decision: The processing time for a student visa in
                Lebanon may vary, but you can expect to wait at least a few
                weeks for a decision on your application. You should not make
                any travel arrangements until you have received your student
                visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific process for applying
                  for a student visa in Lebanon may vary depending on your
                  nationality and the type of study you will be doing. You
                  should contact the Embassy or Consulate of Lebanon in your
                  country for more detailed information on how to apply for a
                  student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Lebanon Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Lebanon, you will need to provide
                several documents. These may include:
                <br />
                <br />
                ● A valid passport: You will need to provide a passport that is
                valid for at least six months from the date of your intended
                arrival in Lebanon.
                <br />
                <br />
                ● A completed and signed visa application form: You will need to
                complete a visa application form and sign it to apply for a
                student visa.
                <br />
                <br />
                ● Passport-sized photographs: You will need to provide one or
                more passport-sized photographs of yourself as part of your
                student visa application.
                <br />
                <br />
                ● A letter of acceptance from the educational institution: You
                will need to provide a letter of acceptance from the educational
                institution in Lebanon that has accepted you for enrollment. The
                letter should include details of your program of study, the
                duration of your studies, and any tuition or other fees.
                <br />
                <br />
                ● Evidence of your financial ability to support yourself while
                studying in Lebanon: You will need to provide evidence of your
                financial ability to support yourself while studying in Lebanon,
                such as bank statements or a letter from your bank.
                <br />
                <br />
                ● A medical certificate: You may be required to provide a
                medical certificate as part of your student visa application.
                This certificate should confirm that you are in good health and
                do not have any communicable diseases.
                <br />
                <br />
                ● A police clearance certificate: You may be required to provide
                a police clearance certificate as part of your student visa
                application. This certificate should confirm that you do not
                have any criminal record.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements for
                  obtaining a student visa in Lebanon may vary depending on your
                  nationality and the type of study you will be doing. You
                  should contact the Embassy or Consulate of Lebanon in your
                  country for more detailed information on the documents you
                  will need to apply for a student visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Lebanon Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa in Lebanon will depend
                on several factors, including your nationality, the type of
                study you will be doing, and the length of your program.
                <br />
                <br />
                In general, student visas are valid for the duration of your
                studies in Lebanon, up to a maximum of four years. You may be
                able to extend your student visa if you need to continue your
                studies beyond the expiration date of your visa.
                <br />
                <br />
                The price of a student visa in Lebanon may vary depending on
                your nationality and the type of study you will be doing. You
                should contact the Embassy or Consulate of Lebanon in your
                country for more detailed information on the price of a student
                visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the price of a student visa does
                  not include the cost of tuition or other fees that you may
                  need to pay to the educational institution in Lebanon. You
                  should make sure that you have sufficient funds to cover these
                  costs in addition to your living expenses while studying in
                  the country.
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

export default Lebanon;
