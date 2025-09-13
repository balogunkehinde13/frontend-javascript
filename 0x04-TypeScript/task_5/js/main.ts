// Step 1: Create MajorCredits interface with brand property
interface MajorCredits {
  credits: number;
  _brand: "major"; // Brand property for unique identification
}

// Step 2: Create MinorCredits interface with brand property
interface MinorCredits {
  credits: number;
  _brand: "minor"; // Brand property for unique identification
}

// Step 3: Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "major"
  };
}

// Step 4: Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "minor"
  };
}