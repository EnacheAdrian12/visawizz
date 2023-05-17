import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Luxembourg = () => {
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
        <title>Luxembourg</title>
        <meta name="description" content="Luxembourg" />
        <meta
          name="keywords"
          content="Luxembourg travel visa, Luxembourg work visa, Luxembourg study visa, How to apply for an Luxembourg visa, Luxembourg visa requirements, Luxembourg tourist visa, Luxembourg student visa, Luxembourg business visa, Luxembourg visa processing time, Luxembourg visa application process, Luxembourg visa for Americans, Luxembourg visa for Europeans, Luxembourg visa for Luxembourgns, Luxembourg visa for Canadians, Luxembourg visa for Luxembourgns, Luxembourg visa for Chinese, Luxembourg visa for Africans, Luxembourg visa for Asians, Luxembourg visa for South Americans, Luxembourg visa for Middle Easterners, Luxembourg visa for UK citizens, Luxembourg visa for EU citizens, Luxembourg visa for Schengen area, Luxembourg visa for non-EU citizens, Luxembourg visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Luxembourg
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Luxembourg is a small country in Europe that is known for its
              natural beauty and historical significance. It is home to the
              Ardennes forest, which offers opportunities for hiking, camping,
              and other outdoor activities, as well as the Moselle Valley, which
              is known for its picturesque vineyards and wineries. Luxembourg is
              also known for its rich cultural and historical heritage, with
              many beautiful castles, museums, and other landmarks.
              Additionally, Luxembourg is known for its strong economy and its
              position as a financial and banking center in Europe.
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
                Who can enter Luxembourg without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Luxembourg is a member of the European Union (EU) and the
                Schengen Area, and citizens of other EU and Schengen countries
                are allowed to enter and stay in Luxembourg without a visa.
                <br />
                <br />
                In addition, citizens of several non-EU countries are also
                allowed to enter and stay in Luxembourg without a visa for up to
                90 days within a 180-day period. These countries include:
                <br />
                <br />
                <span className="font-bold">
                  Albania Andorra, Antigua and Barbuda, Argentina, Australia,
                  Bahamas, Barbados, Bosnia and Herzegovina, Brazil, Brunei,
                  Canada, Chile, Colombia, Costa Rica, Dominica, El Salvador,
                  Georgia, Grenada, Guatemala, Honduras, Hong Kong, Israel,
                  Japan, Kosovo, Macao, Macedonia, Malaysia, Mauritius, Mexico,
                  Moldova, Montenegro, New Zealand, Nicaragua, North Macedonia,
                  Panama, Paraguay, Peru, Saint Kitts and Nevis, Saint Lucia,
                  Saint Vincent and the Grenadines, Serbia, Seychelles,
                  Singapore, South Korea, Taiwan, Tonga, Trinidad and Tobago,
                  Ukraine, United Arab Emirates, United States of America,
                  Uruguay, Vanuatu, Venezuela.
                </span>
                <br />
                <br />
                <span className="font-bold">
                  Citizens of other countries may need to obtain a visa in order
                  to enter and stay in Luxembourg. You should check with the
                  Luxembourg embassy or consulate for the most up-to-date
                  information on visa requirements for your specific situation.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Luxembourg Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Luxembourg, you will need to gather
                several documents to submit with your application. These may
                include:
                <br />
                <br />
                ● A valid passport or travel document.
                <br />
                <br />
                ● A completed and signed application form.
                <br />
                <br />
                ● Two passport-style photographs.
                <br />
                <br />
                ● Evidence of your purpose of travel (such as a letter of
                invitation or confirmation of accommodation).
                <br />
                <br />
                ● Proof of sufficient funds to cover your stay in Luxembourg.
                <br />
                <br />
                ● Evidence of your ties to your home country (such as a job or
                family).
                <br />
                <br />
                ● A medical insurance policy that covers you for the duration of
                your stay in Luxembourg.
                <br />
                <br />
                <span className="font-bold">
                  You may also be required to provide additional documents
                  depending on the specific type of visa you are applying for
                  and the purpose of your visit. It is always a good idea to
                  check with the embassy or consulate of Luxembourg in your home
                  country to make sure you have all the necessary documents
                  before you submit your application.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Luxembourg Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Luxembourg, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine the type of visa you need: Luxembourg offers
                different types of visas depending on the purpose of your visit.
                Be sure to choose the correct visa category to avoid any delays
                in the application process.
                <br />
                <br />
                ● Gather the required documents: You will need to prepare a
                number of documents to submit with your visa application. These
                may include your passport, photographs, proof of your purpose of
                travel, and evidence of your ties to your home country.
                <br />
                <br />
                ● Submit your application: You can usually submit your visa
                application at the embassy or consulate of Luxembourg in your
                home country. Some countries may have a designated visa
                application center where you can submit your application.
                <br />
                <br />
                ● Wait for a decision: The processing time for visa applications
                can vary, so be prepared to wait for a decision. You can usually
                check the status of your application online or by contacting the
                embassy or consulate.
                <br />
                <br />
                ● Attend an interview (if required): Depending on the specific
                type of visa you are applying for and the purpose of your visit,
                you may be required to attend an interview at the embassy or
                consulate.
                <br />
                <br />● Collect your visa: If your application is approved, you
                will be issued a visa. You will need to pay a fee to receive
                your visa, which you can usually do through a bank transfer or
                by credit card. Be sure to keep your visa safe, as you will need
                to present it when you enter Luxembourg.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Luxembourg?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you are allowed to stay in Luxembourg depends
                on the type of visa you have.
                <br />
                <br />
                If you have a{" "}
                <span className="font-bold">&nbsp;short-stay visa</span> (also
                known as a Schengen visa), you can stay in Luxembourg for up to
                90 days within a 180-day period. This type of visa is typically
                issued for tourism, business, or visiting family or friends.
                <br />
                <br />
                If you have a{" "}
                <span className="font-bold">&nbsp;long-stay visa</span> (also
                known as a national visa), you can stay in Luxembourg for a
                longer period of time, usually for up to one year. This type of
                visa is typically issued for study, work, or family
                reunification.
                <br />
                <br />
                It is important to note that a visa does not guarantee entry
                into Luxembourg. When you arrive at the border, you may be
                required to show additional documents and may be denied entry if
                you do not meet the requirements for entry.
                <br />
                <br />
                <span className="font-bold">
                  Also, even if you are allowed to stay in Luxembourg for a
                  certain length of time, you may need to register with the
                  local authorities and apply for a residence permit if you plan
                  to stay in the country for an extended period.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Luxembourg?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The Luxembourg government has now removed most COVID-19
                restrictions. To find out more about local restrictions, please
                refer to the Luxembourg government website.
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
                A diplomatic passport is a type of passport that is issued to
                diplomats, government officials, and other representatives of a
                country who are traveling on official business. A diplomatic
                passport allows the holder to enjoy certain privileges and
                protections while traveling abroad, including immunity from
                arrest and detention in some cases.
                <br />
                <br />
                In Luxembourg, diplomatic passports are issued by the Ministry
                of Foreign and European Affairs to individuals who are
                accredited as diplomats or members of the diplomatic corps. This
                includes ambassadors, embassy staff, and other officials who are
                representing Luxembourg abroad.
                <br />
                <br />
                Holders of diplomatic passports are entitled to certain
                privileges and exemptions while traveling, including the right
                to use special lanes at airports and other border crossings, the
                right to request assistance from the host country's diplomatic
                mission in case of an emergency, and the right to import
                personal and household goods duty-free in some cases.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that diplomatic passports are only to
                  be used for official business and not for personal travel.
                  Misuse of a diplomatic passport can result in the revocation
                  of the passport and the loss of diplomatic immunity.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Luxembourg?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether or not you need a worker visa to work in Luxembourg
                depends on your nationality and the length of your stay.
                <br />
                <br />
                Citizens of the European Union (EU), the European Economic Area
                (EEA), and Switzerland have the right to work in Luxembourg
                without a worker visa. They are allowed to live and work in the
                country without any restrictions.
                <br />
                <br />
                Citizens of other countries may need a worker visa to work in
                Luxembourg, depending on the length of their stay. If you plan
                to work in Luxembourg for less than 90 days within a 180-day
                period, you may be able to enter the country on a short-stay
                visa (also known as a Schengen visa) and work without a separate
                worker visa.
                <br />
                <br />
                If you plan to work in Luxembourg for longer than 90 days, you
                will need to apply for a long-stay visa (also known as a
                national visa) and a residence permit. You will need to show
                proof of employment and meet other requirements to be eligible
                for a long-stay visa.
                <br />
                <br />
                <span className="font-bold">
                  It is always a good idea to check with the embassy or
                  consulate of Luxembourg in your home country to determine the
                  specific visa and permit requirements for working in
                  Luxembourg.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Luxembourg Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Luxembourg, you will need
                to follow these steps:
                <br />
                <br />
                ● Determine if you need a worker visa: If you are a citizen of
                the European Union (EU), the European Economic Area (EEA), or
                Switzerland, you do not need a worker visa to work in
                Luxembourg. If you are a citizen of another country, you may
                need a worker visa depending on the length of your stay.
                <br />
                <br />
                ● Gather the required documents: You will need to prepare a
                number of documents to submit with your worker visa application.
                These may include your passport, photographs, proof of
                employment, and evidence of your ties to your home country.
                <br />
                <br />
                ● Submit your application: You can usually submit your worker
                visa application at the embassy or consulate of Luxembourg in
                your home country. Some countries may have a designated visa
                application center where you can submit your application.
                <br />
                <br />
                ● Wait for a decision: The processing time for worker visa
                applications can vary, so be prepared to wait for a decision.
                You can usually check the status of your application online or
                by contacting the embassy or consulate.
                <br />
                <br />
                ● Attend an interview (if required): Depending on the specific
                type of worker visa you are applying for and the purpose of your
                visit, you may be required to attend an interview at the embassy
                or consulate.
                <br />
                <br />● Collect your visa: If your application is approved, you
                will be issued a worker visa. You will need to pay a fee to
                receive your visa, which you can usually do through a bank
                transfer or by credit card. Be sure to keep your visa safe, as
                you will need to present it when you enter Luxembourg.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that a worker visa does not guarantee
                  entry into Luxembourg. When you arrive at the border, you may
                  be required to show additional documents and may be denied
                  entry if you do not meet the requirements for entry.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Luxembourg Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of worker visas that you can apply for
                to work in Luxembourg, depending on your specific circumstances.
                These may include:
                <br />
                <br />
                <span className="font-bold">A temporary worker visa</span>
                : This type of visa is issued for a specific period of time and
                is typically valid for up to one year. It is issued to workers
                who are coming to Luxembourg to work for a specific employer on
                a temporary basis.
                <br />
                <br />
                <span className="font-bold">A seasonal worker visa</span>
                : This type of visa is issued to workers who are coming to
                Luxembourg to work in a specific sector, such as agriculture or
                tourism, for a limited period of time. Seasonal worker visas are
                usually valid for up to six months.
                <br />
                <br />
                <span className="font-bold">A self-employed worker visa</span>
                : This type of visa is issued to workers who are coming to
                Luxembourg to work for themselves. Self-employed worker visas
                are usually valid for up to one year.
                <br />
                <br />
                <span className="font-bold">
                  A highly qualified worker visa
                </span>
                : This type of visa is issued to workers who are coming to
                Luxembourg to work in a highly qualified position, such as a
                manager or executive. Highly qualified worker visas are usually
                valid for up to three years.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that worker visas are typically tied
                  to a specific employer and job. If you change jobs or
                  employers while you are in Luxembourg, you may need to apply
                  for a new worker visa. It is always a good idea to check with
                  the authorities in Luxembourg to determine the specific
                  requirements for your situation.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Luxembourg Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Luxembourg, you will need
                to gather several documents to submit with your application.
                These may include:
                <br />
                <br />
                ● A valid passport or travel document.
                <br />
                <br />
                ● A completed and signed application form.
                <br />
                <br />
                ● Two passport-style photographs.
                <br />
                <br />
                ● A certificate of good conduct (also known as a police
                clearance certificate).
                <br />
                <br />
                ● A medical certificate.
                <br />
                <br />
                ● Proof of employment in Luxembourg, such as a contract of
                employment or offer of employment.
                <br />
                <br />
                ● Evidence of your qualifications and work experience.
                <br />
                <br />
                ● Proof of sufficient funds to cover your stay in Luxembourg.
                <br />
                <br />
                ● Evidence of your ties to your home country (such as a job or
                family)
                <br />
                <br />
                <span className="font-bold">
                  You may also be required to provide additional documents
                  depending on the specific type of worker visa you are applying
                  for and your specific circumstances. It is always a good idea
                  to check with the embassy or consulate of Luxembourg in your
                  home country to make sure you have all the necessary documents
                  before you submit your application.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Luxembourg?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa to work in Luxembourg, you will need
                to submit your application to the embassy or consulate of
                Luxembourg in your home country. Some countries may have a
                designated visa application center where you can submit your
                application.
                <br />
                <br />
                It is important to apply for your worker visa well in advance of
                your intended travel date to allow sufficient time for the
                application process. The processing time for worker visa
                applications can vary, so it is a good idea to start the
                application process as early as possible.
                <br />
                <br />
                You can usually submit your worker visa application in person at
                the embassy or consulate, or you may be able to submit it by
                mail or online, depending on the specific requirements of the
                embassy or consulate. You will need to pay a fee to apply for a
                worker visa, which you can usually do through a bank transfer or
                by credit card.
                <br />
                <br />
                <span className="font-bold">
                  Once you have submitted your application, you may be required
                  to attend an interview at the embassy or consulate. After the
                  interview, the embassy or consulate will review your
                  application and make a decision on your visa. If your
                  application is approved, you will be issued a worker visa,
                  which you will need to present when you enter Luxembourg.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Luxembourg?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether or not you need a visa to study in Luxembourg depends on
                your nationality and the length of your stay.
                <br />
                <br />
                Citizens of the European Union (EU), the European Economic Area
                (EEA), and Switzerland do not need a visa to study in
                Luxembourg. They are allowed to live and study in the country
                without any restrictions.
                <br />
                <br />
                Citizens of other countries may need a visa to study in
                Luxembourg, depending on the length of their stay. If you plan
                to study in Luxembourg for less than 90 days within a 180-day
                period, you may be able to enter the country on a short-stay
                visa (also known as a Schengen visa) and study without a
                separate study visa.
                <br />
                <br />
                If you plan to study in Luxembourg for longer than 90 days, you
                will need to apply for a long-stay visa (also known as a
                national visa) and a residence permit. You will need to show
                proof of enrollment in a school or university and meet other
                requirements to be eligible for a long-stay visa.
                <br />
                <br />
                <span className="font-bold">
                  It is always a good idea to check with the embassy or
                  consulate of Luxembourg in your home country to determine the
                  specific visa and permit requirements for studying in
                  Luxembourg.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Luxembourg Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Luxembourg, you will
                need to follow these steps:
                <br />
                <br />
                ● Determine if you need a student visa: If you are a citizen of
                the European Union (EU), the European Economic Area (EEA), or
                Switzerland, you do not need a student visa to study in
                Luxembourg. If you are a citizen of another country, you may
                need a student visa depending on the length of your stay.
                <br />
                <br />
                ● Gather the required documents: You will need to prepare a
                number of documents to submit with your student visa
                application. These may include your passport, photographs, proof
                of enrollment in a school or university in Luxembourg, and
                evidence of your ties to your home country.
                <br />
                <br />
                ● Submit your application: You can usually submit your student
                visa application at the embassy or consulate of Luxembourg in
                your home country. Some countries may have a designated visa
                application center where you can submit your application.
                <br />
                <br />
                ● Wait for a decision: The processing time for student visa
                applications can vary, so be prepared to wait for a decision.
                You can usually check the status of your application online or
                by contacting the embassy or consulate.
                <br />
                <br />
                ● Attend an interview (if required): Depending on the specific
                type of student visa you are applying for and the purpose of
                your visit, you may be required to attend an interview at the
                embassy or consulate.
                <br />
                <br />
                ● Collect your visa: If your application is approved, you will
                be issued a student visa. You will need to pay a fee to receive
                your visa, which you can usually do through a bank transfer or
                by credit card. Be sure to keep your visa safe, as you will need
                to present it when you enter Luxembourg.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that a student visa does not guarantee
                  entry into Luxembourg. When you arrive at the border, you may
                  be required to show additional documents and may be denied
                  entry if you do not meet the requirements for entry.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Luxembourg Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa to study in Luxembourg, you will
                need to gather several documents to submit with your
                application. These may include:
                <br />
                <br />
                ● A valid passport or travel document.
                <br />
                <br />
                ● A completed and signed application form.
                <br />
                <br />
                ● Two passport-style photographs.
                <br />
                <br />
                ● Proof of enrollment in a school or university in Luxembourg.
                <br />
                <br />
                ● Evidence of your financial resources to cover your living
                expenses and tuition fees while you are in Luxembourg.
                <br />
                <br />
                ● A medical insurance policy that covers you for the duration of
                your stay in Luxembourg.
                <br />
                <br />
                ● A certificate of good conduct (also known as a police
                clearance certificate)
                <br />
                <br />
                ● A medical certificate
                <br />
                <br />
                ● Evidence of your ties to your home country (such as a job or
                family)
                <br />
                <br />
                <span className="font-bold">
                  You may also be required to provide additional documents
                  depending on the specific type of student visa you are
                  applying for and your specific circumstances. It is always a
                  good idea to check with the embassy or consulate of Luxembourg
                  in your home country to make sure you have all the necessary
                  documents before you submit your application.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Luxembourg Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa to study in Luxembourg
                depends on the specific type of student visa you are applying
                for and the length of your stay.
                <br />
                <br />
                If you are applying for a short-stay student visa (also known as
                a Schengen visa), you can stay in Luxembourg for up to 90 days
                within a 180-day period. This type of visa is typically issued
                for short-term study programs or language courses. The fee for a
                short-stay student visa is usually around €80.
                <br />
                <br />
                If you are applying for a long-stay student visa (also known as
                a national visa), you can stay in Luxembourg for a longer period
                of time, usually for up to one year. This type of visa is
                typically issued for full-time study programs or research
                projects. The fee for a long-stay student visa is usually around
                €180.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that student visas are usually tied to
                  a specific school or university and program of study. If you
                  change schools or programs while you are in Luxembourg, you
                  may need to apply for a new student visa. It is always a good
                  idea to check with the authorities in Luxembourg to determine
                  the specific requirements for your situation.
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

export default Luxembourg;
