import Container from "react-bootstrap/Container";
import {
  FaLock,
  FaBoxOpen,
  FaUserFriends,
  FaUserSecret,
  FaGlobeAmericas,
  FaNewspaper,
  FaPhoneAlt,
  FaExclamation,
} from "react-icons/fa";
import "./PrivacyPage.css";
import Footer from "./Footer";

const PrivacyPage = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <Container>
          <p className="flex items-center text-[3rem] font-bold gap-[1.4rem] py-[5rem] px-[2rem] text-[#1e2e6e]">
            <div className="icons-bg">
              <FaExclamation />
            </div>
            Don't Forget
          </p>
          <p className="px-[6rem] text-[2.2rem]">
            Before going through our policy, don't forget that it is recommended
            that before making a decision and getting ready to go on a trip or
            vacation,{" "}
            <span className="font-bold">
              it is good to check the information consumed several times and at
              the same time in other reliable sources
            </span>
            , because the information presented can change very quickly in the
            world.
            <br />
            <br />
            <span className="font-bold">
              Therefore, we are not responsible
            </span>{" "}
            for problems that you may encounter upon departure or upon arrival
            due to the decisions taken and the lack of detailed information!
          </p>

          <p className="flex items-center text-[3rem] font-bold gap-[1.4rem] py-[5rem] px-[2rem] text-[#1e2e6e]">
            <div className="icons-bg">
              <FaLock />
            </div>
            Privacy Policy
          </p>
          <p className="px-[6rem] text-[2.2rem]">
            At VisaWizz, we value the privacy of our users and are committed to
            protecting their personal information. This privacy policy outlines
            the types of information we collect and how we use, share, and
            protect it.
          </p>
          <p className="flex items-center text-[3rem] font-bold gap-[1.4rem] py-[5rem] px-[2rem] text-[#1e2e6e]">
            <div className="icons-bg">
              <FaBoxOpen />
            </div>
            Information We Collect
          </p>
          <p className="px-[6rem] text-[2.2rem]">
            We may collect personal information such as your name, email
            address, and phone number when you sign up for an account or
            subscribe to our newsletter. We may also collect information about
            your location, device, and browsing activity when you access our
            website or use our mobile app.
          </p>
          <p className="flex items-center text-[3rem] font-bold gap-[1.4rem] py-[5rem] px-[2rem] text-[#1e2e6e]">
            <div className="icons-bg">
              <FaUserFriends />
            </div>
            Use of Information
          </p>
          <p className="px-[6rem] text-[2.2rem]">
            We use the information we collect to provide, maintain, and improve
            our services, as well as to communicate with you about your account
            and activities. We may also use your information to personalize your
            experience, offer personalized recommendations, and show you
            relevant advertising.
          </p>
          <p className="flex items-center text-[3rem] font-bold gap-[1.4rem] py-[5rem] px-[2rem] text-[#1e2e6e]">
            <div className="icons-bg">
              <FaGlobeAmericas />
            </div>
            Sharing of Information
          </p>
          <p className="px-[6rem] text-[2.2rem]">
            We may share your personal information with third parties for the
            purpose of providing our services, such as payment processors and
            delivery companies. We may also share your information with third
            parties for research and analytics purposes, or to comply with legal
            obligations.
          </p>
          <p className="flex items-center text-[3rem] font-bold gap-[1.4rem] py-[5rem] px-[2rem] text-[#1e2e6e]">
            <div className="icons-bg">
              <FaUserSecret />
            </div>
            Protection of Information
          </p>
          <p className="px-[6rem] text-[2.2rem]">
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. We use secure servers
            and encrypt the transmission of sensitive information, such as email
            account, used passwords and payment details.
          </p>
          <p className="flex items-center text-[3rem] font-bold gap-[1.4rem] py-[5rem] px-[2rem] text-[#1e2e6e]">
            <div className="icons-bg">
              <FaNewspaper />
            </div>
            Changes to This Policy
          </p>
          <p className="px-[6rem] text-[2.2rem]">
            We reserve the right to update this privacy policy at any time. Any
            changes will be effective immediately upon posting to this page. We
            encourage you to review this policy periodically to stay informed
            about our privacy practices.
          </p>
          <p className="flex items-center text-[3rem] font-bold gap-[1.4rem] py-[5rem] px-[2rem] text-[#1e2e6e]">
            <div className="icons-bg">
              <FaPhoneAlt />
            </div>
            Contact Us
          </p>
          <p className="px-[6rem] pb-[5rem] text-[2.2rem]">
            If you have any questions or concerns about our privacy policy,
            please contact us at our email:{" "}
            <span className="font-bold">contact@visawizz.com</span>.
          </p>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
