const poll = new Map();

const addOption = (option) => {
  if (poll.has(option)) return `Option "${option}" already exists.`;
  if (option === "") return "Option cannot be empty.";
  const voters = new Set();
  poll.set(option, voters);
  return `Option "${option}" added to the poll.`;
};

const vote = (option, voterId) => {
  if (!poll.has(option)) return `Option "${option}" does not exist.`;
  for (const [voteOpt, voters] of poll)
    if (voters.has(voterId))
      return `Voter ${voterId} has already voted for "${voteOpt}".`;
  poll.get(option).add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
};

const displayResults = () => {
  let msg = "Poll Results:";
  for (const [option, voters] of poll)
    msg += `\n${option}: ${voters.size} votes`;
  return msg;
};

console.log(addOption("Vietnam"), addOption("America"), addOption("Japan"));
console.log(vote("Vietnam", "001"), vote("China", "002"), vote("Japan", "001"));
console.log(displayResults());
