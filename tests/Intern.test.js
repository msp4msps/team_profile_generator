const Intern = require("../lib/Engineer");

describe("Can instanciate Intern instance and call all parameters/functions", () => {
  it("can instanciate Intern Instance", () => {
    const NewEmployee = new Intern();
    expect(typeof NewEmployee).toBe("object");
  });
  it("can set school of intern", () => {
    const school = "The Villages";
    const NewEmployee = new Intern("Nick", 1, "nick@gmai;.com", school);
    expect(NewEmployee.school).toBe(school);
  });
  it("can return internschool", () => {
    const School = "The Villages";
    const NewEmployee = new Intern("Nick", 1, "nick@gmai;.com", School);
    expect(NewEmployee.getSchool).toBe(School);
  });
  it("can get role of employee", () => {
    const NewEmployee = new Intern("nick", 1, "Email", "The Villages");
    expect(NewEmployee.getRole()).toBe("Intern");
  });
});
