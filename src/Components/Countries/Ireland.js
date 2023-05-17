import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Ireland = () => {
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
        <title>Ireland</title>
        <meta name="description" content="Ireland" />
        <meta
          name="keywords"
          content="Ireland travel visa, Ireland work visa, Ireland study visa, How to apply for an Ireland visa, Ireland visa requirements, Ireland tourist visa, Ireland student visa, Ireland business visa, Ireland visa processing time, Ireland visa application process, Ireland visa for Americans, Ireland visa for Europeans, Ireland visa for Irelandns, Ireland visa for Canadians, Ireland visa for Irelandns, Ireland visa for Chinese, Ireland visa for Africans, Ireland visa for Asians, Ireland visa for South Americans, Ireland visa for Middle Easterners, Ireland visa for UK citizens, Ireland visa for EU citizens, Ireland visa for Schengen area, Ireland visa for non-EU citizens, Ireland visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Ireland
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Ireland is a small island nation located off the western coast of
              Europe. It is known for its beautiful landscapes, including its
              rolling green hills, rugged coastlines, and picturesque villages.
              Ireland is also known for its rich cultural heritage, including
              its traditional music, dance, and storytelling. The country is
              famous for its Guinness beer, which is brewed in Dublin, and its
              whiskey, which is produced in distilleries throughout the country.
              Additionally, Ireland is known for its friendly people and vibrant
              cities, such as Dublin, Cork, and Galway.
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
                Who can enter Ireland without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Citizens of certain countries do not need a visa to enter
                Ireland for short stays (generally defined as stays of up to 90
                days). These countries include:
                <span className="font-bold">
                  {" "}
                  EU/EEA member countries, Switzerland, Andorra, Argentina,
                  Australia, Bermuda, Brazil, Canada, Chile, Costa, Rica,
                  Honduras, Israel, Japan, Malaysia, Mauritius, Mexico, Monaco,
                  New Zealand, Nicaragua, Panama, Paraguay, San Marino,
                  Seychelles, Singapore, South Korea, United States, Uruguay,
                  Vatican, City, Venezuela.
                </span>{" "}
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of a country that is not on this list,
                  you will generally need to apply for a visa to enter Ireland.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for a Ireland Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Ireland, you will generally need to
                provide the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                at least six months beyond your planned stay in Ireland.
                <br /> <br />● A completed visa application form: You can obtain
                a visa application form from the Irish embassy or consulate in
                your home country, or you can download it from the website of
                the Irish Department of Justice and Equality.
                <br /> <br />● Passport-sized photos: You will need to provide
                two passport-sized photos with your visa application.
                <br /> <br />● Evidence of the purpose of your stay: You will
                need to provide evidence of the purpose of your stay in Ireland,
                such as a letter of invitation from an Irish host or a
                confirmation of enrollment at an Irish educational institution.
                <br /> <br />
                ● Evidence of sufficient financial resources: You will need to
                provide evidence that you have sufficient financial resources to
                support yourself during your stay in Ireland. This may include
                bank statements or a letter from your employer confirming your
                employment.
                <br /> <br />● Payment for the visa fee: You will need to pay a
                fee to apply for a visa to enter Ireland. The fee amount will
                vary depending on the type of visa you are applying for.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Ireland Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Ireland, you will need to follow
                these steps:
                <br /> <br />● Determine the type of visa you need: There are
                several types of visas for Ireland, including short-stay visas,
                long-stay visas, and transit visas. Choose the type of visa that
                is most appropriate for your situation.
                <br /> <br />● Contact the Irish embassy or consulate in your
                home country: You can find the contact information for the Irish
                embassy or consulate in your home country on the website of the
                Irish Department of Justice and Equality.
                <br /> <br />● Gather all the necessary documents: You will need
                to provide a valid passport, a completed visa application form,
                passport-sized photos, and any additional documents required for
                your specific type of visa, such as evidence of the purpose of
                your stay in Ireland and evidence of sufficient financial
                resources.
                <br /> <br />● Submit the required documents and payment for the
                visa fee: You can submit your visa application and supporting
                documents in person at the Irish embassy or consulate, or you
                may be able to submit them by mail.
                <br /> <br />● Wait for a decision on your visa application: The
                processing time for a visa application can vary, so it is a good
                idea to apply as early as possible.
                <br /> <br />● If your visa is approved, you will need to pay a
                consular fee and schedule an appointment to have your visa
                issued.
                <br /> <br />● Once you have your visa, you can make
                arrangements to travel to Ireland.
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Ireland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The amount of time you can stay in Ireland will depend on the
                type of visa you have.
                <br /> <br /> If you have a short-stay visa, also known as a "C"
                visa, you can stay in Ireland for up to 90 days. This type of
                visa is typically used for business, tourism, or visiting
                friends and family.
                <br /> <br /> If you have a long-stay visa, also known as an "D"
                visa, you can stay in Ireland for a longer period of time,
                generally for the purpose of studying, working, or joining a
                family member who is an Irish citizen or resident. The length of
                time you can stay on a long-stay visa will depend on the
                specific purpose of your stay and your individual circumstances.
                <br /> <br />
                <span className="font-bold">
                  If you have a transit visa, also known as a "B" visa, you can
                  stay in Ireland for up to 24 hours while in transit to another
                  country.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Ireland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                All COVID-19 restrictions outside of hospitals and medical
                settings have ended.
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
                A diplomatic passport is a type of passport issued to diplomats
                and other government officials for official travel on behalf of
                their country. It is issued by the government of the diplomat's
                home country and is generally valid for a period of four to ten
                years.
                <br /> <br /> Diplomatic passports are typically issued to
                high-ranking government officials, such as ambassadors and
                consuls, and to staff members of diplomatic missions. They are
                also issued to individuals who are traveling on official
                government business, such as representatives of international
                organizations.
                <br /> <br />
                <span className="font-bold">
                  Diplomatic passports are issued to facilitate the travel of
                  diplomats and other government officials by allowing them to
                  enter and exit other countries without the need for a visa in
                  some cases, and by providing them with other privileges and
                  protections while traveling.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Ireland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of an EU/EEA member country or Switzerland,
                you do not need a visa to work in Ireland. You are entitled to
                work in Ireland without a work permit or other documentation.
                <br /> <br />
                <span className="font-bold">
                  If you are a citizen of a country that is not a member of the
                  EU/EEA or Switzerland, you will generally need to apply for a
                  work permit in order to work in Ireland. There are several
                  types of work permits available, including general work
                  permits, critical skills employment permits, and intra-company
                  transfer permits.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for an Ireland Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of a country that is not a member of the
                EU/EEA or Switzerland, you will generally need to apply for a
                work permit in order to work in Ireland. There are several types
                of work permits available, including general work permits,
                critical skills employment permits, and intra-company transfer
                permits.
                <br /> <br /> To apply for a work permit in Ireland, you will
                need to follow these steps:
                <br /> <br />● Obtain a job offer from an Irish employer: You
                will need to have a job offer from an Irish employer in order to
                apply for a work permit.
                <br /> <br />● Determine the type of work permit you need: There
                are several types of work permits available in Ireland,
                including general work permits, critical skills employment
                permits, and intra-company transfer permits. Choose the type of
                work permit that is most appropriate for your situation.
                <br /> <br />● Gather all the necessary documents: You will need
                to provide a valid passport, a completed application form, and
                any additional documents required for your specific type of work
                permit, such as a copy of your job offer and evidence of your
                education and experience.
                <br /> <br />● Submit the required documents and payment for the
                work permit fee: You can submit your work permit application and
                supporting documents in person at the Irish Naturalisation and
                Immigration Service (INIS) or online through the INIS online
                system. You will also need to pay a fee to apply for a work
                permit.
                <br /> <br />● Wait for a decision on your work permit
                application: The processing time for a work permit application
                can vary, so it is a good idea to apply as early as possible.
                <br /> <br />● If your work permit is approved, you will be
                issued a stamp in your passport indicating the duration of your
                work permit and the terms of your employment.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Ireland Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                There are several types of work permits available in Ireland for
                citizens of countries that are not members of the EU/EEA or
                Switzerland. These include:
                <br /> <br />●{" "}
                <span className="font-bold">General work permit</span>: This
                type of work permit is for non-EEA citizens who have a job offer
                from an Irish employer and who meet certain other requirements,
                such as having a certain level of education or experience.
                General work permits are generally valid for a period of up to
                two years.
                <br /> <br />●{" "}
                <span className="font-bold">
                  Critical skills employment permit
                </span>
                : This type of work permit is for non-EEA citizens who have a
                job offer in an occupation that is on the critical skills
                occupation list. This list includes occupations that are
                experiencing a shortage of workers in Ireland. Critical skills
                employment permits are generally valid for a period of up to two
                years and may be renewable.
                <br /> <br />●{" "}
                <span className="font-bold">Intra-company transfer permit</span>
                : This type of work permit is for non-EEA citizens who are being
                transferred to an Irish branch of their current employer.
                Intra-company transfer permits are generally valid for a period
                of up to five years.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Ireland Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work permit in Ireland, you will need to provide
                the following documents:
                <br /> <br />● A valid passport: Your passport must be valid for
                the duration of your stay in Ireland.
                <br /> <br />● A completed application form: You can obtain an
                application form from the Irish Naturalisation and Immigration
                Service (INIS) or you can download it from the INIS website.
                <br /> <br />
                ● Passport-sized photos: You will need to provide two
                passport-sized photos with your work permit application.
                <br /> <br />● A copy of your job offer: You will need to
                provide a copy of your job offer from your Irish employer,
                including details of your job title, duties, and salary.
                <br /> <br />
                ● Evidence of your education and experience: You will need to
                provide evidence of your education and experience, such as
                copies of your degree certificates, transcripts, and CV.
                <br /> <br />● Payment for the work permit fee: You will need to
                pay a fee to apply for a work permit in Ireland. The fee amount
                will vary depending on the type of work permit you are applying
                for.
                <br /> <br />
                <span className="font-bold">
                  You may also need to provide additional documents, depending
                  on your specific circumstances. It is a good idea to contact
                  the Irish Naturalisation and Immigration Service (INIS) for
                  more information on the specific requirements for a work
                  permit.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Ireland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a work permit in Ireland, you will need to submit
                your application to the Irish Naturalisation and Immigration
                Service (INIS). You can submit your application in person at an
                INIS public office or online through the INIS online system.
                <br /> <br /> You can find a list of INIS public offices and
                their contact information on the INIS website.
                <br /> <br />
                <span className="font-bold">
                  It is a good idea to apply for a work permit as soon as you
                  have a job offer from an Irish employer. The processing time
                  for a work permit application can vary, so it is best to apply
                  as early as possible to ensure that you have your work permit
                  before you start your job.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Ireland?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                If you are a citizen of an EU/EEA member country or Switzerland,
                you do not need a visa to study in Ireland. You are entitled to
                study in Ireland without a study permit or other documentation.
                <br /> <br />
                If you are a citizen of a country that is not a member of the
                EU/EEA or Switzerland, you will generally need to apply for a
                study visa in order to study in Ireland.
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Ireland student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a study visa in Ireland, you will need to follow
                these steps:
                <br /> <br />● Determine if you need a study visa: If you are a
                citizen of an EU/EEA member country or Switzerland, you do not
                need a study visa to study in Ireland. If you are a citizen of a
                country that is not a member of the EU/EEA or Switzerland, you
                will generally need to apply for a study visa.
                <br /> <br />● Accept an offer of a place at an Irish
                educational institution: In order to apply for a study visa, you
                will need to have been accepted to an Irish educational
                institution.
                <br /> <br />● Gather all the necessary documents: You will need
                to provide a valid passport, a completed application form,
                passport-sized photos, and any additional documents required for
                your study visa, such as evidence of your acceptance to an Irish
                educational institution and evidence of sufficient financial
                resources to support yourself during your studies.
                <br /> <br />● Submit the required documents and payment for the
                study visa fee: You can submit your study visa application and
                supporting documents in person at the Irish embassy or consulate
                in your home country, or you may be able to submit them by mail.
                You will also need to pay a fee to apply for a study visa.
                <br /> <br />● Wait for a decision on your study visa
                application: The processing time for a study visa application
                can vary, so it is a good idea to apply as early as possible.
                <br /> <br />● If your study visa is approved, you will be
                issued a stamp in your passport indicating the duration of your
                study visa and the terms of your studies.!
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Ireland student Visa requirements.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a study visa in Ireland, you will generally need to
                meet the following requirements:
                <br /> <br />● Acceptance to an Irish educational institution:
                You will need to have been accepted to an Irish educational
                institution in order to apply for a study visa.
                <br /> <br />● A valid passport: Your passport must be valid for
                the duration of your stay in Ireland.
                <br /> <br />● Sufficient financial resources: You will need to
                demonstrate that you have sufficient financial resources to
                support yourself during your studies in Ireland. This may
                include evidence of funding from a scholarship, sponsor, or
                personal funds.
                <br /> <br />● Health insurance: You will need to have valid
                health insurance coverage for the duration of your stay in
                Ireland.
                <br /> <br />● English language proficiency: Depending on the
                educational institution you will be attending and the level of
                study you will be undertaking, you may need to demonstrate
                English language proficiency by providing a test score from an
                approved English language test, such as the International
                English Language Testing System (IELTS).
                <br /> <br />● Police clearance certificate: You may be required
                to provide a police clearance certificate to demonstrate that
                you have no criminal record.
                <br /> <br />● Payment for the study visa fee: You will need to
                pay a fee to apply for a study visa in Ireland. The fee amount
                will vary depending on the length of your studies and your
                individual circumstances.
                <br /> <br />
                <span className="font-bold">
                  You may also need to provide additional documents, depending
                  on your specific circumstances. It is a good idea to contact
                  the Irish embassy or consulate in your home country for more
                  information on the specific requirements for a study visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Ireland student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of an Ireland student visa will depend on
                the length of your studies and your individual circumstances.
                <br /> <br />
                Student visas for short-term studies (less than 90 days) are
                generally free of charge.
                <br /> <br /> For longer-term studies, student visas are
                generally valid for the duration of your studies, up to a
                maximum of seven years. The fee for a student visa for
                longer-term studies will depend on the length of your studies
                and your individual circumstances.
                <br /> <br />
                <span className="font-bold">
                  You can find more information on the fees for student visas on
                  the Irish Naturalisation and Immigration Service (INIS)
                  website. It is a good idea to check the INIS website for the
                  most up-to-date information on fees, as they may change from
                  time to time.
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

export default Ireland;
