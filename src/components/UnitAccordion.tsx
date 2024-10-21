import { useState } from "react";

// Define the type for a unit
interface Unit {
  title: string;
  contentOne: string;
  contentTwo: string;
  contentThree: string;
  color: string; // Background color for each unit
}

const UnitAccordion = () => {
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  const units: Record<string, Unit> = {
    unit1: {
      title: "Mathematics for Computing",
      contentOne:
        "This unit took place in first semester, focused on University level Further Maths in relation to Computer Science. It covered set theory, vectors, vectors in the space, matrices and permutations. ",
      contentTwo:
        "Coursework included a set of 5 questions to be answered amongst a group of 5 students. With the work divided evenly there was a question for each topic, we all pulled our weight and contributed to each question equally.",
      contentThree: "",
      color: "rgb(51 65 85)",
    },
    unit2: {
      title: "Programming",
      contentOne:
        "This unit took place in first semester, it was a beginner friendly course in Java and programming fundamentals. It covered variables, iteration, arrays and loops, flow control, reading and writing into and out of files, collections and finally classes.",
      contentTwo:
        "Coursework included running tests and completing tasks related to the various topics listed above, these were completed weekly, this was paired with a 48-hour timed task, compiling all our skills into the development of a Banking System. ",
      contentThree:
        "This Banking System could create two different accounts, a typical bank account, or a savings account, both would have an ID, a total sum of the money in the account, and an ID to differentiate the savings account to a typical account. You could also make transactions between typical accounts, but savings accounts couldn’t. ",
      color: "rgb(51 65 85)",
    },
    unit3: {
      title: "Computer Fundamentals",
      contentOne:
        "This unit took place in first semester, it was focused on hardware and workings of computers. Detailing topics such as, PC parts – CPU, RAM etc, Cloud Computing, Binary and levels of programming languages. Coursework was to write an essay about Cloud Computing in general, advantages and disadvantages etc. ",
      contentTwo: "",
      contentThree: "",
      color: "rgb(51 65 85)",
    },
    unit4: {
      title: "Data Management & Databases",
      contentOne:
        "This unit took place in second semester, it was focused on databases and managing data. It covered mySQL, Oracle SQL, conceptual, logical and physical database models. As well as database theory, helping connect the query languages to logic.",
      contentTwo:
        "The coursework was marked separately but was a part of CiB, in the formed groups, as part of the brief, we needed to create an Incident Response System, designing UI, creating documentation etc. For the database side, we needed to create SQL queries to export business reports and manage the data for them. ",
      contentThree: "",
      color: "rgb(51 65 85)",
    },
  };

  const handleUnitClick = (unit: string) => {
    if (selectedUnit !== unit) {
      setSelectedUnit(unit);
    }
  };

  // Determine the background color based on the selected unit
  const backgroundColor = selectedUnit
    ? units[selectedUnit].color
    : "rgb(71 85 105)"; // Slate color for inactive state

  return (
    <div className="mt-4 flex flex-col ml-12 mr-12">
      <div className="flex flex-row flex-wrap">
        {Object.keys(units).map((unit) => (
          <div
            key={unit}
            className={`custom-subheading header flex-1 unit-accordion-heading ${
              selectedUnit === unit ? "active" : ""
            }`}
            onClick={() => handleUnitClick(unit)}
            style={{
              backgroundColor:
                selectedUnit === unit ? units[unit].color : "rgb(203 213 225)",
              color: selectedUnit === unit ? "white" : units[unit].color,
            }}
          >
            {units[unit].title}
          </div>
        ))}
      </div>

      <div
        className={`content-selection-display ${selectedUnit ? "active" : ""}`}
        style={{ backgroundColor }}
      >
        <h3 className="semibold text-gray-200 text-xl">
          {selectedUnit ? units[selectedUnit].title : "Select a Unit!"}
        </h3>
        <p className="text-gray-100 text-md mt-4">
          {selectedUnit
            ? units[selectedUnit].contentOne
            : "Please select a unit :)"}
        </p>
        <p className="text-gray-100 text-md mt-4">
          {selectedUnit ? units[selectedUnit].contentTwo : ""}
        </p>
        <p className="text-gray-100 text-md mt-4">
          {selectedUnit ? units[selectedUnit].contentThree : ""}
        </p>
      </div>
    </div>
  );
};

export default UnitAccordion;
