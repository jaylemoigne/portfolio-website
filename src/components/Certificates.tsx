const Certificates = () => {
  interface Certificate {
    certificateName: string;
    certificateDate: string;
    certificateCompany: string;
    certificateDescription: string;
    certificateLink: string;
  }
  const certificates: Certificate[] = [
    {
      certificateName: "Programming Foundations: Fundamentals",
      certificateDate: "Sep 09, 2024",
      certificateCompany: "Linkedin Learning",
      certificateDescription:
        "Course covers the fundamentals of programming - variables, data types, loops, appending strings etc.",
      certificateLink:
        "https://www.linkedin.com/learning/programming-foundations-fundamentals-3",
    },
    {
      certificateName: "Programming Foundations: Beyond the Fundamentals",
      certificateDate: "Sep 09, 2024",
      certificateCompany: "Linkedin Learning",
      certificateDescription:
        "Course covers content that goes beyond the fundamentals of programming - selection statements, classes, collections, arrays etc.",
      certificateLink:
        "https://www.linkedin.com/learning/programming-foundations-beyond-the-fundamentals",
    },
    {
      certificateName: ".NET Fundamentals",
      certificateDate: "Oct 06 2024",
      certificateCompany: "Great Learning",
      certificateDescription:
        "In an effort to expand my knowledge, I took this short course in .NET Fundamentals to better understand C# in the context of a framework. It covered variables/constants, type conversions, boxing and unboxing, operators and controlflow statements.",
      certificateLink: "https://olympus.mygreatlearning.com/courses/64366",
    },
  ];

  return (
    <div className="mb-24">
      <div className="custom-heading-v3 header text-[#FFF]">
        <h3>Certificates</h3>
      </div>
      <div className="flex flex-wrap justify-center text-white gap-8 ml-8 mr-8">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="certificate-container bg-slate-500 rounded p-8 flex-1"
          >
            <h3 className="font-bold text-lg">{certificate.certificateName}</h3>
            <div className="flex flex-row flex-wrap gap-2 p-1 ">
              <p className="italic">
                Completion Date: {certificate.certificateDate}
              </p>
              <p>|</p>
              <p className="italic">{certificate.certificateCompany}</p>
            </div>
            <p className="mb-4 mt-2">{certificate.certificateDescription}</p>
            <p className="text-sm">{certificate.certificateLink}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
