import {UserController} from "./controller/UserController";
import {HomeController} from "./controller/HomeController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "get",
    route: "/home",
    controller: HomeController,
    action: "home"
}, {
    method: "get",
    route: "/foo",
    controller: HomeController,
    action: "foo"
},

];