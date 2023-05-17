import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Jordan = () => {
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
        <title>Jordan</title>
        <meta name="description" content="Jordan" />
        <meta
          name="keywords"
          content="Jordan travel visa, Jordan work visa, Jordan study visa, How to apply for an Jordan visa, Jordan visa requirements, Jordan tourist visa, Jordan student visa, Jordan business visa, Jordan visa processing time, Jordan visa application process, Jordan visa for Americans, Jordan visa for Europeans, Jordan visa for Jordanns, Jordan visa for Canadians, Jordan visa for Jordanns, Jordan visa for Chinese, Jordan visa for Africans, Jordan visa for Asians, Jordan visa for South Americans, Jordan visa for Middle Easterners, Jordan visa for UK citizens, Jordan visa for EU citizens, Jordan visa for Schengen area, Jordan visa for non-EU citizens, Jordan visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Jordan
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Jordan is a country in the Middle East that is known for its
              ancient cultural and historical sites, such as the city of Petra
              and the ruins of Jerash. It is also known for its natural beauty,
              with vast deserts, mountains, and the Dead Sea, which is the
              lowest point on Earth. In recent years, Jordan has become a
              popular destination for eco-tourism, adventure sports, and medical
              tourism.
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
                Who can enter Jordan without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries are able to enter Jordan without a
                visa for stays of up to 90 days. These countries include:
                <br />
                <br />
                <span className="font-bold">
                  Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, United Arab
                  Emirates.
                </span>
                <br />
                <br />
                In addition, citizens of the following countries are able to
                enter Jordan without a visa for stays of up to 30 days:
                <br />
                <br />
                <span className="font-bold">
                  Andorra Argentina, Australia, Austria, Belgium, Bosnia and
                  Herzegovina, Brazil, Brunei, Canada, Chile, Costa Rica,
                  Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland,
                  France, Germany, Greece, Hong Kong, Hungary, Iceland, Ireland,
                  Italy, Japan, Latvia, Liechtenstein, Lithuania, Luxembourg,
                  Malaysia, Malta, Monaco, Montenegro, Netherlands, New Zealand,
                  Norway, Poland, Portugal, Republic of Korea, Romania, San
                  Marino, Serbia, Singapore, Slovakia, Slovenia, South Africa,
                  Spain, Sweden, Switzerland, Taiwan, United Kingdom, United
                  States.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  Citizens of other countries will need to obtain a visa before
                  they can enter Jordan. It's a good idea to check with the
                  embassy or consulate of Jordan in your country or with the
                  Ministry of Foreign Affairs of Jordan for the most up-to-date
                  information on the visa requirements for your country. They
                  will be able to provide you with more information on the
                  specific documents you will need to submit to apply for a visa
                  to enter Jordan.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Jordan Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Jordan, you will typically need to
                submit the following documents:
                <br />
                <br />
                ● A valid passport with at least 6 months of remaining validity.
                <br />
                <br />
                ● A completed visa application form, which you can get from the
                embassy or consulate of Jordan in your country or download from
                their website.
                <br />
                <br />
                ● A passport-sized photograph taken within the last 6 months.
                <br />
                <br />
                ● A letter of invitation from a sponsor in Jordan, if
                applicable.
                <br />
                <br />
                ● Evidence of your travel arrangements, such as a copy of your
                round-trip ticket or a confirmed itinerary.
                <br />
                <br />
                ● Evidence of your financial means to support yourself during
                your stay in Jordan, such as bank statements or a letter of
                financial support from your sponsor.
                <br />
                <br />
                Other documents may be required depending on the specific
                requirements of the embassy or consulate of Jordan in your
                country and the purpose of your visit to Jordan.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the embassy or consulate of
                  Jordan in your country or with the Ministry of Foreign Affairs
                  of Jordan for the most up-to-date information on the documents
                  required for your visa application, as the requirements can
                  vary depending on your country of origin and the specific
                  purpose of your visit to Jordan. They will be able to provide
                  you with a list of specific documents that you need to submit
                  based on your individual circumstances.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Jordan Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Jordan, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine the type of visa you need: There are several types
                of visas available for individuals who wish to enter Jordan,
                including tourist visas, business visas, and student visas.
                Determine the type of visa that is most appropriate for your
                purpose of visit to Jordan.
                <br />
                <br />
                ● Gather the required documents: You will need to gather the
                documents required for your visa application, including your
                passport, a completed visa application form, and a
                passport-sized photograph taken within the last 6 months. You
                may also need to submit a letter of invitation from a sponsor in
                Jordan, evidence of your travel arrangements, and evidence of
                your financial means to support yourself during your stay in
                Jordan.
                <br />
                <br />
                ● Contact the embassy or consulate of Jordan: Contact the
                embassy or consulate of Jordan in your country to schedule an
                appointment to submit your visa application. You may be able to
                make an appointment online or by phone.
                <br />
                <br />
                ● Submit your application: Bring your completed application and
                required documents to your appointment at the embassy or
                consulate of Jordan. You may be required to pay a visa
                processing fee at this time.
                <br />
                <br />
                ● Wait for processing: Your visa application will be processed
                by the embassy or consulate of Jordan. This process can take
                several weeks, so it's a good idea to apply for your visa well
                in advance of your planned trip.
                <br />
                <br />
                ● Receive your visa: If your visa application is approved, you
                will receive your visa in the form of a stamp or sticker in your
                passport. Keep this with you when you travel to Jordan.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the embassy or consulate of
                  Jordan in your country or with the Ministry of Foreign Affairs
                  of Jordan for the most up-to-date information on the visa
                  application process and any specific requirements or deadlines
                  that you need to be aware of. They will be able to provide you
                  with more information on the specific steps you need to take
                  to apply for a visa to enter Jordan.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Jordan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time that you are able to stay in Jordan on a visa
                will depend on the type of visa you have obtained and the
                specific terms of your visa.
                <br />
                <br />
                Tourist visas to Jordan are typically valid for stays of up to 3
                months. Business visas to Jordan are typically valid for stays
                of up to 6 months, while student visas are typically valid for
                the duration of your studies, up to 2 years.
                <br />
                <br />
                If you wish to stay in Jordan for a longer period of time, you
                may be able to apply for a residence permit or extend your visa.
                You will need to apply for a residence permit at the Department
                of Alien and Passport Affairs in Jordan before your visa
                expires. To extend your visa, you will need to apply for an
                extension at the Department of Alien and Passport Affairs or at
                the embassy or consulate of Jordan in your country.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the embassy or consulate of
                  Jordan in your country or with the Ministry of Foreign Affairs
                  of Jordan for the most up-to-date information on the length of
                  time you are able to stay in Jordan on a visa and the process
                  for obtaining a residence permit or extending your visa. They
                  will be able to provide you with more information on the
                  specific steps you need to take to stay in Jordan for a longer
                  period of time.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Jordan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Beginning March 1st, travelers to Jordan will no longer need to
                conduct a PCR test before departure to Jordan nor will they need
                to conduct a PCR test upon arrival at the airports, land borders
                or sea port.
                <br />
                <br />
                All travelers are still required to visit
                https://gateway2jordan.gov.jo to complete the required travel
                declaration form and obtain the QR code which is mandatory for
                boarding and entry to hotels, restaurants and public areas.
                Exemptions include: Children under the age of 5 years.
                <br />
                <br />
                In case of a positive COVID test result during a travelers stay,
                travelers must commit to adhere to self-quarantine for five days
                as per the regulations of the kingdom.
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
                issued to diplomats and other high-ranking officials who
                represent their country in international relations. Diplomatic
                passports are issued by the government of the individual's
                country of nationality and are typically valid for a period of 5
                years.
                <br />
                <br />
                Diplomatic passports are issued to individuals who are
                accredited as diplomats by the government of Jordan, such as
                ambassadors, chargés d'affaires, and consuls. Diplomatic
                passports are also issued to other high-ranking officials who
                are traveling on official government business, such as members
                of parliament, high-ranking military officials, and officials
                from international organizations.
                <br />
                <br />
                Diplomatic passports are issued in addition to an individual's
                regular passport and are typically used when the individual is
                traveling on official business on behalf of their country.
                Diplomatic passports entitle the holder to certain privileges
                and immunities while they are abroad, including immunity from
                arrest and detention, immunity from customs duties and taxes,
                and special privileges with respect to entry and exit from a
                country.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the embassy or consulate of
                  Jordan in your country or with the Ministry of Foreign Affairs
                  of Jordan for the most up-to-date information on the process
                  for obtaining a diplomatic passport and the privileges and
                  immunities associated with a diplomatic passport. They will be
                  able to provide you with more information on the specific
                  steps you need to take to apply for a diplomatic passport and
                  how to use it while traveling on official business.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Jordan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to work in Jordan, you will typically need
                to obtain a worker visa before you can begin your employment.
                The worker visa is a type of visa that allows you to work in
                Jordan for a specific period of time and is issued by the
                government of Jordan.
                <br />
                <br />
                To be eligible for a worker visa in Jordan, you will typically
                need to have a job offer from an employer in Jordan and meet the
                specific requirements for the worker visa. These requirements
                may include having the necessary qualifications and experience
                for the job, having a valid passport with at least 6 months of
                remaining validity, and being able to demonstrate that you have
                the financial means to support yourself during your stay in
                Jordan.
                <br />
                <br />
                To apply for a worker visa in Jordan, you will need to gather
                the required documents, including your passport, a completed
                worker visa application form, and a letter of employment from
                your employer in Jordan. You will also need to submit evidence
                of your qualifications and experience, as well as evidence of
                your financial means.
                <br />
                <br />
                You will need to submit your worker visa application to the
                embassy or consulate of Jordan in your country or to the
                Department of Alien and Passport Affairs in Jordan. The worker
                visa application process can take several weeks, so it's a good
                idea to apply for your worker visa well in advance of your
                planned trip to Jordan.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the embassy or consulate of
                  Jordan in your country or with the Ministry of Foreign Affairs
                  of Jordan for the most up-to-date information on the worker
                  visa requirements and application process, as the requirements
                  can vary depending on your country of origin and the specific
                  type of work you will be doing in Jordan. They will be able to
                  provide you with a list of specific documents that you need to
                  submit based on your individual circumstances.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Jordan Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Jordan, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine your eligibility: To be eligible for a worker visa
                in Jordan, you will typically need to have a job offer from an
                employer in Jordan and meet the specific requirements for the
                worker visa. These requirements may include having the necessary
                qualifications and experience for the job, having a valid
                passport with at least 6 months of remaining validity, and being
                able to demonstrate that you have the financial means to support
                yourself during your stay in Jordan.
                <br />
                <br />
                ● Gather the required documents: You will need to gather the
                documents required for your worker visa application, including
                your passport, a completed worker visa application form, and a
                letter of employment from your employer in Jordan. You may also
                need to submit evidence of your qualifications and experience,
                as well as evidence of your financial means.
                <br />
                <br />
                ● Contact the embassy or consulate of Jordan: Contact the
                embassy or consulate of Jordan in your country to schedule an
                appointment to submit your worker visa application. You may be
                able to make an appointment online or by phone.
                <br />
                <br />
                ● Submit your application: Bring your completed application and
                required documents to your appointment at the embassy or
                consulate of Jordan. You may be required to pay a visa
                processing fee at this time.
                <br />
                <br />
                ● Wait for processing: Your worker visa application will be
                processed by the embassy or consulate of Jordan. This process
                can take several weeks, so it's a good idea to apply for your
                worker visa well in advance of your planned trip to Jordan.
                <br />
                <br />
                ● Receive your worker visa: If your worker visa application is
                approved, you will receive your worker visa in the form of a
                stamp or sticker in your passport. Keep this with you when you
                travel to Jordan.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the embassy or consulate of
                  Jordan in your country or with the Ministry of Foreign Affairs
                  of Jordan for the most up-to-date information on the worker
                  visa application process and any specific requirements or
                  deadlines that you need to be aware of. They will be able to
                  provide you with more information on the specific steps you
                  need to take to apply for a worker visa in Jordan.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Jordan Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas available in Jordan,
                including:
                <br />
                <br />
                <span className="font-bold">Temporary Worker Visa</span>
                : This type of worker visa is issued to individuals who are
                coming to Jordan to work for a specific period of time, usually
                up to 1 year. To be eligible for a temporary worker visa, you
                will typically need to have a job offer from an employer in
                Jordan and meet the specific requirements for the worker visa.
                <br />
                <br />
                <span className="font-bold">Seasonal Worker Visa</span>
                : This type of worker visa is issued to individuals who are
                coming to Jordan to work for a specific period of time, usually
                up to 6 months. Seasonal worker visas are typically issued to
                individuals who will be working in industries that have a high
                demand for workers during certain times of the year, such as
                agriculture or tourism. To be eligible for a seasonal worker
                visa, you will typically need to have a job offer from an
                employer in Jordan and meet the specific requirements for the
                worker visa.
                <br />
                <br />
                <span className="font-bold">Permanent Worker Visa</span>
                : This type of worker visa is issued to individuals who are
                coming to Jordan to work on a long-term basis, usually for more
                than 1 year. To be eligible for a permanent worker visa, you
                will typically need to have a job offer from an employer in
                Jordan and meet the specific requirements for the worker visa.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the embassy or consulate of
                  Jordan in your country or with the Ministry of Foreign Affairs
                  of Jordan for the most up-to-date information on the types of
                  worker visas available in Jordan and the specific requirements
                  for each type. They will be able to provide you with more
                  information on the specific types of worker visas that are
                  available based on your individual circumstances.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Jordan Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Jordan, you will typically need to
                submit the following documents:
                <br />
                <br />
                ● A valid passport with at least 6 months of remaining validity.
                <br />
                <br />
                ● A completed worker visa application form, which you can get
                from the embassy or consulate of Jordan in your country or
                download from their website.
                <br />
                <br />
                ● A passport-sized photograph taken within the last 6 months.
                <br />
                <br />
                ● A letter of employment from your employer in Jordan, which
                should include information about your job title, salary, and the
                duration of your employment.
                <br />
                <br />
                ● Evidence of your qualifications and experience for the job,
                such as copies of diplomas or certificates.
                <br />
                <br />
                ● Evidence of your financial means to support yourself during
                your stay in Jordan, such as bank statements or a letter of
                financial support from your employer.
                <br />
                <br />
                Other documents may be required depending on the specific
                requirements of the embassy or consulate of Jordan in your
                country and the type of worker visa you are applying for.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the embassy or consulate of
                  Jordan in your country or with the Ministry of Foreign Affairs
                  of Jordan for the most up-to-date information on the documents
                  required for your worker visa application, as the requirements
                  can vary depending on your country of origin and the specific
                  type of work you will be doing in Jordan. They will be able to
                  provide you with a list of specific documents that you need to
                  submit based on your individual circumstances.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Jordan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa in Jordan, you will need to submit
                your application to the embassy or consulate of Jordan in your
                country or to the Department of Alien and Passport Affairs in
                Jordan. You can find the location and contact information for
                the embassy or consulate of Jordan in your country on the
                Ministry of Foreign Affairs of Jordan's website.
                <br />
                <br />
                You can typically apply for a worker visa in Jordan at any time,
                but it's a good idea to apply well in advance of your planned
                trip to Jordan. The worker visa application process can take
                several weeks to complete, so you should allow enough time for
                your application to be processed before your planned travel
                date.
                <br />
                <br />
                You will need to schedule an appointment to submit your worker
                visa application at the embassy or consulate of Jordan in your
                country or at the Department of Alien and Passport Affairs in
                Jordan. You may be able to make an appointment online or by
                phone.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the embassy or consulate of
                  Jordan in your country or with the Ministry of Foreign Affairs
                  of Jordan for the most up-to-date information on the worker
                  visa application process and any specific requirements or
                  deadlines that you need to be aware of. They will be able to
                  provide you with more information on the specific steps you
                  need to take to apply for a worker visa in Jordan.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Jordan?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are planning to study in Jordan, you will typically need
                to obtain a student visa before you can begin your studies. The
                student visa is a type of visa that allows you to study in
                Jordan for a specific period of time and is issued by the
                government of Jordan.
                <br />
                <br />
                To be eligible for a student visa in Jordan, you will typically
                need to be accepted to a recognized educational institution in
                Jordan and meet the specific requirements for the student visa.
                These requirements may include having a valid passport with at
                least 6 months of remaining validity, being able to demonstrate
                that you have the financial means to support yourself during
                your stay in Jordan, and meeting any other specific requirements
                of the educational institution you will be attending.
                <br />
                <br />
                To apply for a student visa in Jordan, you will need to gather
                the required documents, including your passport, a completed
                student visa application form, and an acceptance letter from
                your educational institution in Jordan. You may also need to
                submit evidence of your financial means and any other required
                documents.
                <br />
                <br />
                You will need to submit your student visa application to the
                embassy or consulate of Jordan in your country or to the
                Department of Alien and Passport Affairs in Jordan. The student
                visa application process can take several weeks, so it's a good
                idea to apply for your student visa well in advance of your
                planned trip to Jordan.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the embassy or consulate of
                  Jordan in your country or with the Ministry of Foreign Affairs
                  of Jordan for the most up-to-date information on the student
                  visa requirements and application process, as the requirements
                  can vary depending on your country of origin and the specific
                  educational institution you will be attending in Jordan. They
                  will be able to provide you with a list of specific documents
                  that you need to submit based on your individual
                  circumstances.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Jordan Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa in Jordan, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine your eligibility: To be eligible for a student visa
                in Jordan, you will typically need to be accepted to a
                recognized educational institution in Jordan and meet the
                specific requirements for the student visa. These requirements
                may include having a valid passport with at least 6 months of
                remaining validity, being able to demonstrate that you have the
                financial means to support yourself during your stay in Jordan,
                and meeting any other specific requirements of the educational
                institution you will be attending.
                <br />
                <br />
                ● Gather the required documents: You will need to gather the
                documents required for your student visa application, including
                your passport, a completed student visa application form, and an
                acceptance letter from your educational institution in Jordan.
                You may also need to submit evidence of your financial means and
                any other required documents.
                <br />
                <br />
                ● Contact the embassy or consulate of Jordan: Contact the
                embassy or consulate of Jordan in your country to schedule an
                appointment to submit your student visa application. You may be
                able to make an appointment online or by phone.
                <br />
                <br />
                ● Submit your application: Bring your completed application and
                required documents to your appointment at the embassy or
                consulate of Jordan. You may be required to pay a visa
                processing fee at this time.
                <br />
                <br />
                ● Wait for processing: Your student visa application will be
                processed by the embassy or consulate of Jordan. This process
                can take several weeks, so it's a good idea to apply for your
                student visa well in advance of your planned trip to Jordan.
                <br />
                <br />
                ● Receive your student visa: If your student visa application is
                approved, you will receive your student visa in the form of a
                stamp or sticker in your passport. Keep this with you when you
                travel to Jordan.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the embassy or consulate of
                  Jordan in your country or with the Ministry of Foreign Affairs
                  of Jordan for the most up-to-date information on the student
                  visa application process and any specific requirements or
                  deadlines that you need to be aware of. They will be able to
                  provide you with more information on the specific steps you
                  need to take to apply for a student visa in Jordan.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Jordan Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To be eligible for a student visa in Jordan, you will typically
                need to meet the following requirements:
                <br />
                <br />
                ● Be accepted to a recognized educational institution in Jordan:
                You will need to provide an acceptance letter from your
                educational institution as part of your student visa
                application.
                <br />
                <br />
                ● Have a valid passport with at least 6 months of remaining
                validity: You will need to submit a copy of your passport as
                part of your student visa application.
                <br />
                <br />
                ● Demonstrate that you have the financial means to support
                yourself during your stay in Jordan: You may be required to
                provide evidence of your financial means, such as bank
                statements or a letter of financial support from your sponsor,
                as part of your student visa application.
                <br />
                <br />
                ● Meet any other specific requirements of the educational
                institution you will be attending: Your educational institution
                may have additional requirements that you need to meet in order
                to be eligible for a student visa in Jordan.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the embassy or consulate of
                  Jordan in your country or with the Ministry of Foreign Affairs
                  of Jordan for the most up-to-date information on the student
                  visa requirements, as the requirements can vary depending on
                  your country of origin and the specific educational
                  institution you will be attending in Jordan. They will be able
                  to provide you with a list of specific requirements that you
                  need to meet based on your individual circumstances.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Jordan Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity of a student visa in Jordan depends on the length
                of your studies and the specific terms of your student visa.
                Your student visa will typically be valid for the duration of
                your studies in Jordan, up to a maximum of 4 years.
                <br />
                <br />
                The price for a student visa in Jordan varies depending on the
                specific type of student visa you are applying for and your
                country of origin. You may be required to pay a visa processing
                fee when you submit your student visa application, as well as
                any other fees that may be required.
                <br />
                <br />
                <span className="font-bold">
                  It's a good idea to check with the embassy or consulate of
                  Jordan in your country or with the Ministry of Foreign Affairs
                  of Jordan for the most up-to-date information on the price and
                  validity of student visas in Jordan. They will be able to
                  provide you with more information on the specific fees and
                  validity periods that apply to your student visa based on your
                  individual circumstances.
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

export default Jordan;
