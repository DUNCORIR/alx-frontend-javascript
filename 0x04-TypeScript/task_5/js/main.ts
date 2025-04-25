// Interfaces with brand properties
interface MajorCredits {
  credits: number;
  brand: 'Major'; // Unique identifier
}

interface MinorCredits {
  credits: number;
  brand: 'Minor'; // Unique identifier
}

// Sum functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major'
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor'
  };
}

// Export for testing (optional but recommended)
export { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits };