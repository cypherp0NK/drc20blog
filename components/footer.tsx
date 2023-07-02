import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 border-t px-6 py-10 lg:flex-row lg:justify-between lg:space-y-0 lg:p-16">
      <div className="space-y-2">
        <div className="flex items-center">
          <p className="ts-body-3 h-4 ml-auto text-gray-500 lg:ml-6"></p>
        </div>
        <p className="ts-body-3 text-gray-500">
          {/* <span className="text-gray-700">100% revenue shared</span> */}©
          2023 all rights reserved
        </p>
      </div>
      <div className="flex flex-col space-y-2 lg:items-end">
        <div className="flex space-x-6 py-1 lg:space-x-8">
          <a
            className="flex hover:opacity-50"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            href=""
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M21 7.5C21.5 15 16 21 9 21c-2.412 0-4.824-.323-6.716-1.23-.433-.207-.264-.785.215-.817C4.83 18.8 6.758 18.243 8 17 2.584 15.194 1.65 8.5 2.622 5.007c.114-.41.648-.412.863-.045 1.661 2.842 4.82 4.428 8.78 4.062a4.5 4.5 0 0 1 7.911-4.12l1.717-.246a.5.5 0 0 1 .487.772L21 7.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a
            className="flex hover:opacity-50"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            href=""
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M20.317 4.516a19.792 19.792 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.376-.444.865-.608 1.25a18.271 18.271 0 0 0-5.487 0 12.644 12.644 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.028C.533 9.192-.32 13.726.099 18.204a.082.082 0 0 0 .031.057 19.902 19.902 0 0 0 5.993 3.029.077.077 0 0 0 .084-.028 14.22 14.22 0 0 0 1.226-1.994c.021-.04.001-.09-.041-.106a13.109 13.109 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.29a.074.074 0 0 1 .078-.011c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.01c.12.098.245.197.372.291.044.033.04.1-.006.128-.598.35-1.22.645-1.873.892a.077.077 0 0 0-.041.106c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029 19.836 19.836 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.029ZM8.02 15.478c-1.182 0-2.157-1.086-2.157-2.42 0-1.332.956-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.419 0 1.333-.956 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.42 0-1.332.955-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.419 0 1.333-.946 2.419-2.157 2.419Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a
            className="flex hover:opacity-50"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mirror"
            href=""
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Zm-4.5 9.435C7.5 7.433 8.962 6 12 6c3.038 0 4.5 1.433 4.5 4.435v6.892a.677.677 0 0 1-.68.673H8.18a.677.677 0 0 1-.68-.673v-6.892Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-2 lg:gap-x-5">
          <a
            className="ts-body-3 text-gray-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href=""
          >
            Contact Us
          </a>
          <a
            className="ts-body-3 text-gray-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href=""
          >
            Docs
          </a>
          {/* <a
            className="ts-body-3 text-gray-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href=""
          >
            Audit Report
          </a> */}
          <a
            className="ts-body-3 text-gray-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href=""
          >
            Brand
          </a>
          <a
            className="ts-body-3 text-gray-500 hover:underline"
            href="/page/terms"
          >
            Terms
          </a>
          <a
            className="ts-body-3 text-gray-500 hover:underline"
            href="/page/privacy"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
    // <footer className="bg-neutral-50 border-t border-neutral-200">
    //   <Container>
    //     <div className="py-28 flex flex-col lg:flex-row items-center">
    //       {/* <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
    //         Statically Generated with Next.js.
    //       </h3> */}
    //       <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
    //         <a
    //           href=""
    //           className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
    //         ></a>
    //         <a href="" className="mx-3 font-bold hover:underline"></a>
    //       </div>
    //     </div>
    //   </Container>
    // </footer>
  );
};

export default Footer;
