const Manager = require("../lib/Manager");

describe("Can instanciate Manager instance and call all parameters/functions", () => {
  it("can instanciate Manager Instance", () => {
    const NewEmployee = new Manager();
    expect(typeof NewEmployee).toBe("object");
  });
  it("can set officeNumber of Manager", () => {
    const officeNumber = "234234232";
    const NewEmployee = new Manager("Nick", 1, "nick@gmai;.com", officeNumber);
    expect(NewEmployee.officeNumber).toBe(officeNumber);
  });
  it("can get role of employee", () => {
    const NewEmployee = new Manager("nick", 1, "Email", "The Villages");
    expect(NewEmployee.getRole()).toBe("Manager");
  });
});
