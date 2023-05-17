import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const Andorra = () => {
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
        <title>Andorra</title>
        <meta name="description" content="Andorra" />
        <meta
          name="keywords"
          content="Andorra travel visa, Andorra work visa, Andorra study visa, How to apply for an Andorra visa, Andorra visa requirements, Andorra tourist visa, Andorra student visa, Andorra business visa, Andorra visa processing time, Andorra visa application process, Andorra visa for Americans, Andorra visa for Europeans, Andorra visa for Australians, Andorra visa for Canadians, Andorra visa for Indians, Andorra visa for Chinese, Andorra visa for Africans, Andorra visa for Asians, Andorra visa for South Americans, Andorra visa for Middle Easterners, Andorra visa for UK citizens, Andorra visa for EU citizens, Andorra visa for Schengen area, Andorra visa for non-EU citizens, Andorra visa fees and charges"
        />
      </Helmet>

      <Container className="relative bg-gray-200">
        <Row className="hero-background h-[80rem] sm:h-[75rem] md:h-[80rem] xl:h-[75rem] text-white">
          <h1 className="text-[2.8rem] text-center pt-[15rem] font-bold sm:pt-[15rem] sm:text-[2.8rem] md:pt-[16rem] md:text-[3.4rem]">
            Andorra
          </h1>
          <Col>
            <p className="text-[1.5rem] px-[3rem] sm:text-[2rem] sm:px-[4rem] md:text-[2.2rem] md:px-[6rem] lg:text-[2.4rem] lg:px-[8rem] xl:px-[12rem]">
              Andorra is a small country located in the Pyrenees mountains
              between France and Spain. It is known for its beautiful landscapes
              and ski resorts, which attract many tourists each year. Andorra is
              also known for its tax-haven status, which has made it a popular
              destination for individuals and businesses looking to reduce their
              tax liabilities. Additionally, the country is known for its strong
              tradition of folk music and dance, as well as its distinctive
              cuisine, which includes dishes such as trinxat, a potato and
              cabbage dish that is often served with bacon or sausage.
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
                Who can enter Andorra without a Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                Andorra is a small, landlocked country located in the Pyrenees
                Mountains between Spain and France. It is a member of the
                Schengen Agreement, which allows for the free movement of people
                within the European Union (EU) and a number of other European
                countries.
                <br />
                <br />
                As a result, citizens of EU countries and a number of other
                countries are able to enter Andorra without a visa for stays of
                up to 90 days for tourism or business purposes. These countries
                include:
                <br />
                <br />● EU countries:
                <span className="font-bold">
                  &nbsp;Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech
                  Republic, Denmark, Estonia, Finland, France, Germany, Greece,
                  Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania,
                  Luxembourg, Malta, Netherlands, Norway, Poland, Portugal,
                  Romania, Slovakia, Slovenia, Spain, Sweden, Switzerland.
                </span>
                <br />
                <br />● Other countries:
                <span className="font-bold">
                  &nbsp;Australia, Canada, Japan, New Zealand, South Korea,
                  United States.
                </span>
                <br />
                <br />
                Citizens of other countries will typically need to obtain a visa
                in order to enter Andorra. The type of visa that you will need
                will depend on the purpose and duration of your stay in the
                country.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the rules and regulations
                  regarding visas for Andorra may vary depending on your country
                  of origin and the specific terms of your visit. It's always a
                  good idea to check the latest information with the Andorran
                  embassy or consulate in your country before making any travel
                  plans.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents I need to apply for Andorra Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa to enter Andorra, you will typically need to
                provide the following documents:
                <br />
                <br />● A valid passport: Your passport should be valid for at
                least six months beyond the date of your planned departure from
                Andorra and have at least two blank pages for visas.
                <br />
                <br />● A completed visa application form: You can usually
                obtain a visa application form from the Andorran embassy or
                consulate in your country of residence, or you may be able to
                download it from the embassy's website.
                <br />
                <br />● Passport-sized photographs: You will need to provide two
                passport-sized photographs with your visa application. These
                should be recent, clear, and taken against a plain background.
                <br />
                <br />● A letter of invitation (if required): Depending on the
                purpose of your visit to Andorra, you may need to provide a
                letter of invitation from a host or sponsor in the country, such
                as an employer, a relative, or a hotel.
                <br />
                <br />● Evidence of your travel arrangements: You may need to
                provide evidence of your travel arrangements, such as round-trip
                tickets or a confirmed itinerary.
                <br />
                <br />● Evidence of your financial resources: You may need to
                provide proof of your financial resources, such as bank
                statements or a letter from your sponsor, to show that you have
                sufficient funds to cover your expenses during your stay in
                Andorra.
                <br />
                <br />● Other documents: Depending on the purpose of your visit,
                you may need to provide additional documents, such as a business
                letter, a letter of acceptance from a university, or a letter
                from your employer.
                <br />
                <br />
                <span className="font-bold">
                  It's important to note that the specific visa requirements for
                  Andorra may vary.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Andorra Visa?
              </h1>
              <p className="text-[2rem] mb-[5rem] px-[3rem]">
                To apply for a visa for Andorra, you will need to follow these
                steps: <br />
                <br />● Determine the type of visa you need: Andorra offers
                several types of visas, including tourist visas, business visas,
                and student visas. Determine which type of visa you need based
                on the purpose of your trip.
                <br />
                <br />● Check the visa requirements: Andorra has different visa
                requirements for different countries. Make sure you meet all the
                requirements before you start the application process.
                <br />
                <br />● Gather required documents: You will need to provide
                certain documents as part of your visa application. These may
                include a passport that is valid for at least six months beyond
                your intended stay, proof of sufficient funds to support your
                trip, and a letter of invitation if you are visiting Andorra for
                business or personal reasons.
                <br />
                <br />● Submit your application: You can either submit your
                application in person at the Andorran embassy or consulate in
                your home country, or you can use an online visa application
                service. Follow the instructions provided by the embassy or
                consulate to complete the application process.
                <br />
                <br />● Pay the visa fee: There is a fee for applying for a visa
                to Andorra. The fee may vary depending on the type of visa you
                are applying for and the country you are from.
                <br />
                <br />● Wait for a decision: It may take several weeks for your
                visa application to be processed. Keep an eye on your email
                and/or mailbox for any updates or requests for additional
                information.
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is a general overview of the visa
                  application process for Andorra. The specific requirements and
                  procedures may vary depending on your country of origin and
                  the type of visa you are applying for. It is always best to
                  check with the Andorran embassy or consulate in your home
                  country for the most up-to-date information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How much time can I stay in Andorra?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The length of time you can stay in Andorra will depend on the
                type of visa you have obtained.
                <br />
                <br />
                <span className="font-bold">If you have a tourist visa </span>
                you can generally stay in Andorra for up to 90 days within a
                180-day period. This means that you can stay in Andorra for up
                to 90 days, and then you must leave the country for at least 90
                days before you can return.
                <br />
                <br />
                <span className="font-bold">
                  If you have a business visa or a student visa
                </span>
                , you may be able to stay in Andorra for a longer period of
                time. However, you will need to obtain the appropriate visa and
                meet all the necessary requirements in order to stay in Andorra
                for an extended period.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the length of time you can stay
                  in Andorra may also be affected by your nationality and the
                  purpose of your visit. It is always best to check with the
                  Andorran embassy or consulate in your home country for the
                  most up-to-date information.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Are there still Covid Restrictions in Andorra?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Transit is free. A COVID-19 certificate does not have to be
                presented in order to enter Andorra from France.
                <span className="font-bold">
                  &nbsp;To travel to France across the Baladrà border, however,
                  everyone aged 12 and over must present a health passport
                  proving that they are fully vaccinated, or a COVID-19 recovery
                  certificate.
                </span>
              </p>
            </Container>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Informations About Diplomatic Passport!
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                A diplomatic passport is a special type of passport that is
                issued to diplomats, high-ranking government officials, and
                other individuals who represent their country abroad. A
                diplomatic passport allows the holder to travel to other
                countries for official business and diplomatic purposes, and it
                typically confers certain privileges and immunities.
                <br />
                <br />
                In Andorra, diplomatic passports are issued by the Ministry of
                Foreign Affairs and Cooperation to individuals who are
                accredited as diplomats or consular officers to the Andorran
                government. Diplomatic passports are also issued to members of
                the Andorran diplomatic corps and other high-ranking officials
                who need to travel abroad on official business.
                <br />
                <br />
                Holders of diplomatic passports are generally afforded certain
                privileges and immunities while traveling, such as exemption
                from visa requirements and customs duties, and protection from
                arrest and detention. However, the specific privileges and
                immunities granted to diplomatic passport holders may vary
                depending on the country they are visiting and the terms of the
                relevant international agreements.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that diplomatic passports are only
                  issued to individuals who are authorized to represent their
                  country abroad in an official capacity. If you are not a
                  diplomat or a high-ranking government official, you will not
                  be eligible for a diplomatic passport.
                </span>
              </p>
            </Container>
          </>
        ) : workSection ? (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Worker Visa in Andorra?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a worker visa to work in Andorra will depend on
                your nationality and the length of your intended stay in the
                country.
                <br />
                <br />
                Citizens of the European Union (EU), the European Economic Area
                (EEA), and Switzerland have the right to work in Andorra without
                a worker visa, as long as they are registered with the Andorran
                authorities. Non-EU/EEA/Swiss citizens may also be able to work
                in Andorra without a worker visa if they have a residence permit
                that allows them to work.
                <br />
                <br />
                If you are a non-EU/EEA/Swiss citizen and you do not have a
                residence permit that allows you to work, you will need to
                obtain a worker visa in order to work in Andorra. To apply for a
                worker visa, you will need to have a job offer from an Andorran
                employer and meet the other requirements for obtaining a worker
                visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules and requirements for
                  working in Andorra may vary depending on your country of
                  origin and the length of your intended stay. It is always best
                  to check with the Andorran embassy or consulate in your home
                  country for the most up-to-date information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Andorra Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Andorra, you will need to follow
                these steps:
                <br />
                <br />
                ● Determine if you need a worker visa: If you are a citizen of
                the European Union (EU), the European Economic Area (EEA), or
                Switzerland, you may not need a worker visa to work in Andorra.
                Non-EU/EEA/Swiss citizens will generally need a worker visa
                unless they have a residence permit that allows them to work.
                <br />
                <br />● Find a job: In order to apply for a worker visa, you
                will need to have a job offer from an Andorran employer. You
                should start by looking for job opportunities in Andorra and
                applying for positions that interest you.
                <br />
                <br />● Gather required documents: You will need to provide
                certain documents as part of your worker visa application. These
                may include a passport that is valid for at least six months
                beyond your intended stay, a completed visa application form, a
                recent passport-style photograph, and proof of your job offer in
                Andorra.
                <br />
                <br />● Submit your application: You can either submit your
                worker visa application in person at the Andorran embassy or
                consulate in your home country, or you can use an online visa
                application service. Follow the instructions provided by the
                embassy or consulate to complete the application process.
                <br />
                <br />● Pay the visa fee: There is a fee for applying for a
                worker visa to Andorra. The fee may vary depending on the type
                of visa you are applying for and the country you are from.
                <br />
                <br />● Wait for a decision: It may take several weeks for your
                worker visa application to be processed. Keep an eye on your
                email and/or mailbox for any updates or requests for additional
                information.
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is a general overview of the worker visa
                  application process for Andorra. The specific requirements and
                  procedures may vary depending on your country of origin and
                  the type of visa you are applying for. It is always best to
                  check with the Andorran embassy or consulate in your home
                  country for the most up-to-date information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Types of Andorra Worker Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Andorra offers several types of worker visas, depending on the
                length and purpose of your intended stay in the country. Here
                are some of the main types of worker visas available in Andorra:
                <br />
                <br />● Temporary worker visa: A temporary worker visa is valid
                for a specific period of time and is issued to individuals who
                want to work in Andorra for a temporary period. This type of
                visa is typically valid for up to one year and can be renewed.
                <br />
                <br />● Seasonal worker visa: A seasonal worker visa is issued
                to individuals who want to work in Andorra for a specific
                season, such as during the ski season or the summer tourist
                season. This type of visa is typically valid for up to six
                months and cannot be renewed.
                <br />
                <br />● Intra-company transfer visa: An intra-company transfer
                visa is issued to employees of an international company who are
                being transferred to work at the company's Andorran subsidiary
                or branch. This type of visa is typically valid for up to one
                year and can be renewed.
                <br />
                <br />● Highly qualified worker visa: A highly qualified worker
                visa is issued to individuals who have specialized skills or
                expertise and are working in a high-level position in Andorra.
                This type of visa is typically valid for up to one year and can
                be renewed.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the specific requirements and
                  conditions for each type of worker visa may vary. It is always
                  best to check with the Andorran embassy or consulate in your
                  home country for the most up-to-date information on the worker
                  visas available in Andorra.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                What documents do I need for Andorra Worker Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The documents you will need to provide as part of your worker
                visa application for Andorra will depend on the type of visa you
                are applying for and your personal circumstances. Here are some
                of the documents you may need to provide:
                <br />
                <br />● Passport: You will need to provide a valid passport that
                is valid for at least six months beyond your intended stay in
                Andorra.
                <br />
                <br />● Visa application form: You will need to complete and
                submit a worker visa application form, which can usually be
                obtained from the Andorran embassy or consulate in your home
                country or through an online visa application service.
                <br />
                <br />● Passport-style photograph: You will need to provide a
                recent passport-style photograph to include with your visa
                application.
                <br />
                <br />
                ● Proof of job offer: You will need to provide evidence of your
                job offer in Andorra, such as a letter from your employer
                confirming your employment and the terms of your employment.
                <br />
                <br />● Proof of sufficient funds: You will need to show that
                you have sufficient funds to support yourself while you are in
                Andorra. This may include bank statements or proof of income.
                <br />
                <br />● Health insurance: You will need to provide proof of
                health insurance that covers you while you are in Andorra.
                <br />
                <br />
                ● Police clearance certificate: You may need to provide a police
                clearance certificate or similar document to show that you do
                not have a criminal record.
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is a general list of documents that you
                  may need to provide as part of your worker visa application
                  for Andorra. The specific requirements may vary depending on
                  your country of origin and the type of visa you are applying
                  for. It is always best to check with the Andorran embassy or
                  consulate in your home country for the most up-to-date
                  information on the documents required for a worker visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Where and When to Apply for a Worker Visa in Andorra?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a worker visa for Andorra, you will need to submit
                your application to the Andorran embassy or consulate in your
                home country. You should contact the embassy or consulate to
                find out the specific location and hours of operation.
                <br />
                <br />
                You should also check with the embassy or consulate to find out
                when you can apply for a worker visa. Some embassies and
                consulates have specific times when they accept visa
                applications, while others may have more flexible hours.
                <br />
                <br />
                It is important to note that the process of applying for a
                worker visa for Andorra can take several weeks, so you should
                plan ahead and allow enough time to complete the application
                process. You should also be prepared to provide any additional
                information or documents that may be requested as part of the
                visa application process.
                <br />
                <br />
                <span className="font-bold">
                  It is always a good idea to check with the Andorran embassy or
                  consulate in your home country for the most up-to-date
                  information on the worker visa application process. They will
                  be able to provide you with the most accurate and current
                  information on the requirements, procedures, and fees for
                  obtaining a worker visa for Andorra.
                </span>
              </p>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Do I need a Visa to study in Andorra?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                Whether you need a visa to study in Andorra will depend on your
                nationality and the length of your intended stay in the country.
                <br />
                <br />
                Citizens of the European Union (EU), the European Economic Area
                (EEA), and Switzerland do not need a visa to study in Andorra,
                as long as they are registered with the Andorran authorities.
                Non-EU/EEA/Swiss citizens may also be able to study in Andorra
                without a visa if they have a residence permit that allows them
                to study.
                <br />
                <br />
                If you are a non-EU/EEA/Swiss citizen and you do not have a
                residence permit that allows you to study, you will generally
                need to obtain a student visa in order to study in Andorra. To
                apply for a student visa, you will need to have been accepted to
                an Andorran educational institution and meet the other
                requirements for obtaining a student visa.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the rules and requirements for
                  studying in Andorra may vary depending on your country of
                  origin and the length of your intended stay. It is always best
                  to check with the Andorran embassy or consulate in your home
                  country for the most up-to-date information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                How to Apply for a Andorra Student Visa?
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                To apply for a student visa for Andorra, you will need to follow
                these steps:
                <br />
                <br />● Determine if you need a student visa: If you are a
                citizen of the European Union (EU), the European Economic Area
                (EEA), or Switzerland, you may not need a student visa to study
                in Andorra. Non-EU/EEA/Swiss citizens will generally need a
                student visa unless they have a residence permit that allows
                them to study.
                <br />
                <br />● Find a place to study: In order to apply for a student
                visa, you will need to have been accepted to an Andorran
                educational institution. You should start by researching your
                study options in Andorra and applying to the schools or
                universities that interest you.
                <br />
                <br />● Gather required documents: You will need to provide
                certain documents as part of your student visa application.
                These may include a passport that is valid for at least six
                months beyond your intended stay, a completed visa application
                form, a recent passport-style photograph, and proof of your
                acceptance to an Andorran educational institution.
                <br />
                <br />● Submit your application: You can either submit your
                student visa application in person at the Andorran embassy or
                consulate in your home country, or you can use an online visa
                application service. Follow the instructions provided by the
                embassy or consulate to complete the application process.
                <br />
                <br />● Pay the visa fee: There is a fee for applying for a
                student visa to Andorra. The fee may vary depending on the type
                of visa you are applying for and the country you are from.
                <br />
                <br />
                ● Wait for a decision: It may take several weeks for your
                student visa application to be processed. Keep an eye on your
                email and/or mailbox for any updates or requests for additional
                information.
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is a general overview of the student
                  visa application process for Andorra. The specific
                  requirements and procedures may vary depending on your country
                  of origin and the type of visa you are applying for. It is
                  always best to check with the Andorran embassy or consulate in
                  your home country for the most up-to-date information.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Andorra Student Visa Requirments.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                ● Passport: You will need to provide a valid passport that is
                valid for at least six months beyond your intended stay in
                Andorra.
                <br />
                <br />● Visa application form: You will need to complete and
                submit a student visa application form, which can usually be
                obtained from the Andorran embassy or consulate in your home
                country or through an online visa application service.
                <br />
                <br />● Passport-style photograph: You will need to provide a
                recent passport-style photograph to include with your visa
                application.
                <br />
                <br />● Proof of acceptance to an Andorran educational
                institution: You will need to provide evidence of your
                acceptance to an Andorran educational institution, such as a
                letter of acceptance or an enrollment confirmation.
                <br />
                <br />● Proof of sufficient funds: You will need to show that
                you have sufficient funds to support yourself while you are
                studying in Andorra. This may include bank statements or proof
                of income.
                <br />
                <br />● Health insurance: You will need to provide proof of
                health insurance that covers you while you are in Andorra.
                <br />
                <br />● Police clearance certificate: You may need to provide a
                police clearance certificate or similar document to show that
                you do not have a criminal record.
                <br />
                <br />
                <span className="font-bold">
                  Please note that this is a general list of requirements and
                  documents that you may need to provide as part of your student
                  visa application for Andorra. The specific requirements may
                  vary depending on your country of origin and the type of visa
                  you are applying for. It is always best to check with the
                  Andorran embassy or consulate in your home country for the
                  most up-to-date information on the requirements for a student
                  visa.
                </span>
              </p>
            </Container>

            <Container fluid>
              <h1 className="font-bold text-[3.6rem] text-[#1e2e6e] mb-[1.6rem] px-[1rem]">
                Validity and Price for Andorra Student Visa.
              </h1>
              <p className="text-[2rem] pb-[5rem] px-[3rem]">
                The validity and price of a student visa for Andorra will depend
                on the type of visa you are applying for and your country of
                origin. Here are some general guidelines on the validity and
                price of student visas in Andorra:
                <br />
                <br />
                <span className="font-bold">Validity</span>
                : Student visas for Andorra are generally valid for the duration
                of your studies in the country. This means that if you are
                studying for one year, your student visa will typically be valid
                for one year. If you are studying for a longer period, your
                student visa may be valid for a longer period of time.
                <br />
                <br />
                <span className="font-bold">Price</span>
                : The price of a student visa for Andorra may vary depending on
                the type of visa you are applying for and the country you are
                from. You can check with the Andorran embassy or consulate in
                your home country for the most up-to-date information on the
                price of student visas.
                <br />
                <br />
                <span className="font-bold">
                  It is important to note that the validity and price of a
                  student visa for Andorra may also be affected by other
                  factors, such as your age, the length of your intended stay,
                  and the purpose of your visit. It is always best to check with
                  the Andorran embassy or consulate in your home country for the
                  most accurate and up-to-date information on the student visas
                  available in Andorra.
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

export default Andorra;
