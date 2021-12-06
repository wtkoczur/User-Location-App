import UserList from "../Components/User/UserList";
import User from "../Components/User/User";
import App from "../App";

import { shallow } from "enzyme";

it("Total users = 10", () => {
    const wrapper = shallow(<UserList />);
    expect(wrapper.find(User)).toHaveLength(10);
})