const Engineer = require("../lib/Engineer");

describe("Can instanciate Engineer instance and call all parameters/functions", () => {
  it("can instanciate Engineer Instance", () => {
    const NewEmployee = new Engineer();
    expect(typeof NewEmployee).toBe("object");
  });
  it("can set github of engineer", () => {
    const github = "msp4msps";
    const NewEmployee = new Engineer("Nick", 1, "nick@gmai;.com", github);
    expect(NewEmployee.github).toBe(github);
  });
  it("can return github engineer", () => {
    const github = "msp4msps";
    const NewEmployee = new Engineer("Nick", 1, "nick@gmai;.com", github);
    expect(NewEmployee.getGithub).toBe(github);
  });
  it("can get role of employee", () => {
    const NewEmployee = new Engineer("nick", 1, "Email", "msp4msps");
    expect(NewEmployee.getRole()).toBe("Engineer");
  });
});
